const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, rubber;
var box1, box2;
var ball;
var r1, r2, r3, r4, r5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box1 = new Box(400, 320, 70, 70);
    box2 = new Box(920,320,70,70);
    rubber= new Rubber(700,500, 50);
    r1= new Rubber(500,500, 10);
    r2= new Rubber(500,500, 10);
    r3= new Rubber(500,500, 10);
    r4= new Rubber(500,500, 10);
    r5= new Rubber(500,500, 10);
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box1.display();
    box2.display();
    rubber.display();
    r1.display();
    r2.display();
    r3.display();
    r4.display();
    r5.display();

 
}