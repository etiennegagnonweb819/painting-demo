/* ============================================================
   YourCompany demo site
   Edit copy, projects, reviews, FAQ, and colours in the
   CONTENT block below. No server, no paid APIs.
   ============================================================ */

const CONTENT = {
  contact: {
    phoneDisplay: "(819) 555-0142",
    phoneTel: "+18195550142",
    email: "quotes@yourcompany.ca",
    company: "YourCompany"
  },

  services: [
    {
      id: "interior",
      icon: "wall",
      price: { en: "From $2.40 / sq. ft. (placeholder)", fr: "À partir de 2,40 $ / pi² (indicatif)" },
      en: {
        title: "Interior walls and ceilings",
        short: "Living rooms, bedrooms, hallways, and full-home interiors.",
        more: "Prep, prime, and two finish coats on walls and ceilings. Sample starting price — confirm on site."
      },
      fr: {
        title: "Murs et plafonds intérieurs",
        short: "Salons, chambres, corridors et intérieurs complets.",
        more: "Préparation, apprêt et deux couches de fini. Prix de départ échantillon — à confirmer sur place."
      }
    },
    {
      id: "buildings",
      icon: "building",
      price: { en: "From $4,800 / floor (placeholder)", fr: "À partir de 4 800 $ / étage (indicatif)" },
      en: {
        title: "Commercial buildings",
        short: "Common areas, corridors, and tenant-ready interiors.",
        more: "Scheduled around building hours. Interior commercial work only."
      },
      fr: {
        title: "Immeubles commerciaux",
        short: "Aires communes, corridors et locaux prêts à louer.",
        more: "Horaires adaptés à l’immeuble. Travaux commerciaux intérieurs seulement."
      }
    },
    {
      id: "offices",
      icon: "desk",
      price: { en: "From $1,900 / suite (placeholder)", fr: "À partir de 1 900 $ / suite (indicatif)" },
      en: {
        title: "Offices",
        short: "Open-plan, private offices, and meeting rooms.",
        more: "Low-odour products when crews work around staff. Evenings available on request."
      },
      fr: {
        title: "Bureaux",
        short: "Aires ouvertes, bureaux privés et salles de réunion.",
        more: "Produits à faible odeur si l’équipe travaille pendant les heures de bureau. Soirs sur demande."
      }
    },
    {
      id: "condos",
      icon: "condo",
      price: { en: "From $2,200 / unit (placeholder)", fr: "À partir de 2 200 $ / unité (indicatif)" },
      en: {
        title: "Commercial condos and apartments",
        short: "Rental units, lobbies, and commercial condo interiors.",
        more: "We coordinate with building rules and elevator bookings. Walls and ceilings only."
      },
      fr: {
        title: "Condos et appartements commerciaux",
        short: "Logements locatifs, halls et intérieurs de condos commerciaux.",
        more: "On s’ajuste aux règlements de l’immeuble et aux réservations d’ascenseur. Murs et plafonds seulement."
      }
    },
    {
      id: "prep",
      icon: "prep",
      price: { en: "From $350 (placeholder)", fr: "À partir de 350 $ (indicatif)" },
      en: {
        title: "Surface preparation",
        short: "Filling, sanding, caulking, and stain blocking.",
        more: "Includes crayon, scuffs, and everyday wear so the new colour lays down evenly."
      },
      fr: {
        title: "Préparation des surfaces",
        short: "Rebouchement, sablage, calfeutrage et bloqueur de taches.",
        more: "Inclut crayons, éraflures et usure courante pour un fini uniforme."
      }
    },
    {
      id: "colour",
      icon: "palette",
      price: { en: "Included with most quotes", fr: "Inclus dans la plupart des soumissions" },
      en: {
        title: "Colour consultation",
        short: "Help choosing palettes that work in your light.",
        more: "We bring samples and test patches. Final colour is always confirmed with you before we open a can."
      },
      fr: {
        title: "Conseil couleur",
        short: "On vous aide à choisir des palettes qui collent à votre lumière.",
        more: "Échantillons et tests sur le mur. La couleur finale se confirme avec vous avant d’ouvrir un pot."
      }
    }
  ],

  projects: [
    { id: 1, cat: "interior", wall: "#e8dcc8", loc: "Hull",
      en: { title: "Living room refresh", desc: "Sample project: walls and ceiling in a family living room. Crayon marks and scuffs fully prepped." },
      fr: { title: "Salon rafraîchi", desc: "Projet échantillon : murs et plafond d’un salon familial. Crayons et éraflures bien préparés." } },
    { id: 2, cat: "interior", wall: "#f3eee6", loc: "Aylmer",
      en: { title: "Hallway and stairs", desc: "Sample project: high-traffic interior walls with scuffed baseboards rebuilt in paint, not replaced." },
      fr: { title: "Corridor et escalier", desc: "Projet échantillon : murs très passants et plinthes éraflées, reprises en peinture." } },
    { id: 3, cat: "commercial", wall: "#d9e2ea", loc: "Gatineau centre",
      en: { title: "Office suite", desc: "Sample project: open office and two meeting rooms, scheduled after hours." },
      fr: { title: "Suite de bureaux", desc: "Projet échantillon : aire ouverte et deux salles de réunion, travaux en soirée." } },
    { id: 4, cat: "commercial", wall: "#ece7dc", loc: "Plateau",
      en: { title: "Condo lobby", desc: "Sample project: commercial condo lobby and mail room interiors." },
      fr: { title: "Hall de condo", desc: "Projet échantillon : hall et salle de courrier d’un condo commercial." } },
    { id: 5, cat: "interior", wall: "#e4efe6", loc: "Buckingham",
      en: { title: "Bedrooms, two rooms", desc: "Sample project: two bedrooms and a shared ceiling line, low-odour finish." },
      fr: { title: "Deux chambres", desc: "Projet échantillon : deux chambres et un plafond continu, fini à faible odeur." } },
    { id: 6, cat: "interior", wall: "#f7f1e8", loc: "Chelsea",
      en: { title: "Open-concept walls", desc: "Sample project: living-dining walls and ceiling only — no cabinet work." },
      fr: { title: "Aire ouverte", desc: "Projet échantillon : murs et plafond du salon-salle à manger seulement — pas d’armoires." } },
    { id: 7, cat: "commercial", wall: "#e8e4f0", loc: "Masson-Angers",
      en: { title: "Clinic waiting room", desc: "Sample project: waiting room and corridor in a commercial clinic." },
      fr: { title: "Salle d’attente de clinique", desc: "Projet échantillon : salle d’attente et corridor d’une clinique commerciale." } },
    { id: 8, cat: "interior", wall: "#f0ebe3", loc: "Cantley",
      en: { title: "Cottage interior", desc: "Sample project: main floor walls in a year-round home near Cantley." },
      fr: { title: "Intérieur de cottage", desc: "Projet échantillon : murs du rez-de-chaussée d’une résidence près de Cantley." } }
  ],

  process: [
    { en: { title: "Request a quote", body: "Tell us the rooms, timing, and whether the property is residential or commercial." },
      fr: { title: "Demande de soumission", body: "Dites-nous les pièces, le timing, et si c’est résidentiel ou commercial." } },
    { en: { title: "Site visit / estimate", body: "We walk the space, check prep, and leave a clear estimate. Placeholder process for this demo." },
      fr: { title: "Visite sur place et estimation", body: "On visite, on évalue la préparation, puis on laisse une estimation claire. Démarche échantillon." } },
    { en: { title: "Painting", body: "Furniture is shifted or covered, rooms are prepped, then painted in planned coats." },
      fr: { title: "Peinture", body: "On déplace ou protège les meubles, on prépare, puis on applique les couches prévues." } },
    { en: { title: "Final walkthrough", body: "We review the finish with you, touch up, and leave the site clean." },
      fr: { title: "Visite finale", body: "On revoit le fini avec vous, on reprend les retouches, et on laisse les lieux propres." } }
  ],

  colours: [
    { hex: "#f4f1ea", en: "Cloud White", fr: "Blanc nuage" },
    { hex: "#f3ead6", en: "Soft Ivory", fr: "Ivoire doux" },
    { hex: "#e4d3b4", en: "Warm Sand", fr: "Sable chaud" },
    { hex: "#c9d4c0", en: "Sage Green", fr: "Vert sauge" },
    { hex: "#c5d0dc", en: "Dusty Blue", fr: "Bleu poussière" },
    { hex: "#d8c4b8", en: "Clay Beige", fr: "Beige argile" },
    { hex: "#c97b63", en: "Terracotta", fr: "Terre cuite" },
    { hex: "#e4c7c7", en: "Blush", fr: "Rose poudré" },
    { hex: "#3f3f3f", en: "Charcoal", fr: "Charbon" },
    { hex: "#6b5848", en: "Umber", fr: "Ombre naturelle" }
  ],

  reviews: [
    { stars: 5, name: "M. Tremblay",
      en: "Sample review: the crew treated our Hull living room with care and the white finish hid every crayon mark.",
      fr: "Avis échantillon : l’équipe a soigné notre salon à Hull et le blanc a fait disparaître tous les crayons." },
    { stars: 5, name: "S. Benoit",
      en: "Sample review: our Aylmer office was painted over a weekend. Fictional client for this demo.",
      fr: "Avis échantillon : nos bureaux à Aylmer ont été peints la fin de semaine. Client fictif pour la démo." },
    { stars: 4, name: "A. Lavoie",
      en: "Sample review: clear estimate, tidy site, Chelsea home interior. Not a real Google review.",
      fr: "Avis échantillon : estimation claire, chantier propre, intérieur à Chelsea. Pas un vrai avis Google." },
    { stars: 5, name: "Clinique du Plateau (sample)",
      en: "Sample review: commercial waiting room done after hours. Placeholder only.",
      fr: "Avis échantillon : salle d’attente commerciale peinte en soirée. Texte indicatif seulement." }
  ],

  faq: [
    { en: { q: "How do quotes work?", a: "Fill in the form. Nothing is emailed automatically — you get a summary to send, copy, or download. A real company would then confirm a site visit." },
      fr: { q: "Comment fonctionnent les soumissions ?", a: "Remplissez le formulaire. Rien n’est envoyé tout seul : vous obtenez un résumé à courrieller, copier ou télécharger. Une vraie entreprise confirmerait ensuite une visite." } },
    { en: { q: "How long does a job take?", a: "A typical interior room is often one to two days once prep is done. Commercial floors depend on size and access. Timing here is a sample range only." },
      fr: { q: "Combien de temps durent les travaux ?", a: "Une pièce intérieure typique prend souvent un à deux jours une fois la préparation faite. Un étage commercial dépend de la taille et de l’accès. Durées indicatives seulement." } },
    { en: { q: "Do you move furniture?", a: "Yes — light furniture is shifted and covered. Heavy built-ins stay in place and are protected. We do not refinish cabinets." },
      fr: { q: "Est-ce que vous déplacez les meubles ?", a: "Oui : les meubles légers sont déplacés et protégés. Les rangements fixes restent en place, bien couverts. On ne refinish pas les armoires." } },
    { en: { q: "What paint do you use?", a: "Sample answer: quality interior latex suited to each room (washable in hallways, low-odour in occupied offices). Brand to be confirmed with the real company." },
      fr: { q: "Quelle peinture utilisez-vous ?", a: "Réponse échantillon : latex intérieur de qualité, lavable dans les corridors, à faible odeur dans les bureaux occupés. Marque à confirmer avec l’entreprise réelle." } },
    { en: { q: "What is the service area?", a: "Gatineau and surrounding areas: Hull, Aylmer, Buckingham, Masson-Angers, Chelsea, Cantley, and nearby." },
      fr: { q: "Quelle est la zone de service ?", a: "Gatineau et les environs : Hull, Aylmer, Buckingham, Masson-Angers, Chelsea, Cantley, et les alentours." } },
    { en: { q: "Do you take commercial work?", a: "Yes — commercial buildings, offices, and commercial condos or apartments. Interior only. No exterior painting." },
      fr: { q: "Faites-vous le commercial ?", a: "Oui — immeubles commerciaux, bureaux, et condos ou appartements commerciaux. Intérieur seulement. Pas de peinture extérieure." } }
  ]
};

