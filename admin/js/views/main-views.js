
	/**
	 * @author rdhason
	 * @version 1.0 Feb 05 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

var AdminMainView = Backbone.View.extend({
			el: $('#content'),
			
			initialize: function(){
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['AdminMainView'];
			    this.render();
			},
			
			render: function(){
				var subMenuView = new SubMenuView({current: "menu-Admin", model : adminMenuCollection,  el: '#sub-menu' });
				appUtil.makeSubNavPillActive('menu-Admin');
				var html = this.template();
				$(this.el).html(html);
			}
	    });