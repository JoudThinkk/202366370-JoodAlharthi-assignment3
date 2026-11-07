
# Personal Portfolio Website - Assignment 2

##  Project Overview
This repository contains the second iteration of my personal portfolio website, developed as part of **Assignment 2**. Building upon the static layout of Assignment 1, this version introduces advanced **interactivity, client-side data handling, persistent storage, form validation, and modern user experience (UX) enhancements** built entirely with vanilla JavaScript and modern CSS.

---

##  Key Features & Technical Implementation

### 1. Dynamic Content & Theme Switcher
- Implemented a dynamic **Dark/Light Mode** toggle button.
- Dynamically updates UI elements, background colors, card styles, and text colors based on the selected mode.
- Updates the button text and icon dynamically (`🌙 Dark Mode` / `☀️ Light Mode`).

### 2. Client Side Data Handling (`localStorage`)
- Integrated browser **`localStorage`** to remember the user's preferred theme.
- When a user revisits or reloads the page, their last chosen theme (Dark or Light) is automatically retrieved and applied, preventing preference reset.

### 3. Interactive Contact Form & Form Validation
- Developed an interactive contact form with real time field validation (Name, Email, and Message).
- Includes error checking logic to ensure no required fields are left blank.
- Validates email input formats to ensure they contain proper structure (including `@` and `.`).

### 4. Modern User Feedback (Custom Toast Notifications)
- Replaced standard static text alerts with a dynamic **floating Toast Notification system**.
- Delivers clear, animated feedback to users (*what happened and what to do next*):
  - **Success Toasts:** Green notifications confirming successful form submissions with personalized greetings.
  - **Error Toasts:** Red notifications guiding users to fix empty fields or incorrect email formats.
  - Automatically fades out after 4 seconds for a clean UI experience.

### 5. Animations & Smooth Transitions
- Added smooth fade in entrance animations across sections upon page load.
- Implemented interactive hover effects (`transform: translateY`) on project cards for an engaging user experience.

---

## Technologies Used
- **HTML5:** Semantic layout structuring.
- **CSS3:** Flexbox, CSS Grid, and custom dark mode styling.
- **JavaScript (ES6+):** DOM manipulation, `localStorage`, form validation, and dynamic toast notifications.

---
##  Project Directory Structure
```text
assignment-2/
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
```

##  How to Run Locally

To run and test this project locally on your machine, follow these detailed steps:

### Prerequisites
- A modern web browser (Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge).
- A code editor (such as **Visual Studio Code**, which is recommended).

### Step-by-Step Instructions
1. **Clone or Download the Repository:**
   - If using Git, open your terminal and run:
     ```bash
     git clone <repository-url>
     ```
   - Alternatively, download the project ZIP folder from GitHub and extract it to your preferred directory.

2. **Verify Folder Structure:**
   - Ensure that all files and folders are correctly placed in the root directory as shown below:
     ```text
     assignment-2/
     ├── index.html
     ├── css/styles.css
     ├── js/script.js
     ├── images/ (containing project assets)
     └── docs/ (containing documentation reports)
     ```

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