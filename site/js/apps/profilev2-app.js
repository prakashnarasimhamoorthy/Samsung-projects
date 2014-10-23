function profileActivitiesAutoloadV2Init(self){
	var $el = $('.activities-autoload');
	var autoloadTemplate = "ProfileActivitiesAutoloadV2View";
	templateLoader.load('profile', [autoloadTemplate],
		function () {
			var content = templateLoader.templates[autoloadTemplate]({id: self.id});
			$el.append(content);
			$('.load-spinner').hide();
			self.id += 4;

			placeholder.init();

			//Comments init
			$('.form-control').click(function (){
				$(this).hide().next().show();
			});

			$('.form-expanded .btn-cancel').click(function (){
				$(this).parents('.form-expanded').hide().prev().show();
				return false;
			});
			$('.form-expanded .btn-send').click(function (){
				$(this).parents('.form-expanded').hide().prev().show();
				return false;
			});

			$('.btn-comment').click(function(){
				$(this).parents().find('.comments-box').toggle();
				console.log($(this).parents().find('.comments-box'));
				return false;
			});
		}
	);
}

var profileV2App = {
	render : function() {
		var self = this;
		templateLoader.load("profile",	[ "ProfileV2View" ],
			function () {
				self.renderProfileSearchResult();
				myProfileDetailsApp.commonLogic();
			}
		);
	},

	renderProfileSearchResult: function() {
		var content = new ContentView({
			template: "ProfileV2View",
			model: profileSearchResultModel ,
			id: 0,
			callback: function (){
				var tab = commonApp.props.trofileSearchResultTab;
				commonApp.props.trofileSearchResultTab = null;

				if (tab != null) {
					$('a[href="#profile-' + tab + '"]').tab('show');
				}

				var self = this;
				profileActivitiesAutoloadV2Init(self);
				var canScroll = true;
				$(window).scroll(function() {
					if(canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
						canScroll = false;
						$('.load-spinner').show();
						setTimeout(function () {
							profileActivitiesAutoloadV2Init(self);
							canScroll = true;
						}, 1000);
					}
				});
			}
		});

		var subMenuView = new SubMenuView({current: "Network" });
		var networkMenuView = new MenuView({ model : Collections.networkMenu, el: '.sub-menu-links' });
		appUtil.makeSubNavPillActive('li-people');

		var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
	}
}
