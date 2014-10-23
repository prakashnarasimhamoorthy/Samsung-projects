
/**
 * @author sjeedigu
 */
var PreProcessEnrollmentView = Backbone.View.extend({
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['PreProcessView'];
				this.render();
			},

			render : function() {
				var subMenuView = new SubMenuView({current: "menu-Community", model : adminMenuCollection,  el: '#sub-menu' });
				var preEnrollmentView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-preEnrollment');
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			events : {
				'click #btn-submit-Pre': 'SubmitConfirmation'
			},	
			
			SubmitConfirmation : function () {
					serviceUrl = apiPath + "admin/community/enrollment/preprocess";
					appUtil.showLoader("preproEnr", "Working on Pre-Process Enrollment....");
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
											$("#hidDiv").hide();
											new PreProcessEnrollmentSuccessView(
													{
														el:$("#statDiv"),
													model : resp.data});
											
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
			},
});

var PreProcessEnrollmentSuccessView = Backbone.View.extend({
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['PreProcessEnrollmentSuccessView'];
				this.render();
			},

			render : function() {
					var html = this.template();
					$(this.el).html(html);
					return this;
			}
		});
