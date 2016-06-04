//
//interface StringValidator {
//    isAcceptable(s: string): boolean;
//}
//
//var lettersRegexp = /^[A-Za-z]+$/;
//var numberRegexp = /^[0-9]+$/;
//
//class LettersOnlyValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return lettersRegexp.test(s);
//    }
//}
//
//
//class ZipCodeValidator implements StringValidator {
//    isAcceptable(s: string) {
//        return s.length === 5 && numberRegexp.test(s);
//    }
//}
//
//
//
//
//// Some samples to try
//var strings = ['Hello', '98052', '101'];
//// Validators to use
//var validators: { [s: string]: StringValidator; } = {};
//validators['ZIP code'] = new ZipCodeValidator();
//validators['Letters only'] = new LettersOnlyValidator();
//// Show whether each string passed each validator
//strings.forEach(s => {
//    for (var name in validators) {
//        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
//    }
//});

/*


// --------------------------  Now use internal Modules:
/// <reference path="Validations/Validator.ts" />
/// <reference path="Validations/LettersOnlyValidator.ts" />
/// <reference path="Validations/ZipCodeValidator.ts" />

// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: Valdations.StringValidator; } = {};
validators['ZIP code'] = new Valdations.ZipCodeValidator();
validators['Letters only'] = new Valdations.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});

// Run:
// tsc --out bundle.js 5.0-Modules.ts
// node bundle


*/




// --------------------------  Now use EXTERNAL Modules:
import Valdations = require('./Validations/Validator');
import zip = require('./Validations/ZipCodeValidator');
import letters = require('./Validations/LettersOnlyValidator');


// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: Valdations.StringValidator; } = {};
validators['ZIP code'] = new zip.ZipCodeValidator();
validators['Letters only'] = new letters.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
//
//Run:
//tsc --module commonjs 5.0-Modules.ts
//tsc --module amd 5.0-Modules.ts
//
//
//Note: You can also use an import alias:
//import StringValidator = Valdations.StringValidator;
