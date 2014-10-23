var headerMobileApp = {
	$content: $('#content'),

	insert: function (params){
		var self = this;
		var tpl = params.tpl;
		var model = params.model;
		var callback = params.callback;
		templateLoader.load("header", [ tpl ],
			function () {
				var data = model != undefined ? model.toJSON() : null;
				var content = templateLoader.templates[ tpl ]({ data: data });
				self.$content.html(content);
				if (typeof callback == "function" ) callback();
			}
		);
	},

	render: function() {
		var self = this;
		var view = commonApp.props.headerMobileView;

		switch (view) {
			case 'profile':
				this.insert({ tpl: "HeaderProfileMobileView", model: headerProfileModel});
				break;
			case 'notifications':
				this.insert(
					{   tpl:   "HeaderNotificationsMobileView",
						model: headerNotificationsModel,
						callback: function (){
							appUtil.makeSubNavPillActive(); //for left sliding menu
						}
				});
				break;
			case 'invite':
				this.insert(
					{ tpl:   "HeaderInviteMobileView",
						model: headerInviteModel,
						callback: function () {
							mmenu.init(true);
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
								app.navigate('home', { trigger:true, replace: false });
							});

							$continue.click(function (){
								var $activeMail = $mailSelector.filter('.active');
								if ($activeMail.length == 0) $cancel.click();
								else if ($other.is($activeMail)) {
									$message.removeClass('hidden');
									$continue.addClass('hidden');
									$send.removeClass('hidden');
								}
								else if ($gmail.is($activeMail)) {
									app.navigate('headermobile-addconnections', { trigger:true, replace: false });
								}
							});

							$send.click(function (){
								$inviteDropdown.parent().removeClass('open');
								app.navigate('headermobile-inviteusers', { trigger:true, replace: false });
							});
						}
					});
				break;
			case 'inviteusers':
				this.insert(
					{   tpl:   "HeaderInviteUsersMobileView",
						model: headerInviteUsersModel,
						callback: function (){
						    checkbox.init();
						}
					}
				);
				break;
			case 'addconnections':
				this.insert(
					{   tpl:   "HeaderAddConnectionsMobileView",
						model: headerAddConnectionsModel,
						callback: function (){
							checkbox.init();
						}
					}
				);
				break;
			case null:
				//do nothing
				break;
			default:
				commonApp.render( appUtil.custErrMsgView('Path "headermobile-' + view + '" was not found!' ));
		}
	}
};

