
String.prototype.replaceAll = function(s1, s2){   
	return this.replace(new RegExp(s1,"gmi"), s2);   
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
		setTimeout("$('#gt-form').submit();", 500);
	});


	$('#source').bind('keyup', 'esc', function(){
		clear();
	}).dblclick(function(){
		//clear();
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
	$('#source').val( $('#source').val().replaceAll('(e)[.]?(g)[.]?', '$1$2') );
	$('#source').val( $('#source').val().replaceAll('(fig|eq|no|vol|dr)[.]', '$1') );
	//$('#source').val( $('#source').val().replaceAll('(eq)[.]', '$1') );
	//$('#source').val( $('#source').val().replaceAll('(no)[.]', '$1') );
	//$('#source').val( $('#source').val().replaceAll('(vol)[.]', '$1') );
	for(var i=0;i<100;i++) 
		$('#source').val( $('#source').val().replaceAll('[(]([0-9a-zA-Z. ]*)[.]([0-9a-zA-Z. ]*)[)]', '($1$2)') );
	$('#source').val( $('#source').val().replaceAll('[.][^0-9] *', '.\n\n') );
	
	//$('#source').val( $('#source').val().replaceAll('[(](.*)[.]\n\n(.*)[)]', '($1.$2)') );
}

