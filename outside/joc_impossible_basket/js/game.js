// joc de basquet impossible (code.sergigomez.com)

const ballRadius = 16;
const slingColor = "#fff";
// const transparent = "black";
const transparent = "rgba(0,0,0,0)";
const bote = 1;
const mass = 50;

const engine = Matter.Engine.create();
const render = createRender();
const mouse = Matter.Mouse.create(render.canvas);
const mouseConstraint = createMouseConstraint();

const groundLimits=createGroundLimits();
const basketComponents = createBasketComponents();
let ball = createBall(300, 400, ballRadius*2);
const sling = createSling(300, 400);

let firing = false;

Matter.Events.on(mouseConstraint, "enddrag", handleEndDrag);
Matter.Events.on(engine, "afterUpdate", handleAfterUpdate);

Matter.World.add(engine.world, [
...groundLimits,
    sling,
    ball,
    ...basketComponents,
    mouseConstraint,
]);

Matter.Runner.run(engine);
Matter.Render.run(render);

function createRender() {
  return Matter.Render.create({
    element: document.getElementById("areaToRender"),
    engine: engine,
    options: {
      gravityY: 2,
      width: 1024,
      height: 600,
      pixelRatio: 1,
      wireframes: false,
      background: "transparent"
    }
  });
}

function createMouseConstraint() {
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      render: { visible: false }
    }
  });
  render.mouse = mouse;
  return mouseConstraint;
}


function createRectangle(x, y, width, height) {
  return Matter.Bodies.rectangle(x, y, width, height, {
    collisionFilter: {group: 2, mask: 0},
    render: { fillStyle: transparent },
    isStatic: true
  });
}

function createPolygon(x, y, sides, radius) {
  return Matter.Bodies.polygon(x, y, sides, radius, {
    collisionFilter: {group: 2, mask: 0},
    isStatic: true,
    render: { fillStyle: transparent }
  });
}

function createBall(x, y, radius) {
  return Matter.Bodies.circle(x, y, radius, {

    mass,
    restitution: bote,
    render: {
      sprite: {
        texture: "img/basket_ball.png",
        xScale: 1,
        yScale: 1
      }
    }
  });
}

function createSling(x, y) {
  return Matter.Constraint.create({
    pointA: { x: x, y: y },
    bodyB: ball,
    stiffness: 0.04,
    length: 0,
    render: { strokeStyle: slingColor }
  });
}

function createGroundLimits() {
    const ground = createRectangle(512, 660, 2024, 150);
    const roof = createRectangle(512, -200, 6024, 150);
    const limit_left = createRectangle(-200, 300, 150, 1200);
    const limit_right = createRectangle(1224, 300, 150, 1200);
    return [
        ground,
        roof,
        limit_left,
        limit_right
    ];
}



function createBasketComponents() {
  const basket_left = createPolygon(846, 148, 5, 5);
  const basket_right = createPolygon(916, 148, 5, 5);
  const basket_bottom_left = createRectangle(870, 145, 15, 15);
  const basket_bottom_right = createRectangle(900, 140, 15, 15);
  const basket_table = createRectangle(930, 115, 6, 180);
  const basket_main_pole = createRectangle(995, 345, 30, 520);
  
  return [
    basket_left,
    basket_right,
    basket_bottom_left,
    basket_bottom_right,
    basket_table,
    basket_main_pole
  ];
}

function handleEndDrag(e) {
  if (e.body === ball) {
    e.body.collisionFilter.group = 2
    e.body.collisionFilter.mask = 0
    console.log(e);
    firing = true;
  }
}

function handleAfterUpdate() {
    if (firing) {
      const yRandom = Matter.Common.random(200, 400);
      const xRandom = Matter.Common.random(250, 400);
      
      const newBall = createBall(xRandom, yRandom, ballRadius * 2);
      
      setTimeout(() => {
        Matter.World.add(engine.world, newBall);
      }, 500);
      
      sling.bodyB = newBall;
      sling.pointA = { x: xRandom, y: yRandom };
      ball = newBall;
      firing = false;
    }
  }