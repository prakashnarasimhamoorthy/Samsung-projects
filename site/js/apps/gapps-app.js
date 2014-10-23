var googleAppsExistingApp = {
	render : function(){
		var self = this;
		templateLoader.load("gapps", [ "GoogleAppsExistingView" ],
			function () {
				self.renderGoogleAppsExisting();
				self.commonLogic();
			}
		);
	},

	renderGoogleAppsExisting: function() {
		var content = new ContentView({template: "GoogleAppsExistingView" });
	},

	commonLogic: function()  {
		//Random images
		var promoArrays = [
			[ "gapps-1.jpg", "gapps-1.jpg" ], //1st composition
			[ "gapps-2.jpg", "gapps-2.jpg" ], //2nd composition
			[ "gapps-3.jpg", "gapps-3.jpg" ], //3rd composition
			[ "gapps-4.jpg", "gapps-4.jpg" ]  //4th composition
		];

		var randomArray = promoArrays[Math.floor(Math.random() * 100 * promoArrays.length) % promoArrays.length];

		var bgs = '';

		for(var i in randomArray) {
			bgs += '<img src="assets/img/bg/'+ randomArray[i] +'" alt="bg">';
		}

		$('#bg-images').html(bgs);
		appUtil.makeSubNavPillActive(); //for left sliding menu
	}
};

var googleAppsNewApp = {
	render : function(){
		var self = this;
		templateLoader.load("gapps", [ "GoogleAppsNewView" ],
			function () {
				self.renderGoogleAppsNew();
				googleAppsExistingApp.commonLogic();
			}
		);
	},

	renderGoogleAppsNew: function() {
		var content = new ContentView({template: "GoogleAppsNewView" });
	}
};
