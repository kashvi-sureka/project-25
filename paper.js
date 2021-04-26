class paper{
  constructor(x,y,radius){
    this.x= x;
    this.y=y;
    this.radius=radius;
    this.image=loadImage("paper.png");

    this.body = Bodies.circle(x, y, radius,options);

    var options ={
        isStatic : false,
        restitution : 0.3,
        friction :0,
        density :1.2
    }
    World.add(world, this.body);

    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
    }
  }

 display(){
     var pos = this.body.position;
     circle(pos.x, pos.y, this.radius);
     imageMode(CENTER);
		 
 }
}
