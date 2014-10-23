//COLLECTIONS
var MenuCollection = Backbone.Collection.extend({
	model: Backbone.Model.extend({ defaults:
	{	title: "Not specified",
		link:  "#",
		id:    "",
		icon:  "",
		hidden: "false"
	}}),
	initialize: function(attrs){
		this.set(attrs);
	}
});

var Collections = {
	emptyMenu: new MenuCollection([]),

	sitesMenu: new MenuCollection([
		{ title: "<i class='home-icon visible-xs'></i> IEEE.org", link: "http://www.ieee.org/",        id:"h-ieee"     },
		{ title: "IEEE <i>Xplore</i> Digital Library",			  link: "http://ieeexplore.ieee.org/", id:"h-xplore"    },
		{ title: "IEEE Standards",								  link: "http://standards.ieee.org/",  id:"h-standards" },
		{ title: "IEEE Spectrum",								  link: "http://spectrum.ieee.org/",   id:"h-spectrum"  },
		{ title: "More Sites",									  link: "http://www.ieee.org/sitemap", id:"h-more"      }
	]),
	footerMenu: new MenuCollection([
		{ title: "About PPC",						 link: "#network" ,		  id:"f-about"   },
		{ title: "Contact",						     link: "#network-people", id:"f-contact" },
		{ title: "Help",							 link: "#",				  id:"f-help"	 },
		{ title: "Terms of Use",					 link: "#",				  id:"f-terms"   },
		{ title: "Nondiscrimination Policy",		 link: "#",	              id:"f-nondis"  },
		{ title: "Site Map",						 link: "#", 		      id:"f-site"    },
		{ title: "Privacy & Opting out of Cookies",  link: "#profile",        id:"f-privacy" }
	]),
	mainMenu: new MenuCollection([
		{ title: "Home",     link: "#home", 		       icon: "icon_home.png" ,    id:"menu-home"     },
		{ title: "Network",  link: "#network-communities", icon: "icon_network.png",  id:"menu-network"  },
		{ title: "Research", link: "#library",		       icon: "icon_library.png",  id:"menu-library"  },
		{ title: "Profile",  link: "#profile",             icon: "icon_profile.png",  id:"menu-profile"  },
		{ title: "Settings", link: "#settings",            icon: "icon_settings.png", id:"menu-settings" }
	]),
	mainMenuSearch: new MenuCollection([
		{ title: "Home",    link: "#home", 		    icon: "icon_home.png" , 	    id:"menu-home"          },
		{ title: "Network", link: "#network",       icon: "icon_network.png", 	    id:"menu-network"       },
		{ title: "Research",link: "#library",		icon: "icon_library.png", 	    id:"menu-library"       },
		{ title: "Profile", link: "#profile",       icon: "icon_profile.png", 	    id:"menu-profile"       },
		{ title: "Settings",link: "#settings",      icon: "icon_settings.png", 	    id:"menu-settings"      },
		{ title: "Search",  link: "#searchresults", icon: "icon_searchresults.png", id:"menu-searchresults", hidden: true }
	]),
	profileMenu: new MenuCollection([
		{ title: "Details",     link: "#profile-details",     id: "li-details"     },
		{ title: "Activities",  link: "#profile-activities",  id: "li-activities"  },
		{ title: "Connections", link: "#profile-connections", id: "li-connections" }
	]),
	networkMenu: new MenuCollection([
 		{ title: "Communities",       link: "#network-communities",       id:"li-communities" },
		{ title:
			'<span class="hidden-sm">Question & Answer</span>\
			 <span class="visible-sm">Q & A</span>', link: "#network-qa", id:"li-qa"          },
 		{ title: "People",		         link: "#network-people",	      id:"li-people"      },
		{ title: "Events",		         link: "#network-events",	      id:"li-events"      },
 		{ title: "Activities",	         link: "#network-activities",     id:"li-activities"  }
 	]),
	networkActivitiesFilterMenu: new MenuCollection([
		{ title: "All Activities",       link: "#network-activitiesall",                 id:"li-all-activities"                 },
		{ title: "Call for Papers",      link: "#network-activitiescallforpapers",       id:"li-call-for-papers"                },
		{ title: "Call for Journals",    link: "#network-activitiescallforjournals",     id:"li-call-for-journals"              },
		{ title: "IEEE News",            link: "#network-activitiesieeenews",            id:"li-ieee-news"                      },
		{ title: "Institute News",       link: "#network-activitiesinstitutenews",       id:"li-institute-news"                 },
		{ title: "IEEE TV",              link: "#network-activitiesieeetv",              id:"li-ieee-tv"                        },
		{ title: "IEEE Spectrum News",   link: "#network-activitiesieeespectrumnews",    id:"li-ieee-spectrum-news"             },
		{ title: "My Connections",       link: "#network-activitiesmyconnections",       id:"li-network-activities-connections" },
		{ title: "Extended Connections", link: "#network-activitiesextendedconnections", id:"li-extended-connections"           },
		{ title: "Member Referral",      link: "#network-activitiesmemberreferral",      id:"li-memberreferral"                 },
		{ title: "My Connections",       link: "#network-activitiescommunityjoin",       id:"li-community-join",                hidden: true  },
		{ title: "Google+ Communities",  link: "#network-activitiesgpluscommunities",    id:"li-gplus-communities"              },
		{ title: "Member Referral",      link: "#network-activitiesmgm",                 id:"li-network-activities-mgm",        hidden: true  },
		{ title: "ICX",                  link: "#network-activitiesicx",                 id:"li-icx"                            },
		{ title: "vTools",               link: "#network-activitiesvtools",              id:"li-vtools"                         },
		{ title: "LinkedIn",             link: "#network-activitieslinkedin",            id:"li-linkedin"                       },
		{ title: "Twitter",              link: "#network-activitiestwitter",             id:"li-twitter"                        }
	]),
	homeActivitiesFilterMenu: new MenuCollection([
		{ title: "All Activities",       link: "#home-all",                 id:"li-all-activities"                 },
		{ title: "Call for Papers",      link: "#home-callforpapers",       id:"li-call-for-papers"                },
		{ title: "Call for Journals",    link: "#home-callforjournals",     id:"li-call-for-journals"              },
		{ title: "IEEE News",            link: "#home-ieeenews",            id:"li-ieee-news"                      },
		{ title: "Institute News",       link: "#home-institutenews",       id:"li-institute-news"                 },
		{ title: "IEEE TV",              link: "#home-ieeetv",              id:"li-ieee-tv"                        },
		{ title: "IEEE Spectrum News",   link: "#home-ieeespectrumnews",    id:"li-ieee-spectrum-news"             },
		{ title: "My Connections",       link: "#home-myconnections",       id:"li-network-activities-connections" },
		{ title: "Extended Connections", link: "#home-extendedconnections", id:"li-extended-connections"           },
		{ title: "Member Referral",      link: "#home-memberreferral",      id:"li-memberreferral"                 },
		{ title: "My Connections",       link: "#home-communityjoin",       id:"li-community-join",  hidden: true  },
		{ title: "Google+ Communities",  link: "#home-gpluscommunities",    id:"li-gplus-communities"              },
		{ title: "Member Referral",      link: "#home-mgm",                 id:"li-network-activities-mgm", hidden: true  },
		{ title: "ICX",                  link: "#home-icx",                 id:"li-icx"                            },
		{ title: "vTools",               link: "#home-vtools",              id:"li-vtools"                         },
		{ title: "LinkedIn",             link: "#home-linkedin",            id:"li-linkedin"                       },
		{ title: "Twitter",              link: "#home-twitter",             id:"li-twitter"                        }
	]),
 	notificationsMenu: new MenuCollection([
		{ title: "Research",	 link: "#research" ,   id:"li-research"    },
		{ title: "My Interests", link: "#myinterests", id:"li-myinterests" },
		{ title: "Activity",	 link: "#activity",    id:"li-activity"	   },
		{ title: "Events",		 link: "#events",	   id:"li-events"	   },
		{ title: "IEEE News",	 link: "#news",		   id:"li-news" 	   }
	]),
   	researchMenu: new MenuCollection([
   		{ title: "Library",		    link: "#library" ,           id:"li-library"             },
   		{ title: "Research Groups", link: "#researchgroups",     id:"li-research-groups"     },
   		{ title: "Activities",	    link: "#researchactivities", id:"li-research-activities" }
   	]),
	settingsMenu: new MenuCollection([
		{ title: "Activity Stream",   link: "#settings-activitystream",	    id:"li-activity-stream"     },
		{ title: "Attached Services", link: "#settings-attachedservices",   id:"li-attached-services"   },
		{ title: "Notifications",     link: "#settings-emailnotifications", id:"li-email-notifications" }
	]),
	searchResultsMenu: new MenuCollection([
		{ title: "All Results", link: "#searchresults-all",         id:"li-all"         },
		{ title: "Activities",  link: "#searchresults-activities",  id:"li-activities"  },
		{ title: "Communities", link: "#searchresults-communities", id:"li-communities" },
		{ title: "People",      link: "#searchresults-people",      id:"li-people"      },
		{ title: "Events",      link: "#searchresults-events",      id:"li-events"      },
		{ title: "Library",     link: "#searchresults-library",     id:"li-library"    }
	])
};
