// =====================
// THEME TOGGLE
// =====================
const themeToggleBtn = document.getElementById("theme-toggle");
let currentTheme = localStorage.getItem("theme") || "light";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggleBtn.textContent = theme === "light" ? "🌙" : "☀️";
}

applyTheme(currentTheme);

themeToggleBtn.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
});

// =====================
// SCROLL REVEAL
// =====================
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.2;
    if (top < trigger) sec.classList.add("visible");
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =====================
// DYNAMIC PROJECTS
// =====================
const projects = [
  {
    title: "THIS PORTFOLIO SITE.",
    desc: "My Personal Website to show my amazing work.",
  },
  { title: "TO BE CONTINUED...", desc: "ERROR 404: PROJECT NOT FOUND." },
  { title: "TO BE CONTINUED...", desc: "ERROR 404: PROJECT NOT FOUND." },
];

const projectsContainer = document.getElementById("projects-container");

function loadProjects() {
  projects.forEach((proj) => {
    const card = document.createElement("article");
    card.classList.add("project-card");
    card.innerHTML = `<h3>${proj.title}</h3><p>${proj.desc}</p>`;
    projectsContainer.appendChild(card);
  });
}

loadProjects();

// =====================
// CONTACT FORM VALIDATION
// =====================
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phonenumber").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email.includes("@") || !phone) {
    alert("Please fill out all required fields with valid info.");
    return;
  }

  alert("Message sent!");
  form.reset();
});

// =====================
// TYPING EFFECT (HERO)
// =====================
function typeEffect(element, speed = 150) {
  const text = element.textContent;
  element.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".typewriter");
  const heroSubText = document.querySelector(".typewriter1");
  typeEffect(heroText, 120);
  setTimeout(() => typeEffect(heroSubText, 100), 1500);
});

// =====================
// BACK TO TOP BUTTON
// =====================
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "⬆️";
backToTopBtn.id = "back-to-top";
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "2rem";
backToTopBtn.style.right = "2rem";
backToTopBtn.style.padding = "0.75rem 1rem";
backToTopBtn.style.fontSize = "1.5rem";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.style.border = "none";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.background = "var(--button-color)";
backToTopBtn.style.color = "white";
backToTopBtn.style.display = "none";
backToTopBtn.style.zIndex = "1000";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) backToTopBtn.style.display = "block";
  else backToTopBtn.style.display = "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
