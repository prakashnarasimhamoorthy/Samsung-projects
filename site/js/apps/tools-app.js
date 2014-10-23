var toolsApp = {
	render : function(){
		var self = this;
		templateLoader.load("tools", [ "ToolsView" ],
			function () {
				self.renderTools();
				self.commonLogic();
			}
		);
	},

	renderTools: function() {
		var content = new ContentView({template: "ToolsView" });
		mmenu.init(true);
	},

	commonLogic: function()  {
		headerProfileSearchView.render();
		headerProfileMobileSearchView.render();
		//var subMenuView = new SubMenuView({current: "Tools" });
		appUtil.makeSubNavPillActive();
	}
};
