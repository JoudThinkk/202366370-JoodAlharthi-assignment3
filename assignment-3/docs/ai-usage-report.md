# AI Usage Report - Assignment 3

## 1. Tools Used & Use Cases

* **Google Gemini:** Used for brainstorming, architectural guidance, JavaScript logic (GitHub API integration, real-time filtering, and form validation), CSS styling, and initial documentation drafts.
* **Copilot SDK in VS Code:** Used for reviewing the complete assignment against the rubric, identifying defects, correcting and documenting the implementation, optimizing an image, cleaning system files, and updating this AI usage report.

## 2. Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **A01** | Google Gemini (2.5 Pro) | 2026-11-08 | Designing the GitHub API fetch integration and error handling. | `assignment-3/js/script.js`, `assignment-3/index.html` | Generated the `fetchGitHubRepos` asynchronous function and error/loading states. Reviewed the response handling and verified API behavior and failure feedback. |
| **A02** | Google Gemini (2.5 Pro) | 2026-11-08 | Implementing complex filtering and real-time search logic. | `assignment-3/js/script.js`, `assignment-3/index.html` | Created `filterAndSearchProjects` by combining category and search conditions. Tested the All, Web Development, and Networking filters and live search behavior. |
| **A03** | Google Gemini (2.5 Pro) | 2026-11-08 | Enhancing form validation and toast notification feedback. | `assignment-3/js/script.js`, `assignment-3/css/styles.css`, `assignment-3/index.html` | Implemented custom `novalidate` handling and dynamic success/error Toast alerts. Verified empty, invalid, and valid form submissions. |
| **C01** | Copilot SDK in VS Code | 2026-11-20 | Rubric review and API defect correction. | `assignment-3/js/script.js`, `assignment-3/index.html`, `assignment-3/README.md`, `assignment-3/docs/technical-documentation.md` | Replaced the incorrect GitHub API username with `JoudThinkk`, strengthened email validation, and corrected the displayed API account and documentation references. Verified JavaScript syntax, HTTP API results, and local asset responses. |
| **C02** | Copilot SDK in VS Code | 2026-11-20 | Performance optimization and project cleanup. | `assignment-3/images/seraj.png`, `assignment-3/images/seraj.jpg`, `assignment-3/.DS_Store`, root `.DS_Store` | Converted the 1.3 MB PNG project image to a 132 KB JPEG and removed `.DS_Store` system files. Updated the project image reference and verified the JPEG loads successfully over the local server. |
| **C03** | Copilot SDK in VS Code | 2026-11-20 | Repository structure and setup documentation. | `.gitignore`, `assignment-3/.gitignore`, `assignment-3/README.md`, `assignment-3/docs/technical-documentation.md` | Added ignore rules, added setup instructions, corrected the Assignment 2 folder name to Assignment 3, and expanded technical documentation with feature data flow, testing, and performance details. Reviewed the final Markdown and file paths. |
| **C04** | Copilot SDK in VS Code | 2026-11-20 | AI evidence documentation. | `assignment-3/docs/ai-usage-report.md` | Updated this report to use the rubric table format, added complete tool and file information, and clarified the required `conversations/`, `artifacts/`, and evidence ZIP submission. Reviewed the declaration and usage-log entries for consistency. |
| **C05** | Copilot SDK in VS Code | 2026-11-20 | Added an immediately visible dynamic-content feature in response to rubric feedback. | `assignment-3/index.html`, `assignment-3/js/script.js`, `assignment-3/css/styles.css`, `assignment-3/README.md`, `assignment-3/docs/technical-documentation.md`, `assignment-3/docs/ai-usage-report.md` | Added a greeting that updates live using the visitor's typed name and local time of day, styled for light/dark themes, and documented the feature. Verified JavaScript syntax and checked that the input, live output, and handler use matching IDs. |
| **C06** | ChatGPT (model not recorded) | 2026-11-20 | Getting Git/project setup instructions to run the portfolio locally. | None (instructions only) | Received terminal commands to enter the `assignment-3` folder and serve the site locally with Python. No project files were changed by that guidance. |
| **C07** | Copilot SDK in VS Code | 2026-11-20 | Documenting ChatGPT use in this AI report. | `assignment-3/docs/ai-usage-report.md` | Added the ChatGPT setup-guidance entry and recorded this report update in the usage log. Checked that both entries follow the table's required fields. |

## 3. Benefits & Challenges
* **Benefits:** AI assistance streamlined the implementation of asynchronous JavaScript, error handling, filtering, validation, and documentation. The rubric review also identified defects that could otherwise reduce marks, including the GitHub account mismatch, weak email check, oversized image, and incorrect setup wording.
* **Challenges:** AI-generated suggestions had to be checked against the real repository structure and verified through browser-related testing. Gemini conversation details and pre-edit artifacts must be exported manually for the Blackboard evidence ZIP.

## 4. Learning Outcomes
Through this assignment, I deepened my technical understanding of asynchronous programming (`async/await`), DOM manipulation, search and filter algorithms, browser `localStorage`, API error handling, responsive CSS, and form validation. I also learned to verify AI suggestions rather than submitting them unchanged.

## 5. Responsible Use & Modifications
All AI-generated code, styling, and documentation suggestions were reviewed and adapted to this portfolio. I verified JavaScript syntax, the corrected GitHub API response, local asset paths, and image optimization. I fully understand and can explain all code submitted and take responsibility for the final result.

## 6. Evidence Packaging

Before Blackboard submission, export all Gemini conversations used for this assignment and save them in the required `conversations/` directory. Save AI-produced files or text from before manual edits in the required `artifacts/` directory. Package both directories into `202366370-JoodAlharthi-assignment3-ai-evidence.zip`. Do not commit the evidence ZIP or its source logs to the repository.

## 7. Declaration
I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

* **Name:** Joud Khalid Alharthi
* **Student ID:** 202366370
* **Date:** 2026-11-20