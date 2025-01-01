import pandas as pd

# Load the Excel file
file_path = 'exam_schedule.xlsx' 
df = pd.read_excel(file_path)

# Format the 'Date' column to a readable format
df['Date'] = pd.to_datetime(df['Date'], format='%Y%m%d').dt.date  # Convert 'YYYYMMDD' to 'YYYY-MM-DD'


# Display the cleaned data
print("Cleaned Data:")
print(df.head())

# Save the cleaned data to a new CSV file
df.to_csv('cleaned_exam_schedule.csv', index=False)
print("Cleaned data saved to 'cleaned_exam_schedule.csv'.")
