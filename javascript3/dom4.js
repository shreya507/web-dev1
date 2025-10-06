console.log("Haarry is a hacker")
console.log("rohan is a hacker")

setTimeout(() => {
    console.log("I am inside setTimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside setTimeout2")
}, 0);

console.log("The end")

const fn = () =>{
    console.log("Nothing")
}

const callback = (arg) =>{
    console.log(arg)
    fn()
    // console.log(arg)
}

const loadScript = (src, callback) => {
    let c = document.createElement("Script")
    c.src = src
    c.onload = callback("Harry");
    document.head.append(c)
    
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)