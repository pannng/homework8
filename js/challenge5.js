/* This code will happn as soon as the js file is loaded */

/* Get all of the thumbnail images*/
var imgs = $("img");
var msg = "Hover over an image below to display the image and the alt text"

$("img").on('mouseover', function(){
    console.log("mouseover")
	$('#display').css("background-image","url('"+this.src+"')");
	$('#display').html($(this).attr("alt"));
	})

$("img").focus(function(){
    console.log("focus")
	$('#display').css("background-image","url('"+this.src+"')");
	$('#display').html($(this).attr("alt"));
    })

$("img").on('mouseleave', function(){
    console.log("mouseleave")
	$('#display').css("background-image","url('')");
	$('#display').html(msg);
	})

$("img").on('blur', function(){
    console.log("blur")
	$('#display').css("background-image","url('')");
	$('#display').html(msg);
    })
