class Monster {
    constructor() {
        var options = {restitution:0.5, friction:0.3, isStatic:false};
        this.body = b.rectangle(900, 500,160, 160);
        this.image = loadImage("images/Monster-01.png");
        world.add(wo, this.body);
    }

    display() {
        var pos =this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 160, 160);
    }
}
