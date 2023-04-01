from pymongo import MongoClient
import pandas as pd

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

# Data to use from the database
columns = [
    "database-id",
    "groupID",
    "city-start-time",
    "city-end-time",
    "city-alert1-time",
    "city-alert2-time",
    "city-alert3-time",
    "city-wpm",
    "beach-start-time",
    "beach-end-time",
    "beach-alert1-time",
    "beach-alert2-time",
    "beach-alert3-time",
    "beach-wpm",
    "airport-start-time",
    "airport-end-time",
    "airport-alert1-time",
    "airport-alert2-time",
    "airport-alert3-time",
    "airport-wpm"
]
data = pd.DataFrame(columns=columns)


item_count = 0
for item in collection.find():
    pass

print(item_count)


