var preProcessApp = {
		
		render : function(){
			var self = this;
			templateLoader.load("admin", ["PreProcessView","PreProcessEnrollmentSuccessView"],  function () {
				self.renderPreProcessEnrollment();
			});
		},
		
		renderPreProcessEnrollment: function(){
			var preProcessEnrollmentView = new PreProcessEnrollmentView({
				el: $("#content")
			});
		}
			
	};