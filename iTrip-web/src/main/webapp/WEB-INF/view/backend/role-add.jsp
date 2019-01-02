<!--_meta 作为公共模版分离出去-->
<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<style type="text/css">
#divcss1 {
	margin: 0 auto;
	border: 1px solid #000;
	width: 300px;
	height: 100px
}
</style>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
	content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="Bookmark" href="/favicon.ico">
<link rel="Shortcut Icon" href="/favicon.ico" />
<!--[if lt IE 9]>
<script type="text/javascript" src="lib/html5shiv.js"></script>
<script type="text/javascript" src="lib/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css"
	href="h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css"
	href="lib/Hui-iconfont/1.0.8/iconfont.css" />
<link rel="stylesheet" type="text/css"
	href="h-ui.admin/skin/default/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="h-ui.admin/css/style.css" />


<!--[if IE 6]>
<script type="text/javascript" src="lib/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<!--/meta 作为公共模版分离出去-->

<title>新建网站角色 - 管理员管理 - H-ui.admin v3.1</title>
<meta name="keywords"
	content="H-ui.admin v3.1,H-ui网站后台模版,后台模版下载,后台管理系统模版,HTML后台模版下载">
<meta name="description"
	content="H-ui.admin v3.1，是一款由国人开发的轻量级扁平化网站后台模板，完全免费开源的网站后台管理系统模版，适合中小型CMS后台系统。">
</head>
<body>
	<article class="page-container">
		<form action="updDic" method="post" class="form form-horizontal"
			id="form-admin-role-add">
			<div class="row cl">
				<input type="hidden" id="id" name="id" value="${list.id}" /> <label
					class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>类型名称：</label>
				<div class="formControls col-xs-8 col-sm-9" style="width: 300px">
					<select class="input-text" id="diesName" name="diesName">
						<c:forEach items="${dics}" var="dies">
							<option value="${dies.typeName}"<c:if test="${list.typeName==dies.typeName}">selected="selected"</c:if> >${dies.typeName}</option>
						</c:forEach>
					</select>
				</div>
			</div>
			<div class="row cl">
				<label class="form-label col-xs-4 col-sm-3">类型值：</label>
				<div class="formControls col-xs-8 col-sm-9" style="width: 300px">
					<input type="text" class="input-text" value="${list.valueName}"
						id="dicName" name="dicName">
				</div>
			</div>
			<div class="row cl">
				<div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3"
					style="position: relative;">
					<button type="submit" class="btn btn-success radius"
						id="admin-role-save" name="admin-role-save">
						<i class="icon-ok"></i> 确定
					</button>
					<button onClick="layer_close();" class="btn btn-default radius"
						type="button">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
				</div>
			</div>
		</form>
	</article>

	<!--_footer 作为公共模版分离出去-->
	<script type="text/javascript" src="lib/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="lib/layer/2.4/layer.js"></script>
	<script type="text/javascript" src="h-ui/js/H-ui.min.js"></script>
	<script type="text/javascript" src="h-ui.admin/js/H-ui.admin.js"></script>
	<!--/_footer 作为公共模版分离出去-->

	<!--请在下方写此页面业务相关的脚本-->
	<script type="text/javascript"
		src="lib/jquery.validation/1.14.0/jquery.validate.js"></script>
	<script type="text/javascript"
		src="lib/jquery.validation/1.14.0/validate-methods.js"></script>
	<script type="text/javascript"
		src="lib/jquery.validation/1.14.0/messages_zh.js"></script>
	<script type="text/javascript">
		$("#form-admin-role-add").submit(function() {
			var diesName = $("#diesName").val();
			var dicName = $("#dicName").val();
			var bool = true;
			if (diesName == 0) {
				layer.msg('请选择类型名称!', {
					icon : 2,
					time : 1000
				});
				return false;
			}
			if (dicName == "") {
				layer.msg('不允许存空值!', {
					icon : 2,
					time : 1000
				});
				return false;
			}
			//将异步改为同步
			$.ajaxSettings.async = false;
			$.post("getIsFields", {
				diesName : diesName,
				dicName : dicName
			}, function(data) {

				if (data >= 1) {
					layer.msg('该值已在本类型中存在!', {
						icon : 2,
						time : 1000
					});
					bool = false;
				}
			});

			return bool;
		});
		
		//取消修改
		function layer_close() {
			window.history.go(-1);
		}
	</script>
	<!--/请在上方写此页面业务相关的脚本-->
</body>
</html>