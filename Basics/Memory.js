// memory type 
// 1.stack
// its mainly used by thr primitive datatypes 
// whenever stack meomry used we get the copy of variable

let myyoutubename="yash gaikwad"
let anothr=myyoutubename;
anothr='yh';
console.log(anothr);
console.log(myyoutubename);



let useOne={
    email: "yashgaikwad",
    upi:"user@ybl"
}

console.log(useOne);

let useTwo=useOne;

useTwo.email="vish#123";

console.log(useTwo);
console.log(useOne)

