const userEmial="yashgaikwad.gmail.com"


if(userEmial){
    console.log("Got the user email");
}else{
    console.log("User dont have email");
}



//Truthy values: true, array, '0', 'false'," __space", function(){}
// falsy values: false, 0, -0.BigInt 0n, "", null, undefined, NaN



// for object

const emptyObject={};

if(Object.keys(emptyObject).length===0){
    console.log("Empty obj")
}


//Nulliesh coalescing operator(??) : nill undefined


let val1;
//val1=5?? 10
val1=null ?? 10;

console.log(val1);



// terniary opetaror

// conditon ? true : false;


const price=100;

price >100 ? console.log("BIg"): console.log("small");