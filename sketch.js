
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(210,400,20);
	mango1 = new Mango(940,400,20);
	mango2 = new Mango(990,450,20);
	mango3 = new Mango(1100,310,20);
	mango4 = new Mango(1150,390,20);
	mango5 = new Mango(1200,430,20);
	mango6 = new Mango(1050,460,20);
  mango7 = new Mango(1000,370,20);
  tree = new Tree(1100,630);
  ground = new Ground(0,680,4000,20);
	boy = new Boy(250,600);
	launch = new Launcher(stone.body,{x:210, y:570});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#57D7F7")
  fill('blue');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launch.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    launch.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    launch.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}