<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%@page import="java.text.SimpleDateFormat"%>
<head>
<link rel="stylesheet" type="text/css"
	href="css/hotelDatail.css">
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
;transform
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
;transform
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
;-ms-transform
:rotate(360deg)
;-webkit-transform
:rotate(360deg)
;transform
:rotate(360deg)
}
}
</style>
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
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/hotelDatail.css">
<!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="js/hotelDatail_js/tongji.js"></script>
<script type="text/javascript" src="js/hotelDatail_js/maps"></script>
<script language="JavaScript" type="text/javascript"> 
function GetDateStr(AddDayCount) { 
	var dd = new Date(); 
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
	var y = dd.getFullYear(); 
	var m = dd.getMonth()+1;//获取当前月份的日期 
	var d = dd.getDate(); 
	return y+"-"+m+"-"+d; 
} 

$(function(){
	alert(GetDateStr(1));
})
</script>
</head>
<body ng-controller="hotelDetailController" ng-init="init()"
	ng-class="{'plateno':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<%
		
		Date d = new Date();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String now = df.format(d);
		
	%>

	<!-- ngInclude: $root.siteConfig.hotelDetail.template_url -->
	<div class="container ng-scope"
		ng-include="$root.siteConfig.hotelDetail.template_url">
		<div class="wehotel hoteldetail ng-scope">
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
										src="images/hotelDatail/qrcode1.jpg"> <a
										class="ng-binding">锦江旅行APP</a>
								</div>
								<div class="divider3"></div>
								<div class="qrcode">
									<img ng-src="/dist/images/qrcode2.jpg"
										src="images/hotelDatail/qrcode2.jpg"> <a
										class="ng-binding">锦江旅行公众号</a>
								</div>
							</div>
						</div>
						<div class="divider2"></div>
						<div class="header-login">
							<!-- ngIf: !$root.isLogined -->
							<!-- ngIf: !$root.isLogined -->
						</div>
						<!-- ngIf: $root.isLogined -->
						<div class="header-logined ng-scope" ng-if="$root.isLogined">
							<a class="logined ng-binding">注册会员
								<div class="arrow"></div>
							</a>
							<ul id="logined_box" class="logined_box">
								<li class="unit_box"><label class="horizantal ng-binding">会员层级:</label>
									<div class="horizantal ng-binding" id="memberLevel">We普卡</div>
								</li>
								<li class="unit_box"><label
									class="horizantal blocks1 ng-binding">卡号:</label>
									<div class="number horizantal ng-binding" id="memberCardNo">31127947837</div>
								</li>
								<li class="unit_box"><label class="horizantal ng-binding">积分:</label>
									<div class="number horizantal ellipsis ng-binding"
										id="memberScore">0</div> <a
									class="exchange_btn horizantal ng-binding" title="兑换"
									href="http://mall.bestwehotel.com/" target="_blank">【兑换】</a></li>
								<li class="member_dealing_unit"><a href="#"
									class="ng-binding">我的优惠券</a></li>
								<li class="member_dealing_unit"><a href="hotelOrders.jsp"
									class="ng-binding">我的订单</a></li>
								<li class="member_dealing_unit"><a href="#"
									class="ng-binding">我的账户</a></li>
								<li class="member_dealing_unit"><a
									class="logout ng-binding" id="logout" ng-click="$root.logout()">【退出】</a>
								</li>
								<li class="enter_club_center_btn yahei" id="EnterClub"><a
									href="#" class="ng-binding">进入会员中心 &gt; &gt;</a></li>
							</ul>
						</div>
						<!-- end ngIf: $root.isLogined -->

					</div>
				</div>
				<!-- header end -->
			</div>
			<!-- CONTENT OP -->

			<div class="content">
				<div class="crumbs">
					<a href="index.jsp" class="ng-binding"><i
						class="icon-hotel_home"></i>首页</a> &gt; <a href="hotelSearch.jsp"
						class="ng-binding">酒店列表</a> &gt; <a class="active ng-binding">${hotel.hotelName}</a>
				</div>
				<div class="hotel-info">
					<!--滚动图-->
					<div class="hotelInfo-slid">
						<div class="slideimg">
							<!-- ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: block;">
								<img
									ng-src="http://images.bestwehotel.com/images/4f4ac10fac9d553e_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/4f4ac10fac9d553e_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/979349956c3f26f1_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/979349956c3f26f1_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/8ff1a5e871891049_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/8ff1a5e871891049_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/8ff1a5e871891049_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/8ff1a5e871891049_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/55a67b052400be2f_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/55a67b052400be2f_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/4bcff28a3f88d111_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/4bcff28a3f88d111_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/e547b05b4a8f110d_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/e547b05b4a8f110d_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/8ff1a5e871891049_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/8ff1a5e871891049_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/45b8a5bd64f4d032_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/45b8a5bd64f4d032_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/e81893b2512ae3e4_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/e81893b2512ae3e4_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img ng-src="http://images.plateno.com/images/inn/17lE3fDy0D"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/17lE3fDy0D.jpg" width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/e547b05b4a8f110d_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/e547b05b4a8f110d_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/bdfb20c3868f985a_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/bdfb20c3868f985a_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/6c88c4d8efacb0b9_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/6c88c4d8efacb0b9_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="bigimg ng-scope"
								ng-style="{'display':$index==0?'block':'none'}"
								ng-repeat="image in hotelImages" style="display: none;">
								<img
									ng-src="http://images.bestwehotel.com/images/e547b05b4a8f110d_640_480.jpg"
									onerror="this.parentNode.removeChild(this)"
									src="images/hotelDatail/e547b05b4a8f110d_640_480.jpg"
									width="100%">
							</div>
							<!-- end ngRepeat: image in hotelImages -->
							<div class="smallimg">
								<ul class="list" style="width: 1260px;">
									<!-- ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope on"
										style="opacity: 1;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/4f4ac10fac9d553e_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/4f4ac10fac9d553e_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/979349956c3f26f1_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/979349956c3f26f1_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/8ff1a5e871891049_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/8ff1a5e871891049_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/8ff1a5e871891049_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/8ff1a5e871891049_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/55a67b052400be2f_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/55a67b052400be2f_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/4bcff28a3f88d111_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/4bcff28a3f88d111_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/e547b05b4a8f110d_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/e547b05b4a8f110d_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/8ff1a5e871891049_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/8ff1a5e871891049_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/45b8a5bd64f4d032_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/45b8a5bd64f4d032_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/e81893b2512ae3e4_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/e81893b2512ae3e4_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img ng-src="http://images.plateno.com/images/inn/17lE3fDy0D"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/17lE3fDy0D.jpg" width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/e547b05b4a8f110d_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/e547b05b4a8f110d_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/bdfb20c3868f985a_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/bdfb20c3868f985a_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/6c88c4d8efacb0b9_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/6c88c4d8efacb0b9_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img
												ng-src="http://images.bestwehotel.com/images/e547b05b4a8f110d_640_480.jpg"
												onerror="this.parentNode.removeChild(this)"
												src="images/hotelDatail/e547b05b4a8f110d_640_480.jpg"
												width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
								</ul>
							</div>
							<a class="bIcon btnLeft" style="cursor: auto; opacity: 0.3;"></a>
							<a class="bIcon btnRight" style="cursor: pointer; opacity: 1;"></a>
							<!-- ngIf: hotelInfo.videoUrl -->
						</div>
					</div>

					<div class="hotelInfo-main">
						<div class="hotelInfo-main-section">
							<h1 class="ng-binding">${hotel.hotelName}</h1>
							<!-- ngIf: 0 -->
							<p class="clearfix">
								<!-- ngRepeat: label in params.labels -->
								<span class="tag ng-binding ng-scope"
									ng-repeat="label in params.labels">${hotel.roomAlias}</span>
								<!-- end ngRepeat: label in params.labels -->
							</p>
							<address>
								<p class="ng-binding">地址：${hotel.address}</p>
								<p class="ng-binding">电话：${hotel.phone}</p>
							</address>
							<!--评分-->
							<div class="userStar">
								<p class="score ng-binding">
									<b class="ng-binding">${hotel.score}/5分</b>
								</p>
								<ul class="comment-level ng-binding"
									ng-bind-html="entireScoreVO.starsHtml | html">
									<li class="star_full"></li>
									<li class="star_full"></li>
									<li class="star_full"></li>
									<li class="star_full"></li>
									<li class="star_half"></li>
								</ul>
								<!--<ul class="comment-level"> ng-show=""
                                <li class="star_full"></li>
                                <li class="star_full"></li>
                                <li class="star_full"></li>
                                <li class="star_full"></li>
                                <li class="star_full"></li>
                            </ul>-->
							</div>
						</div>
						<div class="hotelInfo-main-tips">
							<p class="ng-binding">酒店简介：</p>
							<p ng-bind-html="hotelInfo.description[0]" class="ng-binding">
								${hotel.details}
								</p>
							<p></p>
						</div>
					</div>
					<!--地图-->
					<div class="hotelInfo-map amap-container" id="mini_map_box"
						style="position: relative; background: rgb(252, 249, 242) none repeat scroll 0% 0%;">
						<object
							style="display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"
							type="text/html" data="images/hotelDatail/a"></object>
						<div class="amap-maps">
							<div class="amap-drags" style="">
								<div class="amap-layers" style="transform: translateZ(0px);">
									<div class="amap-markers"
										style="position: absolute; z-index: 120; top: 170px; left: 135px;">
										<div class="amap-marker"
											style="top: -31px; left: -9px; z-index: 100; transform: rotate(0deg); transform-origin: 9px 31px 0px; display: block;">
											<div class="amap-marker-content" style="opacity: 1;">
												<div>
													<div
														style="font-family: tahoma; font-size: 18px; color: #FFF; width: 26px; height: 30px; text-align: center; background: url(/dist/images/icon_hotel_list.png) no-repeat scroll -173px -269px transparent;"></div>
												</div>
											</div>
										</div>
										<div class="amap-marker"
											style="top: 0px; left: 0px; z-index: 100; transform: rotate(0deg); transform-origin: 0px 0px 0px; display: none;">
											<div class="amap-icon"
												style="position: absolute; width: 19px; height: 33px; opacity: 1;">
												<img src="images/hotelDatail/mark_bs.png"
													style="width: 19px; height: 33px; top: 0px; left: 0px;">
											</div>
										</div>
									</div>
									<canvas class="amap-layer" width="337" height="425"
										style="position: absolute; z-index: 0; transform-origin: 168.5px 212.5px 0px; transform: scale3d(0.8, 0.8, 1); top: -43px; left: -34px; height: 425px; width: 337px;"></canvas>
									<div class="amap-e" style="z-index: 11; opacity: 1;">
										<div class="amap-custom amap-indoor-map">
											<div class="floor-outline-image-con"></div>
											<div class="floor-image-con"></div>
											<div class="highlight-image-con"></div>
											<div class="label-image-con"></div>
										</div>
									</div>
									<canvas class="amap-labels" draggable="false" width="540"
										height="680"
										style="position: absolute; z-index: 99; height: 340px; width: 270px; top: 0px; left: 0px;"></canvas>
								</div>
								<div class="amap-overlays" style=""></div>
							</div>
						</div>
						<div style="display: none;"></div>
						<div class="amap-controls">
							<div class="amap-indoormap-floorbar-control"
								style="display: none;"></div>
						</div>
						<a class="amap-logo" href="http://gaode.com/" target="_blank"><img
							src="images/hotelDatail/logo2x.png"></a>
						<div class="amap-copyright" style="display: none;"></div>
					</div>
				</div>
				<div class="hotel-room"
					ng-class="{'international': options.isAbroad &amp;&amp; $root.siteConfig.site_id == $root.siteEnum.WeHotel}">
					<div class="room-date">
						<div class="room-date-item">
							<label class="ng-binding">入住日期</label> <input type="text"
								placeholder="入住日期" class="input-date" id="checkInDate"
								value="<%=now %>" 
								data-timer="1544112000000">
						</div>
						<div class="room-date-item">
							<label class="ng-binding">离店日期</label> <input type="text"
								placeholder="离店日期" class="input-date" id="checkOutDate"
								value="${dayBefore}"
								data-timer="1544198400000">
						</div>

						<div class="kids room-date-item hide"
							ng-class="{'hide': !options.isAbroad || $root.siteConfig.site_id != $root.siteEnum.WeHotel}"
							id="selectKids">
							<label>入住详情</label>
							<div class="fake-input ng-binding">
								1<span>成人</span>，0<span>儿童</span>
							</div>
						</div>

						<p class="total-date ng-binding">共1晚</p>

						<a class="btn bluebtn ng-binding" ng-click="queryRooms()"
							ng-class="{'disabled':params.isLoading==true}">确认修改</a>
					</div>

					<!-- 显示成人儿童选择器面板 -->
					<div class="kids-box ng-isolate-scope ng-hide" id="kids-box"
						ng-show="showKidsPanel" kids-selector=""
						show-kids-panel="options.showKidsPanel" extend-data="extendData"
						max-age="maxAge">
						<div class="section" onselectstart="return false;">
							<div class="row">
								<label>房间数:</label>
								<div class="number">
									<i ng-class="{'disabled': extendData.rooms &lt; 2}"
										ng-click="changeRoom(-1)" class="disabled">-</i><span
										class="ng-binding">1</span><i
										ng-class="{'disabled': (extendData.rooms &gt; 2)}"
										ng-click="changeRoom(1)">+</i>
								</div>
							</div>
							<div class="row">
								<label>成人数:</label>
								<div class="number">
									<i ng-class="{'disabled': extendData.adults &lt; 2}"
										ng-click="changeAdult(-1)" class="disabled">-</i><span
										class="ng-binding">1</span><i
										ng-class="{'disabled': (extendData.adults + extendData.children &gt; 3)}"
										ng-click="changeAdult(1)">+</i>
								</div>
							</div>
							<div class="row">
								<label>儿童数:</label>
								<div class="number">
									<i ng-class="{'disabled': extendData.children &lt; 1}"
										ng-click="changeChild(-1)" class="disabled">-</i><span
										class="ng-binding">0</span><i
										ng-class="{'disabled': (extendData.adults + extendData.children &gt; 3)}"
										ng-click="changeChild(1)">+</i>
								</div>
							</div>
						</div>


						<!-- ngIf: extendData.children > 0 -->

						<!-- ngIf: extendData.children > 1 -->

						<!-- ngIf: extendData.children > 2 -->

						<div class="section">
							<div class="row">
								<a class="btn bluebtn" ng-click="showKidsPanel = false">确定</a>
								<!--<a class="cancel">取消</a>-->
							</div>
						</div>
					</div>

					<div class="room-title">
						<span class="room-title-first ng-binding">房型</span> <span
							class="ng-binding">早餐</span> <span class="ng-binding">取消政策</span>
						<span class="ng-binding">人数上限</span> <span class="ng-binding">房价</span>
					</div>
					<!--尊享会banner-->
					<!-- ngIf: hotelInfo.isPrivilegeMemberHotel == 1 -->
					<!--房型列表-->
					<c:forEach items="${housesList}" var="houses">
					<div class="room-list">
						<ul>
							<!-- ngRepeat: room in roomList -->
							<li class="room-box ng-scope" ng-repeat="room in roomList" id="">
								<table class="room-table" width="100%" cellspacing="0"
									cellpadding="0">
									<tbody>
										<tr class="table-content">
											<td width="245px;">
												<table cellspacing="0" cellpadding="0">
													<tbody>
														<tr>
															<td>
																<div class="room-photo">
																	<div class="pic">
																		<img
																			onerror="this.parentNode.removeChild(this)"
																			src="${houses.roomImage}">
																	</div>
																	<div class="room-photo-section">
																		<span class="ng-binding">${houses.valueName}</span>
																		<div class="room-photo-detail">
																			<a class="ng-binding">详情</a>
																			<ul>
																				<!-- ngIf: room.bedTypeDesc -->
																				<li ng-if="room.bedTypeDesc"
																					class="ng-binding ng-scope">床型:
																						<c:choose>
																						   <c:when test="${fn:contains(houses.valueName,'双')}">  
																						        双床   ${houses.bedArea}
																						   </c:when>
																						   <c:otherwise> 
																						    大床
																						   </c:otherwise>
																						</c:choose>
																						${houses.bedArea}																 </li>
																				<!-- end ngIf: room.bedTypeDesc -->
																				<!-- ngIf: room.area -->
																				<li ng-if="room.area" class="ng-binding ng-scope">面积：${houses.roomSize}</li>
																				<!-- end ngIf: room.area -->
																				<!-- ngIf: room.endFloor -->
																				<li ng-if="room.endFloor"
																					class="ng-binding ng-scope">楼层：${houses.floor}</li>
																				<!-- end ngIf: room.endFloor -->
																				<li class="ng-binding">
																					<c:if test="${houses.isHavingbed ==0}">可以加床</c:if>
																					<c:if test="${houses.isHavingbed ==1}">不可以加床</c:if>
																				</li>
																				<li class="ng-binding">${houses.window}</li>
																				<!-- ngIf: hotelInfo.nonSmokingRoomsNum!=null -->
																			</ul>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
											
											<td valign="top">
												<div class="room-detail">
													<table width="100%" cellspacing="0" cellpadding="0">
													<c:forEach items="${roomsList}" var="rooms">
														<c:if test="${houses.id == rooms.houseId}">
														<tbody>
															<!--价格列表-->
															<!-- ngRepeat: rate in room.rate -->
															<!-- ngIf: room.showAllPlan || $index < 5 -->
															<tr ng-repeat="rate in room.rate"
																ng-if="room.showAllPlan || $index &lt; 5"
																class="ng-scope">
																<td width="230px;">
																	<p class="ng-binding">
																		${rooms.roomTitle} <i class="icon-gift ng-hide"
																			ng-show="rate.promotionTag&amp;&amp;rate.promotions.length&gt;0">
																			<a class="gift-detail"> <span
																				class="section ng-binding">会员本人入住酒店，可赠送礼包 </span> <span
																				class="section ng-binding"></span>
																		</a>
																		</i>
																	</p>
																</td>
																<td>
																	<p class="ng-binding">
																		<c:if test="${rooms.isbreakfast ==1}">不含早餐</c:if>
																		<c:if test="${rooms.isbreakfast ==2}">含单早</c:if>
																		<c:if test="${rooms.isbreakfast ==3}">含双早</c:if>
																	</p>
																</td>
																<td class="policy">
																	<p class="ng-binding">
																		<c:if test="${rooms.cancellationPolicy ==0}">限时取消</c:if>
																		<c:if test="${rooms.cancellationPolicy ==1}">免费取消</c:if>
																	</p> <span
																	class="show ng-binding" style="width: 300px">预付房费后，在2018年12月07日
																		12:00前可免费取消订单/申请退款，逾期取消或变更，将收取首晚房费。</span>
																</td>
																<td>
																	<p class="ng-binding">
																		<i class="person-icon"
																			ng-class="{'single':room.maxCheckIn==1}">
																			</i><c:if test="${rooms.number ==1}">x1</c:if>
																				<c:if test="${rooms.number ==2}">x2</c:if>
																				<c:if test="${rooms.number ==3}">x3</c:if>
																	</p>
																</td>
																<td>
																	<p class="price">
																		<!-- ngIf: hotelInfo.isPrivilegeMemberHotel == 1 -->
																		￥<span class="ng-binding">${rooms.price}</span><i
																			class="ng-binding"></i>
																	</p>
																</td>
																<td>
																	<div class="room-link">
																		<!--<a class="surplus" ng-if="rate.totalInventory > 0 && rate.totalInventory < 5"><i class="icon-danger"></i>仅余{{rate.totalInventory}}间</a>-->
																		<a class="btn redbtn ng-binding" href="newOrdel.jsp">立即预订</a>
																		<!--<a class="btn redbtn" ng-class="{'disabled': rate.bookingType != 0}" ng-click="redirectNewOrder(rate,room)">{{(rate.bookingType == 0 ? (params.memberLevel == 9?'HOTELDETAIL_ORDER_BUTTON_LEAVE9_TEXT': 'HOTELDETAIL_ORDER_BUTTON_TEXT') : 'HOTELDETAIL_ORDER_BUTTON_FULL_TEXT') | T}}</a>-->
																	</div>
																</td>
															</tr>
															
														</tbody>
														</c:if>
														</c:forEach>
													</table>
												</div> <!--点击展开更多房型--> <!-- ngIf: room.rate.length > 5 -->
											</td>
										
										</tr>
									</tbody>
									
								</table>
							</li>
							
						</ul>
					</div>
					</c:forEach>
				</div>
			</div>

			<div class="detail-tab">
				<div class="nav" id="tab-nav">
					<ul class="nav-tabs">
						<li class="active"><a class="scroll-five"><span
								class="ng-binding">酒店信息</span></a></li>
					</ul>
				</div>
				<div class="wapper-content tab-content" id="tab-con">
					<div class="tab-pane">
						<h4 class="ng-binding">酒店信息</h4>
						<p ng-show="hotelInfo.lastRetentionTime"
							class="ng-binding ng-hide">
							<b class="ng-binding">预订保留：</b>预订保留到
						</p>
						<p class="ng-binding">
							<b class="ng-binding">入住时间：</b>中午 13:00
						</p>
						<p class="ng-binding">
							<b class="ng-binding">退房时间：</b>中午 12:00
						</p>
						<p>
							<b class="ng-binding">酒店介绍：</b>
						</p>
						<p ng-bind-html="hotelInfo.description[0]" class="ng-binding">
							${hotel.details}	</p>
						<p></p>
					</div>
					<!-- ngIf: hotelInfo.policy[0] -->
					<div class="tab-pane ng-scope" ng-if="hotelInfo.policy[0]">
						<h4 class="ng-binding">酒店政策</h4>
						<p ng-bind-html="hotelInfo.policy[0]" class="ng-binding">${hotel.hotelPolicy}</p>
					</div>
					<!-- end ngIf: hotelInfo.policy[0] -->
					<!-- ngIf: hotelDetailInfo.facilities.facList.length>0 -->
					<div class="tab-pane ng-scope"
						ng-if="hotelDetailInfo.facilities.facList.length&gt;0">
						<h4 class="ng-binding">酒店设施</h4>
						<ul class="list">
							<!-- ngRepeat: fac in hotelDetailInfo.facilities.facList -->
							<!-- ngIf: fac.facType==0 -->
							<li ng-repeat="fac in hotelDetailInfo.facilities.facList"
								ng-if="fac.facType==0" class="ng-binding ng-scope">${hotel.facilitiesName}</li>
							<!-- end ngIf: fac.facType==0 -->
							
						</ul>
					</div>
					<!-- end ngIf: hotelDetailInfo.facilities.facList.length>0 -->
					<!-- ngIf: hotelDetailInfo.facilities.serList.length>0 -->
					<div class="tab-pane ng-scope"
						ng-if="hotelDetailInfo.facilities.serList.length&gt;0">
						<h4 class="ng-binding">酒店服务</h4>
						<ul class="list">
							<!-- ngRepeat: ser in hotelDetailInfo.facilities.serList -->
							<li ng-repeat="ser in hotelDetailInfo.facilities.serList"
								class="ng-binding ng-scope">${hotel.hotelservices}</li>
							<!-- end ngRepeat: ser in hotelDetailInfo.facilities.serList -->
							
						</ul>
					</div>
					<!-- end ngIf: hotelDetailInfo.facilities.serList.length>0 -->
					<!--评论-->
					<!-- ngIf: params.commentLength>0 -->
					<div class="tab-pane ng-scope" ng-if="params.commentLength&gt;0">
						<h4 class="ng-binding">用户评论</h4>
						<div class="review-show">
							<div class="review-star">
								<p class="score ng-binding">
									<b class="ng-binding">4.7</b>/5分
								</p>
								<p id="allReview" class="ng-binding">403 条真实评论</p>
							</div>
							<!--星星循环一定得有5个li，半星Class为star_half-->
							<div class="comment-box">
								<!-- ngRepeat: item in entireScoreVO.evalDimensionVOs -->
								<div class="comment-main ng-scope"
									ng-repeat="item in entireScoreVO.evalDimensionVOs">
									<span class="comment-item ng-binding">服务态度</span>
									<ul class="comment-level ng-binding"
										ng-bind-html="item.starsHtml | html">
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
									</ul>
								</div>
								<!-- end ngRepeat: item in entireScoreVO.evalDimensionVOs -->
								<div class="comment-main ng-scope"
									ng-repeat="item in entireScoreVO.evalDimensionVOs">
									<span class="comment-item ng-binding">环境卫生</span>
									<ul class="comment-level ng-binding"
										ng-bind-html="item.starsHtml | html">
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
									</ul>
								</div>
								<!-- end ngRepeat: item in entireScoreVO.evalDimensionVOs -->
								<div class="comment-main ng-scope"
									ng-repeat="item in entireScoreVO.evalDimensionVOs">
									<span class="comment-item ng-binding">设施设备</span>
									<ul class="comment-level ng-binding"
										ng-bind-html="item.starsHtml | html">
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
									</ul>
								</div>
								<!-- end ngRepeat: item in entireScoreVO.evalDimensionVOs -->
								<div class="comment-main ng-scope"
									ng-repeat="item in entireScoreVO.evalDimensionVOs">
									<span class="comment-item ng-binding">地理位置</span>
									<ul class="comment-level ng-binding"
										ng-bind-html="item.starsHtml | html">
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
										<li class="star_full"></li>
									</ul>
								</div>
								<!-- end ngRepeat: item in entireScoreVO.evalDimensionVOs -->
							</div>
						</div>
						<ul class="review-nav">
							<li ng-click="changeCommentType(1)"
								ng-class="{'review-select':params.commentType==1}"
								class="ng-binding review-select">全部点评 403</li>
							<li ng-click="changeCommentType(2)"
								ng-class="{'review-select':params.commentType==2}"
								class="ng-binding">好评 362</li>
							<li ng-click="changeCommentType(3)"
								ng-class="{'review-select':params.commentType==3}"
								class="ng-binding">中评 35</li>
							<li ng-click="changeCommentType(4)"
								ng-class="{'review-select':params.commentType==4}"
								class="ng-binding">差评 6</li>
						</ul>
						<ul class="user-reviewBox">
							<!--每个Li 都是一个循环-->
							<!-- ngRepeat: comment in comments -->
							<li ng-repeat="comment in comments" class="ng-scope">
								<div class="review-userImg">
									<div class="user-photo">

										<span class="user-raduis icon-hotel_user-bg hotel"></span>
									</div>
									<div class="user-name user-reviewName ng-binding">31***22</div>
								</div>
								<div class="review-comment">
									<div class="review-main">
										<p class="ng-binding">好评</p>
									</div>
									<div class="review-userStar">
										<ul class="comment-level ng-binding"
											ng-bind-html="comment.starsHtml | html">
											<li class="star_full"></li>
											<li class="star_full"></li>
											<li class="star_full"></li>
											<li class="star_full"></li>
											<li class="star_full"></li>
										</ul>
										<div class="user-time ng-binding">2018年12月</div>
									</div>
									<!-- ngIf: comment.childrenEvaluations.length>0 -->
								</div>
							</li>
							<!-- end ngRepeat: comment in comments -->
							<!-- end ngRepeat: comment in comments -->
						</ul>
						<!-- 分页组件 -->
						<!-- ngIf: pagination.pageCount > 1 -->
						<div class="pager ng-isolate-scope" hotel-pagination=""
							pagination="pagination" callback="queryHotelComment()"
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
								ng-click="goPage(item.index)" class="ng-binding ng-scope page">81</div>
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
					</div>
				</div>
			</div>

			<!-- weModal 弹窗 -->
			<div class="modal fade ng-isolate-scope" tabindex="-1"
				ng-class="{'in': showModal == true,'base-modal':params.enableMiniModal}"
				we-modal="" show-modal="options.showAlert" params="alertModal"
				callback="alertModalCallback()" on-close="closeCallback()">
				<div class="modal-dialog">
					<div class="modal-content" ng-class="params.contentClass">
						<!-- ngIf: params.enableMiniModal&&params.closeTag -->
						<!-- ngIf: params.title -->
						<div class="modal-body"
							ng-class="{'scroll-container':params.scrollContainer}">
							<div ng-bind-html="params.content | html" class="ng-binding"></div>
						</div>
					</div>
				</div>
			</div>

			<jsp:include page="footer.jsp" />
		</div>
	</div>
	<script src="js/hotelDatail_js/siteConfig.js"></script>
	<script src="js/hotelDatail_js/vendor.js"></script>
	<script src="js/hotelDatail_js/wehotel.js"></script>
</body>
</html>