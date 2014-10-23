var MyConnectionsItem = Backbone.Model.extend({
	defaults: {
		"Avatar":       "no_image.png",
		"Name":		    "Not specified",
		"Company":		"Not specified",
		"University":	"Not specified",
		"Location":		"Not specified"
	}
});
var PendingRequestItem = Backbone.Model.extend({
	defaults: {
		"Avatar":       "no_image.png",
		"Name":		    "Not specified",
		"Company":		"Not specified",
		"University":	"Not specified",
		"Icon":	        "Not specified",
		"V":	        "Not specified",
		"Location":		"Not specified"
	}
});
var SavedForLaterItem = Backbone.Model.extend({
	defaults: {
		"Name":		    "Not specified",
		"Company":		"Not specified",
		"University":	"Not specified",
		"Icon":	        "Not specified",
		"V":	        "Not specified",
		"Location":		"Not specified"
	}
});

var MyConnectionsCollection = Backbone.Collection.extend({ model: MyConnectionsItem });
var PendingRequestsCollection = Backbone.Collection.extend({ model: PendingRequestItem });
var SavedForLaterCollection = Backbone.Collection.extend({ model: SavedForLaterItem });

var profileConnectionsItems = new MyConnectionsCollection([
	new MyConnectionsItem({
		"Avatar":       "person-6.png",
		"Name":		    "Robin Wallace",
		"Company":		"IEEE Standards",
		"Location":		"Los Angeles"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-2.png",
		"Name":		    "Maria Virginia Edwards",
		"Company":		"Google",
		"Location":		"Chicago"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-4.png",
		"Name":		    "Karen Robertson",
		"Company":		"Microsoft",
		"Location":		"Sydney"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-7.png",
		"Name":		    "Joyce C. Cooper",
		"Company":		"Apple Computer",
		"Location":		"Tokyo"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-8.png",
		"Name":		    "Phillip Murphy",
		"Company":		"IBM",
		"Location":		"New York"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-9.png",
		"Name":		    "Stephanie Warren",
		"Company":		"LG Electronics",
		"Location":		"Vancouver"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-10.png",
		"Name":		    "Alexander Pasik",
		"Company":		"General Motors",
		"Location":		"Dallas"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-11.png",
		"Name":		    "Elizabeth Holmes",
		"Company":		"Hewlett-Packard",
		"Location":		"Buenos Aires"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-6.png",
		"Name":		    "Robin Wallace",
		"Company":		"IEEE Standards",
		"Location":		"Los Angeles"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-2.png",
		"Name":		    "Maria Virginia Edwards",
		"Company":		"Google",
		"Location":		"Chicago"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-4.png",
		"Name":		    "Karen Robertson",
		"Company":		"Microsoft",
		"Location":		"Sydney"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-7.png",
		"Name":		    "Joyce C. Cooper",
		"Company":		"Apple Computer",
		"Location":		"Tokyo"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-8.png",
		"Name":		    "Phillip Murphy",
		"Company":		"IBM",
		"Location":		"New York"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-9.png",
		"Name":		    "Stephanie Warren",
		"Company":		"LG Electronics",
		"Location":		"Vancouver"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-10.png",
		"Name":		    "Alexander Pasik",
		"Company":		"General Motors",
		"Location":		"Dallas"
	}),
	new MyConnectionsItem({
		"Avatar":       "person-11.png",
		"Name":		    "Elizabeth Holmes",
		"Company":		"Hewlett-Packard",
		"Location":		"Buenos Aires"
	})
]);

var PendingRequestItems = new PendingRequestsCollection([
	new PendingRequestItem({
		"Avatar":       "person-1.png",
		"Name":		    "Kimberly Allen",
		"Company":		"Manager, Fox Business Corporation",
		"University":	"Princeton University",
		"Icon":			"ieee_student.png",
		"V":			"",
		"Location":		"New York"
	}),
	new PendingRequestItem({
		"Avatar":       "person-2.png",
		"Name":		    "Maria Virginia Edwards",
		"Company":		"Google",
		"Icon":			"senior_member.png",
		"Location":		"Chicago"
	}),
	new PendingRequestItem({
		"Avatar":       "person-3.png",
		"Name":		    "Alice Hamilton",
		"University":	"University of Utah, University of Virginia",
		"V":			"",
		"Location":		"Salt Lake City"
	}),
	new PendingRequestItem({
		"Avatar":       "person-4.png",
		"Name":		    "Karen Robertson",
		"Company":		"Microsoft",
		"Icon":			"ieee_student.png",
		"V":			"",
		"Location":		"Sydney"
	}),
	new PendingRequestItem({
		"Avatar":       "person-5.png",
		"Name":		    "Supriya Desai",
		"Company":		"Managing Director, IEEE-Standards",
		"Icon":			"senior_member.png",
		"Location":		"Los Angeles"
	})
]);

var SavedForLaterItems = new SavedForLaterCollection([
	new SavedForLaterItem({
		"Name":		    "Mark Howard",
		"Company":		"Manager, Fox Business Corporation",
		"Icon":			"ieee_student.png",
		"V":			"",
		"University":	"Princeton University"
	}),
	new SavedForLaterItem({
		"Name":		    "Amanda Bells",
		"Company":		"Managing Director, IEEE-Standards",
		"Icon":			"senior_member.png",
		"Location":		"Los Angeles"
	}),
	new SavedForLaterItem({
		"Name":		    "Lillian Sanders",
		"Company":		"Ledl.net GmbH, BFI",
		"Icon":			"senior_member.png",
		"Location":		"Salzburg"
	}),
	new SavedForLaterItem({
		"Name":		    "Michael Z. Reynolds",
		"Company":		"Codemate Ltd.",
		"V":			"",
		"Location":		"Ottawa",
		"University":	"Concordia University"
	})
]);
