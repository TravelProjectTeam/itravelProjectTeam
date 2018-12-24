var we = we || {};
we.pages = we.pages || {},
we.pages.home = function() {
    function t() {
        $(document).click(function(t) {
            var i = t || window.event,
            e = i.target || i.srcElement;
            return "travelKeyword" != e.id && "travel-city-panel" != $(e).parents(".travel_terminal_recommend_box").attr("id") && void $("#travel-city-panel").hide()
        }),
        $(".hanging .pro-tab ul li").click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            var t = $(this).data("name");
            "hotel" == t ? ($("#hotel-tab").addClass("active"), $("#travel-tab").removeClass("active")) : ($("#hotel-tab").removeClass("active"), $("#travel-tab").addClass("active"))
        }),
        "Microsoft Internet Explorer" == navigator.appName && parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) <= 9 && $(".container").addClass("ie-fix"),
        $(".iconfont").click(function() {
            var t = $(this).parent(".brand-box");
            t.hasClass("toggle") ? t.removeClass("toggle") : t.addClass("toggle")
        }),
        $("#travelKeyword").click(function() {
            $(".travel_terminal_recommend_box").toggle()
        }),
        $(".travel_line_unit ul li").click(function() {
            $(".travel_terminal_recommend_box").hide();
            var t = $(this).html();
            $("#travelKeyword").val(t),
            c()
        }),
        $("#travelKeyword").bind("input propertychange",
        function() {
            c()
        }),
        $(function() {
            $("#slider").cxSlide({
                minus: !1,
                plus: !1,
                events: "click",
                type: "fade",
                speed: 600,
                time: 3e3
            })
        })
    }
    function i() {
        var t = we.plugins.selectCity();
        t.init("#selectCity", {
            extParentElement: ".banner .hanging"
        },
        function() {
            c()
        }),
        $("#city-panel ul.nations li").click(function() {
            var t = $(this).data("name");
            "internal" == t ? $(".home div.banner div.hanging").removeClass("international") : $(".home div.banner div.hanging").addClass("international")
        })
    }
    function e() {
        var t = we.plugins.selectPerson();
        t.init("#selectKids", {
            extParentElement: ".banner .hanging"
        },
        function(t) {
            d = t,
            $("#selectKids label").html(t.rooms + "间客房"),
            $("#selectKids p").html(t.adults + "<span>成人,</span>" + t.children + "<span>儿童</span>")
        })
    }
    function n(t, i) {
        function e(e, n) {
            a = we.common.dateFormat(e),
            l = we.common.dateFormat(n),
            e = we.common.dateFormat(e).split("-"),
            n = we.common.dateFormat(n).split("-"),
            $("#" + t).val(e[0] + "-" + e[1] + "-" + e[2]),
            $("#" + i).val(n[0] + "-" + n[1] + "-" + n[2]),
            c()
        }
        var n = (new Date).getTime();
        e(n, n + 864e5),
        new selectDate({
            id: t,
            outId: i,
            inTime: n,
            outTime: n + 864e5,
            timeType: 2,
            success: function(t) {
                e(t.inTime, t.outTime)
            },
            show: function(i) {
                $(".date-arrow").eq(i.id == t ? 0 : 1).addClass("active")
            },
            hide: function(i) {
                $(".date-arrow").eq(i.id == t ? 0 : 1).removeClass("active")
            }
        }).partInit();
        var a = "",
        l = ""
    }
    function a() {
        var t = we.plugins.keywordSelect(function() {
            c()
        });
        t.init()
    }
    function l() {
        we.common.corssDomain(we.config.host + "/api/member/pass",
        function(t) {
            if (t) {
                var i = JSON.parse(t);
                i && i.token ? (we.common.setCookie("wehotel_sso_token", i.token), y()) : r(!1)
            } else r(!1)
        })
    }
    function r(t) {
        t ? ($(".header-login").hide(), $(".header-logined").show()) : ($(".header-login").show(), $(".header-logined").hide())
    }
   

    function c() {
        var t = $("#inDatePicker").val(),
        i = $("#outDatePicker").val(),
        e = $("#selectCity").attr("data-city-code"),
        n = $("#key_input").val(),
        l = we.config.host + "/api/redirect/?webSource=PC_JINJIANG&backUrl=" + encodeURIComponent(a);
        var r = "上海",
        n = $("#travelKeyword").val();
        t = $("#travelInDatePicker").val(),
        i = $("#travelOutDatePicker").val(),
        l = "http://travel.jinjiang.com/search?minDepartDate=" + t + "&maxDepartDate=" + i + "&departurePlace=" + encodeURIComponent(r) + "&keyword=" + encodeURIComponent(n),
        $("#searchTravel").attr("href", l)
    }
    var s = function() {
        console.log("TODO: 初始化方法"),
        t(),
        i(),
        e();
        var r = "inDatePicker",
        y = "outDatePicker";
        n(r, y);
        var r = "travelInDatePicker",
        y = "travelOutDatePicker";
        n(r, y),
        a(),
        l()
    },
    d = {
        rooms: 1,
        adults: 1,
        children: 0,
        child1: 0,
        child2: 0,
        child3: 0
    };
    return s(),
    {}
},
$(function() {
    function t(t, i, e, n) {
        return - e * (t /= n) * (t - 2) + i
    }
    function i(t, i) {
        this.option = $.extend({},
        e, i),
        this.wrapper = t,
        this.container = t.children(".scale-container"),
        this.sliders = this.container.children(".scale-slider"),
        this.slidersLength = this.sliders.length,
        this.slidersWidth = [],
        this.index = this.option.start,
        this.timer = null,
        this.isAnimate = !1,
        this.points = [],
        this._init()
    }
    var e = {
        start: 0,
        preBtn: "",
        nextBtn: "",
        split: []
    },
    n = i.prototype;
    return n._init = function() {
        this.container.width(this._getContainerWidth()),
        this._setPoints(this.option.split),
        this._setContainerOffset(this.points[this.option.start]),
        this._initEvent()
    },
    n._initEvent = function() {
        this.option.preBtn && ($(this.option.preBtn).on("mouseenter", $.proxy(this._preBtnMouseEnter, this)), $(this.option.preBtn).on("click", $.proxy(this._preBtnMouseEnter, this))),
        this.option.nextBtn && ($(this.option.nextBtn).on("mouseenter", $.proxy(this._nextBtnMouseEnter, this)), $(this.option.nextBtn).on("click", $.proxy(this._nextBtnMouseEnter, this))),
        this.wrapper.on("mousemove", $.proxy(this._wrapperMouseMove, this))
    },
    n._preBtnMouseEnter = function() {
        return ! this.isAnimate && void(this._setIndex( - 1) && this._animate())
    },
    n._nextBtnMouseEnter = function() {
        return ! this.isAnimate && void(this._setIndex(1) && this._animate())
    },
    n._wrapperMouseMove = function(t) {
        var i = t.pageX;
        t.pageY;
        this.sliders.each(function(t, e) {
            var n = $(e),
            a = n.offset(),
            l = a.left;
            a.top,
            Math.abs(i - l)
        })
    },
    n._animate = function() {
        var i = -this.container.get(0).offsetLeft,
        e = this.points[this.index],
        n = 0,
        a = 80,
        l = e - i,
        r = this;
        r.timer && clearInterval(r.timer),
        r.timer = setInterval(function() {
            n >= a && (clearInterval(r.timer), this.isAnimate = !1),
            this.isAnimate = !0,
            r._setContainerOffset(t(n, i, l, a)),
            n++
        },
        1e3 / 60)
    },
    n._setContainerOffset = function(t) {
        this.container.css("left", -t + "px")
    },
    n._setPoints = function(t) {
        for (var i = 0,
        e = t.length,
        n = [], a = this.wrapper.outerWidth(), l = this.container.outerWidth(); i < e; i++) {
            var r = this.slidersWidth[t[i]];
            r + a > l && (r = l - a),
            n.push(r)
        }
        this.points = n
    },
    n._setIndex = function(t) {
        var i = this.index;
        return this.index += t,
        this.index < 0 && (this.index = 0),
        this.index > this.points.length - 1 && (this.index = this.points.length - 1),
        this.index !== i
    },
    n._getContainerWidth = function() {
        var t = 0,
        i = this;
        return this.sliders.each(function(e, n) {
            i.slidersWidth[e] = t;
            var a = window.getComputedStyle ? getComputedStyle(n, null) : n.firstChild.currentStyle;
            t += parseInt(a.width) + (parseInt(a.marginLeft) || 0) + parseInt(a.marginRight)
        }),
        t
    },
    $.fn.imgScale = function(t) {
        return new i($(this), t || {})
    },
    i
});
var we = we || {};
we.config = {
    host: "http://uat-new.jjsc.com"
};

