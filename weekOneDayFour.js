// 1 - What is the technical term used to create a variable in JavaScript?
// Technical terms const and let.

// What is the technical term used to call or execute a function in JavaScript?
// Technical term used is invoke.

// Create an object called student, including 3 properties with their values.
const student = {
    age: 21,
    gender: "male",
    paid: "yes"
}

console.log(student);

//  Create a function that removes the first element of the array below and adds “kiwi” to the end of the array.
 
const favoriteFruits = ['mango', 'lychee', 'strawberry', 'papaya'] 
 
 function adjustFavorites(arrParam) {
    arrParam.shift();
    arrParam.push("kiwi");
    return arrParam;
 }


 console.log(adjustFavorites(favoriteFruits))



