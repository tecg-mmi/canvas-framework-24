import {Rectangle} from "./shapes/Rectangle";
import {Circle} from "./shapes/Circle";
import {Triangle} from "./shapes/Triangle";

console.log('Test');

const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;

const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const shapes =
    [new Rectangle(ctx, 100, 150, 30, 10, 90, 'red'),
        new Circle(ctx, 150, 100, 30, 'pink'),
        new Triangle(ctx, 'blue', 0, 0, 50, 20)
    ]
;

shapes.forEach((shape) => {
    shape.draw();
});
