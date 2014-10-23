/**
 * @author rdhason
 * @version 1.0 Feb 05 2014
 * 
 * Copyright (c) 2014 by --- IEEE
 */

var apiPath = "rest/api/";
var unsecureApiPath = "rest/";
window.Router = null;
var AdminRouter = Backbone.Router.extend({

	routes : {
		'' : 'initApp',
		'cache' : 'goCache',
		'admin' : 'goAdmin',
		'GPostprocess' : 'goPost',
		'Gcommunity' : 'goCommunitiesUpload',
		'GUsers' : 'goplususersUpload',
		'GRollback' : 'gorollBack',
		'GUpload' : 'goUpload',
		'addCommunityUsers' : 'goAddCommunityUsers',
		'userroles' : 'goUserroles',
		'removeCommunityUsers' : 'goRemoveCommunityUsers',
		'communityimageupload' : 'goCommunityImageUpload',
		'sysconfig' : 'goSysConfig',
		'preEnrollment' : 'goPreEnrollment',
		'removeUsers' : 'goRemoveUsers',
		'restclient' : 'goRestClient',		
		'takeDown':'goTakeDown',
		'search-resource(/:searchterm)':'goSearchResource',
		'search-researchGroup(/:searchterm)':'goSearchResearchGroup'
	},

	initialize : function() {
	},

	initApp : function() {
		adminCommonApp.render(adminMain);
	},
	
	goAdmin : function() {
		adminCommonApp.render(adminMain);
	},
	
	goCache : function() {
		adminCommonApp.render(cacheApp);
	},
	goPost : function() {
		adminCommonApp.render(communityEnrollmentPostPorcess);

	},

	goCommunitiesUpload : function() {
		adminCommonApp.render(communitiesUploadApp);
	},

	goplususersUpload : function() {
		adminCommonApp.render(communityGplususersUploadApp);
	},

	gorollBack : function() {
		adminCommonApp.render(batchApp);
	},

	goUpload : function() {
		adminCommonApp.render(communitiesUploadApp);
	},

	goRemoveCommunityUsers : function() {
		adminCommonApp.render(seleniumRemoveUsersCommunityApp);
	},
	goAddCommunityUsers : function() {
		adminCommonApp.render(seleniumAddUsersCommunityApp);
	},
	goPreEnrollment : function() {
		adminCommonApp.render(preProcessApp);
	},
	goUserroles : function() {
		adminCommonApp.render(userRoleAssocApp);
	},
	goSysConfig : function() {
		adminCommonApp.render(sysConfigApp);
	},
	goRemoveUsers : function() {
		adminCommonApp.render(removeUsersCommunityApp);
	},
	goRestClient : function() {
		adminCommonApp.render(restClientApp);
	},
	goTakeDown : function() {
		adminCommonApp.render(takeDown);
	},
	goSearchResource : function(searchterm){
		console.log("Admin route... goSearchResource:" + searchterm);
		HeaderSearchUtil.searchTerm = searchterm;
		HeaderSearchUtil.searchSource = "IEEE Resource";
		adminCommonApp.render(searchResultsResourceApp);
	},
	goSearchResearchGroup : function(searchterm){
		console.log("Admin route... goSearchResearchGroup:" + searchterm);
		HeaderSearchUtil.searchTerm = searchterm;
		HeaderSearchUtil.searchSource = "Research Group";
		adminCommonApp.render(searchResultsResearchGroupApp);
	},
	goCommunityImageUpload : function(){
	    adminCommonApp.render(communitiesImageUploadApp);
	}

});
var adminRouter = new AdminRouter();