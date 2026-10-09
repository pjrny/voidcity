export async function cacheWorld(
  kv: KVNamespace,
  id: string,
  data: unknown
) {
  await kv.put(
    id,
    JSON.stringify(data)
  );
}
