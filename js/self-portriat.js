let img
let color

// initialize avg colors
let avgRed = 0;
let avgGreen = 0;
let avgBlue = 0;

// initialize lists
let imgList = []
let squares =[]
let colorList = []

// load the images into the array 
function preload() {
  imgList[0] = loadImage("images/leg1.jpeg");
  imgList[1] = loadImage("images/face1.jpeg");
  imgList[2] = loadImage("images/palm.jpeg");
  imgList[3] = loadImage("images/hand.jpeg");
  imgList[4] = loadImage("images/legnfoot.jpeg");
  imgList[5] = loadImage("images/nose.jpeg");
  imgList[6] = loadImage("images/cheek2.jpeg");
  imgList[7] = loadImage("images/normalhand.jpeg");
  imgList[8] = loadImage("images/covidfoot.jpeg");
  imgList[9] = loadImage("images/ear.jpeg");
  imgList[10] = loadImage("images/foot.jpeg");
  imgList[11] = loadImage("images/morefoot.jpeg");
  imgList[12] = loadImage("images/leghover.jpeg");
  imgList[13] = loadImage("images/cheeckhover.jpeg");
  imgList[14] = loadImage("images/palmhover.jpeg");
  imgList[15] = loadImage("images/handhover.jpg");
  imgList[16] = loadImage("images/legnfoothover.jpeg");
  imgList[17] = loadImage("images/nosehover.jpeg");
  imgList[18] = loadImage("images/cheek2hover.jpeg");
  imgList[19] = loadImage("images/earhover.jpeg");
  imgList[20] = loadImage("images/covidhover.jpeg");
  imgList[21] = loadImage("images/ear.jpeg");
  imgList[22] = loadImage("images/normalhand.jpeg");

  imgList[23] = loadImage("images/leg1.jpeg");
  imgList[24] = loadImage("images/face1.jpeg");
  imgList[25] = loadImage("images/palm.jpeg");
  imgList[26] = loadImage("images/hand.jpeg");
  imgList[27] = loadImage("images/legnfoot.jpeg");
  imgList[28] = loadImage("images/nose.jpeg");
  imgList[29] = loadImage("images/cheek2.jpeg");
  imgList[30] = loadImage("images/normalhand.jpeg");
  imgList[31] = loadImage("images/covidfoot.jpeg");
  imgList[32] = loadImage("images/ear.jpeg");
  imgList[33] = loadImage("images/foot.jpeg");
  imgList[34] = loadImage("images/morefoot.jpeg");
  imgList[35] = loadImage("images/leghover.jpeg");
  imgList[36] = loadImage("images/cheeckhover.jpeg");
  imgList[37] = loadImage("images/palmhover.jpeg");
  imgList[38] = loadImage("images/handhover.jpg");
  imgList[39] = loadImage("images/legnfoothover.jpeg");
  imgList[40] = loadImage("images/nosehover.jpeg");
  imgList[41] = loadImage("images/cheek2hover.jpeg");
  imgList[42] = loadImage("images/earhover.jpeg");
  imgList[43] = loadImage("images/covidhover.jpeg");
  imgList[44] = loadImage("images/ear.jpeg");
  imgList[45] = loadImage("images/normalhand.jpeg");

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  for (let i=150; i<windowHeight-100; i+=50){
    for (let j = 200; j < windowWidth-300; j+=50) {
      // create a 50x50 square object
      // with the current valuse of j as the x and the current value of i as y
      squares.push(new Square(j,i, 50,50))
    }
  }
}

function draw() {
  // format text
  fill(0)
  textSize(50)
  textFont('Helvetica')
  textStyle(BOLD)
  text('SKINTONE', 200, 70)

  textSize(20)
  text('Paint with all the colors of the skin', 200, 100)
  textSize(10)
  textStyle(NORMAL)
  text('Click a square to toggle the color - Press any key to randomize', 200, 725)
  

  // call the makeList function to make a list of all colors
  makeList()
  // for each square created 
  for (let i=0; i < squares.length; i++) {
      // display the square
      squares[i].display()
      if(mousePressed()){
        // if an element is pressed
        // call display again to change the color of the square
        squares[i].display()
      }
    }
}


function getAvg(photo) {

  // load the pixels
  photo.loadPixels();

  // loop through all pixels
  for (let y = 0; y < photo.height; y++) {
    for (let x = 0; x < photo.width; x++) {

      // forumla for getting each pixel
      const index = (y * photo.width + x) * 4;

      // add the r,g,b vlaues
      avgRed += photo.pixels[index + 0];
      avgGreen += photo.pixels[index + 1];
      avgBlue += photo.pixels[index + 2];
    }
  }

  // count the total number of each r,g,b,a pixels
  const numPixels = photo.pixels.length / 4;

  // calculate the average r,g,b
  avgRed /= numPixels;
  avgGreen /= numPixels;
  avgBlue /= numPixels;

  // reaturn a list of rounded avg r,g,b value
  avgColor = [round(avgRed), round(avgGreen), round(avgBlue)]

  return avgColor
}

function makeList() {
  // for each image in the array
  for (let i = 0; i < imgList.length; i++) {
    // add the average color of that image to the list
    let newColor = getAvg(imgList[i])
    colorList.push(newColor)
  }
  return colorList
}

function keyPressed() {
  // loop once when mouse is pressed
  loop();
}

function keyReleased() {
  // stop looping
noLoop();
}

function mousePressed() {
  // overload mousePressed
  for (i=0;i<squares.length;i++) {
    if (squares[i].clicked()) {
      squares[i].display()
    }
  }

}

/* Make each squre object*/
class Square {
  // each square needs to be defined with 
  // an x-value, y-value, width, height, and color
  constructor(x,y,w,h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
  }
  display() {
    // display the square object based on the values specified in the constructor
    // set color to a random color from the colorList
    this.color = random(colorList)
    fill(this.color)
    rect(this.x, this.y, this.w, this.h);
  }
  clicked() {
    // if the mouse is inside the square
    if (mouseX > this.x && mouseX < this. x + this.w  && mouseY > this.y && mouseY <  this.y+this.h)  {
      this.display()
    } else {
      noLoop()
    }
  }
}
