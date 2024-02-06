export async function GET(request: Request) {

    const db = await import("../../../utils/db.json");
    return new Response(JSON.stringify({ companies: db.companies }), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}

export async function POST(request: Request) {
    const db = await import("../../../utils/db.json");

    // Parse the incoming JSON data from the request body
    const requestData = await request.json();

    // Assuming requestData contains the data you want to add to the companies array
    db.companies.push(requestData);

    // Save the updated data back to the db.json file or your database
    // You may need to implement a function to write data to the file or database

    return new Response(JSON.stringify({ message: "Data added successfully" }), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
// export async function GET(request: Request) {
//     return new Response("hi")
// }