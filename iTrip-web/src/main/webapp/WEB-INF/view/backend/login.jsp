<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="Pragma" content="no-cache">
		<meta http-equiv="Cache-Control" content="no-cache">
			<meta http-equiv="Expires" content="0">
				<title>酒店管理系统</title>
				<link href="h-ui.admin/css/login.css" type="text/css" rel="stylesheet">
					<link rel="stylesheet" href="h-ui.admin/css/layer.css"
						id="layui_layer_skinlayercss" style="">
</head>
<body style="background-image: url('h-ui.admin/images/3.jpg');">
	<div class="login">
		<div class="message">锦江国际后台登录</div>
		<div id="darkbannerwrap"></div>
		<form method="post">
			<input name="action" value="login" type="hidden"> <input
				name="username" placeholder="用户名/手机号码/邮箱" required="" type="text"
				id="username">
					<hr class="hr15">
						<input name="password" placeholder="密码" required=""
							type="password" id="password">
							<hr class="hr15">
								<input value="登录" style="width: 100%;" type="button"
									id="loginbtn">
									<hr class="hr20">
		</form>
	</div>
	<div class="copyright">© Copyright © 2019 艾腾 版权所有</div>
	<script src="h-ui.admin/js/jquery.js" type="text/javascript"></script>
	<script type="text/javascript">
		if (!(window.jQuery)) {
			var s = document.createElement('script');
			s.setAttribute('src',
					'https://cdn.bootcss.com/jquery/1.8.3/jquery.min.js');
			s.setAttribute('type', 'text/javascript');
			document.getElementsByTagName('head')[0].appendChild(s);
		}
	</script>
	<script type="text/javascript">
		$(function() {
			var ua = navigator.userAgent;
			var ipad = ua.match(/(iPad).*OS\s([\d_]+)/), isIphone = !ipad
					&& ua.match(/(iPhone\sOS)\s([\d_]+)/), isAndroid = ua
					.match(/(Android)\s+([\d.]+)/), isMobile = isIphone
					|| isAndroid;
			if (isMobile) {
				location.href = 'http://ebooking.xiwantrip.com/mobile/';
			}
		})
	</script>
	<script src="h-ui.admin/js/layer.js"></script>
	<script type="text/javascript">
		$("#loginbtn").click(function() {
			var username = $("#username").val();
			var password = $("#password").val();
			if (username == "") {
				layer.msg('请输入您的用户名');
				return false;
			}
			if (password == "") {
				layer.msg('密码不能为空');
				return false;
			}
			$.post("login",{
				"u" : $('#username').val(),
				"p" : $('#password').val()
			}, function(data) {
				if(data != ""){
				var obj = eval('(' + data+ ')');
				if (obj.status==0 || obj.status==3) {
					window.location.href = "backendIndex";
					return false;
				} 
				layer.msg('您无权限登录，请联系管理员');
				}else {
					layer.msg('账户或者密码错误');
					$('#username').focus();
				}
			});
			return false;
		});
	</script>


</body>
</html>