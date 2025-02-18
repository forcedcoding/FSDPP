//callback function
function greet(name, c) {
    console.log('Hi' + ' ' + name + ' ');
    c();
}

function callMe() {
    console.log('I am callback function');
}   

greet('John', callMe); // Hi John I am callback function
// In this code, we have a function greet that takes two arguments name and callback.
// The function greet takes the name of the person and a callback function.
// The greet function logs a message with the name of the person.
// Then it calls the callback function.
// The callMe function logs a message.
// When we call the greet function with the name John and the callMe function as a callback, the output will be:
// Hi John
// I am callback function
// The callback function is called after the greet function logs the message.
// This is an example of a callback function in JavaScript.
// The callback function is passed as an argument to another function and is called after the completion of the main function.