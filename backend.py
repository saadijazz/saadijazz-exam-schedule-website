from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

from flask_cors import CORS

CORS(app)


# Load the exam schedule data
data = pd.read_csv('cleaned_exam_schedule.csv')

@app.route('/search', methods=['GET'])
def search_exam():
    # Get query parameters
    course = request.args.get('course')
    section = request.args.get('section')

    # Filter the data for the given course and section
    result = data[(data['Course'] == course) & (data['Section'] == section)]

    # Check if any result exists
    if result.empty:
        return jsonify({'message': 'No exam found for the given course and section.'}), 404

    # Convert the result to a dictionary and return as JSON
    exam_info = result.to_dict(orient='records')
    return jsonify(exam_info)

if __name__ == '__main__':
    app.run(debug=True)
    


