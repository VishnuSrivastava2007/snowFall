
class Snowfall {
    constructor(x, y,r) {

        var options ={
       
        }
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);      
        World.add(world, this.body);
        this.image = loadImage("snow5.webp");
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        imageMode(CENTER);
        image(this.image,0, 0, this.r,this.r);
        pop();
    }

};
