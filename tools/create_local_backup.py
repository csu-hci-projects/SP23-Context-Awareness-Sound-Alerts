from data_format import get_all_data
from datetime import date

BACKUP_FOLDER = "../backup/"

if __name__ == "__main__":
    # Create a pandas DataFrame
    final_data, clicks = get_all_data()

    cur_date = date.today()
    format_date = cur_date.strftime("%Y-%m-%d")
    # Save to csv
    final_data.to_csv(f"{BACKUP_FOLDER}{format_date}.csv")