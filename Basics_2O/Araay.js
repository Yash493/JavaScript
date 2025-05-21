//Arrays

//shallow copies-
//  means share  the same refrence
// deep copies-
//  does not share  the same frefece so does not changes original copies




const arr=[0,1,2,3];
console.log(arr[1]);
console.log(arr.indexOf(2));


const myHeros=['YASH'];

const myArr=new Array(1,3,4,2);

console.log(myArr);

// Array Mehtods

myArr.push(5);

console.log(myArr);
myArr.pop();
console.log(myArr);


// to insert start of array
myArr.unshift(0);
console.log(myArr);

myArr.shift(); //to remove
console.log(myArr);


console.log(myArr.includes(8));
console.log(myArr.indexOf(3));



// we can convert arrat into string
//using join function

const newArr= myArr.join();
console.log(newArr)
console.log(myArr)



// Imp methods [slice and splice]
// The main differnce betn slice and splice is 
// the slice doesnt change the original array but splice does
console.log("****SLICE*****")
console.log("A", myArr);
console.log(myArr.slice(1,3));
// here it remove first value till 2 dont remove mentioned 3 there
console.log("A", myArr);


console.log("****SPLICE*****")
console.log("B", myArr);
console.log(myArr.splice(1,3));
// here OPPOSITE it remove first value till 2 ans also remove mentioned 3 there
console.log("B", myArr); //changes origial arry
