
String.prototype.replaceAll  = function(s1,s2){   
	return this.replace(new RegExp(s1,"gm"),s2);   
} 

$(function(){

	$(document).bind('keyup', 'esc', function(){
		clear();
	}).bind('keyup', 'alt+1', function(){
		mergeLine();
	}).bind('keyup', 'alt+2', function(){
		splitByPeriod();
	}).bind('keyup', 'alt+3', function(){
		mergeLine();
		splitByPeriod();
	});


	$('#source').bind('keyup', 'esc', function(){
		clear();
	}).dblclick(function(){
		clear();
	}).bind('keyup', 'alt+1', function(){
		mergeLine();
	}).bind('keyup', 'alt+2', function(){
		splitByPeriod();
	}).bind('keyup', 'alt+3', function(){
		mergeLine();
		splitByPeriod();
	});
	
});

function clear()
{
	$('#source').val("").focus();
}

function mergeLine()
{
	$('#source').val( $('#source').val().replaceAll('\n', ' ') );
}

function splitByPeriod()
{
	$('#source').val( $('#source').val().replaceAll('[.] *', '.\n\n') );
}

