var landingPageApp = {
	render : function(){
		var self = this;
		templateLoader.load("landingpage",	[ "LandingPageView"	],
			function () {
				self.renderLandingPage();
				self.commonLogic();
			}
		);
	},

	renderLandingPage: function() {
		mmenu.init(true);
		new ContentView({
			template: "LandingPageView",
			callback: function () {
				$('.landing-page-menu a[data-toggle="tab"], \
				   .nav-xs            a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
					var tabName = $(e.target).html(); // activated tab
					$('.nav-xs .dropdown-toggle').html(tabName + ' <i class="fa fa-angle-down"></i>');
				});

				var view = commonApp.props.landingPageView;
				switch (view) {
					case null: //overview
						$('.landing-page-info a[data-toggle="tab"]').on('shown.bs.tab', function () {
							var scrollTopOffset = $('.landing-page-menu').offset().top;

							if ($(document).width() < 768) scrollTopOffset = '0';

							$('body').animate({
								//scrollTop:
								scrollTop: scrollTopOffset
							}, 200);
						});
						break;
					case 'networking':
					case 'researching':
					case 'authoring':
					case 'collaborating':
						$('a[href=".' + view + '-tab"]').tab('show');
						break;
					default:
						commonApp.render(appUtil.custErrMsgView('Path "landingpage-' + view + '" was not found!'));
				}
			}
		});
	},

	commonLogic: function()  {
		var promoimages = [
			"home_page_bg.jpg",
			"home_page_bg_2.jpg",
			"home_page_bg_3.jpg",
			"home_page_bg_4.jpg",
			"home_page_bg_5.jpg"
		];

		var randomimage = promoimages[Math.floor(Math.random() * promoimages.length)];

		$('.landing-page-promo-img').attr('src', 'assets/img/landing_page/'+randomimage);
	}
};
