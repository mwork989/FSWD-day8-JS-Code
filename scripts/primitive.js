var empName1 = "david";  //ES5
let empName2 = "maria";  //ES6
let empName3 = 'tom dalton'; //ES6
var empName4 = new String("jacob"); //represents the string object creation
// string

console.log('empName1:',empName1);
console.log('empName2:',empName2);
console.log('empName3:',empName3);
console.log('empName4:',empName4);
console.log(typeof empName1)
console.log(typeof empName4)

// number

var count1 =0;
let count2 = 2334.45345;
let empNo = new Number(3463434)

console.log("count1",count1)
console.log("count2",count2)
console.log("empNo",empNo)
console.log(typeof count1)
console.log(typeof empNo)

// boolean 

var isEligibile = true;
let shouldShow = false;
let isDataValid = new Boolean(true)

console.log('isEligibile',isEligibile)
console.log('shouldShow',shouldShow)
console.log('isDataValid',isDataValid)

console.log(typeof shouldShow)
console.log(typeof isDataValid)

// null
var empId = null
let myVariable = null;

console.log('empId',empId)
console.log('myVariable',myVariable)
console.log(typeof myVariable)
console.log(typeof null)

// undefined

let fruit;

console.log(fruit)


// symbol

const mySymbolWithDescription = Symbol("This is a description");

console.log('symbol',mySymbolWithDescription)
console.log(typeof mySymbolWithDescription)


// bigInt

const regularNumber = 42;
const bigNumber = BigInt(regularNumber); 
console.log('bigint',bigNumber);