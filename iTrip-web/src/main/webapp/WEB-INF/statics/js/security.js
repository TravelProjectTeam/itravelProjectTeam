$(function() {
	$("#submit").click(function(){
		var bool = true;
		$("#error").text("");
		$.ajaxSettings.async=false;
		$.ajax({
			type: 'post',
			url: "queryPwd",
			data:{pwd:$("#pwd").val()},
			dataType:"text",
			success: function(date){
				if(date==0){
					bool=false;
					$("#error").text("原密码输入不正确！");
				}
			}
		});
		var pwd1=$("#pwd1").val();
		var pwd2=$("#pwd2").val();
		if(pwd1.length<6){
			$("#error").text("新密码长度不足6位！");
			bool=false;
		}
		if(pwd2!=pwd1){
			$("#error").text("两次新密码输入不正确！");
			bool=false;
		}
		if(bool){
			location.href="webUpdPwd?pwd="+pwd1;
		}else{
			return bool;
		}
	})
});