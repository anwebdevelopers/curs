

_sr(function() {
    _sr('form[name="SR_form_372533_80"]').find('div#sr-preload_').prop('id', 'sr-preload_372533_80');
    _sr('#sr-preload_372533_80').css({'width':parseInt(_sr('form[name="SR_form_372533_80"]').width() + 'px'), 'height':parseInt(_sr('form[name="SR_form_372533_80"]').height()) + 'px', 'line-height':parseInt(_sr('form[name="SR_form_372533_80"]').height()) + 'px'}).show();
    if(_sr('form[name="SR_form_372533_80"]').find('input[name="script_url_372533_80"]').length) {
        _sr.ajax({
            url: _sr('input[name="script_url_372533_80"]').val() + '/' + (typeof document.charset !== 'undefined' ? document.charset : document.characterSet),
            dataType: "script",
            success: function() {
                _sr('#sr-preload_372533_80').hide();
            }
        });
    }
});

$(function() {


	//Выравнивание блоков по высоте

	$(".program__item").equalHeights();
	$(".fear__title-box").equalHeights();
	$(".happy__text-box-item-title").equalHeights();
	$(".happy__text-box-item-text").equalHeights();
	$(".reviews__item").equalHeights();
	


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});




