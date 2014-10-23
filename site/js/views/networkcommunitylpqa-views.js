/*  Network Community LP QA Tab View */
function networkQAAutoloadInit(self) {
	var $el = $('.all-questions-list');
	var autoloadTemplate = "NetworkCommunityQAAutoloadView";
	templateLoader.load('networkcommunitylp', [autoloadTemplate],
		function (){
			data = networkCommunityQuestions.toJSON();
			var content = templateLoader.templates[autoloadTemplate]({data: data, id: self.id});
			self.id += networkCommunityQuestions.length;

			$('.load-spinner').hide();
			$el.append(content);

			$('.btn-remove-item').tooltip();
			$('.btn-remove-item').click(function(){
				var $this = $(this);
				var thisId = $this.data('id');

				var thisWrap = $this.parents('.item-wrap');
				var removeBox = thisWrap.find('.item-remove');

				removeItemView = new NetworkCommunitiesLPRemoveItemView({ id:thisId });
				removeItemView.render(removeBox);

				return false;
			});

			$('.question-text a').click(function (){
				var $self = $(this);
				templateLoader.load('networkcommunitylp', ["NetworkCommunityAnswersListView"],
					function (){
						var content = templateLoader.templates["NetworkCommunityAnswersListView"]({data: networkCommunityQAAnswers.toJSON()});
						$self.parents('.all-questions-list').hide();
						$('.questions-list .question-full').html(content);
						self.canScroll = false;

						$('.btn-return').click(function(){
							$('.questions-list .question-full').html('');
							$('.all-questions-list').show();
							self.canScroll = true;
							return false;
						});

						tinymce.init({
							selector: "#answer-text",
							menubar : false,
							statusbar : false,
							plugins: "image media link",
							toolbar: "image media link unlink"
						});

						checkbox.init();

						$(".question-report .answer-btn").click(function (){
							$(this).hide();
							$(".form-answer").slideDown();
							$(".question-report .text-btn-press").show();
							$(".text-btn-nopress").hide();

						});
						$(".form-answer .btn-cancel").click(function(e){
							e.preventDefault();
							$(".form-answer").slideUp();
							$(".question-report .answer-btn").show();
							$(".question-report .text-btn-press").hide();
							$(".text-btn-nopress").show();
						});
						$(".form-answer .submit-answer-btn").click(function(e){
							e.preventDefault();
							$(".form-answer").slideUp();
							$(".question-report .answer-btn").show();
							$(".question-report .text-btn-press").hide();
							$(".text-btn-nopress").show();
						});
					}
				);
				return false;
			});

			if (commonApp.props.networkCommunityLPQATabFull == true) {
				$('.question-text:first a').click();
				commonApp.props.networkCommunityLPQATabFull = false;
			}
		}
	);
}

var NetworkCommunityQATabView = NetworkCommunityLPTabView.extend({
	el: '#qa-tab',
	template: "NetworkCommunityQATabView",
	id: 0,
	canScroll: true,
	logic: function(){
		networkSearchButtonInit();

		var self = this;

		networkQAAutoloadInit(self);

		$(window).scroll(function() {
			if(self.canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
				self.canScroll = false;
				$('.load-spinner').show();
				setTimeout(function () {
					networkQAAutoloadInit(self);
					self.canScroll = true;
				}, 1000);
			}
		});
	}
});

