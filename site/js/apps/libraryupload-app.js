var libraryUploadApp = {
	popUpload: function () {
		var self = this;
		templateLoader.load("library",[	"LibraryUploadView" ],
			function () {
				$('#popup').html(templateLoader.templates[ "LibraryUploadView" ]);
				$('#upload-btn, .add-btn').click( function () {
					$('#upload-files').trigger('click');
				});
				$('.continue-btn').click( function () {
					self.popUploadMetadata();
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

				$('#popup').modal('show');
			}
		);
	},

	popUploadMetadata: function () {
		var self = this;
		templateLoader.load("library", [ "LibraryUploadMetadataView" ],
			function () {
				$('#popup').html(templateLoader.templates[ "LibraryUploadMetadataView" ]);
				checkbox.init();
				placeholder.init();
				$('.prev-btn, .back-btn').click(function () {
					self.popUpload();
				});
				$('.finish-btn').click(function () {
					$('#popup').modal('hide');
				});
			}
		)
	}
};
