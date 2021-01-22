class Boxes {
    constructor(x, y) {
        var options = {restitution:0.5, isStatic:false};
        this.body = b.rectangle(x, y, 50, 50, options);
        world.add(wo, this.body);
    }


    display() {
        var pos =this.body.position;
        fill("red");
        stroke("black");
        rectMode(CENTER);
        rect(pos.x, pos.y, 50, 50);
    }
}