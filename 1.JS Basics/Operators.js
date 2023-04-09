// we can do complex operations in Javascript 

// Operands and Operators 
// Operands - values on which you have to do Operation


// There are different types of Operators 
// 1. Arithmatic - +,-,/,%,*,**
let x=10;
let y=3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y); // gives you quotient 
console.log(x%y); // gives you remainder
console.log(y**x); // Exponent

// 2. Assignment Operators - =,+=,-=,*=,/=,%=

// = - Directly assign the value to variable
// a+=2 - Means a=a+2 

let a=10; // assign value from rhs to lhs

a+=10;
console.log(a); // 20
a-=10;
console.log(a); // a=20-10
a*=10;
console.log(a);  // a=10*10
a/=10;
console.log(a);  // a=100/10 gives quotient
a%=10;
console.log(a);  // a=10%10 gives remainder
a**=10;
console.log(a); 


// 3. Relations Operators - >,<,<=,>=
// take two operands take first value and compare to second and gives a boolean answer (true/false)

let p=14;
let q=28;
let z=5;

console.log(p<q);
console.log(p>q);
console.log(p<=q);
console.log(p>=q);
// true
// false
// true
// false

// 4. Logical Operators 
/* 0= False , 1=True
AND (&&)- Take two inputs if First one is false then it wont see the second operand, answer is false, anyone is false answer is false
OR (||) - Take two inputs if any one is true answer is True,if first operand is true then it wont see the seconds operand, answer is true if first operand is false then it return the second operand 
NOT (!) - One input and gives the opposite 
Operands are nothing but boolean
*/

console.log("Logical Operators: ",true&&false);
console.log(true||false);
console.log(!(3>4));

// Short Circuiting Concept  
/* ToBoolean False Values ( Coercion Type Conversion)
undefined - false
null - false
Empty string "" - false
-0,+0,NaN - False
*/

console.log("Short Circuit AND",(10>6)&&(6<7)); // Here we going to evaluate 6<7 and give output true cause 7 is greater than 6
console.log("Short Circuit AND",(10&&6));// 10 is true and we get the second operand because true false is false in AND Operation


console.log("Short Circuit OR",(4>5)||13); // 10 is true then return true value
console.log("Short Circuit OR",10||15);// if first is false then it return the second operand, if first is true then dont see the second operand return the first operand


//////////// Special Numbers NAN ZERO and Negative Zero Infinity and Negative

// 0,-0,NaN

// -0 - If car is deaccelerating and immediately stoppend on x axis and to give you direction of that entity head is pointing may need such type of number to represent - Game developers used such things
// NaN - if number is not present in the array such number have index NaN ( Situations which you are bound to return a number but there is no valid possible number to return) 10/Null
// Propery of NaN - it is not equal to itself.
console.log(10/null); // Infinity
console.log(undefined/null); // Null (Invalid Division)
// Infinity
// -Infinity
console.log(Infinity);
console.log(-0);
console.log(NaN);
console.log(-Infinity);
console.log(10> -Infinity);
console.log(10< -Infinity);


// Bitwise Operators ( Perform the corresponding Operation bit by bit on operands)
/*
& - Bitwise And
| - Bitwise OR
^ - Bitwise XOR
~ - Bitwise Not
*/

// 5 - 101 (Binary Representation of 5)
// 7 - 111 ( Binary Representation of 7)

console.log(5 & 7); // 5
console.log(6 & 9); // 0
console.log(5 | 7); // 7


// Strict and Equality Operators (Both check the types of the x and y)

// == - Abstract Equality ( Do Type conversion)
/*
it check the type of both operands  
if type is same then it calls the === , else type conversion occurs and then comparison is done
*/




// === -  Strict Equality ( never do type conversion)

/*
it check the type of both operands  
if type is different then it return false else value comparison occurs

*/



console.log(1=="1"); // True
// number and string is there then convert the string to number , 1==1 , then 1===1 so true
console.log(1=="Prathamesh");  // False
// number and string is there then convert the string to number , prathamesh convert to NaN , then 1===NaN so False


//  Typeof Operator

console.log(typeof "1");
console.log(typeof 1);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null); // Issue in Javascript this should be null and object is different datatype
