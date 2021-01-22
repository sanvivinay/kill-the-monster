class Hero {
    constructor(x, y) {
        this.image = loadImage("images/Superhero-01.png");
        var op = {
            isStatic : false,
            restitution : 0.4,
            friction : 0.4
        }
        this.body = b.rectangle(x, y, 250, 100, op);
        world.add(wo, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 250, 100);
    }
}