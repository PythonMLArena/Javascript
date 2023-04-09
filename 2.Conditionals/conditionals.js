
// Programming Languages got decision making capabilities 
// Which given by the conditionals Statements

// Lets Understand if - else 
// if and else are keywords 
// syntax

/* if (condition a<5){
    if block 
    // condition holds true then if block code executed
    }else{

    }

*/
// example

console.log("Start");
let a ;
a=24
if (a<20){
    console.log("A is less than 20");
}

if (a){ // if block exist without else block 
    console.log("a = 12 it is a truthy value so it will come inside");
}

// if else block
if (a<20){
    console.log("A is less than 20");
}
else{ // if condition is false then if block is avodied
    console.log("in else A is not less than 20");
}

// Else block wont exist alone. without if else block will not be present.
console.log("End");
