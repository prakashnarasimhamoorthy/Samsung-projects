var networkActivitiesApp = {
	render: function(){
		var self = this;
		templateLoader.load("network", [ "NetworkActivitiesView" ],
			function () {
				self.renderNetworkActivities();
				networkCommunitiesApp.commonLogic();
				appUtil.makeSubNavPillActive('li-activities');
			}
		);
	},

	renderNetworkActivities: function() {
		var content = new ContentView({template: "NetworkActivitiesView" });
		var networkFilterActivitiesView = new MenuView({ model : Collections.networkActivitiesFilterMenu, el: '.filter-activities' });

		var filter = commonApp.props.networkFilterActivities;
		var activeFilter = filter == null ? "all" : filter;
		$('.filter-activity-current').html($('.filter-activities a[href="#network-activities' + activeFilter  + '"]').html());

		switch (filter) {
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

			case "all":
			case null:
				new NetworkActivitiesView({ tpl: "NetworkActivitiesAllView", model: networkActivitiesAllModel });
				break;
			default:
				commonApp.render( appUtil.custErrMsgView('Path network-activities' + filter + '" was not found!' ));
		}
	}
};
