var spotifyOpen=0
var iframe
var myCanvas
let songId
var selection

function preload(){
    feelingHype = loadImage('images/star-eyes.png')
    feelingSad = loadImage('images/broken-heart.png')
}

// randomly select a happy song, then return it
function chooseHappy () {
    var happySongs=["0VE4kBnHJUgtMf0dy6DRmW","1BxfuPKGuaTgP7aM0Bbdwr", "6rZVy6FIG7lSJQMFXHo12z", "7A2cNLRT0YJc1yjxHlKihs", "0yN4fNzmVnmgC0dsOoi9Wh"]
    var happyId=random(happySongs)
    
    return happyId
}


function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight-300);
    myCanvas.parent('myContainer')

    //Create, style and resize clickables.
    hypeButton = new Clickable()
    hypeButton.image = feelingHype
    hypeButton.locate(20, 20)

    //This function is ran when the clickable is hovered but not pressed.
    hypeButton.onHover = function () {
        this.color = "#AAAAFF"
        //this.image = " "
        this.textColor = "#000000";
        this.text = "Hype!";
        }
    //This function is ran when the clickable is NOT hovered.
    hypeButton.onOutside = function () {
        this.color = "#EEEEEE";
        this.image - feelingHype
        this.text = " ";
        this.textColor = "#000000";
        }
    //This function is ran when the clickable is pressed.
    hypeButton.onPress = function () {
        openSpotify(chooseHappy());
    }

    //This funcion is ran when the cursor was pressed and then
    //rleased inside the clickable. If it was pressed inside and
    //then released outside this won't work.
    hypeButton.onRelease = function () {
        this.color = "#EEEEEE";
        this.text = "normal ";
        this.textColor = "#000000";
    }
}
function draw() {
    background(230,250,220);
    hypeButton.draw();
}

function openSpotify(songId){
    // if already open, close it
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
        iframe.height=myCanvas.height;
        //iframe.position
        
        myContainer.appendChild(iframe);
        spotifyOpen=1;
        closeSpotifyButton.mousePressed(closeSpotify);
    }
    if (spotifyOpen==1) {
        //closeSpotify()
    }

}

function closeSpotify(){
    iframe.remove();
    closeSpotifyButton.remove();
    spotifyOpen=0;
    redraw();
}


//function draw() {
//noLoop();
//background(230,250,220);

//}
// //original
// //openSpotifyButton=createButton('Listen on Spotify');
// //openSpotifyButton.position(width/4,height/2);
// //openSpotifyButton.mousePressed(openSpotify);
// //feelingHype.position(19, 19);
// //image(feelingHype, 19, 19, 50,50)
// //feelingHype.mousePressed(changeBG);

// //hype
// //feelingHype=createButton('Hype');
// //feelingHype.position(width/7,height/2);
// image(feelingHype, 19, 19, 50, 50)
// feelingHype.mousePressed(openSpotify(chooseHappy()))

// //sad
// //feelingSad=createButton('Sad');
// //feelingSad.position(2*width/7,height/2);
// image(feelingSad, 40, 40, 50, 50)
// feelingSad.mousePressed(openSpotify(chooseHappy()))

// //feelingSad.mousePressed(openSpotify);

// //sad but hype
// feelingSadButHype = createButton('Sad but Hype');
// feelingSadButHype.position(3 * width / 7, height / 2);
// feelingSadButHype.mousePressed(openSpotify);

// //in love
// feelingInLove = createButton('In Love');
// feelingInLove.position(4 * width / 7, height / 2);
// feelingInLove.mousePressed(openSpotify);

// //storytelling
// storytellingTS = createButton('Storytelling');
// storytellingTS.position(5 * width / 7, height / 2);
// storytellingTS.mousePressed(openSpotify);

// //S-tier
// goatTS = createButton('GOAT');
// goatTS.position(6 * width / 7, height / 2);
// goatTS.mousePressed(openSpotify);

//}
