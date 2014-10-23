var networkActivitiesCallForPapersModel = new (Backbone.Model.extend({
	defaults: [
		{	image: "call-for-papers-1.png",
			title: '2014 Third International Conference on Computer Technology in Russia and in the Former Soviet Union (SoRuCom)',
			date: '13 Oct - 17 Oct 2014 ',
			dateadded: '16 Oct 2014',
			location: 'Kazan National Research Technical University A.N.Tupolev - KAI (KNRTU - KAI), 10 K.Marx St., Tatarstan 420111, Kazan, Russia',
			abstract: 'Abstract submission deadline: 15 Apr 2014',
			deadline: 'Final submission deadline: 30 May 2014',
			notification: 'Notification of acceptance date: 30 Apr 2014'
		},
		{	image: "call-for-papers-2.png",
			title: '2014 51st ACM/EDAC/IEEE Design Automation Conference (DAC)',
			date:  '02 Jun - 06 Jun 2014',
			dateadded: '16 Oct 2014',
			location: 'Moscone Center, San Francisco, CA, USA',
			abstract: 'Abstract submission deadline: 15 Apr 2014',
			deadline: 'Final submission deadline: 30 May 2014',
			notification: 'Notification of acceptance date: 30 Apr 2014'
		},
		{	image: "call-for-papers-3.png",
			title: 'ICC 2014 - 2014 IEEE International Conference on Communications',
			date:  '02 Jun - 06 Jun 2014',
			dateadded: '16 Oct 2014',
			location: 'Kazan National Research Technical University A.N.Tupolev - KAI (KNRTU - KAI), 10 K.Marx St., Tatarstan 420111, Kazan, Russia',
			abstract: 'Abstract submission deadline: 15 Apr 2014',
			deadline: 'Final submission deadline: 30 May 2014',
			notification: 'Notification of acceptance date: 30 Apr 2014'
		},
		{	image: "call-for-papers-4.png",
			title: 'IEEE International Symposium on Information Theory',
			date:  '02 Jun - 06 Jun 2014',
			dateadded: '16 Oct 2014',
			location: 'Moscone Center, San Francisco, CA, USA',
			abstract: 'Abstract submission deadline: 15 Apr 2014',
			deadline: 'Final submission deadline: 30 May 2014',
			notification: 'Notification of acceptance date: 30 Apr 2014'
		}
	]
}));

var networkActivitiesCallForJournalsModel = new (Backbone.Model.extend({
	defaults: [
		{	image: "journals-1.png",
			title: 'IEEE Transactions on Affective Computing',
			date: '17 Oct 2014 ',
			dateadded: '16 Oct 2014',
			info: 'IEEE Transactions on Affective Computing Special Issue on XYZ'
		},
		{	image: "journals-2.png",
			title: 'There are many paths to an exciting job as an engineer',
			date:  '06 Jun 2014',
			dateadded: '16 Oct 2014',
			info: 'IEEE Transactions on Affective Computing Special Issue on XYZ'
		},
		{	image: "journals-3.png",
			title: 'As civilian UAVs take to U.S. skies, they’ll face pushback—and perhaps a few shotguns',
			date:  '06 Jun 2014',
			dateadded: '16 Oct 2014',
			info: 'IEEE Transactions on Affective Computing Special Issue on XYZ'
		},
		{	image: "journals-4.png",
			title: 'Leave the driving to us: self-driving technology matures',
			date:  '06 Jun 2014',
			dateadded: '16 Oct 2014',
			info: 'IEEE Transactions on Affective Computing Special Issue on XYZ'
		}
	]
}));

