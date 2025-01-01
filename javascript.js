document.getElementById("search-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const course = document.getElementById("course-code").value.trim();
    const section = document.getElementById("section").value.trim();

    if (!course || !section) {
        alert("Please enter both course code and section.");
        return;
    }

    try {
        const response = await fetch(`https://saadijazz-exam-schedule-website.onrender.com/search?course=${course}&section=${section}`);
        
        if (!response.ok) {
            throw new Error("Failed to fetch data from the server.");
        }

        const data = await response.json();
        console.log("Response data:", data); // Debugging: log the response data

        const resultBox = document.getElementById("result-box");
        if (!resultBox) {
            console.error("Element with ID 'result-box' not found.");
            return;
        }

        // Check if the response is an array and contains data
        if (Array.isArray(data) && data.length > 0) {
            // Loop through the array to find matching exam details
            const examDetails = data[0]; // Assuming we only care about the first result for now

            resultBox.innerHTML = `
                <h2>Exam Details</h2>
                <p><strong>Course:</strong> ${examDetails.Course}</p>
                <p><strong>Section:</strong> ${examDetails.Section}</p>
                <p><strong>Date:</strong> ${examDetails.Date}</p>
                <p><strong>Time:</strong> ${examDetails.Time}</p>
                <p><strong>Location:</strong> ${examDetails.Room}</p>
                <p><strong>Updates:</strong> ${examDetails.Updates}</p>
            `;
        } else {
            // Handle cases where no exam details are found
            resultBox.innerHTML = `
                <h2>No Exam Found</h2>
                <p>No exam details found for the given course and section.</p>
            `;
        }
    } catch (error) {
        console.error("Error fetching exam details:", error);
        alert("An error occurred while fetching data. Please try again.");
    }
});
