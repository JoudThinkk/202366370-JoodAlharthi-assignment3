// Assisted-by: Gemini
// ==========================================
// 1. DYNAMIC CONTENT & LOCALSTORAGE (Theme Toggle)
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');

// Check for saved user preference in localStorage on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
} else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
}

// Toggle theme and save preference to localStorage
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    }
});

// ==========================================
// 2. FORM VALIDATION & POPUP TOAST FEEDBACK
// ==========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    // Create toast element dynamically and append it to body
    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    document.body.appendChild(toast);

    function showToast(message, isError = false) {
        toast.textContent = message;
        toast.className = ''; // Reset classes
        if (isError) {
            toast.classList.add('error');
        }
        toast.classList.add('show');

        // Hide toast after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();

        // Validation check
        if (!nameInput || !emailInput || !messageInput) {
            showToast('❌ Please fill in all required fields.', true);
            return;
        }

        if (!emailInput.includes('@') || !emailInput.includes('.')) {
            showToast('❌ Please enter a valid email address.', true);
            return;
        }

        // Success Toast
        showToast('✅ Success! Thank you for your message, ' + nameInput + '.');
        
        // Clear form
        contactForm.reset();
    });
}


// ==========================================
// 3. ANIMATIONS & TRANSITIONS (Fade-in effect on scroll/load)
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });
});
