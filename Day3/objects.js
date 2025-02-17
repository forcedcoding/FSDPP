// Creating an object
const obj = {
  name: 'John', // Property with a string value
  age: 30, // Property with a number value
  city: 'New York', // Property with a string value

  // Nested object
  address: {
    street: '123 Main St', // Property within a nested object
    zip: 10001 // Property within a nested object
  },

  // Method (function) within an object
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

// Accessing object properties
console.log(obj); // Logs the entire object
console.log(obj.name); // Logs 'John'
console.log(obj.age); // Logs 30
console.log(obj.city); // Logs 'New York'
console.log(obj.address.street); // Logs '123 Main St'
console.log(obj.address.zip); // Logs 10001

// Calling a method within an object
obj.greet(); // Logs 'Hello, my name is John'

// Accessing object properties using bracket notation
const key = prompt('What do you want to know about the user? Choose between name, age, city, address, street, zip');
if (key in obj) {
  console.log(obj[key]); // Logs the value of the property specified by the user
} else if (key in obj.address) {
  console.log(obj.address[key]); // Logs the value of the nested property specified by the user
} else {
  console.log('Property not found');
}

// Adding a new property to an object
obj.email = 'john@example.com';
console.log(obj.email); // Logs 'john@example.com'

// Deleting a property from an object
delete obj.city;
console.log(obj.city); // Logs 'undefined'

// Looping through object properties
for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(prop + ': ' + obj[prop]);
  }
}


//ARRAY
// Creating an array
const fruits = ['apple', 'banana', 'orange', 'mango'];

// Accessing array elements
console.log(fruits); // Logs the entire array
console.log(fruits[0]); // Logs 'apple'
console.log(fruits[1]); // Logs 'banana'
console.log(fruits[2]); // Logs 'orange'
console.log(fruits[3]); // Logs 'mango'

// Modifying array elements
fruits[1] = 'pear';
console.log(fruits[1]); // Logs 'pear'

// Adding elements to an array
fruits.push('grape');
console.log(fruits); // Logs ['apple', 'pear', 'orange', 'mango', 'grape']

// Removing elements from an array
fruits.pop();
console.log(fruits); // Logs ['apple', 'pear', 'orange', 'mango']

// Looping through array elements
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Looping through array elements using forEach method
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Looping through array elements using arrow function
fruits.forEach(fruit => console.log(fruit));

// Creating an array of objects
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jack', age: 35 }
];

// Accessing array elements
console.log(people); // Logs the entire array
console.log(people[0]); // Logs { name: 'John', age: 30 }
console.log(people[0].name); // Logs 'John'
console.log(people[0].age); // Logs 30






