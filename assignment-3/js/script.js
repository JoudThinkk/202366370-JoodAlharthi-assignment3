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
    // Visitor Counter State using localStorage
    let visits = localStorage.getItem('visitorCount') || 1;
    if (!localStorage.getItem('visited')) {
        visits++;
        localStorage.setItem('visitorCount', visits);
        localStorage.setItem('visited', 'true');
    }
    document.getElementById('count').textContent = visits;

// ==========================================
// 2. COMPLEX LOGIC: PROJECT FILTERING & SEARCH
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projects-grid .project-card');
const searchInput = document.getElementById('project-search');

function filterAndSearchProjects() {
    const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const searchTerm = searchInput.value.toLowerCase().trim();

    projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();

        const matchesCategory = (activeCategory === 'all' || category === activeCategory);
        const matchesSearch = (title.includes(searchTerm) || desc.includes(searchTerm));

        if (matchesCategory && matchesSearch) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 50);
        } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
        }
    });
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterAndSearchProjects();
    });
});

if (searchInput) {
    searchInput.addEventListener('input', filterAndSearchProjects);
}

// ==========================================
// 3. API INTEGRATION (Fetch GitHub Repositories)
// ==========================================
async function fetchGitHubRepos() {
    const loadingEl = document.getElementById('github-loading');
    const errorEl = document.getElementById('github-error');
    const containerEl = document.getElementById('github-repos-container');

    try {
        const response = await fetch('https://api.github.com/users/JoudThink/repos?sort=updated&per_page=4');
        
        if (!response.ok) {
            throw new Error(`GitHub API Error: Status ${response.status}`);
        }

        const repos = await response.json();
        loadingEl.style.display = 'none';

        if (repos.length === 0) {
            containerEl.innerHTML = '<p>No public repositories found.</p>';
            return;
        }

        containerEl.innerHTML = '';
        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.className = 'project-card';
            repoCard.innerHTML = `
                <div class="card-body">
                    <h3>📂 ${repo.name}</h3>
                    <p>${repo.description ? repo.description : 'No description provided.'}</p>
                    <span class="badge web">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</span>
                    <br><br>
                    <a href="${repo.html_url}" target="_blank" style="color: #7AAD7B; font-weight: 600; text-decoration: none;">View on GitHub &rarr;</a>
                </div>
            `;
            containerEl.appendChild(repoCard);
        });

    } catch (error) {
        loadingEl.style.display = 'none';
        errorEl.style.display = 'block';
        errorEl.textContent = `⚠️ Could not load GitHub repositories. Please check your internet connection or try again later. (${error.message})`;
    }
}

window.addEventListener('DOMContentLoaded', fetchGitHubRepos);
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
