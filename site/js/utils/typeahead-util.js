var typeAhead = {
	el : ".search-text",

	searchTermsPeople: [
		{
			"name":"Marco Pangos - Senior Member IEEE",
			"description" : "Director Sales, Southern Europe & Latin America - 4RF Limited"
		},
		{
			"name":"IEEE/Don Bramlett",
			 "description" : "Project Engineer at DTE Energy"
		},
		{
			"name":"Tao Zhang, Ph.D., IEEE Fellow",
			 "description" : "Chief Scientist for Smart Connected Vehicles at Cisco Systems"
		},
		{
			"name":"Joseph Mandalath, CEng, Senior Member IEEE, FIE",
			 "description" : "Manager - Distribution Maintanance at Dubai Electricity & Water Authority (DEWA)"
		}
	],
	searchTermsCommunities: [
		{
			"name":"IEEE",
			"description" : "Automotive"
		},
		{
			"name":"IEEE",
			 "description" : "Nonprofit Organization Management"
		}
	],
	searchTermsActivities: [
		{	"name":"ieeeServices",
			"description":"i - Technologist Showcase Page"
		},
		{	"name":"ieeeServices",
			"description":"i - Technologist Showcase Page"
		}
	],
	searchTermsResearch: [
		{	"name":"Exploring and Exploiting the Multilevel Parallelism Inside SSDs for Improved Performance and Endurance IEEE",
			"description":"Yang Hu; Wuhan Nat. Lab. for Optoelectron., 2004.",
			"description2":"Huazhong Univ. of Sci. & Technol."
		},
		{	"name":"Cloud Computing Services Potential Analysis. An integrated model for evaluating Software as a Service",
			"description":"Claudio Cotar, 2009.",
			"description2":"Huazhong Univ. of Sci. & Technol."
		},
		{	"name":"A Study of Cloud Computing Software-as-a-Service (SaaS) in Financial Firms",
			"description":"H. Howell-Barber, James Lawler, 2010.",
			"description2":"Supriya Desai, Anthony Joseph"
		},
		{   "name":"Multilevel Parallelism Inside SSDs for Improved Performance and Endurance",
			"description":"Wuhan Nat. Lab. for Optoelectron., 2007.",
			"description2":"Huazhong Univ. of Sci. & Technol."
		}
	],

	init: function (){
		var self = this;

		if (commonApp.props.searchType == 'fa-user') {
			var bloodhound = new Bloodhound({
				limit: 5,
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: self.searchTermsPeople
			});

			bloodhound.initialize();

			$(this.el).typeahead({
		    	minLength: 3,
				highlight: true,
				hint: false
			},
			{	displayKey: 'name',
				source: bloodhound.ttAdapter(),
				templates: {
					header: '<div class="suggestion-header"><span>People</span></div>',
				    suggestion: _.template('\
				        <div class="table suggestion-item">\
							<div class="cell description">\
								<a href="#profile-searchresult">\
									<span class="name"><%= name %></span>\
									<span><%= description %></span>\
								</a>\
							</div>\
                        </div>\
				    ')
				}
			})
		} else if (commonApp.props.searchType == 'fa-users') {
			var bloodhound = new Bloodhound({
				limit: 5,
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: self.searchTermsCommunities
			});

			bloodhound.initialize();

			$(this.el).typeahead({
		    	minLength: 3,
				highlight: true,
				hint: false
			},
			{	displayKey: 'name',
				source: bloodhound.ttAdapter(),
				templates: {
					header: '<div class="suggestion-header"><span>Communities</span></div>',
				    suggestion: _.template('<div class="table suggestion-item">\
												<div class="cell description">\
													<a href="#profile-searchresult">\
														<span class="name"><%= name %></span>\
														<span><%= description %></span>\
													</a>\
												</div>\
				    						</div>')
				}
			});
		} else if (commonApp.props.searchType == 'fa-rocket') {
			var bloodhound = new Bloodhound({
				limit: 5,
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: self.searchTermsActivities
			});

			bloodhound.initialize();

			$(this.el).typeahead({
		    	minLength: 3,
				highlight: true,
				hint: false
			},
			{	displayKey: 'name',
				source: bloodhound.ttAdapter(),
				templates: {
					header: '<div class="suggestion-header"><span>Activities</span></div>',
				    suggestion: _.template('<div class="table suggestion-item">\
				    							<div class="cell description">\
													<a href="#profile-searchresult">\
														<span class="name"><%= name %></span>\
													</a>\
													<span><%= description %></span>\
												</div>\
				    						</div>')
				}
			});
		} else if (commonApp.props.searchType == 'fa-flask') {
			var bloodhound = new Bloodhound({
				limit: 5,
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: self.searchTermsResearch
			});

			bloodhound.initialize();

			$(this.el).typeahead({
		    	minLength: 3,
				highlight: true,
				hint: false
			},
			{	displayKey: 'name',
				source: bloodhound.ttAdapter(),
				templates: {
					header: '<div class="suggestion-header"><span>Research</span></div>',
				    suggestion: _.template('<div class="table suggestion-item">\
				    							<div class="cell description">\
													<a href="#profile-searchresult">\
														<span class="name"><%= name %></span>\
													</a>\
													<span><%= description %></span>\
													<span><%= description2 %></span>\
												</div>\
				    						</div>')
				}
			});
		} else if (
			commonApp.props.searchType == 'fa-globe' ||
			commonApp.props.searchType == 'fa-calendar-o'
			) {
			var searchPeople = new Bloodhound({
				limit: 5,
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: self.searchTermsPeople
			});
			var searchCommunities = new Bloodhound({
				limit: 5,
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: self.searchTermsCommunities
			});
			var searchActivities = new Bloodhound({
				limit: 5,
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: self.searchTermsActivities
			});
			var searchResearch = new Bloodhound({
				limit: 5,
				datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
				queryTokenizer: Bloodhound.tokenizers.whitespace,
				local: self.searchTermsResearch
			});

			searchPeople.initialize();
			searchCommunities.initialize();
			searchActivities.initialize();
			searchResearch.initialize();

			$(this.el).typeahead({
		    	minLength: 3,
				highlight: true,
				hint: false
			},
			{	name: 'people',
				displayKey: 'name',
				source: searchPeople.ttAdapter(),
				templates: {
					header: '<div class="suggestion-header"><span>People</span></div>',
				    suggestion: _.template('<div class="table suggestion-item">\
												<div class="cell description">\
													<a href="#profile-searchresult">\
														<span class="name"><%= name %></span>\
														<span><%= description %></span>\
													</a>\
												</div>\
				    						</div>')
				}
			},
			{	name: 'communities',
				displayKey: 'name',
				source: searchCommunities.ttAdapter(),
				templates: {
					header: '<div class="suggestion-header"><span>Communities</span></div>',
				    suggestion: _.template('<div class="table suggestion-item">\
												<div class="cell description">\
													<a href="#profile-searchresult">\
														<span class="name"><%= name %></span>\
														<span><%= description %></span>\
													</a>\
												</div>\
				    						</div>')
				}
			},
			{	name: 'activities',
				displayKey: 'name',
				source: searchActivities.ttAdapter(),
				templates: {
					header: '<div class="suggestion-header"><span>Activities</span></div>',
				    suggestion: _.template('<div class="table suggestion-item">\
				    							<div class="cell description">\
													<a href="#profile-searchresult">\
														<span class="name"><%= name %></span>\
													</a>\
													<span><%= description %></span>\
												</div>\
				    						</div>')
				}
			},
			{	name: 'research',
				displayKey: 'name',
				source: searchResearch.ttAdapter(),
				templates: {
					header: '<div class="suggestion-header"><span>Research</span></div>',
				    suggestion: _.template('<div class="table suggestion-item">\
				    							<div class="cell description">\
													<a href="#profile-searchresult">\
														<span class="name"><%= name %></span>\
													</a>\
													<span><%= description %></span>\
													<span><%= description2 %></span>\
												</div>\
				    						</div>')
				}
			});
		}
	}
}

