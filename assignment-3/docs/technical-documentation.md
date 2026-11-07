# Technical Documentation - Assignment 2

## 1. Overview
  This technical documentation outlines the architecture, advanced technology stack, data handling, and structural design of the Personal Portfolio Website for **Assignment 2**. Building upon the static foundation of Assignment 1, this iteration introduces client-side interactivity, persistent storage, form validation, and modern user experience (UX) enhancements, all structured cleanly to ensure maintainability and seamless execution without requiring a backend server.

## 2. Technology Stack & Implementation

- **HTML5:** Utilized semantic elements for clean and accessible page structuring, including:
  - `<header>` / Navigation structure
  - `<section>` (for partitioning major content blocks like About, Projects, and Contact)
  - `<div>` (for flexible layouts, grids, and container wrappers)
  - `<h2>` and `<h3>` (for hierarchical headings)
  - `<p>` (for text descriptions and taglines)
  - `<img>` (for displaying project and profile image assets)
  - `<form>`, `<label>`, `<input>` (text and email), `<textarea>`, and `<button>` (for the interactive contact section)

- **CSS3:** Advanced styling utilizing:
  - **CSS Flexbox** (for the About section alignment and layout responsiveness)
  - **CSS Grid** (for the structured projects layout)
  - Media queries and responsive design techniques
  - Custom CSS classes and state styling for the Dark/Light Mode theme and Toast notifications

- **JavaScript (ES6+):** Client-side programming handling:
  - DOM manipulation and event listeners
  - Browser **`localStorage`** API for persistent theme preference storage
  - Form validation logic and input verification
  - Dynamic UI generation (floating Toast notification system with custom success/error feedback states)
  - Smooth entrance animations and page transitions

## 3. Project Directory Architecture

The project files are organized into dedicated subfolders for clarity, separation of concerns, and correct relative pathing:
```text
assignment-2/
│
├── README.md                   # Comprehensive project documentation & local setup instructions
├── index.html                  # Main entry point and document structure
├── css/
│   └── styles.css              # Custom styles, dark mode overrides, and toast UI styles
├── js/
│   └── script.js               # DOM manipulation, localStorage, form validation, and toast logic
├── images/                     # Media directory for profile and project images
│   ├── JOOD-3.png
│   ├── NET.jpeg
│   └── seraj.png                 
└── docs/
    ├── ai-usage-report.md      # Detailed documentation of AI collaboration and 
    └── technical-documentation.md # System architecture and implementation details for Assignmen2
   ```
## 4. Responsive Design & Compatibility
   The website is fully optimized for responsive design and compatibility across various environments. Viewport adaptability was thoroughly tested using browser Developer Tools to ensure seamless scaling across mobile devices, tablets, and desktop displays. Additionally, all resources including stylesheets, scripts, and images utilize relative paths pointing directly to their respective directories (`css/`, `js/`, `images/`) to prevent broken links and guarantee smooth cross-environment execution. Furthermore, state synchronization is carefully maintained to ensure that dynamic UI components, such as theme states and feedback notifications, adapt smoothly without causing layout shifts or performance bottlenecks.
