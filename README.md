# React Starter

Starter template for a React project with Vite, TypeScript, and Tailwind CSS.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Install Dependencies](#install-dependencies)
  - [Development](#development)
  - [Building for Production](#building-for-production)
- [Configuration Files](#configuration-files)
- [License](#license)

## Introduction

This project is a starter template for developing React applications using Vite as the bundler, TypeScript for type safety, and Tailwind CSS for rapid styling. It provides a streamlined setup to quickly start new projects with modern web development tools.

## Features

- **Vite**: Lightning-fast build tool for modern web development.
- **TypeScript**: Typed superset of JavaScript for enhanced code quality.
- **React**: Popular JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Linting and Formatting**: Integrated ESLint and Prettier setup for consistent code quality.

## Getting Started

### Install Dependencies

To get started with this project, follow these steps to install its dependencies:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/react-starter.git
   cd react-starter
   ```

2. **Install Node.js and npm:**

   Make sure you have Node.js (v14 or higher) and npm (v7 or higher) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

3. **Install project dependencies:**

   Run either of the following commands based on your package manager:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

   This will install all the necessary dependencies listed in `package.json`.

### Development

To start a development server with hot-reloading, run:

```bash
npm run dev
```

This will start the development server. By default, it will run on `http://localhost:5173`.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will compile the TypeScript code and optimize assets for production.

## Configuration Files

### Vite Configuration

You can customize the Vite configuration by editing the `vite.config.ts` file. For example, to change the development server port, modify the `server.port` option:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change this to your desired port
  },
})
```

Adjust the `port` value to the port number you want to use. After saving the changes, restart the development server (`npm run dev`) for the new port configuration to take effect.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
