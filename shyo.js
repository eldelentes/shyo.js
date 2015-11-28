var $header = $('#shyo');

(function($) {

    $.fn.shyo = function() {
    	this.each(function() {
    		// var y = $header.data("scroll");
    		window.menuRemovePoint = $header.data("scroll");
    		$(window).scroll(function(e){
    			e.preventDefault();
    			var windowsTop = $(this).scrollTop();
    			if (windowsTop < menuRemovePoint){
    				$header.removeClass('shyo-up'); // Show
			      	// menuRemovePoint = $header.data("scroll");		
			   	}
			   	else {
			    	$header.addClass('shyo-up'); // Hide
			    	menuRemovePoint = windowsTop;
			   	}
			   	if (windowsTop == 0) {
			   		menuRemovePoint = 0;
			   	};
    		});
		});
    }

}(jQuery));


$(window).mousemove(function(e) {
	e.preventDefault();
	var windowsTop = $(window).scrollTop();
	var extraHoverArea = 100;
	var hoverValue = $header.outerHeight() + extraHoverArea;
	var hoverArea = windowsTop + hoverValue;
	var notHoverArea = windowsTop - (windowsTop/2);
	var mouseY = e.pageY;
	(function(e) {
		if ($header.hasClass('shyo-up') && mouseY < hoverArea) {
			$header.addClass('shyo-normal');
			$header.removeClass('shyo-up');
		} else {
			if ($header.hasClass('shyo-normal') && mouseY > hoverArea && windowsTop !== 0) {
				$header.addClass('shyo-up');
				$header.removeClass('shyo-normal');
			};
		};
	})();
});
