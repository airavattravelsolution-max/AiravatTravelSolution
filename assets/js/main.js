document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }

    // ACTIVE NAV LINK (FIXED FOR GITHUB PAGES)
    const currentPath = window.location.pathname;

    document.querySelectorAll(".nav-link").forEach(link => {
        const linkPath = link.getAttribute("href");

        if (currentPath === linkPath || currentPath.includes(linkPath)) {
            link.classList.add("active");
        }
    });

});
