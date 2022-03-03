/* Used the following tutorial to figure out the iFrame! https://editor.p5js.org/llight/sketches/IgAEIvmr5P */

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

    /* HYPE TAYLOR */

    hypeButton = new Clickable()
    hypeButton.image = feelingHype
    hypeButton.fitImage = true
    hypeButton.locate(windowWidth/8, 350)

   
    hypeButton.onHover = function () {
        this.stroke = "#AAAAFF"
        this.textColor = "#000000"
        this.text = "Hype!"
        this.image = ""
        }
   
    hypeButton.onOutside = function () {
        this.color = color
        this.stroke = color
        this.image = feelingHype
        this.text = " "
        this.textColor = "#000000"
        }
   
    hypeButton.onPress = function () {
        this.color = "#EEEEEE"
        openSpotify(chooseHype())
    }


    hypeButton.onRelease = function () {
        this.color = color
        this.textColor = "#000000"
    }
    /* SAD TAYLOR */


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


    /* SAD BUT HYPE TAYLOR */


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

    /* IN LOVE TAYLOR */


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

    /* TELL ME A STORY TAYLOR */


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
    /* GOAT Taylor */

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
function draw() {
    background(color)
    hypeButton.draw()
    sadButton.draw()
    sadButHypeButton.draw()
    inLoveButton.draw()
    storyButton.draw()
    goatButton.draw()
    textFont("serif", 50)
    textAlign(CENTER)
    text("Which Taylor Are You Today?", windowWidth/2, 200)
    textFont("Helvetica", 20)
    text("Select your mood below for Taylor Swift song recomendation. Press x to close the window", windowWidth/2, 250)
}

// close the window when x is pressed
function keyTyped() {
    if (key == 'x') {
        closeSpotify()
    }
}
function keyPressed() {
    colors = ["1ca5cd","#99743d", "#973269", "#97243f", "#cdc6a9", "#8b8b8b", "#f2acc4", "#7f7b7b", "#cf8c63", color]
    if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW || keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
        color = random(colors)
    }
}

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

function openSpotify(songId){
    // if spotify is already open, close it
    if (spotifyOpen==1){
        closeSpotify()
    }
    
    // if spotify is not already open
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

function closeSpotify(){
    iframe.remove()
    spotifyOpen=0
    myCanvas.resize(windowWidth, windowHeight)
    redraw()
}