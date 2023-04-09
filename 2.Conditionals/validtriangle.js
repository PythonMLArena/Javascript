let a =10;
let b=12;
let c=5;

// check the whether triangle is possible or not

// basic condition a<b+c

if (b+c > a ){
    if ( c+a > b){
        if ( a+b > c){
            console.log("Triangle is Valid")
        }else{
            console.log(" Triangle is not valid")
        }
    }else{
        console.log(" Triangle is not valid")
    }
}else{
    console.log("Triangle is not valid");
}