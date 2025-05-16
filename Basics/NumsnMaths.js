const score=300


// using object

const balance= new Number(100);
console.log(balance)


//to conver into sting and apply its properties

console.log(score.toString().length)

//some main properties that useful

console.log(score.toFixed(2)); //adds 2 decimal points


const anotherNum=1123.60;
console.log(anotherNum.toPrecision(4)) //give arg accorrding to decimal



const hundreads=1000000;

console.log(hundreads.toLocaleString('en-IN')); //adds qoma



// ********* MATHS *********//
// default library in js

console.log(Math.abs(-3));

// console.log(Math.round(5.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.3));
// console.log(Math.max(1,3,2,1));
// console.log(Math.min(1,3,2,1));

console.log((Math.random()*10) +1)


//IMP
const min=10;
const max=30;

console.log(Math.floor(Math.random()*(max-min+1)+ min)+min);