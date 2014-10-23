/*
 Initialize jQuery.mmenu-plugin
 */
var activeMenuItem;
var activeMenuSubItem;

// JS "class"
var mmenu = new (function() {
	//private variables
	var $html = $('html');
	var $body = $('body');
	var params = {
		header: false,
		position: "left",
		isMenu: true,
		slidingSubmenus: false,
		onClick: {
			preventDefault: false,
			close: true,
			setSelected:true
		}
	};

	//public methods
	this.init = function(skipActive) { //remove possible left-offs from old menu
		var content = templateLoader.templates["MobileMenuView"];
		var newMenu = this.remove();
		if (skipActive != true) {
			var activeMenuItem = $('#main-nav-dropdown .dropdown-toggle').attr('id');
			var activeMenuSubItem = $('.sub-menu-links li.active').attr('id');
			newMenu.html(content({data: {activeMenuItem: activeMenuItem, activeMenuSubItem: activeMenuSubItem}}));
		}
		else {
			newMenu.html(content({data: {activeMenuItem: null, activeMenuSubItem: null}}));
		}
		newMenu.mmenu(params);
	};
	this.remove = function (){
		var $mobile_menu = $("#mobile-menu");
		if ($mobile_menu.length != 0) {
			$mobile_menu.remove();
			$html.removeClass();
		}
		return $('<nav id="mobile-menu"></nav>').prependTo($body);
	};
});