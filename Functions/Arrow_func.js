
const user={
    name:"yash",
    price: 999,
    welcomeMessage: function (){
        // to access current contxt we use this function
        console.log(`welcome to website ${this.name}`)
        //console.log(this)
    }
}

//user.welcomeMessage();
// user.name="Yash2";
// user.welcomeMessage();

//console.log(this); //refrencing to empty object


//IMP: The global object in browser is window


// function chai(){
//     let username="Yash";
//  console.log(this.username); //so this will only work in objects not in function

// }
// chai();

const chai= ()=> {
    let username="YASH";
    console.log(this)
}
//chai();

// This does not work in arrow function

const addTwo=(num1,num2)=>{
    return num1+num2;
}

console.log(addTwo(10,20));