var researchGroupsApp = {
	render : function(){
		var self = this;
		templateLoader.load("researchgroups",
			[ "ResearchGroupsOwnerView",
			  "ResearchGroupsRightNavView"
			],
			function () {
				self.renderResearchGroups();
			}
		);
	},
	renderResearchGroups: function (){
		var view = commonApp.props.researchGroupsView;
		if (view == undefined) view = null;

		switch (view) {
			case null:
			case "list":
				var content = new ResearchGroupsListView();
				break;
			case "emptylist":
				var content = new ResearchGroupsEmptyListView();
				break;
			case 'owner':
				var content = new ResearchGroupsOwnerView();
				break;
			//TABS
			case 'activities':
				var content = new ResearchGroupsOwnerView({ tab: "activities"});
				break;
			case 'documents':
				var content = new ResearchGroupsOwnerView({ tab: "documents"});
				break;
			case 'participants':
				var content = new ResearchGroupsOwnerView({ tab: "participants"});
				break;
			case 'link':
				var content = new ResearchGroupsOwnerView({ tab: "a-link"});
				break;
			case 'document':
				var content = new ResearchGroupsOwnerView({ tab: "document"});
				break;
			//TABS END
			case 'emptyowner':
				var content = new ResearchGroupsEmptyOwnerView();
				break;
			case 'participant':
				var content = new ResearchGroupsParticipantView();
				break;
			case 'emptyparticipant':
				var content = new ResearchGroupsEmptyParticipantView();
				break;
			//POPUPS
			case "createnew":
				var content = new ResearchGroupsEmptyListView();
				var popup = new ResearchGroupsCreateNewView({ popup: true });
				break;
			case "editinfo":
				var content = new ResearchGroupsOwnerView();
				var popup = new ResearchGroupsEditInfoView({ popup: true });
				break;
			case 'addpeople':
				var content = new ResearchGroupsOwnerView();
				var popup = new ResearchGroupsAddPeopleView({ popup: true });
				break;
			case 'searchusers':
				var content = new ResearchGroupsOwnerView();
				var popup = new ResearchGroupsSearchUsersView({ popup: true });
				break;
			case 'invitebymail':
				var content = new ResearchGroupsOwnerView();
				var popup = new ResearchGroupsInviteByMailView({ popup: true });
				break;
			case 'transferowner':
				var content = new ResearchGroupsOwnerView();
				var popup = new ResearchGroupsTransferOwnershipView({ popup: true });
				break;
			case 'close':
				var content = new ResearchGroupsOwnerView();
				var popup = new ResearchGroupsCloseGroupView({ popup: true });
				break;
			//POPUPS END
			default:
				commonApp.render(appUtil.custErrMsgView('Path "researchgroups-' + view + '" was not found!'));
		}
	},

	commonLogic: function (){
		headerLibrarySearchView.render();
		headerLibraryMobileSearchView.render();
		var subMenuView = new SubMenuView({current: "Research" });

		var researchMenuView = new MenuView({ model : Collections.researchMenu, el: '.sub-menu-links' });
		appUtil.makeSubNavPillActive('li-research-groups');

		var rightSubMenuView = new ResearchGroupRightSubNavView();

		$('.btn-create-new').click(function (){
		    new ResearchGroupsCreateNewView({ popup: true });
			return false;
		});

		//Group Administration
		$('.edit-group-info').click(function (){
		    new ResearchGroupsEditInfoView({ popup: true });
			return false;
		});
		$('.transfer-group-ownership').click(function (){
			new ResearchGroupsTransferOwnershipView({ popup: true });
			return false;
		});
		$('.close-group').click(function (){
			new ResearchGroupsCloseGroupView({ popup: true });
			return false;
		});

		$('.from-connections').click(function (){
			new ResearchGroupsAddPeopleView({ popup: true });
			return false;
		});
		$('.search-ppct').click(function (){
			new ResearchGroupsSearchUsersView({ popup: true });
			return false;
		});
		$('.via-email').click(function (){
			new ResearchGroupsInviteByMailView({ popup: true });
			return false;
		});

		$('.research-collections a:not(".btn"), #collectionsdropdownMenu a:not(".btn")').click(function (){
			app.navigate('library-foldersview', { trigger:true, replace: false });
			return false;
		});

		$('.enter-link .fa-times').click(function (){
			$('a[href=".message"]').tab('show');
			return false;
		});
	}
}
