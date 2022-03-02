var spotifyOpen=0
var iframe
var myCanvas
let songId
var selection

function preload(){
    feelingHype = loadImage('images/star-eyes.png')
    feelingSad = loadImage('images/broken-heart.png')
    feelingSadButHype = loadImage('images/sad-cowboy.png')
    feelingInLove = loadImage('images/heart.png')
    tellMeAStory = loadImage('images/open-book.png')
    goatsOnly = loadImage('images/goat.png')
}


function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('myContainer')

    /* HYPE TAYLOR */

    hypeButton = new Clickable()
    hypeButton.image = feelingHype
    hypeButton.fitImage = true
    hypeButton.locate(windowWidth/8, 350)

   
    hypeButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000";
        this.text = "Hype!";
        this.image = ""

        }
   
    hypeButton.onOutside = function () {
        this.color = "#e6fadc";
        this.stroke = "#e6fadc";
        this.image = feelingHype
        this.text = " ";
        this.textColor = "#000000";
        }
   
    hypeButton.onPress = function () {
        openSpotify(chooseHype());
    }


    hypeButton.onRelease = function () {
        this.color = "#EEEEEE";
        this.textColor = "#000000";
    }
    /* SAD TAYLOR */


    sadButton = new Clickable()
    sadButton.image = feelingSad
    sadButton.fitImage = true
    sadButton.locate(2*windowWidth/8, 350)

    
    sadButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000";
        this.text = "Sad!";
        this.image = ""
    }
    
    sadButton.onOutside = function () {
        this.color = "#e6fadc";
        this.stroke = "#e6fadc";
        this.image = feelingSad
        this.text = " ";
        this.textColor = "#000000";
    }
    
    sadButton.onPress = function () {
        openSpotify(chooseSad());
    }


    sadButton.onRelease = function () {
        this.color = "#EEEEEE";
        this.textColor = "#000000";
    }


    /* SAD BUT HYPE TAYLOR */


    sadButHypeButton = new Clickable()
    sadButHypeButton.image = feelingSadButHype
    sadButHypeButton.fitImage = true
    sadButHypeButton.locate(3*windowWidth/8, 350)

   
    sadButHypeButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000";
        this.text = "Sad but Hype!";
        this.image = ""

        }
   
    sadButHypeButton.onOutside = function () {
        this.color = "#e6fadc";
        this.stroke = "#e6fadc";
        this.image = feelingSadButHype
        this.text = " ";
        this.textColor = "#000000";
        }
   
    sadButHypeButton.onPress = function () {
        openSpotify(chooseSadButHype());
    }


    sadButHypeButton.onRelease = function () {
        this.color = "#EEEEEE";
        this.textColor = "#000000";
    }

    /* IN LOVE TAYLOR */


    inLoveButton = new Clickable()
    inLoveButton.image = feelingSadButHype
    inLoveButton.fitImage = true
    inLoveButton.locate(4*windowWidth/8, 350)

   
    inLoveButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000";
        this.text = "In Love!";
        this.image = ""

        }
   
    inLoveButton.onOutside = function () {
        this.color = "#e6fadc";
        this.stroke = "#e6fadc";
        this.image = feelingInLove
        this.text = " ";
        this.textColor = "#000000";
        }
   
    inLoveButton.onPress = function () {
        openSpotify(chooseLove());
    }


    inLoveButton.onRelease = function () {
        this.color = "#EEEEEE";
        this.textColor = "#000000";
    }

    /* TELL ME A STORY TAYLOR */


    storyButton = new Clickable()
    storyButton.image = tellMeAStory
    storyButton.fitImage = true
    storyButton.locate(5*windowWidth/8, 350)

   
    storyButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000";
        this.text = "Tell me a Story!";
        this.image = ""

        }
   
    storyButton.onOutside = function () {
        this.color = "#e6fadc";
        this.stroke = "#e6fadc";
        this.image = tellMeAStory
        this.text = " ";
        this.textColor = "#000000";
        }
   
    storyButton.onPress = function () {
        openSpotify(chooseStory());
    }


    storyButton.onRelease = function () {
        this.color = "#EEEEEE";
        this.textColor = "#000000";
    }
    /* GOAT Taylor */

    goatButton = new Clickable()
    goatButton.image = goatsOnly
    goatButton.fitImage = true
    goatButton.locate(6*windowWidth/8, 350)

   
    goatButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000";
        this.text = "Greatest Hits!";
        this.image = ""

        }
   
    goatButton.onOutside = function () {
        this.color = "#e6fadc";
        this.stroke = "#e6fadc";
        this.image = goatsOnly
        this.text = " ";
        this.textColor = "#000000";
        }
   
    goatButton.onPress = function () {
        openSpotify(chooseGoat());
    }


    goatButton.onRelease = function () {
        this.color = "#EEEEEE";
        this.textColor = "#000000";
    }
}
function draw() {
    background(230,250,220);
    hypeButton.draw()
    sadButton.draw()
    sadButHypeButton.draw()
    inLoveButton.draw()
    storyButton.draw()
    goatButton.draw()

}

