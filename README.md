# Rock, Paper, Scissors, Lizard, Spock - Application Documentation

This document provides a comprehensive overview of the Rock, Paper, Scissors, Lizard, Spock game application, built as a coding challenge. It covers the project's features, technical architecture, state management strategy, and testing approach.

## ✨ Features

-   **Full Rock, Paper, Scissors, Lizard, Spock Logic**: Implements the complete set of rules for the expanded game.
    
-   **Interactive Gameplay**: A clear, multi-step flow from picking a choice to seeing the result.
    
-   **Score Tracking**: The player's score is updated based on wins and losses.
    
-   **Persistent State**: The score is saved to localStorage, so it persists across browser sessions.
    
-   **Rules Modal**: A pop-up modal clearly explains the game rules.
    
-   **Responsive Design**: The layout is fully optimized for both desktop and mobile devices.
    
-   **Polished Animations**: Smooth transitions and effects for a better user experience, including a "winner" state glow.
    

## 🚀 Tech Stack

-   **Frontend Framework**: React with TypeScript
    
-   **Styling**: Tailwind CSS
    
-   **State Management**: Redux Toolkit
    
-   **End-to-End Testing**: Cypress
    

----------

## 🚦 Installation and Local Development

### Prerequisites

-   [Node.js](https://www.google.com/url?sa=E&q=https%3A%2F%2Fnodejs.org%2F) (LTS recommended)
    
-   [Yarn](https://www.google.com/url?sa=E&q=https%3A%2F%2Fyarnpkg.com%2F) or [npm](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.npmjs.com%2F)
    
-   [Git](https://www.google.com/url?sa=E&q=https%3A%2F%2Fgit-scm.com%2F)
    

### Install & Run

To get the project up and running on your local machine, follow these steps:


```
# 1. Clone the repository
git clone https://github.com/johnqrqth/rock-paper-scissors.git

# 2. Navigate to the project directory
cd rock-paper-scissors

# 3. Install dependencies
yarn install

# 4. Start the development server
yarn dev
```


The application will be available at http://localhost:5173/.

### Linting & Type Checking

To ensure code quality and type safety, run the following commands:


```
# Run ESLint to check for code style issues
yarn lint

# Run the TypeScript compiler to check for type errors
yarn typecheck
```

----------

## 🏛️ Application Architecture

The application is built with a clean, component-based architecture and centralized state management to ensure predictability and scalability.

### Component Structure

The UI is broken down into several key components located in src/components/:

-   HomeScreen.tsx: The main container component that orchestrates the entire application. It decides whether to show the game choices or the result screen based on the current game status from the Redux store.
    
-   GameHeader.tsx: Displays the game title and the score box.
    
-   GameChoices.tsx: Renders the pentagon layout of the five choices for the user to pick from.
    
-   GameResult.tsx: Renders the screen after a choice is made, showing the user's pick, the computer's pick, and the game outcome ("YOU WIN", "YOU LOSE", "TIE").
    
-   ChoiceDisplay.tsx: A reusable component that renders a single choice circle (e.g., rock, paper). It's used in both GameChoices and GameResult.
    
-   RulesModal.tsx: A responsive modal that displays the game rules.
    

### State Management (Redux Toolkit)

We use **Redux Toolkit** for robust and predictable state management. All core application logic resides in the gameSlice.

-   **File**: src/redux/gameSlice.ts
    
-   **State Shape**: The slice manages the following state:
    
    -   score: The player's current score.
        
    -   userChoice: The choice made by the player (e.g., 'rock').
        
    -   computerChoice: The randomly generated choice from the computer.
        
    -   status: The current view of the game ('picking' or 'result').
        
    -   result: The outcome of the round ('win', 'lose', or 'tie').
        
-   **Game Flow**:
    
    1.  The user clicks a choice in GameChoices.
        
    2.  The setUserChoice action is dispatched, updating userChoice and changing the status to 'result'.
        
    3.  HomeScreen sees the status change and renders the GameResult component.
        
    4.  A setTimeout triggers the setComputerChoice action. This reducer randomly picks for the computer, compares it to userChoice, determines the result, and updates the score.
        
    5.  The score is automatically persisted to localStorage.
        
    6.  The user clicks "PLAY AGAIN", which dispatches the playAgain action to reset the state and return to the 'picking' status.
        

### Score Persistence

The score is saved to the browser's localStorage to persist between sessions. This is handled by two helper functions for clear separation of concerns:

-   getSavedScore(): Retrieves the score when the app first loads.
    
-   saveScoreToStorage(): Saves the score whenever it is updated in the Redux slice.
    

----------

## 🧪 Testing

This project uses **Cypress** for End-to-End (E2E) testing to simulate real user interactions and verify the application's behavior from start to finish.

### Running Tests

To open the Cypress Test Runner, use the following command:


```
# It's recommended to add this to package.json scripts
yarn cypress:open
```

### Testing Strategy

-   **Deterministic Outcomes**: The computer's choice is random, which makes testing difficult. We solve this by **stubbing Math.random()** in our Cypress tests. This allows us to force a specific outcome for the computer's choice and reliably test every win, lose, and tie scenario.
    
-   **Robust Selectors**: Tests use data-cy attributes (e.g., data-cy="score-value") to select elements instead of relying on fragile CSS classes or text content. This makes the tests more resilient to UI refactoring and style changes.
    
    Example in a component:

    
    ```
    <div data-cy="score-value">{score}</div>
    ```
    
    
    Example in a test:
    
    
    ```
    cy.get('[data-cy="score-value"]').should('contain.text', '13');
    ```

----------

## 📁 Folder Structure

The src directory is organized to separate concerns and make navigation easy.


```
src
├── assets
│   ├── images
│   └── ...
├── components
│   ├── modals
│   │   └── RulesModal.tsx
│   ├── ChoiceDisplay.tsx
│   ├── GameChoices.tsx
│   ├── GameHeader.tsx
│   └── GameResult.tsx
├── redux
│   ├── gameSlice.ts
│   └── store.ts
├── pages
│   └── HomeScreen.tsx
├── types
│   └── index.ts
├── utils
│   └── choices.ts
├── App.tsx
└── index.tsx
```
----------

## 🚦 Git Workflow Guidelines

We use a simplified Git flow based on the following branch strategy:

### 🔀 Branching Model

Branch

Purpose

main

Production-ready release branch

develop

Integration branch for ongoing dev

feature/*

Feature-specific development

fix/*

Hotfix or bugfix branches

### 📌 Rules

-   **Always branch off develop** when starting a new feature.
    
-   **Use Pull Requests** to merge feature/* or fix/* into develop.
