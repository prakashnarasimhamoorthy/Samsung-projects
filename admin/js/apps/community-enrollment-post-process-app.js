var communityEnrollmentPostPorcess = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["CommunityEnrollmentPostPorcessSuccessView", "CommunityEnrollmentPostPorcessView"],  function () {
				self.renderCommunityEnrollmentPostPorcess();
			});
		},
		
		renderCommunityEnrollmentPostPorcess: function(){
			var communityEnrollmentPostPorcessView = new CommunityEnrollmentPostPorcessView({
				el: $("#content")
			});
		}
			
	};