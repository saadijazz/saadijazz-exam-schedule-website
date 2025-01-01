import pandas as pd  # pandas library

# Load the Excel file
file_path = 'exam_schedule.xlsx' 
df = pd.read_excel(file_path)  # Read the Excel file into a DataFrame

# Display the first few rows of the data
print("Here is the data from Excel file:")
print(df.head())  # Print the first 5 rows
