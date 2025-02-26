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

```bash
yarn install
yarn dev
```
