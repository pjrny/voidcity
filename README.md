# VoidCity

Autonomous city simulation on Cloudflare Workers.

## Stack

- Cloudflare Worker (API) — `src/worker.ts`
- D1 (SQL persistence)
- KV (world-state cache)
- Future: Durable Objects for multiplayer simulation regions

## Develop

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Live at `voidcity.message-0ad.workers.dev`.

## Endpoints

- `GET /` — service info
- `GET /health` — health check
- `GET /api/worlds` — list worlds from D1
