/**
 * @author pnarasim
 * @version 1.0 Oct 07, 2014
 * 
 * Copyright (c) 2014 by --- IEEE
 */

/**
 * Renders the communities upload view.
 */
var CommunitiesImageUploadView = Backbone.View
		.extend({			
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['CommunitiesImageUploadView'];
				this.render();
			},

			render : function() {
				var subMenuView = new SubMenuView({current: "menu-CommunityImageUpload", model : adminMenuCollection,  el: '#sub-menu' });
				var html = this.template();
				$(this.el).html(html);
				return this;
			},
			
			events : {
				'change #fileupload' 		: 'generateURL',
				'submit #imageUploadForm' 	: 'uploadImage',
				'change #image-size' 		: 'generateURL'
			},

			uploadImage: function(e) {
				e.preventDefault();
				var self = this;
				$("#status-msg").hide();
				$("#error-div").hide();
				var filePath = $('#fileUploadURL').val();
				var formData = new FormData($("#imageUploadForm")[0]);
				appUtil.showLoader("content", "Uploading Image File...");
				$.ajax({
						url: filePath,
						type: "POST",
						dataType:"json",
						contentType: false,
						processData: false,
						data:formData,
						cache:false
					}).done(function(resp, textStatus, jqXHR){
						var generatedURL = $("#generatedURL").html();
						$("#status-msg").html("<i class='fa fa-thumbs-o-up fa-2x' style='color:#3c763d;'></i><span class='text-success' style='margin-left: 5px;font-weight: bold;'> File Uploaded Successfully!!</span>").fadeIn(300);
						if(!$("#error-div").hasClass('ppcthide')) {
							$("#error-div").addClass('ppcthide').hide();
						}
						$("#generatedURL").hide().html("<a href='"+ generatedURL +"' target='_blank'>"+ generatedURL +"</a>").fadeIn(300);
					 }).fail(function(jqXHR, textStatus, errorThrown){	
						 $("#error-div").removeClass('ppcthide').show().html("<i class='fa fa-warning fa-2x' style='color:orange'></i><span class='text-danger' style='margin-left: 5px;font-weight: bold;'> Error in uploading the file!!</span>");
						 $("#status-msg").hide();
						 return false;
					 }).always(function(){
						 appUtil.hideLoader(); 
					 });
				return false;
			},
			
			generateURL: function(e) {
				var self = this;
				var fileUploadName = $("#fileupload").val().split(".");
				$("#status-msg").hide();
				$("#error-div").hide();
				var filenameText = (Math.random().toString()).substring(2) +"_"+ $("#image-size").val() +"."+ fileUploadName[fileUploadName.length - 1]; //$("#fileupload").val(); Get Random number
				serviceUrl=apiPath + "awshelper/getAuthPolicyForFilename";
				self.filesToUpload = e.target.files;
				$.ajax({
						url:serviceUrl,
						type: "POST",
						dataType:"json",
						timeout:appUtil.extLibTimeout,
						data:{filename : filenameText},
						cache:false
					}).done(function(resp, textStatus, jqXHR){
						 if(resp.statusCode==0){
							 try{
								 self.imageUploadData = resp.data;
								 var generatedURL = resp.data.upload_URL +"/"+ filenameText;
								 $("form.community-image-upload-form .generated-url").removeClass("ppct-hide");
								 $("#generatedURL").html(generatedURL);
								 $("#fileUploadURL").val(resp.data.upload_URL);
								 $("#fileUploadPolicy").val(resp.data.policy);
								 $("#fileUploadSignature").val(resp.data.signature);
								 $("#fileUploadAccessKey").val(resp.data.accesskey);
								 $("#fileUploadObjectKey").val(resp.data.objectkey);
							 }catch(e){								
								 pplSearchHelper.showErrMsg("Try Again");
								 $("form.community-image-upload-form .generated-url").removeClass("ppct-hide").addClass("ppct-hide");
							 }							
						 }else{
							 pplSearchHelper.showErrMsg("Cannot clear");
							 $("form.community-image-upload-form .generated-url").removeClass("ppct-hide").addClass("ppct-hide");
						 }
					 }).fail(function(jqXHR, textStatus, errorThrown){	
						 $('#errorMsg').show();
						 $('#successMsg').hide();
						 $("form.community-image-upload-form .generated-url").removeClass("ppct-hide").addClass("ppct-hide");
					 }).always(function(){					 
						 appUtil.hideLoader(); 
					 });
				   
			}
});

