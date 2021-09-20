  var garden,rabbit;
  var gardenImg,rabbitImg;
  var wall1;
  var wall2;
  var apple,appleImg;
  var leaf,leafImg;
  var leaf2,leaf2Img;
  var leaf3,leaf3Img;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg   = loadImage("leaf.png");
  leaf2Img  = loadImage("redImage.png");
  leaf3Img  = loadImage("orangeLeaf.png")
  }

function setup(){

  createCanvas(400,400);

  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  rabbit.velocityX=4;

  wall1=createSprite(40,250,10,300)
  wall1.visible=false;

  wall2=createSprite(350,250,10,300)
  wall2.visible=false;
  }


function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.bounceOff(wall1);
  rabbit.bounceOff(wall2);
  
  

  spawnleaves3();
  spawnleaves2();
  spawnleaves();
  spawnapples();
  drawSprites();
}

function spawnapples(){
    if(frameCount % 120 === 0) 
    {
    apple = createSprite(60,150,40,10);
    apple.velocityY = 2;
    apple.addImage(appleImg)
    apple.scale=0.05;
    apple.y = Math.round(random(10,70));
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth +1;
    apple.lifetime=100;
    }
    }

  function spawnleaves(){
    if(frameCount % 80 === 0)
    {
    leaf= createSprite(300,150,40,10);
    leaf.velocityY = 3;
    leaf.addImage(leafImg);
    leaf.scale=0.07;
    leaf.y = Math.round(random(25,65));
    leaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth +1;
    leaf.lifetime=100;
    }
    }

 function spawnleaves2(){
  if(frameCount % 160 === 0)
  {
  leaf2= createSprite(200,150,40,10);
  leaf2.velocityY = 3;
  leaf2.addImage(leaf2Img);
  leaf2.scale=0.05;
  leaf2.y = Math.round(random(75,125));
  leaf2.depth = rabbit.depth;
  rabbit.depth = rabbit.depth +1;
  leaf2.lifetime=100;
  }
  }

 function spawnleaves3(){
  if(frameCount % 200 === 0)
  {
  leaf3= createSprite(100,150,40,10);
  leaf3.velocityY = 3;
  leaf3.addImage(leaf3Img);
  leaf3.scale=0.07;
  leaf3.y = Math.round(random(100,200));
  leaf3.depth = rabbit.depth;
  rabbit.depth = rabbit.depth +1;
  leaf3.lifetime=100;
        

  }
  }
        