class String{
  constructor(bodyA, bodyB){
      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness: 0.06,
          length: 20
      }
      this.bodyA=bodyA
      this.bodyB=bodyB
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
  }
  display(){
    stroke(48,22,8)
    strokeWeight(4);
    line(this.bodyA.position.x, this.bodyA.position.y, this.bodyB.position.x, this.bodyB.position.y);
  }
}