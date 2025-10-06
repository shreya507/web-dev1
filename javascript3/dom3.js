let button = document.getElementById("btn")

//List of all mouse Event
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("click", ()=>{   or 
// button.addEventListener("dblclick", ()=>{
//     alert("I was clicked.yaayyyy!")
//     document.querySelector(".box").innerHTML = "<b>I was clicked.yaayyyy!</b> Enjoy your click"
// })

// button.addEventListener("contextmenu", ()=>{
//     alert("Right click please")
//     // document.querySelector(".box").innerHTML = "<b>I was clicked.yaayyyy!</b> Enjoy your click"
// })

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
    // alert("I was clicked.yaayyyy!")
    // document.querySelector(".box").innerHTML = "<b>I was clicked.yaayyyy!</b> Enjoy your click"
})