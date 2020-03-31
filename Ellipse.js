class Ellipse{
    constructor(x,y,radius){

    this.body = Bodies.ellipse(x,y,radius);
    World.add(world, this.body);
    this.width = radius;
}

    display(){
    
        push();
        var pos = this.body.position;
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.width);
        pop();
    
    }
    
    


}


