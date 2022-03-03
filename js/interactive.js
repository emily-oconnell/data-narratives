/* Used the following tutorial to figure out how to embed the iFrame! https://editor.p5js.org/llight/sketches/IgAEIvmr5P */

// initialize
var spotifyOpen=0
var iframe
var myCanvas
let songId
let color = '#e6fadc'

function preload(){
    feelingHype = loadImage('images/star-eyes.png')
    feelingSad = loadImage('images/broken-heart.png')
    feelingSadButHype = loadImage('images/sad-cowboy.png')
    feelingInLove = loadImage('images/heart.png')
    tellMeAStory = loadImage('images/open-book.png')
    goatsOnly = loadImage('images/goat.png')
}


function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight)
    myCanvas.parent('myContainer')

    /* HYPE TAYLOR BUTTON*/

    //create new button using clickable library
    hypeButton = new Clickable()
    // background image from preloaded images above
    hypeButton.image = feelingHype
    // fit and center image to button size
    hypeButton.fitImage = true
    //change button position
    hypeButton.locate(windowWidth/8, 350)

   
    hypeButton.onHover = function () {
        // style button for hover
        this.stroke = "#AAAAFF"
        this.textColor = "#000000"
        this.text = "Hype!"
        this.image = ""
        }
   
    hypeButton.onOutside = function () {
        // style button for no hover
        this.color = color
        this.stroke = color
        this.image = feelingHype
        this.text = " "
        this.textColor = "#000000"
        }
   
    hypeButton.onPress = function () {
        // choose a hype song from the list using the chooseHype function
        this.color = "#EEEEEE"
        openSpotify(chooseHype())
    }


    hypeButton.onRelease = function () {
        // style button for press release
        this.color = color
        this.textColor = "#000000"
    }
    /* SAD TAYLOR BUTTON */


    sadButton = new Clickable()
    sadButton.image = feelingSad
    sadButton.fitImage = true
    sadButton.locate(2*windowWidth/8, 350)

    
    sadButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000"
        this.text = "Sad!"
        this.image = ""
    }
    
    sadButton.onOutside = function () {
        this.color = color
        this.stroke = color
        this.image = feelingSad
        this.text = " "
        this.textColor = "#000000"
    }
    
    sadButton.onPress = function () {
        this.color = "#EEEEEE"
        openSpotify(chooseSad())
    }


    sadButton.onRelease = function () {
        this.color = color
        this.textColor = "#000000"
    }


    /* SAD BUT HYPE TAYLOR BUTTON */


    sadButHypeButton = new Clickable()
    sadButHypeButton.image = feelingSadButHype
    sadButHypeButton.fitImage = true
    sadButHypeButton.locate(3*windowWidth/8, 350)

   
    sadButHypeButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000"
        this.text = "Sad but Hype!"
        this.image = ""

        }
   
    sadButHypeButton.onOutside = function () {
        this.color = color
        this.stroke = color
        this.image = feelingSadButHype
        this.text = " "
        this.textColor = "#000000"
        }
   
    sadButHypeButton.onPress = function () {
        this.color = "#EEEEEE"
        openSpotify(chooseSadButHype())
    }


    sadButHypeButton.onRelease = function () {
        this.color = color
        this.textColor = "#000000"
    }

    /* IN LOVE TAYLOR BUTTON */


    inLoveButton = new Clickable()
    inLoveButton.image = feelingSadButHype
    inLoveButton.fitImage = true
    inLoveButton.locate(4*windowWidth/8, 350)

   
    inLoveButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000"
        this.text = "In Love!"
        this.image = ""

        }
   
    inLoveButton.onOutside = function () {
        this.color = color
        this.stroke = color
        this.image = feelingInLove
        this.text = " "
        this.textColor = "#000000"
        }
   
    inLoveButton.onPress = function () {
        this.color = "#EEEEEE"
        openSpotify(chooseLove())
    }


    inLoveButton.onRelease = function () {
        this.color = color
        this.textColor = "#000000"
    }

    /* TELL ME A STORY TAYLOR BUTTON */


    storyButton = new Clickable()
    storyButton.image = tellMeAStory
    storyButton.fitImage = true
    storyButton.locate(5*windowWidth/8, 350)

   
    storyButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000"
        this.text = "Tell me a Story!"
        this.image = ""

        }
   
    storyButton.onOutside = function () {
        this.color = color
        this.stroke = color
        this.image = tellMeAStory
        this.text = " "
        this.textColor = "#000000"
        }
   
    storyButton.onPress = function () {
        this.color = "#EEEEEE"
        openSpotify(chooseStory())
    }


    storyButton.onRelease = function () {
        this.color = color
        this.textColor = "#000000"
    }
    /* GOAT TayloR BUTTON */

    goatButton = new Clickable()
    goatButton.image = goatsOnly
    goatButton.fitImage = true
    goatButton.locate(6*windowWidth/8, 350)

   
    goatButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000"
        this.text = " Top 10!"
        this.image = ""

        }
   
    goatButton.onOutside = function () {
        this.color = color
        this.stroke = color
        this.image = goatsOnly
        this.text = " "
        this.textColor = "#000000"
        }
   
    goatButton.onPress = function () {
        this.color = "#EEEEEE"
        openSpotify(chooseGoat())
    }


    goatButton.onRelease = function () {
        this.color = color
        this.textColor = "#000000"
    }
}


