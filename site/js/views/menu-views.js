var MenuView = Backbone.View.extend({
	template: _.template(
		'<li id="<%= id %>"<% if (hidden == true) { %> class="hidden"<% } %>>\
			<a href="<%= link %>">\
				<%= title %>\
			</a>\
		</li>'
	),
	initialize: function() {
		this.render();
	},
	render : function(){
		try{
			var that = this;
			var tmp = '';
			this.model.forEach( function(item){
				tmp += that.template(item.attributes);
			});
			that.$el.html(tmp);

			return that;
		}catch(e){
			//let it go
		}
	}
});

var ToolBoxView = Backbone.View.extend({
	el: '#sub-menu .toolbox',

	initialize: function() {
		this.render();
	},

	render : function(){
		var content = templateLoader.templates['ToolboxView'];
		this.$el.html(content);
		return this;
	}
});

var SubMenuView = Backbone.View.extend({
	el: '#sub-menu',
    model : Collections.mainMenu,

	initialize: function(attrs) {
		this.template = templateLoader.templates['SubMenuView'];
		if ( attrs.current !== undefined ){
			this.current= attrs.current;
		} else {
			this.dropTitle = "Not set!";
		}
		this.render();
	},

	render : function(){
		var dropMenu = this.model.toJSON();
		var	current = _.where(dropMenu, {title: this.current})[0];

		var content = this.template({ dropMenu: dropMenu, current: current });

		this.$el.html(content).show();
		new ToolBoxView();
		return this;
	}
});
