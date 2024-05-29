# SPA Application with Header and Reviews for MTG

This project is a Single Page Application (SPA) built using React (class components), Redux, TypeScript, and Vite. The application consists of a header with an image, a language dropdown, a live clock, and a main section displaying a list of reviews with pagination.

## Features

- **Header**:
  - Displays an image.
  - Includes a dropdown for selecting languages (ru, en).
  - Shows the current time in the format "hh:mm:ss".
- **Main Section**:
  - Displays a list of reviews (data sourced from `data.ts`).
  - Each review includes the client's name, review text, and date.
  - Paginated view with a maximum of 10 reviews per page.
  - The client's name is displayed in the format "Last Name First Initial".

## Technologies Used

- React (class components)
- Redux
- TypeScript
- Vite

<img src="https://skillicons.dev/icons?i=react,redux,ts,vite" />

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/eugenepokalyuk/react-mtg.git
   cd react-mtg
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open the application**:

   Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```
src/
├── assets/
│   └── logo.webp  # Image used in the header
├── components/
│   ├── App ── App.tsx
│   ├── Header ── Header.tsx
│   ├── Main ── Main.tsx
│   ├── Review ── Review.tsx
│   └── Watch ── Watch.tsx
├── store/
│   ├── index.ts
│   └── reducers.ts
├── data ── data.ts
└── main.tsx
```

### Explanation of Key Files

- **`src/data/data.ts`**: Contains the review data in both Russian and English.
- **`src/store/index.ts`**: Sets up the Redux store.
- **`src/store/reducers.ts`**: Contains the Redux reducers.
- **`src/components/Header/Header.tsx`**: Header component with an image, language dropdown, and clock.
- **`src/components/Main/Main.tsx`**: Main component that fetches and displays reviews with pagination.
- **`src/components/Review/Review.tsx`**: Review component to display individual reviews.
- **`src/components/Watch/Watch.tsx`**: Watch component that shows the current time.
- **`src/components/App/App.tsx`**: Main App component that ties everything together.
- **`src/main.tsx`**: Entry point for the React application.

## Comments

- The application uses class components as per the assignment requirements.
- No third-party libraries were used for UI components or styling to keep the implementation clean and straightforward.
- The `data.ts` file contains example reviews in both Russian and English.
- Redux is used to manage the language state and review data.
- The current time is displayed using a class component that updates every second.

## Deployment

To build the application for production, run:

```bash
npm run build
```

The built files will be in the `dist` directory, which can be deployed to any static hosting service.
