var InterestsView = Backbone.View.extend({
	template: _.template('<i class="hidden"></i>\
		<% _.each (interests, function(interest) { %>\
			<div class="interest pull-left">\
				<%= interest.title %>\
				<i class="remove fa fa-times"></i>\
			</div>\
		<% }); %>\
		<div class="btn btn-block pull-left interest-counter" >+<%= more %></div>\
	'),

	initialize: function() {
		this.render();
	},

	render: function(){
		var data = this.model.toJSON();
		var content = this.template(data);
		this.$el.html(content);
	}
});

var DeclinedPopupView = Backbone.View.extend({
	render: function($el){
		templateLoader.load("profile", [ "ProfileDeclinedConnectionsView" ],
			function (){
				var content = templateLoader.templates["ProfileDeclinedConnectionsView"];
				$el.html(content);

				$('.btn-undo').click(function(){
					$this = $(this);
					$this.parents('.results-item').removeClass('active');
					$this.parents('.declined-popup').remove();
					return false;
				});

				$('.btn-submit').click(function(){
					$(this).parents('.results-item').remove();
					return false;
				});
			}
		);
	}
});
