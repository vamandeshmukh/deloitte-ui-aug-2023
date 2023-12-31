
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

// const addNums = (i = 2, j = 4) => { console.log(i + j); };

// addNums();
// addNums(10);
// addNums(10, 20);
// addNums(10, 20, 30);


// arguments to functions 

// const addOrConcat = (a, b) => {
//     console.log(a + b);
// };

// addOrConcat(10, 20);
// addOrConcat('abc', 'def');


// const fun = (arg) => {
//     console.log(arg.city);
// };

// // fun();
// // fun({ eid: 101, firstName: 'Sonu' });
// fun({ city: 'Pune' });
// fun({ city: 'Pune', eid: 101, firstName: 'Sonu' });


// const addGst = (amount) => {
//     console.log(amount + (amount * 0.18));
// };

// addGst(100); // 100 is anonymous 

// let billAmount = 200;
// addGst(billAmount); // 200 has a name 



// const fun = (arg) => {
//     console.log('fun function called.');
//     arg();
// };

// // fun(() => { }); // pass another function as argument to fun function 

// fun(() => { console.log('anonymous function called.'); });

// const anotherFun = () => {
//     console.log('named function called.');
// };

// fun(anotherFun);

const fun = (arg) => {
    console.log('fun function called.');
    arg(10);
};

fun((num) => { console.log('anonymous function called with ' + num); });