let bgValue = 0

function mousePressed() { 
// choose an index to get function from list
// reset count at 4 to make sure to not go out of bounds 
    if (bgValue < 4 ){
        bgValue += 1
    } else {
        bgValue = 0
    }
  }

function draw() {
    background(color)

    // use index from above function to call a function that plays animated background
    var bgs = [colorBg,patternBackground,starBG,spottedBg,cloudBg]
    bgs[bgValue]()

    // draw all the butons
    hypeButton.draw()
    sadButton.draw()
    sadButHypeButton.draw()
    inLoveButton.draw()
    storyButton.draw()
    goatButton.draw()
    
    // add and format text
    textFont("serif", 50)
    textAlign(CENTER)
    fill("black");
    text("Which Taylor Are You Today?", windowWidth/2, 200)
    textFont("Helvetica", 20)
    text("Select your mood below for Taylor Swift song recomendations. \nPress x to close the window and click to change the background", windowWidth/2, 250)

}


// close the window when x is pressed
function keyTyped() {
    if (key == 'x') {
        closeSpotify()
    }
}

// up and down arrows control color (for some backgrounds)
function keyPressed() {
    colors = ["1ca5cd","#99743d", "#973269", "#97243f", "#cdc6a9", "#8b8b8b", "#f2acc4", "#7f7b7b", "#cf8c63", color]
    if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
        color = random(colors)
    }
}

/* SONG SELECTION */
// I wrote a python script to clean the spotify embed codes, see regex.py

