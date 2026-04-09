document.addEventListener("DOMContentLoaded", () => {
  const links = {
    home: document.querySelector(".nav-link-home"),
    projects: document.querySelector(".nav-link-projects"),
    about: document.querySelector(".nav-link-aboutme"),
  };

  const sections = [
    { id: "main-hero", link: links.home },
    { id: "projects-section", link: links.projects },
    { id: "about-section", link: links.about },
  ];

  let currentLink = links.home;

  const setActive = (link) => {
    if (link === currentLink) return;
    Object.values(links).forEach((l) => l?.classList.remove("active"));
    link?.classList.add("active");
    currentLink = link;
  };

  const updateActive = () => {
    const threshold = window.innerHeight * 0.4;
    let active = sections[0];

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= threshold) {
        active = section;
      }
    }

    setActive(active.link);
  };

  // Set initial state
  updateActive();

  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive, { passive: true });
});
