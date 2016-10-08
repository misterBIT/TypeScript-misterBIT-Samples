/**
 * Created by Yaron on 07/10/2015.
 */

class Person {
    static specie = 'Human';
    
    constructor(private _firstname: string) {}
    
    // Note: Accessors require you to set the compiler to output ECMAScript 5.
    get firstname(): string {
        return this._firstname;
    }

    set firstname(newName: string) {                                                                                                                                                                                                                                                                           
        if (newName.length > 1) {
            this._firstname = newName;
        }
        else {
            console.log("Error: name is too short!");
        }
    }
    public speak(s: string){
        console.log(this._firstname + ' is speaking loud: ' + s)
    };
}


var p:Person = new Person('David');
console.log('Specie is: ' +  Person.specie);
p.firstname = "Bob Smith";
p.firstname = "B";

console.log('so name is: ', p.firstname);

// ------------------------- Again, Only structure is important:

interface IHuman {
    firstname: string;
    //age: number;
    speak(s: string) : void;
    //speak(n: number) : string;
}


function makeTheTalk(person : IHuman) {
    person.speak('ah');
    return person.firstname + ' has spoken';
}

var user1 = {firstname: "Jane", lastname: "puk"};
var user2 = {firstname: "Puki", lastname: "Puk", speak: (s: string)=>console.log('Puki: Ahu!')};
var user3 = new Person('Muki');

console.log('Making them speak!');

//console.log(makeTheTalk(user1));
console.log(makeTheTalk(user2));
console.log(makeTheTalk(user3));




// instanceOf Type Guard ---------------------------------------------------------------


interface Foo {
    foo: number;
    common: string;
}

interface Bar {
    bar: number;
    common: string;
}

/**
 * User Defined Type Guard!
 */
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}


class Animal {name:string}
class Cat extends Animal {miyahuu(){console.log('Miyauuuu');}}

function isCat(a: Animal): a is Cat {
    return a.name === 'Mitsi';
} 

function makeNoise ( pet:Animal ) {
    // cant force him to miyahuu
    //pet.miyahuu();
    if (pet instanceof Cat)     pet.miyahuu();
    if (isCat(pet))             pet.miyahuu();
}
makeNoise(new Cat());

// Classes & Interfaces ---------------------------------------------------------------
// Boring:
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }

// class Clock implements ClockInterface  {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { }
// }
