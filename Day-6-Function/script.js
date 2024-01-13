// Function - A Code block to use repetatively 

function sayHello () { // Function Keyword
    // Function Body 
    console.log("Hey Sushant");
}

sayHello(); // Function Call 

function add(x,y){ // x and y are arguments 
    z = x+y;
    return z;

}

const result=add(5,7); // 5, 7 are parameters

console.log(result);

function multiply(x,y){ // x and y are arguments 
    z = x*y;
    return z;

}

let result1=multiply(5,7); // 5, 7 are parameters

console.log(result1);

// Unlimited arguments Acceptance
function numadd() {
    let ans = 0 ; //
    for (let i=0; i<arguments.length;i=i+1){
        ans=ans+arguments[i];
    }
    return ans;
}



function numaddV2(...numbers) { // Spread Operator 
    let ans = 0 ; //
    for (let i=0; i<numbers.length;i=i+1){
        ans=ans+numbers[i];
    }
    return ans;
}

let result2=numadd(1,2,3,4,5,6);

console.log(result2);


// Execution Context Phases
// 1. Memory Creation Phase and Code Running Phase
    // Allocate Memory for variables ( variable name is key and undefined is Value)
    // Allocate Memory for Functions ( functions name is key and function code is value )
    // When we run a Function then New Execution Context is created
            // Allocate Memory for Function params and Variable with value as undefined and key is variable name 

            // Code execution phase run when memeory part is done then one by one Code running stated variable value filled in place of undefined

//  ( Call Stack =  Global Execution Context is created and Started Both memory and code context ) 
// Execution context is created then push to stack and Deleted then pop from the stack
// Call stack maintains the order of execution of execution context 
