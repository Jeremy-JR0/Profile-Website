window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const lines = document.querySelectorAll('.line');
    let index = 0;

    // Check if this is the first visit in the current session
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
        // Mark the session as visited
        sessionStorage.setItem('hasVisited', 'true');

        // Show loading animation
        const showLine = () => {
            if (index < lines.length) {
                lines[index].style.display = 'block';
                setTimeout(() => {
                    lines[index].style.display = 'none';
                    index++;
                    showLine();
                }, 1000); // Duration each line is displayed
            } else {
                // Hide the loading screen and show the main content
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';

                // Add fade-in animation only for the initial load
                mainContent.classList.add('fade-in');
            }
        };

        showLine();
    } else {
        // Skip the animation and show the main content directly
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';

        // Remove fade-in animation for subsequent visits
        mainContent.classList.remove('fade-in');
    }
});
