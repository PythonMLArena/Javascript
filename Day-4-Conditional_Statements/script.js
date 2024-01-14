console.log("Conditional Statements");

const age=22;


if ((age >= 18) && (age <=21)) {
    console.log("Yes you can vote but cant marry")
}else if (age>=21){
    console.log("you can vote and marry also")
}else {
    console.log("you cant vote and marry")
}

// short form (Ternary Operator)


age >=21 ? console.log("Yes you can vote") : console.log("No")

// Variable

let result = age >=21 ? "Yes you can vote" : "No"

console.log("result: " + result);

// switch statements

const options = 2; // options matches at 2 from 2 to end all case will run

switch (options) {
    case 1:{
        console.log("Namaste, Sir");
    }
    case 2:{
        console.log("Hello, sir");
    }
    case 3:{
        console.log("Lets Do it Sir");
    }
}


const options1 = 2; // options matches at 2 from 2 to end all case will run if break is there is it block execution of code

switch (options1) {
    case 1:{
        console.log("Namaste Option 2, Sir");
    }
    case 2:{
        console.log("Hello Option 2, sir");
        break
    }
    case 3:{
        console.log("Lets Do it Sir");
    }
    default:{
        console.log("Invalid Option ");
    }
}