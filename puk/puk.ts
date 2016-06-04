"use strict";


class Thing {
    private _spot:Spot;
    set spot (spot:Spot) {
        this._spot = spot
    }
    get spot () {
        return this._spot;
    }

    // no abstracts?
    asHtml() {
        return 'Ah';
    }

}


class Puk extends Thing{
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

class Spot {
    constructor(private _x:number, private _y:number, public thing:Thing = null) {}
    get x () {return this._x;}
    get y () {return this._y;}
}


class World {
    private spots:Spot[][];
    private puks:Puk[];
    private size = 14;

    private static _instance = null;
    public static instance(){
        if (World._instance == null) {
            console.log('Creating the World!');
            World._instance = new World();
        }
        return World._instance;
    }

    // could not make it private )-:
    public constructor() {
        this.spots = [];
        this.puks = Puk.getPuks();

        for (var i = 0; i < this.size; i++) {
            this.spots[i] = [];
            for (var j = 0; j < this.size; j++) {
                this.spots[i].push(new Spot(i,j));
            }
        }

        this.puks.forEach((puk)=>{
            this.addPuk(puk);
        });

    }

    private addPuk(puk: Puk){
        var x = getRandomInt(0,this.size-1);
        var y = getRandomInt(0,this.size-1);
        puk.spot = this.spots[x][y];
        this.spots[x][y].thing = puk;
    }

    public movePuk(puk, spot) {
        puk.spot.thing = null;
        puk.spot = spot;
        spot.thing = puk;
    }

    getNegPuks(spot:Spot) {
        return this.puks.filter(function (puk) {
            var diffX = Math.abs(puk.spot.x - spot.x);
            var diffY = Math.abs(puk.spot.y - spot.y);
            return diffX <= 1 && diffY <= 1 && diffX+diffY != 0;
        });

    }
    getEmptyNegSpots(spotCenter: Spot) {
        let emptySpots = [];
        this.spots.forEach(function (spotsRow) {
            spotsRow.forEach(function (spot) {
                var diffX = Math.abs(spotCenter.x - spot.x);
                var diffY = Math.abs(spotCenter.y - spot.y);

                if (spot.thing == null && diffX <= 1 && diffY <= 1 && diffX+diffY != 0) {
                    emptySpots.push(spot);
                }
            })
        });
        return emptySpots;
    }

    createChildPuk(papa:Puk, mama:Puk) {
        let puk = new Puk(1, papa.dna + mama.dna);

        var color= parseInt(papa.color.substr(1));
        color -=222;
        //console.log('new color: ', color);
        puk.color = '#'+color;

        this.puks.push(puk);
        this.addPuk(puk);
    }

    step(){
        this.puks.forEach((puk)=> {
            puk.step();
        });

    }



    render() {

        var htmlWorld =
            this.spots.map(function (spotsRow) {
                var htmlRow = '<div class="row">' +
                    spotsRow.map(function (spot) {
                        return '<div class="spot">' +
                                    ((spot.thing)? spot.thing.asHtml() : '') +
                                '</div>'
                    }).join('');
                    + '</div>';
                return htmlRow;
            }).join('');

        var world = document.getElementById('world');
        world.innerHTML = htmlWorld;
    }

}

let world = World.instance();
//console.log(world);



setInterval(function () {
    world.step();
    world.render();

}, 1000)



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

