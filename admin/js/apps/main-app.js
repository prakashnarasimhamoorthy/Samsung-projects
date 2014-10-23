	var adminMain = {
			
		render: function(){
			var self = this;
			HeaderSearchUtil.searchTerm = "";
			templateLoader.load("admin", ["AdminMainView"],  function () {
				self.renderAdminMain();
			});
			
		},
		
		renderAdminMain : function(){			
			var adminMainView = new AdminMainView({
				el: $("#content")
			});
		}	
	};