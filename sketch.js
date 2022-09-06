const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var angle = 15;

function preload() {
  backgroundImg = loadImage("background.gif");
}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  cañon = new Cañon(180,110,130,130,angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  tower = new Tower(150,350,160,310);

  //Usa una nueva palabra clave para crear un objeto torre.(desafío 4)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//muestra la torre(desafío 4)
 tower.display();
 cañon.display();
}

