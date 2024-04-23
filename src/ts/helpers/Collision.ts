import {IPosition} from "../types/iPosition";
import {IRectangle} from "../types/IRectangle";
import {ICircle} from "../types/ICircle";

export class Collision {

    /**
     * Vérifie s'il y a collision entre @rect1 et @rect2.
     * @rect1 rect1: premier rectangle.
     * @rect2 rect2: deuxième rectangle.
     * @returns true s'il y a collision entre @rect1 et @rect2.
     */
    static areRectanglesColliding(rect1: IRectangle, rect2: IRectangle): boolean {
        return !(
            rect1.position.x + rect1.width < rect2.position.x ||
            rect1.position.y + rect1.height < rect2.position.y ||
            rect1.position.x > rect2.position.x + rect2.width ||
            rect1.position.y > rect2.position.y + rect2.height);
    }


    /**
     * Vérifie si un point est à l'intérieur d'un rectangle donné.
     * Si un centre et une orientation sont spécifiés, le point est d'abord transformé en fonction de ces valeurs.
     * @point - Les coordonnées du point à vérifier.
     * @rect - Le rectangle dans lequel le point est vérifié.
     * @center - Les coordonnées du centre autour duquel la rotation est appliquée, si elle est spécifiée.
     * @orientation - L'orientation du rectangle exprimée en radians, si spécifiée. Utilisée pour transformer le point avant la vérification.
     * @returns Vrai si le point est à l'intérieur du rectangle, sinon faux.
     */
    static pointInRectangle(rect: IRectangle, point: IPosition, center?: IPosition, orientation?: number): boolean {
        if (center !== undefined && orientation !== undefined) {
            point = Collision.transformPoint(point, center, orientation);
        }
        return point.x >= (rect.position.x - rect.width / 2) && point.x <= (rect.position.x + rect.width / 2) &&
            point.y >= (rect.position.y - rect.height / 2) && point.y <= (rect.position.y + rect.height / 2);
    }

    static pointInCircle(circle: ICircle, point: IPosition, center: IPosition, orientation: number) {
        if (center !== undefined && orientation !== undefined) {
            point = Collision.transformPoint(point, center, orientation);
        }
        const dx = point.x - circle.position.x;
        const dy = point.y - circle.position.y;
        return dx * dx + dy * dy <= circle.radius * circle.radius;
    }


    /**
     * Replace un objet IRectangle à l'intérieur du canevas si celui-ci sort du canvas.
     * @rectangle rectangle: Objet représentant les propriétés du rectangle à vérifier et à replacer.
     * @canvas canvas: pour calculer les limites.
     */
    static replaceOutOfBounds(rectangle: IRectangle, canvas: HTMLCanvasElement) {
        if (rectangle.position.y > canvas.height + rectangle.height) {
            rectangle.position.y = -rectangle.height;
        }
        if (rectangle.position.y < -rectangle.height) {
            rectangle.position.y = canvas.height + rectangle.height;
        }
        if (rectangle.position.x > canvas.width + rectangle.width) {
            rectangle.position.x = -rectangle.width;
        }
        if (rectangle.position.x < -rectangle.width) {
            rectangle.position.x = canvas.width + rectangle.width;
        }
    }

    /**
     * Transforme un point donné par rotation autour d'une position donnée.
     * @point point: Objet représentant les coordonnées du point à transformer.
     * @position position: Objet représentant les coordonnées autour desquelles effectuer la rotation. (centre de rotation)
     * @orientation orientation: Angle de rotation en radians.
     * @returns Un nouvel objet représentant les coordonnées du point après rotation.
     */
    static transformPoint(point: IPosition, position: IPosition, orientation: number): IPosition {
        const cosTheta = Math.cos(orientation);
        const sinTheta = Math.sin(orientation);
        const rotatedX = point.x * cosTheta - point.y * sinTheta;
        const rotatedY = point.x * sinTheta + point.y * cosTheta;
        return {x: position.x + rotatedX, y: position.y + rotatedY};
    }

    /**
     * Vérifie si un point est en dehors des limites du canvas.
     * Si une orientation est spécifiée, le point est d'abord transformé en fonction de cette orientation.
     * @point - Les coordonnées du point à vérifier.
     * @canvas - L'élément canvas pour lequel les limites sont vérifiées.
     * @center - Les coordonnées du centre de la forme autour de laquelle la rotation est appliquée.
     * @orientation - L'orientation de la forme exprimée en radians. Si spécifiée, le point est transformé en fonction de cette orientation avant la vérification.
     * @returns Vrai si le point est en dehors des limites du canvas, sinon faux.
     */
    static isPointOutsideCanvas(point: IPosition, canvas: HTMLCanvasElement, center: IPosition, rotation?: number): boolean {
        if (rotation !== undefined && center !== undefined) {
            point = Collision.transformPoint(point, center, rotation);
        }
        return point.x < 0 || point.x > canvas.width || point.y < 0 || point.y > canvas.height;
    }


}