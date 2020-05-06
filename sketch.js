const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var ground;
var peak1;
var string;
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;

    // var options={
    //   'isStatic':true
      
    // }
  
   // stick1= new Stick(400,100,50,200)
    // stick2=new Stick(500,100,50,150)
    // stick3=new Stick(450,100,50,150)
    // stick4= new Stick(550,100,50,200)
   // stick5 = new Stick(500,100,200,50,options)
    ground = new Ground(600,50,1200,20)
  ball=new Bob(600,100,100);
  string=new String(ground.body,ball.body)
    //peak1= new Peak(400,100,420,80,440,100)
    //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255);  
  Engine.update(engine);
  // stick1.display();
  // stick2.display();
  // stick3.display();
  // stick4.display();
  //stick5.display();
  ground.display();
  ball.display();
  string.display();
  if(keyCode===32){
    ball.body.position.x=mouseX
    ball.body.position.y=mouseY
  }
  if(keyCode===ENTER){
    ball.body.position.x=600
    ball.body.position.y=200
  }
  //fill("blue")
  // triangle(380,180,400,120,420,180)
  // triangle(530,180,550,120,570,180)
  //display();
  //peak1.display();
  //drawSprites();
}

// function mouseDragged(){
//  // if(keyCode===32){
//     Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
//   //}
// }