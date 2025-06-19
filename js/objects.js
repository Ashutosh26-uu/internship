// const obj = {
//     name: "ashutosh",
//     age: 20,
//     isStudent: true,
//     subjects: ["math", "science", "english"],   
//     hobbies: {
//         indoor: ["reading", "gaming"],
//         outdoor: ["football", "cricket"],
//         tech : {
//             programming: ["JavaScript", "Python"],
//             webDevelopment: ["HTML", "CSS"]
//         },
//         address: {
//             city: "prayagraj",      
//             country: "India"
//         },
//     }
// }
//     console.log(Object.keys(obj)); // Get keys of the object
//     console.log(Object.values(obj)); // Get values of the object
//     console.log(Object.entries(obj).flat()); // Get key-value pairs of the object
// let a ={a: 1, b: 2};
// let b = {c: 3, d: 4};   
// let c =Object.assign({},a,b);
// console.log(c); // Merge two objects
// console.log(Object.freeze(obj)); // Freeze the object (make it immutable)
// a = {e: 1, f: 2};
// console.log(Object.isFrozen(obj)); // Check if the object is frozen

//spread operator
let arr = [1, 2, 3,4];
let [a,b,c,d] = arr;
console.log(a, b, c, d); // Destructuring array elements

//spread oprator in objects
let user = {name: "ashutosh"}
const updatedUser = {
    ...user, age: 20,};
    console.log(updatedUser );
    