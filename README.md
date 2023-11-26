
what is Data type in Javascript?

In JavaScript, data types refer to the kind of data that a variable can hold.

JavaScript has several built-in data types that can be broadly categorized into two groups: primitive data types and non primitive or reference data types


1. String

Represents textual data. it can be intialised with ''  "" 

e.g. var empName1 ="david";
     let empName2 ="maria";
     let empName3 = 'tom dalton';
     var empName4 = new String("jacob")  ;
    

You can create a new string using the String constructor or by using a string literal.

In general, it's recommended to use string literals for simplicity unless you have a specific reason to use the String constructor.

what is constructor ?

a constructor is a special method or function that is automatically called when an object is created or can be used for instance creation


2. Number 

Represents numeric data, including integers and floating-point numbers.

e.g. var count =0;
     let count = 2334;
     let empNo = new Number(3463434)

majorly used for calulations aspects

3. Boolean   true / false

  Represents a logical entity and can have only two values: true or false.

  var isEligibile = true;
  let shouldShow = false;
  let isDataValid = new Boolean(true)

4. Null  data type

  which defines emptiness in Javscript

  null is a special value that represents the intentional absence of any object value. It is one of the primitive data types in the language. When a variable is assigned the value null, it means that the variable intentionally does not point to any object or does not have any value

  var empId = null
  let myVariable = null;

  Type of null: The typeof operator applied to null returns 'object'. This is considered a quirk in JavaScript, and it's often cited as a historical mistake.

console.log(typeof null); // Output: "object"


5 undefined is used by Javascript intepretor


undefined data type we should not use explicitly

DONT USE - let fruit = undefined

this data type is used by javascript to throw exceptions and error checking

1. you have defined a variable but not assinged a value
2. we dont return anything from function
3. when we are accessing property of an object which does not exist
4. comparison

 It is used to represent the absence of a value, particularly when a variable has been declared but not assigned a value.

 It's generally recommended not to explicitly assign undefined to a variable. If you want to indicate that a variable has no value, it's better to let JavaScript assign undefined automatically.

 let fruit;


 with ES6 

6.  Symbol 

 Represents a unique identifier.  

 the Symbol data type was introduced in ECMAScript 2015 (ES6). A Symbol is a unique and immutable primitive value that can be used as an identifier for object properties. Unlike other primitive data types (such as strings or numbers).

 Symbol values are guaranteed to be unique, which makes them useful for creating non-colliding scripts

 const mySymbolWithDescription = Symbol("This is a description");
 const mySymbol = Symbol()

 Note: Symbols are often used in advanced JavaScript programming scenarios, particularly when working with libraries or frameworks that leverage symbols for specific functionalities


 // Creating symbols with and without a description
const mySymbol1 = Symbol();
const mySymbol2 = Symbol("description");

console.log(mySymbol1);  // Output: Symbol()
console.log(mySymbol2);  // Output: Symbol(description)

const obj = {
    mySymbol1 : "Value for Symbol 1",
}

const obj2 = {
    mySymbol2 : "Value for Symbol 2"
}

const symbol1 = Symbol("shared");
const symbol2 = Symbol("shared");

7. BigInt

BigInt is a data type introduced in ECMAScript 2020 (ES11) that allows representation of integers beyond the safe integer limit for regular JavaScript numbers

Default number support in Javascript  Number.MAX_SAFE_INTEGER (which is 2^53 - 1).

const regularNumber = 42;
const bigNumber = BigInt(regularNumber); 

console.log(bigNumber); // Output: 42n
console.log(bigNumber.valueOf()); // Output: 42
The n at the end of the number indicates it is a BigInt literal.

BigInts cannot be mixed with regular numbers in arithmetic operations. You need to explicitly use the BigInt() constructor or append n to a literal to create BigInt values.

const number1 =123456789012345678901234567890
const bigNumber1 = BigInt("123456789012345678901234567890");


Non Primitive / complex /reference data type

const empName = "david"
const empId  =2323
const empAddress ="address12 "
const empDesgination = 'systems engineer'
const isEmpActive = true


1. Object Type - Represents a collection of key-value pairs.

var emp = {
    name:"david"
    id:2323,
    address:"emp address2",
    isEmpActive: true
}

Object is a versatile and fundamental data type that allows you to store and organize data in key-value pairs Objects in JavaScript can represent a wide variety of entities and structures, making them a central component of the language

// Using object literal notation
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Using Object constructor
const car = new Object(); // car object will be empty
car.make = "Toyota";
car.model = "Camry";
car.year = 2022;

we  can create an object using either object literal notation {} or the Object constructor:


we can maitain inner objects and functions inside Objects

var emp = {
    name:"david"
    id:2323,
    address:{
        city:"city1",
        state: "state1",
        pincode:232323
    },
    isEmpActive: true
}
console.log(emp.address.city)

1. Dot Notation:
Dot notation is the simpler and more common way to access properties. You use the dot (.) followed by the property name:

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name);  // Output: "John"
console.log(person.age);   // Output: 30


2. Square Bracket Notation:
Square bracket notation allows you to access properties using a string inside square brackets. his method is useful when the property name contains special characters, starts with a number, or is dynamically determined

e.g.

const employee = {
    "company":"XYZ",
    "salary":23232323
}


2 Array data type

 special data type to store an ordered collection of values ,
 where each value can be accessed using an index they can hold various types of data, including numbers, strings, objects, and even other arrays.

 we can create an array using array literal notation [] or the Array constructor:

 // Using array literal notation
                  0        1        2
const fruits = ["apple", "banana", "orange"];

// Using the Array constructor
                          0  1  2  3 4
const numbers = new Array(1, 2, 3, 4, 5);

array indexes always start with 0 till its length

fruits[0] // "apple"
numbers[2] // 3

Arrays can contain other arrays, creating multidimensional arrays:

const matrix = [
  [1, 2, 3],  //o
  [4, 5, 6],  //1 
  [7, 8, 9]   //2
];

console.log(matrix[1][2]);  // Output: 6


3 function data type


functions are first-class citizens, which means they are a distinct and powerful data type Functions in JavaScript can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures like arrays or objects.


ES5 we can define function - function declaration 

function name-of-function(arugment1, argument2){
    return variable with any datatype/data
}

e.g. function add(x, y) {
  return x + y;
} 

ES5 we can define function - function expression 

var function1  = function (arugment1, argument2){
    return variable with any datatype/data
}


var add =  function(x, y) {
  return x + y;
} 


ES6 we can define function - function expression 

// arrow functions
const add =  (x, y) =>  x + y;


Functions in JavaScript are powerful and flexible, allowing for modular and reusable code. They play a crucial role in functional programming and enable various programming paradigms such as callbacks, closures, and higher-order functions.
