  var path;
  var runner,runner_run;
  var right_invisible_boundary;
  
function preload(){
  pathImg=loadImage("path.png");
  runner_run=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,800);

  path=createSprite(200,160);
  path.addImage("path",pathImg);
  path.velocityY = 6;
  path.scale = 1.5;

  runner=createSprite(200,300);
  runner.addAnimation("run",runner_run)
  runner.scale = 0.06;

}

function draw() {
  background('white');

  edges= createEdgeSprites();
  runner.collide(edges);

  runner.x = World.mouseX;

  path.velocityY=8;
  if (path.y>600){
  path.y=path.width/2
  }
  
  drawSprites();
}



