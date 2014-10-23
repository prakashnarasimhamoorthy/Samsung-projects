var BibliographySelectWayView = PopupView.extend({
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

var BibliographyCreateView = PopupView.extend({
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

var BibliographyProcessView = PopupView.extend({
	template: "BibliographyProcessView",
	logic: function(){
		var self = this;
		this.timer = setTimeout(function() {
			app.navigate('library-bibliographydone', { trigger: true });
		 }, 3000);
	}
});

var BibliographyDoneView = PopupView.extend({
	template: "BibliographyDoneView",
	logic: function (){
		var self = this;
		$('.btn-done').click(function (){
			self.$el.modal('hide');
		});
	}
});

var BibliographyExportView = PopupView.extend({
	template: "BibliographyExportView",
	logic: function (){
		var self = this;
		$('.btn-export').click(function (){
			self.$el.modal('hide');
		});
	}
});

var BibliographyExportCitationMobileView =  PopupView.extend({
	template: "BibliographyExportCitationMobileView"
});

var BibliographySavingBibliographyMobileView =  PopupView.extend({
	template: "BibliographySavingBibliographyMobileView"
});

