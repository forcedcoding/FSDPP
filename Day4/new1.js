const sum = (a,b) => {
    const ans = a + b;
    return ans;
};

const printPretty = (txt) => {
    console.log("----------------------");
    console.log(txt);
    console.log("----------------------");
};

sum(2,3);
console.log(sum(2,3));
console.log(printPretty("Hello World!"));
printPretty("Hello World!");
// What is the output of this code?
// a) 5
// b) Hello World!
// c) ----------------------


const getMetaData = () => {
    const name = prompt("Name : ");
    console.log("Name : " + name);
    const age = prompt("Age : ");
    console.log("Age : " + age);
    const numofSub = parseInt(prompt("Number of Subjects : "));
    return numofSub;
};

const getSubjectsInfo = (num) => {
    let marks = [];
    let nameSub = [];
    for (let i = 0; i < num; i++) {
        let nameofSub = prompt(`Enter name of subject ${i + 1} : `);
        let mark = parseFloat(prompt(`Enter mark for subject ${i + 1} : `));
        nameSub.push(nameofSub);
        marks.push(mark);
    }
    return marks;
};

const calculatePercentage = (marks) => {
    let totalMarks = 0;
    for (let mark of marks) {
        totalMarks += mark;
    }
    return (totalMarks / (marks.length * 100)) * 100;
};

// creating a function that calculates highest and lowest marks with subject name
const getHighestAndLowestMarks = (marks) => {
    let max = Math.max(...marks);
    let index = marks.indexOf(max);
    console.log(`Highest marks in ${marks[index]} : ${max}`);
    let min = Math.min(...marks);
    index = marks.indexOf(min);
    console.log(`Lowest marks in ${marks[index]} : ${min}`);
};

const getUserInputAndCalculatePercentage = () => {
    const numofSub = getMetaData();
    const marks = getSubjectsInfo(numofSub);
    const percentage = calculatePercentage(marks);
    for (let i = 0; i < numofSub; i++) {
        console.log(`Subject ${i + 1} : ${marks[i]}`);
    };
    console.log("final percentage: " + percentage + "%");
    getHighestAndLowestMarks(marks);
};

getUserInputAndCalculatePercentage();
