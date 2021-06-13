class Iron{
    constructor(x,y){
    var options={
        'resitution': 0.8,
        'friction': 3,
        'density':30
    }
    this.x=x;
    this.y=y;
    this.width=80;
    this.height=30;
    this.body=Bodies.rectangle(x,y,80,30);
    World.add(world,this.body);
}
display(){
    var pos =this.body.position;
		var angle = this.body.angle;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("red");
			rect(0,0,80,30);
			pop()
}
}