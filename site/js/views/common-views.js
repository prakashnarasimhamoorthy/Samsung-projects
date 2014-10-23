/*global Backbone*/
window.iOSCheck = /(iPad)/g.test( navigator.userAgent );

var ContentView = Backbone.View.extend({
	el: '#content',
	model: new Backbone.Model(),

	initialize: function(attrs){
		this.template = templateLoader.templates[attrs.template];
		this.callback = attrs.callback;
		//_.bindAll(this, 'render');
		this.render();
	},
	render: function() {
		var html = this.template({data: this.model.toJSON()});
		$(this.el).html(html);
		if (typeof this.callback == "function") this.callback();
		return this;
	}
});

var ErrorView = Backbone.View.extend({
	el: '#content',
	model: new PPCTError(),

	initialize: function(){
		_.bindAll(this, 'render');
		// this.render();
	},

	render: function(){
		this.template = templateLoader.templates['ErrorView'];
		var html = this.template({data: this.model.toJSON()});
		$(this.el).html(html);
		return this;
	}
});

var HeaderView = Backbone.View.extend({
	initialize: function(attrs) {
		this.tpl = attrs.tpl;
		this.listenTo(this.model, "change", this.render);
		//this.render();
	},
	render: function (){
		if (this.model.get('visible')) {
			var self = this;
			templateLoader.load("common", [this.tpl],
				function (view) {
					var content = templateLoader.templates[self.tpl]({});
					self.$el.html(content);
					placeholder.init();
					typeAhead.init();
				}
			)
		}
		else {
			this.$el.html('');
		}
	}
});


var HeaderSearchView = Backbone.View.extend({
	model: Models.headerAvatar,
	initialize: function(attrs) {
		this.tpl = attrs.tpl;
		this.listenTo(this.model, "change", this.render);
		//this.render();
	},
	render: function (){
		if (Models.headerAvatar.get('visible')) {
			var self = this;
			templateLoader.load("common", [this.tpl],
				function (view) {
					var content = templateLoader.templates[self.tpl]({ type: commonApp.props.searchType });
					self.$el.html(content);
					placeholder.init();
					typeAhead.init();

					if (iOSCheck == true) {
						var standartHeader = $('#header-menu');


						$('input').on('focus', function(){
							var top = $(window).scrollTop();
							if (standartHeader.hasClass('fixed-header-menu')) {
								standartHeader.addClass('pos-absolute');
							    standartHeader.css({top: top + 'px'});
							}
						});
						$('input').on('blur', function(){
							if (standartHeader.hasClass('fixed-header-menu')) {
								standartHeader.removeClass('pos-absolute');
							    standartHeader.css({top:'0'});
							}
						});

						$(window).scroll(function() {
							if (standartHeader.hasClass('pos-absolute')) {
								var top = $(window).scrollTop();
								standartHeader.css({top: top + 'px'});
							}
						});
					}
				}
			)
		}
		else {
			this.$el.html('');
		}
	}
});
var MobileHeaderSearchView = Backbone.View.extend({
	model: Models.headerAvatar,
	initialize: function(attrs) {
		this.tpl = attrs.tpl;
		this.listenTo(this.model, "change", this.render);
		//this.render();
	},
	mobileSearchHide: function(){
		$('#mobile-header .mobile-menu-togle').fadeIn();
		$('#mobile-header .mobile-logo').fadeIn();
		$('.mobile-search-wrap .search-select-mobile').removeClass('visible');
		$('.mobile-search-wrap').animate({
		    width: "60%"
		}, 500);
	},
	render: function (){
		if (Models.headerAvatar.get('visible')) {
			var self = this;
			templateLoader.load("common", [this.tpl],
				function (view) {
					var content = templateLoader.templates[self.tpl]({ type: commonApp.props.searchType });
					self.$el.html(content);
					placeholder.init();
					typeAhead.init();
					self.mobileSearchHide();
					/*Mobile search*/
					$('.mobile-search-wrap input, .mobile-search-wrap .fa-search').click(function(){
						var searchSelect = $('.mobile-search-wrap .search-select-mobile');
						if(!searchSelect.hasClass('visible')) {
							$('#mobile-header .mobile-menu-togle').fadeOut();
							$('#mobile-header .mobile-logo').fadeOut();
							$('.mobile-search-wrap').animate({
							    width: "79%"
							}, 500, function() {
							    searchSelect.animate({
								    left: "-59"
								}, 500, function() {
								    $('.mobile-search-wrap .fa-times-circle').show();
								});
							});

						}
						searchSelect.addClass('visible');
					});
					$('.mobile-search-wrap .fa-times-circle').click(function(){
						$('.mobile-search-wrap .fa-times-circle').hide();
						$('#mobile-header .mobile-menu-togle').fadeIn();
						$('#mobile-header .mobile-logo').fadeIn();
						$('.mobile-search-wrap .search-select-mobile').removeClass('visible');
						$('.mobile-search-wrap .search-select-mobile').animate({
						    left: "0"
						}, 500, function() {
							$('.mobile-search-wrap').animate({
							    width: "60%"
							}, 500);
						});

					});
				}
			)
		}
		else {
			this.$el.html('');
		}
	}
});

