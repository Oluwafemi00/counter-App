# Counter Logger Pro 📊

A sleek, persistent web application for tracking counts and logging them with timestamps. This app has been refactored from a basic counter into a functional productivity tool with data persistence and export capabilities.

## Features

- **Increment & Track**: Easily count entries with a responsive UI.
- **Data Persistence**: Uses `LocalStorage` to save your data even after a page refresh.
- **Smart Logging**: Each entry is saved with a timestamp (`HH:MM`).
- **Undo & Reset**: Remove the last mistake or wipe the entire history with safety confirmations.
- **CSV Export**: Download your logged data as a `.csv` file for use in Excel or Google Sheets.
- **Glassmorphism UI**: Modern, clean design that works on mobile and desktop.

## Tech Stack

- **HTML5**: Semantic structure for accessibility.
- **CSS3**: Modern Flexbox layout with custom properties (CSS variables).
- **Vanilla JavaScript**:
  - `ES6+` Syntax (Arrow functions, Template literals).
  - `Blob API` for file downloads.
  - `JSON` parsing for state management.

## 📂 File Structure

```text
├── index.html   # Application structure & UI
├── style.css    # Modern styles & layout
├── index.js     # Logic, State,
└── and storage   asset
```

1. **Clone the repository:**

   ```bash
   git clone https://github.com/oluwafemi00/counter-App.git



   ```

2. **Open the app:**
   Simply open index.html in any modern web browser
