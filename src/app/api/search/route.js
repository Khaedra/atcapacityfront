export async function GET() {
    const gyms = [
        {
            "id": "123",
            "name": "ARC Gym",
            "currentOccupancy": 50,
            "totalCapacity": 80,
            "location": {
                "street": "6000 Student Union Blvd",
                "city": "Vancouver, BC",
                "postal": "V6T 1Z1",
                "latitude": 49.2606,
                "longitude": -123.2460
            },
            "owner": "UBC Recreation",
            "hours": "06:30-22:00",
            "link": "https://www.recreation.ubc.ca/",
            "type": "GYM",
            "open": true
        },

        {
            "id": "124",
            "name": "Kerrisdale CC",
            "currentOccupancy": 11,
            "totalCapacity": 50,
            "location": {
                "street": "5851 West Blvd",
                "city": "Vancouver, BC",
                "postal": "V6M 3W9",
                "latitude": 49.2606,
                "longitude": -123.2460
            },
            "owner": "Kerrisdale Community Centre",
            "hours": "06:30-22:00",
            "link": "https://kerrisdalecc.com/",
            "type": "COURT",
            "open": true
        },

        {
            "id": "124",
            "name": "VNYSA Yoga Studio",
            "currentOccupancy": 0,
            "totalCapacity": 80,
            "location": {
                "street": "3378 Westbrooke Mall",
                "city": "Vancouver, BC",
                "postal": "V6T 1Z1",
                "latitude": 49.2606,
                "longitude": -123.2460
            },
            "owner": "VNYSA",
            "hours": "06:30-22:00",
            "link": "https://www.vynsa.com",
            "type": "CLASS",
            "open": false
        },

        {
            "id": "124",
            "name": "Fitness World",
            "currentOccupancy": 60,
            "totalCapacity": 80,
            "location": {
                "street": "6000 Student Union Blvd",
                "city": "Vancouver, BC",
                "postal": "V6T 1Z1",
                "latitude": 49.2606,
                "longitude": -123.2460
            },
            "owner": "UBC Recreation",
            "hours": "06:30-22:00",
            "link": "https://www.recreation.ubc.ca/",
            "type": "GYM",
            "open": false
        },

    ];
    return new Response(JSON.stringify(gyms), {
        headers: { 'Content-Type': 'application/json' }
    });
}
