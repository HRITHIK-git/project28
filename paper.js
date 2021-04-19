class Paper
    {
    constructor(x,y,radius)
        {
            var options =
            {
                isStatic:false,
                restitution:0.3,
                friction:0.5,
                density:6.5
            }

            this.body = Bodies.rectangle(x,y,50,50, options);
            this.image=loadImage("sprites/paper2.png");
            this.radius=radius;
            World.add(world,this.body)

        }
    display()
        {
            var pos=this.body.position
            imageMode(CENTER);
            image(this.image,pos.x,pos.y,50,50);

           // ellipse(pos.x,pos.y,this.radius)
        }
    }