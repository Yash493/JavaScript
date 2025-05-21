//dates

const date= new Date();
console.log(date.toString());
console.log(date.getHours());
console.log(date.getMonth()); //month start from 0 in js
console.log(typeof date);


//
let myCreateDate= new Date("2023-02-19");
console.log(myCreateDate.toDateString())


// Imp - to exact timestamp
let myTimeStamp=Date.now();
//console.log(myTimeStamp.getTime())

// To get time in seconds
console.log(Math.floor(Date.now()/1000));



//IMP methods with date

let newDate=new Date();
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));