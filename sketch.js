
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dustbinObj, paperObject, groundObject
var world, gameState = "onSling";


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paperObject = new paper(200, 450, 70);
	groundObject = new ground(width / 2, 670, width, 20);
	ground1 = new ground(200, 200, 30, 30);
	dustbinObj = new dustbin(1200, 650);
	rubber = new rope(paperObject.body, { x: 200, y: 200 });
	//Create a Ground



	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background(230);


	paperObject.display();
	groundObject.display();
	dustbinObj.display();
	ground1.display();
	rubber.display();






}

function keyPressed() {
	if (keyCode === 32) {

		rubber.attach(paperObject.body);
		gameState = "onSling";


	}
}
function mouseDragged() {
	if (gameState === "onSling") {
		Matter.Body.setPosition(paperObject.body, { x: mouseX, y: mouseY });
	}
}
function mouseReleased() {
	rubber.fly();
	gameState = "launched"
}





