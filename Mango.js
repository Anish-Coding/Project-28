class Mango{
    constructor(x, y, r) {
        var options = {
            isStatic:true,
            friction:1,
            restitution:0
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
        this.image = loadImage("mango2.png");
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0, 0,this.r,this.r);
        imageMode(CENTER);
        image(this.image, 10, -15, this.width, this.height);
        pop();
      }
}