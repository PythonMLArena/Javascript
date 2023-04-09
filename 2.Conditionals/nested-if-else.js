let ispremium=false;
let isuservip=false;
let userdiscovery=false;

if (ispremium){
    console.log("Enjoy the premium content");
}
else if (isuservip){
    console.log("Enjoy the VIP content");
}
else{
    console.log("Please Purchase plans to enjoy the content on our Online platform");
}

// multiple else if block can be there

// if multiple condition are true then first True condition is written will be executed

if (ispremium){
    if (userdiscovery){
        ///
        console.log("Enjoy both content");
    }
    else{
        // 
        console.log("Enjoy only premium");
    }
}
else{
    console.log("Please buy something");
}