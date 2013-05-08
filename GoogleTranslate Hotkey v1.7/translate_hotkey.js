
document.onkeyup = function(){
	if(event.keyCode == 27) { //ESC
		var source = document.getElementById('source');
		source.value = "";
		source.focus();
	}
	else if(event.keyCode == 113) { //F2
		var listen = document.getElementById('gt-src-listen');
		document.fire(listen, 'click');
	}
	else if(event.keyCode == 115) { //F4
		var listen = document.getElementById('gt-res-listen');
		document.fire(listen, 'click');
	}
	else if (event.ctrlKey && event.keyCode == 13 ) //ctrl+enter
	{
		var correct  = document.getElementsByClassName('gt-spell-corrected-text')[0];
		document.fire(correct, 'click');
	}
}
document.fire = function (element, evttype) {
	var e = document.createEvent('HTMLEvents');
	e.initEvent(evttype, false, false);
	element.dispatchEvent(e);
}

