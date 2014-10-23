var NetworkQAView = Backbone.View.extend ({
	el: '#content',
	initialize: function (attrs) {
		var data = this.model != undefined ? this.model.toJSON() : null;
		for (attr in attrs) this[attr] = attrs[attr];

		var self = this;
		templateLoader.load('networkqa',[this.template],
			function (){
				var content =  templateLoader.templates[self.template]({data: data});
				self.$el.html(content);

				networkQAApp .commonLogic();

				if (typeof self.logic == "function") self.logic();
			}
		)
	}
});

var NetworkQAListView = Backbone.View.extend ({
	el: '#content',
	initialize: function (attrs) {
		for (attr in attrs) this[attr] = attrs[attr];

		var self = this;
		templateLoader.load('networkqa',[this.template],
			function (){
				var collection = new (Backbone.Collection.extend({
					model: self.model
				}));
				collection.fetch({
					url: "assets/templates/networkqa/data/" + self.json_file,
					success: function() {
						self.data = collection.toJSON();
						self.render();
					}
				});
			}
		)
	},

	render: function (){
		var content =  templateLoader.templates[this.template]({data: this.data});
		this.$el.html(content);

		if (typeof this.logic == "function") this.logic();
	}
});

var NetworkQAQuestionsTabView = NetworkQAListView.extend({
	template: "NetworkQAQuestionsTabView",
	model: NetworkQAQuestion
});

var NetworkQAQuestionsListView = NetworkQAView.extend({
	template: "NetworkQAQuestionsListView",

	logic: function (){
		new NetworkQAQuestionsTabView({ el: "#most-popular",   json_file: "network_qa_questions2.json" });
		new NetworkQAQuestionsTabView({ el: "#needing-answer", json_file: "network_qa_questions1.json" });
		new NetworkQAQuestionsTabView({ el: "#recently-asked", json_file: "network_qa_questions3.json" });

		$('.btn-remove-item').tooltip();
		$('.btn-remove-item').click(function(){
			var $this = $(this);
			var thisId = $this.data('id');

			var thisWrap = $this.parents('.item-wrap');
			var removeBox = thisWrap.find('.item-remove');

			//thisWrap.find('.item-content').hide();
			removeItemView = new NetworkCommunitiesLPRemoveItemView({ id:thisId });
			removeItemView.render(removeBox);
			// var $this = $(this);
			// $this.parents('.document-wrap').hide();
			return false;
		});
	}
});

var NetworkQASingleQuestionView = NetworkQAListView.extend({
	template: "NetworkQAAnswersListView",
	model: NetworkQAAnswer,
	json_file: "network_qa_answers1.json",
	logic: function (){
		
	}
});