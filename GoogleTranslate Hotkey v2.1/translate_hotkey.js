
$(function(){
	$('body').append('<audio id="au" ></audio>');

});

document.onkeyup = function(){
	if(event.keyCode == 27) { //ESC
		var source = document.getElementById('source');
		source.value = "";
		source.focus();
	}
	else if(event.keyCode == 113) { //F2
		$('#au').attr('src', document.getElementById('source').value)
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


