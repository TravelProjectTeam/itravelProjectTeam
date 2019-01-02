<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
</head>
<body>
	<div>
		<div id='houses'>
			<div class="row cl">
				<label class="form-label col-xs-4 col-sm-2"><span
					class="c-red">*</span>房型价格：</label>
				<div class="formControls col-xs-8 col-sm-9">
					<input type="text" class="input-text" value="" placeholder="" id=""
						name="roomsPrice" style="width: 25%">元
				</div>
			</div>
			<div class="row cl">
				<label class="form-label col-xs-4 col-sm-2"><span
					class="c-red">*</span>房间面积：</label>
				<div class="formControls col-xs-8 col-sm-9">
					<input type="text" class="input-text" value="" placeholder="" id=""
						name="roomSize" style="width: 25%">㎡
				</div>
			</div>
		</div>
	</div>
	<span id="contion"><a>继续</a></span>
	<script type="text/javascript">
		$(function() {
			var index=0;
			$("#contion").click(
					function() {
						 index+=1;
						    var strVar=$("#houses").clone(true); //克隆元素,注意不是javascript的cloneNode()
						    strVar.attr("id","houses"+index); //改变克隆元素id,注意不是setAttribute()
						    /* var lable=strVar.find("#dinfoadd"); //根据id查找子元素
						    var file=strVar.find("#0");
						    var img=strVar.find("#img_0");
						    lable.attr("id","dinfoadd"+index); //改变克隆子元素节点一
						    file.attr("id",index); //改变克隆元素子节点二
						    img.attr("id","img_"+index); //改变克隆子元素节点三 */
						    $("#houses"+index).style="display: block";
						    
						    if(index >=2 ){
						    	$("#houses"+(index-1)).after(strVar);
						    }else{
						    	$("#houses").after(strVar);
						    }
						    $("#houses"+index).find('input').val('');
					});
		});
	</script>
</body>
</html>