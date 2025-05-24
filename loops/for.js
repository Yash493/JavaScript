const array=[10,2,3,4,5];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
   // console.log(element);
}


// break and continue

// for (let index = 1; index <20; index++) {
//     if(index==5){
//        break;  
//     }
//     console.log(index);
// }


// for (let index = 1; index <20; index++) {
//     if(index==5){//skips this interation
//        continue; 
//     }
//     console.log(index);
// }


//Higher order loops
// for of
// const arr=[12,2,3,4,4];

// for (const  num of arr) {
//     console.log(num);
// }


//maps

const map=new Map();
map.set('IN', "INDIA")
map.set('IN2', "INDIA2")
map.set('IN3', "INDIA3")

console.log(map);

for (const [key,value] of map) {
    console.log(key);
     console.log(value);
}



// for objects we use forin loop
const myObj={
 js:'Javascript',
 cpp:"c++",
 rb:"ruby"
}

for (const key in myObj) {
   console.log(myObj[key]);

}




const pro=['js','java','cpp'];



for(const key in pro){

        console.log(key);    
        console.log(pro[key]);
}