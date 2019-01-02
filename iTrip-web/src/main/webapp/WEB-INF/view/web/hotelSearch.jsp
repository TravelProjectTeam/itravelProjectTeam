<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<head>
<link rel="stylesheet" type="text/css"
	href="images/hotelSearch/style1536672475627.css">

<style type="text/css">
.amap-indoor-map .label-canvas {
	position: absolute;
	top: 0;
	left: 0
}

.amap-indoor-map .highlight-image-con * {
	pointer-events: none
}

.amap-indoormap-floorbar-control {
	position: absolute;
	margin: auto 0;
	bottom: 165px;
	right: 12px;
	width: 35px;
	text-align: center;
	line-height: 1.3em;
	overflow: hidden;
	padding: 0 2px
}

.amap-indoormap-floorbar-control .panel-box {
	background-color: rgba(255, 255, 255, .9);
	border-radius: 3px;
	border: 1px solid #ccc
}

.amap-indoormap-floorbar-control .select-dock {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	box-sizing: border-box;
	height: 30px;
	border: solid #4196ff;
	border-width: 0 2px;
	border-radius: 2px;
	pointer-events: none;
	background: linear-gradient(to bottom, #f6f8f9 0, #e5ebee 50%, #d7dee3 51%, #f5f7f9
		100%)
}

.amap-indoor-map .transition {
	transition: opacity .2s
}

,
.amap-indoormap-floorbar-control .transition {
	transition: top .2s, margin-top .2s
}

.amap-indoormap-floorbar-control .select-dock:after,
	.amap-indoormap-floorbar-control .select-dock:before {
	content: "";
	position: absolute;
	width: 0;
	height: 0;
	left: 0;
	top: 10px;
	border: solid transparent;
	border-width: 4px;
	border-left-color: #4196ff
}

.amap-indoormap-floorbar-control .select-dock:after {
	right: 0;
	left: auto;
	border-left-color: transparent;
	border-right-color: #4196ff
}

.amap-indoormap-floorbar-control.is-mobile {
	width: 37px
}

.amap-indoormap-floorbar-control.is-mobile .floor-btn {
	height: 35px;
	line-height: 35px
}

.amap-indoormap-floorbar-control.is-mobile .select-dock {
	height: 35px;
	top: 36px
}

.amap-indoormap-floorbar-control.is-mobile .select-dock:after,
	.amap-indoormap-floorbar-control.is-mobile .select-dock:before {
	top: 13px
}

.amap-indoormap-floorbar-control.is-mobile .floor-list-box {
	height: 105px
}

.amap-indoormap-floorbar-control .floor-list-item .floor-btn {
	color: #555;
	font-family: "Times New Roman", sans-serif, "Microsoft Yahei";
	font-size: 16px
}

.amap-indoormap-floorbar-control .floor-list-item.selected .floor-btn {
	color: #000
}

.amap-indoormap-floorbar-control .floor-btn {
	height: 28px;
	line-height: 28px;
	overflow: hidden;
	cursor: pointer;
	position: relative;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none
}

.amap-indoormap-floorbar-control .floor-btn:hover {
	background-color: rgba(221, 221, 221, .4)
}

.amap-indoormap-floorbar-control .floor-minus,
	.amap-indoormap-floorbar-control .floor-plus {
	position: relative;
	text-indent: -1000em
}

.amap-indoormap-floorbar-control .floor-minus:after,
	.amap-indoormap-floorbar-control .floor-plus:after {
	content: "";
	position: absolute;
	margin: auto;
	top: 9px;
	left: 0;
	right: 0;
	width: 0;
	height: 0;
	border: solid transparent;
	border-width: 10px 8px;
	border-top-color: #777
}

.amap-indoormap-floorbar-control .floor-minus.disabled,
	.amap-indoormap-floorbar-control .floor-plus.disabled {
	opacity: .3
}

.amap-indoormap-floorbar-control .floor-plus:after {
	border-bottom-color: #777;
	border-top-color: transparent;
	top: -3px
}

