var networkCommunitiesApp = {
	render : function(){
		var self = this;
		templateLoader.load("network",
			[ "NetworkCommunitiesView",
			  "NetworkCommunitiesHaveAccessView",
			  "NetworkCommunitiesResultDetailedView"
			],
			function () {
				self.renderCommunities();
				self.commonLogic();
				appUtil.makeSubNavPillActive('li-communities');
			}
		);
	},

	renderCommunities: function() {
		var content = new ContentView({template: "NetworkCommunitiesView" });

		var communitiesHaveAccess = new NetworkCommunitiesListView( { template: "NetworkCommunitiesHaveAccessView", el: "#result-have-access", model: communitiesHaveAccessModel} );
		var eligibleCommunities = new NetworkCommunitiesListView( { template: "NetworkCommunitiesResultDetailedView", el: "#result-has-no-access", model: eligibleCommunitiesModel} );
		var	additionalCommunities = new NetworkCommunitiesListView( { template: "NetworkCommunitiesResultDetailedView", el: "#result-additional",    model: additionalCommunitiesModel} );
	},

	commonLogic: function()  {
		headerProfileSearchView.render();
		headerProfileMobileSearchView.render();
		var subMenuView = new SubMenuView({current: "Network" });
		var networkMenuView = new MenuView({ model : Collections.networkMenu, el: '.sub-menu-links' });

		placeholder.init();

		$('.popup-toggle').hover(
			function () {
				$(this).next('.popup-prompt').show();
			},
			function () {
				$(this).next('.popup-prompt').hide();
			}
		);

		$('.box-btn-manage').click(function(){
			var $this = $(this);

			if (!$this.hasClass('active')) {
				$this.addClass('active');
				$('.community-manage-btn').addClass('visible');
			} else {
				$this.removeClass('active');
				$('.community-manage-btn').removeClass('visible');
			}

			return false;
		});
	}
};

var networkCommunitiesSearchApp = {
	render : function(){
		var self = this;
		templateLoader.load("network",
			[   "NetworkCommunitiesSearchView",
				"NetworkCommunitiesResultOfSearchView"
			],
			function () {
				self.renderSearchCommunities();
				networkCommunitiesApp.commonLogic();
				appUtil.makeSubNavPillActive('li-communities');
			}
		);
	},

	renderSearchCommunities: function() {
		var content = new ContentView({template: "NetworkCommunitiesSearchView" });

		var communitiesResultOfSearchView = new NetworkCommunitiesListView( { template: "NetworkCommunitiesResultOfSearchView", el: "#result-of-search",	model: searchResultsCommunitiesModel });
	}
};

