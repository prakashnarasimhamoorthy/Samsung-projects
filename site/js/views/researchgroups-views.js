var ResearchGroupsView = Backbone.View.extend ({
	el: '#content',
	initialize: function (attrs) {
		var data = this.model != undefined ? this.model.toJSON() : null;
		for (attr in attrs) this[attr] = attrs[attr];

		var self = this;
		templateLoader.load('researchgroups',[this.template],
			function (){
				var content =  templateLoader.templates[self.template]({data: data});
				self.$el.html(content);
				researchGroupsApp.commonLogic();

				if (typeof self.logic == "function") self.logic();
				filesTypeAhead.init();
				commonApp.props.ResearchGroupsArticle = true;
				commonApp.props.librarySearchResult = false;
			}
		)
	}
});

var ResearchGroupRightSubNavView = Backbone.View.extend({
	el: '.right-nav-links',
	initialize: function() {
		var self = this;
		templateLoader.load("researchgroups",["ResearchGroupsRightNavView"], function (){
			var template = templateLoader.templates["ResearchGroupsRightNavView"];
			self.$el.html(template());
			$('.btn-new').click(function (){
				new ResearchGroupsCreateNewView({ popup: true });
				return false;
			});
		});
	}
});

var ResearchGroupsListView = ResearchGroupsView.extend({
	template: "ResearchGroupsListView",
	model: researchGroupsListModel
});

var ResearchGroupsEmptyListView = ResearchGroupsView.extend({
	template: "ResearchGroupsEmptyListView"
});

function researchActivitiesAutoloadInit(self) {
	var $el = $('.activities-autoload');
	var autoloadTemplate = "ResearchGroupsActivitiesAutoloadView";
	templateLoader.load('researchgroups', [autoloadTemplate],
		function (){
			data = researchGroupsActivitiesModel.toJSON();
			var content = templateLoader.templates[autoloadTemplate]({data: data});

			$('.load-spinner').hide();
			$el.append(content);

			$('.form-control').click(function (){
				$(this).hide().next().show();
			});

			$('.form-expanded .btn-cancel').click(function (){
				$(this).parents('.form-expanded').hide().prev().show();
				return false;
			});

			$('.btn-comment').click(function(){
				$(this).parents().find('.comments-box').toggle();
				console.log($(this).parents().find('.comments-box'));
				return false;
			});

			$('.more-link').click(function(){
				$(this).hide().prev().show();
				return false;
			});

			searchButtonInit();
			searchButtonInitMobile();
			sendButtonInit();
		}
	);
}
var ResearchGroupActivitiesTabView = ResearchGroupsView.extend({
	el: '#posts',
	template: "ResearchGroupsActivitiesView",
	logic: function (){
		var self = this;
		researchActivitiesAutoloadInit(self);
		var canScroll = true;
		$(window).scroll(function() {
			if(canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
				canScroll = false;
				$('.load-spinner').show();
				setTimeout(function () {
					researchActivitiesAutoloadInit(self);
					canScroll = true;
				}, 1000);
			}
		});
	}
});

function researchDocumentsAutoloadInit(self) {
	var $el = $('.documents-autoload');
	var autoloadTemplate = "ResearchGroupsDocumentsAutoloadView";
	templateLoader.load('researchgroups', [autoloadTemplate],
		function (){
			data = researchGroupsDocumentsModel.toJSON();
			var content = templateLoader.templates[autoloadTemplate]({data: data});

			$('.load-spinner').hide();
			$el.append(content);

			$('.btn-add, .add-to-lib').click(function (){
			    var $this = $(this);
				$this.html('\
					<img src="assets/img/library_setup/ajax-loader.gif" width="16px"/>\
				');
				setTimeout(function() {
					$this.replaceWith('\
						<p class="in-your-library hidden-xs">\
							In your Library:\
							<i class="fa fa-folder"></i>\
							<a href="#">PPCT Library</a> /\
							<a href="#">Vandelay Industries</a>\
						</p>\
					');
				}, 3000);
				return false;
			});

			searchButtonInit();
			searchButtonInitMobile();
			sendButtonInit();
		}
	);
}

var ResearchGroupDocumentsTabView = ResearchGroupsView.extend({
	el: '#documents',
	template: "ResearchGroupsDocumentsView",
	logic: function (){
		var self = this;

		researchDocumentsAutoloadInit(self);
		var canScroll = true;
		$(window).scroll(function() {
			if(canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
				canScroll = false;
				$('.load-spinner').show();
				setTimeout(function () {
					researchDocumentsAutoloadInit(self);
					canScroll = true;
				}, 1000);
			}
		});
	}
});

