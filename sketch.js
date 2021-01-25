
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var surface
var pino1,pino2,pino,pino3,pino4,pino5,pino6,pino7
var score = 0;
var pro;
var count = 0;
var gameState = "play"

var plinko = [];
var particles = [];


function setup() {
	createCanvas(480, 800);
  engine = Engine.create();
	world = engine.world;

	surface = new ground (200,790,600,10)
  pino = new divisions (0,735,10,700)
	pino1 = new divisions (72,735,10,700)                     
	pino2 = new divisions (146,735,10,700)
	pino3 = new divisions (219,735,10,700)
	pino4 = new divisions (288,735,10,700)
	pino5 = new divisions (356,735,10,700)
	pino6 = new divisions (420,735,10,700)
  pino7 = new divisions (475,735,10,700)

 
  
for(var j = 0; j <=width; j=j+50){
 plinko.push(new Plinko(j,75,15));
}

for(var j = 40; j <=width-10; j=j+50){
  plinko.push(new Plinko(j,165,15));
 }
 
 for(var j = 0; j <=width; j=j+50){
  plinko.push(new Plinko(j,255,15));
 }

 for(var j = 40; j <=width-10; j=j+50){
  plinko.push(new Plinko(j,345,15));
 }
	Engine.run(engine);
                                                                        
}





function draw() {
  background(0);
  text(mouseX + "," + mouseY, mouseX, mouseY)


  
  surface.display();
  pino.display();
  pino1.display();
  pino2.display();
  pino3.display();
  pino4.display();
  pino5.display();
  pino6.display();
  pino7.display();
  if(pro!=null){

    pro.display();
    if(pro.body.position.y>760)
    {
       if(pro.body.position.x<300)
       {
           score=score+100
           pro=null;
       }
    }
  }
  if (count>5) gameState = "end";
  if (gameState === "end"){
    noStroke();
    textSize(50)
    fill("white")
    text("Game Over",125, 146)
  }
  noStroke();
  textSize(30)
  fill("white")
  text("300",295, 420)
  text("500",365, 420)
  text("200",425, 420)
  text("100",225, 420)
  text("300",155, 420)
  text("400",85, 420)
  text("600",15, 420)
  text("Score  " + score,300, 50)
  
 
  for (var j =0; j< plinko.length; j++){
    plinko[j].display();
  }
  for (var j =40; j< plinko.length; j++){
    plinko[j].display();
  }
  for (var j =0; j< plinko.length; j++){
    plinko[j].display();
  }
  for (var j =40; j< plinko.length; j++){
    plinko[j].display();
  }
  for (var j = 0; j < particles.length; j++){
  particles[j].display();
  }
  drawSprites();
 
}



function keyPressed(){
  if(keyCode === 32){
    if(gameState ==="play")
    {
       pro = new Particle(300,0,10,10)
       count = count + 1
    }
  }
}