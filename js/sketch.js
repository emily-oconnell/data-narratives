function setup() {
  createCanvas(windowWidth,windowHeight);
  background(135, 206, 235);
  }

  function preload(){
    jackjack = loadImage('images/jj.png');
  
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
    x = 674
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

    fill(117,4,4)
    rect(725,430,50,80)
    
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

    //open door on click
    if(mouseIsPressed){
      let shapeX = 725
      let shapeY = 430
      let shapeW = 50
      let shapeH = 80
      if (mouseX > shapeX && mouseX <= shapeX + shapeW && mouseY > shapeY && mouseY <= shapeY + shapeH){
        //open door
        fill(117,4,4)
        quad(725,430,704,428,704,512,725,510)
        fill(252, 249, 217);
        rect(725,430,50,80)
        //jack jack!
        image(jackjack, 700, 467,100,45);
        }
    }else{
      //door is closed
      fill(117,4,4)
      rect(725,430,50,80)
    }
    //light on in bottom left window
    if(mouseIsPressed){
      let shapeX = 535
      let shapeY = 390
      let shapeW = 80
      let shapeH = 90
      if (mouseX > shapeX && mouseX <= shapeX + shapeW && mouseY > shapeY && mouseY <= shapeY + shapeH){
        //light on
        fill(252, 249, 217);
        rect(535,390,80,90);
      }
    }
    //light on in top left window
    if(mouseIsPressed){
      let shapeX = 550
      let shapeY = 290
      let shapeW = 50
      let shapeH = 70
      if (mouseX > shapeX && mouseX <= shapeX + shapeW && mouseY > shapeY && mouseY <= shapeY + shapeH){
        //light on
        fill(252, 249, 217);
        rect(550,290,50,70);
      }
    }
    //light on in top center window
    if(mouseIsPressed){
      let shapeX = 750
      let shapeY = 280
      let shapeW = 50
      let shapeH = 60
      if (mouseX > shapeX && mouseX <= shapeX + shapeW && mouseY > shapeY && mouseY <= shapeY + shapeH){
        //light on
        fill(252, 249, 217);
        rect(750,280,50,60);
      }
    }
    //light on in top right window
    if(mouseIsPressed){
      let shapeX = 850
      let shapeY = 280
      let shapeW = 50
      let shapeH = 60
      if (mouseX > shapeX && mouseX <= shapeX + shapeW && mouseY > shapeY && mouseY <= shapeY + shapeH){
        //light on
        fill(252, 249, 217);
        rect(850,280,50,60);
      }
    }
    //light on in top right window
    if(mouseIsPressed){
      let shapeX = 840
      let shapeY = 420
      let shapeW = 40
      let shapeH = 55
      if (mouseX > shapeX && mouseX <= shapeX + shapeW && mouseY > shapeY && mouseY <= shapeY + shapeH){
        //light on
        fill(252, 249, 217);
        rect(840,420,40,55);      }
    }
  }  
}