var networkActivitiesMyConnectionsModel = new (Backbone.Model.extend({
	defaults: [
		{   image:     'person-2.png',
			name:      'Jane Craig',
			title:     'IEEE Student',
			kite:      'ieee_student.png',
			volunteer: true,
			work:      'Manager, Fox Business Corporation',
			graduate:  'Princeton University',
			location:  'New York'
		},
		{   image:     'person-8.png',
			name:      'Jeff Jarvis',
			title:     'IEEE Accosiate',
			kite:      'ieee_associate.png',
			work:      'CUNY Graduate School of Journalism',
			location:  'New Jersey'
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

var networkActivitiesExtendedConnectionsModel = new (Backbone.Model.extend({
	defaults: [
		{   image:     'person-13.png',
			name:      'Carson D. Daly',
			title:     'Senior Member',
			kite:      'senior_member.png',
			work:      'Managing Director, IEEE-Standards',
			location:  'Los Angeles',
			extended: [
				{   name:      'Phillip Murphy',
					image:     'person-8.png',
					source:    'Discussion - 7:00 PM',
					textShort: 'Now I\'ve built on-premise data centers three times before. Twice on purpose and once by accident. No more',
					textFull:  'Now I\'ve built on-premise data centers three times before. Twice on purpose and once by accident. No more. From here on out it\'s cloud computing.'
				},
				{   name:      'Konstantinos Karachalios',
					image:     'person-12.png',
					source:    'Discussion - 2:00 PM',
					textShort: 'Harry\'s dreaming of a forty million dollar data center he\'ll never get off the ground, with software he won\'t',
					textFull:  'Harry\'s dreaming of a forty million dollar data center he\'ll never get off the ground, with software he won\'t get to work with or without my help.'
				},
				{   name:      'Jane Craig',
					image:     'person-14.png',
					source:    'Discussion - 1:00 PM',
					textShort: 'Well, hello Mr. Program Director. You see what happens when you decide to ignore cloud computing?',
					textFull:  'Well, hello Mr. Program Director. You see what happens when you decide to ignore cloud computing?'
				}
			]
		},
		{   image:     'person-6.png',
			name:      'Jeff Jarvis',
			title:     'IEEE Accosiate',
			kite:      'ieee_associate.png',
			work:      'CUNY Graduate School of Journalism',
			location:  'New Jersey'
		},
		{   image:     'person-7.png',
			name:      'Vic Gundotra',
			title:     'IEEE Member',
			kite:      'ieee_member.png',
			work:      'Google+',
			graduate:  'Google',
			location:  'Mountain View, California'
		}
	]
}));

var networkActivitiesIEEESpectrumNewsModel = new (Backbone.Model.extend({
	defaults: [
		{	title:      '1 Million Americans Likely Receiving Incorrect Federal Healthcare Subsidies',
			providedBy: 'IEEE Spectrum',
			dateadded:  '06 Jun 2014',
			image:      'spectrum-1.png',
			time:       '12 hours ago'
		},
		{	title:      'Video Friday: Robotic Furniture, Pizza by Drone, and Series Elastic Snake Robot',
			providedBy: 'IEEE Spectrum',
			dateadded:  '06 Jun 2014',
			image:      'spectrum-2.png',
			time:       '12 hours ago'
		},
		{	title:      'Smallest and Fastest Nanomotor Could Advance Drug Delivery ',
			providedBy: 'IEEE Spectrum',
			dateadded:  '06 Jun 2014',
			image:      'spectrum-3.png',
			time:       '12 hours ago'
		}
	]
}));

var networkActivitiesIEEENewsModel = new (Backbone.Model.extend({
	defaults: [
		{	title:      'Apple Computer Co-Founder Steve Wozniak Receives 2014 Hoover Medal',
			providedBy: 'IEEE',
			dateadded:  '06 Jun 2014',
			image:      'ieeenews-1.png',
			time:       '12 hours ago',
			text: 		'18 February 2014 – IEEE President and CEO J. Roberto de Marca (right) presents the 66th Hoover Medal to Apple Computer Co-Founder Steve Wozniak (left) in Los Angeles, CA, USA, on 17 February 2014. The award is presented to an engineer whose professional achievements and personal endeavors have advanced the well-being of humankind and is administered by a board representing five engineering organizations: The American Society of Mechanical Engineers; the American Society of Civil Engineers; the American Institute of Chemical Engineers; the American Institute of Mining, Metallurgical and Petroleum Engineers; and IEEE. '
		},
		{	title:      'IEEE Technical Experts to Predict Whats Next in Consumer Electronics at 2014 CES',
			providedBy: 'IEEE',
			dateadded:  '06 Jun 2014',
			image:      '',
			time:       '12 hours ago',
			text: 		'18 December 2013 – What to know Whats Next in the world of consumer electronics? IEEE technical experts will make ... '
		},
		{	title:      'NY Office Ribbon-Cutting Ceremony',
			providedBy: 'IEEE',
			dateadded:  '06 Jun 2014',
			image:      'ieeenews-2.png',
			time:       '12 hours ago',
			text: 		'31 March 2014 – IEEE President Roberto de Marca (right) and IEEE Executive Director Jim Prendergast (left) cut the ceremonial  ... '
		},
		{	title:      'IEEE Expert Demonstrates Research and Applications of Mind-Controlled Robots',
			providedBy: 'IEEE',
			dateadded:  '06 Jun 2014',
			image:      '',
			time:       '12 hours ago',
			text: 		'17 December 2013 –   Robotics has been a hot topic over the past few weeks. First Amazons delivery drones, then Googles ... '
		},
		{	title:      'Dr. Howard E. Michel Elected 2014 IEEE President-elect',
			providedBy: 'IEEE',
			dateadded:  '06 Jun 2014',
			image:      'ieeenews-3.png',
			time:       '12 hours ago',
			text: 		'Term to Focus on Boosting IEEE Visibility, Increasing Global Membership, Providing Career Security and Infusing Innovation ... '
		}
	]
}));

var networkActivitiesInstituteNewsModel = new (Backbone.Model.extend({
	defaults: [
		{	title:      'Apple Computer Co-Founder Steve Wozniak Receives 2014 Hoover Medal',
			providedBy: 'The Institute',
			dateadded:  '06 Jun 2014',
			image:      'institutenews-1.png',
			time:       '12 hours ago',
			text: 		'Most of us will only be able to experience space travel through movies or in our imaginations. But for some, it will soon be a vacation to remember. In the past few weeks, several companies and government agencies have announced their plans for space tourism, including Virgin Galactic, which has been working on commercial space flight for a decade now. The company has sold more than 700 tickets to the outer edges of Earth at a hefty price tag of US $250 000 per seat. Trips are expected to start next year. In April, it showcased a replica of its pacecraft—SpaceshipTwo—on the deck of the Intrepid Air and Space Museum, in New York City. The spacecraft will have enough room for six passengers and two pilots, and will be able to fly 122 kilometers above the Earth’s surface. NASA defines this point as the edge of the planet’s atmosphere and the beginning of space. Passengers will receive two days of training on how to orient themselves in zero gravity before embarking on the trip. The SpaceshipTwo, which is likely to be the first vehicle used for space tourism, is a hybrid—part airplane and part rocket ship. Once it reaches an altitude of 15 kilometers, comparable to the heights reached by most commercial airplanes, the rocket ship will be released from the plane. Passengers will be in a free fall for several seconds until the rocket accelerates to the speed of sound in just seven seconds, and then to about Mach 3.5 (2500 miles per hour). All the while, it is traveling straight up. Needless to say, this is not a trip for those with a fear of flying. Once the spacecraft reaches its highest point, passengers can unbuckle and float throughout the cabin for about five minutes. They will also be able to view the exterior of the Earth and the endless black sky through the spaceship’s many large windows. The return trip is just 90 minutes. For those who cannot initially afford the ticket, prices are expected to dramatically drop within a decade, especially as the technology becomes more affordable and space tourism more competitive. On 28 April, NASA released a survey seeking feedback on how it can use the International Space Station for commercial activities. It already is working on an affordable commercial space transportation system for the private sector before it too embarks on space tourism. And while SpaceX, a private space transport company, in Hawthorne, Calif., is also working to send people to space, it has an even bigger vision in mind—one-way tickets to Mars. On 30 April, the BBC reported that the UK government will be expanding its space industry as part of its plan to launch space tourism programs. Perhaps one day, traveling to outer space will be as commonplace as visiting another country. Until then, how do you feel about taking a trip to space? Is it too soon to trust the technology, or would you go on one of the first flights if given a free ride? To learn more about IEEE’s involvement in space technology, visit the IEEE Aerospace and Electronic Systems Society and the IEEE Aerospace Conference websites. '
		},
		{	title:      'IEEE Technical Experts to Predict Whats Next in Consumer Electronics at 2014 CES',
			providedBy: 'The Institute',
			dateadded:  '06 Jun 2014',
			image:      'institutenews-2.png',
			time:       '12 hours ago',
			text: 		'Our June special report on smart cities focuses on the development of urban areas around the world that are using the ... '
		},
		{	title:      'NY Office Ribbon-Cutting Ceremony',
			providedBy: 'The Institute',
			dateadded:  '06 Jun 2014',
			image:      'institutenews-3.png',
			time:       '12 hours ago',
			text: 		'On 23 April, representatives from 12 New Jersey universities known as the New Jersey Big Data Alliance met to discuss how to ...'
		},
		{	title:      'IEEE Expert Demonstrates Research and Applications of Mind-Controlled Robots',
			providedBy: 'The Institute',
			dateadded:  '06 Jun 2014',
			image:      'institutenews-4.png',
			time:       '12 hours ago',
			text: 		'As companies of all sizes work to develop innovative products and services for the marketplace, many are turning to their more  ... '
		}
	]
}));

var networkActivitiesIEEETVModel = new (Backbone.Model.extend({
	defaults: [
		{	title:      'A Smart Grid for Intelligent Energy Use',
			providedBy: 'The Institute',
			dateadded:  '06 Jun 2014',
			image:      'video-1.png',
			video:      'http://ieeetv.ieee.org/media/ieeetvmobile/ConferenceHighlights/IMS2014/IMS_2014_Opening_Plenary_mobile.mp4',
			time:       '12 hours ago',
			text: 		'Most of us will only be able to experience space travel through movies or in our imaginations. But for some, it will soon be a vacation to remember. In the past few weeks, several companies and government agencies have announced their plans for space tourism, including Virgin Galactic, which has been working on commercial space flight for a decade now. The company has sold more than 700 tickets to the outer edges of Earth at a hefty price tag of US $250 000 per seat. Trips are expected to start next year. In April, it showcased a replica of its pacecraft—SpaceshipTwo—on the deck of the Intrepid Air and Space Museum, in New York City. The spacecraft will have enough room for six passengers and two pilots, and will be able to fly 122 kilometers above the Earth’s surface. NASA defines this point as the edge of the planet’s atmosphere and the beginning of space. Passengers will receive two days of training on how to orient themselves in zero gravity before embarking on the trip. The SpaceshipTwo, which is likely to be the first vehicle used for space tourism, is a hybrid—part airplane and part rocket ship. Once it reaches an altitude of 15 kilometers, comparable to the heights reached by most commercial airplanes, the rocket ship will be released from the plane. Passengers will be in a free fall for several seconds until the rocket accelerates to the speed of sound in just seven seconds, and then to about Mach 3.5 (2500 miles per hour). All the while, it is traveling straight up. Needless to say, this is not a trip for those with a fear of flying. Once the spacecraft reaches its highest point, passengers can unbuckle and float throughout the cabin for about five minutes. They will also be able to view the exterior of the Earth and the endless black sky through the spaceship’s many large windows. The return trip is just 90 minutes. For those who cannot initially afford the ticket, prices are expected to dramatically drop within a decade, especially as the technology becomes more affordable and space tourism more competitive. On 28 April, NASA released a survey seeking feedback on how it can use the International Space Station for commercial activities. It already is working on an affordable commercial space transportation system for the private sector before it too embarks on space tourism. And while SpaceX, a private space transport company, in Hawthorne, Calif., is also working to send people to space, it has an even bigger vision in mind—one-way tickets to Mars. On 30 April, the BBC reported that the UK government will be expanding its space industry as part of its plan to launch space tourism programs. Perhaps one day, traveling to outer space will be as commonplace as visiting another country. Until then, how do you feel about taking a trip to space? Is it too soon to trust the technology, or would you go on one of the first flights if given a free ride? To learn more about IEEE’s involvement in space technology, visit the IEEE Aerospace and Electronic Systems Society and the IEEE Aerospace Conference websites. '
		},
		{	title:      'A Smart Grid for Intelligent Energy Use',
			providedBy: 'The Institute',
			dateadded:  '06 Jun 2014',
			image:      'video-2.png',
			video:      'http://ieeetv.ieee.org/media/ieeetvmobile/ConferenceHighlights/IMS2014/IMS_2014_Opening_Plenary_mobile.mp4',
			time:       '12 hours ago',
			text: 		'Our June special report on smart cities focuses on the development of urban areas around the world that are using the ... '
		},
		{	title:      'PELS: Origins of the Power Electronics Society',
			providedBy: 'The Institute',
			dateadded:  '06 Jun 2014',
			image:      'video-3.png',
			video:      'http://ieeetv.ieee.org/media/ieeetvmobile/ConferenceHighlights/IMS2014/IMS_2014_Opening_Plenary_mobile.mp4',
			time:       '12 hours ago',
			text: 		'On 23 April, representatives from 12 New Jersey universities known as the New Jersey Big Data Alliance met to discuss how to ...'
		}
	]
}));

var networkActivitiesGPlusCommunitiesModel = new (Backbone.Model.extend({
	defaults: [
		{	title:      '2014 International Conference on Computer Communication and Informatics (ICCCI)',
			dateadded:  '06 Jun 2014',
			image:      'community-1.png',
			time:       '12 hours ago',
			text: 		'2014 International Conference on Computer Communication and Informatics (ICCCI-2014) aims to provide an outstanding opportunity for both academic and industrial communities alike to address new trends and challenges in emerging technology.'
		},
		{	title:      'WAMICON 2014',
			dateadded:  '06 Jun 2014',
			image:      'community-2.png',
			time:       '12 hours ago',
			text: 		'The 15th annual IEEE Wireless and Microwave Technology Conference (WAMICON 2014) will be held in Tampa, Florida on June 6, 2014. The conference is co-located with the IEEE MTT-S International Microwave Conference (www.ims2014.org) and ARFTG (www.arftg.org). The conference will address up-to-date multidisciplinary research needs and interdisciplinary aspects of wireless and RF technology. The technical program will cover emerging RF/microwave technologies and wireless '
		},
		{	title:      'New Features in EDA and EMC/EMI Workflow Webinar',
			dateadded:  '06 Jun 2014',
			image:      'community-3.png',
			time:       '12 hours ago',
			text: 		'With high data rates, compact structures and complex common-layouts to consider, EM simulation can be used to improve electronic ... '
		},
		{	title:      'International Microwave Symposium',
			dateadded:  '06 Jun 2014',
			image:      'community-4.png',
			time:       '12 hours ago',
			text: 		'The IEEE MTT International Microwave Symposium (IMS) is the premier annual international meeting for technologists ... '
		}
	]
}));

var networkActivitiesMemberReferralModel = new (Backbone.Model.extend({
	defaults: [
		{	title:      'IEEE, S/C, TC',
			dateadded:  '06 Jun 2014',
			image:      'referral-1.png',
			image2:     'referral-1-1.png',
			providedBy: 'PPCT communities.',
			text: 		'As a member of IEEE, S/C/TC You are now eligible to exclusive '
		},
		{	title:      'IEEE Photonics Society',
			dateadded:  '06 Jun 2014',
			image:      'referral-2.png',
			image2:     'referral-2-1.png',
			providedBy: 'PPCT communities.',
			text: 		'As a member of IEEE Photonics Society You are now eligible to exclusive '
		},
		{	title:      'IEEE Magnetics Society',
			dateadded:  '06 Jun 2014',
			image:      'referral-3.png',
			image2:     'referral-3-1.png',
			providedBy: 'PPCT communities.',
			text: 		'As a member of IEEE Photonics Society You are now eligible to exclusive '
		},
		{	title:      'IEEE Oceanic Engineering Society',
			dateadded:  '06 Jun 2014',
			image:      'referral-4.png',
			image2:     'referral-4-1.png',
			providedBy: 'PPCT communities.',
			text: 		'As a member of IEEE Photonics Society You are now eligible to exclusive '
		}
	]
}));

var networkActivitiesAllModel = new (Backbone.Model.extend());

var networkActivitiesCommunityJoinModel = new (Backbone.Model.extend({
	defaults: [
		{   image: 'person-1.png',
			name:  'Jane Craig',
			community: 'Solid State Circuits Community',
			date:  '20 Apr 2014',
			logo: 'scss.png',
			fullAbout: true,
			about: '<p>About IEEE Solid State Circuits Community: focuses on integrated-circuit career opportunities and education, offering Society members:</p>\
					<ul>\
						<li>Cutting-edge journal papers</li>\
						<li>A tutorial-level quarterly magazine</li>\
						<li>International conferences</li>\
						<li>SME Webinars</li>\
						<li>Online tutorials</li>\
						<li>Local networking at More than 80 Chapters</li>\
						<li>Worldwide</li>\
						<li>An archive of chapter-based  technical lectures</li>\
					</ul>'
		},
		{   image: 'person-6.png',
			name:  'Jeff Jarvis',
			community: 'IEEE Communications Society',
			date:  '20 Apr 2014',
			logo: 'comm.png',
			about: 'About IEEE Communications Society: focuses on integrated-circuit career opportunities and education,',
			others: [1, 2, 3, 4, 5, 6, 7]
		},
		{   image:     'person-7.png',
			name:      'Vic Gundotra',
			community: 'Solid State Circuits Community',
			date:  '20 Apr 2014',
			logo: 'smart.png',
			about: 'About IEEE SmartGrid Community: focuses on integrated-circuit career opportunities and education, offering '
		}
	]
}));

var networkActivitiesMGMModel = new (Backbone.Model.extend({
	defaults: [
		{   date:  '20 Apr 2014',
			image: 'person-13.png',
			name:  'Carson D. Daly'
		},
		{   date:  '20 Apr 2014',
			image: 'person-5.png',
			name:  'Catherine Reyes'
		},
		{   date:  '20 Apr 2014',
			image: 'person-10.png',
			name:  'Nicholas Young'
		},
		{   date:  '20 Apr 2014',
			image: 'person-7.png',
			name:  'Stephen Richardson'
		}
	]
}));

var networkActivitiesICXModel = networkActivitiesGPlusCommunitiesModel;
var networkActivitiesVToolsModel = networkActivitiesGPlusCommunitiesModel;

var networkActivitiesLinkedinModel = new (Backbone.Model.extend({
	defaults: [
		{	avatar: "person-17.png",
			name: "Brian Pratz",
			title: "Satellite communication for remote control and monitoring of substations",
			timespan: "5 hours ago",
			datetime: "07/12/2014 - 4:35PM",
			picture: "03.png",
			text: "There’s more than one way to get energy out of natural gas. For decades, one of the most promising methods – and also most difficult to pull"
		},
		{	avatar: "person-10.png",
			name: "Rick Bush",
			title: "India poised to adopt energy storage revolution with 2 new initiatives for energy storage deployment",
			timespan: "16 hours ago",
			datetime: "07/12/2014 - 4:35PM",
			picture: "10.png",
			text: "There’s more than one way to get energy out of natural gas. For decades, one of the most promising methods – and also most difficult to pull",
			comments: true
		},
		{	avatar: "person-14.png",
			name: "Manan Bhatt",
			title: "The New Power Generation: This Fuel Cell System Could Spark A Revolution",
			timespan: "1 day ago",
			datetime: "07/12/2014 - 4:35PM",
			picture: "06.png",
			text: "There’s more than one way to get energy out of natural gas. For decades, one of the most promising methods – and also most difficult to pull"
		},
		{	avatar: "person-23.png",
			name: "Brian Pratz",
			title: "Duke Energy looks to develop microgrids",
			timespan: "1 day ago",
			datetime: "07/12/2014 - 4:35PM",
			picture: "05.png",
			text: "There’s more than one way to get energy out of natural gas. For decades, one of the most promising methods – and also most difficult to pull"
		}
	]
}));

var networkActivitiesTwitterModel = new (Backbone.Model.extend({
	defaults: [
		{	avatar: "person-7.png",
			name: "Guy Kawasaki",
			nick: "GuyKawasaki",
			timespan: "16 hours ago",
			datetime: "07/12/2014 - 4:35PM",
			text: "50 normal words (that happen to sound filthy)",
			link: "http://is.gd/79TJ2v"
		},
		{	avatar: "person-25.png",
			name: "Mike Gammarino",
			nick: "MikeGammarino",
			timespan: "16 hours ago",
			datetime: "07/12/2014 - 4:35PM",
			text: "Material world: how Google discovered what software is made of",
			link: "http://flip.it/oMszW",
			comments: true
		},
		{	avatar: "person-19.png",
			name: "Hayden",
			nick: "Hayden__Burford",
			timespan: "1 day ago",
			datetime: "07/12/2014 - 4:35PM",
			text: "10 Reasons you aren't rich yet...Are u ready? This advice will hit home & after reading,u can't make excuses anymore",
			link: "http://www.entrepreneur.co.za/?p=15467"
		},
		{	avatar: "person-19.png",
			name: "Warrior_Kat",
			nick: "Warrior_Kat",
			timespan: "1 day ago",
			datetime: "07/12/2014 - 4:35PM",
			text: "“My opponent is a glob of snot,” and other great philosopher’s insults",
			link: "http://is.gd/PgKBGF"
		}
	]
}));
