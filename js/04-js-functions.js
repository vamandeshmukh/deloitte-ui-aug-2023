
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


// // function syntax 

// // // full syntax 
// // const addGst = (amount) => {
// //     return amount + (amount * 0.18);
// // };

// // // short syntax 
// // const addGst = (amount) => amount + (amount * 0.18);

// // shortest syntax 
// const addGst = amount => amount + (amount * 0.18);

// let finalAmount = addGst(100);
// console.log(finalAmount);



// // function arguments 

// const addNums = (i, j) => { console.log(i + j); };

// addNums();
// addNums(10);
// addNums(10, 20);
// addNums(10, 20, 30);

// default values to parameters 

const addNums = (i = 2, j = 4) => { console.log(i + j); };

addNums();
addNums(10);
addNums(10, 20);
addNums(10, 20, 30);


