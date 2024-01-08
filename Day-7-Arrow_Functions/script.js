// Arrow Functions


// Syntax 

// function sayHello(){
//     console.log("Hello!");
// }

const sayHello = () => {
    console.log("Hi!");
}

const add = (a,b) => {
    return a + b;
}

const addV2 = (a,b) => a+b;  // one liner function


sayHello();
console.log(add(4,5));
console.log(addV2(4,5));

// Arguments Keyword (Not Available in arrow functions), use spread(...(name)) operator it will be helpful.

// Hoisting

sayHey();

function sayHey(){ //Normal function Hoisting is there but not for arrow functions
    console.log("New");
};

const SayHey = () => {
    console.log("Hey!");
}

SayHey(); // if this statement above the function declaration then for arrow functions it wont work it works for normal functions only

// This Keyword 
// it refers the object 
// For arrow functions this keyword refer to browser window 
// For Normal functions this keyword refer to object which the keyword belongs
// Arrow functions scopes are global



const obj= {
    value:20,
    myfunc : function() {
        console.log("Value is " + this.value);

    },
};

obj.myfunc();