function researchParticipantsAutoloadInit(self) {
	var $el = $('.participants-autoload');
	var autoloadTemplate = "ResearchGroupsParticipantsAutoloadView";
	templateLoader.load('researchgroups', [autoloadTemplate],
		function (){
			data = researchGroupsParticipantsModel.toJSON();
			var content = templateLoader.templates[autoloadTemplate]({data: data});

			$('.load-spinner').hide();
			$el.append(content);

			searchButtonInit();
			searchButtonInitMobile();
			sendButtonInit();
		}
	);
}

var ResearchGroupParticipantsTabView = ResearchGroupsView.extend({
	el: '#participants',
	template: "ResearchGroupsParticipantsView",
	logic: function(){
		var self = this;

		researchParticipantsAutoloadInit(self);
		var canScroll = true;
		$(window).scroll(function() {
			if(canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
				canScroll = false;
				$('.load-spinner').show();
				setTimeout(function () {
					researchParticipantsAutoloadInit(self);
					canScroll = true;
				}, 1000);
			}
		});
	}
});

function tabsInit(tab) {
	$('a[href=".' + tab + '"]').tab('show');
	new ResearchGroupActivitiesTabView();
	new ResearchGroupDocumentsTabView();
	new ResearchGroupParticipantsTabView();
}

function mobileAdministrationDropdownsInit() {
	var $allLinks = $('.mobile-group-administration .cell');
	$allLinks
		.on('shown.bs.dropdown', function (relatedTarget){
			var $this = $(relatedTarget.target);
			$this.addClass('open');
			var target = $(this).attr('target');
			$(target).addClass('open');
		})
		.on('hide.bs.dropdown',function (relatedTarget){
			var $this = $(relatedTarget.target);
			var target = $(this).attr('target');
			$this.removeClass('open');
		}
	);
}

function collapsingInfoInit() {
	$('a.details-action').click(function(){
		var $this = $(this);
		if ($this.hasClass('visible')) {
			$('.group-details .extras').hide();
			$this.removeClass('visible');
			$this.find('span').html('Show Details');
			$('.upload-btn').hide();
			$('.group-details .img-wrap').removeClass('col-md-2 col-sm-3').addClass('col-md-1 col-sm-2');
			if ($(document).width() > 991) {
				$('.img-wrap .img').animate({"margin-top": "-25px"});
			}
		} else {
			$('.group-details .extras').show();
			$this.addClass('visible');
			$this.find('span').html('Hide Details');
			$('.upload-btn').show();
			$('.group-details .img-wrap').removeClass('col-md-1 col-sm-2').addClass('col-md-2 col-sm-3');
			if ($(document).width() > 991) {
				$('.img-wrap .img').animate({"margin-top": "0"});
			}
		}
		return false;
	}).click();


	var $description = $('.group-details-mob .description-mobile');

	$('.mobile-info .info-icon').click(function(){
		var $this = $(this);

		if (!$this.hasClass('active')) {
			$this.addClass('active');
			$this.attr('src', 'assets/img/research_groups/info-icon-mobile.png');
			$description.addClass('active');
		} else {
			$this.removeClass('active');
			$this.attr('src', 'assets/img/research_groups/info-icon-mobile-inactive.png');
			$description.removeClass('active');
		}

		return false;
	});
}

function sendButtonInit() {
	var $textarea = $('.message-wrap textarea');
	$textarea.siblings('.btn-send').attr('onclick', 'return false;');

	$textarea.on('keyup cut paste', function (){
		var $this  = $(this);
		var $sendBtn = $this.siblings('.btn-send');
		if ($this.val().length > 0){
			$sendBtn
				.addClass('active')
				.removeAttr('onclick');
		} else {
			$sendBtn
				.removeClass('active')
				.attr('onclick', 'return false;');
		}
	});
}

function searchButtonInit() {
	$('.fa-search.show-input').click(function(){
		$this = $(this);
		$this.parents('.animated-search').addClass('visible');
		$this.parents('.animated-search').animate({
			width: "100%"
		}, 1000, function() {
			$this.siblings('.fa-times').show();
		});
		$this.next('input').show();
	});
	$('.animated-search .fa-times').click(function(){
		$this = $(this).siblings('.fa-search');

		$this.siblings('.fa-times').hide();
		$this.parents('.animated-search').animate({
			width: "32px"
		}, 1000, function() {
			$this.parents('.animated-search').removeClass('visible');
		});
	});
}

