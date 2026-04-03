# Personal Portfolio Builder

Personal Portfolio Builder is a frontend-only ReactJS application that lets users enter personal details, skills, projects, and contact information to generate a live portfolio webpage instantly. The project is designed in a Create React App style structure and focuses on beginner-friendly React concepts such as components, props, state, hooks, event handling, conditional rendering, and reusable UI blocks.

## Features

- Live portfolio preview that updates as the form changes
- Personal information form with validation
- Dynamic skill management using array state
- Dynamic project management using array state
- Reusable `SkillCard`, `ProjectCard`, and `Navbar` components
- Dark mode toggle
- Portfolio template switcher with `Professional` and `Minimal` styles
- Local storage saving
- Smooth scrolling navigation
- Collapsible form sections
- Project filtering by category
- Responsive modern layout with Flexbox and Grid

## Technology Stack

- ReactJS
- HTML5
- CSS3
- JavaScript (ES6)
- Create React App compatible setup using `react-scripts`

## Project Structure

```text
portfolio-builder/
  public/
    index.html
  src/
    App.js
    index.js
    components/
      About.js
      Contact.js
      Form.js
      Navbar.js
      PortfolioPreview.js
      ProjectCard.js
      Projects.js
      SkillCard.js
      Skills.js
    styles/
      App.css
      Form.css
      Portfolio.css
  package.json
  README.md
```

## Setup Steps

1. Open the project folder in a terminal.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open `http://localhost:3000` in the browser.

## How the App Works

### `App.js`

- Holds the main `portfolio` state using `useState`
- Stores form draft values for new skills and new projects
- Passes data and event handlers to child components using props
- Saves data to local storage with `useEffect`
- Controls dark mode, template switching, collapsible sections, and project filtering

### `Form.js`

- Displays the left-side form panel
- Uses `onChange`, `onClick`, and `onSubmit`
- Adds and removes skills dynamically
- Adds and removes projects dynamically
- Shows validation messages when important fields are missing

### `PortfolioPreview.js`

- Displays the right-side live portfolio preview
- Receives current portfolio data as props
- Renders the reusable preview sections

### Reusable Components

- `Navbar.js`: renders portfolio navigation links
- `SkillCard.js`: displays each skill in a card style
- `ProjectCard.js`: displays each project with title, description, technologies, and links
- `About.js`, `Skills.js`, `Projects.js`, and `Contact.js`: render preview sections with clean separation of concerns

## React Concepts Demonstrated

- Functional components
- `useState`
- `useEffect`
- Props passing
- Component reuse
- Array `map()`
- Array `filter()`
- Conditional rendering
- Event handlers
- Form validation

## Deployment Instructions

### Create a GitHub Repository

1. Create a new repository on GitHub named `portfolio-builder`.
2. Initialize git locally if needed:

```bash
git init
git add .
git commit -m "Initial portfolio builder project"
```

3. Connect the local project to GitHub:

```bash
git remote add origin https://github.com/your-github-username/portfolio-builder.git
git branch -M main
git push -u origin main
```

### Deploy to GitHub Pages

1. Update the `homepage` field in `package.json`:

```json
"homepage": "https://your-github-username.github.io/portfolio-builder"
```

2. Install the GitHub Pages package:

```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Run the deployment command:

```bash
npm run deploy
```

5. In the GitHub repository settings, confirm that GitHub Pages is serving from the deployed branch.

## Notes

- This project uses no backend, no database, and no external UI framework.
- All styling is written using plain CSS.
- The app is structured to stay readable for beginners while following modular React practices.
