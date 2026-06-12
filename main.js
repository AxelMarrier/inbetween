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
            if(125 < e.offsetX && e.offsetX < 175){
                CTX.strokeStyle = "green";
                console.log("vert")
                return;
            }
            if(200 < e.offsetX && e.offsetX < 250){
                console.log("bleu");
                CTX.strokeStyle = "blue";
                return;
            }
            if(275 < e.offsetX && e.offsetX < 325){
                console.log("noir");
                CTX.strokeStyle = "black";
                return;
            }
            if(350 < e.offsetX && e.offsetX < 400){
                console.log("blanc");
                CTX.strokeStyle = "white";
                return;
            }
        })
    }

    function init_color_wheel(){
        let canvas = document.querySelector('#color-wheel');
        let ctx = canvas.getContext('2d');
        let img = ctx.createImageData(canvas.width, canvas.height);

        let radius = canvas.width / 2;
        ctx.beginPath();
        ctx.arc(radius, radius, radius, 0, 360);
        ctx.stroke();

        for (let x = -radius; x < radius; x++) {
            for (let y = -radius; y < radius; y++) {
                let dx = x / radius;
                let dy = y /radius;
                let distance = dx**2 + dy**2

                if(distance <= 1){
                    let angle = Math.atan2(dy, dx);
                    let hue = (angle * 180 / Math.PI + 360) % 360;
                    let sat = Math.sqrt(distance);
                    let rgb = hsvToRgb(hue, sat, 1);

                    let px = ((y + radius)*canvas.width + (x + radius)) * 4
                    img.data[px] = rgb[0];
                    img.data[px + 1] = rgb[1];
                    img.data[px + 2] = rgb[2];
                    img.data[px + 3] = 255;
                }
            }
        }

        ctx.putImageData(img,0,0);

            function hsvToRgb(hue, sat, value){
                let C = sat * value;
                let X = C * (1 - Math.abs((hue / 60 ) % 2 - 1));
                let M = value - C;

                let r = 0;
                let g = 0;
                let b = 0;
                
                if(hue < 60){
                    r = C; g = X; b = 0;
                } else if (hue < 120){
                    r = X; g = C; b = 0;
                } else if (hue < 180){
                    r = 0; g = C; b = X;
                } else if (hue < 240){
                    r = 0; g = X; b = C;
                } else if (hue < 300){
                    r = X; g = 0; b = C;
                } else {
                    r = C; g = 0; b = X;
                }

                return [(r + M) * 255,(g + M) * 255,(b + M) * 255];
            }
    }

    // EVENT POUR DESSINER
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

    init_color_wheel();
})