// randomly select a hype song, then return it
function chooseHype () {
    var hypeSongs=["0VE4kBnHJUgtMf0dy6DRmW","1BxfuPKGuaTgP7aM0Bbdwr", "6rZVy6FIG7lSJQMFXHo12z", "7A2cNLRT0YJc1yjxHlKihs", "0yN4fNzmVnmgC0dsOoi9Wh", "1R0a2iXumgCiFb7HEZ7gUE", "7J4b3LVCIGO4CMBDFLPoP6", "07NxDD1iKCHbAldceD7QLP", "4svZDCRz4cJoneBpjpx8DJ", "2o2sgVJIgFXk8GQjWTgI6U", "6pYNq0ZwpPVazKzsqpf0G8", "3z6XUommYDWPHeFhmhhT6j","1By2VQkUN0Frd8mKNV5NYC", "72jCZdH0Lhg93z6Z4hBjgj", '32mVHdy0bi1XKgr0ajsBlG?si=6d3735378a0c47a4', '1q8E1FfFuhd12c5JcJwPxQ?si=4a280199f5294bb0', '3RauEVgRgj1IuWdJ9fDs70?si=96e79c2da7be4849', '4N60XfcTE1ysLZGbYgnYXq?si=bb0ba8cd73b54281', '1nYWTzy5zu3zEPNgB1sItW?si=63b56ce399494c06', '43rA71bccXFGD4C8GOpIlN?si=961038a555e54437', '550erGcdD9n6PnwxrvYqZT?si=88eeb08ab06544a1', '5xTtaWoae3wi06K5WfVUUH?si=98280ee338b94bf1', '15DeqWWQB4dcEWzJg15VrN?si=e2837ceec498431c', '6xsEAm6w9oMQYYg3jkEkMT?si=59d1213e7a9b49cf', '47HtKpfzpAt8rQjjXWotFj?si=f91c071d653e40c6', '3jBMHD19RZdAqG9iFQh7xc?si=e95c3e976cb04643', '1P17dC1amhFzptugyAO7Il?si=cffad579a60b428a', '0lx2cLdOt3piJbcaXIV74f?si=2e03b16b383842f9', '5YqltLsjdqFtvqE7Nrysvs?si=23beb6079ca94615', '3yII7UwgLF6K5zW3xad3MP?si=41f7a17c813b4610', '1p80LdxRV74UKvL8gnD7ky?si=1e9fe2232fa54ffb']
    var hypeId=random(hypeSongs)
    
    return hypeId
}

// randomly select a sad song, then return it
function chooseSad () {
    var sadSongs =["4pvb0WLRcMtbPGmtejJJ6y", "4tXsR2Hv3l85TQTwgEn3Um", "0sY6ZUTh4yoctD8VIXz339", "7kt9e9LFSpN1zQtYEl19o1", "73YUReisjb3A9ActdLLjJQ", "01QdEx6kFr78ZejhQtWR5m", "6MWoRt97mnSTXZhu3ggi9C", "3lUfyFwtySI1iWcg7LXkY4", "0PurA4JVJ8YQgSVopY8fn6", "1n3b9Eekoy3S9ZSZ5DmTW1", "4AYtqFyFbX0Xkc2wtcygTr", "01K4zKU104LyJ8gMb7227B", "74WBGgUnpKrJXt6TETfR6Z", "7MbT4I8qGntX4fMdqMQgke", "4GBkffrtA51p17JH35irGA", "6RvmQShxVQwJ0AWMtP6JoU", "5GPwN5iZ9ZMSXAkppj4Uvv", "12ntTeqEeTg7GAVpe8Mhpl"]
    var sadId=random(sadSongs)
    
    return sadId
}

// randomly select a sad but hype song, then return it
function chooseSadButHype () {
    var sadButHypeSongs=['2dgFqt3w9xIQRjhPtwNk3D?si=e7a558fc940449e4', '2NmsngXHeC1GQ9wWrzhOMf?si=bf62dac7b0694ef3', '3AVyODBL5tGBRWcQdRUg6u?si=ace169f3e00a467e', '6uWuycgG9AqbjS6KEBbPgF?si=68d43351e3224930', '5enxwA8aAbwZbf5qCHORXi?si=59694d0e94e34b6c', '1msEuwSBneBKpVCZQcFTsU?si=3de11ae2e37e495e', '6iWMI5oOhWrDbLbjmwTWFq?si=bd2294377fec4f08', '3hUxzQpSfdDqwM3ZTFQY0K?si=89c5ee050a2d454c', '4OAuvHryIVv4kMDNSLuPt6?si=b0964a5415734444', '7DjCRhhFo9PPzca1BjMLcf?si=1e8d02d44b064f51', '3oGVx9RBmiYGv5ZCecWLkx?si=16f5a3c4c3444440', '3kfgJql90tzgoxByioAMXR?si=5a02f558fe3e4cb3', '0sY6ZUTh4yoctD8VIXz339?si=49879e2e7891461d', '3zwMVvkBe2qIKDObWgXw4N?si=c281e7c90bec43c3', '0ZNU020wNYvgW84iljPkPP?si=2df97517203c42c3', '11UaQaEp2LvdspTyyuE3ur?si=ff8d15f3749a4c87', '6iiAfo4wTA2CVC3Uwx9uh8?si=29243e43d6964333', '12M5uqx0ZuwkpLp5rJim1a?si=7a7d6ef59db843a4', '6XDBA3QWX51lDJ0oZbaJJN?si=78c0475447e94ffc']
    var sadButHypeId=random(sadButHypeSongs)
    
    return sadButHypeId
}

