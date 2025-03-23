export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const latitude = searchParams.get("latitude");
    const longitude = searchParams.get("longitude");

    const response = await fetch(`https://atcapacitybackend3.onrender.com/api/facilities`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    const data = await response.json();

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" }
    });
}   