/***
 * Take Down view
 */

var takeDown = {
			
	render: function(options){
		var self = this;
		this.options = options;
		this.renderTakeDownHeader();
		templateLoader.load("admin", ["AdminTakeDownView"],  function () {
			self.renderTakeDown();
		});
	},
	
	renderTakeDown : function(){			
		var takeDownView = new AdminTakeDownView({
			el: $("#content")
		});
	},
	
	renderTakeDownHeader : function() 
	{
		//Both these templates are needed to load search view
		templateLoader.loadAll("common", ["HeaderAllSearchView","MobileHeaderProfileSearchView"], function () {									
			var takeDownSearchModel;
			try {
				takeDownSearchModel = self.takeDown.options.takeDownModel;
			}catch(E){
				takeDownSearchModel = new TakeDownSearchModel();
			}
			
			var headerAllSearchView = new HeaderSearchView({ tpl: 'HeaderAllSearchView', el: '#header-search-box', model : takeDownSearchModel });
			$("input.search-text").val(HeaderSearchUtil.searchTerm);
		});
	}
};