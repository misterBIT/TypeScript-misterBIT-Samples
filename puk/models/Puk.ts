import {Thing} from './Thing'
import {World} from './World'

import {getRandomInt} from 'utils/utils';

export class Puk extends Thing{
    private static maxId = 0;
    private id:number;
    private _color:string = '#999';

    constructor(private _power:number, private _dna:string) {
        super();
        this.id = ++Puk.maxId;
        //this.color = '#999';
    }
    get power () {
        return this._power;
    }
    get dna () {
        return this._dna;
    }
    set color (c: string) {
        this._color = c;
    }
    get color () {
        return this._color;
    }


    step(){
        console.log('puk ' + this.dna + ' is stepping');
        var emptySpots = World.instance().getEmptyNegSpots(this.spot);
        //console.log('emptySpots', emptySpots);

        if (emptySpots.length == 0) {
            console.log('Cannot move...');
            return;
        }

        let emptySpot = emptySpots[getRandomInt(0, emptySpots.length-1)];
        World.instance().movePuk(this, emptySpot);

        var negs = World.instance().getNegPuks(this.spot);
        //console.log('negs: ', negs);

        if (negs.length == 1) {
            console.log('Creating Child!');
            World.instance().createChildPuk(this, negs[0]);

        }

    }

    asHtml() {
        return '<div class="puk" style="background-color:' + this.color+' "></div>';
    }


    static getPuks() : Puk[] {
        let puks:Puk[] = [];
        puks.push(new Puk(3, 'A'), new Puk(9, 'B'));

        return puks;
    }
}
