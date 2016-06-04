// ---------------------- DEFAULT PARAMS ----------------------------------------------------

var concatThemAll = function(a: string, b: string, c: string='baba') {
    return a + b + c;
}
var x2 = concatThemAll('puki', 'muki');
console.log(x2);

// ---------------------- OPTIONAL PARAMS ----------------------------------------------------

var concatThis = function(a: string, b: string, suffix?: string) {
    var x = a + b;
    return suffix? x+suffix : x;
}

var x1 = concatThis('puki', 'muki');
console.log(x1);

// ---------------------- Rest Params ----------------------------------------------------


function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log('Name is: ',employeeName);