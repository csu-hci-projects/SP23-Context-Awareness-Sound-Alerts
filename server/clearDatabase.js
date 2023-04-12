import getMongoCollection from "./getMongoCollection.js";

export async function clearDatabase(){
    return await getMongoCollection(async (collection) => {
        console.log("Clearing database! Oh jeez.")
        let result

        try {
            result = await collection.drop()
        } catch {
            result = false
        } finally {
            return {success: result}
        }
    })
}