// randomly select a love song, then return it
function chooseLove () {
    var loveSongs=['1dGr1c8CrMLDpV6mPbImSI?si=40cca71857174046', '4y5bvROuBDPr5fuwXbIBZR?si=4ce9991bb1434f48', '19CSr8rwW05VJL2F91KFNK?si=59a6823571244a57', '5jAIouBES8LWMiriuNq170?si=42d76f58834841d6', '05GsNucq8Bngd9fnd4fRa0?si=bf09348f22af4c67', '1q8E1FfFuhd12c5JcJwPxQ?si=536babd46eba41b0', '1Ov37jtRQ2YNAe8HzfczkL?si=dd56ee998a104d87', '10eBRyImhfqVvkiVEGf0N0?si=467ae480d4e44370', '6d9IiDcFxtFVIvt9pCqyGH?si=3824dc604c2e4669', '0dBW6ZsW8skfvoRfgeerBF?si=3bcc0eb3683c4c1c', '6VsvKPJ4xjVNKpI8VVZ3SV?si=4c1c074abb3f4528', '15DeqWWQB4dcEWzJg15VrN?si=a483eeaf12f74b2d', '5vyxXfD5gLlyPxGZMEjtmd?si=673967f374ac42d8', '2JoJrsEV15OzbijS47lids?si=7e1fd5d61f46489b', '7F5oktn5YOsR9eR5YsFtqb?si=c512fc46d9874465', '5hQSXkFgbxjZo9uCwd11so?si=f2f2742200cf4271', '5hQSXkFgbxjZo9uCwd11so?si=f2f2742200cf4271', '6YvqWjhGD8mB5QXcbcUKtx?si=ed7de52d68aa4354', '3S7HNKPakdwNEBFIVTL6dZ?si=bc62954b3cad41d2', '7qEUFOVcxRI19tbT68JcYK?si=1ecfb01ec37d4867', '2QrQCMel6v2JiLxqrg4p2O?si=805f6e5ee4204eef', '2ehRU518I0hYqMGQnk4lDY?si=5f8d501028af494a']
    var loveId=random(loveSongs)
    
    return loveId
}

// randomly select a storytelling song, then return it
function chooseStory () {
    var storySongs=['5enxwA8aAbwZbf5qCHORXi?si=e46b98713a384549', '24DefNCFiWTP8OjYWiXuYe?si=cbb33c2bf4db4303', '06WgOCf0LV2h4keYXDRnuh?si=099d3ca24a894aa6', '0VE4kBnHJUgtMf0dy6DRmW?si=4d5b6a54e15940fc', '1LLXZFeAHK9R4xUramtUKw?si=77f3ad176f224665', '6KJqZcs9XDgVck7Lg9QOTC?si=7e00fc5f1d604307', '5kI4eCXXzyuIUXjQra0Cxi?si=d1d79e2fa149436a', '0eFQWVz0qIxDOvhLpZ40P7?si=6412203dad3e4c4c', '0sY6ZUTh4yoctD8VIXz339?si=beb2602ac2e440e2', '7dW84mWkdWE5a6lFWxJCBG?si=3b60d26c6e494f00', '3RaT22zZsxVYxxKR7TAaYF?si=b373cfce64f340e4', '3zwMVvkBe2qIKDObWgXw4N?si=a205391779f842ab', '6sQckd3Z8NPxVVKUnavY1F?si=c8873791d368456f', '4CkgMiMqZ5JzW9iYXSTMTL?si=c80567f0e9d04361', '2nqio0SfWg6gh2eCtfuMa5?si=169d0b2f4ced4f79', '1qrpoAMXodY6895hGKoUpA?si=94b0b1e239b14c2d', '22bPsP2jCgbLUvh82U0Z3M?si=ebe0421bdf994e79', '5P2bHCDM2tsgIaYWsZMhu5?si=d8432db0f2334e5a', '3IhtE4fkytdrtEfV34UzkD?si=44deb93db0b14412', '3EPgWM1zfTSzEc0z4AwWTM?si=36bbefb59d7a47f2']
    var storyId=random(storySongs)
    
    return storyId
}

