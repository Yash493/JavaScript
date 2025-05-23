let a=10;

if (true){
    let a=300;
    console.log("INner" , a);
}

console.log("Outer",a);




//Imp example
console.log(addOne(5));

function addOne(num){

    return num +1;

}


//addTwo(2); // we cant use it before declaration
const addTwo = function(num){
    return num+2;
}




addTwo(2);



