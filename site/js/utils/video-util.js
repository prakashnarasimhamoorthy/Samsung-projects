var video = {
	init: function (){
		$('video').click(function () {
			$this = $(this);
			$this.next().hide();
			if ($this.attr('controls')) $this.removeAttr('controls');
			else                        $this.attr('controls', '');

			if (this.paused == false) this.pause();
			else                      this.play();
		}).removeAttr('controls');
		$('.play-btn').click(function () {
			var $video = $(this).hide().prev();
			$video.attr('controls', '');
			$video[0].play();
		});
	}
}