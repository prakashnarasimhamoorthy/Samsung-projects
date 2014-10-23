/**
	 * @author pnarasim
	 * @version 1.0 Oct 07 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

	var communitiesImageUploadApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["CommunitiesImageUploadView"],  function () {
				self.renderCommunitiesImageUpload();
			});
		},
		
		renderCommunitiesImageUpload: function(){
			var communitiesImageUploadView = new CommunitiesImageUploadView({
				el: $("#content")
			});
		}
			
	};
	