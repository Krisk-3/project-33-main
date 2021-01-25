class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.4
        }
        this.x=x
        this.y=y
        this.r=r
        this.body=Bodies.circle(x,y,this.r/2,options)
        this.color=color (random(0,255),random(0,225),random(0,225));
        World.add(world,this.body)
    }
    display()
    {
        var paperpos = this.body.position;

        push()
        translate(paperpos.x,paperpos.y)
        ellipseMode(RADIUS)
        fill(this.color)
        ellipse(0,0,this.r,this.r);
        pop()
    }
}