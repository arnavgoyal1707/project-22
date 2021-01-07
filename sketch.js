var bullet, wall;
var bulletRightEdge
var speed;
var weight,thickness;
function setup() {
createCanvas(1600,400);
thickness=random(22,83);
weight=random(30,52);
speed=random(223,321);
wall=createSprite(1100,200,thickness,height/2);

bullet=createSprite(50,200,60,2);


bullet.velocityX=speed;
}

function draw() {
  background(0);
 if(hasCollided(bullet,wall)){
 bullet.velocityX=0;
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if (damage>10){
 wall.shapeColor='red';
}

if (damage<10){
 wall.shapeColor='green';

}
   
 }
 drawSprites();
}
function hasCollided(object1,object2)
 {
   if(object1.x+object1.width/2>=object2.x-object2.width/2)
 {
   return true;
  }
  else{
   return false;
    }
  }