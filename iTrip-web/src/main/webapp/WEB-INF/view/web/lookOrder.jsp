<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
					<div class="logo" style="padding-top: 0px;">
						<a href="webIndex"><img alt="logo"
							src="images/login/headerlogo.png"></a>
					</div>
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<div class="navigation ng-scope" style="padding-top: 0px;">
						<a href="webIndex" class="ng-binding active">酒店首页</a> <a
							href="hotelSearch.jsp">酒店预订</a> <a href="hotelOrders.jsp"
							class="ng-binding">会员中心</a>
					</div>
					<div class="header-action clearfix">
						<div class="fl custom-service">
							客服热线：<b>400-820-9999</b>
						</div>
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
										<c:if test="${ ordersInfo.payStatus !=  '已付款'}">
											<a class="btn redbtn ng-binding ng-scope"
											style="margin-left: 15px;" onclick=payOrder()>立即支付</a>
										</c:if>
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