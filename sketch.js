const e = Matter.Engine;
const world = Matter.World;
const b = Matter.Bodies;

var en, wo;

var bgImg;

function preload() {
  //preload the images here
  bgImg = loadImage("images/GamingBackground.png");
}

function setup() {
  en = e.create();
  wo = en.world;
  createCanvas(3000, 800);
  gr = new Ground(600, 700, 900, 20);
  hr = new Hero(250, 400);
  cnstrnt = new Constraint(hr.body, {x:250, y:100});
  monster = new Monster();
  //Level1 (6 boxes)
  a1 = new Boxes(475, 465 + 100);
  a2 = new Boxes(525, 465 + 100);
  a3 = new Boxes(575, 465 + 100);
  a4 = new Boxes(625, 465 + 100);
  a5 = new Boxes(675, 465 + 100);
  a6 = new Boxes(725, 465 + 100);

  b1 = new Boxes(475, 415 + 100);
  b2 = new Boxes(525, 415 + 100);
  b3 = new Boxes(575, 415 + 100);
  b4 = new Boxes(625, 415 + 100);
  b5 = new Boxes(675, 415 + 100);
  b6 = new Boxes(725, 415 + 100);

  c1 = new Boxes(475, 365 + 100);
  c2 = new Boxes(525, 365 + 100);
  c3 = new Boxes(575, 365 + 100);
  c4 = new Boxes(625, 365 + 100);
  c5 = new Boxes(675, 365 + 100);
  c6 = new Boxes(725, 365 + 100);

  d1 = new Boxes(475, 315 + 100);
  d2 = new Boxes(525, 315 + 100);
  d3 = new Boxes(575, 315 + 100);
  d4 = new Boxes(625, 315 + 100);
  d5 = new Boxes(675, 315 + 100);
  d6 = new Boxes(725, 315 + 100);

  e1 = new Boxes(475, 265 + 100);
  e2 = new Boxes(525, 265 + 100);
  e3 = new Boxes(575, 265 + 100);
  e4 = new Boxes(625, 265 + 100);
  e5 = new Boxes(675, 265 + 100);
  e6 = new Boxes(725, 265 + 100);

  f1 = new Boxes(475, 215 + 100);
  f2 = new Boxes(525, 215 + 100);
  f3 = new Boxes(575, 215 + 100);
  f4 = new Boxes(625, 215 + 100);
  f5 = new Boxes(675, 215 + 100);
  f6 = new Boxes(725, 215 + 100);
}

function draw() {
  background(bgImg);
  e.update(en);

  gr.display();
  hr.display();

  //level1.display();
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  e1.display();
  e2.display();
  e3.display();
  e4.display();
  e5.display();
  e6.display();
  f1.display();
  f2.display();
  f3.display();
  f4.display();
  f5.display();
  f6.display();
  
  monster.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hr.body, {x:mouseX, y:mouseY});
}

function keyPressed() {
  if(keyCode===32) {
    window.location.reload();
  }
}

