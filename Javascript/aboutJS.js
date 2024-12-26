document.addEventListener('DOMContentLoaded', () => {
    console.log('About page loaded.');

    // Sidebar menu functionality
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
});
