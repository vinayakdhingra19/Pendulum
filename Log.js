class Log{
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255)
        rect(pos.x,pos.y,this.width,this.height)
        translate(this.body.position.x, this.body.position.y);
        pop();
      }
}