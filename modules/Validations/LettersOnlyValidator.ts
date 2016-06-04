///// <reference path="Validator.ts" />
//module Valdations {
//
//    var lettersRegexp = /^[A-Za-z]+$/;
//
//    export class LettersOnlyValidator implements StringValidator {
//        isAcceptable(s:string) {
//            return lettersRegexp.test(s);
//        }
//    }
//}


import validation = require('./Validator');
var lettersRegexp = /^[A-Za-z]+$/;
export class LettersOnlyValidator implements validation.StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}