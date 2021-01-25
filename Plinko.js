class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:1,
            friction:0.5,
            density:1.9
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(x,y,this.r/2,options)
        World.add(world,this.body)
    }
    display()
    {
        var paperpos = this.body.position;

        push()
        translate(paperpos.x,paperpos.y)
        ellipseMode(CENTER)
        fill("white")
        ellipse(0,0,this.r,this.r);
        pop()
    }
}