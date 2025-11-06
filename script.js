function openAboutModal() {
    document.getElementById('aboutModal').classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');
}

function closeAboutModal() {
    document.getElementById('aboutModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
}

function openModal(modalId) {
    document.getElementById('aboutModal').classList.remove('active');
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.getElementById('aboutModal').classList.add('active');
}

// Disable right-click on the entire page
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable text selection everywhere
document.addEventListener('selectstart', event => event.preventDefault());

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clockTime').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('clockDate').textContent = now.toLocaleDateString('en-US', options);
}

updateClock();
setInterval(updateClock, 1000);

// reCAPTCHA callback - called when user completes the captcha
function onCaptchaSuccess(token) {
    document.getElementById('aboutModal').classList.remove('active');
    document.getElementById('contactModal').classList.add('active');
}