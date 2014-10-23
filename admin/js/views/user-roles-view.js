/**
 * @author pmathuku
 * @version 1.0 May 05 2014
 * 
 * Copyright (c) 2014 by --- IEEE
 */

/**
 * Renders the communities upload view.
 */
var UserRoleAssocView = Backbone.View
		.extend({		
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['UserRoleAssocView'];
				this.render();
			},

			render : function() {
				var subMenuView = new SubMenuView({current: "menu-UserRoles", model : adminMenuCollection,  el: '#sub-menu' });
				var userRolesMenuView = new MenuView({ model : AdminCollections.userRolesMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-sub-userRoles');
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			
			events : {
				'click #btn-submit' : 'loadUserRolesDef'
			},
			

			loadUserRolesDef : function() {
				$(function() {
					$("#status-msg").hide();
					$("#error-div").hide();

					appUtil.showLoader("user-name-div", "Loading User Roles....");
					var userName = $('#username').val();
					$.trim(userName);
					if (userName.length <= 0) {
						$("#error-div").show();
						$("#error-div")
								.html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Please provide the User Name.</span>");
						return;
					}
					
					serviceUrl = apiPath + "admin/user/roles/def/?uname="+ userName;
					
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
											var userRoleAssocListView = new UserRoleAssocListView(
													{
														el : "#status-msg",
														model : resp.data
													});
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
		});		

var UserRoleAssocListView = Backbone.View
.extend({			
	initialize : function() {
		_.bindAll(this, 'render');
		this.template = templateLoader.templates['UserRoleAssocListView'];
		this.render();
	},

	render : function() {
		var html = this.template({data:this.model});
		$(this.el).html(html);
		return this;
	},
	events : {
		'click #addorUpdateRoles' : 'addorUpdateRoles',
		'click #deleteRolesBtn' : 'deleteRoles'
	},
	addorUpdateRoles : function() {
		appUtil.showLoader("roles-main", "Updating User Roles...");
		
		var userName = $('#username').val();
		if (userName.length <= 0) {
			$("#error-div").show();
			$("#error-div")
					.html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Please provide the User Name.</span>");
			return;
		}
		
		var rolesParam = "";
		var selectedRoles = $("#add-roles-div:not(.ppct-hide)").find("input[name='addRoles']:checked" );
		var selectedRolesArr = [];
			
			var i=0;
			selectedRoles.each(function(){
				if (selectedRolesArr.indexOf($(this).val()) == -1){
					selectedRolesArr[i] = $(this).val();
					i++;
				}
			});
			
			rolesParam = rolesHelper.setRolesParam(selectedRolesArr);
		
			serviceUrl = apiPath + "admin/user/roles/add?uname="+ userName +"&roles=" + rolesParam;
			$.ajax({
					url : serviceUrl,
					timeout : appUtil.extLibTimeout,
					data : null,
					cache : false
				})
				.done(function(resp, textStatus, jqXHR) {

							var statusCodeCheck = resp.statusCode;
							if (statusCodeCheck == 0) {
								$("#status-msg").show();
								var userRoleAssocListView = new UserRoleAssocListView(
										{
											el : "#status-msg",
											model : resp.data
										});
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
	deleteRoles : function() {

		appUtil.showLoader("roles-main", "Deleting User Roles...");
		
		var userName = $('#username').val();
		if (userName.length <= 0) {
			$("#error-div").show();
			$("#error-div")
					.html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span style='color:red'> Please provide the User Name.</span>");
			return;
		}
		
		var rolesParam = "";
		var selectedRoles = $("#delete-roles-div:not(.ppct-hide)").find("input[name='deleteRoles']:checked" );
		var selectedRolesArr = [];
			
			var i=0;
			selectedRoles.each(function(){
				if (selectedRolesArr.indexOf($(this).val()) == -1){
					selectedRolesArr[i] = $(this).val();
					i++;
				}
			});
			
			rolesParam = rolesHelper.setRolesParam(selectedRolesArr);
		
			serviceUrl = apiPath + "admin/user/roles/delete?uname="+ userName +"&roles=" + rolesParam;
			$.ajax({
					url : serviceUrl,
					timeout : appUtil.extLibTimeout,
					data : null,
					cache : false
				})
				.done(function(resp, textStatus, jqXHR) {

							var statusCodeCheck = resp.statusCode;
							if (statusCodeCheck == 0) {
								$("#status-msg").show();
								var userRoleAssocListView = new UserRoleAssocListView(
										{
											el : "#status-msg",
											model : resp.data
										});
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
	
	}
});

rolesHelper = {
		setRolesParam:function(roles){
			var rolesParam = "";
			if((roles!== undefined) &&
				(roles.length>0)){
					var lastRolesItemIndex = roles.length-1;
					$.each(roles, function(index, val){
						rolesParam+=val;
						if(lastRolesItemIndex!=index){
							rolesParam+="|";
						}
					});
			}
			return rolesParam;
		}
};


