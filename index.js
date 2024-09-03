const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

let x = canvas.width /2;
let y = canvas.height - 100;
let dx = 10;
let dy = 0;

const lineHeight = 10;
const lineWidth = 75;

const boxxyRadius = 50; 
let jump = false;
let fall = true;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// below this
function keyDownHandler(e) {
    if (e.keyCode === 32) {
        jump = true; 
        fall = false;
        this.disabled = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode === 32) {
        jump = false;
        fall = true;
    }
}
// stops here

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
    if (y <= 0) {
        y = 0;
    }
// boxxy falling
    if (fall) {
        y += 5;
    }

    if (y >= 620) {
        y = 620;
    }
// stops here
    x += dx;
}


function start() {
    setInterval(draw, 10);
}

function buttonClick() {
    document.getElementById("startButton")
    start();
}





