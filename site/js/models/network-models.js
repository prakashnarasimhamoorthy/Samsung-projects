/* Communities */
var communitiesHaveAccessModel = new (Backbone.Model.extend({ defaults:[
		{ image: "1.png",  title: "IEEE Transactions on Computing",                     providedBy: "IEEE", members: 453, lock: true,
		  link:"#network-communitylp"},
		{ image: "3.png",  title: "IEEE Robotics and Automation Society",               providedBy: "IEEE", members: 2645, lock: true,
		  link:"#network-communitylpclosed"},
		{ image: "2.png",  title: "IEEE Vehicular Technology Society",                  providedBy: "IEEE", members: 1829 ,
		  link:"#network-communitylp-files"},
		{ image: "2.png",  title: "IEEE Product Safety Engineering Society",            providedBy: "IEEE", members: 824,
		  link:"#network-communitylp-files-searchlist"},
		{ image: "4.png",  title: "IEEE Product Safety Engineering Society",            providedBy: "IEEE", members: 824, lock: true,
		  link:"#network-communitylp-files-folderslist"},
		{ image: "6.png",  title: "IEEE Aerospace and Electronic Systems Society",      providedBy: "IEEE", members: 3284,
		  link:"#network-communitylp-files-foldersfilelist"},
		{ image: "7.png",  title: "IEEE Dielectrics and Electrical Insulation Society", providedBy: "IEEE", members: 843 ,
		  link:"#network-communitylp-qa"},
		{ image: "8.png",  title: "IEEE Computational Intelligence Society",            providedBy: "IEEE", members: 248,
		  link:"#network-communitylp-events"},
		{ image: "5.png",  title: "IEEE Cloud Computing",                               providedBy: "IEEE", members: 248, lock: true ,
		  link:"#network-communitylp-participants"}
	]
}));

var communitiesMayBeInterestedModel = new (Backbone.Model.extend({ defaults:[
		{ image: "1.png",  title: "IEEE Transactions on Computing",                     providedBy: "IEEE", members: 453, lock: true  },
		{ image: "3.png",  title: "IEEE Robotics and Automation Society",               providedBy: "IEEE", members: 2645, lock: true },
		{ image: "2.png",  title: "IEEE Vehicular Technology Society",                  providedBy: "IEEE", members: 1829 },
		{ image: "2.png",  title: "IEEE Product Safety Engineering Society",            providedBy: "IEEE", members: 824  },
		{ image: "4.png",  title: "IEEE Product Safety Engineering Society",            providedBy: "IEEE", members: 824, lock: true },
		{ image: "6.png",  title: "IEEE Aerospace and Electronic Systems Society",      providedBy: "IEEE", members: 3284}
	]
}));

var eligibleCommunitiesModel = new (Backbone.Model.extend({	defaults: [
		{	image:          "05.png",
			title:          "IEEE Photonics Society",
			text:           "IEEE opens the door to opportunities that will help you develop your professional identity in IEEE's designated fields of interest: sciences, technology, engineering, and mathematics (STEM).",
			providedBy:     "IEEE Photonics Society",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  13551,
			link:           "#network-communitylp-gplus-connected"
		},
		{	image:          "03.png",
			title:          "IEEE Industry Applications Society",
			text:           "One of the largest special interest societies within the Institute of Electrical and Electronics Engineers (IEEE), the IAS focuses specifically on the unique needs of industry and commerce.",
			providedBy:     "IEEE Industry ApplicationsSociety",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  21435,
			link:           "#network-communitylp-gplus-attach"

		},
		{	image:          "05.png",
			title:          "IEEE Photonics Society",
			text:           "IEEE opens the door to opportunities that will help you develop your professional identity in IEEE's designated fields of interest: sciences, technology, engineering, and mathematics (STEM).",
			providedBy:     "IEEE Photonics Society",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  13551,
			link:           "#network-communitylp-gplus-receive"
		},
		{	image:          "03.png",
			title:          "IEEE Industry Applications Society",
			text:           "One of the largest special interest societies within the Institute of Electrical and Electronics Engineers (IEEE), the IAS focuses specifically on the unique needs of industry and commerce.",
			providedBy:     "IEEE Industry ApplicationsSociety",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  21435,
			link:           "#network-communitylp-gplus-access"
		}
	]
}));

var additionalCommunitiesModel = new (Backbone.Model.extend({ defaults: [
		{	image:          "04.png",
			title:          "IEEE Oceanic Engineering Society",
			text:           "Focus includes all aspects of science, engineering, and technology that address research, development, and operations pertaining to all bodies of water.",
			providedBy:     "IEEE Oceanic Engineering Society",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  3623
		}
	]
}));

