const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth scroll (optional enhancement)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        navLinks.classList.remove("active");
    });
});
function openPopup(src) {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    popupImg.src = src;

    // Reset animation
    popup.style.display = "flex";
    popupImg.style.animation = "none";

    setTimeout(() => {
        popupImg.style.animation = "zoomIn 0.3s ease forwards";
    }, 10);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
 const cards = document.querySelectorAll('.fade-up');

    function showCards() {
        cards.forEach(card => {
            const top = card.getBoundingClientRect().top;
            if (top < window.innerHeight - 50) {
                card.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', showCards);
    window.addEventListener('load', showCards);
     const galleryImages = document.querySelectorAll('.work-exp-gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    let currentIndex = 0;
    let images = [];

    // Ambil semua gambar dalam card yang diklik
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            // kumpulkan gambar dalam 1 gallery card
            const card = img.closest('.work-exp-card');
            images = [...card.querySelectorAll('.work-exp-gallery img')];

            currentIndex = images.indexOf(img);
            showImage(currentIndex);

            lightbox.style.display = 'flex';
        });
    });

    function showImage(i) {
        lightboxImg.src = images[i].src;
    }

    // Next
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Prev
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Close
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Click outside image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });