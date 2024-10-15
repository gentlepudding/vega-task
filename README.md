# Vega Financial Portfolio App

This project is a frontend application built using React and TypeScript to display a user's financial portfolio. It features:

- **Portfolio Balance Donut Chart**: A chart displaying the user's balance by asset class or specific asset.
- **Positions Table**: A tabular representation of the portfolio's assets.
- **Historical Chart**: A line chart showing the performance of the portfolio over time.

The app includes a public login page with simple local storage credentials and a secure dashboard that leverages RESTful API endpoints for dynamic data fetching.

## Features

1. **Login Page**: A simple login interface that stores user credentials in local storage.
2. **Portfolio Balance Donut Chart**: Displays the balance, switchable between asset classes and individual assets.
3. **Positions Table**: Lists the user's current asset holdings in a table format.
4. **Historical Chart**: Shows the portfolio performance over time with time range filters.

## Requirements

- Node.js (v16 or higher recommended)
- npm (v8 or higher) or yarn

## Installation

Follow these steps to get the application up and running:

1. **Clone the repository**:

   ```
   bash
   git clone https://github.com/gentlepudding/vega-task.git
   ```

2. **Install Dependencies**:

To install all required dependencies, run:

```
# With npm
npm install

# Or with yarn
yarn install
```

3. **Run server**:

```
cd src
cd api
node --import=tsx index.ts
```

3. **Run the Application**:

To start the development server, run:

```
# With npm
npm start

# Or with yarn
yarn start
```

4. **Running Tests**:

To start the development server, run:

```
# With npm
npm test

# Or with yarn
yarn test
```
5. **Build**:

To build the application for production, run:

```
# With npm
npm run build

# Or with yarn
yarn run build
```

The build files will be created in the build folder.

## Folder Structure

```
    vega-app/
    ├── public/               # Static assets
    ├── src/
    │   ├── api/              # API services and calls React components (DonutChart, Table, History, etc.)
    │   ├── components/       # React components (DonutChart, Table, History, etc.)
    │   ├── test/             # Test for the main components
    │   ├── App.tsx           # Main App component
    │   ├── index.tsx         # Entry point for the React app
    │   ├── index.css         # Styles
    ├── package.json          # Project dependencies and scripts
    ├── tsconfig.json         # Configuration file for ts
    ├── README.md             # This file

```