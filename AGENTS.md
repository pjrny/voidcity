# VoidCity — Agent Handoff

## First commands after clone

```bash
npm install
```

Create D1 (already created for this project):

```bash
npx wrangler d1 create voidcity
```

Create KV namespace (already created for this project):

```bash
npx wrangler kv namespace create CACHE
```

Update IDs in `wrangler.toml` after creation.

Apply schema:

```bash
npx wrangler d1 execute voidcity --file=schema.sql --remote
```

Deploy:

```bash
npx wrangler deploy
```

## Structure

- `src/worker.ts` — Cloudflare Worker entrypoint (API)
- `src/types/` — core data models (vector, building, citizen, flow)
- `src/simulation/` — tick loop, equations, LOD materialization
- `src/services/` — D1 and KV access helpers
- `src/world/` — world state model
- `schema.sql` — D1 schema
- `docs/` — spec and world model docs
