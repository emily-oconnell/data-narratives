let ellipseX = 500;

function setup(){

    createCanvas(windowWidth,windowHeight)
    background(180,55,0);
}

function draw(){
    if(mouseIsPressed == true){
        background(40,100,100)
    }
    else{
        background(60,55,32)
    }

    ellipse(ellipseX,mouseY, 100)

    if(mouseX > windowWidth/2){
        fill(30,200,150)
    }
    else{
        fill(200,40,100)
    }

    
}