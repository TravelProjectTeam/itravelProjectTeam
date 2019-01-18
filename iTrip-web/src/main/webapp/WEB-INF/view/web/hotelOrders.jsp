<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<head>
<script type="text/javascript" src="js/hoteOrders/openPage.txt"></script>
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

.page-bar {
	float: right;
	padding-top: 15px;
}

.page-num-ul li {
	display: inline;
}

.page-go-form {
	float: right;
}

.paginate_button {
	border: 1px solid #cecece;
	border-radius: 5px;
	margin-right: 10px;
	padding: 5px 10px;
	text-align: center;
}

.paginate_button a {
	color: black;
}

.active {
	opacity: 1;
}

.page-key {
	border-radius: 5px;
	padding: 3px 0px;
	width: 40px;
	color: black;
}

.page-go-form {
	margin-top: -5px;
}
</style>
<!-- META SECTION -->

<title>铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店</title>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="icon" href="http://hotel.bestwehotel.com/favicon-plateno.ico"
	type="image/x-icon">
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/hotelOrders.css">
<!-- EOF CSS INCLUDE -->
</head>
<body class="ng-scope">

	<!-- ngInclude: $root.siteConfig.hotelOrders.template_url -->
	<div class="container ng-scope">
		<div class="wehotel account hotelOrders  ng-scope">

			<!-- header begin -->
			<!-- ngInclude: $root.siteConfig.header_url -->
			<div class="header header-transparent ng-scope"
				ng-include="$root.siteConfig.header_url">
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
							href="webIndex" class="ng-binding hidden">酒店首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club }"
							href="hotelOrders" class="ng-binding">会员首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club}"
							href=webIndex class="ng-binding">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.partners||$root.topNavIndex == $root.siteConfig.topNavEnum.club,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.hotel}"
							href="webIndex" class="ng-binding hidden">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club || $root.topNavIndex == $root.siteConfig.topNavEnum.partners }"
							href="hotelOrders" class="ng-binding hidden">会员中心</a> <a href=""
							target="_blank" class="ng-binding">积分商城</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club&amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners  ,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.partners}"
							href="#" class="ng-binding">合作伙伴</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club &amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners }"
							href="#" class="ng-binding">关于会员</a>
					</div>
					<!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
					<div class="header-action clearfix">
						<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
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
									class="exchange_btn horizantal ng-binding" title="兑换" href="#"
									target="_blank">【兑换】</a></li>
								<li class="member_dealing_unit"><a href="#"
									class="ng-binding">我的优惠券</a></li>
								<li class="member_dealing_unit"><a href="#"
									class="ng-binding">我的订单</a></li>
								<li class="member_dealing_unit"><a href="#"
									class="ng-binding">我的账户</a></li>
								<li class="member_dealing_unit">
									<!--  <a class="logout ng-binding" id="logout" ng-click="$root.logout()">【退出】</a> -->
									<a href="login.jsp" class="logout ng-binding" id="logout">【退出】</a>

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
			<!-- header end -->
			<!-- CONTENT OP -->

			<div class="placeholder banner ng-isolate-scope" account-nav-bar=""
				params="" callback="">
				<!--滚动图-->
				<div class="slider cxslide">
					<div class="box">
						<ul class="banner-inner list">
							<!-- ngRepeat: banner in $root.siteConfig.bannerList.clubNavBar -->
							<li ng-repeat="banner in $root.siteConfig.bannerList.clubNavBar"
								class="ng-scope"><a
								style="background: url(http://static.bestwehotel.com/opt/static/chameleon/image/20180628/969e89b6-258e-495d-8901-1bbe67beb8b1.jpg) no-repeat center top; cursor: default;"
								href="javascript:void(0);" target="_self"></a></li>
							<!-- end ngRepeat: banner in $root.siteConfig.bannerList.clubNavBar -->
						</ul>
					</div>
				</div>
				<div class="banner-container">
					<div class="consumer-info">
						<div class="consumer-top">
							<h4 class="ng-binding">
								注册会员
								<!-- ngIf: $root.user -->
								<span ng-if="$root.user" class="ng-scope">，</span>
								<!-- end ngIf: $root.user -->
								您好
							</h4>
							<ul>
								<li>
									<div class="section">
										<p class="ng-binding">1</p>
										<p class="ng-binding">待支付</p>
									</div>
								</li>
								<li>
									<div class="section">
										<p class="ng-binding">0</p>
										<p class="ng-binding">待入住</p>
									</div>
								</li>
								<li>
									<div class="section">
										<p class="ng-binding">0</p>
										<p class="ng-binding">优惠券</p>
									</div>
								</li>
							</ul>
						</div>
						<div class="consumer-bottom">
							<p class="ng-binding">
								会员层级：<b> <!-- ngIf: $root.user --> <span ng-if="$root.user"
									class="ng-binding ng-scope">We普卡</span> <!-- end ngIf: $root.user -->
								</b>
							</p>
							<!-- ngIf: $root.user.oldMemberLevel != 10 -->
							<div class="group ng-scope"
								ng-if="$root.user.oldMemberLevel != 10">
								<p class="score ng-binding">
									成长值<span class="score-bg"> <i class="percent"
										ng-style="{width: (account.growth/account.nextLevelGrowth*100) + '%'}"
										style="width: 5%;"> <!-- ngIf: $root.user --> <a
											class="progress ng-binding ng-scope" ng-if="$root.user">50/1000</a>
											<!-- end ngIf: $root.user -->
									</i>
									</span>
									<!-- ngIf: $root.user.oldMemberLevel != account.nextLevel && $root.user.oldMemberLevel<6 -->
									<span
										ng-if="$root.user.oldMemberLevel != account.nextLevel &amp;&amp; $root.user.oldMemberLevel&lt;6"
										class="ng-binding ng-scope">下一等级：We银卡</span>
									<!-- end ngIf: $root.user.oldMemberLevel != account.nextLevel && $root.user.oldMemberLevel<6 -->
								</p>
								<p class="ng-binding">层级有效期：9999-12-31</p>
								<p class="ng-binding">
									可用积分：<b class="ng-binding">0</b> <a class="exchange ng-binding"
										href="" target="_blank">使用</a>
								</p>
							</div>
							<!-- end ngIf: $root.user.oldMemberLevel != 10 -->
							<!--<div class="group addinfo" ng-if="$root.user.oldMemberLevel == 9">-->
							<!--<p>完善个人信息，享会员特权</p>-->
							<!--<a class="link" href="/Club/MemberInfo/">完善个人信息</a>-->
							<!--</div>-->
						</div>
					</div>
				</div>
			</div>


			<div class="center">
				<div class="center-container">
					<!--侧边栏-->
					<div class="placeholder sidebar ng-isolate-scope">
						<ul class="nav">
							<li><a class="myList ng-binding"><i class="icon-list"></i>我的订单</a>
								<ul class="item-list">
									<li><a class="ng-binding active"
										href="javascript:void(0);"><i>•&nbsp;</i>酒店订单</a></li>
									<!--<li><a ng-class="{'active': activeIndex==2}" href="javascript:void(0);">其他订单</a></li>-->
								</ul></li>
							<li><a class="ng-binding"><i class="icon-account"></i>我的账户</a>
								<ul class="item-list">
									<li><a class="ng-binding" href="webBerInfo"><i>•&nbsp;</i>个人信息</a></li>
									<li><a class="ng-binding" href="webSecurity"><i>•&nbsp;</i>账户安全</a></li>
									<!--<li><a ng-class="{'active': activeIndex==7}" ng-href="{{activeIndex == 7 ? 'javascript:void(0);': '/Club/MemberSubscription'}}">我的订阅</a></li>-->
									<!--<li><a ng-class="{'active': activeIndex==8}" href="javascript:void(0);">消息中心</a></li>-->
									<!--<li><a ng-class="{'active': activeIndex==9}" href="{{activeIndex == 9 ? 'javascript:void(0);': '/Club/MemberCardManage'}}">银行卡管理</a></li>-->
									<!--<li><a ng-class="{'active': activeIndex==2}" href="javascript:void(0);">常用联系人</a></li>-->
								</ul></li>
							<li><a class="ng-binding"><i class="icon-member"></i>关于会员</a>
								<ul class="item-list">
									<!-- ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
									<li class="ng-scope"><a href="#" class="ng-binding"><i>•&nbsp;</i>消费积分</a></li>
									<!-- end ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
									<!-- ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
									<li class="ng-scope"><a href="#" class="ng-binding"><i>•&nbsp;</i>关于WeHotel</a></li>
									<!-- end ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
									<!--<li><a ng-class="{'active': activeIndex==13}" href="">加入锦江礼享</a></li>-->
									<!--<li><a ng-class="{'active': activeIndex==14}" href="">会员服务</a></li>-->
									<!--<li><a ng-class="{'active': activeIndex==15}" href="">会员条款与细则</a></li>-->
									<li><a href="#"><i>•&nbsp;</i>会员等级</a></li>
									<!--<li><a  href="">隐私权政策</a></li>-->
									<li><a href="#" class="ng-binding"><i>•&nbsp;</i>会员权益</a>
										<ul class="item-list">
											<li><a href="#">会员积分</a></li>
											<li><a href="#">会员折扣</a></li>
											<li><a href="#">会员礼遇</a></li>
										</ul></li>
									<li><a href="#" class="ng-binding"><i>•&nbsp;</i>常见问题</a></li>
								</ul></li>

						</ul>
					</div>
					<!--侧边栏END-->

					<!--页面内容-->
					<div class="main">
						<div class="list-search">
							<div class="title">
								<h4 class="ng-binding">酒店订单</h4>
								<div class="form-inline">


									<!--<div class="form-group">-->
									<!--<input type="search" placeholder="酒店名称" name="search" ng-model="params.keyword"  class="form-control" autocomplete="off">-->
									<!--</div>-->

									<div class="form-group js-drop">
										<lable class="select-icon"> <i class="caret"></i></lable>
										<input type="text" value="近6个月订单" class="form-control"
											readonly="readonly" autocomplete="off">
										<ul class="js-dropdown order-status">
											<li class="ng-binding"
												data-value="HOTELORDERS_STATUS_WAIT_CHECK_IN">待入住</li>
											<li class="ng-binding"
												data-value="HOTELORDERS_STATUS_WAIT_PAY">待付款</li>
											<li class="ng-binding"
												data-value="HOTELORDERS_STATUS_COMPLETE">已完成</li>
											<!--<li class="" data-value="CONFIRM">已确认</li>-->
											<!--<li class="" data-value="CANCEL">已取消</li>-->
											<!--<li class="" data-value="UNPAY">待支付</li>-->
											<!--<li class="" data-value="PAY_SUCCESS">支付成功</li>-->
											<!--<li class="" data-value="REFUND_ALREADY">退款中</li>-->
											<!--<li class="" data-value="REFUND_SUCCESS">退款成功</li>-->
											<li class="ng-binding" data-value="HOTELORDERS_STATUS_OTHER">其他订单</li>
											<li class="ng-binding">近6个月订单</li>
										</ul>

									</div>
									<!--<a href="" class="btn bluebtn" ng-click="searchOrders()">搜索</a>-->
								</div>
							</div>

						</div>
						<div class="order-list">
							<ul>


								<!-- ngRepeat: order in hotelOrderList track by $index -->
								<c:forEach items="${list}" var="order">
									<li class="ng-scope">
										<div class="order-list-tit">
											<span class="ng-binding">订单号： <a href="checkOrder.jsp"
												target="_blank" class="ng-binding">${order.orderNo}</a></span> <span
												class="ng-binding">预订日期：<fmt:formatDate
													value="${order.creationDate}" pattern="yyyy-MM-dd" /></span>
										</div>
										<div class="order-list-main">
											<div class="hotel-info">
												<div class="hotel-pic">
													<a href="checkOrder.jsp" target="_blank"> <img
														onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'"
														src="${order.detailsImage1}">
													</a>
												</div>
												<div class="section">
													<input type="hidden" id="checkOutDate"
														value="<fmt:formatDate value="${order.checkInDate}" pattern="yyyy-MM-dd" />" />
													<a href="checkOrder.jsp" target="_blank"
														title="${order.hotelName}" class="ng-binding">${order.hotelName}</a>
													<p class="ng-binding">${order.valueName}</p>
													<p class="ng-binding">
														入住日期:
														<fmt:formatDate value="${order.checkInDate}"
															pattern="yyyy-MM-dd" />
													</p>
													<p class="ng-binding">
														离店日期:
														<fmt:formatDate value="${order.checkOutDate}"
															pattern="yyyy-MM-dd" />
													</p>
													<p class="ng-binding">
														共${order.bookingDays}晚
														<!-- ngIf: false -->
													</p>
												</div>
											</div>
											<div class="price-box">
												<div class="section">
													<p class="ng-binding">总价</p>
													<!--<p class="price"><span>{{order.origRate | currency:'￥'}}</span></p>-->
													<p class="price">
														<span>￥<b class="ng-binding">${order.payAmount}</b></span>
													</p>
													<!--<p class="price">{{order.paymentAmount | currency:'￥'}}</p>-->
													<!--<p class="remark">（含服务费）</p>-->
												</div>
											</div>
											<div class="order-state">
												<!--<p class="payWaiting">{{order.payState}}</p>-->
												<!--<p class="payWaiting" ng-if="order.payState == '0'">待支付</p>-->
												<!--<p class="payFailure" ng-if="order.orderState == '2'">已取消</p>-->
												<!--<p class="paySuccess" ng-if="order.orderState == '3'">待入住</p>-->
												<!--<p class="payFailure" ng-if="order.orderState == '5'">已完成</p>-->
												<p class="paySuccess ng-binding">${order.orderStatus}</p>

											</div>
											<div class="order-btn-box">
												<div class="section">
													<c:if test="${order.orderStatus eq '预订成功'}">

														<a href="pay" class="btn redbtn ng-binding ng-scope">立即支付</a>
														<a onclick="upds(${order.id})"
															class="btn defaultbtn ng-binding ng-scope">取消订单</a>
													</c:if>
													<c:if test="${order.orderStatus eq '待入住'}">
														<a href="webHotelDatail?hotelId=${order.hotelId}"
															class="btn redbtn ng-binding ng-scope">再次预定</a>
														<a onclick="upds(${order.id})"
															class="btn defaultbtn ng-binding ng-scope">取消订单</a>
													</c:if>
													<c:if test="${order.orderStatus eq '已入住' }">
														<a href="webHotelDatail?hotelId=${order.hotelId}"
															class="btn redbtn ng-binding ng-scope">再次预定</a>
														<a onclick="deletes(${order.id})"
															class="btn defaultbtn ng-binding ng-scope">删除订单</a>
													</c:if>
													<c:if test="${order.orderStatus eq '已取消' }">
														<a href="webHotelDatail?hotelId=${order.hotelId}"
															class="btn redbtn ng-binding ng-scope">再次预定</a>
														<a onclick="deletes(${order.id})"
															class="btn defaultbtn ng-binding ng-scope">删除订单</a>
													</c:if>

												</div>
											</div>
										</div>
									</li>
								</c:forEach>
								<!-- end ngRepeat: order in hotelOrderList track by $index -->
							</ul>
						</div>
						<!-- ngIf: params.noData -->

						<!-- 分页组件 -->
						<div class="page-bar">
							<input type="hidden" id="totalPageCount"
								value="${page.totalPageCount}" />
							<ul class="page-num-ul clearfix">
								<!-- <li>共${page.totalCount }条记录&nbsp;&nbsp; ${page.currentPageNo }/${page.totalPageCount }页</li>-->
								<c:if test="${page.currentPageNo > 1}">
									<li class="paginate_button active"><a
										href="javascript:page(1);"
										aria-controls="datatable-responsive" data-dt-idx="0"
										tabindex="0">首页</a></li>
									<li class="paginate_button"><a
										href="javascript:page(${page.currentPageNo-1});"
										aria-controls="datatable-responsive" data-dt-idx="1"
										tabindex="0">上一页</a></li>
								</c:if>
								
								
								
				
								<%-- <c:forEach varStatus="status" begin="0" end="2">
									<c:if
										test="${page.currentPageNo+status.index <= page.totalPageCount}">
										<li class="paginate_button omit"><a
											href="javascript:page(${page.currentPageNo+status.index});"
											aria-controls="datatable-responsive" data-dt-idx="0"
											tabindex="0"> ${page.currentPageNo+status.index} </a></li>
									</c:if>
								</c:forEach> --%>
								
								
								
								<c:choose>
    <%-- 如果总页数不足10页，那么把所有的页数都显示出来！ --%>
    <c:when test="${page.totalPageCount <= 10 }">
        <c:set var="begin" value="1" />
        <c:set var="end" value="${page.totalPageCount }" />
    </c:when>
    <c:otherwise>
        <%-- 当总页数>10时，通过公式计算出begin和end --%>
        <c:set var="begin" value="${page.totalPageCount-5 }" />
        <c:set var="end" value="${page.totalPageCount+4 }" />    
        <%-- 头溢出 --%>
        <c:if test="${begin < 1 }">
            <c:set var="begin" value="1" />
            <c:set var="end" value="10" />
        </c:if>    
        <%-- 尾溢出 --%>
        <c:if test="${end > page.totalPageCount }">
            <c:set var="begin" value="${page.totalPageCount - 9 }" />
            <c:set var="end" value="${page.totalPageCount }" />
        </c:if>    
    </c:otherwise>
