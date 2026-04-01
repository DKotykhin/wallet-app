# Wallet App

A React-based wallet/credit card dashboard that displays card balance, daily reward points, and a transaction history with detail views.

## Features

- **Card Balance** — shows a simulated card balance and available credit (out of $1,500 max)
- **Daily Points** — calculates reward points based on the current day within the season using a Fibonacci-like progression
- **Transaction List** — scrollable list of recent transactions with merchant icon, amount, status, and date
- **Transaction Details** — tap any transaction to view full details including status, description, and total

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [React Router v7](https://reactrouter.com/) — client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [Font Awesome](https://fontawesome.com/) — merchant/transaction icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── TransactionCard.tsx   # Single transaction row
├── mockData/
│   └── mockTransaction.json  # Sample transaction data
├── pages/
│   ├── Home.tsx              # Dashboard (balance, points, transaction list)
│   └── Details.tsx           # Transaction detail view
├── types/
│   └── transaction.ts        # Transaction type definition
├── utils/
│   ├── wallet.ts             # Balance, points, and date formatting logic
│   └── icons.ts              # Icon resolver for transaction categories
└── App.tsx                   # Route definitions
```
