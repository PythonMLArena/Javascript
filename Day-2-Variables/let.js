// let have local scope 
let nage = 22;


console.log("here",age);

if (true) {
    let current = 15;
    console.log(current);
}
console.log(nage);// this can be accessible and dont give error
console.log(current); // it give error because it is not accessible outside parenthesis
