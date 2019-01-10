<%@ page language="java" import="java.util.*"
	contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<!-- saved from url=(0040)https://www.plateno.com/Club/MemberInfo/ -->
<html ng-app="wehotelApp" class="ng-scope"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>
    <!-- META SECTION -->

<title>铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店</title>

    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
<link rel="icon" href="https://www.plateno.com/favicon-plateno.ico" type="image/x-icon">
    <!-- END META SECTION -->

    <!-- CSS INCLUDE -->
    <link rel="stylesheet" href="css/berInfo.css">
    <!-- EOF CSS INCLUDE -->
<script type="text/javascript" src="./铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店_files/tongji.js.下载"></script></head>
<body ng-controller="memberInfoController" ng-init="init()" ng-class="{&#39;plateno&#39;:$root.siteConfig.site_id==$root.siteEnum.Plateno}" class="ng-scope plateno">

<form name="weForm" novalidate="" class="ng-pristine ng-valid">
    <!-- ngInclude: $root.siteConfig.memberInfo.template_url --><div class="container ng-scope" ng-include="$root.siteConfig.memberInfo.template_url">
    <div class="wehotel account personalInformation ng-scope">

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
        <a ng-class="{&#39;hidden&#39;: $root.topNavIndex == $root.siteConfig.topNavEnum.home }" href="https://www.plateno.com/" class="ng-binding">首页</a>
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
        <div class="divider2" style="margin-left:25px;"></div>
        <div class="header-phone-container">
            <div class="header-phone">
            </div>
            <div class="qrcode-box clearfix">
                <div class="qrcode-cover"></div><div class="qrcode">
                    <img ng-src="/dist/images/qrcode_wechat_plateno.png" src="./铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店_files/qrcode_wechat_plateno.png">
                    <a class="ng-binding">铂涛旅行APP</a>
                </div><div class="divider3"></div><div class="qrcode">
                    <img ng-src="/dist/images/qrcode_app_plateno.png" src="./铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店_files/qrcode_app_plateno.png">
                    <a class="ng-binding">铂涛旅行官方微信</a>
                </div>
            </div>
        </div>
        <div class="divider2"></div>
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
                    <div class="number horizantal ng-binding" id="memberCardNo">31127947837</div>
                </li>
                <!--<li class="unit_box">-->
                    <!--<label class="horizantal">{{'TOP_NAV_MEMBER_SCORE' | T}}:</label>-->
                    <!--<div class="number horizantal ellipsis" id="memberScore">{{$root.user.score}}</div>-->
                    <!--<a class="exchange_btn horizantal" title="{{'TOP_NAV_EXCHANGE' | T}}" href="{{$root.siteConfig.links.mall_url}}" target="_blank">【{{'TOP_NAV_EXCHANGE' | T}}】</a>-->
                <!--</li>-->
                <li class="member_dealing_unit">
                    <a href="https://www.plateno.com/Club/MemberCoupon/" class="ng-binding">我的优惠券</a>
                </li>
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
        <div ng-class="category == &#39;prime&#39; || (!$root.isLogined &amp;&amp; defaultBanner != &#39;3&#39;) || ($root.isLogined &amp;&amp; defaultBanner == &#39;2&#39;)? &#39;banner placeholder-clubs&#39; : &#39;banner placeholder-clubs gift-nav-bar&#39;" class="placeholder ng-isolate-scope banner placeholder-clubs gift-nav-bar" account-nav-bar="" params="" callback="">
    <!--滚动图-->
    <div class="slider cxslide">
        <div class="box">
            <ul class="banner-inner list">
                <!-- ngRepeat: banner in $root.siteConfig.bannerList.clubNavBar --><li ng-repeat="banner in $root.siteConfig.bannerList.clubNavBar" class="ng-scope">
                    <a style="background: url(http://static.bestwehotel.com/opt/static/chameleon/image/20180704/6b4b34e3-8081-4a06-9113-1f778422c800.jpg) no-repeat center top;cursor: default;" href="javascript:void(0);" target="_self"></a>
                </li><!-- end ngRepeat: banner in $root.siteConfig.bannerList.clubNavBar -->
            </ul>
        </div>
    </div>
    <div class="banner-container">
        <div class="consumer-info">
            <div class="consumer-top">
                <h4 class="ng-binding">注册会员<!-- ngIf: $root.user --><span ng-if="$root.user" class="ng-scope">，</span><!-- end ngIf: $root.user -->您好</h4>
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
            <!--<div class="consumer-bottom">-->
                <!--<p>{{'MEMBERNAV_LEVEL' | T}}：<b><span ng-if="$root.user">{{$root.user.memberLevel}}</span></b></p>-->
                <!--<div class="group"  ng-if="$root.user.oldMemberLevel != 10">-->
                    <!--<p class="score">{{'MEMBERNAV_POINTS' | T}}<span class="score-bg">-->
                                <!--<i class="percent" ng-style="{width: (account.growth/account.nextLevelGrowth*100) + '%'}">-->
                                    <!--<a class="progress" ng-if="$root.user">{{account.growth}}/{{account.nextLevelGrowth}}</a>-->
                                <!--</i>-->
                            <!--</span>-->
                        <!--<span ng-if="$root.user.oldMemberLevel != account.nextLevel && $root.user.oldMemberLevel<6">{{'MEMBERNAV_NEXT' | T}}：{{account.nextLevelName}}</span>-->
                    <!--</p>-->
                    <!--<p>{{'MEMBERNAV_TIME' | T}}：{{account.endTime}}</p>-->
                    <!--<p>{{'MEMBERNAV_AVAILABLE' | T}}：<b>{{$root.user.score}}</b>-->
                        <!--<a class="exchange" href="{{$root.siteConfig.links.mall_url}}" target="_blank">{{'MEMBERNAV_USE' | T}}</a>-->
                    <!--</p>-->
                <!--</div>-->
                <!--<div class="group addinfo" ng-if="$root.user.oldMemberLevel == 9">-->
                    <!--<p>完善个人信息，享会员特权</p>-->
                    <!--<a class="link" href="/Club/MemberInfo/">完善个人信息</a>-->
                <!--</div>-->
            <!--</div>-->
            <!--会员中心-->
            <div class="consumer-bottom">
                <!-- ngIf: ($root.isLogined && $root.primeMeb && defaultBanner == '2') || $root.isLogined && defaultBanner != '2' --><div ng-if="($root.isLogined &amp;&amp; $root.primeMeb &amp;&amp; defaultBanner == &#39;2&#39;) || $root.isLogined &amp;&amp; defaultBanner != &#39;2&#39;" class="ng-scope">
                    <p><span class="w60 ng-binding">会员等级：</span><b><span class="ng-binding">We普卡</span></b>
                        <i class="tips"><i class="tips-content ng-binding">礼享会是WeHotel针对WeHotel平台上所有品牌（尊享成员酒店除外）制定的会员计划</i></i>
                        <!-- ngIf: $root.primeMeb -->
                    </p>
                    <p class="ng-binding"><span class="w60 ng-binding">礼享积分：</span>0</p>
                    <p class="ng-binding"><span class="w60 ng-binding">有效期至：</span>9999-12-30</p>
                    <p class="mr_t25 w280 ng-binding"><span class="w60 ng-binding">房晚：</span><span class="score-bg">
                                <i class="percent" ng-style="{width: ((categoryList[category].fwV/categoryList[category].nextFwV)*100) + &#39;%&#39;}" style="width: 0%;">
                                    <a class="progress ng-binding">0</a>
                                </i>
                            </span>5
                    </p>
                    <p class="mr_t10 w280 ng-binding"><span class="w60 ng-binding">成长值：</span><span class="score-bg">
                                <i class="percent" ng-style="{width: ((categoryList[category].checkInV/categoryList[category].nextCheckInV)*100) + &#39;%&#39;}" style="width: 5%;">
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
                <div class="placeholder sidebar ng-isolate-scope" account-left-side-bar="" active-index="3">
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
                <li><a ng-class="{&#39;active&#39;: activeIndex==3}" ng-href="javascript:void(0);" class="ng-binding active" href="javascript:void(0);"><i>•&nbsp;</i>个人信息</a></li>
                <li><a ng-class="{&#39;active&#39;: activeIndex==6}" ng-href="/Club/MemberSecurity" class="ng-binding" href="webSecurity"><i>•&nbsp;</i>账户安全</a></li>
                <!--<li><a ng-class="{'active': activeIndex==7}" ng-href="{{activeIndex == 7 ? 'javascript:void(0);': '/Club/MemberSubscription'}}">我的订阅</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==8}" href="javascript:void(0);">消息中心</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==9}" href="{{activeIndex == 9 ? 'javascript:void(0);': '/Club/MemberCardManage'}}">银行卡管理</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==2}" href="javascript:void(0);">常用联系人</a></li>-->
            </ul>
        </li>
        <li style="position: relative">
            <a class="ng-binding"><i class="icon-member"></i>关于会员</a>
            <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.WeHotel -->
            <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno --><a class="to-eng ng-scope" ng-if="$root.siteConfig.site_id==$root.siteEnum.Plateno" href="http://mebcenter.bestwehotel.com/h5_Projects/engmember/index.html#/?from=plateno" target="_blank">Eng.</a><!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
            <ul class="item-list">
                <!--<li ng-if="$root.siteConfig.site_id!=$root.siteEnum.Plateno"><a ng-class="{'active': activeIndex==11}" href="{{activeIndex == 11 ? 'javascript:void(0);': '/Club/AboutClub/HotelConsume.html'}}"><i>&bull;&nbsp;</i>{{'MEMBERASIDE_TAG6' | T}}</a></li>-->
                <!--<li ng-if="$root.siteConfig.site_id!=$root.siteEnum.Plateno"><a ng-class="{'active': activeIndex==12}" href="{{activeIndex == 12 ? 'javascript:void(0);': '/Club/AboutClub/AboutClub.html'}}"><i>&bull;&nbsp;</i>{{'MEMBERASIDE_TAG7' | T}}</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==13}" href="">加入锦江礼享</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==14}" href="">会员服务</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==15}" href="">会员条款与细则</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==16}" href="{{activeIndex == 16 ? 'javascript:void(0);': '/Club/AboutClub/Growth.html'}}"><i>&bull;&nbsp;</i>会员等级</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==17}" href="">隐私权政策</a></li>-->
                <!--<li><a ng-class="{'active': activeIndex==13}" href="{{activeIndex == 13 ? 'javascript:void(0);': '/Club/AboutClub/HandBook.html'}}"><i>&bull;&nbsp;</i>{{'MEMBERASIDE_TAG8' | T}}</a>-->
                    <!--<ul class="item-list">-->
                        <!--<li><a href="{{activeIndex == 13 ? 'javascript:void(0);': '/Club/AboutClub/HandBook.html?id=memScore'}}" ng-click="anchorScroll('memScore')" >会员积分</a></li>-->
                        <!--<li><a href="{{activeIndex == 13 ? 'javascript:void(0);': '/Club/AboutClub/HandBook.html?id=memSale'}}" ng-click="anchorScroll('memSale')">会员折扣</a></li>-->
                        <!--<li><a href="{{activeIndex == 13 ? 'javascript:void(0);': '/Club/AboutClub/HandBook.html?id=memGift'}}" ng-click="anchorScroll('memGift')">会员礼遇</a></li>-->
                    <!--</ul>-->
                <!--</li>-->

                <li><a ng-class="{&#39;active&#39;: activeIndex==13}" href="https://www.plateno.com/Club/AboutClub/HandBook.html" class="ng-binding"><i>•&nbsp;</i>WeHotel会员俱乐部</a>
                    <ul class="item-list">
                        <!-- ngIf: !$root.isLogined || $root.primeMeb -->
                        <!-- ngIf: $root.isLogined && !$root.primeMeb --><li ng-if="$root.isLogined &amp;&amp; !$root.primeMeb" class="ng-scope"><a ng-class="{&#39;active&#39;: activeIndex==18}" href="https://www.plateno.com/Club/AboutClub/JoinPrimeClub.html" class="ng-binding">尊享会</a></li><!-- end ngIf: $root.isLogined && !$root.primeMeb -->
                        <li><a ng-class="{&#39;active&#39;: activeIndex==19}" href="https://www.plateno.com/Club/AboutClub/GiftClub.html" class="ng-binding">礼享会</a></li>
                        <!--<li><a ng-class="{'active': activeIndex==19}" href="{{activeIndex == 19 ? 'javascript:void(0);': '/Club/AboutClub/GiftClub.html'}}" ng-click="anchorScroll('memSale')">{{'MEMBERASIDE_TAG12' | T}}</a></li>-->
                    </ul>
                </li>
                <li><a ng-class="{&#39;active&#39;: activeIndex==14}" href="https://www.plateno.com/Club/AboutClub/HelpClub.html" class="ng-binding"><i>•&nbsp;</i>常见问题</a></li>
            </ul>

        </li>

    </ul>
