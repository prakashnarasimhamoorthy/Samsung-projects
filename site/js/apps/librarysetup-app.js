var librarySetupApp = {
	render: function() {
		switch (commonApp.props.librarySetupView) {
			case null:
			case undefined:
				new LibrarySetupView({view: "LibrarySetupView"});
				break;
			case '2':
				new LibrarySetupView({view: "LibrarySetup2View"});
				break;
			case '3':
				new LibrarySetupView({view: "LibrarySetup3View"});
				break;
			case '4':
				new LibrarySetupView({view: "LibrarySetup4View"});
				break;
			case '5':
				new LibrarySetupView({view: "LibrarySetup5View"});
				break;
			case 'storagelocation':
				new LibrarySetupView({view: "LibrarySetupStorageLocationView"});
				break;
			case 'filelocation':
				new LibrarySetupView({view: "LibrarySetupFileLocationView"});
				break;
			case 'filelocationchosen':
				new LibrarySetupView({view: "LibrarySetupFileLocationChosenView"});
				break;
			case 'organizing':
				new LibrarySetupView({view: "LibrarySetupOrganizingView"});
				break;
			case 'managingcitations':
				new LibrarySetupView({view: "LibrarySetupManagingCitationsView"});
				break;
			case 'import':
				new LibrarySetupView({view: "LibrarySetupImportView"});
				break;
			case 'importmendeley':
				new LibrarySetupView({view: "LibrarySetupImportMendeleyView"});
				break;
			case 'importmendeleystep2':
				new LibrarySetupView({view: "LibrarySetupImportMendeleyStep2View"});
				break;
			case 'importmendeleystep3':
				new LibrarySetupView({view: "LibrarySetupImportMendeleyStep3View"});
				break;
			case 'importmendeleystep4':
				new LibrarySetupView({view: "LibrarySetupImportMendeleyStep4View"});
				break;

			default: commonApp.render( appUtil.custErrMsgView('Path "librarysetup-' + commonApp.props.librarySetupView + '" was not found!' ));
		}
	}
}
