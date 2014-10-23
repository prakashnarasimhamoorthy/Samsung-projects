/*serviceUrl=apiPath + "admin/api/user/clearUserFromCache";
		  $.ajax({
				url:serviceUrl,
				dataType:"json",
				timeout:appUtil.timeout,
				data:data,
				cache:false
			}).done(function(resp, textStatus, jqXHR){
				 if(resp.statusCode==0){
					 try{
						var cacheView = new CacheView({
								model:resp.data,
								el: $("#cache-view-profile")
						});
						if(showSocProfileInfo){
							MyProfileUtil.getSocialProfile();
						}
					 }catch(e){								
						 pplSearchHelper.showErrMsg("cache-view-profile");						 
					 }							
				 }else{
					 pplSearchHelper.showErrMsg("cache-view-profile");							 
				 }		 
			 }).fail(function(jqXHR, textStatus, errorThrown){						 
				 pplSearchHelper.showErrMsg("cache-view-profile");		
			 }).always(function(){					 
				$("#btn-settings-save").hide();						
				$(".btn btn-primary").show();
				$(document).scrollTop(0);
				 appUtil.hideLoader(); 
			 });

serviceUrl=apiPath + "admin/api/user/clearAllUsersFromCache";
		  $.ajax({
				url:serviceUrl,
				dataType:"json",
				timeout:appUtil.timeout,
				data:data,
				cache:false
			}).done(function(resp, textStatus, jqXHR){
				 if(resp.statusCode==0){
					 try{
						var allCacheView = new clearAllCacheView({
								model:resp.data,
								el: $("#cache-view-profile")
						});
						if(showSocProfileInfo){
							MyProfileUtil.getSocialProfile();
						}
					 }catch(e){								
						 pplSearchHelper.showErrMsg("cache-view-profile");						 
					 }							
				 }else{
					 pplSearchHelper.showErrMsg("cache-view-profile");							 
				 }		 
			 }).fail(function(jqXHR, textStatus, errorThrown){						 
				 pplSearchHelper.showErrMsg("cache-view-profile");		
			 }).always(function(){					 
				$("#btn-settings-save").hide();						
				$(".btn btn-primary").show();
				$(document).scrollTop(0);
				 appUtil.hideLoader(); 
			 });*/