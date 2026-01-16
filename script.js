// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
}

hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('#hamburger') && !event.target.closest('#mobileMenu')) {
        closeMobileMenu();
    }
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';

// Apply saved theme on page load
if (currentTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
    htmlElement.setAttribute('data-theme', 'dark');
} else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
    htmlElement.setAttribute('data-theme', 'light');
}

// Toggle theme on button click
themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        themeToggle.textContent = '☀️';
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light-mode');
        themeToggle.textContent = '🌙';
        htmlElement.setAttribute('data-theme', 'light');
    }
});

// Booking Form Handling
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ Booking request sent! We will contact you shortly.');
    this.reset();
});
