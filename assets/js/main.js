/* =====================================================
   🌌 Animaciones – Portafolio Miguel Ángel Buelvas
   Efectos de entrada, brillo y desplazamiento suave
   ===================================================== */

// Animación al cargar los elementos principales
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".hero-title, .hero-subtitle, .hero-tagline, .btn-primary, .profile-photo, .social-links"
  );

  elements.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 400 * i);
  });
});

// Efecto de aparición al hacer scroll (Intersection Observer)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".page-content section, .cert-card, .experience-item").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Estilos para las animaciones de scroll (agrega esto a tu CSS o mantenlo aquí)
const style = document.createElement("style");
style.textContent = `
.hidden {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s ease-out;
}
.visible {
  opacity: 1;
  transform: translateY(0);
}
`;
document.head.appendChild(style);

// Efecto de parpadeo suave en el título (simulación de luz neón)
setInterval(() => {
  const title = document.querySelector(".hero-title");
  if (title) {
    title.style.textShadow = `0 0 20px rgba(155, 92, 255, ${Math.random() * 0.6})`;
  }
}, 150);

// Desplazamiento suave para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});
