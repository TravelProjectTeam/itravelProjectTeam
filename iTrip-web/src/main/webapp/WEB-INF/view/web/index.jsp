<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
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

<!-- EOF CSS INCLUDE -->
</head>
<body>
	<div class="header">
		<div class="header-container">
			<div class="header-center">
				<div class="header-logo" style="margin-top: 2px;">
					<a href="index.jsp"><img alt="logo"
						src="images/index/logo.png"></a>
				</div>
				<div class="subnav">
					<div class="header-nav">
						<div class="header-nav-item">
							<a href="#" target="_blank">关于锦江国际</a>
						</div>
						<div class="header-nav-item">
							<a href="hotelOrders.jsp" target="_blank">会员中心</a>
						</div>
						<div class="header-nav-item">
							<a href="hotel.jsp" target="_blank">酒店</a>
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
						<div class="header-login"  padding-top: 7px;">
							<a id="btnLogin" class="btn btn-blue" href="webLogin">登录</a><a
								id="btnReg" class="btn btn-default" href="webRegister">注册</a>
						</div>
						<div class="header-logined" style="display: none;">
							<a class="logined">注册会员
								<div class="arrow arrow-down"></div>
							</a>
							<ul id="logined_box" class="logined_box">
								<li class="unit_box"><label>会员层级:</label> <span>We普卡</span>
								</li>
								<li class="unit_box"><label>卡号:</label> <span>31127947837</span>
								</li>
								<li class="unit_box"><label>积分:</label> <span>0</span> <a
									title="兑换" href="http://mall.bestwehotel.com/" target="_blank">【兑换】</a>
								</li>
								<li class="unit_box"><a
									href="#">我的优惠券</a>
								</li>
								<li class="member_dealing_unit"><a
									href="hotelOrders.jsp">我的订单</a>
								</li>
								<li class="member_dealing_unit"><a
									href="#">我的账户</a></li>
								<li class="member_dealing_unit"><a
									class="logout ng-binding" id="logout">【退出】</a></li>
								<li class="enter_club"><a
									href="hotelOrders.jsp">进入会员中心
										&gt; &gt;</a></li>
							</ul>
						</div>
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
				<div class="action active" id="hotel-tab">
					<div class="block">
						<label>目的地</label> <input id="selectCity" data-city-code="AR04567"
							type="text" value="上海" autocomplete="off" title="上海">
					</div>
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
						<a class="btn btn-blue" target="_blank"
							href="queryHotel"
							id="search"><i class="icon icon-search" style="background-image: url(images/index/icon-search.png);"></i>搜索</a>
					</div>


				</div>
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
				<div id="kids-panel" class="kids-panel hide">
					<div class="section" onselectstart="return false;">
						<div class="row">
							<label>房间数:</label>
							<div class="number rooms">
								<i data-name="minus" class="disabled">-</i> <span>1</span> <i
									data-name="plus">+</i>
							</div>
						</div>
						<div class="row">
							<label>成人数:<span>18岁及以上</span></label>
							<div class="number adults">
								<i data-name="minus" class="disabled">-</i> <span>1</span> <i
									data-name="plus">+</i>
							</div>
						</div>
						<div class="row">
							<label>儿童数:<span>0~17岁</span></label>
							<div class="number children">
								<i data-name="minus" class="disabled">-</i> <span>0</span> <i
									data-name="plus">+</i>
							</div>
						</div>
					</div>
					<div class="section children-panel" style="display: none;">
						<div class="row" style="display: none;">
							<label>儿童1:</label> <select data-name="child1">
								<option value="0" selected="selected">0岁</option>
								<option value="1">1岁</option>
								<option value="2">2岁</option>
								<option value="3">3岁</option>
								<option value="4">4岁</option>
								<option value="5">5岁</option>
								<option value="6">6岁</option>
								<option value="7">7岁</option>
								<option value="8">8岁</option>
								<option value="9">9岁</option>
								<option value="10">10岁</option>
								<option value="11">11岁</option>
								<option value="12">12岁</option>
								<option value="13">13岁</option>
								<option value="14">14岁</option>
								<option value="15">15岁</option>
								<option value="16">16岁</option>
								<option value="17">17岁</option>
							</select>
						</div>
						<div class="row" style="display: none;">
							<label>儿童2:</label> <select data-name="child2">
								<option value="0" selected="selected">0岁</option>
								<option value="1">1岁</option>
								<option value="2">2岁</option>
								<option value="3">3岁</option>
								<option value="4">4岁</option>
								<option value="5">5岁</option>
								<option value="6">6岁</option>
								<option value="7">7岁</option>
								<option value="8">8岁</option>
								<option value="9">9岁</option>
								<option value="10">10岁</option>
								<option value="11">11岁</option>
								<option value="12">12岁</option>
								<option value="13">13岁</option>
								<option value="14">14岁</option>
								<option value="15">15岁</option>
								<option value="16">16岁</option>
								<option value="17">17岁</option>
							</select>
						</div>
						<div class="row" style="display: none;">
							<label>儿童3:</label> <select data-name="child3">
								<option value="0" selected="selected">0岁</option>
								<option value="1">1岁</option>
								<option value="2">2岁</option>
								<option value="3">3岁</option>
								<option value="4">4岁</option>
								<option value="5">5岁</option>
								<option value="6">6岁</option>
								<option value="7">7岁</option>
								<option value="8">8岁</option>
								<option value="9">9岁</option>
								<option value="10">10岁</option>
								<option value="11">11岁</option>
								<option value="12">12岁</option>
								<option value="13">13岁</option>
								<option value="14">14岁</option>
								<option value="15">15岁</option>
								<option value="16">16岁</option>
								<option value="17">17岁</option>
							</select>
						</div>
					</div>
					<div class="section">
						<div class="row">
							<a class="btn">确定</a>
						</div>
					</div>
				</div>
				<div id="city-panel" class="city-panel hide">
					<ul class="nav nav-tabs">
						<li data-name="hot" class="active"><a>热门城市</a></li>
						<li data-name="ABCDE"><a>ABCDE</a></li>
						<li data-name="FGHIJ"><a>FGHIJ</a></li>
						<li data-name="KLMNO"><a>KLMNO</a></li>
						<li data-name="PQRST"><a>PQRST</a></li>
						<li data-name="UVWXYZ"><a>UVWXYZ</a></li>
					</ul>
					<div class="tab-panel">
						<ul class="clearfix">
							<li class="title"></li>
							<li><a class="title" title="北京" data-city-code="AR06513">北京</a><a
								class="title" title="广州" data-city-code="AR00252">广州</a><a
								class="title" title="深圳" data-city-code="AR05223">深圳</a><a
								class="title" title="武汉" data-city-code="AR02960">武汉</a><a
								class="title" title="成都" data-city-code="AR04177">成都</a><a
								class="title" title="重庆" data-city-code="AR00357">重庆</a><a
								class="title" title="上海" data-city-code="AR04567">上海</a><a
								class="title" title="西安" data-city-code="AR02503">西安</a><a
								class="title" title="长沙" data-city-code="AR03026">长沙</a><a
								class="title" title="天津" data-city-code="AR04257">天津</a><a
								class="title" title="南京" data-city-code="AR01057">南京</a><a
								class="title" title="贵阳" data-city-code="AR01984">贵阳</a><a
								class="title" title="南昌" data-city-code="AR00907">南昌</a><a
								class="title" title="济南" data-city-code="AR00485">济南</a><a
								class="title" title="郑州" data-city-code="AR03008">郑州</a><a
								class="title" title="厦门" data-city-code="AR00265">厦门</a><a
								class="title" title="杭州" data-city-code="AR03983">杭州</a><a
								class="title" title="青岛" data-city-code="AR05649">青岛</a><a
								class="title" title="哈尔滨" data-city-code="AR01840">哈尔滨</a><a
								class="title" title="珠海" data-city-code="AR04032">珠海</a></li>
						</ul>
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


		<div class="content" style="background-image: url(images/index/home-brand-bg.jpg);">
			<div class="center-container">
				<ul class="news">
					<li><a href="#" target="_blank">
							<span class="img-box"><img
								src="images/index/b16952dc-d155-4823-8b22-5a43b5af3034.jpg"
								alt="周到服务 尊荣静享"></span>
							<div class="intro">
								<h3 title="周到服务 尊荣静享">周到服务 尊荣静享</h3>
								<p title="助力成功行程 尽在锦江酒店">助力成功行程 尽在锦江酒店</p>
							</div>
					</a></li>
					<li><a href="#" target="_blank">
							<span class="img-box"><img
								src="images/index/8a3c5d33-b6d6-4157-8962-368ad3d29853.jpg"
								alt="希岸，一个时尚轻奢跨界酒店"></span>
							<div class="intro">
								<h3 title="希岸，一个时尚轻奢跨界酒店">希岸，一个时尚轻奢跨界酒店</h3>
								<p title="希岸，只关心每一个出行的你">希岸，只关心每一个出行的你</p>
							</div>
					</a></li>
					<li><a href="#" target="_blank"> <span
							class="img-box"><img
								src="images/index/486aafd6-6e41-4347-9c2f-ca2951563a40.jpg"
								alt="邂逅白玉兰,开启精致生活"></span>
							<div class="intro">
								<h3 title="邂逅白玉兰,开启精致生活">邂逅白玉兰,开启精致生活</h3>
								<p title="为您的出行增添惊喜！">为您的出行增添惊喜！</p>
							</div>
					</a></li>
					<li><a
						href="#"
						target="_blank"> <span class="img-box"><img
								src="images/index/1d9914f9-8d90-4606-96ea-db733993163f.jpg"
								alt="7天优品 为你开启温暖"></span>
							<div class="intro">
								<h3 title="7天优品 为你开启温暖">7天优品 为你开启温暖</h3>
								<p title="自在的优享新世界">自在的优享新世界</p>
							</div>
					</a></li>
					<li><a href="#" target="_blank">
							<span class="img-box"><img
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
	<div class="footer">
		<div class="footer-wrap">
			<div class="footer-content">
				<div class="footer-left">
					<ul class="footer-nav">
						<li><a href="#" target="_blank">关于我们</a></li>
						<li><a href="#" target="_blank">联系我们</a></li>
						<li><a href="#" target="_blank">加入我们</a></li>
						<li><a href="#" target="_blank">常见问题</a></li>
						<li><a href="#" target="_blank">用户体验反馈</a></li>
						<li><a href="#" target="_blank">锦江e卡通</a></li>
					</ul>
					<div class="footer-bei">
						Copyright©1997-2017锦江国际（集团）有限公司版权所有<br> <a href="#"
							target="_blank">沪ICP备05048113号-1</a>
					</div>
					<div class="footer-news">
						<ul>
							<li><a class="police" target="_blank" href="#"><img
									src="images/index/ghs.png"><span>沪公网安备
										31010102002050号</span></a></li>
						</ul>
					</div>
				</div>
				<div class="footer-right">
					<div class="footer-ewm-wrap">
						<div class="custom-service">
							<img src="images/index/custom-service.png" alt="">
						</div>
						<div class="footer-ewm-pic">
							<img src="images/index/jinjiang_app.jpg" alt="">
							<p>锦江旅行APP</p>
						</div>
						<div class="footer-ewm-pic">
							<img src="images/index/jinjiang_wechat.jpg" alt="">
							<p>锦江旅行公众号</p>
						</div>
					</div>
					<!--<p class="footer-help">服务电话：400 874 0087</p>-->
				</div>
			</div>

		</div>
	</div>

	<script src="js/index_js/vendor.js"></script>

	<script src="js/index_js/main.js"></script>


	<script type="text/javascript">
		$(function() {
			// 头部导航
			//        $('.header-nav-item').hover(function(){
			//            $(this).find('.slide-submeu').css('visibility','visible');
			//        },function(){
			//            $(this).find('.slide-submeu').css('visibility','hidden');
			//        });

			// 二维码
			$(window).scroll(function() {
				if ($(document).scrollTop() > $('.banner').height()) {
					$('#right-menu').css('visibility', 'visible');
				} else {
					$('#right-menu').css('visibility', 'hidden');
				}
			});

			$(".backtop").click(function() {
				$("html,body").animate({
					scrollTop : 0
				}, 1000);
			});

			$(".joinus").mouseover(function() {
				$(".qrcode").addClass('show');
			});

			$(".joinus").mouseleave(function() {
				$(".qrcode").removeClass('show');
			});

		});
	</script>

	<script type="text/javascript">
		$(function() {
			we.pages.home();
		});
	</script>
</body>
</html>