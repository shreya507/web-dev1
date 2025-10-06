/*Create a faulty calculator using javascript
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:
 
+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operation 10% of the times
*/


let random = Math.random();
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operations")
let b = prompt("Enter second number")



let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if(random>0.1){
    //Performs correct calculation
    console.log(`The reult is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}
