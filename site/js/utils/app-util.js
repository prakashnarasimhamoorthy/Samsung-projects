$.ajaxSetup({
	statusCode: {
		403: function() {
			location.reload();
		},
		200:function(data, textStatus, jqXHR ){
			//soft global error code handling here
		},
		450:function(){
			commonApp.extSysHelper.onClickGoogle('y', 'dashboard', 'n');
		}
	}
});

var appUtil = {
	timeout:10000,
	loginTimeout:120000,
	extLibTimeout:1200000,
	errorMsg:"Service is not available at this time. Please try again later",
	views : {},
	badgeImg:{
		"image_base_url":"/ppctweb/assets/img/grade/",
		"student member":"sam_kite_green_students.png",
		"graduate student member":"samsung_kite_green_students.png",
		"associate member":"samsung_kite_red_associate.png",
		"member":"samsung_kite_light_blue_members.png",
		"senior member":"samsung_kite_blue_senior.png",
		"fellow":"samsung_kite_gold_fellows.png",
		"honorary member":"samsung_kite_light_blue_members.png",
		"life fellow":"life_fellow.png",
		"life member":"life_member.png",
		"life senior":"life_senior.png",
		"none":"blank.png"
	},
	makeSubNavPillActive: function(id){
		$('#sub-menu .sub-menu-links li').removeClass("active");
		$('#'+id).addClass("active");

		mmenu.init();
		commonApp.renderFixedMenu();
		typeAhead.init();
	},

	showErrMsg:function(respId, msg){
		var commError = new PPCTError({errorMsg : (msg !== undefined)? msg: appUtil.errorMsg});
		new ErrorView({
			el : '#'+respId,
			model : commError
		}).render();
	},

	custErrMsgView: function (msg){
		var pathErrorModel = new PPCTError({ errorMsg: msg});
		return new ErrorView({ model: pathErrorModel, initialize: null});
	},

	getBadgeImg:function(grade){
		var badgeImgSrc = appUtil.badgeImg["image_base_url"]+appUtil.badgeImg["none"];
		if(grade!==undefined){
			var gradeLC= grade.toLowerCase();
			if(appUtil.badgeImg[gradeLC]!==undefined){
				badgeImgSrc = appUtil.badgeImg["image_base_url"]+appUtil.badgeImg[gradeLC];
			}
		}
		return badgeImgSrc;
	},
	getPaginationObj : function(totalHits, itemsPerPage, currPage) {
		var pagination = new Object();

		if (totalHits != 0 && totalHits != 'undefined' && itemsPerPage != 0
				&& itemsPerPage != 'undefined') {
			pagination.total_items = totalHits;
			pagination.items_per_page = itemsPerPage;
			var totalPages = Math.ceil(totalHits/itemsPerPage);
			pagination.total_pages = totalPages;
			pagination.curr_page = currPage;
			var from = (currPage - 1)*itemsPerPage + 1;
			var to = currPage*itemsPerPage;
			if(to>totalHits){
				to = totalHits;
			}
			pagination.showing_items_from = from;
			pagination.showing_items_to = to;

			pagination.show_page_from = currPage;
			if(totalPages<5){
				pagination.show_page_from = 1;
			}
			if(currPage+4>totalPages){
				pagination.show_page_to = totalPages;
			}else{
				pagination.show_page_to = currPage+4;
			}


			if(currPage>5){
				pagination.show_first_page = true;
			}
			if(currPage>1){
				pagination.show_prev_page = true;
			}
			if(currPage>=1 && currPage <totalPages){
				pagination.show_next_page = true;
			}
			if( (totalPages>5) && (currPage < (totalPages-5))){
				pagination.show_last_page = true;
			}
		}
		var paginationObj = new Pagination({
				total_pages : pagination.total_pages,
				curr_page : pagination.curr_page,
				items_per_page :pagination.items_per_page,
				showing_items_from : pagination.showing_items_from,
				showing_items_to : pagination.showing_items_to,
				total_items : pagination.total_items,
				show_page_from : pagination.show_page_from,
				show_page_to : pagination.show_page_to,
				show_first_page : pagination.show_first_page, // If current page is greater than 5
				show_prev_page : pagination.show_prev_page, // if current page is not = 1
				show_next_page : pagination.show_next_page, // if current page is not = total pages
				show_last_page : pagination.show_last_page // If current page is < total page
		});
		return paginationObj;

	},
	removeSpecialChars:function(str){
		if((str!==undefined) &&
		    (str!=null) &&
		    (str.length>0)){
		str = str.replace(/'/gm, "");
		str = str.replace(/--/gm, "");
		str = str.replace(/</gm, "");
		str = str.replace(/>/gm, "");
		str = str.replace(/\;/gm, "");
		str = str.replace(/\//gm, "");
		str = str.replace(/&/gm, "");
		str = str.replace(/(%00)/gm, "");
		str = str.replace(/(\r)/gm, "");
		str = str.replace(/(\n)/gm, "");
		str = str.replace(/%/gm, "");
	  }
		return str;
	},
	defPpctLoadingTxt:"Loading...",
	getProgTxtWidth: function(modalWidth, inProgressText){

		var lTxtMinWidth = 40;
		var lTxtMaxWidth = modalWidth-100;
		var lTxtWidth = lTxtMinWidth;
		if (typeof inProgressText != "undefined") {
			if($("#ppctTLoadTxt").length==0){
				var progTxtTDiv = "<div id='ppctTLoadTxt' style='float:left;visibility:hidden;display:block;font-size:12px;font-weight:bold;'>&nbsp;</div>";
				$("body").append(progTxtTDiv);
			}

			$ppctTLoadTxt = $("#ppctTLoadTxt");
			$ppctTLoadTxt.html(inProgressText);
			lTxtCalcWidth = $ppctTLoadTxt.width()+40;
			if(lTxtCalcWidth>lTxtMaxWidth){
				lTxtWidth = lTxtMaxWidth;
			}else if(lTxtCalcWidth<lTxtMinWidth){
				lTxtWidth = lTxtMinWidth;
			}else{
				lTxtWidth = lTxtCalcWidth;
			}
		}
		return lTxtWidth;

	},
	showLoader : function(respId, inProgressText, delayTextInfo) {
		try {
			var $ppctAjaxLoading  = null;
			var $respId = null;
			var loadingText = "&nbsp;";
			if(respId=="body"){
				respId = "main-view";
			}
			if(typeof respId == "string"){
				$respId = $("#" + respId);
			}else{
				$respId = respId;
			}
			if (($respId == null) || ($respId.length == 0)
					|| ($respId.prev("div.ppctAjaxLoading").length > 0)) {
				return;
			}

			var modalWidth = $respId.width()
							+ appUtil.getPpctPadding($respId.css("padding-left"))
							+ appUtil.getPpctPadding($respId.css("padding-right"));

			var lTxtWidth = appUtil.getProgTxtWidth(modalWidth, inProgressText);
			var lTxtLeft = (modalWidth - lTxtWidth)/2;
			var lStyleWidth = lTxtWidth;

			//default with no text
			if(lTxtWidth<=40){
				lStyleWidth = 30;
				lTxtWidth = 1;
			}
			if ((typeof inProgressText != "undefined") &&
				($.trim(inProgressText).length>0)) {
				loadingText = inProgressText;
			}
			var $modalDiv ="";
			var $ppctAjaxLoading="";
			if (respId == "main-view") {

				lTxtLeft +=	$("#main-view").offset().left;
				$modalDiv = $("<div class='ppctAjaxLoadingMask' style='top:0;width:100%;height:100%;position:fixed;'>&nbsp;</div>");

				$ppctAjaxLoading = $("<div class='ppctAjaxLoading' style='width:100%;position:fixed;height:100%;left:0;top:0'>"+
												"<div style='top:48%;left:"+(lTxtLeft)+"px;"+ "width:"+lStyleWidth+"px; position: fixed;font-weight:bold;' class='ppctAjaxLoadingSec'>"+
												"<div class='ppctAjaxLoadingText' style='width:"+lTxtWidth+"px;'>"+loadingText+"</div>"+
											"</div>"+
										"</div>");

				$respId.before($modalDiv);
				$respId.before($ppctAjaxLoading);

			}else{

				var modalHeight = $respId.height()
									+ appUtil.getPpctPadding($respId.css("padding-top"))
									+ appUtil.getPpctPadding($respId.css("padding-bottom"));
				if(modalHeight<=30){
					modalHeight = 30;
				}

				var lTxtTop = (modalHeight / 2) - 10;

				var secStyle = "height:" + modalHeight + "px;width:" + modalWidth
								+ "px;position:absolute;padding:0;margin-left:"+appUtil.getPpctPadding($respId.css("left"))+"px;";

				var loadingStyle = "position:absolute;top:" + lTxtTop
									+ "px;left:" + lTxtLeft + "px;width:"+(lStyleWidth)+"px;";
				var loadingTxtStyle = "width:"+(lTxtWidth)+"px;";

				$ppctAjaxLoading = $("<div class='ppctAjaxLoading' style='" + secStyle
								+ "'><div class='ppctAjaxLoadingSec' style='" + loadingStyle + "'><div class='ppctAjaxLoadingText' style='"+loadingTxtStyle+"' >" + loadingText
								+ "</div></div></div>");

				$modalDiv = "<div class='ppctAjaxLoadingMask' style='" + secStyle+"'>&nbsp;</div>";

				$respId.before($modalDiv);
				$respId.before($ppctAjaxLoading);
			}

			showPpctProgText = function(delayTimeout, delayMsg){

				var showPpctProgresText = function() {
					var $ajaxLoadingText = $ppctAjaxLoading.find('div.ppctAjaxLoadingText');
					if(typeof delayMsg != "undefined"){
						var ldTxtWidth = appUtil.getProgTxtWidth(modalWidth, delayMsg);
						var ldTxtLeft = (modalWidth - ldTxtWidth)/2;
						$ppctAjaxLoading.find('.ppctAjaxLoadingSec').css({'width' : ldTxtWidth+'px', 'left' : ldTxtLeft+'px'});
						$ppctAjaxLoading.find('.ppctAjaxLoadingText').css({'width' : ldTxtWidth-10+'px'});
						$ajaxLoadingText.html(delayMsg);
					}
					$ajaxLoadingText.css('display', 'block');
				};
				setTimeout(showPpctProgresText, delayTimeout);

			};

			$ppctAjaxLoading.find('div.ppctAjaxLoadingText').css('display', 'block');
			if (typeof inProgressText == "undefined") {
				showPpctProgText(2000, appUtil.defPpctLoadingTxt);
			}

			if(typeof delayTextInfo != "undefined"){

				if($.isArray(delayTextInfo)){
					$.each(delayTextInfo, function(index, dtextInfo) {
						showPpctProgText(dtextInfo.delayTextInMillis, dtextInfo.delayTextMsg);
					});
				}else{
					showPpctProgText(delayTextInfo.delayTextInMillis, delayTextInfo.delayTextMsg);
				}

			}
		} catch (e) {
			// dont do anything let it go
		}
	},
	hideLoader : function(respId) {
		try {
			if (typeof respId != "undefined" && respId=="body") {
				var $body = $("body");
				$body.find(">div.ppctAjaxLoading, >div.ppctAjaxLoadingMask").remove();
			}else if (typeof respId != "undefined") {
				var $respId = $("#" + respId);
				if ($respId == null || $respId.length == 0) {
					return;
				}
				$respId.prev("div.ppctAjaxLoading").remove();
				$respId.prev("div.ppctAjaxLoadingMask").remove();
			} else {
				$("div.ppctAjaxLoading, div.ppctAjaxLoadingMask").remove();
			}
		} catch (e) {
			// dont do anything let it go
		}
	},
	getPpctPadding : function(paddingStr) {
		var intVal = 0;
		try {
			if(paddingStr=="auto"){
				intVal = 0;
			}else{
				intVal = parseInt(paddingStr.replace("px", ""));
			}
		} catch (e) {
			intVal = 0;
		}
		return intVal;
	},

	showOverlay: function(modalObj){

		$("#ppctOTitle").html(modalObj.title);
		if(modalObj.html !== undefined){
			$("#ppctOBody").html(modalObj.html);
		}


		$('#ppctOverlay').attr("aria-labelledby", modalObj.title).modal({
		  backdrop: 'static',
		  keyboard: false,
		  show:true
		});

	},
	hideOverlay: function(){
		$('#ppctOverlay').modal('hide');
	},

	showErrorMsg:function(response,errorDivElement){
		var em = response.statusMsg;
		var commError = new PPCTError({errorMsg : em});
		new ErrorView({
			el : errorDivElement ,
			model : commError
		});
	},

	activateLeftNavItem : function(id){
		$('#sidebar-nav li').each(function(){
			$(this).removeClass('active');
		});
		$('#'+id).addClass('active');
		console.log('activating '+id);
	},


	activateLibraryTabs : function(id){
		$('#lib-tabs li').each(function(){
			$(this).removeClass('active');
		});

		$('#'+id).parent().addClass('active');

	},

	makeNavPillActive : function(id){
		$('#sub-menu .sub-menu-links li').each(function(){
			$(this).removeClass( "active" );

		});
		$('#'+id).addClass("active");
	}


};

/*
 * Tooltip v1.0 - a full featured, light-weight, customizable ppct UI tool tip
 * help text and tool tip text link Plugin
 *
 * Author: Nagarajan Ramalingam <n.ramalingam@samsung.org> and samsung MISI deliverables
 * Date: 8th Aug 20011
 *
 * Usage:
 *
 * To use this tooltip text add this one to your page template
 *
 * $.ppctUIToolTip({'serviceUrl' : <tooltiptextUrl>, 'timeout':20000});
 * timeout is an optional field, and can be customized on need basis
 * serviceUrl is an optional field in case href is mentioned in the a tag, and can be customized on need basis
 *
 *
 * html snippet:
 *
 * Example:1 simple tooltip text
 * <a class="help-tooltip" href="#" tooltip-info="key.panel.miniCatalog.help.journalsAndMagazines">
 *	<img border="0" title="<s:text name='key.page.membership.label.help' />" alt="<s:text name='key.page.membership.label.help' />" src="<s:url value='/assets/images/helpicon.gif' />">
 *</a>
 *
 * Example2:Long tooltip for rich text
 * <a class="help-tooltip long-tooltip" href="#" tooltip-info="key.panel.miniCatalog.help.researchCollections">
 *	<img border="0" title="<s:text name='key.page.membership.label.help' />" alt="<s:text name='key.page.membership.label.help' />" src="<s:url value='/assets/images/helpicon.gif' />">
 * </a>
 * ****key.panel.miniCatalog.help.researchCollections corresponds to jsp in props file /jsp/common/richTextToolTip.jsp
 *
 * Example#: external link for tooltip for future enhancements to goto CMS url
 * <a class="help-tooltip" href="http://www.samsunglocal.org:90/abc/gettt.html?toolTipId=key.panel.miniCatalog.help.researchCollections">
 *		<img border="0" title="<s:text name='key.page.membership.label.help' />" alt="<s:text name='key.page.membership.label.help' />" src="<s:url value='/assets/images/helpicon.gif' />">
 *</a>
 */

(function($) {

	var ppctTTUtil = {

		ipbTTOptions : {
			"serviceUrl" : "",
			"isTTInProgress" : false,
			"appName":"PPCT",
			"timeout" : 3000
		},
		TT_INFO_UNAVAILABLE : "Tooltip information is not available at this time.  Please try again.",

		// initializing the tooltip
		initPageTT : function() {
			$(document).ready(function() {
				ppctTTUtil.bindTTEvt();
			});
		},
		// function to close the tooltip text
		closeTT : function() {
			ppctTTUtil.ipbTTOptions.isTTInProgress=false;
			var $toolTip = $('#ppct-tooltip');
			if ($toolTip.is(':visible')) {
				$toolTip.hide();
				$toolTip.remove();
			}
		},

		// function to bind the tooltip events
		bindTTEvt : function() {
			$('body').delegate('a.help-tooltip', 'click', function() {
				var $this = $(this);
				ppctTTUtil.setTTHandler($this, false);
				return false;
			});

			$('body').delegate('a.help-tooltip-link', 'click', function() {
				var $this = $(this);
				ppctTTUtil.setTTHandler($this, true);
				return false;
			});
			$('body').delegate('a.help-tooltip-link-hover', 'mouseover', function(){
				ppctTTUtil.setTTHandler($(this), true);
				return false;
			});
			$('body').delegate('a.help-tooltip-link-hover', 'mouseleave', function(){
				ppctTTUtil.closeTT();
				return false;
			});
			$('body').delegate('a.help-tooltip-link-hover', 'click', function() {
				return false;
			});

			$('html').delegate('body', 'click', function(event) {
				var $ipbTT = $(event.target).closest("#ppct-tooltip");
				if($ipbTT.length==0){
					ppctTTUtil.closeTT();
				}
			});
			$('html').delegate('body', 'click', function(event) {
				var $ipbTT = $(event.target).closest("#ppct-tooltip");
				if($ipbTT.length==0){
					ppctTTUtil.closeTT();
				}
			});

			$(document).delegate('#ppctTT-close', 'click', function(event) {
				ppctTTUtil.closeTT();
				return false;
			});

			$(document).bind('keydown', function (e) {
				if (e.keyCode == 27) {
					ppctTTUtil.closeTT();
				}
			});
		},
		// function to get the tooltip text from cache if not then from server
		setTTHandler : function($this, isTTLink) {
			try {
				if((ppctTTUtil.ipbTTOptions.isTTInProgress==true) ||
					($this.next().hasClass("tooltip-overlay"))){
					return;
				}
				ppctTTUtil.closeTT();
				ppctTTUtil.ipbTTOptions.isTTInProgress = true;
				var ttText = "";
				// if its present in the cache then get the info. from cache and
				// show it in the screen
				if ($this.next().hasClass('ppct-tt-cache')) {
					ttText = $this.next().html();
					ppctTTUtil.showTT(ttText, $this, false, isTTLink);
				} else {
					// get the tooltip text from the server
					var dataIn = null;
					var docLoc = document.location+"";
					var hrefVal = $this.attr("href");
					if (hrefVal == "#" || hrefVal.indexOf(docLoc)==0 || docLoc.indexOf(hrefVal)==0) {
						var serviceUrl = ppctTTUtil.ipbTTOptions.serviceUrl;
						var toolTipId = $this.attr('tooltip-info');
						//var hasLongTT = $this.hasClass('long-tooltip');
						dataIn = {
							"toolTipKey" : toolTipId
						};
					} else {
						serviceUrl = $this.attr("href");
					}


					$.ajax({
						url : serviceUrl,
						data : dataIn,
						cache : true,
						type : "GET",
						timeout : ppctTTUtil.ipbTTOptions.timeout,
						success : function(resp) {
							if (resp.statusCode == 0) {
								var toolTipData = resp.data;
								if (toolTipData != null) {
									ppctTTUtil.showTT(toolTipData.toolTipValue, $this, true, isTTLink);
								}
							}
						},
						error : function() {
							ttText = ppctTTUtil.TT_INFO_UNAVAILABLE;
							ppctTTUtil.showTT(ttText, $this, false, isTTLink);
						}
					});
				}
			} catch (e) {
				// dont do anything let it go
			}
		},
		// function to show the tooltip text
		showTT : function(data, $this, cacheFlag, isTTLink) {
			try {
				var isTTLinkHover = $this.hasClass('help-tooltip-link-hover');
				var targetContainer = $this;
				var tPosition = null;
				var hasAltClass = $this.hasClass('alternate');
				var helpIconImgPath = "";
				tPosition = $this.position();

				var offSetM = 8;
				var ifBorderoffSetM = 1;
				var border_top = $(window).scrollTop();
				var top_pos;
				if (typeof cacheFlag != 'undefined' && cacheFlag == true) {
					var cacheResp = "<div class='ppct-hide ppct-tt-cache'>"
							+ data + "</div>";
					$(targetContainer).after(cacheResp);
				}

				//if the response came back late b4 the close function is called
				//dont show the tooltip let it go
				if(ppctTTUtil.ipbTTOptions.isTTInProgress==false){
					return;
				}


				var styleTopVal  = parseInt(tPosition.top - offSetM - ifBorderoffSetM);
				var styleLeftVal = parseInt(tPosition.left - ifBorderoffSetM);
				var ttContent = '<div>' + data + '</div>';
				if(!isTTLinkHover){
					ttContent = '<div><span id="ppctTT-close">Close</span></div>'+ttContent;
					styleLeftVal += 3;
				}

				var styleCss = 'overflow:hidden;visibility:hidden;display:block;left:'
						+ styleLeftVal
						+ 'px;top:'
						+ styleTopVal
						+ 'px;';

				var cssAltClass = "";
				var ttWidthClass = "tooltip-Wclass";
				var ttCssClass = "";
				if($this.hasClass("tooltip-medium")){
					ttWidthClass =" tooltip-medium";
				}else if($this.hasClass("tooltip-small")){
					ttWidthClass =" tooltip-small";
				}else if($this.hasClass("tooltip-large")){
					ttWidthClass =" tooltip-large";
				}else if($this.attr("ttClass")!=null){
					ttWidthClass =" "+ $this.attr("ttClass");
				}

				if (hasAltClass) {
					cssAltClass = "alternate";
				}
				ttCssClass+= " tooltip-overlay ";
				if(cssAltClass!=""){
					ttCssClass+=" "+cssAltClass;
				}
				var topRound ='<div class="topSec">'+
								'<div class="top-left">&nbsp;</div>'+
								'<div class="top '+ttWidthClass+'" >&nbsp;</div>'+
								'<div class="top-right">&nbsp;</div>'+
							  '</div>';

				var botRound='<div class="botSec">'+
								'<div class="bot-left">&nbsp;</div>'+
								'<div class="bot '+ttWidthClass+'">&nbsp;</div>'+
								'<div class="bot-right">&nbsp;</div>'+
							  '</div>';

				var topContHolder ='<div class="centerSec">'+
										'<div class="center">'+
										'<div class="tt-content-body '+ttWidthClass+'">';

				var botContHolder='</div></div></div>';
				var ttHolderHtml = '<div id="ppct-tooltip" class="'
									+ ttCssClass
									+ ' " style='
									+ styleCss
									+ '>'
									+topRound
									+topContHolder
									+ttContent
									+botContHolder
									+botRound+'</div>';

				$(targetContainer).after(ttHolderHtml);
				$ttOverlay = $(targetContainer).next('#ppct-tooltip');
				if(isTTLinkHover){
					var ttHeight = $ttOverlay.height();
					top_pos = parseInt(tPosition.top-ttHeight);
				}else{
					top_pos = parseInt(tPosition.top + $this.height()+5);
					if (hasAltClass) {
						$ttOverlay.addClass('tooltip-viewport-alt');
					}
				}
				$ttOverlay.css({
					top : top_pos+'px'
				});
				if (hasAltClass) {
					if($("#ppctTTLoadTxt").length==0){
						var ttTxtDiv = "<div id='ppctTTLoadTxt' style='visibility:hidden;display:block;height:0px;'>&nbsp;</div>";
						$("body").append(ttTxtDiv);
					}
					var $ppctTTLoadTxt = $("#ppctTTLoadTxt");
					$ppctTTLoadTxt.addClass(ttWidthClass);
					var leftWidth = $ppctTTLoadTxt.width();
					$ppctTTLoadTxt.removeClass(ttWidthClass);
					//alert($this.width() +"lw="+leftWidth+"tpLeft="+tPosition.left);
					var ttLeft = tPosition.left-leftWidth+$this.width();
					if(isTTLinkHover){
						$ttOverlay.css({
							left : parseInt(ttLeft-15)
									+ 'px'
						});
					}else{
						if(isTTLink){
							$ttOverlay.css({
								left : parseInt(ttLeft+5)
										+ 'px'
							});
						}else{
							$ttOverlay.css({
								left : parseInt(ttLeft-15)
										+ 'px'
							});
						}

					}
				}
				var isOldIEBrowser = false;
				if (navigator.appVersion.indexOf("MSIE") != -1) {
					var appVersion = navigator.appVersion.split("MSIE");
					var version = parseFloat(appVersion[1]);
					if (version <= 6) {
						isOldIEBrowser = true;
					}
				}
				// if its a old ie browser then apply bgiframe to suppress
				// heavy weight components from piercing through the tooltip
				// text popup
				if (isOldIEBrowser) {
					$ttOverlay.bgIframe();
				}
				$ttOverlay.css("visibility", "visible");
				//DCS tracking start
				try{
					if(typeof dcsMultiTrack !='undefined'){
						var toolTipId = $this.attr("tooltip-info");
						if(typeof toolTipId == 'undefined'){
							var reqParamTTArr = $this.attr("href").split("toolTipId=");
							if(reqParamTTArr!=null && reqParamTTArr.length>1){
								var ttIdArr = reqParamTTArr[1].split("&");
								if(ttIdArr!=null && ttIdArr.length>0){
									toolTipId = ttIdArr[0];
								}
							}
						}
						dcsMultiTrack('WT.si_n',ppctTTUtil.ipbTTOptions.appName + ".tooltip."+toolTipId);
					}
				}catch(e){
					//dont do anything let it go
				}
				//DCS tracking end
				if (isOldIEBrowser) {
					$ttOverlay.css("height", $ttOverlay.height());
				}
				ppctTTUtil.ipbTTOptions.isTTInProgress=false;

			} catch (e) {
				ppctTTUtil.ipbTTOptions.isTTInProgress=false;
			}
		}
	};

	// options={"serviceUrl":<tooltipServiceUrl>, "timeout":<timeout>};
	$.ppctUIToolTip = function(options) {
		$.extend(ppctTTUtil.ipbTTOptions, options);
		ppctTTUtil.initPageTT();
	};
})(jQuery);

