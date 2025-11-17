document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if(path.includes("index") || path === "/" || path === "") {
        document.querySelector(".nav-link-home")?.classList.add("active");
    }
    else if(path.includes("projects")) {
        document.querySelector(".nav-link-projects")?.classList.add("active");
    }
    else if(path.includes("aboutme")) {
        document.querySelector(".nav-link-aboutme")?.classList.add("active");
    }
});