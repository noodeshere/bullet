var wall
var car
var damage
  var speed,weight
  
  function setup() {
  createCanvas(1600,400);
  thicknessofwall=random(22,83)
  car=createSprite(50, 200, 20, 20);
 wall= createSprite(1500, 200, thicknessofwall, 200);
  ;
speed=random(223,321)
weight=random(30,52)

}

function draw() {
  background(0,0,0);  
  drawSprites();
//if(keyDown(UP_ARROW)){
  car.velocityX=speed;//}

  if(car.isTouching(wall)){
    car.velocityX=0
    damage =(0.5*weight*speed*speed/thicknessofwall*thicknessofwall*thicknessofwall)}
if(damage<=10){
wall.shapeColor=color(0,255,0)}

if(damage>=10){
  wall.shapeColor=color(255,0,0)}



}