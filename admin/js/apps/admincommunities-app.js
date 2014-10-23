
	/**
	 * @author rdhason
	 * @version 1.0 Feb 05 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

	var communitiesApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["CommunitiesUploadView"],  function () {
				self.renderCommunities();
			});
		},
		
		renderCommunities: function(){
			/*var subMenuView = new SubMenuView({current: "Community Upload" });*/
			var communitiesView = new CommunitiesView({
				model : adminCommonApp.user,
				el: $("#container-el")
				
			});
		}
			
	};
	
	