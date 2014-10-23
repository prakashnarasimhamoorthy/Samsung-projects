var networkEventsApp = {
	render : function(){
		var view = commonApp.props.networkEventsView;
		var view = ((view == null) ? "default" : view);

		switch (view) {
			case 'detailed':
				new NetworkEventsDetailedView();
				break;
			case 'viewall':
				new NetworkEventsViewAllView();
				break;

			case "default":
			case undefined:
				new NetworkEventsDefaultView();
				break;
			default:
				commonApp.render( appUtil.custErrMsgView('Path network-events' + view + '" was not found!' ));
		}
	}
}
