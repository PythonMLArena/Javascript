const students = ["Piyush", "John", "Jane"]

function print(n){
    console.log(n);
}


students.forEach(print) // takes one element of array  and pass as argument to that function here print is function

students.forEach((val)=> console.log(val+" This is Function")) // it return nothing

const numbers = [1,2,3,4,5,6,7,8,9,10]

function double(val){
    return val*2;
}

let NewArr=numbers.map(double) // it gives new array as output 

console.log(NewArr,NewArr.length,numbers)

let ans = numbers.find((num) => num === 445); // for find if the condition is true then it returns the value

console.log(ans);

let ans1 = numbers.findIndex((num) => num === 4); // for find if the condition is true then it returns the index of value , if value not present then undefined

console.log(ans1);

console.log(numbers.includes(5)); // true or false if value is present

const filternum = numbers.filter((num) => num %2 == 1);

console.log(filternum);

let NewArray = numbers.slice(1,5);// start and end index 1 to 5 

let NewArray1 = numbers.slice(2);// start and end index 2 to end

let NewArray2 = numbers.splice(1,5);// cut index value 1 to 5 and paste into newarry 2 , numbers contains now only 0,6,to 10 index numbers