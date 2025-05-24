const coding=["cpp","javascript","java"];



// for each does not retrun any value

const values= coding.forEach( (item)=>{
    console.log(item);
    //return item;
})



//filter - each value is accessed one time but we have to give condtion

const myNums=[1,2,3,4,5,6,7,8];
let newNums=myNums.filter((num)=>  num >4 )

console.log(newNums);

// also if we use {} brakets then we have to use return keyword
const myNums3=[1,2,3,4,5,6,7,8];
let newNums3=myNums3.filter((num)=>{
  return num >4 ;
}  )

console.log(newNums);


const users = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 22, email: "charlie@example.com" },
  { id: 4, name: "Diana", age: 28, email: "diana@example.com" },
  { id: 5, name: "Ethan", age: 35, email: "ethan@example.com" },
  { id: 6, name: "Fiona", age: 27, email: "fiona@example.com" },
  { id: 7, name: "George", age: 32, email: "george@example.com" },
  { id: 8, name: "Hannah", age: 26, email: "hannah@example.com" },
  { id: 9, name: "Ian", age: 24, email: "ian@example.com" },
  { id: 10, name: "Jane", age: 29, email: "jane@example.com" },
  { id: 11, name: "Kevin", age: 31, email: "kevin@example.com" },
  { id: 12, name: "Laura", age: 23, email: "laura@example.com" },
  { id: 13, name: "Mike", age: 33, email: "mike@example.com" },
  { id: 14, name: "Nina", age: 21, email: "nina@example.com" },
  { id: 15, name: "Oscar", age: 34, email: "oscar@example.com" }
];


const users2= users.filter( (us)=>{
  if(us.age>25){
    return us.age;
  }

});

console.log(users2);