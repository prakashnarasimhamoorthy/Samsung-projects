
	/**
	 * @author rdhason
	 * @version 1.0 Feb 05 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

	var CommView = Backbone.View.extend({
			el: $('#content'),
			
			initialize: function(){
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['CommunitygPlusUserData'];
			    this.render();
			    
			},
			
			render: function(){
				new SubMenuView({current: "menu-Community", model : adminMenuCollection,  el: '#sub-menu' });
				new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-Communityupload');
				var html = this.template();
				$(this.el).html(html);
			}
	    });