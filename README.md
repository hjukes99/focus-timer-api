# Focus Timer API

Tiny TypeScript + Node scaffold for a local focus-session API.

## Pitch
A minimal backend starter for tracking focus sessions (start/stop/status/history) with no database and no deployment assumptions.

## Stack
- Node.js (runtime)
- TypeScript (app code)
- Node built-in test runner (initial smoke test placeholder)

## Setup
```bash
npm install
```

## Run / Test
```bash
npm run build
npm test
```

## Docker
```bash
docker build -t focus-timer-api .
docker run --rm -p 3000:3000 focus-timer-api
```