var networkCommunityLPApp = {
	render : function(){
		var self = this;
		templateLoader.load("network", [ "NetworkCommunityLP" ],
			function () {
				self.renderNetworkCommunityLP();
				networkCommunitiesApp.commonLogic();
				appUtil.makeSubNavPillActive('li-communities');
			}
		);
	},

	renderNetworkCommunityLP: function() {
		var content = new ContentView({template: "NetworkCommunityLP",
			callback: function () {
				$('a.details-action').click(function(){
					var $this = $(this);
					if ($this.hasClass('visible')) {
						$('.community-details .citation').hide();
						$this.removeClass('visible');
						$this.find('span').html('Show Details');
						$('.community-details .img-wrap').removeClass('col-md-2 col-sm-3').addClass('col-md-1 col-sm-1');
						if ($(document).width() > 768) {
							$('.img-wrap .img').animate({"margin-top": "-25px"});
						}
					} else {
						$('.community-details .citation').show();
						$this.addClass('visible');
						$this.find('span').html('Hide Details');
						$('.community-details .img-wrap').removeClass('col-md-1 col-sm-1').addClass('col-md-2 col-sm-3');
						if ($(document).width() > 768) {
							$('.img-wrap .img').animate({"margin-top": "0"});
						}
					}
					return false;
				}).click();

				$('a.details-action-mob').click(function(){
					var $this = $(this);
					if (!$this.hasClass('visible')) {
						$('.community-details-mob .extras').slideUp();
						$this.addClass('visible');
						$this.find('span').html('Show Details');
					} else {
						$('.community-details-mob .extras').slideDown();
						$this.removeClass('visible');
						$this.find('span').html('Hide Details');
					}
					return false;
				}).click();;

				$('#bootstrap-calendar').datepicker({
					keyboardNavigation: false,

					beforeShowDay: function (date){
						if (date.getMonth() == (new Date()).getMonth())
							switch (date.getDate()){
								case 13:
								case 14:
								case 15:
								case 16:
								case 17:
								case 18:
								case 27:
									return "highlighted";
							}
					}
				}).datepicker('setDate', new Date());

				$(".table-condensed th.next").html('<i class="fa fa-angle-right"></i>');
				$(".table-condensed th.prev").html('<i class="fa fa-angle-left"></i>');

				$('.tree-files li:has(ul)').addClass('parent_li').find('span').attr('title', 'Collapse this branch');
				$('.tree-files li.parent_li > span').on('click', function (e) {
					var children = $(this).parent('li.parent_li').find('  ul > li');
					if (children.is(":visible")) {
						children.hide('fast');
						$(this).attr('title', 'Expand this branch').find('  i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
					} else {
						children.show('fast');
						$(this).attr('title', 'Collapse this branch').find('  i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
					}
					e.stopPropagation();
				});

				//TABS
				var tab = commonApp.props.networkCommunityLPTab;
				if (tab != null) {
					if (tab == "qafull") {
						commonApp.props.networkCommunityLPQATabFull = true;
						tab = "qa";}
					else if (tab == "eventsfull") {
						commonApp.props.networkCommunityLPEventTabFull = true;
						tab = "events";
					} else if (tab.indexOf('files') == 0) {
						commonApp.props.networkCommunityLPFileTab = tab.substr(6);
						tab = "files";
					}
				}

				$('a.' + tab).tab('show');
				$(window).scrollTop(0);
				new NetworkCommunityActivitiesTabView();
				new NetworkCommunityFilesTabView();
				new NetworkCommunityQATabView();
				new NetworkCommunityEventsTabView();
				new NetworkCommunityParticipantsTabView();
			}
		});
	}
};

var networkCommunityLPClosedApp = {
	render : function(){
		var self = this;
		templateLoader.load("network", [ "NetworkCommunityLPClosed" ],
			function () {
				self.renderNetworkCommunityLPClosed();
				networkCommunitiesApp.commonLogic();
				appUtil.makeSubNavPillActive('li-communities');
			}
		);
	},

	renderNetworkCommunityLPClosed: function() {
		var content = new ContentView({template: "NetworkCommunityLPClosed", model: communitiesMayBeInterestedModel,
			callback: function () {
				$('a.details-action').click(function(){
					var $this = $(this);
					if ($this.hasClass('visible')) {
						$('.community-details .citation').hide();
						$this.removeClass('visible');
						$this.find('span').html('Show Details');
						$('.community-details .img-wrap').removeClass('col-md-2 col-sm-3').addClass('col-md-1 col-sm-1');
						if ($(document).width() > 768) {
							$('.img-wrap .img').animate({"margin-top": "-25px"});
						}
					} else {
						$('.community-details .citation').show();
						$this.addClass('visible');
						$this.find('span').html('Hide Details');
						$('.community-details .img-wrap').removeClass('col-md-1 col-sm-1').addClass('col-md-2 col-sm-3');
						if ($(document).width() > 768) {
							$('.img-wrap .img').animate({"margin-top": "0"});
						}
					}
					return false;
				});
			}
		});
	}
}

var networkPeopleApp = {
	render : function(){
		var self = this;
		templateLoader.load("network",	[ "NetworkPeopleView" ],
			function () {
				self.renderNetworkPeople();
				networkCommunitiesApp.commonLogic();
				appUtil.makeSubNavPillActive('li-people');
			}
		);
	},

	renderNetworkPeople: function() {
		var content = new ContentView({template: "NetworkPeopleView" });

		placeholder.init();
		checkbox.init();

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

		$('.popup').tooltip();

		$('.checkbox-all input').click(function() {
			if (! $(this).hasClass('active')) {
				$(this).addClass('active').checkbox('setChecked', true);
				$(this).parents('.slide-box').find('.checkbox-group input:checkbox').checkbox('setChecked', true);
			} else {
				$(this).removeClass('active').checkbox('setChecked', false);
				$(this).parents('.slide-box').find('.checkbox-group input:checkbox').checkbox('setChecked', false);
			}
		});
		$('.checkbox-group input:checkbox').click(function(){
			var ckeckboxall = $(this).parents('.slide-box').find('.checkbox-all input');
			if ( ckeckboxall.hasClass('active')) {
				ckeckboxall.removeClass('active').checkbox('setChecked', false);
			}
		});

		var $menu = $('#people-menu-right');

		$menu.mmenu({
			position	: 'right',
			classes		: 'mm-light',
			dragOpen	: true,
			counters	: true,
			searchfield	: false,
			labels		: {
				fixed		: !$.mmenu.support.touch
			},
			header		: {
				add			: true,
				update		: true,
				title		: '> Search Options'
			}
		})
		.on( "opened.mm", function() {
			$('.mobile-filters').removeClass('active');
		})
		.on( "closed.mm", function() {
			$('.mobile-filters').addClass('active');
		});

		//	Click a menu-item
		var $confirm = $('#confirmation');
		$menu.find( 'li a' ).not( '.mm-subopen' ).not( '.mm-subclose' ).bind(
			'click.example',
			function( e ) {
				e.preventDefault();
				$confirm.show().text( 'You clicked "' + $.trim( $(this).text() ) + '"' );
				$('#people-menu-right').trigger( 'close' );
			}
		);
	}
};
