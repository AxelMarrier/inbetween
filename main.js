document.addEventListener('DOMContentLoaded', () => {
    const CANVAS = document.querySelector('canvas');
    const CTX = CANVAS.getContext("2d");

    CTX.fillStyle = "red";
    CTX.lineWidth = 3;

    var bDessine = false;

    CANVAS.addEventListener('mousedown', (e) => {
        if(!bDessine){
            bDessine = true;
            CTX.beginPath();
            CTX.moveTo(e.offsetX, e.offsetY);
        }
    })

    CANVAS.addEventListener('mouseup', (e) => {
        if(bDessine){
            bDessine = false;
            CTX.closePath();
        }
    })

    CANVAS.addEventListener('mousemove', (e) => {
        if(bDessine){
            CTX.lineTo(e.offsetX, e.offsetY)
            CTX.stroke();
        }
    })
})