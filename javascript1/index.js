// console.log("Test log 1");
console.log("Hello I am Conditional tutorial");
console.log("Hello I am loop tutorial");
let age =17;
let age1 =1;

// let grace = 2;
// console.log(age+grace);
// console.log(age**grace);
// console.log(age%grace)
// if((age+grace)>18)

/*
i am a multiline comment
*/

if(age ==18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}
if(age1 != 18){
    console.log("You are not right");
}
else if(age1==0){
    console.log("Are you kidding?")
}
else if(age1==1){
    console.log("Are you again kidding?")
}
else{
    console.log("You are right");
}
let a =6;
let b =8;
let c = a>b?(a-b):(b-a);
console.log(c);

/*
Translate to:
if(a>b){
let c = a-b;
}
else{
let c = b-a;
}
*/


let x = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

for (let i =0; i< 30;i++) {
    console.log(a+i);
    
}
let obj = {
    name:"Harry",
    role:"Programmer",
    company:"Code with harry AI"
}
for (const key in obj) {
        const element = obj[key];
        console.log(key, element);
}

// for (const c of "Harry") {
//     console.log(c)
// }

// let i = 0;
// while (i<6) {
//     console.log(i)
//     i++;    
// }
let j =0;
do {
    console.log(j)
    j++;
} while (j<6);

