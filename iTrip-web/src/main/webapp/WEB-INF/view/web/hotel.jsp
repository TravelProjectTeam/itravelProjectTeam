<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<head>
<script type="text/javascript" src="js/hotel_js/openPage.txt"></script>
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
body{padding:0;margin:0 10px;}
.title{padding:0;margin:10px 0;font:700 18px/1.5 \5fae\8f6f\96c5\9ed1;}
.title em{font-style:normal;color:#C00;font-size:14px;}
.title a{font:400 14px/1.5 Tahoma;}
.example{margin-top:10px;}
.example button{margin:0 5px 10px 0;}
</style>
<!-- META SECTION -->

<title>铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店</title>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<meta name="Keywords" content="锦江酒店官网,连锁酒店官网,快捷酒店预订,经济型酒店预订,锦江酒店预订,锦江之星酒店预订,星级商务酒店预订,白玉兰酒店,百时快捷酒店,金广快捷酒店">-->
<link rel="icon" href="http://hotel.bestwehotel.com/favicon-plateno.ico"
	type="image/x-icon">
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/hotel.css">
<!-- EOF CSS INCLUDE -->
<script src="http://yui.yahooapis.com/3.5.1/build/yui/yui-min.js"></script>
</head>
<body ng-controller="homeController" ng-init="init()"
	ng-class="{'plateno':$root.siteConfig.site_id==$root.siteEnum.Plateno}"
	class="ng-scope">

	<div class="container ng-scope"
		ng-include="$root.siteConfig.index.template_url">
		<div class="wehotel index ng-scope">
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
						<c:choose>
							<c:when test="${sessionScope.userSession==null}">
								<div class="header-login">
									<a class="btn bluebtn ng-scope" href="#" style="width: 80px;">登录</a>
									<a class="btn whitebtn ng-scope" href="#" style="width: 80px;">注册</a>
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
				<!-- header end -->
			</div>

			<div class="banner cxslide">
				<div class="box">
					<ul class="banner-inner list">
						<!-- ngRepeat: banner in $root.siteConfig.bannerList.home -->
						<li ng-repeat="banner in $root.siteConfig.bannerList.home"
							class="ng-scope"><a
							style="background: url(http://static.bestwehotel.com/opt/static/chameleon/image/20180628/ab225a86-d2bc-45c4-8ebc-e1491b6b81a9.jpg) no-repeat center top"
							href="webIndex" target="_self"></a></li>
						<!-- end ngRepeat: banner in $root.siteConfig.bannerList.home -->
					</ul>
				</div>
			</div>
			<form action="queryHotel" id="myForm">
				<div class="content">
					<div class="search">
						<div class="condition"
							ng-class="{'international': options.isAbroad &amp;&amp; $root.siteConfig.site_id == $root.siteEnum.WeHotel}">
							<div class="con-item" id="city-item"
								ng-class="{'open': options.isAbroad &amp;&amp; $root.siteConfig.site_id == $root.siteEnum.WeHotel}">
								<lable class="ng-binding">目的地</lable>
								<p>
									<!--<b ng-bind="selectedCityName"></b>-->
									<input type="text" id="selectCity" placeholder="请输入汉字或拼音"
										value="郴州" ng-model="selectedCityName"
										class="ng-pristine ng-valid" name="citysName">
								</p>
							</div>
							<div class="con-item">
								<lable class="ng-binding">入住日期</lable>
								<p>
									<b id="inDate">07</b><span id="inMonth">12月</span>
								</p>
								<i class="uarr"></i> <a class="search-data" id="inDatepicker"
									data-timer="1544143046185"></a>
							</div>
							<div class="con-item changeborder">
								<lable class="ng-binding">离店日期</lable>
								<p>
									<b id="outDate">08</b><span id="outMonth">12月</span>
								</p>
								<i class="uarr"></i> <a class="search-data" id="outDatepicker"
									data-timer="1544229446185"></a>
							</div>
							<div class="btn-search" onclick="hotelSearch()">
								<a class="btn bluebtn">搜索</a>
							</div>
						</div>
						<!--关键字begin-->
						<div class="keyword">
							<i class="search-icon"></i> <input type="text"
								placeholder="酒店、关键字" id="key_input"
								class="search-keyword-input ng-pristine ng-valid">
						</div>
						<div id="dateInfo" style="z-index:999;">
						</div>
					</div>
					</form>

					<div class="infomation">
						<h1>
							<p class="ng-binding">WeHotel连接美好生活</p>
						</h1>
					</div><!--关键字end-->
					<!-- ngInclude: $root.siteConfig.footer_url -->
					<jsp:include page="footer.jsp" />
				</div>
		</div>
		<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
		<script type="text/javascript">
		var config = {
				modules: {
					'price-calendar': {
						fullpath: 'js/price-calendar.js',
						type    : 'js',
						requires: ['price-calendar-css']
					},
					'price-calendar-css': {
						fullpath: 'css/price-calendar.css',
						type    : 'css'
					}
				}
			};
			YUI(config).use('price-calendar', 'jsonp', function(Y) {
			    var sub  = Y.Lang.sub;
			    var url = 'http://fgm.cc/learn/calendar/price-calendar/getData.asp?minDate={mindate}&maxDate={maxdate}&callback={callback}';
			    //价格日历实例    
			    var oCal = new Y.PriceCalendar();
			        //点击确定按钮
			        oCal.on('confirm', function() {
			            alert('入住时间：' + this.get('depDate') + '\n离店时间：' + this.get('endDate'));
			        });
			        //点击取消按钮
			        oCal.on('cancel', function() {
			            this.set('depDate', '').set('endDate', '').render();
			        });
			    /* $(function() {
					
				}) */
			});
			
			function hotelSearch() {
				$("#myForm").submit();
			}
		</script>
</body>
</html>