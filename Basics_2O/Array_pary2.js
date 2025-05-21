const heroes=['spider', 'iron','hulk'];

const dc=['superman','batman','Yash'];


// to concat - Wr have to do in in new Array


const newArr=heroes.concat(dc);

console.log(newArr);


// we can use spread operator also

const all_new=[...heroes,...dc];
console.log(all_new)



// to spread out array
const another_arry=[1,3,2,[4,5,5],7,[6,7,8,[9,0]]];
const real_another_arr=another_arry.flat(Infinity);
console.log(real_another_arr)


// to conver string into array use from

console.log(Array.isArray("Yash"));
console.log(Array.from("Yash"));