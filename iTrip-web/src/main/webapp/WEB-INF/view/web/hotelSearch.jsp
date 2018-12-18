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

<title>铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店</title>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="http://hotel.bestwehotel.com/favicon-plateno.ico"
	type="image/x-icon">
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/hotelSearch.css">
<!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="js/hotelSearch/tongji.js"></script>
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
						<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
						<div class="divider2" style="margin-left: 25px;"></div>
						<div class="header-phone-container">
							<div class="header-phone"></div>
							<div class="qrcode-box clearfix">
								<div class="qrcode-cover"></div>
								<div class="qrcode">
									<img ng-src="/dist/images/qrcode1.jpg"
										src="images/hotelSearch/qrcode1.jpg"> <a
										class="ng-binding">锦江旅行APP</a>
								</div>
								<div class="divider3"></div>
								<div class="qrcode">
									<img ng-src="/dist/images/qrcode2.jpg"
										src="images/hotelSearch/qrcode2.jpg"> <a
										class="ng-binding">锦江旅行公众号</a>
								</div>
							</div>
						</div>
						<div class="divider2"></div>
						<div class="header-login">
							<!-- ngIf: !$root.isLogined -->
							<a class="btn bluebtn ng-scope" href="login.jsp">登录</a>
							<!-- end ngIf: !$root.isLogined -->
							<!-- ngIf: !$root.isLogined -->
							<a class="btn whitebtn ng-scope" href="register.jsp"
								ng-if="!$root.isLogined">注册</a>
							<!-- end ngIf: !$root.isLogined -->
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
						placeholder="请输入汉字或拼音"
						ng-click="options.showCityPanel=!options.showCityPanel;"
						ng-change="showFilterCity(selectedCityName)"
						ng-model="selectedCityName" id="selectCity"
						class="ng-pristine ng-valid" value="上海">
					<!--城市筛选层begin-->
					<div class="filter-city-box ng-hide" id="filter-city-box"
						ng-show="options.showFilterCity">
						<div class="filter-city-main">
							<p class="tit">国内城市</p>
							<ul>
								<!-- ngRepeat: city in allCities.otaCitys | filter:{cityName:selectedCityName} -->
								<li
									ng-repeat="city in allCities.otaCitys | filter:{cityName:selectedCityName}"
									class="ng-scope"><a ng-click="selectCity(city)"
									class="ng-binding">上海</a></li>
								<!-- end ngRepeat: city in allCities.otaCitys | filter:{cityName:selectedCityName} -->
							</ul>
							<ul>
								<!-- ngRepeat: city in allCities.otaCitys | filter:{pinyin:selectedCityName} -->
							</ul>

						</div>
					</div>
					<!--城市筛选层begin-->
					<label class="ng-binding">日期</label> <input type="text"
						placeholder="入住离店日期" class="date" id="inOutDatePicker"
						readonly="readonly" data-timein="1544140800000"
						data-timeout="1544227200000" value="2018-12-07 至 2018-12-08">
					<label class="ng-binding">关键词</label> <input type="text"
						placeholder="酒店名/地标/商圈" ng-model="params.keyword" id="key_input"
						ng-enter="queryHotels(true)" ng-keyup="keywordSearch()"
						ng-click="keywordSearch()" class="ng-pristine ng-valid">
					<button ng-click="queryHotels(true)" class="ng-binding">搜索</button>

					<!-- 显示城市选择器面板 -->
					<div class="city-panel ng-isolate-scope ng-hide"
						ng-show="showCityPanel" id="city-panel" city-selector=""
						brand-name="params.brand" show-city-panel="options.showCityPanel"
						selected-city-name="selectedCityName" is-abroad="options.isAbroad"
						is-oversea-city="options.isOverseaCity"
						after-callback="getCityCenterAndHotels()">
						<!-- Tab top panels -->
						<ul class="nation">
							<li ng-class="{'active': !isAbroad}" ng-click="isAbroad = false;"
								class="active">国内</li>
							<li ng-class="{'active': isAbroad}" ng-click="isAbroad = true;">国际</li>
						</ul>
						<!-- Tab panels -->
						<ul class="nav nav-tabs" role="tablist">
							<!-- ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<li ng-repeat="navTab in navTabs"
								ng-if="(!isAbroad &amp;&amp; !navTab.isAbroad &amp;&amp; navTab.count) || (isAbroad &amp;&amp; navTab.isAbroad &amp;&amp; navTab.count &gt; 0)"
								ng-class="{'active': selectedIndex == navTab.index}"
								class="ng-scope active"><a ng-click="selectTab(navTab)"
								class="ng-binding">热门城市</a></li>
							<!-- end ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<li ng-repeat="navTab in navTabs"
								ng-if="(!isAbroad &amp;&amp; !navTab.isAbroad &amp;&amp; navTab.count) || (isAbroad &amp;&amp; navTab.isAbroad &amp;&amp; navTab.count &gt; 0)"
								ng-class="{'active': selectedIndex == navTab.index}"
								class="ng-scope"><a ng-click="selectTab(navTab)"
								class="ng-binding">ABCDE</a></li>
							<!-- end ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<li ng-repeat="navTab in navTabs"
								ng-if="(!isAbroad &amp;&amp; !navTab.isAbroad &amp;&amp; navTab.count) || (isAbroad &amp;&amp; navTab.isAbroad &amp;&amp; navTab.count &gt; 0)"
								ng-class="{'active': selectedIndex == navTab.index}"
								class="ng-scope"><a ng-click="selectTab(navTab)"
								class="ng-binding">FGHIJ</a></li>
							<!-- end ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<li ng-repeat="navTab in navTabs"
								ng-if="(!isAbroad &amp;&amp; !navTab.isAbroad &amp;&amp; navTab.count) || (isAbroad &amp;&amp; navTab.isAbroad &amp;&amp; navTab.count &gt; 0)"
								ng-class="{'active': selectedIndex == navTab.index}"
								class="ng-scope"><a ng-click="selectTab(navTab)"
								class="ng-binding">KLMNO</a></li>
							<!-- end ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<li ng-repeat="navTab in navTabs"
								ng-if="(!isAbroad &amp;&amp; !navTab.isAbroad &amp;&amp; navTab.count) || (isAbroad &amp;&amp; navTab.isAbroad &amp;&amp; navTab.count &gt; 0)"
								ng-class="{'active': selectedIndex == navTab.index}"
								class="ng-scope"><a ng-click="selectTab(navTab)"
								class="ng-binding">PQRST</a></li>
							<!-- end ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<li ng-repeat="navTab in navTabs"
								ng-if="(!isAbroad &amp;&amp; !navTab.isAbroad &amp;&amp; navTab.count) || (isAbroad &amp;&amp; navTab.isAbroad &amp;&amp; navTab.count &gt; 0)"
								ng-class="{'active': selectedIndex == navTab.index}"
								class="ng-scope"><a ng-click="selectTab(navTab)"
								class="ng-binding">UVWXYZ</a></li>
							<!-- end ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
							<!-- ngIf: (!isAbroad && !navTab.isAbroad && navTab.count) || (isAbroad && navTab.isAbroad && navTab.count > 0) -->
							<!-- end ngRepeat: navTab in navTabs -->
						</ul>
						<!-- Tab content -->
						<div class="tab-content">
							<div role="tabpanel" class="tab-pane">
								<!-- ngRepeat: area in cities -->
								<ul class="clearfix ng-scope" ng-repeat="area in cities">
									<li class="tit ng-binding"></li>
									<!-- ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="北京" class="ng-binding">北京</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="广州" class="ng-binding">广州</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="深圳" class="ng-binding">深圳</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="武汉" class="ng-binding">武汉</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="成都" class="ng-binding">成都</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="重庆" class="ng-binding">重庆</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="上海" class="ng-binding">上海</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="西安" class="ng-binding">西安</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="长沙" class="ng-binding">长沙</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="天津" class="ng-binding">天津</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="南京" class="ng-binding">南京</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="贵阳" class="ng-binding">贵阳</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="南昌" class="ng-binding">南昌</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="济南" class="ng-binding">济南</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="郑州" class="ng-binding">郑州</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="厦门" class="ng-binding">厦门</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="杭州" class="ng-binding">杭州</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="青岛" class="ng-binding">青岛</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="哈尔滨" class="ng-binding">哈尔滨</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
									<li ng-repeat="city in area.cities" class="ng-scope"><a
										ng-click="selectCity(city)" title="珠海" class="ng-binding">珠海</a>
									</li>
									<!-- end ngRepeat: city in area.cities -->
								</ul>
								<!-- end ngRepeat: area in cities -->
							</div>
						</div>
					</div>

					<div class="keyword-box ng-hide" id="keyword-box"
						ng-show="options.showKeywordPanel">
						<!-- ngRepeat: keywordItem in keywordList -->
						<!-- ngIf: keywordList.length == 0 -->
						<div class="no-keyword ng-binding ng-scope"
							ng-if="keywordList.length == 0">请输入关键字进行搜索</div>
						<!-- end ngIf: keywordList.length == 0 -->
					</div>


				</div>

				<div class="option-section">
					<div class="row clearfix">
						<label class="title ng-binding">位置</label> <label
							class="all ng-binding yep"
							ng-class="{'yep': params.zoneType == ''}"
							ng-click="changeZoneType('all')">不限</label>
						<div class="checkbox-box clearfix">
							<label
								ng-class="{'active': params.zoneType != '' &amp;&amp; 'BUSINESS,LANDMARK'.indexOf(params.zoneType) &gt; -1}"
								ng-click="changeZoneType('BUSINESS,LANDMARK')"><span
								class="ng-binding">商圈/地标</span></label> <label
								ng-class="{'active': params.zoneType != '' &amp;&amp; 'AIR,TRAIN'.indexOf(params.zoneType) &gt; -1}"
								ng-click="changeZoneType('AIR,TRAIN')"><span
								class="ng-binding">飞机场/火车站</span></label> <label
								ng-class="{'active': params.zoneType != '' &amp;&amp; 'METRO'.indexOf(params.zoneType) &gt; -1}"
								ng-click="changeZoneType('METRO')" class=""><span
								class="ng-binding">轨道交通</span></label> <label
								ng-class="{'active': params.zoneType != '' &amp;&amp; 'DISTRICT'.indexOf(params.zoneType) &gt; -1}"
								ng-click="changeZoneType('DISTRICT')" class=""><span
								class="ng-binding">行政区</span></label> <label
								ng-class="{'active': params.zoneType != '' &amp;&amp; 'SCENIC'.indexOf(params.zoneType) &gt; -1}"
								ng-click="changeZoneType('SCENIC')"><span
								class="ng-binding">景点</span></label>

							<!-- ngIf: zones.length > 0 -->
						</div>
					</div>
					<div class="row clearfix">
						<label class="title ng-binding">品牌</label> <label
							class="all ng-binding yep"
							ng-class="{'yep': params.brands == ''}"
							ng-click="changeBrand('all')">不限</label>
						<div class="checkbox-box clearfix brand-area">
							<!-- ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="KL"><span
								class="ng-binding">昆仑</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()"
								data-hotel-brand="JINJIANG"><span class="ng-binding">锦江</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="GTC"><span
								class="ng-binding">郁锦香</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()"
								data-hotel-brand="METROPOLO"><span class="ng-binding">锦江都城</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="137"><span
								class="ng-binding">康铂</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()"
								data-hotel-brand="MAGNOTEL"><span class="ng-binding">白玉兰</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="90"><span
								class="ng-binding">麗枫</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="91"><span
								class="ng-binding">喆啡</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="96"><span
								class="ng-binding">希岸</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="106"><span
								class="ng-binding">希岸·轻雅</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()"
								data-hotel-brand="JJPINSHANG"><span class="ng-binding">锦江之星品尚</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()"
								data-hotel-brand="JJINN"><span class="ng-binding">锦江之星</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()"
								data-hotel-brand="JJFENGSHANG"><span class="ng-binding">锦江之星风尚</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="2"><span
								class="ng-binding">7天优品</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="1"><span
								class="ng-binding">7天酒店</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()" data-hotel-brand="4"><span
								class="ng-binding">IU酒店</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()"
								data-hotel-brand="GOLDMETINN"><span class="ng-binding">金广快捷</span></label>
							<!-- end ngRepeat: brand in brandList -->
							<label ng-repeat="brand in brandList" class="ng-scope"><input
								type="checkbox" ng-click="changeBrand()"
								data-hotel-brand="BESTAY"><span class="ng-binding">百时快捷</span></label>
							<!-- end ngRepeat: brand in brandList -->
						</div>
					</div>
					<div class="row">
						<label class="title ng-binding">星级</label> <label
							class="all ng-binding yep"
							ng-class="{'yep': params.starRatings.length == 0}"
							ng-click="changeStarRating('all')">不限</label>
						<div class="checkbox-box clearfix starRating-area">
							<label><input type="checkbox"
								ng-click="changeStarRating()" data-hotel-star="NO_STARS"><span
								class="ng-binding">经济型</span></label> <label><input
								type="checkbox" ng-click="changeStarRating()"
								data-hotel-star="THREE_STARS"><span class="ng-binding">舒适型</span></label>
							<label><input type="checkbox"
								ng-click="changeStarRating()" data-hotel-star="FOUR_STARS"><span
								class="ng-binding">高档型</span></label> <label><input
								type="checkbox" ng-click="changeStarRating()"
								data-hotel-star="FIVE_STARS"><span class="ng-binding">豪华型</span></label>
						</div>
					</div>
					<div class="row">
						<label class="title ng-binding">价格(元)</label> <label
							class="all ng-binding yep"
							ng-class="{'yep': params.minPrice == 0 &amp;&amp; params.maxPrice == '1000'}"
							ng-click="changePrice('all')">不限</label>
						<div class="checkbox-box clearfix price-area">
							<label><input name="priceArea" type="radio"
								ng-click="changePrice(1)"><span>200以下</span></label> <label><input
								name="priceArea" type="radio" ng-click="changePrice(2)"><span>200-400</span></label>
							<label><input name="priceArea" type="radio"
								ng-click="changePrice(3)"><span>400-600</span></label> <label><input
								name="priceArea" type="radio" ng-click="changePrice(4)"><span>600以上</span></label>
							<label class="price-input"><span class="ng-binding">价格区间</span><input
								type="text" ng-model="params.minPrice"
								class="ng-pristine ng-valid" value="0"><span>-</span><input
								type="text" ng-model="params.maxPrice"
								class="ng-pristine ng-valid" value="1000"></label>
							<button class="price-confirm" ng-click="changePrice('custom')">确定</button>
						</div>
					</div>
				</div>
			</div>
			<div class="container2">
				<div class="hotel-section clearfix">
					<div class="tags clearfix">
						<div class="result ng-binding">
							查询到 <span class="ng-binding">210</span> 家酒店
						</div>
						<!--<div class="tag-sec">锦江之星<i></i></div>-->
						<!--<div class="tag-sec">500元以上<i></i></div>-->
						<!-- ngRepeat: item in selectedTags -->
						<!-- ngIf: selectedTags.length > 0 -->
					</div>
					<div class="info">
						<div class="nav clearfix">
							<div class="title ng-binding">排序&nbsp;:</div>
							<div class="tab chosen"
								onclick="window.location.href ='hotelSearch.jsp'"
								ng-class="{'chosen': params.sortType == 'DEFAULT_SORT'}">默认排序</div>
							<div class="tab ng-binding"
								onclick="window.location.href ='hotelSearch.jsp'"
								ng-class="{'chosen': params.sortType == 'DISTANCE_SORT'}">由近到远</div>
							<div class="tab ng-binding"
								onclick="window.location.href ='hotelSearch.jsp'"
								ng-class="{'chosen': params.sortType == 'PRICE_ASC' || params.sortType == 'PRICE_DESC'}">
								价格
								<div class="price-arrow"
									ng-class="{'down':params.sortType == 'PRICE_DESC'}">
									<div class="square"></div>
									<div class="triangle"></div>
								</div>
							</div>
						</div>

						<!-- ngRepeat: item in hotelList -->
						<c:forEach items="${hotelList}" var="hotelList">
							<div class="block ng-scope" ng-repeat="item in hotelList"
								id="hotel_JJ60133">
								<div class="pic">
									<!-- ngIf: item.preSale -->
									<a href="hotelDatail.jsp" target="_blank"> <!-- "http://hotel.bestwehotel.com/HotelDetail?hotelId=JJ60133&amp;checkInDate=2018-12-07&amp;checkOutDate=2018-12-08&amp;extend=1,1,0,0,0,0" -->
										<img
										ng-src="http://images.bestwehotel.com/images/4bcff28a3f88d111_400_300.jpg"
										onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'"
										src="images/hotelSearch/4bcff28a3f88d111_400_300.jpg">
									</a>
								</div>
								<div class="top clearfix">
									<i class="pin ng-binding">1</i>
									<p class="name">
										<!--<span class="name-text">{{item.hotelName}}</span>-->
										<a class="name-text ng-binding" href="hotelDatail.jsp"
											target="_blank"> ${hotelList.hotelName} </a>
										<!-- ngIf: false -->
									</p>
									<p class="address ng-binding">
										地址：<span title="上海市浦东新区浦电路57号" class="ng-binding">上海市浦东新区浦电路57号</span>
									</p>
									<!-- ngIf: item.distance && item.distance !='null' -->
									<p class="distance ng-binding ng-scope"
										ng-if="item.distance &amp;&amp; item.distance !='null'">距离市中心
										4.8 km</p>
									<!-- end ngIf: item.distance && item.distance !='null' -->

									<!--<i class="icon-member-hotel" ng-if="item.isScoreHotel"></i>-->

									<div class="type clearfix">
										<!--<i class="icon-topclass"></i>-->
										<!--<i class="icon-club"></i>-->
									</div>
									<div class="rank">
										<div class="score">
											<span class="ng-binding">4.7</span>/5分
										</div>
										<div class="star clearfix comment-level ng-binding"
											ng-bind-html="item.starsHtml | html">
											<li class="star_full"></li>
											<li class="star_full"></li>
											<li class="star_full"></li>
											<li class="star_full"></li>
											<li class="star_half"></li>
										</div>
									</div>

								</div>
								<div class="middle clearfix">
									<!-- ngIf: item.ratingDesc -->
									<div class="tag ng-binding ng-scope" ng-if="item.ratingDesc">经济型</div>
									<!-- end ngIf: item.ratingDesc -->
									<!-- ngRepeat: tagName in item.labels -->
								</div>
								<div class="icon clearfix">
									<!-- ngIf: $parent.hasFacility(item, 'PARKING') -->
									<!-- ngIf: $parent.hasFacility(item, 'WIFI') -->
									<!--<span ng-if="$parent.hasFacility(item, 'METTING')"><i class="meeting"></i>会议室</span>-->
									<!-- ngIf: $parent.hasFacility(item, 'RESTAURANT') -->
									<!-- ngIf: $parent.hasFacility(item, 'WIRED') -->
									<!-- ngIf: item.supportForeignGuest -->
									<span ng-if="item.supportForeignGuest" class="ng-scope"><i
										class="foreigner"></i>接待外宾</span>
									<!-- end ngIf: item.supportForeignGuest -->
								</div>
								<div class="bottom clearfix">
									<div class="more">
										<div class="price ng-binding">
											￥<span class="ng-binding">199</span>起
										</div>
										<!--<button ng-click="goHotelDetail(item)">{{'HOTELSEARCH_MORE_ROOM_TYPE' | T}}</button>-->
										<a href="hotelDatail.jsp" target="_blank" class="ng-binding">查看详情</a>
										<!-- http://hotel.bestwehotel.com/HotelDetail?hotelId=JJ60133&amp;checkInDate=2018-12-07&amp;checkOutDate=2018-12-08&amp;extend=1,1,0,0,0, -->
									</div>
								</div>
							</div>
						</c:forEach>

						<!-- 分页组件 -->
						<!-- ngIf: pagination.pageCount > 1 -->
						<div class="pager ng-isolate-scope" hotel-pagination=""
							pagination="pagination" callback="queryHotels(false)"
							ng-if="pagination.pageCount &gt; 1">
							<!-- ngIf: pagination.pageIndex > 1 -->
							<!-- ngRepeat: item in pagination.pages -->
							<div ng-repeat="item in pagination.pages"
								ng-class="{'page': item.index != 'omit', 'omit': item.index == 'omit', 'active': item.index == $parent.pagination.pageIndex }"
								ng-click="goPage(item.index)"
								class="ng-binding ng-scope page active">1</div>
							<!-- end ngRepeat: item in pagination.pages -->
							<div ng-repeat="item in pagination.pages"
								ng-class="{'page': item.index != 'omit', 'omit': item.index == 'omit', 'active': item.index == $parent.pagination.pageIndex }"
								ng-click="goPage(item.index)" class="ng-binding ng-scope page">2</div>
							<!-- end ngRepeat: item in pagination.pages -->
							<div ng-repeat="item in pagination.pages"
								ng-class="{'page': item.index != 'omit', 'omit': item.index == 'omit', 'active': item.index == $parent.pagination.pageIndex }"
								ng-click="goPage(item.index)" class="ng-binding ng-scope omit">...</div>
							<!-- end ngRepeat: item in pagination.pages -->
							<div ng-repeat="item in pagination.pages"
								ng-class="{'page': item.index != 'omit', 'omit': item.index == 'omit', 'active': item.index == $parent.pagination.pageIndex }"
								ng-click="goPage(item.index)" class="ng-binding ng-scope page">21</div>
							<!-- end ngRepeat: item in pagination.pages -->
							<!-- ngIf: pagination.pageIndex < pagination.pageCount -->
							<div class="next ng-scope"
								ng-if="pagination.pageIndex &lt; pagination.pageCount"
								ng-click="goPage('next')">
								<icon class="triangle-right"></icon>
							</div>
							<!-- end ngIf: pagination.pageIndex < pagination.pageCount -->
							<div class="skip">
								到<input type="text" ng-model="pagination.jumpPageIndex"
									class="ng-pristine ng-valid" value="1">页
							</div>
							<button ng-click="goPage(pagination.jumpPageIndex)">确&nbsp;&nbsp;定</button>
						</div>
						<!-- end ngIf: pagination.pageCount > 1 -->
					</div>
					<div class="map-box">
						<div class="hotel-map amap-container" id="hotel-map"
							style="position: relative; background: rgb(252, 249, 242) none repeat scroll 0% 0%;">
							<object
								style="display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"
								type="text/html" data="images/hotelSearch/a"></object>
							<div class="amap-maps">
								<div class="amap-drags" style="">
									<div class="amap-layers" style="transform: translateZ(0px);">
										<canvas class="amap-layer" width="362" height="525"
											style="position: absolute; z-index: 0; transform-origin: 181px 262.5px 0px; transform: scale3d(0.8, 0.8, 1); top: -53px; left: -36px; height: 525px; width: 362px;"></canvas>
										<div class="amap-markers"
											style="position: absolute; z-index: 120; top: 210px; left: 145px;">
											<div class="amap-marker"
												style="top: -39px; left: 52px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ60133"
														class="mapHotelItem sprite_icon_hotel_map">1</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: -70px; left: 10px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ65003"
														class="mapHotelItem sprite_icon_hotel_map">2</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: -43px; left: -51px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ1059"
														class="mapHotelItem sprite_icon_hotel_map">3</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: -67px; left: -13px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ1062"
														class="mapHotelItem sprite_icon_hotel_map">4</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: -43px; left: -27px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ1086"
														class="mapHotelItem sprite_icon_hotel_map">5</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: -45px; left: -26px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ1050"
														class="mapHotelItem sprite_icon_hotel_map">6</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: 8px; left: -62px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ1090"
														class="mapHotelItem sprite_icon_hotel_map">7</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: -56px; left: -2px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ65036"
														class="mapHotelItem sprite_icon_hotel_map">8</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: -32px; left: -70px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ65001"
														class="mapHotelItem sprite_icon_hotel_map">9</div>
												</div>
											</div>
											<div class="amap-marker"
												style="top: -68px; left: -12px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
												<div class="amap-marker-content" style="opacity: 1;">
													<div data-id="JJ1058"
														class="mapHotelItem sprite_icon_hotel_map">10</div>
												</div>
											</div>
										</div>
										<canvas class="amap-labels" draggable="false" width="580"
											height="840"
											style="position: absolute; z-index: 99; height: 420px; width: 290px; top: 0px; left: 0px;"></canvas>
									</div>
									<div class="amap-overlays" style=""></div>
								</div>
							</div>
							<div style="display: none;"></div>
							<div class="amap-controls"></div>
							<a class="amap-logo" href="http://gaode.com/" target="_blank"><img
								src="images/hotelSearch/logo2x.png"></a>
							<div class="amap-copyright" style="display: none;"></div>
						</div>
						<div class="map-button" ng-click="toggleBigMap()">
							<i></i>
							<p class="ng-binding">查看大图</p>
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

	<script src="js/hotelSearch/siteConfig.js"></script>

	<script src="js/hotelSearch/vendor.js"></script>

	<script src="js/hotelSearch/wehotel.js"></script>


	<div id="inOutDatePickerBox" class="date-mainBox"
		style="display: none;">
		<div class="date-box ">
			<div class="date_main">
				<div class="date_box_top">
					<div class="date_minus date_backL"></div>
					<div class="date_month"></div>
				</div>
				<ul class="date_week_ul">
					<li>日</li>
					<li>一</li>
					<li>二</li>
					<li>三</li>
					<li>四</li>
					<li>五</li>
					<li>六</li>
				</ul>
				<table class="ate_box_table" cellspacing="1" cellpadding="0">
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="date-box date-ml4">
			<div class="date_main">
				<div class="date_box_top">
					<div class="date_month"></div>
					<div class="date_add date_backR"></div>
				</div>
				<ul class="date_week_ul">
					<li>日</li>
					<li>一</li>
					<li>二</li>
					<li>三</li>
					<li>四</li>
					<li>五</li>
					<li>六</li>
				</ul>
				<table class="ate_box_table" cellspacing="1" cellpadding="0">
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<script charset="utf-8" src="images/hotelSearch/main"></script>
</body>
</html>