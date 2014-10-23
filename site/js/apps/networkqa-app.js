var networkQAApp = {
	render : function(){
		this.commonLogic();

		var view = commonApp.props.networkQAView;
		var view = ((view == null) ? "list" : view);

		switch (view) {
			case 'single':
				new  NetworkQASingleQuestionView ();
				break;

			case "list":
			case undefined:
				new  NetworkQAQuestionsListView ();
				break;
			default:
				commonApp.render( appUtil.custErrMsgView('Path network-qa-' + view + '" was not found!' ));
		}
	},
	commonLogic: function (){
		headerProfileSearchView.render();
		headerProfileMobileSearchView.render();
		var subMenuView = new SubMenuView({current: "Network" });
		var networkMenuView = new MenuView({ model : Collections.networkMenu, el: '.sub-menu-links' });

		appUtil.makeSubNavPillActive('li-qa');
	}
}