var headerProfileSearchView = new HeaderSearchView({ tpl: 'HeaderProfileSearchView', el: '.header-search-box' });
var headerProfileMobileSearchView = new MobileHeaderSearchView({ tpl: 'MobileHeaderProfileSearchView', el: '.mobile-search-wrap' });
var headerLibrarySearchView = new HeaderSearchView({ tpl: 'HeaderLibrarySearchView', el: '.header-search-box' });
var headerLibraryMobileSearchView = new MobileHeaderSearchView({ tpl: 'MobileHeaderLibrarySearchView', el: '.mobile-search-wrap' });
var headerEventsSearchView = new HeaderSearchView({ tpl: 'HeaderEventsSearchView', el: '.header-search-box' });
var headerEventsMobileSearchView = new MobileHeaderSearchView({ tpl: 'MobileHeaderEventsSearchView', el: '.mobile-search-wrap' });


var NotificationsView = Backbone.View.extend({
	model: Models.headerAvatar,
	initialize: function(attrs) {
		this.tpl = attrs.tpl;
		this.listenTo(this.model, "change", this.render);
		//this.render();
	},
	getNotificationCount: function () {
		var notificationsCount = $('#header-menu').find('.notification-indicator.active').length;
		var notificationBox = $('span.notifications-count');

		if (notificationsCount == 0) {
			notificationBox.hide();
		}
		notificationBox.html(notificationsCount);

		return notificationsCount;
	},
	render: function (){
		var that = this;
		if (this.model.get('visible')) {
			var self = this;
			templateLoader.load("header", [
					this.tpl ,
					'HeaderNotificationsView',
					'HeaderInviteView',
					'HeaderProfileView'
				],
				function (view) {
					var content = templateLoader.templates[self.tpl](
						{ data:          self.model.toJSON(),
							notifications: templateLoader.templates['HeaderNotificationsView']({ data: headerNotificationsModel.toJSON() }),
							invite:        templateLoader.templates['HeaderInviteView']({ data: headerInviteModel.toJSON() }),
							profile:       templateLoader.templates['HeaderProfileView']({ data: headerProfileModel.toJSON() })
						}
					);

					self.$el.html(content);

					/* Profile top Notifications */
					$('.header-notifications').click(function(event) {
						event.stopPropagation();
						return false;
					});
					$('.header-notifications .btn-decline').click(function(){
						$(this).parent('.dropdown').addClass('open');
					});
					$('.action-first .remove-user').click(function(){
						var link = $(this);
						var linkBlock = link.parents('.action-first');

						linkBlock.hide();
						linkBlock.next('.action-second').show();
						return false;
					});

					/* Profile top Notifications */
					var notificationTimeout;
					$('#header-menu .header-notifications .section').mouseenter(function() {
						var notificationBlock = $(this);
						notificationTimeout = setTimeout(function() {
							notificationBlock.find('.notification-indicator.active').removeClass('active');
							that.getNotificationCount();
						}, 1000);
					}).mouseleave(function() {
						clearTimeout(notificationTimeout);
					});

					/* invite dropdown */
					var $inviteDropdown = $('.header-invite');

					$inviteDropdown.click(function (e){
						e.stopPropagation();
					});

					var $mailSelector = $inviteDropdown.find('.mail-selector a');
					var $gmail = $inviteDropdown.find('.gmail');
					var $other = $inviteDropdown.find('.other');
					var $email = $inviteDropdown.find('.email');
					var $message = $inviteDropdown.find('.message');
					var $continue = $inviteDropdown.find('.btn-continue');
					var $send = $inviteDropdown.find('.btn-send');
					var $cancel = $inviteDropdown.find('.btn-cancel');

					$mailSelector.click(function (){
						$mailSelector.removeClass('active');
						$(this).addClass('active');

						if ($gmail.is(this)) {
							$email.addClass('hidden');
							$message.addClass('hidden');
							$send.addClass('hidden');
							$continue.removeClass('hidden');
						}
						else if ($other.is(this)) {
							$email.removeClass('hidden');
						}
						return false;
					});

					$cancel.click(function (){
						$inviteDropdown.parent().removeClass('open');
					});

					function inviteModal() {
						templateLoader.load('header', ['HeaderInviteModalView'],
							function (){
								$inviteDropdown.parent().removeClass('open');
								var data = headerInviteUsersModel.toJSON();
								var content = templateLoader.templates['HeaderInviteModalView']({data: data});
								$('#popup')
									.html(content)
									.modal('show');
								$('.modal-backdrop').css('background-color', 'transparent');
								checkbox.init();
							});
					}

					function addConnecionsModal() {
						templateLoader.load('header', ['HeaderAddConnectionsModalView'],
							function (){
								$inviteDropdown.parent().removeClass('open');
								var data = headerAddConnectionsModel.toJSON();
								var content = templateLoader.templates['HeaderAddConnectionsModalView']({data: data});
								$('#popup')
									.html(content)
									.modal('show');
								$('.modal-backdrop').css('background-color', 'transparent');
								checkbox.init();
							});
					}

					$continue.click(function (){
						var $activeMail = $mailSelector.filter('.active');
						if ($activeMail.length == 0) $cancel.click();
						else if ($other.is($activeMail)) {
							$message.removeClass('hidden');
							$continue.addClass('hidden');
							$send.removeClass('hidden');
						}
						else if ($gmail.is($activeMail)) {
							addConnecionsModal();
						}
					});

					$send.click(function (){
						$inviteDropdown.parent().removeClass('open');
						inviteModal();
					});

					/* /invite dropdown */
					// Steps from URL
					var step = commonApp.props.profileDetailStep;
					switch (step) {
						case 'interests':
							commonApp.props.profileInterests = true;
							break;
						case null:
						case undefined:
							//do nothing
							break;
						case 'notifications':
							$('.header-notifications').parent().addClass('open');
							break;
						case 'invite':
							$inviteDropdown.parent().addClass('open');
							break;
						case 'inviteother':
							$inviteDropdown.parent().addClass('open');
							$email.removeClass('hidden');
							$message.removeClass('hidden');
							$continue.addClass('hidden');
							$send.removeClass('hidden');
							break;
						case 'invitemodal':
							inviteModal();
							break;
						case 'addconnectionsmodal':
							addConnecionsModal();
							break;
						case 'profile':
							$('.header-profile').parent().addClass('open');
							break;
						default:
							commonApp.props.profileDetailStep = null;
							commonApp.render( appUtil.custErrMsgView('Path "profiledetails-' + step + '" was not found!') );
					}
					commonApp.props.profileDetailStep = null;
				}
			)
		}
		else {
			this.$el.html('');
		}
	}
});

var PopupView = Backbone.View.extend ({
	el: '#popup',
	initialize: function (attrs) {
		this.popup = attrs && attrs.popup ? attrs.popup : false;
		this.callback = attrs && attrs.callback ? attrs.callback : null;
		var self = this;
		templateLoader.load('modals',[this.template],
			function (){
				var content =  templateLoader.templates[self.template]();
				self.$el.html(content);
				if (self.popup == true ) {
					self.$el.modal('show');
					$('.modal-backdrop').css('background-color', 'transparent');
				}
				self.logic();
				$('.close').click(function (){
					self.$el.modal('hide');
					return false;
				});
			}
		)
	},
	logic: function() {}
});
