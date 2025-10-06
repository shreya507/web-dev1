console.log("This tutorial is based on Array ")

// let arr = [2,5,8,9,7]
// //   index 0,1,2,3,4
// arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])


// console.log(arr.toString())
// console.log(arr.join(" and "))
// console.log(arr.pop())
// console.log(arr.push(10))
// //shift jo hota hai wo pop ka bhai hota hai or jo unshift hota hai wo  push ka bhai hota hai
// console.log(arr.shift())
// console.log(arr.unshift("jack"))
// console.log(delete arr[6])
// console.log(arr.splice(1,2,"jack","john"))

// let a1 = [1,2,3]
// let a2 = [4,5,6]
// // let a3 = [7,8,9]
// console.log(a1.concat(a2,a3))

// let number = [1, 2, 3, 4, 5]
// // number.splice(1,2)
// number.splice(1,3,22,33)
// console.log(number)
// console.log(number.slice(1,3))

let a1 = [8,38,5,299,43,9]
// console.log(a1.sort())
console.log(a1.sort((a, b) => a - b));

// for (let index = 0; index < a1.length; index++) {
//     const element = a1[index];
//     console.log(element)
// }

// a1.forEach((value, index, a1) => {
//     console.log(value, index, a1)
// });

// let obj1 = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj1) {
//     if (Object.prototype.hasOwnProperty.call(obj1, key)) {
//         const element = obj1[key];
//         console.log(key, element)
//     }
// }

// for (const iterator of a1) {
//     console.log(iterator)
// }

// //for print the square value
// let newArr = []
// for (let index = 0; index < a1.length; index++) {
//     const element = a1[index];
//     newArr.push(element**2)
// }
// console.log(newArr)

let newArr = a1.map((e, index, array)=>{
    return e**2
} )
console.log(newArr)

const greaterThanseven = (e) =>{
    if(e>50){
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanseven))

let a2 = [3,58,68,5,43]
const red = (a, b)=>{
    // return a*b
    return a+b
}

console.log(a2.reduce(red))
console.log(Array.from("Harry"))