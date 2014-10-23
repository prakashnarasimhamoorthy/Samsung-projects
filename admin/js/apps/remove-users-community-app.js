var removeUsersCommunityApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["RemoveUsersCommunitySuccessView", "RemoveUsersCommunityView"],  function () {
				self.renderRemoveUsersCommunity();
			});
		},
		
		renderRemoveUsersCommunity: function(){
			var removeUsersCommunityView = new RemoveUsersCommunityView({
				el: $("#content")
			});
		}
			
	};