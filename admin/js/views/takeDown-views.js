
/**
 * @author Martin
 * @version 1.0 
 * 
 * Copyright (c) 2014 by --- IEEE
 */

var AdminTakeDownView = Backbone.View.extend({
		el: $('#content'),
		
		initialize: function(){
			_.bindAll(this, 'render');
			this.template = templateLoader.templates['AdminTakeDownView'];
		    this.render();
		},
		
		render: function(){
			console.log("Initiating keypress");
			this.initHeaderResourceSearchFields();
			
			var subMenuView = new SubMenuView({current: "menu-documentMgmt", model : adminMenuCollection,  el: '#sub-menu' });
			appUtil.makeSubNavPillActive('menu-documentMgmt');
			var html = this.template();
			$(this.el).html(html);
		},
		
		
		initHeaderResourceSearchFields : function(){
			$("#banner").on("keypress", ".resource-search-input", function(event) {
				console.log("key code___:" + event.keyCode);
				if (event.keyCode == 13){
					console.log("calling function");
					HeaderSearchUtil.resourceSearch(event);
				}
			});
			
			$("#banner").on("keypress", ".researchGroup-search-input", function(event) {
				console.log("key code___:" + event.keyCode);
				if (event.keyCode == 13){
					console.log("calling RESEARCH GROUP  function");
					HeaderSearchUtil.researchGroupSearch(event);
				}
			});

			$("#banner").on("click", ".fa-search.resource-search-btn", function(event) {
				console.log("calling RESOURCE function on click...");
				HeaderSearchUtil.resourceSearch(event);
			});
			
			$("#banner").on("click", ".fa-search.researchGroup-search-btn", function(event) {
				console.log("calling RESEARCH GROUP function on click...");
				HeaderSearchUtil.researchGroupSearch(event);
			});
		}
    });