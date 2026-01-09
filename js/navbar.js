document.addEventListener("DOMContentLoaded", () => {
  const links = {
    home: document.querySelector(".nav-link-home"),
    projects: document.querySelector(".nav-link-projects"),
    about: document.querySelector(".nav-link-aboutme"),
  };

  const setActive = (hash) => {
    Object.values(links).forEach((link) => link?.classList.remove("active"));

    if (hash === "#projects-section") {
      links.projects?.classList.add("active");
      return;
    }

    if (hash === "#about-section") {
      links.about?.classList.add("active");
      return;
    }

    links.home?.classList.add("active");
  };

  setActive(window.location.hash);
  window.addEventListener("hashchange", () => setActive(window.location.hash));
});
