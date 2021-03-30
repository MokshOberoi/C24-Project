const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld ;
var engine, world;
var hammer , plane , iron , stone , rubber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(300,height,1200,20);

    


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();

    
 
}