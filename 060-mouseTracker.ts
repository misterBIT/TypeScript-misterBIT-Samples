class Tracker {
    private count =  0;
    start(){
        window.onmousemove = (e) => {
            this.count++;
            //No e.keyCode
            if (this.count % 100 === 0) {
                console.log(`Mouse x: ${e.clientX} ; y: ${e.clientY}`);
            }
            
        };
    }
}
        
var t = new Tracker();
t.start();

//window.onmousemove = function(e) {e.clientX};
//window.onmousemove = function(e) {e.keyCode};
