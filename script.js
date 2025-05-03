document.addEventListener('DOMContentLoaded', () => {

  const navLinks = document.querySelectorAll('.nav-link'); // Mengambil dan menyimpan seluruh elemen dari class nav-link
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Inisialisasi AOS & Tilt.js
  AOS.init();
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
  });
});

// Menampilkan Output saat button click me di klik
function showmessages(){
  alert(
    'Terimakasih sudah datang di website saya'
  )
}

// Memberikan efek ketik pada h3 span di hero section
const words = ["Student", "Designer", "Photographer", "Editor"];
let index = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  currentWord = words[index];

  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typedText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % words.length;
    setTimeout(typeEffect, 200);
  } else {
    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Modal Gambar Gallery
const galleryModal = document.getElementById('galleryModal');
galleryModal.addEventListener('show.bs.modal', function (event) {
  const triggerLink = event.relatedTarget;
  const imageUrl = triggerLink.getAttribute('data-bs-img');
  const modalImg = document.getElementById('modal-img');
  modalImg.src = imageUrl;
});
