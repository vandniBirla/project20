var bgImg;
var tom,jerry;
var catImg1,mouseImg1,catImg2,mouseImg2,catImg3,mouseImg3;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg3=loadAnimation("images/mouse4.png");
    catImg3=loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    jerry=createSprite(150,650,500,300);
    jerry.addAnimation("mouseRunning",mouseImg1);
    jerry.scale=0.15
    tom=createSprite(700,650,600,100);
    tom.addAnimation("catRunning",catImg1);
    tom.scale=0.15;

}

function draw() {

    background(bgImg);
    
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.x=300;
        tom.addAnimation("catHappy",catImg3);
        tom.changeAnimation("catHappy");
        jerry.addAnimation("mouseHappy",mouseImg3);
        jerry.changeAnimation("mouseHappy");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode=== RIGHT_ARROW){
        jerry.addAnimation("mouseTeasing",mouseImg2);
        jerry.changeAnimation("mouseTeasing");

        tom.velocityX=-5;
        tom.addAnimation("catRunning",catImg2);
        tom.changeAnimation("catRunning");
        tom.scale=0.25;
    }
    if(keyCode=== LEFT_ARROW){
        jerry.addAnimation("mouseTeasing",mouseImg2);
        jerry.changeAnimation("mouseTeasing");

        tom.velocityX=-5;
        tom.addAnimation("catRunning",catImg2);
        tom.changeAnimation("catRunning");
        tom.scale=0.25;
    }

}


