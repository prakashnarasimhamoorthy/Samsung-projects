//COLLECTIONS
var MenuItem = Backbone.Model.extend({
	defaults: {
		title: "Not specified",
		link: "#",
		id: ""
				
	}
});

var MenuCollection = Backbone.Collection.extend({
	model: MenuItem
});

var AdminCollections = {
	adminMenu: new MenuCollection([
	    new MenuItem({ title: "Admin",            	  link: "#admin",       	    icon: "icon_home.png" ,   		id:"menu-Admin"}),
	    new MenuItem({ title: "Cache",            	  link: "#cache",       		icon: "icon_cache.png" ,   		id:"menu-Cache"}),
	    new MenuItem({ title: "Community",      	  link: "#GUpload", 	    	icon: "icon_comm.png",    		id:"menu-Community"}),
	    new MenuItem({ title: "Take Down",     		  link: "#docmgmt"   ,	        icon: "icon_library.png",       id:"menu-documentMgmt"}),
	    new MenuItem({ title: "User Roles",    		  link: "#userroles"   ,	    icon: "icon_userRoles.png",    	id:"menu-UserRoles"}),
	    new MenuItem({ title: "Amazon S3",        	  link: "#amazons3bucket"   ,	icon: "icon_tools.png",    		id:"menu-amazons3"}),
	    new MenuItem({ title: "Selenium",        	  link: "#removeCommunityUsers",icon: "icon_selenium.jpg",    	id:"menu-selenium"}),
	    new MenuItem({ title: "System Config",        link: "#restclient"   ,	    icon: "icon_rest.jpg",    		id:"menu-RestClient"}),
	    new MenuItem({ title: "Community Image Upload", link: "#communityimageupload"   ,	icon: "icon_comm.png",  id:"menu-CommunityImageUpload"})
   	]),
	communityMenu: new MenuCollection([
		new MenuItem({ title: "Community Upload ",    link: "#GUpload", 					icon: "icon_comm.png",    id:"menu-Communityupload"}),
		new MenuItem({ title: "g+ Users Upload",      link: "#GUsers", 	    				icon: "icon_comm.png",    id:"menu-Gplususers"}),
		new MenuItem({ title: "Post Enrollment",  	  link: "#GPostprocess",				icon: "icon_comm.png",    id:"menu-GPostprocess"}),
		new MenuItem({ title: "g+ Users RollBack",    link: "#GRollback"   ,				icon: "icon_comm.png",    id:"menu-GRollback"}),
		new MenuItem({ title: "PreEnrollment",        link: "#preEnrollment"   ,	    	icon: "icon_comm.png",    id:"menu-preEnrollment"}),
		new MenuItem({ title: "Remove Users",        link: "#removeUsers"   ,	    	    icon: "icon_comm.png",    id:"menu-removeUsers"}),
		
		]),
		
		userRolesMenu: new MenuCollection([
		                           		new MenuItem({ title: "User Roles",    link: "#userroles", 		icon: "icon_userRoles.png",    id:"menu-UserRoles"})
		                           		]),
	seleniumMenu: new MenuCollection([
							new MenuItem({ title: "Remove Users",         link: "#removeCommunityUsers"   ,	    icon: "icon_selenium.jpg",    id:"menu-removeCommunityUsers"}),
	                                  new MenuItem({ title: "Add Users",    		  link: "#addCommunityUsers"   ,	    icon: "icon_selenium.jpg",    id:"menu-addCommunityUsers"}),
	                                  

	                           		])
		
		};
