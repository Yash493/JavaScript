//immediately invoked function epresssions

// To avoid global scope pollution we use this

(function chat(){
    console.log("connected");
})();


((name)=>{
   console.log(`conneted ${name}`); 
})('Yash');