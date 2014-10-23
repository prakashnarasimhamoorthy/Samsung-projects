var SearchResultsGridView = Backbone.View.extend({
	initialize: function(attrs) {
		this.template = attrs.template;
		this.render();
	},

	render: function(){
		var that = this;
		var data = {articles: that.model.toJSON()};

		var content = that.template(data);
		that.$el.html(content);
	}
});
