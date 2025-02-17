// first way to write funciton
function sum(a,b){
    return a+b;
}
// can call even arguments are not equal to parameters
console.log(sum(2,3,4,5,6,7,8,9,10));


// second way to write function
const sum1 = function(a,b){
    return a+b;
}
console.log(sum1(2,3));


// third way to write function
const sum2 = (a,b) => {
    return a+b;
}
console.log(sum2(2,3));


// fourth way to write function
const sum3 = (a,b) => a+b;
console.log(sum3(2,3));


// fifth way to write function
const sum4 = a => a+5;
console.log(sum4(2));



// sixth way to write function
const sum5 = () => 5;
console.log(sum5());