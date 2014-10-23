var myProfileModel = new (Backbone.Model.extend({	defaults:
	{	completition: 85, //percent
		avatar: "avatar_bw.jpg",
		name: "Thomas Griffin",
		kite: "ieee_fellows.png",
		title: "Active Fellow",
		category: "Innovation Leader",
		town: "Piscataway",
		state: "New Jersey",
		country: "US",
		section: "IEEE New Jersey section",
		citation: "For contributions to machine perception and robotics",
		citationYear: 2004
	}
}));

var maleProfileModel = new (Backbone.Model.extend({	defaults:
	{	completition: 85, //percent
		avatar: "avatar_male.png",
		name: "Thomas Griffin",
		kite: "ieee_fellows.png",
		title: "Active Fellow",
		category: "Innovation Leader",
		town: "Piscataway",
		state: "New Jersey",
		country: "US",
		section: "IEEE New Jersey section",
		citation: "For contributions to machine perception and robotics",
		citationYear: 2004
	}
}));

var femaleProfileModel = new (Backbone.Model.extend({
	defaults: {
		completition: 85, //percent
		avatar: "avatar_female.png",
		name: "Anna Richard",
		kite: "ieee_fellows.png",
		title: "Active Fellow",
		category: "Innovation Leader",
		town: "Piscataway",
		state: "New Jersey",
		country: "US",
		section: "IEEE New Jersey section",
		citation: "For contributions to machine perception and robotics",
		citationYear: 2004
	}
}));


var profileSearchResultModel = new (Backbone.Model.extend({	defaults:
	{	avatar: "jennifer.jpg",
		name: "Jennifer Nicole Sommerfield",
		kite: "ieee_member.png",
		title: "IEEE Member",
		category: "Research Engineer/Scientist",
		town: "Berkeley",
		state: "California",
		country: "US",
		section: "IEEE California section",
		citation: "For contributions to automated network and service management methodologies and applications",
		citationYear: 2011
	}
}));

var interestsModel = new (Backbone.Model.extend({ defaults:
	{	interests: [
			{ title: "System Architecture"},
			{ title: "CRM"},
			{ title: "Program Management"},
			{ title: "Software Design"},
			{ title: "Web Analytics"},
			{ title: "Web Design"},
			{ title: "Enterprise Architecture"},
			{ title: "Cloud Computing"},
			{ title: "Fraud"},
			{ title: "Project Management Analytics"},
			{ title: "Digital Asset Management"},
			{ title: "Marketing"},
			{ title: "Interaction Design"},
			{ title: "Agile Methodologies"}
		],
		more: "15"
	}
}));
