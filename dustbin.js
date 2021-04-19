class Dustbin
  {
    constructor(x,y,width,height)
      {
          var options=
            {
                isStatic:true,
            }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image=loadImage("sprites/dustbingreen.png")
        World.add(world,this.body)
      }
      display()
      {
          var pos =this.body.position;
          push();
          stroke("white")
          strokeWeight(2)
          fill("white")
          imageMode(CENTER);

          image(this.image,1125,490,180,180)

          rectMode(CENTER);
          rect(this.body.position.x,this.body.position.y,this.width,this.height);
          pop();

         //rect(pos.x, pos.y);
      
      }
  }