let a = 6;
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    // console.log(arr.slice(1,))
    //let c = arr.slice(1,) .reduce((a,b) => a*b)
    //or
    let c = arr.slice(1,).reduce((a,b) =>{
        return a*b
    })
    // console.log(c)
    return c
}

function factorial2(number){
    let c = 1
    for (let index = 1; index <= number; index++) {
        c = c*index
    }
    return c
}
console.log(factorial2(a))
console.log(factorial(a))