var myProfileDetailsApp = {
	render : function(){
		var self = this;
		templateLoader.load("profile",	[ "MyProfileView" , "MyProfileInterestsModalView" ],
			function () {
				self.renderMyProfile();
				self.commonLogic();
				appUtil.makeSubNavPillActive('li-details');
			}
		);
	},

	renderMyProfile: function() {
		var content = new ContentView({template: "MyProfileView", model: myProfileModel });

		var subMenuView = new SubMenuView({current: "Profile" });
		var profileMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });

		var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
	},

	commonLogic: function()  {
		headerProfileSearchView.render();
		headerProfileMobileSearchView.render();

		$('.add-new-interest').click(function(){
			templateLoader.load("profile" , ["MyProfileInterestsModalView"],
				function () {
					var content = templateLoader.templates["MyProfileInterestsModalView"]();

					$('#popup').html(content);
					$('#popup').modal('show');
					$('.modal-backdrop').css('background-color', 'transparent');

					$('.close').click(function (){
					    $('.modal').modal('hide');
					    return false;
				    });

					var self = this;
					$('a[href="#all-disciplines"]').on('shown.bs.tab', function (e) {
						var myScroll = self.myScroll;
						if (myScroll != undefined) {
							myScroll.destroy();
							myScroll = null;
						}
						myScroll = new IScroll('#alphabet-scroller', {
							//snap: '.block-items',
							scrollX: true,
							scrollY: false
						});
					});

					$('.alphabet-list li a').click(function(){
						var item = $(this);

						item.parent('li').toggleClass('active');

						return false;
					});

					$('.alphabet-list-mobile li a').click(function(){
						var item = $(this);

						item.parent('li').toggleClass('active');

						return false;
					});

					$('#search-tab .input-wrap input').keyup(function () {
						if ($(this).val()) {
							$('.results-on-typing').show();
							$('.personalize-experience').hide();
						}
						else {
							$('.results-on-typing').hide();
							$('.personalize-experience').show();
						}
					});

					$('.results-list li a').click(function(){
						var item = $(this);
						var itemIcon = item.find('.fa');

						item.parent('li').toggleClass('active');

						return false;
					});
				}
			);
		});

		$('.open-publications-modal').click(function(){
			templateLoader.load("profile" , ["MyProfilePublicationsSearchModalView"],
				function () {
					var content = templateLoader.templates["MyProfilePublicationsSearchModalView"]();

					$('#popup').html(content);
					$('#popup').modal('show');
					$('.modal-backdrop').css('background-color', 'transparent');

					$('.close').click(function (){
					    $('.modal').modal('hide');
					    return false;
				    });

				    $('.btn-search').click(function (){
						new MyProfilePublicationsEmptyModalView({});
					});
				}
			);
		});

		$('.show-all .btn').click(function (){
			$(this).parent().hide().prev().toggle(200);
			return false;
		});

		//alert(commonApp.props.profileDetailStep);
		if (commonApp.props.profileInterests == true) {
			commonApp.props.profileInterests = null;
			$('.add-new-interest').click();
		}
	}
};

var profileSearchResultApp = {
	render : function() {
		var self = this;
		templateLoader.load("profile",	[ "ProfileSearchResultView" ],
			function () {
				self.renderProfileSearchResult();
				myProfileDetailsApp.commonLogic();
			}
		);
	},

	renderProfileSearchResult: function() {
		var content = new ContentView({template: "ProfileSearchResultView", model: profileSearchResultModel });

		var subMenuView = new SubMenuView({current: "Network" });
		var networkMenuView = new MenuView({ model : Collections.networkMenu, el: '.sub-menu-links' });
		appUtil.makeSubNavPillActive('li-people');

		var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
	}
}

