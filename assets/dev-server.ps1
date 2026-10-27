# Tiny local static server for preview only. Not used in production.
$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$prefix = "http://127.0.0.1:8765/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Output "Serving $root at $prefix"
$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".txt"  = "text/plain; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".ico"  = "image/x-icon"
}
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "index.html" }
  $path = [System.IO.Path]::GetFullPath((Join-Path $root $rel))
  if (-not $path.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
    $ctx.Response.StatusCode = 403
    $ctx.Response.Close()
    continue
  }
  if (-not (Test-Path $path -PathType Leaf)) {
    $ctx.Response.StatusCode = 404
    $ctx.Response.Close()
    continue
  }
  $ext = [System.IO.Path]::GetExtension($path).ToLowerInvariant()
  $bytes = [System.IO.File]::ReadAllBytes($path)
  $ctx.Response.ContentType = $(if ($mime.ContainsKey($ext)) { $mime[$ext] } else { "application/octet-stream" })
  $ctx.Response.ContentLength64 = $bytes.Length
  $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  $ctx.Response.Close()
}
