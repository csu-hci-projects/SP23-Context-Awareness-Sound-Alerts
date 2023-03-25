export default async function getExperimentCount(){
    const url = "http://localhost:22222/getCount"
    const config = {
        method: "GET",
        mode: "cors"
    }
    const response = await fetch(url, config);
    console.log(response);
    return response.json();
}