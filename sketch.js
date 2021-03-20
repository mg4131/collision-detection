var fixedRect, movingRect, wasdRect, arrowRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  wasdRect = createSprite(400, 400, 30, 80);
  wasdRect.shapeColor = "green";
  arrowRect = createSprite(600, 200, 80, 50);
  arrowRect.shapeColor = "green";
}
function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (collision_detection(movingRect, fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  if (collision_detection(movingRect, wasdRect)) {
    movingRect.shapeColor = "red";
    wasdRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    wasdRect.shapeColor = "green";
  }
  if (collision_detection(movingRect, arrowRect)) {
    movingRect.shapeColor = "red";
    arrowRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    arrowRect.shapeColor = "green";
  }
  drawSprites();
}

