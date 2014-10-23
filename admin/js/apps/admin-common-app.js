	
	/**
	 * @author rdhason
	 * @version 1.0 Feb 05 2014
	 * 
	 * Copyright (c) 2014 by --- IEEE
	 */
var adminMenuCollection = null;
	var adminCommonApp = {
			
		user: null,
		init:true,
		props:null,
		render : function(callbackFn) {
			
			if(adminCommonApp.init){
				
				HeaderSearchUtil.bindDropDownButtons();	
				
				var serviceUrl = apiPath + "admin/user"	;
				$.ajax({
					url:serviceUrl,						
					timeout:appUtil.loginTimeout,
					cache:false
				}).done(function(resp, textStatus, jqXHR){
					try {
						if((resp.statusCode==0) &&
								(resp.data!=null)){
							 var user = new User(resp.data.userInfo);
							 console.log("User Info : " + user);
							self.user = user;
							commonApp.user=user;
							var userInfo = user.attributes;
							
							//var modelObj = "";
							//var menuCollection = null;
							var menuArray = [];
							menuArray.push(new MenuItem({ title: "Admin",   link: "#admin",	icon: "icon_home.png",  id:"menu-Admin"}));
							var breakFromLoop = false;
							console.log(userInfo.roles);
							$.each(userInfo.roles, function(index, value){
								if(!breakFromLoop){
									var role = value.roleName;
									if (role == "Admin") {
										adminMenuCollection = AdminCollections.adminMenu;
										breakFromLoop = true;
									} else {
										 if (role == "CacheRefresh") {
											menuArray.push(new MenuItem({ title: "Cache", link: "#cache", icon: "icon_cache.png", id:"menu-Cache"}));
										 } else if (role == "CommunitySelenium") {
											 menuArray.push(new MenuItem({ title: "Selenium",        	  link: "#removeCommunityUsers"   ,	    icon: "icon_selenium.jpg",    	id:"menu-selenium"}));
										 } else if (role == "CommunityMgmt") {
											 menuArray.push(new MenuItem({ title: "Community",      	  link: "#GUpload", 	    			icon: "icon_comm.png",    		id:"menu-Community"}));
										 } else if (role == "ManageUserRoles") {
											 menuArray.push(new MenuItem({ title: "User Roles",    		  link: "#userroles"   ,	    		icon: "icon_userRoles.png",    	id:"menu-UserRoles"}));
										 }else if (role == "DocumentMgmt") {
											 menuArray.push(new MenuItem({ title: "Take Down",     		  link: "#takeDown"   ,	    			icon: "icon_library.png",       id:"menu-documentMgmt"}));
										 }else if (role == "SystemConfig") {
											 menuArray.push(new MenuItem({ title: "System Config",        link: "#restclient"   ,	   			icon: "icon_rest.jpg",    		id:"menu-RestClient"}));
										 }else if (role == "Amazons3Bucket") {
											 menuArray.push(new MenuItem({ title: "Amazon S3",       	  link: "#amazons3bucket"   ,	   		icon: "icon_tools.png",    		id:"menu-amazons3"}));
										 }
									}
								}
							});
							if (adminMenuCollection == null) {
								adminMenuCollection  =  new MenuCollection(menuArray);	
							}
							templateLoader.load("common", ["WidgetView", "MobileMenuView", "SubMenuView"],  function () {
							
								var subMenuView = new SubMenuView({current: "menu-Admin", model : adminMenuCollection,  el: '#sub-menu' });
								$("#sub-menu").show();
							
								if(typeof callbackFn.render === 'function'){
									callbackFn.render();
								}else if((callbackFn!== undefined) && 
										 ($.isArray(callbackFn))){
									
									$.each(callbackFn, function(index, value){
										value.render();
									});
								}
							});
						} else {
							 appUtil.showErrMsg("content");
						}
					} catch (e) {}
					
				}).fail(function(jqXHR, textStatus, errorThrown){						 
					appUtil.showErrMsg("content"); 
				});
				
				adminCommonApp.init=false;
			}else{
				$("#header-search-box").empty();
				if(typeof callbackFn.render === 'function'){
					callbackFn.render();
				}else if((callbackFn!== undefined) && 
						 ($.isArray(callbackFn))){
					
					$.each(callbackFn, function(index, value){
						value.render();
					});
				}
			}
			
			
			
		}
};