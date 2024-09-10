const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let x = canvas.width /2;
let y = canvas.height - 100;
let vxl = 0;
let vxr = 0;
let vy = 0;

const lineHeight = 10;
const lineWidth = 75;

const boxxyRadius = 50; 
let jump = false;
let fall = true;
let left = false;
let right = false;

let grounded = true;
let maxJump = 50;
jumpStart = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, true);
// jump and fall press

function keyDownHandler(e) {
    if (e.keyCode == 38 && grounded) {
        jump = true; 
        fall = false;
        jumpStart = y;

    }
    //left
    if (e.keyCode == 37) {
        left = true; 
    }
    //right
    if (e.keyCode == 39) {
        right = true; 
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 37) {
        left = false;
    }
    if (e.keyCode == 39) {
        right = false;
    }
}



// coloring issues below here
function drawBoxxy() {
    ctx.beginPath();
    ctx.rect(x, y, boxxyRadius, 50);
    x += vxl;
    x += vxr;
    y += vy;
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

// boxxy jumping stuff
   if (jump && grounded) {
    vy = -15;
}

if ((jumpStart - y) >= maxJump) {
    jump = false;
    fall = true;
}

if (grounded = false) {
    vy =0;
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
        vy += 0.5;
    }

    if (y >= 620) {
        y = 620;
        grounded = true;
    }

if (y < 620) {
    grounded = false;
}
    if (left) {
        x -= 7;
    }
    if (right) {
        x += 7;
    }

}


function start() {
    setInterval(draw, 10);
}

function buttonClick() {
    document.getElementById("startButton")
    start();
}





