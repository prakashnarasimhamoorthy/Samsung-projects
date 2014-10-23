var NetworkEventsView = Backbone.View.extend ({
	el: '#content',
	initialize: function (attrs) {
		var data = this.model != undefined ? this.model.toJSON() : null;
		for (attr in attrs) this[attr] = attrs[attr];

		var self = this;
		templateLoader.load('networkevents',[this.template],
			function (){
				var content =  templateLoader.templates[self.template]({data: data});
				self.$el.html(content);

				headerEventsSearchView.render();
				headerEventsMobileSearchView.render();
				var subMenuView = new SubMenuView({current: "Network" });
				var networkMenuView = new MenuView({ model : Collections.networkMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('li-events');

				// Common inits
				checkbox.init();

				//typeahead for Location
				locationFilterTypeAhead.init("#location-filter .form-control");

				$("#location-filter form.input-group").submit(function(e){
					e.preventDefault();

					var inp = $(this).find('input[type="text"].tt-input');
					var country = inp.val();

					var placeholder = inp.attr("placeholder");
					if(country.length < 5 || country == placeholder){
						return;
					}
					var html = $('\
						<label>\
							<input type="checkbox" class="checkbox" checked="checked"/>\
							<p>' +	country + ' (' + Math.floor(Math.random()*70+30) + ')</p>\
						</label>\
					');

					inp = $(this).find('.form-control.tt-input');
					inp.val('').blur();
					inp.val(placeholder);

					$("#location-filter .checkbox-group").append(html);
					checkbox.applyTo(html.find('input[type="checkbox"]'));
					locationFilterTypeAhead.init("#location-filter .form-control");
				});

				// Add icons for input datepicker
				$(".input-daterange .input-sm").after('<span class="icon-box"><i class="fa fa-calendar-o"></i></span>');

				$('.icon-box i').click(function(){
					$(this).parent().prev().focus();
				});

				// Carousels Sliders
				$('#recommended-scroller').each(function () {
					var myScroll = new IScroll("#" + $(this).attr('id'), {
						snap: false,
						scrollX: true,
						scrollY: false
					});
					$.data(this, 'IScroll', myScroll);
				});

				$('#viewall-scroller').each(function () {
					var myScroll = new IScroll("#" + $(this).attr('id'), {
						snap: true,
						scrollX: true,
						scrollY: false,
						disableTouch: true,
						disableMouse: true
					});
					$.data($('#viewall-scroller')[0], 'IScroll', myScroll);
				});

				// logic for a definite view
				if (typeof self.logic == "function") self.logic();
			}
		)
	}
});

var NetworkEventsDefaultView = NetworkEventsView.extend({
	template: "NetworkEventsDefaultView",
	model: networkEvents,
	logic: function (){
		$('#bootstrap-calendar').datepicker({
			keyboardNavigation: false,

			beforeShowDay: function (date){
				if (date.getMonth() == (new Date()).getMonth())
					switch (date.getDate()){
						case 13:
						case 14:
						case 15:
						case 16:
						case 17:
						case 18:
						case 27:
							return "highlighted";
					}
			}
		});
		$(".table-condensed th.next").html('<i class="fa fa-angle-right"></i>');
		$(".table-condensed th.prev").html('<i class="fa fa-angle-left"></i>');

		$('.bootstrap-calendar-2 .input-daterange').datepicker({
			keyboardNavigation: false,

			beforeShowDay: function (date){
				if (date.getMonth() == (new Date()).getMonth())
					switch (date.getDate()){
						case 13:
						case 14:
						case 15:
						case 16:
						case 17:
						case 18:
						case 27:
							return "highlighted";
					}
			}

		}).on("show", function(){
			// Set custom arrows for datepicker
			$(".datepicker .table-condensed th.next").html('<i class="fa fa-angle-right"></i>');
			$(".datepicker .table-condensed th.prev").html('<i class="fa fa-angle-left"></i>');
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

		$('.similar-box .close').click(function(){
			$(this).parents('.similar-box').hide('normal');
			$(this).parents('.person').removeClass('active');
			$(this).parents('.person').find('.similar-link').removeClass('active');
		});

		$('.checkbox-group input:checkbox').click(function(){
			var ckeckboxall = $(this).parents('.slide-box').find('.checkbox-all input');
			if ( ckeckboxall.hasClass('active')) {
				ckeckboxall.removeClass('active').checkbox('setChecked', false);
			}
		});

		$('#network-events .dropdown-menu').click(function(event) {
			event.stopPropagation();
			return false;
		});
		$("#network-events .btn-send").click(function (){
			$('#network-events .dropdown-menu').parent().removeClass('open');
		});

		$('.btn-more').click(function(e){
			e.preventDefault();
			var isHidden = $(this).html() == "More";
			$(this).text(isHidden ? "Hide" : "More");
			$(this).parent().find('.js-hid-text')[isHidden ? 'show' : 'hide']();
			$(this).parent().find('.js-cut-text')[isHidden ? 'hide' : 'show']();
		});

		$(".events-sidebar .events-next .info").click(function(e){
			e.preventDefault();
			$(".events-sidebar .events-next .info").removeClass('active');
			$(this).addClass('active');

			$(".network-events-detailed-view")
				.hide()
				.removeClass('collapsed')
				.slideDown('slow');
		});

		$(".network-events-detailed-view .btn-close").click(function(e){
			e.preventDefault();
			$(".network-events-detailed-view")
				.slideUp("slow", function (){
					$(this).addClass('collapsed')
					.show();
				});
			$(".recommended .info").removeClass('active');
		});

		$(".events-article .location .location-city").click(function(e){
			e.preventDefault();
			e.preventDefault();
			var $map = $(this).closest(".events-article").find(".google-maps");
			var $iframe = $map.find('iframe');
			$map.slideToggle("slow");
			var mapSrc = $iframe.attr('data-src');
			$iframe.attr('src', mapSrc);
		});

//		$(".google-maps").not('.network-events-detailed-view .google-maps, .network-events-detailed-all .google-maps').find('iframe').load(function(){
//			$(this).closest(".google-maps").hide();
//		});

		$(".google-maps").not('.network-events-detailed-view .google-maps, .network-events-detailed-all .google-maps').find('iframe').closest(".google-maps").hide();

		$(".calender-block-sm .btn-show-cal").click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".calender-block-sm .events-sidebar").slideDown();
			$("#bootstrap-calendar tbody").slideDown();
			$("#bootstrap-calendar thead tr:last-child").slideDown();
		});

		var $menu = $('#events-menu-right');

		$menu.mmenu({
			position	: 'right',
			classes		: 'mm-light',
			dragOpen	: true,
			counters	: true,
			searchfield	: false,
			labels		: {
				fixed		: !$.mmenu.support.touch
			},
			header		: {
				add			: true,
				update		: true,
				title		: 'Filter Options'
			}
		})
		.on( "opened.mm", function() {
			$('.mobile-filters').removeClass('active');
		})
		.on( "closed.mm", function() {
			$('.mobile-filters').addClass('active');
		});

		$("#location-filter-sm-xs form.input-group").submit(function(e){
			e.preventDefault();

			var inp = $(this).find('input[type="text"]');
			var country = inp.val();

			if(country == '' || country == inp.attr("placeholder"))  {
				return;
			}
			var html = $('<label><input type="checkbox"' +
				' class="checkbox" checked="checked"/><p>' + country + '</p></label>');
			$("#location-filter-sm-xs .checkbox-group").append(html);
			checkbox.applyTo(html.find('input[type="checkbox"]'));
			inp.val('').blur();
		});

	}
});

var NetworkEventsDetailedView = NetworkEventsView.extend({
	template: "NetworkEventsDetailedView",
	logic: function (){
		$('#bootstrap-calendar').datepicker({
			keyboardNavigation: false,

			beforeShowDay: function (date){
				if (date.getMonth() == (new Date()).getMonth()) {
					switch (date.getDate()) {
						case 13:
						case 14:
						case 15:
						case 16:
						case 17:
						case 18:
						case 27:
							return "highlighted";
					}
				}
			}
		});
		$(".table-condensed th.next").html('<i class="fa fa-angle-right"></i>');
		$(".table-condensed th.prev").html('<i class="fa fa-angle-left"></i>');

		$('.bootstrap-calendar-2 .input-daterange').datepicker({
			keyboardNavigation: false,

			beforeShowDay: function (date){
				if (date.getMonth() == (new Date()).getMonth())
					switch (date.getDate()){
						case 13:
						case 14:
						case 15:
						case 16:
						case 17:
						case 18:
						case 27:
							return "highlighted";
					}
			}

		}).on("show", function(){
			// Set custom arrows for datepicker
			$(".datepicker .table-condensed th.next").html('<i class="fa fa-angle-right"></i>');
			$(".datepicker .table-condensed th.prev").html('<i class="fa fa-angle-left"></i>');
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

		$('.similar-box .close').click(function(){
			$(this).parents('.similar-box').hide('normal');
			$(this).parents('.person').removeClass('active');
			$(this).parents('.person').find('.similar-link').removeClass('active');
		});

		$('.checkbox-group input:checkbox').click(function(){
			var ckeckboxall = $(this).parents('.slide-box').find('.checkbox-all input');
			if ( ckeckboxall.hasClass('active')) {
				ckeckboxall.removeClass('active').checkbox('setChecked', false);
			}
		});

		$('#network-events .dropdown-menu').click(function(event) {
			event.stopPropagation();
			return false;
		});
		$("#network-events .btn-send").click(function (){
			$('#network-events .dropdown-menu').parent().removeClass('open');
		});


		$(".events-sidebar .events-next .info").click(function(e){
			e.preventDefault();
			$(".events-sidebar .events-next .info").removeClass('active');
			$(this).addClass('active');

			$(".network-events-detailed-all").slideUp();
			$(".block-view-all").removeClass("active-btn");

			$(".network-events-detailed-view")
				.hide()
				.removeClass('collapsed')
				.slideDown('slow');
		});

		$(".network-events-detailed-view .btn-close").click(function(e){
			e.preventDefault();
			$(".network-events-detailed-view")
				.slideUp("slow", function (){
					$(this).addClass('collapsed')
						.show();
				});
			$(".recommended .info").removeClass('active');
		});

		$(".events-article .location .location-city").click(function(e){
			e.preventDefault();
			$(this).closest(".events-article").find(".google-maps").slideToggle("slow");
		});

		$(".calender-block-sm .btn-show-cal").click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".calender-block-sm .events-sidebar").slideDown();
			$("#bootstrap-calendar tbody").slideDown();
			$("#bootstrap-calendar thead tr:last-child").slideDown();
		});

		var $menu = $('#events-menu-right');

		$menu.mmenu({
			position	: 'right',
			classes		: 'mm-light',
			dragOpen	: true,
			counters	: true,
			searchfield	: false,
			labels		: {
				fixed		: !$.mmenu.support.touch
			},
			header		: {
				add			: true,
				update		: true,
				title		: 'Filter Options'
			}
		});

		$("#location-filter-sm-xs form.input-group").submit(function(e){
			e.preventDefault();

			var inp = $(this).find('input[type="text"]');
			var country = inp.val();

			if(country == '' || country == inp.attr("placeholder")){
				return;
			}
			var html = $('<label><input type="checkbox"' +
				' class="checkbox" checked="checked"/><p>' + country + '</p></label>');
			$("#location-filter-sm-xs .checkbox-group").append(html);
			checkbox.applyTo(html.find('input[type="checkbox"]'));
			inp.val('').blur();
		});

		//Slider
		$('.pagination .btn-right').click(function(){
			$('#viewall-scroller').data().IScroll.next();
		});

		$('.pagination .btn-left').click(function(){
			$('#viewall-scroller').data().IScroll.prev();
		});
	}
});

