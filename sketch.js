var planetimg
var playButtonimg
var instructionButtonimg
var playButton
var instructionsButton
var instructionObj
var instructionPgBgimg
var gameState = 0;
var instructionScreen;
var baby
var hero,heroimg
var alien1
var alien2
var alien3
var background1
var villain,bullet1,bullet2,bullet3,bullet4,bullet5;
var level;
function preload() {
    planetimg = loadImage("images/planet.jpg")
    playButtonimg = loadImage("images/playButton.gif")
    instructionButtonimg = loadImage("images/InstructionsButton-removebg-preview.png")
    instructionPgBgimg = loadImage("images/ImgPlanet.jpg")
    baby = loadImage("images/Level1/baby.png")
   // heroimg = loadImage("images/Level1/hero.jpg")
    alien1 = loadImage("images/Level1/level1 alien1.png")
    alien2 = loadImage("images/Level1/level1 alien2.png")
    alien3 = loadImage("images/Level1/level1 alien3.png")
    background1 = loadImage("images/Level1/level1bg.jpg")
}
function setup() {
    createCanvas(displayWidth, displayHeight)

    playButton = createSprite(509, 744, 50, 50)
    playButton.addImage(playButtonimg)
    playButton.visible = false;
    instructionButton = createSprite(1801, 750, 25, 25)
    instructionButton.addImage(instructionButtonimg)
    instructionButton.scale = 0.5
    instructionButton.visible = false;

    instructionScreen = createSprite(displayWidth / 2, displayHeight / 2);
    instructionScreen.addImage(instructionPgBgimg);
    instructionScreen.scale = 3
    instructionScreen.visible = false;
    //object creations
    instructionObj = new Instruction();
    level1 = new Level1();
}
function draw() {


    if (gameState === 0) {
        background(planetimg)
        playButton.visible = true;
        instructionButton.visible = true;
        if (mousePressedOver(instructionButton)) {
            gameState = 1;

        }
        if (mousePressedOver(playButton)) {
            gameState = 2;
        }
        console.log(gameState);
    }
    if (gameState === 1) {
        instructionScreen.visible = true;
        instructionObj.display()
        playButton.visible = false;
        instructionButton.visible = false;
    }
    if (gameState === 2) {
        playButton.visible = false;
        instructionButton.visible = false;
       
        level1.display();
    }

    drawSprites();
}