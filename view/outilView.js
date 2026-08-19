export class outilView{
    constructor(outil, positionX = 0, positionY = 0, largeur = 100, hauteur = 100){
        this.outil = outil;
        this.positionX = positionX;
        this.positionY = positionY;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.element = null;
    }

    draw(){
        if(this.element === null){
            let canvas = document.querySelector('body').appendChild(document.createElement("canvas"));
            this.element = canvas;
            this.element.style.width = this.largeur + "px";
            this.element.style.height = this.hauteur + "px";
            this.element.style.border = "3px solid black";
            this.element.style.position = "absolute";
            this.element.style.left = this.positionX + "px";
            this.element.style.top = this.positionY + "px";
        }   
    }

    move(nouvellePositionX, nouvellePositionY){
        this.positionX = nouvellePositionX;
        this.positionY = nouvellePositionY;
        this.element.style.left = nouvellePositionX;
        this.element.style.top = nouvellePositionY;
    }
}