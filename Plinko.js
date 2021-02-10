class Plinko
{
    constructor(x,y)
    {
        var plinko_options={
            isStatic:true,
            density:1
        }
        this.body=Bodies.circle(x,y,10,plinko_options);
        this.radius=10;
        World.add(world,this.body);
        
    }

    display() 
    {
        var pos=this.body.position
        ellipseMode(RADIUS);
        fill('white');
        ellipse(pos.x,pos.y,10);
    }
}