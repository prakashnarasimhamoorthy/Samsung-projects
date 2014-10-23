var	LibrarySetupView = Backbone.View.extend({
	initialize: function(attrs){
		this.view = attrs.view;
		this.render();
	},

	render : function(){
		var self = this;
		templateLoader.load("librarysetup", [ this.view ],
			function () {
				self.renderLibrarySetup();
				self.commonLogic();
			}
		);
	},

	renderLibrarySetup: function() {
		var content = new ContentView({template: this.view });
	},

	commonLogic: function()  {
		$('#sub-menu').hide();
		bgUtil.render();
		placeholder.init();
		checkbox.init();

		$(function () {
			$('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
			$('.tree li.parent_li > span').on('click', function (e) {
				var children = $(this).parent('li.parent_li').find(' > ul > li');
				if (children.is(":visible")) {
					children.hide('fast');
					$(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
				} else {
					children.show('fast');
					$(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
				}
				e.stopPropagation();
			});
		});
	}
});
