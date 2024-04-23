import {Shape} from "./Shape";
import {IColor} from "../types/IColor";
import {IPosition} from "../types/iPosition";
import {IRectangle} from "../types/IRectangle";

export class Rectangle extends Shape implements IRectangle {
    public readonly width: number;
    public readonly height: number;

    constructor(ctx: CanvasRenderingContext2D, position: IPosition, w: number, h: number, degree: number, color: IColor, isFilled: boolean = true) {
        super(ctx, color, position, degree, isFilled);
        this.width = Math.trunc(w);
        this.height = Math.trunc(h);
        this.orientation = degree;
    }


    public draw() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        this.ctx.beginPath();
        this.ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        this.ctx.closePath();
        this.fillOrStroke();
        this.ctx.restore();
    }

    public clear() {
        this.ctx.save();
        this.ctx.translate(this.position.x, this.position.y);
        this.ctx.rotate(this.orientation);
        if (this.isFilled) {
            this.ctx.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
        } else {
            this.ctx.clearRect(-this.width / 2 - 1, -this.height / 2 - 1, this.width + 2, this.height + 2);
        }
        this.ctx.restore();
    }


}