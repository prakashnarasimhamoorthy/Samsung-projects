/*  Network Community LP Files Tab View */

function networkFilesAutoloadInit(self) {
	var $el = $('.documents-list');
	var autoloadTemplate = "NetworkCommunityFilesAutoloadView";
	templateLoader.load('networkcommunitylp', [autoloadTemplate],
		function (){
			data = communityFiles.toJSON();
			var content = templateLoader.templates[autoloadTemplate]({data: data, id: self.id});
			self.id += communityFiles.length;

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

			//Comments init
			$('.form-control').click(function (){
				$(this).hide().next().show();
			});

			$('.form-expanded .btn-cancel').click(function (){
				$(this).parents('.form-expanded').hide().prev().show();
				return false;
			});

			$('.btn-comment').click(function(){
				$(this).parents().find('.comments-box').toggle();
				console.log($(this).parents().find('.comments-box'));
				return false;
			});
		}
	);
}

var NetworkCommunityFilesTabView = NetworkCommunityLPTabView.extend({
	el: '#files-tab',
	template: "NetworkCommunityFilesTabView",
	id: 0,
	logic: function () {
		var self = this;
		networkFilesAutoloadInit(self);
		var canScroll = true;
		$(window).scroll(function() {
			if(canScroll == true && $(window).scrollTop() >= $(document).height() - $(window).height()) {
				canScroll = false;
				$('.load-spinner').show();
				setTimeout(function () {
					networkFilesAutoloadInit(self);
					canScroll = true;
				}, 1000);
			}
		});

		networkSearchButtonInit();
		checkbox.init();

		var tab = commonApp.props.networkCommunityLPFileTab;
		commonApp.props.networkCommunityLPFileTab = null;

		switch (tab) {
			case 'search':
				$('.file-search-gdrive').show();
				$('.file-wrap, .file-description').hide();
				break;
			case 'gdrive':
				$('.file-search-gdrive, .file-search-gdrive .files-list').show();
				$('.file-wrap, .file-description, .file-search-gdrive .folders').hide();
				break;
			case 'folderslist':
				$('.folders-in-community').show();
				$('.file-wrap, .file-description, .file-search-gdrive, .community-content-subnav, .message-wrap .btn-send, .folders-in-community.owner').hide();
				break;
			case 'sendform':
				$('.file-description').show();
				$('.file-wrap, .file-search-gdrive').hide();
				break;
			default:
		}

		var dragging = 0;
		$(document)
			.bind('dragenter', function (e) {
				e.preventDefault();
				e.stopPropagation();
				dragging++;
				$('.file-wrap').addClass('drag-active');
			})
			.bind('dragover', function (e) {
				e.preventDefault();
				e.stopPropagation();
				$('.file-wrap').addClass('drag-active');
			})
			.bind('dragleave', function (e) {
				e.preventDefault();
				e.stopPropagation();
				dragging--;
				if (dragging === 0) {
					$('.file-wrap').removeClass('drag-active');
				}
			});
		$('.file-wrap').bind('drop', function (e, data) {
			e.preventDefault();
		});

		$('.upload-btn').click(function () {
			$('#upload-files').trigger('click');
			return false;
		});

		function addFiles(e, data) {
			$('.file-wrap').hide();
			$('.file-description').show();

			$('.form-wrap').html(
				_.template('\
					<div class="tab-content">\
						<% _.each(files ,function (file, index) { %>\
							<div id="file-tab-<%= index %>" class="tab-pane col-xs-12 no-padd<%= index == 0 ? " active": "" %>">\
								<p>File <%= index+1 %> of <%= files.length %>\
									<a class="btn btn-default <%= index == 0 ? " disabled": "" %>" href="#file-tab-<%= index - 1 %>" data-toggle="tab">&lt;</a>\
									<a class="btn btn-default <%= index == files.length - 1 ? " disabled": "" %>" href="#file-tab-<%= index + 1 %>" data-toggle="tab">&gt;</a>\
								</p>\
								<form class="upload-file-form row form-id-<%= index %>"'+' action="">\
									<label>\
										<span class="col-sm-3 col-lg-2 no-padd-left title">File Name <span class="asterisk">*</span></span>\
										<span class="col-sm-9 col-lg-10 no-padd"><input value="<%= file.name %>" class="drop-file-name upload-file-name" type="text"></span>\
									</label>\
									<label>\
										<span class="col-sm-3 col-lg-2 no-padd-left title">Description</span>\
										<span class="col-sm-9 col-lg-10 no-padd"><textarea name="" class="upload-file-description" cols="30" rows="10"></textarea></span>\
									</label>\
									<label>\
										<span class="col-sm-3 col-lg-2 no-padd-left title">Location <span class="asterisk">*</span></span>\
										<span class="col-sm-9 col-lg-10 no-padd">\
											<div class="location-path">\
												<i class="fa fa-folder"></i><a href="">Cloud Computering</a>/<a href="">Machine Learning</a>/<a href="">Algorithms</a><i class="fa fa-angle-right"></i>\
											</div>\
											<div class="location-path-select">\
												<span>Folders in thes Community:</span>\
												<a href="" class="add-new-folder"><i class="fa fa-plus"></i></a>\
												<ul>\
													<li><a href=""><i class="fa fa-folder"></i>Cloud Computerin</a>\
														<ul>\
															<li><a href=""><i class="fa fa-folder"></i>Fields, Waves & Electromagnetics</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>General Topics for Engineers (Math, Science & Engineering)</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>Geoscience</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>Nuclear Engineering</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>Photonics & Electro-Optics</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>Power, Energy, & Industry Applications</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>Robotics & Control Systems</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>Signal Processing & Analysis</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>Misc Files</a></li>\
															<li><a href=""><i class="fa fa-folder"></i>Machine Learning</a>\
																<ul>\
																	<li><i class="fa fa-folder-open"></i>Algorithms</li>\
																</ul>\
															</li>\
														</ul>\
													</li>\
												</ul>\
												<div class="buttons center-block col-xs-12 no-padd">\
													<div class="col-xs-6">\
														<a href="#" class="btn btn-default btn-apply pull-right">Apply</a>\
													</div>\
													<div class="col-xs-6">\
														<a href="#" class="btn btn-default btn-cancel">Cancel</a>\
													</div>\
												</div>\
											</div>\
										</span>\
									</label>\
									<label>\
										<span class="col-sm-3 col-lg-2 no-padd-left title">Tags <span class="asterisk">*</span></span>\
										<span class="col-sm-9 col-lg-10 no-padd"><input class="file-tags-input-<%= index %>" type="text"></span>\
									</label>\
								</form>\
							</div>\
						<% }) %>\
					</div>',
					{ files: data.files }
				)
			);

			for (var i in data.files) formTagsTypeAheadFileDrop.init(i);

			$('.upload-file-form input, .upload-file-form textarea').keyup(function() {
				var inputs = $('.upload-file-name, .upload-file-description').filter(function() { return this.value === ""; });
				if (inputs.length) {
					$('.file-tab .message-wrap .btn-send').removeClass('active');
				} else {
					$('.file-tab .message-wrap .btn-send').addClass('active');
				}
			});

			$('.location-path').click(function(){
				var $this = $(this);

				if(!$this.hasClass('active')) {
					$this.addClass('active');
					$this.siblings('.location-path-select').slideDown();
					$this.find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
				} else {
					$this.removeClass('active');
					$this.siblings('.location-path-select').slideUp();
					$this.find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
				}
			});

			$('.add-new-folder').click(function (){
			    new NetworkCommunitiesLPFilesAddFolder({ popup: true });
			    return false;
			});
		}

		$('#upload-files').fileupload({
			dropZone: $('.file-wrap'),
			change: function (e, data) {
				addFiles(e, data);
			},
			drop: function (e, data) {
				addFiles(e, data);
			}
		});
		formTagsTypeAhead.init();
		$('.upload-file-form input, .upload-file-form textarea').keyup(function() {
			var inputs = $('.upload-file-name, .upload-file-description').filter(function() { return this.value === ""; });
			if (inputs.length) {
				$('.file-tab .message-wrap .btn-send').removeClass('active');
			} else {
				$('.file-tab .message-wrap .btn-send').addClass('active');
			}
		});

		$('.folders-in-community h5').click(function(){
			var $this = $(this);

			if(!$('.folders-in-community').hasClass('active')) {
				$('.folders-in-community').addClass('active');
				$('.folders-in-community .folders-list').slideDown();
				$this.find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
			} else {
				$('.folders-in-community').removeClass('active');
				$('.folders-in-community .folders-list').slideUp();
				$this.find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
			}
		});

		

		$('.location-path').click(function(){
			var $this = $(this);

			if(!$this.hasClass('active')) {
				$this.addClass('active');
				$this.siblings('.location-path-select').slideDown();
				$this.find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
			} else {
				$this.removeClass('active');
				$this.siblings('.location-path-select').slideUp();
				$this.find('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
			}
		});

		$('.add-new-folder').click(function (){
		    new NetworkCommunitiesLPFilesAddFolder({ popup: true });
		    return false;
		});
	}
});

var NetworkCommunitiesLPFilesAddFolder = PopupView.extend({
	template: "NetworkCommunitiesLPFilesAddFolder",
	logic: function (){
		var self = this;

		$('.btn-cancel, .btn-create').click(function (){
			self.$el.modal('hide');
			return false;
		});
	}
});