</c:choose>
<%-- 循环遍历页码列表 --%>
<c:forEach var="i" begin="${begin }" end="${end }">
    <c:choose>
        <c:when test="${i eq page.totalPageCount }">
           <li class="paginate_button omit" name="liInfo">
           <a href="javascript:page(${i});"
           aria-controls="datatable-responsive" data-dt-idx="0"
			tabindex="0"> ${i} </a>
			</li>
        </c:when>
        <c:otherwise>
            <li class="paginate_button omit" name="liInfo">
           <a href="javascript:page(${i});"
           aria-controls="datatable-responsive" data-dt-idx="0"
			tabindex="0"> ${i} </a>
			</li>    
        </c:otherwise>
    </c:choose>
    
</c:forEach>
								
								
								<c:if test="${page.currentPageNo < page.totalPageCount }">
									<li class="paginate_button next"><a
										href="javascript:page(${page.currentPageNo+1});"
										aria-controls="datatable-responsive" data-dt-idx="1"
										tabindex="0">下一页</a></li>
									<li class="paginate_button"><a
										href="javascript:page(${page.totalPageCount});"
										aria-controls="datatable-responsive" data-dt-idx="0"
										tabindex="0">末页</a></li>
								</c:if>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<li class="page-go-form"><label>跳转至</label> <input
									type="text" name="inputPage" id="inputPage" class="page-key" />页
									<button type="button" class="page-btn"
										onClick='page(document.getElementById("inputPage").value)'>GO</button>
								</li>
							</ul>
						</div>
						<!-- ngIf: pagination.pageCount > 1 -->

					</div>
					<!--页面内容END-->

				</div>
			</div>
			<!-- weModal 弹窗 -->
			<div class="modal fade ng-isolate-scope" tabindex="-1"
				params="alertModal" callback="modalAfterCallback()">
				<div class="modal-dialog">
					<div class="modal-content">
						<!-- ngIf: params.enableMiniModal&&params.closeTag -->
						<!-- ngIf: params.title -->
						<div class="modal-body">
							<div class="ng-binding"></div>
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
	<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="lib/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="lib/layer/2.4/layer.js"></script>
	<script type="text/javascript" src="js/hotelOrders.js"></script>
	<script type="text/javascript">
		function page(num){
			location.href="hotelOrders?currentPageNo="+num;
		}
		
	</script>
</body>
</html>