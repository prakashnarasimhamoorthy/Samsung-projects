var cacheApp = {
			
		render: function(){
			var self = this;
			templateLoader.load("cache", ["cacheview","applicationview"],  function () {
				self.renderCache();
			});
			
		},
		
		renderCache : function(){			
			var cacheView = new CacheView({
				model : adminCommonApp.user
			});
		}	
	};
var doNothing =  {
	render:	function() {
		appUtil.hideLoader();
	}
};