// randomly select a hype song, then return it
function chooseHype () {
    var hypeSongs=["0VE4kBnHJUgtMf0dy6DRmW","1BxfuPKGuaTgP7aM0Bbdwr", "6rZVy6FIG7lSJQMFXHo12z", "7A2cNLRT0YJc1yjxHlKihs", "0yN4fNzmVnmgC0dsOoi9Wh"]
    var hypeId=random(hypeSongs)
    
    return hypeId
}

// randomly select a sad song, then return it
function chooseSad () {
    var sadSongs = ["0VE4kBnHJUgtMf0dy6DRmW","1BxfuPKGuaTgP7aM0Bbdwr", "6rZVy6FIG7lSJQMFXHo12z", "7A2cNLRT0YJc1yjxHlKihs", "0yN4fNzmVnmgC0dsOoi9Wh"]
    var sadId=random(sadSongs)
    
    return sadId
}

// randomly select a sad but hype song, then return it
function chooseSadButHype () {
    var sadButHypeSongs=["0VE4kBnHJUgtMf0dy6DRmW","1BxfuPKGuaTgP7aM0Bbdwr", "6rZVy6FIG7lSJQMFXHo12z", "7A2cNLRT0YJc1yjxHlKihs", "0yN4fNzmVnmgC0dsOoi9Wh"]
    var sadButHypeId=random(sadButHypeSongs)
    
    return sadButHypeId
}

// randomly select a love song, then return it
function chooseLove () {
    var loveSongs=["0VE4kBnHJUgtMf0dy6DRmW","1BxfuPKGuaTgP7aM0Bbdwr", "6rZVy6FIG7lSJQMFXHo12z", "7A2cNLRT0YJc1yjxHlKihs", "0yN4fNzmVnmgC0dsOoi9Wh"]
    var loveId=random(loveSongs)
    
    return loveId
}

// randomly select a storytelling song, then return it
function chooseStory () {
    var storySongs=["0VE4kBnHJUgtMf0dy6DRmW","1BxfuPKGuaTgP7aM0Bbdwr", "6rZVy6FIG7lSJQMFXHo12z", "7A2cNLRT0YJc1yjxHlKihs", "0yN4fNzmVnmgC0dsOoi9Wh"]
    var storyId=random(storySongs)
    
    return storyId
}

// randomly select a goat song, then return it
function chooseGoat () {
    var goatSongs=["0VE4kBnHJUgtMf0dy6DRmW","1BxfuPKGuaTgP7aM0Bbdwr", "6rZVy6FIG7lSJQMFXHo12z", "7A2cNLRT0YJc1yjxHlKihs", "0yN4fNzmVnmgC0dsOoi9Wh"]
    var goatId=random(goatSongs)
    
    return goatId
}

function openSpotify(songId){
    // if spotify is already open, close it
    if (spotifyOpen==1){
        closeSpotify()
    }
    
    // if spotify is not already open
    else {
        closeSpotifyButton=createButton("X");
        closeSpotifyButton.position(myCanvas.width-closeSpotifyButton.height,myCanvas.height-closeSpotifyButton.height);
        iframe=document.createElement('iframe');
        var loc = "https://open.spotify.com/embed/track/"+songId; 
        iframe.src=loc;
        iframe.allow="encrypted-media";
        iframe.width=myCanvas.width;
        iframe.height = 300
        myCanvas.resize(windowWidth, windowHeight-300)
        myContainer.appendChild(iframe);
        spotifyOpen=1;
        closeSpotifyButton.mousePressed(closeSpotify);
    }

}

function closeSpotify(){
    iframe.remove();
    closeSpotifyButton.remove();
    spotifyOpen=0;
    myCanvas.resize(windowWidth, windowHeight)
    redraw();
}