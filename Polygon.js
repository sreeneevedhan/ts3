class Polygon{
    constructor(x, y, radius) {
        var options = {
            'friction':1.0,
            'restitution':0.5,
            'density':0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
    
        this.image = loadImage("sprite/polygon.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //ellipseMode(CENTER);
        //ellipse(0,0, this.radius);
        imageMode(CENTER);
       image(this.image, 0,0, this.radius,this.radius);
        pop();
      }
}