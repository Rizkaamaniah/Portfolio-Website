document.addEventListener("DOMContentLoaded", function() {
    let lastScroll = window.scrollY;
    const hero = document.querySelector(".hero");
    const logo = document.querySelector(".logo");
    const text = document.querySelectorAll(".text");
    const button = document.querySelector(".cv-button");
    const downloadLink = document.getElementById("download-link");

    let isScrolling;
    button.classList.add("hidden");
    window.addEventListener("scroll", function() {
        clearTimeout(isScrolling);

        let currentScroll = window.scrollY;

        if (currentScroll > lastScroll) {
            hero.classList.add("scrolled");
            hero.classList.remove("scrolled-up");
            logo.classList.add("small-logo");
            text.forEach(el => el.classList.add("show-text"));
            button.classList.remove("hidden");

        } else {
            hero.classList.remove("scrolled");
            hero.classList.add("scrolled-up");
            logo.classList.remove("small-logo");
            text.forEach(el => el.classList.remove("show-text"));



            isScrolling = setTimeout(() => {
                button.classList.add("hidden");
            }, 200);
        }

        lastScroll = currentScroll;
    });

    // Cegah button meloncat ke atas saat diklik
    downloadLink.addEventListener("click", function(event) {
        event.preventDefault(); // Cegah default action
        const cvUrl = this.getAttribute("href"); // Ambil link file CV

        // Buat elemen <a> baru untuk menghindari masalah scrolling
        const tempLink = document.createElement("a");
        tempLink.href = cvUrl;
        tempLink.setAttribute("download", "Rizka CV.pdf");
        tempLink.style.display = "none";
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
});