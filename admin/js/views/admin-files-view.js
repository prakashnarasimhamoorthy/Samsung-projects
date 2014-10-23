		/**
		 * @author Martin
		 * @version 1.0 
		 * 
		 * Copyright (c) 2014 by --- IEEE
		 */

		var AdminFilesView = Backbone.View.extend({

		    initialize: function(options){
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['AdminFilesView'];
				this.options = options;
				this.render();
				if (this.options !== undefined)
				{
					console.log(this.options);
				}
		    },
		    
		    filesData:null,
		    
		    /***
		     * It inits the owner filters
		     */
		    initSelect2OwnerFilter: function(){
		    	
		    	$('#filterByOwner').select2({
		    		width:"250px",
            		multiple:false,
    			    allowClear: true,
    			    minimumInputLength: 1,
    			    formatInputTooShort: "",
    			    placeholder: 'Filter by Owner',
    			    ajax: {
			            url: apiPath + "/peoplesearch/people/getPPCTUsersByName",
			            dataType: 'json',
			            quietMillis: 100,
			            id : function(e){return 1+random(10);},
			            data: function(term, page) {
			                return {
			                    name: term
			                };
			            },
			            results: function(data, page ) {
			            	console.log("OWNER Results reutrned.....");
			            	console.log(data);
			            	var ownerResults=[];
			            	$.each(data.data.hits,function(i,item){
			            		ownerResults.push({id:item.ppctId,text:item.fullName});
			            	})
			                return { results: ownerResults};
			            }
			        },
			        formatSelection: function(user) { 
			        	console.log("calling format selection");
			        	console.log(user);
			        	if (HeaderSearchUtil.filterPeopleSearchId === undefined)
			        	{
			        		HeaderSearchUtil.filterPeopleSearchId = [];
			        	}
			        	if (HeaderSearchUtil.selectedOwner){
			        		HeaderSearchUtil.filterPeopleSearchId = [];
				        	HeaderSearchUtil.filterPeopleSearchId.push(user);
			        	}
			        	return user.text;

			        },
			        initSelection : function (element, callback) {
			        	console.log("calling init selelction....");
			            if(HeaderSearchUtil.filterPeopleSearchId !== undefined && HeaderSearchUtil.filterPeopleSearchId.length != 0){
			            	$.each(HeaderSearchUtil.filterPeopleSearchId,function(i,item){
			            		callback(item);
				        	});	
			            }
			            
			        } 
			    });
		    	//This is needed to trigger initSelection and set default values on load
		    	$("#filterByOwner").select2("val", [""]);
		    	
		    	$("#filterByOwner").on("select2-close",(function (obj) {
		    		var filterId=[];
		        	if (HeaderSearchUtil.selectedOwner){
		        		HeaderSearchUtil.selectedOwner=false;
			        	$.each(HeaderSearchUtil.filterPeopleSearchId,function(i,item){
			        		filterId.push(item.id);
			        	});	
		        		searchResultsResourceFilterApp.render({filterPeople:filterId});
		        	}
		    	}));
		    	
		    	$("#filterByOwner").on("select2-selecting",(function (obj) {
		    		console.log("*******Capturing SELECTING");
		    		HeaderSearchUtil.selectedOwner=true;
		    	}));
		    	
		    	$("#filterByOwner").on("select2-removed",(function (obj) {
		    		console.log("*******Capturing REMOVAL");
		    		console.log(obj);
		    		var removeVal = obj.val;
		    		if (HeaderSearchUtil.filterPeopleSearchId !== undefined)
		        	{
		    			var tempObj=[];
		    			var filterOwnerId=[];
		    			$.each(HeaderSearchUtil.filterPeopleSearchId,function(i,item){
			        		if (item.id != removeVal)
			        		{
			        			tempObj.push(item);
			        			filterOwnerId.push(item.id);
			        		}
			        	});
		    			HeaderSearchUtil.filterPeopleSearchId=tempObj;
		    			
		    			searchResultsResourceFilterApp.render({filterPeople:filterOwnerId});
		    			
		        	}
		    	}));
		    },
		    
		    render: function(){
		    	var self = this;
		    	var html = this.template();
		    	$(this.el).html(html);
		    	
		    	this.initSelect2OwnerFilter();
		    	
		    	var xhr;
		    	
		    	var page_no = 1;
		    	
		    	if(this.options !== undefined && this.options.opt !== undefined && !isNaN(this.options.opt.pageNo) ){
					page_no = this.options.opt.pageNo;			
				}
		    	if(typeof result_size === 'undefined' || isNaN(result_size) ){
		    		result_size = 10;			
				}
				var ownerIds = [];
				
				if(HeaderSearchUtil.filterPeopleSearchId !== undefined && HeaderSearchUtil.filterPeopleSearchId.length > 0){
					$.each(HeaderSearchUtil.filterPeopleSearchId,function(i,item){
						ownerIds.push(item.id);
		        	});		
				}
				console.log("Posting to library ristk...YY:" + ownerIds);
				
				var key = HeaderSearchUtil.searchTerm;
				
				if(typeof key ==="undefined" || key==null || $.trim(key).length == 0){
					key="*";
				} 
				
				xhr = $.post(apiPath +"riskmitigation/search", { term: key, from: page_no, size: result_size, ownerIds: ownerIds });

				console.log("calling.. Key searched:" + key);
				
		    	xhr.done(function(response) {
		    		
		    		var statuscode = response.statusCode;
		    		var data = response.data;
		    		if(statuscode==0 && !$.isEmptyObject(data)){
		    			filesData = data;
		    		    var filesListView = appUtil.views["adminFilesListView"];
		    			
			    		if(filesListView != undefined){
			    			filesListView.remove().unbind();
				    	}
						
						if (data.totalHits!='undefined' && data.totalHits>0) {
							var pagination_obj = appUtil.getPaginationObj(data.totalHits, data.items,data.pageNumber);								
							SearchDocuments._showAdminPagination(pagination_obj);
						}
						
						appUtil.showLoader();
		    			 filesListView = new AdminFilesListView({
				    		collection: new FilesList(data.hits),
					        el:$(self.el).find("#files-el")
					    });

						appUtil.views["adminFilesListView"] = filesListView;
						appUtil.hideLoader();
//						appUtil.activateLibraryTabs("myFileBtn");
//						$(".listFile").parent().addClass('active');
						
						ppct_mathjax.renderMathJax('files-el');
						if(HeaderSearchUtil.documentId !=null){
							$('.popup-toggle').click();
						}
				    }
		    		else {
		    			if(HeaderSearchUtil.filterPeopleSearchId === undefined || HeaderSearchUtil.filterPeopleSearchId.length == 0){
		    				$('#navResultHitsId').hide();
		    			}
		    			if (response !== undefined && response.data == undefined)
		    			{	
		    				response.data = {};
		    				response.data.model = {};
		    			}
		    			SearchDocuments._showErrorMsg(response);	
		    		}

				});
		    	
		    	if(appUtil.hasStorageProviderConsent()){
		    		$('#driveIconMobile').css("display", "none");
		    		}else {
		    		$('#driveIconMobile').css("display", "inline");
		    	}
		    }
		});
		
		var AdminFilesListView = Backbone.View.extend({
			
			selectedList: [],
			
			generateCitationList: [],
		
			initialize: function(){
				  var self = this;
				  _.bindAll(this, 'render');
				  this.template = templateLoader.templates['AdminFilesListView'];
				  self.render();

			},

			 render: function(){
				   this.selectedList = [];
				   this.generateCitationList =  [];
				   var self = this;
				   var html = this.template();
				   $(this.el).html(html);
				   
					$("#navResultHitsId").on("keypress", ".filter-search-input.search-text", function(event) {
						console.log("FILTER key code___:" + event.keyCode);
						if (event.keyCode == 13){
							console.log("FILTER calling function");
							searchResultsResourceFilterApp.render(event);
						}
					});
					
				   if(self.collection.size()>0){
					   var i = 0;
					   _(self.collection.models).each(function(item){
						   i++;
						   item.index = i-1;
						  self.appendItem(item);
				      }, self);
				   }
				   else{
					   if(HeaderSearchUtil.filterPeopleSearchId === undefined || HeaderSearchUtil.filterPeopleSearchId.length == 0){
		    				$('#navResultHitsId').hide();
		    			}
					   self.renderNoFilesAvailable();
				   }
				   $(this.el).fadeIn('slow').removeClass("hidden"); 
			},
			
			appendItem: function(item){
				var itemView = new AdminFilesListItemView({
			        model: item
			      });
				  
				  $(this.el).find("#files-table-el").append(itemView.render(item).el);
			},
			
			appendList: function(list){
			 	var self = this;
			 	_(list.models).each(function(item){
			 		self.appendItem(item);
			 		
		     	}, this);
			},
			
			renderNoFilesAvailable: function(){
				var html;
				var filterValue = $('input[name=filters]:checked', '#docFilters').val();
				if ((filterValue == "filters-selectAll" || filterValue == undefined) && $('.library-search-input').val() == '' && Object.keys(SearchDocuments._facetsMap).length <=0){
				   html = templateLoader.templates['NoFilesAllView'](); 
				} else {
					 html = templateLoader.templates['NoFilesView'](); 
				}

				$('#filesTbl').hide();
		    	$("#no-of-results").hide();
		    	$("#keywords-filter").hide();
		    	$("#document-pagination-top").hide();
		    	$("#document-pagination-bottom").hide();
				$("#messageDiv").html(html);
				SearchDocuments._hideFacetView();
			}
			
		});
		

		var AdminFilesListItemView = Backbone.View.extend({
			
			initialize: function(){
		      _.bindAll(this, 'render');
		      this.template = templateLoader.templates['AdminFilesListItemView'];
		    },
		    
		    events :{
		    	'click div.takeDownAction a.btn-investigate':'investigate',
		    	'click div.takeDownAction a.btn-reinstate':'reinstate',
		    	'click div.takeDownAction a.btn-remove':'remove'
		    },
		    
		    disposeView:function(view){
		    	Backbone.View.prototype.close = function() {
					this.unbind();
					this.undelegateEvents();
				};
				if(this.currentView !== undefined){
					this.currentView.close();
				}
				this.currentView = view;
				this.currentView.delegateEvents();
				return this.currentView;
			},

		    render: function(item){
		    	this.model.set('index', item.index);
		    	console.log("FILES LIST ITEM121212");
		    	var html = this.template(this.model.toJSON());
		    	$(this.el).html(html);
		    	$(this.el).find('.generate-citation-icon').attr('itemname',this.model.get('internalId'));
		    	
		    	return this;
		    },
		    
		    investigate : function(evt)
		    {	
		    	var element = $(evt.target);
		    	if (evt.target.nodeName == "I" || evt.target.nodeName == "i"){
		    		element = $(evt.target).parent();
		    	}

		    	var documentId = $(element).attr('data-documentId');
		    	console.log("Investigate document element: " + $(element).attr('data-documentId'));
	    		
		    	appUtil.showLoader();
	
		    	var xhr = $.get(apiPath +"riskmitigation/putDocInInvestigation", { docId: documentId});
		    	
		    	xhr.done(function(response) {

		    		var statuscode = response.statusCode;
		    		if(statuscode==0){
		    			$(element).parent().html('<a href="#" class="btn btn-reinstate pplna-icxgcal" data-documentId="'+ documentId + '"><i class="fa fa-reply"></i>Reinstate</a>');
		    		}
		    		appUtil.hideLoader();
		    	});
		    },
		    
		    reinstate : function(evt)
		    {
		    	var element = $(evt.target);
		    	if (evt.target.nodeName == "I" || evt.target.nodeName == "i"){
		    		element = $(evt.target).parent();
		    	}
		    	var documentId = $(element).attr('data-documentId');
		    	console.log("Reinstate document: " + documentId);
		    	appUtil.showLoader();
		    	
		    	var xhr = $.get(apiPath +"riskmitigation/reinstateDoc", { docId: documentId});
		    	
		    	xhr.done(function(response) {
		    		var statuscode = response.statusCode;
		    		if(statuscode==0){
		    			$(element).parent().html('<a href="#" class="btn btn-investigate pplna-icxgcal" data-documentId="'+ documentId + '"><i class="fa fa-gavel"></i>Investigate</a>');
		    		}
		    		appUtil.hideLoader();
		    	});
		    },
		    
		    remove : function(evt)
		    {
		    	var element = $(evt.target);
		    	if (evt.target.nodeName == "I" || evt.target.nodeName == "i"){
		    		element = $(evt.target).parent();
		    	}
		    	var documentId = $(element).attr('data-documentId');
		    	appUtil.showLoader();
		    	var xhr = $.get(apiPath +"riskmitigation/deleteDocument", { docId: documentId})

		    	xhr.done(function(response) {
		    		
		    		var statuscode = response.statusCode;
		    		if(statuscode==0){
		    			
		    			var filterId = [];
		    			if (HeaderSearchUtil.filterPeopleSearchId !== undefined && HeaderSearchUtil.filterPeopleSearchId.length != 0){
				        	$.each(HeaderSearchUtil.filterPeopleSearchId,function(i,item){
				        		filterId.push(item.id);
				        	});	
			        	}
		    			$(document.body).css({ 'cursor': 'wait' });
		    			$(element).text('Removing...').delay(1000).queue(function() {
		    				$(document.body).css({ 'cursor': 'default' });
		    	            searchResultsResourceFilterApp.render({filterPeople:filterId});
		    	        }); 
		    		}
		    		appUtil.hideLoader();
		    	});
		    }
		  });
		

		var AdminFilesPaginationView = Backbone.View.extend({
			initialize : function() {
				_.bindAll(this, 'render');
				this.template = templateLoader.templates['AdminFilesPaginationView'];
				this.render();
			},

			render : function() {
				var html = this.template(this.model.toJSON());
				$(this.el).html(html);	
				this.bindahead();
				return this;
			},
			bindahead : function() {
				console.log("ADMIN BUTTON CLICK");
				$("#paginationPrev, #paginationNext").off("click").on("click", SearchDocuments.getAdminSearchPage);
			}
		});    
		