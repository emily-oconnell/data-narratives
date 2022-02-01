function setup() {
  createCanvas(windowWidth,windowHeight);
  background(135, 206, 235);
  
  

  
}

function draw() {

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

  //door
  fill(172,0,0);
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


  





  


  
}