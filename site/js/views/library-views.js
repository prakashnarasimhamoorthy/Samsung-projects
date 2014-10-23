function libraryFiltersHide() {
	$('#files-filters').hide();
	$('.files-list').removeClass('col-md-9 col-lg-10');
}

function libraryFiltersShow(){
	$('#files-filters').show();
	$('.files-list').addClass('col-md-9 col-lg-10');
}

var LibraryView = Backbone.View.extend({
	el: '#content',
	model: new Backbone.Model(),
	initialize: function(attrs) {
		this.template = templateLoader.templates[attrs.template];
		this.render();
	},

	render: function(){
		var data = this.model.toJSON();
		var content = this.template(data);
		this.$el.html(content);

		function setRecommendedFilters() {
			var $checkboxes = $('#tab1 .checkbox-group label input');
			$checkboxes.removeAttr('checked');
			$($checkboxes[5]).attr('checked', 'checked');
			//.checkbox('setChecked', true);
		}

		function setMyPublicationsFilters() {
			var $checkboxes = $('#tab1 .checkbox-group label input');
			$checkboxes.removeAttr('checked');
			$($checkboxes[4]).attr('checked', 'checked');
			//.checkbox('setChecked', true);

			var slidearrow = $('#tab2 .slide-arrow');
			slidearrow
				.removeClass('fa-chevron-up').addClass('fa-chevron-down')
				.siblings('.slide-box').hide();

			slidearrow = $('#tab4 .slide-arrow');
			slidearrow
				.removeClass('fa-chevron-down').addClass('fa-chevron-up')
				.siblings('.slide-box').show();

			$checkboxes = $('#tab4 .checkbox-group label input');
			$checkboxes.removeAttr('checked');
			$($checkboxes[1]).attr('checked', 'checked');
			//.checkbox('setChecked', true);
		}

		libraryFiltersShow();

		$('a[href=".list-results"]').click(function() {
			$('.select').hide();
		});
		$('a[href=".table-results"]').click(function() {
			$('.select').show();
		});

		placeholder.init();

		var librarySettingsView = new LibrarySettingsView({template: "LibrarySettingsView"});

		var libraryToolsView = new LibraryToolsView({template: "LibraryToolsView"});

		var libraryTableView = new LibraryTableView({
			template: templateLoader.templates[ "LibraryTableView" ]
		});

		var libraryListView = new LibraryListView({	template: templateLoader.templates[ "LibraryListView" ]	});

		$('.fa-search.show-input').click(function(){
			$this = $(this);
			$this.parents('.animated-search').addClass('visible');
			$this.parents('.animated-search').animate({
				width: "100%"
			}, 1000, function() {
				$this.siblings('.fa-times').show();
			});
			$this.next('span.twitter-typeahead').show();
			//$this.removeClass('show-input');
		});

		$('.slide-arrow').click(function(){
			var slidearrow = $(this);
			slidearrow.siblings('.slide-box').toggle('normal', function(){
				if ( slidearrow.siblings('.slide-box').is(':visible') ) {
					slidearrow.removeClass('fa-chevron-down fa-chevron-up').addClass('fa-chevron-up');
				} else {
					slidearrow.removeClass('fa-chevron-down fa-chevron-up').addClass('fa-chevron-down');
				}
			});
		});

		checkbox.init();

		$('.checkbox-all input').click(function() {
			$this = $(this);
			if (!$this.hasClass('active')) {
				$this.addClass('active').checkbox('setChecked', true);
				$this.parents('.slide-box').find('.checkbox-group input:checkbox').checkbox('setChecked', true);
			} else {
				$this.removeClass('active').checkbox('setChecked', false);
				$this.parents('.slide-box').find('.checkbox-group input:checkbox').checkbox('setChecked', false);
			}
		});
		$('.checkbox-group input:checkbox').click(function() {
			var checkboxall = $(this).parents('.slide-box').find('.checkbox-all input');
			if ( checkboxall.hasClass('active') ) {
				checkboxall.removeClass('active').checkbox('setChecked', false);
			}
		});

		function getCheckedCount() {
			var checkedCount = $mobileCheckBoxes.find('input:checked').length;
			$with_selected_mobile = $('#with-selected-mobile');
			$selectedNum = $with_selected_mobile.find('.selectedNum');
			if (checkedCount > 0) {
				$selectedNum.html(checkedCount);
				$with_selected_mobile.show();
			} else {
				$with_selected_mobile.hide();
			}
		}

		var $mobileCheckBoxes =	$('.checkbox-mobile');
		getCheckedCount();
		$mobileCheckBoxes.find('.btn-link').click(getCheckedCount);

		var $menu = $('#library-menu-right');
		$menu.mmenu({
			position	: 'right',
			classes		: 'mm-light',
			dragOpen	: true,
			counters	: true,
			searchfield	: false,
			labels		: {
				fixed : !$.mmenu.support.touch
			},
			header: {
				add   : true,
				update: true,
				title : 'Filter options'
			}
		})
		.on( "opened.mm", function() {
			$('.mobile-filter-btn').removeClass('active');
		})
		.on( "closed.mm", function() {
			$('.mobile-filter-btn').addClass('active');
		});

		$('.mobile-filter-btn').click(function (){
			$('#library-menu-right').trigger('open');
		});

		$('.filter-btn').click(function () {
			var $this = $(this);
			$this.toggleClass('active');
			if ($this.hasClass('active')){
				libraryFiltersShow();
			} else {
				libraryFiltersHide();
			}
		});

		//	Click a menu-item
		var $confirm = $('#confirmation');
		$menu.find( 'li a' ).not( '.mm-subopen' ).not( '.mm-subclose' ).bind(
			'click.example',
			function(e)	{
				e.preventDefault();
				$confirm.show().text( 'You clicked "' + $.trim( $(this).text() ) + '"' );
				$('#library-menu-right').trigger( 'close' );
			}
		);

		$('.btn-refine').click(function(){
			$('#library-menu-right').trigger( 'close' );
		});

		/* filters */
		$('.add-new-collection').click(function (){

		    new LibraryFiltersAddCollectionPopup({ popup: true });
		    return false;
		});

		$('.edit-collection').click(function (){
			var $this = $(this);
			var collectionName = $this.parents('label').find('span').text();

		    new LibraryFiltersRenameCollectionPopup({ popup: true, id : collectionName });
		    return false;
		});
	}
});

