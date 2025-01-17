class Dino {
    constructor() {
        this.position = { x: 50, y: 150 };
        this.velocity = { x: 0, y: 0 };
        this.isJumping = false;
        this.isDucking = false;
        this.gravity = 0.5;
        this.jumpStrength = -10;
    }

    jump() {
        if (!this.isJumping) {
            this.isJumping = true;
            this.velocity.y = this.jumpStrength;
        }
    }

    duck() {
        this.isDucking = true;
    }

    standUp() {
        this.isDucking = false;
    }

    updatePosition() {
        this.position.y += this.velocity.y;
        this.velocity.y += this.gravity;

        if (this.position.y >= 150) {
            this.position.y = 150;
            this.isJumping = false;
        }
    }

    getPosition() {
        return this.position;
    }

    isCurrentlyDucking() {
        return this.isDucking;
    }
}

export default Dino;