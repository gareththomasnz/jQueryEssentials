$(document).ready(function() {

	//                    var holder;
	//                    $('.btn').click(function() {
	//                    	console.log('clicked');
	//                    });
	//                    
	//                    $("img").mouseenter(function() {
	//                    		$(this).css('border-color', 'blue')
	//                    		console.log('over image');
	//                    	},
	//                    	function() {
	//                    		$(this).css('border-color', 'red')
	//                    	});
	//                    $('p').mouseenter(function() {
	//                    	holder = $(this).html();
	//                    	console.log(holder);
	//                    	$(this).html('on top');
	//                    })
	//                    $('p').mouseleave(function() {
	//                    	$(this).html(holder);
	//                    })
	//                    
	//                    	console.log(location.pathname.split('/')[1]);
	//	$('nav a[href^="' + location.pathname.split('/')[1] + '"]').addClass('active');

	//$('p').click(function(){
	//	console.log($(this));
	//	console.log($(this).css("background-color"));
	//	console.log($(this)[0].className);
	//	$(this).css({"background-color":"blue"}).toggleClass(); //not working?
	//});

	//    $('img').click(function(){
	//		console.log($(this)[0]);
	//		//console.log($(a).attr('href'));
	//		console.log($(this).attr('src'));
	//	});

	//$("#myInput").change(function(){
	//	console.log($(this).val());
	//	console.log($("#checkbx"));
	//	console.log($("#checkbx").is(":checked"));
	//	if($(this).val()=='yes'){$("#checkbx").prop("checked", true);}
	//	else{$("#checkbx").prop("checked", false);}
	//	});

	//$('p').click(function(){
	//       console.log($(this).text());
	//       $(this).before('before the click');
	//       $(this).after('after the click');
	//       $(this).append('appended the click');
	//       $(this).appendTo('#output');
	//       $(this).prepend('prepend the click');
	//       //$(this).replaceWith('Hello<BR>world');
	//       });
	//$('img').click(function(){
	//       console.log($(this).text());
	//       $(this).replaceWith('   what picture?   ');
	//       });

	//console.log($(".container").contents());
	//$("li").last().css("background-color", "#000000");
	//$(".container").contents().find("div").css("background-color", "red ");
	//$('#arrayme').click(function() {
	//	console.log($(".one").children().toArray());
	//});



	$(".box").click(function() {

		$(this).children().animate({opacity: 0.55, left: "+=150", width: "150%", fontSize: "24px"}, "slow", function() {
			$(this).parent().css({"background-color": "#000000","color": "#ffffff"});
			$(this).animate({left: "-=150"});
		});
	});
	$(".box1").click(function() {

		$(this).children().slideToggle("slow",
			function() {
				$(this).parent().css({"background-color": "#000000","color": "#ffffff"});
			});
	});
	$("tr:even").css("background-color",
		"#bbf");

	$("a").click(function(event) {

		event.preventDefault();

		console.log($(this));

		$("#output").html("the link you clicked was going to " +
			$(this).attr('href'));
	});
	$("#show").click(function() {
		$(".main").fadeIn(1000);
	});
	$("#hide").click(function() {
		$(".main").fadeOut(1000);
	});

	/*TRAVERSE

	console.log($("#myFrame").contents());

	$("li").last().css("background-color","#000000"
	main.js
	);

	$("#myFrame").contents().find("div").css("back
	ground-color","red");

	$('#arrayme').click(function(){

	console.log($(".one").children().toArray());

	});

	$(".one").find(".four").css("border","1px
	solid green");

	*/

});
