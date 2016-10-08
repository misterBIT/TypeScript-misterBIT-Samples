// -------------------- The Identity -------------------------------------------------

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

// Usually, the type param can be inferred:
var ss = identity("Samba");
// console.log('First letter: ' + ss.charAt(0));

var f = identity({foo: ()=>console.log('ffffooo!')});
f.foo();
var d = identity(new Date());
d.getHours();


// -------------------- About Generic Constraints ------------------------------------------------- 

function try1<T>(arg: T): T {
    // arg.length; // compile time error
    return arg;
}
function try2<T>(arg: T[]): T[] {
    console.log(arg.length);  // fine
    return arg;
}

// Lets add an interface:
interface Lengthwise {
    length: number;
}

// See how we can contraint the type:
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Oki Doki
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
console.log('Result:', myGenericNumber.add(myGenericNumber.zeroValue, 8));

var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };

console.log('Result:', stringNumeric.add(stringNumeric.zeroValue, "test"));


var b = new GenericNumber<boolean>();
b.zeroValue = false;
b.add = function(x, y) { return x && y; };
console.log('Result:', b.add(b.zeroValue, true));