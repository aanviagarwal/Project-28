const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(800, 175, 300, 20);
	bobDiameter = 40;
	bobPositionX = width / 2;
	bobPositionY = height / 4 + 500;
	bob1 = new Bob(bobPositionX-bobDiameter*2, bobPositionY, bobDiameter);
	bob2 = new Bob(bobPositionX-bobDiameter, bobPositionY, bobDiameter);
	bob3 = new Bob(bobPositionX, bobPositionY, bobDiameter);
	bob4 = new Bob(bobPositionX+bobDiameter, bobPositionY, bobDiameter);
	bob5 = new Bob(bobPositionX+bobDiameter*2, bobPositionY, bobDiameter);

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*1, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, bobDiameter*1, 0);
	rope5 = new Rope(bob5.body, roof.body, bobDiameter*2, 0);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(255);
	
	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	drawSprites();

}



