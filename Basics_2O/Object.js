// we can declare object by two ways using litreal and using constructor
// singleton only made by ojects



// object litreals


const mySym= Symbol("key1"); //declarion of symbol 

const jsUser={
    name: 'yash',
    surname: 'gaikwad',
    [mySym]:"mykey1", // accessing symbol after declare
    age: 21,
    gmail: 'yashgaikwad493@gmail.com',
    isLoggedIn: true
}

// console.log(jsUser.name);
// console.log(jsUser["gmail"]); // good way
// console.log(jsUser[mySym]); //for this dont use ''

jsUser.name='vishal';
//Object.freeze(jsUser); //to freeze
jsUser.name='Yash'
//console.log(jsUser);


jsUser.greetings= function(){
    console.log("Hello guys");
}
jsUser.greetingsTwo= function(){
    console.log(`Hello guys , myself ${this.surname + ' '  +  this.name}`);
} // we are refrenceing things from same oject so used this


console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());