//promises in js
//promises are used to handle asynchronous operations in javascript
//a promise is a object that may produce a single value some time in the future

//three states of promises

//1. pending: initial state, neither fulfilled nor rejected
//2. fulfilled: meaning that the operation completed successfully
//3. rejected: meaning that the operation failed

//syntax
//let promise = new Promise(function(resolve, reject) {
    // executor (the producing code)
//  });

// simple code for promise

let promise = new Promise(function(resolve, reject) {
    let x = 10;
    if(x == 10){
        resolve("success");
    }else{
        reject("failed");
    }
}
);

promise.then(function(message){
    console.log("this is in then " + message);
}).catch(function(message){
    console.log("this is in catch " + message);
});

//output: this is in then success

