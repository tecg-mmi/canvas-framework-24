import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/IPosition";
import {ISquare} from "../types/ISquare";

export class Square extends Shape implements ISquare {
    public readonly sideLength: number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, sideLength: number, degree: number, color: IColor, isFilled: boolean = true) {
        super(ctx, color, position, degree, isFilled);
        this.sideLength = sideLength;
        this.orientation = degree;
    }

    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.beginPath();
        this.ctx.rect(-this.sideLength / 2, -this.sideLength / 2, this.sideLength, this.sideLength);
        this.ctx.closePath();
        this.fillOrStroke();
        this.ctx.restore();
    }

    public clear() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        if (this.isFilled) {
            this.ctx.clearRect(-this.sideLength / 2, -this.sideLength / 2, this.sideLength, this.sideLength);
        } else {
            this.ctx.clearRect(-this.sideLength / 2 - 1, -this.sideLength / 2 - 1, this.sideLength + 2, this.sideLength + 2);
        }
        this.ctx.restore();
    }
}