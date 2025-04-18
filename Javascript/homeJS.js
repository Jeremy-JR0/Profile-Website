function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const isOpen = sidebar.style.left === "0px";
  sidebar.style.left = isOpen ? "-250px" : "0px";
  document.body.classList.toggle("sidebar-open", !isOpen);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll('.rhombus-link').forEach(link => {
      link.style.pointerEvents = "auto";
    });
  }, 6000); 
});

