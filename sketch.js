
var monkey , monkey_running
var banana ,bananaImage, stone, stoneImage;
var FoodGroup, StoneGroup;
var score = 0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(600,600);
  
  FoodGroup = new Group();
  StoneGroup = new Group();
  
  monkey = createSprite(50,500,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(300,550,1200,20);
  ground.velocityX = -5;
  
}


function draw() 
{
 background("lightgreen");
  
  if(keyDown("space"))
  {
    monkey.velocityY = -8;
  }
  monkey.velocityY = monkey.velocityY+ 0.8;
  
  if(ground.x === 0)
  {
   ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  score = Math.round(frameCount/6);
  
  spawnBananas();
  spawnStones();
  
 drawSprites(); 
 
 noFill();
 stroke("Hotpink");
 textSize(20);
 text("Survival Time: "+score,220,50); 
}

function spawnBananas() 
{
  //write code here to spawn the clouds
   if (frameCount % 80 === 0)
   {
      banana = createSprite(600,100,40,10);
      banana.y = Math.round(random(120,200));
      banana.addImage(bananaImage);
      banana.scale = 0.1;
      banana.velocityX = -3;

       //assign lifetime to the variable
      banana.lifetime = 200;
     
      FoodGroup.add(banana);
    }
}

function spawnStones() 
{
  //write code here to spawn the clouds
   if (frameCount % 300 === 0)
   {
      stone = createSprite(600,500,40,10);
      stone.addImage(stoneImage);
      stone.scale = 0.2;
      stone.velocityX = -3;

       //assign lifetime to the variable
      stone.lifetime = 200;
     
      StoneGroup.add(stone);
    }
}




