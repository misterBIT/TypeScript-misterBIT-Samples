"use strict";

// import {Thing} from 'models/Thing'; 
// import {Spot} from 'models/Spot'; 
// import {Puk} from 'models/Puk'; 
import {World} from 'models/World'; 

setInterval(function () {
    world.step();
    world.render();

}, 1000)


let world = World.instance();
console.log(world);