let img;

// initialize avg colors
let avgRed = 0;
let avgGreen = 0;
let avgBlue = 0;

// this will hold the images
let imgList = []
let hoverList = []

// this will hold the rgb values
let colorList = []

let photoList =[]

// load the images into the array array
function preload() {
  imgList[0] = loadImage("images/leg1.jpeg");
  imgList[1] = loadImage("images/face1.jpeg");
  imgList[2] = loadImage("images/palm.jpeg");
  imgList[3] = loadImage("images/hand.jpeg");
  imgList[4] = loadImage("images/legnfoot.jpeg");
  imgList[5] = loadImage("images/nose.jpeg");
  imgList[6] = loadImage("images/cheek2.jpeg");


  hoverList[0] = loadImage("images/leghover.jpeg");
  hoverList[1] = loadImage("images/cheeckhover.jpeg");
  hoverList[2] = loadImage("images/palmhover.jpeg");
  hoverList[3] = loadImage("images/handhover.jpg");
  hoverList[4] = loadImage("images/legnfoothover.jpeg");
  hoverList[5] = loadImage("images/nosehover.jpeg");
  hoverList[6] = loadImage("images/cheek2hover.jpeg");


}

x = 100
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 7; i++) {
    photoList.push(new Square(x,100,100,100));
    x += 110
  }

}

function draw() {

  for (let i = 0; i < photoList.length; i++) {
    fill(getAvg(imgList[i]));
    photoList[i].display()
    if (photoList[i].mouseHover(mouseX, mouseY)) {
      fill(getAvg(hoverList[i]))
      photoList[i].display()
    }
  }

}

function getAvg(photo) {
  photo.resize(width, height);

  // Load the pixels
  photo.loadPixels();

  // Loop through the pixels X and Y
  for (let y = 0; y < photo.height; y++) {
    for (let x = 0; x < photo.width; x++) {

      // Calculate the pixel index
      const index = (y * photo.width + x) * 4;

      // Sum the red, green, and blue values
      avgRed += photo.pixels[index + 0];
      avgGreen += photo.pixels[index + 1];
      avgBlue += photo.pixels[index + 2];
    }

 
  }

  const numPixels = photo.pixels.length / 4;

  avgRed /= numPixels;
  avgGreen /= numPixels;
  avgBlue /= numPixels;


  avgColor = [avgRed,avgGreen, avgBlue]



  return avgColor
}

class Square {
  constructor(x,y,w,h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    //this.color = (r,g,b)
  }
  display() {
    //fill(this.color)
    rect(this.x, this.y, this.w, this.h);
  }
  mouseHover(mx, my){
  if (mx > this.x && mx < this. x + this.w  && my > this.y && my <  this.y+this.h)  {
    return true
    } else {
      return false
    }
  }
}