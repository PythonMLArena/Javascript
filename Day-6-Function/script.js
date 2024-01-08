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