"use strict"; //traet all JS code as newer versions
// alert("Please check the console for output!");  /*alert is used to show a message to the user, here it will be give error message because we are using node not brower*/

//primitive datatypes

//string
let name1 = "Vishu";
console.log(typeof name1); //output: string

//number
let age = 23;
console.log(typeof age); //output: number

//boolean
let isStudent = true;
console.log(typeof isStudent); //output: boolean

//null
let emptyValue = null; //null is a special value that represents the intentional absence of any object value
// It is often used to indicate that a variable should not point to any object
// or that an object is empty
// In JavaScript, null is a primitive value and is treated as an object
console.log(typeof emptyValue); //output: object (this is a bug in JS)

//undefined
let notAssigned; //notAssigned is declared but not assigned a value
//undefined is a primitive value that represents the absence of a value
//or an uninitialized variable
console.log(typeof notAssigned); //output: undefined

//symbol
let uniqueSymbol = Symbol("unique"); //symbol is a unique and immutable primitive value
// Symbols are often used as unique identifiers for object properties
// to avoid name clashes
console.log(typeof uniqueSymbol); //output: symbol

//bigint
let bigIntValue = 1234567890123456789012345678901234567890n; //bigIntValue is a BigInt
// BigInt is a special type of number that can represent integers with arbitrary precision
// BigInt is created by appending 'n' to the end of an integer literal
// or by calling the BigInt() function
// BigInt can be used for large integers that are beyond the range of the Number type
console.log(typeof bigIntValue); //output: bigint

console.table([
  [name1, age, isStudent, emptyValue, notAssigned, uniqueSymbol, bigIntValue],
  [
    typeof name1,
    typeof age,
    typeof isStudent,
    typeof emptyValue,
    typeof notAssigned,
    typeof uniqueSymbol,
    typeof bigIntValue,
  ],
]); //output:

//object datatypes
let person = {
  name: "vishu",
  age: 23,
  isStudent: true,
  address: {
    city: "Delhi",
    country: "India",
  },
  hobbies: ["reading", "coding"],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
console.log(typeof person); //output: object
//object is a complex data type that allows you to store collections of data
//and more complex entities. Objects are mutable and can be changed after creation
//Objects can contain properties (key-value pairs) and methods (functions)
//Objects are created using curly braces {} and can contain any data type
//Objects can also be created using the Object constructor
//Objects can be nested, meaning you can have objects within objects
//Objects can be iterated over using for...in loop or Object.keys() method

console.log(person); //output: {name: "vishu", age: 23, isStudent: true, address: {…}, hobbies: Array(2), greet: ƒ}
console.log(person.name); //output: vishu
console.log(person.age); //output: 23
console.log(person.isStudent); //output: true
console.log(person.address); //output: {city: "Delhi", country: "India"}
console.log(person.address.city); //output: Delhi
console.log(person.hobbies); //output: ["reading", "coding"]
console.log(person.hobbies[0]); //output: reading
console.log(person.hobbies[1]); //output: coding
console.log(person.greet()); //output: Hello, my name is vishu
//person.greet() is a method that can be called to execute the function

let array_Value = [1, 2, 3, 4, 5];
console.log("array_Value:", array_Value); //output: array_Value: [ 1, 2, 3, 4, 5 ]
console.log(typeof array_Value); //output: object