var LibraryFiltersAddCollectionPopup = PopupView.extend({
	template: "LibraryAddCollectionView",
	logic: function (){
		var self = this;

		$('.btn-cancel, .btn-create').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});

var LibraryFiltersRenameCollectionPopup = PopupView.extend({
	template: "LibraryRenameCollectionView",
	logic: function (){
		var self = this;
		self.$el.find('.collection-name').val(this.id);

		$('.btn-cancel, .btn-rename').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});


var LibrarySettingsView = ContentView.extend({
	el: "#library-settings",
	callback: function (){
		$(".interested-storage .box-btn-singup .btn-singup").click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".box-btn-singup .btn-singedup").show();
		});
	}
});

var LibraryToolsView = ContentView.extend({
	el: "#library-tools",
	callback: function (){

	}
});

var LibrarySearchOnlineView = Backbone.View.extend({
	el: "#content",
	model: libraryListItems,
	template: "LibrarySearchOnlineView",
	initialize: function (){
		var data = this.model.toJSON();
		var self = this;
		templateLoader.load("library", [self.template], function () {
			var content = templateLoader.templates[self.template]( { data: data });
			self.$el.html(content);
			self.render();
		});
	},
	render: function () {
		checkbox.init();

		$('.close-btn').click(function (){
			new LibraryView({ template: "LibraryView" });
			return false;
		});

		$('.search-select .dropdown-menu a').click(function (){
		    var $this = $(this);
			$this.parents('.dropdown-menu').find(' a').removeClass('active');
			$this.addClass('active');
			if ($this.hasClass('google-scholar')||
				$this.hasClass('academic-search')) {
				libraryFiltersHide();
			} else {
				libraryFiltersShow();
			}
			var name = $this.find('span').html();
			$('.search-source').html(name);
		});
		$('.search-select .ieee-explore.hidden-md.hidden-lg').click(function (){
			$('#library-menu-right').trigger('open');
		});

		$('.addition .dropdown-menu a').click(function (){
		    $(this).parents('.addition').html('<p class="added"><i class="fa fa-check"></i> Added</p>');
			return false;
		});
	}
});

var LibraryToolsView = ContentView.extend({
	el: "#library-tools",
	callback: function (){

	}
});

function libraryPopupInit() {
	templateLoader.load("library",[	"LibraryArticlePopupView" ],
		function () {
			$(".popup-toggle").click(function(){
				$('#files-table').find('.tbody .tr').show();
				$('.slidedown-window:visible').slideUp(function(){
					$(this).html("");
				});
				var trBox = $(this).parents('.tr'),
					trTitle = trBox.find('.popup-toggle').html();
				slideDownBox = $(this).parents('.tr').next('.slidedown-window');
				trBox.hide();
				slideDownBox.html(templateLoader.templates["LibraryArticlePopupView"]);
				slideDownBox.find('.pop-heading h4').html(trTitle);
				slideDownBox.slideDown();
				$('.btn-close-popup').click(function(){
					$(this).parents('.slidedown-window').slideUp(function(){
						$(this).html("");
					});
					trBox.show();
					return false;
				});
			});
			if (commonApp.props.triggerLibraryPopup) {
				commonApp.props.triggerLibraryPopup = false;
				$(".popup-toggle:first").click();
			}
		}
	);
}

