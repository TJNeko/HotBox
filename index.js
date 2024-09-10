const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let x = canvas.width /2;
let y = canvas.height - 100;
let vxl = 0;
let vxr = 0;
let vy = 0;

let dangerX = 0;
let dangerY = 5;
let dangerVX = 5;
let dangerVY = 5;
dangerCollision = false;


const lineHeight = 10;
const lineWidth = 75;

let boxxyHeight = 50; 
let boxxyWidth = 50;
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
    //left press
    if (e.keyCode == 37) {
        left = true; 
    }
    //right press
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

//boxxy
function drawBoxxy() {
    ctx.beginPath();
    ctx.rect(x, y, boxxyWidth, boxxyHeight);
    ctx.fillStyle =  "#ff00b4";
    ctx.fill();
    ctx.strokeStyle = "rgb(255 255 255 / 100%)";
    ctx.stroke();
    ctx.closePath();
    x += vxl;
    x += vxr;
    y += vy;

    //ground collision
    if (y + 50 >= 670 && y <= 670 + 10) {
        groundCollision = true;
        y = 670 - 50;
        vy = 0;
    } else {
        groundCollision = false;
    }
    //danger collision
    if (y + 50 >= dangerY && y <= dangerY + 50 && x + 50 >= dangerX && x <= dangerX + 70) {
        boxxyHeight = 0;
        boxxyWidth = 0;
    } else {
        dangerCollision = false;
    }
}
//ground
function drawLine() {
    ctx.beginPath();
    ctx.rect(0, 670, 1500, 10);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
}
// dangerous rectangle
function drawDanger() {
    ctx.beginPath();
    ctx.rect(dangerX, dangerY, 70, 50);
    dangerX += dangerVX;
    dangerY += dangerVY;
    ctx.fillStyle = "#00ffbc";
    ctx.fill();
    ctx.closePath();
}

// drawing
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLine();
    drawDanger();
    drawBoxxy();

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

//boxxy borders
if (y <= 0) {
    y = 0;
}
if (x <= 0) {
    x = 0;
}
if (x >= 1230) {
    x = 1230;
}

// fixes needed in the speeding up here
// danger boarders
if (dangerY <= 0) {
    dangerY = 0;
    dangerVX += .5;
    dangerVY += .5;
    dangerVY = -dangerVY;
}
if (dangerY >= 620) {
    dangerY = 620;
    dangerVX += .5;
    dangerVY += .5;
    dangerVY = -dangerVY;
}
if (dangerX <= 0) {
    dangerX = 0;
    dangerVX += .5;
    dangerVY += .5;
    dangerVX = -dangerVX;
}
if (dangerX >= 1230) {
    dangerX = 1230;
    dangerVX += .5;
    dangerVY += .5;
    dangerVX = -dangerVX;
}

// boxxy falling
    if (fall) {
        vy += 0.5;
    }

    if (y >= 620) {
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





