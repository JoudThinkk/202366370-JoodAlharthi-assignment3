# Technical Documentation - Assignment 3

## 1. Overview
This technical documentation outlines the architecture, advanced technology stack, data handling, and structural design of the Personal Portfolio Website for **Assignment 3**. Building upon the static and interactive foundation of Assignment 2, this iteration introduces robust **API Integration** (fetching live repositories from GitHub), **Complex Logic & State Management** (real-time search and category filtering), and advanced client-side error handling to satisfy all professional grading criteria without requiring a backend server.

## 2. Technology Stack & Implementation

- **HTML5:** Utilized semantic elements for clean and accessible page structuring, including:
  - `<header class="site-header">` / Navigation structure with sticky positioning and theme toggle control
  - `<section>` (for partitioning major content blocks like About, Projects, and Contact)
  - `<input id="visitor-name">` and an `aria-live` greeting region for the personalized dynamic greeting
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
  - **Asynchronous API Integration (`fetch` / `async/await`):** Live fetching of public repositories from the GitHub account (`@JoudThinkk`) with dynamic DOM rendering.
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
│   └── seraj.jpg                 
└── docs/
    ├── ai-usage-report.md      # Detailed documentation of AI collaboration (Gemini)
    └── technical-documentation.md # System architecture and implementation details for Assignment 3

## 4. Feature Data Flow

### Personalized Greeting
- The About section listens for input in the visitor-name field.
- As the visitor types, the greeting combines their trimmed name with a time-of-day greeting.
- Clearing the field restores the prompt; `textContent` safely displays the visitor-provided name.

### Theme and Visitor State
- Theme preference is read from `localStorage.theme` when the page loads.
- Clicking the theme button toggles `dark-mode` and saves `dark` or `light`.
- The visitor count is stored under `visitorCount`; the page updates the footer value from the browser state.

### Project Filtering
- The active category button and search text are combined for each project card.
- A card remains visible only when its category and title or description match the current query.
- Filter buttons update the active state before applying the combined condition.

### GitHub API
- `fetchGitHubRepos()` requests the four recently updated public repositories for `@JoudThinkk`.
- HTTP errors and network failures are caught and shown in the API error state.
- Successful results are inserted into the repository grid; an empty response shows a no-repositories message.

### Contact Validation
- Submission is intercepted to prevent an unintended page reload.
- Required fields are trimmed and checked for empty values.
- Email input is checked with a basic regular expression.
- Successful submissions show a green toast and reset the form.

## 5. Responsive and Performance Considerations

- CSS Grid automatically adjusts project columns for available viewport width.
- Flexbox and wrapped controls keep the header, project controls, and about section usable on smaller screens.
- Images are sized with fixed card or avatar dimensions and `object-fit` to avoid layout shifts.
- Unneeded API work is avoided during filtering because the static project cards are filtered in the browser.
- The GitHub section includes loading and error states so users receive feedback during requests.

## 6. Testing Checklist

- JavaScript syntax: `node --check js/script.js`
- API: confirm HTTP 200 and repository cards for the configured GitHub account.
- Theme: toggle in both directions and reload to verify persistence.
- Filtering: test All, Web Development, and Networking with and without search text.
- Validation: submit empty, invalid-email, and valid-form values.
- Responsive layout: inspect desktop and mobile viewport widths.
- Broken assets: verify every image and stylesheet path returns successfully from a local server.