function profileActivitiesAutoloadInit(self){
	var $el = $('.activities-autoload');
	var autoloadTemplate = "ProfileActivitiesAutoloadView";
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

var profileActivitiesApp = {
	render : function() {
		var self = this;
		templateLoader.load("profile",	[ "ProfileActivitiesView" ],
			function () {
				headerProfileSearchView.render();
				headerProfileMobileSearchView.render();
				var subMenuView = new SubMenuView({current: "Profile" });
				var profileMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('li-activities');

				self.renderProfileActivities();
			}
		);
	},

	renderProfileActivities: function() {
		var content = new ContentView({
			template: "ProfileActivitiesView",
			id: 0,
			callback: function (){

				filesTypeAhead.init();

				var self = this;
				profileActivitiesAutoloadInit(self);
				var canScroll = true;
				$(window).scroll(function() {
					if(canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
						canScroll = false;
						$('.load-spinner').show();
						setTimeout(function () {
							profileActivitiesAutoloadInit(self);
							canScroll = true;
						}, 1000);
					}
				});
			}
		});

	}
};

var profileConnectionsApp = {
	render : function() {
		var self = this;
		templateLoader.load("profile",	[ "ProfileConnectionsView", "ProfileDeclinedConnectionsView" ],
			function () {
				self.renderMyProfileConnections();
				myProfileDetailsApp.commonLogic();
				appUtil.makeSubNavPillActive('li-connections');
			}
		);
	},

	renderMyProfileConnections: function() {
		var content = new ContentView({template: "ProfileConnectionsView", model: profileConnectionsItems });

		var subMenuView = new SubMenuView({current: "Profile" });
		var profileMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });

		if (commonApp.props.triggermyProfileConnectionsPendig) {
			commonApp.props.triggermyProfileConnectionsPendig = false;
			$('a[href="#pending-requests"]').tab('show');
		}

		placeholder.init();
		checkbox.init();

		var declinedPopupView = new DeclinedPopupView();

		$('.fa-search.show-input').click(function(){
			$this = $(this);
			$this.parents('.animated-search').addClass('visible');
  			$this.parents('.animated-search').animate({
			    width: "100%"
			}, 1000, function() {
    			$this.siblings('.fa-times').show();
  			});
			$this.next('input').show();
			//$this.removeClass('show-input');
		});
		$('.animated-search .fa-times').click(function(){
			$this = $(this).siblings('.fa-search');

			$this.siblings('.fa-times').hide();
			$this.parents('.animated-search').animate({
			    width: "35px"
			}, 1000, function() {
    			$this.parents('.animated-search').removeClass('visible');
  			});
		});

		$('.btn-remove-from-saved-for-later').click(function(){
			var thisBtn = $(this),
				thisBox = thisBtn.parents('.results-item'),
				thisName = thisBox.find('.title .name').html(),
				popupBox = thisBtn.parents('.results-item').find('.declined-popup-wrap');

			thisBox.addClass('active');
			declinedPopupView.render(popupBox);
			popupBox.find('.person-name').html(thisName);

			return false;
		});
	}
};

var profilePublicApp = {
	render : function() {
		var self = this;
		templateLoader.load("profile",	[ "ProfilePublicView" ],
			function () {
				self.renderProfilePublic();
				//myProfileDetailsApp.commonLogic();
				//appUtil.makeSubNavPillActive('li-details');
			}
		);
	},
	renderProfilePublic: function() {
		$('title').html('Thomas Griffin | PPCT');

		var content = new ContentView({template: "ProfilePublicView", model: myProfileModel });

		//var subMenuView = new SubMenuView({current: "Profile" });
		//var profileMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });

		var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
	}
}

var profileMaleApp = {
	render : function(){
		var self = this;
		templateLoader.load("profile",	[ "MyProfileView" , "MyProfileInterestsModalView" ],
			function () {
				self.renderMyProfile();
				myProfileDetailsApp.commonLogic();
				appUtil.makeSubNavPillActive('li-details');
			}
		);
	},

	renderMyProfile: function() {
		var content = new ContentView({template: "MyProfileView", model: maleProfileModel });

		var subMenuView = new SubMenuView({current: "Profile" });
		var profileMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });

		var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
	}
}

var profileFemaleApp = {
	render : function(){
		var self = this;
		templateLoader.load("profile",	[ "MyProfileView" , "MyProfileInterestsModalView" ],
			function () {
				self.renderMyProfile();
				myProfileDetailsApp.commonLogic();
				appUtil.makeSubNavPillActive('li-details');
			}
		);
	},

	renderMyProfile: function() {
		var content = new ContentView({template: "MyProfileView", model: femaleProfileModel });

		var subMenuView = new SubMenuView({current: "Profile" });
		var profileMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });

		var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
	}
}

var myProfilePrivacyApp = {
	render : function(){
		var self = this;
		templateLoader.load("profile",	[ "ProfilePrivacyView" ],
			function () {
				var subMenuView = new SubMenuView({current: "Profile" });
				var networkMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('li-details');
				headerProfileSearchView.render();
				headerProfileMobileSearchView.render();

				self.renderProfilePrivacy();
			}
		);
	},

	renderProfilePrivacy: function() {
		var content = new ContentView({template: "ProfilePrivacyView",
			callback: function (){
				var visibilityDropdown = $('.profile-visibility-select');
				var visibilityDropdownText = visibilityDropdown.find('span');
				var masterDropdown = $('.master-visibility-select-menu');
				var targetSelect;
				var targetSelectText;
				var targetSelectLi;

				$(visibilityDropdown).click(function(){
					if (visibilityDropdown.hasClass('disabled')){
						return false;
					}
				});

				$('.master-visibility-select-menu a').click(function() {
					targetSelect = $(this);
					targetSelectText = targetSelect.find('span').html();
					targetSelectLi = targetSelect.parents('li');

					if (targetSelect.hasClass('custom-selection')) {
						visibilityDropdown.each(function( index ) {
							$(this).removeClass('disabled');
							$(this).attr("data-toggle", "dropdown");
						});
						masterDropdown.find('li.active').removeClass('active');
						targetSelectLi.addClass('active');
						$('.master-visibility-select').find('span').html(targetSelectText);
						masterDropdown.dropdown('toggle');
						return false;
					} else {
						$('#visibility-settings-modal').modal({	backdrop: false	});
						masterDropdown.dropdown('toggle');
						return false;
					}
				});

				$('.btn-yes-confirm').click(function(){
					if(!targetSelectLi.hasClass('active')) {
						masterDropdown.find('li.active').removeClass('active');
						targetSelectLi.addClass('active');
						$('.master-visibility-select').find('span').html(targetSelectText);

						visibilityDropdown.each(function( index ) {
							$(this).addClass('disabled');
							$(this).removeAttr("data-toggle");
						});
						visibilityDropdownText.html(targetSelectText);
					}
				});

				$('.profile-visibility-item ul.dropdown-menu a').click(function(){
					var customSelectLink = $(this);
					var customSelectLinkText = customSelectLink.find('span').html();
					var customSelectLinkLi = customSelectLink.parents('li');
					var customSelectLinkMenu = customSelectLink.parents('ul.dropdown-menu');

					customSelectLinkMenu.find('.active').removeClass('active');
					customSelectLinkLi.addClass('active');
					customSelectLinkMenu.siblings('.profile-visibility-select').find('span').html(customSelectLinkText);
					customSelectLinkMenu.dropdown('toggle');
					return false;
				});
			}
		});
	}
};

