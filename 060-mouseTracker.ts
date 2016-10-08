class Tracker {
    private count =  0;
    start(){
        window.onmousemove = (e) => {
            this.count++;
            if (this.count % 100 === 0) {
                console.log(`Mouse x: ${e.clientX} ; y: ${e.clientY}`);
            }
            
        };
    }
}
        
var t = new Tracker();
t.start();

// window.onmousemove = function(e) {e.clientX;};
// window.onkeyup = function(e) {e.keyCode};