var NetworkEventsViewAllView = NetworkEventsView.extend({
	template: "NetworkEventsViewAllView",
	model: networkEvents,
	logic: function (){
		$('#bootstrap-calendar').datepicker({
			keyboardNavigation: false,

			beforeShowDay: function (date){
				if (date.getMonth() == (new Date()).getMonth()) {
					switch (date.getDate()) {
						case 13:
						case 14:
						case 15:
						case 16:
						case 17:
						case 18:
						case 27:
							return "highlighted";
					}
				}
			}
		});
		$(".table-condensed th.next").html('<i class="fa fa-angle-right"></i>');
		$(".table-condensed th.prev").html('<i class="fa fa-angle-left"></i>');

		$('.bootstrap-calendar-2 .input-daterange').datepicker({
			keyboardNavigation: false,

			beforeShowDay: function (date){
				if (date.getMonth() == (new Date()).getMonth())
					switch (date.getDate()){
						case 13:
						case 14:
						case 15:
						case 16:
						case 17:
						case 18:
						case 27:
							return "highlighted";
					}
			}

		}).on("show", function(){
			// Set custom arrows for datepicker
			$(".datepicker .table-condensed th.next").html('<i class="fa fa-angle-right"></i>');
			$(".datepicker .table-condensed th.prev").html('<i class="fa fa-angle-left"></i>');
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

		$('.similar-box .close').click(function(){
			$(this).parents('.similar-box').hide('normal');
			$(this).parents('.person').removeClass('active');
			$(this).parents('.person').find('.similar-link').removeClass('active');
		});

		$('.checkbox-group input:checkbox').click(function(){
			var ckeckboxall = $(this).parents('.slide-box').find('.checkbox-all input');
			if ( ckeckboxall.hasClass('active')) {
				ckeckboxall.removeClass('active').checkbox('setChecked', false);
			}
		});

		$('#network-events .dropdown-menu').click(function(event) {
			event.stopPropagation();
			return false;
		});
		$("#network-events .btn-send").click(function (){
			$('#network-events .dropdown-menu').parent().removeClass('open');
		});

		$(".events-sidebar .events-next .info").click(function(e){
			e.preventDefault();
			$(".events-sidebar .events-next .info").removeClass('active');
			$(this).addClass('active');

			$('.block-view-all').removeClass('active-btn');

			$('#view-all-widget').slideUp('slow');

			$(".network-events-detailed-view")
				.hide()
				.removeClass('collapsed')
				.slideDown('slow');
		});

		$('.btn-more').click(function(e){
			e.preventDefault();
			var isHidden = $(this).html() == "More";
			$(this).text(isHidden ? "Hide" : "More");
			$(this).parent().find('.js-hid-text')[isHidden ? 'show' : 'hide']();
			$(this).parent().find('.js-cut-text')[isHidden ? 'hide' : 'show']();
		});

		$(".events-sidebar .events-next .info").click(function(e){
			e.preventDefault();
			$(".events-sidebar .events-next .info").removeClass('active');
			$(this).addClass('active');

			$(".network-events-detailed-view")
				.hide()
				.removeClass('collapsed')
				.slideDown('slow');
		});

		$(".network-events-detailed-view .btn-close").click(function(e){
			e.preventDefault();
			$(".network-events-detailed-view")
				.slideUp("slow", function (){
					$(this).addClass('collapsed')
						.show();
				});
			$(".recommended .info").removeClass('active');
		});

		$(".btn-view-all").click(function(e){
			e.preventDefault();
			$('#view-all-widget')
				.hide()
				.removeClass('collapsed')
				.slideDown('slow');
			$('.block-view-all').addClass('active-btn');

			$(".network-events-detailed-view")
				.slideUp("slow", function (){
					$(this).addClass('collapsed')
						.show();
				});
			$(".recommended .info").removeClass('active');
		});

		$("#view-all-widget .btn-close").click(function(e){
			e.preventDefault();
			$("#view-all-widget")
				.slideUp("slow", function (){
					$(this).addClass('collapsed')
						.show();
				});
			$(".block-view-all").removeClass('active-btn');
		});

		$(".events-article .location .location-city").click(function(e){
			e.preventDefault();
			$(this).closest(".events-article").find(".google-maps").slideToggle("slow");
		});

		$('#results .events-article .google-maps iframe').load(function(){
			$(this).parent().hide();
		});

		$(".calender-block-sm .btn-show-cal").click(function(e){
			e.preventDefault();
			$(this).hide();
			$(".calender-block-sm .events-sidebar").slideDown();
			$("#bootstrap-calendar tbody").slideDown();
			$("#bootstrap-calendar thead tr:last-child").slideDown();
		});

		var $menu = $('#events-menu-right');

		$menu.mmenu({
			position	: 'right',
			classes		: 'mm-light',
			dragOpen	: true,
			counters	: true,
			searchfield	: false,
			labels		: {
				fixed		: !$.mmenu.support.touch
			},
			header		: {
				add			: true,
				update		: true,
				title		: 'Filter Options'
			}
		});

		$("#location-filter-sm-xs form.input-group").submit(function(e){
			e.preventDefault();

			var inp = $(this).find('input[type="text"]');
			var country = inp.val();

			if(country == '' || country == inp.attr("placeholder")){
				return;
			}
			var html = $('<label><input type="checkbox"' +
				' class="checkbox" checked="checked"/><p>' + country + '</p></label>');
			$("#location-filter-sm-xs .checkbox-group").append(html);
			checkbox.applyTo(html.find('input[type="checkbox"]'));
			inp.val('').blur();
		});

		//Slider
		$('.pagination .btn-right').click(function(){
			$('#viewall-scroller').data().IScroll.next();
		});

		$('.pagination .btn-left').click(function(){
			$('#viewall-scroller').data().IScroll.prev();
		});
	}
});
