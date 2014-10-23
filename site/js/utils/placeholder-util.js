var placeholder = {
	init: function (){
		$('input[placeholder]').each(function () {
			var $this = $(this);
			var placeholder = $this.attr('placeholder');
			if ($this.val() == '') $this.val(placeholder);
			$this
				.on('focus', function () {
					$this.attr('placeholder', '');
					if ($this.val() == placeholder) {
						$this.val('');
					}
				})
				.on('blur', function () {
					$this.attr('placeholder', placeholder);
					if ($this.val() == '') {
						$this.val(placeholder);
					}
				});
		});
	}
}
