

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,stone;
var score=0
var survivaltime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(50,350,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15;
  
 var survivaltime=0
  invisible=createSprite(300,400,700,20)
invisible.visible=false;

  foodGroup=new Group();
  obstaclesGroup=new Group();
  score=0
}


function draw() {
  background("lightblue")
     
  if(invisible.x<0) {
    invisile.x=invisible.width/2;
  }
  

   if(keyDown("space")){
     monkey.velocityY=-12; 
   }
     obstacles()
   monkey.velocityY=monkey.velocityY+0.8; 
    obstacles();
   

 
    
    if(obstaclesGroup.isTouching(monkey)){
       
        monkey.velocityY = 0;
      
       
       obstaclesGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
    }
 if(foodGroup.isTouching(monkey)) {
   foodGroup.destroyEach();
        foodGroup.setLifetimeEach(-1);
    


  }
     stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);

  stroke("black");
  textSize(20);
  fill("black");
    text("Score: "+ score, 500,50);
    if(foodGroup.isTouching(monkey)){
  text("Score: "+ score, 500,50); 
  }
  Food()

    monkey.collide(invisible); 
  
  
  
  
  
  
 drawSprites();


  
   
  
}
function obstacles(){
 if( frameCount%60===0){
  var stone = createSprite(600,390,10,40);

 
    stone.addImage(obstaceImage)
   stone.velocityX = -6             
  stone.scale=0.15
  stone.lifetime=350
   obstaclesGroup.add(stone)
}
}


function Food() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage(bananaImage);
     banana.scale=0.05;
    
    //add each banana to the group
    foodGroup.add(banana);
  }
}

