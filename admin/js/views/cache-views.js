
	/**
	 * @author rdhason
	 * @version 1.0 Feb 05 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */

	var CacheView = Backbone.View.extend({
			el: $('#content'),
			
			initialize: function(){
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['cacheview'];
			    this.render();
			},
			
			render: function(){
				var subMenuView = new SubMenuView({current: "menu-Cache", model : adminMenuCollection,  el: '#sub-menu' });
				//var communityUploadView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-Cache');
				var html = this.template();
				$(this.el).html(html);
			},
			
			events : {
				'click #btn-details': 'getDetails',
				'click #btn-cache-clear': 'clearSingleCache',
				'click #btn-cache-allclear': 'clearallCache',
				'click #btn-delete-users': 'deleteallUsers',
				'click #btn-app': 'getapplication'
				
						
			},
			
			getDetails: function(){
				appUtil.showLoader("admin_userprofile", "Fetching Details....");
				var custId = $('#customerNumber').val();
				$.trim(custId);
				serviceUrl=apiPath + "maintenance/user/getUserFromCache/"+custId;
				
				$.ajax({
						url:serviceUrl,
						dataType:"json",
						timeout:appUtil.timeout,
						data:null,
						cache:false
					}).done(function(resp, textStatus, jqXHR){
						 if(resp.statusCode==0){
							 try{
								$('#successMsg').show();
								$('#errorMsg').hide();
								$('#custdetails').show();
								$('#custidLbl').html(resp.data.userProfile.siebelMemberNumber);
								$('#userNameLbl').html(resp.data.userName);
								$('#firstNameLbl').html(resp.data.firstName);
								$('#lastnameLbl').html(resp.data.lastName);
								$('#emailLbl').html(resp.data.mailAlias);
								$('#socialLbl').html(resp.data.socialProfiles.GOOGLE);
								var key_Stor = resp.data.settings[0].key;
								var val_Stor = resp.data.settings[0].value;
								
								//var key_Stor;
								//val_Stor = null;
								/*
								 * 
								 * null
								 undefined
								 NaN
								 empty string ("")
								 0
								 false
								 
								 if key_Stor is not the above cases then it is true and goes into the condition
								 */
								if(!key_Stor){
									key_Stor = "No Storage Provider";
								}
								
								if(!val_Stor){
									val_Stor = "Not Available";
								}
								
								$('#settingsLbl').html(key_Stor +", " + val_Stor);
								
								
								
							 }catch(e){								
								 pplSearchHelper.showErrMsg("Try Again");						 
							 }							
						 }else{
							 pplSearchHelper.showErrMsg("Cannot clear");							 
						 }		 
					 }).fail(function(jqXHR, textStatus, errorThrown){
						 $('#errorMsg').show();
						 $('#successMsg').hide();
						// pplSearchHelper.showErrMsg("cache-view-profile");		
					 }).always(function(){					 
						 appUtil.hideLoader(); 
					 });
				   
			},
			
			clearSingleCache: function(){
				$('#custdetails').hide();
				appUtil.showLoader("admin_userprofile", "Clearing Cache....");
				var custId = $('#customerNumber').val();
				serviceUrl=apiPath + "maintenance/user/clearUserFromCache/"+custId;
				$.ajax({
						url:serviceUrl,
						dataType:"json",
						timeout:appUtil.extLibTimeout,
						data:null,
						cache:false
					}).done(function(resp, textStatus, jqXHR){
						 if(resp.statusCode==0){
							 try{
								$('#successMsg').show();
								$('#errorMsg').hide();
							 }catch(e){								
								 pplSearchHelper.showErrMsg("Try Again");						 
							 }							
						 }else{
							 pplSearchHelper.showErrMsg("Cannot clear");							 
						 }		 
					 }).fail(function(jqXHR, textStatus, errorThrown){	
						 $('#errorMsg').show();
						 $('#successMsg').hide();
						// pplSearchHelper.showErrMsg("cache-view-profile");		
					 }).always(function(){					 
						 appUtil.hideLoader(); 
					 });
				   
			},
			
			render: function(){
				var subMenuView = new SubMenuView({current: "menu-Cache", model : adminMenuCollection,  el: '#sub-menu' });
				//var communityUploadView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-Cache');
				var html = this.template();
				$(this.el).html(html);
			},
			
			clearallCache: function(){
				appUtil.showLoader("admin_userprofile", "Cleaning All Users from Cache...");
				var custId = $('#customerNumber').val();
				serviceUrl=apiPath + "maintenance/user/clearAllUsersFromCache/";
				$.ajax({
						url:serviceUrl,
						dataType:"json",
						timeout:appUtil.timeout,
						data:null,
						cache:false
					}).done(function(resp, textStatus, jqXHR){
						 if(resp.statusCode==0){
							 try{
								 $('#successMsg').show();
								 $('#errorMsg').hide();
							 }catch(e){								
								 pplSearchHelper.showErrMsg("Try Again");						 
							 }							
						 }else{
							 pplSearchHelper.showErrMsg("Cannot clear");							 
						 }		 
					 }).fail(function(jqXHR, textStatus, errorThrown){
						 $('#errorMsg').show();
						 $('#successMsg').hide();
						// pplSearchHelper.showErrMsg("cache-view-profile");		
					 }).always(function(){					 
						 appUtil.hideLoader(); 
					 });
				   
			},
			
			render: function(){
				var subMenuView = new SubMenuView({current: "menu-Cache", model : adminMenuCollection,  el: '#sub-menu' });
				//var communityUploadView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-Cache');
				var html = this.template();
				$(this.el).html(html);
			},
			
			deleteallUsers: function(){
				appUtil.showLoader("admin_userprofile", "Deleting Profile...");
				var userName = $('#userName').val();
				serviceUrl=apiPath + "maintenance/user/clearUserFromDB/"+userName;
				$.ajax({
						url:serviceUrl,
						dataType:"json",
						timeout:appUtil.timeout,
						data:null,
						cache:false
					}).done(function(resp, textStatus, jqXHR){
						 if(resp.statusCode==0){
							 try{
								$('#deleteMsg').show();
								$('#errorMsg').hide();
							 }catch(e){								
								 pplSearchHelper.showErrMsg("Try Again");						 
							 }							
						 }else{
							 pplSearchHelper.showErrMsg("Cannot clear");							 
						 }		 
					 }).fail(function(jqXHR, textStatus, errorThrown){
						 $('#errorMsg').show();
						 $('#deleteMsg').hide();
						// pplSearchHelper.showErrMsg("cache-view-profile");		
					 }).always(function(){					 
						 appUtil.hideLoader(); 
					 });
				   
			},
			
			render: function(){
				var subMenuView = new SubMenuView({current: "menu-Cache", model : adminMenuCollection,  el: '#sub-menu' });
				//var communityUploadView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-Cache');
				var html = this.template();
				$(this.el).html(html);
			},
			
			
			getapplication: function(){
				var appName = $('#appName').val();
				$.trim(appName);
				if(appName.length<=0){
					  $('#validMsg').show();					
					  return;
				}
				
				serviceUrl=apiPath + 'keymanagement/generateaccesskey';
				console.log("service url is",serviceUrl);
				appUtil.showLoader("admin_userprofile", "Generating Access Key...");
				$.ajax({
						url:serviceUrl,
						timeout:appUtil.extLibTimeout,
						data:{"applicationName": appName},
						cache:false,
						dataType:"json"
					}).done(function(resp, textStatus, jqXHR){
						 if(resp.statusCode==0){
							 
							var applicationView = new ApplicationView({
						    		el:$("#applicationDiv"),
						    		model: resp.data
						    	});
								$('#validMsg').hide();
								$('#successMsg').show();
						 }else{
							 $('#errorMsg').show();
							 $('#successMsg').hide();
						 }		 
					 }).fail(function(jqXHR, textStatus, errorThrown){
						 $('#errorMsg').show();
						 $('#successMsg').hide();
						// pplSearchHelper.showErrMsg("cache-view-profile");		
					 }).always(function(){					 
						 appUtil.hideLoader(); 
					 });
				   
			},
			
			render: function(){
				var subMenuView = new SubMenuView({current: "menu-Cache", model : adminMenuCollection,  el: '#sub-menu' });
				//var communityUploadView = new MenuView({ model : AdminCollections.communityMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('menu-Cache');
				var html = this.template();
				$(this.el).html(html);
			},

});
var ApplicationView = Backbone.View.extend({			
		initialize : function() {
			_.bindAll(this, 'render');
			this.template = templateLoader.templates['applicationview'];
			this.render();
		},

		render : function() {
			var html = this.template({data:this.model});
			$(this.el).html(html);
			return this;
		}
});