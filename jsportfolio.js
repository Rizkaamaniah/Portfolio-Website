document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");



    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Hapus kelas "active" dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            portfolioItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "Beranda.html"; // Ganti dengan URL beranda yang sesuai
});