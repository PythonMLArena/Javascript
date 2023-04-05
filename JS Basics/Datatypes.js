// what all values we can store

// Documentation by Mozilla or EcmaScript (its official)

// Undefined, Null, Boolean , Number, string , Object

// Number - 10,-3,1000,2.6,3.121
// String - "MY NAME"/'MY NAME'/ `MY NAME`(below esc)
// Boolean - true/false
// Undefined - It is a keyword Generally used to definde yet but can be defined later  ex. let a; 
// Objects - used for storing key value pairs { name : prathamesh, company: fugetron }
// Null - it has empty value

// Primitive Datatypes - Atomic in Nature, They exist themselves

// Non-Primitive Datatypes - Types which are composition of other types


var Points = 200;
var name = "Prathamesh";
var age;
var company=null; // keyword null is there
var salary = undefined;
var isStudent= false;

var PrathamUser={
    name:"Prathames",
    company:"Fugetron",
    age:25,
}
console.log("Points=",Points);
console.log("name=",name);
console.log("age=",age);
console.log("company=",company);
console.log("salary=",salary);
console.log("isStudent=",isStudent);
console.log(PrathamUser);
// Points= 200
// name= Prathamesh
// age= undefined
// company= null
// salary= undefined
// isStudent= false
// { name: 'Prathames', company: 'Fugetron', age: 25 }


// Special Characters in JS

console.log("The New Apple Iphone \nhas been launched"); // \n it is escape seq it is a new line character
console.log("The New Apple Iphone \thas been launched"); // \t it is tab
console.log("The New Apple Iphone \\ has been launched"); // \\ for print one \.


