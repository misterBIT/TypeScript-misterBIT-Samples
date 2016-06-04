// Accept only Strings
//function identity(arg: string): string {
//    return arg;
//}


// Loose the type defense
//function identity(arg: any): any {
//    return arg;
//}



function identity<T>(arg: T): T {
    return arg;
}

// There are cases when we will have to state the type param
var d = identity<Date>(new Date());
d.getHours();

// usually in can be inferred:
var ss = identity("Samba");
console.log('First letter: ' + ss.charAt(0));
var f = identity({foo: ()=>console.log('ffffooo!')});
f.foo();


function try1<T>(arg: T): T {
    // arg.length; // compile time error
    return arg;
}
function try2<T>(arg: T[]): T[] {
    console.log(arg.length);  // fine
    return arg;
}

// --------------------Generic Constraints -------------------------------------------------


interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}


// --------------------Generic Classes -------------------------------------------------

class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };



var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log('Result:', stringNumeric.add(stringNumeric.zeroValue, "test"));


var b = new GenericNumber<boolean>();
b.zeroValue = false;
b.add = function(x, y) { return x && y; };
console.log('Result:', b.add(b.zeroValue, true));