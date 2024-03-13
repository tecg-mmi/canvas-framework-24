export class Rectangle {
    private readonly ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private w: number;
    private h: number;
    private color: string;
    private degree: number;


    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, degree: number, color: string) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.degree = degree;
        this.color = color;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
        this.ctx.rotate(this.degree * Math.PI / 180);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        this.ctx.restore();
    }


}