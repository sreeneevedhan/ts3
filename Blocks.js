class block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.15,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        this.image=loadImage("sprite/rect.jpg");
      
        World.add(world, this.body);
        this.Visiblity=255;
      }
      display(){
        
        if(this.body.speed < 5){
       
         var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height)
        
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity );
          image(this.image, this.body.position.x, this.body.position.y, 40, 50);
          pop();
          
        }
       
    }
      score(){
         if(this.Visiblity<0 && this.Visiblity>-105 ){
          score++;
       }
      }
      
}