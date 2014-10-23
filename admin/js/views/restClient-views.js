
	/**
	 * @author rdhason
	 * @version 1.0 Feb 05 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

var RestClientView = Backbone.View.extend({
			el: $('#content'),
			
			initialize: function(){
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['adminRestClientView'];
			    this.render();
			},
			render : function() {
				var subMenuView = new SubMenuView({current: "menu-RestClient", model : adminMenuCollection,  el: '#sub-menu' });
				appUtil.makeSubNavPillActive('menu-RestClient');
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			
			
			events : {
				'click #requestSend': 'sendUrl'
			},	
			
			sendUrl: function(){
					var restUrl = $('#urlRequestDiv').val();
					$.trim(restUrl);
					if(restUrl.length<=0){
						$("#RestErrordiv").show();
						$("#RestErrordiv").html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Please fill the Fields.</span>");				
						return;
					}
					var method = $("#methods").val();
					var restUrl = $("#urlRequestDiv").val();
					var requestBody = $("#urlBody").val();
					
					var postData = {method:method, url:restUrl, body:requestBody};
					
					serviceUrl=apiPath + "admin/httpclient";
					appUtil.showLoader("RestClientAdminDiv", "Fetching....");
					
					$.ajax({
							url:serviceUrl,
							timeout:appUtil.extLibTimeout,
							data:postData,
							type:"POST",
							cache:false
						}).done(function(resp, textStatus, jqXHR){
									$("#returnDiv").text(JSON.stringify(resp));
									try{
									var prettyResponse = prettyPrint(resp,{
										maxDepth: 7
									});
									$("#prettyreturnDiv").html(prettyResponse);
									$("#prettyresult").trigger('click');
									}catch(e){
										
									}
									
									console.log(resp);
									// $('#testlbl').html('hello');
									// $("#restResponseDiv").append('<label>hello
									// akash</label>');
								 
						 }).fail(function(jqXHR, textStatus, errorThrown){
							//pplSearchHelper.showErrMsg("Service Unavailable");	
						}
							 
							// pplSearchHelper.showErrMsg("cache-view-profile");		
						 ).always(function(){					 
							 appUtil.hideLoader(); 
						 });
					   
				},

});
