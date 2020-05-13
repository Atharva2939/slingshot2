class Obstacles{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':5
            
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        //pos.x=this.body.position.x;
        //pos.y=this.body.position.y;
        // var angle = this.body.angle;
        // push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        // rectMode(CENTER);
        var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};