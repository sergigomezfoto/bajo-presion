let objects = document.querySelectorAll('.object');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let btnLaunch = document.getElementById('btnLaunch');
let basketBall = document.getElementById('basketBall');
let screenWidth = window.innerWidth;
let moveLeftInterval, moveRightInterval;

let moveLeft = () => {
    moveLeftInterval = setInterval(() => {
        let rightMostPoint = 0;
        let leftMostPoint = screenWidth;

        // Calculate the furthest right and left points of all objects
        for (let i = 0; i < objects.length; i++) {
            let leftValue = parseInt(window.getComputedStyle(objects[i]).getPropertyValue('left'), 10);
            let widthValue = parseInt(window.getComputedStyle(objects[i]).getPropertyValue('width'), 10);

            rightMostPoint = Math.max(rightMostPoint, leftValue + widthValue);
            leftMostPoint = Math.min(leftMostPoint, leftValue);
        }

        // Only move if the left most point is greater than 10 pixels from the edge
        if (leftMostPoint - 10 >= 0) {
            for (let i = 0; i < objects.length; i++) {
                let leftValue = parseInt(window.getComputedStyle(objects[i]).getPropertyValue('left'), 10);
                objects[i].style.left = (leftValue - 10) + 'px';
            }
        }
    }, 10);
}

let moveRight = () => {
    moveRightInterval = setInterval(() => {
        let rightMostPoint = 0;
        let leftMostPoint = screenWidth;

        // Calculate the furthest right and left points of all objects
        for (let i = 0; i < objects.length; i++) {
            let leftValue = parseInt(window.getComputedStyle(objects[i]).getPropertyValue('left'), 10);
            let widthValue = parseInt(window.getComputedStyle(objects[i]).getPropertyValue('width'), 10);

            rightMostPoint = Math.max(rightMostPoint, leftValue + widthValue);
            leftMostPoint = Math.min(leftMostPoint, leftValue);
        }

        // Only move if the right most point is less than the screen width
        if (rightMostPoint <= screenWidth) {
            for (let i = 0; i < objects.length; i++) {
                let leftValue = parseInt(window.getComputedStyle(objects[i]).getPropertyValue('left'), 10);
                objects[i].style.left = (leftValue + 10) + 'px';
            }
        }
    }, 10);
}

let launchBall = () => {
    launchInterval = setInterval(() => {
        let topValue = parseInt(window.getComputedStyle(basketBall).getPropertyValue('top'), 10);
        if (topValue - 10 >= 0) {
            basketBall.style.top = (topValue - 10) + 'px';
        } else {
            clearInterval(launchInterval); // Detiene el movimiento cuando la pelota llega a la parte superior de la pantalla.
        }
    }, 10); 
}

btnLaunch.addEventListener('click', launchBall);


let stopMovingLeft = () => {
    clearInterval(moveLeftInterval); // Stops the movement when the button is released.
}


let stopMovingRight = () => {
    clearInterval(moveRightInterval); // Stops the movement when the button is released.
}

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;

// create an engine
var engine = Engine.create();

// create two boxes and a ground
var ball = Bodies.circle(50, 50, 50);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [ball, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

document.getElementById("btnLaunch").addEventListener("click", function() {
    Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: -0.05});
});



// For devices with a mouse
btnLeft.addEventListener('mousedown', moveLeft);
btnLeft.addEventListener('mouseup', stopMovingLeft);
btnRight.addEventListener('mousedown', moveRight);
btnRight.addEventListener('mouseup', stopMovingRight);

// For touch devices
btnLeft.addEventListener('touchstart', moveLeft);
btnLeft.addEventListener('touchend', stopMovingLeft);
btnRight.addEventListener('touchstart', moveRight);
btnRight.addEventListener('touchend', stopMovingRight);