<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!-- saved from url=(0066)http://hotel.bestwehotel.com/Order/Success/?orderCode=102132081400 -->
<html ng-app="wehotelApp" class="ng-scope">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/bookSucees.css">
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

<title>锦江国际 - WeHotel</title>


<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="http://hotel.bestwehotel.com/favicon.ico"
	type="image/x-icon">
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/main.min.css">
<!-- EOF CSS INCLUDE -->
<style type="text/css">
.amap-container {
	cursor: url(https://webapi.amap.com/theme/v1.3/openhand.cur), default;
}

.amap-drag {
	cursor: url(https://webapi.amap.com/theme/v1.3/closedhand.cur), default;
}
</style>
</head>
<body ng-controller="successController" ng-init="init()"
	ng-class="{&#39;plateno&#39;:$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<!-- ngInclude: $root.siteConfig.success.template_url -->
	<div class="container ng-scope"
		ng-include="$root.siteConfig.success.template_url">
		<div class="wehotel success ng-scope">
		<div class="header ng-scope" ng-include="$root.siteConfig.header_url">
				<div class="header-center ng-scope">
					<div class="logo" >
						<a href="webIndex"><img alt="logo"
							src="images/login/headerlogo.png"></a>
					</div>
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<div class="navigation ng-scope" >
						<a href="webIndex" class="ng-binding active">酒店首页</a> <a
							href="hotelSearch.jsp">酒店预订</a> <a href="hotelOrders"
							class="ng-binding">会员中心</a>
					</div>
					<div class="header-action clearfix">
								<div class="header-logined">
									<a class="logined">我的会员
										<div class="arrow arrow-down"></div>
									</a>
									<ul id="logined_box" class="logined_box">
										<li class="unit_box"><label>会员层级:</label> <span>We普卡</span>
										</li>
										<li class="unit_box"><label>卡号:</label> <span>${sessionScope.userSession.phone}</span>
										</li>
										<li class="member_dealing_unit"><a href="hotelOrders.jsp">我的订单</a>
										</li>
										<li class="member_dealing_unit"><a href="#">我的账户</a></li>
										<li class="member_dealing_unit"><a
											class="logout ng-binding" id="logout">【退出】</a></li>
										<li class="enter_club"><a href="hotelOrders.jsp">进入会员中心
												&gt; &gt;</a></li>
									</ul>
								</div>
					</div>
				</div>
				<!-- header end -->
			</div>

			<!-- CONTENT OP -->

			<div class="container clearfix">
				<div class="left">
					<div class="title clearfix">
						<div class="icon"></div>
						<div class="info">
							谢谢，预订已成功！您的订单号为<span class="ng-binding">${ordersInfo.orderNo}</span>
						</div>
						<div class="wish ng-binding">感谢您选择WeHotel！祝您出行愉快！</div>
					</div>
					<div class="content">
						<p>
							<label>酒店名称：</label><span class="ng-binding">${ordersInfo.hotelName}【${ordersInfo.hotelType}酒店】</span>
						</p>
						<p>
							<label>酒店地址：</label><span class="ng-binding">${ordersInfo.address}</span>
						</p>
						<p>
							<label>入住时间：</label><span class="ng-binding"><fmt:formatDate
									value="${ordersInfo.checkInDate}" pattern="yyyy-MM-dd" /></span>
						</p>
						<p>
							<label>离店时间：</label><span class="ng-binding"><fmt:formatDate
									value="${ordersInfo.checkOutDate}" pattern="yyyy-MM-dd" /></span>
						</p>
						<p>
							<label>保留时间：</label><span class="ng-binding">
									<c:choose>
										<c:when test="${ordersInfo.payStatus == '已付款'}">
											您已付款，该房将整晚保留
										</c:when>
										<c:otherwise>
										<fmt:formatDate value="${ordersInfo.checkInDate}" pattern="yyyy-MM-dd" />
										 19:00
										</c:otherwise>
									</c:choose>
									 </span>
						</p>
						<p>
							<label>预订房型：</label><span class="ng-binding">${ordersInfo.valueName}</span>
						</p>
						<p>
							<label>费用总计：</label><span class="total-price ng-binding">￥${ordersInfo.payAmount}</span>
						</p>
					</div>
					<div class="buttons">
						<a href="lookOrder?orderId=${ordersInfo.id}"><button  class="">查看订单</button></a>
						<button class="continue" ng-click="continueBookHotel()"><a href="webHotelDatail?hotelId=${ordersInfo.hotelId}">继续预订</a></button>
					</div>
				</div>
				<div class="right">
					<div class="section">
						<div class="map amap-container" id="mini_map_box"
							style="background: rgb(252, 249, 242);">
							<object
								style="display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"
								type="text/html"
								data="./锦江国际 - WeHotel_files/saved_resource.html"></object>
							<div class="amap-maps">
								<div class="amap-drags" style="">
									<div class="amap-layers" style="transform: translateZ(0px);">
										<div class="amap-markers"
											style="position: absolute; z-index: 120; top: 105px; left: 139px;">
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
													<img src="./锦江国际 - WeHotel_files/mark_bs.png"
														style="width: 19px; height: 33px; top: 0px; left: 0px;">
												</div>
											</div>
										</div>
										<canvas class="amap-layer" width="347" height="262"
											style="position: absolute; z-index: 0; transform-origin: 173.5px 131px 0px; transform: scale3d(0.8, 0.8, 1); top: -26px; left: -35px; height: 262px; width: 347px;"></canvas>
										<div class="amap-e" style="z-index: 11; opacity: 1;">
											<div class="amap-custom amap-indoor-map">
												<div class="floor-outline-image-con"></div>
												<div class="floor-image-con"></div>
												<div class="highlight-image-con"></div>
												<div class="label-image-con"></div>
											</div>
										</div>
										<canvas class="amap-labels" draggable="false"
											style="position: absolute; z-index: 99; height: 210px; width: 278px; top: 0px; left: 0px;"
											width="556" height="420"></canvas>
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
								src="./锦江国际 - WeHotel_files/logo@2x.png"></a>
							<div class="amap-copyright" style="display: none;"></div>
						</div>
						<div class="location">酒店位置</div>
					</div>
					<!-- ngIf: params.rights.length>0 -->
					<div class="section ng-scope" ng-if="params.rights.length&gt;0">
						<span class="tip_label_text ng-binding">您是我们的We普卡会员，可享受的会员权益：</span>
						<div class="benefit">
							<!-- ngRepeat: right in params.rights -->
							<li ng-repeat="right in params.rights"
								class="ng-binding ng-scope">7天优品住宿房费95折</li>
							<!-- end ngRepeat: right in params.rights -->
							<li ng-repeat="right in params.rights"
								class="ng-binding ng-scope">预定保留至19:00</li>
							<!-- end ngRepeat: right in params.rights -->
							<li ng-repeat="right in params.rights"
								class="ng-binding ng-scope">延迟退房至13:00</li>
							<!-- end ngRepeat: right in params.rights -->
						</div>
					</div>
					<!-- end ngIf: params.rights.length>0 -->
				</div>
			</div>

			<!-- 弹出大地图 -->
			<div class="cover" ng-class="{&#39;show&#39;: options.showConver}"
				ng-click="toggleBigMap()"></div>
			<div class="window" ng-class="{&#39;show&#39;: options.showBigMap}">
				<i class="close" ng-click="toggleBigMap()">x</i>
				<div id="hotel-big-map" style="height: 93%; width: 100%"></div>
			</div>
			<!-- CONTENT ED -->

			<!-- ngInclude: $root.siteConfig.footer_url -->
			<div class="footer ng-scope" ng-include="$root.siteConfig.footer_url">
				<div class="footer-main ng-scope">
					<aside class="links">
						<ul class="navfri clearfix">
							<!-- ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
							<li ng-if="$root.siteConfig.site_id!=$root.siteEnum.Plateno"
								class="ng-scope"><a
								href="http://hotel.bestwehotel.com/AboutUs" class="ng-binding">关于我们</a></li>
							<!-- end ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
							<!-- ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
							<li ng-if="$root.siteConfig.site_id!=$root.siteEnum.Plateno"
								class="ng-scope"><a
								href="http://hotel.bestwehotel.com/AboutUs/ContactUs.html"
								class="ng-binding">联系我们</a></li>
							<!-- end ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
							<!-- ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
							<li ng-if="$root.siteConfig.site_id!=$root.siteEnum.Plateno"
								class="ng-scope"><a
								href="http://hotel.bestwehotel.com/Career" class="ng-binding">加入我们</a></li>
							<!-- end ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
							<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
							<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
							<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
							<li><a href="http://hotel.bestwehotel.com/AboutUs/Help.html"
								class="ng-binding">常见问题</a></li>
							<li><a
								href="http://hotel.bestwehotel.com/AboutUs/UserExperience.html"
								class="ng-binding">用户体验反馈</a></li>
						</ul>
					</aside>
					<div class="ffam">
						<p class="ng-binding">Copyright©1997-2017锦江国际（集团）有限公司版权所有</p>
						<p class="ng-binding">沪ICP备14043958号-6</p>
					</div>
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<div class="footer-news ng-scope"
						ng-if="$root.siteConfig.site_id==$root.siteEnum.WeHotel">
						<ul>
							<li class="gongshang_icon"><a rel="nofollow"
								href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=2013071613131331"
								title="上海工商" target="_blank"></a></li>
							<li class="net_policeman"><a rel="nofollow"
								href="http://hotel.bestwehotel.com/Order/Success/?orderCode=102132081400"
								title="安全验证"></a></li>
							<li class="collect_credit"><a rel="nofollow"
								href="http://www.cyberpolice.cn/" title="上海网警" target="_blank"></a></li>
							<li class="verify_success"><a rel="nofollow"
								href="http://www.zx110.org/" title="征信网" target="_blank"></a></li>
						</ul>
					</div>
					<!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
				</div>
			</div>
		</div>
	</div>
	<div loading=""></div>
	<script src="./锦江国际 - WeHotel_files/siteConfig.js.下载"></script>

	<script src="./锦江国际 - WeHotel_files/vendor.min.js.下载"></script>

	<script src="./锦江国际 - WeHotel_files/wehotel.min.js.下载"></script>


</body>
</html>