

// JS - asynchronous nature of JS 
// asynchronous == not synchronous // non-blocking 

// console.log('one');
// console.log('two'); // delayed execution - 2 sec 
// console.log('three');


// Thread.sleep(); // java 

// setTimeout(() => {}, delay-time);

// console.log('one');

// setTimeout(() => {
//     console.log('two');
// }, 2000);

// console.log('three');


// problem due to asynchronous JS 

// const fun = () => {
//     setTimeout(() => {
//         return { message: 'Have fun!' };
//     }, 2000);
// };

// let output = fun();
// console.log(output.message);

// // solution 1 - callback 

// const fun = (arg) => {
//     setTimeout(() => {
//         arg({ message: 'Have fun!' });
//     }, 2000);
// };

// // fun((a) => { });

// fun((a) => {
//     console.log(a.message);
// });

// solution 2 - Promise 

// Promise - 
// 1. working on it - pending state 
// 2. keep - resolve state 
// 3. break - reject state   

// const fun = () => {
//     return new Promise((resolve, reject) => {
//         resolve({ message: 'Have fun!' });
//     });
// };

// fun()
//     .then((response) => {
//         console.log(response.message);
//     });


const fun = () => {
    return new Promise((resolve, reject) => {
        let isDataAvailable = false; // true, false
        if (isDataAvailable)
            resolve({ message: 'Have fun!' });
        else
            reject({ message: 'Data is not available.' });
    });
};

fun()
    .then((response) => {
        console.log(response.message);
    })
    .catch((error) => {
        console.log(error.message);
    });



