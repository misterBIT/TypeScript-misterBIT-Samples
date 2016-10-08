import {Spot} from 'models/Spot';

export class Thing {
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
