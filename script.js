// Menunggu seluruh elemen DOM siap digunakan
document.addEventListener('DOMContentLoaded', () => {

  // =============== SMOOTH SCROLL NAVIGATION ===============
  const navLinks = document.querySelectorAll('.nav-link'); // Ambil semua link navbar
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.hash !== '') {
        e.preventDefault(); // Mencegah behavior default
        const hash = this.hash; // Ambil ID tujuan dari href (ex: #about)
        document.querySelector(hash).scrollIntoView({
          behavior: 'smooth' // Scroll halus ke elemen tujuan
        });
      }
    });
  });

  // =============== INISIALISASI AOS & TILT.JS ===============
  AOS.init(); // Inisialisasi AOS untuk animasi scroll
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
  });

  // =============== EFEK KETIK (TYPE EFFECT) ===============
  const words = ["Student", "Designer", "Photographer", "Editor"]; // Kata-kata yang akan diketik
  let index = 0;         // Index kata saat ini
  let charIndex = 0;     // Index karakter dalam kata
  let isDeleting = false; // Status penghapusan karakter
  const typedText = document.getElementById("typed-text"); // Target elemen

  function typeEffect() {
    const currentWord = words[index];

    // Mengetik atau menghapus karakter
    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex--);
    } else {
      typedText.textContent = currentWord.substring(0, charIndex++);
    }

    // Ganti ke status hapus setelah selesai ketik
    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Tunggu sebentar sebelum hapus
    } 
    // Ganti ke kata selanjutnya setelah selesai hapus
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % words.length; // Loop ulang ke awal
      setTimeout(typeEffect, 200);
    } 
    // Ketik atau hapus per karakter
    else {
      setTimeout(typeEffect, isDeleting ? 60 : 100);
    }
  }

  typeEffect(); // Jalankan efek ketik saat halaman dimuat

  // =============== FILTER GALLERY DENGAN FADE ===============
const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    galleryItems.forEach(item => {
      const category = item.getAttribute("data-category");

      // Hapus efek lama
      item.classList.remove("fade-in", "fade-out");

      if (filter === "all" || filter === category) {
        item.style.display = "block"; // Tampilkan dulu
        setTimeout(() => {
          item.classList.add("fade-in"); // Baru beri efek fade
        }, 10);
      } else {
        item.classList.add("fade-out"); // Tambahkan fade-out dulu
        setTimeout(() => {
          item.style.display = "none"; // Setelah animasi, baru sembunyikan
        }, 400);
      }
    });
  });
});



  // =============== MODAL GAMBAR GALLERY (Bootstrap) ===============
  const galleryModal = document.getElementById('galleryModal'); // Modal Bootstrap
  galleryModal.addEventListener('show.bs.modal', function (event) {
    const triggerLink = event.relatedTarget; // Elemen yang memicu modal
    const imageUrl = triggerLink.getAttribute('data-bs-img'); // Ambil URL gambar dari atribut
    const modalImg = document.getElementById('modal-img'); // Target gambar dalam modal
    modalImg.src = imageUrl; // Set gambar modal
  });
});
