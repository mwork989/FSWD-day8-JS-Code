const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person)
console.log(typeof person)

// access the properties of object
console.log(person.age)
console.log(person['city'])

const car = new Object(); // car object will be empty
car.make = "Toyota";
car.model = "Camry";
car.year = 2022;

console.log(car)
console.log(typeof car)

console.log(car.make)
console.log(car["year"])



const emp = {
    name:"david",
    id:2323,
    address:{
        city:"city1",
        state: "state1",
        pincode:232323
    },
    greet: function(){
        console.log("hey hello i am from state1")
    },
    isEmpActive: true
}
console.log(emp)
console.log(emp.address.city)
console.log(emp.greet())

// we cant use till 2020 this format in particular browser but with latest addtions and features in browser we can use this
const employee = {
    "$company":"XYZ",
    "1salary":23232323
}
console.log(employee.$company) 
console.log(employee['$company'])

// function declaration
function add(x, y) {
    return x + y;
  }

// function  invocation or calling a function
 console.log( add(1,2))

//ES5  function express 
 var subtract = function(x, y) {
    return x - y;
  };

  console.log( subtract(1,2))

//ES6 function express with arrow functions

const multiply = (x, y) => x * y;

console.log( multiply(4,5))
