<!--_meta 作为公共模版分离出去-->
<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="multipart/form-data; charset=utf-8" />
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

<link href="lib/webuploader/0.1.5/webuploader.css" rel="stylesheet"
	type="text/css" />
</head>
<body>
	<div class="page-container">
		<form action="addHotelInfo" method="post" class="form form-horizontal"
			id="form-article-add" enctype="multipart/form-data">
			<span id="hotelInfo" style="display: none;"><a>展开酒店信息▼</a></span>
			<div id="hotel">
			<input type="hidden" value="${hotelInfo.id}" name="id">
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>酒店标题：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text" value="${hotelInfo.hotelName}" placeholder=""
							id="" name="hotelName">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>酒店类型：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<span class="select-box"> <select name="hotelType"
							class="select">
								<option value="0">请选择酒店类型</option>
								<c:forEach items="${hotelType}" var="hotelType">
									<option value="${hotelType.valueId}"<c:if test="${hotelType.valueId==hotelInfo.hotelType}">selected="selected"</c:if>>${hotelType.valueName}</option>
								</c:forEach>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>酒店所在省份：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<span class="select-box"> <select name="provinceid"
							id="provinecs" class="select">
								<option value="0">请选择省份</option>
								<c:forEach items="${provinces}" var="provinces">
									<option value="${provinces.id}"<c:if test="${provinces.id==hotelInfo.provinceid}">selected="selected"</c:if>>${provinces.name}</option>
								</c:forEach>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>酒店所在城市：</label>
						<input type="hidden" value="${hotelInfo.countryid}" id="countryid">
					<div class="formControls col-xs-8 col-sm-9">
						<span class="select-box"> <select name="countryid" id="citys"
							class="select">
								<option value="0">请选择城市</option>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>酒店所属品牌：</label>
						<input type="hidden" value="${hotelInfo.brandId}" id="brandId">
					<div class="formControls col-xs-8 col-sm-9">
						<span class="select-box"> <select name="brandId" id="brand"
							class="select">
								<option value="0">请选择酒店品牌</option>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">酒店电话：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" name="phone" id="" placeholder="" value="${hotelInfo.phone}"
							class="input-text">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">酒店地址：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" name="address" id="" placeholder="" value="${hotelInfo.address}"
							class="input-text">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">酒店政策：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" name="hotelPolicy" id="hotelPolicy"
							placeholder="" value="${hotelInfo.hotelPolicy}" class="input-text">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">退房时间：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" name="leaveDate"
							onfocus="WdatePicker({ dateFmt:'HH:mm',minDate:'#F{$dp.$D(\'datemin\')}' })"
							id="datemax" class="input-text Wdate" style="width: 180px;">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">酒店设施：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" name="facilitiesName" id=""
							placeholder="多个设施请用“、”号隔开" value="${hotelInfo.facilitiesName}" class="input-text">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">酒店服务：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" name="hotelservices" id=""
							placeholder="多个服务请用“、”号隔开" value="${hotelInfo.hotelservices}" class="input-text">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">酒店简介：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<textarea name="details" cols="" rows="" class="textarea"
							placeholder="说点什么...最少输入10个字符" datatype="*10-100"
							dragonfly="true" nullmsg="备注不能为空！" 
							onKeyUp="$.Huitextarealength(this,200)">${hotelInfo.details}</textarea>
						<p class="textarea-numberbar">
							<em class="textarea-length">0</em>/200
						</p>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">酒店图片：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<div class="uploader-thum-container">
							<div id="fileList" class="uploader-list"><img alt="酒店图片" src="${hotelInfo.photograph}" style="width:300px;height:300px;"></div>
							<div id="filePicker">
							<input type="hidden" value="${hotelInfo.photograph}" name="hotelPhoto">
								<span class="btn btn-secondary radius"><i
									class="Hui-iconfont">&#xe632;</i>选择图片</span>
							</div>
							<input type="file" id="btn_file" name="file"
								style="display: none">
						</div>
					</div>
				</div>
				<span id="shouqi"><a style="float: right;">收起酒店信息▲</a></span>
			</div>
			<br><br>
			<c:if test="${hotelInfo.id == null}">
			<div id="upAndClose">
				<span><a id="housesInfo">收起房型信息▲</a></span>
				<span id="del" style="margin-left: 460px; display: block;"><a><img
						alt="关闭" src="images/timg.jpg" width="15px;" height="15px;"></a></span>
			</div>
			<div id="houses" name="houses">
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房型标题：</label>
					<div class="formControls col-xs-8 col-sm-9" style="width: 20.2%">
						<span class="select-box"> <select name="roomsType"
							class="select">
								<option value="0">请选择房型</option>
								<c:forEach items="${roomsType}" var="roomsType">
									<option value="${roomsType.valueId}">${roomsType.valueName}</option>
								</c:forEach>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间标准价格：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text" value=""  placeholder="此价格为套餐默认标准价格"
							id="" name="roomsPrice" style="width: 25%">元
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间面积：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text" value="" placeholder=""
							id="" name="roomSize" style="width: 25%">㎡
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>床大小：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text" value="" placeholder=""
							id="" name="bedArea" style="width: 25%">m
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>床型：</label>
					<div class="formControls col-xs-8 col-sm-9" style="width: 20.2%">
						<span class="select-box"> <select name="bedsType"
							class="select">
								<option value="0">请选择床型</option>
								<c:forEach items="${bedsType}" var="bedsType">
									<option value="${bedsType.id}">${bedsType.type}</option>
								</c:forEach>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间人数上限：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text" value=""
							id="" name="ceiling" style="width: 25%">人
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间所在楼层：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text" value="" placeholder=""
							id="" name="floor" style="width: 25%">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>是否可加床：</label>
					<div class="formControls col-xs-8 col-sm-9" style="width: 20.2%">
						<span class="select-box"> <select name="isHavingbed"
							class="select">
								<option value="2">请选择</option>
								<option value="0">可以加床</option>
								<option value="1">不允许加床</option>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>窗型：</label>
					<div class="formControls col-xs-8 col-sm-9" style="width: 20.2%">
						<span class="select-box"> <select name="window"
							class="select">
								<option value="">请选择</option>
								<option value="外窗">外窗</option>
								<option value="内窗">内窗</option>
								<option value="无窗">无窗</option>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间库存：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text" value=""
							id="" name="inventory" style="width: 25%">间
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">房型图片：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<div class="uploader-thum-container">
							<div id="roomPotoList" class="uploader-list"></div>
							<div id="roomPoto" class="roomPoto" poto="" style="width: 100px;">
								<span class="btn btn-secondary radius"><i
									class="Hui-iconfont">&#xe632;</i>选择图片</span>
							</div>
							<input type="file" id="roomFile" name="roomFile"
								style="display: none;">
						</div>
					</div>
				</div>
			</div>
			</c:if>
			<div class="row cl">
				<div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-2">
				<c:choose>
				<c:when test="${hotelInfo.id == null}">
					<span id="contion" class="btn btn-secondary radius">继续添加房型信息</span>
					<button id="article_save_submit"
						class="btn btn-primary radius" type="button">
						<i class="Hui-iconfont">&#xe632;</i> 发布酒店信息
					</button>
				</c:when>
				<c:otherwise> 
					<button id="article_save_submit"
						class="btn btn-primary radius" type="button">
						<i class="Hui-iconfont">&#xe632;</i> 修改酒店信息
					</button>
				</c:otherwise> 
				</c:choose>
					<button onClick="layer_close();" class="btn btn-default radius"
						type="button">&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
				</div>
			</div>
		</form>
	</div>

	<!--_footer 作为公共模版分离出去-->
	<script type="text/javascript" src="lib/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="lib/layer/2.4/layer.js"></script>
	<script type="text/javascript" src="h-ui/js/H-ui.min.js"></script>
	<script type="text/javascript" src="h-ui.admin/js/H-ui.admin.js"></script>
	<!--/_footer 作为公共模版分离出去-->

	<!--请在下方写此页面业务相关的脚本-->
	<script type="text/javascript"
		src="lib/My97DatePicker/4.8/WdatePicker.js"></script>
	<script type="text/javascript"
		src="lib/jquery.validation/1.14.0/jquery.validate.js"></script>
	<script type="text/javascript"
		src="lib/jquery.validation/1.14.0/validate-methods.js"></script>
	<script type="text/javascript"
		src="lib/jquery.validation/1.14.0/messages_zh.js"></script>
	<script type="text/javascript"
		src="lib/webuploader/0.1.5/webuploader.min.js"></script>
	<script type="text/javascript"
		src="lib/ueditor/1.4.3/ueditor.config.js"></script>
	<script type="text/javascript"
		src="lib/ueditor/1.4.3/ueditor.all.min.js">
		
	</script>
	<script type="text/javascript"
		src="lib/ueditor/1.4.3/lang/zh-cn/zh-cn.js"></script>
	<script type="text/javascript">
		function changePic(num){
			document.getElementById("roomFile"+num).click();
			$("#roomFile"+num).change(function() {
				var input = document.getElementById("roomFile"+num);
				var file = input.files[0];
				if (!/image\/\w+/.test(file.type)) {
					layer.msg("文件必须为图片！");
					input.value="";
					return false;
				}
				var reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = function() {
					document.getElementById("roomPotoList"+num).innerHTML = '<img src="'+this.result+'" style="width:300px;height:300px;"/>'
				}
			});
		};
		$(function() {
			var index = 0;
			var strVar = null;
			var info = null;
			
			$("#housesInfo").bind("click",function() {
				if($(this).parent().parent().next().css("display")=="none"){
					$(this).parent().parent().next().show(500);
					$(this).text("收起房型信息▲");
				}else{
					$(this).parent().parent().next().hide(500);
					$(this).text("展开房型信息▼");
				}
			});
			
			$("#contion").click(function() {
				index += 1;
				strVar = $(this).parent().parent().prev().clone(true); //克隆元素,注意不是javascript的cloneNode()
				strVar.attr("id", "houses" + index); //改变克隆元素id,注意不是setAttribute()

				info = $(this).parent().parent().prev().prev().clone(true);
				info.attr("id","upAndClose"+index);
				
				
				var roomPotoList = null; //根据id查找子元素
				var roomPoto = null;
				var roomFile = null;
				var up = null;
				if (index > 1) {
					roomPotoList = strVar.find("#roomPotoList" + (index - 1)); //根据id查找子元素
					roomPoto = strVar.find("#roomPoto" + (index - 1));
					roomFile = strVar.find("#roomFile" + (index - 1));
					
					up = info.find("#housesInfo");
				} else {
					roomPotoList = strVar.find("#roomPotoList"); //根据id查找子元素
					roomPoto = strVar.find("#roomPoto");
					roomFile = strVar.find("#roomFile");
					
					up = info.find("#housesInfo");
				}
				roomPotoList.attr("id", "roomPotoList" + index);//改变子元素id
				roomPoto.attr("id", "roomPoto" + index);
				roomPoto.attr("poto", index);
				roomFile.attr("id", "roomFile" + index);
				up.text("收起房型信息▲");
				strVar.find('input').val('');
				strVar.find("#roomPotoList" + index).empty();
				$(this).parent().parent().prev().after(info);
				$(this).parent().parent().prev().after(strVar);
				$("#upAndClose"+index).show();
				$("#houses" + index).show();
			});
			
			$("#del").click(function() { // del为删除input的id
				var delCount = $('[id=del]').length;
				if (delCount == 1) {
					layer.msg("只剩下一个啦，不能再删啦！");
					return false;
				}
				
				$(this).parent().next().remove();
				$(this).parent().remove();
			});
			
			
			$(".roomPoto").click(function() {
				changePic($(this).attr("poto"))
			});
			$("#shouqi").bind("click", function() {
				$("#hotelInfo").css("display", "flex");
				$("#hotel").css("display", "none");
				event.stopPropagation();//==========阻止冒泡1
			});
			$("#hotelInfo").bind("click", function() {
				$("#hotelInfo").css("display", "none");
				$("#hotel").css("display", "block");
				event.stopPropagation();//==========阻止冒泡1
			});
			
			$("#provinecs").change(function() {
				$.get("getCitys", {
					pId : $("#provinecs").val()
				}, function(data) {
					if (data != null) {
						var str = JSON.parse(data);
						//根据id查找对象，
						/* var obj = $("#citys");
						alert(1);*/
						$("#citys").find("option").remove(); 
						$("#citys").append("<option value='0'>请选择城市</option>")
						$("#brand").find("option").remove(); 
						$("#brand").append("<option value='0'>请选择品牌</option>")
						for (var i = 0; i < str.length; i++) {
							$("#citys").append("<option value='"+str[i].id+"'>"+str[i].name+"</option>");//新增
							if(str[i].id==countryid){
								 $("#citys").find("option[value='"+countryid+"']").attr("selected",true);
							}
						}
					}
				});
			});
			$("#citys").change(function() {
				$.get("getHotelBrand", {
					citysid : $("#citys").val()
				}, function(data) {
					if (data != null) {
						var str = JSON.parse(data);
						//根据id查找对象，
						$("#brand").find("option").remove(); 
						$("#brand").append("<option value='0'>请选择品牌</option>")
						for (var i = 0; i < str.length; i++) {
							$("#brand").append("<option value='"+str[i].id+"'>"+str[i].brandName+"</option>");//新增
						}
					}
				});
			});
				if($("#provinecs").val()!=0){
					$(function() {
						$.get("getCitys", {
							pId : $("#provinecs").val()
						}, function(data) {
							if (data != null) {
								var str = JSON.parse(data);
								//根据id查找对象，
								/* var obj = $("#citys");
								alert(1);
								obj.length = 0; */
								var countryid=$("#countryid").val();
								for (var i = 0; i < str.length; i++) {
									$("#citys").append("<option value='"+str[i].id+"'>"+str[i].name+"</option>");//新增
									if(str[i].id==countryid){
										 $("#citys").find("option[value='"+countryid+"']").attr("selected",true);
									}
								}
							}
						});
					});
				}
		if($("#countryid").val()!=""){
			$(function() {
						$.get("getHotelBrand", {
							citysid : $("#countryid").val()
						}, function(data) {
							if (data != null) {
								var str = JSON.parse(data);
								//根据id查找对象，
								var brandId=$("#brandId").val();
								for (var i = 0; i < str.length; i++) {
									$("#brand").append("<option value='"+str[i].id+"'>"+str[i].brandName+"</option>");//新增
									if(str[i].id==brandId){
										 $("#brand").find("option[value='"+brandId+"']").attr("selected",true);
									}
								}
							}
						});
					});
		}
			$("#filePicker").click(function() {
				document.getElementById("btn_file").click();
			});
			
			$("#btn_file")
					.change(
							function() {
								var input = document.getElementById("btn_file");
								var file = input.files[0];
								if (!/image\/\w+/.test(file.type)) {
									layer.msg("文件必须为图片！");
									input.value="";
									return false;
								}
								var reader = new FileReader();
								reader.readAsDataURL(file);
								reader.onload = function() {
									document.getElementById("fileList").innerHTML = '<img src="'+this.result+'" style="width:300px;height:300px;"/>'
								}
							});
/* 			$("#article_save_submit").click(function() {  
				var customerArray = new Array();
				var formData = new FormData();
				 $("div[name='houses']").each(function(index,item){
					 var id = $(item).attr("id");
					 var roomsType = $("#"+id+" *[name=roomsType]").val();
					 var roomPrice = $("#"+id+" *[name=roomPrice]").val();
					 var roomSize = $("#"+id+" *[name=roomSize]").val();
					 var bedArea = $("#"+id+" *[name=bedArea]").val();
					 var bedsType = $("#"+id+" *[name=bedsType]").val();
					 var floor = $("#"+id+" *[name=floor]").val();
					 var isHavingbed = $("#"+id+" *[name=isHavingbed]").val();
					 var window = $("#"+id+" *[name=window]").val();
					// var roomFile = $("#"+id+" *[name=roomFile]").val();
					  //使用FormData()处理表单中的值
					customerArray.push({roomsType:roomsType,roomPrice:roomPrice,roomSize:roomSize,bedArea:bedArea,
										bedsType:bedsType,floor:floor,isHavingbed:isHavingbed,window:window});
					//formData.append(index,$("#"+id+" *[type=file]")[0].files[0]);
					var values = $("#"+id+" *[type=file]")[0];
					console.log(values.files[0])
					formData.append("roomFile",values.files[0]);
				}); 
				 //alert(roomFile.length);
				 console.log("file="+formData);
				 
				 var list = JSON.stringify(customerArray);
				 $.ajax({
					 type:"post",
					 data:{list:list.toString(),roomFile:formData},
					 url:"addHotelInfo",
					 dataType:"json",
					 crossDomain: true,
					 processData: false,  // 注意：让jQuery不要处理数据
					 contentType: false,  // 注意：让jQuery不要设置contentType
					 success:function(data){
						 
					 }
				 });
			}); */
			
			$("#article_save_submit").click(function() {
				alert(1);
				$("#form-article-add").submit();
				setTimeout(function () {
					parent.location.reload()
					layer_close();
			    },800);
			});
		});
	</script>
</body>
</html>