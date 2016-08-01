$(document).ready(function() {
	$("#btnContent").click(function() {
		$('#output').load('temp.html');
	});
	$('#btnjson').click(function() {
		$.getJSON('tempdata.json', function(data) {
			console.log(data);
			$('#output').html('');
			$.each(data, function(key, val) {
				$('#output').append("<div class='post'>" + val.name + "<BR>" + val.age + "<BR>" + val.dob + "</div>");
			});
			$(".post:even").css("background-color", "#dddddd");
			$(".post:odd").css("background-color", "#bbbbbb");
		});
	});
	$('#btnpostajax').click(function() {
		//$('#output').html('sending..');
		//$.post('result.php',{name:"Mike",age:344})
		//.done(function(data){
		//console.log(data);
		//});
		//$.ajax({
		//method:"POST",
		//url:"result.php",
		//data: {name:"John" , age:50}
		//})
		//.done(function(data){
		//console.log(data);
		//$('#output').html(data);
		//});
		
		$.ajax({
			url: "tempdata.json",
			dataType: "text",
			success: function(data) {
				var json = $.parseJSON(data);
				console.log(json);
				$.each(json, function(key, val) {
					$('#output').append("<div class='post'>" + val.name + "<BR>" + val.age +
						"<BR>" + val.dob + "</div>");
				});
			}
		});
	});
	/*
	$(".box").click(function() {
	$(this).children().animate({
	opacity : 0.55,
	left : "+=150",
	width : "150%",
	fontSize : "24px"
	}, "slow", function() {
	$(this).parent().css({
	"background-color" : "#000000",
	"color" : "#ffffff"
	});
	$(this).animate({
	left : "-=150"
	});
	});
	});
	$(".box1").click(function() {
	$(this).children().slideToggle("slow", function() {
	$(this).parent().css({
	"background-color" : "#000000",
	"color" : "#ffffff"
	});
	});
	});
	$("tr:even").css("background-color", "#bbf");
	$("a").click(function(event) {
	event.preventDefault();
	console.log($(this));
	$("#output").html("the link you clicked was going to " + $(this).attr('href'));
	});
	$("#show").click(function() {
	$(".main").fadeIn(1000);
	});
	$("#hide").click(function() {
	$(".main").fadeOut(1000);
	});
	*/
	/*TRAVERSE
	console.log($("#myFrame").contents());
	$("li").last().css("background-color","#000000");
	$("#myFrame").contents().find("div").css("background-color","red");
	$('#arrayme').click(function(){
	console.log($(".one").children().toArray());
	});
	$(".one").find(".four").css("border","1px solid green");
	*/
});
