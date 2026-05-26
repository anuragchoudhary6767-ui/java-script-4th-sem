// let obj={
//     id:1,
//     name:"anurag",
//     lastName:"choudhary",
//     fullName:function(city){
//         return this.name+" "+this.lastName
//     }
// }
// let userOne = {
//     id:10,
//     name: "chockroj",
//     lastName: "janta party",
// } 
// console.log(userOne.id);
// console.log(userOne.name);
// console.log(userOne.lastName);

// console.log(userOne["delhi"]);




// // Original object
// const person = {
//   name: "Alice",
//   address: { city: "Delhi", pin: 110001 }
// };

// // Shallow copy using Object.assign
// const shallowCopy = Object.assign({}, person);

// // OR using spread operator
// // const shallowCopy = { ...person };

// shallowCopy.name = "Bob"; // ✅ sirf outer property change hogi
// shallowCopy.address.city = "Mumbai"; // ⚠️ nested object reference same hai

// console.log("Original:", person);
// console.log("Shallow Copy:", shallowCopy);





// let userOne = {
    
//     name:"anurag",
//     age: 18,
//     address: { city: "Delhi", pin: 110001 },
    
// }
// let userTwo = structuredClone(userOne);

// userTwo.address.city = "delhi";    //  nested object bhi alag hai
// console.log( userOne.address.city);
// console.log( userTwo.address.city);


let array = [1, 2, 3, 4, 5];
//  arr.mapp
console.log(Array.prototype)