export async function POST(request) {
    const { latitude, longitude } = await request.json();

    const response = await fetch(`/api/facilities/nearest?latitude=${latitude}&longitude=${longitude}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await response.json();

    return new Response(JSON.stringify(gyms), {
        headers: { 'Content-Type': 'application/json' }
    });
}   