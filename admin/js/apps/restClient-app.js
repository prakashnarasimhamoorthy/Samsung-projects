var restClientApp = {
			
		render: function(){
			var self = this;
			templateLoader.load("cache", ["adminRestClientView"],  function () {
				self.renderRestClient();
			});
			
		},
		
		renderRestClient : function(){	
			var restClientView = new RestClientView();
			model : adminCommonApp.user;
		}
	};