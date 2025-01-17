class Ground {
    private position: number;
    private speed: number;
    private width: number;
    private height: number;

    constructor(width: number, height: number, speed: number) {
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.position = 0;
    }

    public scroll(): void {
        this.position -= this.speed;
        if (this.position <= -this.width) {
            this.position = 0;
        }
    }

    public reset(): void {
        this.position = 0;
    }

    public getPosition(): number {
        return this.position;
    }

    public getDimensions(): { width: number; height: number } {
        return { width: this.width, height: this.height };
    }
}

export default Ground;