/* Relais landing page: language toggle (EN default, FR) and sign-up form. */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     CONFIG
     Leave FORM_ENDPOINT empty to run in demo mode: the form only shows
     the thank-you screen. To collect real sign-ups, create a free form
     on https://formspree.io and paste its URL here, e.g.
     "https://formspree.io/f/abcdwxyz".
  ------------------------------------------------------------------ */
  var FORM_ENDPOINT = "";

  /* French copy. English lives in index.html and is read from the page. */
  var FR = {
    skip: "Aller au contenu",
    cta: "Ça m'intéresse",

    hero_eyebrow: "Pour celles et ceux qui partent bientôt à la retraite",
    hero_title: "Vous quittez le poste, pas le rôle.",
    hero_sub: "Relais vous permet de continuer à transmettre ce que vous savez aux collègues que vous laissez derrière vous, à votre rythme, 45 minutes à la fois.",
    hero_note: "Bénévole et non rémunéré · Sans engagement · 1 minute",
    hero_bubble: "Alors je ne pars pas vraiment\u00a0?",

    card_label: "Nouvelle demande pour vous",
    card_team: "Programmation",
    card_question: "Comment présenter une émission de prime time au comité de direction\u00a0?",
    card_due: "Pour vendredi",
    card_back_label: "Léa peut vous apprendre en retour",
    card_back_value: "Le montage vidéo avec l'IA",
    card_not_now: "Pas maintenant",
    card_accept: "Accepter · 45 min",

    emp_title: "Après toute une carrière, pourquoi tout s'arrêterait-il le dernier jour\u00a0?",
    emp_body: "Vous avez passé des décennies à bâtir votre expertise. Puis viennent une passation en trois jours, un pot de départ, un badge rendu, et le silence. Pendant ce temps, les juniors qui prennent la suite ont encore des questions auxquelles vous seul pouvez répondre.",
    emp_s1: "Passation en 3 jours",
    emp_s2: "Pot de départ",
    emp_s3: "Badge rendu",
    emp_s4: "Le silence",

    how_title: "Comment ça marche",
    how_sub: "Trois étapes simples.",
    how1_title: "Avant votre départ",
    how1_body: "Votre entreprise vous propose Relais lors de votre entretien de fin de carrière.",
    how2_title: "Un junior vous sollicite",
    how2_body: "Vous recevez une demande avec le contexte et le temps nécessaire (par exemple\u00a0: «\u00a0Comment présenter une émission de prime time au comité de direction\u00a0?\u00a0»).",
    how3_title: "Vous décidez",
    how3_body: "Acceptez, choisissez un créneau qui vous convient, et partagez votre expérience en une séance de 45 minutes.",
    mini_ctx_label: "Contexte\u00a0:",
    mini_ctx: "Comité vendredi, sa toute première présentation.",
    mini_pick: "Choisissez un créneau",
    mini_slot1: "Mar. 10h00",
    mini_slot2: "Mer. 15h00",

    feat_title: "Ce que vous y gagnez",
    f1_title: "C'est vous qui choisissez",
    f1_body: "Chaque demande indique d'emblée le sujet, le contexte et la durée. Dites oui, ou «\u00a0pas maintenant\u00a0», sans aucune pression.",
    f2_title: "Court et limité",
    f2_body: "Une séance dure 45 minutes. Aucun engagement, aucun planning imposé.",
    f3_title: "Un échange dans les deux sens",
    f3_body: "Les juniors peuvent vous apprendre quelque chose en retour\u00a0: montage vidéo avec l'IA, nouveaux outils, nouvelles tendances. Vous voyez ce que vous recevrez avant d'accepter.",
    f4_title: "Simple à utiliser",
    f4_body: "Les demandes arrivent par l'application ou par SMS.",
    f5_title: "Voyez votre impact",
    f5_body: "30 jours après une séance, vous recevez un mot sur ce que votre aide a changé pour la personne.",
    f6_title: "Votre réseau reste le vôtre",
    f6_body: "Au bout de deux ans, vos contacts restent les vôtres et vous pouvez continuer à accompagner librement.",

    not_title: "Ce que Relais n'est pas",
    not1: "Ni un emploi, ni un travail gratuit que vous devriez à qui que ce soit.",
    not2: "Pas une façon de vous pousser vers la sortie plus tôt.",
    not3: "Pas une contrainte de temps\u00a0: vous décidez combien et à quelle fréquence.",

    about_title: "Qui sommes-nous",
    about_body: "Nous sommes une équipe d'entrepreneurs qui conçoit Relais pour une raison simple\u00a0: chaque année, trop d'expérience quitte les entreprises, et trop de retraités ont le sentiment que leur utilité s'est arrêtée du jour au lendemain. Pour nous, la retraite devrait être une transition, pas une rupture. Relais est notre façon de l'explorer, et nous le construisons avec les personnes à qui il s'adresse.",

    su_title: "Vous aimeriez faire partie des premiers\u00a0?",
    su_sub: "Laissez vos coordonnées et nous vous préviendrons à l'ouverture de Relais. Cela prend une minute.",
    su_name: "Prénom",
    su_email: "E-mail",
    su_industry: "Secteur ou fonction d'origine",
    su_industry_ph: "ex.\u00a0: télévision, directeur des programmes",
    su_topic: "Sur quel sujet aimeriez-vous le plus aider un jeune collègue\u00a0?",
    optional: "(facultatif)",
    su_button: "Rejoindre la liste d'accès anticipé",
    su_note: "Bénévole et non rémunéré. Votre e-mail sert uniquement à vous parler de Relais.",
    err_name: "Merci d'indiquer votre prénom.",
    err_email: "Merci d'indiquer un e-mail valide, par exemple nom@exemple.fr.",
    err_industry: "Merci d'indiquer votre secteur ou votre ancienne fonction.",
    th_title: "Merci",
    th_body: "Vous êtes sur la liste d'accès anticipé. Nous vous écrirons par e-mail. Vous n'avez rien d'autre à faire.",

    faq_title: "Vos questions",
    q1: "Est-ce rémunéré\u00a0?",
    a1: "La participation est bénévole. Nous cherchons ce qui la rendrait la plus intéressante pour vous.",
    q2: "Combien de temps cela prend-il\u00a0?",
    a2: "Une séance de 45 minutes par demande, uniquement quand vous acceptez.",
    q3: "Qui sont les juniors\u00a0?",
    a3: "Des salariés de votre ancienne entreprise, qui posent de vraies questions de travail.",
    q4: "Dois-je rester en contact avec mon entreprise\u00a0?",
    a4: "Seulement autant que vous le souhaitez.",

    footer: "Vous quittez le poste, pas le rôle. © 2026, prototype en accès anticipé."
  };

  var META = {
    en: {
      title: "Relais. You leave the job, not the role.",
      toggle: "Français",
      toggleAria: "Lire cette page en français"
    },
    fr: {
      title: "Relais. Vous quittez le poste, pas le rôle.",
      toggle: "English",
      toggleAria: "Read this page in English"
    }
  };

  /* Store the English text from the HTML so we can switch back. */
  var textNodes = document.querySelectorAll("[data-i18n]");
  var placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
  var EN = {};
  textNodes.forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (!(key in EN)) EN[key] = el.textContent;
  });
  placeholderNodes.forEach(function (el) {
    EN[el.getAttribute("data-i18n-placeholder")] = el.getAttribute("placeholder");
  });

  var current = "en";

  function t(key) {
    var dict = current === "fr" ? FR : EN;
    return dict[key] != null ? dict[key] : EN[key];
  }

  function applyLang(lang) {
    current = lang === "fr" ? "fr" : "en";
    textNodes.forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    placeholderNodes.forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.documentElement.lang = current;
    document.title = META[current].title;
    var toggle = document.getElementById("lang-toggle");
    document.getElementById("lang-toggle-label").textContent = META[current].toggle;
    toggle.setAttribute("aria-label", META[current].toggleAria);
    toggle.setAttribute("lang", current === "en" ? "fr" : "en");
    try { localStorage.setItem("relais-lang", current); } catch (e) { /* storage unavailable */ }
  }

  /* Starting language: ?lang=fr in the link wins, then the last choice, then English. */
  var start = "en";
  var param = new URLSearchParams(window.location.search).get("lang");
  if (param === "fr" || param === "en") {
    start = param;
  } else {
    try { start = localStorage.getItem("relais-lang") || "en"; } catch (e) { start = "en"; }
  }
  if (start !== "en") applyLang(start);

  document.getElementById("lang-toggle").addEventListener("click", function () {
    applyLang(current === "en" ? "fr" : "en");
    track("language_" + current);
  });

  /* ------------------------------------------------------------------
     Click tracking. Works with Vercel Web Analytics custom events if it
     is enabled on the project; otherwise it does nothing.
  ------------------------------------------------------------------ */
  function track(name) {
    try { if (typeof window.va === "function") window.va("event", { name: name }); } catch (e) { /* ignore */ }
  }
  document.querySelectorAll("[data-track]").forEach(function (el) {
    el.addEventListener("click", function () { track(el.getAttribute("data-track")); });
  });

  /* ------------------------------------------------------------------
     Sign-up form
  ------------------------------------------------------------------ */
  var form = document.getElementById("signup-form");
  var fields = [
    { input: "first-name", error: "err-first-name", valid: function (v) { return v.trim().length > 0; } },
    { input: "email", error: "err-email", valid: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); } },
    { input: "industry", error: "err-industry", valid: function (v) { return v.trim().length > 0; } }
  ];

  fields.forEach(function (f) {
    var input = document.getElementById(f.input);
    input.setAttribute("aria-describedby", f.error);
    input.addEventListener("input", function () {
      if (input.getAttribute("aria-invalid") === "true" && f.valid(input.value)) {
        input.removeAttribute("aria-invalid");
        document.getElementById(f.error).hidden = true;
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var firstInvalid = null;
    fields.forEach(function (f) {
      var input = document.getElementById(f.input);
      var ok = f.valid(input.value);
      document.getElementById(f.error).hidden = ok;
      if (ok) {
        input.removeAttribute("aria-invalid");
      } else {
        input.setAttribute("aria-invalid", "true");
        if (!firstInvalid) firstInvalid = input;
      }
    });
    if (firstInvalid) { firstInvalid.focus(); return; }

    var data = {
      first_name: form.first_name.value.trim(),
      email: form.email.value.trim(),
      industry: form.industry.value.trim(),
      topic: form.topic.value.trim(),
      language: current,
      submitted_at: new Date().toISOString()
    };

    track("signup_" + current);

    if (FORM_ENDPOINT) {
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      }).catch(function () { /* still thank the person; the test continues */ });
    }

    showThanks(data.first_name);
  });

  function showThanks(name) {
    document.getElementById("signup-form-wrap").hidden = true;
    document.getElementById("thanks-name").textContent = name ? ", " + name : "";
    var thanks = document.getElementById("signup-thanks");
    thanks.hidden = false;
    thanks.focus();
    thanks.scrollIntoView({ block: "center" });
  }
})();
