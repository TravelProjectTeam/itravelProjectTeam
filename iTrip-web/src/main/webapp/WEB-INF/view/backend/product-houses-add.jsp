<!--_meta 作为公共模版分离出去-->
<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<html>
<head>
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

<link href="lib/webuploader/0.1.5/webuploader.css" rel="stylesheet"
	type="text/css" />
</head>
<body>
	<div class="page-container">
		<form action="addHouses" method="post" class="form form-horizontal"
			id="form-article-add" enctype="multipart/form-data">
			<input type="hidden" value="${houseByIdInfo.id}" name="houseId" id="houseId">
			<div style="display: inline; margin-left: 160px;" id="houseInfoDiv">
				<label><span class="c-red">*</span>酒店所在省份：</label> <span
					class="select-box" style="width: 150px"> <select
					name="provinceid" id="provinecs" class="select">
						<option value="0">请选择省份</option>
						<c:forEach items="${provinces}" var="provinces">
							<option value="${provinces.id}"
								<c:if test="${houseByIdInfo.provinceid == provinces.id}">selected="selected"</c:if>>${provinces.name}</option>
						</c:forEach>
				</select>
				</span>
			</div>
			<div style="display: inline; margin-left: 20px;">
				<label><span class="c-red">*</span>酒店所在城市：</label> <span
					class="select-box" style="width: 150px"><input type="hidden"
					value="${houseByIdInfo.countryid}" id="countryid"> <select
					name="countryid" id="citys" class="select">
						<option value="0">请选择城市</option>
				</select> </span>
			</div>
			<div style="display: inline; margin-left: 20px;">
				<label><span class="c-red">*</span>酒店名称：</label> <span
					class="select-box" style="width: 220px"><input type="hidden"
					value="${houseByIdInfo.hotelName}" id="hotelNameId"> <select
					name="hotelName" id="hotelName" class="select">
						<option value="0">请选择酒店</option>
				</select> </select>
				</span>
			</div>
			<hr style="margin: 20px 0px 20px 0px;">

			<div id="upAndClose">
				<span><a id="housesInfo">收起房型信息▲</a></span> <span id="del"
					style="margin-left: 460px; display: block;"><a><img
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
									<option value="${roomsType.valueId}"
										<c:if test="${houseByIdInfo.roomNameId == roomsType.valueId}">selected="selected"</c:if>>${roomsType.valueName}</option>
								</c:forEach>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间标准价格：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text"
							value="${houseByIdInfo.roomPrice}" placeholder="此价格为套餐默认标准价格"
							id="" name="roomsPrice" style="width: 25%">元
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间面积：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text"
							value="${fn:substringBefore(houseByIdInfo.roomSize,'㎡')}" placeholder="" id=""
							name="roomSize" style="width: 25%">㎡
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
									<option value="${bedsType.id}"
										<c:if test="${houseByIdInfo.bedsId == bedsType.id}">selected="selected"</c:if>>${bedsType.type}</option>
								</c:forEach>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>床大小：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text"
							value="${fn:substringBefore(houseByIdInfo.bedArea, 'm')}" placeholder="" id=""
							name="bedArea" style="width: 25%">m
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间人数上限：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text"
							value="${houseByIdInfo.ceiling}" placeholder="" id=""
							name="ceiling" style="width: 25%">人
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>房间所在楼层：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<input type="text" class="input-text"
							value="${houseByIdInfo.floor}" placeholder="" id="" name="floor"
							style="width: 25%">
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2"><span
						class="c-red">*</span>是否可加床：</label>
					<div class="formControls col-xs-8 col-sm-9" style="width: 20.2%">
						<span class="select-box"> <select name="isHavingbed"
							class="select">
								<option value="2"
									<c:if test="${houseByIdInfo.isHavingbed == 2}">selected="selected"</c:if>>请选择</option>
								<option value="0"
									<c:if test="${houseByIdInfo.isHavingbed == 0}">selected="selected"</c:if>>可以加床</option>
								<option value="1"
									<c:if test="${houseByIdInfo.isHavingbed == 1}">selected="selected"</c:if>>不允许加床</option>
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
								<option value="外窗"
									<c:if test="${houseByIdInfo.window eq '外窗'}">selected="selected"</c:if>>外窗</option>
								<option value="内窗"
									<c:if test="${houseByIdInfo.window eq '内窗'}">selected="selected"</c:if>>内窗</option>
								<option value="无窗"
									<c:if test="${houseByIdInfo.window eq '无窗'}">selected="selected"</c:if>>无窗</option>
						</select>
						</span>
					</div>
				</div>
				<div class="row cl">
					<label class="form-label col-xs-4 col-sm-2">房型图片：</label>
					<div class="formControls col-xs-8 col-sm-9">
						<div class="uploader-thum-container">
							<div id="roomPotoList" class="uploader-list" ><img alt="酒店图片" src="${houseByIdInfo.roomImage}" style="width:300px;height:300px;"></div>
							<input type="hidden" value="${houseByIdInfo.roomImage}" name="housePhoto">
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

			<div class="row cl">
				<div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-2">
				<c:choose>
					<c:when test="${houseByIdInfo.id == null}">
						<span id="contion" class="btn btn-secondary radius">继续添加房型信息</span>
						<button onClick="article_save_submit();"
							class="btn btn-primary radius" type="submit">
							<i class="Hui-iconfont">&#xe632;</i> 发布房型信息
						</button>
					</c:when>
					<c:otherwise>
						<button onClick="article_save_submit();"
							class="btn btn-primary radius" type="submit">
							<i class="Hui-iconfont">&#xe632;</i> 修改房型信息
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
		function changePic(num) {
			document.getElementById("roomFile" + num).click();
			$("#roomFile" + num)
					.change(
							function() {
								var input = document.getElementById("roomFile"
										+ num);
								var file = input.files[0];
								if (!/image\/\w+/.test(file.type)) {
									layer.msg("文件必须为图片！");
									input.value = "";
									return false;
								}
								var reader = new FileReader();
								reader.readAsDataURL(file);
								reader.onload = function() {
									document.getElementById("roomPotoList"
											+ num).innerHTML = '<img src="'+this.result+'" style="width:300px;height:300px;"/>'
								}
							});
		};

		$(function() {
			var index = 0;
			var strVar = null;
			var info = null;

			$("#housesInfo").bind("click", function() {
				if ($(this).parent().parent().next().css("display") == "none") {
					$(this).parent().parent().next().show(500);
					$(this).text("收起房型信息▲");
				} else {
					$(this).parent().parent().next().hide(500);
					$(this).text("展开房型信息▼");
				}
			});

			$("#contion").click(function() {
				index += 1;
				strVar = $(this).parent().parent().prev().clone(true); //克隆元素,注意不是javascript的cloneNode()
				strVar.attr("id", "houses" + index); //改变克隆元素id,注意不是setAttribute()

				info = $(this).parent().parent().prev().prev().clone(true);
				info.attr("id", "upAndClose" + index);

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
				$("#upAndClose" + index).show();
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

			$("#provinecs").change(
					function() {
						$.get("getCitys", {
							pId : $("#provinecs").val()
						}, function(data) {
							if (data != null) {
								var str = JSON.parse(data);
								//根据id查找对象，
								/* var obj = $("#citys");
								alert(1);*/
								$("#citys").find("option").remove();
								$("#citys").append(
										"<option value='0'>请选择城市</option>")
								$("#hotelName").find("option").remove();
								$("#hotelName").append(
										"<option value='0'>请选择酒店</option>")
								for (var i = 0; i < str.length; i++) {
									$("#citys").append(
													"<option value='"+str[i].id+"'>"
															+ str[i].name
															+ "</option>");//新增
								}
							}
						});
					});

			$("#citys").change(
					function() {
						$.get("getHotelById", {
							countryid : $("#citys").val()
						}, function(data) {
							if (data != null) {
								var str = JSON.parse(data);
								//根据id查找对象，
								$("#hotelName").find("option").remove();
								$("#hotelName").append(
										"<option value='0'>请选择酒店</option>")
								for (var i = 0; i < str.length; i++) {
									$("#hotelName").append(
											"<option value='"+str[i].id+"'>"
													+ str[i].hotelName
													+ "</option>");//新增
								}
							}
						});
					});
			if ($("#provinecs").val() != 0) {
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
							var countryid = $("#countryid").val();
							for (var i = 0; i < str.length; i++) {
								$("#citys").append("<option value='"+str[i].id+"'>"+ str[i].name + "</option>");//新增
								if (str[i].id == countryid) {
									$("#citys").find("option[value='"+ countryid + "']").attr("selected", true);
								}
							}
						}
					});
				});
			};
			if ($("#countryid").val() != 0) {
				$(function() {
					$.get("getHotelById", {
						countryid : $("#countryid").val()
					}, function(data) {
						if (data != null) {
							var str = JSON.parse(data);
							//根据id查找对象，
							var hotelNameId = $("#hotelNameId").val();
							for (var i = 0; i < str.length; i++) {
								$("#hotelName").append("<option value='"+str[i].id+"'>"+ str[i].hotelName+ "</option>");//新增
								if (str[i].hotelName == hotelNameId) {
									$("#hotelName").find("option[value='" + str[i].id + "']").attr("selected", true);
								}
							}
						}
					});
				});
			};
			//设置城市相关下拉框为只读
			if($("#houseId").val() != ""){
				$("#provinecs").attr("disabled","true");
				$("#citys").attr("disabled","true");
				$("#hotelName").attr("disabled","true");
			};
			
			$("#filePicker").click(function() {
				document.getElementById("btn_file").click();
			});
			/* $("#btn_file")
					.change(
							function() {
								var input = document.getElementById("btn_file");
								var file = input.files[0];
								if (!/image\/\w+/.test(file.type)) {
									layer.msg("文件必须为图片！");
									return false;
								}
								var reader = new FileReader();
								reader.readAsDataURL(file);
								reader.onload = function() {
									document.getElementById("fileList").innerHTML = '<img src="'+this.result+'" style="width:300px;height:300px;"/>'
								}
							}); */
			/* 	$("#roomPoto").click(function() {
					document.getElementById("roomFile").click();
				});
				$("#roomFile")
						.change(
								function() {
									var input = document.getElementById("roomFile");
									var file = input.files[0];
									if (!/image\/\w+/.test(file.type)) {
										layer.msg("文件必须为图片！");
										return false;
									}
									var reader = new FileReader();
									reader.readAsDataURL(file);
									reader.onload = function() {
										document.getElementById("roomPotoList").innerHTML = '<img src="'+this.result+'" style="width:300px;height:300px;"/>'
									}
								}); */
		});
	</script>
</body>
</html>