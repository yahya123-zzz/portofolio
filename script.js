const bar = document.querySelector('.bar');
const nav = document.querySelector('nav');

// Toggle Menu Mobile
bar.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('active');
});

// Tutup menu saat link di-klik (Mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Toggle Education & Experience Info (Klik gambar untuk memunculkan teks)
const images = document.querySelectorAll('.education-img');
images.forEach(img => {
    img.addEventListener('click', function() {
        const detail = this.parentElement.querySelector('.education-detail');
        if (detail) {
            detail.classList.toggle('active');
        }
    });
});