function searchButtonInitMobile() {
	$('.fa-search.show-input').click(function(){
		$this = $(this);
		$this.parents('.animated-search').addClass('visible');
		$this.parents('.animated-search').siblings('.title-to-hide').hide();
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
			width: "32px"
		}, 1000, function() {
			$this.parents('.animated-search').removeClass('visible');
			$this.parents('.animated-search').siblings('.title-to-hide').show();
		});
	});
}

function addNewResearchCollectionInit() {
	$('.btn-add-new-collection').click(function(){
		new ResearchGroupsAddNewResearchCollectionView({ popup: true });
		return false;
	});
}

var ResearchGroupsAddNewResearchCollectionView = PopupView.extend({
	template: "ResearchGroupsAddNewCollectionView",
	logic: function (){
		var self = this;

		$('.btn-cancel, .btn-create').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});

var ResearchGroupsOwnerView = ResearchGroupsView.extend({
	template: "ResearchGroupsOwnerView",
	logic: function (){
		tabsInit(this.tab);

		mobileAdministrationDropdownsInit();
		collapsingInfoInit();
		addNewResearchCollectionInit();

		filesTypeAhead.init();
	}
});

var ResearchGroupsEmptyOwnerView = ResearchGroupsView.extend({
	template: "ResearchGroupsEmptyOwnerView",
	logic: function() {
		uploadInputsInit();
		mobileAdministrationDropdownsInit();
		collapsingInfoInit();
		sendButtonInit();
		searchButtonInit();
		addNewResearchCollectionInit();

		filesTypeAhead.init();
	}
});

var ResearchGroupsParticipantView = ResearchGroupsView.extend({
	template: "ResearchGroupsParticipantView",
	logic: function (){
		tabsInit(this.tab);
		collapsingInfoInit();

		filesTypeAhead.init();
	}
});

var ResearchGroupsEmptyParticipantView = ResearchGroupsView.extend({
	template: "ResearchGroupsEmptyParticipantView",
	logic: function (){
		tabsInit(this.tab);
		sendButtonInit();
		searchButtonInit();
		collapsingInfoInit();

		filesTypeAhead.init();
	}
});

// POPUPS
function uploadInputsInit() {
	$('.upload-trigger, .group-image img, .group-details img').click(function () {
		$('.upload-image').trigger('click');
		return false;
	});
}

function groupDescriptionSymbolCount() {
	var $textarea = $('.group-description textarea');
	var $symbols = $('.symbols-left span');
	$symbols.html(1000 - $textarea.val().length);
	$textarea.on('keyup cut paste', function (){
		$symbols.html(1000 - $(this).val().length);
	});
}

var ResearchGroupsCreateNewView = PopupView.extend({
	template: "ResearchGroupsCreateNewView",
	logic: function (){
		var self = this;
		$('.btn-cancel').click(function (){
			self.$el.modal('hide');
			return false;
		});

		uploadInputsInit();
		groupDescriptionSymbolCount();
	}
});

var ResearchGroupsEditInfoView = PopupView.extend({
	template: "ResearchGroupsEditInfoView",
	logic: function (){
		var self = this;
		$('.btn-cancel').click(function (){
			self.$el.modal('hide');
			return false;
		});

		uploadInputsInit();
		groupDescriptionSymbolCount();
	}
});

var ResearchGroupsAddPeopleView = PopupView.extend({
	template: "ResearchGroupsAddPeopleView",
	logic: function (){
		var self = this;

		peopleAddTypeAhead.init();

		$('.btn-cancel').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});

var ResearchGroupsSearchUsersView = PopupView.extend({
	template: "ResearchGroupsSearchUsersView",
	logic: function (){
		var self = this;

		peopleAddTypeAhead.init();

		$('.btn-cancel').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});

var ResearchGroupsTransferOwnershipView = PopupView.extend({
	template: "ResearchGroupsTransferOwnershipView",
	logic: function (){
		var self = this;

		transferOwnerAddTypeAhead.init();

		$('.btn-cancel').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});

var ResearchGroupsInviteByMailView = PopupView.extend({
	template: "ResearchGroupsInviteByMailView",
	logic: function (){
		var self = this;

		$('.btn-cancel, .btn-create').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});

var ResearchGroupsCloseGroupView = PopupView.extend({
	template: "ResearchGroupsCloseGroupView",
	logic: function (){
		var self = this;

		$('.btn-cancel').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});
