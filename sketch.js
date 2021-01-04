var monkey,monkey_running
var banana,bananaImage,obstacle,obstacleImage
var foodGroup,obstacleGroup
var score,survivalTime=0;
var obstacleGroup,bananaGroup;


function preload(){
  monkey_running=loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png");
  
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("obstacle.png");
  
  

 
}



function setup() {
  createCanvas(400, 400);
  monkey=createSprite(50,370,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,390,800,15)
  ground.velocityX=-2;
  obstacleGroup=createGroup();
  bananaGroup=createGroup();
  
  


  
  
}


function draw() {
  
  background(255);
  monkey.collide(ground);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&&monkey.y>=351)
    {
      monkey.velocityY=-15;
    }
  //add gravity
  monkey.velocityY=monkey.velocityY+0.8
  console.log(monkey.y)
  if(obstacleGroup.isTouching(monkey))
    {
      monkey.velocityY=0;
      obstacleGroup.setVelocityXEach(0);
      bananaGroup.setVelocityXEach(0);
      ground.velocityX=0;
      obstacleGroup.setLifetimeEach(-1);
      bananaGroup.setLifetimeEach(-1);
    }
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
    spawnFood();
  spawnObstacles();
  drawSprites();
}



function spawnFood(){

  //write code here to spawn the Food
  //add image of banana
  if(frameCount%60===0){
    var banana=createSprite(500,120,40,20);
    banana.addImage(bananaImage);
  banana.scale=0.1;
    banana.y=Math.round(random(50,200));
    banana.velocityX=-3;
    banana.lifetime=140;
    bananaGroup.add(banana);
  }
  
  
}

function spawnObstacles() {
  if(frameCount%130===0){
    var obstacle=createSprite(500,360,40,10);
   // obstacle.y=Math.round(random(80,120));
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-3;
    obstacle.lifetime=140;
    obstacleGroup.add(obstacle);
  }
  //add image to the obstacle
  
  
}
