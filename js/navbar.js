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

  const setActiveById = (id) => {
    const hash = id ? `#${id}` : "#main-hero";
    setActive(hash);
  };

  setActive(window.location.hash);
  window.addEventListener("hashchange", () => setActive(window.location.hash));

  if ("IntersectionObserver" in window) {
    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        let currentId = null;
        let maxRatio = 0;

        sections.forEach(({ id }) => {
          const ratio = ratios.get(id) || 0;
          if (ratio >= maxRatio) {
            maxRatio = ratio;
            currentId = id;
          }
        });

        if (currentId && maxRatio > 0) {
          setActiveById(currentId);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6],
      }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
  } else {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      let currentId = "main-hero";

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          currentId = id;
        }
      });

      setActiveById(currentId);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
