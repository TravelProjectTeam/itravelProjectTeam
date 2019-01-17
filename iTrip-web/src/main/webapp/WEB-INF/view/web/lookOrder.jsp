<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<html ng-app="wehotelApp" class="ng-scope">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/lookOrder.css">
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
<title>锦江国际 - WeHotel</title>


<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="http://hotel.bestwehotel.com/favicon.ico"
	type="image/x-icon">
<link rel="stylesheet" href="css/main.min.css">
<style type="text/css">
.amap-container {
	cursor: url(https://webapi.amap.com/theme/v1.3/openhand.cur), default;
}

.amap-drag {
	cursor: url(https://webapi.amap.com/theme/v1.3/closedhand.cur), default;
}
</style>
</head>
<body ng-controller="hotelOrderDetailController" ng-init="init()"
	ng-class="{&#39;plateno&#39;:$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<div class="container ng-scope"
		ng-include="$root.siteConfig.hotelOrderDetail.template_url">
		<div class="wehotel order-detail ng-scope">

			<div class="header ng-scope" ng-include="$root.siteConfig.header_url">
				<div class="header-center ng-scope">
					<div class="logo">
						<a href="http://www.jinjiang.com/"><h1
								ng-class="{&#39;icon-we-logo&#39;:$root.siteConfig.site_id==$root.siteEnum.WeHotel,&#39;icon-we-ptlx&#39;:$root.siteConfig.site_id==$root.siteEnum.Plateno}"
								class="icon-we-logo"></h1></a>
					</div>
					<div class="navigation ng-scope"
						ng-if="$root.siteConfig.site_id==$root.siteEnum.WeHotel">
						<a
							ng-class="{&#39;active&#39;: $root.topNavIndex == $root.siteConfig.topNavEnum.home,&#39;hidden&#39;:$root.topNavIndex == $root.siteConfig.topNavEnum.club }"
							href="http://hotel.bestwehotel.com/" class="ng-binding hidden">酒店首页</a>
						<span class="clubs"
							ng-class="{&#39;hidden&#39;:$root.topNavIndex != $root.siteConfig.topNavEnum.club }">
							<a
							href="http://hotel.bestwehotel.com/Club/AboutClub/HandBook.html"
							class="ng-binding">会员俱乐部</a> <span class="about_clubs"> <!-- ngIf: !$root.isLogined || $root.primeMeb -->
								<a ng-if="$root.isLogined &amp;&amp; !$root.primeMeb"
								href="http://hotel.bestwehotel.com/Club/AboutClub/JoinPrimeClub.html"
								class="ng-binding ng-scope">尊享会</a> <!-- end ngIf: $root.isLogined && !$root.primeMeb -->
								<a
								href="http://hotel.bestwehotel.com/Club/AboutClub/GiftClub.html"
								class="ng-binding">礼享会</a>
						</span>
						</span> <a
							ng-class="{&#39;hidden&#39;:$root.topNavIndex != $root.siteConfig.topNavEnum.club}"
							href="http://hotel.bestwehotel.com/" class="ng-binding">酒店预订</a>
						<a
							ng-class="{&#39;hidden&#39;:$root.topNavIndex == $root.siteConfig.topNavEnum.partners||$root.topNavIndex == $root.siteConfig.topNavEnum.club,&#39;active&#39;:$root.topNavIndex == $root.siteConfig.topNavEnum.hotel}"
							href="http://hotel.bestwehotel.com/HotelSearch"
							class="ng-binding hidden">酒店预订</a> <a
							ng-class="{&#39;hidden&#39;:$root.topNavIndex == $root.siteConfig.topNavEnum.club || $root.topNavIndex == $root.siteConfig.topNavEnum.partners }"
							href="http://hotel.bestwehotel.com/Club/AboutClub/HandBook.html"
							class="ng-binding hidden">会员俱乐部</a> <a
							href="http://mall.bestwehotel.com/" target="_blank"
							class="ng-binding">积分商城</a> <a
							ng-class="{&#39;hidden&#39;:$root.topNavIndex != $root.siteConfig.topNavEnum.club&amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners  ,&#39;active&#39;:$root.topNavIndex == $root.siteConfig.topNavEnum.partners}"
							href="http://hotel.bestwehotel.com/Partners/#/"
							class="ng-binding">合作伙伴</a> <a
							ng-class="{&#39;hidden&#39;:$root.topNavIndex != $root.siteConfig.topNavEnum.partners }"
							href="http://hotel.bestwehotel.com/Club/AboutClub/HandBook.html"
							class="ng-binding hidden">关于会员</a>
					</div>
					<div class="header-action clearfix">
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
								<!-- ngIf: $root.user.primeMeb -->
								<li class="unit_box"><label class="horizantal ng-binding">会员层级:</label>
									<div class="horizantal ng-binding">We普卡</div></li>
								<li class="unit_box"><label
									class="horizantal blocks1 ng-binding">卡号:</label>
									<div class="number horizantal ng-binding" id="memberCardNo">31127947837</div>
								</li>
								<!--<li class="unit_box">-->
								<!--<label class="horizantal">{{'TOP_NAV_MEMBER_SCORE' | T}}:</label>-->
								<!--<div class="number horizantal ellipsis" id="memberScore">{{$root.user.score}}</div>-->
								<!--<a class="exchange_btn horizantal" title="{{'TOP_NAV_EXCHANGE' | T}}" href="{{$root.siteConfig.links.mall_url}}" target="_blank">【{{'TOP_NAV_EXCHANGE' | T}}】</a>-->
								<!--</li>-->
								<li class="member_dealing_unit"><a
									href="http://hotel.bestwehotel.com/Club/MemberCoupon/"
									class="ng-binding">我的优惠券</a></li>
								<li class="member_dealing_unit"><a
									href="http://hotel.bestwehotel.com/Order/HotelOrders"
									class="ng-binding">我的订单</a></li>
								<li class="member_dealing_unit"><a
									href="http://hotel.bestwehotel.com/Club/MemberInfo/"
									class="ng-binding">我的账户</a></li>
								<li class="member_dealing_unit"><a
									class="logout ng-binding" id="logout" ng-click="$root.logout()">【退出】</a>
								</li>
								<li class="enter_club_center_btn yahei" id="EnterClub"><a
									href="http://hotel.bestwehotel.com/Club/AboutClub/HandBook.html"
									class="ng-binding">进入会员俱乐部 &gt; &gt;</a></li>
							</ul>
						</div>
						<!-- end ngIf: $root.isLogined -->

					</div>
				</div>
				<!-- header end -->
			</div>
			<form action="pay" id="topay">
				<div class="page-center">
					<div class="center-container">
						<div class="tit">
							<h4 class="ng-binding">订单信息</h4>
						</div>
						<input type="hidden" name="orderId" value="${ordersInfo.id}">
						<div class="orderinfo">
							<div class="section td-fir">
								<p class="ng-binding">
									订单状态：<b class="green ng-binding">${ordersInfo.orderStatus}</b>
								</p>
								<p class="ng-binding">
								<input type="hidden" value="${ordersInfo.orderNo}" name="orderNo">
									订单编号：<b class="ng-binding">${ordersInfo.orderNo}</b>
								</p>
								<p class="ng-binding">
									预订日期：<b class="ng-binding"><fmt:formatDate
											value="${ordersInfo.creationDate}" pattern="yyyy-MM-dd" /></b>
								</p>
							</div>
							<div class="section td-sec">
								<p class="ng-binding">订单金额：￥${ordersInfo.payAmount}</p>
								<!-- ngIf: order.ticketRate -->
								<input type="hidden" value="${ordersInfo.payAmount}" name="payAmount">
								<p class="ng-binding">支付金额：￥${ordersInfo.payAmount}</p>
							</div>
							<div class="section td-thi">
								<div class="delete-btn">
									<!-- ngIf: order.canCancel && order.orderState == 'BOOK_SUCCESS' && !(order.outerOrderFlag == 1 && order.payState == 'PAY_SUCCESS') -->
									<a class="btn defaultbtn ng-binding ng-scope"
										ng-click="cancelOrder()"
										ng-if="order.canCancel &amp;&amp; order.orderState == &#39;BOOK_SUCCESS&#39; &amp;&amp; !(order.outerOrderFlag == 1 &amp;&amp; order.payState == &#39;PAY_SUCCESS&#39;)">取消订单</a>
									<!-- end ngIf: order.canCancel && order.orderState == 'BOOK_SUCCESS' && !(order.outerOrderFlag == 1 && order.payState == 'PAY_SUCCESS') -->
								</div>
								<div class="delete-btn">
									<!-- ngIf: (order.orderState == 'IS_SCHEDULED_ARRIVE' || order.orderState == 'CANCEL' || order.orderState == 'COMPLETED') && order.payState != 'REFUND_PROCESSING' -->
								</div>
							</div>
						</div>
						<div class="order-info-item">
						<input type="hidden" value="${ordersInfo.hotelName}" name="hotelName">
						<input type="hidden" value="${ordersInfo.valueName}" name="valueName">
							<h4 class="ng-binding">${ordersInfo.hotelName}【${ordersInfo.hotelType}酒店】</h4>
							<p class="ng-binding">房型：${ordersInfo.valueName}，${ordersInfo.count}间，共${ordersInfo.bookingDays}晚
							</p>
							<div class="address">
								<p class="ng-binding">
									酒店地址：${ordersInfo.address}
									<!-- ngIf: order.coordinate -->
									<a class="map-btn ng-binding ng-scope"
										href="http://hotel.bestwehotel.com/Order/HotelOrderDetail/?orderCode=102132081400"
										ng-click="toggleBigMap()" ng-if="order.coordinate">查看地图</a>
									<!-- end ngIf: order.coordinate -->
								</p>
								<p class="ng-binding">联系电话：${ordersInfo.phone}</p>
							</div>
						</div>
						<div class="order-info-item">
							<h4 class="ng-binding">入住信息</h4>
							<ul class="clearfix">
								<li><p class="ng-binding">
										<span class="ng-binding">入住人：</span>${ordersInfo.linkUserName}
									</p></li>
								<li><p class="ng-binding">
								<input type="hidden" value="<fmt:formatDate value="${ordersInfo.checkInDate}" pattern="yyyy-MM-dd" />" name="checkInDate">
										<span class="ng-binding">入住日期：</span>
										<fmt:formatDate value="${ordersInfo.checkInDate}"
											pattern="yyyy-MM-dd" />
									</p></li>
								<li><p class="ng-binding">
										<span class="ng-binding">手机：</span>${ordersInfo.noticePhone}
									</p></li>
								<li><p class="ng-binding">
								<input type="hidden" value="<fmt:formatDate value="${ordersInfo.checkOutDate}" pattern="yyyy-MM-dd" />" name="checkOutDate">
										<span class="ng-binding">离店日期：</span>
										<fmt:formatDate value="${ordersInfo.checkOutDate}"
											pattern="yyyy-MM-dd" />
									</p></li>
								<!-- ngIf: order.preference -->
							</ul>
							<!-- ngIf: order.lstJzOrderGift && order.lstJzOrderGift.length>0 -->
						</div>
						<div class="order-info-item">
							<h4 class="ng-binding">支付信息</h4>
							<ul>
								<li><p class="ng-binding">
										<span class="ng-binding">支付方式：</span>${ordersInfo.payType}
									</p></li>
								<li><p class="ng-binding">
										<span class="ng-binding">支付金额：</span>￥${ordersInfo.payAmount}
									</p></li>
								<li><p class="ng-binding">
										<span class="ng-binding">支付状态：</span>${ordersInfo.payStatus}
										<!-- ngIf: !order.outerOrderFlag && params.canPay -->
										<a class="btn redbtn ng-binding ng-scope"
											style="margin-left: 15px;" onclick=payOrder()>立即支付</a>
										<!-- end ngIf: !order.outerOrderFlag && params.canPay -->
									</p></li>
							</ul>
						</div>
						<div class="order-info-item"
							ng-hide="order.payType==&#39;ONLINE_PREPAID&#39;&amp;&amp;order.payState==&#39;UNPAY&#39;">
							<!--<p><b>保证金制度：</b>免费取消</p>-->
							<p class="ng-binding">
								<b class="ng-binding">取消政策：</b>可免费取消订单。
							</p>
						</div>
					</div>
				</div>
			</form>
			<div class="cover" ng-class="{&#39;show&#39;: options.showConver}"
				ng-click="toggleBigMap()"></div>
			<div class="window hotel-map"
				ng-class="{&#39;show&#39;: options.showBigMap}">
				<i class="close" ng-click="toggleBigMap()">x</i>
				<div id="hotel-big-map" style="height: 93%; width: 100%"></div>
			</div>
			<jsp:include page="footer.jsp" />
		</div>
	</div>
	<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
	<script type="text/javascript">
		function payOrder() {
			$("#topay").submit();
		}
	</script>
</body>
</html>