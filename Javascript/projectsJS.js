function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}

function onOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function offOverlay(overlayId) {
    document.getElementById(overlayId).style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable background scroll
}

