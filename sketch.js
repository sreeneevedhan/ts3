const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world;
var engine;

var ground;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18;
var block19,block20,block21,block22;
var block23,block24,block25;
var block26,block27;
var blockTop;

var polygon;
var sling;
var bg;
var backgroundImg;
var score=0;

function preload(){
  bg();
}
function setup() {
  createCanvas(900,600);
  stroke(255)
  
  engine = Engine.create();
    world = engine.world;

    ground=new Ground(500,400,270,30);
//layer base
  block1=new block(380,360,40,50);
  block2=new block(420,360,40,50);
  block3=new block(460,360,40,50);
  block4=new block(500,360,40,50);
  block5=new block(540,360,40,50);
  block6=new block(580,360,40,50);
  block7=new block(620,360,40,50);
  

  //layer2

  block8=new block(400,320,40,50);
  block9=new block(440,320,40,50);
  block10=new block(480,320,40,50);
  block11=new block(520,320,40,50);
  block12=new block(560,320,40,50);
  block13=new block(600,320,40,50);

  //layer3
  block14=new block(420,280,40,50);
  block15=new block(460,280,40,50);
  block16=new block(500,280,40,50);
  block17=new block(540,280,40,50);
  block18=new block(580,280,40,50);

  //layer4
  block19=new block(440,240,40,50);
  block20=new block(480,240,40,50);
  block21=new block(520,240,40,50);
  block22=new block(560,240,40,50);

  //layer5
  block23=new block(460,200,40,50);
  block24=new block(500,200,40,50);
  block25=new block(540,200,40,50);

  //layer6
  block26=new block(480,160,40,50);
  block27=new block(520,160,40,50);

  //top layer
  blockTop=new block(500,120,40,50);

polygon=new Polygon(100,200,40);

sling=new SlingShot(polygon.body,{x:150,y:250});
}

function draw() {
  Engine.update(engine);

  if (backgroundImg){
   background(backgroundImg);
  }
  //background(0);
 
  ground.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();
 block26.display();
 block27.display();
 blockTop.display();
 polygon.display();
 sling.display();

 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();
 block19.score();
 block20.score();
 block21.score();
 block22.score();
 block23.score();
 block24.score();
 block25.score();
 block26.score();
 block27.score();
 blockTop.score();
 console.log(score);
 text(score,100,100);

}


function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

sling.fly();

}
function keyPressed(){
  if(keyCode===32){
    sling.attach(polygon.body);
  }
}

async function bg(){

  var week= await fetch("http://worldclockapi.com/api/json/est/now");
  var day= await week.json();  
  var time=(day.currentDateTime.slice(11,13));

  if(time>=6 && time<=12){

    bg="sprite/night2.png"  
  
  }else{
      bg = "sprite/morning.png"
  }
  
  backgroundImg=loadImage(bg);
  
//console.log(time);
  
  }