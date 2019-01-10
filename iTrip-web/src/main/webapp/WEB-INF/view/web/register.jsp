<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<head>
<script id="_1544142946634_2198" src="register_files/detect.json"></script>
<script type="text/javascript" src="register_files/openPage.txt"></script>
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

<title>会员注册</title>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="icon" href="http://hotel.bestwehotel.com/favicon-plateno.ico"
	type="image/x-icon">
<link rel="stylesheet" href="css/register.css">
<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="js/wehotel.js"></script>
</head>
<body class="ng-scope">

	
		<div class="container ng-scope">
			<div class="wehotel newRegister ng-scope">
				<!-- header begin -->
				<div class="header">
					<div class="header-center">
						<div class="logo">
							<a href="webIndex"><img alt="logo"
								src="images/login/headerlogo.png"> </a>
						</div>
						<p class="pagetit">会员注册</p>
						<div class="header-action">
							<span>客服热线:</span> <span class="ng-binding">400-820-9999</span>
						</div>
					</div>
				</div>
				<div class="main">
					<div class="main-container">
					<form id="from1" name="form1" action="add" method="post">
						<div class="login">
							<h4 class="fl">会员注册</h4>
							<p class="fr">
								已是会员，<a href="webLogin">登录</a>
							</p>
						</div>
						<div class="base-info">
							<div class="form-group form-inline" id="ppp">
								<label>手机号：</label><input type="text" id="phone"
									placeholder="请输入常用手机号，作为登录账户" name="phone"
									class="form-control ng-pristine ng-invalid ng-invalid-required"
									maxlength="50" autocomplete="off"/><br>
									<a id="ssc" style="color: red;padding-left: 115px;"></a>
									<a href="webLogin" id="gologin"></a>
							</div>
							<div class="form-group form-inline">
								<label>设置密码：</label> <input type="password" maxlength="16"
									placeholder="设置6-16位密码，建议由字母和数字组成" name="pwd" id="pwd"
									class="form-control ng-pristine ng-invalid ng-invalid-required ng-valid-minlength"
									autocomplete="off" ><br>
									<a id="ssa" style="color: red;padding-left: 115px;"></a>
							</div>
						
							<div class="form-group form-inline">
								<label>确认密码：</label> <input type="password" placeholder="重复密码"
									name="passwork" id="passwork"
									class="form-control ng-pristine ng-invalid ng-invalid-required"
									maxlength="16" autocomplete="off"><br>
									<a id="ssx" style="color: red;padding-left: 115px;" ></a>
							</div>
							<!-- ngIf: options.showValidateCodeLine -->
							<div class="form-group form-inline">
								<label>短信验证码：</label> <input type="text" placeholder="短信验证码"
									name="smsCode"
									class="form-control phone-vocdes ng-pristine ng-invalid ng-invalid-required"
									autocomplete="off" maxlength="6"> <a
									href="" class="send-vcode ng-binding">发送验证码到手机</a>
							</div>
						</div>
						<div style=" text-align:center;"><span id="sse"></span></div>
						<div class="register-button">
						<input type="submit" class="btn" value="注册" style="background-image:url('images/index/backimage.png');">
						</div>
						<div class="clause">
							<label> <input type="checkbox" name="clause"
								class="ng-pristine ng-valid ng-valid-required"
								required="required" checked="checked">
								<p>
									我已阅读并同意 <a class="ng-binding">《WeHotel细则与条款》</a>
								</p>
							</label>
						</div>
						</form>
					</div>
				</div>
				<div class="footer ng-scope">
					<div class="footer-main ng-scope">
						<aside class="links">
							<ul class="navfri clearfix">
								<li ng-if="$root.siteConfig.site_id!=$root.siteEnum.Plateno"
									class="ng-scope"><a
									href="http://hotel.bestwehotel.com/AboutUs" class="ng-binding">关于我们</a></li>
								<!-- end ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
								<li ng-if="$root.siteConfig.site_id!=$root.siteEnum.Plateno"
									class="ng-scope"><a
									href="http://hotel.bestwehotel.com/AboutUs/ContactUs.html"
									class="ng-binding">联系我们</a></li>
								<!-- end ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
								<li ng-if="$root.siteConfig.site_id!=$root.siteEnum.Plateno"
									class="ng-scope"><a
									href="http://hotel.bestwehotel.com/Career" class="ng-binding">加入我们</a></li>
								<!-- end ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
								<li><a
									href="http://hotel.bestwehotel.com/AboutUs/Help.html"
									class="ng-binding">常见问题</a></li>
								<li><a
									href="http://hotel.bestwehotel.com/AboutUs/UserExperience.html"
									class="ng-binding">用户体验反馈</a></li>
							</ul>
						</aside>
						<div class="ffam">
							<p class="ng-binding">Copyright©1997-2017锦江国际（集团）有限公司版权所有</p>
							<p class="ng-binding">沪ICP备14043958号-6</p>
						</div>
						<!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
						<div class="footer-news ng-scope"
							ng-if="$root.siteConfig.site_id==$root.siteEnum.WeHotel">
							<ul>
								<li class="gongshang_icon"><a rel="nofollow"
									href="http://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&amp;entyId=2013071613131331"
									title="上海工商" target="_blank"></a></li>
								<li class="net_policeman"><a rel="nofollow" href=""
									title="安全验证"></a></li>
								<li class="collect_credit"><a rel="nofollow"
									href="http://www.cyberpolice.cn/" title="上海网警" target="_blank"></a></li>
								<li class="verify_success"><a rel="nofollow"
									href="http://www.zx110.org/" title="征信网" target="_blank"></a></li>
							</ul>
						</div>
						<!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
					</div>
				</div>
			</div>
		</div>
</body>
</html>