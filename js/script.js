// Countdown Timer
const weddingDate = new Date("December 12, 2026 10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  if (gap <= 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.getElementById("days").innerText = Math.floor(gap / day);
  document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
  document.getElementById("minutes").innerText = Math.floor(
    (gap % hour) / minute,
  );
  document.getElementById("seconds").innerText = Math.floor(
    (gap % minute) / second,
  );
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Music Toggle
function toggleMusic() {
  const music = document.getElementById("bgMusic");

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Gallery Image Popup
function openImage(src) {
  const popup = document.createElement("div");

  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "0";
  popup.style.width = "100%";
  popup.style.height = "100%";
  popup.style.background = "rgba(0,0,0,0.85)";
  popup.style.display = "flex";
  popup.style.alignItems = "center";
  popup.style.justifyContent = "center";
  popup.style.zIndex = "9999";
  popup.style.cursor = "pointer";

  popup.innerHTML = `
    <img 
      src="${src}" 
      style="
        max-width:90%;
        max-height:85%;
        border-radius:20px;
        box-shadow:0 20px 60px rgba(0,0,0,0.5);
      "
    />
  `;

  popup.onclick = () => popup.remove();

  document.body.appendChild(popup);
}

// Scroll Fade Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const visiblePoint = 120;

    if (elementTop < windowHeight - visiblePoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};
document.body.addEventListener(
  "click",
  () => {
    document.getElementById("bgMusic").play();
  },
  { once: true },
);
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
const photos = document.querySelectorAll(".photo");

function showPhotos() {
  photos.forEach((photo, index) => {
    const top = photo.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      setTimeout(() => {
        photo.classList.add("show");
      }, index * 120);
    }
  });
}

window.addEventListener("scroll", showPhotos);
showPhotos();
