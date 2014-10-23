//Upload
var LibraryUploadView = PopupView.extend({
	template: "LibraryUploadView",
	logic: function () {
		this.$el.html(templateLoader.templates[ "LibraryUploadView" ]);
		$('#upload-btn, .add-btn').click(function () {
			$('#upload-files').trigger('click');
			return false;
		});
		$('.continue-btn').click(function () {
			new LibraryUploadMetadataView()
		});

		$('.drop-zone')
			.bind('dragover', function (e) {
				e.preventDefault();
				$(this).addClass('hover');
			})
			.bind('dragleave', function (e) {
				e.preventDefault();
				$(this).removeClass('hover');
			});

		$('#upload-files').fileupload({
			dropZone: $('.drop-zone'),
			add: function (e, data) {
				$.each(data.files, function (index, file) {
					$('#uploaded-files').append('<p>' + file.name + '</p>')
				});
			}
		});

		this.$el.modal('show');
	}
});

var LibraryUploadMetadataView = PopupView.extend({
	template: "LibraryUploadMetadataView",
	logic: function () {
		$('.prev-btn, .back-btn').click(function () {
			new LibraryUploadView();
		});
		var self = this;
		$('.finish-btn').click(function () {
			self.$el.modal('hide');
		});
	}
});

var LibraryResearchToolsChooseView = PopupView.extend({
	template: "LibraryResearchToolsChooseView",
	logic: function (){
		var self = this;
		$('.zotero').click(function (){
			// new LibraryZoteroView();
			app.navigate("library-researchtoolschoose", { trigger: true });
		 });
		$('.mendeley').click(function (){
			new LibraryMendeleySignInView ();
		});
	}
});

var LibraryMendeleySignInView = PopupView.extend({
	template: "LibraryMendeleySignInView",
	logic: function () {
		$('.btn-sign-in').click(function (){
			new LibraryMendeleyConnectView();
			return false;
		});
	}
});
var LibraryMendeleyConnectView = PopupView.extend({
	template: "LibraryMendeleyConnectView",
	logic: function () {
		$('.btn-continue').click(function (){
			new LibraryMendeleyDocumentsRetrievedView();
			return false;
		});
		$('.btn-back').click(function (){
			new LibraryMendeleySignInView ();
			return false;
		});
	}
});

var LibraryMendeleyDocumentsRetrievedView = PopupView.extend({
	template: "LibraryMendeleyDocumentsRetrievedView",
	logic: function () {
		placeholder.init();
		checkbox.init();
		$('.btn-continue').click(function (){
			new LibraryResearchMendeleyDoneView();
			return false;
		});
		$('.btn-back').click(function (){
			new LibraryMendeleyConnectView();
			return false;
		});
	}
});

var LibraryResearchMendeleyDoneView = PopupView.extend({
	template: "LibraryMendeleyDoneView",
	logic: function () {
		var self = this;
		$('.btn-continue').click(function (){
			self.$el.modal('hide');
			return false;
		});
		$('.btn-back').click(function (){
			new LibraryMendeleyDocumentsRetrievedView();
			return false;
		});
	}
});
