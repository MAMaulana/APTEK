// Run this after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  setupBackLink();
  setupFadeEffect();
  handleHashScroll();
});

// 🔁 Handles "← Back to Projects" logic
function setupBackLink() {
  const backLink = document.getElementById("back-to-projects");
  if (!backLink) return;

  backLink.addEventListener("click", function (e) {
    e.preventDefault();

    const targetHref = this.getAttribute("href");

    // If you're on a different page (e.g. real-time-map.html), redirect to index.html
    if (!window.location.href.includes("index.html")) {
      window.location.href = targetHref;
    } else {
      // You're already on index.html, so smooth scroll instead
      const target = document.querySelector("#projects");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
}

// 💨 Adds a fade-out animation when navigating to another page
function setupFadeEffect() {
  window.navigateWithFade = function (url) {
    const wrapper = document.getElementById("page-wrapper");
    if (wrapper) {
      wrapper.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = url;
      }, 400); // match your CSS transition
    } else {
      window.location.href = url; // fallback
    }
  };
}

// 🌀 Handles direct URL access with hash (e.g. index.html#projects)
function handleHashScroll() {
  const hash = window.location.hash;
  if (hash === "#projects") {
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // delay gives the DOM a moment to render
  }
}
