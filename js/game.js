let ballX,ballY
let ballSpeedX, ballSpeedY

let ellipseW=30
let ellipseH=30

let score =0;

let mouseCollide

function setup(){
    createCanvas(windowWidth, windowHeight)
    ballX = random(15, windowWidth-15)
    ballY = random(15, windowHeight-15)
    ballSpeedX = 2 
    ballSpeedY = 2
    textAlign(CENTER)
    textSize(40)
}

function draw(){
    background(0,125,154)
    
    text("Score: " + score + "00", windowWidth/2, 60)
    mouseCollide = dist(ballX,ballY,mouseX,mouseY)
    // move the ball at the et bal speed
    ballX = ballX +ballSpeedX
    ballY = ballY + ballSpeedY

    if(ballX >= windowWidth - 15 || ballX <= 15){
        // reverse course of ball
        ballSpeedX = ballSpeedX * -1
    }

    else if(ballY >= windowHeight - 15 || ballY <= 15){
        // reverse course of ball
        ballSpeedY = ballSpeedY * -1
    }
    if(mouseCollide< 15){
        score++
        ballX = random(15, windowWidth-15)
        ballY = random(15, windowHeight-15)
        ballSpeedX = ballSpeedX * 1.5
        ballSpeedY = ballSpeedY * 1.5
        
        ellipseW = ellipseW + 10
        ellipseH += 10
        fill(random(255),random(255),random(255))
        ellipse(ballX, ballY,ellipseW,ellipseH)


    }
    //ellipse(ballX,ballY,30,30)
    ellipse(ballX, ballY,ellipseW,ellipseH)
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}