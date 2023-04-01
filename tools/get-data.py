from pymongo import MongoClient
import pandas as pd

DATABASE = "test"
COLLECTION = "test-collection"


def error_check(value):
    if value:
        return value
    else:
        return "NA"


# Master linking of data to source
data_source = {
    "database-id": lambda item: error_check(str(item['_id'])),
    "groupID": lambda item: error_check(item['groupID']),
    "city-start-time": lambda phases: error_check(phases['city']['experimentStartTime']),
    "city-end-time": lambda phases: error_check(phases['city']['experimentEndTime']),
    "city-alert1-time": lambda phases: error_check(phases['city']['alertTimes'][0]),
    "city-alert2-time": lambda phases: error_check(phases['city']['alertTimes'][1]),
    "city-alert3-time": lambda phases: error_check(phases['city']['alertTimes'][2]),
    "city-wpm": lambda phases: error_check(phases['city']['wpm']),
    "beach-start-time": lambda phases: error_check(phases['beach']['experimentStartTime']),
    "beach-end-time": lambda phases: error_check(phases['beach']['experimentEndTime']),
    "beach-alert1-time": lambda phases: error_check(phases['beach']['alertTimes'][0]),
    "beach-alert2-time": lambda phases: error_check(phases['beach']['alertTimes'][1]),
    "beach-alert3-time": lambda phases: error_check(phases['beach']['alertTimes'][2]),
    "beach-wpm": lambda phases: error_check(phases['beach']['wpm']),
    "airport-start-time": lambda phases: error_check(phases['airport']['experimentStartTime']),
    "airport-end-time": lambda phases: error_check(phases['airport']['experimentEndTime']),
    "airport-alert1-time": lambda phases: error_check(phases['airport']['alertTimes'][0]),
    "airport-alert2-time": lambda phases: error_check(phases['airport']['alertTimes'][1]),
    "airport-alert3-time": lambda phases: error_check(phases['airport']['alertTimes'][2]),
    "airport-wpm": lambda phases: error_check(phases['airport']['wpm'])
}


def find_order(assignedExp, phaseData):
    result = dict()
    for i in range(len(assignedExp['order']) - 1):
        if "City" in assignedExp['order'][i]['environment']:
            result['city'] = phaseData[i]
        elif "Beach" in assignedExp['order'][i]['environment']:
            result['beach'] = phaseData[i]
        elif "airplane" in assignedExp['order'][i]['environment']:
            result['airport'] = phaseData[i]

    return result


# Parse the key out of the JS file
f = open("../server/creds/mongoKey.js")
js_file = f.read()
js_file = js_file.split(" ")
key = js_file[4]
key = key.strip("\"\n")

client = MongoClient(key)
db = client[DATABASE]
collection = db[COLLECTION]


def get_data(item, phases):
    result = []
    data_types = data_source.keys()
    for d in data_types:
        try:
            if d in ['database-id', 'groupID']:
                result.append(data_source[d](item))
            else:
                result.append(data_source[d](phases))
        except KeyError:
            result.append("NA")
            print(f"Error retrieving {d} from {str(item['_id'])}, data not found in entry.\n")
        except:
            print("Unknown Error getting data")
    return result


columns = data_source.keys()
data = pd.DataFrame(columns=columns)

for item in collection.find():
    phases = find_order(item['assignedExperiment'], item['phaseData'])
    row_data = get_data(item, phases)
    row = pd.DataFrame(row_data, columns=columns)
    pd.concat([data, row])

data.to_csv("test_csv.csv")
