function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected content
    document.getElementById(sectionId).classList.add('active');

    // Highlight selected tab
    event.target.classList.add('active');
}