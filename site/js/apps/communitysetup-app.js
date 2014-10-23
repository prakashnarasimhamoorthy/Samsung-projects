var communityAutoEnrollmentApp = {
	render : function(){
		var self = this;
		templateLoader.load("communitysetup", [ "CommunityAutoEnrollmentView" ],
			function () {
				self.renderCommunityAutoEnrollment();
				self.commonLogic();
			}
		);
	},

	renderCommunityAutoEnrollment: function() {
		var content = new ContentView({template: "CommunityAutoEnrollmentView" });
	},

	commonLogic: function()  {
		//Random images
		var promoArrays = [
			[ "01.jpg",   "01.jpg"   ], //1st composition
			[ "02.jpg",   "03.jpg"   ], //2nd composition
			[ "bg04.jpg", "bg05.jpg" ]  //3rd composition
		];

		var randomArray = promoArrays[Math.floor(Math.random() * 100 * promoArrays.length) % promoArrays.length];

		var bgs = '';

		for(var i in randomArray) {
			bgs += '<img src="assets/img/bg/'+ randomArray[i] +'" alt="bg">';
		}

		$('#bg-images').html(bgs + bgs); //2 times for 4 images on mobile view
		appUtil.makeSubNavPillActive(); //for left sliding menu
	}
};

var communityGetInvited = {
	render : function(){
		var self = this;
		templateLoader.load("communitysetup", [ "CommunityGetInvitedView" ],
			function () {
				self.renderCommunityGetInvited();
				communityAutoEnrollmentApp.commonLogic();
			}
		);
	},

	renderCommunityGetInvited: function() {
		var content = new ContentView({template: "CommunityGetInvitedView" });
	}
};
