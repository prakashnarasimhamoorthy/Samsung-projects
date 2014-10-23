var User = Backbone.Model.extend();

var PPCTError = Backbone.Model.extend({
	defaults : {
		errorMsg : "We are facing some technical difficulties. Please try again."
	}
});

//MODELS
var Models = {
	title: new (Backbone.Model.extend({})),

	headerAvatar: new (Backbone.Model.extend({ // for Header email and picture
		defaults: {
			name:  'Tom Griffin',
			email: 'tom@thegrif.net',
	        image: 'header_avatar.png',
			visible: true
		}
	})),

	headerProfileLinks: new (Backbone.Model.extend({ // for Header email and picture
		defaults: {
	        image: 'header_avatar.png',
			visible: true
		}
	}))
};
