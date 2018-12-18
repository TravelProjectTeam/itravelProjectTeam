<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<head>
<script type="text/javascript" src="js/hotel_js/openPage.txt"></script>
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
<!--<meta name="Keywords" content="锦江酒店官网,连锁酒店官网,快捷酒店预订,经济型酒店预订,锦江酒店预订,锦江之星酒店预订,星级商务酒店预订,白玉兰酒店,百时快捷酒店,金广快捷酒店">-->
<link rel="icon" href="http://hotel.bestwehotel.com/favicon-plateno.ico"
	type="image/x-icon">
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/hotel.css">
<!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="js/hotel_js/tongji.js"></script>
</head>
<body ng-controller="homeController" ng-init="init()"
	ng-class="{'plateno':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<!-- ngInclude: $root.siteConfig.index.template_url -->
	<div class="container ng-scope"
		ng-include="$root.siteConfig.index.template_url">
		<div class="wehotel index ng-scope">
			<!-- ngInclude: $root.siteConfig.header_url -->
			<div class="header ng-scope" ng-include="$root.siteConfig.header_url">
				<!-- header begin -->
				<!-- 预览模式 OP -->
				<!-- ngIf: $root.siteConfig.isPreview -->
				<!-- 预览模式 ED -->
				<div class="header-center ng-scope">
					<div class="logo">
						<a href="index.jsp"><h1
								ng-class="{'icon-we-logo':$root.siteConfig.site_id==$root.siteEnum.WeHotel,'icon-we-ptlx':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
								class="icon-we-logo"></h1></a>
					</div>
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<div class="navigation ng-scope"
						ng-if="$root.siteConfig.site_id==$root.siteEnum.WeHotel">
						<a
							ng-class="{'active': $root.topNavIndex == $root.siteConfig.topNavEnum.home,'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club }"
							href="index.jsp" class="ng-binding active">酒店首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club }"
							href="hotelOrders.jsp" class="ng-binding hidden">会员首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club}"
							href="hotelSearch.jsp" class="ng-binding hidden">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.partners||$root.topNavIndex == $root.siteConfig.topNavEnum.club,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.hotel}"
							href="hotelSearch.jsp" class="ng-binding">酒店预订</a> <a
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
										src="js/hotel_js/qrcode1.jpg"> <a class="ng-binding">锦江旅行APP</a>
								</div>
								<div class="divider3"></div>
								<div class="qrcode">
									<img ng-src="/dist/images/qrcode2.jpg"
										src="js/hotel_js/qrcode2.jpg"> <a class="ng-binding">锦江旅行公众号</a>
								</div>
							</div>
						</div>
						<div class="divider2"></div>
						<div class="header-login">
							<!-- ngIf: !$root.isLogined -->
							<a class="btn bluebtn ng-scope" ng-if="!$root.isLogined"
								ng-click="$root.goLogin()">登录</a>
							<!-- end ngIf: !$root.isLogined -->
							<!-- ngIf: !$root.isLogined -->
							<a class="btn whitebtn ng-scope"
								href="http://hotel.bestwehotel.com/NewRegister/NewWebRegister/"
								ng-if="!$root.isLogined">注册</a>
							<!-- end ngIf: !$root.isLogined -->
						</div>
						<!-- ngIf: $root.isLogined -->

					</div>
				</div>
				<!-- header end -->
			</div>

			<!-- CONTENT OP -->

			<div class="banner cxslide">
				<div class="box">
					<ul class="banner-inner list">
						<!-- ngRepeat: banner in $root.siteConfig.bannerList.home -->
						<li ng-repeat="banner in $root.siteConfig.bannerList.home"
							class="ng-scope"><a
							style="background: url(http://static.bestwehotel.com/opt/static/chameleon/image/20180628/ab225a86-d2bc-45c4-8ebc-e1491b6b81a9.jpg) no-repeat center top"
							href="index.jsp" target="_self"></a></li>
						<!-- end ngRepeat: banner in $root.siteConfig.bannerList.home -->
					</ul>
				</div>
			</div>

			<div class="content">
				<div class="search">
					<div class="condition"
						ng-class="{'international': options.isAbroad &amp;&amp; $root.siteConfig.site_id == $root.siteEnum.WeHotel}">
						<div class="con-item" id="city-item"
							ng-class="{'open': options.isAbroad &amp;&amp; $root.siteConfig.site_id == $root.siteEnum.WeHotel}">
							<lable class="ng-binding">目的地</lable>
							<p>
								<!--<b ng-bind="selectedCityName"></b>-->
								<input type="text" id="selectCity" placeholder="请输入汉字或拼音"
									value="郴州" ng-model="selectedCityName"
									ng-change="showFilterCity(selectedCityName)"
									class="ng-pristine ng-valid">
							</p>
						</div>
						<div class="con-item">
							<lable class="ng-binding">入住日期</lable>
							<p>
								<b id="inDate">07</b><span id="inMonth">12月</span>
							</p>
							<i class="uarr"></i> <a class="search-data" id="inDatepicker"
								data-timer="1544143046185"></a>
						</div>
						<div class="con-item changeborder">
							<lable class="ng-binding">离店日期</lable>
							<p>
								<b id="outDate">08</b><span id="outMonth">12月</span>
							</p>
							<i class="uarr"></i> <a class="search-data" id="outDatepicker"
								data-timer="1544229446185"></a>
						</div>
						<div class="con-item kids noborder" id="selectKids">
							<lable class="ng-binding">1间客房</lable>
							<p>
								<b class="ng-binding">1</b><span>成人,</span><b class="ng-binding">0</b><span>儿童</span>
							</p>
							<i class="uarr"></i>
						</div>
						<div class="btn-search" ng-click="hotelSearch()">
							<a class="btn bluebtn" href="hotelSearch.jsp">搜索</a>
						</div>
					</div>
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
									class="ng-binding">郴州</a></li>
								<!-- end ngRepeat: city in allCities.otaCitys | filter:{cityName:selectedCityName} -->
							</ul>
							<ul>
								<!-- ngRepeat: city in allCities.otaCitys | filter:{pinyin:selectedCityName} -->
							</ul>
							<p class="tit">国际城市</p>
							<ul>
								<!-- ngRepeat: city in allCities.overseasOtaCitys | filter:{cityName:selectedCityName} -->
							</ul>
							<ul>
								<!-- ngRepeat: city in allCities.overseasOtaCitys | filter:{pinyin:selectedCityName} -->
							</ul>
						</div>
					</div>
					<!--城市筛选层end-->
					<!--关键字begin-->
					<div class="keyword">
						<i class="search-icon"></i> <input type="text"
							placeholder="商圈、地标、酒店、关键字" id="key_input"
							class="search-keyword-input ng-pristine ng-valid"
							ng-model="params.keyword" ng-keyup="keywordSearch()"
							ng-click="keywordSearch()" ng-enter="keywordSearch()">
					</div>
					<!--关键字end-->
					<!-- 显示城市选择器面板 -->
					<div class="city-panel ng-isolate-scope ng-hide"
						ng-show="showCityPanel" id="city-panel" city-selector=""
						show-city-panel="options.showCityPanel"
						selected-city-name="selectedCityName" brand-name="params.brand"
						is-abroad="options.isAbroad"
						is-oversea-city="options.isOverseaCity"
						after-callback="queryDefaultKeyword()">
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

				<div class="infomation">
					<h1>
						<p class="ng-binding">WeHotel连接美好生活</p>
					</h1>
				</div>
				<!-- ngInclude: $root.siteConfig.footer_url -->
				<jsp:include page="footer.jsp" />
			</div>
		</div>

		<script src="js/hotel_js/siteConfig.js"></script>

		<script src="js/hotel_js/vendor.js"></script>

		<script src="js/hotel_js/wehotel.js"></script>

		<div id="inDatepickerBox" class="date-mainBox" style="display: none;">
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
		<div id="outDatepickerBox" class="date-mainBox" style="display: none;">
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
</body>
</html>