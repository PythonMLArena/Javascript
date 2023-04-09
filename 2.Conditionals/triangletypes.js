let a=12;
let b=10;
let c=12;

// check if triangle is eqilateral or scalene or Isosceles

// condition all the sides are equal then equilateral
// scalene none sides are equal to each other
// any 2 sides are equal then Isosceles 

if ( a==b && b==c && c==a ){
    console.log("Equilateral Triangle")
}else if ( a!=b && b!=c && c!=a){
    console.log("Scalene Triangle")
}else{
    console.log("Isosceles Triangle")
}

if ( a==b && b==c && c==a ){
    console.log("Equilateral Triangle")
}else if ( a==b || b==c || c==a ){
    console.log("Isosceles Triangle")
}else{
    console.log("Scalene Triangle")
}