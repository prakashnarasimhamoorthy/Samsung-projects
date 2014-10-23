var searchResultsAllApp = {
	render : function(){
		var self = this;
		templateLoader.load("searchresults", [ "SearchResultsAllView" ],
			function () {
				self.renderResultsAll();
				self.commonLogic();
				appUtil.makeSubNavPillActive('li-all');
			}
		)
	},
	renderResultsAll: function() {
		var content = new ContentView({template: "SearchResultsAllView" });
		commonApp.props.searchType = 'fa-globe';

		chartUtil.render('#graph-container');
		chartUtil.render('#graph-container-mobile');
	},
	commonLogic: function()  {
		//headerPlainSearchView.render();
		headerProfileSearchView.render();
		headerProfileMobileSearchView.render();

		var subMenuView = new SubMenuView({current: "Search", model: Collections.mainMenuSearch });
		var networkMenuView = new MenuView({ model : Collections.searchResultsMenu, el: '.sub-menu-links' });
		checkbox.init();
		placeholder.init();
		video.init();

		$('.popup-toggle').hover(
			function () {
				$(this).next('.popup-prompt').show();
			},
			function () {
				$(this).next('.popup-prompt').hide();
			}
		);
		$('.popup').tooltip();
		$('.slide-arrow').click(function(){
			var slidearrow = $(this);
			slidearrow.siblings('.slide-box').toggle('normal', function(){
				if ( slidearrow.siblings('.slide-box').is(':visible') ) {
					slidearrow.removeClass('fa-chevron-down fa-chevron-up').addClass('fa-chevron-up');
				} else {
					slidearrow.removeClass('fa-chevron-down fa-chevron-up').addClass('fa-chevron-down');
				}
			});
		});

		$('.similar-link').click(function(){
			var similarlink = $(this),
				similarbox = similarlink.parents('.person').find('.similar-box');

			similarbox.toggle('normal', function(){
				if ( similarbox.is(':visible') ) {
					similarlink.addClass('active');
					similarlink.parents('.person').addClass('active');
				} else {
					similarlink.removeClass('active');
					similarlink.parents('.person').removeClass('active');
				}
			});
		});

		$('.similar-box .close').click(function(){
			$(this).parents('.similar-box').hide('normal');
			$(this).parents('.person').removeClass('active');
			$(this).parents('.person').find('.similar-link').removeClass('active');
		});
	}

};

var searchResultsAllTreeApp = {
	render : function(){
		var self = this;
		templateLoader.load("searchresults", [ "SearchResultsAllTreeView" ],
			function () {
				self.renderResultsAllTree();
				searchResultsAllApp.commonLogic();
				appUtil.makeSubNavPillActive('li-all');
			}
		)
	},
	renderResultsAllTree: function() {
		var content = new ContentView({template: "SearchResultsAllTreeView" });
		commonApp.props.searchType = 'fa-search';

		chartUtil.render('#graph-container');
	}
}

var searchResultsActivitiesApp = {
	render : function(){
		var self = this;
		templateLoader.load("searchresults", [ "SearchResultsActivitiesView" ],
			function () {
				self.renderResultsActivities();
				searchResultsAllApp.commonLogic();
				appUtil.makeSubNavPillActive('li-activities');
			}
		);
	},
	renderResultsActivities: function (){
		var content = new ContentView({template: "SearchResultsActivitiesView" });
		commonApp.props.searchType = 'fa-rocket';

		chartUtil.render('#graph-container');
	}
};

var searchResultsCommunitiesApp = {
	render : function(){
		var self = this;
		templateLoader.load("searchresults", [ "SearchResultsCommunitiesView" ],
			function () {
				self.renderResultsCommunities();
				searchResultsAllApp.commonLogic();
				appUtil.makeSubNavPillActive('li-communities');
			}
		);
	},
	renderResultsCommunities: function (){
		var content = new ContentView({template: "SearchResultsCommunitiesView" });
		commonApp.props.searchType = 'fa-users';

		var communitiesResultOfSearchView = new ContentView( { template: "SearchResultsCommunitiesView", model: searchResultsCommunitiesModel });
	}
};

var searchResultsPeopleApp = {
	render : function(){
		var self = this;
		templateLoader.load("searchresults", [ "SearchResultsPeopleView" ],
			function () {
				self.renderResultsPeople();
				searchResultsAllApp.commonLogic();
				appUtil.makeSubNavPillActive('li-people');
			}
		);
	},
	renderResultsPeople: function (){
		var content = new ContentView({template: "SearchResultsPeopleView" });
		commonApp.props.searchType = 'fa-user';
	}
};

var searchResultsLibraryApp = {
	render : function(){
		var self = this;
		templateLoader.load("library",
			[   "LibraryView",
				"LibraryEmptyView",
				"LibrarySettingsView",
				"LibraryToolsView",
				"LibraryTableView",
				"LibraryListView"
				// "LibraryFoldersView"
			],
			function () {
				self.renderResultsLibrary();
				self.commonLogic();
			}
		);
	},

	renderResultsLibrary: function() {
		commonApp.props.librarySearchResult = true;
		new LibraryView({ template: "LibraryView" });
	},

	commonLogic: function()  {
		headerLibrarySearchView.render();
		headerLibraryMobileSearchView.render();
		var subMenuView = new SubMenuView({current: "Search", model: Collections.mainMenuSearch });
		var networkMenuView = new MenuView({ model : Collections.searchResultsMenu, el: '.sub-menu-links' });
		appUtil.makeSubNavPillActive('li-library');
	}
};

var searchResultsLibraryArticleApp = {
	render : function(){
		var self = this;
		templateLoader.load("library",
			[ "LibraryArticleView" ],
			function () {
				headerLibrarySearchView.render();
				headerLibraryMobileSearchView.render();
				var subMenuView = new SubMenuView({current: "Search", model: Collections.mainMenuSearch });
				var networkMenuView = new MenuView({ model : Collections.searchResultsMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('li-library');

				self.renderLibraryArticleView();
			}
		);
	},

	renderLibraryArticleView: function() {
		var content = templateLoader.templates["LibraryArticleView"]();
		$('#content').html(content);
		placeholder.init();
	}
};


var searchResultsEventsApp = {
	render : function(){
		commonApp.props.searchType = 'fa-calendar-o';

		new NetworkEventsDefaultView();
	}
};
