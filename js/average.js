let img;

// We will hold the totals for our color values here
let avgRed = 0;
let avgGreen = 0;
let avgBlue = 0;

// Load the image
function preload() {
  img = loadImage("images/face1.jpeg");
}

photos = [img]
var dict = {};


for (var key in dict) {
    var value = dict[key];
}

function setup() {
    createCanvas(400, 400);
    noStroke();
    pixelDensity(1)

}

function getAvg(photo) {


  // Resize the image to fit the canvas
  img.resize(width, height);

  // Load the pixels
  img.loadPixels();

  // Loop through the pixels X and Y
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {

      // Calculate the pixel index
      const index = (y * img.width + x) * 4;

      // Sum the red, green, and blue values
      avgRed += img.pixels[index + 0];
      avgGreen += img.pixels[index + 1];
      avgBlue += img.pixels[index + 2];

    }
  }


  // We're finished working with pixels so update them
  img.updatePixels();

  // Get the total number of pixels
  // Divide by 4 because the total number of pixels = pixels * numColorChannels 
  const numPixels = img.pixels.length / 4;

  // divide the totals by the number of pixels to find the average.
  avgRed /= numPixels;
  avgGreen /= numPixels;
  avgBlue /= numPixels;

  // Draw the image as the background
  image(img, 0, 0);
  
  // Set the fill color to the average color of the pixels
  fill(avgRed, avgGreen, avgBlue);

  // Draw a square in the center of the screen
  //rectMode(CENTER);
  //rect(width / 2, height / 2, 100, 100);
  rect(x,y,100,100)

  c = get(1,1)
  print(c)
}

function draw() {
    for (i in photos) {
        getAvg(i)
        c = get(1,1)
        var c = dict[i];
    }
    print(dict)


}