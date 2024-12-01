window.addEventListener('load', () => {
    const lines = document.querySelectorAll('.line');
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
  
    let index = 0;
  
    const showLine = () => {
      if (index < lines.length) {
        lines[index].style.display = 'block';
        setTimeout(() => {
          lines[index].style.display = 'none';
          index++;
          showLine();
        }, 1000); // Adjust the time for each line's display
      } else {
        // Hide loading screen and show main content
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
      }
    };
  
    showLine();
  });

  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.querySelector('.sidebar');
  
  menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
  });
  
  