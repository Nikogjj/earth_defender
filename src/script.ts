let gameName : string = "EarthDefender!";
console.log(gameName);
console.log("test")
type Direction = 0 | 1 | -1;

// // Je récupère la balise nommée canvas
// const canvas = document.querySelector("canvas");
// // Je récupère le contexte du canvas
// // pour pouvoir, à l'avenir, dessiner dedans.
// const context = canvas.getContext("2d");

window.onload = main

let direction : Direction = 0;
function main(){
    const CANVAS_WIDTH = 900;
    const CANVAS_HEIGHT = 500;
    
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    context.fillStyle = "#141414";  // HexaDecimal Gris foncé
    context.fillRect(
        0,0,            // [x,y] supérieur gauche
        CANVAS_WIDTH,CANVAS_HEIGHT // [x,y] inférieur droit
    );
    
    const image_alien : HTMLImageElement = document.querySelector("img.alien");
    const iamge_player : HTMLImageElement = document.querySelector("img.player");
    console.log(iamge_player)
    let alien = {
        x : 0,
        y : 0
    };

    let player = {
        x : CANVAS_WIDTH/2,
        y : CANVAS_HEIGHT - 100
    }
    
    // Je l'affiche
    context.drawImage(
        image_alien,
        alien.x,  
        alien.y,
        image_alien.width,
        image_alien.height
    );
    context.drawImage(
        iamge_player,
        player.x,
        player.y,
        iamge_player.width,
        iamge_player.height
    )
    setInterval(()=>{
        context.clearRect(alien.x,alien.y,image_alien.width,image_alien.height);
        context.fillRect(alien.x,alien.y,image_alien.width,image_alien.height);
        alien.y++;
        if (alien.y == CANVAS_HEIGHT) {
            alien.y = 0;
        }
        context.drawImage(image_alien,alien.x,alien.y,image_alien.width,image_alien.height)
        player.x+=3*direction;
        context.clearRect(player.x-2*direction,player.y,iamge_player.width,iamge_player.height)
        context.fillRect(player.x-2*direction,player.y,iamge_player.width,iamge_player.height);
        context.drawImage(iamge_player,player.x,player.y,iamge_player.width,iamge_player.height)
    },10);
    
    document.addEventListener("keydown",(event)=>{
        switch (event.key) {
            // Go right
            case "d":
                direction = 1;
                break;
            case "D":
                direction = 1;
                break;
            case "q":
                direction = -1;
                break;
            case "Q":
                direction = -1;
                break;
            default:
                break;
        }
    });

    document.addEventListener("keyup",(event)=>{
        switch (event.key) {
            // Player Stops
            case "d":
                direction = 0;
                break;
                case "D":
                direction = 0;
                break;
                case "q":
                direction = 0;
                break;
                case "Q":
                direction = 0;
            break;
    
            default:
                break;
        }
    });


}