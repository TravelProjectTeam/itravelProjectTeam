<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<html>
<head>
<meta charset="utf-8">
<title>Insert title here</title>

<script src="jquery/jquery-1.8.3.min.js"></script>
<script src="http://cdn.hcharts.cn/highcharts/highcharts.js"></script>
<script src="js/highcharts.js"></script>
</head>

<body>
	<div id="main" style="text-align: center;">
		<div id="container" style="text-align: center;"></div>
		年份： <select id="year">
			<option value="2018">2018</option>
		</select> 数据类型：<select id="dataType">
			<option value="sale">销售额</option>
			<option value="orders">订单数</option>
		</select> 图标类型：<select id="charts">
			<option value="spline">曲线图</option>
			<option value="column">柱状图</option>
			<option value="pie">饼图</option>
		</select>
		<!-- 图表容器 DOM -->
	</div>

</body>
</html>