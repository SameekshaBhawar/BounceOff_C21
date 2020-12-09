var a, b

function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b= createSprite(200, 200, 60, 60);
a.shapeColor="purple"
b.shapeColor="purple"
a.velocityX=-5
b.velocityX=5
}

function draw() {
  background(255,255,255);  
  drawSprites();
 
  console.log(a.x-b.x)
bounceOff(a,b)
}
