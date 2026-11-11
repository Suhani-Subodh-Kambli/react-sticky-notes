# React Sticky Notes 📝

A simple and interactive Sticky Notes application built using **React JS and Tailwind CSS**. This project allows users to create notes with headings and descriptions and delete them when they are no longer needed.

## ✨ Features

- **Create Notes:** Add new notes with a heading and description.
- **Delete Notes:** Remove unwanted notes with a single click.
- **Dynamic Rendering:** Notes are displayed dynamically using React's `.map()` method.
- **State Management:** Uses React's `useState` hook to manage notes and input values.
- **Controlled Components:** Form inputs are controlled using React state.
- **Interactive UI:** Simple sticky-note design with a clean dark-themed interface.
- **Responsive Layout:** Built using Tailwind CSS utility classes.

## 🛠️ Tech Stack

- **React JS** – Building reusable and interactive UI components.
- **JavaScript (ES6+)** – Application logic and array operations.
- **Tailwind CSS** – Styling and responsive layouts.
- **Vite** – Development server and build tool.

## 📂 Project Structure

```text
src/
├── App.jsx
├── main.jsx
└── index.css

public/
└── assets/
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd react-sticky-notes
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 📚 Concepts Practiced

This project helped me understand and practice:

- React Functional Components
- React `useState` Hook
- Controlled Form Components
- Event Handling (`onChange`, `onSubmit`, `onClick`)
- State Updates and Array Manipulation
- Spread Operator
- Array Methods (`map`, `push`, `splice`)
- Dynamic Rendering in React
- Tailwind CSS Styling

## 🔮 Future Improvements

Planned improvements for upcoming versions:

- [ ] Persistent note storage using `localStorage`.
- [ ] Implement `useEffect` for managing stored notes.
- [ ] Add functionality to edit existing notes.
- [ ] Add search functionality.
- [ ] Add different sticky-note colors.
- [ ] Add timestamps to notes.
- [ ] Improve mobile responsiveness.

## 📌 Current Limitations

- Notes are currently stored in React state and disappear when the page is refreshed.
- Notes cannot yet be edited after creation.
- No backend or database integration.
(This features will be added soon.)

## 👨‍💻 Author

Built as a learning project while exploring React JS and Tailwind CSS.

More features and improvements will be added as I continue learning React!