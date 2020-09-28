var fixedRect, movingRect;
var object1;
var newOg
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(300,160,60,80);
  object1.shapeColor = "green";
  object1.debug = true;
  newOg = createSprite(620,290,90,40);
  newOg.shapeColor = "green";
  newOg.debug = true;




}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,newOg)){
    movingRect.shapeColor = "red";
    newOg.shapeColor = "red";
  
}
else{
  movingRect.shapeColor = "green";
  newOg.shapeColor = "green";
}
 
  drawSprites();
}

