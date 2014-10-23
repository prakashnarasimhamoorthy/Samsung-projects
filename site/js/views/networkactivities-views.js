var	NetworkActivitiesView = Backbone.View.extend({
	el: '#network-activities-feed',
	initialize: function(attrs) {
		this.tpl =  attrs.tpl;
		this.callback =  attrs.callback;
		var self = this;
		templateLoader.load("networkactivities",
			[   this.tpl,
				'NetworkActivitiesPeopleMobileView',
				'NetworkActivitiesCommunitiesMobileView'
			],
			function (){
				self.render();
				if (typeof self.callback == 'function') self.callback();
			}
		);
	},

	render: function() {
		var template = templateLoader.templates[this.tpl];
		var peopleMobile = templateLoader.templates['NetworkActivitiesPeopleMobileView']();
		var communitiesMobile = templateLoader.templates['NetworkActivitiesCommunitiesMobileView']();
		var data = this.model.toJSON();
		var content = template(
			{   data : data,
				people_mobile: peopleMobile,
				communities_mobile: communitiesMobile
			}
		);
		this.$el.html(content);


		$('.popup').tooltip();

		video.init();

		$('.scroll-items').each(function (){
			var myScroll = new IScroll('#' + $(this).attr('id'), {
				//snap: '.block-items',
				scrollX: true,
				scrollY: false
			});
		});

		$('.form-control').click(function (){
		    $(this).hide().next().show();
		}).first().click();

		$('.form-expanded .btn-cancel').click(function (){
			$(this).parents('.form-expanded').hide().prev().show();
			return false;
		});
	}
});
