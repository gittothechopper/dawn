var app = (function () { 

	function _slider (slider) {
		if (typeof window.eDetail == 'function') {
			window.eDetail(slider);
		}
	};

	function _flexslider () {
		$('.flexslider').flexslider({
			animation: false,
			slideshow: false,
			animationSpeed: 250,
			controlNav: false,
			directionNav: false,
			animationLoop: false,
			start: function (slider) {
				slider(slider);
			},
			after: function (slider) {
				slider(slider);
			},
			end: function (slider) {
				slider(slider);
			}
		});
	};

	function init () {
		$(document).on('touchmove', function (e) { e.preventDefault(); });
		_flexslider();
	};

	return {
		init: init
	}
}());

$(function () {
	app.init();
});