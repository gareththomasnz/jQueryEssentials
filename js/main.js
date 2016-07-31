$(document).ready(function() {

        
                    var holder;
                    $('.btn').click(function() {
                    	console.log('clicked');
                    });
                    
                    $("img").mouseenter(function() {
                    		$(this).css('border-color', 'blue')
                    		console.log('over image');
                    	},
                    	function() {
                    		$(this).css('border-color', 'red')
                    	});
                    $('p').mouseenter(function() {
                    	holder = $(this).html();
                    	console.log(holder);
                    	$(this).html('on top');
                    })
                    $('p').mouseleave(function() {
                    	$(this).html(holder);
                    })
                    
                    	console.log(location.pathname.split('/')[1]);
	$('nav a[href^="' + location.pathname.split('/')[1] + '"]').addClass('active');
        
});