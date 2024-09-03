const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let x = canvas.width /2;
let y = canvas.height - 100;
let dx = 0;
let dy = 0;

const lineHeight = 10;
const lineWidth = 75;

const boxxyRadius = 50; 
let jump = false;
let fall = true;
let left = false;
let right = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// jump and fall press

function keyDownHandler(e) {
    if (e.keyCode == 38) {
        jump = true; 
        fall = false;
    }
    //left
    if (e.keyCode == 37) {
        left = true; 
        fall = true;
    }
    //right
    if (e.keyCode == 39) {
        right = true; 
        fall = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 38) {
        jump = false;
        fall = true;
    }
    if (e.keyCode == 37) {
        left = false;
        fall = true;
    }
    if (e.keyCode == 39) {
        right = false;
        fall = true;
    }
}



// coloring issues below here
function drawBoxxy() {
    ctx.beginPath();
    ctx.rect(x, y, boxxyRadius, 50, Math.PI * 2);
    ctx.fillStyle =  "#FF0000";
    ctx.fill();
    ctx.strokeStyle = "rgb(0 255 255 / 100%)";
    ctx.stroke();
    ctx.closePath();
}

function drawLine() {
    ctx.beginPath;
    ctx.rect(0, 670, 1500, 10);
    ctx. fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}

// order of line and boxxy messes things up hard
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoxxy();
    drawLine();
    
    if (x + dx > canvas.width - boxxyRadius || x + dx < 0) {
        dx = -dx;
   }

// boxxy jumping stuff
   if (jump) {
    y -= 5;
}
//borders
if (y <= 0) {
    y = 0;
}
if (x <= 0) {
    x = 0;
}
if (x >= 1230) {
    x = 1230;
}
// boxxy falling
    if (fall) {
        y += 5;
    }

    if (y >= 620) {
        y = 620;
    }
    if (left) {
        x -= 5;
    }
    if (right) {
        x += 5;
    }

    x += dx;
}


function start() {
    setInterval(draw, 10);
}

function buttonClick() {
    document.getElementById("startButton")
    start();
}





