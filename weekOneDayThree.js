// multiply two numbers & invoke the function
function multiplyTwoNumbers(num1, num2) {
    return num1 * num2
}

const answer = multiplyTwoNumbers(12, 12);
console.log(answer);

// Write a function named assignGrade, that takes one argument, number score (example: 90). Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.
function assignGrade(grade) {
    if (grade >= 90) {
        return "Your grade assignment is A.";
    } else if (grade >= 80 && grade < 90) {
        return "Your grade assignment is B.";
    } else if (grade >= 70 && grade < 80) {
        return "Your grade assignment is C.";
    } else if (grade >= 65 && grade < 70) {
        return "Your grade assignment is D.";
    } else {   
    return "Your grade assignment is F.";
    }
}

const gradeAssignment = assignGrade(80);
console.log(gradeAssignment);

// Write an array containing items of the same data type.
const foodList = [
    "rice",
    "eggs",
    "lettuce",
    "olive oil",
    "salt",
    "coffee"
]

// Write a function to get the first element in an array. Invoke the function. 

function getFirstElement(arr) {
    return arr[0];
  }
  
getFirstElement([1, 2, 3]); // returns 1
    