// Arrys ( in arrays uou can add heterogeneous values not like we have in c , c++ , java they are homogeneous)

const students = ["Piyush", "John", "Jane"]

console.log(students,students.length)

console.log(students[0])

for (let i = 0; i < students.length; i++){
    console.log(students[i])
}

console.log(students[0]="Sushant Randive")

// You cant do student = ["new"] because its a const but you can update the values inside array using upper code snippet


students.push("New 1"); // add value at the end
students.push({"name":"New 1"}); // add value at the end

console.log(students);

console.log(students.indexOf("New 1")); // if returns -1 then value is not present

students.pop();  // last value will be removed .
students.reverse();


console.log(students);