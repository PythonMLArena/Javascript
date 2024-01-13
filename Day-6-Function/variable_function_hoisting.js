
// hoisting example (access variable and function even before initialization without error)
console.log(x); // undefined is printed 
var x =7 ;

getName(); // console log will print the statement


function getName(){
    console.log("Name is here");
}


// What happen in background (execution context (memory and code execution context))

// first memory is allocated for whatever is defined in code snippet before execution
// actual function copy is created before execution in the memory 

// arrow function behaves like variable thats why their hoisting will not work it throws error

// var funcName = function() { // this and arrow function hoisting wont work it treat like variable call stack stored undefined and they throws error 

// }