const I18N = {
  en: {
    "a11y.skip": "Skip to content",
    "a11y.menu": "Open menu",
    "topbar.demo": "Demo site — sample content only. Replace names, photos, reviews, and contact details with your own.",
    "nav.services": "Services",
    "nav.beforeAfter": "Before / After",
    "nav.work": "Our work",
    "nav.process": "Process",
    "nav.reviews": "Reviews",
    "nav.faq": "FAQ",
    "nav.quote": "Get a quote",
    "cta.quote": "Get a quote",
    "cta.work": "See our work",
    "hero.eyebrow": "Gatineau and surrounding areas",
    "hero.title": "Interior and commercial painting in Gatineau and surrounding areas",
    "hero.sub": "Clean, durable finishes for homes, offices, and commercial condos — from Hull to Chelsea and beyond.",
    "stats.years": "years",
    "stats.projects": "projects",
    "stats.satisfied": "satisfied clients",
    "stats.response": "response time",
    "services.eyebrow": "What we paint",
    "services.title": "Interior and commercial painting services",
    "services.sub": "Homes, offices, and commercial buildings — no exterior work, no cabinet refinishing. Tap a card for details.",
    "ba.eyebrow": "Before / after",
    "ba.title": "From crayon walls to a clean white finish",
    "ba.sub": "Sample photos — drag the slider. Replace these images in assets/images/ with real job photos later.",
    "ba.before": "Before",
    "ba.after": "After",
    "ba.beforeAlt": "Sample before: kids’ crayon drawings, scuffs, and worn baseboards",
    "ba.afterAlt": "Sample after: the same room painted a flawless white",
    "ba.handle": "Before and after slider",
    "projects.eyebrow": "Portfolio",
    "projects.title": "Completed projects",
    "projects.sample": "Sample projects for this demo — not real client jobs. Replace with your own photos and descriptions.",
    "projects.all": "All",
    "projects.interior": "Interior",
    "projects.commercial": "Commercial",
    "projects.sampleBadge": "Sample",
    "process.eyebrow": "How it works",
    "process.title": "Four clear steps",
    "colour.eyebrow": "Colour preview",
    "colour.title": "Try a wall colour",
    "colour.sub": "Tap a swatch to preview it on the wall. Names are samples — confirm final colours with a fan deck on site.",
    "reviews.eyebrow": "Kind words",
    "reviews.title": "Sample reviews",
    "reviews.sample": "These are fictional sample reviews for the demo. They are not Google reviews and do not represent real clients.",
    "faq.eyebrow": "Questions",
    "faq.title": "FAQ",
    "quote.eyebrow": "Start here",
    "quote.title": "Request a quote",
    "quote.sub": "Nothing is sent to a server. We generate a summary you can email, copy, or download.",
    "form.name": "Name",
    "form.phone": "Phone",
    "form.email": "Email",
    "form.service": "Service type",
    "form.servicePlaceholder": "Select a service",
    "form.property": "Property type",
    "form.propertyPlaceholder": "Select one",
    "form.residential": "Residential",
    "form.commercial": "Commercial",
    "form.area": "Area / town",
    "form.desc": "Project description",
    "form.lang": "Language preference",
    "form.submit": "Generate quote summary",
    "form.errRequired": "This field is required.",
    "form.errEmail": "Enter a valid email.",
    "form.errPhone": "Enter a phone number (819 area code is typical for this demo).",
    "success.title": "Summary ready",
    "success.lead": "This is a sendable outline generated in your browser. It is not a formal contract.",
    "success.email": "Email",
    "success.copy": "Copy",
    "success.download": "Download .txt",
    "success.copied": "Copied to clipboard.",
    "footer.blurb": "Interior and commercial painting for residential and commercial properties in Gatineau and surrounding areas.",
    "footer.demo": "Placeholder contact details for this demo.",
    "footer.areaTitle": "Service area",
    "footer.area": "Gatineau and surrounding areas — Hull, Aylmer, Buckingham, Masson-Angers, Chelsea, Cantley, and nearby.",
    "footer.contactTitle": "Contact",
    "footer.linksTitle": "Services",
    "footer.note": "Demo content throughout. No exterior painting. No cabinet refinishing."
  },
  fr: {
    "a11y.skip": "Aller au contenu",
    "a11y.menu": "Ouvrir le menu",
    "topbar.demo": "Site démo — contenu échantillon seulement. Remplacez les noms, photos, avis et coordonnées par les vôtres.",
    "nav.services": "Services",
    "nav.beforeAfter": "Avant / après",
    "nav.work": "Réalisations",
    "nav.process": "Étapes",
    "nav.reviews": "Avis",
    "nav.faq": "FAQ",
    "nav.quote": "Demander une soumission",
    "cta.quote": "Demander une soumission",
    "cta.work": "Voir nos réalisations",
    "hero.eyebrow": "Gatineau et les environs",
    "hero.title": "Peinture intérieure et commerciale à Gatineau et dans les environs",
    "hero.sub": "Des finis propres et durables pour résidences, bureaux et condos commerciaux — de Hull à Chelsea et plus loin encore.",
    "stats.years": "ans",
    "stats.projects": "projets",
    "stats.satisfied": "de clients satisfaits",
    "stats.response": "de délai de réponse",
    "services.eyebrow": "Ce qu’on peint",
    "services.title": "Peinture intérieure et commerciale",
    "services.sub": "Résidences, bureaux et immeubles commerciaux — pas d’extérieur, pas de refinish d’armoires. Touchez une carte pour les détails.",
    "ba.eyebrow": "Avant / après",
    "ba.title": "Des murs crayonnés à un blanc impeccable",
    "ba.sub": "Photos échantillons — glissez le curseur. Remplacez plus tard les fichiers dans assets/images/ par de vraies photos.",
    "ba.before": "Avant",
    "ba.after": "Après",
    "ba.beforeAlt": "Échantillon avant : dessins au crayon, éraflures et plinthes usées",
    "ba.afterAlt": "Échantillon après : la même pièce peinte d’un blanc impeccable",
    "ba.handle": "Curseur avant et après",
    "projects.eyebrow": "Portfolio",
    "projects.title": "Projets réalisés",
    "projects.sample": "Projets échantillons pour la démo — pas de vrais chantiers clients. À remplacer par vos photos et textes.",
    "projects.all": "Tous",
    "projects.interior": "Intérieur",
    "projects.commercial": "Commercial",
    "projects.sampleBadge": "Échantillon",
    "process.eyebrow": "La démarche",
    "process.title": "Quatre étapes claires",
    "colour.eyebrow": "Aperçu couleur",
    "colour.title": "Essayez une couleur de mur",
    "colour.sub": "Touchez un échantillon pour le voir sur le mur. Noms indicatifs — confirmez toujours la couleur sur place.",
    "reviews.eyebrow": "Quelques mots",
    "reviews.title": "Avis échantillons",
    "reviews.sample": "Avis fictifs pour la démo. Ce ne sont pas des avis Google et ils ne représentent pas de vrais clients.",
    "faq.eyebrow": "Questions",
    "faq.title": "FAQ",
    "quote.eyebrow": "Pour commencer",
    "quote.title": "Demander une soumission",
    "quote.sub": "Rien n’est envoyé à un serveur. On génère un résumé que vous pouvez courrieller, copier ou télécharger.",
    "form.name": "Nom",
    "form.phone": "Téléphone",
    "form.email": "Courriel",
    "form.service": "Type de service",
    "form.servicePlaceholder": "Choisissez un service",
    "form.property": "Type de propriété",
    "form.propertyPlaceholder": "Choisissez",
    "form.residential": "Résidentiel",
    "form.commercial": "Commercial",
    "form.area": "Secteur / ville",
    "form.desc": "Description du projet",
    "form.lang": "Langue préférée",
    "form.submit": "Générer le résumé",
    "form.errRequired": "Ce champ est obligatoire.",
    "form.errEmail": "Entrez un courriel valide.",
    "form.errPhone": "Entrez un numéro de téléphone (indicatif 819 pour cette démo).",
    "success.title": "Résumé prêt",
    "success.lead": "C’est un canevas généré dans votre navigateur. Ce n’est pas un contrat.",
    "success.email": "Courriel",
    "success.copy": "Copier",
    "success.download": "Télécharger .txt",
    "success.copied": "Copié dans le presse-papiers.",
    "footer.blurb": "Peinture intérieure et commerciale pour propriétés résidentielles et commerciales à Gatineau et dans les environs.",
    "footer.demo": "Coordonnées fictives pour cette démo.",
    "footer.areaTitle": "Zone de service",
    "footer.area": "Gatineau et les environs — Hull, Aylmer, Buckingham, Masson-Angers, Chelsea, Cantley, et les alentours.",
    "footer.contactTitle": "Contact",
    "footer.linksTitle": "Services",
    "footer.note": "Contenu démo partout. Pas de peinture extérieure. Pas de refinish d’armoires."
  }
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = localStorage.getItem("yc-lang") === "fr" ? "fr" : "en";
let projectFilter = "all";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function t(key) {
  return I18N[lang][key] || I18N.en[key] || key;
}

function applyStaticI18n() {
  $$("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  $$("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
  $$("[data-i18n-alt]").forEach((el) => {
    el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
  });
  document.documentElement.lang = lang;
  document.title = lang === "fr"
    ? "YourCompany — Peinture intérieure et commerciale | Gatineau"
    : "YourCompany — Interior & commercial painting | Gatineau";
  $$(".lang-btn").forEach((btn) => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", String(on));
  });
}

function iconSvg(name) {
  const icons = {
    wall: '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 14h16" stroke="currentColor" stroke-width="2"/>',
    building: '<path d="M5 20V6h14v14M9 20v-6h6v6M8 9h2M14 9h2M8 13h2M14 13h2" fill="none" stroke="currentColor" stroke-width="2"/>',
    desk: '<path d="M4 12h16v8H4zM4 12V8h16v4M8 20v-4h8v4" fill="none" stroke="currentColor" stroke-width="2"/>',
    condo: '<path d="M4 20V8l8-4 8 4v12M10 20v-6h4v6M9 11h2M13 11h2" fill="none" stroke="currentColor" stroke-width="2"/>',
    prep: '<path d="M5 19l9-9 4 4-9 9H5v-4zM13 9l3-3 3 3-3 3" fill="none" stroke="currentColor" stroke-width="2"/>',
    palette: '<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="10" r="1.2"/><circle cx="13" cy="9" r="1.2"/><circle cx="15" cy="13" r="1.2"/>'
  };
  return `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${icons[name] || ""}</svg>`;
}

function renderMarquee() {
  const track = $("[data-marquee]");
  const items = lang === "fr"
    ? ["Gatineau et les environs", "Peinture intérieure", "Intérieurs commerciaux"]
    : ["Gatineau and surrounding areas", "Interior painting", "Commercial interiors"];
  const row = items.map((item) => `<span class="marquee-item">${item}</span>`).join("");
  track.innerHTML = row + row;
}

function renderServices() {
  const root = $("[data-services]");
  root.innerHTML = CONTENT.services.map((s) => `
    <button type="button" class="service-card" data-service="${s.id}">
      <div class="service-icon">${iconSvg(s.icon)}</div>
      <h3>${s[lang].title}</h3>
      <p>${s[lang].short}</p>
      <p class="service-price">${s.price[lang]}</p>
      <p class="service-more">${s[lang].more}</p>
    </button>
  `).join("");
  root.onclick = (e) => {
    const card = e.target.closest(".service-card");
    if (!card) return;
    const already = card.classList.contains("is-open");
    $$(".service-card", root).forEach((c) => c.classList.remove("is-open"));
    if (!already) card.classList.add("is-open");
  };
}

function renderProjects() {
  const root = $("[data-projects]");
  const items = CONTENT.projects.filter((p) => projectFilter === "all" || p.cat === projectFilter);
  root.innerHTML = items.map((p) => `
    <article class="project-card reveal">
      <div class="project-visual" style="--wall:${p.wall}"></div>
      <span class="badge">${t("projects.sampleBadge")} · ${t("projects." + p.cat)}</span>
      <h3>${p[lang].title}</h3>
      <p class="meta">${p.loc}</p>
      <p>${p[lang].desc}</p>
    </article>
  `).join("");
}

function renderProcess() {
  $("[data-process]").innerHTML = CONTENT.process.map((step) => `
    <li class="process-step reveal">
      <h3>${step[lang].title}</h3>
      <p>${step[lang].body}</p>
    </li>
  `).join("");
}

function renderReviews() {
  $("[data-reviews]").innerHTML = CONTENT.reviews.map((r) => `
    <article class="review-card reveal">
      <p class="stars" aria-label="${r.stars} / 5">${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}</p>
      <p>${r[lang]}</p>
      <p class="meta">— ${r.name}</p>
    </article>
  `).join("");
}

function renderFaq() {
  $("[data-faq]").innerHTML = CONTENT.faq.map((item, i) => `
    <div class="faq-item">
      <button type="button" id="faq-btn-${i}" aria-expanded="false" aria-controls="faq-panel-${i}">${item[lang].q}</button>
      <div class="faq-body" id="faq-panel-${i}">${item[lang].a}</div>
    </div>
  `).join("");
  $("[data-faq]").onclick = (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const item = btn.parentElement;
    const open = item.classList.contains("is-open");
    $$(".faq-item").forEach((el) => {
      el.classList.remove("is-open");
      $("button", el).setAttribute("aria-expanded", "false");
    });
    if (!open) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  };
}

function renderSwatches() {
  const root = $("[data-swatches]");
  root.innerHTML = CONTENT.colours.map((c, i) => `
    <button type="button" class="swatch${i === 0 ? " is-active" : ""}" style="background:${c.hex}" data-hex="${c.hex}" data-index="${i}" aria-label="${c[lang]}"></button>
  `).join("");
  setWall(0);
  root.onclick = (e) => {
    const btn = e.target.closest(".swatch");
    if (!btn) return;
    setWall(Number(btn.dataset.index));
  };
}

function setWall(index) {
  const c = CONTENT.colours[index];
  $("#room-wall").style.background = c.hex;
  $("[data-colour-name]").textContent = c[lang];
  $$(".swatch").forEach((s, i) => s.classList.toggle("is-active", i === index));
}

function fillServiceSelect() {
  const select = $("#q-service");
  const current = select.value;
  select.innerHTML = `<option value="">${t("form.servicePlaceholder")}</option>` +
    CONTENT.services.map((s) => `<option value="${s.id}">${s[lang].title}</option>`).join("");
  if ([...select.options].some((o) => o.value === current)) select.value = current;
}

function setLanguage(next) {
  lang = next;
  localStorage.setItem("yc-lang", lang);
  applyStaticI18n();
  renderMarquee();
  renderServices();
  renderProjects();
  renderProcess();
  renderReviews();
  renderFaq();
  renderSwatches();
  fillServiceSelect();
  observeReveals();
  const pref = $("#q-lang");
  if (pref) pref.value = lang;
  if (!$("#quote-success").hidden) {
    $("#quote-summary").textContent = buildSummary(lastFormData);
    wireMailto(lastFormData);
  }
}

/* ---------- Before / after slider ---------- */
function setupSlider() {
  const slider = $("#ba-slider");
  const handle = $(".ba-handle", slider);

  const setPos = (clientX) => {
    const rect = slider.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.min(96, Math.max(4, pct));
    slider.style.setProperty("--pos", pct + "%");
    handle.setAttribute("aria-valuenow", String(Math.round(pct)));
  };

  slider.addEventListener("pointerdown", (e) => {
    slider.setPointerCapture(e.pointerId);
    setPos(e.clientX);
  });
  slider.addEventListener("pointermove", (e) => {
    if (!slider.hasPointerCapture(e.pointerId)) return;
    setPos(e.clientX);
  });

  handle.addEventListener("keydown", (e) => {
    const now = parseFloat(getComputedStyle(slider).getPropertyValue("--pos")) || 56;
    const rect = slider.getBoundingClientRect();
    if (e.key === "ArrowLeft") setPos(rect.left + ((now - 4) / 100) * rect.width);
    if (e.key === "ArrowRight") setPos(rect.left + ((now + 4) / 100) * rect.width);
  });
}

/* ---------- Quote form (client-side only) ---------- */
let lastFormData = null;

function validateForm(data) {
  const errors = {};
  const required = ["name", "phone", "email", "service", "property", "area", "description"];
  required.forEach((key) => {
    if (!String(data[key] || "").trim()) errors[key] = t("form.errRequired");
  });
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = t("form.errEmail");
  if (data.phone && !/[0-9]{7,}/.test(data.phone.replace(/\D/g, ""))) errors.phone = t("form.errPhone");
  return errors;
}

function showErrors(errors) {
  $$(".field").forEach((field) => {
    const input = $("input, select, textarea", field);
    if (!input) return;
    const key = input.name;
    const msg = $("[data-error-for='" + key + "']", field);
    field.classList.toggle("is-invalid", Boolean(errors[key]));
    if (msg) msg.textContent = errors[key] || "";
    input.setAttribute("aria-invalid", errors[key] ? "true" : "false");
  });
}

function serviceLabel(id) {
  const s = CONTENT.services.find((x) => x.id === id);
  return s ? s[lang].title : id;
}

function propertyLabel(value) {
  return value === "commercial" ? t("form.commercial") : t("form.residential");
}

function buildSummary(data) {
  const svc = serviceLabel(data.service);
  const prop = propertyLabel(data.property);
  const prefLabel = data.langPref === "fr"
    ? (lang === "fr" ? "Français" : "French")
    : (lang === "fr" ? "Anglais" : "English");
  const lines = lang === "fr"
    ? [
        "SOUMISSION — ÉBAUCHE (démo)",
        "Entreprise : " + CONTENT.contact.company,
        "Rien n’a été envoyé à un serveur.",
        "",
        "Nom : " + data.name,
        "Téléphone : " + data.phone,
        "Courriel : " + data.email,
        "Service : " + svc,
        "Propriété : " + prop,
        "Secteur : " + data.area,
        "Langue préférée : " + prefLabel,
        "",
        "Description :",
        data.description,
        "",
        "Portée : peinture intérieure / commerciale seulement.",
        "Exclusions : peinture extérieure, refinish d’armoires.",
        "Prochaine étape : envoyer ce résumé à " + CONTENT.contact.email + " ou appeler " + CONTENT.contact.phoneDisplay + ".",
        "Ceci n’est pas un prix final ni un contrat."
      ]
    : [
        "QUOTE SUMMARY — DRAFT (demo)",
        "Company: " + CONTENT.contact.company,
        "Nothing was sent to a server.",
        "",
        "Name: " + data.name,
        "Phone: " + data.phone,
        "Email: " + data.email,
        "Service: " + svc,
        "Property: " + prop,
        "Area: " + data.area,
        "Language preference: " + prefLabel,
        "",
        "Description:",
        data.description,
        "",
        "Scope: interior / commercial painting only.",
        "Exclusions: exterior painting, cabinet refinishing.",
        "Next step: send this summary to " + CONTENT.contact.email + " or call " + CONTENT.contact.phoneDisplay + ".",
        "This is not a final price or a contract."
      ];
  return lines.join("\n");
}

function wireMailto(data) {
  const subject = lang === "fr"
    ? "Demande de soumission — " + data.name
    : "Quote request — " + data.name;
  const body = buildSummary(data);
  $("#quote-email").href =
    "mailto:" + CONTENT.contact.email +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
}

function setupForm() {
  $("#quote-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const errors = validateForm(data);
    showErrors(errors);
    if (Object.keys(errors).length) {
      const first = $(".is-invalid input, .is-invalid select, .is-invalid textarea");
      if (first) first.focus();
      return;
    }
    lastFormData = data;
    const summary = buildSummary(data);
    const panel = $("#quote-success");
    $("#quote-summary").textContent = summary;
    wireMailto(data);
    panel.hidden = false;
    if (!reduceMotion) {
      panel.style.animation = "none";
      panel.offsetHeight;
      panel.style.animation = "";
    }
    panel.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
  });

  $("#quote-copy").addEventListener("click", async () => {
    const text = $("#quote-summary").textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    const fb = $("#copy-feedback");
    fb.hidden = false;
    fb.textContent = t("success.copied");
  });

  $("#quote-download").addEventListener("click", () => {
    const blob = new Blob([$("#quote-summary").textContent], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "yourcompany-quote-summary.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  });
}

/* ---------- Scroll progress, header nav, counters, reveal ---------- */
function setupNav() {
  const toggle = $(".menu-toggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $("#site-nav").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function setupProgress() {
  const bar = $(".scroll-progress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = pct + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function animateCounter(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  if (reduceMotion) {
    el.textContent = target + suffix;
    return;
  }
  const start = performance.now();
  const duration = 1100;
  const tick = (now) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

let revealObserver;

function resetCounters() {
  $$(".counter").forEach((el) => {
    el.textContent = "0" + (el.dataset.suffix || "");
  });
}

function playCounters() {
  $$(".counter").forEach((el) => animateCounter(el));
}

function observeReveals() {
  const nodes = $$(".reveal");
  if (reduceMotion) {
    nodes.forEach((el) => el.classList.add("is-in"));
    $$(".counter").forEach((el) => {
      el.textContent = el.dataset.count + (el.dataset.suffix || "");
    });
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.intersectionRatio === 0) {
        el.classList.remove("is-in");
        if (el.matches(".hero")) resetCounters();
        return;
      }
      if (entry.intersectionRatio >= 0.18) {
        const wasOut = !el.classList.contains("is-in");
        el.classList.add("is-in");
        if (el.matches(".hero") && wasOut) playCounters();
      }
    });
  }, { threshold: [0, 0.18] });
  nodes.forEach((el) => revealObserver.observe(el));
}

function setupFilters() {
  $("[data-filters]").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    projectFilter = btn.dataset.filter;
    $$("[data-filter]").forEach((b) => b.classList.toggle("is-active", b === btn));
    renderProjects();
    observeReveals();
  });
}

function setupLangToggle() {
  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyStaticI18n();
  renderMarquee();
  renderServices();
  renderProjects();
  renderProcess();
  renderReviews();
  renderFaq();
  renderSwatches();
  fillServiceSelect();
  setupSlider();
  setupForm();
  setupNav();
  setupProgress();
  setupFilters();
  setupLangToggle();
  observeReveals();
  $("#q-lang").value = lang;
});
