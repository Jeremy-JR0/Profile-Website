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

