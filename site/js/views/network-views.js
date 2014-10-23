var	NetworkCommunitiesListView = Backbone.View.extend({
	initialize: function(attrs){
		this.template = templateLoader.templates[attrs.template];
		this.render();
	},

	render: function(){
		var data = this.model.toJSON();
		var content = this.template({data : data});
		this.$el.html(content);
	}
});

var NetworkCommunityLPTabView = Backbone.View.extend ({
	el: '#content',
	initialize: function (attrs) {
		var data = this.model != undefined ? this.model.toJSON() : null;
		for (attr in attrs) this[attr] = attrs[attr];

		var self = this;
		templateLoader.load('networkcommunitylp',[this.template],
			function (){
				var content =  templateLoader.templates[self.template]({data: data});
				self.$el.html(content);

				if (typeof self.logic == "function") self.logic();
			}
		)
	}
});

var NetworkCommunitiesLPRemoveItemView = Backbone.View.extend({
	render: function($el){
		templateLoader.load("modals", [ "NetworkCommunitiesLPRemoveView" ],
			function (){
				var content = templateLoader.templates["NetworkCommunitiesLPRemoveView"];
				$el.html(content);

				$('.btn-cancel, .close').click(function (){
					var $this = $(this);
					$this.parents('.item-remove').siblings('.item-content').show();
					$this.parents('.item-remove').html('');

					return false;
				});

				$('.btn-remove').click(function (){
					var $this = $(this);
					$this.parents('.item-wrap').html('');
					return false;
				});
			}
		);
	}
});

