var garden,rabbit, appleimg, orangeleafimg;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  orangeleafimg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;
  createApples();
  createOrangeLeaves();
  drawSprites();
}

function createApples(){
  if (frameCount % 80 == 0){
    apple = createSprite(300,50,40,10);
    apple.x = Math.round(random(10,390));
    apple.addImage(appleimg);
    apple.scale = 0.1;
    apple.velocityY = 3;
    apple.collide(edges);
    
  }
}

function createOrangeLeaves(){
  if (frameCount % 80 == 0){
    orangeleaf = createSprite(300,50,40,10);
    orangeleaf.x = Math.round(random(10,390));
    orangeleaf.addImage(orangeleafimg);
    orangeleaf.scale = 0.1;
    orangeleaf.velocityY = 2;
    orangeleaf.collide(edges);
  }
}