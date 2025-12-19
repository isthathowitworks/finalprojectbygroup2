function loadContent(pageId) {
    const templateId = pageId + '-template';
    const template = document.getElementById(templateId);

    if (!template) return;

    const displayArea = document.getElementById('main-content-display');

    // --- Close modal if open ---
    const modal = document.getElementById("imageModal");
    if (modal && modal.classList.contains("show")) {
        modal.classList.remove("show");
    }

    // Load new content
    displayArea.innerHTML = template.innerHTML;

    // Reset scroll to top
    displayArea.scrollTop = 0;   // for scrollable main area
    window.scrollTo(0, 0);       // also scroll page to top

    // Update active nav button
    const allButtons = document.querySelectorAll('.head-bar nav button');
    allButtons.forEach(btn => btn.classList.remove('active'));

    const activeButton = Array.from(allButtons)
        .find(btn => btn.getAttribute('onclick').includes(pageId));

    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Initialize page-specific scripts
    if (pageId === 'home') {
        initModal();   // Re-initialize modal for new gallery images
    }

    if (pageId === 'quiz') {
        initQuiz();
    }
}

// Load home page on first load
window.onload = function () {
    loadContent('home');
};
