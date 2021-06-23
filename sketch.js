var bg,bg2;
var score=0;
var alibaba,alibabaImage;
var treasureSound = new Audio('treasure.m4a');
var form,system,code,security;

function preload() {
  bg1 = loadImage("images/aladdin_cave.jpg");
  //load image for the treasure background
  bg2 = loadImage("images/treasure.jpg");
  alibabaImage = loadImage("images/alibaba.png");
}

function setup() {
    createCanvas(displayWidth,displayHeight-143);
    security = new Security();
    system = new System();
   
}

function draw() {
    background(bg1);

    clue1();
    clue2();
    clue3();

    security.display();
    
    textSize(35);
    fill("white");
    text("Score: " + score, 800, 100);
    // add code for changing the background to the treasure background
    
    if(score === 3){
      clear();
      background(bg2);  
      fill(255);
      textSize(40);
      treasureSound.play();
      text("TREASURE UNLOCKED",550, 150);
      alibaba = createSprite(1200,450);
      alibaba.addImage(alibabaImage);
      alibaba.scale = 0.4;
    }

    drawSprites();
} 