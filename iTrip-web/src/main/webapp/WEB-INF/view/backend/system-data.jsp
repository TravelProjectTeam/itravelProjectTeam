<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!--[if lt IE 9]>
<script type="text/javascript" src="lib/html5shiv.js"></script>
<script type="text/javascript" src="lib/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css" href="static/h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css" href="lib/Hui-iconfont/1.0.8/iconfont.css" />
<link rel="stylesheet" type="text/css" href="h-ui.admin/skin/default/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="h-ui.admin/css/style.css" />
<!--[if IE 6]>
<script type="text/javascript" src="lib/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>数据字典</title>
</head>
<body>
<nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页
	<span class="c-gray en">&gt;</span>
	系统管理
	<span class="c-gray en">&gt;</span>
	数据字典
	<a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a>
</nav>
<div class="page-container">
	<form action="addDic" method="post" id="form1">
		<div class="text-c"> 
		类型名称:
		<span class="select-box inline">
		<input class="select" type="text" list="diese" id="diesName" name="diesName"/>
		<datalist class="select" id="diese" name="diesName">
			<c:forEach items="${dics}" var="dies">
			<option value="${dies.typeName}">${dies.typeName}</option>
			</c:forEach>
		</datalist>
		</span>
		字段名称:
		<input type="text" class="input-text" id="dicName" name="dicName" style="width:150px">
		<!-- <input type="hidden" id="" name=""> -->
		<button type="submit" class="btn btn-primary radius" id="" name=""><i class="Hui-iconfont">&#xe600;</i> 添加字典</button>	
	</div>
	</form>
	<div class="cl pd-5 bg-1 bk-gray mt-20">
		<span class="l">
		<a href="javascript:;" onclick="datadel()" class="btn btn-danger radius"><i class="Hui-iconfont">&#xe6e2;</i> 批量删除</a>
		</span>
		<span class="r">共有数据：<strong>${dicSize}</strong> 条</span>
	</div>
	<div class="mt-20">
		<table class="table table-border table-bordered table-bg table-hover table-sort">
			<thead>
				<tr class="text-c">
					<th width="25"></th>
					<th width="80">ID</th>
					<th>类型名称</th>
					<th width="105">字段ID</th>
					<th width="105">字段名</th>
					<th width="100">操作</th>
				</tr>
			</thead>
			<tbody>
			<c:forEach items="${dic}" var="dicss" varStatus="status">
				<tr class="text-c">
					<td><input type="checkbox" value="${dicss.id}" name="sid"></td>
					<td>${status.index+1}</td>
					<td>${dicss.typeName}</td>
					<td>${dicss.valueId}</td>
					<td>${dicss.valueName}</td>
					<td class="f-14"><a style="text-decoration:none" href="getdictionaries?id=${dicss.id}" title="编辑"><i class="Hui-iconfont">&#xe6df;</i></a>
						<a title="删除" href="javascript:;" onclick="datadel(${dicss.id})" class="ml-5" style="text-decoration:none"><i class="Hui-iconfont">&#xe6e2;</i></a></td>
				</tr>
			</c:forEach>	
			</tbody>
		</table>
	</div>
</div>
<!--_footer 作为公共模版分离出去-->
 <script type="text/javascript" src="lib/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="lib/layer/2.4/layer.js"></script> 
 <script type="text/javascript" src="static/h-ui/js/H-ui.min.js"></script>
<script type="text/javascript" src="static/h-ui.admin/js/H-ui.admin.js"></script> <!--/_footer 作为公共模版分离出去-->

<!--请在下方写此页面业务相关的脚本-->
<script type="text/javascript" src="lib/My97DatePicker/4.8/WdatePicker.js"></script>
<script type="text/javascript" src="lib/datatables/1.10.0/jquery.dataTables.min.js"></script> 
<script type="text/javascript" src="lib/laypage/1.2/laypage.js"></script> 
<script src="js/system-data.js"></script>
<script type="text/javascript">
	$(function() {
		$("#diesName").click(function() {
			$(this).val('');	
		});
	});
</script>
<!-- <script type="text/javascript">

$("#form1").submit(function(){
	var diesName=$("#diesName").val();
	var dicName=$("#dicName").val();
	var bool = true;
	if(diesName==0){
		layer.msg('请选择类型名称!',{icon:2,time:1000});
		return false;
		}
	if(dicName==""){
		layer.msg('不允许存空值!',{icon:2,time:1000});
		return false;
	}
	//将异步改为同步
	$.ajaxSettings.async=false;
	$.post("getIsFields", {
		diesName : diesName,dicName:dicName
	}, function(data) {
		
		if (data >= 1) {
			layer.msg('该值已在本类型中存在!',{icon:2,time:1000});
			bool = false;
		} 
	});
	
	return bool;
})
$('.table-sort').dataTable({
	"aaSorting": [[ 1, "desc" ]],//默认第几个排序
	"bStateSave": true,//状态保存
	"aoColumnDefs": [
	  //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
	  {"orderable":false,"aTargets":[0,5]}// 制定列不参与排序
	]
});
/*数据字典-编辑*/
function system_data_edit(title,url,id,w,h){
  layer_show(title,url,w,h);
}
/*数据字典-删除*/
function system_data_del(obj,id){
	layer.confirm('确认要删除吗？',function(index){
		$.ajax({
			type: 'POST',
			url: '',
			dataType: 'json',
			success: function(data){
				$(obj).parents("tr").remove();
				layer.msg('已删除!',{icon:1,time:1000});
			},
			error:function(data) {
				console.log(data.msg);
			},
		});
	});
}
</script> -->
</body>
</html>