var batchApp = {
			
		render: function(){
			var self = this;
			templateLoader.load("cache", ["rollbackview"],  function () {
				self.renderBatch();
			});
			
		},
		
		renderBatch : function(){	
			var batchView = new BatchView();
			model : adminCommonApp.user;
		}
	};