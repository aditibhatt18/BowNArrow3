var rb1, rb2, rb3,rb4, bb1,bb2, bb3, bb4, gb1, gb2, gb3, gb4, pb1,pb2, pb3, pb4; 
var ground, groundImg; 
var bow, bowImg, arrow, arrowImg; 
var selector;

function preload(){
  groundImg = loadImage("background0.png"); 
  rb1 = loadImage("red_balloon0.png");
  bb1 = loadImage("blue_balloon0.png");
  gb1 = loadImage("green_balloon0.png");
  pb1 = loadImage("pink_balloon0.png");
  arrowImg = loadImage("arrow0.png"); 
  bowImg = loadImage("bow0.png"); 
}

function setup() {
  createCanvas(600, 600);
  
  ground = createSprite(200,200); 
  ground.addImage(groundImg);
  ground.scale = 3; 
  ground.velocityX = -2; 
  
  bow = createSprite(460,100,10,10); 
  bow.addImage(bowImg); 
  
}

function draw() {
  background(0); 
  
  if(ground.x<0){
    ground.x = ground.width/2; 
  }
  
  bow.y = mouseY;
  
  if(keyDown("space")){
    var temp_Arrow = createArrow(); 
    temp_Arrow.addImage(arrowImg); 
    temp_Arrow.y = mouseY;
  }
  
  selector = Math.round(random(1,4)); 
  if(World.frameCount % 80 === 0){
    if(selector==1){
      redBalloon(); 
    }
    else if (selector==2){
      greenBalloon();
    }
    else if (selector==3){
      blueBalloon(); 
    }
    else {
      pinkBalloon(); 
    }
  }
    
  //add code here
  drawSprites(); 
}

function redBalloon(){
  rb3 = Math.round(random (1,600)); 
  rb4 = Math.round(random (1,400)); 
  rb2 = createSprite(rb4, rb3,10,10); 
  rb2.addImage(rb1); 
  rb2.scale = 0.1; 
  //rb2.lifetime = 100; 
}

function blueBalloon(){
  bb3 = Math.round(random (1,600)); 
  bb4 = Math.round(random (1,400)); 
  bb2 = createSprite(bb4, bb3,10,10); 
  bb2.addImage(bb1); 
  bb2.scale = 0.1;
  //bb2.lifetime = 100; 
}

function greenBalloon(){
  gb3 = Math.round(random (1,600)); 
  gb4 = Math.round(random (1,400)); 
  gb2 = createSprite(gb4, gb3,10,10); 
  gb2.addImage(gb1); 
  gb2.scale = 0.1;
  //gb2.lifetime = 100; 
}

function pinkBalloon(){
  pb3 = Math.round(random (1,600)); 
  pb4 = Math.round(random (1,400)); 
  pb2 = createSprite(pb4, pb3,10,10); 
  pb2.addImage(pb1); 
  pb2.scale = 0.1;
  //pb2.lifetime = 100; 
}

function createArrow(){
  arrow = createSprite(360,100,5,10); 
  arrow.velocityX = -6; 
  arrow.scale = 0.3; 
  return arrow; 
}