// randomly select a goat song, then return it
function chooseGoat () {
    var goatSongs=['2dgFqt3w9xIQRjhPtwNk3D?si=74ae0849071a441d', '4R2kfaDFhslZEMJqAFNpdd?si=c5242f6ed60840ea', '3zwMVvkBe2qIKDObWgXw4N?si=ab8377a18b034158', '5enxwA8aAbwZbf5qCHORXi?si=2c557814e89b4f2a', '0sY6ZUTh4yoctD8VIXz339?si=9cbc5af91a774396', '1XjHRolIXL2M1EEOUsGGR4?si=a512785c15e04cb0', '11UaQaEp2LvdspTyyuE3ur?si=9aa7d284b49d47d4', '6nK2pIKFcRc5frrZKHgsiT?si=c19dafd40b5445a1', '0ZNU020wNYvgW84iljPkPP?si=856bb22a576f4512', '6VsvKPJ4xjVNKpI8VVZ3SV?si=0a2386f39c4540d7']
    var goatId=random(goatSongs)
    
    return goatId
}

// the song's genre will be determined by which clickable button is pressed
// take the selected song from the above functions

function openSpotify(songId){
    // if spotify is already open, close it
    if (spotifyOpen==1){
        closeSpotify()
    }
    
    // if spotify is not already open
    // embed the iframe of the randomly selected song from the genre
    else {
        iframe=document.createElement('iframe')
        var loc = "https://open.spotify.com/embed/track/"+songId
        iframe.src=loc
        iframe.allow="encrypted-media"
        iframe.width=myCanvas.width
        iframe.height = 300
        myCanvas.resize(windowWidth, windowHeight-300)
        myContainer.appendChild(iframe)
        spotifyOpen=1
    }

}

// close the window
function closeSpotify(){
    iframe.remove()
    spotifyOpen=0
    myCanvas.resize(windowWidth, windowHeight)
    redraw()
}

bgColor = "#668377"
function patternBackground() {
    // creates an effect of switching colors every second
    background(bgColor);

// on even seconds on the computer clock, use color 1 for the background and color 2 used for the circles
  if (second() % 2 == 0) {
    bgColor = "#668377"
    noStroke();

    for(var x = 0; x <= windowWidth; x+=20){
      for(var y = 0; y<= windowHeight; y+=20){
        fill("#B6CB9E");
		  ellipse(x, y, 20, 20);   
      }
    }
    // otherwise, color 2 is the background and color 1 is used for the circles
    } else {
    bgColor = "#B6CB9E"
      noStroke();

    for(var x = 0; x <= windowWidth; x+=20){
      for(var y = 0; y<= windowHeight; y+=20){
        fill("#668377");
		  ellipse(x, y, 20, 20);   
      }
    } 
  }

  // rectangle so you can read the text
  fill(color)
  rect(210,140,1000,150)

}

