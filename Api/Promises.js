//Promise object represents the eventual completion (or failure) of an asynchronus operation and its resulting value
//motaly we consume promise

//lets create promises


const promiseOne= new Promise( function(resolve,reject){
    // to do any async task
    // Db calls, cryptography and network related task

    setTimeout(function(){
      console.log('Promised executed');

      resolve(); //we have to write it to consume by then
    },2000)
})
// we can create without stroing in varibale


promiseOne.then(function(){
    console.log('Promise consumed');
})


//second promise

const promiseTwo=new Promise(function(resolve,reject){
    

    setTimeout(function(){
        console.log('primise two to pass data')
    //we can pass data through resolve
        resolve({usename:'Yash',email:'YashGaikwad'});
    })
})


promiseTwo.then(function(user){
    console.log(user);
})



// Promise third

const promiseThird= new Promise(function(resolve,reject){
   

    setTimeout(()=>{
     
    let error=true;
   
   if(!error){
    resolve({username:'Yash',password:'pass123'});

   }else{
    reject('something went wrong');
   }
    },1000)
  
})

promiseThird.then(function(user){
  console.log(user);

}).then((username)=>{
  console.log(username.name);
}).catch((error)=>{
 console.log(error)
}).finally(()=>{
   console.log('something happend');
})




//fourth promise using async and await

const promiseFourth= new Promise((resolve,reject)=>{
   setTimeout(()=>{

    let error=true;
    if(!error){
        resolve({username:'javascript', password:'abc'})
    }else[
        reject('Error: Js wet wrong')
    ]

   },1000)
});


async function consumeFourth() {
      try {
        const response=await promiseFourth;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
}

consumeFourth()



// one more async code


async function getAllUsers(params) {
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users');

        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log('E:',error);
    }
}

getAllUsers();


//doing using then

fetch('https://api.github.com/users.Yash-493')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})