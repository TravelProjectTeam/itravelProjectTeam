$(function() {
	$("#form-member-add").submit(function(){//添加提交事件
		
		var sex =$("input[name='sex']").length;
		var sexid=0;
		for (var i = 0; i < sex; i++) {
			if($("input[name='sex']")[i].checked==true){
				
				sexid =$('input[name="sex"]:checked').val();//品牌加载赋值
			}
		};
		var status =$("input[name='status']").length;
		var statusid=0;
		for (var i = 0; i < status; i++) {
			if($("input[name='status']")[i].checked==true){
				
				statusid =$('input[name="status"]:checked').val();//品牌加载赋值
			}
		};
		var bool = true;
		var name = $("#username");//用戶名
		var phone = $("#phone");//电话号码
		var phoness = /^1[3,4,5,7,8]\d{9}$/;//电话号码正则表达式
		var email = $("#email");//邮箱
		var emailss = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/;//邮箱正则表达式
		var pwd = $("#pwd");//密码
		var pwd2 = $("#pwd2");//确认密码
		var pattern = /^[a-zA-Z0-9]{6,16}$/;
		if(name.val()==""){
			alert("用戶名不能为空！");
			name.focus();
			 bool=false;
			 return bool;
		}
		if(pwd.val()==""){
			alert("密码不能为空");
			pwd.focus();
			 bool=false;
			 return bool;
		}
		if(pattern.test(pwd.val())==false){
			alert("设置6-16位密码，建议密码由字母或数字组成");
			pwd.focus();
			 bool=false;
			 return bool;
		}
		if(pwd2.val()==""){
			alert("确认密码不能为空");
			pwd2.focus();
			 bool=false;
			 return bool;
		}
		if(pwd2.val()!=pwd.val()){
			alert("两次密码不一致");
			pwd2.focus();
			 bool=false;
			 return bool;
		}
		if(phone.val()==""){
			alert("电话号码不能为空");
			phone.focus();
			 bool=false;
			 return bool;
		}
		if(phoness.test(phone.val())==false){
			alert("电话号码格式不正确！");
			phone.focus();
			 bool=false;
			 return bool;
		}
		if(email.val()==""){
			alert("邮箱不能为空！");
			email.focus();
			 bool=false;
			 return bool;
		}
		if(emailss.test(email.val())==false){
			alert("邮箱格式不正确！");
			email.focus();
			 bool=false;
			 return bool;
		}
		
		if(bool){
			$.ajax({
				type: 'post',
				url: "backendAdd",
				dataType:"text",
				data:{id:$("#id").val(),username:name.val(),
					sex:sexid,mobile:phone.val(),
					pwd:pwd.val(),
					email:$("#email").val(),address:$("#address").val(),
					status:statusid},
				success: function(date){
					layer.msg(date,{icon:1,time:1000});
				},
                error: function(XmlHttpRequest, textStatus, errorThrown){
					layer.msg('error!',{icon:1,time:3000});
				}
			});
			setInterval(function name() {
				parent.location.reload();
				var index = parent.layer.getFrameIndex(window.name);
				parent.$('.btn-refresh').click();
				parent.layer.close(index);
			},3000);
			
		}
	});
	
});