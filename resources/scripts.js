
function topmenuover() {
	var id = ((this.getAttribute("id")).split("-"))[1];
	this.setAttribute("src", "/resources/images/"+id+"_over.png");
}

function topmenuout() {
	var id = ((this.getAttribute("id")).split("-"))[1];
	this.setAttribute("src", "/resources/images/"+id+".png");
}

function topmenu() {
	var items = ["blog", "work", "photos", "contact"];
	//var topmenu = document.getElementById("topmenu");
	for (item in items) {
		id = items[item];
		var img = document.getElementById("topmenu-"+id);
		img.setAttribute("src", "/resources/images/"+id+".png");
		img.onmouseover=topmenuover;
		img.onmouseout=topmenuout;
	}	
}

function nacked() {
	var today = new Date();
	var todayStr = ""; //tip to concatenate integers as strings
	todayStr += today.getDate();
	todayStr += today.getMonth() + 1;

	if (todayStr=="54" && document.styleSheets) {
		var stylesheets = document.styleSheets;
		for(var i=0; i<stylesheets.length; i++) { 
			stylesheets[i].disabled=true; 
		}		
	}	
}

function addLoadEvent(func) {
	//by Simon Willison:
	//   http://simon.incutio.com/archive/2004/05/26/addLoadEvent
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(topmenu);
addLoadEvent(nacked);

