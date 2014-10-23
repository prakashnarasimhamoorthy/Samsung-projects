var BibliographyView = Backbone.View.extend ({
	el: '#popup',
	initialize: function (attrs) {
		this.popup = attrs.popup;
		this.callback = attrs.callback;
		var self = this;
		templateLoader.load('bibliography',[this.template],
			function (){
				var content =  templateLoader.templates[self.template]();
				self.$el.html(content);
				if (self.popup == true ) {
					self.$el.modal('show');
					$('.modal-backdrop').css('background-color', 'transparent');
				}
		        self.logic();
		        $('.close').click(function (){
				    self.$el.modal('hide');
				    return false;
			    });
			}
		)
	},
	logic: function() {}
});

var BibliographySelectWayView = BibliographyView.extend({
	template: "BibliographySelectWayView",
	logic: function (){
		var self = this;
		$('.btn-cancel').click(function (){
			self.$el.modal('hide');
		});
		$('.bibliographies-next-step').click(function (){
			new BibliographyCreateView({});
		});
		$('.export-citations-next-step').click(function (){
			new BibliographyExportView({});
		});
	}
});

var BibliographyCreateView = BibliographyView.extend({
	template: "BibliographyCreateView",
	logic: function (){
		var self = this;
		$('.btn-back').click(function (){
			new BibliographySelectWayView({});
		});
		$('.type-of-save label').click(function (){
			var clickTarget = $(this).find('input');
			if (clickTarget.hasClass('save-to-ppct-library')) {
				$('.citation-select').addClass('disabled');
				$('.citation-select .dropdown-toggle').removeAttr("data-toggle");
			} else {
				$('.citation-select').removeClass('disabled');
				$('.citation-select .dropdown-toggle').attr("data-toggle", "dropdown");
			}
		});
		$('.btn-continue').click(function(){
			if ($('.save-to-ppct-library').is(':checked')) {
				new BibliographyProcessView({});
			} else if ($('.save-locally').is(':checked')){
				var a = document.createElement('a');
				a.setAttribute('download', 'bibliography.rtf');
				a.href = 'assets/img/bibliography/bibliography.rtf';
				a.innerHTML = 'testing';
				a.style.display = 'none';
				document.body.appendChild(a);
				a.click();
				self.$el.modal('hide');
			} else {
				return false;
			}
		});
	}
});

var BibliographyProcessView = BibliographyView.extend({
	template: "BibliographyProcessView",
	logic: function(){
		var self = this;
		this.timer = setTimeout(function() {
			app.navigate('library-bibliographydone', { trigger: true });
		 }, 3000);
	}
});

var BibliographyDoneView = BibliographyView.extend({
	template: "BibliographyDoneView",
	logic: function (){
		var self = this;
		$('.btn-done').click(function (){
			self.$el.modal('hide');
		});
	}
});

var BibliographyExportView = BibliographyView.extend({
	template: "BibliographyExportView",
	logic: function (){
		var self = this;
		$('.btn-export').click(function (){
			self.$el.modal('hide');
		});
	}
});

var BibliographyExportCitationMobileView =  BibliographyView.extend({
	template: "BibliographyExportCitationMobileView"
});

var BibliographySavingBibliographyMobileView =  BibliographyView.extend({
	template: "BibliographySavingBibliographyMobileView"
});

