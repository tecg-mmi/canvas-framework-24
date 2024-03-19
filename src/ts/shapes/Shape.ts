export abstract class Shape {
    protected readonly ctx: CanvasRenderingContext2D;
    protected color: string;
    protected x: number;
    protected y: number;


    protected constructor(ctx: CanvasRenderingContext2D, color: string, x: number, y: number) {
        this.ctx = ctx;
        this.color = color;
        this.x = x;
        this.y = y;
    }
}