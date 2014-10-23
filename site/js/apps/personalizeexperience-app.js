var personalizeExperienceApp = {
	myScroll: null,
	render : function(){
		var self = this;
		templateLoader.load("personalizeexperience", [ "PersonalizeExperienceView" ],
			function () {
				self.renderPersonalizeExperience();
				self.commonLogic();
			}
		);
	},

	renderPersonalizeExperience: function() {
		var content = new ContentView({template: "PersonalizeExperienceView" });

		var self = this;
		$('a[href="#all-disciplines"]').on('shown.bs.tab', function (e) {
			var myScroll = self.myScroll;
			if (myScroll != undefined) {
				myScroll.destroy();
				myScroll = null;
			}
			myScroll = new IScroll('#alphabet-scroller', {
				//snap: '.block-items',
				scrollX: true,
				scrollY: false
			});
		});

		switch (commonApp.props.personalizeExperienceTab) {
			case "search":
				$('#search-tab .input-wrap input').val('control');
				$('.results-on-typing').show();
		       	$('.personalize-experience').hide();
				break;
			case "az":
				$('a[href="#all-disciplines"]').tab('show');
				break;
			case "your":
				$('a[href="#your-selections"]').tab('show');
				break;
			case "empty":
			case null:
			default:
				$("tab").html("Search Tab (Empty Dataset)");
		}
	},

	countActive: function() {
		var activeItems = $('.results-list li.active').length;

		if (activeItems > 0) {
			$('.apps-setup .btn-later').addClass('active');
			$('.your-selections.not-active').removeClass('not-active');
		} else {
			$('.apps-setup .btn-later').removeClass('active');
			$('.your-selections').addClass('not-active');
		}

		return activeItems;
	},

	commonLogic: function()  {
		var self = this;
		//Random images
		var promoArrays = [
			[ "com01.jpg", "com01.jpg" ], //1st composition
			[ "com02.jpg", "com02.jpg" ], //2nd composition
			[ "com03.jpg", "com03.jpg" ], //3rd composition
			[ "com04.jpg", "com04.jpg" ]  //4th composition
			[ "com05.jpg", "com05.jpg" ]  //5th composition
		];

		var randomArray = promoArrays[Math.floor(Math.random() * 100 * promoArrays.length) % promoArrays.length];

		var bgs = '';

		for(var i in randomArray) {
			bgs += '<img src="assets/img/bg/'+ randomArray[i] +'" alt="bg">';
		}

		$('#bg-images').html(bgs);

		$('.alphabet-list li a').click(function(){
			var item = $(this);

			item.parent('li').toggleClass('active');

			return false;
		});

		$('.alphabet-list-mobile li a').click(function(){
			var item = $(this);

			item.parent('li').toggleClass('active');

			return false;
		});

		// $('#search-tab .input-wrap input').keyup(function () {
		//     if ($(this).val()) {
		//        $('.results-on-typing').show();
		//        $('.personalize-experience').hide();
		//     }
		//     else {
		//        $('.results-on-typing').hide();
		//        $('.personalize-experience').show();
		//     }
		// });
		formTagsTypeAhead.init();

		$('.results-list li a').click(function(){
			var item = $(this);
			var itemIcon = item.find('.fa');

			item.parent('li').toggleClass('active');
			
			self.countActive();

			return false;
		});
		$('.your-selections').click(function(event){
			var target = $(this);
			if(target.hasClass('not-active')) {
				event.preventDefault();
				event.stopPropagation(); 
			}
		});

		appUtil.makeSubNavPillActive(); //for left sliding menu
	}
};