var profilePersonalInfoApp = {
	myScroll: null,
	render : function(){
		var self = this;
		templateLoader.load("profile",	[ "ProfilePersonalInformationView" ],
			function () {
				var subMenuView = new SubMenuView({current: "Profile" });
				var networkMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('li-details');
				headerProfileSearchView.render();
				headerProfileMobileSearchView.render();

				self.renderProfilePersonalInfo();
			}
		);
	},

	renderProfilePersonalInfo: function() {
		var content = new ContentView({template: "ProfilePersonalInformationView",
			callback: function() {
				checkbox.init();
				//interestsTypeAhead.init();
				formTagsTypeAhead.init();
				$('.alphabet-list li a').click(function(){
					var item = $(this);

					item.parent('li').toggleClass('active');

					return false;
				});

				$('.alphabet-list-mobile li a').click(function(){
					var item = $(this);

					item.parent('li').toggleClass('active');

					return false;
				});

				// $('#search-tab .input-wrap input').keyup(function () {
				// 	if ($(this).val()) {
				// 		$('.results-on-typing').show();
				// 		$('.personalize-experience').hide();
				// 	}
				// 	else {
				// 		$('.results-on-typing').hide();
				// 		$('.personalize-experience').show();
				// 	}
				// });

				$('.results-list li a').click(function(){
					var item = $(this);
					var itemIcon = item.find('.fa');

					item.parent('li').toggleClass('active');

					return false;
				});

				var self = this;
				$('a[href="#all-disciplines"]').on('shown.bs.tab', function (e) {
					var myScroll = self.myScroll;
					if (myScroll != undefined) {
						myScroll.destroy();
						myScroll = null;
					}
					myScroll = new IScroll('#alphabet-scroller', {
						scrollX: true,
						scrollY: false
					});
				});
			}
		});
	}
};

var myProfileAsApp  = {
	render : function(){
		var self = this;
		templateLoader.load("profile",	[ "MyProfileAsView" , "MyProfileInterestsModalView" ],
			function () {
				self.renderMyProfile();
				myProfileDetailsApp.commonLogic();
				appUtil.makeSubNavPillActive('li-details');
			}
		);
	},

	renderMyProfile: function() {
		var content = new ContentView({template: "MyProfileAsView", model: myProfileModel });

		var subMenuView = new SubMenuView({current: "Profile" });
		var profileMenuView = new MenuView({ model : Collections.profileMenu, el: '.sub-menu-links' });

		var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
	}
}

/*/ Inserted by BP Aug 6
// Model
// var SettingsProfileView = Backbone.View.extend({
//	el: '.profile-view-content',
//	render: function($el){
//		templateLoader.load("profile", [ "ProfileSearchResultView" ],
//			function (){
//				var content = templateLoader.templates["ProfileSearchResultView"]({data:profileSearchResultModel.toJSON()});
//				$('.profile-view-content').html(content);
//				var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
//			}
//		);
//	}
//});

var MyProfileAsView = Backbone.View.extend({
	el: '.my-profile-as-view-content',
	render: function($el){
		templateLoader.load("profile", [ "MyProfileAsView" ],
			function (){
				var content = templateLoader.templates["MyProfileAsView"]({data:myProfileModel.toJSON()});
				$('.my-profile-as-view-content').html(content);
				var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
			}
		);
	}
});

var ProfilePrivacyView = Backbone.View.extend({
	el: '.profile-privacy-view-content',
	render: function($el){
		templateLoader.load("profile", [ "ProfilePrivacyView" ],
			function (){
				var content = templateLoader.templates["ProfilePrivacyView"];
				$('.profile-privacy-view-content').html(content);
				var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
			}
		);
	}
});

var ProfilePersonalInformationView = Backbone.View.extend({
	el: '.profile-personal-information-view-content',
	render: function($el){
		templateLoader.load("profile", [ "ProfilePersonalInformationView" ],
			function (){
				var content = templateLoader.templates["ProfilePersonalInformationView"];
				$('.profile-personal-information-view-content').html(content);
				var interests = new InterestsView ({ el: ".interests_tags",	model: interestsModel });
			}
		);
	}
});

// End Inserted by BP Aug 6 /**/
