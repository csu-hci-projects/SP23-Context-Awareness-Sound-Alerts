import numpy as np
from pymongo import MongoClient
import pandas as pd

DATABASE = "test"
COLLECTION = "test-collection"


def find_alert_order(phase: str, item):
    phases = item['assignedExperiment']['order']
    for phase_list in phases:
        if phase in phase_list['environment']:
            return phase_list['notificationSoundOrder']


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
    "city-alert0-time": lambda phases: phases['city']['alertTimes'][0],
    "city-alert1-time": lambda phases: phases['city']['alertTimes'][1],
    "city-alert2-time": lambda phases: phases['city']['alertTimes'][2],
    "city-wpm": lambda phases: phases['city']['wpm'],
    "city-alert-order": lambda item: find_alert_order('City', item),
    "beach-start-time": lambda phases: phases['beach']['experimentStartTime'],
    "beach-end-time": lambda phases: phases['beach']['experimentEndTime'],
    "beach-alert0-time": lambda phases: phases['beach']['alertTimes'][0],
    "beach-alert1-time": lambda phases: phases['beach']['alertTimes'][1],
    "beach-alert2-time": lambda phases: phases['beach']['alertTimes'][2],
    "beach-wpm": lambda phases: phases['beach']['wpm'],
    "beach-alert-order": lambda item: find_alert_order('Beach', item),
    "airport-start-time": lambda phases: phases['airport']['experimentStartTime'],
    "airport-end-time": lambda phases: phases['airport']['experimentEndTime'],
    "airport-alert0-time": lambda phases: phases['airport']['alertTimes'][0],
    "airport-alert1-time": lambda phases: phases['airport']['alertTimes'][1],
    "airport-alert2-time": lambda phases: phases['airport']['alertTimes'][2],
    "airport-wpm": lambda phases: phases['airport']['wpm'],
    "airport-alert-order": lambda item: find_alert_order('Airport', item),

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
                     'defaultNotification', 'airport-alert-order', 'beach-alert-order', 'city-alert-order']:
                result.append(data_source[d](item))
            else:
                result.append(data_source[d](phases))
        except KeyError:
            result.append(np.nan)
            print(f"Error retrieving {d} from: \nObject:{str(item['_id'])} GroupID:{item['groupID']}")
        except:
            print("Unknown Error getting data")

    return result


# All data must have the same number of rows, even if there weren't the same nubmers of clicks
#   in each phase. This pads the data with nan to make the data square
def pad_with_zeros(clicks: list, maxInt: int):
    result = list()
    for i in range(maxInt):
        if i >= len(clicks):
            result.append(np.nan)
        else:
            result.append(clicks[i])

    return result


# Find the phase with the most clicks so we can make the click data square
def find_most_clicks(phases):
    max = 0
    for phase in phases:
        phaseLength = len(phases[phase]['userClick'])
        if phaseLength > max: max = phaseLength

    return max


def get_clicks(phases):
    columns = ["city", "beach", "airport"]
    result = pd.DataFrame(columns=columns)

    # Data has to all have the same length
    max = find_most_clicks(phases)
    for phase in phases:
        result[phase] = pad_with_zeros(phases[phase]["userClick"], max)

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
    clicks = dict()
    for item in collection.find():
        phases = find_order(item['assignedExperiment'], item['phaseData'])
        row_data = get_data(item, phases)
        data.append(row_data)

        clicks[item['groupID']] = get_clicks(phases)

    experiment_data = pd.DataFrame(data, columns=columns)
    return experiment_data, clicks


def get_all_data():
    return create_pandas()


if __name__ == "__main__":
    # Create a pandas DataFrame
    final_data, clicks = get_all_data()
    print(clicks)
    pass
