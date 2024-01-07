let SystemNumber = 40;


let guess1 = 0;

do {
    guess = parseInt(prompt("Please, Guess a Number"))
    if (guess == SystemNumber){
        alert("Winner")
        break;
    }
} while (guess!=0);
