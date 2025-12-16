/* --- BAGIAN 1: KALKULATOR LATIHAN --- */
function hitung() {
    // 1. Ambil elemen input
    const input1 = document.getElementById('angka1');
    const input2 = document.getElementById('angka2');
    const hasilElement = document.getElementById('hasil');

    // 2. Validasi: Pastikan input tidak kosong
    if (input1.value === '' || input2.value === '') {
        hasilElement.innerText = "Mohon isi kedua angka!";
        hasilElement.style.color = "red";
        return; // Berhenti di sini jika kosong
    }

    // 3. Konversi ke angka (float)
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    // 4. Hitung dan Tampilkan
    const total = num1 + num2;
    hasilElement.innerText = total;
    hasilElement.style.color = "#306998"; // Warna biru Python
}

/* --- BAGIAN 2: POPUP TEAM (MODAL) --- */
document.addEventListener("DOMContentLoaded", () => {
    // Ambil elemen modal & tombol close
    const modal = document.getElementById("modalTeam");
    const modalImg = document.getElementById("modalImg");
    const modalName = document.getElementById("modalName");
    const modalNim = document.getElementById("modalNim");
    const closeBtn = document.querySelector(".close-btn");

    // Ambil semua kartu tim
    const teamCards = document.querySelectorAll(".card");

    // Tambahkan event 'click' ke setiap kartu
    teamCards.forEach((card) => {
        card.addEventListener("click", function () {
            // Ambil data dari dalam kartu yang diklik
            // Menggunakan querySelector pada 'this' (kartu yang dipencet)
            const imgElement = this.querySelector("img");
            const nameElement = this.querySelector("h4");
            const nimElement = this.querySelector("p");

            // Masukkan data ke dalam Modal
            if (imgElement) modalImg.src = imgElement.src;
            if (nameElement) modalName.innerText = nameElement.innerText;
            if (nimElement) modalNim.innerText = nimElement.innerText;

            // Tampilkan Modal
            modal.style.display = "flex";
        });
    });

    // Fungsi Menutup Modal (Tombol X)
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    }

    // Fungsi Menutup Modal (Klik di luar area putih)
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});