var c = document.getElementById("thing");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ffff00";

var rid = 0;

var circle = function(){
    var r = 0;
    var increase = true;
    window.cancelAnimationFrame(rid);
    var animate = function(){
	ctx.clearRect(0,0,500,500);
	ctx.beginPath();
	ctx.arc(250,250,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	if(r == 0){
	    increase = true;
	}
	if(r == 250){
	    increase = false;
	}
	if(increase){    
	    r++;
	}
	if(!increase){
	    r--;
	}
	rid = window.requestAnimationFrame(animate);
    };
    animate();
};

var circle_button = document.getElementById("circle");
circle_button.addEventListener("click", circle);

/*var dvd = function(){

}

var dvd_button = document.getElementById("dvd");
dvd_button.addEventListener("click", dvd);

var stop = function(){
    window.cancelAnimationFrame(rid);
}

var stop_button = document.getElementById("stop");
stop_button.addEventListener("click", stop);
*/
