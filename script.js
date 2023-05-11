const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 100;
let line = 1;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let isDrawing = false;
let direction = false;
let lastX = 0;
let lastY = 0;


function draw(e) {
    if(!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = line;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
    (hue >= 360) ? hue=0 : hue++;
    if(line > 100 || line < 1) direction=!direction;
    (direction) ? line++ : line--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
            [lastX,lastY] =  [e.offsetX,e.offsetY]
            isDrawing = true 
        }
    );
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mouseup', () => isDrawing = false);