var we = we || {};
we.common = {
    dateFormat: function(t, i) {
        var e = new Date,
        n = ["日", "一", "二", "三", "四", "五", "六"];
        t && e.setTime(t),
        i = i || "yyyy-mm-dd";
        var a = {
            "m+": e.getMonth() + 1,
            "d+": e.getDate(),
            "w+": n[e.getDay()],
            "h+": e.getHours(),
            "M+": e.getMinutes(),
            "s+": e.getSeconds()
        };
        /(y+)/.test(i) && (i = i.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var l in a) new RegExp("(" + l + ")").test(i) && (i = i.replace(RegExp.$1, 1 == RegExp.$1.length ? a[l] : ("00" + a[l]).substr(("" + a[l]).length)));
        return i
    },
    ajaxGet: function(t, i) {
        $.ajax({
            url: t,
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function(t, e, n) {
                i && i(t)
            },
            fail: function(t, e, n) {
                i && i(t)
            },
            error: function(t, e) {
                i && i(t)
            }
        })
    },
    ajaxPost: function(t, i, e) {
        $.ajax({
            url: t,
            type: "POST",
            data: JSON.stringify(i),
            contentType: "application/json",
            dataType: "json",
            success: function(t, i, n) {
                e && e(t)
            },
            fail: function(t, i, n) {
                e && e(t)
            },
            error: function(t, i) {
                e && e(t)
            }
        })
    },
    getCookie: function(t) {
        for (var i = t + "=",
        e = document.cookie.split(";"), n = 0; n < e.length; n++) {
            for (var a = e[n];
            " " == a.charAt(0);) a = a.substring(1, a.length);
            if (0 == a.indexOf(i)) return a.substring(i.length, a.length)
        }
        return null
    },
    setCookie: function(t, i, e) {
        if (e <= 0) document.cookie = t + "=" + escape(i) + ";path=/";
        else {
            var n = new Date;
            n.setTime(n.getTime() + 24 * e * 60 * 60 * 1e3),
            document.cookie = t + "=" + escape(i) + ";expires=" + n.toGMTString() + ";path=/"
        }
    },
    deleteCookie: function(t) {
        var i = this.getCookie(t);
        null != i && this.setCookie(t, "", -1)
    },
    corssDomain: function(t, i) {
        var e = document.createElement("iframe"),
        n = !0,
        a = function() {
            n ? (e.contentWindow.location = "dist/cross-proxy.html", n = !1) : (i(e.contentWindow.name), e.contentWindow.document.write(""), e.contentWindow.close(), document.body.removeChild(e), e.src = "", e = null)
        };
        e.height = 0,
        e.src = t,
        e.attachEvent ? e.attachEvent("onload", a) : e.onload = a,
        document.body.appendChild(e)
    },
    getMemberLevel: function(t) {
        var i = "";
        switch (t) {
        case 1:
            i = "We普卡";
            break;
        case 2:
            i = "We银卡";
            break;
        case 5:
            i = "We金卡";
            break;
        case 6:
            i = "We白金卡";
            break;
        case 8:
            i = "We黑卡"
        }
        return i
    }
};
var we = we || {};
we.plugins = we.plugins || {},
we.plugins.keywordSelect = function(t) {
    var i = "",
    e = "",
    n = "",
    a = !1,
    l = function() {},
    
    y = function() {
        $("#key_input").click(function() {
            l()
        }),
        $("#key_input").bind("input propertychange",
        function() {
            l(),
            t && t()
        }),
        $(document).click(function(t) {
            var i = t || window.event,
            e = i.target || i.srcElement;
            return "key_input" == e.id || "keyword-box" == e.id || "keyword-box" == $(e).parents(".keyword-box").attr("id") || void $("#keyword-box").hide()
        })
    };
    return {
        init: y
    }
};
var we = we || {};
we.plugins = we.plugins || {},
we.plugins.selectCity = function() {
    var t = [{
        index: 0,
        name: "hot",
        title: "热门城市"
    },
    {
        index: 1,
        name: "ABCDE",
        title: "ABCDE"
    },
    {
        index: 2,
        name: "FGHIJ",
        title: "FGHIJ"
    },
    {
        index: 3,
        name: "KLMNO",
        title: "KLMNO"
    },
    {
        index: 4,
        name: "PQRST",
        title: "PQRST"
    },
    {
        index: 5,
        name: "UVWXYZ",
        title: "UVWXYZ"
    }],
    i = !1,
    e = {
        version: "co_ver_1523390718802",
        hotCityVersion: "0",
        otaCitys: [{
            cityCode: "AR01374",
            cityName: "漯河",
            pinyin: "LuoHe",
            firstLetter: "L",
            lng: "114.016539",
            lat: "33.581412"
        },
        {
            cityCode: "AR04200",
            cityName: "潍坊",
            pinyin: "WeiFang",
            firstLetter: "W",
            lng: "119.161755",
            lat: "36.706774"
        },
        {
            cityCode: "AR05649",
            cityName: "青岛",
            pinyin: "QingDao",
            firstLetter: "Q",
            lng: "120.382639",
            lat: "36.067082"
        },
        {
            cityCode: "AR05921",
            cityName: "莆田",
            pinyin: "PuTian",
            firstLetter: "P",
            lng: "119.007777",
            lat: "25.454084"
        },
        {
            cityCode: "AR06604",
            cityName: "松原",
            pinyin: "SongYuan",
            firstLetter: "S",
            lng: "124.825117",
            lat: "45.141789"
        },
        {
            cityCode: "AR04945",
            cityName: "拉萨",
            pinyin: "LaSa",
            firstLetter: "L",
            lng: "91.140856",
            lat: "29.645554"
        },
        {
            cityCode: "AR03272",
            cityName: "井冈山市",
            pinyin: "JingGangShanShi",
            firstLetter: "J",
            lng: "114.289228",
            lat: "26.748081"
        },
        {
            cityCode: "AR06904",
            cityName: "德州",
            pinyin: "DeZhou",
            firstLetter: "D",
            lng: "116.357464",
            lat: "37.434092"
        },
        {
            cityCode: "AR03175",
            cityName: "钦州",
            pinyin: "QinZhou",
            firstLetter: "Q",
            lng: "108.654146",
            lat: "21.979933"
        },
        {
            cityCode: "AR05598",
            cityName: "万宁",
            pinyin: "WanNing",
            firstLetter: "W",
            lng: "110.391073",
            lat: "18.795143"
        },
        {
            cityCode: "AR05135",
            cityName: "哈密",
            pinyin: "HaMi",
            firstLetter: "H",
            lng: "93.514916",
            lat: "42.818501"
        },
        {
            cityCode: "AR00004",
            cityName: "茂名",
            pinyin: "MaoMing",
            firstLetter: "M",
            lng: "110.925456",
            lat: "21.662999"
        },
        {
            cityCode: "AR00823",
            cityName: "岳阳",
            pinyin: "YueYang",
            firstLetter: "Y",
            lng: "113.128958",
            lat: "29.357104"
        },
        {
            cityCode: "AR01524",
            cityName: "蚌埠",
            pinyin: "BangBu",
            firstLetter: "B",
            lng: "117.389719",
            lat: "32.916287"
        },
        {
            cityCode: "AR00558",
            cityName: "阳江",
            pinyin: "YangJiang",
            firstLetter: "Y",
            lng: "111.982232",
            lat: "21.857958"
        },
        {
            cityCode: "AR03727",
            cityName: "温州",
            pinyin: "WenZhou",
            firstLetter: "W",
            lng: "120.699366",
            lat: "27.994267"
        },
        {
            cityCode: "AR00636",
            cityName: "西双版纳",
            pinyin: "XiShuangBanNa",
            firstLetter: "X",
            lng: "100.797777",
            lat: "22.007351"
        },
        {
            cityCode: "AR00265",
            cityName: "厦门",
            pinyin: "XiaMen",
            firstLetter: "X",
            lng: "118.089425",
            lat: "24.479833"
        },
        {
            cityCode: "AR03150",
            cityName: "安吉县",
            pinyin: "AnJiXian",
            firstLetter: "A",
            lng: "119.680353",
            lat: "30.638675"
        },
        {
            cityCode: "AR00104",
            cityName: "唐山",
            pinyin: "TangShan",
            firstLetter: "T",
            lng: "118.180193",
            lat: "39.630867"
        },
        {
            cityCode: "AR04599",
            cityName: "五家渠",
            pinyin: "WuJiaQu",
            firstLetter: "W",
            lng: "87.543240",
            lat: "44.166756"
        },
        {
            cityCode: "AR04379",
            cityName: "抚顺",
            pinyin: "FuShun",
            firstLetter: "F",
            lng: "123.957208",
            lat: "41.880872"
        },
        {
            cityCode: "AR05793",
            cityName: "银川",
            pinyin: "YinChuan",
            firstLetter: "Y",
            lng: "106.230909",
            lat: "38.487193"
        },
        {
            cityCode: "AR00532",
            cityName: "连云港",
            pinyin: "LianYunGang",
            firstLetter: "L",
            lng: "119.221611",
            lat: "34.596653"
        },
        {
            cityCode: "AR03744",
            cityName: "梧州",
            pinyin: "WuZhou",
            firstLetter: "W",
            lng: "111.279115",
            lat: "23.476962"
        },
        {
            cityCode: "AR03707",
            cityName: "双流县",
            pinyin: "ShuangLiuXian",
            firstLetter: "S",
            lng: "103.922707",
            lat: "30.573244"
        },
        {
            cityCode: "AR02030",
            cityName: "儋州",
            pinyin: "DanZhou",
            firstLetter: "D",
            lng: "109.580811",
            lat: "19.521133"
        },
        {
            cityCode: "AR00008",
            cityName: "滨州",
            pinyin: "BinZhou",
            firstLetter: "B",
            lng: "117.970703",
            lat: "37.381990"
        },
        {
            cityCode: "AR05443",
            cityName: "荆门",
            pinyin: "JingMen",
            firstLetter: "J",
            lng: "112.199265",
            lat: "31.035423"
        },
        {
            cityCode: "AR00572",
            cityName: "巴音郭楞蒙古自治州",
            pinyin: "BaYinGuoLengMengGuZiZhiZhou",
            firstLetter: "B",
            lng: "86.145298",
            lat: "41.764115"
        },
        {
            cityCode: "AR04257",
            cityName: "天津",
            pinyin: "TianJin",
            firstLetter: "T",
            lng: "117.200983",
            lat: "39.084158"
        },
        {
            cityCode: "AR01004",
            cityName: "黔南",
            pinyin: "QianNan",
            firstLetter: "Q",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR06536",
            cityName: "凉山彝族自治州",
            pinyin: "LiangShanYiZuZiZhiZhou",
            firstLetter: "L",
            lng: "102.267335",
            lat: "27.881610"
        },
        {
            cityCode: "AR04727",
            cityName: "大理",
            pinyin: "DaLi",
            firstLetter: "D",
            lng: "100.267638",
            lat: "25.606486"
        },
        {
            cityCode: "AR00759",
            cityName: "广元",
            pinyin: "GuangYuan",
            firstLetter: "G",
            lng: "105.843357",
            lat: "32.435435"
        },
        {
            cityCode: "AR00423",
            cityName: "克拉玛依",
            pinyin: "KeLaMaYi",
            firstLetter: "K",
            lng: "84.889207",
            lat: "45.579888"
        },
        {
            cityCode: "AR03200",
            cityName: "抚州",
            pinyin: "FuZhou",
            firstLetter: "F",
            lng: "116.358181",
            lat: "27.949217"
        },
        {
            cityCode: "AR06928",
            cityName: "承德",
            pinyin: "ChengDe",
            firstLetter: "C",
            lng: "117.962410",
            lat: "40.954071"
        },
        {
            cityCode: "AR06007",
            cityName: "揭阳",
            pinyin: "JieYang",
            firstLetter: "J",
            lng: "116.372831",
            lat: "23.549993"
        },
        {
            cityCode: "AR00522",
            cityName: "敦煌市",
            pinyin: "DunHuangShi",
            firstLetter: "D",
            lng: "94.661967",
            lat: "40.142128"
        },
        {
            cityCode: "AR05769",
            cityName: "吐鲁番",
            pinyin: "TuLuFan",
            firstLetter: "T",
            lng: "89.189651",
            lat: "42.951382"
        },
        {
            cityCode: "AR03085",
            cityName: "天水",
            pinyin: "TianShui",
            firstLetter: "T",
            lng: "105.724947",
            lat: "34.580863"
        },
        {
            cityCode: "AR06887",
            cityName: "邯郸",
            pinyin: "HanDan",
            firstLetter: "H",
            lng: "114.538961",
            lat: "36.625657"
        },
        {
            cityCode: "AR02801",
            cityName: "阿坝藏族羌族自治州",
            pinyin: "ABaZangZuQiangZuZiZhiZhou",
            firstLetter: "A",
            lng: "102.224653",
            lat: "31.899413"
        },
        {
            cityCode: "AR03526",
            cityName: "苏州",
            pinyin: "SuZhou",
            firstLetter: "S",
            lng: "120.585315",
            lat: "31.298886"
        },
        {
            cityCode: "AR00445",
            cityName: "许昌",
            pinyin: "XuChang",
            firstLetter: "X",
            lng: "113.852640",
            lat: "34.035506"
        },
        {
            cityCode: "AR03538",
            cityName: "信阳",
            pinyin: "XinYang",
            firstLetter: "X",
            lng: "114.091023",
            lat: "32.146983"
        },
        {
            cityCode: "AR04638",
            cityName: "营口",
            pinyin: "YingKou",
            firstLetter: "Y",
            lng: "122.235417",
            lat: "40.667012"
        },
        {
            cityCode: "AR03675",
            cityName: "安顺",
            pinyin: "AnShun",
            firstLetter: "A",
            lng: "105.947593",
            lat: "26.253072"
        },
        {
            cityCode: "AR00907",
            cityName: "南昌",
            pinyin: "NanChang",
            firstLetter: "N",
            lng: "115.858197",
            lat: "28.682892"
        },
        {
            cityCode: "AR317078",
            cityName: "博尔塔拉蒙古自治州",
            pinyin: "BoErTaLaMengGuZiZhiZhou",
            firstLetter: "B",
            lng: "82.066159",
            lat: "44.905588"
        },
        {
            cityCode: "AR03432",
            cityName: "池州",
            pinyin: "ChiZhou",
            firstLetter: "C",
            lng: "117.491568",
            lat: "30.664800"
        },
        {
            cityCode: "AR04199",
            cityName: "林芝",
            pinyin: "LinZhi",
            firstLetter: "L",
            lng: "94.361557",
            lat: "29.648943"
        },
        {
            cityCode: "AR02960",
            cityName: "武汉",
            pinyin: "WuHan",
            firstLetter: "W",
            lng: "114.305392",
            lat: "30.593098"
        },
        {
            cityCode: "AR06653",
            cityName: "洛阳",
            pinyin: "LuoYang",
            firstLetter: "L",
            lng: "112.454040",
            lat: "34.619682"
        },
        {
            cityCode: "AR00457",
            cityName: "晋城",
            pinyin: "JinCheng",
            firstLetter: "J",
            lng: "112.851831",
            lat: "35.490701"
        },
        {
            cityCode: "AR03118",
            cityName: "运城",
            pinyin: "YunCheng",
            firstLetter: "Y",
            lng: "111.007528",
            lat: "35.026412"
        },
        {
            cityCode: "AR04664",
            cityName: "伊春",
            pinyin: "YiChun",
            firstLetter: "Y",
            lng: "128.841147",
            lat: "47.727536"
        },
        {
            cityCode: "AR06876",
            cityName: "娄底",
            pinyin: "LouDi",
            firstLetter: "L",
            lng: "111.993497",
            lat: "27.700062"
        },
        {
            cityCode: "AR01980",
            cityName: "江阴市",
            pinyin: "JiangYinShi",
            firstLetter: "J",
            lng: "120.284939",
            lat: "31.920658"
        },
        {
            cityCode: "AR03641",
            cityName: "扬州",
            pinyin: "YangZhou",
            firstLetter: "Y",
            lng: "119.412966",
            lat: "32.394210"
        },
        {
            cityCode: "AR04959",
            cityName: "黄冈",
            pinyin: "HuangGang",
            firstLetter: "H",
            lng: "114.872316",
            lat: "30.453905"
        },
        {
            cityCode: "AR05880",
            cityName: "邹城市",
            pinyin: "ZouChengShi",
            firstLetter: "Z",
            lng: "117.003743",
            lat: "35.405185"
        },
        {
            cityCode: "AR04524",
            cityName: "佛山",
            pinyin: "FoShan",
            firstLetter: "F",
            lng: "113.121416",
            lat: "23.021548"
        },
        {
            cityCode: "AR03205",
            cityName: "毕节",
            pinyin: "BiJie",
            firstLetter: "B",
            lng: "105.283992",
            lat: "27.302589"
        },
        {
            cityCode: "AR03910",
            cityName: "鄱阳县",
            pinyin: "PoYangXian",
            firstLetter: "P",
            lng: "116.699746",
            lat: "29.011699"
        },
        {
            cityCode: "AR02884",
            cityName: "安阳",
            pinyin: "AnYang",
            firstLetter: "A",
            lng: "114.392392",
            lat: "36.097577"
        },
        {
            cityCode: "AR05854",
            cityName: "太仓市",
            pinyin: "TaiCangShi",
            firstLetter: "T",
            lng: "121.130550",
            lat: "31.457735"
        },
        {
            cityCode: "AR04583",
            cityName: "怀化",
            pinyin: "HuaiHua",
            firstLetter: "H",
            lng: "109.998488",
            lat: "27.554978"
        },
        {
            cityCode: "AR00397",
            cityName: "新乡",
            pinyin: "XinXiang",
            firstLetter: "X",
            lng: "113.926800",
            lat: "35.303004"
        },
        {
            cityCode: "AR04692",
            cityName: "长春",
            pinyin: "ChangChun",
            firstLetter: "C",
            lng: "125.323544",
            lat: "43.817071"
        },
        {
            cityCode: "AR04100",
            cityName: "淄博",
            pinyin: "ZiBo",
            firstLetter: "Z",
            lng: "118.054927",
            lat: "36.813487"
        },
        {
            cityCode: "AR06121",
            cityName: "沭阳县",
            pinyin: "ShuYangXian",
            firstLetter: "S",
            lng: "118.804784",
            lat: "34.111022"
        },
        {
            cityCode: "AR04055",
            cityName: "泰安",
            pinyin: "TaiAn",
            firstLetter: "T",
            lng: "117.087614",
            lat: "36.200252"
        },
        {
            cityCode: "AR01714",
            cityName: "无锡",
            pinyin: "WuXi",
            firstLetter: "W",
            lng: "120.311910",
            lat: "31.491169"
        },
        {
            cityCode: "AR05344",
            cityName: "安康",
            pinyin: "AnKang",
            firstLetter: "A",
            lng: "109.029022",
            lat: "32.684714"
        },
        {
            cityCode: "AR06389",
            cityName: "周口",
            pinyin: "ZhouKou",
            firstLetter: "Z",
            lng: "114.696951",
            lat: "33.626149"
        },
        {
            cityCode: "AR01036",
            cityName: "威海",
            pinyin: "WeiHai",
            firstLetter: "W",
            lng: "122.120419",
            lat: "37.513068"
        },
        {
            cityCode: "AR04062",
            cityName: "石河子",
            pinyin: "ShiHeZi",
            firstLetter: "S",
            lng: "86.041075",
            lat: "44.305886"
        },
        {
            cityCode: "AR03375",
            cityName: "呼和浩特",
            pinyin: "HuHeHaoTe",
            firstLetter: "H",
            lng: "111.749180",
            lat: "40.842585"
        },
        {
            cityCode: "AR03679",
            cityName: "湘潭",
            pinyin: "XiangTan",
            firstLetter: "X",
            lng: "112.944049",
            lat: "27.829738"
        },
        {
            cityCode: "AR05714",
            cityName: "歙县",
            pinyin: "SheXian",
            firstLetter: "S",
            lng: "118.415356",
            lat: "29.861308"
        },
        {
            cityCode: "AR00627",
            cityName: "商丘",
            pinyin: "ShangQiu",
            firstLetter: "S",
            lng: "115.656370",
            lat: "34.414172"
        },
        {
            cityCode: "AR05530",
            cityName: "徐州",
            pinyin: "XuZhou",
            firstLetter: "X",
            lng: "117.284124",
            lat: "34.205768"
        },
        {
            cityCode: "AR03725",
            cityName: "石家庄",
            pinyin: "ShiJiaZhuang",
            firstLetter: "S",
            lng: "114.514862",
            lat: "38.042309"
        },
        {
            cityCode: "AR02122",
            cityName: "河源",
            pinyin: "HeYuan",
            firstLetter: "H",
            lng: "114.700447",
            lat: "23.743538"
        },
        {
            cityCode: "AR00167",
            cityName: "淮南",
            pinyin: "HuaiNan",
            firstLetter: "H",
            lng: "116.999932",
            lat: "32.625478"
        },
        {
            cityCode: "AR02503",
            cityName: "西安",
            pinyin: "XiAn",
            firstLetter: "X",
            lng: "108.940174",
            lat: "34.341568"
        },
        {
            cityCode: "AR01986",
            cityName: "湘西土家族苗族自治州",
            pinyin: "XiangXiTuJiaZuMiaoZuZiZhiZhou",
            firstLetter: "X",
            lng: "109.739172",
            lat: "28.311947"
        },
        {
            cityCode: "AR02365",
            cityName: "鞍山",
            pinyin: "AnShan",
            firstLetter: "A",
            lng: "122.994329",
            lat: "41.108647"
        },
        {
            cityCode: "AR04464",
            cityName: "昌吉市",
            pinyin: "ChangJiShi",
            firstLetter: "C",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR01840",
            cityName: "哈尔滨",
            pinyin: "HaErBin",
            firstLetter: "H",
            lng: "126.534967",
            lat: "45.803775"
        },
        {
            cityCode: "AR00084",
            cityName: "大同",
            pinyin: "DaTong",
            firstLetter: "D",
            lng: "113.300129",
            lat: "40.076762"
        },
        {
            cityCode: "AR06895",
            cityName: "甘孜藏族自治州",
            pinyin: "GanZiZangZuZiZhiZhou",
            firstLetter: "G",
            lng: "101.962310",
            lat: "30.049520"
        },
        {
            cityCode: "AR02325",
            cityName: "平顶山",
            pinyin: "PingDingShan",
            firstLetter: "P",
            lng: "113.192661",
            lat: "33.766169"
        },
        {
            cityCode: "AR03170",
            cityName: "绵阳",
            pinyin: "MianYang",
            firstLetter: "M",
            lng: "104.679114",
            lat: "31.467450"
        },
        {
            cityCode: "AR04791",
            cityName: "贺州",
            pinyin: "HeZhou",
            firstLetter: "H",
            lng: "111.566694",
            lat: "24.403582"
        },
        {
            cityCode: "AR04699",
            cityName: "辽阳",
            pinyin: "LiaoYang",
            firstLetter: "L",
            lng: "123.236944",
            lat: "41.267244"
        },
        {
            cityCode: "AR04798",
            cityName: "大理市",
            pinyin: "DaLiShi",
            firstLetter: "D",
            lng: "100.267638",
            lat: "25.606486"
        },
        {
            cityCode: "AR00024",
            cityName: "平凉",
            pinyin: "PingLiang",
            firstLetter: "P",
            lng: "106.665240",
            lat: "35.543051"
        },
        {
            cityCode: "AR02813",
            cityName: "台州",
            pinyin: "TaiZhou",
            firstLetter: "T",
            lng: "121.420757",
            lat: "28.656386"
        },
        {
            cityCode: "AR02246",
            cityName: "黔西南",
            pinyin: "QianXiNan",
            firstLetter: "Q",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR04177",
            cityName: "成都",
            pinyin: "ChengDou",
            firstLetter: "C",
            lng: "104.066541",
            lat: "30.572269"
        },
        {
            cityCode: "AR06221",
            cityName: "晋江市",
            pinyin: "JinJiangShi",
            firstLetter: "J",
            lng: "118.552365",
            lat: "24.781681"
        },
        {
            cityCode: "AR00868",
            cityName: "沧州",
            pinyin: "CangZhou",
            firstLetter: "C",
            lng: "116.838834",
            lat: "38.304477"
        },
        {
            cityCode: "AR05076",
            cityName: "龙岩",
            pinyin: "LongYan",
            firstLetter: "L",
            lng: "117.017536",
            lat: "25.075123"
        },
        {
            cityCode: "AR06443",
            cityName: "惠州",
            pinyin: "HuiZhou",
            firstLetter: "H",
            lng: "114.416196",
            lat: "23.111847"
        },
        {
            cityCode: "AR05853",
            cityName: "东营",
            pinyin: "DongYing",
            firstLetter: "D",
            lng: "118.674767",
            lat: "37.434751"
        },
        {
            cityCode: "AR00568",
            cityName: "南平",
            pinyin: "NanPing",
            firstLetter: "N",
            lng: "118.177708",
            lat: "26.641768"
        },
        {
            cityCode: "AR00357",
            cityName: "重庆",
            pinyin: "ChongQing",
            firstLetter: "C",
            lng: "106.551556",
            lat: "29.563009"
        },
        {
            cityCode: "AR02403",
            cityName: "德阳",
            pinyin: "DeYang",
            firstLetter: "D",
            lng: "104.397894",
            lat: "31.126855"
        },
        {
            cityCode: "AR04986",
            cityName: "迁安市",
            pinyin: "QianAnShi",
            firstLetter: "Q",
            lng: "118.701144",
            lat: "39.999175"
        },
        {
            cityCode: "AR03008",
            cityName: "郑州",
            pinyin: "ZhengZhou",
            firstLetter: "Z",
            lng: "113.625368",
            lat: "34.746599"
        },
        {
            cityCode: "AR02296",
            cityName: "九江",
            pinyin: "JiuJiang",
            firstLetter: "J",
            lng: "116.001930",
            lat: "29.705077"
        },
        {
            cityCode: "AR01845",
            cityName: "济宁",
            pinyin: "JiNing",
            firstLetter: "J",
            lng: "116.587098",
            lat: "35.414921"
        },
        {
            cityCode: "AR03721",
            cityName: "梅州",
            pinyin: "MeiZhou",
            firstLetter: "M",
            lng: "116.122238",
            lat: "24.288615"
        },
        {
            cityCode: "AR03627",
            cityName: "芜湖",
            pinyin: "WuHu",
            firstLetter: "W",
            lng: "118.432941",
            lat: "31.352859"
        },
        {
            cityCode: "AR04032",
            cityName: "珠海",
            pinyin: "ZhuHai",
            firstLetter: "Z",
            lng: "113.576726",
            lat: "22.270715"
        },
        {
            cityCode: "AR02039",
            cityName: "驻马店",
            pinyin: "ZhuMaDian",
            firstLetter: "Z",
            lng: "114.022298",
            lat: "33.011529"
        },
        {
            cityCode: "AR03275",
            cityName: "双鸭山",
            pinyin: "ShuangYaShan",
            firstLetter: "S",
            lng: "131.159133",
            lat: "46.646508"
        },
        {
            cityCode: "AR03310",
            cityName: "中卫",
            pinyin: "ZhongWei",
            firstLetter: "Z",
            lng: "105.196902",
            lat: "37.499972"
        },
        {
            cityCode: "AR05699",
            cityName: "淮北",
            pinyin: "HuaiBei",
            firstLetter: "H",
            lng: "116.798265",
            lat: "33.955844"
        },
        {
            cityCode: "AR05701",
            cityName: "巴彦淖尔",
            pinyin: "BaYanNaoEr",
            firstLetter: "B",
            lng: "107.387657",
            lat: "40.743213"
        },
        {
            cityCode: "AR05178",
            cityName: "榆林",
            pinyin: "YuLin",
            firstLetter: "Y",
            lng: "109.734589",
            lat: "38.285390"
        },
        {
            cityCode: "AR03932",
            cityName: "鄂州",
            pinyin: "EZhou",
            firstLetter: "E",
            lng: "114.894843",
            lat: "30.391940"
        },
        {
            cityCode: "AR00509",
            cityName: "红河",
            pinyin: "HongHe",
            firstLetter: "H",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR01579",
            cityName: "眉山",
            pinyin: "MeiShan",
            firstLetter: "M",
            lng: "103.848538",
            lat: "30.075439"
        },
        {
            cityCode: "AR05733",
            cityName: "遵义",
            pinyin: "ZunYi",
            firstLetter: "Z",
            lng: "106.927389",
            lat: "27.725654"
        },
        {
            cityCode: "AR03866",
            cityName: "合肥",
            pinyin: "HeFei",
            firstLetter: "H",
            lng: "117.227239",
            lat: "31.820586"
        },
        {
            cityCode: "AR05449",
            cityName: "琼中黎族苗族自治县",
            pinyin: "QiongZhongLiZuMiaoZuZiZhiXian",
            firstLetter: "Q",
            lng: "109.838389",
            lat: "19.033369"
        },
        {
            cityCode: "AR03149",
            cityName: "昭通",
            pinyin: "ZhaoTong",
            firstLetter: "Z",
            lng: "103.717465",
            lat: "27.338257"
        },
        {
            cityCode: "AR00197",
            cityName: "丹东",
            pinyin: "DanDong",
            firstLetter: "D",
            lng: "124.354706",
            lat: "40.000499"
        },
        {
            cityCode: "AR02660",
            cityName: "南充",
            pinyin: "NanChong",
            firstLetter: "N",
            lng: "106.110698",
            lat: "30.837793"
        },
        {
            cityCode: "AR00485",
            cityName: "济南",
            pinyin: "JiNan",
            firstLetter: "J",
            lng: "117.119999",
            lat: "36.651216"
        },
        {
            cityCode: "AR01984",
            cityName: "贵阳",
            pinyin: "GuiYang",
            firstLetter: "G",
            lng: "106.630153",
            lat: "26.647661"
        },
        {
            cityCode: "AR06671",
            cityName: "忻州",
            pinyin: "XinZhou",
            firstLetter: "X",
            lng: "112.734174",
            lat: "38.416663"
        },
        {
            cityCode: "AR03670",
            cityName: "张家界",
            pinyin: "ZhangJiaJie",
            firstLetter: "Z",
            lng: "110.479191",
            lat: "29.117096"
        },
        {
            cityCode: "AR03333",
            cityName: "甘南藏族自治州",
            pinyin: "GanNanZangZuZiZhiZhou",
            firstLetter: "G",
            lng: "102.911027",
            lat: "34.983385"
        },
        {
            cityCode: "AR05496",
            cityName: "湛江",
            pinyin: "ZhanJiang",
            firstLetter: "Z",
            lng: "110.359377",
            lat: "21.270707"
        },
        {
            cityCode: "AR04002",
            cityName: "潮州",
            pinyin: "ChaoZhou",
            firstLetter: "C",
            lng: "116.622603",
            lat: "23.656950"
        },
        {
            cityCode: "AR01475",
            cityName: "宜昌",
            pinyin: "YiChang",
            firstLetter: "Y",
            lng: "111.286471",
            lat: "30.691967"
        },
        {
            cityCode: "AR04790",
            cityName: "仙桃",
            pinyin: "XianTao",
            firstLetter: "X",
            lng: "113.454593",
            lat: "30.362641"
        },
        {
            cityCode: "AR00002",
            cityName: "贵港",
            pinyin: "GuiGang",
            firstLetter: "G",
            lng: "109.598926",
            lat: "23.111530"
        },
        {
            cityCode: "AR01637",
            cityName: "云浮",
            pinyin: "YunFu",
            firstLetter: "Y",
            lng: "112.044491",
            lat: "22.915094"
        },
        {
            cityCode: "AR06256",
            cityName: "汕尾",
            pinyin: "ShanWei",
            firstLetter: "S",
            lng: "115.375278",
            lat: "22.786211"
        },
        {
            cityCode: "AR00006",
            cityName: "萍乡",
            pinyin: "PingXiang",
            firstLetter: "P",
            lng: "113.854556",
            lat: "27.622768"
        },
        {
            cityCode: "AR06261",
            cityName: "泸州",
            pinyin: "LuZhou",
            firstLetter: "L",
            lng: "105.442261",
            lat: "28.871811"
        },
        {
            cityCode: "AR04461",
            cityName: "酒泉",
            pinyin: "JiuQuan",
            firstLetter: "J",
            lng: "98.494483",
            lat: "39.732410"
        },
        {
            cityCode: "AR05623",
            cityName: "石嘴山",
            pinyin: "ShiZuiShan",
            firstLetter: "S",
            lng: "106.383303",
            lat: "38.983236"
        },
        {
            cityCode: "AR00335",
            cityName: "临沂",
            pinyin: "LinYi",
            firstLetter: "L",
            lng: "118.356448",
            lat: "35.104672"
        },
        {
            cityCode: "AR317140",
            cityName: "大理白族自治州",
            pinyin: "DaLiBaiZuZiZhiZhou",
            firstLetter: "D",
            lng: "100.267638",
            lat: "25.606486"
        },
        {
            cityCode: "AR02711",
            cityName: "牡丹江",
            pinyin: "MuDanJiang",
            firstLetter: "M",
            lng: "129.633163",
            lat: "44.551655"
        },
        {
            cityCode: "AR04017",
            cityName: "襄阳",
            pinyin: "XiangYang",
            firstLetter: "X",
            lng: "112.122414",
            lat: "32.008986"
        },
        {
            cityCode: "AR03336",
            cityName: "湖州",
            pinyin: "HuZhou",
            firstLetter: "H",
            lng: "120.086823",
            lat: "30.894348"
        },
        {
            cityCode: "AR04327",
            cityName: "固原",
            pinyin: "GuYuan",
            firstLetter: "G",
            lng: "106.242610",
            lat: "36.015855"
        },
        {
            cityCode: "AR00052",
            cityName: "中山",
            pinyin: "ZhongShan",
            firstLetter: "Z",
            lng: "113.392782",
            lat: "22.517645"
        },
        {
            cityCode: "AR05298",
            cityName: "南通",
            pinyin: "NanTong",
            firstLetter: "N",
            lng: "120.894291",
            lat: "31.980171"
        },
        {
            cityCode: "AR06644",
            cityName: "长治",
            pinyin: "ChangZhi",
            firstLetter: "C",
            lng: "113.116255",
            lat: "36.195386"
        },
        {
            cityCode: "AR05223",
            cityName: "深圳",
            pinyin: "ShenZhen",
            firstLetter: "S",
            lng: "114.057868",
            lat: "22.543099"
        },
        {
            cityCode: "AR00706",
            cityName: "衡阳",
            pinyin: "HengYang",
            firstLetter: "H",
            lng: "112.571997",
            lat: "26.893230"
        },
        {
            cityCode: "AR01393",
            cityName: "张掖",
            pinyin: "ZhangYe",
            firstLetter: "Z",
            lng: "100.449818",
            lat: "38.925875"
        },
        {
            cityCode: "AR03996",
            cityName: "常州",
            pinyin: "ChangZhou",
            firstLetter: "C",
            lng: "119.973987",
            lat: "31.810689"
        },
        {
            cityCode: "AR01886",
            cityName: "淮安",
            pinyin: "HuaiAn",
            firstLetter: "H",
            lng: "119.015285",
            lat: "33.610353"
        },
        {
            cityCode: "AR05082",
            cityName: "宝鸡",
            pinyin: "BaoJi",
            firstLetter: "B",
            lng: "107.237974",
            lat: "34.361979"
        },
        {
            cityCode: "AR04567",
            cityName: "上海",
            pinyin: "ShangHai",
            firstLetter: "S",
            lng: "121.473701",
            lat: "31.230416"
        },
        {
            cityCode: "AR06200",
            cityName: "邢台",
            pinyin: "XingTai",
            firstLetter: "X",
            lng: "114.504844",
            lat: "37.070589"
        },
        {
            cityCode: "AR05376",
            cityName: "黑河",
            pinyin: "HeiHe",
            firstLetter: "H",
            lng: "127.528560",
            lat: "50.245329"
        },
        {
            cityCode: "AR00431",
            cityName: "咸宁",
            pinyin: "XianNing",
            firstLetter: "X",
            lng: "114.322492",
            lat: "29.841443"
        },
        {
            cityCode: "AR04465",
            cityName: "张家港市",
            pinyin: "ZhangJiaGangShi",
            firstLetter: "Z",
            lng: "120.553200",
            lat: "31.870405"
        },
        {
            cityCode: "AR06606",
            cityName: "定西",
            pinyin: "DingXi",
            firstLetter: "D",
            lng: "104.626282",
            lat: "35.580662"
        },
        {
            cityCode: "AR06380",
            cityName: "延边朝鲜族自治州",
            pinyin: "YanBianChaoXianZuZiZhiZhou",
            firstLetter: "Y",
            lng: "129.508946",
            lat: "42.891253"
        },
        {
            cityCode: "AR01967",
            cityName: "赤峰",
            pinyin: "ChiFeng",
            firstLetter: "C",
            lng: "118.886856",
            lat: "42.257817"
        },
        {
            cityCode: "AR05574",
            cityName: "泉州",
            pinyin: "QuanZhou",
            firstLetter: "Q",
            lng: "118.675675",
            lat: "24.874132"
        },
        {
            cityCode: "AR06054",
            cityName: "株洲",
            pinyin: "ZhuZhou",
            firstLetter: "Z",
            lng: "113.134002",
            lat: "27.827550"
        },
        {
            cityCode: "AR02278",
            cityName: "孝感",
            pinyin: "XiaoGan",
            firstLetter: "X",
            lng: "113.916902",
            lat: "30.924568"
        },
        {
            cityCode: "AR04667",
            cityName: "韶关",
            pinyin: "ShaoGuan",
            firstLetter: "S",
            lng: "113.597522",
            lat: "24.810403"
        },
        {
            cityCode: "AR05688",
            cityName: "佳木斯",
            pinyin: "JiaMuSi",
            firstLetter: "J",
            lng: "130.318917",
            lat: "46.799922"
        },
        {
            cityCode: "AR03379",
            cityName: "晋中",
            pinyin: "JinZhong",
            firstLetter: "J",
            lng: "112.752694",
            lat: "37.687024"
        },
        {
            cityCode: "AR00116",
            cityName: "昌吉",
            pinyin: "ChangJi",
            firstLetter: "C",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR01057",
            cityName: "南京",
            pinyin: "NanJing",
            firstLetter: "N",
            lng: "118.796877",
            lat: "32.060255"
        },
        {
            cityCode: "AR03825",
            cityName: "大连",
            pinyin: "DaLian",
            firstLetter: "D",
            lng: "121.614682",
            lat: "38.914003"
        },
        {
            cityCode: "AR03868",
            cityName: "宿迁",
            pinyin: "SuQian",
            firstLetter: "S",
            lng: "118.275198",
            lat: "33.963232"
        },
        {
            cityCode: "AR05317",
            cityName: "益阳",
            pinyin: "YiYang",
            firstLetter: "Y",
            lng: "112.355180",
            lat: "28.553860"
        },
        {
            cityCode: "AR01079",
            cityName: "陵水",
            pinyin: "LingShui",
            firstLetter: "L",
            lng: "110.037503",
            lat: "18.506048"
        },
        {
            cityCode: "AR06186",
            cityName: "通辽",
            pinyin: "TongLiao",
            firstLetter: "T",
            lng: "122.243444",
            lat: "43.652890"
        },
        {
            cityCode: "AR04238",
            cityName: "西宁",
            pinyin: "XiNing",
            firstLetter: "X",
            lng: "101.778228",
            lat: "36.617144"
        },
        {
            cityCode: "AR02863",
            cityName: "宣城",
            pinyin: "XuanCheng",
            firstLetter: "X",
            lng: "118.758816",
            lat: "30.940718"
        },
        {
            cityCode: "AR00561",
            cityName: "马鞍山",
            pinyin: "MaAnShan",
            firstLetter: "M",
            lng: "118.506759",
            lat: "31.670452"
        },
        {
            cityCode: "AR05191",
            cityName: "德宏傣族景颇族自治州",
            pinyin: "DeHongDaiZuJingPoZuZiZhiZhou",
            firstLetter: "D",
            lng: "98.584895",
            lat: "24.433353"
        },
        {
            cityCode: "AR03128",
            cityName: "汉中",
            pinyin: "HanZhong",
            firstLetter: "H",
            lng: "107.023323",
            lat: "33.067480"
        },
        {
            cityCode: "AR05068",
            cityName: "汕头",
            pinyin: "ShanTou",
            firstLetter: "S",
            lng: "116.681972",
            lat: "23.354091"
        },
        {
            cityCode: "AR02504",
            cityName: "大丰市",
            pinyin: "DaFengShi",
            firstLetter: "D",
            lng: "120.470322",
            lat: "33.199532"
        },
        {
            cityCode: "AR00435",
            cityName: "海西",
            pinyin: "HaiXi",
            firstLetter: "H",
            lng: "97.369751",
            lat: "37.377139"
        },
        {
            cityCode: "AR05367",
            cityName: "阜阳",
            pinyin: "FuYang",
            firstLetter: "F",
            lng: "115.814204",
            lat: "32.890124"
        },
        {
            cityCode: "AR05566",
            cityName: "常熟市",
            pinyin: "ChangShuShi",
            firstLetter: "C",
            lng: "120.752481",
            lat: "31.654376"
        },
        {
            cityCode: "AR02339",
            cityName: "宜春",
            pinyin: "YiChun",
            firstLetter: "Y",
            lng: "114.416778",
            lat: "27.815619"
        },
        {
            cityCode: "AR03821",
            cityName: "通化",
            pinyin: "TongHua",
            firstLetter: "T",
            lng: "125.939697",
            lat: "41.728401"
        },
        {
            cityCode: "AR03921",
            cityName: "六盘水",
            pinyin: "LiuPanShui",
            firstLetter: "L",
            lng: "104.830359",
            lat: "26.592666"
        },
        {
            cityCode: "AR04145",
            cityName: "南宁",
            pinyin: "NanNing",
            firstLetter: "N",
            lng: "108.366543",
            lat: "22.817002"
        },
        {
            cityCode: "AR06513",
            cityName: "北京",
            pinyin: "BeiJing",
            firstLetter: "B",
            lng: "116.407526",
            lat: "39.904030"
        },
        {
            cityCode: "AR04549",
            cityName: "阿克苏",
            pinyin: "AKeSu",
            firstLetter: "A",
            lng: "80.260605",
            lat: "41.168779"
        },
        {
            cityCode: "AR03983",
            cityName: "杭州",
            pinyin: "HangZhou",
            firstLetter: "H",
            lng: "120.155070",
            lat: "30.274084"
        },
        {
            cityCode: "AR06021",
            cityName: "秦皇岛",
            pinyin: "QinHuangDao",
            firstLetter: "Q",
            lng: "119.600492",
            lat: "39.935385"
        },
        {
            cityCode: "AR05563",
            cityName: "黄石",
            pinyin: "HuangShi",
            firstLetter: "H",
            lng: "115.038520",
            lat: "30.199652"
        },
        {
            cityCode: "AR00850",
            cityName: "曲靖",
            pinyin: "QuJing",
            firstLetter: "Q",
            lng: "103.796167",
            lat: "25.489999"
        },
        {
            cityCode: "AR05101",
            cityName: "荆州",
            pinyin: "JingZhou",
            firstLetter: "J",
            lng: "112.239741",
            lat: "30.335165"
        },
        {
            cityCode: "AR02065",
            cityName: "文山壮族苗族自治州",
            pinyin: "WenShanZhuangZuMiaoZuZiZhiZhou",
            firstLetter: "W",
            lng: "104.216248",
            lat: "23.400733"
        },
        {
            cityCode: "AR00599",
            cityName: "嘉峪关",
            pinyin: "JiaYuGuan",
            firstLetter: "J",
            lng: "98.225822",
            lat: "39.820063"
        },
        {
            cityCode: "AR01011",
            cityName: "乐山",
            pinyin: "LeShan",
            firstLetter: "L",
            lng: "103.765572",
            lat: "29.552107"
        },
        {
            cityCode: "AR06347",
            cityName: "新余",
            pinyin: "XinYu",
            firstLetter: "X",
            lng: "114.917346",
            lat: "27.817808"
        },
        {
            cityCode: "AR03639",
            cityName: "巴中",
            pinyin: "BaZhong",
            firstLetter: "B",
            lng: "106.747477",
            lat: "31.867903"
        },
        {
            cityCode: "AR02226",
            cityName: "廊坊",
            pinyin: "LangFang",
            firstLetter: "L",
            lng: "116.683752",
            lat: "39.538047"
        },
        {
            cityCode: "AR317088",
            cityName: "喀什地区",
            pinyin: "KaShenDiQu",
            firstLetter: "K",
            lng: "75.989755",
            lat: "39.470400"
        },
        {
            cityCode: "AR02235",
            cityName: "资阳",
            pinyin: "ZiYang",
            firstLetter: "Z",
            lng: "104.627636",
            lat: "30.128901"
        },
        {
            cityCode: "AR01958",
            cityName: "鹰潭",
            pinyin: "YingTan",
            firstLetter: "Y",
            lng: "117.069202",
            lat: "28.260189"
        },
        {
            cityCode: "AR04112",
            cityName: "黔东南",
            pinyin: "QianDongNan",
            firstLetter: "Q",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR06654",
            cityName: "鄂尔多斯",
            pinyin: "EErDuoSi",
            firstLetter: "E",
            lng: "109.781327",
            lat: "39.608266"
        },
        {
            cityCode: "AR02291",
            cityName: "吉林",
            pinyin: "JiLin",
            firstLetter: "J",
            lng: "125.325990",
            lat: "43.896536"
        },
        {
            cityCode: "AR02590",
            cityName: "伊宁市",
            pinyin: "YiNingShi",
            firstLetter: "Y",
            lng: "81.277950",
            lat: "43.908558"
        },
        {
            cityCode: "AR01309",
            cityName: "上饶",
            pinyin: "ShangRao",
            firstLetter: "S",
            lng: "117.943436",
            lat: "28.454863"
        },
        {
            cityCode: "AR02818",
            cityName: "澳门",
            pinyin: "AoMen",
            firstLetter: "A",
            lng: "113.549088",
            lat: "22.198950"
        },
        {
            cityCode: "AR02397",
            cityName: "防城港",
            pinyin: "FangChengGang",
            firstLetter: "F",
            lng: "108.353846",
            lat: "21.686860"
        },
        {
            cityCode: "AR01476",
            cityName: "玉林",
            pinyin: "YuLin",
            firstLetter: "Y",
            lng: "110.164756",
            lat: "22.636379"
        },
        {
            cityCode: "AR05465",
            cityName: "清远",
            pinyin: "QingYuan",
            firstLetter: "Q",
            lng: "113.056031",
            lat: "23.681763"
        },
        {
            cityCode: "AR06104",
            cityName: "本溪",
            pinyin: "BenXi",
            firstLetter: "B",
            lng: "123.766485",
            lat: "41.294175"
        },
        {
            cityCode: "AR03692",
            cityName: "常德",
            pinyin: "ChangDe",
            firstLetter: "C",
            lng: "111.698497",
            lat: "29.031673"
        },
        {
            cityCode: "AR03368",
            cityName: "景德镇",
            pinyin: "JingDeZhen",
            firstLetter: "J",
            lng: "117.178419",
            lat: "29.268835"
        },
        {
            cityCode: "AR06118",
            cityName: "象山县",
            pinyin: "XiangShanXian",
            firstLetter: "X",
            lng: "121.869339",
            lat: "29.476705"
        },
        {
            cityCode: "AR00252",
            cityName: "广州",
            pinyin: "GuangZhou",
            firstLetter: "G",
            lng: "113.264434",
            lat: "23.129162"
        },
        {
            cityCode: "AR03438",
            cityName: "盘锦",
            pinyin: "PanJin",
            firstLetter: "P",
            lng: "122.070714",
            lat: "41.119997"
        },
        {
            cityCode: "AR01749",
            cityName: "福鼎市",
            pinyin: "FuDingShi",
            firstLetter: "F",
            lng: "120.216978",
            lat: "27.324479"
        },
        {
            cityCode: "AR06270",
            cityName: "阳泉",
            pinyin: "YangQuan",
            firstLetter: "Y",
            lng: "113.580519",
            lat: "37.856971"
        },
        {
            cityCode: "AR05740",
            cityName: "乌兰察布",
            pinyin: "WuLanChaBu",
            firstLetter: "W",
            lng: "113.132585",
            lat: "40.994785"
        },
        {
            cityCode: "AR03970",
            cityName: "铜仁",
            pinyin: "TongRen",
            firstLetter: "T",
            lng: "109.189598",
            lat: "27.731514"
        },
        {
            cityCode: "AR05770",
            cityName: "赣州",
            pinyin: "GanZhou",
            firstLetter: "G",
            lng: "114.935029",
            lat: "25.831829"
        },
        {
            cityCode: "AR04240",
            cityName: "海口",
            pinyin: "HaiKou",
            firstLetter: "H",
            lng: "110.198293",
            lat: "20.044001"
        },
        {
            cityCode: "AR06888",
            cityName: "乌海",
            pinyin: "WuHai",
            firstLetter: "W",
            lng: "106.794249",
            lat: "39.655388"
        },
        {
            cityCode: "AR05745",
            cityName: "衡水",
            pinyin: "HengShui",
            firstLetter: "H",
            lng: "115.670177",
            lat: "37.738920"
        },
        {
            cityCode: "AR03325",
            cityName: "攀枝花",
            pinyin: "PanZhiHua",
            firstLetter: "P",
            lng: "101.718637",
            lat: "26.582347"
        },
        {
            cityCode: "AR01520",
            cityName: "永州",
            pinyin: "YongZhou",
            firstLetter: "Y",
            lng: "111.613445",
            lat: "26.420394"
        },
        {
            cityCode: "AR03081",
            cityName: "琼海",
            pinyin: "QiongHai",
            firstLetter: "Q",
            lng: "110.474648",
            lat: "19.258341"
        },
        {
            cityCode: "AR06607",
            cityName: "菏泽",
            pinyin: "HeZe",
            firstLetter: "H",
            lng: "115.480656",
            lat: "35.233750"
        },
        {
            cityCode: "AR04289",
            cityName: "福州",
            pinyin: "FuZhou",
            firstLetter: "F",
            lng: "119.296494",
            lat: "26.074507"
        },
        {
            cityCode: "AR04448",
            cityName: "北海",
            pinyin: "BeiHai",
            firstLetter: "B",
            lng: "109.119927",
            lat: "21.481254"
        },
        {
            cityCode: "AR03048",
            cityName: "铜陵",
            pinyin: "TongLing",
            firstLetter: "T",
            lng: "117.812079",
            lat: "30.945429"
        },
        {
            cityCode: "AR00440",
            cityName: "大庆",
            pinyin: "DaQing",
            firstLetter: "D",
            lng: "125.103784",
            lat: "46.589309"
        },
        {
            cityCode: "AR00781",
            cityName: "锦州",
            pinyin: "JinZhou",
            firstLetter: "J",
            lng: "121.127003",
            lat: "41.095119"
        },
        {
            cityCode: "AR05821",
            cityName: "烟台",
            pinyin: "YanTai",
            firstLetter: "Y",
            lng: "121.447935",
            lat: "37.463822"
        },
        {
            cityCode: "AR04935",
            cityName: "日照",
            pinyin: "RiZhao",
            firstLetter: "R",
            lng: "119.526888",
            lat: "35.416377"
        },
        {
            cityCode: "AR05020",
            cityName: "绍兴",
            pinyin: "ShaoXing",
            firstLetter: "S",
            lng: "120.580232",
            lat: "30.029752"
        },
        {
            cityCode: "AR01917",
            cityName: "桂林",
            pinyin: "GuiLin",
            firstLetter: "G",
            lng: "110.290194",
            lat: "25.273566"
        },
        {
            cityCode: "AR05478",
            cityName: "肇庆",
            pinyin: "ZhaoQing",
            firstLetter: "Z",
            lng: "112.465091",
            lat: "23.047191"
        },
        {
            cityCode: "AR00780",
            cityName: "焦作",
            pinyin: "JiaoZuo",
            firstLetter: "J",
            lng: "113.241823",
            lat: "35.215892"
        },
        {
            cityCode: "AR06364",
            cityName: "兰州",
            pinyin: "LanZhou",
            firstLetter: "L",
            lng: "103.834303",
            lat: "36.061089"
        },
        {
            cityCode: "AR02735",
            cityName: "延安",
            pinyin: "YanAn",
            firstLetter: "Y",
            lng: "109.489727",
            lat: "36.585455"
        },
        {
            cityCode: "AR03018",
            cityName: "锡林郭勒",
            pinyin: "XiLinGuoLe",
            firstLetter: "X",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR05704",
            cityName: "蓬莱市",
            pinyin: "PengLaiShi",
            firstLetter: "P",
            lng: "120.758848",
            lat: "37.810661"
        },
        {
            cityCode: "AR06767",
            cityName: "聊城",
            pinyin: "LiaoCheng",
            firstLetter: "L",
            lng: "115.985371",
            lat: "36.456703"
        },
        {
            cityCode: "AR05096",
            cityName: "武夷山市",
            pinyin: "WuYiShanShi",
            firstLetter: "W",
            lng: "118.035310",
            lat: "27.756648"
        },
        {
            cityCode: "AR06173",
            cityName: "日喀则",
            pinyin: "RiKaZe",
            firstLetter: "R",
            lng: "88.880583",
            lat: "29.266869"
        },
        {
            cityCode: "AR06128",
            cityName: "喀什",
            pinyin: "KaShen",
            firstLetter: "K",
            lng: "75.989755",
            lat: "39.470400"
        },
        {
            cityCode: "AR04211",
            cityName: "迪庆",
            pinyin: "DiQing",
            firstLetter: "D",
            lng: "99.702234",
            lat: "27.818882"
        },
        {
            cityCode: "AR06303",
            cityName: "东台市",
            pinyin: "DongTaiShi",
            firstLetter: "D",
            lng: "120.320331",
            lat: "32.868440"
        },
        {
            cityCode: "AR04477",
            cityName: "宁德",
            pinyin: "NingDe",
            firstLetter: "N",
            lng: "119.547932",
            lat: "26.665617"
        },
        {
            cityCode: "AR01616",
            cityName: "三亚",
            pinyin: "SanYa",
            firstLetter: "S",
            lng: "109.511909",
            lat: "18.252847"
        },
        {
            cityCode: "AR03433",
            cityName: "吉安",
            pinyin: "JiAn",
            firstLetter: "J",
            lng: "114.992509",
            lat: "27.113443"
        },
        {
            cityCode: "AR06199",
            cityName: "吕梁",
            pinyin: "Lu:Liang",
            firstLetter: "L",
            lng: "111.144319",
            lat: "37.518314"
        },
        {
            cityCode: "AR01242",
            cityName: "建湖县",
            pinyin: "JianHuXian",
            firstLetter: "J",
            lng: "119.798581",
            lat: "33.464204"
        },
        {
            cityCode: "AR01707",
            cityName: "邵阳",
            pinyin: "ShaoYang",
            firstLetter: "S",
            lng: "111.467791",
            lat: "27.238892"
        },
        {
            cityCode: "AR03859",
            cityName: "乌鲁木齐",
            pinyin: "WuLuMuQi",
            firstLetter: "W",
            lng: "87.616848",
            lat: "43.825592"
        },
        {
            cityCode: "AR02594",
            cityName: "郴州",
            pinyin: "ChenZhou",
            firstLetter: "C",
            lng: "113.014717",
            lat: "25.770509"
        },
        {
            cityCode: "AR01706",
            cityName: "十堰",
            pinyin: "ShiYan",
            firstLetter: "S",
            lng: "110.797990",
            lat: "32.629397"
        },
        {
            cityCode: "AR03049",
            cityName: "陇南",
            pinyin: "LongNan",
            firstLetter: "L",
            lng: "104.921841",
            lat: "33.400684"
        },
        {
            cityCode: "AR00684",
            cityName: "舟山",
            pinyin: "ZhouShan",
            firstLetter: "Z",
            lng: "122.207215",
            lat: "29.985295"
        },
        {
            cityCode: "AR01282",
            cityName: "六安",
            pinyin: "LiuAn",
            firstLetter: "L",
            lng: "116.521854",
            lat: "31.733699"
        },
        {
            cityCode: "AR00656",
            cityName: "遂宁",
            pinyin: "SuiNing",
            firstLetter: "S",
            lng: "105.592898",
            lat: "30.532847"
        },
        {
            cityCode: "AR05422",
            cityName: "沈阳",
            pinyin: "ShenYang",
            firstLetter: "S",
            lng: "123.431474",
            lat: "41.805698"
        },
        {
            cityCode: "AR02274",
            cityName: "雅安",
            pinyin: "YaAn",
            firstLetter: "Y",
            lng: "103.013261",
            lat: "29.980537"
        },
        {
            cityCode: "AR04541",
            cityName: "滁州",
            pinyin: "ChuZhou",
            firstLetter: "C",
            lng: "118.317106",
            lat: "32.301556"
        },
        {
            cityCode: "AR06712",
            cityName: "莱芜",
            pinyin: "LaiWu",
            firstLetter: "L",
            lng: "117.676723",
            lat: "36.213813"
        },
        {
            cityCode: "AR05473",
            cityName: "宿州",
            pinyin: "SuZhou",
            firstLetter: "S",
            lng: "116.964356",
            lat: "33.646373"
        },
        {
            cityCode: "AR06775",
            cityName: "镇江",
            pinyin: "ZhenJiang",
            firstLetter: "Z",
            lng: "119.425836",
            lat: "32.187849"
        },
        {
            cityCode: "AR02576",
            cityName: "江门",
            pinyin: "JiangMen",
            firstLetter: "J",
            lng: "113.081901",
            lat: "22.578738"
        },
        {
            cityCode: "AR01836",
            cityName: "阜新",
            pinyin: "FuXin",
            firstLetter: "F",
            lng: "121.670323",
            lat: "42.021619"
        },
        {
            cityCode: "AR04256",
            cityName: "渭南",
            pinyin: "WeiNan",
            firstLetter: "W",
            lng: "109.509786",
            lat: "34.499995"
        },
        {
            cityCode: "AR01151",
            cityName: "张家口",
            pinyin: "ZhangJiaKou",
            firstLetter: "Z",
            lng: "114.887543",
            lat: "40.824418"
        },
        {
            cityCode: "AR04530",
            cityName: "鹤岗",
            pinyin: "HeGang",
            firstLetter: "H",
            lng: "130.297964",
            lat: "47.349916"
        },
        {
            cityCode: "AR03964",
            cityName: "金昌",
            pinyin: "JinChang",
            firstLetter: "J",
            lng: "102.188043",
            lat: "38.520089"
        },
        {
            cityCode: "AR05258",
            cityName: "南阳",
            pinyin: "NanYang",
            firstLetter: "N",
            lng: "112.528321",
            lat: "32.990833"
        },
        {
            cityCode: "AR03026",
            cityName: "长沙",
            pinyin: "ChangSha",
            firstLetter: "C",
            lng: "112.938814",
            lat: "28.228209"
        },
        {
            cityCode: "AR04502",
            cityName: "包头",
            pinyin: "BaoTou",
            firstLetter: "B",
            lng: "109.840347",
            lat: "40.657449"
        },
        {
            cityCode: "AR06603",
            cityName: "临汾",
            pinyin: "LinFen",
            firstLetter: "L",
            lng: "111.518976",
            lat: "36.088005"
        },
        {
            cityCode: "AR03577",
            cityName: "白银",
            pinyin: "BaiYin",
            firstLetter: "B",
            lng: "104.138559",
            lat: "36.544756"
        },
        {
            cityCode: "AR02199",
            cityName: "宁波",
            pinyin: "NingBo",
            firstLetter: "N",
            lng: "121.550357",
            lat: "29.874556"
        },
        {
            cityCode: "AR06155",
            cityName: "武威",
            pinyin: "WuWei",
            firstLetter: "W",
            lng: "102.638011",
            lat: "37.928264"
        },
        {
            cityCode: "AR06271",
            cityName: "咸阳",
            pinyin: "XianYang",
            firstLetter: "X",
            lng: "108.708992",
            lat: "34.329605"
        },
        {
            cityCode: "AR00302",
            cityName: "柳州",
            pinyin: "LiuZhou",
            firstLetter: "L",
            lng: "109.415953",
            lat: "24.325502"
        },
        {
            cityCode: "AR05712",
            cityName: "保定",
            pinyin: "BaoDing",
            firstLetter: "B",
            lng: "115.464806",
            lat: "38.873891"
        },
        {
            cityCode: "AR01792",
            cityName: "亳州",
            pinyin: "BoZhou",
            firstLetter: "B",
            lng: "115.778676",
            lat: "33.844582"
        },
        {
            cityCode: "AR04194",
            cityName: "昆明",
            pinyin: "KunMing",
            firstLetter: "K",
            lng: "102.832891",
            lat: "24.880095"
        },
        {
            cityCode: "AR01312",
            cityName: "鹤壁",
            pinyin: "HeBi",
            firstLetter: "H",
            lng: "114.297272",
            lat: "35.747225"
        },
        {
            cityCode: "AR01367",
            cityName: "曲阜市",
            pinyin: "QuFuShi",
            firstLetter: "Q",
            lng: "116.986503",
            lat: "35.580996"
        },
        {
            cityCode: "AR03077",
            cityName: "海宁市",
            pinyin: "HaiNingShi",
            firstLetter: "H",
            lng: "120.680757",
            lat: "30.510659"
        },
        {
            cityCode: "AR00550",
            cityName: "伊犁哈萨克自治州",
            pinyin: "YiLiHaSaKeZiZhiZhou",
            firstLetter: "Y",
            lng: "81.324136",
            lat: "43.916823"
        },
        {
            cityCode: "AR03439",
            cityName: "自贡",
            pinyin: "ZiGong",
            firstLetter: "Z",
            lng: "104.778442",
            lat: "29.339030"
        },
        {
            cityCode: "AR03740",
            cityName: "莱阳市",
            pinyin: "LaiYangShi",
            firstLetter: "L",
            lng: "120.711673",
            lat: "36.978941"
        },
        {
            cityCode: "AR04397",
            cityName: "丽江",
            pinyin: "LiJiang",
            firstLetter: "L",
            lng: "100.227750",
            lat: "26.855047"
        },
        {
            cityCode: "AR04495",
            cityName: "葫芦岛",
            pinyin: "HuLuDao",
            firstLetter: "H",
            lng: "120.836932",
            lat: "40.711052"
        },
        {
            cityCode: "AR03389",
            cityName: "东莞",
            pinyin: "DongGuan",
            firstLetter: "D",
            lng: "113.751765",
            lat: "23.020536"
        },
        {
            cityCode: "AR02273",
            cityName: "宜宾",
            pinyin: "YiBin",
            firstLetter: "Y",
            lng: "104.643215",
            lat: "28.751768"
        },
        {
            cityCode: "AR04701",
            cityName: "黄山",
            pinyin: "HuangShan",
            firstLetter: "H",
            lng: "118.337481",
            lat: "29.714655"
        },
        {
            cityCode: "AR05592",
            cityName: "庆阳",
            pinyin: "QingYang",
            firstLetter: "Q",
            lng: "107.643631",
            lat: "35.709077"
        },
        {
            cityCode: "AR02480",
            cityName: "金华",
            pinyin: "JinHua",
            firstLetter: "J",
            lng: "119.647444",
            lat: "29.079059"
        },
        {
            cityCode: "AR01347",
            cityName: "泰州",
            pinyin: "TaiZhou",
            firstLetter: "T",
            lng: "119.923116",
            lat: "32.455778"
        },
        {
            cityCode: "AR05186",
            cityName: "嘉兴",
            pinyin: "JiaXing",
            firstLetter: "J",
            lng: "120.755486",
            lat: "30.746129"
        },
        {
            cityCode: "AR02895",
            cityName: "开封",
            pinyin: "KaiFeng",
            firstLetter: "K",
            lng: "114.307581",
            lat: "34.797239"
        },
        {
            cityCode: "AR01229",
            cityName: "漳州",
            pinyin: "ZhangZhou",
            firstLetter: "Z",
            lng: "117.647481",
            lat: "24.512948"
        },
        {
            cityCode: "AR03167",
            cityName: "枣庄",
            pinyin: "ZaoZhuang",
            firstLetter: "Z",
            lng: "117.323725",
            lat: "34.810487"
        },
        {
            cityCode: "AR06045",
            cityName: "太原",
            pinyin: "TaiYuan",
            firstLetter: "T",
            lng: "112.548879",
            lat: "37.870590"
        },
        {
            cityCode: "AR03703",
            cityName: "百色",
            pinyin: "BaiSe",
            firstLetter: "B",
            lng: "106.618201",
            lat: "23.902333"
        },
        {
            cityCode: "AR02271",
            cityName: "内江",
            pinyin: "NeiJiang",
            firstLetter: "N",
            lng: "105.058433",
            lat: "29.580228"
        },
        {
            cityCode: "AR01141",
            cityName: "安新县",
            pinyin: "AnXinXian",
            firstLetter: "A",
            lng: "115.935603",
            lat: "38.935369"
        },
        {
            cityCode: "AR06387",
            cityName: "朝阳",
            pinyin: "ChaoYang",
            firstLetter: "C",
            lng: "120.450372",
            lat: "41.573734"
        },
        {
            cityCode: "AR03759",
            cityName: "盐城",
            pinyin: "YanCheng",
            firstLetter: "Y",
            lng: "120.163561",
            lat: "33.347382"
        },
        {
            cityCode: "AR05800",
            cityName: "广安",
            pinyin: "GuangAn",
            firstLetter: "G",
            lng: "106.633212",
            lat: "30.455961"
        },
        {
            cityCode: "AR01372",
            cityName: "四平",
            pinyin: "SiPing",
            firstLetter: "S",
            lng: "124.350398",
            lat: "43.166419"
        },
        {
            cityCode: "AR00214",
            cityName: "玉溪",
            pinyin: "YuXi",
            firstLetter: "Y",
            lng: "102.546543",
            lat: "24.352036"
        },
        {
            cityCode: "AR05354",
            cityName: "安庆",
            pinyin: "AnQing",
            firstLetter: "A",
            lng: "117.063754",
            lat: "30.543494"
        },
        {
            cityCode: "AR00093",
            cityName: "南山区",
            pinyin: "NanShanQu",
            firstLetter: "N",
            lng: "113.930476",
            lat: "22.533013"
        },
        {
            cityCode: "AR317106",
            cityName: "兴安盟",
            pinyin: "XingAnMeng",
            firstLetter: "X",
            lng: "122.067042",
            lat: "46.077561"
        },
        {
            cityCode: "AR317077",
            cityName: "昌吉回族自治州",
            pinyin: "ChangJiHuiZuZiZhiZhou",
            firstLetter: "C",
            lng: "87.308224",
            lat: "44.011182"
        }],
        hotOtaCitys: null,
        overseasHotOtaCitys: null,
        overseasOtaCitys: [{
            cityCode: "AR318387",
            cityName: "伯利兹市",
            pinyin: "BoLiZiShi",
            firstLetter: "B",
            lng: "-88.1962133",
            lat: "17.5045661"
        },
        {
            cityCode: "AR05293",
            cityName: "清迈",
            pinyin: "QingMai",
            firstLetter: "Q",
            lng: "98.9817163",
            lat: "18.7060641"
        },
        {
            cityCode: "AR05451",
            cityName: "阿默斯福特",
            pinyin: "AMoSiFuTe",
            firstLetter: "A",
            lng: "5.387826599999999",
            lat: "52.1561113"
        },
        {
            cityCode: "AR03892",
            cityName: "尼斯",
            pinyin: "NiSi",
            firstLetter: "N",
            lng: "101.104355",
            lat: "28.786873"
        },
        {
            cityCode: "AR05600",
            cityName: "巴黎",
            pinyin: "BaLi",
            firstLetter: "B",
            lng: "2.3522219",
            lat: "48.856614"
        },
        {
            cityCode: "AR01133",
            cityName: "里昂",
            pinyin: "LiAng",
            firstLetter: "L",
            lng: "4.835659",
            lat: "45.764043"
        },
        {
            cityCode: "AR04764",
            cityName: "都拉斯",
            pinyin: "DouLaSi",
            firstLetter: "D",
            lng: "19.4564686",
            lat: "41.3245904"
        },
        {
            cityCode: "AR02671",
            cityName: "地拉那",
            pinyin: "DiLaNei",
            firstLetter: "D",
            lng: "19.8186982",
            lat: "41.3275459"
        },
        {
            cityCode: "AR06961",
            cityName: "波尔多",
            pinyin: "BoErDuo",
            firstLetter: "B",
            lng: "93.553452",
            lat: "42.845810"
        },
        {
            cityCode: "AR00198",
            cityName: "柏林",
            pinyin: "BoLin",
            firstLetter: "B",
            lng: "106.463654",
            lat: "29.522301"
        },
        {
            cityCode: "AR02894",
            cityName: "马赛",
            pinyin: "MaSai",
            firstLetter: "M",
            lng: "100.785820",
            lat: "33.954819"
        },
        {
            cityCode: "AR00805",
            cityName: "布雷达",
            pinyin: "BuLeiDa",
            firstLetter: "B",
            lng: "4.768323",
            lat: "51.5719149"
        },
        {
            cityCode: "AR00669",
            cityName: "阿尔及尔",
            pinyin: "AErJiEr",
            firstLetter: "A",
            lng: "3.0587561",
            lat: "36.753768"
        },
        {
            cityCode: "AR376489",
            cityName: "根特",
            pinyin: "GenTe",
            firstLetter: "G",
            lng: "3.7174243",
            lat: "51.0543422"
        },
        {
            cityCode: "AR01554",
            cityName: "基尔",
            pinyin: "JiEr",
            firstLetter: "J",
            lng: "10.1227651",
            lat: "54.3232927"
        },
        {
            cityCode: "AR3131432",
            cityName: "科尔内拉迪莱布雷格",
            pinyin: "KeErNeiLaDiLaiBuLeiGe",
            firstLetter: "K",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR05634",
            cityName: "穆尔西亚",
            pinyin: "MuErXiYa",
            firstLetter: "M",
            lng: "-1.1306544",
            lat: "37.9922399"
        },
        {
            cityCode: "AR06990",
            cityName: "普贝尔赫姆",
            pinyin: "PuBeiErHeMu",
            firstLetter: "P",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR07004",
            cityName: "埃波讷",
            pinyin: "AiBoNe",
            firstLetter: "A",
            lng: "1.812542",
            lat: "48.957802"
        },
        {
            cityCode: "AR02997",
            cityName: "安特卫普",
            pinyin: "AnTeWeiPu",
            firstLetter: "A",
            lng: "4.4024643",
            lat: "51.2194475"
        },
        {
            cityCode: "AR388695",
            cityName: "罗讷河畔沙斯",
            pinyin: "LuoNeHePanShaSi",
            firstLetter: "L",
            lng: "4.812652",
            lat: "45.578041"
        },
        {
            cityCode: "AR3130436",
            cityName: "阿尔卡拉德埃纳雷斯",
            pinyin: "AErKaLaDeAiNaLeiSi",
            firstLetter: "A",
            lng: "-3.3628674",
            lat: "40.4824722"
        },
        {
            cityCode: "AR07010",
            cityName: "圣日耳曼昂莱",
            pinyin: "ShengRiErManAngLai",
            firstLetter: "S",
            lng: "2.093761",
            lat: "48.898908"
        },
        {
            cityCode: "AR01383",
            cityName: "阿利坎特",
            pinyin: "ALiKanTe",
            firstLetter: "A",
            lng: "-0.4906855",
            lat: "38.3459963"
        },
        {
            cityCode: "AR3131779",
            cityName: "艾尔切",
            pinyin: "AiErQie",
            firstLetter: "A",
            lng: "-0.7125608",
            lat: "38.2699329"
        },
        {
            cityCode: "AR06991",
            cityName: "菲尔福尔德",
            pinyin: "FeiErFuErDe",
            firstLetter: "F",
            lng: "4.4257868",
            lat: "50.9272511"
        },
        {
            cityCode: "AR03596",
            cityName: "布鲁塞尔",
            pinyin: "BuLuSaiEr",
            firstLetter: "B",
            lng: "4.3517103",
            lat: "50.8503396"
        },
        {
            cityCode: "AR384087",
            cityName: "果尼斯",
            pinyin: "GuoNiSi",
            firstLetter: "G",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR07006",
            cityName: "弗朗斯地区鲁瓦西",
            pinyin: "FuLangSiDiQuLuWaXi",
            firstLetter: "F",
            lng: "2.516978",
            lat: "49.00363"
        },
        {
            cityCode: "AR387404",
            cityName: "勒克里姆林比塞特",
            pinyin: "LeKeLiMuLinBiSaiTe",
            firstLetter: "L",
            lng: "2.3630803",
            lat: "48.807172"
        },
        {
            cityCode: "AR07007",
            cityName: "蓬图瓦兹",
            pinyin: "PengTuWaZi",
            firstLetter: "P",
            lng: "2.100645",
            lat: "49.050966"
        },
        {
            cityCode: "AR06148",
            cityName: "马拉加",
            pinyin: "MaLaJia",
            firstLetter: "M",
            lng: "-4.4213988",
            lat: "36.7212737"
        },
        {
            cityCode: "AR07002",
            cityName: "萨努瓦",
            pinyin: "SaNuWa",
            firstLetter: "S",
            lng: "2.256869",
            lat: "48.970782"
        },
        {
            cityCode: "AR07017",
            cityName: "塞尔",
            pinyin: "SaiErJi",
            firstLetter: "S",
            lng: "9.4797461",
            lat: "51.3127114"
        },
        {
            cityCode: "AR387903",
            cityName: "莱于利",
            pinyin: "LaiYuLi",
            firstLetter: "L",
            lng: "2.16647",
            lat: "48.6792779"
        },
        {
            cityCode: "AR379334",
            cityName: "圣康丁昂伊夫利纳",
            pinyin: "ShengKangDingAngYiFuLiNa",
            firstLetter: "S",
            lng: "2.1415644",
            lat: "48.799627"
        },
        {
            cityCode: "AR384093",
            cityName: "潘坦",
            pinyin: "PanTan",
            firstLetter: "P",
            lng: "115.963081",
            lat: "30.098921"
        },
        {
            cityCode: "AR378954",
            cityName: "尚特莉",
            pinyin: "ShangTeLi",
            firstLetter: "S",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR384100",
            cityName: "维勒班特",
            pinyin: "WeiLeBanTe",
            firstLetter: "W",
            lng: "2.542867",
            lat: "48.960226"
        },
        {
            cityCode: "AR387747",
            cityName: "根尼维尔斯",
            pinyin: "GenNiWeiErSi",
            firstLetter: "G",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR387755",
            cityName: "阿尔克伊",
            pinyin: "AErKeYi",
            firstLetter: "A",
            lng: "2.334955",
            lat: "48.80486"
        },
        {
            cityCode: "AR07016",
            cityName: "莫城",
            pinyin: "MoCheng",
            firstLetter: "M",
            lng: "120.726387",
            lat: "31.592981"
        },
        {
            cityCode: "AR384679",
            cityName: "塔韦尼",
            pinyin: "TaWeiNi",
            firstLetter: "T",
            lng: "2.223507",
            lat: "49.027441"
        },
        {
            cityCode: "AR07014",
            cityName: "博比尼",
            pinyin: "BoBiNi",
            firstLetter: "B",
            lng: "2.439712",
            lat: "48.908612"
        },
        {
            cityCode: "AR07023",
            cityName: "马恩河畔诺让",
            pinyin: "MaEnHePanNuoRang",
            firstLetter: "M",
            lng: "2.481699",
            lat: "48.83763099999999"
        },
        {
            cityCode: "AR389187",
            cityName: "南戴尔",
            pinyin: "NanDaiEr",
            firstLetter: "N",
            lng: "117.757767",
            lat: "32.260437"
        },
        {
            cityCode: "AR07019",
            cityName: "阿让特伊",
            pinyin: "ARangTeYi",
            firstLetter: "A",
            lng: "2.2466847",
            lat: "48.9472096"
        },
        {
            cityCode: "AR386157",
            cityName: "布里孔特罗贝尔",
            pinyin: "BuLiKongTeLuoBeiEr",
            firstLetter: "B",
            lng: "110.203171",
            lat: "36.150398"
        },
        {
            cityCode: "AR07020",
            cityName: "维勒瑞夫",
            pinyin: "WeiLeRuiFu",
            firstLetter: "W",
            lng: "2.359279",
            lat: "48.792716"
        },
        {
            cityCode: "AR387097",
            cityName: "利夫里加尔冈",
            pinyin: "LiFuLiJiaErGang",
            firstLetter: "L",
            lng: "2.536118",
            lat: "48.91923"
        },
        {
            cityCode: "AR383894",
            cityName: "沙勒维尔－梅济耶尔",
            pinyin: "ShaLeWeiErMeiJiYeEr",
            firstLetter: "S",
            lng: "4.726096",
            lat: "49.76208500000001"
        },
        {
            cityCode: "AR07024",
            cityName: "托尔西",
            pinyin: "TuoErXi",
            firstLetter: "T",
            lng: "2.654472",
            lat: "48.850572"
        },
        {
            cityCode: "AR384073",
            cityName: "塞日",
            pinyin: "SaiRi",
            firstLetter: "S",
            lng: "96.965660",
            lat: "37.484196"
        },
        {
            cityCode: "AR384352",
            cityName: "布希圣乔治",
            pinyin: "BuXiShengQiaoZhi",
            firstLetter: "B",
            lng: "2.69802",
            lat: "48.842205"
        },
        {
            cityCode: "AR07034",
            cityName: "圣迪济耶",
            pinyin: "ShengDiJiYe",
            firstLetter: "S",
            lng: "4.947418",
            lat: "48.637692"
        },
        {
            cityCode: "AR377401",
            cityName: "蒙蒂维利耶",
            pinyin: "MengDiWeiLiYe",
            firstLetter: "M",
            lng: "0.19336",
            lat: "49.542538"
        },
        {
            cityCode: "AR07037",
            cityName: "贡夫勒维尔洛谢",
            pinyin: "GongFuLeWeiErLuoXie",
            firstLetter: "G",
            lng: "0.233079",
            lat: "49.502579"
        },
        {
            cityCode: "AR384103",
            cityName: "苏雷斯尼",
            pinyin: "SuLeiSiNi",
            firstLetter: "S",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR07027",
            cityName: "谢勒",
            pinyin: "XieLe",
            firstLetter: "X",
            lng: "2.46916",
            lat: "50.50765"
        },
        {
            cityCode: "AR387570",
            cityName: "贡比埃涅",
            pinyin: "GongBiAiNie",
            firstLetter: "G",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR384364",
            cityName: "维勒讷叙尔塞纳",
            pinyin: "WeiLeNeXuErSaiNa",
            firstLetter: "W",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR377394",
            cityName: "弗朗凯维尔圣皮埃尔",
            pinyin: "FuLangKaiWeiErShengPiAiEr",
            firstLetter: "F",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR07036",
            cityName: "苏瓦松",
            pinyin: "SuWaSong",
            firstLetter: "S",
            lng: "3.32342",
            lat: "49.376636"
        },
        {
            cityCode: "AR377451",
            cityName: "蒙圣艾尼昂",
            pinyin: "MengShengAiNiAng",
            firstLetter: "M",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR377479",
            cityName: "埃夫勒",
            pinyin: "AiFuLe",
            firstLetter: "A",
            lng: "1.151361",
            lat: "49.0270129"
        },
        {
            cityCode: "AR383888",
            cityName: "圣马丹叙尔勒普雷",
            pinyin: "ShengMaDanXuErLePuLei",
            firstLetter: "S",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR378330",
            cityName: "埃鲁维尔圣克莱尔",
            pinyin: "AiLuWeiErShengKeLaiEr",
            firstLetter: "A",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR380298",
            cityName: "杜勒克斯",
            pinyin: "DuLeKeSi",
            firstLetter: "D",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR380309",
            cityName: "维也松",
            pinyin: "WeiYeSong",
            firstLetter: "W",
            lng: "113.8379344",
            lat: "22.7563601"
        },
        {
            cityCode: "AR384269",
            cityName: "布洛瓦",
            pinyin: "BuLuoWa",
            firstLetter: "B",
            lng: "1.3359475",
            lat: "47.58609209999999"
        },
        {
            cityCode: "AR378568",
            cityName: "瑟里塞",
            pinyin: "SeLiSai",
            firstLetter: "S",
            lng: "0.127341",
            lat: "48.4411"
        },
        {
            cityCode: "AR380353",
            cityName: "阿米伊",
            pinyin: "AMiYi",
            firstLetter: "A",
            lng: "2.768125",
            lat: "47.97534599999999"
        },
        {
            cityCode: "AR382918",
            cityName: "圣阿波利奈尔",
            pinyin: "ShengABoLiNaiEr",
            firstLetter: "S",
            lng: "4.599054",
            lat: "44.92539"
        },
        {
            cityCode: "AR379915",
            cityName: "阿斯克新城",
            pinyin: "ASiKeXinCheng",
            firstLetter: "A",
            lng: "3.1442651",
            lat: "50.6232523"
        },
        {
            cityCode: "AR387820",
            cityName: "瓦斯凯勒",
            pinyin: "WaSiKaiLe",
            firstLetter: "W",
            lng: "3.130782",
            lat: "50.669276"
        },
        {
            cityCode: "AR380155",
            cityName: "加来",
            pinyin: "JiaLai",
            firstLetter: "J",
            lng: "109.705238",
            lat: "19.694872"
        },
        {
            cityCode: "AR380705",
            cityName: "阿尔芒布卡佩勒",
            pinyin: "AErMangBuKaPeiLe",
            firstLetter: "A",
            lng: "103.583916",
            lat: "31.610100"
        },
        {
            cityCode: "AR383584",
            cityName: "马尔萨奈拉科特",
            pinyin: "MaErSaNaiLaKeTe",
            firstLetter: "M",
            lng: "4.988667",
            lat: "47.270302"
        },
        {
            cityCode: "AR380174",
            cityName: "洛姆",
            pinyin: "LuoMu",
            firstLetter: "L",
            lng: "7.1117849",
            lat: "60.8607716"
        },
        {
            cityCode: "AR382944",
            cityName: "瓦雷纳沃泽勒",
            pinyin: "WaLeiNaWoZeLe",
            firstLetter: "W",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR379913",
            cityName: "莫伯日",
            pinyin: "MoBoRi",
            firstLetter: "M",
            lng: "3.9674",
            lat: "50.280228"
        },
        {
            cityCode: "AR379839",
            cityName: "洛翁普拉日",
            pinyin: "LuoWengPuLaRi",
            firstLetter: "L",
            lng: "2.2256269",
            lat: "50.998117"
        },
        {
            cityCode: "AR380629",
            cityName: "屈西",
            pinyin: "QuXi",
            firstLetter: "Q",
            lng: "119.492760",
            lat: "34.130882"
        },
        {
            cityCode: "AR389365",
            cityName: "马克塞维尔",
            pinyin: "MaKeSaiWeiEr",
            firstLetter: "M",
            lng: "6.165043",
            lat: "48.711211"
        },
        {
            cityCode: "AR02586",
            cityName: "梅斯",
            pinyin: "MeiSi",
            firstLetter: "M",
            lng: "6.175715599999999",
            lat: "49.1193089"
        },
        {
            cityCode: "AR389356",
            cityName: "埃皮纳勒",
            pinyin: "AiPiNaLe",
            firstLetter: "A",
            lng: "6.449403",
            lat: "48.172402"
        },
        {
            cityCode: "AR389896",
            cityName: "埃塞纳西",
            pinyin: "AiSaiNaXi",
            firstLetter: "A",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR389844",
            cityName: "斯特拉斯堡",
            pinyin: "SiTeLaSiBao",
            firstLetter: "S",
            lng: "7.752111299999999",
            lat: "48.5734053"
        },
        {
            cityCode: "AR389771",
            cityName: "巴塞-于茨",
            pinyin: "BaSaiYuCi",
            firstLetter: "B",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR379972",
            cityName: "圣茹昂－德盖雷",
            pinyin: "ShengRuAngDeGaiLei",
            firstLetter: "S",
            lng: "-1.972348",
            lat: "48.5990279"
        },
        {
            cityCode: "AR389252",
            cityName: "热斯波尔塞姆",
            pinyin: "ReSiBoErSaiMu",
            firstLetter: "R",
            lng: "7.645619",
            lat: "48.51516900000001"
        },
        {
            cityCode: "AR380183",
            cityName: "绍莱",
            pinyin: "ShaoLai",
            firstLetter: "S",
            lng: "-0.879787",
            lat: "47.059407"
        },
        {
            cityCode: "AR380651",
            cityName: "瓦讷",
            pinyin: "WaNe",
            firstLetter: "W",
            lng: "-2.760847",
            lat: "47.658236"
        },
        {
            cityCode: "AR389138",
            cityName: "阿格诺",
            pinyin: "AGeNuo",
            firstLetter: "A",
            lng: "7.791250000000001",
            lat: "48.813288"
        },
        {
            cityCode: "AR378694",
            cityName: "拉克雷什",
            pinyin: "LaKeLeiShen",
            firstLetter: "L",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR380179",
            cityName: "特里尼亚克",
            pinyin: "TeLiNiYaKe",
            firstLetter: "T",
            lng: "-2.189124",
            lat: "47.317801"
        },
        {
            cityCode: "AR379103",
            cityName: "吕尼永",
            pinyin: "Lu:NiYong",
            firstLetter: "L",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR388004",
            cityName: "佩萨克",
            pinyin: "PeiSaKe",
            firstLetter: "P",
            lng: "-0.630386",
            lat: "44.80583"
        },
        {
            cityCode: "AR01458",
            cityName: "贝桑松",
            pinyin: "BeiSangSong",
            firstLetter: "B",
            lng: "6.024053899999999",
            lat: "47.237829"
        },
        {
            cityCode: "AR380600",
            cityName: "古埃斯努",
            pinyin: "GuAiSiNu",
            firstLetter: "G",
            lng: "-4.465600999999999",
            lat: "48.451535"
        },
        {
            cityCode: "AR387549",
            cityName: "圣埃尔布兰",
            pinyin: "ShengAiErBuLan",
            firstLetter: "S",
            lng: "-1.651444",
            lat: "47.210335"
        },
        {
            cityCode: "AR379827",
            cityName: "罗德兹",
            pinyin: "LuoDeZi",
            firstLetter: "L",
            lng: "2.575986",
            lat: "44.349389"
        },
        {
            cityCode: "AR386360",
            cityName: "圣保罗－莱达",
            pinyin: "ShengBaoLuoLaiDa",
            firstLetter: "S",
            lng: "113.502052",
            lat: "23.474447"
        },
        {
            cityCode: "AR380261",
            cityName: "卡奥尔",
            pinyin: "KaAoEr",
            firstLetter: "K",
            lng: "1.441989",
            lat: "44.4475229"
        },
        {
            cityCode: "AR388300",
            cityName: "巴荣纳",
            pinyin: "BaRongNa",
            firstLetter: "B",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR387058",
            cityName: "蒙德马桑",
            pinyin: "MengDeMaSang",
            firstLetter: "M",
            lng: "-0.4997819999999999",
            lat: "43.893485"
        },
        {
            cityCode: "AR379268",
            cityName: "普瓦帝耶",
            pinyin: "PuWaDiYe",
            firstLetter: "P",
            lng: "2.689437",
            lat: "50.054316"
        },
        {
            cityCode: "AR388918",
            cityName: "比亚里茨",
            pinyin: "BiYaLiCi",
            firstLetter: "B",
            lng: "-1.558626",
            lat: "43.4831519"
        },
        {
            cityCode: "AR386021",
            cityName: "布里夫拉盖亚尔德",
            pinyin: "BuLiFuLaGaiYaErDe",
            firstLetter: "B",
            lng: "110.203171",
            lat: "36.150398"
        },
        {
            cityCode: "AR384864",
            cityName: "伊苏瓦尔",
            pinyin: "YiSuWaEr",
            firstLetter: "Y",
            lng: "3.248128",
            lat: "45.54151"
        },
        {
            cityCode: "AR384999",
            cityName: "欧里亚克",
            pinyin: "OuLiYaKe",
            firstLetter: "O",
            lng: "2.444997",
            lat: "44.930953"
        },
        {
            cityCode: "AR387448",
            cityName: "阿尔蒂格普雷波尔多",
            pinyin: "AErDiGePuLeiBoErDuo",
            firstLetter: "A",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR00358",
            cityName: "蒙彼利埃",
            pinyin: "MengBiLiAi",
            firstLetter: "M",
            lng: "3.876716",
            lat: "43.610769"
        },
        {
            cityCode: "AR379770",
            cityName: "里永",
            pinyin: "LiYongMengTaNie",
            firstLetter: "L",
            lng: "3.114932",
            lat: "45.8939949"
        },
        {
            cityCode: "AR385812",
            cityName: "米约",
            pinyin: "MiYue",
            firstLetter: "M",
            lng: "3.077801",
            lat: "44.100575"
        },
        {
            cityCode: "AR388342",
            cityName: "勒布斯卡",
            pinyin: "LeBuSiKa",
            firstLetter: "L",
            lng: "-0.59944",
            lat: "44.865164"
        },
        {
            cityCode: "AR382352",
            cityName: "佩皮尼昂",
            pinyin: "PeiPiNiAng",
            firstLetter: "P",
            lng: "2.8948332",
            lat: "42.6886591"
        },
        {
            cityCode: "AR389253",
            cityName: "科尔玛",
            pinyin: "KeErMa",
            firstLetter: "K",
            lng: "7.358511999999999",
            lat: "48.0793589"
        },
        {
            cityCode: "AR383540",
            cityName: "梅勒伊",
            pinyin: "MeiLeYi",
            firstLetter: "M",
            lng: "5.495122",
            lat: "43.486821"
        },
        {
            cityCode: "AR383568",
            cityName: "维特罗勒",
            pinyin: "WeiTeLuoLe",
            firstLetter: "W",
            lng: "5.249702999999999",
            lat: "43.45859799999999"
        },
        {
            cityCode: "AR386949",
            cityName: "艾克斯普罗旺斯",
            pinyin: "AiKeSiPuLuoWangSi",
            firstLetter: "A",
            lng: "5.447426999999999",
            lat: "43.529742"
        },
        {
            cityCode: "AR381708",
            cityName: "拉佩讷叙尔于沃讷",
            pinyin: "LaPeiNeXuErYuWoNe",
            firstLetter: "L",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR384940",
            cityName: "尼姆",
            pinyin: "NiMu",
            firstLetter: "N",
            lng: "4.360054",
            lat: "43.836699"
        },
        {
            cityCode: "AR387037",
            cityName: "格拉迪尼昂",
            pinyin: "GeLaDiNiAng",
            firstLetter: "G",
            lng: "-0.618945",
            lat: "44.77426699999999"
        },
        {
            cityCode: "AR382887",
            cityName: "普罗旺斯地区萨隆",
            pinyin: "PuLuoWangSiDiQuSaLong",
            firstLetter: "P",
            lng: "109.594933",
            lat: "23.119461"
        },
        {
            cityCode: "AR386829",
            cityName: "索恩河畔自由城",
            pinyin: "SuoEnHePanZiYouCheng",
            firstLetter: "S",
            lng: "113.227318",
            lat: "23.341648"
        },
        {
            cityCode: "AR382648",
            cityName: "马蒂格",
            pinyin: "MaDiGe",
            firstLetter: "M",
            lng: "5.053728",
            lat: "43.404811"
        },
        {
            cityCode: "AR382687",
            cityName: "穆林斯",
            pinyin: "MuLinSi",
            firstLetter: "M",
            lng: "120.474302",
            lat: "41.569515"
        },
        {
            cityCode: "AR387231",
            cityName: "埃屈利",
            pinyin: "AiQuLi",
            firstLetter: "A",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR386527",
            cityName: "圣埃格雷沃",
            pinyin: "ShengAiGeLeiWo",
            firstLetter: "S",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR384081",
            cityName: "布洛涅－比扬古",
            pinyin: "BuLuoNieBiYangGu",
            firstLetter: "B",
            lng: "2.2399123",
            lat: "48.8396952"
        },
        {
            cityCode: "AR388620",
            cityName: "达尔迪伊",
            pinyin: "DaErDiYi",
            firstLetter: "D",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR387230",
            cityName: "埃克斯莱班",
            pinyin: "AiKeSiLaiBan",
            firstLetter: "A",
            lng: "5.908998",
            lat: "45.692341"
        },
        {
            cityCode: "AR387214",
            cityName: "圣洛朗－德米尔",
            pinyin: "ShengLuoLangDeMiEr",
            firstLetter: "S",
            lng: "5.045358999999999",
            lat: "45.686106"
        },
        {
            cityCode: "AR386328",
            cityName: "沙纳",
            pinyin: "ShaNa",
            firstLetter: "S",
            lng: "86.172379",
            lat: "29.189142"
        },
        {
            cityCode: "AR389184",
            cityName: "勒瓦卢瓦佩雷",
            pinyin: "LeWaLuWaPeiLei",
            firstLetter: "L",
            lng: "2.287864",
            lat: "48.89321700000001"
        },
        {
            cityCode: "AR384078",
            cityName: "巴尼奥雷",
            pinyin: "BaNiAoLei",
            firstLetter: "B",
            lng: "2.4234589",
            lat: "48.870364"
        },
        {
            cityCode: "AR387845",
            cityName: "穆鲁",
            pinyin: "MuLu",
            firstLetter: "M",
            lng: "32.0837445",
            lat: "2.9667878"
        },
        {
            cityCode: "AR387234",
            cityName: "塔桑拉德米吕讷",
            pinyin: "TaSangLaDeMiLu:Ne",
            firstLetter: "T",
            lng: "4.776921",
            lat: "45.761337"
        },
        {
            cityCode: "AR387847",
            cityName: "茹安维尔勒蓬",
            pinyin: "RuAnWeiErLePeng",
            firstLetter: "R",
            lng: "2.472043",
            lat: "48.821267"
        },
        {
            cityCode: "AR387561",
            cityName: "勒布朗-梅尼尔",
            pinyin: "LeBuLangMeiNiEr",
            firstLetter: "L",
            lng: "2.46436",
            lat: "48.941345"
        },
        {
            cityCode: "AR382649",
            cityName: "马诺斯克",
            pinyin: "MaNuoSiKe",
            firstLetter: "M",
            lng: "5.790916",
            lat: "43.835744"
        },
        {
            cityCode: "AR387753",
            cityName: "蒙特勒伊",
            pinyin: "MengTeLeYi",
            firstLetter: "M",
            lng: "2.448451",
            lat: "48.863812"
        },
        {
            cityCode: "AR387737",
            cityName: "圣蒂博德维涅",
            pinyin: "ShengDiBoDeWeiNie",
            firstLetter: "S",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR380317",
            cityName: "萨朗",
            pinyin: "SaLang",
            firstLetter: "S",
            lng: "89.030602",
            lat: "31.366423"
        },
        {
            cityCode: "AR384684",
            cityName: "布瓦西－圣莱热",
            pinyin: "BuWaXiShengLaiRe",
            firstLetter: "B",
            lng: "2.5060809",
            lat: "48.7544029"
        },
        {
            cityCode: "AR387810",
            cityName: "努瓦耶勒戈达",
            pinyin: "NuWaYeLeGeDa",
            firstLetter: "N",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR380707",
            cityName: "龙克",
            pinyin: "LongKe",
            firstLetter: "L",
            lng: "107.829666",
            lat: "24.360397"
        },
        {
            cityCode: "AR378462",
            cityName: "鲁维涅",
            pinyin: "LuWeiNie",
            firstLetter: "L",
            lng: "3.440537",
            lat: "50.334773"
        },
        {
            cityCode: "AR386366",
            cityName: "埃西讷",
            pinyin: "AiXiNe",
            firstLetter: "A",
            lng: "3.419725",
            lat: "48.96194999999999"
        },
        {
            cityCode: "AR388940",
            cityName: "维勒纳沃－多农",
            pinyin: "WeiLeNaWoDuoNong",
            firstLetter: "W",
            lng: "-0.5672574",
            lat: "44.7799813"
        },
        {
            cityCode: "AR380627",
            cityName: "圣马丹－布洛涅",
            pinyin: "ShengMaDanBuLuoNie",
            firstLetter: "S",
            lng: "1.630571",
            lat: "50.7257419"
        },
        {
            cityCode: "AR384994",
            cityName: "圣维克托",
            pinyin: "ShengWeiKeTuo",
            firstLetter: "S",
            lng: "5.236007",
            lat: "43.420234"
        },
        {
            cityCode: "AR00689",
            cityName: "利摩日",
            pinyin: "LiMoRi",
            firstLetter: "L",
            lng: "1.261105",
            lat: "45.83361900000001"
        },
        {
            cityCode: "AR386163",
            cityName: "拉特",
            pinyin: "LaTe",
            firstLetter: "L",
            lng: "93.575165",
            lat: "31.534998"
        },
        {
            cityCode: "AR377387",
            cityName: "维拉尔",
            pinyin: "WeiLaEr",
            firstLetter: "W",
            lng: "5.40545",
            lat: "43.92342"
        },
        {
            cityCode: "AR385312",
            cityName: "佩勒",
            pinyin: "PeiLeGeLu:",
            firstLetter: "P",
            lng: "0.211289",
            lat: "46.340364"
        },
        {
            cityCode: "AR387215",
            cityName: "圣热尼普伊",
            pinyin: "ShengReNiPuYi",
            firstLetter: "S",
            lng: "6.02513",
            lat: "46.2437479"
        },
        {
            cityCode: "AR387975",
            cityName: "盖拉德",
            pinyin: "GaiLaDe",
            firstLetter: "G",
            lng: "-7.748107399999999",
            lat: "42.4187796"
        },
        {
            cityCode: "AR386333",
            cityName: "瓦伦斯",
            pinyin: "WaLunSi",
            firstLetter: "W",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR386408",
            cityName: "勒蓬泰",
            pinyin: "LePengTai",
            firstLetter: "L",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR384837",
            cityName: "卡尔卡松尼",
            pinyin: "KaErKaSongNi",
            firstLetter: "K",
            lng: "2.353663",
            lat: "43.212161"
        },
        {
            cityCode: "AR360355",
            cityName: "帕多瓦",
            pinyin: "PaDuoWa",
            firstLetter: "P",
            lng: "11.8767611",
            lat: "45.4064349"
        },
        {
            cityCode: "AR02917",
            cityName: "兹沃勒",
            pinyin: "ZiWoLe",
            firstLetter: "Z",
            lng: "6.083021899999999",
            lat: "52.5167747"
        },
        {
            cityCode: "AR3124475",
            cityName: "埃因霍温",
            pinyin: "AiYinHuoWen",
            firstLetter: "A",
            lng: "5.4697225",
            lat: "51.44164199999999"
        },
        {
            cityCode: "AR3127819",
            cityName: "高达",
            pinyin: "GaoDa",
            firstLetter: "G",
            lng: "108.571022",
            lat: "26.034607"
        },
        {
            cityCode: "AR3127803",
            cityName: "代尔夫特",
            pinyin: "DaiErFuTe",
            firstLetter: "D",
            lng: "4.3570677",
            lat: "52.01157689999999"
        },
        {
            cityCode: "AR3127381",
            cityName: "戈尔林奇姆",
            pinyin: "GeErLinQiMu",
            firstLetter: "G",
            lng: null,
            lat: null
        },
        {
            cityCode: "AR05784",
            cityName: "塞图巴",
            pinyin: "SaiTuBaErBanDao",
            firstLetter: "S",
            lng: "-8.8941",
            lat: "38.5254047"
        },
        {
            cityCode: "AR3127813",
            cityName: "弗拉尔丁恩",
            pinyin: "FuLaErDingEn",
            firstLetter: "F",
            lng: "4.3494366",
            lat: "51.9120668"
        },
        {
            cityCode: "AR05456",
            cityName: "鹿特丹",
            pinyin: "LuTeDan",
            firstLetter: "L",
            lng: "123.398651",
            lat: "41.729561"
        },
        {
            cityCode: "AR3126438",
            cityName: "泽弗纳尔",
            pinyin: "ZeFuNaEr",
            firstLetter: "Z",
            lng: "6.076959",
            lat: "51.9294445"
        },
        {
            cityCode: "AR06762",
            cityName: "阿姆斯特丹",
            pinyin: "AMuSiTeDan",
            firstLetter: "A",
            lng: "120.392548",
            lat: "36.115906"
        },
        {
            cityCode: "AR3125135",
            cityName: "莱瓦顿",
            pinyin: "LaiWaDun",
            firstLetter: "L",
            lng: "5.7999133",
            lat: "53.2012334"
        },
        {
            cityCode: "AR3124959",
            cityName: "斯-海尔托根博契",
            pinyin: "SiHaiErTuoGenBoQi",
            firstLetter: "S",
            lng: null,
            lat: null
        }]
    },
    n = null,
    a = function(i, e, a) {
        y(function() {
            n = i;
            var y = document.createElement("div");
            y.id = "city-panel",
            y.className = "city-panel hide",
            e.extParentElement ? $(e.extParentElement).append(y) : document.body.appendChild(y),
            $("#city-panel").append('<ul class="nations clearfix"><li class="active" data-name="internal">国内</li><li data-name="international">海外</li></ul>'),
            $("#city-panel").append('<ul class="nav nav-tabs"></ul>'),
            $("#city-panel").append('<div class="tab-panel"></div>'),
            t.forEach(function(t, i) {
                0 == i ? $("#city-panel ul.nav.nav-tabs").append('<li data-name="' + t.name + '" class="active"><a>' + t.title + "</a></li>") : $("#city-panel ul.nav.nav-tabs").append('<li data-name="' + t.name + '"><a>' + t.title + "</a></li>")
            }),
            $(i).click(function() {
                $("#city-panel").toggle()
            }),
            $("#city-panel ul.nations li").click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                var t = $(this).data("name");
                l(t, a)
            }),
            $("#city-panel ul.nav.nav-tabs li").click(function() {
                $(this).addClass("active").siblings().removeClass("active");
                var t = $(this).data("name");
                r(t, a)
            }),
            $(document).click(function(t) {
                var i = t || window.event,
                e = i.target || i.srcElement;
                return "selectCity" != e.id && "city-panel" != $(e).parents(".city-panel").attr("id") && void $("#city-panel").hide()
            }),
            r("hot", a)
        })
    },
    l = function(t, e) {
        i = "internal" != t,
        r("hot", e),
        $("#city-panel ul.nav.nav-tabs li:eq(0)").addClass("active").siblings().removeClass("active")
    },
    r = function(t, a) {
        var l = [],
        r = [],
        y = [];
        if (e && (r = e.otaCitys, y = e.hotOtaCitys, i && (r = e.overseasOtaCitys, y = e.overseasHotOtaCitys)), "hot" == t) l.push({
            key: "",
            cities: y
        });
        else {
            for (var o = [], c = 0; c < t.length; c++) o.push(t.charAt(c));
            o.forEach(function(t) {
                var i = [];
                r.forEach(function(e) {
                    t == e.firstLetter && i.push(e)
                }),
                i.length > 0 && l.push({
                    key: t,
                    cities: i
                })
            })
        }
        $("#city-panel .tab-panel").html(""),
        l.forEach(function(t) {
            var i = document.createElement("ul");
            i.className = "clearfix",
            $(i).append('<li class="title">' + t.key + "</li>");
            var e = document.createElement("li");
            t.cities && t.cities.forEach(function(t) {
                $(e).append('<a class="title" title="' + t.cityName + '" data-city-code="' + t.cityCode + '">' + t.cityName + "</a>")
            }),
            $(i).append(e),
            $("#city-panel .tab-panel").append(i)
        }),
        $("#city-panel .tab-panel a.title").click(function() {
            var t = $(this).data("city-code"),
            i = $(this).html();
            $(n).val(i),
            $(n).attr("value", i),
            $(n).attr("title", i),
            $(n).attr("data-city-code", t);
            var e = $("#city-panel ul.nations .active").attr("data-name"),
            l = "international" == e;
            $("#key_input").attr("data-oversea", l),
            $("#city-panel").hide(),
            a && a()
        })
    },
    y = function(t) {
        var i = "/api/hotel/queryAllCites",
        n = {
            channelCode: "CA00046"
        };
        we.common.ajaxPost(i, n,
        function(i) {
            i.success && (e = i.data, t && t())
        })
    };
    return {
        init: a,
        isAborad: i
    }
};
var we = we || {};
we.plugins = we.plugins || {},
we.plugins.selectPerson = function() {
    function t(t, n) {
        "rooms" == t && e.rooms + n > 0 && e.rooms + n < 4 ? (n = e.rooms = e.rooms + n, $("#kids-panel .rooms span").html(n)) : "adults" == t && e.adults + n > 0 && e.adults + e.children + n < 5 ? (n = e.adults = e.adults + n, $("#kids-panel .adults span").html(n)) : "children" == t && e.children + n > -1 && e.adults + e.children + n < 5 && (n = e.children = e.children + n, $("#kids-panel .children span").html(n)),
        i()
    }
    function i() {
        1 == e.rooms ? ($("#kids-panel .rooms i:eq(0)").addClass("disabled"), $("#kids-panel .rooms i:eq(1)").removeClass("disabled")) : 3 == e.rooms ? ($("#kids-panel .rooms i:eq(0)").removeClass("disabled"), $("#kids-panel .rooms i:eq(1)").addClass("disabled")) : $("#kids-panel .rooms i").removeClass("disabled"),
        1 == e.adults && e.adults + e.children < 4 ? ($("#kids-panel .adults i:eq(0)").addClass("disabled"), $("#kids-panel .adults i:eq(1)").removeClass("disabled")) : 1 == e.adults && e.adults + e.children == 4 ? $("#kids-panel .adults i").addClass("disabled") : e.adults < 4 && e.adults + e.children < 4 ? $("#kids-panel .adults i").removeClass("disabled") : e.adults < 4 && e.adults + e.children == 4 && ($("#kids-panel .adults i:eq(0)").removeClass("disabled"), $("#kids-panel .adults i:eq(1)").addClass("disabled")),
        0 == e.children && e.adults + e.children < 4 ? ($("#kids-panel .children i:eq(0)").addClass("disabled"), $("#kids-panel .children i:eq(1)").removeClass("disabled")) : 0 == e.children && e.adults + e.children == 4 ? $("#kids-panel .children i").addClass("disabled") : e.children < 4 && e.adults + e.children < 4 ? $("#kids-panel .children i").removeClass("disabled") : e.children < 4 && e.adults + e.children == 4 && ($("#kids-panel .children i:eq(0)").removeClass("disabled"), $("#kids-panel .children i:eq(1)").addClass("disabled")),
        $("#kids-panel .children-panel .row").hide(),
        $("#kids-panel .children-panel .row:lt(" + e.children + ")").show(),
        e.children ? $("#kids-panel .children-panel").show() : $("#kids-panel .children-panel").hide()
    }
    var e = {
        rooms: 1,
        adults: 1,
        children: 0,
        child1: 0,
        child2: 0,
        child3: 0
    },
    n = null,
    a = function(a, l, r) {
        console.log(a),
        n = a;
        var y = document.createElement("div");
        y.id = "kids-panel",
        y.className = "kids-panel hide",
        l.extParentElement ? $(l.extParentElement).append(y) : document.body.appendChild(y),
        $(a).click(function() {
            $("#kids-panel").toggle()
        }),
        $("#kids-panel .btn").click(function() {
            $("#kids-panel").hide()
        }),
        $("#kids-panel .rooms i").click(function() {
            var i = $(this).data("name");
            "minus" == i ? t("rooms", -1) : "plus" == i && t("rooms", 1),
            r && r(e)
        }),
        $("#kids-panel .adults i").click(function() {
            var i = $(this).data("name");
            "minus" == i ? t("adults", -1) : "plus" == i && t("adults", 1),
            r && r(e)
        }),
        $("#kids-panel .children i").click(function() {
            var i = $(this).data("name");
            "minus" == i ? t("children", -1) : "plus" == i && t("children", 1),
            r && r(e)
        }),
        $("#kids-panel .children-panel select").change(function() {
            var t = $(this).data("name"),
            i = $(this).val();
            "child1" == t ? e.child1 = i: "child2" == t ? e.child2 = i: "child3" == t && (e.child3 = i)
        }),
        i(),
        $(document).click(function(t) {
            var i = t || window.event,
            e = i.target || i.srcElement;
            return "selectKids" != e.id && "selectKids" != $(e).parents("#selectKids.kids").attr("id") && "kids-panel" != $(e).parents(".kids-panel").attr("id") && void $("#kids-panel").hide()
        })
    };
    return {
        init: a
    }
};