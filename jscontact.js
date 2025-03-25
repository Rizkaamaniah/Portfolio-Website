// Tombol Kembali ke Beranda
document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "Beranda.html"; // Ganti dengan URL beranda yang sesuai
});

// Form Submit (bisa dikembangkan untuk backend)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    this.reset();
});