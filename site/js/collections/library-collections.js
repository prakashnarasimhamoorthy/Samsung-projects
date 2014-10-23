var LibraryTableItem = Backbone.Model.extend({	defaults:
{	"Authors":		"Not specified",
	"Title":		"Not specified",
	"Source":		"Not specified",
	"Year":			"Not specified",
	"Import Date":	"Not specified",
	type:           null
}
});
var libraryTableItems = new (Backbone.Collection.extend({ model: LibraryTableItem }));
libraryTableItems.set([
	{	"Authors":		"D Catteddu",
		"Title":		"Personalized recommendation in social tagging systems using hierarchical clustering",
		"Source":		"High Performance Computing and...",
		"Year":			"2012",
		"Import Date":	"30 July 2013",
		type:           "word"
	},
	{	"Authors":		"FH Wang",
		"Title":		"Effective personalized recommendation based on time-framed navigation clustering and association mining",
		"Source":		"Expert Systems with Applications",
		"Year":			"2004",
		"Import Date":	"17 June 2013",
		type:           "tex"
	},
	{	"Authors":		"D Catteddu",
		"Title":		"Personalized recommendation in social tagging systems using hierarchical clustering",
		"Source":		"High Performance Computing and...",
		"Year":			"2012",
		"Import Date":	"30 July 2013",
		type:           "pdf"
	},
	{	"Authors":		"FH Wang",
		"Title":		"Effective personalized recommendation based on time-framed navigation clustering and association mining",
		"Source":		"Expert Systems with Applications",
		"Year":			"2004",
		"Import Date":	"17 June 2013",
		type:           "clip"
	},
	{	"Authors":		"D Catteddu",
		"Title":		"Personalized recommendation in social tagging systems using hierarchical clustering",
		"Source":		"High Performance Computing and...",
		"Year":			"2012",
		"Import Date":	"30 July 2013",
		type:           "tex"
	},
	{	"Authors":		"FH Wang",
		"Title":		"Effective personalized recommendation based on time-framed navigation clustering and association mining",
		"Source":		"Expert Systems with Applications",
		"Year":			"2004",
		"Import Date":	"17 June 2013"
	},
	{	"Authors":		"D Catteddu",
		"Title":		"Personalized recommendation in social tagging systems using hierarchical clustering",
		"Source":		"High Performance Computing and...",
		"Year":			"2012",
		"Import Date":	"30 July 2013",
		type:           "word"
	},
	{	"Authors":		"FH Wang",
		"Title":		"Effective personalized recommendation based on time-framed navigation clustering and association mining",
		"Source":		"Expert Systems with Applications",
		"Year":			"2004",
		"Import Date":	"17 June 2013",
		type:           "tex"
	},
	{	"Authors":		"D Catteddu",
		"Title":		"Personalized recommendation in social tagging systems using hierarchical clustering",
		"Source":		"High Performance Computing and...",
		"Year":			"2012",
		"Import Date":	"30 July 2013",
		type:           "pdf"
	},
	{	"Authors":		"FH Wang",
		"Title":		"Effective personalized recommendation based on time-framed navigation clustering and association mining",
		"Source":		"Expert Systems with Applications",
		"Year":			"2004",
		"Import Date":	"17 June 2013"
	}
]);

var libraryListItems = new (Backbone.Collection.extend({
	model: Backbone.Model.extend({ defaults:
		{	"Authors":		"Not specified",
			"Title":		"Not specified",
			"Source":		"Not specified",
			"Year":			"Not specified",
			"Text": 		"Not specified"
		}
	})
}));
libraryListItems.set([
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{
		"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	}
]);

var librarySearhOnlineItems = new (Backbone.Collection.extend({
	model: Backbone.Model.extend({ defaults:
	{	"Authors":		"Not specified",
		"Title":		"Not specified",
		"Source":		"Not specified",
		"Year":			"Not specified",
		"Text": 		"Not specified",
		"Added":        true
	}
	})
}));
libraryListItems.set([
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347.",
		"Added":        false
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ...",
		"Added":        false
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{
		"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ...",
		"Added":        false
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	},
	{	"Authors":		"M Armbrust, A Fox, R Griffith, AD Joseph",
		"Title":		"A view of cloud computing",
		"Source":		"Communications of the ACM",
		"Year":			"2010",
		"Import Date":	"30 July 2013",
		"Text": 		"Cloud computing, the long-held dream of computing as a utility, has the potential to transform a large part of the IT industry, making software even more attractive as a service and shaping the way IT hardware is designed and purchased. Developers with innovative ideas for ..."
	},
	{	"Authors":		"P Mell, T Grance",
		"Title":		"The NIST definition of cloud computing (draft)",
		"Source":		"NIST Special Publication",
		"Year":			"2011",
		"Import Date":	"30 July 2013",
		"Text": 		"The National Institute of Standards and Technology (NIST) developed this document in furtherance of its statutory responsibilities under the Federal Information Security Management Act (FISMA) of 2002, Public Law 107-347."
	}
]);
