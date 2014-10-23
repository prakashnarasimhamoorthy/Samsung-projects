
	/**
	 * @author rdhason
	 * @version 1.0 Feb 05 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

var BatchView = Backbone.View.extend({
			el: $('#content'),
			
			initialize: function(){
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['rollbackview'];
			    this.render();
			},
			render : function() {
				var subMenuView = new SubMenuView({current: "menu-Community", model : adminMenuCollection,  el: '#sub-menu' });
				var batchRollbackView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-GRollback');
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			
			
			events : {
				'click #btn-batch': 'getBatch'
			},	
			
			getBatch: function(){
					appUtil.showLoader("admin_userprofile", "Fetching....");
					var batchId = $('#rbatchid').val();
					$.trim(batchId);
					if(batchId.length<=0){
						$('#valMsg').show();					
						return;
					}
					
					serviceUrl=apiPath + "admin/community/revert/" + batchId;
					
					$.ajax({
							url:serviceUrl,
							dataType:"json",
							timeout:appUtil.extLibTimeout,
							data:null,
							cache:false
						}).done(function(resp, textStatus, jqXHR){
							 $('#batresults').show();
							 if(resp.statusCode==0){
								 	$('#sMsg').show();
								    $('#eMsg').hide();
								    $('#valMsg').hide();
							 }else{
								    $('#eMsg').show();	
								    $('#sMsg').hide();
								    $('#valMsg').hide();
							 }		 
						 }).fail(function(jqXHR, textStatus, errorThrown){
							//pplSearchHelper.showErrMsg("Service Unavailable");	
						}
							 
							// pplSearchHelper.showErrMsg("cache-view-profile");		
						 ).always(function(){					 
							 appUtil.hideLoader(); 
						 });
					   
				},

});

