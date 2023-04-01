from pymongo import MongoClient

DATABASE = "test"
COLLECTION = "test-collection"

# Parse the key out of the JS file
f = open("../server/creds/mongoKey.js")
js_file = f.read()
js_file = js_file.split(" ")
key = js_file[4]
key = key.strip("\"\n")

client = MongoClient(key)
db = client[DATABASE]
collection = db[COLLECTION]

item_count = 0
for item in collection.find():
    print(item)

print(item_count)


