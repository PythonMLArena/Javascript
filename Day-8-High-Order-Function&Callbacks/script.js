// Higher Order Functions
// A function takes argument as Function 



function addnum(a,b) {
    let result = a +b;
    return result;
}

console.log(addnum(5,6));

// using callback
// it is higher order function
function addnumv2(a,b,cb) {
    let result = a +b;
    return cb(result);

}

// it is callback
function cb(result) {
    return result**2;
}

console.log(addnumv2(4,5,cb));

function addnumv3(a,b,cb) {
    let result = a +b;
    return cb(result);

}
// instead of cb we have added Arrow functions
console.log(addnumv3(4,5,value => value**2));


function addnumv4(a,b,cb) {
    let result = a +b;
    console.log(cb(result),{});

    return () => console.log(result);
}

let NewFunc = addnumv4(45,45,() => {});

NewFunc();

// Callback functions have issue = callback hell 

// Promises are the solution 