export async function GET() {
    try {
        const response = await fetch('http://backend:8000/');
        if (!response.ok) {
            return new Response(JSON.stringify({ error: 'Network response was not ok' }), { status: response.status });
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}