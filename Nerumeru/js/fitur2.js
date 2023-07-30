// Fungsi untuk mengikuti pergerakan mouse
function followMouse(event) {
  const image = document.querySelector(".hero-img-main");
  const imageRect = image.getBoundingClientRect();

  // Posisi gambar
  const imageX = imageRect.left + imageRect.width / 2;
  const imageY = imageRect.top + imageRect.height / 2;

  // Posisi mouse
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Hitung perubahan transformasi
  const translateX = (mouseX - imageX) / 10;
  const translateY = (mouseY - imageY) / 10;

  // Terapkan transformasi ke gambar
  image.style.transform = `translate(${translateX}px, ${translateY}px)`;
}

// Event listener saat mouse bergerak di atas elemen gambar
document
  .querySelector(".hero-img-main")
  .addEventListener("mousemove", followMouse);

// Event listener saat mouse meninggalkan elemen gambar
document
  .querySelector(".hero-img-main")
  .addEventListener("mouseleave", function () {
    // Kembalikan gambar ke posisi awal
    this.style.transform = "translate(0, 0)";
  });
