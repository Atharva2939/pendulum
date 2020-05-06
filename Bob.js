class Bob {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity
          }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    World.add(world,this.body)
  }
  display() {
    var pos =this.body.position;
   // rectMode(CENTER);
    fill("brown");
    ellipse(pos.x, pos.y,this.radius);
  }
}
