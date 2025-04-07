document.addEventListener('DOMContentLoaded', () => {
    // Greeting
    const greetingEl = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting = 'Hello';

    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    greetingEl.textContent = `${greeting}, I'm James Kimeu Mulei`; // Updated name

    // Time
    const clockEl = document.querySelector('.clock-container');
    function updateClock() {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Theme switch
    const themeSwitch = document.getElementById('theme-switch');
    const root = document.documentElement;

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        root.classList.add('dark-theme');
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', () => {
        root.classList.toggle('dark-theme');
        const theme = root.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    // Validation
    const form = document.querySelector('form'); // Assuming you have one form
    if (form) {
        form.addEventListener('submit', e => {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.border = '2px solid var(--error-color)';
                } else {
                    input.style.border = '';
                }

                if (input.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(input.value)) {
                        valid = false;
                        input.style.border = '2px solid var(--error-color)';
                    }
                }
            });

            if (!valid) {
                e.preventDefault(); // Stop form from submitting
                alert('Please fill in all fields correctly.');
            }
        });
    }

    // Project filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        ⬤
