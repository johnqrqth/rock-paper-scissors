# Rock Paper scissors game.

This is code for a Rock paper scissors game for a challenge.

## 🚀 Tech Stack

- **Frontend**: React Typescript and TailwindCSS

---

## 🚦 Git Workflow Guidelines

We use a simplified Git flow based on the following branch strategy:

### 🔀 Branching Model

| Branch      | Purpose                            |
| ----------- | ---------------------------------- |
| `main`      | Production-ready release branch    |
| `develop`   | Integration branch for ongoing dev |
| `feature/*` | Feature-specific development       |
| `fix/*`     | Hotfix or bugfix branches          |

### 📌 Rules

- **Always branch off `develop`** when starting a new feature.
- **Use Pull Requests** to merge `feature/*` or `fix/*` into `develop`.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)

---

## Install & Run

```bash
git clone https://github.com/johnqrqth/rock-paper-scissors.git
cd rock-paper-scissors
yarn install
yarn dev
```

## ESLint & Type Checking

```bash
yarn lint
yarn typecheck
```

