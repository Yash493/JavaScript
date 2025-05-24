//Map

// const myNums=[1,2,3,4,5,6,7,7,8,9];

// const newNums= myNums.map((num)=> num+10 );
// console.log(newNums);


// //chaining in js
// const newNums2= myNums
// .map((num)=> num+10 ) //this vlaue pass to second chain
// .map((num) => num-10)
// .filter((num)=>{
//     return num==9;
// })

// console.log(newNums2);


//Reduce 


const Nums=[11,2,2,3];


const tot=Nums.reduce((acc,val)=>{
    return acc+val;
},0)

console.log(tot);



const courses = [
  { id: 1, title: "JavaScript for Beginners", price: 499, duration: "4 weeks" },
  { id: 2, title: "Advanced Python", price: 999, duration: "6 weeks" },
  { id: 3, title: "Full-Stack Web Development", price: 1999, duration: "12 weeks" },
  { id: 4, title: "Data Structures & Algorithms", price: 799, duration: "8 weeks" },
  { id: 5, title: "Machine Learning Basics", price: 1499, duration: "10 weeks" },
  { id: 6, title: "ReactJS Essentials", price: 899, duration: "5 weeks" },
  { id: 7, title: "Node.js & Express", price: 899, duration: "6 weeks" },
  { id: 8, title: "DevOps with Docker & Kubernetes", price: 1599, duration: "8 weeks" },
  { id: 9, title: "Cybersecurity Fundamentals", price: 1199, duration: "7 weeks" },
  { id: 10, title: "Android App Development", price: 1399, duration: "10 weeks" },
  { id: 11, title: "iOS Development with Swift", price: 1499, duration: "10 weeks" },
  { id: 12, title: "Cloud Computing with AWS", price: 1599, duration: "9 weeks" },
  { id: 13, title: "UI/UX Design Principles", price: 999, duration: "6 weeks" },
  { id: 14, title: "Blockchain Development", price: 1799, duration: "10 weeks" },
  { id: 15, title: "Game Development with Unity", price: 1499, duration: "8 weeks" }
];


const totalPrice=courses.reduce((acc,curval)=>{
 return acc+curval.price;
},0)

console.log(totalPrice)