function setup() {
  createCanvas(windowWidth,windowHeight);
  background(2,155,152);
}

function draw() {
  stroke(30,200,100);
  strokeWeight(1);
  line(20,40,300,200);
  
  stroke(100,50,80);
  fill(0,255,0);
  strokeWeight(5);
  ellipse(windowWidth/2,windowHeight/2,50,70);

  noStroke();
  fill(255,0,0);
  rect(mouseX,mouseY,300,50);
  

}