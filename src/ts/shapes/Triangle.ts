import {Shape} from "./Shape";

export class Triangle extends Shape{
    protected width: number;
    protected height: number;

    constructor(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, width: number, height: number) {
        super(ctx, color, x, y);
        this.width = width;
        this.height = height;
    }


    public draw() {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.beginPath();
        this.ctx.moveTo(0, -this.height / 2);
        this.ctx.lineTo(-this.width / 2, this.height / 2);
        this.ctx.lineTo(this.width / 2, this.height / 2);
        this.ctx.closePath();
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.restore();
    }

}