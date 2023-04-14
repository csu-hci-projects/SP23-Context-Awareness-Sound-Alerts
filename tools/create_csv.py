from data_format import get_all_data

CSV_FILE_NAME = "test.csv"

if __name__ == "__main__":
    # Create a pandas DataFrame
    final_data, clicks = get_all_data()

    # Save to csv
    final_data.to_csv(CSV_FILE_NAME)
