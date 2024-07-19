# React.js Frontend Application

This repository contains a frontend application built with React.js . This application takes data from OmdbApi

## Prerequisites

- **React.js**: Version 18.3.1
- **npm**: Version 10.8.1

## Getting Started

To get the application up and running on your local machine, follow these steps:

1. Clone repository
    
    ```
    git clone https://github.com/mmyusuf48/technicaltest-reactjs.git
    ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install dependencies:

   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Key Dependencies

- **@tanstack/react-query**: For fetching, caching, synchronizing, and updating server state in React applications.
  - Version: 5.48.0
- **axios**: Promise based HTTP client for making HTTP requests.
  - Version: 1.7.2
- **@testing-library/user-event**: Simulates user interactions for testing purposes.
  - Version: ^13.5.0
- **react-icons**: Provides popular icons as React components.
  - Version: ^5.2.1
- **react-router-dom**: Declarative routing for React applications.
  - Version: ^6.25.1
- **@babel/core**: Babel compiler core.
  - Version: ^7.24.9
- **@babel/preset-env**: Smart Babel preset for compiling ES2015+ syntax.
  - Version: ^7.24.8
- **@babel/preset-react**: Babel preset for React.
  - Version: ^7.24.7
- **@testing-library/dom**: Provides simple and complete DOM testing utilities.
  - Version: ^10.3.2
- **@testing-library/jest-dom**: Custom jest matchers for asserting on DOM nodes.
  - Version: ^6.4.6
- **@testing-library/react**: Simple and complete React DOM testing utilities.
  - Version: ^16.0.0
- **autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes.
  - Version: ^10.4.19
- **jest**: JavaScript testing framework.
  - Version: ^29.7.0
- **jest-environment-jsdom**: Jest environment to simulate a browser environment.
  - Version: ^29.7.0
- **postcss**: Tool for transforming CSS with JavaScript plugins.
  - Version: ^8.4.39
- **tailwindcss**: Utility-first CSS framework for rapid UI development.
  - Version: ^3.4.6


## Structure

The `src` directory is organized as follows:

- **app**: Contains the main application components.
- **assets**: Stores images, fonts, and other static assets.
- **feature**: Contains feature-specific components and logic.
- **lib**: Contains utility functions and libraries.
- **service**: Contains API service functions.
- **test**: Contains test files for the application.
- **ui**: Contains reusable UI components.

## Running Tests

To run the tests for this application, use the following command:

```bash
npm test
```