.amap-indoormap-floorbar-control .floor-list-box {
	max-height: 153px;
	position: relative;
	overflow-y: hidden
}

.amap-indoormap-floorbar-control .floor-list {
	margin: 0;
	padding: 0;
	list-style: none
}

.amap-indoormap-floorbar-control .floor-list-item {
	position: relative
}

.amap-indoormap-floorbar-control .floor-btn.disabled,
	.amap-indoormap-floorbar-control .floor-btn.disabled *,
	.amap-indoormap-floorbar-control.with-indrm-loader * {
	-webkit-pointer-events: none !important;
	pointer-events: none !important
}

.amap-indoormap-floorbar-control .with-indrm-loader .floor-nonas {
	opacity: .5
}

.amap-indoor-map-moverf-marker {
	color: #555;
	background-color: #FFFEEF;
	border: 1px solid #7E7E7E;
	padding: 3px 6px;
	font-size: 12px;
	white-space: nowrap;
	display: inline-block;
	position: absolute;
	top: 1em;
	left: 1.2em
}

.amap-indoormap-floorbar-control .amap-indrm-loader {
	-moz-animation: amap-indrm-loader 1.25s infinite linear;
	-webkit-animation: amap-indrm-loader 1.25s infinite linear;
	animation: amap-indrm-loader 1.25s infinite linear;
	border: 2px solid #91A3D8;
	border-right-color: transparent;
	box-sizing: border-box;
	display: inline-block;
	overflow: hidden;
	text-indent: -9999px;
	width: 13px;
	height: 13px;
	border-radius: 7px;
	position: absolute;
	margin: auto;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0
}

@
-moz-keyframes amap-indrm-loader { 0%{
	-moz-transform: rotate(0);
	transform: rotate(0)
}

100%{
-moz-transform












:rotate(360deg)












;
transform












:rotate(360deg)












}
}
@
-webkit-keyframes amap-indrm-loader { 0%{
	-webkit-transform: rotate(0);
	transform: rotate(0)
}

100%{
-webkit-transform












:rotate(360deg)












;
transform












:rotate(360deg)












}
}
@
keyframes amap-indrm-loader { 0%{
	-moz-transform: rotate(0);
	-ms-transform: rotate(0);
	-webkit-transform: rotate(0);
	transform: rotate(0)
}
100%{
-moz-transform












:rotate(360deg)












;
-ms-transform












:rotate(360deg)












;
-webkit-transform












:rotate(360deg)












;
transform












:rotate(360deg)












}
}
</style>
<script type="text/javascript" src="images/hotelSearch/openPage.txt"></script>
<style type="text/css">
@charset "UTF-8";

[ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak,
	.x-ng-cloak, .ng-hide {
	display: none !important;
}

ng\:form {
	display: block;
}

.ng-animate-block-transitions {
	transition: 0s all !important;
	-webkit-transition: 0s all !important;
}

.ng-hide-add-active, .ng-hide-remove {
	display: block !important;
}
</style>
<!-- META SECTION -->

<title>品牌酒店</title>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="http://hotel.bestwehotel.com/favicon-plateno.ico"
	type="image/x-icon">
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/hotelSearch.css">
<link rel="stylesheet" href="css/citySelect.css	">
<!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=ikPVLLkgWCboYmkQBEZXaZlb9pLzmuzG"></script>
<!-- <script src="js/hotelSearch/wehotel.js"></script>
 -->
<!-- <script src="js/hotelSearch/siteConfig.js"></script>

<script type="text/javascript" src="js/hotelSearch/tongji.js"></script> -->
<script src="js/hotelSearch/vendor.js"></script>
</head>
<body ng-controller="hotelSearchController" ng-init="init()"
	ng-class="{'plateno':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<!-- ngInclude: $root.siteConfig.hotelSearch.template_url -->
	<div class="container ng-scope"
		ng-include="$root.siteConfig.hotelSearch.template_url">
		<div class="wehotel hotelsearch ng-scope">
			<!-- ngInclude: $root.siteConfig.header_url -->
			<div class="header ng-scope" ng-include="$root.siteConfig.header_url">
				<!-- header begin -->
				<!-- 预览模式 OP -->
				<!-- ngIf: $root.siteConfig.isPreview -->
				<!-- 预览模式 ED -->
				<div class="header-center ng-scope">
					<div class="logo">
						<a href="http://www.jinjiang.com/"></a>
					</div>
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<div class="navigation ng-scope"
						ng-if="$root.siteConfig.site_id==$root.siteEnum.WeHotel">
						<a
							ng-class="{'active': $root.topNavIndex == $root.siteConfig.topNavEnum.home,'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club }"
							href="index.jsp" class="ng-binding">酒店首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club }"
							href="hotelOrders.jsp" class="ng-binding hidden">会员首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club}"
							href="hotelSearch.jsp" class="ng-binding hidden">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.partners||$root.topNavIndex == $root.siteConfig.topNavEnum.club,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.hotel}"
							href="hotelSearch.jsp" class="ng-binding active">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club || $root.topNavIndex == $root.siteConfig.topNavEnum.partners }"
							href="hotelOrders.jsp" class="ng-binding">会员中心</a> <a href="#"
							target="_blank" class="ng-binding">积分商城</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club&amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners  ,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.partners}"
							href="#" class="ng-binding hidden">合作伙伴</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club &amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners }"
							href="#" class="ng-binding hidden">关于会员</a>
					</div>
					<!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
					<div class="header-action clearfix">

						<div class="header-login">
							<!-- ngIf: !$root.isLogined -->
							<a class="btn bluebtn ng-scope" href="login.jsp">登录</a> <a
								class="btn whitebtn ng-scope" href="register.jsp"
								ng-if="!$root.isLogined">注册</a>

						</div>
						<!-- ngIf: $root.isLogined -->

					</div>
				</div>
				<!-- header end -->
			</div>

			<!-- CONTENT OP -->

			<div class="container">
				<div class="input-section clearfix"
					ng-class="{'international': options.isAbroad &amp;&amp; $root.siteConfig.site_id == $root.siteEnum.WeHotel}">
					<label class="ng-binding">目的地</label> <input type="text"
						placeholder="请输入汉字" id="citySelect" name="destination"
						class="ng-pristine ng-valid" value="${namet}">
					<!-- 城市 -->
					<div id="in_city" style="display: none"></div>
					<label class="ng-binding">日期</label> <input type="text"
						placeholder="入住离店日期" class="date" id="inOutDatePicker"
						data-timein="1544140800000" data-timeout="1544227200000"
						value="2018-12-07 至 2018-12-08"> <label class="ng-binding">关键词</label>
					<input type="text" name="keyword" placeholder="酒店名" id="key_input"
						value="${keyword}" class="ng-pristine ng-valid">
					<button onclick="queryHotels()" class="ng-binding">搜索</button>
					<!-- 上版查询 -->


					<div class="keyword-box ng-hide" id="keyword-box">

						<div class="no-keyword ng-binding ng-scope">请输入关键字进行搜索</div>

					</div>


				</div>

				<div class="option-section">
					<div class="row clearfix">
						<label class="title ng-binding">品牌</label> <label
							class="all ng-binding yep" id="brand">不限</label>

						<div class="checkbox-box clearfix brand-area">
							<c:forEach items="${llts}" var="lst">
								<!-- 需要循环品牌 -->
								<label class="ng-scope"><input
									<c:if test="${lst.id==brand}">checked</c:if> type="radio"
									name="brand" value="${lst.id}" data-hotel-brand="KL"><span
									class="ng-binding">${lst.brandName}</span></label>
							</c:forEach>
						</div>
					</div>
					<div class="row">
						<label class="title ng-binding">星级</label> <label id="rating"
							class="all ng-binding yep">不限</label>
						<div style="text-align: left; text-indent: 1.25em">
							<!-- 查询全部星级 -->

							<c:forEach items="${Typelist}" var="ty">
								<label><input type="radio"
									<c:if test="${ty.valueId==rating}">checked</c:if> name="rating"
									value="${ty.valueId}"><span>${ty.valueName}</span></label>
							</c:forEach>
						</div>
					</div>
					<div class="row">
						<label class="title ng-binding">价格(元)</label> <label id="yep"
							class="all ng-binding yep">不限</label>
						<div class="checkbox-box clearfix price-area">
							<label><input name="priceArea" type="radio"
								name="priceArea" value="1"
								<c:if test="${price2==199}">checked</c:if>><span>200以下</span></label>
							<label><input <c:if test="${price2==400}">checked</c:if>
								name="priceArea" value="2" type="radio"><span>200-400</span></label>
							<label><input name="priceArea" type="radio" value="3"
								<c:if test="${price2==600}">checked</c:if>><span>400-600</span></label>
							<label><input name="priceArea" value="4"
								<c:if test="${price2==1000 and price1==600}">checked</c:if>
								name="priceArea" type="radio"><span>600以上</span></label> <label
								class="price-input"><span class="ng-binding">价格区间</span><input
								type="text" id="price1" class="ng-pristine ng-valid" value="0"
								readonly><span>-</span><input id="price2" type="text"
								class="ng-pristine ng-valid" value="1000" readonly></label>
						</div>
					</div>
				</div>
			</div>
			<div class="container2">
				<div class="hotel-section clearfix">
					<div class="tags clearfix">
						<div class="result ng-binding">
							查询到 <span class="ng-binding">${hotelsize}</span> 家酒店
						</div>
						<div id="condition"></div>
					</div>
					<div class="info">
						<div class="nav clearfix">
							<div class="title ng-binding">排序&nbsp;:</div>
							<div class="tab chosen">默认排序</div>
							<div class="tab ng-binding" onclick="javascript(0);">由近到远</div>
							<!-- <input class="tab ng-binding" style="background-color:#94c9ff;margin:auto 0px;padding:0px;" type="text" value="价格"/> -->
							<div class="tab ng-binding">
								价格
								<div class="price-arrow">
									<div class="square"></div>
									<div class="triangle"></div>
								</div>
							</div>
						</div>

						<!-- ngRepeat: item in hotelList -->
						<c:if test="${hotelList!=null}">
							<c:forEach items="${hotelList}" var="hotelList">
								<div class="block ng-scope" ng-repeat="item in hotelList"
									id="hotel_JJ60133" onmouseover="queryss('${hotelList.address}')">
									<div class="pic">
										<!-- ngIf: item.preSale -->
										<a href="webHotelDatail?hotelId=${hotelList.id}"
											target="_blank"> <!-- "http://hotel.bestwehotel.com/HotelDetail?hotelId=JJ60133&amp;checkInDate=2018-12-07&amp;checkOutDate=2018-12-08&amp;extend=1,1,0,0,0,0" -->
											<img
											ng-src="http://images.bestwehotel.com/images/4bcff28a3f88d111_400_300.jpg"
											onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'"
											src="${hotelList.photograph}">
										</a>
									</div>
									<div class="top clearfix">
										<i class="pin ng-binding">1</i>
										<p class="name">
											<!--<span class="name-text">{{item.hotelName}}</span>-->
											<a class="name-text ng-binding"
												href="webHotelDatail?hotelId=${hotelList.id}"
												target="_blank"> ${hotelList.hotelName} </a>
											<!-- ngIf: false -->
										</p>
										<input type="hidden" name="addresse" value="${hotelList.address}"/>
										<p class="address ng-binding">
											地址：<span class="ng-binding">${hotelList.address}</span>
										</p>
										<!-- ngIf: item.distance && item.distance !='null' -->
										<p class="distance ng-binding ng-scope"
											ng-if="item.distance &amp;&amp; item.distance !='null'">距离市中心
											*** km</p>
										<!-- end ngIf: item.distance && item.distance !='null' -->

										<!--<i class="icon-member-hotel" ng-if="item.isScoreHotel"></i>-->

										<div class="type clearfix">
											<!--<i class="icon-topclass"></i>-->
											<!--<i class="icon-club"></i>-->
										</div>
										<div class="rank">
											<div class="score">
												<span class="ng-binding">${hotelList.score}</span>/5分
											</div>
										</div>
									</div>
									<div class="middle clearfix">
										<!-- ngIf: item.ratingDesc -->
										<div class="tag ng-binding ng-scope" ng-if="item.ratingDesc">${hotelList.alias}</div>
										<!-- end ngIf: item.ratingDesc -->
										<!-- ngRepeat: tagName in item.labels -->
									</div>
									<div class="icon clearfix">
										<span ng-if="item.supportForeignGuest" class="ng-scope"><i
											class="foreigner"></i>接待外宾</span>
										<!-- end ngIf: item.supportForeignGuest -->
									</div>
									<div class="bottom clearfix">
										<div class="more">
											<div class="price ng-binding">
												￥<span class="ng-binding">${hotelList.minimum}</span>起
											</div>
											<!--<button ng-click="goHotelDetail(item)">{{'HOTELSEARCH_MORE_ROOM_TYPE' | T}}</button>-->
											<a href="webHotelDatail?hotelId=${hotelList.id}"
												target="_blank" class="ng-binding">查看详情</a>
											<!-- http://hotel.bestwehotel.com/HotelDetail?hotelId=JJ60133&amp;checkInDate=2018-12-07&amp;checkOutDate=2018-12-08&amp;extend=1,1,0,0,0, -->
										</div>
									</div>
								</div>
							</c:forEach>
						</c:if>

















						<!-- 
						ngIf: pagination.pageCount > 1
						<div class="pager ng-isolate-scope" hotel-pagination=""
							pagination="pagination" callback="queryHotels(false)"
							ng-if="pagination.pageCount &gt; 1">

							ngIf: pagination.pageIndex > 1
							ngRepeat: item in pagination.pages
							<div ng-repeat="item in pagination.pages"
								ng-class="{'page': item.index != 'omit', 'omit': item.index == 'omit', 'active': item.index == $parent.pagination.pageIndex }"
								ng-click="goPage(item.index)"
								class="ng-binding ng-scope page active">1</div>
							end ngRepeat: item in pagination.pages
							<div ng-repeat="item in pagination.pages"
								ng-class="{'page': item.index != 'omit', 'omit': item.index == 'omit', 'active': item.index == $parent.pagination.pageIndex }"
								ng-click="goPage(item.index)" class="ng-binding ng-scope page">2</div>
							end ngRepeat: item in pagination.pages
							<div ng-repeat="item in pagination.pages"
								ng-class="{'page': item.index != 'omit', 'omit': item.index == 'omit', 'active': item.index == $parent.pagination.pageIndex }"
								ng-click="goPage(item.index)" class="ng-binding ng-scope omit">...</div>
							end ngRepeat: item in pagination.pages
							<div ng-repeat="item in pagination.pages"
								ng-class="{'page': item.index != 'omit', 'omit': item.index == 'omit', 'active': item.index == $parent.pagination.pageIndex }"
								ng-click="goPage(item.index)" class="ng-binding ng-scope page">21</div>
							end ngRepeat: item in pagination.pages
							ngIf: pagination.pageIndex < pagination.pageCount
							<div class="next ng-scope"
								ng-if="pagination.pageIndex &lt; pagination.pageCount"
								ng-click="goPage('next')">
								<icon class="triangle-right"></icon>
							</div>
							end ngIf: pagination.pageIndex < pagination.pageCount
							<div class="skip">
								到<input type="text" ng-model="pagination.jumpPageIndex"
									class="ng-pristine ng-valid" value="1">页
							</div>
							<button ng-click="goPage(pagination.jumpPageIndex)">确&nbsp;&nbsp;定</button>

						</div>
 -->


						<!-- end ngIf: pagination.pageCount > 1 -->
					</div>
					<div class="map-box">
						<div class="hotel-map amap-container" id="hotel-map"
							style="position: relative; background: rgb(252, 249, 242) none repeat scroll 0% 0%;">
							<div id="r-result">

							<div id="result"></div>
						</div>
						</div>
					</div>
				</div>
			</div>


			<div class="cover" ng-class="{'show': options.showConver}"
				ng-click="toggleBigMap()"></div>
			<div class="window" ng-class="{'show': options.showBigMap}">
				<i class="close" ng-click="toggleBigMap()">x</i>
				<div id="hotel-big-map" style="height: 93%; width: 100%"></div>
			</div>

			<!-- 弹窗显示更多地理位置信息 -->
			<div class="window" ng-class="{'show': options.showMoreZones}">
				<i class="close" ng-click="togglePopupZones()">x</i>

				<div class="zone-panel" id="zone-panel">
					<!-- Tab panels -->
					<ul class="nav nav-tabs" role="tablist">
						<!--<input type="text" placeholder="输入关键字过滤" ng-model="params.subKeyword" ng-keyup="subKeywordSearch()" />-->
						<!-- ngRepeat: navTab in navTabs -->
					</ul>
					<!-- Tab content -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane">
							<!-- ngRepeat: area in popupZones -->
							<ul class="clearfix ng-scope" ng-repeat="area in popupZones">
								<!--<li class="tit">{{area.key}}</li>-->
								<!-- ngRepeat: item in area.subZones -->
							</ul>
							<!-- end ngRepeat: area in popupZones -->
						</div>
					</div>
				</div>
			</div>
			<!-- CONTENT ED -->
			<jsp:include page="footer.jsp" />
		</div>
	</div>
	<script charset="utf-8" src="images/hotelSearch/main"></script>
	<script src="js/cityTemplate.js"></script>
	<script type="text/javascript">
	$.fn.smartFloat = function() {

	    var position = function(element) {

	        var top = element.position().top, pos = element.css("position");

	        $(window).scroll(function() {

	            var scrolls = $(this).scrollTop();

	            if (scrolls > top) {

	                if (window.XMLHttpRequest) {

	                    element.css({

	                        position: "fixed",

	                        top: 0,
	                    width:"300px",
	                    height:"400px"
	                    });    

	                } else {

	                    element.css({

	                        top: scrolls

	                    });    

	                }

	            }else {

	                element.css({

	                    position: "absolute",

	                    top: top

	                });    

	            }

	        });

	    };

	    return $(this).each(function() {

	        position($(this));                         

	    });

	};
	//$("#hotel-map").css("width":"200px","height":"400px");
	$("#hotel-map").smartFloat();

		// 百度地图API功能，根据城市与酒店位置定位
		var addresse = $("input[name=addresse]");
		var di = $("#citySelect").val();
		var adds = [];
		$("input[name=addresse]").each(function() {
			adds.push($(this).val());
		})
		var map = new BMap.Map("hotel-map");
		//map.centerAndZoom(new BMap.Point(117.269945, 31.86713), 13);
		map.enableScrollWheelZoom(true);
		var index = 0;
		var myGeo = new BMap.Geocoder();
		bdGEO();
		function bdGEO() {
			var add = adds[index];
			geocodeSearch(add);
			index++;
		}
		function geocodeSearch(add) {
			if (index < adds.length) {
				setTimeout(window.bdGEO, 400);
			}
			myGeo.getPoint(add, function(point) {
				if (point) {
					var address = new BMap.Point(point.lng, point.lat);
					map.centerAndZoom(address,11);
					addMarker(address, new BMap.Label(index + ":" + add, {
						offset : new BMap.Size(20, -10)
					}));
				}
			}, di);
		}
		// 编写自定义函数,创建标注
		function addMarker(point, label) {
			var marker = new BMap.Marker(point);
			map.addOverlay(marker);
			//marker.setLabel(label);
		}
	</script>
</body>
</html>