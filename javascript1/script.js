// alert("Hello world");
console.log("Hey there code is running....")
console.log("Hey there code is also running....")
console.log("code is looking like a wowww....")

var a = prompt("Enter your number")
var isTrue = confirm("Are you sure you want to leave this page and blast your computer")
if(isTrue){
    console.log("Computer is blasting")
}
else{
    console.log("Computer is not blasting")
}
console.log("Your number is "+a)

let b = 5;
b = b+1;
let c = 6;
let d = "Tony";
var e = 7;

console.log(b+c+8);
console.log(typeof(b), typeof(c), typeof(d));
let _a = "shubham";
{
    let b = 66;
    var e = 77;
    console.log(b);
}
console.log(b);
console.log(e);
// var 55a = "Rohan"; //not allowed
// const a1 = 6;
// a1 = a1+1;           //not allowed because a1 is constant


//Primitive Datatypes
let x = "tony bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof(x), typeof(y), typeof(z), typeof(p), typeof(q), typeof(r));

//Object
let o = {
    "name": "tommy",
    "job role": "developer",
    "job code": 56660,
    "is_handsome":true
}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);