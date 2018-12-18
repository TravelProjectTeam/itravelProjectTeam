$(function() {
	$("input").change(function() {
		
			document.getElementById("error").innerHTML = "";
		
	});
	function change() {
		var img = document.getElementById('img');
		img.src="getVerifyCode?str="+new Date().getTime();
	}
	$("#inLogin").click(function() {
		var username = $("#username").val();
		var password = $("#password").val();
		var verifyCode = $("#verifyCode").val();
		if (username == "") {
			document.getElementById("error").innerHTML = "*请输入您的用户名";
			$("#username").focus();
			return false;
		}
		if (password == "") {
			document.getElementById("error").innerHTML = "*请输入登录密码";
			$("#password").focus();
			return false;
		}
		if(verifyCode == ""){
			document.getElementById("error").innerHTML = "*请输入验证码";
			$("#verifyCode").focus();
			return false;
		}

		$.post("getLogin", {
			u : $("#username").val(),
			p : $("#password").val(),
			v : $("#verifyCode").val()
		}, function(data) {
			if (data == "1") {
				document.getElementById("error").innerHTML = "*验证码错误";
				change();
				$("#verifyCode").focus();
				return false;
			}
			if (data != "") {
				window.location.href = "webIndex";
			} else {
				document.getElementById("error").innerHTML = "*用户名或密码错误";
				change();
				$("#username").focus();
				return false;
			}
		});
	});
});