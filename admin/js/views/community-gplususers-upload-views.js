/**
 * @author pmathuku
 * @version 1.0 May 05 2014
 * 
 * Copyright (c) 2014 by --- IEEE
 */

/**
 * Renders the communities upload view.
 */
var CommunityGplususersUploadView = Backbone.View
		.extend({			
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['CommunityGplususersUploadView'];
				this.render();
			},

			render : function() {
				var subMenuView = new SubMenuView({current: "menu-Community", model : adminMenuCollection,  el: '#sub-menu' });
				var gPlusUploadView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-Gplususers');
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			
			events : {
				'click #fileupload' : 'uploadCSV'
			},
			
			uploadCSV: function() {
				   $(function () {
					   $("#status-msg").hide();
					   $("#error-div").hide();
					   try{
						    $('#fileupload').fileupload({
						        dataType: 'json',
						        url : apiPath + "admin/community/gplus/user/upload",
						        done: function (e, response) {
						        	appUtil.hideOverlay();
						        	var statuscode = response.result.statusCode;
						        	if(statuscode==0) {
						        		$("#status-msg").show();
						        		var communityGplususersSuccessView = new CommunityGplususersSuccessView({el:"#status-msg",model:response.result.data});
						        	}  else {
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
					   // appUtil.showLoader("content", "Sending CSV...");

					});
				
			},
});

var CommunityGplususersSuccessView = Backbone.View
.extend({			
	initialize : function() {
		_.bindAll(this, 'render');
		this.template = templateLoader.templates['CommunityGplususersSuccessView'];
		this.render();
	},

	render : function() {
		var html = this.template({data:this.model});
		$(this.el).html(html);
		return this;
	}
});