var interestsTypeAhead = {
	el : ".search-text-interests",

	searchTermsPeople: [
		{	"name":"Aerospace control"	},
		{	"name":"Command and control systems"},
		{	"name":"Attitude control" },
		{	"name":"Voltage-controlled oscillators"	}
	],

	init: function (){
		var self = this;

		var bloodhound = new Bloodhound({
			limit: 5,
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: self.searchTermsPeople
		});

		bloodhound.initialize();

		$(this.el).typeahead({
	    	minLength: 3,
			highlight: true,
			hint: false
		},
		{
			displayKey: 'name',
			source: bloodhound.ttAdapter(),
			templates: {
			    suggestion: _.template('\
				    <div class="table suggestion-item">\
						<div class="cell description">\
							<span class="name"><%= name %></span>\
						</div>\
						<div class="cell action">\
							<a href="" class="btn"><i class="fa fa-plus"></i></a>\
						</div>\
	                </div>\
	            ')
			}
		});
	}
}

var peopleAddTypeAhead = {
	el : ".tags-input",

	searchTermsTags: [
		{   "name":"Marco Dangos",
			"description" : "Director Sales, Southern Europe & Latin America - 4RF Limited"
		},
		{	"name":"Don Bramlett",
			 "description" : "Project Engineer at DTE Energy"
		},
		{	"name":"Dao Zhang",
			 "description" : "Chief Scientist for Smart Connected Vehicles at Cisco Systems"
		},
		{	"name":"Joseph Mandalath",
			 "description" : "Manager - Distribution Maintanance at Dubai Electricity & Water Authority (DEWA)"
		}
	],

	init: function (){
		var self = this;

		var bloodhound = new Bloodhound({
			limit: 5,
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: self.searchTermsTags
		});

		bloodhound.initialize();

		$(this.el).tagsinput();
		$(this.el).tagsinput('input').typeahead({
	    	minLength: 1,
			highlight: true,
			hint: false
		},
		{	displayKey: 'name',
			source: bloodhound.ttAdapter(),
			templates: {
			    suggestion: _.template('\
			        <div class="table suggestion-item">\
						<div class="cell description">\
							<a>\
								<span class="name"><%= name %></span>\
								<span><%= description %></span>\
							</a>\
						</div>\
                    </div>\
				')
			}
		}).on('typeahead:selected', function (obj, datum) {

		   	var name = obj.currentTarget.value

		   	$('.tags-input').tagsinput('add', name);
		   	$('.bootstrap-tagsinput .twitter-typeahead input').val('');
		   	$('.bootstrap-tagsinput .twitter-typeahead input.tt-input').typeahead('val', '');

		});

		$('.bootstrap-tagsinput .twitter-typeahead input.tt-input').width('100%');
	}
}

