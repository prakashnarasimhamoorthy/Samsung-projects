var researchGroupsListModel = new (Backbone.Model.extend({
	defaults: [
		{	image:          "02.png",
			title:          "IEEE Cloud Computing",
			text:           "This group covers all major areas of computing and information technology, including computer hardware, software development, multimedia, and IT security.",
			membersIds:     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			membersNumber:  11
		},
		{	image:          "09.png",
			title:          "Earth Observations",
			text:           "IEEE opens the door to opportunities that will help you develop your professional identity in IEEE's designated fields of interest: sciences, technology, engineering, and mathematics (STEM).",
			membersIds:     [1, 2, 3, 4, 5, 6, 7, 8],
			membersNumber:  8
		}
	]
}));

var researchGroupsDocumentsModel= new (Backbone.Model.extend({	defaults: [
		{	title: "A view of cloud computing",
			authors: "M Armbrust, A Fox, R Griffith, AD Joseph",
			category: "Communications of the ACM",
			year: 2010,
			text: "Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ...",
			in_your_library: {
				main: "PPCT Library",
				sub: "Prep Docs for ML Consultant"
			},
			gdrive: true
		},
		{	title: "The NIST definition of cloud computing (draft)",
			authors: "P Mell, T Grance",
			category: "NIST Special Publication",
			year: 2011,
			text: "The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347.",
			in_your_library: {
				main: "PPCT Library",
				sub: "Vandelay Industries"
			},
			gdrive: true
		},
		{	title: "A view of cloud computing",
			authors: "M Armbrust, A Fox, R Griffith, AD Joseph",
			category: "Communications of the ACM",
			year: 2010,
			text: "Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ...",
			add: true
		},
		{	title: "The NIST definition of cloud computing (draft)",
			authors: "P Mell, T Grance",
			category: "NIST Special Publication",
			year: 2011,
			text: "The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347.",
			add: true,
			gdrive: true
		},
		{	title: "A view of cloud computing",
			authors: "M Armbrust, A Fox, R Griffith, AD Joseph",
			category: "Communications of the ACM",
			year: 2010,
			text: "Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ...",
			in_your_library: {
				main: "PPCT Library",
				sub: "Prep Docs for ML Consultant"
			},
			gdrive: true
		},
		{	title: "The NIST definition of cloud computing (draft)",
			authors: "P Mell, T Grance",
			category: "NIST Special Publication",
			year: 2011,
			text: "The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347.",
			add: true,
			gdrive: true
		}
	]
}));

var researchGroupsParticipantsModel = new (Backbone.Model.extend({	defaults: [
		{   image:     'person-1.png',
			name:      'Jane Craig',
			title:     'IEEE Student',
			kite:      'ieee_student.png',
			volunteer: true,
			work:      'Manager, Fox Business Corporation',
			graduate:  'Princeton University',
			location:  'New York',
			owner: true
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

var researchGroupsActivitiesModel = new (Backbone.Model.extend({ defaults: [
	{	avatar: "person-7.png",
		name: "Yang Hu",
		date: "23 Apr 2014",
		title: "Exploring and Exploiting the Multilevel Parallelism Inside SSDs for Improved Performance and Endurance",
		authors: "Yang Hu; Wuhan Nat. Lab. for Optoelectron., Huazhong Univ. of Sci. & Technol., Wuhan, China; Hong Jiang; Dan Feng; Lei Tian",
		text: "Given the multilevel internal SSD parallelism at the different four levels: channel-level, chip-level, die-level, and plane-level, how to exploit these levels of parallelism will directly and",
		more: "significantly impact the performance and endurance of SSDs, which is in turn primarily determined by three internal factors, namely, advanced commands, allocation schemes, and the priority order of exploiting the four levels of parallelism.",
		comments: true
	},
	{	avatar: "person-10.png",
		name: "Claudio Cotar",
		date: "23 Apr 2014",
		title: "Cloud Computing Services Potential Analysis. An integrated model for evaluating Software as a Service",
		authors: "Claudio Cotar",
		text: "Abstract: This paper address, in a practical and integrated model, a possible solution of issues concerning the Software as a Service (SaaS) introduction and evaluation. A selective top-down",
		more: " analysis is proposed to guide the overall assessment. The construction of the Potential Adoption Index (PAI), in the last stage of the process, aims to facilitate the evaluation and comparison process."
	},
	{	avatar: "person-12.png",
		name: "Supriya Desai",
		date: "23 Apr 2014",
		title: "A Study of Cloud Computing Software-as-a-Service (SaaS) in Financial Firms",
		authors: "H. Howell-Barber, James Lawler, Supriya Desai, Anthony Joseph",
		text: "Abstract: Cloud computing is a delivery method of information systems that is being deployed by the financial industry. Software-as-a-Service (SaaS) is the more frequent model",
		more: "of this method in the industry. In this study the authors analyze factors that can enable firms in the financial industry to formulate cloud computing strategy."
	}
]}));