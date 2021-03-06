<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
	<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
<script type="text/javascript" src="js/newOrdel/newOrdel.js"></script>

</head>
<body ng-controller="newOrderController" ng-init="init()"
	ng-class="{'plateno':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<!-- <form name="orderForm" novalidate="" class="ng-pristine ng-valid ng-valid-required"> -->
	<form action="payment" method="post" id="payForm">
		<!-- ngInclude: $root.siteConfig.newOrder.template_url -->
		<div class="container ng-scope"
			ng-include="$root.siteConfig.newOrder.template_url">
			<div class="wehotel neworder ng-scope">
				<!-- ngInclude: $root.siteConfig.header_url -->
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

				<!-- CONTENT OP -->
				<div class="container clearfix">
					<div class="left">
						<div class="section clearfix">
							<div class="title">预订信息</div>
							<div class="input-box clearfix"
								ng-class="{'international': options.isAbroad &amp;&amp; $root.siteConfig.site_id == $root.siteEnum.WeHotel}">
								<label>入住日期:</label> <input type="text" id="inDatepicker" name="checkInDate"
									disabled="disabled" class="form-control"
									data-timer="1544112000000" value="${checkInDate}"> 
								<label>离店日期:</label>
								<input type="text" id="outDatepicker" disabled="disabled" name="checkOutDate"
									class="form-control" data-timer="1544198400000"
									value="${checkOutDate}" >
								<label>房间数量:</label> <select
									class="float form-control ng-pristine ng-valid" name="count" id="select1">
									<c:forEach varStatus="status" begin="1" end="${houses.inventory - houseNum}"> 
									<option value="${status.count}">${status.count}</option>
									</c:forEach>
									<!-- ngIf: params.showRooms 
									<option ng-if="params.showRooms" value="2" class="ng-scope">2</option>
									<option ng-if="params.showRooms" value="3" class="ng-scope">3</option>-->
									<!-- end ngIf: params.showRooms -->
								</select>
							</div>
							<div class="hotel-box clearfix">
								<!-- ngRepeat: rate in roomRate.rates -->
								<c:forEach varStatus="status" begin="1" end="${m}">
									<div class="hotel ng-scope" ng-repeat="rate in roomRate.rates">
										<span class="ng-binding">${month}月${day+status.index-1}日</span> <span id="binding" class="ng-binding" name="binding">1间</span>
										<span class="ng-binding">
											<c:if test="${rooms.isbreakfast ==1}">不含早餐</c:if>
											<c:if test="${rooms.isbreakfast ==2}">含单早</c:if>
											<c:if test="${rooms.isbreakfast ==3}">含双早</c:if>
										</span>
										<input type="hidden" value="${rooms.price}" id="price1">
										<span id="price" class="price ng-binding" name="price">￥${rooms.price}</span>
									</div>
								</c:forEach>
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
									<input type="text" id="realName" name="linkUserName"
										ng-model="params.realName" autocomplete="off" required=""
										maxlength="20" ng-if="!options.isAbroad"
										class="ng-scope ng-pristine ng-valid ng-valid-required"
										value="注册会员">
								</div>

								<div class="input-box-2 clearfix phone">
									<label>手机号码:</label> <input type="text" ng-model="params.phone"
										name="noticePhone" autocomplete="off" required="" maxlength="11"
										class="ng-pristine ng-valid ng-valid-required"
										value="17773582923">
								</div>
							</div>
							<div class="input-box clearfix">
								<label>特殊需求</label><br>
								<div class="special-need">
									<span class="after-check"><input type="checkbox" value="无烟房" name="box"
										ng-model="params.nonSmokingRoom" class="ng-pristine ng-valid">无烟房</span>
									<span class="after-check"><input type="checkbox" value="高层客房" name="box"
										ng-model="params.highFloorRoom" class="ng-pristine ng-valid">高层客房</span>
									<span class="after-check"><input type="checkbox" value="相邻房" name="box"
										ng-model="params.adjacentRoom" class="ng-pristine ng-valid">相邻房</span>
								</div>
								<textarea id="requirement" maxlength="200" name="specialRequirement"
									ng-model="params.remark" ng-show="params.isNeedNote"
									class=""></textarea>
							</div>
						</div>
						<!-- ngIf: params.showInsurance&&params.insurancePremium>0 -->
						<div class="section clearfix">
							<div class="title">支付</div>
							<div class="radio-box clearfix">
								<label class="radio-left">支付方式</label>
								<div class="radio-right">
									<!-- ngRepeat: payType in params.paymentTypes -->
									<div class="radio-row clearfix ng-scope"
										ng-repeat="payType in params.paymentTypes">
										<input type="radio" id="ONLINE_PREPAID" value="0" name="payType"> <label class="ng-binding">门店支付</label>
									</div>
									<div class="radio-row clearfix ng-scope"
										ng-repeat="payType in params.paymentTypes">
										<input type="radio" id="ONLINE_PREPAID" value="1" name="payType"
											checked="checked"> <label class="ng-binding">支付全部房费</label>
									</div>
								</div>
							</div>
							<!-- ngIf: params.canUseCoupon -->
							
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
									<img ng-src="http://images.bestwehotel.com/images/8ff1a5e871891049_640_480.jpg"
										onerror="this.parentNode.removeChild(this)"
										src="${houses.roomImage}">
								</div>
								<input type="hidden" value="${hotel.id}" name="hotelId">
								<p class="title ng-binding">${hotel.hotelName}</p>
								<p class="address ng-binding">地址：${hotel.address}</p>
							</div>
							<div class="section">
								<div class="label">入住房型</div>
								<p class="ng-binding">
									<input type="hidden" value="${houses.id}" name="roomId">
									${houses.valueName}<span class="ng-binding" id="binding2">1间</span>
								</p>
								<div class="label">价格名称</div>
								<input type="hidden" value="${rooms.id}" name="roomsId">
								<p class="ng-binding">${rooms.roomTitle}</p>
								<div class="label">入住日期</div>
								<p class="ng-binding">
									<fmt:parseDate var="s" value="${checkInDate}" pattern="yyyy-MM-dd"/>${checkInDate}至<fmt:parseDate var="e" value="${checkOutDate}" pattern="yyyy-MM-dd"/> ${checkOutDate}<span id="day" class="ng-binding">
									
									<fmt:formatNumber value="${(e.getTime() - s.getTime())/1000/60/60/24}" pattern="#0" var="num"/>${num}晚</span>
									<input type="hidden" id="bookingDays" value="${num}" name="bookingDays">  
								</p>
								<div class="price-detail">
									<p>
										房费小计:<span id="xiaoji" class="ng-binding">￥${rooms.price*num}</span>
									</p>
								</div>
							</div>
							<div class="section">
								<div class="price-total">
									总金额:<span class="ng-binding">￥<b id="sumPrice" class="ng-binding">${rooms.price*num}</b>
									<input type="hidden" value="${rooms.price*num}" name="payAmount">
									</span>
								</div>
								<button id="btnAddOrder" class="">提交订单</button>
							</div>
						</div>
					</div>
				</div>
				<jsp:include page="footer.jsp" />
			</div>
		</div>
	</form>
	<script src="js/newOrdel/siteConfig.js"></script>

	<script src="js/newOrdel/vendor.js"></script>

	<script src="js/newOrdel/wehotel.js"></script>
	
	<script type="text/javascript">
		$(function() {
			$("*[name='box']").change(function() {
		               if(this.checked){
		                  	$("#requirement").append("#"+$(this).val()+";");
		                }else{
		                	var str = $("#requirement").val();
		                	var strs= new Array()
		                	strs = str.split(";");
		                	for (var i = 0; i < strs.length; i++) {
		                		if(strs[i]=="#"+$(this).val())
		                			alert(strs[i]);
		                		strs[i].text('');
							}
		                	
		                }
			});
			
			//提交订单
			$("#btnAddOrder").click(function() {
				$("#inDatepicker").attr("disabled", false); 
				$("#outDatepicker").attr("disabled", false); 
				$("#payForm").submit();
			});
		});
	</script>
</body>
</html>