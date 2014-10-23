var seleniumRemoveUsersCommunityApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["SeleniumRemoveUsersCommunitySuccessView", "SeleniumRemoveUsersCommunityView"],  function () {
				self.renderCommunityGplususersUpload();
			});
		},
		
		renderCommunityGplususersUpload: function(){
			var seleniumRemoveUsersCommunityView = new SeleniumRemoveUsersCommunityView({
				el: $("#content")
			});
		}
			
	};