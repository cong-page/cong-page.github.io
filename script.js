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

function updateClock() {
  const now = new Date();
  
  // 12-hour format
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('clockTime').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  
  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('clockDate').textContent = now.toLocaleDateString('en-US', options);
}

updateClock();
setInterval(updateClock, 1000);