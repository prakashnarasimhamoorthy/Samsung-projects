var settingAttachedServicesApp = {
	render : function(){
		var self = this;
		templateLoader.load("settings",	[ "SettingAttachedServicesView" ],
			function () {
				self.renderSettingAttachedServices();
				self.commonLogic();
				appUtil.makeSubNavPillActive('li-attached-services');
			}
		);
	},

	renderSettingAttachedServices: function() {
		var content = new ContentView({template: "SettingAttachedServicesView" });
	},

	commonLogic: function()  {
		var subMenuView = new SubMenuView({current: "Settings" });
		var networkMenuView = new MenuView({ model : Collections.settingsMenu, el: '.sub-menu-links' });
		headerProfileSearchView.render();
		headerProfileMobileSearchView.render();
		checkbox.init();
		placeholder.init();
	}
};

var settingEmailNotificationsApp = {
	render : function() {
		var self = this;
		templateLoader.load("settings",	[ "SettingEmailNotificationsView" ],
			function () {
				self.renderEmailNotification();
				settingAttachedServicesApp.commonLogic();
				appUtil.makeSubNavPillActive('li-email-notifications');
			}
		);
	},

	renderEmailNotification: function() {
		var content = new ContentView({template: "SettingEmailNotificationsView" });
	}
}

var settingActivityStreamApp = {
	render : function() {
		var self = this;
		templateLoader.load("settings",	[ "SettingActivityStreamView" ],
			function () {
				self.renderActivityStream();
				settingAttachedServicesApp.commonLogic();
				appUtil.makeSubNavPillActive('li-activity-stream');
			}
		);
	},

	renderActivityStream: function() {
		var content = new ContentView({template: "SettingActivityStreamView",
			callback: function (){
			    $('input[type="text"]').tagsinput();
			}
		});
	}
}