var transferOwnerAddTypeAhead = {
	el : ".tags-input",

	searchTermsTags: [
		{	"name":"Marco Dangos",
			"description" : "Director Sales, Southern Europe & Latin America - 4RF Limited"
		},
		{	"name":"Don Bramlett",
			 "description" : "Project Engineer at DTE Energy"
		},
		{	"name":"Dao Zhang",
			 "description" : "Chief Scientist for Smart Connected Vehicles at Cisco Systems"
		},
		{	"name":"Joseph Mandalath",
			 "description" : "Manager - Distribution Maintanance at Dubai Electricity & Water Authority (DEWA)"
		}
	],

	init: function (){
		var self = this;

		var bloodhound = new Bloodhound({
			limit: 5,
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: self.searchTermsTags
		});

		bloodhound.initialize();

		$(this.el).tagsinput();
		$(this.el).tagsinput('input').typeahead({
	    	minLength: 1,
			highlight: true,
			hint: false
		},
		{	displayKey: 'name',
			source: bloodhound.ttAdapter(),
			templates: {
			    suggestion: _.template('\
			        <div class="table suggestion-item">\
						<div class="cell description">\
							<a>\
								<span class="name"><%= name %></span>\
								<span><%= description %></span>\
							</a>\
						</div>\
                    </div>\
				')
			}
		}).on('typeahead:selected', function (obj, datum) {

		   	var name = obj.currentTarget.value

		   	$('.tags-input').tagsinput('add', name);
		   	$('.bootstrap-tagsinput .twitter-typeahead input').val('');
		   	$('.bootstrap-tagsinput .twitter-typeahead input.tt-input').typeahead('val', '').typeahead('destroy');
		   	$('.bootstrap-tagsinput input').hide();

		});

		$('.bootstrap-tagsinput .twitter-typeahead input.tt-input').width('100%');
	}
}

var filesTypeAhead = {
	el : ".search-documents",

	searchTermsPeople: [
		{	"name":"Effective personalized IEEE reccomendation based on time-framed navigation clustering and associating meaning.",
			"description" : "Wang F.H., & Shao, H.M. (2004)."
		},
		{	"name":"Expert systems with Applications. IEEE",
			 "description" : "D Catteddu (2010)."
		},
		{	"name":"Personalized recommendation in social tagging systems using hierarchical clustering IEEE.",
			 "description" : "Shao, H.M. (2007)."
		}
	],

	init: function (){
		var self = this;

		var bloodhound = new Bloodhound({
			limit: 5,
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: self.searchTermsPeople
		});

		bloodhound.initialize();

		$(this.el).typeahead({
	    	minLength: 3,
			highlight: true,
			hint: false
		},
		{   displayKey: 'name',
			source: bloodhound.ttAdapter(),
			templates: {
			    suggestion: _.template('\
			        <div class="table suggestion-item">\
						<div class="cell description">\
							<a>\
								<span class="name"><%= name %></span>\
								<span><%= description %></span>\
							</a>\
						</div>\
                    </div>\
				')
			}
		});
	}
}

