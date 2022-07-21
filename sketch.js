const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[]

var a=[29,16,01,50,8.9,"Aadhya",true]
console.log (a)
a.push("computer")
console.log(a)
a.pop()
console.log(a)
a.pop()
console.log(a)

var grade9=[["advika","tanisha","kashish"],[16,01,2008],[93348553]]
console.log(grade9)
console.log(grade9[0],[0])

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
 for(var i=0;i<balls.length;i++){
  showCannonBalls(balls[i],i)
 }


  cannon.display();
  tower.display();
 
}
function keyPressed(){
  if(keyCode == DOWN_ARROW){
   var cannonBall=new CannonBall(cannon.x,cannon.y)
   balls.push(cannonBall)
  }
}

function showCannonBalls(ball,index){
  ball.display()
  if(ball.body.position.x>=width || ball.body.position.y >=height-50){
    Matter.World.remove(world,ball.body)
    ball.splice(index,1)
  }
}



function keyReleased() {
  if (keyCode === DOWN_ARROW) {
   balls[balls.length-1].shoot()
  }
}