</div>
                <!--侧边栏END-->
                <!--页面内容-->
                <div class="main">

                    <div class="main-container">
                        <div class="title">
                            <h4 class="ng-binding">基本信息</h4>

                        </div>
                        <div class="section">
                            <ul>
                                <li class="form-group form-inline">
                                    <label class="ng-binding">姓名：</label>
                                    <!-- ngIf: isEdit == false --><p  class="ng-binding ng-scope">${user.name}</p><!-- end ngIf: isEdit == false -->
                                    <!-- ngIf: isEdit == true -->
                                    <!-- ngIf: options.submitted && options.nameError != '' -->

                                </li>
                                <li class="form-group form-inline">
                                    <label class="ng-binding">证件类型：</label>
                                    <!-- ngIf: isEdit == false --><p class="ng-scope">${user.documentType}
                                        <!-- ngIf: postModel.certificateType == 10 -->
                                        <!-- ngIf: postModel.certificateType == 11 -->
                                        <!-- ngIf: postModel.certificateType == 12 -->
                                        <!-- ngIf: postModel.certificateType == 13 -->
                                    </p><!-- end ngIf: isEdit == false -->
                                    <!-- ngIf: isEdit == true -->
                                </li>
                                <li class="form-group form-inline">
                                    <label class="ng-binding">证件号：</label>
                                    <!-- ngIf: isEdit == false --><p class="ng-binding ng-scope">${user.certificateNo}</p><!-- end ngIf: isEdit == false -->
                                    <!-- ngIf: isEdit == true -->
                                    <!-- ngIf: options.submitted && options.cardNoError != '' -->
                                    <!-- ngIf: isEdit == true && params.lastCertificateNo -->
                                </li>
                                <!--<li class="form-group form-inline">-->
                                    <!--<label>{{'MEMBERINFO_SEX' | T}}</label>-->
                                    <!--<p ng-if="isEdit == false">{{postModel.sexDesc}}</p>-->
                                    <!--<select ng-if="isEdit == true" class="form-control" name="sex" ng-model="postModel.sex">-->
                                        <!--<option value="1">{{'MEMBERINFO_SEX_1' | T}}</option>-->
                                        <!--<option value="2">{{'MEMBERINFO_SEX_2' | T}}</option>-->
                                    <!--</select>-->
                                <!--</li>-->
                                <li class="form-group form-inline">
                                    <label class="ng-binding">手机：</label>
                                    <!-- ngIf: isEdit == false --><p ng-if="isEdit == false" class="ng-binding ng-scope">${user.phone}</p><!-- end ngIf: isEdit == false -->
                                    <!-- ngIf: isEdit == true -->
                                    <!-- ngIf: isEdit == true && !postModel.mobile -->
                                </li>
                                <li class="form-group form-inline">
                                    <label class="ng-binding">邮箱：</label>
                                    <!-- ngIf: isEdit == false --><p class="ng-binding ng-scope">${user.email}</p><!-- end ngIf: isEdit == false -->
                                    <!-- ngIf: isEdit == true -->
                                    <!-- ngIf: options.submitted && options.emailError != '' -->
                                </li>
                                <li class="form-group form-inline">
                                    <label class="ng-binding">生日：</label>
                                    <!-- ngIf: isEdit == false --><p class="ng-binding ng-scope">${user.birthday}</p><!-- end ngIf: isEdit == false -->
                                    <!-- ngIf: isEdit == true -->
                                    <!-- ngIf: options.submitted && options.birthdayError != '' -->
                                </li>
                            </ul>
                        </div>
                        <div class="edit">
                            <p class="error ng-binding" style="margin-left: -60px;">
                               <!--ng-if="params.lastEmail && params.lastBirthday && params.lastCertificateNo" >-->

                                *如需修改个人信息，请联系客服 李帅，王欣怡</p>
                            <!--<a ng-if="!params.lastEmail || !params.lastBirthday || !params.lastCertificateNo" class="btn bluebtn" ng-class="{'disabled': isSaving}" ng-click="toggleEdit()">{{(!isEdit ? 'MEMBERINFO_BUTTON_EDIT': 'MEMBERINFO_BUTTON_SAVE') | T}}</a>-->
                        </div>
                    </div>
                </div>
                <!--页面内容END-->
            </div>
        </div>


        <!-- weModal 弹窗 -->
        <div class="modal fade ng-isolate-scope base-modal" tabindex="-1" ng-class="{&#39;in&#39;: showModal == true,&#39;base-modal&#39;:params.enableMiniModal}" we-modal="" show-modal="options.showAlert" params="alertModal" callback="alertModalCallback()">
    <div class="modal-dialog">
        <div class="modal-content" ng-class="params.contentClass">
            <!-- ngIf: params.enableMiniModal&&params.closeTag -->
            <!-- ngIf: params.title -->
            <div class="modal-body" ng-class="{&#39;scroll-container&#39;:params.scrollContainer}">
                <div ng-bind-html="params.content | html" class="ng-binding"></div>
            </div>
            <!-- ngIf: params.buttons.length>0 --><div class="modal-footer ng-scope center" ng-class="[params.buttonPositon]" ng-if="params.buttons.length&gt;0">
                <!-- ngRepeat: button in params.buttons --><button type="button" ng-repeat="button in params.buttons" class="btn btn-primary ng-binding ng-scope bluebtn" ng-class="[button.class]" ng-click="onButtonClick(button.name)">确认</button><!-- end ngRepeat: button in params.buttons -->
            </div><!-- end ngIf: params.buttons.length>0 -->
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>

        <!-- CONTENT ED -->

        <!-- ngInclude: $root.siteConfig.footer_url --><div class="footer ng-scope" ng-include="$root.siteConfig.footer_url"> <div class="footer-main ng-scope">
    <aside class="links">
        <ul class="navfri clearfix">
            <!-- ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
            <!-- ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
            <!-- ngIf: $root.siteConfig.site_id!=$root.siteEnum.Plateno -->
            <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno --><li ng-if="$root.siteConfig.site_id==$root.siteEnum.Plateno" class="ng-scope"><a href="http://www.platenogroup.com/pages/group/" target="_blank" class="ng-binding">关于我们</a></li><!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
            <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno --><li ng-if="$root.siteConfig.site_id==$root.siteEnum.Plateno" class="ng-scope"><a href="http://plateno.zhiye.com/contactus" target="_blank" class="ng-binding">联系我们</a></li><!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
            <!-- ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno --><li ng-if="$root.siteConfig.site_id==$root.siteEnum.Plateno" class="ng-scope"><a href="http://plateno.zhiye.com/" target="_blank" class="ng-binding">加入我们</a></li><!-- end ngIf: $root.siteConfig.site_id==$root.siteEnum.Plateno -->
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

<script src="./铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店_files/siteConfig.js.下载"></script>

<script src="./铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店_files/vendor.min.js.下载"></script>

<script src="./铂涛集团官网-铂涛旅行官网-官方直订：7天酒店、IU、派酒店、麗枫、喆啡、希岸等品牌酒店_files/wehotel.min.js.下载"></script>



</body></html>