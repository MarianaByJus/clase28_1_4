class Cañon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.cañon = loadImage("canon.png");
        this.base = loadImage("cannonBase.png");
    }

    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cañon,0,0,this.width,this,this.height);
        pop();
        image(this.base,70,20,200,200);
    }
}