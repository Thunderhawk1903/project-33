var snowImg;
var Boy, Boy1;

function preload(){
snowImg = loadImage("snow2.jpg");
Boy1 = loadImage("boy.png");



}



function setup() {
  createCanvas(800,400);
  
   Boy=createSprite(400,300);
Boy.addImage(Boy1);
Boy.scale=0.3;
Edges=createEdgeSprites();
}



function draw() {
  background(snowImg); 

  drawSprites();

  if(keyIsDown(UP_ARROW)){
Boy.velocityY=-5;
  }
Boy.velocityY=Boy.velocityY+1;
Boy.collide(Edges);

}