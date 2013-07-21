jQuery(function($){
	$('.header-social a[href]').hover(function(){
		tip = $(this).find('.tip');
		tip.show();
		$(this).attr('title', ''); // we don't want two tooltips so we clear the title attribute before it's shown
	}, function() {
		tip.hide();
	}).mousemove(function(e) {
		var mousex = e.pageX;
		var mousey = e.pageY;
		var tipWidth = tip.width();
		var tipHeight = tip.height();
		var tipX = mousex - tipWidth / 2 - 10; // 10=padding
		var tipY = mousey + tipHeight;
		tip.css({ top: tipY, left: tipX });
	});
});
