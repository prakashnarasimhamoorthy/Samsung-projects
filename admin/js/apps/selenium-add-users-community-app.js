var seleniumAddUsersCommunityApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["SeleniumAddUsersCommunitySuccessView", "SeleniumAddUsersCommunityView"],  function () {
				self.renderCommunityGplususersUpload();
			});
		},
		
		renderCommunityGplususersUpload: function(){
			var seleniumAddUsersCommunityView = new SeleniumAddUsersCommunityView({
				el: $("#content")
			});
		}
			
	};