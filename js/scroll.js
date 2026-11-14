const revealElements = document.querySelectorAll(
  ".profile-section, .projects-heading, .project-card, .projects-note, " +
  ".skills-section > .section-heading, .skill-group, " +
  ".experience-layout > .section-heading, .experience-card, " +
  ".contact-section > *, .site-footer > *"
);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

revealElements.forEach((element) => element.setAttribute("data-reveal", ""));

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  document.documentElement.classList.add("has-scroll-reveal");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px",
    threshold: 0.12
  });

  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
    revealObserver.observe(element);
  });
}
