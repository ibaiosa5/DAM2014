/*$(function() {
	$("footer").load('include/commonFooter.html');
});*/

//EVENTOS
$('#index').bind( "tap", function( event ) {
	$('#eventshow').text('tap');
	console.log('tap');
});
$('#index').bind( "taphold", function( event ) {
	$('#eventshow').text('taphold');
	console.log('taphold');
});
$('#index').bind( "swipe", function( event ) {
	$('#eventshow').text('swipe');
	console.log('swipe');
});
$('#index').bind( "swipeleft", function( event ) {
	$('#eventshow').text('swipeleft');
	console.log('swipeleft');
});
$('#index').bind( "swiperight", function( event ) {
	$('#eventshow').text('swiperight');
	console.log('swiperight');
});
$(document).bind( "orientationchange", function( event ) {
	$('#eventshow').text('orientationchange');
	this.value('orientationchanged');
});
$('#index').bind( "scrollstart", function( event ) {
	$('#eventshow').text('scrollstart');
	console.log('scrollstart');
});
$('#index').bind( "scrollstop", function( event ) {
	$('#eventshow').text('scrollstop');
	console.log('scrollstop');
});
$('#index').bind( "pagebeforeload", function( event ) {
	console.log('pagebeforeload');
});
$('#index').bind( "pageload", function( event ) {
	console.log('pageload');
});
$('#index').bind( "pageloadfailed", function( event ) {
	console.log('pageloadfailed');
});
$('#index').bind( "pagebeforechange", function( event ) {
	console.log('pagebeforechange');
});
$('#index').bind( "pagechange", function( event ) {
	console.log('pagechange');
});
$('#index').bind( "pagechangefailed", function( event ) {
	console.log('pagechangefailed');
});
$('#index').bind( "pagebeforeshow", function( event ) {
	console.log('pagebeforeshow');
});
$('#index').bind( "pagebeforehide", function( event ) {
	console.log('pagebeforehide');
});
$('#index').bind( "pageshow", function( event ) {
	console.log('pageshow');
});
$('#index').bind( "pagehide", function( event ) {
	console.log('pagehide');
});
$('#index').bind( "pagebeforecreate", function( event ) {
	console.log('pagebeforecreate');
});
$('#index').bind( "pagecreate", function( event ) {
	console.log('pagecreate');
});
$('#index').bind( "pageinit", function( event ) {
	console.log('pageinit');
});





$("#index, #page2-view1, #page2-view2").bind( "pagebeforecreate", function( event ) {
	/*var htmlFooter = "<h4>This is my footer</h4>"+
				"<div data-role='navbar' data-iconpos='top'>"+
					"<ul><li><a href='#' data-icon='star'>One</a></li>"+
					"<li><a href='#' data-icon='gear'>Two</a></li>"+
					"<li><a href='#' data-icon='back'>Three</a></li></ul>"+
				"</div>";
	$("footer").html(htmlFooter);*/

	$("footer").load("include/commonFooter.html",function(){
		$("footer").trigger("create");
	});

});