const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const penSize = document.getElementById("pen__size");
const canvas = document.getElementById("drawing__board");
const clearBoard = document.getElementById("clear");
const ctx = canvas.getContext("2d")
let isPressed = false;
let x;
let y;
let counter = 10; 
color = "black"

increase.addEventListener("click", ()=>{
    if(counter<=49){
        counter+=5;
        penSize.textContent = counter;
    }
})

decrease.addEventListener("click", () =>{
    if(counter>5){
        counter-=5;
        penSize.textContent = counter;

    }
})

canvas.addEventListener("mousedown", (e) =>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

document.addEventListener("mouseup", (e) =>{
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove", (e) =>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y , counter, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = counter;
    ctx.stroke();
}

clearBoard.addEventListener("click",() =>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})