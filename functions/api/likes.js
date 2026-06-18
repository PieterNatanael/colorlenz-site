const PRESET_IDS = [
  'green-tea-latte-dark',
  'green-tea-latte-light',
  'caramel-latte-dark',
  'caramel-latte-light',
  'aluminum-light',
  'tank-blue-light',
];

function corsHeaders() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store',
  };
}

export async function onRequestGet({ env }) {
  if (!env.LIKES) {
    // KV binding not connected yet — return zeros so page still loads
    const fallback = Object.fromEntries(PRESET_IDS.map((id) => [id, 0]));
    return new Response(JSON.stringify(fallback), { headers: corsHeaders() });
  }

  try {
    const counts = {};
    await Promise.all(
      PRESET_IDS.map(async (id) => {
        const val = await env.LIKES.get(id);
        counts[id] = val ? parseInt(val, 10) : 0;
      })
    );
    return new Response(JSON.stringify(counts), { headers: corsHeaders() });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: corsHeaders(),
    });
  }
}

export async function onRequestPost({ request, env }) {
  if (!env.LIKES) {
    return new Response(JSON.stringify({ error: 'KV not bound' }), {
      status: 503,
      headers: corsHeaders(),
    });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: corsHeaders(),
    });
  }

  const { id } = body;
  if (!id || !PRESET_IDS.includes(id)) {
    return new Response(JSON.stringify({ error: 'Invalid preset id' }), {
      status: 400,
      headers: corsHeaders(),
    });
  }

  try {
    const current = await env.LIKES.get(id);
    const next = (current ? parseInt(current, 10) : 0) + 1;
    await env.LIKES.put(id, String(next));
    return new Response(JSON.stringify({ id, likes: next }), { headers: corsHeaders() });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: corsHeaders(),
    });
  }
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
