/**
 * @author pmathuku
 * @version 1.0 May 05 2014
 * 
 * Copyright (c) 2014 by --- IEEE
 */

/**
 * Renders the communities upload view.
 */
var CommunitiesUploadView = Backbone.View
		.extend({			
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['CommunitiesUploadView'];
				this.render();
			},

			render : function() {
				var subMenuView = new SubMenuView({current: "menu-Community", model : adminMenuCollection,  el: '#sub-menu' });
				var communityUploadView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-Communityupload');
				/*var subMenuView = new SubMenuView({current: "Community Upload" , model : Collections.adminMenu,  el: '#sub-menu' });*/
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			
			events : {
				'click #fileupload' : 'openUploadPopup'
			},
			
			openUploadPopup: function() {
				   $(function () {
					   $("#status-msg").hide();
					   $("#error-div").hide();
					   try{
						   $('#fileupload').fileupload({
						        dataType: 'json',
						        url : apiPath + "admin/community/upload",
						        done: function (e, response) {
						        	appUtil.hideOverlay();
						        	var statuscode = response.result.statusCode;
						        	var communityUploadSuccessView;
						        	if(statuscode==0) {
						        		$("#status-msg").show();
						        		communityUploadSuccessView = new CommunitiesUploadSuccessView({el:"#status-msg",model:response.result.data});
						        	} else {
						        		$("#error-div").show();
						        		$("#error-div").html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Not Able to process the request at this time -  " +response.result.statusMsg + "</span>");
						        	}
						        },
	
						    }).on('fileuploadadd', function(e, data) {
						    	appUtil.showLoader("content", "Uploading csv...");
	
							}).on('fileuploadalways', function(e, data) {
								appUtil.hideLoader("content");
							});
					   }catch(e){console.log(e);}
					});
			},
});

var CommunitiesUploadSuccessView = Backbone.View
.extend({			
	initialize : function() {
		_.bindAll(this, 'render');
		this.template = templateLoader.templates['CommunitiesUploadSuccessView'];
		this.render();
	},

	render : function() {
		var html = this.template({data:this.model});
		$(this.el).html(html);
		return this;
	}
});

