// factory function

function createRectangle(length1, breadth2){
    return rectangle = {
        // with 2 properties
        length:length1,
        breadth:breadth2,
        // with one method (draw)
        draw(){
            console.log('drawing Rectangle')
        }
    };
}

// property of rectangle
rectangle.length;
rectangle.breadth;
// draw function called
rectangle.draw();

let recatngleObj1 = createRectangle(5, 4);
let recatngleObj2 = createRectangle(7, 9);
let recatngleObj3 = createRectangle(45, 14);


// constructor function -> prop/methods ->initialise/Define
// camelcase -> numberofStudents
// constructor function -> Pascal Notation -> first letter of every word is capital ->numberOfstudents
function rectan1(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('drawing')
    }
}

// Object creation using constructor funcgtion
let rectangleObj = rectan1(4,5);


