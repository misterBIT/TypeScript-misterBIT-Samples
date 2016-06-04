//module Valdations {
//    export interface StringValidator {
//        isAcceptable(s:string): boolean;
//    }
//}


export interface StringValidator {
    isAcceptable(s: string): boolean;
}

// when a single export, you can also use:
// export = StringValidator;