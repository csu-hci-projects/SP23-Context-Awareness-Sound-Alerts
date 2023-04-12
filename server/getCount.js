import getMongoCollection from "./getMongoCollection.js";

export async function getCount(){
    return await getMongoCollection(async (collection) => {
        console.log("getCount")
        const result = await collection.count()
        console.log(`${result} documents in this collection.`)
        return {count: result}
    })
}