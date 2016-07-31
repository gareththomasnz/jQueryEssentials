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
		
		$("#myInput").change(function(){
			console.log($(this).val());
			console.log($("#checkbx"));
			console.log($("#checkbx").is(":checked"));
			if($(this).val()=='yes'){$("#checkbx").prop("checked", true);}
			else{$("#checkbx").prop("checked", false);}
			});
	 
	
});