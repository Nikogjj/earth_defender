var gameName = "EarthDefender!";
console.log(gameName);
console.log("test");
// // Je récupère la balise nommée canvas
// const canvas = document.querySelector("canvas");
// // Je récupère le contexte du canvas
// // pour pouvoir, à l'avenir, dessiner dedans.
// const context = canvas.getContext("2d");
window.onload = main;
var direction = 0;
function main() {
    var CANVAS_WIDTH = 900;
    var CANVAS_HEIGHT = 500;
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    context.fillStyle = "#141414"; // HexaDecimal Gris foncé
    context.fillRect(0, 0, // [x,y] supérieur gauche
    CANVAS_WIDTH, CANVAS_HEIGHT // [x,y] inférieur droit
    );
    var image_alien = document.querySelector("img.alien");
    var iamge_player = document.querySelector("img.player");
    console.log(iamge_player);
    var alien = {
        x: 0,
        y: 0
    };
    var player = {
        x: CANVAS_WIDTH / 2,
        y: CANVAS_HEIGHT - 100
    };
    // Je l'affiche
    context.drawImage(image_alien, alien.x, alien.y, image_alien.width, image_alien.height);
    context.drawImage(iamge_player, player.x, player.y, iamge_player.width, iamge_player.height);
    setInterval(function () {
        context.clearRect(alien.x, alien.y, image_alien.width, image_alien.height);
        context.fillRect(alien.x, alien.y, image_alien.width, image_alien.height);
        alien.y++;
        if (alien.y == CANVAS_HEIGHT) {
            alien.y = 0;
        }
        context.drawImage(image_alien, alien.x, alien.y, image_alien.width, image_alien.height);
        player.x += 3 * direction;
        context.clearRect(player.x - 2 * direction, player.y, iamge_player.width, iamge_player.height);
        context.fillRect(player.x - 2 * direction, player.y, iamge_player.width, iamge_player.height);
        context.drawImage(iamge_player, player.x, player.y, iamge_player.width, iamge_player.height);
    }, 10);
    document.addEventListener("keydown", function (event) {
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
    document.addEventListener("keyup", function (event) {
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
