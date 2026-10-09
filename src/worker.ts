export interface Env {
  DB: D1Database;
  CACHE: KVNamespace;
}

export default {
  async fetch(
    request: Request,
    env: Env
  ): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return Response.json({
        name: "VoidCity",
        version: "0.1.0",
        status: "online"
      });
    }

    if (url.pathname === "/health") {
      return Response.json({
        healthy: true
      });
    }

    if (url.pathname === "/api/worlds") {
      const worlds = await env.DB
        .prepare(
          "SELECT * FROM worlds"
        )
        .all();

      return Response.json(worlds.results);
    }

    return new Response(
      "Not Found",
      { status: 404 }
    );
  }
};
