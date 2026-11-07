# AI Usage Report - Assignment 2

## 1. Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|----|--------------|------|---------|----------------|------------------------------------------|

| C01 | Gemini | 19 October 2026| Theme Toggle & LocalStorage Logic | `js/script.js`, `css/styles.css` | **AI:** Provided the JavaScript logic for browser `localStorage` and theme state. **Personal:** I integrated the script, tested it, and verified theme retention across page reloads in the browser. |

| C02 | Gemini | 19 October 2026 | Form Validation & Dynamic Toast System | `js/script.js`, `css/styles.css` | **AI:** Generated the snippet for validating required fields/emails and creating the dynamic toast notification. **Personal:** I integrated the validation function, tested empty/invalid inputs using VS code integred browser, and fine-tuned the centered positioning. |

| C03 | Gemini | 19 October 2026| Git Troubleshooting & Submodule Fixes | Terminal / Git Configuration | **AI:** Provided terminal commands (`git rm -r --cached .`) to resolve path conflicts and submodule issues. **Personal:** I executed the commands in VS Code terminal, verified clean repository status, wrote commit messages, and pushed the assignment files to GitHub. |

| A01 | Gemini | 19 October 2026 | Technical Documentation Drafting | `docs/technical-documentation.md` | **AI:** Outlined the technical documentation structure. **Personal:** I authored and customized all the descriptive content to match my Assignment 2 portfolio architecture (HTML5 semantics, CSS Grid/Flexbox, and JS features). |

| A02 | Gemini | 19 October 2026 | AI Usage Report Formatting | `docs/ai-usage-report.md` | **AI:** Formatted the usage table structure according to requirements. **Personal:** I reviewed, and confirmed my personal declaration and student ID. |

| A03 | Gemini | 19 October 2026 | README File Structuring | `README.md` | **AI:** Provided the template and layout structure for the project README file. **Personal:** I customized the repository details, directory overview, and local execution instructions to accurately match my Assignment 2 submission. |

## 2. Declaration

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

- **Student Name:** Joud Alharthi
- **Student ID:** s202366370
- **Date:** 19 October 2026


## 3. Benefits & Challenges:

- **Benefits:**
    Gemini assisted me greatly in understanding the advanced requirements of Assignment 2. Instead of spending excessive time figuring out how to write the logic for client-side storage and custom alerts from scratch, the AI provided clear foundational code snippets. Afterward, I thoroughly reviewed, tested, and adjusted every line of code—modifying variables, adjusting timing for UI notifications, restructuring event handlers, and fitting the styles to match my personal portfolio layout to ensure proper functionality and a clean architecture.

- **Challenges:** 
    I faced a minor challenge while synchronizing the dark/light mode state with `localStorage` and updating the toggle button text dynamically without causing visual glitches or state reset upon page refresh. By discussing the event listener flow and conditional statements step-by-step with the AI, I was able to debug the issue, understand how browser storage works in vanilla JavaScript, and implement a robust, working solution.

## 4. Learning Outcomes:
- **Code Review & Adaptation:**
    I gained hands-on experience in how to carefully review, test, and adapt JavaScript code written for client-side state management and form handling, seamlessly integrating it with my existing HTML and CSS structure.
    
- **Client-Side Data & UI Feedback:**
    I learned the practical implementation of browser `localStorage` to save user preferences, as well as how to intercept form submissions to validate user inputs (checking for empty fields and valid email structures) and deliver clean, professional user feedback through custom UI components.

- **Time Efficiency & Workflow Management:**
    Using AI as a collaborative assistant for the new interactive features saved me a tremendous amount of time while balancing university courses, quizzes, and a busy academic schedule. This approach allowed me to focus deeply on customizing the user experience, testing UI feedback, and fully understanding the underlying code efficiently.

## 5. Responsible Use & Modifications:

- **Visual Prototyping & Inspection:** 
    To ensure originality and precise styling, I used Chrome's Inspect tool for live visual testing of the new toast notifications, form error messages, and dark mode transitions. Since I am a visual person who prefers to see changes before finalizing them, I experimented with CSS properties, colors, padding, and animation timing directly in the live browser preview rather than guessing values in the original code.

- **Final Code Integration:**
    Once I found the exact visual aesthetics, behavior, and responsiveness that I liked through inspection and local testing, I updated the source code manually. This ensured correctness, proper code styling, and full academic integrity while tailoring the portfolio completely to my personal preference.
