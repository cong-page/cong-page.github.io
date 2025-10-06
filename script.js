function openAboutModal() {
    document.getElementById('aboutModal').classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');
}

function closeAboutModal() {
    document.getElementById('aboutModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
}

function openModal(modalId) {
    // Hide about modal but keep overlay
    document.getElementById('aboutModal').classList.remove('active');
    // Show the requested modal
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    // Close the current modal
    document.getElementById(modalId).classList.remove('active');
    // Show the about modal again
    document.getElementById('aboutModal').classList.add('active');
}