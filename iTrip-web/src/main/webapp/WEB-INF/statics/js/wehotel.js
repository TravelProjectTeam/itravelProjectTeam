$(function() {
	var bool = false;
	var phoness = /^1[3,4,5,7,8]\d{9}$/;
	var pattern = /^[a-zA-Z0-9]{6,16}$/;
	$("#phone").blur(function() {
		if ($("#phone").val() != "") {
			$("#ssc").text("");
			$.post("webPhones", {
				phone : $("#phone").val()
			}, function(data) {
				if (data >= 1) {
					$("#gologin").text("此手机号已绑定，点我去登录");
					return bool;
				} else {
					$("#gologin").text("");
					bool = true;
					return bool;
				}
			});
		}
	});
	$("#from1").submit(function() {
		var phone = $("#phone");
		var pwd = $("#pwd");
		var passwork = $("#passwork");

		if ("" == phone.val()) {
			$("#ssc").text("请填写您的手机号码");
			phone.focus();
			return false;
		} else {
			$("#ssc").text("");
		}
		if (phoness.test(phone.val()) == false) {
			$("#ssc").text("请填写正确的手机号码");
			phone.focus();
			return false;
		} else {
			$("#ssc").text("");
		}
		if (pwd.val() == "") {
			$("#ssa").text("设置6-16位密码，建议密码由字母或数字组成");
			pwd.focus();
			return false;
		} else {
			$("#ssa").text("");
		}
		if (pattern.test(pwd.val()) == false) {
			$("#ssa").text("设置6-16位密码，建议密码由字母或数字组成");
			pwd.focus();
			return false;
		} else {
			$("#ssa").text("");
		}

		if (pwd.val() != passwork.val()) {
			$("#ssx").text("*两次密码不一致");
			passwork.focus();
			return false;
		} else {
			$("#ssx").text("");
		}
		if (!bool) {

			return bool;
		} else {
			$("#ssc").text("");
			$("#sse").text("");
		}
	});
});