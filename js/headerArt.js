function randomColor() {
    var colors = ["#003c3d", "#007879", "#00bbbf", "#42fcff"];
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}

function newRandomArt() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    for(i = 0; i < 15; i ++) {
        drawSquare(canvas, context);
    }
}

function drawSquare(canvas, context) {
    //generates random dimension and position
    var width = Math.floor(Math.random() * canvas.width);
    var height = Math.floor(Math.random() * canvas.height);
    var dimension = Math.floor(Math.random() * 50);
    //picks a random color and draws the square
    context.fillStyle = randomColor();
    context.fillRect(width, height, dimension, dimension);
}
