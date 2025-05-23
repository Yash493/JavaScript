
 const number1=10;
 const number2=290; //parameters
function addTwoNum(number1,number2)  {
    return number1+number2;
}
const result=addTwoNum(number1,number2);//argument 
//console.log(result)




function loginUserMessgae(username){
    if(username===undefined){
        console.log("pease enter username");
        return
    }
    return `${username} just logged in`;
}

//console.log(loginUserMessgae());


//use of rest operator if we have multiple argument coming and we cant decalre that much then we use it
// ...


function calculatePrice(...num1){
    return num1;
}

console.log(calculatePrice(100,200,300));


// Pass object to function

const person={
    name: 'Yash',
    age:21
}

function passObject(anyObject){
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`);
}

passObject(person);


// Pass array to function

const newArr=[100,200700,900];

function passAryytoFunc(anyArry){
    console.log(anyArry[1]);


}

passAryytoFunc(newArr);