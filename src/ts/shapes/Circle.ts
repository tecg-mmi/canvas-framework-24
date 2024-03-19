import {Shape} from "./Shape";

export class Circle extends Shape {
    private radius: number;

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) {
        super(ctx, color, x, y);
        this.radius = radius;
    }

    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }


}