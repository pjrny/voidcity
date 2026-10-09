export async function loadWorlds(
  db: D1Database
) {
  return db.prepare(
    "SELECT * FROM worlds"
  ).all();
}
