console.log("Hello world!")

// document.body   
// <body>​…​</body>​
// document.body.childNodes
// NodeList(11) [text, comment, text, div.contain, text, script, text, comment, text, script, text]
// document.body.childNodes[0]
// #text
// document.body.childNodes[3]
// <div class=​"contain">​…​</div>​
// document.body.childNodes[3].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont = document.body.childNodes[3]
// undefined
// cont
// <div class=​"contain">​<div class=​"box">​BOX1​</div>​flex<div class=​"box">​BOX2​</div>​flex<div class=​"box">​BOX3​</div>​flex<div class=​"box">​BOX4​</div>​flex<div class=​"box">​BOX5​</div>​flex</div>​
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElementChild
// <div class=​"box">​BOX1​</div>​flex
// cont.lastElementChild
// <div class=​"box">​BOX5​</div>​flex
// cont.lastElementChild.style.backgroundColor = "Aqua";
// 'Aqua'
// cont.lastElementChild.style.color = "Brown";
// 'Brown'
// cont.lastElementChild.parentElement
// <div class=​"contain">​<div class=​"box">​BOX1​</div>​flex<div class=​"box">​BOX2​</div>​flex<div class=​"box">​BOX3​</div>​flex<div class=​"box">​BOX4​</div>​flex<div class=​"box" style=​"background-color:​ aqua;​ color:​ brown;​">​BOX5​</div>​flex</div>​

// document.body.firstElementChild
// <div class=​"contain">​…​</div>​
// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[3].nex
// undefined
// document.body.firstElementChild.children[3].nextElementSibling
// <div class=​"box">​BOX5​</div>​flex
// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"box">​BOX3​</div>​flex
// document.body.firstElementChild.children[3].previousSibling
// #text
// document.body.firstElementChild.children[3].pa
// undefined
// document.body.firstElementChild.children[3].parentElement
// <div class=​"contain">​…​</div>​


// document.body.children
// HTMLCollection(3) [table, script, script]
// document.body.children[0]
// <table>​…​</table>​
// document.body.children[0].rows
// HTMLCollection(2) [tr, tr]
// document.body.children[0].columns
// undefined


//color the one by one element it's appliacable only on element
// let bhupendrajogis = document.getElementsByClassName("box")
// console.log(bhupendrajogis)
// bhupendrajogis[2].style.backgroundColor = "red"


// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[4].style.backgroundColor = "Aquamarine"


// document.getElementById("coral").style.backgroundColor = "Coral"

// document.querySelector(".box").style.backgroundColor = "Green";
console.log(document.querySelectorAll(".box"))

//color the present all box
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "Yellow";
    // console.log(e)
})
