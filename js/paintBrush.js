let jj
let jjBool = false
let ellipseBool = false

function preload(){
    jj = loadImage('images/jj.png')
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    background(255)
}

function draw(){
    if (ellipseBool==true){
        ellipseBrush()
    }
    if (jjBool == true){
        dogBrush()
    }

}
  
function dogBrush(){
    image(jj,mouseX,mouseY, 100,45)
}

function ellipseBrush(){
    fill(random(255),random(255), random(255),50)
    ellipse(mouseX,mouseY, 50, 50)

}

function keyPressed(){
     if(key == 'e'){
         ellipseBool = true
         jjBool = false

    }
    else if (key == 'd'){
        jjBool = true
        ellipseBool = false
    }
    else{
        background(255)
        ellipseBool = false
        jjBool = false
    }
}