# Movie Explorer App

[live demo](https://stately-capybara-ab3e61.netlify.app/)

A modern React application for browsing movies with beautiful animations and
responsive design.

![App Screenshot](./public/Screenshot%202025-05-16%20230427.png)

## Features

- 🎬 Search and browse movies with detailed information
- ✨ Smooth animations powered by Framer Motion
- 🎨 Elegant UI built with Material-UI components
- ⚡ Efficient data fetching with React Query
- 📱 Fully responsive design

## Technologies Used

- React
- Material-UI (MUI)
- Framer Motion
- React Query
- Vite

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/movie-explorer.git
```

2. Install dependencies

```bash
cd movie-explorer
npm install
```

3. Start development server

```bash
npm run dev
```

## Development

### Prerequisites

- Node.js (v18 or later recommended)
- npm (or yarn)

### Setup

1.  Clone the repository:
    ```bash
    git clone https://your-repository-url.git
    cd your-project-directory
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the App

To start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if
5173 is in use).

## Deployment

This project is configured for easy deployment on platforms like Netlify.

### Netlify

1.  Connect your Git repository to Netlify.
2.  Configure the build settings:
    - **Build command:** `npm run build` (or `yarn build`)
    - **Publish directory:** `dist`
3.  Deploy your site.

The live demo is hosted on Netlify:
[live demo](https://stately-capybara-ab3e61.netlify.app/)

## Project Structure

```
your-project-directory/
├── public/              # Static assets (e.g., images, favicon)
├── src/
│   ├── assets/            # Static assets like images, fonts
│   ├── components/        # Reusable UI components (e.g., MovieCard.jsx, SearchBar.jsx, Loader.jsx)
│   ├── hooks/             # Custom React Hooks
│   ├── lib/               # Utility functions, API configurations, etc.
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── .gitignore           # Specifies intentionally untracked files that Git should ignore
├── index.html           # The main HTML page that is served
├── package.json         # Lists project dependencies and scripts
├── README.md            # Project documentation
└── vite.config.js       # Vite build tool configuration
```

## Code Style

This project uses [Prettier](https://prettier.io/) for consistent code
formatting. It's recommended to set up Prettier in your code editor to
automatically format code on save.

To format all files (ensure you have a script in `package.json` like
`"format": "prettier --write ."`):

```bash
npm run format
```

or

```bash
yarn format
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.