function networkSearchButtonInit() {
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

function networkActivitiesAutoloadInit(self) {
	var $el = $('.activities-autoload');
	var autoloadTemplate = "NetworkCommunityActivitiesAutoloadView";
	templateLoader.load('networkcommunitylp', [autoloadTemplate],
		function (){
			var content = templateLoader.templates[autoloadTemplate]({id: self.id});
			self.id += 4;

			$('.load-spinner').hide();
			$el.append(content);

			$('.btn-remove-item').tooltip();
			$('.btn-remove-item').click(function(){
				var $this = $(this);
				var thisId = $this.data('id');

				var thisWrap = $this.parents('.item-wrap');
				var removeBox = thisWrap.find('.item-remove');

				removeItemView = new NetworkCommunitiesLPRemoveItemView({ id:thisId });
				removeItemView.render(removeBox);

				return false;
			});

			video.init();

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
var NetworkCommunityActivitiesTabView = NetworkCommunityLPTabView.extend({
	el: '#activities-tab',
	template: "NetworkCommunityActivitiesTabView",
	id: 0,
	logic: function () {
		networkSearchButtonInit();
		var self = this;
		networkActivitiesAutoloadInit(self);

		var canScroll = true;
		$(document).scroll(function() {
			if(canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
				canScroll = false;
				$('.load-spinner').show();
				setTimeout(function () {
					networkActivitiesAutoloadInit(self);
					canScroll = true;
				}, 1000);
			}
		});
	}
});

function networkEventsAutoloadInit(self) {
	var $el = $('.events-all-list');
	var autoloadTemplate = "NetworkCommunityEventsAutoloadView";
	templateLoader.load('networkcommunitylp', [autoloadTemplate],
		function (){
			var collection = new (Backbone.Collection.extend({ model: NetworkEvent }));
			collection.fetch({
				url: "assets/templates/networkcommunitylp/data/" + self.json_file,
				success: function() {
					data = collection.toJSON();
					var content = templateLoader.templates[autoloadTemplate]({data: data, id: self.id });
					self.id+=collection.length;

					$('.load-spinner').hide();
					$el.append(content);

					networkEventsListViewInit();
					networkEventsDetailedViewInit();
				}
			});
		}
	);
}
function networkEventsDetailedViewInit() {
	$('.events-article h5').click(function (){
		var $self = $(this);
		templateLoader.load('networkcommunitylp', ["NetworkCommunityEventsDetailedView"],
			function (){
				var content = templateLoader.templates["NetworkCommunityEventsDetailedView"]();
				$self.parents('.events-all-list').hide();
				$('.events-list .event-full').html(content);
				self.canScroll = false;

				$('.btn-back').click(function(){
					$('.events-list .event-full').html('');
					$('.events-all-list').show();
					self.canScroll = true;
					return false;
				});
			}
		);
		return false;
	});

	if (commonApp.props.networkCommunityLPEventTabFull == true) {
		$('.events-article h5:first').click();
		commonApp.props.networkCommunityLPEventTabFull = false;
	}
}
function networkEventsListViewInit() {
	$('.btn-remove-item').tooltip();
	$('.btn-remove-item').click(function(){
		var $this = $(this);
		var thisId = $this.data('id');

		var thisWrap = $this.parents('.item-wrap');
		var removeBox = thisWrap.find('.item-remove');

		removeItemView = new NetworkCommunitiesLPRemoveItemView({ id:thisId });
		removeItemView.render(removeBox);

		return false;
	});

	$('.btn-more').click(function(e){
		e.preventDefault();
		var isHidden = $(this).html() == "More";
		$(this).text(isHidden ? "Hide" : "More");
		$(this).parent().find('.js-hid-text')[isHidden ? 'show' : 'hide']();
		$(this).parent().find('.js-cut-text')[isHidden ? 'hide' : 'show']();
	});

	$(".events-article .location .location-city").click(function(e){
		e.preventDefault();
		var $map = $(this).closest(".events-article").find(".google-maps");
		var $iframe = $map.find('iframe');
		$map.slideToggle("slow");
		var mapSrc = $iframe.attr('data-src');
		$iframe.attr('src', mapSrc);
	});

	$('.events-article .google-maps iframe').parent().hide();

//	$('.events-article .google-maps iframe').load(function(){
//		$(this).parent().hide();
//	});

	$('#events-tab .dropdown-menu').click(function(event) {
		event.stopPropagation();
		return false;
	});
	$("#events-tab .btn-send").click(function (){
		$('#network-events .dropdown-menu').parent().removeClass('open');
	});
}
var NetworkCommunityEventsTabView = NetworkCommunityLPTabView.extend({
	el: '#events-tab',
	json_file: "network_community_events.json",
	template: "NetworkCommunityEventsTabView",
	id: 0,
	canScroll: true,
	logic: function (){
		var self = this;

		networkSearchButtonInit();
		networkEventsAutoloadInit(self);

		$(document).scroll(function() {
		    if(self.canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
			    self.canScroll = false;
			    $('.load-spinner').show();
			    setTimeout(function () {
				    networkEventsAutoloadInit(self);
				    self.canScroll = true;
			    }, 1000);
		    }
		});
	}
});

function networkParticipantsAutoloadInit(self) {
	var $el = $('.persons');
	var autoloadTemplate = "NetworkCommunityParticipantsAutoloadView";
	templateLoader.load('networkcommunitylp', [autoloadTemplate],
		function (){
			var data = networkCommunitiesParticipantsModel.toJSON();
			var content = templateLoader.templates[autoloadTemplate]({data: data, id: self.id});
			self.id += networkCommunitiesParticipantsModel.length;

			$('.load-spinner').hide();
			$el.append(content);

			$('.popup').tooltip();

			$('.btn-remove-item').tooltip();
			$('.btn-remove-item').click(function(){
				var $this = $(this);
				var thisId = $this.data('id');

				var thisWrap = $this.parents('.item-wrap');
				var removeBox = thisWrap.find('.item-remove');

				removeItemView = new NetworkCommunitiesLPRemoveItemView({ id:thisId });
				removeItemView.render(removeBox);

				return false;
			});
		}
	);
}
var NetworkCommunityParticipantsTabView = NetworkCommunityLPTabView.extend({
	el: '#participants-tab',
	template: "NetworkCommunityParticipantsTabView",
	id: 0,
	logic: function () {
		networkSearchButtonInit();
		var self = this;

		networkParticipantsAutoloadInit(self);
		var canScroll = true;
		$(document).scroll(function() {
			if(canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
				canScroll = false;
				$('.load-spinner').show();
				setTimeout(function () {
					networkParticipantsAutoloadInit(self);
					canScroll = true;
				}, 1000);
			}
		});
	}
});
