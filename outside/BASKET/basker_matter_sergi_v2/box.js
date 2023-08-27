class Box {
    constructor(x, y, width, height, addToWorld = true) {
        const options = {
         restitution: 0.8,
    friction: 10.0,
    density: 10.0,
    inertia: Infinity, 
         
        }
        this.body = Matter.Bodies.rectangle(x, y, width, height,options);
        if (addToWorld) {
            Matter.World.add(world, this.body);
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height= height;
    }

    // Resto del código de Box...

    show() {    
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0, this.width, this.height);
        pop();
    }   
}