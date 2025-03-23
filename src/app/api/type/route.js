export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");


    const response = await fetch(`https://atcapacitybackend3.onrender.com/api/facilities/type?type=${type}`, {
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