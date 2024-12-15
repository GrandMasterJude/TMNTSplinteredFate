function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab, .mobile-menu a').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected content
    document.getElementById(sectionId).classList.add('active');

    // Highlight selected tab
    document.querySelectorAll(`.tab, .mobile-menu a`).forEach(tab => {
        if (tab.textContent.toLowerCase() === sectionId) {
            tab.classList.add('active');
        }
    });

    // Close mobile menu if open
    document.querySelector('.mobile-menu').classList.remove('show');
}

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}