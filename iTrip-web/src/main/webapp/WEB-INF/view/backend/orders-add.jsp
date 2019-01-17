<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
<link rel="stylesheet" type="text/css" href="h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css" href="lib/Hui-iconfont/1.0.8/iconfont.css" />
<link rel="stylesheet" type="text/css" href="h-ui.admin/skin/default/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="h-ui.admin/css/style.css" />
<!--[if IE 6]>
<script type="text/javascript" src="lib/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>订单编辑</title>
<link href="lib/webuploader/0.1.5/webuploader.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="page-container">
	<form action="getUpdateOrders"  method="post">
		<input type="hidden" value="${orders.id}" name="id">
		<input type="hidden" value="${orders.hotelId}" name="hotelId">
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2"><span class="c-red">*</span>订单编号：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="${orders.orderNo}"  readonly="readonly" placeholder="" id="" name="orderNo">
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2"><span class="c-red">*</span>酒店：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="${orders.hotelName}" readonly="readonly" id="" name="hotelName">
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2"><span class="c-red">*</span>房间类型：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<span class="select-box">
				<select name="houseId" class="select">
				<c:forEach items="${hotelName}" var="housesName">
					<option value="${housesName.id}"<c:if test="${housesName.id == orders.roomId}">selected="selected"</c:if>
					>${housesName.valueName}</option>
				</c:forEach>	
				</select>
				</span>
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2"><span class="c-red">*</span>套餐类型：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<span class="select-box">
				<select name="roomId" class="select" id="roomId">
					<c:forEach items="${MealList}" var="meal">
						<option value="${meal.price}" <c:if test="${result == meal. price}">"selected="selected"</c:if>> 
						${meal.roomTitle}</option>
					</c:forEach>
				</select>
				</span>
			</div>
		</div>
		
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2">房间数：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="${orders.count}" placeholder="" id="count" name="count">
			</div>
		</div>
		
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2"><span class="c-red">*</span>入住日期：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" onfocus="WdatePicker({ dateFmt:'yyyy-MM-dd ',maxDate:'#F{$dp.$D(\'datemax\')||\'%y-%M-%d\'}' })" 
				name="checkInDate" id="datemin" class="input-text Wdate" value="<fmt:formatDate value="${orders.checkInDate}" pattern="yyyy-MM-dd"/> ">
			</div>
		</div>
		<div class="row cl" >
			<label class="form-label col-xs-4 col-sm-2"><span class="c-red">*</span>离店日期：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" onfocus="WdatePicker({ dateFmt:'yyyy-MM-dd ',minDate:'#F{$dp.$D(\'datemin\')}' })"
				name="checkOutDate" id="datemax" class="input-text Wdate" value="<fmt:formatDate value="${orders.checkOutDate}" pattern="yyyy-MM-dd"/> ">
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2">客户姓名：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="${orders.linkUserName}"  readonly="readonly" placeholder="" id="" name="linkUserName">
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2">订单金额：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="${orders.payAmount}"  readonly="readonly" placeholder="" id="payAmount" name="payAmount">
			</div>
		</div>
		<div class="row cl">
			<label class="form-label col-xs-4 col-sm-2">客户电话：</label>
			<div class="formControls col-xs-8 col-sm-9">
				<input type="text" class="input-text" value="${orders.noticePhone}"  readonly="readonly" placeholder="" id="" name="noticePhone">
			</div>
		</div>
		<div class="row cl">
			<div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-2">
				<input  class="btn btn-primary radius" type="submit" value="提交订单">
				<button onClick="layer_close();" class="btn btn-default radius" type="button">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
			</div>
		</div>
	</form>
</div>


<!--_footer 作为公共模版分离出去-->
<script type="text/javascript" src="lib/jquery/1.9.1/jquery.min.js"></script> 
<script type="text/javascript" src="lib/layer/2.4/layer.js"></script>
<script type="text/javascript" src="h-ui/js/H-ui.min.js"></script> 
<script type="text/javascript" src="h-ui.admin/js/H-ui.admin.js"></script> <!--/_footer /作为公共模版分离出去-->
<script type="text/javascript" src="lib/My97DatePicker/4.8/WdatePicker.js"></script>
<!--请在下方写此页面业务相关的脚本-->
<script type="text/javascript" src="lib/jquery.validation/1.14.0/jquery.validate.js"></script> 
<script type="text/javascript" src="lib/jquery.validation/1.14.0/validate-methods.js"></script> 
<script type="text/javascript" src="lib/jquery.validation/1.14.0/messages_zh.js"></script> 
<script type="text/javascript" src="lib/webuploader/0.1.5/webuploader.min.js"></script> 
<script type="text/javascript">

$(function(){
	var price=$("#roomId option:selected").val();
	var result=0;
	var count=0;
	$("#roomId").change(function(){ 
		var datemax=$("#datemax").val().replace(/-/g, "/");
		var datemin=$("#datemin").val().replace(/-/g, "/");
		var aa = new Date(datemax);
		var bb = new Date(datemin);
		var dates=parseInt(aa -bb) / 1000 / 60/60;//两个时间相差的小时数 
		//alert(dates)
		result=dates%24<12?Math.floor(dates/24):Math.ceil(dates/24);
		var options=$("#roomId option:selected");
		count = $("#count").val();
		price=options.val();//获取当前选择项的值.
		$("#payAmount").val(price*count*result);
		
	});
	 $("#datemax").blur(function(){
			var datemax=$("#datemax").val().replace(/-/g, "/");
			var datemin=$("#datemin").val().replace(/-/g, "/");
			var aa = new Date(datemax);
			var bb = new Date(datemin);
			var options=$("#roomId");
			count = $("#count").val();
			var dates=parseInt(aa -bb) / 1000 / 60/60;//两个时间相差的小时数 
			//alert(dates)
			result=dates%24<12?Math.floor(dates/24):Math.ceil(dates/24);
			$("#payAmount").val(result*price*count);
		});
		
		$("#count").blur(function(){
			count=$("#roomId").val();
			var datemax=$("#datemax").val().replace(/-/g, "/");
			var datemin=$("#datemin").val().replace(/-/g, "/");
			var aa = new Date(datemax);
			var bb = new Date(datemin);
			var dates=parseInt(aa -bb) / 1000 / 60/60;//两个时间相差的小时数 
			//alert(dates)
			result=dates%24<12?Math.floor(dates/24):Math.ceil(dates/24);
			count=$("#count").val();
			$("#payAmount").val(count*price*result);
		});
})

</script>
</body>
</html>