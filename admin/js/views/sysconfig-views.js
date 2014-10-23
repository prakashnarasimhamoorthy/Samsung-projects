
	/**
	 * @author rdhason
	 * @version 1.0 Feb 05 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

var SysConfigView = Backbone.View.extend({
			el: $('#content'),
			
			initialize: function(){
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['SystemConfigView'];
			    this.render();
			},
			
			render: function(){
				var subMenuView = new SubMenuView({current: "menu-sysconfig", model : adminMenuCollection,  el: '#sub-menu' });
				//var systemConfigView = new MenuView({ model : AdminCollections.adminMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-sysconfig');
				var html = this.template();
				$(this.el).html(html);
			}
	    });