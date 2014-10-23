var checkbox = {
	init: function (){
		this.applyTo('input[type="checkbox"]');
	},
	// ability to apply checkbox-behaviour to custom elms
	applyTo: function(selector)
	{
		$(selector).checkbox({
			checkedClass: 'fa fa-check',
			uncheckedClass: 'fa fa-empty'
		});
	}
}


