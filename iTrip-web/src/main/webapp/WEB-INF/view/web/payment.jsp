<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<head>
<script type="text/javascript" src="js/payment/openPage.txt"></script>
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
<link rel="stylesheet" href="css/payment.css">
<!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="js/payment/tongji.js"></script>
</head>
<body ng-controller="paymentController" ng-init="init()"
	ng-class="{'plateno':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<!-- ngInclude: $root.siteConfig.payment.template_url -->
	<div class="container ng-scope"
		ng-include="$root.siteConfig.payment.template_url">
		<div class="wehotel payment ng-scope">
			<!-- ngInclude: $root.siteConfig.header_url -->
			<div class="header ng-scope" ng-include="$root.siteConfig.header_url">
				<!-- header begin -->
				<!-- 预览模式 OP -->
				<!-- ngIf: $root.siteConfig.isPreview -->
				<!-- 预览模式 ED -->
				<div class="header-center ng-scope">
					<div class="logo">
						<a href="webIndex"><h1
								ng-class="{'icon-we-logo':$root.siteConfig.site_id==$root.siteEnum.WeHotel,'icon-we-ptlx':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
								class="icon-we-logo"></h1></a>
					</div>
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<div class="navigation ng-scope"
						ng-if="$root.siteConfig.site_id==$root.siteEnum.WeHotel">
						<a
							ng-class="{'active': $root.topNavIndex == $root.siteConfig.topNavEnum.home,'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club }"
							href="webIndex" class="ng-binding">酒店首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club }"
							href="#" class="ng-binding hidden">会员首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club}"
							href="hotelSearch.jsp" class="ng-binding hidden">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.partners||$root.topNavIndex == $root.siteConfig.topNavEnum.club,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.hotel}"
							href="hotelSearch.jsp" class="ng-binding">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club || $root.topNavIndex == $root.siteConfig.topNavEnum.partners }"
							href="#" class="ng-binding">会员中心</a> <a href="" target="_blank"
							class="ng-binding">积分商城</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club&amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners  ,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.partners}"
							href="#" class="ng-binding hidden">合作伙伴</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club &amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners }"
							href="" class="ng-binding hidden">关于会员</a>
					</div>
					<!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
					<div class="header-action clearfix">
						<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
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
								<!--   <li class="member_dealing_unit">
                    <a href="http://hotel.bestwehotel.com/Club/MemberCoupon/" class="ng-binding">我的优惠券</a>
                </li> -->
								<li class="member_dealing_unit"><a href="hotelOrders.jsp"
									class="ng-binding">我的订单</a></li>
								<li class="member_dealing_unit"><a href="hotelOrders.jsp"
									class="ng-binding">我的账户</a></li>
								<li class="member_dealing_unit">
									<!-- <a class="logout ng-binding" id="logout" ng-click="$root.logout()">【退出】</a> -->
									<a href="login.jsp" class="logout ng-binding" id="logout">【退出】</a>
								</li>
								<li class="enter_club_center_btn yahei" id="EnterClub"><a
									href="" class="ng-binding">进入会员中心 &gt; &gt;</a></li>
							</ul>
						</div>
						<!-- end ngIf: $root.isLogined -->

					</div>
				</div>
				<!-- header end -->
			</div>

			<!-- CONTENT OP -->
			<form action="pay" id="payOrder">
			<div class="container clearfix">
				<div class="pay-header clearfix">
					<label>订单支付</label>
					<div class="process">
						<span class="doing">填写订单</span> <i class="doing">&gt;</i> <span
							class="doing">订单支付</span> <i class="doing">&gt;</i> <span>预订成功</span>
					</div>
					<input type="hidden" name="orderId" value="${ordersInfo.id}">
				</div>
				<div class="pay-content clearfix">
					<div class="pic">
						<img ng-src="js/payment/4f4ac10fac9d553e_640_480.jpg"
							onerror="this.parentNode.removeChild(this)"
							src="${ordersInfo.roomImage}">
					</div>
					<div class="details">
					<input type="hidden" value="${ordersInfo.orderNo}" name="orderNo">
					<input type="hidden" value="${ordersInfo.hotelName}" name="hotelName">
						<p class="name ng-binding">${ordersInfo.hotelName}</p>
						<div class="detail-text">
						<input type="hidden" value="${ordersInfo.valueName}" name="valueName">
							<span class="ng-binding">${ordersInfo.valueName}</span>
							<input type="text" value="<fmt:formatDate value="${ordersInfo.checkInDate}" pattern="yyyy-MM-dd"/>" name="checkInDate">
							<input type="hidden" value="<fmt:formatDate value="${ordersInfo.checkOutDate}" pattern="yyyy-MM-dd"/>" name="checkOutDate">
							<span class="ng-binding">入住：<fmt:formatDate value="${ordersInfo.checkInDate}" pattern="yyyy-MM-dd"/></span> <span
								class="ng-binding">退房：<fmt:formatDate value="${ordersInfo.checkOutDate}" pattern="yyyy-MM-dd"/></span>
							<div class="notice">
								<i><img src="images/u=1401042970,4277631339&fm=26&gp=0.jpg"></i>您需要在30分钟内完成支付，否则订单将会被取消！
							</div>
						</div>

					</div>
					<div class="payment-price">
					<input type="text" value="${ordersInfo.payAmount}" name="payAmount">
						<p>
							应付总额：<span class="orange"><span class="number ng-binding">￥${ordersInfo.payAmount}</span></span>
						</p>
						<!-- ngIf: orderInfo.ticketRate>0 -->
					</div>
				</div>
				<div class="pay-footer">
				<a id="toPay" href="pay" target="_blank" >
					<button id="toPay" onclick="topay()">立即支付</button>
					</a>
				</div>
			</div>
			</form>
			<jsp:include page="footer.jsp" />
		</div>
	</div>
	<div loading=""></div>
	<script src="js/payment/siteConfig.js"></script>

	<script src="js/payment/vendor.js"></script>

	<script src="js/payment/wehotel.js"></script>
	<script type="text/javascript">
		function topay() {
			$("payOrder").sumbit();
		}
	</script>


</body>
</html>