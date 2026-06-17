export async function onRequestGet({ env }) {
  const keys = [
    'green-tea-latte-dark',
    'green-tea-latte-light',
    'caramel-latte-dark',
    'caramel-latte-light',
  ];

  const counts = {};
  await Promise.all(
    keys.map(async (id) => {
      const val = await env.LIKES.get(id);
      counts[id] = val ? parseInt(val, 10) : 0;
    })
  );

  return new Response(JSON.stringify(counts), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store',
    },
  });
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const { id } = body;
  const allowed = [
    'green-tea-latte-dark',
    'green-tea-latte-light',
    'caramel-latte-dark',
    'caramel-latte-light',
  ];

  if (!id || !allowed.includes(id)) {
    return new Response(JSON.stringify({ error: 'Invalid preset id' }), { status: 400 });
  }

  const current = await env.LIKES.get(id);
  const next = (current ? parseInt(current, 10) : 0) + 1;
  await env.LIKES.put(id, String(next));

  return new Response(JSON.stringify({ id, likes: next }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
