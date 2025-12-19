function initModal() {
    const modal = document.getElementById("imageModal");
    if (!modal) return;

    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const modalHistory = document.getElementById("modalHistory"); // added
    const closeBtn = document.querySelector(".modal-close");

    const galleryImages = document.querySelectorAll(".gallery-card img");

    galleryImages.forEach(img => {
        img.onclick = () => {
            modal.classList.add("show"); // show modal
            modalImg.src = img.src;

            // set caption text
            modalCaption.textContent = img.alt;

            // set history/explanation from data-history attribute
            modalHistory.innerHTML = img.dataset.history; // <-- change here
        };
    });

    const closeModal = () => {
        modal.classList.remove("show");
    };

    closeBtn.onclick = closeModal;

    modal.onclick = (e) => {
        if (e.target === modal) {
            closeModal();
        }
    };
}

document.addEventListener("DOMContentLoaded", initModal);
