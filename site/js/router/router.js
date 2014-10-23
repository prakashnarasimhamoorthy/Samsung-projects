var Router = Backbone.Router.extend({
	routes: {
		'landingpage(-:view)': 'goLandingPage',

		'':             'goEmpty',
		'home(-:type)': 'goHome',

		'profile':                     'goMyProfileDetails',

		'profile-details(:step)':      'goMyProfileDetails',
		'profile-as':                  'goMyProfileAs',
		'profile-activities':          'goMyProfileActivities',
		'profile-connections':         'goMyProfileConnections',
		'profile-connectionspending':  'goMyProfileConnectionsPending',
		'profile-searchresult(-:tab)' :       'goProfileSearchResult',
		'profile-searchresult-old' :   'goProfileSearchResultOld',
		'profile-public':              'goProfilePublic',

		'profile-privacy': 			   'goProfilePrivacy',
		'profile-personalinfo':        'goProfilePersonalInfo',

		'profile-maleicon':                'goProfileMale',
		'profile-femaleicon':              'goProfileFemale',

		'personalize-experience(:tab)': 'goPersonalizeExperience',

		'gapps-existing': 'goGoogleAppsExisting',
		'gapps-new':      'goGoogleAppsNew',

		'community-autoenrollment': 'goCommunityAutoEnrollment',
		'community-getinvited':	    'goCommunityGetInvited',

		'network':                          'goNetworkCommunities',
		'network-activities(:type)':        'goNetworkActivities',
		'network-communities':              'goNetworkCommunities',
		'network-communitiessearch':        'goNetworkCommunitiesSearch',
		'network-communitylp(-:tab)':       'goNetworkCommunityLP',
		'network-communitylpclosed(-:tab)': 'goNetworkCommunityLPClosed',
		'network-events(:view)':            'goNetworkEvents',
		'network-people':                   'goNetworkPeople',
		'network-qa(-:view)':               'goNetworkQA',

		'library(-:view)':     'goLibrary',
		'libraryarticle':      'goLibraryArticle',

		'librarysetup(-:view)': 'goLibrarySetup',

		'researchgroups(-:view)': 'goResearchGroups',

		'settings':                     'goSettingActivityStream',
		'settings-activitystream':      'goSettingActivityStream',
		'settings-attachedservices':    'goSettingAttachedServices',
		'settings-emailnotifications':  'goSettingEmailNotifications',

		'searchresults':                    'goSearchResultsAll',
		'searchresults-all':                'goSearchResultsAll',
		'searchresults-alltree':            'goSearchResultsAllTree',
		'searchresults-activities':         'goSearchResultsActivities',
		'searchresults-communities':        'goSearchResultsCommunities',
		'searchresults-people':             'goSearchResultsPeople',
		'searchresults-library':            'goSearchResultsLibrary',
		'searchresults-libraryarticle':     'goSearchResultsLibraryArticle',
		'searchresults-events':             'goSearchResultsEvents',

		'toolboxmobile': 'goTools',

		'headermobile-(:view)': 'goHeaderMobile',

		"*undefined": "notFound" // 404 error
	},

	goLandingPage: function(view) {
		commonApp.props.isLoggedOut = true;
		commonApp.props.landingPageView = view;
		commonApp.render(landingPageApp);
	},

	goEmpty: function() {
		Backbone.history.loadUrl('landingpage');

		//remove trailing hash
		//window.history.pushState("", document.title, window.location.pathname + window.location.search);
	},

	goHome: function(type) {
		commonApp.props.homeFilterActivities = type;
		commonApp.render(homeApp);
	},

	goHeaderMobile: function(view){
		commonApp.props.headerMobileView = view;
		commonApp.render(headerMobileApp);
	},

	goMyProfileDetails:            function(step){
		commonApp.props.profileDetailStep = step;
		commonApp.render(myProfileDetailsApp);
	},

	goMyProfileActivities:         function(){ commonApp.render(profileActivitiesApp); },
	goMyProfileConnections:        function(){ commonApp.render(profileConnectionsApp); },
	goMyProfileConnectionsPending: function(){
		commonApp.props.triggermyProfileConnectionsPendig = true;
		commonApp.render(myProfileConnectionsApp);
	},
	goProfileSearchResultOld:    function(){ commonApp.render(profileSearchResultOldApp); },
	goProfileSearchResult:       function(tab){
		commonApp.props.trofileSearchResultTab = tab;
		commonApp.render(profileV2App);
	},
	goProfilePublic:             function (){
		commonApp.props.isLoggedOut = true;
		commonApp.render(profilePublicApp);
	},

	goProfileMale:                function(){ commonApp.render(profileMaleApp); },
	goProfileFemale:              function(){ commonApp.render(profileFemaleApp); },

	goMyProfileAs:                function(){ commonApp.render(myProfileAsApp); },

	goProfilePrivacy:             function(){ commonApp.render(myProfilePrivacyApp); },
	goProfilePersonalInfo: function(){ commonApp.render(profilePersonalInfoApp); },

	goPersonalizeExperience: function(tab){
		commonApp.props.personalizeExperienceTab = tab;
		commonApp.render(personalizeExperienceApp);
	},

	goGoogleAppsExisting: function(){ commonApp.render(googleAppsExistingApp); },
	goGoogleAppsNew:      function(){ commonApp.render(googleAppsNewApp); },

	goCommunityAutoEnrollment: function(){ commonApp.render(communityAutoEnrollmentApp); },
	goCommunityGetInvited:     function(){ commonApp.render(communityGetInvited); },

	goNetworkCommunities:       function (){ commonApp.render(networkCommunitiesApp); },
	goNetworkCommunitiesSearch: function (){ commonApp.render(networkCommunitiesSearchApp); },
	goNetworkCommunityLP:       function (tab){
		commonApp.props.networkCommunityLPTab = tab;
		commonApp.render(networkCommunityLPApp);
	},

	goNetworkCommunityLPClosed: function (){ commonApp.render(networkCommunityLPClosedApp); },

	goNetworkPeople:            function (){ commonApp.render(networkPeopleApp); },
	goNetworkActivities:        function (type){
		commonApp.props.networkFilterActivities = type;
		commonApp.render(networkActivitiesApp);
	},

	goNetworkEvents: function (view){
		commonApp.props.networkEventsView = view;
		commonApp.render(networkEventsApp);
	},

	goNetworkQA: function (view){
		commonApp.props.networkQAView = view;
		commonApp.render(networkQAApp);
	},

	goLibrary:  function(view){
		commonApp.props.libraryView = view;
		commonApp.render(libraryApp);
	},

	goLibraryArticle: function(){ commonApp.render(libraryArticleApp); },

	goLibrarySetup: function(view){
		commonApp.props.librarySetupView = view;
		commonApp.render(librarySetupApp);
	},

	goResearchGroups: function(view){
		commonApp.props.researchGroupsView = view;
		commonApp.render(researchGroupsApp);
	},

	goSettingActivityStream:     function(){ commonApp.render(settingActivityStreamApp);     },
	goSettingAttachedServices:   function(){ commonApp.render(settingAttachedServicesApp);   },
	goSettingEmailNotifications: function(){ commonApp.render(settingEmailNotificationsApp); },

	goSearchResultsAll:             function(){ commonApp.render(searchResultsAllApp);             },
	goSearchResultsAllTree:         function(){ commonApp.render(searchResultsAllTreeApp);         },
	goSearchResultsActivities:      function(){ commonApp.render(searchResultsActivitiesApp);      },
	goSearchResultsCommunities:     function(){ commonApp.render(searchResultsCommunitiesApp);     },
	goSearchResultsPeople:          function(){ commonApp.render(searchResultsPeopleApp);          },
	goSearchResultsLibrary:         function(){ commonApp.render(searchResultsLibraryApp);         },
	goSearchResultsLibraryArticle:  function(){ commonApp.render(searchResultsLibraryArticleApp);  },
	goSearchResultsEvents:          function(){ commonApp.render(searchResultsEventsApp);          },

	goTools: function(){ commonApp.render(toolsApp); },

	notFound: function (path){	commonApp.render( appUtil.custErrMsgView('Path "' + path + '" was not found!' )); }
});

//ENTRY POINT
var app = new Router();

app.on("route", function(route, params) {
	$('#popup').modal('hide');
	//console.log("Different Page: " + route);
});

Backbone.history.start({
	//pushState: true, // Path with HTML5 slashes (/) instead of hashes (#/)
	pushState: false,
	root: '/'
});
