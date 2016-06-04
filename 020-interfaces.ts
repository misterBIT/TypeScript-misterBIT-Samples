
// descrive the param structure explicitly
function printLabel1(labelledObj: {label: string}) {
    console.log(labelledObj.label.toUpperCase());
}

var myObj = {size: 10, label: "This is a label"};
printLabel1(myObj);

// Switch to an interface:
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

var myObj = {size: 10, label: "This is a label"};
printLabel(myObj);


// Function Types -------------------------------------------------------------------
interface SearchFunc {
    (source: string, subString: string): boolean;
}
var mySearch: SearchFunc;
mySearch = function(src: string, sub: string) {
    var result = src.search(sub);
    return (result != -1);
}

console.log('Found? ',  mySearch('puki', 'k'));


// Array Types ---------------------------------------------------------------------
interface StringArray {
    [index: number]: string;
}

var myArray: StringArray;
myArray = ["Bob", "Fred"];

// Hybrid Types ------------------------------------------------------------
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

var c1: Counter;
// c1(10);
// c1.reset();
// c1.interval = 5.0;




