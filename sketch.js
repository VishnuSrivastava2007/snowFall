const Engine = Matter.Engine;
const World= Matter.World ;
const Bodies = Matter.Bodies;

var backgroundIMG,background2;
var steve,steveImage;
var snow= [];
var engine,world;
var bg;


function preload(){

steveImage=loadImage("unnamed (3).gif");
bg=loadImage("backgroundD.gif");


}

function setup() {
  var canvas = createCanvas(1000,600);
  
  engine = Engine.create();
  world = engine.world ; 

  steve = createSprite(600, 330, 50, 50);
  steve.scale=0.5

  steve.addImage(steveImage);

 
  
    }
        
        
function draw() {
  Engine.update(engine);
  background(bg)  

  if (frameCount %10 === 0) {

    snow.push(new Snowfall(random (10 ,800),10,10));

  }
for (var o = 0 ; o < snow.length; o++) {
    snow[o].display();
  }

  
drawSprites();

}