var searchResultsCommunitiesModel = new (Backbone.Model.extend({ defaults: [
		{	image:          "06.png",
			title:          "IEEE Transactions on Computing",
			icon:           "check",
			text:           "This community covers all major areas of computing and information technology, including computer hardware, software development, multimedia, and IT security.",
			providedBy:     "IEEE Computer Society",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{   image:          "07.png",
			title:          "IEEE Photonics Society",
			icon:           "lock",
			text:           "IEEE opens the door to opportunities that will help you develop your professional identity in IEEE's designated fields of interest: sciences, technology, engineering, and mathematics (STEM).",
			providedBy:     "IEEE Photonics Society",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  13511
		},
		{	image:          "08.png",
			title:          "IEEE Industry Applications Society",
			icon:           "lock",
			text:           "One of the largest special interest societies within the Institute of Electrical and Electronics Engineers (IEEE), the IAS focuses specifically on the unique needs of industry and commerce.",
			providedBy:     "IEEE Industry Applications",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  21435
		},
		{	image:          "09.png",
			title:          "IEEE Oceanic Engineering Society",
			icon:           "check",
			text:           "Focus includes all aspects of science, engineering, and technology that address research, development, and operations pertaining to all bodies of water.",
			providedBy:     "IEEE Oceanic Engineering",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{	image:          "10.png",
			title:          "IEEE Cloud Computing",
			icon:           "lock",
			text:           "Cloud Computing has become a scalable services consumption and delivery platform in the field of Services Computing.",
			providedBy:     "IEEE",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  13511
		},
		{	image:          "11.png",
			title:          "IEEE Magnetics Society",
			icon:           "check",
			text:           "The Vision of the IEEE Magnetics Society is to be the leading international professional organization for magnetism and for related professionals throughout the world.",
			providedBy:     "IEEE",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{   image:          "06.png",
			title:          "IEEE Transactions on Computing",
			icon:           "check",
			text:           "This community covers all major areas of computing and information technology, including computer hardware, software development, multimedia, and IT security.",
			providedBy:     "IEEE Computer Society",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{	image:          "07.png",
			title:          "IEEE Photonics Society",
			icon:           "lock",
			text:           "IEEE opens the door to opportunities that will help you develop your professional identity in IEEE's designated fields of interest: sciences, technology, engineering, and mathematics (STEM).",
			providedBy:     "IEEE Photonics Society",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  13511
		},
		{	image:          "08.png",
			title:          "IEEE Industry Applications Society",
			icon:           "lock",
			text:           "One of the largest special interest societies within the Institute of Electrical and Electronics Engineers (IEEE), the IAS focuses specifically on the unique needs of industry and commerce.",
			providedBy:     "IEEE Industry Applications",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  21435
		},
		{	image:          "09.png",
			title:          "IEEE Oceanic Engineering Society",
			icon:           "check",
			text:           "Focus includes all aspects of science, engineering, and technology that address research, development, and operations pertaining to all bodies of water.",
			providedBy:     "IEEE Oceanic Engineering",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{	image:          "10.png",
			title:          "IEEE Cloud Computing",
			icon:           "lock",
			text:           "Cloud Computing has become a scalable services consumption and delivery platform in the field of Services Computing.",
			providedBy:     "IEEE",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  13511
		},
		{	image:          "11.png",
			title:          "IEEE Magnetics Society",
			icon:           "check",
			text:           "The Vision of the IEEE Magnetics Society is to be the leading international professional organization for magnetism and for related professionals throughout the world.",
			providedBy:     "IEEE",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{	image:          "06.png",
			title:          "IEEE Transactions on Computing",
			icon:           "check",
			text:           "This community covers all major areas of computing and information technology, including computer hardware, software development, multimedia, and IT security.",
			providedBy:     "IEEE Computer Society",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{	image:          "07.png",
			title:          "IEEE Photonics Society",
			icon:           "lock",
			text:           "IEEE opens the door to opportunities that will help you develop your professional identity in IEEE's designated fields of interest: sciences, technology, engineering, and mathematics (STEM).",
			providedBy:     "IEEE Photonics Society",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  13511
		},
		{	image:          "08.png",
			title:          "IEEE Industry Applications Society",
			icon:           "lock",
			text:           "One of the largest special interest societies within the Institute of Electrical and Electronics Engineers (IEEE), the IAS focuses specifically on the unique needs of industry and commerce.",
			providedBy:     "IEEE Industry Applications",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  21435
		},
		{	image:          "09.png",
			title:          "IEEE Oceanic Engineering Society",
			icon:           "check",
			text:           "Focus includes all aspects of science, engineering, and technology that address research, development, and operations pertaining to all bodies of water.",
			providedBy:     "IEEE Oceanic Engineering",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{	image:          "10.png",
			title:          "IEEE Cloud Computing",
			icon:           "lock",
			text:           "Cloud Computing has become a scalable services consumption and delivery platform in the field of Services Computing.",
			providedBy:     "IEEE",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  13511
		},
		{	image:          "11.png",
			title:          "IEEE Magnetics Society",
			icon:           "check",
			text:           "The Vision of the IEEE Magnetics Society is to be the leading international professional organization for magnetism and for related professionals throughout the world.",
			providedBy:     "IEEE",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{	image:          "06.png",
			title:          "IEEE Transactions on Computing",
			icon:           "check",
			text:           "This community covers all major areas of computing and information technology, including computer hardware, software development, multimedia, and IT security.",
			providedBy:     "IEEE Computer Society",
			button:         "Access Now",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			membersNumber:  6211
		},
		{	image:          "07.png",
			title:          "IEEE Photonics Society",
			icon:           "lock",
			text:           "IEEE opens the door to opportunities that will help you develop your professional identity in IEEE's designated fields of interest: sciences, technology, engineering, and mathematics (STEM).",
			providedBy:     "IEEE Photonics Society",
			button:         "Learn More",
			popup:          'You do not have access to this community. You must first join <a href="#">IEEE Photonix Society</a>. Click Learn More for aditional info.',
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  13511
		}
	]
}));


var NetworkQAAnswer = Backbone.Model.extend({ defaults:
	{	avatar:		"avatar_male.png",
		name:		"Not specified",
		datetime:   "Not specified",
		text:       "Not specified",
		likes:      0,
		dislikes:   0
	}
});
var networkCommunityQAAnswers = new (Backbone.Collection.extend({ model: NetworkQAAnswer }));
networkCommunityQAAnswers.set([
	{	"avatar":	"person-25.png",
		"datetime": "Jul 28, 2014 - 08:24 AM",
		"name":		"Brian Pratz",
		"text":     "Microstrip or stripline loses TEM propagation as the substrate thickness approaches 1/4 electrical wavelength, so PCB substrates become very thin for mm-wave, thus the lines are very lossy. I'm sure the SIW is lower loss too. I'd think the SIW would support TM, unless it has something to do with the wall posts.",
		"likes":    1
	},
	{	"avatar":	"person-17.png",
		"datetime": "Jul 28, 2014 - 01:24 AM",
		"name":		"Andy Kauni",
		"text":     'It would help if I had a little more information like a picture of the patch or a link to an article. Even without that I can make a couple of comments.<br>\
					 1. If the patch is close to square (or round), little stubs or slots can be used to break the degeneracy of the two almost identical modes.<br/>\
					 2. If the patch is used over a wide enough bandwidth, than higher order (unwanted) modes can exist. Slots can be used to disrupt the currents and thus suppress the unwanted modes.<br/>\
					 This may or may not answer your question but it is a start.'
	},
	{	"avatar":	"person-8.png",
		"datetime": "Jul 28, 2014 - 08:24 AM",
		"name":		"Claire Oakfield",
		"text":     'APS magazine had a couple of good U-slot patch articles a few years back:<br>\
					 <a href="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5466402">ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=5466402</a><br>\
					 <a href="http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6028422">ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=6028422</a><br>\
					 The slot introduces another resonance for increasing bandwidth, sort of a patch within a patch',
		"likes":    1
	}
]);

var NetworkQAQuestion = Backbone.Model.extend({	defaults:
	{	avatar:		"avatar_male.png",
		name:		"Not specified",
		answers:    0,
		when:       "1 week ago",
		text:       "Not specified"
	}
});
var networkCommunityQuestions = new (Backbone.Collection.extend({ model: NetworkQAQuestion}));
networkCommunityQuestions.set([
	{	"avatar":	"person-10.png",
		"name":		"James Kirk",
		"text":     "Who’s gonna win the World Cup this year?",
		"id": 1
	},
	{	"avatar":	"person-20.png",
		"name":		"Sarah Grant",
		"when":     "yesterday",
		"text":     "How do I create smart objects in Adobe Photoshop CS6?",
		"id": 2
	},
	{	"avatar":	"person-11.png",
		"name":		"July Young",
		"text":     "Are there any features missing?",
		"id": 3
	},
	{	"name":		"Dean Holls",
		"text":     "Is this question useful?",
		"id": 4
	},
	{	"avatar":	"person-6.png",
		"name":		"Olivio Torini",
		"answers":  2,
		"when":     "yesterday",
		"text":     "What is the heaviest substance in the world?",
		"id": 5
	},
	{	"name":		"Dean Holls",
		"answers":  4,
		"text":     "Have we learned about Q&A features?",
		"id": 6
	}
]);

var networkEvents = new (Backbone.Collection.extend({
	model: Backbone.Model.extend({	defaults:
	{   date:       "Not specified",
		year:       2014,
		category:   "Not specified",
		title:      "Not specified",
		text_short: "Not specified",
		text_long:  null,
		location:   "Not specified",
		site:       "Not specified"
	}})
}));
networkEvents.set([
/*01*/{	date:       "31 Aug",
		category:   "Conference",
		title:      "2014 IEEE Transportation Electrification Conference and Expo, Asia-Pacific (ITEC Asia-Pacific)",
		text_short: "Conference to discuss research and technology development of materials, devices, components, motor drives, power electronics, batteries, subsystems, and systems for electrification of all",
		text_long:  "transportation vehicles, including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Beijing, China",
		site:       "www.itec2014.com"
	},
/*02*/{	date:       "03 Sep",
		category:   "Meeting",
		title:      "2014 11th International Conference on Informatics in Control, Automation and Robotics (ICINCO)",
		text_short: "The purpose of the 11th International Conference on Informatics in Control, Automation and Robotics (ICINCO) is to bring together researchers, engineers and practitioners interested in the",
		text_long:  "application including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Vienna, Austria",
		site:       "www.icinco.org"
	},
/*03*/{	date:       "31 Aug",
		category:   "Webinar",
		title:      "2014 IEEE 18th International Enterprise Distributed Object Computing Conference Workshops and Demonstrations (EDOCWD)",
		text_short: "Conference to discuss research and technology development of materials, devices, components, motor drives, power electronics, batteries, subsystems, and systems for electrification of all",
		text_long:  "transportation vehicles, including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Ulm, Germany",
		site:       "www.edoc2014.org"
	},
/*04*/{	date:       "31 Aug",
		category:   "Conference",
		title:      "2014 Theoretical Aspects of Software Engineering Conference (TASE)",
		text_short: "The purpose of the 11th Theoretical Aspects of Software Engineering Conference (TASE) is to bring together researchers, engineers and practitioners interested in the",
		text_long:  "application including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Changsha, China",
		site:       "www.nudt.edu.cn/tase2014"
	},
/*05*/{	date:       "01 Sep",
		category:   "Meeting",
		title:      "2014 IEEE International Conference on Internet of Things(iThings)",
		text_short: "Conference to discuss research and technology development of materials, devices, components, motor drives, power electronics, batteries, subsystems, and systems for electrification of all",
		text_long:  "transportation vehicles, including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Taipei, Taiwan",
		site:       "www.ithings.com"
	},
/*06*/{	date:       "31 Aug",
		category:   "Webinar",
		title:      "2014 IEEE International Conference on Ultra-WideBand (ICUWB)",
		text_short: "The purpose of the 11th 2014 IEEE International Conference on Ultra-WideBand (ICUWB) is to bring together researchers, engineers and practitioners interested in the",
		text_long:  "application including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Paris, France",
		site:       "www.icuwb.com"
	},
/*07*/{	date:       "31 Aug",
		category:   "Conference",
		title:      "2014 International Symposium on Electromagnetic Compatibility - EMC EUROPE",
		text_short: "Conference to discuss research and technology development of materials, devices, components, motor drives, power electronics, batteries, subsystems, and systems for electrification of all",
		text_long:  "transportation vehicles, including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Lisbon, Portugal",
		site:       "www.eusipco.com"
	},
/*08*/{	date:       "31 Aug",
		category:   "Conference",
		title:      "2014 International Symposium on Electromagnetic Compatibility - EMC EUROPE",
		text_short: "The purpose of the 11th 2014 International Symposium on Electromagnetic Compatibility(EMC EUROPE) is to bring together researchers, engineers and practitioners interested in the",
		text_long:  "application including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Gothenburg, Sweden",
		site:       "www.emc.com"
	},
/*09*/{	date:       "03 Sep",
		category:   "Meeting",
		title:      "2014 International Conference on Numerical Simulation of Optoelectronic Devices (NUSOD)",
		text_short: "Conference to discuss research and technology development of materials, devices, components, motor drives, power electronics, batteries, subsystems, and systems for electrification of all",
		text_long:  "transportation vehicles, including automobiles, airplanes, high speed train, light rail trains, off-road vehicles, and heavy duty vehicles.",
		location:   "Palma de Mallorca, Spain",
		site:       "www.nusod.com"
	},
/*10*/{	date:       "03 Sep",
		category:   "Meeting",
		title:      "2014 27th Symposium on Integrated Circuits and Systems Design (SBCCI)",
		text_short: "The purpose of the 2014 27th Symposium on Integrated Circuits and Systems Design (SBCCI) is to bring together researchers, engineers and practitioners interested in the application.",
		location:   "Aracaju, Brazil",
		site:       "www.sbcci.com"
	}
]);

var communityFile = Backbone.Model.extend({	defaults:
	{	avatar:    "avatar_bw.jpg",
		name:      "Tom Griffin (You)",
		name_link: "#profile",
		title:     "Not specified",
		community: "Transactions on Computing",
		time:      "11 hours ago",
		folder:    "Machine Learning",
		subfolder: "Algorithms",
		text:      "Not specified"
	}
});
var communityFiles = new (Backbone.Collection.extend({ model: communityFile}));
communityFiles.set([
	{	title: "Critical Machine Learning Algorithms",
		text:  "An effort to help the team with the machine learning recommendation engine."
	},
	{	title: "Automatic Detection of Nonverbal Behavior Predicts Learning in Dyadic Interactions",
		text:  "Nonverbal behavior can reveal the psychological states of those engaged in interpersonal interaction. Previous research has highlighted the relationship ..."
	},
	{	title: "Accurate WiFi Based Localization for Smartphones Using Peer Assistance",
		text:  "Highly accurate indoor localization of smartphones is critical to enable novel location based features for users and businesses. In this paper, we first conduct an ..."
	},
	{	title: "Design Heuristics for Authentic Simulation-Based Learning Games",
		text:  "Simulation games are games for learning based on a reference in the real world. We propose a model for authenticity in this context as a result of a compromise ..."
	}
]);

var gDriveFile = Backbone.Model.extend({ defaults:
	{	icon: "assets/img/files/icon_word.png",
		name: "Not specified",
		checked: false
	}
});
var gDriveFiles = new (Backbone.Collection.extend({ model: gDriveFile}));
gDriveFiles.set([
	{   icon: "assets/img/files/icon_image.png",
		name: "49263_iee_mb_black.gif"
	},
	{   icon: "assets/img/files/icon_word.png",
		name: "Adding Dashboard Pages.doc",
		checked: true
	},
	{   icon: "assets/img/files/icon_excel.png",
		name: "BP Project Costs.xls"
	},
	{   icon: "assets/img/files/icon_word.png",
		name: "brd-fsd-template.docx"
	},
	{   icon: "assets/img/files/icon_word.png",
		name: "brd-fsd-template_2012.docx"
	}
]);

var networkCommunitiesParticipantsModel = new (Backbone.Model.extend({
	defaults: [
		{   image:     'person-1.png',
			name:      'Jane Craig',
			title:     'IEEE Student',
			kite:      'ieee_student.png',
			volunteer: true,
			work:      'Manager, Fox Business Corporation',
			graduate:  'Princeton University',
			location:  'New York'
		},
		{   image:     'person-2.png',
			name:      'Jeff Jarvis',
			title:     'IEEE Accosiate',
			kite:      'ieee_associate.png',
			work:      'CUNY Graduate School of Journalism',
			location:  'New Jersey',
			connect:    true
		},
		{   image:     'person-7.png',
			name:      'Vic Gundotra',
			title:     'IEEE Member',
			kite:      'ieee_member.png',
			work:      'Google+',
			graduate:  'Google',
			location:  'Mountain View, California'
		},
		{   image:     'person-3.png',
			name:      'Becky Worley',
			work:      'Manager, Fox Business Corporation',
			graduate:  'Princeton University',
			location:  'New York'
		},
		{   image:     'person-6.png',
			name:      'Frank Robertson',
			volunteer: true,
			work:      'University of Utah',
			graduate:  'University of Virginia',
			location:  'Salt Lake City'
		}
	]
}));
