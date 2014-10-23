var libraryApp = {
	render : function(){
		var self = this;
		templateLoader.load("library",
			[ "LibraryView",
			  "LibraryTableView",
			  "LibraryListView",
			  "LibraryEmptyView",
			  "LibrarySettingsView",
			  "LibraryToolsView"
			],
			function () {
				self.renderLibrary();
				self.commonLogic();
			}
		);
	},

	renderLibrary: function() {
		commonApp.props.librarySearchResult = false;
		new LibraryView({ template: "LibraryView" });

		switch (commonApp.props.libraryView) {
			case 'empty':
				$('a[href="#library-empty"]').tab('show');
				$('.nav-tabs-library > div').removeClass('active');
				$('.documents-tab').addClass('active');
				break;
			case 'list':
				$('a[href=".list-results"]').tab('show');
				$('.select').hide();
				break;
			case 'settings':
				$('a[href="#library-settings"]').tab('show');
				break;
			case 'settingssuccessful':
				$('a[href="#library-settings-successful"]').tab('show');
				$('.nav-tabs-library > div').removeClass('active');
				$('.settings-tab').addClass('active');
				templateLoader.load('library', ['LibrarySettingsSuccessfulView'], function() {
					var content = templateLoader.templates['LibrarySettingsSuccessfulView']();
					$('#library-settings-successful').html(content);

					checkbox.init();

					$(".interested-storage .box-btn-singup .btn-singup").click(function(e){
						e.preventDefault();
						$(this).hide();
						$(".box-btn-singup .btn-singedup").show();
					});
				});
				break;
			case 'tools':
				$('a[href="#library-tools"]').tab('show');
				break;

			case "popup":
				commonApp.props.triggerLibraryPopup = true;
				break;
			case "popuprecommended":
				setRecommendedFilters();
				commonApp.props.triggerLibraryPopup = true;
				break;

			//Bibliography
			case "bibliographyway":
				new BibliographySelectWayView({ popup: true });
				break;
			case "bibliographycreate":
				new BibliographyCreateView({ popup: true });
				break;
			case "bibliographyprocess":
				new BibliographyProcessView({ popup: true });
				break;
			case "bibliographydone":
				new BibliographyDoneView({ popup: true });
				break;
			case "bibliographyexport":
				new BibliographyExportView({ popup: true });
				break;
			case "bibliographyexportcitationmobile":
				new BibliographyExportCitationMobileView({ popup: true });
				break;
			case "bibliographysavingbibliographymobile":
				new BibliographySavingBibliographyMobileView({ popup: true });
				break;

			//Upload
			case "upload":
				new LibraryUploadView({ popup: true });
				break;
			case "uploadmetadata":
				new LibraryUploadMetadataView({ popup: true });
				break;

			//Research Tools
			case "researchtoolschoose":
				new LibraryResearchToolsChooseView({ popup: true });
				break;
			case "mendeleysignin":
				new LibraryMendeleySignInView({ popup: true });
				break;
			case "mendeleyconnect":
				new LibraryMendeleyConnectView({ popup: true });
				break;
			case "mendeleydocumentsretrieved":
				new LibraryMendeleyDocumentsRetrievedView({ popup: true });
				break;
			case "mendeleydone":
				new LibraryResearchMendeleyDoneView({ popup: true });
				break;

			case "recommended":
				setRecommendedFilters();
				break;
			case "researchcollections":
				setMyPublicationsFilters();
				break;

			case 'searchonline':
				new LibrarySearchOnlineView();
				break;
			case null:
				//do nothing
				break;
			default:
				//commonApp.render( appUtil.custErrMsgView('Path "library-' + commonApp.props.libraryView + '" was not found!' ));
		}
	},

	commonLogic: function()  {
		headerLibrarySearchView.render();
		headerLibraryMobileSearchView.render();
		var subMenuView = new SubMenuView({current: "Research" });
		var libraryMenuView = new LibraryRightNavView({el: '.right-nav-links' });
		var researchMenuView = new MenuView({ model : Collections.researchMenu, el: '.sub-menu-links' });
		appUtil.makeSubNavPillActive('li-library');
	}
};

var libraryArticleApp = {
	render : function(){
		var self = this;
		templateLoader.load("library",
			[ "LibraryArticleView" ],
			function () {
				headerLibrarySearchView.render();
				headerLibraryMobileSearchView.render();
				var subMenuView = new SubMenuView({current: "Research" });
				var libraryMenuView = new LibraryRightNavView({el: '.right-nav-links' });
				var researchMenuView = new MenuView({ model : Collections.researchMenu, el: '.sub-menu-links' });
				appUtil.makeSubNavPillActive('li-library');

				self.renderLibraryArticleView();
			}
		);
	},

	renderLibraryArticleView: function() {
		var content = new ContentView({
			template: "LibraryArticleView",
			callback: function (){
				placeholder.init();
			}
		});
	}
};
