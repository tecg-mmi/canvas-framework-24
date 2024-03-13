import {Rectangle} from "./shapes/Rectangle";

console.log('Test');

const canvas: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;

const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const myRect = new Rectangle(ctx, 100, 150, 30, 10, 90, 'red');

myRect.draw();

