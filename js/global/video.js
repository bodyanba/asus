;
(function($) {
	$.fn.asus_video = function(main_body) {
		var video_html = '<div id="videoplayer"><div class="videoclose"></div></div>';
		main_body.append(video_html);
		$("#videoplayer").find(".videoclose").click(function(){
			$("#videoplayer").fadeOut(500);
			$("#videoplayer").find(".player").remove();
		});
		return this.each(function(idx) {
			var video_main = $(this);
			var main_img =$(this).attr("data-img");
			var icon_img = $(this).attr("data-icon");
		//	$(this).append('<img class="mainimg" src="'+main_img+'">');
		//	$(this).append('<div class="playicon"><img src="'+icon_img+'"></div>');
			$(this).click(function(e){
				e.preventDefault ();
				var videolink = $(this).attr("href");
				var iframe = $('<iframe class="player" src="'+videolink+'?rel=0&amp;wmode=opaque&amp;autoplay=1&amp;showinfo=0&amp;modestbranding=1" frameborder="0" width="100%" height="100%" allowfullscreen=""></iframe>');
				$("#videoplayer").append(iframe).fadeIn(500);
			});
		})
	} 
})(jQuery);