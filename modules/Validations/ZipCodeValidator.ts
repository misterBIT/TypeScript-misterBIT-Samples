/// <reference path="Validator.ts" />
//module Valdations {
//    var numberRegexp = /^[0-9]+$/;
//
//    export class ZipCodeValidator implements StringValidator {
//        isAcceptable(s:string) {
//            return s.length === 5 && numberRegexp.test(s);
//        }
//    }
//
//}


import validation = require('./Validator');
var numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements validation.StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