var LibraryTableView = Backbone.View.extend({
	el: ".table-results",
	model: libraryTableItems,
	initialize: function(attrs) {
		this.template = attrs.template;
		this.render();
	},

	getCitationCount: function () {
		var citationCount = $('.generate-citation-popup .multiple-selected').length;
		if (citationCount == 0) {
			$('.generate-all-citation').hide();
		} else {
			var ending = ( citationCount != 1 ) ? "s" : "";
			$(".generate-all-citation .citation-counter").html( citationCount + " Citation" + ending);
		}
		return citationCount;
	},

	render: function(){
		var that = this;
		var data = {articles: that.model.toJSON()};

		var content = that.template(data);
		that.$el.html(content);

		checkbox.init();

		libraryPopupInit();

		/* Context Menu*/
		$('.tr').bind("contextmenu", function(event) {
			event.preventDefault();
			$("#library-custom-contextmenu:visible").hide();
			$("#library-custom-contextmenu").toggle(10).
				css({
					top: event.pageY + "px",
					left: event.pageX + "px"
				});
		});
		$(document).click(function(event) {
			if(!$(event.relatedTarget).is('#library-custom-contextmenu, #library-custom-contextmenu a')) {
				$("#library-custom-contextmenu").hide(10);
			}
		});
		$("#library-custom-contextmenu a").click(function(event){
			event.preventDefault();
			switch($(this).attr("data-action")) {
				case "generate": alert("Generate citation"); break;
				case "flag": alert("Flag for review"); break;
				case "review-1": alert("Review 1"); break;
				case "review-2": alert("Review 2"); break;
				case "review-3": alert("Review 3"); break;
				case "review-4": alert("Review 4"); break;
				case "review-5": alert("Review 5"); break;
				case "delete": alert("Delete"); break;
			}
		});
		/*/Context Menu*/

		$('.favorite').click(function (){
			$this = $(this);
			$this.toggleClass('active');
			if ($this.hasClass('active')){
				$this.attr('title', 'Remove from Favorites')
			} else {
				$this.attr('title', 'Add to Favorites')
			}
			return false;
		});

		$('.generate-citation-icon').click(function(){
			$('.generate-citation-popup').hide();
			$this = $(this);
			$this.toggleClass('active');
			if ($this.hasClass('active')){
				$this.next('.generate-citation-popup').show();
			} else {
				var popupBox = $this.next('.generate-citation-popup'),
					btnMultiple = popupBox.find('.btn-multiple');
				    popupBox.hide();
				if(btnMultiple.hasClass("multiple-selected")) {
					btnMultiple.removeClass("multiple-selected");
					that.getCitationCount();
				}
			}
			return false;
		});

		$('.generate-citation-popup .btn-multiple').click(function(event){
			if ($(this).hasClass("multiple-selected")) {
				$(this).removeClass("multiple-selected");
				$(this).parents('.generate-citation-popup').hide();
			} else {
				$(this).addClass("multiple-selected");
				$(this).parents('.generate-citation-popup').hide();
			}
			$(".generate-all-citation").show();
			that.getCitationCount();
			return false;
		});

		$('.search-option ul li a').click(function(){
			var link = $(this);

			link.parents('.search-option').find('li').removeClass('active');
			link.parents('li').addClass('active');

			return false;
		});

		$('.btn-generate-all').click(function(){
			new BibliographySelectWayView({popup:true});
			return false;
		});

		$('.research-collection-tab').click(function(){
			var $this = $(this);
			$('.view-tab-select').find('li.active').removeClass('active');
			$('.select-tab ').removeClass('active');
			$this.parents('.tab-menu-library').addClass('active');

			/*filters hide*/
			libraryFiltersHide();
		});
		$('.view-tab-select a').click(function(){
			$('.research-collection-tab').parents('.tab-menu-library').removeClass('active');
			$('.select-tab ').addClass('active');

			/*filters show*/
			libraryFiltersShow();
		});
	}
});

var LibraryListView = Backbone.View.extend({
	el: ".list-results",
	model: libraryListItems,
	initialize: function(attrs) {
		this.template = attrs.template;
		this.render();
	},

	render: function(){
		var that = this;
		var data = {articles: that.model.toJSON()};

		var content = that.template(data);
		that.$el.html(content);

		//libraryPopupInit();
	}
});

var LibraryRightNavView = Backbone.View.extend({
	initialize: function() {
		var self = this;
		templateLoader.load("library",["LibraryRightNavView"], function (){
			self.template = templateLoader.templates["LibraryRightNavView"];
			self.render();
		});
	},
	render: function(){
		this.$el.html(this.template());

		$('a.local-files').click(function () {
			new LibraryUploadView({ popup: true });
			$('li.add').removeClass('open')
			return false;
		});

		$('a.research-tools').click(function () {
			new LibraryResearchToolsChooseView({ popup: true });
			$('li.add').removeClass('open')
			return false;
		});

		$('a.search-online').click(function () {
			new LibrarySearchOnlineView();
			$('li.add').removeClass('open')
			return false;
		});

		$('.nav-tabs-select a').click(function(){
			var target = $(this);
				targetLi = target.parents('li');

			if (targetLi.hasClass('folder-view-tab')) {
				target.parents('.container').addClass('folder-view-active');
			} else {
				target.parents('.container').removeClass('folder-view-active');
			}
		});
		return this;
	}
});
