<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<!-- saved from url=(0044)https://www.plateno.com/Club/MemberSecurity/ -->
<html  class="ng-scope"><head>    <!-- META SECTION -->

<title>铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店</title>

    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
<link rel="icon" href="https://www.plateno.com/favicon-plateno.ico" type="image/x-icon">
    <!-- END META SECTION -->

    <!-- CSS INCLUDE -->
    <link rel="stylesheet" href="css/berInfo.css">
    <!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="./security_files/tongji.js.下载"></script></head>
<body ng-controller="memberSecurityController" ng-init="init()" ng-class="{&#39;plateno&#39;:$root.siteConfig.site_id==$root.siteEnum.Plateno}" class="ng-scope plateno">

<form name="weForm" novalidate="" class="ng-pristine ng-invalid ng-invalid-required">
    <!-- ngInclude: $root.siteConfig.memberSecurity.template_url --><div class="container ng-scope" ng-include="$root.siteConfig.memberSecurity.template_url">
    <div class="wehotel account personalInformation  ng-scope">

        <!-- header begin -->
        <!-- ngInclude: $root.siteConfig.header_url --><div class="header header-transparent ng-scope" ng-include="$root.siteConfig.header_url"><!-- header begin -->
<!-- 预览模式 OP -->
<!-- ngIf: $root.siteConfig.isPreview -->
<!-- 预览模式 ED -->
<div class="header-center ng-scope">
    <div class="logo">
        <a href="https://www.plateno.com/"><h1 ng-class="{&#39;icon-we-logo&#39;:$root.siteConfig.site_id==$root.siteEnum.WeHotel,&#39;icon-we-ptlx&#39;:$root.siteConfig.site_id==$root.siteEnum.Plateno}" class="icon-we-ptlx"></h1></a>
    </div>
    <!--锦江导航-->
    <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->


    <!--铂涛导航-->
    <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno --><div class="navigation ng-scope" ng-if="$root.siteConfig.site_id==$root.siteEnum.Plateno">
        <a ng-class="{&#39;hidden&#39;: $root.topNavIndex == $root.siteConfig.topNavEnum.home }" href="webIndex" class="ng-binding">首页</a>
        <a ng-class="{&#39;hidden&#39;:$root.topNavIndex == $root.siteConfig.topNavEnum.club || $root.topNavIndex == $root.siteConfig.topNavEnum.hotel|| $root.topNavIndex == $root.siteConfig.topNavEnum.shop  ,&#39;active&#39;:$root.topNavIndex == $root.siteConfig.topNavEnum.hotel}" href="https://www.plateno.com/HotelSearch" class="ng-binding hidden">酒店预订</a>
        <a href="http://biz.bestwehotel.com/" target="_blank" class="ng-binding">企业差旅</a>
        <a href="https://www.plateno.com/activity/shopguide.html" class="ng-binding">积分商城</a>
        <!--<a href="{{$root.siteConfig.links.about_club_link}}">{{'TOP_NAV_HAND_BOOK' | T}}</a>-->
        <a ng-class="{&#39;hidden&#39;:$root.topNavIndex == $root.siteConfig.topNavEnum.club }" href="https://www.plateno.com/Club/AboutClub/HandBook.html" class="ng-binding hidden">会员俱乐部</a>
        <span class="clubs" ng-class="{&#39;hidden&#39;:$root.topNavIndex != $root.siteConfig.topNavEnum.club }">
            <a href="https://www.plateno.com/Club/AboutClub/HandBook.html" class="ng-binding">会员俱乐部</a>
            <span class="about_clubs">
               <!-- ngIf: !$root.isLogined || $root.primeMeb -->
                <!-- ngIf: $root.isLogined && !$root.primeMeb --><a ng-if="$root.isLogined &amp;&amp; !$root.primeMeb" href="https://www.plateno.com/Club/AboutClub/JoinPrimeClub.html" class="ng-binding ng-scope">尊享会</a><!-- end ngIf: $root.isLogined && !$root.primeMeb -->
                <a href="https://www.plateno.com/Club/AboutClub/GiftClub.html" class="ng-binding">礼享会</a>
            </span>
        </span>
    </div><!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
    <div class="header-action clearfix">
        <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno --><a class="en-cut ng-scope" ng-if="$root.siteConfig.site_id==$root.siteEnum.Plateno" href="https://en.plateno.com/" target="_blank">ENG</a><!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
        <div class="header-phone-container">
        </div>
        <div class="header-login">
            <!-- ngIf: !$root.isLogined --><!-- ngIf: !$root.isLogined -->
        </div>
        <!-- ngIf: $root.isLogined --><div class="header-logined ng-scope" ng-if="$root.isLogined">
            <a class="logined ng-binding">注册会员 <div class="arrow"></div> </a>
            <ul id="logined_box" class="logined_box">
                <!-- ngIf: $root.user.primeMeb -->
                <li class="unit_box">
                    <label class="horizantal ng-binding">会员层级:</label>
                    <div class="horizantal ng-binding">We普卡</div>
                </li>
                <li class="unit_box">
                    <label class="horizantal blocks1 ng-binding">卡号:</label>
                    <div class="number horizantal ng-binding" id="memberCardNo">${sessionScope.userSession.phone}</div>
                </li>
                <!--<li class="unit_box">-->
                    <!--<label class="horizantal">{{'TOP_NAV_MEMBER_SCORE' | T}}:</label>-->
                    <!--<div class="number horizantal ellipsis" id="memberScore">{{$root.user.score}}</div>-->
                    <!--<a class="exchange_btn horizantal" title="{{'TOP_NAV_EXCHANGE' | T}}" href="{{$root.siteConfig.links.mall_url}}" target="_blank">【{{'TOP_NAV_EXCHANGE' | T}}】</a>-->
                <!--</li>-->
                <li class="member_dealing_unit">
                    <a href="https://www.plateno.com/Order/HotelOrders" class="ng-binding">我的订单</a>
                </li>
                <li class="member_dealing_unit">
                    <a href="https://www.plateno.com/Club/MemberInfo/" class="ng-binding">我的账户</a>
                </li>
                <li class="member_dealing_unit">
                    <a class="logout ng-binding" id="logout" ng-click="$root.logout()">【退出】</a>
                </li>
                <li class="enter_club_center_btn yahei" id="EnterClub">
                    <a href="https://www.plateno.com/Club/AboutClub/HandBook.html" class="ng-binding">进入会员俱乐部 &gt; &gt;</a>
                </li>
            </ul>
        </div><!-- end ngIf: $root.isLogined -->

    </div>
