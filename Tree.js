class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
      this.image = loadImage("tree2.png");
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 1090, 470, this.width, this.height);
      pop();
    }
  }