// from p5 documentation, draw a star using lots of math, but easy to copy and paste!
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  // use the above function to create the backround
  function starBG() {
    loop()
    background("#c7c2ba");
    color = "#c7c2ba"

    push();
    fill("#a6a5a7")
    translate(100, 250);
    //translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    pop();

    push();
    fill("#a6a5a7")
    translate(250, 100);
    //translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    pop();

    push();
    fill("#a6a5a7")
    translate(75, 75);
    //translate(width * 0.8, height * 0.5);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    pop();
  }

  // change the color based on the x and y position of the of the mouse
  // creates a pinkish/purple/blueish colorscheme
  function colorBg() {
    clear()
    background(mouseY, 10, mouseX, 100)

    // rectangle for readability
    fill(color)
    rect(210,140,1000,150)
  }



  let cloudX = 100;
  let cloudY = 100; 

  function cloudBg() {
    color = "#944713"
    background("#944713");
  
    // create a bunch of clouds using the below draw function
    drawCloud(cloudX, cloudY-50);
    drawCloud(cloudX - 100, cloudY + 100)
    drawCloud(cloudX - 300, cloudY + 143)
    drawCloud(cloudX - 1000, cloudY + 350)
    drawCloud(cloudX - 400, cloudY + 500)
    drawCloud(cloudX - 500, cloudY + 549)
    drawCloud(cloudX - 1023, cloudY + 500)
    drawCloud(cloudX - 1190, cloudY + 320)
    drawCloud(cloudX - 1023, cloudY + 500)
    drawCloud(cloudX - 1248, cloudY + 203)
    drawCloud(cloudX - 1332, cloudY + 100)
    drawCloud(cloudX - 1444, cloudY + 600)
    drawCloud(cloudX - 1444, cloudY + 600)


    drawCloud(cloudX + 100, cloudY + 100)
    drawCloud(cloudX + 300, cloudY + 143)
    drawCloud(cloudX + 100, cloudY + 350)
    drawCloud(cloudX + 40, cloudY + 500)
    drawCloud(cloudX + 290, cloudY + 549)
    drawCloud(cloudX - 410, cloudY + 100)
    drawCloud(cloudX - 399, cloudY + 9)
    drawCloud(cloudX - 1000, cloudY + 350)
    drawCloud(cloudX - 439, cloudY + 500)
    drawCloud(cloudX - 902, cloudY + 549)

    drawCloud(cloudX + 700, cloudY + 400)
    drawCloud(cloudX + 620, cloudY + 100)
    drawCloud(cloudX + 900, cloudY + 143)
    drawCloud(cloudX + 859, cloudY + 350)
    drawCloud(cloudX + 1000, cloudY + 549)
    drawCloud(cloudX + 1200, cloudY + 500)
    drawCloud(cloudX + 740, cloudY + 20)
    drawCloud(cloudX + 1294, cloudY + 183)
    drawCloud(cloudX + 1209, cloudY + 90)
    drawCloud(cloudX + 1209, cloudY + 90)
    drawCloud(cloudX + 1504, cloudY + 10)

    // clouds will move at the randmoly selected "speed"
    cloudX+=speed
  }
  
  function drawCloud(cloudX, cloudY) {
    
    // function that draws the clouds
    fill(250)
    noStroke();
    ellipse(cloudX, cloudY, 70, 50);
    ellipse(cloudX + 10, cloudY + 15, 100, 50);
    ellipse(cloudX - 20, cloudY + 15, 100, 50);
    speed=random(0.1,0.7);
  }

  // create a class that creates a circle object
  // based on the Jitter object in the p5 documentation
  class Circle {
    
    // use constructor to define attributes of a circle
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(10, 30);
      this.speed = 1;
    }
  
    // define how the circle objects move
    move() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    // define how the circle objects are drawn
    display() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }

  i = 0
  let circles = []

  // use the above circle class to create many circle objects
  function spottedBg() {


    background("gray");

    fill("black")

        circles.push(new Circle());
      for (let i = 0; i < circles.length; i++) {
        circles[i].move();
        circles[i].display();
      }
      fill(color)
      rect(210,140,1000,150)
  }