var locationFilterTypeAhead = {
	searchTermsLocations: [
		{ name: "US / USA" },
		{ name: "New Jersey, USA" },
		{ name: "Piscataway, NJ, USA" }
	],

	init: function (element){
		this.el = element;
		var self = this;

		var bloodhound = new Bloodhound({
			limit: 5,
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: self.searchTermsLocations
		});

		bloodhound.initialize();

		$(this.el).addClass('typeahead').typeahead({
				hint: false,
				highlight: true,
				minLength: 1
			},
			{	displayKey: 'name',
				source: bloodhound.ttAdapter()
			}
		);
	}
}

/**/
var formTagsTypeAhead = {
	el : ".file-tags-input",

	searchTermsTagsNew: [
		{	"category":"Communications systems",
			"id":1,
			"subcategories" : [{ "name" : "Communications systems control", "id" : 41}, {"name" : "Communications systems traffic control", "id": 42 }]
		},
		{	"category":"Aerospace control",
			"id":2,
			"subcategories" : [{ "name" : "Air traffic control", "id" : 51}, { "name" :"Attitude control", "id": 52 }, { "name" : "Ground support", "id": 53 }]
		},
		{	"category":"Oscillators",
			"id":3,
			"subcategories" : [{ "name" : "Digital-controlled oscillators", "id" : 61}, { "name" :"Voltage-controlled oscillators", "id": 62 }]
		},
		{	"category":"Computer applications",
			"id":4,
			"subcategories" : [{ "name" : "Control engineering computing", "id" : 71}]
		}
	],

	init: function (){
		var self = this;

		var bloodhound = new Bloodhound({
			limit: 5,
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('category'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: self.searchTermsTagsNew
		});

		bloodhound.initialize();

		$(this.el).tagsinput({
			confirmKeys: [],
			itemValue: 'value',
  			itemText: 'text',
			tagClass: function(item) {
			    if (item.treeStatus == 'parent-item') {
			    	return 'parent-item-tag';
		    	}
		    },
		});
		$(this.el).tagsinput('input').typeahead({
	    	minLength: 1,
			highlight: true,
			hint: false
		},
		{	displayKey: 'category',
			source: bloodhound.ttAdapter(),
			templates: {
			    suggestion: _.template('\
			        <div class="table suggestion-item">\
						<div class="cell description">\
						<span data-target="category" data-id="<%= id %>" class="name tags-category-name"><%= category %><i class="fa fa-caret-right"></i></span>\
								<ul>\
									<% _.each(subcategories, function(subcategory) { %>\
										<li data-target="subcategory" data-id="<%= subcategory.id %>" class="tags-subcategory-name"><%= subcategory.name %></li>\
									<% }) %>\
			    				</ul>\
						</div>\
                    </div>\
				')
			}
		}).on('typeahead:selected', function (obj, data) {
			obj.preventDefault();

		   	$('.bootstrap-tagsinput .twitter-typeahead input').val('');
		    $('.bootstrap-tagsinput .twitter-typeahead input.tt-input').typeahead('val', '');

		});

		$('.bootstrap-tagsinput .twitter-typeahead input.tt-input').width('100%');

		$( document ).on('click', '.tags-category-name', function() {
			var category = $(this);
			var categoryText = category.text();
			var categoryId = category.data('id');
			var subcategories = category.siblings('ul').find('.tags-subcategory-name');

			$('.file-tags-input').tagsinput('add', { 'value': categoryId, 'text' : categoryText, 'treeStatus' : 'parent-item' });

			subcategories.each(function(){
				var subcategory = $(this);
				var subcategoryId = subcategory.data('id');
				var subcategoryText = subcategory.text();

				$('.file-tags-input').tagsinput('add', { 'value': subcategoryId, 'text' : subcategoryText });
			});
		});

		$( document ).on('click', '.tags-subcategory-name', function() {
			var subcategory = $(this);
			var subcategoryText = subcategory.text();
			var subcategoryId = subcategory.data('id');
			var parentCategory = subcategory.parents('ul').siblings('.tags-category-name');
			var parentCategoryText = parentCategory.text();
			var parentCategoryId = parentCategory.data('id');

			$('.file-tags-input').tagsinput('add', { 'value' : parentCategoryId, 'text' : parentCategoryText, 'treeStatus' : 'parent-item' });
			$('.file-tags-input').tagsinput('add', { 'value' : subcategoryId, 'text' : subcategoryText});
		});
	}
}

var formTagsTypeAheadFileDrop = {
	el : ".file-tags-input-",

	searchTermsTagsNew: [
		{	"category":"Communications systems",
			"id":1,
			"subcategories" : [{ "name" : "Communications systems control", "id" : 41}, {"name" : "Communications systems traffic control", "id": 42 }]
		},
		{	"category":"Aerospace control",
			"id":2,
			"subcategories" : [{ "name" : "Air traffic control", "id" : 51}, { "name" :"Attitude control", "id": 52 }, { "name" : "Ground support", "id": 53 }]
		},
		{	"category":"Oscillators",
			"id":3,
			"subcategories" : [{ "name" : "Digital-controlled oscillators", "id" : 61}, { "name" :"Voltage-controlled oscillators", "id": 62 }]
		},
		{	"category":"Computer applications",
			"id":4,
			"subcategories" : [{ "name" : "Control engineering computing", "id" : 71}]
		}
	],

	init: function (dropedFileId){
		var self = this;

		var $targetInput = $(".file-tags-input-"+dropedFileId);

		var bloodhound = new Bloodhound({
			limit: 5,
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('category'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			local: self.searchTermsTagsNew
		});

		bloodhound.initialize();

		$targetInput.tagsinput({
		    confirmKeys: [],
		    itemValue: 'value',
			itemText: 'text',
			tagClass: function(item) {
			    if (item.treeStatus == 'parent-item') {
			    	return 'parent-item-tag';
		    	}
		    },
		});
		$targetInput.tagsinput('input').typeahead({
	    	minLength: 1,
			highlight: true,
			hint: false
		},
		{	displayKey: 'category',
			source: bloodhound.ttAdapter(),
			templates: {
			    suggestion: _.template('\
			        <div class="table suggestion-item">\
						<div class="cell description">\
						<span data-target="category" data-id="<%= id %>" class="name tags-category-title  tags-category-name-'+dropedFileId+'"><%= category %><i class="fa fa-caret-right"></i></span>\
								<ul>\
									<% _.each(subcategories, function(subcategory) { %>\
										<li data-target="subcategory" data-id="<%= subcategory.id %>" class="tags-subcategory-title tags-subcategory-name-'+dropedFileId+'"><%= subcategory.name %></li>\
									<% }) %>\
			    				</ul>\
						</div>\
                    </div>\
				')
			}
		}).on('typeahead:selected', function (obj, data) {
			obj.preventDefault();

		   	$('.bootstrap-tagsinput .twitter-typeahead input').val('');
		    $('.bootstrap-tagsinput .twitter-typeahead input.tt-input').typeahead('val', '');

		});

		$('.bootstrap-tagsinput .twitter-typeahead input.tt-input').width('100%');

		$( document ).on('click', '.tags-category-name-'+dropedFileId, function() {
			var category = $(this);
			var categoryText = category.text();
			var categoryId = category.data('id');
			var subcategories = category.siblings('ul').find('.tags-subcategory-name-'+dropedFileId);

			$targetInput.tagsinput('add', { 'value': categoryId, 'text' : categoryText, 'treeStatus' : 'parent-item' });

			subcategories.each(function(){
				var subcategory = $(this);
				var subcategoryId = subcategory.data('id');
				var subcategoryText = subcategory.text();

				$targetInput.tagsinput('add', { 'value': subcategoryId, 'text' : subcategoryText });
			});
		});

		$( document ).on('click', '.tags-subcategory-name-'+dropedFileId, function() {
			var subcategory = $(this);
			var subcategoryText = subcategory.text();
			var subcategoryId = subcategory.data('id');
			var parentCategory = subcategory.parents('ul').siblings('.tags-category-name-'+dropedFileId);
			var parentCategoryText = parentCategory.text();
			var parentCategoryId = parentCategory.data('id');

			$targetInput.tagsinput('add', { 'value' : parentCategoryId, 'text' : parentCategoryText, 'treeStatus' : 'parent-item' });
			$targetInput.tagsinput('add', { 'value' : subcategoryId, 'text' : subcategoryText});
		});
	}
}
