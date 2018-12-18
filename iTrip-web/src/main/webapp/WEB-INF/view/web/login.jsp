<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<head>
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
<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
<script src="js/login.js"></script>
<!-- END META SECTION -->

<!-- CSS INCLUDE -->
<link rel="stylesheet" href="css/login.css">
<!-- EOF CSS INCLUDE -->
</head>
<body class="ng-scope">

	<div class="container ng-scope"
		ng-include="$root.siteConfig.newLogin.template_url">
		<div class="wehotel newlogin ng-scope">

			<!-- header begin -->
			<div class="header">
				<div class="header-center">
					<div class="logo">
						<a href="index.jsp"><img alt="logo"
							src="images/login/headerlogo.png"> </a>
					</div>
					<p class="pagetit ng-binding"></p>
					<div class="header-action">
						<span class="ng-binding">客服热线:</span> <span class="ng-binding">400-820-9999</span>
					</div>
				</div>
			</div>
			<!-- header end -->
			<!-- CONTENT OP -->

			<div class="center"
				style="background: url(images/login/banner.jpg) no-repeat center top;">
				<div class="login-main">
					<div class="login-container">
						<ul class="login-mode clearfix">
							<li ng-class="{active:loginType == 1}" class="active"><a
								ng-click="loginType = 1" class="ng-binding">会员账户登录</a></li>
							<li ng-class="{active:loginType == 2}" class=""><a
								ng-click="loginType = 2" class="ng-binding">手机快捷登录</a></li>
						</ul>
						<div class="login-box active" ng-class="{active:loginType == 1 }">
							<form class="ng-pristine ng-valid" action="index.jsp">
								<div class="login-box-container">
									<span id="error" style="color: red; padding-left: 40px;"></span>
									<!-- ngIf: params.errorInfo!='' -->
									<div class="form-group">
										<label class="icon icon-username" for="username"></label> <input
											class="form-control pal50 ng-pristine ng-valid" type="text"
											id="username" name="username" placeholder="用户名/手机/邮箱/会员卡号"
											autocomplete="off" maxlength="100"
											ng-model="postData.userName" ng-blur="checkLoginFailCount()">
									</div>
									<div class="form-group">
										<label class="icon icon-lock" for="password"></label> <input
											class="form-control pal50 ng-pristine ng-valid"
											type="password" id="password" name="password"
											placeholder="密码" autocomplete="off" maxlength="16">
									</div>
									<div class="form-group">
										<div class="input-icon">
											<i class="fa fa-picture-o"></i> <input class="form-control"
												style="width: 180px;" type="text" id="verifyCode"
												name="verifyCode" placeholder="验证码" maxlength="4"> <img
												style="position: absolute; right: 50; top: 25;"
												src="getVerifyCode" width="110" height="34" id="img"
												onclick="this.src=this.src+'?'+Math.random()" /> <a href="javascript:;"
												onclick="document.getElementById('img').onclick()"
												style="margin-left: 200px;">看不清，换一张?</a>
										</div>

									</div>
									<!-- ngIf: params.loginFailCount >= 3 -->

									<div class="form-group clearfix">
										<div class="checkbox">
											<label> <input class="check ng-pristine ng-valid"
												type="checkbox" id="rememberMe"
												ng-model="postData.rememberMe"> <span
												class="ng-binding">30天内自动登录</span>
											</label>
										</div>
										<a class="forget ng-binding"
											href="http://hotel.bestwehotel.com/ForgotPassword">忘记密码</a>
									</div>
								</div>
								<div class="login-button">
									<a class="btn bluebtn ng-binding" id="inLogin">登录</a>
									<p class="ng-binding">
										享更多特权, <a class="register ng-binding" href="webRegister">免费注册</a>
									</p>
								</div>
							</form>
						</div>
						<div class="login-box" ng-class="{active:loginType == 2 }">
							<form class="ng-pristine ng-valid">
								<div class="login-box-container">
									<!-- ngIf: params.quickLoginError!='' -->
									<div class="form-group">
										<input class="form-control ng-pristine ng-valid" type="text"
											placeholder="请输入您的手机号" id="phone-number" autocomplete="off"
											maxlength="50">
									</div>
									<!-- ngIf: params.isNeedVerifyCode -->

									<div class="form-group form-inline">
										<input class="form-control ng-pristine ng-valid" type="text"
											placeholder="动态密码" id="phone-vocdes" autocomplete="off"
											maxlength="6"> <a class="send-vcode ng-binding">发送动态密码</a>
									</div>

									<div class="form-group clearfix">
										<div class="checkbox">
											<label> <input class="check ng-pristine ng-valid"
												type="checkbox" id="rememberMeQuickLogin">
											</label>
										</div>
									</div>
								</div>
								<div class="login-button">
									<a class="btn bluebtn ng-binding">登录</a>
									<p class="ng-binding">
										享更多特权, <a class="register ng-binding" href="webRegister">免费注册</a>
									</p>
								</div>
							</form>
						</div>

					</div>
				</div>
			</div>
			<jsp:include page="footer.jsp" />
		</div>
	</div>
</body>
</html>