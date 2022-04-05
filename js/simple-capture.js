let capture;
let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0,0)
    capture = createCapture(VIDEO)
    capture.size(320, 240)
}
function draw (){
    background(255)

    image(capture, 320, 0)
}