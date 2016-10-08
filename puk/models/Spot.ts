import { Thing } from './Thing';

export class Spot {
    constructor(private _x:number, private _y:number, public thing:Thing = null) {}
    get x () {return this._x;}
    get y () {return this._y;}
}
