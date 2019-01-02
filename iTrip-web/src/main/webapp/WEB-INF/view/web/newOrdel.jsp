<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
	<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<head>
<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="newOrdel/openPage.txt"></script>
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

<title>铂涛集团官网品牌酒店</title>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="http://hotel.bestwehotel.com/favicon-plateno.ico"
	type="image/x-icon">

<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/newOrdel.css">
<!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="js/newOrdel/tongji.js"></script>
</head>
<body ng-controller="newOrderController" ng-init="init()"
	ng-class="{'plateno':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<!-- <form name="orderForm" novalidate="" class="ng-pristine ng-valid ng-valid-required"> -->
	<form action="payment.jsp" method="post">
		<!-- ngInclude: $root.siteConfig.newOrder.template_url -->
		<div class="container ng-scope"
			ng-include="$root.siteConfig.newOrder.template_url">
			<div class="wehotel neworder ng-scope">
				<!-- ngInclude: $root.siteConfig.header_url -->
				<div class="header ng-scope"
					ng-include="$root.siteConfig.header_url">
					<!-- header begin -->
					<!-- 预览模式 OP -->
					<!-- ngIf: $root.siteConfig.isPreview -->
					<!-- 预览模式 ED -->
					<div class="header-center ng-scope">
						<div class="logo">
							<a href="index.jsp"></a>
						</div>
						<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
						<div class="navigation ng-scope"
							ng-if="$root.siteConfig.site_id==$root.siteEnum.WeHotel">
							<a
								ng-class="{'active': $root.topNavIndex == $root.siteConfig.topNavEnum.home,'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club }"
								href="hotel.jsp" class="ng-binding">酒店首页</a> <a
								ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club }"
								href="index.jsp" class="ng-binding hidden">会员首页</a> <a
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
											src="newOrdel/qrcode1.jpg"> <a class="ng-binding">锦江旅行APP</a>
									</div>
									<div class="divider3"></div>
									<div class="qrcode">
										<img ng-src="/dist/images/qrcode2.jpg"
											src="newOrdel/qrcode2.jpg"> <a class="ng-binding">锦江旅行公众号</a>
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
				<div class="container clearfix">
					<div class="left">
						<div class="section clearfix">
							<div class="title">预订信息</div>
							<div class="input-box clearfix"
								ng-class="{'international': options.isAbroad &amp;&amp; $root.siteConfig.site_id == $root.siteEnum.WeHotel}">
								<label>入住日期:</label> <input type="text" id="inDatepicker"
									disabled="disabled" class="form-control"
									data-timer="1544112000000" value="${checkInDate}"> <label>离店日期:</label>
								<input type="text" id="outDatepicker" disabled="disabled"
									class="form-control" data-timer="1544198400000"
									value="${checkOutDate}">
								<div class="kids clearfix">
									<label>入住人数:</label>
									<div class="fake-input disabled ng-binding">
										1<span>成人</span>，0<span>儿童</span>
									</div>
								</div>
								<label>房间数量:</label> <select
									class="float form-control ng-pristine ng-valid"
									ng-model="params.roomCount" ng-change="changeRoomCount()"
									ng-disabled="options.roomCountLimit">
									<option value="1" selected="selected">1</option>
									<!-- ngIf: params.showRooms -->
									<option ng-if="params.showRooms" value="2" class="ng-scope">2</option>
									<!-- end ngIf: params.showRooms -->
									<!-- ngIf: params.showRooms -->
									<option ng-if="params.showRooms" value="3" class="ng-scope">3</option>
									<!-- end ngIf: params.showRooms -->
								</select>
							</div>
							<div class="hotel-box clearfix">
								<!-- ngRepeat: rate in roomRate.rates -->
								<div class="hotel ng-scope" ng-repeat="rate in roomRate.rates">
									<span class="ng-binding">${month}月${day}日</span> <span class="ng-binding">1间</span>
									<span class="ng-binding">不含早</span> <span
										class="price ng-binding">￥${houses.roomPrice+rooms.price}</span>
								</div>
								<!-- end ngRepeat: rate in roomRate.rates -->
							</div>
							<!-- ngIf: roomRate.promotionTag==1 -->
						</div>
						<div class="section clearfix"
							ng-class="{'oversea': options.isAbroad }">
							<div class="title">入住信息</div>
							<div class="input-box clearfix">
								<div class="input-box-2 clearfix">
									<label>联系人:</label>
									<!-- ngIf: !options.isAbroad -->
									<input type="text" id="realName" name="user"
										ng-model="params.realName" autocomplete="off" required=""
										maxlength="20" ng-if="!options.isAbroad"
										class="ng-scope ng-pristine ng-valid ng-valid-required"
										value="注册会员">
									<!-- end ngIf: !options.isAbroad -->
									<!-- ngIf: !options.isAbroad&&orderForm.user.$invalid -->
									<!-- ngIf: !options.isAbroad&&params.realNameError -->

									<!-- 海外酒店入住人begin -->
									<!-- ngIf: options.isAbroad -->
									<!-- ngIf: options.isAbroad -->
									<!-- ngIf: options.isAbroad&&(orderForm.firstName.$invalid||orderForm.lastName.$invalid||params.firstNameError) -->
									<!-- 海外酒店入住人end -->
								</div>

								<div class="input-box-2 clearfix phone">
									<label>手机号码:</label> <input type="text" ng-model="params.phone"
										name="phone" autocomplete="off" required="" maxlength="11"
										class="ng-pristine ng-valid ng-valid-required"
										value="17773582923">
									<!-- ngIf: orderForm.phone.$invalid -->
									<!-- ngIf: params.phoneError -->
								</div>
							</div>
							<!-- ngIf: options.isAbroad -->
							<div class="input-box clearfix">
								<div>
									<span class="after-check ng-binding disabled"
										ng-click="params.isSameContact=!params.isSameContact"
										ng-class="{'disabled':params.mustSelf}"><input
										name="sameContact" type="checkbox"
										ng-checked="params.isSameContact" checked="checked">入住人和联系人相同（*
										友情提示：会员本人入住时，享会员权益）</span>
								</div>
								<div class="contact clearfix ng-hide"
									ng-show="!params.isSameContact">
									<div class="extra clearfix">
										<label>入住人1</label>
										<!-- ngIf: !options.isAbroad -->
										<input type="text" ng-model="params.guestName1"
											id="guestName1" name="guestName1" maxlength="20"
											ng-required="!params.isSameContact" autocomplete="off"
											ng-if="!options.isAbroad"
											class="ng-scope ng-pristine ng-valid ng-valid-required">
										<!-- end ngIf: !options.isAbroad -->
										<!-- ngIf: !options.isAbroad&&orderForm.guestName1.$invalid -->
										<!-- ngIf: !options.isAbroad&&params.guestNameError1 -->

										<!-- ngIf: options.isAbroad -->
										<!-- ngIf: options.isAbroad -->
										<!-- ngIf: options.isAbroad&&(orderForm.firstName1.$invalid||orderForm.lastName1.$invalid||params.firstNameError1) -->
									</div>

									<!-- ngIf: params.roomCount>=2 -->

									<!-- ngIf: params.roomCount>=3 -->
								</div>
							</div>
							<div class="input-box clearfix">
								<label>特殊需求</label><br>
								<div class="special-need">
									<span class="after-check"><input type="checkbox"
										ng-model="params.nonSmokingRoom" class="ng-pristine ng-valid">无烟房</span>
									<span class="after-check"><input type="checkbox"
										ng-model="params.highFloorRoom" class="ng-pristine ng-valid">高层客房</span>
									<span class="after-check"><input type="checkbox"
										ng-model="params.adjacentRoom" class="ng-pristine ng-valid">相邻房</span>
									<span class="after-check"><input type="checkbox"
										ng-model="params.isNeedNote"
										ng-click="params.isNeedNote=!params.isNeedNote"
										class="ng-pristine ng-valid">备注</span>
								</div>
								<textarea id="requirement" maxlength="200"
									ng-model="params.remark" ng-show="params.isNeedNote"
									class="ng-pristine ng-valid ng-hide"></textarea>
							</div>
						</div>
						<!-- ngIf: params.showInsurance&&params.insurancePremium>0 -->
						<div class="section clearfix">
							<div class="title">支付与优惠信息</div>
							<div class="radio-box clearfix">
								<label class="radio-left">支付方式</label>
								<div class="radio-right">
									<!-- ngRepeat: payType in params.paymentTypes -->
									<div class="radio-row clearfix ng-scope"
										ng-repeat="payType in params.paymentTypes">
										<input type="radio" id="ONLINE_PREPAID"
											ng-click="changePaymentType(payType.value)"
											ng-checked="params.selPayType==payType.value"
											checked="checked"> <label class="ng-binding">支付全部房费</label>
									</div>
									<!-- end ngRepeat: payType in params.paymentTypes -->
								</div>
							</div>
							<!-- ngIf: params.canUseCoupon -->
							<div class="input-box clearfix ng-scope"
								ng-if="params.canUseCoupon">
								<div class="amount clearfix">
									<label>优惠券</label> <select id="coupon"
										ng-model="params.selCoupon" ng-change="changeCounpon()"
										class="ng-pristine ng-valid">
										<!-- ngRepeat: item in coupons -->
										<option ng-repeat="item in coupons" value="" id=""
											title="无可用优惠券" class="ng-binding ng-scope"
											selected="selected">无可用优惠券</option>
										<!-- end ngRepeat: item in coupons -->
									</select>
									<!--<p class="error" >*官网特价房不可使用优惠券</p>
                        <div ng-if="params.selCoupon!=''&&params.couponMaxNum>0">
                            <label>数量</label>
                            <input id="couponNum" name="couponNum" type="number" ng-model="params.couponNum" max="{{params.couponMaxNum}}" min="0" ng-change="getPriceAndAmount()"/>
                            <p class="error" ng-if="orderForm.couponNum.$invalid">优惠券可用数量{{params.couponMaxNum}}</p>
                        </div>-->
								</div>
								<!--     <label>优惠码</label>
                    <input type="text"/>-->
							</div>
							<!-- end ngIf: params.canUseCoupon -->
							<div class="tipbox tp3">
								<b>取消政策：</b><span id="cancel" class="ng-binding">预付房费后，在2018年12月07日
									12:00前可免费取消订单/申请退款，逾期取消或变更，将收取首晚房费。</span>
								<!-- ngIf: params.reminder -->
								<br ng-if="params.reminder" class="ng-scope">
								<!-- end ngIf: params.reminder -->
								<!-- ngIf: params.reminder -->
								<b ng-if="params.reminder" class="ng-scope">温馨提示：</b>
								<!-- end ngIf: params.reminder -->
								<!-- ngIf: params.reminder -->
								<span ng-if="params.reminder" class="ng-binding ng-scope">酒店于住店当天12:00后办理入住，离店当天12:00前办理退房，入离日期以当地时间为准。如您在12:00前到达，可能需要等待方能入住。若超过房间最多入住人数，则可能需要补差价或酒店拒绝入住，具体以酒店安排为准。</span>
								<!-- end ngIf: params.reminder -->
							</div>
						</div>
					</div>
					<div class="right">
						<div class="process">
							<span class="doing">填写订单</span> <i class="doing">&gt;</i> <span>订单支付</span>
							<i>&gt;</i> <span>预订成功</span>
						</div>
						<div class="info">
							<div class="section">
								<div class="pic">
									<img
										ng-src="http://images.bestwehotel.com/images/8ff1a5e871891049_640_480.jpg"
										onerror="this.parentNode.removeChild(this)"
										src="newOrdel/8ff1a5e871891049_640_480.jpg">
								</div>
								<p class="title ng-binding">${hotel.hotelName}</p>
								<p class="address ng-binding">地址：${hotel.address}</p>
							</div>
							<div class="section">
								<div class="label">入住房型</div>
								<p class="ng-binding">
									${houses.valueName}<span class="ng-binding">1间</span>
								</p>
								<div class="label">价格名称</div>
								<p class="ng-binding">${rooms.roomTitle}</p>
								<div class="label">入住日期</div>
								<p class="ng-binding">
									<fmt:parseDate var="s" value="${checkInDate}" pattern="yyyy-MM-dd"/>${checkInDate}至<fmt:parseDate var="e" value="${checkOutDate}" pattern="yyyy-MM-dd"/> ${checkOutDate}<span class="ng-binding">
									
									<fmt:formatNumber value="${(e.getTime()-s.getTime())/1000/60/60/24}" pattern="#0" var="num"/>${num}晚</span>
								</p>
								<div class="price-detail">
									<p>
										房费小计:<span class="ng-binding">￥${(houses.roomPrice+rooms.price)*num}</span>
									</p>
									<!-- ngIf: params.taxAndService>0 -->
									<!-- ngIf: params.isNeedInsurance -->
									<!-- ngIf: params.couponAmount>0 -->
								</div>
								<!-- ngIf: params.guaranteePayAmount>0 -->
							</div>
							<div class="section">
								<div class="price-total">
									总金额:<span class="ng-binding">￥<b class="ng-binding"><fmt:formatNumber type="number" value=" ${(houses.roomPrice+rooms.price)*num}" maxFractionDigits="0"/></b>.00
									</span>
								</div>
								<button id="btnAddOrder"
									ng-class="{'disabled':!params.canBooking||params.totalPrice&lt;=0||params.totalAmount&lt;0||params.isBooking||!params.agreeBookNotice}"
									ng-click="bookHotel()" class="">提交订单</button>
								<!-- ngIf: params.totalSpotFeeRatePlus>0 -->
								<!-- ngIf: $root.siteConfig.site_id!=3 -->
								<div class="protocol ng-scope"
									ng-if="$root.siteConfig.site_id!=3">
									<input type="checkbox" id="bookNotice" ng-required="true"
										ng-model="params.agreeBookNotice"
										class="ng-pristine ng-valid ng-valid-required"
										required="required" checked="checked"> <span>已阅读并同意<a
										ng-click="readBookNotice()">《WeHotel酒店预订须知》</a></span>
								</div>
								<!-- end ngIf: $root.siteConfig.site_id!=3 -->
							</div>
						</div>
					</div>
				</div>

				<!-- weModal 弹窗 -->
				<div class="modal fade ng-isolate-scope base-modal" tabindex="-1"
					ng-class="{'in': showModal == true,'base-modal':params.enableMiniModal}"
					we-modal="" show-modal="options.showAlert" params="alertModal"
					callback="alertModalCallback()">
					<div class="modal-dialog">
						<div class="modal-content" ng-class="params.contentClass">
							<!-- ngIf: params.enableMiniModal&&params.closeTag -->
							<!-- ngIf: params.title -->
							<div class="modal-body"
								ng-class="{'scroll-container':params.scrollContainer}">
								<div ng-bind-html="params.content | html" class="ng-binding"></div>
							</div>
							<!-- ngIf: params.buttons.length>0 -->
							<div class="modal-footer ng-scope center"
								ng-class="[params.buttonPositon]"
								ng-if="params.buttons.length&gt;0">
								<!-- ngRepeat: button in params.buttons -->
								<button type="button" ng-repeat="button in params.buttons"
									class="btn btn-primary ng-binding ng-scope bluebtn"
									ng-class="[button.class]" ng-click="onButtonClick(button.name)">关闭</button>
								<!-- end ngRepeat: button in params.buttons -->
							</div>
							<!-- end ngIf: params.buttons.length>0 -->
						</div>
						<!-- /.modal-content -->
					</div>
					<!-- /.modal-dialog -->
				</div>
				<!-- CONTENT ED -->

				<jsp:include page="footer.jsp" />
			</div>
		</div>
	</form>
	<script src="js/newOrdel/siteConfig.js"></script>

	<script src="js/newOrdel/vendor.js"></script>

	<script src="js/newOrdel/wehotel.js"></script>


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