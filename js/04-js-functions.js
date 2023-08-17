
// JS functions 

// // Old JS function 
// function fun() {
//     console.log('fun function called.');
// };

// fun();

// // Modern JS function / arrow function / fat arrow function 
// const fun2 = () => {
//     console.log('fun2 function called.');
// };

// fun2();


// function syntax 

// const addNums2 = 'abc';
// const addNums3 = 10;
// const addNums4 = false;

// // full syntax 
// const addGst = (amount) => {
//     return amount + (amount * 0.18);
// };

// // // short syntax 
// const addGst = (amount) => amount + (amount * 0.18);

// shortest syntax 
const addGst = amount => amount + (amount * 0.18);

let finalAmount = addGst(100);
console.log(finalAmount);


