var commonApp = {
	user: {},
	props: {
		searchType: 'fa-user'
	},
	render : function(callbackView) {
		var self = this;
		templateLoader.load(
			"common",
			[   "ErrorView",
				"MobileMenuView",
				"NavBarView",
				"TopLinksUnauthorized",
				"TopLinksAuthorized",
				"LoggedOutHeaderView",
				"SubMenuView",
				"ToolboxView"
			],
			function () {
				//Common Menus
				//self.renderFixedMenu();
				$('title').html('IEEE - Professional Productivity &amp; Collaboration');

				self.renderNavBar();
				self.renderFooter();

				//Callbacks
				if (callbackView === undefined ) {
					appUtil.showErrMsg("content");
					return;
				}else if (typeof callbackView.render === 'function') {
					callbackView.render();
				} else if($.isArray(callbackView)){
					$.each(callbackView, function(index, value){
						if (value.render === undefined) {
							appUtil.showErrMsg("content");
							return;
						}
						value.render();
					});
				} else {
					appUtil.showErrMsg("content");
					return;
				}
			}
		);
	},

	renderFixedMenu: function (){
		$headerMenu = $('#header-menu');
		$banner = $('#banner');
		$mobileMenu = $('#mobile-menu');

		$(window).scroll(function () {
			if ($(document).scrollTop() > 220 || $mobileMenu.hasClass('mm-opened')) {
				if (!$headerMenu.hasClass('fixed-header-menu')) {
					$headerMenu.hide();
					$banner.addClass('fixed-menu-visible');
					$headerMenu.addClass('fixed-header-menu');
					$headerMenu.slideDown('fast');
				}
			} else {
				if ($headerMenu.hasClass('fixed-header-menu')) {
					$banner.removeClass('fixed-menu-visible');
					$headerMenu.removeClass('fixed-header-menu');
				}
			}
		});
	},

	renderNavBar: function(){
		var sitesMenuView = new MenuView({model : Collections.sitesMenu,  el: '.sites-menu-links' });
		var $hiddenOnFixed = $('.hidden-on-fixed');
		if (commonApp.props.isLoggedOut != true ) {
			$('#logo img').attr('src', 'assets/img/ppct_logo.png');

			var headerIconLinksView = new NotificationsView({tpl: "HeaderIconLinksView", el: '.profile-header-nav-box',	model: Models.headerProfileLinks });
			headerIconLinksView.render();
			var headerIconLinksView = new NotificationsView({tpl: "HeaderIconLinksFixedView", el: '.profile-header-fixed-nav-box',	model: Models.headerProfileLinks });
			headerIconLinksView.render();
			var topLinks = templateLoader.templates["TopLinksAuthorized"];
			$hiddenOnFixed.html(topLinks);
		} else {
			$('#logo img').attr('src', 'assets/img/landing_page/ppct_logo-marketing.png');

			mmenu.init(true);
			$(window).unbind('scroll');

			//var header = templateLoader.templates["LoggedOutHeaderView"];
			//$('.header-search-box').html(header);
			//$('.mobile-search-wrap').html('');

			$('.header-search-box').html('');
			headerProfileMobileSearchView.render();

			$('#sub-menu').hide();

			$('.profile-header-nav-box, .profile-header-fixed-nav-box').html('');
			var topLinks = templateLoader.templates["TopLinksUnauthorized"];
			$hiddenOnFixed.html(topLinks);
			commonApp.props.isLoggedOut = false;
		}
	},

	renderFooter: function(){
		var footerMenuView = new MenuView({model : Collections.footerMenu, el: '.footer-menu-links' });
	}
};
