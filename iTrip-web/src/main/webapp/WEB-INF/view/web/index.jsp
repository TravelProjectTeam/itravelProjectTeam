<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<head>
<!-- META SECTION -->
<title>锦江国际 - 旅游预订_酒店预订_租车预订</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="keywords" content=" ">
<meta name="description" content=" ">

<meta name="format-detection" content="telephone=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/index.css">
<link rel="stylesheet" href="css/citySelect.css	">
<!-- EOF CSS INCLUDE -->
</head>
<body>
	<div class="header">
		<div class="header-container">
			<div class="header-center">
				<div class="header-logo" style="margin-top: 2px;">
					<a href="webIndex"><img alt="logo" src="images/index/logo.png"></a>
				</div>
				<div class="subnav">
					<div class="header-nav">
						<div class="header-nav-item">
							<a href="#" target="_blank">关于锦江国际</a>
						</div>
						<div class="header-nav-item">
							<a href="hotelOrders" target="_blank">会员中心</a>
						</div>
						<div class="header-nav-item">
							<a href="hotelIndex" target="_blank">酒店</a>
						</div>
						<div class="header-nav-item">
							<a href="#" target="_blank">旅游</a>
						</div>
						<div class="header-nav-item">
							<a href="#" target="_blank">汽车</a>
						</div>
						<div class="header-nav-item">
							<a href="#" target="_blank">物流</a>
						</div>
					</div>
					<div class="header-action">
						<div class="fl custom-service">
							客服热线：<b>400-820-9999</b>
						</div>
						<c:choose>
						<c:when test="${sessionScope.userSession==null}">
							<div class="header-login" style="padding-top: 7px;">
								<a id="btnLogin" class="btn btn-blue" href="webLogin">登录</a><a
									id="btnReg" class="btn btn-default" href="webRegister">注册</a>
							</div>
						</c:when>
						<c:otherwise>
						<div class="header-logined">
							<a class="logined">我的会员	<div class="arrow arrow-down"></div></a>
							<ul id="logined_box" class="logined_box">
								<li class="unit_box"><label>会员层级:</label> <span>We普卡</span>
								</li>
								<li class="unit_box"><label>卡号:</label> <span>${sessionScope.userSession.phone}</span>
								</li>
								<li class="unit_box"><label>积分:</label> <span>0</span> <a
									title="兑换" href="http://mall.bestwehotel.com/" target="_blank">【兑换】</a>
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
						</c:otherwise>
						</c:choose>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container home">
		<div class="banner">
			<div class="hanging">
				<div class="pro-tab">
					<ul>
						<li data-name="hotel" class="active">酒店</li>
						<li data-name="travel">旅游</li>
					</ul>
				</div>
				<form action="queryHotel">
				<div class="action active" id="hotel-tab">
					<div class="block">
						<label>目的地</label> <input id="citySelect" type="text" value="上海"
							autocomplete="off" title="上海" name="citysName">
					</div>
					<!-- 城市 -->
					<div id="in_city" style="display: none"></div>
					<div class="block">
						<label>入住日期</label> <input id="inDatePicker" type="text"
							autocomplete="off" readonly="readonly" data-timer="1544156651499"
							value="2018-12-07">
					</div>
					<div class="block">
						<label>离店日期</label> <input id="outDatePicker" type="text"
							autocomplete="off" readonly="readonly" data-timer="1544243051499"
							value="2018-12-08">
					</div>
					<div class="block keyword">
						<label>关键词</label> <input id="key_input" type="text"
							autocomplete="off" placeholder="酒店名/地标/商圈">
					</div>
					<div class="btn-search">
					<input type="submit" value="搜索" style="background-image: url(images/index/icon-search.png);">
						
					</div>
				</div>
				</form>
				<div class="action" id="travel-tab">
					<div class="block">
						<label>出发城市</label> <span>上海</span>
					</div>
					<div class="block">
						<label>目的地</label> <input id="travelKeyword" type="text"
							autocomplete="off" placeholder="请输入目的地">
					</div>
					<div class="block">
						<label>出发日期</label> <input id="travelInDatePicker" type="text"
							autocomplete="off" readonly="readonly" data-timer="1544156651519"
							value="2018-12-07">
					</div>
					<div class="block">
						<label>返程日期</label> <input id="travelOutDatePicker" type="text"
							autocomplete="off" readonly="readonly" data-timer="1544243051519"
							value="2018-12-08">
					</div>
					<div class="btn-search">
						<a class="btn btn-blue" target="_blank"
							href="http://travel.jinjiang.com/search?minDepartDate=2018-12-07&amp;maxDepartDate=2018-12-08&amp;departurePlace=%E4%B8%8A%E6%B5%B7&amp;keyword="
							id="searchTravel"><i class="icon icon-search"></i>搜索</a>
					</div>
				</div>
			</div>
			<div id="slider" class="cxslide to_1">
				<div class="box">
					<ul class="list">
						<li class="out"
							style="position: absolute; top: 0px; left: 0px; z-index: 1;"><a
							href="#"
							style="background-image: url(images/index/1f88bf6e-a21b-4691-aa4b-e2c5415cb0f3.jpg)"
							target="_blank"></a></li>
						<li class="in"
							style="position: absolute; top: 0px; left: 0px; z-index: 2;"><a
							href="#"
							style="background-image: url(images/index/91a3ec93-f901-4da6-9896-89df140dedef.jpg)"
							target="_blank"></a></li>
					</ul>
				</div>
				<ul class="pagination">
					<li class="b_1 out"></li>
					<li class="b_2 in selected"></li>
				</ul>
			</div>
		</div>


		<div class="content"
			style="background-image: url(images/index/home-brand-bg.jpg);">
			<div class="center-container">
				<ul class="news">
					<li><a href="#" target="_blank"> <span class="img-box"><img
								src="images/index/b16952dc-d155-4823-8b22-5a43b5af3034.jpg"
								alt="周到服务 尊荣静享"></span>
							<div class="intro">
								<h3 title="周到服务 尊荣静享">周到服务 尊荣静享</h3>
								<p title="助力成功行程 尽在锦江酒店">助力成功行程 尽在锦江酒店</p>
							</div>
					</a></li>
					<li><a href="#" target="_blank"> <span class="img-box"><img
								src="images/index/8a3c5d33-b6d6-4157-8962-368ad3d29853.jpg"
								alt="希岸，一个时尚轻奢跨界酒店"></span>
							<div class="intro">
								<h3 title="希岸，一个时尚轻奢跨界酒店">希岸，一个时尚轻奢跨界酒店</h3>
								<p title="希岸，只关心每一个出行的你">希岸，只关心每一个出行的你</p>
							</div>
					</a></li>
					<li><a href="#" target="_blank"> <span class="img-box"><img
								src="images/index/486aafd6-6e41-4347-9c2f-ca2951563a40.jpg"
								alt="邂逅白玉兰,开启精致生活"></span>
							<div class="intro">
								<h3 title="邂逅白玉兰,开启精致生活">邂逅白玉兰,开启精致生活</h3>
								<p title="为您的出行增添惊喜！">为您的出行增添惊喜！</p>
							</div>
					</a></li>
					<li><a href="#" target="_blank"> <span class="img-box"><img
								src="images/index/1d9914f9-8d90-4606-96ea-db733993163f.jpg"
								alt="7天优品 为你开启温暖"></span>
							<div class="intro">
								<h3 title="7天优品 为你开启温暖">7天优品 为你开启温暖</h3>
								<p title="自在的优享新世界">自在的优享新世界</p>
							</div>
					</a></li>
					<li><a href="#" target="_blank"> <span class="img-box"><img
								src="images/index/efe98c43-bd75-41a1-8277-29c4b1bdbde8.jpg"
								alt="留恋·每一刻"></span>
							<div class="intro">
								<h3 title="留恋·每一刻">留恋·每一刻</h3>
								<p title="轻松自由 悦动随心">轻松自由 悦动随心</p>
							</div>
					</a></li>
				</ul>
			</div>
		</div>
	</div>
	<jsp:include page="footer.jsp" />

	<script src="js/cityTemplate.js"></script>
	<script src="js/index_js/vendor.js"></script>
	<script src="js/index_js/main.js"></script>

	<script type="text/javascript">
		$(function() {
			we.pages.home();
		});
	</script>
</body>
</html>