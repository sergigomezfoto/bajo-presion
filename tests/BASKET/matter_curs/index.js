let Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  Preloader = Matter.Preloader,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Events = Matter.Events;
let engine;
let render;
let runner;
function init() {
  // create an engine
  engine = Engine.create();

  // create a renderer
  render = Render.create({
    element: document.getElementById("areaToRender"),
    engine: engine,
    options: {
      width: 1024,
      height: 600,
      pixelRatio: 1,
      background: "#fafafa",
      wireframes: false, // <-- important
    },
  });

  StartSlingshot();

  // run the renderer
  Render.run(render);
  // create runner
  runner = Runner.create();
  // run the engine
  Runner.run(runner, engine);
}

let lastClear = "(not given)";
function clearWorld(exampleName) {
  if (lastClear != exampleName) {
    lastClear = exampleName;
    Matter.Composite.clear(engine.world, false);
  }
}

function StartSlingshot() {
  clearWorld("Slingshot");
  // add bodies
  let ground = Bodies.rectangle(395, 600, 815, 60, { isStatic: true });
  
  let ballOptions = {
    density: 0.004,
    render: {
        sprite: {
            texture: 'img/basket_ball.png'
        },
        layer: 1
    }
   
  };

  // La imagen se ha cargado correctamente
  let ball = Bodies.circle(170, 450, 20, ballOptions);

  let anchor = { x: 170, y: 450 };
  let elastic = Constraint.create({
    pointA: anchor,
    bodyB: ball,
    stiffness: 0.05,
    render: { strokeStyle: "gray", lineWidth: 2 },
  });
  let ground2 = Bodies.rectangle(610, 250, 200, 20, { isStatic: true });

  let pyramid = Composites.pyramid(550, 0, 5, 10, 0, 0, function (x, y) {
    return Bodies.rectangle(x, y, 25, 40);
  });
  // add mouse control
  let mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
  Events.on(engine, "afterUpdate", function () {
    if (mouseConstraint.mouse.button === -1 && (ball.position.x > 190 || ball.position.y < 430)) {
      ball = Bodies.circle(170, 450, 20, ballOptions);
      Composite.add(engine.world, ball);
      elastic.bodyB = ball;
    }
  });
  Composite.add(engine.world, [ground, ground2, pyramid, ball, elastic]);
  Composite.add(engine.world, mouseConstraint);
  // keep the mouse in sync with rendering
  render.mouse = mouse;
}
