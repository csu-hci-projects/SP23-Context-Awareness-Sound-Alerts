export default async function clearDatabase(){
    const url = "http://localhost:22222/clear"
    const config = {
        method: "GET",
        mode: "cors"
    }
    const response = await fetch(url, config);
    return response.json();
}