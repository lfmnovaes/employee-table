# Employee Table

A React application for viewing employee data with a responsive design.

## Application Architecture

This application uses a monorepo approach with:

- React frontend (Vite)
- JSON Server backend for API simulation

Both services run simultaneously using the `concurrently` package, which enables launching multiple commands in parallel with a single NPM script.

## Docker Setup

### Run with Docker

```bash
docker compose up -d
```

### Access

- Frontend: http://localhost:5173
- API: http://localhost:3000/employees

### Logs

```bash
docker compose logs -f
```

### Stop

```bash
docker compose down
```

## Development Without Docker

### Prerequisites

- Node.js LTS (20.x)
- Yarn

### Setup

1. **Install dependencies**

```bash
yarn install
```

2. **Start both frontend and backend**

```bash
yarn dev
```

### Available Scripts

- **Frontend only**

```bash
yarn dev:front
```

Starts the Vite development server for the frontend only.

- **Backend only**

```bash
yarn dev:back
```

Starts the JSON Server for the API only.

- **Run tests**

```bash
yarn test
```

Runs all tests using Vitest.

- **Watch tests**

```bash
yarn test:watch
```

Runs tests in watch mode for development.

- **Code coverage**

```bash
yarn test:coverage
```

Runs tests with coverage reporting.

- **Format code**

```bash
yarn format
```

Formats code using Prettier.

- **Lint code**

```bash
yarn lint
```

Runs ESLint to check for code quality issues.
