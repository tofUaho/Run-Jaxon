var jaxon, jaxon_running;
var path,  pathImage;
var boundary1, boundary2


function preload() {
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png", "Runner-2.png");
  
  pathImage = loadImage("path.png");
}

function setup() {
  createCanvas(500, 500);
 
  //create sprites here
  
 path = createSprite(100, 200);
 path.addImage("path", pathImage);
 
 path.scale = 0.7;
 //path.y = path.height/2;
 
 jaxon = createSprite(200, 230);
 jaxon.addAnimation("jaxon", jaxon_running);
 jaxon.scale = 0.03;

 boundary1 = createSprite(5, 190, 10, 250);
 
 boundary2 = createSprite(200, 190, 10, 250);

}

function draw() {
  background(360, 360);

  path.velocityY = 4;

  if (path.y > 340) {
    path.y = height/2;
  }

  jaxon.x = mouseX

  if (jaxon.isTouching(boundary1)){
    jaxon.bounceOff(boundary1);
  }

  if (jaxon.isTouching(boundary2)) {
    jaxon.bounceOff(boundary2);
  }

  boundary1.visible = false;
  boundary2.visible = false;

  createEdgeSprites ();
  drawSprites ();
}
