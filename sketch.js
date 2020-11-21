const Engine= Matter.Engine;
const World= Matter.World;
const Body= Matter.Body;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var polygon,engine,world;

function preload(){

}

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

engine = Engine.create();
world = engine.world;

stage1= new Ground(400, 380, 230, 15);
stage2= new Ground(650, 280, 230, 15);
box1=new Boxes(310,357.5,30,30);
box2=new Boxes(340,357.5,30,30);
box3=new Boxes(370,357.5,30,30);
box4=new Boxes(400,357.5,30,30);
box5=new Boxes(430,357.5,30,30);
box6=new Boxes(460,357.5,30,30);
box7=new Boxes(490,357.5,30,30);

l2box1=new Boxes(340,327.5,30,30);
l2box2=new Boxes(370,327.5,30,30);
l2box3=new Boxes(400,327.5,30,30);
l2box4=new Boxes(430,327.5,30,30);
l2box5=new Boxes(460,327.5,30,30);

l3box1=new Boxes(370,297.5,30,30);
l3box2=new Boxes(400,297.5,30,30);
l3box3=new Boxes(430,297.5,30,30);

l4box1=new Boxes(400,267.5,30,30);

l1block1=new Boxes(560,257.5,30,30);
l1block2=new Boxes(590,257.5,30,30);
l1block3=new Boxes(620,257.5,30,30);
l1block4=new Boxes(650,257.5,30,30);
l1block5=new Boxes(680,257.5,30,30);
l1block6=new Boxes(710,257.5,30,30);
l1block7=new Boxes(740,257.5,30,30);

l2block1=new Boxes(590,227.5,30,30);
l2block2=new Boxes(620,227.5,30,30);
l2block3=new Boxes(650,227.5,30,30);
l2block4=new Boxes(680,227.5,30,30);
l2block5=new Boxes(710,227.5,30,30);

l3block1=new Boxes(620,197.5,30,30);
l3block2=new Boxes(650,197.5,30,30);
l3block3=new Boxes(680,197.5,30,30);

l4block1=new Boxes(650,167.5,30,30);

//bbox=new BlueBox(650,137.5, 30,30);

polygon=new Polygon(100,300,25);

sling= new Slingshot(polygon.body,{x: 100, y:200});

Engine.run(engine);

}

function draw() {

  Engine.update(engine);
 
  rectMode(CENTER);
 
  drawSprites();
 
  background(0);//255,255,255
 
  stage1.display();  
  stage2.display();  
 
  box1.display();  
  box2.display();  
  box3.display();  
  box4.display();  
  box5.display();  
  box6.display();  
  box7.display();  
 
  l2box1.display();  
  l2box2.display();  
  l2box3.display();  
  l2box4.display();  
  l2box5.display();  
 
  l3box1.display();  
  l3box2.display();  
  l3box3.display();  
  
  l4box1.display();  
  
  l1block1.display();  
  l1block2.display();  
  l1block3.display();  
  l1block4.display();  
  l1block5.display();  
  l1block6.display();  
  l1block7.display();  
 
  l2block1.display();  
  l2block2.display();  
  l2block3.display();  
  l2block4.display();  
  l2block5.display();  
 
  l3block1.display();  
  l3block2.display();  
  l3block3.display();  
  
  l4block1.display();  
  
  sling.display();  

  polygon.display();  
  
}

  function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
  }

  function mouseReleased(){
    sling.fly();
  }