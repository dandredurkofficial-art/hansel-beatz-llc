document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      const icon = toggle.querySelector("i");
      if (icon) icon.setAttribute("data-lucide", open ? "x" : "menu");
      if (window.lucide) window.lucide.createIcons();
    });
  }

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.querySelectorAll("[data-contact-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get("subject") || "Website inquiry");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInquiry: ${data.get("type")}\n\n${data.get("message")}`
      );
      // Replace this address with the label's verified inbox before publishing.
      window.location.href = `mailto:hello@hanselbeatz.com?subject=${subject}&body=${body}`;
      const note = form.querySelector("[data-form-note]");
      if (note) note.textContent = "Your email app should open with your message prepared. This form does not submit directly to a server.";
    });
  });

  if (window.lucide) window.lucide.createIcons();
});