</div>
<!-- header end --></div>
        <!-- header end -->
        <!-- CONTENT OP -->
        <div>
    <!--滚动图-->
    <div class="slider cxslide">
        <div class="box">
            <ul class="banner-inner list">
                <!-- ngRepeat: banner in $root.siteConfig.bannerList.clubNavBar --><li  class="ng-scope">
                    <a style="background: url(http://static.bestwehotel.com/opt/static/chameleon/image/20180704/6b4b34e3-8081-4a06-9113-1f778422c800.jpg) no-repeat center top;cursor: default;" href="javascript:void(0);" target="_self"></a>
                </li><!-- end ngRepeat: banner in $root.siteConfig.bannerList.clubNavBar -->
            </ul>
        </div>
    </div>
    <div class="banner-container">
        <div class="consumer-info">
            <div class="consumer-top">
                <h4 class="ng-binding">注册会员<!-- ngIf: $root.user --><span  class="ng-scope">，</span><!-- end ngIf: $root.user -->您好</h4>
                <ul>
                    <li>
                        <div class="section">
                            <p class="ng-binding">0</p>
                            <p class="ng-binding">待支付</p>
                        </div>
                    </li>
                    <li>
                        <div class="section">
                            <p class="ng-binding">0</p>
                            <p class="ng-binding">待入住</p>
                        </div>
                    </li>
                    <li>
                        <div class="section">
                            <p class="ng-binding">0</p>
                            <p class="ng-binding">优惠券</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <!--会员中心-->
            <div class="consumer-bottom">
                <!-- ngIf: ($root.isLogined && $root.primeMeb && defaultBanner == '2') || $root.isLogined && defaultBanner != '2' --><div class="ng-scope">
                    <p><span class="w60 ng-binding">会员等级：</span><b><span class="ng-binding">We普卡</span></b>
                        <i class="tips"><i class="tips-content ng-binding">礼享会是WeHotel针对WeHotel平台上所有品牌（尊享成员酒店除外）制定的会员计划</i></i>
                        <!-- ngIf: $root.primeMeb -->
                    </p>
                    <p class="ng-binding"><span class="w60 ng-binding">礼享积分：</span>0</p>
                    <p class="ng-binding"><span class="w60 ng-binding">有效期至：</span>9999-12-30</p>
                    <p class="mr_t25 w280 ng-binding"><span class="w60 ng-binding">房晚：</span><span class="score-bg">
                                <i class="percent"  style="width: 0%;">
                                    <a class="progress ng-binding">0</a>
                                </i>
                            </span>5
                    </p>
                    <p class="mr_t10 w280 ng-binding"><span class="w60 ng-binding">成长值：</span><span class="score-bg">
                                <i class="percent"  style="width: 5%;">
                                    <a class="progress ng-binding">50</a>
                                </i>
                            </span>1000
                    </p>
                </div><!-- end ngIf: ($root.isLogined && $root.primeMeb && defaultBanner == '2') || $root.isLogined && defaultBanner != '2' -->
                <!-- ngIf: !$root.isLogined -->
                <!-- ngIf: $root.isLogined && !$root.primeMeb && defaultBanner == '2' -->
            </div>
        </div>
    </div>
