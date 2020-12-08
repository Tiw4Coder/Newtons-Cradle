
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


var paper, world, engine;






function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Bob(235,380,20);
  paper2 = new Bob(295,380,20);
  paper3 = new Bob(355,380,20);
  paper4 = new Bob(415,380,20);
  
  roof = new Roof(325,100,250,15);
  
  chain = new Chain(paper.body, roof.body, -50*2,0)
  chain2 = new Chain(paper2.body, roof.body, -15*2,0)
  chain3 = new Chain(paper3.body, roof.body,15*2,0)
  chain4 = new Chain(paper4.body, roof.body,50*2,0)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
Engine.update(engine)
  paper.display();
  paper2.display();
  paper3.display();
  paper4.display();
  
  roof.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display(); 


  
 
}


function keyPressed()
{
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:-50, y:-45})
  }
}
function drawLine(){
paperBodyPosition = Constrain.bodyA.position
roofBodyAPosition = Constrain.bodyB.position
roofBodyOffset = Constrain.pointB

}