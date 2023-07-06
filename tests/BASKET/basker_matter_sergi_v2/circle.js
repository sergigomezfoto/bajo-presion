class Circle {
  constructor(x, y, radius) {
    const options = {
        restitution: 0.8,
    }
    this.body = Matter.Bodies.circle(x, y, radius,options);
    Matter.World.add(world, this.body);
    this.radius = radius;
  }
  show() {
    //fill orange
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(bBallImg, 0, 0, this.radius * 2, this.radius * 2);
    pop();
  }
}
