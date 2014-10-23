var homeApp = {
	render : function(){
		var self = this;
		templateLoader.load("home",	[ "HomeView" ],
			function () {
				self.renderHome();
				self.commonLogic();
			}
		);
	},

	renderHome: function() {
		var content = new ContentView({template: "HomeView", model: myProfileModel });

		var networkFilterActivitiesView = new MenuView({ model: Collections.homeActivitiesFilterMenu, el: '.filter-activities' });

		var filter = commonApp.props.homeFilterActivities;
		var activeFilter = filter == null ? "all" : filter;

		var toolbox = false;
		switch (activeFilter) {
			case "toolbox":
				toolbox = true;
				activeFilter = "all";
			case "all":
				new NetworkActivitiesView({ tpl: "NetworkActivitiesHomeView", model: networkActivitiesAllModel,
					callback: function () {
						if (toolbox == true) {
							$('.toolbox .dropdown-toggle').click();
						}
						chartUtil.render('#graph-container');
						video.init();
					}
				});
				break;
			case 'callforpapers':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesCallForPapersView", model: networkActivitiesCallForPapersModel });
				break;
			case 'callforjournals':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesCallForJournalsView", model: networkActivitiesCallForJournalsModel });
				break;
			case 'ieeenews':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesIEEENewsView", model: networkActivitiesIEEENewsModel });
				break;
			case 'institutenews':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesInstituteNewsView", model: networkActivitiesInstituteNewsModel });
				break;
			case 'ieeetv':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesIEEETVView", model: networkActivitiesIEEETVModel });
				break;
			case 'ieeespectrumnews':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesIEEESpectrumNewsView", model: networkActivitiesIEEESpectrumNewsModel });
				break;
			case 'myconnections':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesMyConnections", model: networkActivitiesMyConnectionsModel });
				break;
			case 'extendedconnections':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesExtendedConnections", model: networkActivitiesExtendedConnectionsModel });
				break;
			case 'memberreferral':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesMemberReferralView", model: networkActivitiesMemberReferralModel });
				break;
			case 'communityjoin':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesCommunityJoinView", model: networkActivitiesCommunityJoinModel });
				break;
			case 'gpluscommunities':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesGPlusCommunitiesView", model: networkActivitiesGPlusCommunitiesModel });
				break;
			case 'mgm':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesMGMView", model: networkActivitiesMGMModel });
				break;
			case 'icx':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesICXView", model: networkActivitiesICXModel });
				break;
			case 'vtools':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesVToolsView", model: networkActivitiesVToolsModel });
				break;

			case 'linkedin':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesLinkedIn", model: networkActivitiesLinkedinModel });
				break;
			case 'twitter':
				new NetworkActivitiesView({ tpl: "NetworkActivitiesTwitter", model: networkActivitiesTwitterModel });
				break;

			default:
				var activeFilter = null;
				commonApp.render(appUtil.custErrMsgView('Path "home-' + filter + '" was not found!'));
		}
		if (activeFilter != null) {
			$('.filter-activity-current').html($('.filter-activities a[href="#home-' + activeFilter + '"]').html());
		}
	},

	commonLogic: function()  {
		headerProfileSearchView.render();
		headerProfileMobileSearchView.render();
		var subMenuView = new SubMenuView({current: "Home" });

		checkbox.init();
		placeholder.init();
		appUtil.makeSubNavPillActive(); //for left sliding menu
	}
};
