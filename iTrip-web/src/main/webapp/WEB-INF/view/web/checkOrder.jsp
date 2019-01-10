<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<head>
<script type="text/javascript" src="js/checkOrder_js/openPage.txt"></script>
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

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="http://hotel.bestwehotel.com/favicon.ico"
	type="image/x-icon">
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/checkOrder.css">
<!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="js/checkOrder_js/tongji.js"></script>
<script type="text/javascript" src="js/checkOrder_js/maps"></script>
<style type="text/css">
.amap-container {
	cursor: url(https://webapi.amap.com/theme/v1.3/openhand.cur), default;
}

.amap-drag {
	cursor: url(https://webapi.amap.com/theme/v1.3/closedhand.cur), default;
}
</style>
</head>
<body class="ng-scope">

	<!-- ngInclude: $root.siteConfig.hotelOrderDetail.template_url -->
	<div class="container ng-scope"
		ng-include="$root.siteConfig.hotelOrderDetail.template_url">
		<div class="wehotel order-detail ng-scope">

			<!-- header begin -->
			<!-- ngInclude: $root.siteConfig.header_url -->
			<div class="header ng-scope" ng-include="$root.siteConfig.header_url">
				<!-- header begin -->
				<!-- 预览模式 OP -->
				<!-- ngIf: $root.siteConfig.isPreview -->
				<!-- 预览模式 ED -->
				<div class="header-center ng-scope">
					<div class="logo">
						<a href="webIndex"></a>
					</div>
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<div class="navigation ng-scope"
						ng-if="$root.siteConfig.site_id==$root.siteEnum.WeHotel">
						<a href="hotel.jsp" class="ng-binding hidden">酒店首页</a> <a
							href="index.jsp" class="ng-binding">会员首页</a> <a
							href="hotelSearch.jsp" class="ng-binding">酒店预订</a> <a
							href="hotelSearch.jsp" class="ng-binding hidden">酒店预订</a> <a
							href="" class="ng-binding hidden">会员中心</a> <a href=""
							target="_blank" class="ng-binding">积分商城</a> <a href=""
							class="ng-binding">合作伙伴</a> <a href="" class="ng-binding">关于会员</a>
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
									<img src="js/checkOrder_js/qrcode1.jpg"> <a
										class="ng-binding">锦江旅行APP</a>
								</div>
								<div class="divider3"></div>
								<div class="qrcode">
									<img src="js/checkOrder_js/qrcode2.jpg"> <a
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
									class="exchange_btn horizantal ng-binding" title="兑换" href=""
									target="_blank">【兑换】</a></li>
								<li class="member_dealing_unit"><a href=""
									class="ng-binding">我的优惠券</a></li>
								<li class="member_dealing_unit"><a href="hotelOrders.jsp"
									class="ng-binding">我的订单</a></li>
								<li class="member_dealing_unit"><a href="hotelOrders.jsp"
									class="ng-binding">我的账户</a></li>
								<li class="member_dealing_unit">
									<!--  <a class="logout ng-binding" id="logout" ng-click="$root.logout()">【退出】</a> -->
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
			<!-- header end -->
			<!-- CONTENT OP -->

			<div class="page-center">
				<div class="center-container">
					<div class="tit">
						<h4 class="ng-binding">订单信息</h4>
					</div>
					<div class="orderinfo">
						<div class="section td-fir">
							<p class="ng-binding">
								订单状态：<b class="green ng-binding">预订成功</b>
							</p>
							<p class="ng-binding">
								订单编号：<b class="ng-binding">102062091420</b>
							</p>
							<p class="ng-binding">
								预订日期：<b class="ng-binding">2018-12-07 15:05:32</b>
							</p>
						</div>
						<div class="section td-sec">
							<p class="ng-binding">订单金额：￥199.00</p>
							<!-- ngIf: order.ticketRate -->
							<p class="ng-binding">支付金额：￥199.00</p>
						</div>
						<div class="section td-thi">
							<div class="delete-btn">
								<!-- ngIf: order.canCancel && order.orderState == 'BOOK_SUCCESS' && !(order.outerOrderFlag == 1 && order.payState == 'PAY_SUCCESS') -->
								<a class="btn defaultbtn ng-binding ng-scope"
									ng-click="cancelOrder()"
									ng-if="order.canCancel &amp;&amp; order.orderState == 'BOOK_SUCCESS' &amp;&amp; !(order.outerOrderFlag == 1 &amp;&amp; order.payState == 'PAY_SUCCESS')">取消订单</a>
								<!-- end ngIf: order.canCancel && order.orderState == 'BOOK_SUCCESS' && !(order.outerOrderFlag == 1 && order.payState == 'PAY_SUCCESS') -->
							</div>
							<div class="delete-btn">
								<!-- ngIf: (order.orderState == 'IS_SCHEDULED_ARRIVE' || order.orderState == 'CANCEL' || order.orderState == 'COMPLETED') && order.payState != 'REFUND_PROCESSING' -->
							</div>
						</div>
					</div>
					<div class="order-info-item">
						<h4 class="ng-binding">7天优品·郴州国庆南路店【高端经济型酒店】</h4>
						<p class="ng-binding">房型：优享大床房，1间，共1晚 ，不含早</p>
						<div class="address">
							<p class="ng-binding">
								酒店地址：国庆南路29号
								<!-- ngIf: order.coordinate -->
								<!-- <a class="map-btn ng-binding ng-scope" href="" ng-click="toggleBigMap()" ng-if="order.coordinate">查看地图</a> -->
								<!-- end ngIf: order.coordinate -->
							</p>
							<p class="ng-binding">联系电话：0735-2187777</p>
						</div>
					</div>
					<div class="order-info-item">
						<h4 class="ng-binding">入住信息</h4>
						<ul class="clearfix">
							<li><p class="ng-binding">
									<span class="ng-binding">入住人：</span>李帅
								</p></li>
							<li><p class="ng-binding">
									<span class="ng-binding">入住日期：</span>2018-12-07
								</p></li>
							<li><p class="ng-binding">
									<span class="ng-binding">手机：</span>17773582923
								</p></li>
							<li><p class="ng-binding">
									<span class="ng-binding">离店日期：</span>2018-12-08
								</p></li>
							<!-- ngIf: order.preference -->
						</ul>
						<!-- ngIf: order.lstJzOrderGift && order.lstJzOrderGift.length>0 -->
					</div>
					<div class="order-info-item">
						<h4 class="ng-binding">支付信息</h4>
						<ul>
							<li><p class="ng-binding">
									<span class="ng-binding">支付方式：</span>到付
								</p></li>
							<li><p class="ng-binding">
									<span class="ng-binding">支付金额：</span>￥199.00
								</p></li>
							<li><p class="ng-binding">
									<span class="ng-binding">支付状态：</span>未付款
									<!-- ngIf: !order.outerOrderFlag && params.canPay -->
									<!--  <a class="btn redbtn ng-binding ng-scope" ng-click="payOrder(order)" ng-if="!order.outerOrderFlag &amp;&amp; params.canPay">立即支付</a> -->
									<a href="payment.jsp" class="btn redbtn ng-binding ng-scope"
										ng-if="!order.outerOrderFlag &amp;&amp; params.canPay">立即支付</a>
									<!-- end ngIf: !order.outerOrderFlag && params.canPay -->
								</p></li>
							<!-- ngIf: order.payOrderNo -->
							<!-- ngIf: order.payTime -->
						</ul>
					</div>
					<div class="order-info-item"
						ng-hide="order.payType=='ONLINE_PREPAID'&amp;&amp;order.payState=='UNPAY'">
						<!--<p><b>保证金制度：</b>免费取消</p>-->
						<p class="ng-binding">
							<b class="ng-binding">取消政策：</b>可免费取消订单。
						</p>
					</div>
				</div>
			</div>

			<div class="cover" ng-class="{'show': options.showConver}"
				ng-click="toggleBigMap()"></div>
			<div class="window hotel-map" ng-class="{'show': options.showBigMap}">
				<i class="close" ng-click="toggleBigMap()">x</i>
				<div id="hotel-big-map" style="height: 93%; width: 100%"></div>
			</div>

			<!-- weModal 弹窗 -->
			<div class="modal fade ng-isolate-scope" tabindex="-1"
				ng-class="{'in': showModal == true,'base-modal':params.enableMiniModal}"
				we-modal="" show-modal="showAlert" params="alertModal"
				callback="modalAfterCallback()">
				<div class="modal-dialog">
					<div class="modal-content" ng-class="params.contentClass">
						<!-- ngIf: params.enableMiniModal&&params.closeTag -->
						<!-- ngIf: params.title -->
						<div class="modal-body"
							ng-class="{'scroll-container':params.scrollContainer}">
							<div ng-bind-html="params.content | html" class="ng-binding"></div>
						</div>
						<!-- ngIf: params.buttons.length>0 -->
					</div>
					<!-- /.modal-content -->
				</div>
				<!-- /.modal-dialog -->
			</div>
			<!-- CONTENT ED -->
			<jsp:include page="footer.jsp" />
		</div>
	</div>

	<script src="js/checkOrder_js/siteConfig.js"></script>

	<script src="js/checkOrder_js/vendor.js"></script>

	<script src="js/checkOrder_js/wehotel.js"></script>


</body>
</html>