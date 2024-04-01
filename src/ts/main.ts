import {Rectangle} from "./shapes/Rectangle";
import {Circle} from "./shapes/Circle";
import {Triangle} from "./shapes/Triangle";
import {Rgb} from "./colors/Rgb";
import {Hsl} from "./colors/Hsl";
import {Rgba} from "./colors/Rgba";

console.log('Test');

const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;

const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const color = new Rgb(200, 100, 0);
const color2 = new Hsl(20, 100, 50);

console.log(color2.hue);

const shapes =
    [new Rectangle(ctx, 100, 150, 30, 10, 90, new Hsl(200, 50, 20)),
        new Circle(ctx, 150, 100, 30, new Rgb(50, 10, 150)),
        new Triangle(ctx, new Rgba(100, 30, 100, 0.5), 150, 200, 50, 20)
    ]
;

shapes.forEach((shape) => {
    shape.draw();
});
