const name="Yash";
console.log(typeof name);


// concatioonation
console.log(name + " Gaikwad"); // old way to write

// use backticks
console.log(`Hello my name is ${name}`);
 

//we can declare it as object

const name1=new String("Yash-Gaikwad");
console.log(name1)
console.log(` char is ${name1[1]}`);

//length

console.log(name1.length);
// use proto method

console.log(name1.toLocaleUpperCase());

//  IMP
// so here we are using the primitive datatype so original value is not changed


console.log(name1.charAt(3));
console.log(name1.indexOf('Y'));

const newName= name1.substring(5,12);
console.log(newName)



const anothrString=name1.slice(12,-5)
console.log(anothrString)


// to trimming the spaces

const newString="    Xtreme   ";
console.log(newString.trim());

// for replace
const url="https://yash.com/yash%20gaikwad/";
console.log(url.replace('%20','-'));
console.log(url.includes('pramod'));



// to convert srting into array based on - or any symbol
console.log(name1.split('-'))
