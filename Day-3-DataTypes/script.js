console.log("Section : Datatypes and Basic Operators")
// Numbers
// It can be interger and float values ( no float , long , double concept here)

let num1, num2;

num1=12;
num2=14;

console.log(num1+num2); 
console.log(num1-num2); 
console.log(num1*num2); 


// String
// Any Alphanumeric is string ( single and double quoted both)

const firstName = "Sushant"
const secondName = 'Nikharge'
console.log(firstName+secondName); // concatenation

// Booleans 
// 1 True and 0 False
let isLoggedin = false;


console.log(isLoggedin)


// NULL 
// Value first can be null then you can assign anything (memoery created and can used for further)

let Timestamp1=null;

console.log(Timestamp1)

// undefined
// Not memory is created here  ( can think like that)
let NewTimestamp1=undefined;


console.log(NewTimestamp1)


// Objects

const User1 = {
    fName : "Sushant",
    lame : "Nikharge",
    Age : "22",
}

console.log(User1)


// Operators

// + 

console.log(num1 + num2,firstName + secondName)

// -

console.log(num1 - num2)

// Typeof Operator 

console.log(typeof(User1.fName)=="string");


// Logical Operators