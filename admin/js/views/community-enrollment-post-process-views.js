/**
 * @author pmathuku
 * @version 1.0 May 05 2014
 * 
 * Copyright (c) 2014 by --- IEEE
 */

/**
 * Renders the communities upload view.
 */
var CommunityEnrollmentPostPorcessView = Backbone.View
		.extend({		
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['CommunityEnrollmentPostPorcessView'];
				this.render();
			},

			render : function() {
				var subMenuView = new SubMenuView({current: "menu-Community", model : adminMenuCollection,  el: '#sub-menu' });
				var GPostprocessView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-GPostprocess');
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			
			events : {
				'click #btn-submit' : 'communityPostProcess'
			},
			

			communityPostProcess : function() {
				$(function() {
					$("#status-msg").hide();
					$("#error-div").hide();

					appUtil.showLoader("admin_userprofile", "Fetching Details....");
					var communityId = $('#cmtid').val();
					$.trim(communityId);
					if (communityId.length <= 0) {
						$("#error-div").show();
						$("#error-div")
								.html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Please provide the Community Id.</span>");
						return;
					}
					
					serviceUrl = apiPath + "admin/community/enrollment/postprocess?icoId="+ communityId;
					
						$.ajax({
								url : serviceUrl,
								dataType : "json",
								timeout : appUtil.extLibTimeout,
								data : null,
								cache : false
							})
							.done(function(resp, textStatus, jqXHR) {

										var statusCodeCheck = resp.statusCode;
										if (statusCodeCheck == 0) {
											
											$("#status-msg").show();
											var communityEnrollmentPostPorcessSuccessView = new CommunityEnrollmentPostPorcessSuccessView(
													{
														el : "#status-msg",
														model : resp.data
													});
										} else {
											$("#error-div").show();
											$("#error-div")
													.html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Not Able to process the request at this time -  "
																	+ response.result.statusMsg
																	+ "</span>");
										}
									}).fail(
									function(jqXHR, textStatus, errorThrown) {
										$('#errorMsg').show();
										$('#successMsg').hide();
									}).always(function() {
								appUtil.hideLoader();
							});
				});
			},
		});		

var CommunityEnrollmentPostPorcessSuccessView = Backbone.View
.extend({			
	initialize : function() {
		_.bindAll(this, 'render');
		this.template = templateLoader.templates['CommunityEnrollmentPostPorcessSuccessView'];
		this.render();
	},

	render : function() {
		var html = this.template({data:this.model});
		$(this.el).html(html);
		return this;
	}
});
