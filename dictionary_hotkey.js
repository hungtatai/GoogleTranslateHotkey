
alert("insert");
document.onkeyup = function(){
	if(event.keyCode == 27) { //ESC
		var source = document.getElementsByName('q')[0];
		source.value = "";
		source.focus();
	}
	else if(event.keyCode == 113) { //F2
		var listen = document.getElementById('pronunciation');
		document.fire(listen, 'click');
	}
}
document.fire = function (element, evttype) {
	if (document.createEvent) {
		var e = document.createEvent('HTMLEvents');
		e.initEvent( evttype, false, false);
		element.dispatchEvent(e);
	} else if (document.all) {
		element.fireEvent('on' + evttype);
	}
}