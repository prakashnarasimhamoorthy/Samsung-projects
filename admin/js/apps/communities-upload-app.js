
	/**
	 * @author pmathuku
	 * @version 1.0 May 01 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

	var communitiesUploadApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["CommunitiesUploadView", "CommunitiesUploadSuccessView"],  function () {
				self.renderCommunitiesUpload();
			});
		},
		
		renderCommunitiesUpload: function(){
			var communitiesUploadView = new CommunitiesUploadView({
				el: $("#content")
			});
		}
			
	};
	
	