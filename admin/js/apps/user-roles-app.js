var userRoleAssocApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["UserRoleAssocListView", "UserRoleAssocView"],  function () {
				self.renderUserRoleAssocView();
			});
		},
		
		renderUserRoleAssocView: function(){
			var userRoleAssocView = new UserRoleAssocView({
				el: $("#content")
			});
		}
			
	};