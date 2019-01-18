<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<%@ page import="java.text.SimpleDateFormat"%>

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<head>
<link rel="stylesheet" type="text/css" href="css/hotelDatail.css">
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

.tupian {
	width: 192px;
	height: 150px;
}

.tupian img {
	width: 200px;
	height: 150px;
	cursor: pointer;
	transition: all 0.6s;
}

.tupian img:hover {
	transform: scale(1.4);
}

.btn-blue {
	width: 60px;
	background-color: #63B8FF;
	color: #F0FFFF;
	text-align: center;
}

.btn-default {
	width: 60px;
	height: 25px;
	color: #63B8FF;
	text-align: center;
	background-color: #F8F8FF;
}

.btn-default:hover {
	background-color: #6495ED;
	color: #F0FFFF;
}

.btn-blue:hover {
	background-color: #6495ED;
	color: #F0FFFF;
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
<script type="text/javascript"
	src="http://api.map.baidu.com/api?v=2.0&ak=ikPVLLkgWCboYmkQBEZXaZlb9pLzmuzG"></script>

</head>
<body ng-controller="hotelDetailController" ng-init="init()"
	ng-class="{'plateno':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<%
		Date d = new Date();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String now = df.format(d);
		Date preDate = new Date(d.getTime() - 24 * 60 * 60 * 1000); //前一天
		Date nextDate = new Date(d.getTime() + 24 * 60 * 60 * 1000); //后一天
		String nextDates = df.format(nextDate);
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
					<div class="logo" style="padding-top: 0px;">
						<a href="webIndex"><img alt="logo"
							src="images/login/headerlogo.png"></a>
					</div>
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<div class="navigation ng-scope" style="padding-top: 0px;">
						<a
							ng-class="{'active': $root.topNavIndex == $root.siteConfig.topNavEnum.home,'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club }"
							href="hotelIndex" class="ng-binding">酒店首页</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club }"
							href="hotelOrders" class="ng-binding hidden">会员首页</a> <a href=""
							class="ng-binding hidden">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.partners||$root.topNavIndex == $root.siteConfig.topNavEnum.club,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.hotel}"
							href="javascript:;" class="ng-binding active">酒店预订</a> <a
							ng-class="{'hidden':$root.topNavIndex == $root.siteConfig.topNavEnum.club || $root.topNavIndex == $root.siteConfig.topNavEnum.partners }"
							href="hotelOrders" class="ng-binding">会员中心</a> <a href="#"
							target="" class="ng-binding">积分商城</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club&amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners  ,'active':$root.topNavIndex == $root.siteConfig.topNavEnum.partners}"
							href="" class="ng-binding hidden">合作伙伴</a> <a
							ng-class="{'hidden':$root.topNavIndex != $root.siteConfig.topNavEnum.club &amp;&amp; $root.topNavIndex != $root.siteConfig.topNavEnum.partners }"
							href="" class="ng-binding hidden">关于会员</a>
					</div>
					<!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
					<div class="header-action clearfix">

						<div class="header-action clearfix">
							<div class="fl custom-service">
								客服热线：<b>400-820-9999</b>
							</div>
							<c:choose>
								<c:when test="${sessionScope.userSession==null}">
									<div class="header-login" style="padding-top: 7px;">
										<a id="btnLogin" class="btn-blue" href="webLogin">登录</a><a
											id="btnReg" class="btn-default" href="webRegister">注册</a>
									</div>
								</c:when>
								<c:otherwise>
									<div class="header-logined">
										<a class="logined">我的会员
											<div class="arrow arrow-down"></div>
										</a>
										<ul id="logined_box" class="logined_box">
											<li class="unit_box"><label>会员层级:</label> <span>We普卡</span>
											</li>
											<li class="unit_box"><label>卡号:</label> <span>${sessionScope.userSession.phone}</span>
											</li>
											<li class="unit_box"><label>积分:</label> <span>0</span> <a
												title="兑换" href="" target="">【兑换】</a></li>
											<li class="member_dealing_unit"><a href="hotelOrders">我的订单</a>
											</li>
											<li class="member_dealing_unit"><a href="webBerInfo">我的账户</a></li>
											<li class="member_dealing_unit"><a
												class="logout ng-binding" id="logout" href="outLogin">【退出】</a></li>
											<li class="enter_club"><a href="hotelOrders">进入会员中心
													&gt; &gt;</a></li>
										</ul>
									</div>
								</c:otherwise>
							</c:choose>
						</div>

					</div>
				</div>
				<!-- header end -->
			</div>
			<!-- CONTENT OP -->

			<div class="content">
				<div class="crumbs">
					<a href="webIndex" class="ng-binding"><i
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
									src="${hotel.photograph}" width="100%">
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
											<img onerror="this.parentNode.removeChild(this)"
												src="${hotel.photograph}" width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img onerror="this.parentNode.removeChild(this)"
												src="${hotel.detailsImage1}" width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img onerror="this.parentNode.removeChild(this)"
												src="${hotel.detailsImage2}" width="100%">
										</div>
									</li>
									<!-- end ngRepeat: image in hotelImages -->
									<li ng-class="{'on':$index==0}"
										ng-style="{'opacity':$index==0?1:0.5}"
										ng-repeat="image in hotelImages" class="ng-scope"
										style="opacity: 0.5;">
										<div class="pic">
											<img onerror="this.parentNode.removeChild(this)"
												src="${hotel.detailsImage3}" width="100%">

										</div>

									</li>

									<!-- end ngRepeat: image in hotelImages -->
									<c:forEach items="${housesList}" var="houseslist">
										<li ng-class="{'on':$index==0}"
											ng-style="{'opacity':$index==0?1:0.5}"
											ng-repeat="image in hotelImages" class="ng-scope"
											style="opacity: 0.5;">
											<div class="pic">
												<img onerror="this.parentNode.removeChild(this)"
													src="${houseslist.roomImage}" width="100%">
											</div>
										</li>
									</c:forEach>
									<!-- end ngRepeat: image in hotelImages -->
								</ul>
							</div>
							<!-- ngIf: hotelInfo.videoUrl -->
							<a href="javascript:;" class="bIcon btnLeft"> <i
								class="iconfont icon-zuoyoujiantou"></i>
							</a> <a href="javascript:;" class="bIcon btnRight"> <i
								class="iconfont icon-zuoyoujiantou-copy-copy"></i>
							</a>
						</div>
					</div>

					<div class="hotelInfo-main">
						<div class="hotelInfo-main-section">
							<input type="hidden" id="city" value="${hotel.cityName}" /> <input
								type="hidden" id="address" value="${hotel.address}" />
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
							</div>
						</div>
						<div class="hotelInfo-main-tips">
							<p class="ng-binding">酒店简介：</p>
							<p ng-bind-html="hotelInfo.description[0]" class="ng-binding">
								${hotel.details}</p>
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
								value="${sessionScope.inDatePicker}" data-timer="1544112000000">
						</div>
						<div class="room-date-item">
							<label class="ng-binding">离店日期</label> <input type="text"
								placeholder="离店日期" class="input-date" id="checkOutDate"
								value="${sessionScope.outDatePicker}">
						</div>

					</div>
					<div class="room-title">
						<span class="room-title-first ng-binding">房型</span><span
							class="ng-binding">套餐</span> <span class="ng-binding"
							style="padding-left: 110px;">早餐</span> <span class="ng-binding">取消政策</span>
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
																		<div class="tupian">
																			<img src="${houses.roomImage}" />
																		</div>
																		<div class="room-photo-section">
																			<span class="ng-binding">${houses.valueName}</span>
																			<div class="room-photo-detail">
																				<a class="ng-binding">详情</a>
																				<ul>
																					<!-- ngIf: room.bedTypeDesc -->
																					<li ng-if="room.bedTypeDesc"
																						class="ng-binding ng-scope">床型: <c:choose>
																							<c:when
																								test="${fn:contains(houses.valueName,'双')}">  
																						        双床   ${houses.bedArea}
																						   </c:when>
																							<c:otherwise> 
																						    大床
																						   </c:otherwise>
																						</c:choose> ${houses.bedArea}
																					</li>
																					<!-- end ngIf: room.bedTypeDesc -->
																					<!-- ngIf: room.area -->
																					<li ng-if="room.area" class="ng-binding ng-scope">面积：${houses.roomSize}</li>
																					<!-- end ngIf: room.area -->
																					<!-- ngIf: room.endFloor -->
																					<li ng-if="room.endFloor"
																						class="ng-binding ng-scope">楼层：${houses.floor}</li>
																					<!-- end ngIf: room.endFloor -->
																					<li class="ng-binding"><c:if
																							test="${houses.isHavingbed ==0}">可以加床</c:if> <c:if
																							test="${houses.isHavingbed ==1}">不可以加床</c:if></li>
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
															<c:forEach items="${houses.roomsList}" var="rooms">
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
																						class="section ng-binding">会员本人入住酒店，可赠送礼包 </span>
																						<span class="section ng-binding"></span>
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
																			<p class="ng-binding" style="padding-top: 8px;">
																				<c:if test="${rooms.cancellationPolicy ==0}">限时取消</c:if>
																				<c:if test="${rooms.cancellationPolicy ==1}">免费取消</c:if>
																				<c:if test="${rooms.cancellationPolicy ==2}">不可取消</c:if>
																			</p> <span class="show ng-binding" style="width: 300px">
																				<c:if test="${rooms.cancellationPolicy ==0}">预付房费后，在当天入住 18:00前可免费取消订单/申请退款，之后不可取消订单/退款。</c:if>

																				<c:if test="${rooms.cancellationPolicy ==1}">预付房费后，在当天入住
																		12:00前可免费取消订单/申请退款，逾期取消或变更，将收取首晚房费。</c:if> <c:if
																					test="${rooms.cancellationPolicy ==2}">特价房，不可取消。</c:if>
																		</span>
																		</td>
																		<td>
																			<p class="ng-binding">
																				<i class="person-icon"></i>x${houses.ceiling}
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
																		<c:choose>
																				<c:when
																					test="${houses.houseNum >= houses.inventory}">
																					<div class="room-link">
																						<!--<a class="surplus" ng-if="rate.totalInventory > 0 && rate.totalInventory < 5"><i class="icon-danger"></i>仅余{{rate.totalInventory}}间</a>-->
																						<input class="btn redbtn ng-binding" type="button"
																							value="满房" disabled="disabled" style="background-color: #DDDDDD" />
																						<!--_ORDER_BUTTON_TEXT') : 'HOTELDETAIL_ORDER_BUTTON_FULL_TEXT') | T}}</a>-->
																					</div>
																				</c:when>
																				<c:otherwise>
																					<div class="room-link">
																						<!--<a class="surplus" ng-if="rate.totalInventory > 0 && rate.totalInventory < 5"><i class="icon-danger"></i>仅余{{rate.totalInventory}}间</a>-->
																						<input class="btn redbtn ng-binding" type="button"
																							value="立即预定"
																							onclick='datail(${hotel.id},${houses.id},${rooms.id})' />
																						<!--_ORDER_BUTTON_TEXT') : 'HOTELDETAIL_ORDER_BUTTON_FULL_TEXT') | T}}</a>-->
																					</div>
																				</c:otherwise>
																			</c:choose></td>
																	</tr>

																</tbody>
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
							<b class="ng-binding">入住时间：</b>${hotel.checkDate}
						</p>
						<p class="ng-binding">
							<b class="ng-binding">退房时间：</b>${hotel.leaveDate}
						</p>
						<p>
							<b class="ng-binding">酒店介绍：</b>
						</p>
						<p ng-bind-html="hotelInfo.description[0]" class="ng-binding">
							${hotel.details}</p>
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
								<p id="allReview" class="ng-binding">${count}条真实评论</p>
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
							<li class="ng-binding review-select">全部点评 ${count}</li>
							<li class="ng-binding">好评 ${hao}</li>
							<li class="ng-binding">中评 ${zhong}</li>
							<li class="ng-binding">差评 ${cha}</li>
						</ul>
						<ul class="user-reviewBox">
							<!--每个Li 都是一个循环-->
							<c:forEach items="${comment}" var="coms">
								<li class="ng-scope">
									<div class="review-userImg">
										<div class="user-photo">

											<span class="user-raduis icon-hotel_user-bg hotel"></span>
										</div>
										<div class="user-name user-reviewName ng-binding">${coms.linkUserName}</div>
									</div>
									<div class="review-comment">
										<div class="review-main">
											<p class="ng-binding">${coms.comment}</p>
										</div>
										<div class="review-userStar">
											<ul class="comment-level ng-binding">
												<li class="star_full"></li>
												<li class="star_full"></li>
												<li class="star_full"></li>
												<li class="star_full"></li>
												<li class="star_full"></li>
											</ul>
											<div class="user-time ng-binding">
												<fmt:formatDate value="${coms.createDate}"
													pattern="yyyy年MM月" />
											</div>
										</div>
										<!-- ngIf: comment.childrenEvaluations.length>0 -->
									</div>
								</li>
							</c:forEach>
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
							<div class="next ng-scope"
								ng-if="pagination.pageIndex &lt; pagination.pageCount"
								ng-click="goPage('next')">
								<icon class="triangle-right"></icon>
							</div>
							<div class="skip">
								到<input type="text" ng-model="pagination.jumpPageIndex"
									class="ng-pristine ng-valid" value="1">页
							</div>
							<button ng-click="goPage(pagination.jumpPageIndex)">确&nbsp;&nbsp;定</button>
						</div>
					</div>
				</div>
			</div>

			<div class="modal fade ng-isolate-scope" tabindex="-1"
				ng-class="{'in': showModal == true,'base-modal':params.enableMiniModal}"
				we-modal="" show-modal="options.showAlert" params="alertModal"
				callback="alertModalCallback()" on-close="closeCallback()">
				<div class="modal-dialog">
					<div class="modal-content" ng-class="params.contentClass">
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

	<script type="text/javascript">
	function datail(id,sid,rid){
		var checkInDate = $("#checkInDate").val();
		var checkOutDate = $("#checkOutDate").val();
		location.href="WebDatail?id="+id+"&sid="+sid+"&rid="+rid+"&checkInDate="+checkInDate+"&checkOutDate="+checkOutDate;
	};
	$(function() {
		var address = $("#address").val();
		var city = $("#city").val();
		//地图div
		var map = new BMap.Map("mini_map_box");
		//开启鼠标滚轮缩放
		map.enableScrollWheelZoom(true);
		var point = new BMap.Point(116.331398,39.897445);
		map.centerAndZoom(point,12);
		// 创建地址解析器实例
		var myGeo = new BMap.Geocoder();
		// 将地址解析结果显示在地图上,并调整地图视野
		myGeo.getPoint(address, function(point){
			if (point) {
				map.centerAndZoom(point, 19);
				map.addOverlay(new BMap.Marker(point));
			}else{
				alert("您选择地址没有解析到结果!");
			}
		}, city);
	});
	$(function() {
		var arry=$(".list .pic img");
		
		var img=$(".ng-scope>img");

		flagIndex=0;
		$(".btnRight").click(function(){
			if(flagIndex==arry.length-4){
				return;
			}
			++flagIndex;
			var tempSrc=arry[0].src;
			for(i=0;i<arry.length;i++){
				
				if(i==arry.length-1){
					arry[arry.length-1].src=tempSrc;
				}else{
					arry[i].src=arry[i+1].src;
				}
			}
		});
		
		$(".btnLeft").click(function(){		
			if(flagIndex<=0){
				return;
			}
			flagIndex--;
			var tempSrc=arry[arry.length-1].src;
			
			for(i=arry.length-1;i>=0;i--){
				if(i==0){
					arry[0].src=tempSrc;
				}else{
					arry[i].src=arry[i-1].src;
				}
			}
		});
		$(".list .pic img").click(function(){
			img.attr('src',$(this).attr('src'));
			$(this).parent().parent().css("opacity","1");
			$(this).parent().parent().siblings().css("opacity","0.5");
		});
	})
	</script>

</body>
</html>