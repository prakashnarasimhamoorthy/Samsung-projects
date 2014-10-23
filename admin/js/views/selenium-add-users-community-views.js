
/**
 * @author spannala
 */
var SeleniumAddUsersCommunityView = Backbone.View
		.extend({
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['SeleniumAddUsersCommunityView'];
				this.render();
			},

			render : function() {
				var subMenuView = new SubMenuView({current: "menu-selenium", model : adminMenuCollection,  el: '#sub-menu' });
				var addCommunityUsersView = new MenuView({ model : AdminCollections.seleniumMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-addCommunityUsers');
				this.addUsersToCommunitySelenium();
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			addUsersToCommunitySelenium : function () {
				$(function() {
					
					appUtil.showLoader("user-name-div", "Loading User Roles....");
					
					serviceUrl = apiPath + "admin/community/gplus/user/add/selenium";
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
											//var seleniumAddUsersCommunityView = new SeleniumAddUsersCommunityView();
										} else {
											$("#error-div").show();
											$("#error-div")
													.html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Not Able to process the request at this time -  "
																	+ resp.statusMsg
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

			events : {
				'click #fileupload' : 'uploadCSV'
			},

			uploadCSV : function() {
				$(function() {
					$("#status-msg").hide();
					$("#error-div").hide();
					try {
						$('#fileupload')
								.fileupload(
										{
											dataType : 'json',
											url : apiPath
													+ "admin/community/gplus/user/add",
											done : function(e, response) {
												appUtil.hideOverlay();
												var statuscode = response.result.statusCode;
												if (statuscode == 0) {
													$("#status-msg").show();
													var seleniumAddUsersCommunitySuccessView = new SeleniumAddUsersCommunitySuccessView(
															{
																el : "#status-msg",
																model : response.result.data
															});
												} else {
													$("#error-div").show();
													$("#error-div")
															.html(
																	"<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Not Able to process the request at this time -  "
																			+ response.result.statusMsg
																			+ "</span>");

												}
											},

										}).on(
										'fileuploadadd',
										function(e, data) {
											appUtil.showLoader("content",
													"Uploading csv...");

										}).on('fileuploadalways',
										function(e, data) {
											appUtil.hideLoader("content");
										});
					} catch (e) {
						console.log(e);
					}
					// appUtil.showLoader("content", "Sending CSV...");

				});

			},
		});

var SeleniumAddUsersCommunitySuccessView = Backbone.View
		.extend({
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['SeleniumAddUsersCommunitySuccessView'];
				this.render();
			},

			render : function() {
				var html = this.template({
					data : this.model
				});
				$(this.el).html(html);
				return this;
			}
		});
