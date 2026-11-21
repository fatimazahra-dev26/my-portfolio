/* ==========================================================
   script.js : comportement du site
   (langue, menu mobile, projets, animations, liens)
   ========================================================== */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "portfolio-lang";
  let currentLang = DEFAULT_LANG;

  /* ---------- Utilitaires ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const t = (key) => (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key;

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "fr" || saved === "en" ? saved : null;
    } catch (e) { return null; }
  }
  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* stockage indisponible */ }
  }

  /* Active ou désactive un lien selon qu'une URL est renseignée */
  function setLink(el, url) {
    if (!el) return;
    if (url) {
      el.setAttribute("href", url);
      el.removeAttribute("aria-disabled");
      el.classList.remove("is-disabled");
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.classList.add("is-disabled");
    }
  }

  /* ---------- Traductions ---------- */
  function applyTranslations() {
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    $$("[data-i18n-alt]").forEach((el) => { el.setAttribute("alt", t(el.dataset.i18nAlt)); });

    document.title = t("meta.title");
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));

    $$("[data-lang-option]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.langOption === currentLang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang === "en" ? "en" : "fr";
    document.documentElement.lang = currentLang;
    saveLang(currentLang);
    applyTranslations();
    renderProjects();
    renderContact();
  }

  /* ---------- Projets ---------- */
  function renderProjects() {
    const grid = $("#projects-grid");
    if (!grid || typeof PROJECTS === "undefined") return;
    grid.textContent = "";

    PROJECTS.forEach((p, index) => {
      const card = document.createElement("article");
      card.className = "card project-card";
      card.id = p.id || "project-" + (index + 1);

      // Image ou emplacement
      const media = document.createElement("div");
      media.className = "project-media";
      if (p.image) {
        const img = document.createElement("img");
        img.src = p.image;
        img.alt = (p.imageAlt && p.imageAlt[currentLang]) || "";
        img.loading = "lazy";
        img.addEventListener("error", () => {
          media.textContent = t("projects.imagePlaceholder");
        });
        media.appendChild(img);
      } else {
        media.textContent = t("projects.imagePlaceholder");
      }
      card.appendChild(media);

      const body = document.createElement("div");
      body.className = "project-body";

      const num = document.createElement("p");
      num.className = "project-number";
      num.textContent = p.label[currentLang];
      body.appendChild(num);

      const title = document.createElement("h3");
      title.textContent = p.title[currentLang];
      body.appendChild(title);

      const desc = document.createElement("p");
      desc.textContent = p.description[currentLang];
      body.appendChild(desc);

      const chips = document.createElement("ul");
      chips.className = "chips";
      chips.setAttribute("aria-label", "Technologies");
      p.tech.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        chips.appendChild(li);
      });
      body.appendChild(chips);

      const actions = document.createElement("div");
      actions.className = "project-actions";
      actions.appendChild(makeProjectButton(p.demo, "projects.btnDemo", "projects.demoSoon", "btn-primary"));
      actions.appendChild(makeProjectButton(p.github, "projects.btnGithub", "projects.githubSoon", "btn-outline"));
      body.appendChild(actions);

      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function makeProjectButton(url, labelKey, soonKey, style) {
    const a = document.createElement("a");
    a.className = "btn btn-small " + style;
    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = t(labelKey);
    } else {
      a.classList.add("is-disabled");
      a.setAttribute("aria-disabled", "true");
      a.textContent = t(soonKey);
    }
    return a;
  }

  /* ---------- Contact et pied de page ---------- */
  function renderContact() {
    const cfg = typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG : {};

    const emailText = $("#contact-email-text");
    const emailBtn = $("#contact-email-btn");
    if (emailText) {
      if (cfg.email) {
        emailText.textContent = cfg.email;
        emailText.classList.remove("is-placeholder");
      } else {
        emailText.textContent = t("contact.emailPlaceholder");
        emailText.classList.add("is-placeholder");
      }
    }
    setLink(emailBtn, cfg.email ? "mailto:" + cfg.email : "");

    [["#contact-linkedin", cfg.linkedin, "LinkedIn"], ["#contact-github", cfg.github, "GitHub"]].forEach(([sel, url, name]) => {
      const el = $(sel);
      if (!el) return;
      el.textContent = url ? name : t("contact.linkPlaceholder");
      setLink(el, url);
    });

    setLink($("#footer-linkedin"), cfg.linkedin);
    setLink($("#footer-github"), cfg.github);
  }

  /* Empêche le clic sur les liens désactivés */
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[aria-disabled='true']");
    if (link) e.preventDefault();
  });

  /* ---------- Menu mobile ---------- */
  function initMenu() {
    const toggle = $("#menu-toggle");
    const nav = $("#nav-menu");
    if (!toggle || !nav) return;

    const setOpen = (open) => {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
    $$("a", nav).forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
  }

  /* ---------- Lien actif dans la navigation ---------- */
  function initActiveLinks() {
    if (!("IntersectionObserver" in window)) return;
    const links = $$(".nav a");
    const map = new Map();
    links.forEach((a) => {
      const sec = $(a.getAttribute("href"));
      if (sec) map.set(sec, a);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => { l.classList.remove("active"); l.removeAttribute("aria-current"); });
          const active = map.get(entry.target);
          if (active) { active.classList.add("active"); active.setAttribute("aria-current", "true"); }
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    map.forEach((_, sec) => observer.observe(sec));
  }

  /* ---------- Animations d'apparition ---------- */
  function initReveal() {
    const items = $$(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => observer.observe(el));
  }

  /* ---------- Retour en haut ---------- */
  function initBackToTop() {
    const btn = $("#back-to-top");
    if (!btn) return;
    btn.hidden = false;
    const onScroll = () => btn.classList.toggle("visible", window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0 });
      // scroll-behavior: smooth (CSS) gère l'animation si autorisée
      $("#top").scrollIntoView({ block: "start" });
    });
  }

  /* ---------- Photo de profil ---------- */
  function initPhoto() {
    const img = $("#profile-photo");
    const frame = $("#photo-frame");
    if (!img || !frame) return;
    const showPlaceholder = () => frame.classList.add("no-photo");
    img.addEventListener("error", showPlaceholder);
    if (img.complete && img.naturalWidth === 0) showPlaceholder();
  }

  /* ---------- Initialisation ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    $("#year").textContent = new Date().getFullYear();

    $("#lang-toggle").addEventListener("click", () => {
      setLanguage(currentLang === "fr" ? "en" : "fr");
    });

    initPhoto();
    initMenu();
    setLanguage(getSavedLang() || DEFAULT_LANG);
    initActiveLinks();
    initReveal();
    initBackToTop();
  });
})();
