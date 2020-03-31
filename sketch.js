const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1,log;


function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ball1 = new Ball(300,250,30);
  log = new Log(300,100,400,50);
  chain = new Chain(ball1.body,log.body);
}

function draw() {
  background(255,255,255);  
  
  Engine.update(engine);

  ball1.display();
  log.display();
}