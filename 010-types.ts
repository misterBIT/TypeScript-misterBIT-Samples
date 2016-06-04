// compile with Ctrl+Shift+B

console.log('Starting Up!!');

var isDone: boolean = false;
var height: number = 6;

var name: string = 'Charli';
name = 'Miyahoo';


// ---------------------- ARRAYS ----------------------------------------------------

var nums: number[] = [1, 2, 3];
var nums1: Array<number> = nums;
//nums = ['puki', 'muki'];


// ---------------------- DUCK TYPING ----------------------------------------------------

var users = [{ id: 1, name: "muki" },
             { id: 2 }];

// users.push({});

// ---------------------- ANY and CASTING ----------------------------------------------------

var x; // x is ANY forever
x = 8;
x = 'as'; 



var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, a boolean

var item1 = { id: 1, name: "Shpandrak" };
var item2 = item1;

(<any>item2).lala = '6';
// item2.lala = '9';
console.log('Item is: ', item1);


// ---------------------- FUNCTION SIGNATURE TYPE ----------------------------------------------------

function cb(text: string) : void {
    console.log("inside myCallback " + text);
}

function callingFunction(txt: string, cb: (text: string) => void) {
    cb(txt);
}
callingFunction("puki", cb);
// callingFunction("muki", "I am not a function I'm a free string");
// Error: Argument of type 'string' is not assignable to parameter of type '(text: string) => void'.


// ---------------------- TYPE INFERENCE ----------------------------------------------------
var arr = [{name: 'Puki'}, {name: 'Muki'}];
var smaller = arr.slice(0);
smaller.sort((x,y) => x.name.localeCompare(y.name));



// ---------------------- FUNCTION "OVERLOAD" ----------------------------------------------------

function foo(initialText: string, x: string);
function foo(initialText: string, x: number);
function foo(initialText: string, x: any) {
    console.log(`x is of type `, typeof x);
}

foo('a', 'b');
foo('a', 2);
// foo('a', true);


// ---------------------- UNION TYPES ----------------------------------------------------

type numNumsOrFuncReturnsNum = number | number[] | (()=>number);
function add7(p: numNumsOrFuncReturnsNum) : numNumsOrFuncReturnsNum {
   // These are called Type guards:
   if (Array.isArray(p)) return p.map(i => i+7);
   else if (typeof p === 'number') return p + 7;
   else if (typeof p === 'function') return p()+7;
}

console.log('add7(9) : ', add7(9));
console.log('add7([1, 2]) : ', add7([1,2]));
console.log('add7(func()) : ', add7(()=>11));