</div>

        <div class="center">
            <div class="center-container">
                <!--侧边栏-->
                <div class="placeholder sidebar ng-isolate-scope" >
    <ul class="nav">
        <li>
            <a class="myList ng-binding"><i class="icon-list"></i>我的订单</a>
            <ul class="item-list">
                <li><a  class="ng-binding" href="hotelOrders"><i>•&nbsp;</i>酒店订单</a></li>
                <!--<li><a ng-class="{'active': activeIndex==2}" href="javascript:void(0);">其他订单</a></li>-->
            </ul>
        </li>
        <li>
            <a class="ng-binding"><i class="icon-account"></i>我的账户</a>
            <ul class="item-list">
                <li><a  class="ng-binding" href="webBerInfo"><i>•&nbsp;</i>个人信息</a></li>
                <li><a  class="ng-binding active" href="javascript:void(0);"><i>•&nbsp;</i>账户安全</a></li>
            </ul>
        </li>
        <li style="position: relative">
            <a class="ng-binding"><i class="icon-member"></i>关于会员</a>
<a class="to-eng ng-scope" target="_blank"></a>
            <ul class="item-list">
               

                <li><a href="https://www.plateno.com/Club/AboutClub/HandBook.html" class="ng-binding"><i>•&nbsp;</i>WeHotel会员俱乐部</a>
                    <ul class="item-list">
                      <li class="ng-scope"><a href="https://www.plateno.com/Club/AboutClub/JoinPrimeClub.html" class="ng-binding">尊享会</a></li><!-- end ngIf: $root.isLogined && !$root.primeMeb -->
                        <li><a href="https://www.plateno.com/Club/AboutClub/GiftClub.html" class="ng-binding">礼享会</a></li>
                        
                    </ul>
                </li>
                <li><a href="https://www.plateno.com/Club/AboutClub/HelpClub.html" class="ng-binding"><i>•&nbsp;</i>常见问题</a></li>
            </ul>

        </li>

    </ul>
