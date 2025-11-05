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

// Disable right-click on the entire page
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable text selection everywhere
document.addEventListener('selectstart', event => event.preventDefault());

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

// --- Visitor Counter (CountAPI) ---
// const counterId = 'christineong-website'; // use your own unique ID or domain name
// fetch(`https://api.countapi.xyz/hit/${counterId}/visits`)
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('visitor-count').textContent = data.value;
//     })
//     .catch(() => {
//         document.getElementById('visitor-count').textContent = 'Error';
//     });


// ADD RECAPTCHA
// When contact button is clicked in About modal
function openContactWithCaptcha() {
    // Hide About modal but keep overlay visible
    document.getElementById('aboutModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.add('active');

    // Show reCAPTCHA modal
    document.getElementById('recaptchaModal').classList.add('active');
}

function verifyAndOpenContact() {
    const response = grecaptcha.getResponse();

    if (response.length === 0) {
        alert('Please complete the reCAPTCHA');
        return;
    }

    // Hide reCAPTCHA modal
    document.getElementById('recaptchaModal').classList.remove('active');

    // Show contact modal
    document.getElementById('contactModal').classList.add('active');

    // Reset reCAPTCHA for next time
    grecaptcha.reset();
}

function closeRecaptchaModal() {
    // Hide reCAPTCHA modal
    document.getElementById('recaptchaModal').classList.remove('active');
    // Show about modal again
    document.getElementById('aboutModal').classList.add('active');

    grecaptcha.reset();
}

function onCaptchaSuccess(token) {
    // User passed reCAPTCHA, now open the contact modal
    document.getElementById('aboutModal').classList.remove('active');
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('contactModal').classList.add('active');

    // Optional: reset it for next time
    grecaptcha.reset();
}
