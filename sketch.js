var iss, issImg;
var bath, bath_ing;
var eat, eat_ing;
var gym, working_out;
var gym2;
var move, move_ing;
var sleep;
var brush, brush_ing;
var astronaut;
var sprite;
function preload(){
  issImg = loadImage("iss.png");
  bath_ing = loadAnimation("bath1.png", "bath2.png");
  eat_ing = loadAnimation("eat1.png", "eat2.png");
  working_out = loadAnimation("gym1.png", "gym2.png");
  gym_2 = loadAnimation("gym11.png", "gym12.png");
  move_ing = loadAnimation("move.png", "move1.png");
  sleep = loadAnimation("sleep.png")
  brush_ing = loadAnimation("brush.png");

}


function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200);
  iss.addImage("ISS_bground", issImg);
  iss.scale = 0.162;
  

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  
  drawSprites();
  
  fill("white");
  text("Instructions:",10, 10);
  text("Up Arrow = Brushing",10, 13);
  text("Down Arrow = Working out",10, 16);
  text("Left Arrow = Eating",10, 19);
  text("Right Arrow = Bathing",10, 22);
  text("M Key = Moving",10, 25);
  text("(Extra) G Key = Gravity;",10, 28);

  
}
