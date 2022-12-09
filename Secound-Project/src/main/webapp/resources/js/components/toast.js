 function toast(msg, timer) {
		if (!timer) { timer = 3000; }
		var $elem = $("<div class='toastWrap'><span class='toast'>" + msg + "<b></b></span></div>");
		$("#teet").append($elem); //top = prepend, bottom = append
		$elem.slideToggle(100, function() {
			$('.timerWrap', this).first().outerWidth($elem.find('.toast').first().outerWidth() - 10);
			if (!isNaN(timer)) {
				fillWidth($elem.find('.timer').first()[0], timer);
				setTimeout(function() {
					$elem.fadeOut(function() {
						$(this).remove();
					});
				}, timer);			
			}
		});
	}
	
	function fillWidth(elem, timer, limit) {
	if (!timer) { timer = 3000; }	
	if (!limit) { limit = 100; }
	var width = 1;
	var id = setInterval(frame, timer / 100);
		function frame() {
		if (width >= limit) {
			clearInterval(id);
		} else {
		}
	}
};