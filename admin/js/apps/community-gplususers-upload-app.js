var communityGplususersUploadApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["CommunityGplususersUploadView", "CommunityGplususersSuccessView"],  function () {
				self.renderCommunityGplususersUpload();
			});
		},
		
		renderCommunityGplususersUpload: function(){
			var communityGplususersUploadView = new CommunityGplususersUploadView({
				el: $("#content")
			});
		}
			
	};