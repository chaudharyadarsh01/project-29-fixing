class Block{
    constructor(x, y, width, height,angle) {
        var options = {
             isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x, y, width, height, options);

        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        rect(this.x,this.y,this.width,this.height);
        //pop();
      }
}