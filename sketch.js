//add all physic engine
const Engine = Matter.Engine;
//connect real world objects to artificial world
const World = Matter.World;
//add behaviours to the objects
const Bodies = Matter.Bodies;

var engine , world;
var ball;

function setup(){
  createCanvas(600,600);

  // connect Engine to setup
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic : true
  }

  ball = Bodies.circle(300,300,30,options);
  World.add(world,ball);

}

function draw(){
  background("black");

  //update the engine
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,50);

}