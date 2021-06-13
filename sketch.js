const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    
    rubber = new Rubber(600,450,70);
    stone = new Stone(450,320,70,70);
    iron = new Iron(750,420);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    stone.display();
    iron.display();
}