function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.style.left === "0px";
    sidebar.style.left = isOpen ? "-250px" : "0px";
    document.body.classList.toggle("sidebar-open", !isOpen);
}

function onOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "flex";
    document.body.style.overflow = "hidden"; 
}

function offOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
    document.body.style.overflow = "auto"; 
}

const slideIndices = {}; // Store current slide index per slideshow

function changeSlide(n, containerId) {
  const container = document.getElementById(containerId);
  const slides = container.querySelectorAll('.slide');

  // Init index for this slideshow if not set
  if (!(containerId in slideIndices)) {
    slideIndices[containerId] = 0;
  }

  // Hide current slide
  slides[slideIndices[containerId]].style.display = "none";

  // Update index
  slideIndices[containerId] = (slideIndices[containerId] + n + slides.length) % slides.length;

  // Show new slide
  slides[slideIndices[containerId]].style.display = "block";
}



