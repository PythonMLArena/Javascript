 
console.log("This is HELLO WORLD From External JS File");
console.log("This is Prathamesh")
// Sequence Matters in JS

// Everything in JS happen inside Execution Context 
// it has 2 Components
// (Memory Component (variable env)(variable and Function stored as Key value store), Code Component (Thread of Execution) (Code is executed run one by one line))

// JS is Synchronous and single threaded Language 
// Synchronous Single threaded = execute one command at a time in specified order 

// There are 2 phases in Gloabl Execution Phase
// 1. Creation Phase (Memory Creation)
    // - Variable and function are stored as key value pair 
    // - Variable value will be undefined 
    // - Function value will be whole function derivation code

// 2. Code execution phase
    // - JS runs code 1 by 1 line
    // - Variable values are filled 
    // - Function invokation means new execution context is created with 2 component
    // - When function return value then context will be deleted which is created by th function

// Callback 
