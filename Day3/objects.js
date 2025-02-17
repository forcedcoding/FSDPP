const obj = {
  name: 'John',
  age: 30,
  city: 'New York',

  address: {
        street: '123 Main St',
        zip: 10001
    }   
};
console.log(obj);

console.log(obj.name);


const key = prompt('What do you want to know about the user? Choose between name, age, city, address, street, zip');
console.log(obj[key]);