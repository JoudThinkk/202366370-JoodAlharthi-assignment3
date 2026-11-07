# Technical Documentation - Assignment 3

## 1. Overview
This technical documentation outlines the architecture, advanced technology stack, data handling, and structural design of the Personal Portfolio Website for **Assignment 3**. Building upon the static and interactive foundation of Assignment 2, this iteration introduces robust **API Integration** (fetching live repositories from GitHub), **Complex Logic & State Management** (real-time search and category filtering), and advanced client-side error handling to satisfy all professional grading criteria without requiring a backend server.

## 2. Technology Stack & Implementation

- **HTML5:** Utilized semantic elements for clean and accessible page structuring, including:
  - `<header class="site-header">` / Navigation structure with sticky positioning and theme toggle control
  - `<section>` (for partitioning major content blocks like About, Projects, and Contact)
  - `<div class="project-controls">` (housing real-time search inputs and category filter buttons)
  - `<h2>` and `<h3>` (for hierarchical headings)
  - `<p>` (for text descriptions and taglines)
  - `<img>` (for displaying profile and project image assets)
  - `<form novalidate>`, `<label>`, `<input>`, `<textarea>`, and `<button>` (for the custom-validated interactive contact section)

- **CSS3:** Advanced styling utilizing:
  - **CSS Flexbox** (for alignment, header containers, and UI controls layout)
  - **CSS Grid** (for the structured responsive projects layout)
  - Media queries and responsive design techniques
  - Custom CSS classes and state styling for the Dark/Light Mode theme, Toast notifications, and smooth `opacity` transitions (`transition: background-color 0.3s ease, color 0.3s ease;`)

- **JavaScript (ES6+):** Client-side programming handling:
  - **Asynchronous API Integration (`fetch` / `async/await`):** Live fetching of public repositories from the GitHub account (`@JoudThink`) with dynamic DOM rendering.
  - **Robust Error & Loading States:** Handling network latency with loading indicators and catching API failures gracefully with user-friendly error alerts.
  - **Real-time Search & Filtering Logic:** Combined filtering algorithms checking both selected categories and search queries instantly on user input (`'input'` and `'click'` event listeners).
  - Browser **`localStorage`** API for persistent theme preference storage and unique visitor counting.
  - Custom form validation logic and a floating Toast notification system.

## 3. Project Directory Architecture

The project files are organized into dedicated subfolders for clarity, separation of concerns, and correct relative pathing:
```text
assignment-3/
│
├── README.md                   # Comprehensive project documentation & local setup instructions
├── index.html                  # Main entry point and document structure
├── css/
│   └── styles.css              # Custom styles, dark mode overrides, API loading/error states, and toast UI styles
├── js/
│   └── script.js               # GitHub API fetching, async error handling, search/filter logic, localStorage, and validation
├── images/                     # Media directory for profile and project images
│   ├── JOOD-3.png
│   ├── NET.jpeg
│   └── seraj.png                 
└── docs/
    ├── ai-usage-report.md      # Detailed documentation of AI collaboration (Gemini)
    └── technical-documentation.md # System architecture and implementation details for Assignment 3
