

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

// solution 1 - callback 

const fun = (arg) => {
    setTimeout(() => {
        arg({ message: 'Have fun!' });
    }, 2000);
};

// fun((a) => { });

fun((a) => {
    console.log(a.message);
});




