var headerNotificationsModel = new (Backbone.Model.extend({
	defaults:[
		{ image: "person-1.png" },
		{ image: "person-2.png" },
		{ image: "person-3.png" },
		{ image: "person-4.png" },
		{ image: "person-5.png" },
		{ image: "person-6.png" },
		{ image: "person-7.png" },
		{ image: "person-8.png" },
		{ image: "person-9.png" }
	]
}));

var headerInviteModel = new (Backbone.Model.extend({
	defaults: {
		email:   "tom.griffin@hotmail.com",
		message: "I've joined PPCT, an online collaboration tool for electrical and electronic engineers and invite you to join. Visit http://ppct.com to join."
	}
}));

var headerInviteUsersModel = new (Backbone.Model.extend({
	defaults: {
		selected: 694,
		colleagues: [
			{ name: 'Bobby Hunt',       email: 'bobby.hunt@ieee.org' },
			{ name: 'Nancy Cooper',     email: 'nancy.cooper@ieee.org' },
			{ name: 'Christina Gibson', email: 'christina.gibson@ieee.org' },
			{ name: 'Ernest Gomez',     email: 'ernest.gomez@ieee.org' },
			{ name: 'Jacqueline Ellis', email: 'jacqueline.ellis@ieee.org' },

			{ name: 'Bobby Hunt',       email: 'bobby.hunt@ieee.org' },
			{ name: 'Nancy Cooper',     email: 'nancy.cooper@ieee.org' },
			{ name: 'Christina Gibson', email: 'christina.gibson@ieee.org' },
			{ name: 'Ernest Gomez',     email: 'ernest.gomez@ieee.org' },
			{ name: 'Jacqueline Ellis', email: 'jacqueline.ellis@ieee.org' },

			{ name: 'Bobby Hunt',       email: 'bobby.hunt@ieee.org' },
			{ name: 'Nancy Cooper',     email: 'nancy.cooper@ieee.org' },
			{ name: 'Christina Gibson', email: 'christina.gibson@ieee.org' },
			{ name: 'Ernest Gomez',     email: 'ernest.gomez@ieee.org' },
			{ name: 'Jacqueline Ellis', email: 'jacqueline.ellis@ieee.org' }
		]
	}
}));

var headerAddConnectionsModel = new (Backbone.Model.extend({
	defaults: {
		found: 738,
		connections: [
			{ avatar: "01.jpg", name: 'Russell Z. Washington', position: 'Assoc Pub at IEEE' },
			{ avatar: "02.jpg", name: 'Catherine P. Mcdonald', position: 'Client Services Manager at IEEE' },
			{ avatar: "03.jpg", name: 'Janet Woods',           position: 'Senior Conference Planner at IEEE Photonics Society' },
			{ avatar: "04.jpg", name: 'Brian Campbell',        position: 'President at Standards Strategies, LLC' },
			{ avatar: "05.jpg", name: 'Dennis Carter',         position: 'Senior Conference Planner at IEEE Photonics Society' },
			{ avatar: "06.jpg", name: 'Betty Gomez',           position: 'President at Standards Strategies, LLC' }
		]
	}
}));

var headerProfileModel = new (Backbone.Model.extend({
	defaults: {
		avatar:     'notifications-avatar.png',
		name:       'Thomas Griffin',
		status:     '<i class="fa fa-check"></i> Thank you for being a member',
		membership: 'Graduate Student Member',
		location:   'Princeton/Central Jersey Section'
	}
}));
