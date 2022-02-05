function setup() {
    createCanvas(windowWidth,windowHeight);
    background(135, 206, 235);
    }
  
  
  
  function draw() {
    if(keyIsPressed){
      //night mode
      background(0, 0, 51);
    
      //grass
      noStroke();
      fill(0, 51, 0);
      rect(0, 787/2, 1440);
      
      stroke(1);
  
      //roof
      fill(129,59,59);
  
      rect(590, 175, 380,200);
      triangle(470, 268.5, 575, 145, 845, 470);
  
      //house
      fill(222,222,222);
      rect(470, 268.5, 500,250);
  
      //gutter
      fill(255,0,100);
      line(678,268.5,678, 518)
  
      //door
      fill(117,4,4);
      rect(725,430,50,80)
  
      
      // porch roof
      fill(129,59,59); 
      quad(678,350,970,350,965,400,668,400)
  
      //lights
      fill(0,0,0); 
      line(678,410,974,410)
      // initalize x, count
      x=674
      count = 0
      
      // create 16 elipses, colored randomly
      while (count<16) {
        x+=18
        fill(random(255),random(255),random(255))
        ellipse(x ,410,7)
        count++
      }
  
      //windows
      fill(205,150,84);
  
      rect(535,390,80,90);
      rect(550,290,50,70);
      rect(750,280,50,60);
      rect(850,280,50,60);
      rect(840,420,40,55);
  
      //colums 
      fill(193,187,175);
      rect(810,400,10,119)
      rect(900,400,10,119)
  
      //moon
      noStroke()
      ellipse(200,100 ,100)
      }
  
    else{
    //default to daytime
      background(135, 206, 235);
  
      //grass
      noStroke();
      fill(86, 135, 70);
      rect(0, 787/2, 1440);
      
      stroke(1);
  
      //roof
      fill(206,133,150);
  
      rect(590, 175, 380,200);
      triangle(470, 268.5, 575, 145, 845, 470);
  
      //house
      fill(245,245,245);
      rect(470, 268.5, 500,250);
  
      //gutter
      fill(255,0,100);
      line(678,268.5,678, 518)
  
      //quad(725,430,704,428,704,512,725,510)
      //door
      fill(176,177,173);
      rect(725,430,50,80)
      fill(117,4,4)
      
      // porch roof
      fill(201,130,140);
      quad(678,350,970,350,965,400,668,400)
  
      //windows
      fill(176,177,173);
  
      rect(535,390,80,90);
      rect(550,290,50,70);
      rect(750,280,50,60);
      rect(850,280,50,60);
      rect(840,420,40,55);
  
      //colums 
      fill(193,187,175);
      rect(810,400,10,119)
      rect(900,400,10,119)
  
    }
  
    function mousePressed() {
      // Check if mouse is inside the circle
      
      let d = dist(mouseX, mouseY, 725, 430);
      if (d < 25) {
        print("yay!")
  
        fill(117,4,4)
        quad(725,430,704,428,704,512,725,510)
        //door
        fill(176,177,173);
        rect(725,430,50,80)
      }
    }
    function keyPressed() {
      if (key == ' ') {
        
      }
      return false;
    }
  }



  const message = '#BlackLivesMatter';
const messageX = 20;
const messageY = 150;

function setup() {
  createCanvas(300, 300);
  textSize(32);
}

function draw() {
  background(32);

  if (isMouseInsideText(message, messageX, messageY)) {
    cursor(HAND);
    fill(0, 200, 255);
    stroke(0, 200, 255);
  } else {
    cursor(ARROW);
    fill(255);
    stroke(255);
  }

  text(message, messageX, messageY);
}

function mouseClicked() {
  if (isMouseInsideText(message, messageX, messageY)) {
    window.open('https://blacklivesmatter.com/', '_blank');
  }
}

function isMouseInsideText(message, messageX, messageY) {
  const messageWidth = textWidth(message);
  const messageTop = messageY - textAscent();
  const messageBottom = messageY + textDescent();

  return mouseX > messageX && mouseX < messageX + messageWidth &&
    mouseY > messageTop && mouseY < messageBottom;


    let door;
    function mousePressed(mouseX,mouseY,shapeX, shapeY, shapeW, shapeH) {
      //if mouseX is in between shapeX and shapeX + w
      //if mouseY is in between shapeY and shapeY + h
      if (mouseX > shapeX && mouseX <= shapeX + shapeW && mouseY > shapeY && mouseY <= shapeY + shapeH)
        pass

    }
}