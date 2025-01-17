class Obstacle {
    constructor() {
        this.position = { x: 0, y: 0 };
        this.width = 50;
        this.height = 50;
        this.speed = 5;
        this.active = false;
    }

    spawn(x, y) {
        this.position.x = x;
        this.position.y = y;
        this.active = true;
    }

    update() {
        if (this.active) {
            this.position.x -= this.speed;
            if (this.position.x < -this.width) {
                this.reset();
            }
        }
    }

    reset() {
        this.active = false;
        this.position.x = 0;
        this.position.y = 0;
    }

    draw(context) {
        if (this.active) {
            context.fillStyle = 'red'; // Placeholder color for the obstacle
            context.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }
}

export default Obstacle;