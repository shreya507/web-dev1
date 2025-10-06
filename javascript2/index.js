// console.log("This is function tutorial")
// console.log("This is strings Tutorial")
// function nice(name) {
//     console.log("Hey "+name+ " you are nice person!"); 
//     console.log("Hey  "+name+ " you are good!"); 
//     console.log("Hey "+name+ " your tshirt is nice!"); 
//     console.log("Hey "+name+ " your course is good too!"); 
// }

// nice("Shivam")

// function sum(a, b , c=3) {
//     // console.log(a+b);
//     return a+b+c
// }
// result1 = sum(15)
// result2 = sum(5,2)
// result3 = sum(7,34, 1)


// console.log("The sum of these numbers is: ", result1)
// console.log("The sum of these numbers is: ", result2)
// console.log("The sum of these numbers is: ", result3)


// const func1 = (x)=>{
//     console.log("I am an arrow function", x)
// }
// func1(34);
// func1(66);
// func1(84);


// let y = "Shreya";
// console.log(y[0]);
// console.log(y[1]);
// console.log(y[2]);
// console.log(y[3]);
// console.log(y[4]);
// console.log(y[5]);
// console.log(y.length)

// let real_name = "Shruti"
// let friend = "Supriya"
// console.log("Her name is "+ real_name +"and her friend name is "+ friend)
// console.log(`Her name is ${real_name} and her friend name is ${friend}`)

// let p = "Shivam"
// console.log(p.toUpperCase())
// console.log(p.toLowerCase())
// console.log(p.length())
// console.log(p.slice(1,4))
// console.log(p.slice(2))
// console.log(p.replace("Sh","88"))

// console.log(p.concat(y, "Aishwarya", "Rahul","Priya"))


// console.log(p)
// p.startsWith(sh)
// p.endsWith(gh)


let x = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

for (let i =0; i< 30;i++) {
    console.log(x+i);
    
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

