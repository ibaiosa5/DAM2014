$(function() {
	$.each(Modernizr.inputtypes, function(key, value){ 
		if (value != true)
			$("#detection").append("<p>input type: "+key+" - NOT SUPPORTED: "+value+"</p>");
	});

	Modernizr.load({
		test: Modernizr.inputtypes.datetime,
		nope: ""
	});
});