</div>
                <!--侧边栏END-->

                <!--页面内容-->
                <div class="main">

                    <div class="main-container">
                        <div class="title">
                            <h4 class="ng-binding">修改密码</h4>
                            <!--<a href="" ng-click="showModal = true" class="">编辑</a>-->
                        </div>
                        <div class="account-info passworden">
                        <span id="error" style="color: red; padding-left: 40px;"></span>
                            <div class="form-group form-inline">
                                <label class="ng-binding">当前密码：</label>
                                <input id="pwd" type="password" maxlength="16" name="oldPassword" class="form-control ng-pristine ng-invalid ng-invalid-required ng-valid-minlength" autocomplete="off" required="required">

                                <!-- ngIf: options.submitted && weForm.oldPassword.$invalid -->
                            </div>
                            <div class="form-group form-inline">
                                <label class="ng-binding">设置密码：</label>
                                <input type="password" id="pwd1" maxlength="16" name="newPassword"  class="form-control ng-pristine ng-invalid ng-invalid-required ng-valid-minlength" autocomplete="off" required="required">
                                <!-- ngIf: options.submitted && weForm.newPassword.$invalid -->
                            </div>
                            <div class="form-group form-inline">
                                <label class="ng-binding">重复密码：</label>
                                <input type="password" id="pwd2" name="newPasswordConfirm"  class="form-control ng-pristine ng-invalid ng-invalid-required" maxlength="16" autocomplete="off" required="required">
                                <!-- ngIf: options.submitted && postModel.newPassword != postModel.newPasswordConfirm -->
                            </div>
                            <div class="submit">
                                <!-- <a id="submit" href="java" class="btn bluebtn ng-binding">修改</a> -->
                                <input type="button" value="修改" id="submit" class="btn bluebtn ng-binding">
                            </div>
                        </div>
                        <div class="remark">
                            <p class="ng-binding">请牢记您的密码。以便管理您的账户信息。</p>
                        </div>

                    </div>


                </div>
                <!--页面内容END-->

            </div>
        </div>


        <!-- weModal 弹窗 -->
        <div class="modal fade ng-isolate-scope" tabindex="-1" >
    <div class="modal-dialog">
        <div class="modal-content" >
            <!-- ngIf: params.enableMiniModal&&params.closeTag -->
            <!-- ngIf: params.title -->
            <div class="modal-body" >
                <div  class="ng-binding"></div>
            </div>
            <!-- ngIf: params.buttons.length>0 -->
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>

        <!-- CONTENT ED -->

        <!-- ngInclude: $root.siteConfig.footer_url --><div class="footer ng-scope"> <div class="footer-main ng-scope">
    <aside class="links">
        <ul class="navfri clearfix">
           
            <li class="ng-scope"><a href="http://www.platenogroup.com/pages/group/" target="_blank" class="ng-binding">关于我们</a></li>
            <li class="ng-scope"><a href="http://plateno.zhiye.com/contactus" target="_blank" class="ng-binding">联系我们</a></li>
           <li class="ng-scope"><a href="http://plateno.zhiye.com/" target="_blank" class="ng-binding">加入我们</a></li>
            <li><a href="https://www.plateno.com/AboutUs/Help.html" class="ng-binding">常见问题</a></li>
            <li><a href="https://www.plateno.com/AboutUs/UserExperience.html" class="ng-binding">用户体验反馈</a></li>
        </ul>
    </aside>
     <div class="ffam">
         <p class="ng-binding">Copyright ©2013-2016 Plateno.com, All Rights reserved. 七天四季酒店（广州）有限公司</p>
         <p class="ng-binding">粤ICP备14062877号-1</p>
     </div>
     <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
</div>
</div>
    </div>
</div>
</form>
<script type="text/javascript" src="jquery/jquery-1.8.3.min.js"></script>
<script src="js/security.js"></script>




</body></html>