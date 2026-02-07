# React + Vite + Tailwind CSS + TypeScript Project

A modern React application built with Vite, styled with Tailwind CSS, and written in TypeScript.

## Tech Stack

- **React 18** - A JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling for blazing fast development
- **Tailwind CSS** - A utility-first CSS framework
- **TypeScript** - JavaScript with syntax for types

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher)
- **npm** (version 7.x or higher) or **yarn**

You can check your versions by running:

```bash
node --version
npm --version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/himanshu8503/Graphketing-frontend-assigment.git
cd Graphketing-frontend-assigment
```

### 2. Install Dependencies

Install all required packages using npm:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

This will install all dependencies listed in `package.json`, including:
- React and React DOM
- Vite and related plugins
- Tailwind CSS and its dependencies
- TypeScript and type definitions

### 3. Start the Development Server

Run the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will start and be available at:

```
http://localhost:5173
```

The page will automatically reload when you make changes to the code.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
npm run build
```

### `npm run preview`

Locally preview the production build:

```bash
npm run preview
```

### `npm run lint`

Runs ESLint to check for code quality issues:

```bash
npm run lint
```

## Project Structure

```
project-root/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # React components
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   ├── types.tsx       # Contains all The Types
│   ├── data.tsx        #  contain Static or Test Data
│   └── index.css       # Global styles & Tailwind directives
├── .gitignore
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```




