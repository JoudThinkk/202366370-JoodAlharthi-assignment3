# Personal Portfolio Website - Assignment 3

## 🌟 Project Overview
This repository contains the third and advanced iteration of my personal portfolio website, developed as part of **Assignment 3**. Building upon the interactive foundation of Assignment 2, this version introduces robust **API Integration** (fetching live repositories directly from GitHub), **Complex Logic & State Management** (real-time search and category filtering), and advanced client-side error handling to meet all professional evaluation criteria.

---

## 🚀 Key Features & Technical Implementation

### 1. GitHub API Integration (`API Integration`)
* Implemented an asynchronous function (`fetchGitHubRepos`) utilizing JavaScript's `fetch` and `async/await` to query public repositories dynamically from my GitHub account (`@JoudThink`).
* **Loading & Error States:** Designed resilient client-side architecture featuring a loading indicator during data retrieval and a user-friendly error state (`.error-state`) to handle network failures gracefully according to rubric specifications.

### 2. Complex Logic & Real-time Filtering (`Complex Logic`)
* **Dual-Layer Filtering:** Combined category-based buttons (All, Web, Network) with a live text search input (`#project-search`) to filter projects dynamically.
* **Event-Driven UI Updates:** Listens to real-time `'input'` events on the search box and `'click'` events on category buttons, updating project cards instantly without page reloads.
* **Smooth Transitions:** Applied CSS opacity and transform transitions for clean fade-in and fade-out effects during searches.

### 3. Dynamic Content & Theme Switcher
* Implemented a dynamic **Dark/Light Mode** toggle button with smooth CSS transitions (`transition: background-color 0.3s ease, color 0.3s ease;`).
* Dynamically updates UI elements, background colors, card styles, and text colors based on the selected mode.

### 4. Client Side Data Handling (`localStorage`)
* Integrated browser **`localStorage`** to remember the user's preferred theme across sessions.
* Features a unique visitor counter to track interactions securely on the client side.

### 5. Interactive Contact Form & Form Validation
* Integrated `novalidate` in HTML combined with custom JavaScript validation and custom Toast notifications.
* **Floating Toast Notifications:** Delivers animated success (green) and error (red) feedback with auto-fade out after 4 seconds.

---

## 🛠️ Technologies Used
* **HTML5:** Semantic layout structuring (`<header class="site-header">`, `<section>`, forms with `novalidate`).
* **CSS3:** Flexbox, CSS Grid, smooth transitions, and custom dark mode styling overrides.
* **JavaScript (ES6+):** Asynchronous API requests (`fetch`), DOM manipulation, `localStorage`, real-time search algorithms, and custom toast notifications.

---
## 📁 Project Directory Structure
```text
assignment-3/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── images/
│   ├── JOOD-3.png
│   ├── NET.jpeg
│   └── seraj.png
└── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md

3. **Open the Project:**
   - Open **Visual Studio Code**, click on `File > Open Folder`, and select the extracted `assignment-2` folder.

4. **Launch the Website:**
   - **Method 1 (Quick Open):** Navigate to the project folder, locate the `index.html` file, and double-click it to open it directly in your default web browser.
   - **Method 2 (Recommended - Live Server):** If you are using VS Code, install the **Live Server** extension. Right-click on `index.html` and select **"Open with Live Server"** to view the live webpage with automatic reloading capabilities.


##  AI Usage Summary

During the development of **Assignment 2**, Artificial Intelligence tools which was Gemini utilized responsibly and transparently as a collaborative assistant to enhance the learning and development process. 

### How AI Was Utilized:
1. **Brainstorming & Logic Design:** 
   - Assisted in conceptualizing the JavaScript logic for dynamic floating toast notifications (`showToast` function) and robust form validation rules.
   - Discussed approaches for integrating browser `localStorage` to securely store and retrieve the user's preferred theme.
2. **Code Structure & Refinement:** 
   - Guided the restructuring of event listeners and DOM manipulation methods to ensure clean, modular, and maintainable JavaScript code.
   - Helped troubleshoot styling conflicts between light and dark modes in CSS.
3. **Documentation:** 
   - Assisted in organizing and drafting clear technical explanations for the project structure and local setup instructions.

### Student Role & Academic Integrity:
- **Manual Review & Adaptation:** Every piece of code suggested by AI tools was thoroughly reviewed, tested, and manually adapted to match my personal design choices, project architecture, and exact assignment requirements.
- **Understanding:** I fully understand all implemented features and lines of code within this repository. 

For a complete and detailed breakdown of prompts and tool interactions, please refer to the dedicated [AI Usage Report](docs/ai-usage-report.md).