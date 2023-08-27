const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
let poles = [];
let poleParts = 8;
let poleHeight = 50; // Height of each pole part

let ball;
//engine and world lets
let engine;
let world;
let mConstraint;
let slingShot;

let bBallImg;


function preload() {
    bBallImg = loadImage('./basket_ball.png');
  // put preload code here
}

function setup(params) {
  const canvasDiv = createDiv();
  const canvas = createCanvas(800, 600);
  canvas.parent(canvasDiv);

  //engine and world
  engine = Engine.create();
 // engine.world.gravity.y = 0.4;
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);


 // Create pole parts
for (let i = 0; i < poleParts; i++) {
    poles[i] = new Box(750, height - (i * poleHeight + poleHeight / 2) - 10, 15, poleHeight);
}

  ball = new Circle(150, 300, 16);

  slingShot = new SlingShot(150, 300, ball.body);

  const mouse = Mouse.create(canvasDiv.elt);
  const options = {
    mouse: mouse,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}
function keyPressed() {
    if (key == ' ') {
        World.remove(world,ball.body);
        ball = new Circle(150, 300, 16);
        slingShot.attach(ball.body);
    }
}
function mouseReleased() {
    setTimeout(() => {
        slingShot.fly();
    }, 100);
}

function draw(params) {
  background(0);
  Engine.update(engine);
  ground.show();
  for (let pole of poles) {
    pole.show();
  }
  slingShot.show();
  ball.show();

}
