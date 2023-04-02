from pymongo import MongoClient
import pandas as pd

DATABASE = "test"
COLLECTION = "test-collection"
CSV_FILE_NAME = "test.csv"

# Master linking of data to source
data_source = {
    "database-id": lambda item: str(item['_id']),
    "groupID": lambda item: item['groupID'],
    "gender": lambda item: item['gender'],
    "age": lambda item: item['age'],
    "computerUse": lambda item: item['computerUse'],
    "brand": lambda item: item['brand'],
    "silent": lambda item: item['silent'],
    "defaultNotification": lambda item: item['defaultNotification'],
    "city-start-time": lambda phases: phases['city']['experimentStartTime'],
    "city-end-time": lambda phases: phases['city']['experimentEndTime'],
    "city-alert1-time": lambda phases: phases['city']['alertTimes'][0],
    "city-alert2-time": lambda phases: phases['city']['alertTimes'][1],
    "city-alert3-time": lambda phases: phases['city']['alertTimes'][2],
    "city-wpm": lambda phases: phases['city']['wpm'],
    "beach-start-time": lambda phases: phases['beach']['experimentStartTime'],
    "beach-end-time": lambda phases: phases['beach']['experimentEndTime'],
    "beach-alert1-time": lambda phases: phases['beach']['alertTimes'][0],
    "beach-alert2-time": lambda phases: phases['beach']['alertTimes'][1],
    "beach-alert3-time": lambda phases: phases['beach']['alertTimes'][2],
    "beach-wpm": lambda phases: phases['beach']['wpm'],
    "airport-start-time": lambda phases: phases['airport']['experimentStartTime'],
    "airport-end-time": lambda phases: phases['airport']['experimentEndTime'],
    "airport-alert1-time": lambda phases: phases['airport']['alertTimes'][0],
    "airport-alert2-time": lambda phases: phases['airport']['alertTimes'][1],
    "airport-alert3-time": lambda phases: phases['airport']['alertTimes'][2],
    "airport-wpm": lambda phases: phases['airport']['wpm']
}


# Create a mapping from the phase to the correct named data
def find_order(assignedExp, phaseData):
    result = dict()
    for i in range(len(assignedExp['order'])):
        if "City" in assignedExp['order'][i]['environment']:
            result['city'] = phaseData[i]
        elif "Beach" in assignedExp['order'][i]['environment']:
            result['beach'] = phaseData[i]
        elif "Airport" in assignedExp['order'][i]['environment']:
            result['airport'] = phaseData[i]

    return result


# Pull the data apart from the object returned from the database and return as a list
def get_data(item, phases):
    result = []
    data_types = data_source.keys()
    for d in data_types:
        try:
            if d in ['database-id', 'groupID', 'gender', 'age', 'computerUse', 'brand', 'silent',
                     'defaultNotification']:
                result.append(data_source[d](item))
            else:
                result.append(data_source[d](phases))
        except KeyError:
            result.append("NA")
            print(f"Error retrieving {d} from: \nObject:{str(item['_id'])} GroupID:{item['groupID']}")
        except:
            print("Unknown Error getting data")

    return result


def create_pandas():
    # Parse the key out of the JS file
    f = open("../server/creds/mongoKey.js")
    js_file = f.read()
    js_file = js_file.split(" ")
    key = js_file[4]
    key = key.strip("\"\n")

    # Connect to the database
    client = MongoClient(key)
    db = client[DATABASE]
    collection = db[COLLECTION]

    columns = list(data_source.keys())

    # Iterate through each item in the database
    data = list()
    for item in collection.find():
        phases = find_order(item['assignedExperiment'], item['phaseData'])
        row_data = get_data(item, phases)
        data.append(row_data)

    final_data = pd.DataFrame(data, columns=columns)
    return final_data


if __name__ == "__main__":
    # Create a pandas DataFrame
    frame = create_pandas()
    # Save to csv
    frame.to_csv(CSV_FILE_NAME)
