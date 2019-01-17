<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
 <head>
    <meta charset="UTF-8">
    <title>403</title>
    <style>
        html, body {
            padding: 0;
            margin: 0;
            height: 100%;
        }
        .box {
            width: 100%;
            height: 100%;
            background-color: wheat;
            text-align: center;  /*文本水平居中*/
            padding-top: 15%;
        }
    </style>
</head>
<body>
 
    <div class="box">
        <h1>403 您进入了无人区，请查看您是否已登陆...</h1>
        <span id="counter"></span>秒后 <a href="http://www.baidu.com">返回登陆页面</a>
    </div>
 
    <script>
        var $counter = document.getElementById('counter');
        function countDown(secs)
        { 
            $counter.innerText=secs;
            if(--secs>0)
            {
                setTimeout("countDown("+secs+")",1000); 
            }
            if(secs==0)
            {
                location.href = 'backendLogin';
            }
        } 
        countDown(5); 
    </script>
</body>
</html>				
			