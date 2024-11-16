// Ambil elemen penting
const audio = document.getElementById('myAudio');
const toggleMusicBtn = document.getElementById('toggleMusicBtn');
const songSelector = document.getElementById('songSelector');

// Fungsi untuk mengganti lagu
songSelector.addEventListener('change', () => {
    const selectedSong = songSelector.value; // Ambil nilai dari dropdown
    audio.src = selectedSong; // Ganti sumber audio dengan pilihan
    audio.pause(); // Pastikan musik berhenti saat lagu baru dipilih
    toggleMusicBtn.textContent = 'Putar Musik'; // Reset teks tombol
});

// Fungsi untuk memutar/menghentikan musik
toggleMusicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Memutar musik
        toggleMusicBtn.textContent = 'Matikan Musik'; // Ubah teks tombol
    } else {
        audio.pause(); // Menghentikan musik
        toggleMusicBtn.textContent = 'Putar Musik'; // Reset teks tombol
    }
});

// Modal untuk memperbesar gambar
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');
const images = document.querySelectorAll('.thumbnail');

// Daftar gambar
const imageArray = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentImageIndex = 0; // Indeks gambar yang sedang ditampilkan

// Tampilkan gambar yang diperbesar
images.forEach((image) => {
    image.addEventListener('click', (e) => {
        modal.style.display = 'flex';
        modalImg.src = e.target.src;
        modalImg.alt = e.target.alt;
    });
});

// Menutup modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Menutup modal jika klik di luar gambar
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Fungsi untuk mengganti gambar dengan tombol panah
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const currentImage = document.getElementById('currentImage');

// Fungsi untuk mengganti gambar ke gambar selanjutnya
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % imageArray.length; // Indeks selanjutnya
    currentImage.src = imageArray[currentImageIndex];
});

// Fungsi untuk mengganti gambar ke gambar sebelumnya
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + imageArray.length) % imageArray.length; // Indeks sebelumnya
    currentImage.src = imageArray[currentImageIndex];
});