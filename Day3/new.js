// Function to calculate percentage
function calculatePercentage(marks) {
    let totalMarks = 0;
    for (let mark of marks) {
        totalMarks += mark;
    }
    return (totalMarks / (marks.length * 100)) * 100;
}

// Function to get user input and calculate percentage
function getUserInputAndCalculatePercentage() {
    let username = prompt("Enter your username:");
    let numberOfSubjects = parseInt(prompt("Enter the number of subjects:"));
    let marks = [];

    for (let i = 0; i < numberOfSubjects; i++) {
        let mark = parseFloat(prompt("Enter mark for subject " + (i + 1) + ":"));
        marks.push(mark);
    }

    let percentage = calculatePercentage(marks);

    console.log("username: " + username);
    console.log("marks: " + marks);
    console.log("final percentage: " + percentage + "%");
}

// Call the function
getUserInputAndCalculatePercentage();