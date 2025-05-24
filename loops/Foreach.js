const coding=["js","java","python"];
// coding.forEach( function (item ) {
//         console.log(item);})


// we can also pass function to for rach

// function  print(item){
//     console.log(item);
// }


// coding.forEach(print)
const myCoding=[

    {
        myLang:"Marathi",
        proLang:"cpp"
    },
    {
        myLang:"English",
        proLang:"Java"
    },
    {
        myLang:"French",
        proLang:"Javascript"
    }
]

myCoding.forEach((item)=>{
  console.log(`My lang is ${item.myLang} and pro lang is ${item.proLang}`);
})