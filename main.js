document.addEventListener('DOMContentLoaded', () => {
    
    // VARIABLES
    const CANVAS = document.querySelector('canvas');
    const CTX = CANVAS.getContext("2d");

    CTX.lineWidth = 3;
    CTX.strokeStyle = "black"

    var bDessine = false;

    
    // FOCNTIONS & METHODES
    function init_couleur(){
        let canvas = document.querySelector("canvas#couleur");
        let ctx = canvas.getContext("2d");


        //Dessine les sphères
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.ellipse(50, 50, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.ellipse(125, 50, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.ellipse(200, 50, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill()
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.ellipse(275, 50, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill()
        ctx.beginPath();  // Blanc
        ctx.strokeStyle = "black";
        ctx.ellipse(350, 50, 25, 25, Math.PI / 4, 0, 2 * Math.PI);
        ctx.stroke()

        canvas.addEventListener("click", (e) => {
            console.log(e.offsetX);
            if(25 < e.offsetX  && e.offsetX < 75){
                CTX.strokeStyle = "red";
                console.log("rouge")
                return;
            }
            if(100 < e.offsetX && e.offsetX < 150){
                CTX.strokeStyle = "green";
                console.log("vert")
                return;
            }
            if(175 < e.offsetX && e.offsetX < 225){
                console.log("bleu");
                CTX.strokeStyle = "blue";
                return;
            }
            if(250 < e.offsetX && e.offsetX < 300){
                console.log("noir");
                CTX.strokeStyle = "black";
                return;
            }
            if(325 < e.offsetX && e.offsetX < 375){
                console.log("blanc");
                CTX.strokeStyle = "white";
                return;
            }
        })
    }




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

    init_couleur();
})

