	var sysConfigApp = {
			
		render: function(){
			var self = this;
			templateLoader.load("admin", ["SystemConfigView"],  function () {
				self.rendersysConfigApp();
			});
			
		},
		
		rendersysConfigApp : function(){			
			var sysConfigView = new SysConfigView({
				el: $("#content")
			});
		}	
	};