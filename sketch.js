
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var form;
var game;
var play;
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	form = new Form();
	game = new Game();
	


	//Create the Bodies Here

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // background(0);


  form.display();
  
  

 

 
}



