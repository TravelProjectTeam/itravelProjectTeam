!
function(t, e, n) {
    "use strict";
    function i(t) {
        return function() {
            var e, n = arguments[0],
            n = "[" + (t ? t + ":": "") + n + "] http://errors.angularjs.org/1.2.32/" + (t ? t + "/": "") + n;
            for (e = 1; e < arguments.length; e++) n = n + (1 == e ? "?": "&") + "p" + (e - 1) + "=" + encodeURIComponent("function" == typeof arguments[e] ? arguments[e].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[e] ? "undefined": "string" != typeof arguments[e] ? JSON.stringify(arguments[e]) : arguments[e]);
            return Error(n)
        }
    }
    function r(t) {
        if (null == t || S(t)) return ! 1;
        var e = t.length;
        return ! (1 !== t.nodeType || !e) || ($(t) || un(t) || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    function o(t, e, n) {
        var i;
        if (t) if (C(t)) for (i in t)"prototype" == i || "length" == i || "name" == i || t.hasOwnProperty && !t.hasOwnProperty(i) || e.call(n, t[i], i);
        else if (un(t) || r(t)) for (i = 0; i < t.length; i++) e.call(n, t[i], i);
        else if (t.forEach && t.forEach !== o) t.forEach(e, n);
        else for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i);
        return t
    }
    function s(t) {
        var e, n = [];
        for (e in t) t.hasOwnProperty(e) && n.push(e);
        return n.sort()
    }
    function a(t, e, n) {
        for (var i = s(t), r = 0; r < i.length; r++) e.call(n, t[i[r]], i[r]);
        return i
    }
    function u(t) {
        return function(e, n) {
            t(n, e)
        }
    }
    function l() {
        for (var t, e = an.length; e;) {
            if (e--, t = an[e].charCodeAt(0), 57 == t) return an[e] = "A",
            an.join("");
            if (90 != t) return an[e] = String.fromCharCode(t + 1),
            an.join("");
            an[e] = "0"
        }
        return an.unshift("0"),
        an.join("")
    }
    function c(t, e) {
        e ? t.$$hashKey = e: delete t.$$hashKey
    }
    function d(t) {
        var e = t.$$hashKey;
        return o(arguments,
        function(e) {
            e !== t && o(e,
            function(e, n) {
                t[n] = e
            })
        }),
        c(t, e),
        t
    }
    function h(t) {
        return parseInt(t, 10)
    }
    function f(t, e) {
        return d(new(d(function() {},
        {
            prototype: t
        })), e)
    }
    function p() {}
    function m(t) {
        return t
    }
    function v(t) {
        return function() {
            return t
        }
    }
    function g(t) {
        return "undefined" == typeof t
    }
    function y(t) {
        return "undefined" != typeof t
    }
    function b(t) {
        return null != t && "object" == typeof t
    }
    function $(t) {
        return "string" == typeof t
    }
    function x(t) {
        return "number" == typeof t
    }
    function w(t) {
        return "[object Date]" === rn.call(t)
    }
    function C(t) {
        return "function" == typeof t
    }
    function T(t) {
        return "[object RegExp]" === rn.call(t)
    }
    function S(t) {
        return t && t.document && t.location && t.alert && t.setInterval
    }
    function k(t) {
        return ! (!t || !(t.nodeName || t.prop && t.attr && t.find))
    }
    function E(t, e, n) {
        var i = [];
        return o(t,
        function(t, r, o) {
            i.push(e.call(n, t, r, o))
        }),
        i
    }
    function j(t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; n++) if (e === t[n]) return n;
        return - 1
    }
    function A(t, e) {
        var n = j(t, e);
        return 0 <= n && t.splice(n, 1),
        e
    }
    function N(t, e, n, i) {
        if (S(t) || t && t.$evalAsync && t.$watch) throw on("cpws");
        if (e) {
            if (t === e) throw on("cpi");
            if (n = n || [], i = i || [], b(t)) {
                var r = j(n, t);
                if ( - 1 !== r) return i[r];
                n.push(t),
                i.push(e)
            }
            if (un(t)) for (var s = e.length = 0; s < t.length; s++) r = N(t[s], null, n, i),
            b(t[s]) && (n.push(t[s]), i.push(r)),
            e.push(r);
            else {
                var a = e.$$hashKey;
                un(e) ? e.length = 0 : o(e,
                function(t, n) {
                    delete e[n]
                });
                for (s in t) r = N(t[s], null, n, i),
                b(t[s]) && (n.push(t[s]), i.push(r)),
                e[s] = r;
                c(e, a)
            }
        } else(e = t) && (un(t) ? e = N(t, [], n, i) : w(t) ? e = new Date(t.getTime()) : T(t) ? (e = RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex) : b(t) && (e = N(t, {},
        n, i)));
        return e
    }
    function D(t, e) {
        if (un(t)) {
            e = e || [];
            for (var n = 0; n < t.length; n++) e[n] = t[n]
        } else if (b(t)) for (n in e = e || {},
        t) ! Ze.call(t, n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
        return e || t
    }
    function M(t, e) {
        if (t === e) return ! 0;
        if (null === t || null === e) return ! 1;
        if (t !== t && e !== e) return ! 0;
        var i, r = typeof t;
        if (r == typeof e && "object" == r) {
            if (!un(t)) {
                if (w(t)) return !! w(e) && (isNaN(t.getTime()) && isNaN(e.getTime()) || t.getTime() === e.getTime());
                if (T(t) && T(e)) return t.toString() == e.toString();
                if (t && t.$evalAsync && t.$watch || e && e.$evalAsync && e.$watch || S(t) || S(e) || un(e)) return ! 1;
                r = {};
                for (i in t) if ("$" !== i.charAt(0) && !C(t[i])) {
                    if (!M(t[i], e[i])) return ! 1;
                    r[i] = !0
                }
                for (i in e) if (!r.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !C(e[i])) return ! 1;
                return ! 0
            }
            if (!un(e)) return ! 1;
            if ((r = t.length) == e.length) {
                for (i = 0; i < r; i++) if (!M(t[i], e[i])) return ! 1;
                return ! 0
            }
        }
        return ! 1
    }
    function P(t, e) {
        var n = 2 < arguments.length ? en.call(arguments, 2) : [];
        return ! C(e) || e instanceof RegExp ? e: n.length ?
        function() {
            return arguments.length ? e.apply(t, n.concat(en.call(arguments, 0))) : e.apply(t, n)
        }: function() {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }
    function L(t, i) {
        var r = i;
        return "string" == typeof t && "$" === t.charAt(0) ? r = n: S(i) ? r = "$WINDOW": i && e === i ? r = "$DOCUMENT": i && i.$evalAsync && i.$watch && (r = "$SCOPE"),
        r
    }
    function O(t, e) {
        return "undefined" == typeof t ? n: JSON.stringify(t, L, e ? "  ": null)
    }
    function F(t) {
        return $(t) ? JSON.parse(t) : t
    }
    function I(t) {
        return "function" == typeof t ? t = !0 : t && 0 !== t.length ? (t = Qe("" + t), t = !("f" == t || "0" == t || "false" == t || "no" == t || "n" == t || "[]" == t)) : t = !1,
        t
    }
    function H(t) {
        t = Xe(t).clone();
        try {
            t.empty()
        } catch(e) {}
        var n = Xe("<div>").append(t).html();
        try {
            return 3 === t[0].nodeType ? Qe(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
            function(t, e) {
                return "<" + Qe(e)
            })
        } catch(i) {
            return Qe(n)
        }
    }
    function _(t) {
        try {
            return decodeURIComponent(t)
        } catch(e) {}
    }
    function q(t) {
        var e, n, i = {};
        return o((t || "").split("&"),
        function(t) {
            t && (e = t.replace(/\+/g, "%20").split("="), n = _(e[0]), y(n) && (t = !y(e[1]) || _(e[1]), Ze.call(i, n) ? un(i[n]) ? i[n].push(t) : i[n] = [i[n], t] : i[n] = t))
        }),
        i
    }
    function B(t) {
        var e = [];
        return o(t,
        function(t, n) {
            un(t) ? o(t,
            function(t) {
                e.push(z(n, !0) + (!0 === t ? "": "=" + z(t, !0)))
            }) : e.push(z(n, !0) + (!0 === t ? "": "=" + z(t, !0)))
        }),
        e.length ? e.join("&") : ""
    }
    function R(t) {
        return z(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function z(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20": "+")
    }
    function V(t, n) {
        function i(t) {
            t && a.push(t)
        }
        var r, s, a = [t],
        u = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
        l = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        o(u,
        function(n) {
            u[n] = !0,
            i(e.getElementById(n)),
            n = n.replace(":", "\\:"),
            t.querySelectorAll && (o(t.querySelectorAll("." + n), i), o(t.querySelectorAll("." + n + "\\:"), i), o(t.querySelectorAll("[" + n + "]"), i))
        }),
        o(a,
        function(t) {
            if (!r) {
                var e = l.exec(" " + t.className + " ");
                e ? (r = t, s = (e[2] || "").replace(/\s+/g, ",")) : o(t.attributes,
                function(e) { ! r && u[e.name] && (r = t, s = e.value)
                })
            }
        }),
        r && n(r, s ? [s] : [])
    }
    function W(n, i) {
        var r = function() {
            if (n = Xe(n), n.injector()) {
                var t = n[0] === e ? "document": H(n);
                throw on("btstrpd", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            return i = i || [],
            i.unshift(["$provide",
            function(t) {
                t.value("$rootElement", n)
            }]),
            i.unshift("ng"),
            t = xt(i),
            t.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate",
            function(t, e, n, i, r) {
                t.$apply(function() {
                    e.data("$injector", i),
                    n(e)(t)
                })
            }]),
            t
        },
        s = /^NG_DEFER_BOOTSTRAP!/;
        return t && !s.test(t.name) ? r() : (t.name = t.name.replace(s, ""), void(sn.resumeBootstrap = function(t) {
            o(t,
            function(t) {
                i.push(t)
            }),
            r()
        }))
    }
    function U(t, e) {
        return e = e || "_",
        t.replace(dn,
        function(t, n) {
            return (n ? e: "") + t.toLowerCase()
        })
    }
    function X(t, e, n) {
        if (!t) throw on("areq", e || "?", n || "required");
        return t
    }
    function Y(t, e, n) {
        return n && un(t) && (t = t[t.length - 1]),
        X(C(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object": typeof t)),
        t
    }
    function J(t, e) {
        if ("hasOwnProperty" === t) throw on("badname", e)
    }
    function K(t, e, n) {
        if (!e) return t;
        e = e.split(".");
        for (var i, r = t,
        o = e.length,
        s = 0; s < o; s++) i = e[s],
        t && (t = (r = t)[i]);
        return ! n && C(t) ? P(r, t) : t
    }
    function G(t) {
        var e = t[0];
        if (t = t[t.length - 1], e === t) return Xe(e);
        var n = [e];
        do {
            if (e = e.nextSibling, !e) break;
            n.push(e)
        } while ( e !== t );
        return Xe(n)
    }
    function Q(t) {
        var e = i("$injector"),
        n = i("ng");
        return t = t.angular || (t.angular = {}),
        t.$$minErr = t.$$minErr || i,
        t.module || (t.module = function() {
            var t = {};
            return function(i, r, o) {
                if ("hasOwnProperty" === i) throw n("badname", "module");
                return r && t.hasOwnProperty(i) && (t[i] = null),
                t[i] || (t[i] = function() {
                    function t(t, e, i) {
                        return function() {
                            return n[i || "push"]([t, e, arguments]),
                            u
                        }
                    }
                    if (!r) throw e("nomod", i);
                    var n = [],
                    s = [],
                    a = t("$injector", "invoke"),
                    u = {
                        _invokeQueue: n,
                        _runBlocks: s,
                        requires: r,
                        name: i,
                        provider: t("$provide", "provider"),
                        factory: t("$provide", "factory"),
                        service: t("$provide", "service"),
                        value: t("$provide", "value"),
                        constant: t("$provide", "constant", "unshift"),
                        animation: t("$animateProvider", "register"),
                        filter: t("$filterProvider", "register"),
                        controller: t("$controllerProvider", "register"),
                        directive: t("$compileProvider", "directive"),
                        config: a,
                        run: function(t) {
                            return s.push(t),
                            this
                        }
                    };
                    return o && a(o),
                    u
                } ())
            }
        } ())
    }
    function Z(e) {
        d(e, {
            bootstrap: W,
            copy: N,
            extend: d,
            equals: M,
            element: Xe,
            forEach: o,
            injector: xt,
            noop: p,
            bind: P,
            toJson: O,
            fromJson: F,
            identity: m,
            isUndefined: g,
            isDefined: y,
            isString: $,
            isFunction: C,
            isObject: b,
            isNumber: x,
            isElement: k,
            isArray: un,
            version: hn,
            isDate: w,
            lowercase: Qe,
            uppercase: tn,
            callbacks: {
                counter: 0
            },
            $$minErr: i,
            $$csp: cn
        }),
        Je = Q(t);
        try {
            Je("ngLocale")
        } catch(n) {
            Je("ngLocale", []).provider("$locale", zt)
        }
        Je("ng", ["ngLocale"], ["$provide",
        function(t) {
            t.provider({
                $$sanitizeUri: ge
            }),
            t.provider("$compile", jt).directive({
                a: li,
                input: $i,
                textarea: $i,
                form: fi,
                script: nr,
                select: or,
                style: ar,
                option: sr,
                ngBind: Mi,
                ngBindHtml: Li,
                ngBindTemplate: Pi,
                ngClass: Oi,
                ngClassEven: Ii,
                ngClassOdd: Fi,
                ngCloak: Hi,
                ngController: _i,
                ngForm: pi,
                ngHide: Ki,
                ngIf: Ri,
                ngInclude: zi,
                ngInit: Wi,
                ngNonBindable: Ui,
                ngPluralize: Xi,
                ngRepeat: Yi,
                ngShow: Ji,
                ngStyle: Gi,
                ngSwitch: Qi,
                ngSwitchWhen: Zi,
                ngSwitchDefault: tr,
                ngOptions: rr,
                ngTransclude: er,
                ngModel: ki,
                ngList: Ai,
                ngChange: Ei,
                required: ji,
                ngRequired: ji,
                ngValue: Di
            }).directive({
                ngInclude: Vi
            }).directive(ci).directive(qi),
            t.provider({
                $anchorScroll: wt,
                $animate: Ln,
                $browser: St,
                $cacheFactory: kt,
                $controller: Dt,
                $document: Mt,
                $exceptionHandler: Pt,
                $filter: Ee,
                $interpolate: Bt,
                $interval: Rt,
                $http: It,
                $httpBackend: _t,
                $location: ne,
                $log: ie,
                $parse: he,
                $rootScope: ve,
                $q: fe,
                $sce: xe,
                $sceDelegate: $e,
                $sniffer: we,
                $templateCache: Et,
                $timeout: Ce,
                $window: ke,
                $$rAF: me,
                $$asyncCallback: Ct
            })
        }])
    }
    function tt(t) {
        return t.replace(gn,
        function(t, e, n, i) {
            return i ? n.toUpperCase() : n
        }).replace(yn, "Moz$1")
    }
    function et(t, e, n, i) {
        function r(t) {
            var r, s, a, u, l, c, d = n && t ? [this.filter(t)] : [this],
            h = e;
            if (!i || null != t) for (; d.length;) for (r = d.shift(), s = 0, a = r.length; s < a; s++) for (u = Xe(r[s]), h ? u.triggerHandler("$destroy") : h = !h, l = 0, u = (c = u.children()).length; l < u; l++) d.push(Ye(c[l]));
            return o.apply(this, arguments)
        }
        var o = Ye.fn[t],
        o = o.$original || o;
        r.$original = o,
        Ye.fn[t] = r
    }
    function nt(t) {
        if (t instanceof nt) return t;
        if ($(t) && (t = ln(t)), !(this instanceof nt)) {
            if ($(t) && "<" != t.charAt(0)) throw bn("nosel");
            return new nt(t)
        }
        if ($(t)) {
            var n = t;
            t = e;
            var i;
            if (i = $n.exec(n)) t = [t.createElement(i[1])];
            else {
                var r, o = t;
                if (t = o.createDocumentFragment(), i = [], xn.test(n)) {
                    for (o = t.appendChild(o.createElement("div")), r = (wn.exec(n) || ["", ""])[1].toLowerCase(), r = Tn[r] || Tn._default, o.innerHTML = "<div>&#160;</div>" + r[1] + n.replace(Cn, "<$1></$2>") + r[2], o.removeChild(o.firstChild), n = r[0]; n--;) o = o.lastChild;
                    for (n = 0, r = o.childNodes.length; n < r; ++n) i.push(o.childNodes[n]);
                    o = t.firstChild,
                    o.textContent = ""
                } else i.push(o.createTextNode(n));
                t.textContent = "",
                t.innerHTML = "",
                t = i
            }
            ht(this, t),
            Xe(e.createDocumentFragment()).append(this)
        } else ht(this, t)
    }
    function it(t) {
        return t.cloneNode(!0)
    }
    function rt(t) {
        st(t);
        var e = 0;
        for (t = t.childNodes || []; e < t.length; e++) rt(t[e])
    }
    function ot(t, e, n, i) {
        if (y(i)) throw bn("offargs");
        var r = at(t, "events");
        at(t, "handle") && (g(e) ? o(r,
        function(e, n) {
            vn(t, n, e),
            delete r[n]
        }) : o(e.split(" "),
        function(e) {
            g(n) ? (vn(t, e, r[e]), delete r[e]) : A(r[e] || [], n)
        }))
    }
    function st(t, e) {
        var i = t.ng339,
        r = fn[i];
        r && (e ? delete fn[i].data[e] : (r.handle && (r.events.$destroy && r.handle({},
        "$destroy"), ot(t)), delete fn[i], t.ng339 = n))
    }
    function at(t, e, n) {
        var i = t.ng339,
        i = fn[i || -1];
        return y(n) ? (i || (t.ng339 = i = ++pn, i = fn[i] = {}), void(i[e] = n)) : i && i[e]
    }
    function ut(t, e, n) {
        var i = at(t, "data"),
        r = y(n),
        o = !r && y(e),
        s = o && !b(e);
        if (i || s || at(t, "data", i = {}), r) i[e] = n;
        else {
            if (!o) return i;
            if (s) return i && i[e];
            d(i, e)
        }
    }
    function lt(t, e) {
        return !! t.getAttribute && -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ")
    }
    function ct(t, e) {
        e && t.setAttribute && o(e.split(" "),
        function(e) {
            t.setAttribute("class", ln((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ln(e) + " ", " ")))
        })
    }
    function dt(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "),
            function(t) {
                t = ln(t),
                -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }),
            t.setAttribute("class", ln(n))
        }
    }
    function ht(t, e) {
        if (e) {
            e = e.nodeName || !y(e.length) || S(e) ? [e] : e;
            for (var n = 0; n < e.length; n++) t.push(e[n])
        }
    }
    function ft(t, e) {
        return pt(t, "$" + (e || "ngController") + "Controller")
    }
    function pt(t, e, i) {
        for (9 == t.nodeType && (t = t.documentElement), e = un(e) ? e: [e]; t;) {
            for (var r = 0,
            o = e.length; r < o; r++) if ((i = Xe.data(t, e[r])) !== n) return i;
            t = t.parentNode || 11 === t.nodeType && t.host
        }
    }
    function mt(t) {
        for (var e = 0,
        n = t.childNodes; e < n.length; e++) rt(n[e]);
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }
    function vt(t, e) {
        var n = kn[e.toLowerCase()];
        return n && En[t.nodeName] && n
    }
    function gt(t, n) {
        var i = function(i, r) {
            if (i.preventDefault || (i.preventDefault = function() {
                i.returnValue = !1
            }), i.stopPropagation || (i.stopPropagation = function() {
                i.cancelBubble = !0
            }), i.target || (i.target = i.srcElement || e), g(i.defaultPrevented)) {
                var s = i.preventDefault;
                i.preventDefault = function() {
                    i.defaultPrevented = !0,
                    s.call(i)
                },
                i.defaultPrevented = !1
            }
            i.isDefaultPrevented = function() {
                return i.defaultPrevented || !1 === i.returnValue
            };
            var a = D(n[r || i.type] || []);
            o(a,
            function(e) {
                e.call(t, i)
            }),
            8 >= Ue ? (i.preventDefault = null, i.stopPropagation = null, i.isDefaultPrevented = null) : (delete i.preventDefault, delete i.stopPropagation, delete i.isDefaultPrevented)
        };
        return i.elem = t,
        i
    }
    function yt(t, e) {
        var i, r = typeof t;
        return "function" == r || "object" == r && null !== t ? "function" == typeof(i = t.$$hashKey) ? i = t.$$hashKey() : i === n && (i = t.$$hashKey = (e || l)()) : i = t,
        r + ":" + i
    }
    function bt(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function() {
                return++n
            }
        }
        o(t, this.put, this)
    }
    function $t(t) {
        var e, n;
        return "function" == typeof t ? (e = t.$inject) || (e = [], t.length && (n = t.toString().replace(Dn, ""), n = n.match(jn), o(n[1].split(An),
        function(t) {
            t.replace(Nn,
            function(t, n, i) {
                e.push(i)
            })
        })), t.$inject = e) : un(t) ? (n = t.length - 1, Y(t[n], "fn"), e = t.slice(0, n)) : Y(t, "fn", !0),
        e
    }
    function xt(t) {
        function e(t) {
            return function(e, n) {
                return b(e) ? void o(e, u(t)) : t(e, n)
            }
        }
        function n(t, e) {
            if (J(t, "service"), (C(e) || un(e)) && (e = f.instantiate(e)), !e.$get) throw Mn("pget", t);
            return h[t + l] = e
        }
        function i(t, e) {
            return n(t, {
                $get: e
            })
        }
        function r(t) {
            var e, n, i, s, a = [];
            return o(t,
            function(t) {
                if (!d.get(t)) {
                    d.put(t, !0);
                    try {
                        if ($(t)) for (e = Je(t), a = a.concat(r(e.requires)).concat(e._runBlocks), n = e._invokeQueue, i = 0, s = n.length; i < s; i++) {
                            var o = n[i],
                            u = f.get(o[0]);
                            u[o[1]].apply(u, o[2])
                        } else C(t) ? a.push(f.invoke(t)) : un(t) ? a.push(f.invoke(t)) : Y(t, "module")
                    } catch(l) {
                        throw un(t) && (t = t[t.length - 1]),
                        l.message && l.stack && -1 == l.stack.indexOf(l.message) && (l = l.message + "\n" + l.stack),
                        Mn("modulerr", t, l.stack || l.message || l)
                    }
                }
            }),
            a
        }
        function s(t, e) {
            function n(n) {
                if (t.hasOwnProperty(n)) {
                    if (t[n] === a) throw Mn("cdep", n + " <- " + c.join(" <- "));
                    return t[n]
                }
                try {
                    return c.unshift(n),
                    t[n] = a,
                    t[n] = e(n)
                } catch(i) {
                    throw t[n] === a && delete t[n],
                    i
                } finally {
                    c.shift()
                }
            }
            function i(t, e, i) {
                var r, o, s, a = [],
                u = $t(t);
                for (o = 0, r = u.length; o < r; o++) {
                    if (s = u[o], "string" != typeof s) throw Mn("itkn", s);
                    a.push(i && i.hasOwnProperty(s) ? i[s] : n(s))
                }
                return un(t) && (t = t[r]),
                t.apply(e, a)
            }
            return {
                invoke: i,
                instantiate: function(t, e) {
                    var n, r = function() {};
                    return r.prototype = (un(t) ? t[t.length - 1] : t).prototype,
                    r = new r,
                    n = i(t, r, e),
                    b(n) || C(n) ? n: r
                },
                get: n,
                annotate: $t,
                has: function(e) {
                    return h.hasOwnProperty(e + l) || t.hasOwnProperty(e)
                }
            }
        }
        var a = {},
        l = "Provider",
        c = [],
        d = new bt([], (!0)),
        h = {
            $provide: {
                provider: e(n),
                factory: e(i),
                service: e(function(t, e) {
                    return i(t, ["$injector",
                    function(t) {
                        return t.instantiate(e)
                    }])
                }),
                value: e(function(t, e) {
                    return i(t, v(e))
                }),
                constant: e(function(t, e) {
                    J(t, "constant"),
                    h[t] = e,
                    m[t] = e
                }),
                decorator: function(t, e) {
                    var n = f.get(t + l),
                    i = n.$get;
                    n.$get = function() {
                        var t = g.invoke(i, n);
                        return g.invoke(e, null, {
                            $delegate: t
                        })
                    }
                }
            }
        },
        f = h.$injector = s(h,
        function() {
            throw Mn("unpr", c.join(" <- "))
        }),
        m = {},
        g = m.$injector = s(m,
        function(t) {
            return t = f.get(t + l),
            g.invoke(t.$get, t)
        });
        return o(r(t),
        function(t) {
            g.invoke(t || p)
        }),
        g
    }
    function wt() {
        var t = !0;
        this.disableAutoScrolling = function() {
            t = !1
        },
        this.$get = ["$window", "$location", "$rootScope",
        function(e, n, i) {
            function r(t) {
                var e = null;
                return o(t,
                function(t) {
                    e || "a" !== Qe(t.nodeName) || (e = t)
                }),
                e
            }
            function s() {
                var t, i = n.hash();
                i ? (t = a.getElementById(i)) ? t.scrollIntoView() : (t = r(a.getElementsByName(i))) ? t.scrollIntoView() : "top" === i && e.scrollTo(0, 0) : e.scrollTo(0, 0)
            }
            var a = e.document;
            return t && i.$watch(function() {
                return n.hash()
            },
            function() {
                i.$evalAsync(s)
            }),
            s
        }]
    }
    function Ct() {
        this.$get = ["$$rAF", "$timeout",
        function(t, e) {
            return t.supported ?
            function(e) {
                return t(e)
            }: function(t) {
                return e(t, 0, !1)
            }
        }]
    }
    function Tt(t, e, i, r) {
        function s(t) {
            try {
                t.apply(null, en.call(arguments, 1))
            } finally {
                if (y--, 0 === y) for (; b.length;) try {
                    b.pop()()
                } catch(e) {
                    i.error(e)
                }
            }
        }
        function a(t, e) { !
            function n() {
                o(w,
                function(t) {
                    t()
                }),
                x = e(n, t)
            } ()
        }
        function u() {
            C != l.url() && (C = l.url(), o(k,
            function(t) {
                t(l.url())
            }))
        }
        var l = this,
        c = e[0],
        d = t.location,
        h = t.history,
        f = t.setTimeout,
        m = t.clearTimeout,
        v = {};
        l.isMock = !1;
        var y = 0,
        b = [];
        l.$$completeOutstandingRequest = s,
        l.$$incOutstandingRequestCount = function() {
            y++
        },
        l.notifyWhenNoOutstandingRequests = function(t) {
            o(w,
            function(t) {
                t()
            }),
            0 === y ? t() : b.push(t)
        };
        var x, w = [];
        l.addPollFn = function(t) {
            return g(x) && a(100, f),
            w.push(t),
            t
        };
        var C = d.href,
        T = e.find("base"),
        S = null;
        l.url = function(e, n) {
            if (d !== t.location && (d = t.location), h !== t.history && (h = t.history), !e) return S || d.href.replace(/%27/g, "'");
            if (C != e) {
                var i = C && Yt(C) === Yt(e);
                if (C = e, !i && r.history) n ? h.replaceState(null, "", e) : (h.pushState(null, "", e), T.attr("href", T.attr("href")));
                else if (i || (S = e), n) d.replace(e);
                else if (i) {
                    var o, i = d;
                    o = e.indexOf("#"),
                    o = -1 === o ? "": e.substr(o + 1),
                    i.hash = o
                } else d.href = e;
                return l
            }
        };
        var k = [],
        E = !1;
        l.onUrlChange = function(e) {
            return E || (r.history && Xe(t).on("popstate", u), r.hashchange ? Xe(t).on("hashchange", u) : l.addPollFn(u), E = !0),
            k.push(e),
            e
        },
        l.$$checkUrlChange = u,
        l.baseHref = function() {
            var t = T.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var j = {},
        A = "",
        N = l.baseHref();
        l.cookies = function(t, e) {
            var r, o, s, a;
            if (!t) {
                if (c.cookie !== A) for (A = c.cookie, r = A.split("; "), j = {},
                s = 0; s < r.length; s++) o = r[s],
                a = o.indexOf("="),
                0 < a && (t = unescape(o.substring(0, a)), j[t] === n && (j[t] = unescape(o.substring(a + 1))));
                return j
            }
            e === n ? c.cookie = escape(t) + "=;path=" + N + ";expires=Thu, 01 Jan 1970 00:00:00 GMT": $(e) && (r = (c.cookie = escape(t) + "=" + escape(e) + ";path=" + N).length + 1, 4096 < r && i.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + r + " > 4096 bytes)!"))
        },
        l.defer = function(t, e) {
            var n;
            return y++,
            n = f(function() {
                delete v[n],
                s(t)
            },
            e || 0),
            v[n] = !0,
            n
        },
        l.defer.cancel = function(t) {
            return !! v[t] && (delete v[t], m(t), s(p), !0)
        }
    }
    function St() {
        this.$get = ["$window", "$log", "$sniffer", "$document",
        function(t, e, n, i) {
            return new Tt(t, i, e, n)
        }]
    }
    function kt() {
        this.$get = function() {
            function t(t, n) {
                function r(t) {
                    t != h && (f ? f == t && (f = t.n) : f = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }
                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }
                if (t in e) throw i("$cacheFactory")("iid", t);
                var s = 0,
                a = d({},
                n, {
                    id: t
                }),
                u = {},
                l = n && n.capacity || Number.MAX_VALUE,
                c = {},
                h = null,
                f = null;
                return e[t] = {
                    put: function(t, e) {
                        if (l < Number.MAX_VALUE) {
                            var n = c[t] || (c[t] = {
                                key: t
                            });
                            r(n)
                        }
                        if (!g(e)) return t in u || s++,
                        u[t] = e,
                        s > l && this.remove(f.key),
                        e
                    },
                    get: function(t) {
                        if (l < Number.MAX_VALUE) {
                            var e = c[t];
                            if (!e) return;
                            r(e)
                        }
                        return u[t]
                    },
                    remove: function(t) {
                        if (l < Number.MAX_VALUE) {
                            var e = c[t];
                            if (!e) return;
                            e == h && (h = e.p),
                            e == f && (f = e.n),
                            o(e.n, e.p),
                            delete c[t]
                        }
                        delete u[t],
                        s--
                    },
                    removeAll: function() {
                        u = {},
                        s = 0,
                        c = {},
                        h = f = null
                    },
                    destroy: function() {
                        c = a = u = null,
                        delete e[t]
                    },
                    info: function() {
                        return d({},
                        a, {
                            size: s
                        })
                    }
                }
            }
            var e = {};
            return t.info = function() {
                var t = {};
                return o(e,
                function(e, n) {
                    t[n] = e.info()
                }),
                t
            },
            t.get = function(t) {
                return e[t]
            },
            t
        }
    }
    function Et() {
        this.$get = ["$cacheFactory",
        function(t) {
            return t("templates")
        }]
    }
    function jt(t, i) {
        var r = {},
        s = "Directive",
        a = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
        l = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
        c = /^(on[a-z]+|formaction)$/;
        this.directive = function h(e, n) {
            return J(e, "directive"),
            $(e) ? (X(n, "directiveFactory"), r.hasOwnProperty(e) || (r[e] = [], t.factory(e + s, ["$injector", "$exceptionHandler",
            function(t, n) {
                var i = [];
                return o(r[e],
                function(r, o) {
                    try {
                        var s = t.invoke(r);
                        C(s) ? s = {
                            compile: v(s)
                        }: !s.compile && s.link && (s.compile = v(s.link)),
                        s.priority = s.priority || 0,
                        s.index = o,
                        s.name = s.name || e,
                        s.require = s.require || s.controller && s.name,
                        s.restrict = s.restrict || "A",
                        i.push(s)
                    } catch(a) {
                        n(a)
                    }
                }),
                i
            }])), r[e].push(n)) : o(e, u(h)),
            this
        },
        this.aHrefSanitizationWhitelist = function(t) {
            return y(t) ? (i.aHrefSanitizationWhitelist(t), this) : i.aHrefSanitizationWhitelist()
        },
        this.imgSrcSanitizationWhitelist = function(t) {
            return y(t) ? (i.imgSrcSanitizationWhitelist(t), this) : i.imgSrcSanitizationWhitelist()
        },
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
        function(t, i, u, h, p, v, g, y, x, w, T, S) {
            function k(t, e, n, i, r) {
                t instanceof Xe || (t = Xe(t)),
                o(t,
                function(e, n) {
                    3 == e.nodeType && e.nodeValue.match(/\S+/) && (t[n] = Xe(e).wrap("<span></span>").parent()[0])
                });
                var s = j(t, e, t, n, i, r);
                return E(t, "ng-scope"),
                function(e, n, i, r) {
                    X(e, "scope");
                    var a = n ? Sn.clone.call(t) : t;
                    o(i,
                    function(t, e) {
                        a.data("$" + e + "Controller", t)
                    }),
                    i = 0;
                    for (var u = a.length; i < u; i++) {
                        var l = a[i].nodeType;
                        1 !== l && 9 !== l || a.eq(i).data("$scope", e)
                    }
                    return n && n(a, e),
                    s && s(e, a, a, r),
                    a
                }
            }
            function E(t, e) {
                try {
                    t.addClass(e)
                } catch(n) {}
            }
            function j(t, e, i, r, o, s) {
                function a(t, i, r, o) {
                    var s, a, u, l, c, d, f;
                    s = i.length;
                    var p = Array(s);
                    for (l = 0; l < s; l++) p[l] = i[l];
                    for (d = l = 0, c = h.length; l < c; d++) a = p[d],
                    i = h[l++],
                    s = h[l++],
                    i ? (i.scope ? (u = t.$new(), Xe.data(a, "$scope", u)) : u = t, f = i.transcludeOnThisElement ? A(t, i.transclude, o) : !i.templateOnThisElement && o ? o: !o && e ? A(t, e) : null, i(s, u, a, r, f)) : s && s(t, a.childNodes, n, o)
                }
                for (var u, l, c, d, h = [], f = 0; f < t.length; f++) u = new K,
                l = N(t[f], [], u, 0 === f ? r: n, o),
                (s = l.length ? O(l, t[f], u, e, i, null, [], [], s) : null) && s.scope && E(u.$$element, "ng-scope"),
                u = s && s.terminal || !(c = t[f].childNodes) || !c.length ? null: j(c, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude: e),
                h.push(s, u),
                d = d || s || u,
                s = null;
                return d ? a: null
            }
            function A(t, e, n) {
                return function(i, r, o) {
                    var s = !1;
                    return i || (i = t.$new(), s = i.$$transcluded = !0),
                    r = e(i, r, o, n),
                    s && r.on("$destroy",
                    function() {
                        i.$destroy()
                    }),
                    r
                }
            }
            function N(t, e, n, i, r) {
                var o, s = n.$attr;
                switch (t.nodeType) {
                case 1:
                    o = Ke(t).toLowerCase(),
                    I(e, At(o), "E", i, r);
                    for (var u, c, d, h, f = t.attributes,
                    p = 0,
                    m = f && f.length; p < m; p++) {
                        var v = !1,
                        g = !1;
                        if (u = f[p], !Ue || 8 <= Ue || u.specified) {
                            c = u.name,
                            d = ln(u.value),
                            u = At(c),
                            (h = tt.test(u)) && (c = U(u.substr(6), "-"));
                            var y = u.replace(/(Start|End)$/, "");
                            u === y + "Start" && (v = c, g = c.substr(0, c.length - 5) + "end", c = c.substr(0, c.length - 6)),
                            u = At(c.toLowerCase()),
                            s[u] = c,
                            !h && n.hasOwnProperty(u) || (n[u] = d, vt(t, u) && (n[u] = !0)),
                            W(t, e, d, u),
                            I(e, u, "A", i, r, v, g)
                        }
                    }
                    if ("input" === o && "hidden" === t.getAttribute("type") && t.setAttribute("autocomplete", "off"), t = t.className, $(t) && "" !== t) for (; o = l.exec(t);) u = At(o[2]),
                    I(e, u, "C", i, r) && (n[u] = ln(o[3])),
                    t = t.substr(o.index + o[0].length);
                    break;
                case 3:
                    if (11 === Ue) for (; t.parentNode && t.nextSibling && 3 === t.nextSibling.nodeType;) t.nodeValue += t.nextSibling.nodeValue,
                    t.parentNode.removeChild(t.nextSibling);
                    z(e, t.nodeValue);
                    break;
                case 8:
                    try { (o = a.exec(t.nodeValue)) && (u = At(o[1]), I(e, u, "M", i, r) && (n[u] = ln(o[2])))
                    } catch(b) {}
                }
                return e.sort(B),
                e
            }
            function P(t, e, n) {
                var i = [],
                r = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t) throw On("uterdir", e, n);
                        1 == t.nodeType && (t.hasAttribute(e) && r++, t.hasAttribute(n) && r--), i.push(t), t = t.nextSibling
                    } while ( 0 < r )
                } else i.push(t);
                return Xe(i)
            }
            function L(t, e, n) {
                return function(i, r, o, s, a) {
                    return r = P(r[0], e, n),
                    t(i, r, o, s, a)
                }
            }
            function O(t, r, s, a, l, c, d, h, f) {
                function p(t, e, n, i) {
                    t && (n && (t = L(t, n, i)), t.require = w.require, t.directiveName = T, (I === w || w.$$isolateScope) && (t = J(t, {
                        isolateScope: !0
                    })), d.push(t)),
                    e && (n && (e = L(e, n, i)), e.require = w.require, e.directiveName = T, (I === w || w.$$isolateScope) && (e = J(e, {
                        isolateScope: !0
                    })), h.push(e))
                }
                function m(t, e, n, i) {
                    var r, s = "data",
                    a = !1;
                    if ($(e)) {
                        for (;
                        "^" == (r = e.charAt(0)) || "?" == r;) e = e.substr(1),
                        "^" == r && (s = "inheritedData"),
                        a = a || "?" == r;
                        if (r = null, i && "data" === s && (r = i[e]), r = r || n[s]("$" + e + "Controller"), !r && !a) throw On("ctreq", e, t)
                    } else un(e) && (r = [], o(e,
                    function(e) {
                        r.push(m(t, e, n, i))
                    }));
                    return r
                }
                function y(t, e, a, l, c) {
                    function f(t, e) {
                        var i;
                        return 2 > arguments.length && (e = t, t = n),
                        U && (i = T),
                        c(t, e, i)
                    }
                    var p, y, b, $, x, w, C, T = {};
                    if (p = r === a ? s: D(s, new K(Xe(a), s.$attr)), y = p.$$element, I) {
                        var S = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        w = e.$new(!0),
                        !B || B !== I && B !== I.$$originalDirective ? y.data("$isolateScopeNoTemplate", w) : y.data("$isolateScope", w),
                        E(y, "ng-isolate-scope"),
                        o(I.scope,
                        function(t, n) {
                            var r, o, s, a, u = t.match(S) || [],
                            l = u[3] || n,
                            c = "?" == u[2],
                            u = u[1];
                            switch (w.$$isolateBindings[n] = u + l, u) {
                            case "@":
                                p.$observe(l,
                                function(t) {
                                    w[n] = t
                                }),
                                p.$$observers[l].$$scope = e,
                                p[l] && (w[n] = i(p[l])(e));
                                break;
                            case "=":
                                if (c && !p[l]) break;
                                o = v(p[l]),
                                a = o.literal ? M: function(t, e) {
                                    return t === e || t !== t && e !== e
                                },
                                s = o.assign ||
                                function() {
                                    throw r = w[n] = o(e),
                                    On("nonassign", p[l], I.name)
                                },
                                r = w[n] = o(e),
                                w.$watch(function() {
                                    var t = o(e);
                                    return a(t, w[n]) || (a(t, r) ? s(e, t = w[n]) : w[n] = t),
                                    r = t
                                },
                                null, o.literal);
                                break;
                            case "&":
                                o = v(p[l]),
                                w[n] = function(t) {
                                    return o(e, t)
                                };
                                break;
                            default:
                                throw On("iscp", I.name, n, t)
                            }
                        })
                    }
                    for (C = c && f, O && o(O,
                    function(t) {
                        var n, i = {
                            $scope: t === I || t.$$isolateScope ? w: e,
                            $element: y,
                            $attrs: p,
                            $transclude: C
                        };
                        x = t.controller,
                        "@" == x && (x = p[t.name]),
                        n = g(x, i),
                        T[t.name] = n,
                        U || y.data("$" + t.name + "Controller", n),
                        t.controllerAs && (i.$scope[t.controllerAs] = n)
                    }), l = 0, b = d.length; l < b; l++) try { ($ = d[l])($.isolateScope ? w: e, y, p, $.require && m($.directiveName, $.require, y, T), C)
                    } catch(k) {
                        u(k, H(y))
                    }
                    for (l = e, I && (I.template || null === I.templateUrl) && (l = w), t && t(l, a.childNodes, n, c), l = h.length - 1; 0 <= l; l--) try { ($ = h[l])($.isolateScope ? w: e, y, p, $.require && m($.directiveName, $.require, y, T), C)
                    } catch(j) {
                        u(j, H(y))
                    }
                }
                f = f || {};
                for (var x, w, T, S, j, A = -Number.MAX_VALUE,
                O = f.controllerDirectives,
                I = f.newIsolateScopeDirective,
                B = f.templateDirective,
                z = f.nonTlbTranscludeDirective,
                V = !1,
                W = !1,
                U = f.hasElementTranscludeDirective,
                X = s.$$element = Xe(r), G = a, Q = 0, tt = t.length; Q < tt; Q++) {
                    w = t[Q];
                    var et = w.$$start,
                    nt = w.$$end;
                    if (et && (X = P(r, et, nt)), S = n, A > w.priority) break;
                    if ((S = w.scope) && (x = x || w, w.templateUrl || (R("new/isolated scope", I, w, X), b(S) && (I = w))), T = w.name, !w.templateUrl && w.controller && (S = w.controller, O = O || {},
                    R("'" + T + "' controller", O[T], w, X), O[T] = w), (S = w.transclude) && (V = !0, w.$$tlb || (R("transclusion", z, w, X), z = w), "element" == S ? (U = !0, A = w.priority, S = X, X = s.$$element = Xe(e.createComment(" " + T + ": " + s[T] + " ")), r = X[0], Y(l, en.call(S, 0), r), G = k(S, a, A, c && c.name, {
                        nonTlbTranscludeDirective: z
                    })) : (S = Xe(it(r)).contents(), X.empty(), G = k(S, a))), w.template) if (W = !0, R("template", B, w, X), B = w, S = C(w.template) ? w.template(X, s) : w.template, S = Z(S), w.replace) {
                        if (c = w, S = xn.test(S) ? Xe(ln(S)) : [], r = S[0], 1 != S.length || 1 !== r.nodeType) throw On("tplrt", T, "");
                        Y(l, X, r),
                        tt = {
                            $attr: {}
                        },
                        S = N(r, [], tt);
                        var rt = t.splice(Q + 1, t.length - (Q + 1));
                        I && F(S),
                        t = t.concat(S).concat(rt),
                        _(s, tt),
                        tt = t.length
                    } else X.html(S);
                    if (w.templateUrl) W = !0,
                    R("template", B, w, X),
                    B = w,
                    w.replace && (c = w),
                    y = q(t.splice(Q, t.length - Q), X, s, l, V && G, d, h, {
                        controllerDirectives: O,
                        newIsolateScopeDirective: I,
                        templateDirective: B,
                        nonTlbTranscludeDirective: z
                    }),
                    tt = t.length;
                    else if (w.compile) try {
                        j = w.compile(X, s, G),
                        C(j) ? p(null, j, et, nt) : j && p(j.pre, j.post, et, nt)
                    } catch(ot) {
                        u(ot, H(X))
                    }
                    w.terminal && (y.terminal = !0, A = Math.max(A, w.priority))
                }
                return y.scope = x && !0 === x.scope,
                y.transcludeOnThisElement = V,
                y.templateOnThisElement = W,
                y.transclude = G,
                f.hasElementTranscludeDirective = U,
                y
            }
            function F(t) {
                for (var e = 0,
                n = t.length; e < n; e++) t[e] = f(t[e], {
                    $$isolateScope: !0
                })
            }
            function I(e, i, o, a, l, c, d) {
                if (i === l) return null;
                if (l = null, r.hasOwnProperty(i)) {
                    var h;
                    i = t.get(i + s);
                    for (var p = 0,
                    m = i.length; p < m; p++) try {
                        h = i[p],
                        (a === n || a > h.priority) && -1 != h.restrict.indexOf(o) && (c && (h = f(h, {
                            $$start: c,
                            $$end: d
                        })), e.push(h), l = h)
                    } catch(v) {
                        u(v)
                    }
                }
                return l
            }
            function _(t, e) {
                var n = e.$attr,
                i = t.$attr,
                r = t.$$element;
                o(t,
                function(i, r) {
                    "$" != r.charAt(0) && (e[r] && e[r] !== i && (i += ("style" === r ? ";": " ") + e[r]), t.$set(r, i, !0, n[r]))
                }),
                o(e,
                function(e, o) {
                    "class" == o ? (E(r, e), t["class"] = (t["class"] ? t["class"] + " ": "") + e) : "style" == o ? (r.attr("style", r.attr("style") + ";" + e), t.style = (t.style ? t.style + ";": "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, i[o] = n[o])
                })
            }
            function q(t, e, n, i, r, s, a, u) {
                var l, c, f = [],
                m = e[0],
                v = t.shift(),
                g = d({},
                v, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: v
                }),
                y = C(v.templateUrl) ? v.templateUrl(e, n) : v.templateUrl;
                return e.empty(),
                h.get(w.getTrustedResourceUrl(y), {
                    cache: p
                }).success(function(d) {
                    var h, p;
                    if (d = Z(d), v.replace) {
                        if (d = xn.test(d) ? Xe(ln(d)) : [], h = d[0], 1 != d.length || 1 !== h.nodeType) throw On("tplrt", v.name, y);
                        d = {
                            $attr: {}
                        },
                        Y(i, e, h);
                        var $ = N(h, [], d);
                        b(v.scope) && F($),
                        t = $.concat(t),
                        _(n, d)
                    } else h = m,
                    e.html(d);
                    for (t.unshift(g), l = O(t, h, n, r, e, v, s, a, u), o(i,
                    function(t, n) {
                        t == h && (i[n] = e[0])
                    }), c = j(e[0].childNodes, r); f.length;) {
                        d = f.shift(),
                        p = f.shift();
                        var x = f.shift(),
                        w = f.shift(),
                        $ = e[0];
                        if (p !== m) {
                            var C = p.className;
                            u.hasElementTranscludeDirective && v.replace || ($ = it(h)),
                            Y(x, Xe(p), $),
                            E(Xe($), C)
                        }
                        p = l.transcludeOnThisElement ? A(d, l.transclude, w) : w,
                        l(c, d, $, i, p)
                    }
                    f = null
                }).error(function(t, e, n, i) {
                    throw On("tpload", i.url)
                }),
                function(t, e, n, i, r) {
                    t = r,
                    f ? (f.push(e), f.push(n), f.push(i), f.push(t)) : (l.transcludeOnThisElement && (t = A(e, l.transclude, r)), l(c, e, n, i, t))
                }
            }
            function B(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n: t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }
            function R(t, e, n, i) {
                if (e) throw On("multidir", e.name, n.name, t, H(i))
            }
            function z(t, e) {
                var n = i(e, !0);
                n && t.push({
                    priority: 0,
                    compile: function(t) {
                        var e = t.parent().length;
                        return e && E(t.parent(), "ng-binding"),
                        function(t, i) {
                            var r = i.parent(),
                            o = r.data("$binding") || [];
                            o.push(n),
                            r.data("$binding", o),
                            e || E(r, "ng-binding"),
                            t.$watch(n,
                            function(t) {
                                i[0].nodeValue = t
                            })
                        }
                    }
                })
            }
            function V(t, e) {
                if ("srcdoc" == e) return w.HTML;
                var n = Ke(t);
                return "xlinkHref" == e || "FORM" == n && "action" == e || "LINK" == n && "href" == e || "IMG" != n && ("src" == e || "ngSrc" == e) ? w.RESOURCE_URL: void 0
            }
            function W(t, e, n, r) {
                var o = i(n, !0);
                if (o) {
                    if ("multiple" === r && "SELECT" === Ke(t)) throw On("selmulti", H(t));
                    e.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(e, n, s) {
                                    if (n = s.$$observers || (s.$$observers = {}), c.test(r)) throw On("nodomevents"); (o = i(s[r], !0, V(t, r))) && (s[r] = o(e), (n[r] || (n[r] = [])).$$inter = !0, (s.$$observers && s.$$observers[r].$$scope || e).$watch(o,
                                    function(t, e) {
                                        "class" === r && t != e ? s.$updateClass(t, e) : s.$set(r, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }
            function Y(t, n, i) {
                var r, o, s = n[0],
                a = n.length,
                u = s.parentNode;
                if (t) for (r = 0, o = t.length; r < o; r++) if (t[r] == s) {
                    t[r++] = i,
                    o = r + a - 1;
                    for (var l = t.length; r < l; r++, o++) o < l ? t[r] = t[o] : delete t[r];
                    t.length -= a - 1;
                    break
                }
                for (u && u.replaceChild(i, s), t = e.createDocumentFragment(), t.appendChild(s), i[Xe.expando] = s[Xe.expando], s = 1, a = n.length; s < a; s++) u = n[s],
                Xe(u).remove(),
                t.appendChild(u),
                delete n[s];
                n[0] = i,
                n.length = 1
            }
            function J(t, e) {
                return d(function() {
                    return t.apply(null, arguments)
                },
                t, e)
            }
            var K = function(t, e) {
                this.$$element = t,
                this.$attr = e || {}
            };
            K.prototype = {
                $normalize: At,
                $addClass: function(t) {
                    t && 0 < t.length && T.addClass(this.$$element, t)
                },
                $removeClass: function(t) {
                    t && 0 < t.length && T.removeClass(this.$$element, t)
                },
                $updateClass: function(t, e) {
                    var n = Nt(t, e),
                    i = Nt(e, t);
                    0 === n.length ? T.removeClass(this.$$element, i) : 0 === i.length ? T.addClass(this.$$element, n) : T.setClass(this.$$element, n, i)
                },
                $set: function(t, e, i, r) {
                    var s = vt(this.$$element[0], t);
                    s && (this.$$element.prop(t, e), r = s),
                    this[t] = e,
                    r ? this.$attr[t] = r: (r = this.$attr[t]) || (this.$attr[t] = r = U(t, "-")),
                    s = Ke(this.$$element).toUpperCase(),
                    ("A" === s && ("href" === t || "xlinkHref" === t) || "IMG" === s && "src" === t) && (this[t] = e = S(e, "src" === t)),
                    !1 !== i && (null === e || e === n ? this.$$element.removeAttr(r) : this.$$element.attr(r, e)),
                    (i = this.$$observers) && o(i[t],
                    function(t) {
                        try {
                            t(e)
                        } catch(n) {
                            u(n)
                        }
                    })
                },
                $observe: function(t, e) {
                    var n = this,
                    i = n.$$observers || (n.$$observers = {}),
                    r = i[t] || (i[t] = []);
                    return r.push(e),
                    y.$evalAsync(function() {
                        r.$$inter || e(n[t])
                    }),
                    e
                }
            };
            var G = i.startSymbol(),
            Q = i.endSymbol(),
            Z = "{{" == G || "}}" == Q ? m: function(t) {
                return t.replace(/\{\{/g, G).replace(/}}/g, Q)
            },
            tt = /^ngAttr[A-Z]/;
            return k
        }]
    }
    function At(t) {
        return tt(t.replace(Fn, ""))
    }
    function Nt(t, e) {
        var n = "",
        i = t.split(/\s+/),
        r = e.split(/\s+/),
        o = 0;
        t: for (; o < i.length; o++) {
            for (var s = i[o], a = 0; a < r.length; a++) if (s == r[a]) continue t;
            n += (0 < n.length ? " ": "") + s
        }
        return n
    }
    function Dt() {
        var t = {},
        e = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(e, n) {
            J(e, "controller"),
            b(e) ? d(t, e) : t[e] = n
        },
        this.$get = ["$injector", "$window",
        function(n, r) {
            return function(o, s) {
                var a, u, l;
                if ($(o) && (a = o.match(e), u = a[1], l = a[3], o = t.hasOwnProperty(u) ? t[u] : K(s.$scope, u, !0) || K(r, u, !0), Y(o, u, !0)), a = n.instantiate(o, s), l) {
                    if (!s || "object" != typeof s.$scope) throw i("$controller")("noscp", u || o.name, l);
                    s.$scope[l] = a
                }
                return a
            }
        }]
    }
    function Mt() {
        this.$get = ["$window",
        function(t) {
            return Xe(t.document)
        }]
    }
    function Pt() {
        this.$get = ["$log",
        function(t) {
            return function(e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }
    function Lt(t) {
        var e, n, i, r = {};
        return t ? (o(t.split("\n"),
        function(t) {
            i = t.indexOf(":"),
            e = Qe(ln(t.substr(0, i))),
            n = ln(t.substr(i + 1)),
            e && (r[e] = r[e] ? r[e] + ", " + n: n)
        }), r) : r
    }
    function Ot(t) {
        var e = b(t) ? t: n;
        return function(n) {
            return e || (e = Lt(t)),
            n ? e[Qe(n)] || null: e
        }
    }
    function Ft(t, e, n) {
        return C(n) ? n(t, e) : (o(n,
        function(n) {
            t = n(t, e)
        }), t)
    }
    function It() {
        var t = /^\s*(\[|\{[^\{])/,
        e = /[\}\]]\s*$/,
        i = /^\)\]\}',?\n/,
        r = {
            "Content-Type": "application/json;charset=utf-8"
        },
        s = this.defaults = {
            transformResponse: [function(n) {
                return $(n) && (n = n.replace(i, ""), t.test(n) && e.test(n) && (n = F(n))),
                n
            }],
            transformRequest: [function(t) {
                return b(t) && "[object File]" !== rn.call(t) && "[object Blob]" !== rn.call(t) ? O(t) : t
            }],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: D(r),
                put: D(r),
                patch: D(r)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        },
        u = this.interceptors = [],
        l = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
        function(t, e, i, r, c, h) {
            function f(t) {
                function e(t) {
                    var e = d({},
                    t, {
                        data: Ft(t.data, t.headers, i.transformResponse)
                    });
                    return 200 <= t.status && 300 > t.status ? e: c.reject(e)
                }
                var i = {
                    method: "get",
                    transformRequest: s.transformRequest,
                    transformResponse: s.transformResponse
                },
                r = function(t) {
                    var e, n, i = s.headers,
                    r = d({},
                    t.headers),
                    i = d({},
                    i.common, i[Qe(t.method)]);
                    t: for (e in i) {
                        t = Qe(e);
                        for (n in r) if (Qe(n) === t) continue t;
                        r[e] = i[e]
                    }
                    return function(t) {
                        var e;
                        o(t,
                        function(n, i) {
                            C(n) && (e = n(), null != e ? t[i] = e: delete t[i])
                        })
                    } (r),
                    r
                } (t);
                d(i, t),
                i.headers = r,
                i.method = tn(i.method);
                var a = [function(t) {
                    r = t.headers;
                    var n = Ft(t.data, Ot(r), t.transformRequest);
                    return g(n) && o(r,
                    function(t, e) {
                        "content-type" === Qe(e) && delete r[e]
                    }),
                    g(t.withCredentials) && !g(s.withCredentials) && (t.withCredentials = s.withCredentials),
                    p(t, n, r).then(e, e)
                },
                n],
                u = c.when(i);
                for (o(x,
                function(t) { (t.request || t.requestError) && a.unshift(t.request, t.requestError),
                    (t.response || t.responseError) && a.push(t.response, t.responseError)
                }); a.length;) {
                    t = a.shift();
                    var l = a.shift(),
                    u = u.then(t, l)
                }
                return u.success = function(t) {
                    return u.then(function(e) {
                        t(e.data, e.status, e.headers, i)
                    }),
                    u
                },
                u.error = function(t) {
                    return u.then(null,
                    function(e) {
                        t(e.data, e.status, e.headers, i)
                    }),
                    u
                },
                u
            }
            function p(i, o, a) {
                function u(t, e, n, i) {
                    h && (200 <= t && 300 > t ? h.put(w, [t, e, Lt(n), i]) : h.remove(w)),
                    l(e, t, n, i),
                    r.$$phase || r.$apply()
                }
                function l(t, e, n, r) {
                    e = Math.max(e, 0),
                    (200 <= e && 300 > e ? $.resolve: $.reject)({
                        data: t,
                        status: e,
                        headers: Ot(n),
                        config: i,
                        statusText: r
                    })
                }
                function d() {
                    var t = j(f.pendingRequests, i); - 1 !== t && f.pendingRequests.splice(t, 1)
                }
                var h, p, $ = c.defer(),
                x = $.promise,
                w = m(i.url, i.params);
                if (f.pendingRequests.push(i), x.then(d, d), !i.cache && !s.cache || !1 === i.cache || "GET" !== i.method && "JSONP" !== i.method || (h = b(i.cache) ? i.cache: b(s.cache) ? s.cache: v), h) if (p = h.get(w), y(p)) {
                    if (p && C(p.then)) return p.then(d, d),
                    p;
                    un(p) ? l(p[1], p[0], D(p[2]), p[3]) : l(p, 200, {},
                    "OK")
                } else h.put(w, x);
                return g(p) && ((p = Se(i.url) ? e.cookies()[i.xsrfCookieName || s.xsrfCookieName] : n) && (a[i.xsrfHeaderName || s.xsrfHeaderName] = p), t(i.method, w, o, u, a, i.timeout, i.withCredentials, i.responseType)),
                x
            }
            function m(t, e) {
                if (!e) return t;
                var n = [];
                return a(e,
                function(t, e) {
                    null === t || g(t) || (un(t) || (t = [t]), o(t,
                    function(t) {
                        b(t) && (t = w(t) ? t.toISOString() : O(t)),
                        n.push(z(e) + "=" + z(t))
                    }))
                }),
                0 < n.length && (t += ( - 1 == t.indexOf("?") ? "?": "&") + n.join("&")),
                t
            }
            var v = i("$http"),
            x = [];
            return o(u,
            function(t) {
                x.unshift($(t) ? h.get(t) : h.invoke(t))
            }),
            o(l,
            function(t, e) {
                var n = $(t) ? h.get(t) : h.invoke(t);
                x.splice(e, 0, {
                    response: function(t) {
                        return n(c.when(t))
                    },
                    responseError: function(t) {
                        return n(c.reject(t))
                    }
                })
            }),
            f.pendingRequests = [],
            function(t) {
                o(arguments,
                function(t) {
                    f[t] = function(e, n) {
                        return f(d(n || {},
                        {
                            method: t,
                            url: e
                        }))
                    }
                })
            } ("get", "delete", "head", "jsonp"),
            function(t) {
                o(arguments,
                function(t) {
                    f[t] = function(e, n, i) {
                        return f(d(i || {},
                        {
                            method: t,
                            url: e,
                            data: n
                        }))
                    }
                })
            } ("post", "put", "patch"),
            f.defaults = s,
            f
        }]
    }
    function Ht(e) {
        if (8 >= Ue && (!e.match(/^(get|post|head|put|delete|options)$/i) || !t.XMLHttpRequest)) return new t.ActiveXObject("Microsoft.XMLHTTP");
        if (t.XMLHttpRequest) return new t.XMLHttpRequest;
        throw i("$httpBackend")("noxhr")
    }
    function _t() {
        this.$get = ["$browser", "$window", "$document",
        function(t, e, n) {
            return qt(t, Ht, t.defer, e.angular.callbacks, n[0])
        }]
    }
    function qt(t, e, n, i, r) {
        function s(t, e, n) {
            var o = r.createElement("script"),
            s = null;
            return o.type = "text/javascript",
            o.src = t,
            o.async = !0,
            s = function(t) {
                vn(o, "load", s),
                vn(o, "error", s),
                r.body.removeChild(o),
                o = null;
                var a = -1,
                u = "unknown";
                t && ("load" !== t.type || i[e].called || (t = {
                    type: "error"
                }), u = t.type, a = "error" === t.type ? 404 : 200),
                n && n(a, u)
            },
            mn(o, "load", s),
            mn(o, "error", s),
            8 >= Ue && (o.onreadystatechange = function() {
                $(o.readyState) && /loaded|complete/.test(o.readyState) && (o.onreadystatechange = null, s({
                    type: "load"
                }))
            }),
            r.body.appendChild(o),
            s
        }
        var a = -1;
        return function(r, u, l, c, d, h, f, m) {
            function v() {
                b = a,
                x && x(),
                w && w.abort()
            }
            function g(e, i, r, o, s) {
                S && n.cancel(S),
                x = w = null,
                0 === i && (i = r ? 200 : "file" == Te(u).protocol ? 404 : 0),
                e(1223 === i ? 204 : i, r, o, s || ""),
                t.$$completeOutstandingRequest(p)
            }
            var b;
            if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Qe(r)) {
                var $ = "_" + (i.counter++).toString(36);
                i[$] = function(t) {
                    i[$].data = t,
                    i[$].called = !0
                };
                var x = s(u.replace("JSON_CALLBACK", "angular.callbacks." + $), $,
                function(t, e) {
                    g(c, t, i[$].data, "", e),
                    i[$] = p
                })
            } else {
                var w = e(r);
                if (w.open(r, u, !0), o(d,
                function(t, e) {
                    y(t) && w.setRequestHeader(e, t)
                }), w.onreadystatechange = function() {
                    if (w && 4 == w.readyState) {
                        var t = null,
                        e = null,
                        n = "";
                        b !== a && (t = w.getAllResponseHeaders(), e = "response" in w ? w.response: w.responseText),
                        b === a && 10 > Ue || (n = w.statusText),
                        g(c, b || w.status, e, t, n)
                    }
                },
                f && (w.withCredentials = !0), m) try {
                    w.responseType = m
                } catch(T) {
                    if ("json" !== m) throw T
                }
                w.send(l || null)
            }
            if (0 < h) var S = n(v, h);
            else h && C(h.then) && h.then(v)
        }
    }
    function Bt() {
        var t = "{{",
        e = "}}";
        this.startSymbol = function(e) {
            return e ? (t = e, this) : t
        },
        this.endSymbol = function(t) {
            return t ? (e = t, this) : e
        },
        this.$get = ["$parse", "$exceptionHandler", "$sce",
        function(n, i, r) {
            function o(o, u, l) {
                for (var c, d, h = 0,
                f = [], p = o.length, m = !1, v = []; h < p;) - 1 != (c = o.indexOf(t, h)) && -1 != (d = o.indexOf(e, c + s)) ? (h != c && f.push(o.substring(h, c)), f.push(h = n(m = o.substring(c + s, d))), h.exp = m, h = d + a, m = !0) : (h != p && f.push(o.substring(h)), h = p);
                if ((p = f.length) || (f.push(""), p = 1), l && 1 < f.length) throw In("noconcat", o);
                if (!u || m) return v.length = p,
                h = function(t) {
                    try {
                        for (var e, n = 0,
                        s = p; n < s; n++) {
                            if ("function" == typeof(e = f[n])) if (e = e(t), e = l ? r.getTrusted(l, e) : r.valueOf(e), null == e) e = "";
                            else switch (typeof e) {
                            case "string":
                                break;
                            case "number":
                                e = "" + e;
                                break;
                            default:
                                e = O(e)
                            }
                            v[n] = e
                        }
                        return v.join("")
                    } catch(a) {
                        t = In("interr", o, a.toString()),
                        i(t)
                    }
                },
                h.exp = o,
                h.parts = f,
                h
            }
            var s = t.length,
            a = e.length;
            return o.startSymbol = function() {
                return t
            },
            o.endSymbol = function() {
                return e
            },
            o
        }]
    }
    function Rt() {
        this.$get = ["$rootScope", "$window", "$q",
        function(t, e, n) {
            function i(i, o, s, a) {
                var u = e.setInterval,
                l = e.clearInterval,
                c = n.defer(),
                d = c.promise,
                h = 0,
                f = y(a) && !a;
                return s = y(s) ? s: 0,
                d.then(null, null, i),
                d.$$intervalId = u(function() {
                    c.notify(h++),
                    0 < s && h >= s && (c.resolve(h), l(d.$$intervalId), delete r[d.$$intervalId]),
                    f || t.$apply()
                },
                o),
                r[d.$$intervalId] = c,
                d
            }
            var r = {};
            return i.cancel = function(t) {
                return !! (t && t.$$intervalId in r) && (r[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete r[t.$$intervalId], !0)
            },
            i
        }]
    }
    function zt() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    },
                    {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(t) {
                    return 1 === t ? "one": "other"
                }
            }
        }
    }
    function Vt(t) {
        t = t.split("/");
        for (var e = t.length; e--;) t[e] = R(t[e]);
        return t.join("/")
    }
    function Wt(t, e, n) {
        t = Te(t, n),
        e.$$protocol = t.protocol,
        e.$$host = t.hostname,
        e.$$port = h(t.port) || _n[t.protocol] || null
    }
    function Ut(t, e, n) {
        var i = "/" !== t.charAt(0);
        i && (t = "/" + t),
        t = Te(t, n),
        e.$$path = decodeURIComponent(i && "/" === t.pathname.charAt(0) ? t.pathname.substring(1) : t.pathname),
        e.$$search = q(t.search),
        e.$$hash = decodeURIComponent(t.hash),
        e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }
    function Xt(t, e) {
        if (0 === e.indexOf(t)) return e.substr(t.length)
    }
    function Yt(t) {
        var e = t.indexOf("#");
        return - 1 == e ? t: t.substr(0, e)
    }
    function Jt(t) {
        return t.replace(/(#.+)|#$/, "$1")
    }
    function Kt(t) {
        return t.substr(0, Yt(t).lastIndexOf("/") + 1)
    }
    function Gt(t, e) {
        this.$$html5 = !0,
        e = e || "";
        var i = Kt(t);
        Wt(t, this, t),
        this.$$parse = function(e) {
            var n = Xt(i, e);
            if (!$(n)) throw qn("ipthprfx", e, i);
            Ut(n, this, t),
            this.$$path || (this.$$path = "/"),
            this.$$compose()
        },
        this.$$compose = function() {
            var t = B(this.$$search),
            e = this.$$hash ? "#" + R(this.$$hash) : "";
            this.$$url = Vt(this.$$path) + (t ? "?" + t: "") + e,
            this.$$absUrl = i + this.$$url.substr(1)
        },
        this.$$parseLinkUrl = function(r, o) {
            var s, a;
            return (s = Xt(t, r)) !== n ? (a = s, a = (s = Xt(e, s)) !== n ? i + (Xt("/", s) || s) : t + a) : (s = Xt(i, r)) !== n ? a = i + s: i == r + "/" && (a = i),
            a && this.$$parse(a),
            !!a
        }
    }
    function Qt(t, e) {
        var n = Kt(t);
        Wt(t, this, t),
        this.$$parse = function(i) {
            var r = Xt(t, i) || Xt(n, i),
            r = "#" == r.charAt(0) ? Xt(e, r) : this.$$html5 ? r: "";
            if (!$(r)) throw qn("ihshprfx", i, e);
            Ut(r, this, t),
            i = this.$$path;
            var o = /^\/[A-Z]:(\/.*)/;
            0 === r.indexOf(t) && (r = r.replace(t, "")),
            o.exec(r) || (i = (r = o.exec(i)) ? r[1] : i),
            this.$$path = i,
            this.$$compose()
        },
        this.$$compose = function() {
            var n = B(this.$$search),
            i = this.$$hash ? "#" + R(this.$$hash) : "";
            this.$$url = Vt(this.$$path) + (n ? "?" + n: "") + i,
            this.$$absUrl = t + (this.$$url ? e + this.$$url: "")
        },
        this.$$parseLinkUrl = function(e, n) {
            return Yt(t) == Yt(e) && (this.$$parse(e), !0)
        }
    }
    function Zt(t, e) {
        this.$$html5 = !0,
        Qt.apply(this, arguments);
        var n = Kt(t);
        this.$$parseLinkUrl = function(i, r) {
            var o, s;
            return t == Yt(i) ? o = i: (s = Xt(n, i)) ? o = t + e + s: n === i + "/" && (o = n),
            o && this.$$parse(o),
            !!o
        },
        this.$$compose = function() {
            var n = B(this.$$search),
            i = this.$$hash ? "#" + R(this.$$hash) : "";
            this.$$url = Vt(this.$$path) + (n ? "?" + n: "") + i,
            this.$$absUrl = t + e + this.$$url
        }
    }
    function te(t) {
        return function() {
            return this[t]
        }
    }
    function ee(t, e) {
        return function(n) {
            return g(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }
    function ne() {
        var e = "",
        n = !1;
        this.hashPrefix = function(t) {
            return y(t) ? (e = t, this) : e
        },
        this.html5Mode = function(t) {
            return y(t) ? (n = t, this) : n
        },
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement",
        function(i, r, o, s) {
            function a(t) {
                i.$broadcast("$locationChangeSuccess", u.absUrl(), t)
            }
            var u, l = r.baseHref(),
            c = r.url();
            n ? (l = c.substring(0, c.indexOf("/", c.indexOf("//") + 2)) + (l || "/"), o = o.history ? Gt: Zt) : (l = Yt(c), o = Qt),
            u = new o(l, "#" + e),
            u.$$parseLinkUrl(c, c);
            var d = /^\s*(javascript|mailto):/i;
            s.on("click",
            function(e) {
                if (!e.ctrlKey && !e.metaKey && 2 != e.which) {
                    for (var n = Xe(e.target);
                    "a" !== Qe(n[0].nodeName);) if (n[0] === s[0] || !(n = n.parent())[0]) return;
                    var o = n.prop("href"),
                    a = n.attr("href") || n.attr("xlink:href");
                    b(o) && "[object SVGAnimatedString]" === o.toString() && (o = Te(o.animVal).href),
                    d.test(o) || !o || n.attr("target") || e.isDefaultPrevented() || !u.$$parseLinkUrl(o, a) || (e.preventDefault(), u.absUrl() != r.url() && (i.$apply(), t.angular["ff-684208-preventDefault"] = !0))
                }
            }),
            u.absUrl() != c && r.url(u.absUrl(), !0),
            r.onUrlChange(function(t) {
                u.absUrl() != t && (i.$evalAsync(function() {
                    var e = u.absUrl();
                    u.$$parse(t),
                    i.$broadcast("$locationChangeStart", t, e).defaultPrevented ? (u.$$parse(e), r.url(e)) : a(e)
                }), i.$$phase || i.$digest())
            });
            var h = 0;
            return i.$watch(function() {
                var t = Jt(r.url()),
                e = Jt(u.absUrl()),
                n = u.$$replace;
                return h && t == e || (h++, i.$evalAsync(function() {
                    i.$broadcast("$locationChangeStart", u.absUrl(), t).defaultPrevented ? u.$$parse(t) : (r.url(u.absUrl(), n), a(t))
                })),
                u.$$replace = !1,
                h
            }),
            u
        }]
    }
    function ie() {
        var t = !0,
        e = this;
        this.debugEnabled = function(e) {
            return y(e) ? (t = e, this) : t
        },
        this.$get = ["$window",
        function(n) {
            function i(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack: t.stack: t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)),
                t
            }
            function r(t) {
                var e = n.console || {},
                r = e[t] || e.log || p;
                t = !1;
                try {
                    t = !!r.apply
                } catch(s) {}
                return t ?
                function() {
                    var t = [];
                    return o(arguments,
                    function(e) {
                        t.push(i(e))
                    }),
                    r.apply(e, t)
                }: function(t, e) {
                    r(t, null == e ? "": e)
                }
            }
            return {
                log: r("log"),
                info: r("info"),
                warn: r("warn"),
                error: r("error"),
                debug: function() {
                    var n = r("debug");
                    return function() {
                        t && n.apply(e, arguments)
                    }
                } ()
            }
        }]
    }
    function re(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw Rn("isecfld", e);
        return t
    }
    function oe(t, e) {
        if (t += "", !$(t)) throw Rn("iseccst", e);
        return t
    }
    function se(t, e) {
        if (t) {
            if (t.constructor === t) throw Rn("isecfn", e);
            if (t.document && t.location && t.alert && t.setInterval) throw Rn("isecwindow", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw Rn("isecdom", e);
            if (t === Object) throw Rn("isecobj", e)
        }
        return t
    }
    function ae(t, e, i, r, o) {
        se(t, r),
        o = o || {},
        e = e.split(".");
        for (var s, a = 0; 1 < e.length; a++) {
            s = re(e.shift(), r);
            var u = se(t[s], r);
            u || (u = {},
            t[s] = u),
            t = u,
            t.then && o.unwrapPromises && (Bn(r), "$$v" in t ||
            function(t) {
                t.then(function(e) {
                    t.$$v = e
                })
            } (t), t.$$v === n && (t.$$v = {}), t = t.$$v)
        }
        return s = re(e.shift(), r),
        se(t[s], r),
        t[s] = i
    }
    function ue(t) {
        return "constructor" == t
    }
    function le(t, e, i, r, o, s, a) {
        re(t, s),
        re(e, s),
        re(i, s),
        re(r, s),
        re(o, s);
        var u = function(t) {
            return se(t, s)
        },
        l = a.expensiveChecks,
        c = l || ue(t) ? u: m,
        d = l || ue(e) ? u: m,
        h = l || ue(i) ? u: m,
        f = l || ue(r) ? u: m,
        p = l || ue(o) ? u: m;
        return a.unwrapPromises ?
        function(a, u) {
            var l, m = u && u.hasOwnProperty(t) ? u: a;
            return null == m ? m: ((m = c(m[t])) && m.then && (Bn(s), "$$v" in m || (l = m, l.$$v = n, l.then(function(t) {
                l.$$v = c(t)
            })), m = c(m.$$v)), e ? null == m ? n: ((m = d(m[e])) && m.then && (Bn(s), "$$v" in m || (l = m, l.$$v = n, l.then(function(t) {
                l.$$v = d(t)
            })), m = d(m.$$v)), i ? null == m ? n: ((m = h(m[i])) && m.then && (Bn(s), "$$v" in m || (l = m, l.$$v = n, l.then(function(t) {
                l.$$v = h(t)
            })), m = h(m.$$v)), r ? null == m ? n: ((m = f(m[r])) && m.then && (Bn(s), "$$v" in m || (l = m, l.$$v = n, l.then(function(t) {
                l.$$v = f(t)
            })), m = f(m.$$v)), o ? null == m ? n: ((m = p(m[o])) && m.then && (Bn(s), "$$v" in m || (l = m, l.$$v = n, l.then(function(t) {
                l.$$v = p(t)
            })), m = p(m.$$v)), m) : m) : m) : m) : m)
        }: function(s, a) {
            var u = a && a.hasOwnProperty(t) ? a: s;
            return null == u ? u: (u = c(u[t]), e ? null == u ? n: (u = d(u[e]), i ? null == u ? n: (u = h(u[i]), r ? null == u ? n: (u = f(u[r]), o ? null == u ? n: u = p(u[o]) : u) : u) : u) : u)
        }
    }
    function ce(t, e) {
        return function(n, i) {
            return t(n, i, Bn, se, e)
        }
    }
    function de(t, e, i) {
        var r = e.expensiveChecks,
        s = r ? Qn: Gn;
        if (s.hasOwnProperty(t)) return s[t];
        var a, u = t.split("."),
        l = u.length;
        if (e.csp) a = 6 > l ? le(u[0], u[1], u[2], u[3], u[4], i, e) : function(t, r) {
            var o, s = 0;
            do o = le(u[s++], u[s++], u[s++], u[s++], u[s++], i, e)(t, r),
            r = n,
            t = o;
            while (s < l);
            return o
        };
        else {
            var c = "var p;\n";
            r && (c += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var d = r;
            o(u,
            function(t, n) {
                re(t, i);
                var o = (n ? "s": '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + '["' + t + '"]',
                s = r || ue(t);
                s && (o = "eso(" + o + ", fe)", d = !0),
                c += "if(s == null) return undefined;\ns=" + o + ";\n",
                e.unwrapPromises && (c += 'if (s && s.then) {\n pw("' + i.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (s ? "eso(v)": "v") + ";});\n}\n s=" + (s ? "eso(s.$$v)": "s.$$v") + "\n}\n")
            }),
            c += "return s;",
            a = new Function("s", "l", "pw", "eso", "fe", c),
            a.toString = v(c),
            (d || e.unwrapPromises) && (a = ce(a, i))
        }
        return "hasOwnProperty" !== t && (s[t] = a),
        a
    }
    function he() {
        var t = {},
        e = {},
        n = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0,
            expensiveChecks: !1
        };
        this.unwrapPromises = function(t) {
            return y(t) ? (n.unwrapPromises = !!t, this) : n.unwrapPromises
        },
        this.logPromiseWarnings = function(t) {
            return y(t) ? (n.logPromiseWarnings = t, this) : n.logPromiseWarnings
        },
        this.$get = ["$filter", "$sniffer", "$log",
        function(i, r, o) {
            n.csp = r.csp;
            var s = {
                csp: n.csp,
                unwrapPromises: n.unwrapPromises,
                logPromiseWarnings: n.logPromiseWarnings,
                expensiveChecks: !0
            };
            return Bn = function(t) {
                n.logPromiseWarnings && !zn.hasOwnProperty(t) && (zn[t] = !0, o.warn("[$parse] Promise found in the expression `" + t + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            },
            function(r, o) {
                var a;
                switch (typeof r) {
                case "string":
                    var u = o ? e: t;
                    if (u.hasOwnProperty(r)) return u[r];
                    a = o ? s: n;
                    var l = new Jn(a);
                    return a = new Kn(l, i, a).parse(r),
                    "hasOwnProperty" !== r && (u[r] = a),
                    a;
                case "function":
                    return r;
                default:
                    return p
                }
            }
        }]
    }
    function fe() {
        this.$get = ["$rootScope", "$exceptionHandler",
        function(t, e) {
            return pe(function(e) {
                t.$evalAsync(e)
            },
            e)
        }]
    }
    function pe(t, e) {
        function i(t) {
            return t
        }
        function r(t) {
            return u(t)
        }
        var s = function() {
            var o, u, c = [];
            return u = {
                resolve: function(e) {
                    if (c) {
                        var i = c;
                        c = n,
                        o = a(e),
                        i.length && t(function() {
                            for (var t, e = 0,
                            n = i.length; e < n; e++) t = i[e],
                            o.then(t[0], t[1], t[2])
                        })
                    }
                },
                reject: function(t) {
                    u.resolve(l(t))
                },
                notify: function(e) {
                    if (c) {
                        var n = c;
                        c.length && t(function() {
                            for (var t, i = 0,
                            r = n.length; i < r; i++) t = n[i],
                            t[2](e)
                        })
                    }
                },
                promise: {
                    then: function(t, n, a) {
                        var u = s(),
                        l = function(n) {
                            try {
                                u.resolve((C(t) ? t: i)(n))
                            } catch(r) {
                                u.reject(r),
                                e(r)
                            }
                        },
                        d = function(t) {
                            try {
                                u.resolve((C(n) ? n: r)(t))
                            } catch(i) {
                                u.reject(i),
                                e(i)
                            }
                        },
                        h = function(t) {
                            try {
                                u.notify((C(a) ? a: i)(t))
                            } catch(n) {
                                e(n)
                            }
                        };
                        return c ? c.push([l, d, h]) : o.then(l, d, h),
                        u.promise
                    },
                    "catch": function(t) {
                        return this.then(null, t)
                    },
                    "finally": function(t) {
                        function e(t, e) {
                            var n = s();
                            return e ? n.resolve(t) : n.reject(t),
                            n.promise
                        }
                        function n(n, r) {
                            var o = null;
                            try {
                                o = (t || i)()
                            } catch(s) {
                                return e(s, !1)
                            }
                            return o && C(o.then) ? o.then(function() {
                                return e(n, r)
                            },
                            function(t) {
                                return e(t, !1)
                            }) : e(n, r)
                        }
                        return this.then(function(t) {
                            return n(t, !0)
                        },
                        function(t) {
                            return n(t, !1)
                        })
                    }
                }
            }
        },
        a = function(e) {
            return e && C(e.then) ? e: {
                then: function(n) {
                    var i = s();
                    return t(function() {
                        i.resolve(n(e))
                    }),
                    i.promise
                }
            }
        },
        u = function(t) {
            var e = s();
            return e.reject(t),
            e.promise
        },
        l = function(n) {
            return {
                then: function(i, o) {
                    var a = s();
                    return t(function() {
                        try {
                            a.resolve((C(o) ? o: r)(n))
                        } catch(t) {
                            a.reject(t),
                            e(t)
                        }
                    }),
                    a.promise
                }
            }
        };
        return {
            defer: s,
            reject: u,
            when: function(n, o, l, c) {
                var d, h = s(),
                f = function(t) {
                    try {
                        return (C(o) ? o: i)(t)
                    } catch(n) {
                        return e(n),
                        u(n)
                    }
                },
                p = function(t) {
                    try {
                        return (C(l) ? l: r)(t)
                    } catch(n) {
                        return e(n),
                        u(n)
                    }
                },
                m = function(t) {
                    try {
                        return (C(c) ? c: i)(t)
                    } catch(n) {
                        e(n)
                    }
                };
                return t(function() {
                    a(n).then(function(t) {
                        d || (d = !0, h.resolve(a(t).then(f, p, m)))
                    },
                    function(t) {
                        d || (d = !0, h.resolve(p(t)))
                    },
                    function(t) {
                        d || h.notify(m(t))
                    })
                }),
                h.promise
            },
            all: function(t) {
                var e = s(),
                n = 0,
                i = un(t) ? [] : {};
                return o(t,
                function(t, r) {
                    n++,
                    a(t).then(function(t) {
                        i.hasOwnProperty(r) || (i[r] = t, --n || e.resolve(i))
                    },
                    function(t) {
                        i.hasOwnProperty(r) || e.reject(t)
                    })
                }),
                0 === n && e.resolve(i),
                e.promise
            }
        }
    }
    function me() {
        this.$get = ["$window", "$timeout",
        function(t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame,
            i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
            r = !!n,
            o = r ?
            function(t) {
                var e = n(t);
                return function() {
                    i(e)
                }
            }: function(t) {
                var n = e(t, 16.66, !1);
                return function() {
                    e.cancel(n)
                }
            };
            return o.supported = r,
            o
        }]
    }
    function ve() {
        var t = 10,
        e = i("$rootScope"),
        n = null;
        this.digestTtl = function(e) {
            return arguments.length && (t = e),
            t
        },
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
        function(i, s, a, u) {
            function c() {
                this.$id = l(),
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null,
                this["this"] = this.$root = this,
                this.$$destroyed = !1,
                this.$$asyncQueue = [],
                this.$$postDigestQueue = [],
                this.$$listeners = {},
                this.$$listenerCount = {},
                this.$$isolateBindings = {}
            }
            function d(t) {
                if (v.$$phase) throw e("inprog", v.$$phase);
                v.$$phase = t
            }
            function h(t, e) {
                var n = a(t);
                return Y(n, e),
                n
            }
            function f(t, e, n) {
                do t.$$listenerCount[n] -= e,
                0 === t.$$listenerCount[n] && delete t.$$listenerCount[n];
                while (t = t.$parent)
            }
            function m() {}
            c.prototype = {
                constructor: c,
                $new: function(t) {
                    return t ? (t = new c, t.$root = this.$root, t.$$asyncQueue = this.$$asyncQueue, t.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null,
                        this.$$listeners = {},
                        this.$$listenerCount = {},
                        this.$id = l(),
                        this.$$childScopeClass = null
                    },
                    this.$$childScopeClass.prototype = this), t = new this.$$childScopeClass),
                    t["this"] = t,
                    t.$parent = this,
                    t.$$prevSibling = this.$$childTail,
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = t: this.$$childHead = this.$$childTail = t,
                    t
                },
                $watch: function(t, e, i) {
                    var r = h(t, "watch"),
                    o = this.$$watchers,
                    s = {
                        fn: e,
                        last: m,
                        get: r,
                        exp: t,
                        eq: !!i
                    };
                    if (n = null, !C(e)) {
                        var a = h(e || p, "listener");
                        s.fn = function(t, e, n) {
                            a(n)
                        }
                    }
                    if ("string" == typeof t && r.constant) {
                        var u = s.fn;
                        s.fn = function(t, e, n) {
                            u.call(this, t, e, n),
                            A(o, s)
                        }
                    }
                    return o || (o = this.$$watchers = []),
                    o.unshift(s),
                    function() {
                        A(o, s),
                        n = null
                    }
                },
                $watchCollection: function(t, e) {
                    var n, i, o, s = this,
                    u = 1 < e.length,
                    l = 0,
                    c = a(t),
                    d = [],
                    h = {},
                    f = !0,
                    p = 0;
                    return this.$watch(function() {
                        n = c(s);
                        var t, e, o;
                        if (b(n)) if (r(n)) for (i !== d && (i = d, p = i.length = 0, l++), t = n.length, p !== t && (l++, i.length = p = t), e = 0; e < t; e++) o = i[e] !== i[e] && n[e] !== n[e],
                        o || i[e] === n[e] || (l++, i[e] = n[e]);
                        else {
                            i !== h && (i = h = {},
                            p = 0, l++),
                            t = 0;
                            for (e in n) n.hasOwnProperty(e) && (t++, i.hasOwnProperty(e) ? (o = i[e] !== i[e] && n[e] !== n[e], o || i[e] === n[e] || (l++, i[e] = n[e])) : (p++, i[e] = n[e], l++));
                            if (p > t) for (e in l++, i) i.hasOwnProperty(e) && !n.hasOwnProperty(e) && (p--, delete i[e])
                        } else i !== n && (i = n, l++);
                        return l
                    },
                    function() {
                        if (f ? (f = !1, e(n, n, s)) : e(n, o, s), u) if (b(n)) if (r(n)) {
                            o = Array(n.length);
                            for (var t = 0; t < n.length; t++) o[t] = n[t]
                        } else for (t in o = {},
                        n) Ze.call(n, t) && (o[t] = n[t]);
                        else o = n
                    })
                },
                $digest: function() {
                    var i, r, o, a, l, c, h, f, p, g, y = this.$$asyncQueue,
                    b = this.$$postDigestQueue,
                    $ = t,
                    x = [];
                    d("$digest"),
                    u.$$checkUrlChange(),
                    n = null;
                    do {
                        for (c = !1, h = this; y.length;) {
                            try {
                                g = y.shift(),
                                g.scope.$eval(g.expression)
                            } catch(w) {
                                v.$$phase = null,
                                s(w)
                            }
                            n = null
                        }
                        t: do {
                            if (a = h.$$watchers) for (l = a.length; l--;) try {
                                if (i = a[l]) if ((r = i.get(h)) === (o = i.last) || (i.eq ? M(r, o) : "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o))) {
                                    if (i === n) {
                                        c = !1;
                                        break t
                                    }
                                } else c = !0,
                                n = i,
                                i.last = i.eq ? N(r, null) : r,
                                i.fn(r, o === m ? r: o, h),
                                5 > $ && (f = 4 - $, x[f] || (x[f] = []), p = C(i.exp) ? "fn: " + (i.exp.name || i.exp.toString()) : i.exp, p += "; newVal: " + O(r) + "; oldVal: " + O(o), x[f].push(p))
                            } catch(T) {
                                v.$$phase = null,
                                s(T)
                            }
                            if (! (a = h.$$childHead || h !== this && h.$$nextSibling)) for (; h !== this && !(a = h.$$nextSibling);) h = h.$parent
                        } while ( h = a );
                        if ((c || y.length) && !$--) throw v.$$phase = null, e("infdig", t, O(x))
                    } while ( c || y . length );
                    for (v.$$phase = null; b.length;) try {
                        b.shift()()
                    } catch(S) {
                        s(S)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        this.$broadcast("$destroy"),
                        this.$$destroyed = !0,
                        this !== v && (o(this.$$listenerCount, P(null, f, this)), t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {},
                        this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = p, this.$on = this.$watch = function() {
                            return p
                        })
                    }
                },
                $eval: function(t, e) {
                    return a(t)(this, e)
                },
                $evalAsync: function(t) {
                    v.$$phase || v.$$asyncQueue.length || u.defer(function() {
                        v.$$asyncQueue.length && v.$digest()
                    }),
                    this.$$asyncQueue.push({
                        scope: this,
                        expression: t
                    })
                },
                $$postDigest: function(t) {
                    this.$$postDigestQueue.push(t)
                },
                $apply: function(t) {
                    try {
                        return d("$apply"),
                        this.$eval(t)
                    } catch(e) {
                        s(e)
                    } finally {
                        v.$$phase = null;
                        try {
                            v.$digest()
                        } catch(n) {
                            throw s(n),
                            n
                        }
                    }
                },
                $on: function(t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []),
                    n.push(e);
                    var i = this;
                    do i.$$listenerCount[t] || (i.$$listenerCount[t] = 0),
                    i.$$listenerCount[t]++;
                    while (i = i.$parent);
                    var r = this;
                    return function() {
                        var i = j(n, e); - 1 !== i && (n[i] = null, f(r, 1, t))
                    }
                },
                $emit: function(t, e) {
                    var n, i, r, o = [],
                    a = this,
                    u = !1,
                    l = {
                        name: t,
                        targetScope: a,
                        stopPropagation: function() {
                            u = !0
                        },
                        preventDefault: function() {
                            l.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    },
                    c = [l].concat(en.call(arguments, 1));
                    do {
                        for (n = a.$$listeners[t] || o, l.currentScope = a, i = 0, r = n.length; i < r; i++) if (n[i]) try {
                            n[i].apply(null, c)
                        } catch(d) {
                            s(d)
                        } else n.splice(i, 1), i--, r--;
                        if (u) break;
                        a = a.$parent
                    } while ( a );
                    return l
                },
                $broadcast: function(t, e) {
                    for (var n, i, r = this,
                    o = this,
                    a = {
                        name: t,
                        targetScope: this,
                        preventDefault: function() {
                            a.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    },
                    u = [a].concat(en.call(arguments, 1)); r = o;) {
                        for (a.currentScope = r, o = r.$$listeners[t] || [], n = 0, i = o.length; n < i; n++) if (o[n]) try {
                            o[n].apply(null, u)
                        } catch(l) {
                            s(l)
                        } else o.splice(n, 1),
                        n--,
                        i--;
                        if (! (o = r.$$listenerCount[t] && r.$$childHead || r !== this && r.$$nextSibling)) for (; r !== this && !(o = r.$$nextSibling);) r = r.$parent
                    }
                    return a
                }
            };
            var v = new c;
            return v
        }]
    }
    function ge() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/,
        e = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(e) {
            return y(e) ? (t = e, this) : t
        },
        this.imgSrcSanitizationWhitelist = function(t) {
            return y(t) ? (e = t, this) : e
        },
        this.$get = function() {
            return function(n, i) {
                var r, o = i ? e: t;
                return Ue && !(8 <= Ue) || (r = Te(n).href, "" === r || r.match(o)) ? n: "unsafe:" + r
            }
        }
    }
    function ye(t) {
        if ("self" === t) return t;
        if ($(t)) {
            if ( - 1 < t.indexOf("***")) throw Zn("iwcard", t);
            return t = t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"),
            RegExp("^" + t + "$")
        }
        if (T(t)) return RegExp("^" + t.source + "$");
        throw Zn("imatcher")
    }
    function be(t) {
        var e = [];
        return y(t) && o(t,
        function(t) {
            e.push(ye(t))
        }),
        e
    }
    function $e() {
        this.SCE_CONTEXTS = ti;
        var t = ["self"],
        e = [];
        this.resourceUrlWhitelist = function(e) {
            return arguments.length && (t = be(e)),
            t
        },
        this.resourceUrlBlacklist = function(t) {
            return arguments.length && (e = be(t)),
            e
        },
        this.$get = ["$injector",
        function(i) {
            function r(t) {
                var e = function(t) {
                    this.$$unwrapTrustedValue = function() {
                        return t
                    }
                };
                return t && (e.prototype = new t),
                e.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                },
                e.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                },
                e
            }
            var o = function(t) {
                throw Zn("unsafe")
            };
            i.has("$sanitize") && (o = i.get("$sanitize"));
            var s = r(),
            a = {};
            return a[ti.HTML] = r(s),
            a[ti.CSS] = r(s),
            a[ti.URL] = r(s),
            a[ti.JS] = r(s),
            a[ti.RESOURCE_URL] = r(a[ti.URL]),
            {
                trustAs: function(t, e) {
                    var i = a.hasOwnProperty(t) ? a[t] : null;
                    if (!i) throw Zn("icontext", t, e);
                    if (null === e || e === n || "" === e) return e;
                    if ("string" != typeof e) throw Zn("itype", t);
                    return new i(e)
                },
                getTrusted: function(i, r) {
                    if (null === r || r === n || "" === r) return r;
                    var s = a.hasOwnProperty(i) ? a[i] : null;
                    if (s && r instanceof s) return r.$$unwrapTrustedValue();
                    if (i === ti.RESOURCE_URL) {
                        var u, l, s = Te(r.toString()),
                        c = !1;
                        for (u = 0, l = t.length; u < l; u++) if ("self" === t[u] ? Se(s) : t[u].exec(s.href)) {
                            c = !0;
                            break
                        }
                        if (c) for (u = 0, l = e.length; u < l; u++) if ("self" === e[u] ? Se(s) : e[u].exec(s.href)) {
                            c = !1;
                            break
                        }
                        if (c) return r;
                        throw Zn("insecurl", r.toString())
                    }
                    if (i === ti.HTML) return o(r);
                    throw Zn("unsafe")
                },
                valueOf: function(t) {
                    return t instanceof s ? t.$$unwrapTrustedValue() : t
                }
            }
        }]
    }
    function xe() {
        var t = !0;
        this.enabled = function(e) {
            return arguments.length && (t = !!e),
            t
        },
        this.$get = ["$parse", "$sniffer", "$sceDelegate",
        function(e, n, i) {
            if (t && n.msie && 8 > n.msieDocumentMode) throw Zn("iequirks");
            var r = D(ti);
            r.isEnabled = function() {
                return t
            },
            r.trustAs = i.trustAs,
            r.getTrusted = i.getTrusted,
            r.valueOf = i.valueOf,
            t || (r.trustAs = r.getTrusted = function(t, e) {
                return e
            },
            r.valueOf = m),
            r.parseAs = function(t, n) {
                var i = e(n);
                return i.literal && i.constant ? i: function(e, n) {
                    return r.getTrusted(t, i(e, n))
                }
            };
            var s = r.parseAs,
            a = r.getTrusted,
            u = r.trustAs;
            return o(ti,
            function(t, e) {
                var n = Qe(e);
                r[tt("parse_as_" + n)] = function(e) {
                    return s(t, e)
                },
                r[tt("get_trusted_" + n)] = function(e) {
                    return a(t, e)
                },
                r[tt("trust_as_" + n)] = function(e) {
                    return u(t, e)
                }
            }),
            r
        }]
    }
    function we() {
        this.$get = ["$window", "$document",
        function(t, e) {
            var n, i = {},
            r = h((/android (\d+)/.exec(Qe((t.navigator || {}).userAgent)) || [])[1]),
            o = /Boxee/i.test((t.navigator || {}).userAgent),
            s = e[0] || {},
            a = s.documentMode,
            u = /^(Moz|webkit|O|ms)(?=[A-Z])/,
            l = s.body && s.body.style,
            c = !1,
            d = !1;
            if (l) {
                for (var f in l) if (c = u.exec(f)) {
                    n = c[0],
                    n = n.substr(0, 1).toUpperCase() + n.substr(1);
                    break
                }
                n || (n = "WebkitOpacity" in l && "webkit"),
                c = !!("transition" in l || n + "Transition" in l),
                d = !!("animation" in l || n + "Animation" in l),
                !r || c && d || (c = $(s.body.style.webkitTransition), d = $(s.body.style.webkitAnimation))
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > r || o),
                hashchange: "onhashchange" in t && (!a || 7 < a),
                hasEvent: function(t) {
                    if ("input" == t && 9 == Ue) return ! 1;
                    if (g(i[t])) {
                        var e = s.createElement("div");
                        i[t] = "on" + t in e
                    }
                    return i[t]
                },
                csp: cn(),
                vendorPrefix: n,
                transitions: c,
                animations: d,
                android: r,
                msie: Ue,
                msieDocumentMode: a
            }
        }]
    }
    function Ce() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler",
        function(t, e, n, i) {
            function r(r, s, a) {
                var u = n.defer(),
                l = u.promise,
                c = y(a) && !a;
                return s = e.defer(function() {
                    try {
                        u.resolve(r())
                    } catch(e) {
                        u.reject(e),
                        i(e)
                    } finally {
                        delete o[l.$$timeoutId]
                    }
                    c || t.$apply()
                },
                s),
                l.$$timeoutId = s,
                o[s] = u,
                l
            }
            var o = {};
            return r.cancel = function(t) {
                return !! (t && t.$$timeoutId in o) && (o[t.$$timeoutId].reject("canceled"), delete o[t.$$timeoutId], e.defer.cancel(t.$$timeoutId))
            },
            r
        }]
    }
    function Te(t, e) {
        var n = t;
        return Ue && (ei.setAttribute("href", n), n = ei.href),
        ei.setAttribute("href", n),
        {
            href: ei.href,
            protocol: ei.protocol ? ei.protocol.replace(/:$/, "") : "",
            host: ei.host,
            search: ei.search ? ei.search.replace(/^\?/, "") : "",
            hash: ei.hash ? ei.hash.replace(/^#/, "") : "",
            hostname: ei.hostname,
            port: ei.port,
            pathname: "/" === ei.pathname.charAt(0) ? ei.pathname: "/" + ei.pathname
        }
    }
    function Se(t) {
        return t = $(t) ? Te(t) : t,
        t.protocol === ni.protocol && t.host === ni.host
    }
    function ke() {
        this.$get = v(t)
    }
    function Ee(t) {
        function e(i, r) {
            if (b(i)) {
                var s = {};
                return o(i,
                function(t, n) {
                    s[n] = e(n, t)
                }),
                s
            }
            return t.factory(i + n, r)
        }
        var n = "Filter";
        this.register = e,
        this.$get = ["$injector",
        function(t) {
            return function(e) {
                return t.get(e + n)
            }
        }],
        e("currency", Ae),
        e("date", Oe),
        e("filter", je),
        e("json", Fe),
        e("limitTo", Ie),
        e("lowercase", ai),
        e("number", Ne),
        e("orderBy", He),
        e("uppercase", ui)
    }
    function je() {
        return function(t, e, n) {
            if (!un(t)) return t;
            var i = typeof n,
            r = [];
            r.check = function(t) {
                for (var e = 0; e < r.length; e++) if (!r[e](t)) return ! 1;
                return ! 0
            },
            "function" !== i && (n = "boolean" === i && n ?
            function(t, e) {
                return sn.equals(t, e)
            }: function(t, e) {
                if (t && e && "object" == typeof t && "object" == typeof e) {
                    for (var i in t) if ("$" !== i.charAt(0) && Ze.call(t, i) && n(t[i], e[i])) return ! 0;
                    return ! 1
                }
                return e = ("" + e).toLowerCase(),
                -1 < ("" + t).toLowerCase().indexOf(e)
            });
            var o = function(t, e) {
                if ("string" == typeof e && "!" === e.charAt(0)) return ! o(t, e.substr(1));
                switch (typeof t) {
                case "boolean":
                case "number":
                case "string":
                    return n(t, e);
                case "object":
                    switch (typeof e) {
                    case "object":
                        return n(t, e);
                    default:
                        for (var i in t) if ("$" !== i.charAt(0) && o(t[i], e)) return ! 0
                    }
                    return ! 1;
                case "array":
                    for (i = 0; i < t.length; i++) if (o(t[i], e)) return ! 0;
                    return ! 1;
                default:
                    return ! 1
                }
            };
            switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
                e = {
                    $: e
                };
            case "object":
                for (var s in e)(function(t) {
                    "undefined" != typeof e[t] && r.push(function(n) {
                        return o("$" == t ? n: n && n[t], e[t])
                    })
                })(s);
                break;
            case "function":
                r.push(e);
                break;
            default:
                return t
            }
            for (i = [], s = 0; s < t.length; s++) {
                var a = t[s];
                r.check(a) && i.push(a)
            }
            return i
        }
    }
    function Ae(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
            return g(n) && (n = e.CURRENCY_SYM),
            De(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, 2).replace(/\u00A4/g, n)
        }
    }
    function Ne(t) {
        var e = t.NUMBER_FORMATS;
        return function(t, n) {
            return De(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }
    function De(t, e, n, i, r) {
        if (null == t || !isFinite(t) || b(t)) return "";
        var o = 0 > t;
        t = Math.abs(t);
        var s = t + "",
        a = "",
        u = [],
        l = !1;
        if ( - 1 !== s.indexOf("e")) {
            var c = s.match(/([\d\.]+)e(-?)(\d+)/);
            c && "-" == c[2] && c[3] > r + 1 ? (s = "0", t = 0) : (a = s, l = !0)
        }
        if (l) 0 < r && -1 < t && 1 > t && (a = t.toFixed(r));
        else {
            s = (s.split(ii)[1] || "").length,
            g(r) && (r = Math.min(Math.max(e.minFrac, s), e.maxFrac)),
            t = +(Math.round( + (t.toString() + "e" + r)).toString() + "e" + -r),
            0 === t && (o = !1),
            t = ("" + t).split(ii),
            s = t[0],
            t = t[1] || "";
            var c = 0,
            d = e.lgSize,
            h = e.gSize;
            if (s.length >= d + h) for (c = s.length - d, l = 0; l < c; l++) 0 === (c - l) % h && 0 !== l && (a += n),
            a += s.charAt(l);
            for (l = c; l < s.length; l++) 0 === (s.length - l) % d && 0 !== l && (a += n),
            a += s.charAt(l);
            for (; t.length < r;) t += "0";
            r && "0" !== r && (a += i + t.substr(0, r))
        }
        return u.push(o ? e.negPre: e.posPre),
        u.push(a),
        u.push(o ? e.negSuf: e.posSuf),
        u.join("")
    }
    function Me(t, e, n) {
        var i = "";
        for (0 > t && (i = "-", t = -t), t = "" + t; t.length < e;) t = "0" + t;
        return n && (t = t.substr(t.length - e)),
        i + t
    }
    function Pe(t, e, n, i) {
        return n = n || 0,
        function(r) {
            return r = r["get" + t](),
            (0 < n || r > -n) && (r += n),
            0 === r && -12 == n && (r = 12),
            Me(r, e, i)
        }
    }
    function Le(t, e) {
        return function(n, i) {
            var r = n["get" + t](),
            o = tn(e ? "SHORT" + t: t);
            return i[o][r]
        }
    }
    function Oe(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                t = new Date(0);
                var i = 0,
                r = 0,
                o = e[8] ? t.setUTCFullYear: t.setFullYear,
                s = e[8] ? t.setUTCHours: t.setHours;
                e[9] && (i = h(e[9] + e[10]), r = h(e[9] + e[11])),
                o.call(t, h(e[1]), h(e[2]) - 1, h(e[3])),
                i = h(e[4] || 0) - i,
                r = h(e[5] || 0) - r,
                o = h(e[6] || 0),
                e = Math.round(1e3 * parseFloat("0." + (e[7] || 0))),
                s.call(t, i, r, o, e)
            }
            return t
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(n, i) {
            var r, s, a = "",
            u = [];
            if (i = i || "mediumDate", i = t.DATETIME_FORMATS[i] || i, $(n) && (n = si.test(n) ? h(n) : e(n)), x(n) && (n = new Date(n)), !w(n)) return n;
            for (; i;)(s = oi.exec(i)) ? (u = u.concat(en.call(s, 1)), i = u.pop()) : (u.push(i), i = null);
            return o(u,
            function(e) {
                r = ri[e],
                a += r ? r(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }),
            a
        }
    }
    function Fe() {
        return function(t) {
            return O(t, !0)
        }
    }
    function Ie() {
        return function(t, e) {
            return un(t) || $(t) ? (e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : h(e)) ? 0 < e ? t.slice(0, e) : t.slice(e) : $(t) ? "": [] : t
        }
    }
    function He(t) {
        return function(e, n, i) {
            function o(t, e) {
                return I(e) ?
                function(e, n) {
                    return t(n, e)
                }: t
            }
            function s(t, e) {
                var n = typeof t,
                i = typeof e;
                return n == i ? (w(t) && w(e) && (t = t.valueOf(), e = e.valueOf()), "string" == n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : t < e ? -1 : 1) : n < i ? -1 : 1
            }
            return r(e) ? (n = un(n) ? n: [n], 0 === n.length && (n = ["+"]), n = E(n,
            function(e) {
                var n = !1,
                i = e || m;
                if ($(e)) {
                    if ("+" != e.charAt(0) && "-" != e.charAt(0) || (n = "-" == e.charAt(0), e = e.substring(1)), "" === e) return o(function(t, e) {
                        return s(t, e)
                    },
                    n);
                    if (i = t(e), i.constant) {
                        var r = i();
                        return o(function(t, e) {
                            return s(t[r], e[r])
                        },
                        n)
                    }
                }
                return o(function(t, e) {
                    return s(i(t), i(e))
                },
                n)
            }), en.call(e).sort(o(function(t, e) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i](t, e);
                    if (0 !== r) return r
                }
                return 0
            },
            i))) : e
        }
    }
    function _e(t) {
        return C(t) && (t = {
            link: t
        }),
        t.restrict = t.restrict || "AC",
        v(t)
    }
    function qe(t, e, n, i) {
        function r(e, n) {
            n = n ? "-" + U(n, "-") : "",
            i.setClass(t, (e ? xi: wi) + n, (e ? wi: xi) + n)
        }
        var s = this,
        a = t.parent().controller("form") || di,
        u = 0,
        l = s.$error = {},
        c = [];
        s.$name = e.name || e.ngForm,
        s.$dirty = !1,
        s.$pristine = !0,
        s.$valid = !0,
        s.$invalid = !1,
        a.$addControl(s),
        t.addClass(Ci),
        r(!0),
        s.$addControl = function(t) {
            J(t.$name, "input"),
            c.push(t),
            t.$name && (s[t.$name] = t)
        },
        s.$removeControl = function(t) {
            t.$name && s[t.$name] === t && delete s[t.$name],
            o(l,
            function(e, n) {
                s.$setValidity(n, !0, t)
            }),
            A(c, t)
        },
        s.$setValidity = function(t, e, n) {
            var i = l[t];
            if (e) i && (A(i, n), i.length || (u--, u || (r(e), s.$valid = !0, s.$invalid = !1), l[t] = !1, r(!0, t), a.$setValidity(t, !0, s)));
            else {
                if (u || r(e), i) {
                    if ( - 1 != j(i, n)) return
                } else l[t] = i = [],
                u++,
                r(!1, t),
                a.$setValidity(t, !1, s);
                i.push(n),
                s.$valid = !1,
                s.$invalid = !0
            }
        },
        s.$setDirty = function() {
            i.removeClass(t, Ci),
            i.addClass(t, Ti),
            s.$dirty = !0,
            s.$pristine = !1,
            a.$setDirty()
        },
        s.$setPristine = function() {
            i.removeClass(t, Ti),
            i.addClass(t, Ci),
            s.$dirty = !1,
            s.$pristine = !0,
            o(c,
            function(t) {
                t.$setPristine()
            })
        }
    }
    function Be(t, e, i, r) {
        return t.$setValidity(e, i),
        i ? r: n
    }
    function Re(t, e) {
        var n, i;
        if (e) for (n = 0; n < e.length; ++n) if (i = e[n], t[i]) return ! 0;
        return ! 1
    }
    function ze(t, e, n, i, r) {
        b(r) && (t.$$hasNativeValidators = !0, t.$parsers.push(function(o) {
            return t.$error[e] || Re(r, i) || !Re(r, n) ? o: void t.$setValidity(e, !1)
        }))
    }
    function Ve(t, e, n, r, o, s) {
        var a = e.prop(Ge),
        u = e[0].placeholder,
        l = {},
        c = Qe(e[0].type);
        if (r.$$validityState = a, !o.android) {
            var d = !1;
            e.on("compositionstart",
            function(t) {
                d = !0
            }),
            e.on("compositionend",
            function() {
                d = !1,
                f()
            })
        }
        var f = function(i) {
            if (!d) {
                var o = e.val();
                Ue && "input" === (i || l).type && e[0].placeholder !== u ? u = e[0].placeholder: ("password" !== c && I(n.ngTrim || "T") && (o = ln(o)), i = a && r.$$hasNativeValidators, (r.$viewValue !== o || "" === o && i) && (t.$root.$$phase ? r.$setViewValue(o) : t.$apply(function() {
                    r.$setViewValue(o)
                })))
            }
        };
        if (o.hasEvent("input")) e.on("input", f);
        else {
            var p, m = function() {
                p || (p = s.defer(function() {
                    f(),
                    p = null
                }))
            };
            e.on("keydown",
            function(t) {
                t = t.keyCode,
                91 === t || 15 < t && 19 > t || 37 <= t && 40 >= t || m()
            }),
            o.hasEvent("paste") && e.on("paste cut", m)
        }
        e.on("change", f),
        r.$render = function() {
            e.val(r.$isEmpty(r.$viewValue) ? "": r.$viewValue)
        };
        var v = n.ngPattern;
        if (v && ((o = v.match(/^\/(.*)\/([gim]*)$/)) ? (v = RegExp(o[1], o[2]), o = function(t) {
            return Be(r, "pattern", r.$isEmpty(t) || v.test(t), t)
        }) : o = function(n) {
            var o = t.$eval(v);
            if (!o || !o.test) throw i("ngPattern")("noregexp", v, o, H(e));
            return Be(r, "pattern", r.$isEmpty(n) || o.test(n), n)
        },
        r.$formatters.push(o), r.$parsers.push(o)), n.ngMinlength) {
            var g = h(n.ngMinlength);
            o = function(t) {
                return Be(r, "minlength", r.$isEmpty(t) || t.length >= g, t)
            },
            r.$parsers.push(o),
            r.$formatters.push(o)
        }
        if (n.ngMaxlength) {
            var y = h(n.ngMaxlength);
            o = function(t) {
                return Be(r, "maxlength", r.$isEmpty(t) || t.length <= y, t)
            },
            r.$parsers.push(o),
            r.$formatters.push(o)
        }
    }
    function We(t, e) {
        return t = "ngClass" + t,
        ["$animate",
        function(n) {
            function i(t, e) {
                var n = [],
                i = 0;
                t: for (; i < t.length; i++) {
                    for (var r = t[i], o = 0; o < e.length; o++) if (r == e[o]) continue t;
                    n.push(r)
                }
                return n
            }
            function r(t) {
                if (!un(t)) {
                    if ($(t)) return t.split(" ");
                    if (b(t)) {
                        var e = [];
                        return o(t,
                        function(t, n) {
                            t && (e = e.concat(n.split(" ")))
                        }),
                        e
                    }
                }
                return t
            }
            return {
                restrict: "AC",
                link: function(s, a, u) {
                    function l(t, e) {
                        var n = a.data("$classCounts") || {},
                        i = [];
                        return o(t,
                        function(t) { (0 < e || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(0 < e) && i.push(t))
                        }),
                        a.data("$classCounts", n),
                        i.join(" ")
                    }
                    function c(t) {
                        if (!0 === e || s.$index % 2 === e) {
                            var o = r(t || []);
                            if (d) {
                                if (!M(t, d)) {
                                    var c = r(d),
                                    h = i(o, c),
                                    o = i(c, o),
                                    o = l(o, -1),
                                    h = l(h, 1);
                                    0 === h.length ? n.removeClass(a, o) : 0 === o.length ? n.addClass(a, h) : n.setClass(a, h, o)
                                }
                            } else {
                                var h = l(o, 1);
                                u.$addClass(h)
                            }
                        }
                        d = D(t)
                    }
                    var d;
                    s.$watch(u[t], c, !0),
                    u.$observe("class",
                    function(e) {
                        c(s.$eval(u[t]))
                    }),
                    "ngClass" !== t && s.$watch("$index",
                    function(n, i) {
                        var o = 1 & n;
                        if (o !== (1 & i)) {
                            var a = r(s.$eval(u[t]));
                            o === e ? (o = l(a, 1), u.$addClass(o)) : (o = l(a, -1), u.$removeClass(o))
                        }
                    })
                }
            }
        }]
    }
    var Ue, Xe, Ye, Je, Ke, Ge = "validity",
    Qe = function(t) {
        return $(t) ? t.toLowerCase() : t
    },
    Ze = Object.prototype.hasOwnProperty,
    tn = function(t) {
        return $(t) ? t.toUpperCase() : t
    },
    en = [].slice,
    nn = [].push,
    rn = Object.prototype.toString,
    on = i("ng"),
    sn = t.angular || (t.angular = {}),
    an = ["0", "0", "0"];
    Ue = h((/msie (\d+)/.exec(Qe(navigator.userAgent)) || [])[1]),
    isNaN(Ue) && (Ue = h((/trident\/.*; rv:(\d+)/.exec(Qe(navigator.userAgent)) || [])[1])),
    p.$inject = [],
    m.$inject = [];
    var un = function() {
        return C(Array.isArray) ? Array.isArray: function(t) {
            return "[object Array]" === rn.call(t)
        }
    } (),
    ln = function() {
        return String.prototype.trim ?
        function(t) {
            return $(t) ? t.trim() : t
        }: function(t) {
            return $(t) ? t.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : t
        }
    } ();
    Ke = 9 > Ue ?
    function(t) {
        return t = t.nodeName ? t: t[0],
        t.scopeName && "HTML" != t.scopeName ? tn(t.scopeName + ":" + t.nodeName) : t.nodeName
    }: function(t) {
        return t.nodeName ? t.nodeName: t[0].nodeName
    };
    var cn = function() {
        if (y(cn.isActive_)) return cn.isActive_;
        var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
        if (!t) try {
            new Function("")
        } catch(n) {
            t = !0
        }
        return cn.isActive_ = t
    },
    dn = /[A-Z]/g,
    hn = {
        full: "1.2.32",
        major: 1,
        minor: 2,
        dot: 32,
        codeName: "alternation-intention"
    };
    nt.expando = "ng339";
    var fn = nt.cache = {},
    pn = 1,
    mn = t.document.addEventListener ?
    function(t, e, n) {
        t.addEventListener(e, n, !1)
    }: function(t, e, n) {
        t.attachEvent("on" + e, n)
    },
    vn = t.document.removeEventListener ?
    function(t, e, n) {
        t.removeEventListener(e, n, !1)
    }: function(t, e, n) {
        t.detachEvent("on" + e, n)
    };
    nt._data = function(t) {
        return this.cache[t[this.expando]] || {}
    };
    var gn = /([\:\-\_]+(.))/g,
    yn = /^moz([A-Z])/,
    bn = i("jqLite"),
    $n = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    xn = /<|&#?\w+;/,
    wn = /<([\w:]+)/,
    Cn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Tn = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Tn.optgroup = Tn.option,
    Tn.tbody = Tn.tfoot = Tn.colgroup = Tn.caption = Tn.thead,
    Tn.th = Tn.td;
    var Sn = nt.prototype = {
        ready: function(n) {
            function i() {
                r || (r = !0, n())
            }
            var r = !1;
            "complete" === e.readyState ? setTimeout(i) : (this.on("DOMContentLoaded", i), nt(t).on("load", i))
        },
        toString: function() {
            var t = [];
            return o(this,
            function(e) {
                t.push("" + e)
            }),
            "[" + t.join(", ") + "]"
        },
        eq: function(t) {
            return Xe(0 <= t ? this[t] : this[this.length + t])
        },
        length: 0,
        push: nn,
        sort: [].sort,
        splice: [].splice
    },
    kn = {};
    o("multiple selected checked disabled readOnly required open".split(" "),
    function(t) {
        kn[Qe(t)] = t
    });
    var En = {};
    o("input select option textarea button form details".split(" "),
    function(t) {
        En[tn(t)] = !0
    }),
    o({
        data: ut,
        removeData: st
    },
    function(t, e) {
        nt[e] = t
    }),
    o({
        data: ut,
        inheritedData: pt,
        scope: function(t) {
            return Xe.data(t, "$scope") || pt(t.parentNode || t, ["$isolateScope", "$scope"])
        },
        isolateScope: function(t) {
            return Xe.data(t, "$isolateScope") || Xe.data(t, "$isolateScopeNoTemplate")
        },
        controller: ft,
        injector: function(t) {
            return pt(t, "$injector")
        },
        removeAttr: function(t, e) {
            t.removeAttribute(e)
        },
        hasClass: lt,
        css: function(t, e, i) {
            if (e = tt(e), !y(i)) {
                var r;
                return 8 >= Ue && (r = t.currentStyle && t.currentStyle[e], "" === r && (r = "auto")),
                r = r || t.style[e],
                8 >= Ue && (r = "" === r ? n: r),
                r
            }
            t.style[e] = i
        },
        attr: function(t, e, i) {
            var r = Qe(e);
            if (kn[r]) {
                if (!y(i)) return t[e] || (t.attributes.getNamedItem(e) || p).specified ? r: n;
                i ? (t[e] = !0, t.setAttribute(e, r)) : (t[e] = !1, t.removeAttribute(r))
            } else if (y(i)) t.setAttribute(e, i);
            else if (t.getAttribute) return t = t.getAttribute(e, 2),
            null === t ? n: t
        },
        prop: function(t, e, n) {
            return y(n) ? void(t[e] = n) : t[e]
        },
        text: function() {
            function t(t, n) {
                var i = e[t.nodeType];
                return g(n) ? i ? t[i] : "": void(t[i] = n)
            }
            var e = [];
            return 9 > Ue ? (e[1] = "innerText", e[3] = "nodeValue") : e[1] = e[3] = "textContent",
            t.$dv = "",
            t
        } (),
        val: function(t, e) {
            if (g(e)) {
                if ("SELECT" === Ke(t) && t.multiple) {
                    var n = [];
                    return o(t.options,
                    function(t) {
                        t.selected && n.push(t.value || t.text)
                    }),
                    0 === n.length ? null: n
                }
                return t.value
            }
            t.value = e
        },
        html: function(t, e) {
            if (g(e)) return t.innerHTML;
            for (var n = 0,
            i = t.childNodes; n < i.length; n++) rt(i[n]);
            t.innerHTML = e
        },
        empty: mt
    },
    function(t, e) {
        nt.prototype[e] = function(e, i) {
            var r, o, s = this.length;
            if (t !== mt && (2 == t.length && t !== lt && t !== ft ? e: i) === n) {
                if (b(e)) {
                    for (r = 0; r < s; r++) if (t === ut) t(this[r], e);
                    else for (o in e) t(this[r], o, e[o]);
                    return this
                }
                for (r = t.$dv, s = r === n ? Math.min(s, 1) : s, o = 0; o < s; o++) {
                    var a = t(this[o], e, i);
                    r = r ? r + a: a
                }
                return r
            }
            for (r = 0; r < s; r++) t(this[r], e, i);
            return this
        }
    }),
    o({
        removeData: st,
        dealoc: rt,
        on: function ur(t, n, i, r) {
            if (y(r)) throw bn("onargs");
            var s = at(t, "events"),
            a = at(t, "handle");
            s || at(t, "events", s = {}),
            a || at(t, "handle", a = gt(t, s)),
            o(n.split(" "),
            function(n) {
                var r = s[n];
                if (!r) {
                    if ("mouseenter" == n || "mouseleave" == n) {
                        var o = e.body.contains || e.body.compareDocumentPosition ?
                        function(t, e) {
                            var n = 9 === t.nodeType ? t.documentElement: t,
                            i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        }: function(t, e) {
                            if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                            return ! 1
                        };
                        s[n] = [],
                        ur(t, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        } [n],
                        function(t) {
                            var e = t.relatedTarget;
                            e && (e === this || o(this, e)) || a(t, n)
                        })
                    } else mn(t, n, a),
                    s[n] = [];
                    r = s[n]
                }
                r.push(i)
            })
        },
        off: ot,
        one: function(t, e, n) {
            t = Xe(t),
            t.on(e,
            function i() {
                t.off(e, n),
                t.off(e, i)
            }),
            t.on(e, n)
        },
        replaceWith: function(t, e) {
            var n, i = t.parentNode;
            rt(t),
            o(new nt(e),
            function(e) {
                n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t),
                n = e
            })
        },
        children: function(t) {
            var e = [];
            return o(t.childNodes,
            function(t) {
                1 === t.nodeType && e.push(t)
            }),
            e
        },
        contents: function(t) {
            return t.contentDocument || t.childNodes || []
        },
        append: function(t, e) {
            o(new nt(e),
            function(e) {
                1 !== t.nodeType && 11 !== t.nodeType || t.appendChild(e)
            })
        },
        prepend: function(t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                o(new nt(e),
                function(e) {
                    t.insertBefore(e, n)
                })
            }
        },
        wrap: function(t, e) {
            e = Xe(e)[0];
            var n = t.parentNode;
            n && n.replaceChild(e, t),
            e.appendChild(t)
        },
        remove: function(t) {
            rt(t);
            var e = t.parentNode;
            e && e.removeChild(t)
        },
        after: function(t, e) {
            var n = t,
            i = t.parentNode;
            o(new nt(e),
            function(t) {
                i.insertBefore(t, n.nextSibling),
                n = t
            })
        },
        addClass: dt,
        removeClass: ct,
        toggleClass: function(t, e, n) {
            e && o(e.split(" "),
            function(e) {
                var i = n;
                g(i) && (i = !lt(t, e)),
                (i ? dt: ct)(t, e)
            })
        },
        parent: function(t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t: null
        },
        next: function(t) {
            if (t.nextElementSibling) return t.nextElementSibling;
            for (t = t.nextSibling; null != t && 1 !== t.nodeType;) t = t.nextSibling;
            return t
        },
        find: function(t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        },
        clone: it,
        triggerHandler: function(t, e, n) {
            var i, r;
            i = e.type || e;
            var s = (at(t, "events") || {})[i];
            s && (i = {
                preventDefault: function() {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function() {
                    return ! 0 === this.defaultPrevented
                },
                stopPropagation: p,
                type: i,
                target: t
            },
            e.type && (i = d(i, e)), e = D(s), r = n ? [i].concat(n) : [i], o(e,
            function(e) {
                e.apply(t, r)
            }))
        }
    },
    function(t, e) {
        nt.prototype[e] = function(e, n, i) {
            for (var r, o = 0; o < this.length; o++) g(r) ? (r = t(this[o], e, n, i), y(r) && (r = Xe(r))) : ht(r, t(this[o], e, n, i));
            return y(r) ? r: this
        },
        nt.prototype.bind = nt.prototype.on,
        nt.prototype.unbind = nt.prototype.off
    }),
    bt.prototype = {
        put: function(t, e) {
            this[yt(t, this.nextUid)] = e
        },
        get: function(t) {
            return this[yt(t, this.nextUid)]
        },
        remove: function(t) {
            var e = this[t = yt(t, this.nextUid)];
            return delete this[t],
            e
        }
    };
    var jn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
    An = /,/,
    Nn = /^\s*(_?)(\S+?)\1\s*$/,
    Dn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
    Mn = i("$injector"),
    Pn = i("$animate"),
    Ln = ["$provide",
    function(t) {
        this.$$selectors = {},
        this.register = function(e, n) {
            var i = e + "-animation";
            if (e && "." != e.charAt(0)) throw Pn("notcsel", e);
            this.$$selectors[e.substr(1)] = i,
            t.factory(i, n)
        },
        this.classNameFilter = function(t) {
            return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t: null),
            this.$$classNameFilter
        },
        this.$get = ["$timeout", "$$asyncCallback",
        function(t, e) {
            return {
                enter: function(t, n, i, r) {
                    i ? i.after(t) : (n && n[0] || (n = i.parent()), n.append(t)),
                    r && e(r)
                },
                leave: function(t, n) {
                    t.remove(),
                    n && e(n)
                },
                move: function(t, e, n, i) {
                    this.enter(t, e, n, i)
                },
                addClass: function(t, n, i) {
                    n = $(n) ? n: un(n) ? n.join(" ") : "",
                    o(t,
                    function(t) {
                        dt(t, n)
                    }),
                    i && e(i)
                },
                removeClass: function(t, n, i) {
                    n = $(n) ? n: un(n) ? n.join(" ") : "",
                    o(t,
                    function(t) {
                        ct(t, n)
                    }),
                    i && e(i)
                },
                setClass: function(t, n, i, r) {
                    o(t,
                    function(t) {
                        dt(t, n),
                        ct(t, i)
                    }),
                    r && e(r)
                },
                enabled: p
            }
        }]
    }],
    On = i("$compile");
    jt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Fn = /^(x[\:\-_]|data[\:\-_])/i,
    In = i("$interpolate"),
    Hn = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
    _n = {
        http: 80,
        https: 443,
        ftp: 21
    },
    qn = i("$location");
    Zt.prototype = Qt.prototype = Gt.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: te("$$absUrl"),
        url: function(t) {
            return g(t) ? this.$$url: (t = Hn.exec(t), t[1] && this.path(decodeURIComponent(t[1])), (t[2] || t[1]) && this.search(t[3] || ""), this.hash(t[5] || ""), this)
        },
        protocol: te("$$protocol"),
        host: te("$$host"),
        port: te("$$port"),
        path: ee("$$path",
        function(t) {
            return t = null !== t ? t.toString() : "",
            "/" == t.charAt(0) ? t: "/" + t
        }),
        search: function(t, e) {
            switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if ($(t) || x(t)) t = t.toString(),
                this.$$search = q(t);
                else {
                    if (!b(t)) throw qn("isrcharg");
                    o(t,
                    function(e, n) {
                        null == e && delete t[n]
                    }),
                    this.$$search = t
                }
                break;
            default:
                g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
            }
            return this.$$compose(),
            this
        },
        hash: ee("$$hash",
        function(t) {
            return null !== t ? t.toString() : ""
        }),
        replace: function() {
            return this.$$replace = !0,
            this
        }
    };
    var Bn, Rn = i("$parse"),
    zn = {},
    Vn = Function.prototype.call,
    Wn = Function.prototype.apply,
    Un = Function.prototype.bind,
    Xn = {
        "null": function() {
            return null
        },
        "true": function() {
            return ! 0
        },
        "false": function() {
            return ! 1
        },
        undefined: p,
        "+": function(t, e, i, r) {
            return i = i(t, e),
            r = r(t, e),
            y(i) ? y(r) ? i + r: i: y(r) ? r: n
        },
        "-": function(t, e, n, i) {
            return n = n(t, e),
            i = i(t, e),
            (y(n) ? n: 0) - (y(i) ? i: 0)
        },
        "*": function(t, e, n, i) {
            return n(t, e) * i(t, e)
        },
        "/": function(t, e, n, i) {
            return n(t, e) / i(t, e)
        },
        "%": function(t, e, n, i) {
            return n(t, e) % i(t, e)
        },
        "^": function(t, e, n, i) {
            return n(t, e) ^ i(t, e)
        },
        "=": p,
        "===": function(t, e, n, i) {
            return n(t, e) === i(t, e)
        },
        "!==": function(t, e, n, i) {
            return n(t, e) !== i(t, e)
        },
        "==": function(t, e, n, i) {
            return n(t, e) == i(t, e)
        },
        "!=": function(t, e, n, i) {
            return n(t, e) != i(t, e)
        },
        "<": function(t, e, n, i) {
            return n(t, e) < i(t, e)
        },
        ">": function(t, e, n, i) {
            return n(t, e) > i(t, e)
        },
        "<=": function(t, e, n, i) {
            return n(t, e) <= i(t, e)
        },
        ">=": function(t, e, n, i) {
            return n(t, e) >= i(t, e)
        },
        "&&": function(t, e, n, i) {
            return n(t, e) && i(t, e)
        },
        "||": function(t, e, n, i) {
            return n(t, e) || i(t, e)
        },
        "&": function(t, e, n, i) {
            return n(t, e) & i(t, e)
        },
        "|": function(t, e, n, i) {
            return i(t, e)(t, e, n(t, e))
        },
        "!": function(t, e, n) {
            return ! n(t, e)
        }
    },
    Yn = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "\t",
        v: "\x0B",
        "'": "'",
        '"': '"'
    },
    Jn = function(t) {
        this.options = t
    };
    Jn.prototype = {
        constructor: Jn,
        lex: function(t) {
            for (this.text = t, this.index = 0, this.ch = n, this.lastCh = ":", this.tokens = []; this.index < this.text.length;) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent();
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }),
                this.index++;
                else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue
                    }
                    t = this.ch + this.peek();
                    var e = t + this.peek(2),
                    i = Xn[this.ch],
                    r = Xn[t],
                    o = Xn[e];
                    o ? (this.tokens.push({
                        index: this.index,
                        text: e,
                        fn: o
                    }), this.index += 3) : r ? (this.tokens.push({
                        index: this.index,
                        text: t,
                        fn: r
                    }), this.index += 2) : i ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: i
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function(t) {
            return - 1 !== t.indexOf(this.ch)
        },
        was: function(t) {
            return - 1 !== t.indexOf(this.lastCh)
        },
        peek: function(t) {
            return t = t || 1,
            this.index + t < this.text.length && this.text.charAt(this.index + t)
        },
        isNumber: function(t) {
            return "0" <= t && "9" >= t
        },
        isWhitespace: function(t) {
            return " " === t || "\r" === t || "\t" === t || "\n" === t || "\x0B" === t || " " === t
        },
        isIdent: function(t) {
            return "a" <= t && "z" >= t || "A" <= t && "Z" >= t || "_" === t || "$" === t
        },
        isExpOperator: function(t) {
            return "-" === t || "+" === t || this.isNumber(t)
        },
        throwError: function(t, e, n) {
            throw n = n || this.index,
            e = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]": " " + n,
            Rn("lexerr", t, e, this.text)
        },
        readNumber: function() {
            for (var t = "",
            e = this.index; this.index < this.text.length;) {
                var n = Qe(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) t += n;
                else {
                    var i = this.peek();
                    if ("e" == n && this.isExpOperator(i)) t += n;
                    else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == t.charAt(t.length - 1)) t += n;
                    else {
                        if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != t.charAt(t.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            t *= 1,
            this.tokens.push({
                index: e,
                text: t,
                literal: !0,
                constant: !0,
                fn: function() {
                    return t
                }
            })
        },
        readIdent: function() {
            for (var t, e, n, i, r = this,
            o = "",
            s = this.index; this.index < this.text.length && (i = this.text.charAt(this.index), "." === i || this.isIdent(i) || this.isNumber(i));)"." === i && (t = this.index),
            o += i,
            this.index++;
            if (t) for (e = this.index; e < this.text.length;) {
                if (i = this.text.charAt(e), "(" === i) {
                    n = o.substr(t - s + 1),
                    o = o.substr(0, t - s),
                    this.index = e;
                    break
                }
                if (!this.isWhitespace(i)) break;
                e++
            }
            if (s = {
                index: s,
                text: o
            },
            Xn.hasOwnProperty(o)) s.fn = Xn[o],
            s.literal = !0,
            s.constant = !0;
            else {
                var a = de(o, this.options, this.text);
                s.fn = d(function(t, e) {
                    return a(t, e)
                },
                {
                    assign: function(t, e) {
                        return ae(t, o, e, r.text, r.options)
                    }
                })
            }
            this.tokens.push(s),
            n && (this.tokens.push({
                index: t,
                text: "."
            }), this.tokens.push({
                index: t + 1,
                text: n
            }))
        },
        readString: function(t) {
            var e = this.index;
            this.index++;
            for (var n = "",
            i = t,
            r = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index),
                i = i + o;
                if (r)"u" === o ? (r = this.text.substring(this.index + 1, this.index + 5), r.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + r + "]"), this.index += 4, n += String.fromCharCode(parseInt(r, 16))) : n += Yn[o] || o,
                r = !1;
                else if ("\\" === o) r = !0;
                else {
                    if (o === t) return this.index++,
                    void this.tokens.push({
                        index: e,
                        text: i,
                        string: n,
                        literal: !0,
                        constant: !0,
                        fn: function() {
                            return n
                        }
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var Kn = function(t, e, n) {
        this.lexer = t,
        this.$filter = e,
        this.options = n
    };
    Kn.ZERO = d(function() {
        return 0
    },
    {
        constant: !0
    }),
    Kn.prototype = {
        constructor: Kn,
        parse: function(t) {
            return this.text = t,
            this.tokens = this.lexer.lex(t),
            t = this.statements(),
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]),
            t.literal = !!t.literal,
            t.constant = !!t.constant,
            t
        },
        primary: function() {
            var t;
            if (this.expect("(")) t = this.filterChain(),
            this.consume(")");
            else if (this.expect("[")) t = this.arrayDeclaration();
            else if (this.expect("{")) t = this.object();
            else {
                var e = this.expect(); (t = e.fn) || this.throwError("not a primary expression", e),
                t.literal = !!e.literal,
                t.constant = !!e.constant
            }
            for (var n; e = this.expect("(", "[", ".");)"(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
            return t
        },
        throwError: function(t, e) {
            throw Rn("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Rn("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(t, e, n, i) {
            if (0 < this.tokens.length) {
                var r = this.tokens[0],
                o = r.text;
                if (o === t || o === e || o === n || o === i || !(t || e || n || i)) return r
            }
            return ! 1
        },
        expect: function(t, e, n, i) {
            return !! (t = this.peek(t, e, n, i)) && (this.tokens.shift(), t)
        },
        consume: function(t) {
            this.expect(t) || this.throwError("is unexpected, expecting [" + t + "]", this.peek())
        },
        unaryFn: function(t, e) {
            return d(function(n, i) {
                return t(n, i, e)
            },
            {
                constant: e.constant
            })
        },
        ternaryFn: function(t, e, n) {
            return d(function(i, r) {
                return t(i, r) ? e(i, r) : n(i, r)
            },
            {
                constant: t.constant && e.constant && n.constant
            })
        },
        binaryFn: function(t, e, n) {
            return d(function(i, r) {
                return e(i, r, t, n)
            },
            {
                constant: t.constant && n.constant
            })
        },
        statements: function() {
            for (var t = [];;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";")) return 1 === t.length ? t[0] : function(e, n) {
                for (var i, r = 0; r < t.length; r++) {
                    var o = t[r];
                    o && (i = o(e, n))
                }
                return i
            }
        },
        filterChain: function() {
            for (var t, e = this.expression();;) {
                if (! (t = this.expect("|"))) return e;
                e = this.binaryFn(e, t.fn, this.filter())
            }
        },
        filter: function() {
            for (var t = this.expect(), e = this.$filter(t.text), n = [];;) {
                if (! (t = this.expect(":"))) {
                    var i = function(t, i, r) {
                        r = [r];
                        for (var o = 0; o < n.length; o++) r.push(n[o](t, i));
                        return e.apply(t, r)
                    };
                    return function() {
                        return i
                    }
                }
                n.push(this.expression())
            }
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var t, e, n = this.ternary();
            return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(),
            function(e, i) {
                return n.assign(e, t(e, i), i)
            }) : n
        },
        ternary: function() {
            var t, e, n = this.logicalOR();
            return this.expect("?") ? (t = this.assignment(), (e = this.expect(":")) ? this.ternaryFn(n, t, this.assignment()) : void this.throwError("expected :", e)) : n
        },
        logicalOR: function() {
            for (var t, e = this.logicalAND();;) {
                if (! (t = this.expect("||"))) return e;
                e = this.binaryFn(e, t.fn, this.logicalAND())
            }
        },
        logicalAND: function() {
            var t, e = this.equality();
            return (t = this.expect("&&")) && (e = this.binaryFn(e, t.fn, this.logicalAND())),
            e
        },
        equality: function() {
            var t, e = this.relational();
            return (t = this.expect("==", "!=", "===", "!==")) && (e = this.binaryFn(e, t.fn, this.equality())),
            e
        },
        relational: function() {
            var t, e = this.additive();
            return (t = this.expect("<", ">", "<=", ">=")) && (e = this.binaryFn(e, t.fn, this.relational())),
            e
        },
        additive: function() {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = this.binaryFn(e, t.fn, this.multiplicative());
            return e
        },
        multiplicative: function() {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = this.binaryFn(e, t.fn, this.unary());
            return e
        },
        unary: function() {
            var t;
            return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(Kn.ZERO, t.fn, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.fn, this.unary()) : this.primary()
        },
        fieldAccess: function(t) {
            var e = this,
            n = this.expect().text,
            i = de(n, this.options, this.text);
            return d(function(e, n, r) {
                return i(r || t(e, n))
            },
            {
                assign: function(i, r, o) {
                    return (o = t(i, o)) || t.assign(i, o = {}),
                    ae(o, n, r, e.text, e.options)
                }
            })
        },
        objectIndex: function(t) {
            var e = this,
            i = this.expression();
            return this.consume("]"),
            d(function(r, o) {
                var s, a = t(r, o),
                u = oe(i(r, o), e.text);
                return re(u, e.text),
                a ? ((a = se(a[u], e.text)) && a.then && e.options.unwrapPromises && (s = a, "$$v" in a || (s.$$v = n, s.then(function(t) {
                    s.$$v = t
                })), a = a.$$v), a) : n
            },
            {
                assign: function(n, r, o) {
                    var s = re(oe(i(n, o), e.text), e.text);
                    return (o = se(t(n, o), e.text)) || t.assign(n, o = {}),
                    o[s] = r
                }
            })
        },
        functionCall: function(t, e) {
            var n = [];
            if (")" !== this.peekToken().text) do n.push(this.expression());
            while (this.expect(","));
            this.consume(")");
            var i = this;
            return function(r, o) {
                for (var s = [], a = e ? e(r, o) : r, u = 0; u < n.length; u++) s.push(se(n[u](r, o), i.text));
                u = t(r, o, a) || p,
                se(a, i.text);
                var l = i.text;
                if (u) {
                    if (u.constructor === u) throw Rn("isecfn", l);
                    if (u === Vn || u === Wn || Un && u === Un) throw Rn("isecff", l)
                }
                return s = u.apply ? u.apply(a, s) : u(s[0], s[1], s[2], s[3], s[4]),
                se(s, i.text)
            }
        },
        arrayDeclaration: function() {
            var t = [],
            e = !0;
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                var n = this.expression();
                t.push(n), n.constant || (e = !1)
            } while ( this . expect (","));
            return this.consume("]"),
            d(function(e, n) {
                for (var i = [], r = 0; r < t.length; r++) i.push(t[r](e, n));
                return i
            },
            {
                literal: !0,
                constant: e
            })
        },
        object: function() {
            var t = [],
            e = !0;
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var n = this.expect(), n = n.string || n.text;
                this.consume(":");
                var i = this.expression();
                t.push({
                    key: n,
                    value: i
                }), i.constant || (e = !1)
            } while ( this . expect (","));
            return this.consume("}"),
            d(function(e, n) {
                for (var i = {},
                r = 0; r < t.length; r++) {
                    var o = t[r];
                    i[o.key] = o.value(e, n)
                }
                return i
            },
            {
                literal: !0,
                constant: e
            })
        }
    };
    var Gn = {},
    Qn = {},
    Zn = i("$sce"),
    ti = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    },
    ei = e.createElement("a"),
    ni = Te(t.location.href, !0);
    Ee.$inject = ["$provide"],
    Ae.$inject = ["$locale"],
    Ne.$inject = ["$locale"];
    var ii = ".",
    ri = {
        yyyy: Pe("FullYear", 4),
        yy: Pe("FullYear", 2, 0, !0),
        y: Pe("FullYear", 1),
        MMMM: Le("Month"),
        MMM: Le("Month", !0),
        MM: Pe("Month", 2, 1),
        M: Pe("Month", 1, 1),
        dd: Pe("Date", 2),
        d: Pe("Date", 1),
        HH: Pe("Hours", 2),
        H: Pe("Hours", 1),
        hh: Pe("Hours", 2, -12),
        h: Pe("Hours", 1, -12),
        mm: Pe("Minutes", 2),
        m: Pe("Minutes", 1),
        ss: Pe("Seconds", 2),
        s: Pe("Seconds", 1),
        sss: Pe("Milliseconds", 3),
        EEEE: Le("Day"),
        EEE: Le("Day", !0),
        a: function(t, e) {
            return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1]
        },
        Z: function(t) {
            return t = -1 * t.getTimezoneOffset(),
            t = (0 <= t ? "+": "") + (Me(Math[0 < t ? "floor": "ceil"](t / 60), 2) + Me(Math.abs(t % 60), 2))
        }
    },
    oi = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
    si = /^\-?\d+$/;
    Oe.$inject = ["$locale"];
    var ai = v(Qe),
    ui = v(tn);
    He.$inject = ["$parse"];
    var li = v({
        restrict: "E",
        compile: function(t, n) {
            if (8 >= Ue && (n.href || n.name || n.$set("href", ""), t.append(e.createComment("IE fix"))), !n.href && !n.xlinkHref && !n.name) return function(t, e) {
                var n = "[object SVGAnimatedString]" === rn.call(e.prop("href")) ? "xlink:href": "href";
                e.on("click",
                function(t) {
                    e.attr(n) || t.preventDefault()
                })
            }
        }
    }),
    ci = {};
    o(kn,
    function(t, e) {
        if ("multiple" != t) {
            var n = At("ng-" + e);
            ci[n] = function() {
                return {
                    priority: 100,
                    link: function(t, i, r) {
                        t.$watch(r[n],
                        function(t) {
                            r.$set(e, !!t)
                        })
                    }
                }
            }
        }
    }),
    o(["src", "srcset", "href"],
    function(t) {
        var e = At("ng-" + t);
        ci[e] = function() {
            return {
                priority: 99,
                link: function(n, i, r) {
                    var o = t,
                    s = t;
                    "href" === t && "[object SVGAnimatedString]" === rn.call(i.prop("href")) && (s = "xlinkHref", r.$attr[s] = "xlink:href", o = null),
                    r.$observe(e,
                    function(e) {
                        e ? (r.$set(s, e), Ue && o && i.prop(o, r[s])) : "href" === t && r.$set(s, null)
                    })
                }
            }
        }
    });
    var di = {
        $addControl: p,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p
    };
    qe.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var hi = function(t) {
        return ["$timeout",
        function(e) {
            return {
                name: "form",
                restrict: t ? "EAC": "E",
                controller: qe,
                compile: function() {
                    return {
                        pre: function(t, i, r, o) {
                            if (!r.action) {
                                var s = function(t) {
                                    t.preventDefault ? t.preventDefault() : t.returnValue = !1
                                };
                                mn(i[0], "submit", s),
                                i.on("$destroy",
                                function() {
                                    e(function() {
                                        vn(i[0], "submit", s)
                                    },
                                    0, !1)
                                })
                            }
                            var a = i.parent().controller("form"),
                            u = r.name || r.ngForm;
                            u && ae(t, u, o, u),
                            a && i.on("$destroy",
                            function() {
                                a.$removeControl(o),
                                u && ae(t, u, n, u),
                                d(o, di)
                            })
                        }
                    }
                }
            }
        }]
    },
    fi = hi(),
    pi = hi(!0),
    mi = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    vi = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
    gi = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
    yi = {
        text: Ve,
        number: function(t, e, i, r, o, s) {
            Ve(t, e, i, r, o, s),
            r.$parsers.push(function(t) {
                var e = r.$isEmpty(t);
                return e || gi.test(t) ? (r.$setValidity("number", !0), "" === t ? null: e ? t: parseFloat(t)) : (r.$setValidity("number", !1), n)
            }),
            ze(r, "number", bi, null, r.$$validityState),
            r.$formatters.push(function(t) {
                return r.$isEmpty(t) ? "": "" + t
            }),
            i.min && (t = function(t) {
                var e = parseFloat(i.min);
                return Be(r, "min", r.$isEmpty(t) || t >= e, t)
            },
            r.$parsers.push(t), r.$formatters.push(t)),
            i.max && (t = function(t) {
                var e = parseFloat(i.max);
                return Be(r, "max", r.$isEmpty(t) || t <= e, t)
            },
            r.$parsers.push(t), r.$formatters.push(t)),
            r.$formatters.push(function(t) {
                return Be(r, "number", r.$isEmpty(t) || x(t), t)
            })
        },
        url: function(t, e, n, i, r, o) {
            Ve(t, e, n, i, r, o),
            t = function(t) {
                return Be(i, "url", i.$isEmpty(t) || mi.test(t), t)
            },
            i.$formatters.push(t),
            i.$parsers.push(t)
        },
        email: function(t, e, n, i, r, o) {
            Ve(t, e, n, i, r, o),
            t = function(t) {
                return Be(i, "email", i.$isEmpty(t) || vi.test(t), t)
            },
            i.$formatters.push(t),
            i.$parsers.push(t)
        },
        radio: function(t, e, n, i) {
            g(n.name) && e.attr("name", l()),
            e.on("click",
            function() {
                e[0].checked && t.$apply(function() {
                    i.$setViewValue(n.value)
                })
            }),
            i.$render = function() {
                e[0].checked = n.value == i.$viewValue
            },
            n.$observe("value", i.$render)
        },
        checkbox: function(t, e, n, i) {
            var r = n.ngTrueValue,
            o = n.ngFalseValue;
            $(r) || (r = !0),
            $(o) || (o = !1),
            e.on("click",
            function() {
                t.$apply(function() {
                    i.$setViewValue(e[0].checked)
                })
            }),
            i.$render = function() {
                e[0].checked = i.$viewValue
            },
            i.$isEmpty = function(t) {
                return t !== r
            },
            i.$formatters.push(function(t) {
                return t === r
            }),
            i.$parsers.push(function(t) {
                return t ? r: o
            })
        },
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
    },
    bi = ["badInput"],
    $i = ["$browser", "$sniffer",
    function(t, e) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(n, i, r, o) {
                o && (yi[Qe(r.type)] || yi.text)(n, i, r, o, e, t)
            }
        }
    }],
    xi = "ng-valid",
    wi = "ng-invalid",
    Ci = "ng-pristine",
    Ti = "ng-dirty",
    Si = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate",
    function(t, e, n, r, s, a) {
        function u(t, e) {
            e = e ? "-" + U(e, "-") : "",
            a.removeClass(r, (t ? wi: xi) + e),
            a.addClass(r, (t ? xi: wi) + e)
        }
        this.$modelValue = this.$viewValue = Number.NaN,
        this.$parsers = [],
        this.$formatters = [],
        this.$viewChangeListeners = [],
        this.$pristine = !0,
        this.$dirty = !1,
        this.$valid = !0,
        this.$invalid = !1,
        this.$name = n.name;
        var l = s(n.ngModel),
        c = l.assign;
        if (!c) throw i("ngModel")("nonassign", n.ngModel, H(r));
        this.$render = p,
        this.$isEmpty = function(t) {
            return g(t) || "" === t || null === t || t !== t
        };
        var d = r.inheritedData("$formController") || di,
        h = 0,
        f = this.$error = {};
        r.addClass(Ci),
        u(!0),
        this.$setValidity = function(t, e) {
            f[t] !== !e && (e ? (f[t] && h--, h || (u(!0), this.$valid = !0, this.$invalid = !1)) : (u(!1), this.$invalid = !0, this.$valid = !1, h++), f[t] = !e, u(e, t), d.$setValidity(t, e, this))
        },
        this.$setPristine = function() {
            this.$dirty = !1,
            this.$pristine = !0,
            a.removeClass(r, Ti),
            a.addClass(r, Ci)
        },
        this.$setViewValue = function(n) {
            this.$viewValue = n,
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, a.removeClass(r, Ci), a.addClass(r, Ti), d.$setDirty()),
            o(this.$parsers,
            function(t) {
                n = t(n)
            }),
            this.$modelValue !== n && (this.$modelValue = n, c(t, n), o(this.$viewChangeListeners,
            function(t) {
                try {
                    t()
                } catch(n) {
                    e(n)
                }
            }))
        };
        var m = this;
        t.$watch(function() {
            var e = l(t);
            if (m.$modelValue !== e) {
                var n = m.$formatters,
                i = n.length;
                for (m.$modelValue = e; i--;) e = n[i](e);
                m.$viewValue !== e && (m.$viewValue = e, m.$render())
            }
            return e
        })
    }],
    ki = function() {
        return {
            require: ["ngModel", "^?form"],
            controller: Si,
            link: function(t, e, n, i) {
                var r = i[0],
                o = i[1] || di;
                o.$addControl(r),
                t.$on("$destroy",
                function() {
                    o.$removeControl(r)
                })
            }
        }
    },
    Ei = v({
        require: "ngModel",
        link: function(t, e, n, i) {
            i.$viewChangeListeners.push(function() {
                t.$eval(n.ngChange)
            })
        }
    }),
    ji = function() {
        return {
            require: "?ngModel",
            link: function(t, e, n, i) {
                if (i) {
                    n.required = !0;
                    var r = function(t) {
                        return n.required && i.$isEmpty(t) ? void i.$setValidity("required", !1) : (i.$setValidity("required", !0), t)
                    };
                    i.$formatters.push(r),
                    i.$parsers.unshift(r),
                    n.$observe("required",
                    function() {
                        r(i.$viewValue)
                    })
                }
            }
        }
    },
    Ai = function() {
        return {
            require: "ngModel",
            link: function(t, e, i, r) {
                var s = (t = /\/(.*)\//.exec(i.ngList)) && RegExp(t[1]) || i.ngList || ",";
                r.$parsers.push(function(t) {
                    if (!g(t)) {
                        var e = [];
                        return t && o(t.split(s),
                        function(t) {
                            t && e.push(ln(t))
                        }),
                        e
                    }
                }),
                r.$formatters.push(function(t) {
                    return un(t) ? t.join(", ") : n
                }),
                r.$isEmpty = function(t) {
                    return ! t || !t.length
                }
            }
        }
    },
    Ni = /^(true|false|\d+)$/,
    Di = function() {
        return {
            priority: 100,
            compile: function(t, e) {
                return Ni.test(e.ngValue) ?
                function(t, e, n) {
                    n.$set("value", t.$eval(n.ngValue))
                }: function(t, e, n) {
                    t.$watch(n.ngValue,
                    function(t) {
                        n.$set("value", t)
                    })
                }
            }
        }
    },
    Mi = _e({
        compile: function(t) {
            return t.addClass("ng-binding"),
            function(t, e, i) {
                e.data("$binding", i.ngBind),
                t.$watch(i.ngBind,
                function(t) {
                    e.text(t == n ? "": t)
                })
            }
        }
    }),
    Pi = ["$interpolate",
    function(t) {
        return function(e, n, i) {
            e = t(n.attr(i.$attr.ngBindTemplate)),
            n.addClass("ng-binding").data("$binding", e),
            i.$observe("ngBindTemplate",
            function(t) {
                n.text(t)
            })
        }
    }],
    Li = ["$sce", "$parse",
    function(t, e) {
        return {
            compile: function(n) {
                return n.addClass("ng-binding"),
                function(n, i, r) {
                    i.data("$binding", r.ngBindHtml);
                    var o = e(r.ngBindHtml);
                    n.$watch(function() {
                        return (o(n) || "").toString()
                    },
                    function(e) {
                        i.html(t.getTrustedHtml(o(n)) || "");
                    })
                }
            }
        }
    }],
    Oi = We("", !0),
    Fi = We("Odd", 0),
    Ii = We("Even", 1),
    Hi = _e({
        compile: function(t, e) {
            e.$set("ngCloak", n),
            t.removeClass("ng-cloak")
        }
    }),
    _i = [function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        }
    }],
    qi = {},
    Bi = {
        blur: !0,
        focus: !0
    };
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
    function(t) {
        var e = At("ng-" + t);
        qi[e] = ["$parse", "$rootScope",
        function(n, i) {
            return {
                compile: function(r, o) {
                    var s = n(o[e], !0);
                    return function(e, n) {
                        n.on(t,
                        function(n) {
                            var r = function() {
                                s(e, {
                                    $event: n
                                })
                            };
                            Bi[t] && i.$$phase ? e.$evalAsync(r) : e.$apply(r)
                        })
                    }
                }
            }
        }]
    });
    var Ri = ["$animate",
    function(t) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(n, i, r, o, s) {
                var a, u, l;
                n.$watch(r.ngIf,
                function(o) {
                    I(o) ? u || (u = n.$new(), s(u,
                    function(n) {
                        n[n.length++] = e.createComment(" end ngIf: " + r.ngIf + " "),
                        a = {
                            clone: n
                        },
                        t.enter(n, i.parent(), i)
                    })) : (l && (l.remove(), l = null), u && (u.$destroy(), u = null), a && (l = G(a.clone), t.leave(l,
                    function() {
                        l = null
                    }), a = null))
                })
            }
        }
    }],
    zi = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce",
    function(t, e, n, i, r) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: sn.noop,
            compile: function(o, s) {
                var a = s.ngInclude || s.src,
                u = s.onload || "",
                l = s.autoscroll;
                return function(o, s, c, d, h) {
                    var f, p, m, v = 0,
                    g = function() {
                        p && (p.remove(), p = null),
                        f && (f.$destroy(), f = null),
                        m && (i.leave(m,
                        function() {
                            p = null
                        }), p = m, m = null)
                    };
                    o.$watch(r.parseAsResourceUrl(a),
                    function(r) {
                        var a = function() { ! y(l) || l && !o.$eval(l) || n()
                        },
                        c = ++v;
                        r ? (t.get(r, {
                            cache: e
                        }).success(function(t) {
                            if (c === v) {
                                var e = o.$new();
                                d.template = t,
                                t = h(e,
                                function(t) {
                                    g(),
                                    i.enter(t, null, s, a)
                                }),
                                f = e,
                                m = t,
                                f.$emit("$includeContentLoaded"),
                                o.$eval(u)
                            }
                        }).error(function() {
                            c === v && g()
                        }), o.$emit("$includeContentRequested")) : (g(), d.template = null)
                    })
                }
            }
        }
    }],
    Vi = ["$compile",
    function(t) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(e, n, i, r) {
                n.html(r.template),
                t(n.contents())(e)
            }
        }
    }],
    Wi = _e({
        priority: 450,
        compile: function() {
            return {
                pre: function(t, e, n) {
                    t.$eval(n.ngInit)
                }
            }
        }
    }),
    Ui = _e({
        terminal: !0,
        priority: 1e3
    }),
    Xi = ["$locale", "$interpolate",
    function(t, e) {
        var n = /{}/g;
        return {
            restrict: "EA",
            link: function(i, r, s) {
                var a = s.count,
                u = s.$attr.when && r.attr(s.$attr.when),
                l = s.offset || 0,
                c = i.$eval(u) || {},
                d = {},
                h = e.startSymbol(),
                f = e.endSymbol(),
                p = /^when(Minus)?(.+)$/;
                o(s,
                function(t, e) {
                    p.test(e) && (c[Qe(e.replace("when", "").replace("Minus", "-"))] = r.attr(s.$attr[e]))
                }),
                o(c,
                function(t, i) {
                    d[i] = e(t.replace(n, h + a + "-" + l + f))
                }),
                i.$watch(function() {
                    var e = parseFloat(i.$eval(a));
                    return isNaN(e) ? "": (e in c || (e = t.pluralCat(e - l)), d[e](i, r, !0))
                },
                function(t) {
                    r.text(t)
                })
            }
        }
    }],
    Yi = ["$parse", "$animate",
    function(t, n) {
        var s = i("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function(i, a, u, l, c) {
                var d, h, f, p, m, v, g = u.ngRepeat,
                y = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                b = {
                    $id: yt
                };
                if (!y) throw s("iexp", g);
                if (u = y[1], l = y[2], (y = y[3]) ? (d = t(y), h = function(t, e, n) {
                    return v && (b[v] = t),
                    b[m] = e,
                    b.$index = n,
                    d(i, b)
                }) : (f = function(t, e) {
                    return yt(e)
                },
                p = function(t) {
                    return t
                }), y = u.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !y) throw s("iidexp", u);
                m = y[3] || y[1],
                v = y[2];
                var $ = {};
                i.$watchCollection(l,
                function(t) {
                    var u, l, d, y, b, x, w, C, T, S, k = a[0],
                    E = {},
                    j = [];
                    if (r(t)) T = t,
                    C = h || f;
                    else {
                        C = h || p,
                        T = [];
                        for (x in t) t.hasOwnProperty(x) && "$" != x.charAt(0) && T.push(x);
                        T.sort()
                    }
                    for (y = T.length, l = j.length = T.length, u = 0; u < l; u++) if (x = t === T ? u: T[u], w = t[x], d = C(x, w, u), J(d, "`track by` id"), $.hasOwnProperty(d)) S = $[d],
                    delete $[d],
                    E[d] = S,
                    j[u] = S;
                    else {
                        if (E.hasOwnProperty(d)) throw o(j,
                        function(t) {
                            t && t.scope && ($[t.id] = t)
                        }),
                        s("dupes", g, d, O(w));
                        j[u] = {
                            id: d
                        },
                        E[d] = !1
                    }
                    for (x in $) $.hasOwnProperty(x) && (S = $[x], u = G(S.clone), n.leave(u), o(u,
                    function(t) {
                        t.$$NG_REMOVED = !0
                    }), S.scope.$destroy());
                    for (u = 0, l = T.length; u < l; u++) {
                        if (x = t === T ? u: T[u], w = t[x], S = j[u], j[u - 1] && (k = j[u - 1].clone[j[u - 1].clone.length - 1]), S.scope) {
                            b = S.scope,
                            d = k;
                            do d = d.nextSibling;
                            while (d && d.$$NG_REMOVED);
                            S.clone[0] != d && n.move(G(S.clone), null, Xe(k)),
                            k = S.clone[S.clone.length - 1]
                        } else b = i.$new();
                        b[m] = w,
                        v && (b[v] = x),
                        b.$index = u,
                        b.$first = 0 === u,
                        b.$last = u === y - 1,
                        b.$middle = !(b.$first || b.$last),
                        b.$odd = !(b.$even = 0 === (1 & u)),
                        S.scope || c(b,
                        function(t) {
                            t[t.length++] = e.createComment(" end ngRepeat: " + g + " "),
                            n.enter(t, null, Xe(k)),
                            k = t,
                            S.scope = b,
                            S.clone = t,
                            E[S.id] = S
                        })
                    }
                    $ = E
                })
            }
        }
    }],
    Ji = ["$animate",
    function(t) {
        return function(e, n, i) {
            e.$watch(i.ngShow,
            function(e) {
                t[I(e) ? "removeClass": "addClass"](n, "ng-hide")
            })
        }
    }],
    Ki = ["$animate",
    function(t) {
        return function(e, n, i) {
            e.$watch(i.ngHide,
            function(e) {
                t[I(e) ? "addClass": "removeClass"](n, "ng-hide")
            })
        }
    }],
    Gi = _e(function(t, e, n) {
        t.$watch(n.ngStyle,
        function(t, n) {
            n && t !== n && o(n,
            function(t, n) {
                e.css(n, "")
            }),
            t && e.css(t)
        },
        !0)
    }),
    Qi = ["$animate",
    function(t) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: ["$scope",
            function() {
                this.cases = {}
            }],
            link: function(e, n, i, r) {
                var s = [],
                a = [],
                u = [],
                l = [];
                e.$watch(i.ngSwitch || i.on,
                function(n) {
                    var c, d;
                    for (c = 0, d = u.length; c < d; ++c) u[c].remove();
                    for (c = u.length = 0, d = l.length; c < d; ++c) {
                        var h = a[c];
                        l[c].$destroy(),
                        u[c] = h,
                        t.leave(h,
                        function() {
                            u.splice(c, 1)
                        })
                    }
                    a.length = 0,
                    l.length = 0,
                    (s = r.cases["!" + n] || r.cases["?"]) && (e.$eval(i.change), o(s,
                    function(n) {
                        var i = e.$new();
                        l.push(i),
                        n.transclude(i,
                        function(e) {
                            var i = n.element;
                            a.push(e),
                            t.enter(e, i.parent(), i)
                        })
                    }))
                })
            }
        }
    }],
    Zi = _e({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(t, e, n, i, r) {
            i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [],
            i.cases["!" + n.ngSwitchWhen].push({
                transclude: r,
                element: e
            })
        }
    }),
    tr = _e({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(t, e, n, i, r) {
            i.cases["?"] = i.cases["?"] || [],
            i.cases["?"].push({
                transclude: r,
                element: e
            })
        }
    }),
    er = _e({
        link: function(t, e, n, r, o) {
            if (!o) throw i("ngTransclude")("orphan", H(e));
            o(function(t) {
                e.empty(),
                e.append(t)
            })
        }
    }),
    nr = ["$templateCache",
    function(t) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(e, n) {
                "text/ng-template" == n.type && t.put(n.id, e[0].text)
            }
        }
    }],
    ir = i("ngOptions"),
    rr = v({
        terminal: !0
    }),
    or = ["$compile", "$parse",
    function(t, i) {
        var r = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        a = {
            $setViewValue: p
        };
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs",
            function(t, e, n) {
                var i, r = this,
                o = {},
                s = a;
                r.databound = n.ngModel,
                r.init = function(t, e, n) {
                    s = t,
                    i = n
                },
                r.addOption = function(e) {
                    J(e, '"option value"'),
                    o[e] = !0,
                    s.$viewValue == e && (t.val(e), i.parent() && i.remove())
                },
                r.removeOption = function(t) {
                    this.hasOption(t) && (delete o[t], s.$viewValue == t && this.renderUnknownOption(t))
                },
                r.renderUnknownOption = function(e) {
                    e = "? " + yt(e) + " ?",
                    i.val(e),
                    t.prepend(i),
                    t.val(e),
                    i.prop("selected", !0)
                },
                r.hasOption = function(t) {
                    return o.hasOwnProperty(t)
                },
                e.$on("$destroy",
                function() {
                    r.renderUnknownOption = p
                })
            }],
            link: function(a, u, l, c) {
                function d(t, e, n, i) {
                    n.$render = function() {
                        var t = n.$viewValue;
                        i.hasOption(t) ? (C.parent() && C.remove(), e.val(t), "" === t && m.prop("selected", !0)) : g(t) && m ? e.val("") : i.renderUnknownOption(t)
                    },
                    e.on("change",
                    function() {
                        t.$apply(function() {
                            C.parent() && C.remove(),
                            n.$setViewValue(e.val())
                        })
                    })
                }
                function h(t, e, n) {
                    var i;
                    n.$render = function() {
                        var t = new bt(n.$viewValue);
                        o(e.find("option"),
                        function(e) {
                            e.selected = y(t.get(e.value))
                        })
                    },
                    t.$watch(function() {
                        M(i, n.$viewValue) || (i = D(n.$viewValue), n.$render())
                    }),
                    e.on("change",
                    function() {
                        t.$apply(function() {
                            var t = [];
                            o(e.find("option"),
                            function(e) {
                                e.selected && t.push(e.value)
                            }),
                            n.$setViewValue(t)
                        })
                    })
                }
                function f(e, o, a) {
                    function u() {
                        var t, n, i, r, u, l = {
                            "": []
                        },
                        b = [""];
                        i = a.$modelValue,
                        r = g(e) || [];
                        var S, k, E, j = h ? s(r) : r;
                        if (k = {},
                        E = !1, v) if (n = a.$modelValue, C && un(n)) for (E = new bt([]), t = {},
                        u = 0; u < n.length; u++) t[d] = n[u],
                        E.put(C(e, t), n[u]);
                        else E = new bt(n);
                        u = E;
                        var A, N;
                        for (E = 0; S = j.length, E < S; E++) {
                            if (n = E, h) {
                                if (n = j[E], "$" === n.charAt(0)) continue;
                                k[h] = n
                            }
                            k[d] = r[n],
                            t = f(e, k) || "",
                            (n = l[t]) || (n = l[t] = [], b.push(t)),
                            v ? t = y(u.remove(C ? C(e, k) : m(e, k))) : (C ? (t = {},
                            t[d] = i, t = C(e, t) === C(e, k)) : t = i === m(e, k), u = u || t),
                            A = c(e, k),
                            A = y(A) ? A: "",
                            n.push({
                                id: C ? C(e, k) : h ? j[E] : E,
                                label: A,
                                selected: t
                            })
                        }
                        for (v || ($ || null === i ? l[""].unshift({
                            id: "",
                            label: "",
                            selected: !u
                        }) : u || l[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), k = 0, j = b.length; k < j; k++) {
                            for (t = b[k], n = l[t], T.length <= k ? (i = {
                                element: w.clone().attr("label", t),
                                label: n.label
                            },
                            r = [i], T.push(r), o.append(i.element)) : (r = T[k], i = r[0], i.label != t && i.element.attr("label", i.label = t)), A = null, E = 0, S = n.length; E < S; E++) t = n[E],
                            (u = r[E + 1]) ? (A = u.element, u.label !== t.label && (A.text(u.label = t.label), A.prop("label", u.label)), u.id !== t.id && A.val(u.id = t.id), A[0].selected !== t.selected && (A.prop("selected", u.selected = t.selected), Ue && A.prop("selected", u.selected))) : ("" === t.id && $ ? N = $: (N = x.clone()).val(t.id).prop("selected", t.selected).attr("selected", t.selected).prop("label", t.label).text(t.label), r.push({
                                element: N,
                                label: t.label,
                                id: t.id,
                                selected: t.selected
                            }), p.addOption(t.label, N), A ? A.after(N) : i.element.append(N), A = N);
                            for (E++; r.length > E;) t = r.pop(),
                            p.removeOption(t.label),
                            t.element.remove()
                        }
                        for (; T.length > k;) T.pop()[0].element.remove()
                    }
                    var l;
                    if (! (l = b.match(r))) throw ir("iexp", b, H(o));
                    var c = i(l[2] || l[1]),
                    d = l[4] || l[6],
                    h = l[5],
                    f = i(l[3] || ""),
                    m = i(l[2] ? l[1] : d),
                    g = i(l[7]),
                    C = l[8] ? i(l[8]) : null,
                    T = [[{
                        element: o,
                        label: ""
                    }]];
                    $ && (t($)(e), $.removeClass("ng-scope"), $.remove()),
                    o.empty(),
                    o.on("change",
                    function() {
                        e.$apply(function() {
                            var t, i, r, s, l, c, f, p, y = g(e) || [],
                            b = {};
                            if (v) {
                                for (r = [], l = 0, f = T.length; l < f; l++) for (t = T[l], s = 1, c = t.length; s < c; s++) if ((i = t[s].element)[0].selected) {
                                    if (i = i.val(), h && (b[h] = i), C) for (p = 0; p < y.length && (b[d] = y[p], C(e, b) != i); p++);
                                    else b[d] = y[i];
                                    r.push(m(e, b))
                                }
                            } else if (i = o.val(), "?" == i) r = n;
                            else if ("" === i) r = null;
                            else if (C) {
                                for (p = 0; p < y.length; p++) if (b[d] = y[p], C(e, b) == i) {
                                    r = m(e, b);
                                    break
                                }
                            } else b[d] = y[i],
                            h && (b[h] = i),
                            r = m(e, b);
                            a.$setViewValue(r),
                            u()
                        })
                    }),
                    a.$render = u,
                    e.$watchCollection(g, u),
                    e.$watchCollection(function() {
                        var t = {},
                        n = g(e);
                        if (n) {
                            for (var i = Array(n.length), r = 0, o = n.length; r < o; r++) t[d] = n[r],
                            i[r] = c(e, t);
                            return i
                        }
                    },
                    u),
                    v && e.$watchCollection(function() {
                        return a.$modelValue
                    },
                    u)
                }
                if (c[1]) {
                    var p = c[0];
                    c = c[1];
                    var m, v = l.multiple,
                    b = l.ngOptions,
                    $ = !1,
                    x = Xe(e.createElement("option")),
                    w = Xe(e.createElement("optgroup")),
                    C = x.clone();
                    l = 0;
                    for (var T = u.children(), S = T.length; l < S; l++) if ("" === T[l].value) {
                        m = $ = T.eq(l);
                        break
                    }
                    p.init(c, $, C),
                    v && (c.$isEmpty = function(t) {
                        return ! t || 0 === t.length
                    }),
                    b ? f(a, u, c) : v ? h(a, u, c) : d(a, u, c, p)
                }
            }
        }
    }],
    sr = ["$interpolate",
    function(t) {
        var e = {
            addOption: p,
            removeOption: p
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(n, i) {
                if (g(i.value)) {
                    var r = t(n.text(), !0);
                    r || i.$set("value", n.text())
                }
                return function(t, n, i) {
                    var o = n.parent(),
                    s = o.data("$selectController") || o.parent().data("$selectController");
                    s && s.databound ? n.prop("selected", !1) : s = e,
                    r ? t.$watch(r,
                    function(t, e) {
                        i.$set("value", t),
                        t !== e && s.removeOption(e),
                        s.addOption(t)
                    }) : s.addOption(i.value),
                    n.on("$destroy",
                    function() {
                        s.removeOption(i.value)
                    })
                }
            }
        }
    }],
    ar = v({
        restrict: "E",
        terminal: !0
    });
    t.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Ye = t.jQuery) && Ye.fn.on ? (Xe = Ye, d(Ye.fn, {
        scope: Sn.scope,
        isolateScope: Sn.isolateScope,
        controller: Sn.controller,
        injector: Sn.injector,
        inheritedData: Sn.inheritedData
    }), et("remove", !0, !0, !1), et("empty", !1, !1, !1), et("html", !1, !1, !0)) : Xe = nt, sn.element = Xe, Z(sn), Xe(e).ready(function() {
        V(e, W)
    }))
} (window, document),
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'),
function(t, e, n) {
    "use strict";
    e.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser",
    function(t, i) {
        var r, o = {},
        s = {},
        a = !1,
        u = e.copy,
        l = e.isUndefined;
        return i.addPollFn(function() {
            var e = i.cookies();
            r != e && (r = e, u(e, s), u(e, o), a && t.$apply())
        })(),
        a = !0,
        t.$watch(function() {
            var t, r, a;
            for (t in s) l(o[t]) && i.cookies(t, n);
            for (t in o) r = o[t],
            e.isString(r) || (r = "" + r, o[t] = r),
            r !== s[t] && (i.cookies(t, r), a = !0);
            if (a) for (t in r = i.cookies(), o) o[t] !== r[t] && (l(r[t]) ? delete o[t] : o[t] = r[t])
        }),
        o
    }]).factory("$cookieStore", ["$cookies",
    function(t) {
        return {
            get: function(n) {
                return (n = t[n]) ? e.fromJson(n) : n
            },
            put: function(n, i) {
                t[n] = e.toJson(i)
            },
            remove: function(e) {
                delete t[e]
            }
        }
    }])
} (window, window.angular),
function(t, e, n) {
    "use strict";
    e.module("ngAnimate", ["ng"]).directive("ngAnimateChildren",
    function() {
        return function(t, n, i) {
            i = i.ngAnimateChildren,
            e.isString(i) && 0 === i.length ? n.data("$$ngAnimateChildren", !0) : t.$watch(i,
            function(t) {
                n.data("$$ngAnimateChildren", !!t)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document",
    function(t, e) {
        var n = e[0].body;
        return function(e) {
            return t(function() {
                e(n.offsetWidth)
            })
        }
    }]).config(["$provide", "$animateProvider",
    function(i, r) {
        function o(t) {
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (n.nodeType == c) return n
            }
        }
        function s(t) {
            return e.element(o(t))
        }
        var a = e.noop,
        u = e.forEach,
        l = r.$$selectors,
        c = 1,
        d = "$$ngAnimateState",
        h = "$$ngAnimateChildren",
        f = "ng-animate",
        p = {
            running: !0
        };
        i.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document",
        function(t, n, i, c, m, v, g) {
            function y(t) {
                var e = t.data(d) || {};
                e.running = !0,
                t.data(d, e)
            }
            function b(t) {
                if (t) {
                    var e = [],
                    r = {};
                    t = t.substr(1).split("."),
                    (i.transitions || i.animations) && e.push(n.get(l[""]));
                    for (var o = 0; o < t.length; o++) {
                        var s = t[o],
                        a = l[s];
                        a && !r[s] && (e.push(n.get(a)), r[s] = !0)
                    }
                    return e
                }
            }
            function $(t, n, i) {
                function r(t, e) {
                    var n = t[e],
                    i = t["before" + e.charAt(0).toUpperCase() + e.substr(1)];
                    if (n || i) return "leave" == e && (i = n, n = null),
                    $.push({
                        event: e,
                        fn: n
                    }),
                    v.push({
                        event: e,
                        fn: i
                    }),
                    !0
                }
                function o(e, n, r) {
                    var o = [];
                    u(e,
                    function(t) {
                        t.fn && o.push(t)
                    });
                    var s = 0;
                    u(o,
                    function(e, u) {
                        var d = function() {
                            t: {
                                if (n) {
                                    if ((n[u] || a)(), ++s < o.length) break t;
                                    n = null
                                }
                                r()
                            }
                        };
                        switch (e.event) {
                        case "setClass":
                            n.push(e.fn(t, l, c, d));
                            break;
                        case "addClass":
                            n.push(e.fn(t, l || i, d));
                            break;
                        case "removeClass":
                            n.push(e.fn(t, c || i, d));
                            break;
                        default:
                            n.push(e.fn(t, d))
                        }
                    }),
                    n && 0 === n.length && r()
                }
                var s = t[0];
                if (s) {
                    var l, c, d = "setClass" == n,
                    h = d || "addClass" == n || "removeClass" == n;
                    e.isArray(i) && (l = i[0], c = i[1], i = l + " " + c);
                    var f = t.attr("class") + " " + i;
                    if (E(f)) {
                        var p = a,
                        m = [],
                        v = [],
                        g = a,
                        y = [],
                        $ = [],
                        f = (" " + f).replace(/\s+/g, ".");
                        return u(b(f),
                        function(t) { ! r(t, n) && d && (r(t, "addClass"), r(t, "removeClass"))
                        }),
                        {
                            node: s,
                            event: n,
                            className: i,
                            isClassBased: h,
                            isSetClassOperation: d,
                            before: function(t) {
                                p = t,
                                o(v, m,
                                function() {
                                    p = a,
                                    t()
                                })
                            },
                            after: function(t) {
                                g = t,
                                o($, y,
                                function() {
                                    g = a,
                                    t()
                                })
                            },
                            cancel: function() {
                                m && (u(m,
                                function(t) { (t || a)(!0)
                                }), p(!0)),
                                y && (u(y,
                                function(t) { (t || a)(!0)
                                }), g(!0))
                            }
                        }
                    }
                }
            }
            function x(t, n, i, r, o, s, a) {
                function l(e) {
                    var r = "$animate:" + e;
                    b && b[r] && 0 < b[r].length && m(function() {
                        i.triggerHandler(r, {
                            event: t,
                            className: n
                        })
                    })
                }
                function c() {
                    l("before")
                }
                function h() {
                    l("after")
                }
                function p() {
                    l("close"),
                    a && m(function() {
                        a()
                    })
                }
                function v() {
                    v.hasBeenRun || (v.hasBeenRun = !0, s())
                }
                function g() {
                    if (!g.hasBeenRun) {
                        g.hasBeenRun = !0;
                        var e = i.data(d);
                        e && (y && y.isClassBased ? C(i, n) : (m(function() {
                            var e = i.data(d) || {};
                            A == e.index && C(i, n, t)
                        }), i.data(d, e))),
                        p()
                    }
                }
                var y = $(i, t, n);
                if (y) {
                    n = y.className;
                    var b = e.element._data(y.node),
                    b = b && b.events;
                    r || (r = o ? o.parent() : i.parent());
                    var x = i.data(d) || {};
                    o = x.active || {};
                    var w, k = x.totalActive || 0,
                    E = x.last;
                    if (y.isClassBased && (w = x.running || x.disabled || E && !E.isClassBased), w || T(i, r)) v(),
                    c(),
                    h(),
                    g();
                    else {
                        if (r = !1, 0 < k) {
                            if (w = [], y.isClassBased)"setClass" == E.event ? (w.push(E), C(i, n)) : o[n] && (j = o[n], j.event == t ? r = !0 : (w.push(j), C(i, n)));
                            else if ("leave" == t && o["ng-leave"]) r = !0;
                            else {
                                for (var j in o) w.push(o[j]),
                                C(i, j);
                                o = {},
                                k = 0
                            }
                            0 < w.length && u(w,
                            function(t) {
                                t.cancel()
                            })
                        }
                        if (!y.isClassBased || y.isSetClassOperation || r || (r = "addClass" == t == i.hasClass(n)), r) v(),
                        c(),
                        h(),
                        p();
                        else {
                            "leave" == t && i.one("$destroy",
                            function(t) {
                                t = e.element(this);
                                var n = t.data(d);
                                n && (n = n.active["ng-leave"]) && (n.cancel(), C(t, "ng-leave"))
                            }),
                            i.addClass(f);
                            var A = S++;
                            k++,
                            o[n] = y,
                            i.data(d, {
                                last: y,
                                active: o,
                                index: A,
                                totalActive: k
                            }),
                            c(),
                            y.before(function(e) {
                                var r = i.data(d);
                                e = e || !r || !r.active[n] || y.isClassBased && r.active[n].event != t,
                                v(),
                                !0 === e ? g() : (h(), y.after(g))
                            })
                        }
                    }
                } else v(),
                c(),
                h(),
                g()
            }
            function w(t) { (t = o(t)) && (t = e.isFunction(t.getElementsByClassName) ? t.getElementsByClassName(f) : t.querySelectorAll("." + f), u(t,
                function(t) {
                    t = e.element(t),
                    (t = t.data(d)) && t.active && u(t.active,
                    function(t) {
                        t.cancel()
                    })
                }))
            }
            function C(t, e) {
                if (o(t) == o(c)) p.disabled || (p.running = !1, p.structural = !1);
                else if (e) {
                    var n = t.data(d) || {},
                    i = !0 === e; ! i && n.active && n.active[e] && (n.totalActive--, delete n.active[e]),
                    !i && n.totalActive || (t.removeClass(f), t.removeData(d))
                }
            }
            function T(t, n) {
                if (p.disabled) return ! 0;
                if (o(t) == o(c)) return p.running;
                var i, r, s;
                do {
                    if (0 === n.length) break;
                    var a = o(n) == o(c), u = a ? p: n.data(d) || {};
                    if (u.disabled) return ! 0;
                    a && (s = !0), !1 !== i && (a = n.data(h), e.isDefined(a) && (i = a)), r = r || u.running || u.last && !u.last.isClassBased
                } while ( n = n . parent ());
                return ! s || !i && r
            }
            var S = 0;
            c.data(d, p),
            v.$$postDigest(function() {
                v.$$postDigest(function() {
                    p.running = !1
                })
            });
            var k = r.classNameFilter(),
            E = k ?
            function(t) {
                return k.test(t)
            }: function() {
                return ! 0
            };
            return {
                enter: function(n, i, r, o) {
                    n = e.element(n),
                    i = i && e.element(i),
                    r = r && e.element(r),
                    y(n),
                    t.enter(n, i, r),
                    v.$$postDigest(function() {
                        n = s(n),
                        x("enter", "ng-enter", n, i, r, a, o)
                    })
                },
                leave: function(n, i) {
                    n = e.element(n),
                    w(n),
                    y(n),
                    v.$$postDigest(function() {
                        x("leave", "ng-leave", s(n), null, null,
                        function() {
                            t.leave(n)
                        },
                        i)
                    })
                },
                move: function(n, i, r, o) {
                    n = e.element(n),
                    i = i && e.element(i),
                    r = r && e.element(r),
                    w(n),
                    y(n),
                    t.move(n, i, r),
                    v.$$postDigest(function() {
                        n = s(n),
                        x("move", "ng-move", n, i, r, a, o)
                    })
                },
                addClass: function(n, i, r) {
                    n = e.element(n),
                    n = s(n),
                    x("addClass", i, n, null, null,
                    function() {
                        t.addClass(n, i)
                    },
                    r)
                },
                removeClass: function(n, i, r) {
                    n = e.element(n),
                    n = s(n),
                    x("removeClass", i, n, null, null,
                    function() {
                        t.removeClass(n, i)
                    },
                    r)
                },
                setClass: function(n, i, r, o) {
                    n = e.element(n),
                    n = s(n),
                    x("setClass", [i, r], n, null, null,
                    function() {
                        t.setClass(n, i, r)
                    },
                    o)
                },
                enabled: function(t, e) {
                    switch (arguments.length) {
                    case 2:
                        if (t) C(e);
                        else {
                            var n = e.data(d) || {};
                            n.disabled = !0,
                            e.data(d, n)
                        }
                        break;
                    case 1:
                        p.disabled = !t;
                        break;
                    default:
                        t = !p.disabled
                    }
                    return !! t
                }
            }
        }]),
        r.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow",
        function(i, r, s, l) {
            function d() {
                L || (L = l(function() {
                    X = [],
                    L = null,
                    W = {}
                }))
            }
            function h(t, e) {
                L && L(),
                X.push(e),
                L = l(function() {
                    u(X,
                    function(t) {
                        t()
                    }),
                    X = [],
                    L = null,
                    W = {}
                })
            }
            function f(t, n) {
                var i = o(t);
                t = e.element(i),
                K.push(t),
                i = Date.now() + n,
                i <= J || (s.cancel(Y), J = i, Y = s(function() {
                    p(K),
                    K = []
                },
                n, !1))
            }
            function p(t) {
                u(t,
                function(t) { (t = t.data(q)) && (t.closeAnimationFn || a)()
                })
            }
            function m(t, e) {
                var n = e ? W[e] : null;
                if (!n) {
                    var r, o, s, a, l = 0,
                    d = 0,
                    h = 0,
                    f = 0;
                    u(t,
                    function(t) {
                        if (t.nodeType == c) {
                            t = i.getComputedStyle(t) || {},
                            s = t[A + O],
                            l = Math.max(v(s), l),
                            a = t[A + F],
                            r = t[A + I],
                            d = Math.max(v(r), d),
                            o = t[D + I],
                            f = Math.max(v(o), f);
                            var e = v(t[D + O]);
                            0 < e && (e *= parseInt(t[D + H], 10) || 1),
                            h = Math.max(e, h)
                        }
                    }),
                    n = {
                        total: 0,
                        transitionPropertyStyle: a,
                        transitionDurationStyle: s,
                        transitionDelayStyle: r,
                        transitionDelay: d,
                        transitionDuration: l,
                        animationDelayStyle: o,
                        animationDelay: f,
                        animationDuration: h
                    },
                    e && (W[e] = n)
                }
                return n
            }
            function v(t) {
                var n = 0;
                return t = e.isString(t) ? t.split(/\s*,\s*/) : [],
                u(t,
                function(t) {
                    n = Math.max(parseFloat(t) || 0, n)
                }),
                n
            }
            function g(t) {
                var e = t.parent(),
                n = e.data(_);
                return n || (e.data(_, ++U), n = U),
                n + "-" + o(t).getAttribute("class")
            }
            function y(t, e, n, i) {
                var r = g(e),
                s = r + " " + n,
                u = W[s] ? ++W[s].total: 0,
                l = {};
                if (0 < u) {
                    var c = n + "-stagger",
                    l = r + " " + c; (r = !W[l]) && e.addClass(c),
                    l = m(e, l),
                    r && e.removeClass(c)
                }
                i = i ||
                function(t) {
                    return t()
                },
                e.addClass(n);
                var c = e.data(q) || {},
                d = i(function() {
                    return m(e, s)
                });
                return i = d.transitionDuration,
                r = d.animationDuration,
                0 === i && 0 === r ? (e.removeClass(n), !1) : (e.data(q, {
                    running: c.running || 0,
                    itemIndex: u,
                    stagger: l,
                    timings: d,
                    closeAnimationFn: a
                }), t = 0 < c.running || "setClass" == t, 0 < i && b(e, n, t), 0 < r && 0 < l.animationDelay && 0 === l.animationDuration && (o(e).style[D] = "none 0s"), !0)
            }
            function b(t, e, n) {
                "ng-enter" != e && "ng-move" != e && "ng-leave" != e && n ? t.addClass(B) : o(t).style[A + F] = "none"
            }
            function $(t, e) {
                var n = A + F,
                i = o(t);
                i.style[n] && 0 < i.style[n].length && (i.style[n] = ""),
                t.removeClass(B)
            }
            function x(t) {
                var e = D;
                t = o(t),
                t.style[e] && 0 < t.style[e].length && (t.style[e] = "")
            }
            function w(t, e, n, i) {
                function r(t) {
                    e.off(y, s),
                    e.removeClass(l),
                    E(e, n),
                    t = o(e);
                    for (var i in $) t.style.removeProperty($[i])
                }
                function s(t) {
                    t.stopPropagation();
                    var e = t.originalEvent || t;
                    t = e.$manualTimeStamp || Date.now(),
                    e = parseFloat(e.elapsedTime.toFixed(R)),
                    Math.max(t - g, 0) >= v && e >= p && i()
                }
                var a = o(e);
                if (t = e.data(q), -1 != a.getAttribute("class").indexOf(n) && t) {
                    var l = "";
                    u(n.split(" "),
                    function(t, e) {
                        l += (0 < e ? " ": "") + t + "-active"
                    });
                    var c = t.stagger,
                    d = t.timings,
                    h = t.itemIndex,
                    p = Math.max(d.transitionDuration, d.animationDuration),
                    m = Math.max(d.transitionDelay, d.animationDelay),
                    v = m * V,
                    g = Date.now(),
                    y = M + " " + N,
                    b = "",
                    $ = [];
                    if (0 < d.transitionDuration) {
                        var x = d.transitionPropertyStyle; - 1 == x.indexOf("all") && (b += P + "transition-property: " + x + ";", b += P + "transition-duration: " + d.transitionDurationStyle + ";", $.push(P + "transition-property"), $.push(P + "transition-duration"))
                    }
                    return 0 < h && (0 < c.transitionDelay && 0 === c.transitionDuration && (b += P + "transition-delay: " + C(d.transitionDelayStyle, c.transitionDelay, h) + "; ", $.push(P + "transition-delay")), 0 < c.animationDelay && 0 === c.animationDuration && (b += P + "animation-delay: " + C(d.animationDelayStyle, c.animationDelay, h) + "; ", $.push(P + "animation-delay"))),
                    0 < $.length && (d = a.getAttribute("style") || "", a.setAttribute("style", d + "; " + b)),
                    e.on(y, s),
                    e.addClass(l),
                    t.closeAnimationFn = function() {
                        r(),
                        i()
                    },
                    a = (h * (Math.max(c.animationDelay, c.transitionDelay) || 0) + (m + p) * z) * V,
                    t.running++,
                    f(e, a),
                    r
                }
                i()
            }
            function C(t, e, n) {
                var i = "";
                return u(t.split(","),
                function(t, r) {
                    i += (0 < r ? ",": "") + (n * e + parseInt(t, 10)) + "s"
                }),
                i
            }
            function T(t, e, n, i) {
                if (y(t, e, n, i)) return function(t) {
                    t && E(e, n)
                }
            }
            function S(t, e, n, i) {
                return e.data(q) ? w(t, e, n, i) : (E(e, n), void i())
            }
            function k(t, e, n, i) {
                var r = T(t, e, n);
                if (r) {
                    var o = r;
                    return h(e,
                    function() {
                        $(e, n),
                        x(e),
                        o = S(t, e, n, i)
                    }),
                    function(t) { (o || a)(t)
                    }
                }
                d(),
                i()
            }
            function E(t, e) {
                t.removeClass(e);
                var n = t.data(q);
                n && (n.running && n.running--, n.running && 0 !== n.running || t.removeData(q))
            }
            function j(t, n) {
                var i = "";
                return t = e.isArray(t) ? t: t.split(/\s+/),
                u(t,
                function(t, e) {
                    t && 0 < t.length && (i += (0 < e ? " ": "") + t + n)
                }),
                i
            }
            var A, N, D, M, P = "";
            t.ontransitionend === n && t.onwebkittransitionend !== n ? (P = "-webkit-", A = "WebkitTransition", N = "webkitTransitionEnd transitionend") : (A = "transition", N = "transitionend"),
            t.onanimationend === n && t.onwebkitanimationend !== n ? (P = "-webkit-", D = "WebkitAnimation", M = "webkitAnimationEnd animationend") : (D = "animation", M = "animationend");
            var L, O = "Duration",
            F = "Property",
            I = "Delay",
            H = "IterationCount",
            _ = "$$ngAnimateKey",
            q = "$$ngAnimateCSS3Data",
            B = "ng-animate-block-transitions",
            R = 3,
            z = 1.5,
            V = 1e3,
            W = {},
            U = 0,
            X = [],
            Y = null,
            J = 0,
            K = [];
            return {
                enter: function(t, e) {
                    return k("enter", t, "ng-enter", e)
                },
                leave: function(t, e) {
                    return k("leave", t, "ng-leave", e)
                },
                move: function(t, e) {
                    return k("move", t, "ng-move", e)
                },
                beforeSetClass: function(t, e, n, i) {
                    var r = j(n, "-remove") + " " + j(e, "-add"),
                    o = T("setClass", t, r,
                    function(i) {
                        var r = t.attr("class");
                        return t.removeClass(n),
                        t.addClass(e),
                        i = i(),
                        t.attr("class", r),
                        i
                    });
                    return o ? (h(t,
                    function() {
                        $(t, r),
                        x(t),
                        i()
                    }), o) : (d(), void i())
                },
                beforeAddClass: function(t, e, n) {
                    var i = T("addClass", t, j(e, "-add"),
                    function(n) {
                        return t.addClass(e),
                        n = n(),
                        t.removeClass(e),
                        n
                    });
                    return i ? (h(t,
                    function() {
                        $(t, e),
                        x(t),
                        n()
                    }), i) : (d(), void n())
                },
                setClass: function(t, e, n, i) {
                    return n = j(n, "-remove"),
                    e = j(e, "-add"),
                    S("setClass", t, n + " " + e, i)
                },
                addClass: function(t, e, n) {
                    return S("addClass", t, j(e, "-add"), n)
                },
                beforeRemoveClass: function(t, e, n) {
                    var i = T("removeClass", t, j(e, "-remove"),
                    function(n) {
                        var i = t.attr("class");
                        return t.removeClass(e),
                        n = n(),
                        t.attr("class", i),
                        n
                    });
                    return i ? (h(t,
                    function() {
                        $(t, e),
                        x(t),
                        n()
                    }), i) : void n()
                },
                removeClass: function(t, e, n) {
                    return S("removeClass", t, j(e, "-remove"), n)
                }
            }
        }])
    }])
} (window, window.angular),
function(t, e, n) {
    "use strict";
    function i(t, e, n) {
        r.directive(t, ["$parse", "$swipe",
        function(i, r) {
            var o = 75,
            s = .3,
            a = 30;
            return function(u, l, c) {
                function d(t) {
                    if (!h) return ! 1;
                    var n = Math.abs(t.y - h.y);
                    return t = (t.x - h.x) * e,
                    f && n < o && 0 < t && t > a && n / t < s
                }
                var h, f, p = i(c[t]);
                r.bind(l, {
                    start: function(t, e) {
                        h = t,
                        f = !0
                    },
                    cancel: function(t) {
                        f = !1
                    },
                    end: function(t, e) {
                        d(t) && u.$apply(function() {
                            l.triggerHandler(n),
                            p(u, {
                                $event: e
                            })
                        })
                    }
                })
            }
        }])
    }
    var r = e.module("ngTouch", []);
    r.factory("$swipe", [function() {
        function t(t) {
            var e = t.touches && t.touches.length ? t.touches: [t];
            return t = t.changedTouches && t.changedTouches[0] || t.originalEvent && t.originalEvent.changedTouches && t.originalEvent.changedTouches[0] || e[0].originalEvent || e[0],
            {
                x: t.clientX,
                y: t.clientY
            }
        }
        return {
            bind: function(e, n) {
                var i, r, o, s, a = !1;
                e.on("touchstart mousedown",
                function(e) {
                    o = t(e),
                    a = !0,
                    r = i = 0,
                    s = o,
                    n.start && n.start(o, e)
                }),
                e.on("touchcancel",
                function(t) {
                    a = !1,
                    n.cancel && n.cancel(t)
                }),
                e.on("touchmove mousemove",
                function(e) {
                    if (a && o) {
                        var u = t(e);
                        i += Math.abs(u.x - s.x),
                        r += Math.abs(u.y - s.y),
                        s = u,
                        10 > i && 10 > r || (r > i ? (a = !1, n.cancel && n.cancel(e)) : (e.preventDefault(), n.move && n.move(u, e)))
                    }
                }),
                e.on("touchend mouseup",
                function(e) {
                    a && (a = !1, n.end && n.end(t(e), e))
                })
            }
        }
    }]),
    r.config(["$provide",
    function(t) {
        t.decorator("ngClickDirective", ["$delegate",
        function(t) {
            return t.shift(),
            t
        }])
    }]),
    r.directive("ngClick", ["$parse", "$timeout", "$rootElement",
    function(t, n, i) {
        function r(t, e, n) {
            for (var i = 0; i < t.length; i += 2) if (Math.abs(t[i] - e) < d && Math.abs(t[i + 1] - n) < d) return t.splice(i, i + 2),
            !0;
            return ! 1
        }
        function o(t) {
            if (! (Date.now() - a > c)) {
                var e = t.touches && t.touches.length ? t.touches: [t],
                n = e[0].clientX,
                e = e[0].clientY;
                1 > n && 1 > e || l && l[0] === n && l[1] === e || (l && (l = null), "label" === t.target.tagName.toLowerCase() && (l = [n, e]), r(u, n, e) || (t.stopPropagation(), t.preventDefault(), t.target && t.target.blur()))
            }
        }
        function s(t) {
            t = t.touches && t.touches.length ? t.touches: [t];
            var e = t[0].clientX,
            i = t[0].clientY;
            u.push(e, i),
            n(function() {
                for (var t = 0; t < u.length; t += 2) if (u[t] == e && u[t + 1] == i) {
                    u.splice(t, t + 2);
                    break
                }
            },
            c, !1)
        }
        var a, u, l, c = 2500,
        d = 25,
        h = "ng-click-active";
        return function(n, l, c) {
            function d() {
                y = !1,
                l.removeClass(h)
            }
            var f, p, m, v, g = t(c.ngClick),
            y = !1;
            l.on("touchstart",
            function(t) {
                y = !0,
                f = t.target ? t.target: t.srcElement,
                3 == f.nodeType && (f = f.parentNode),
                l.addClass(h),
                p = Date.now(),
                t = t.touches && t.touches.length ? t.touches: [t],
                t = t[0].originalEvent || t[0],
                m = t.clientX,
                v = t.clientY
            }),
            l.on("touchmove",
            function(t) {
                d()
            }),
            l.on("touchcancel",
            function(t) {
                d()
            }),
            l.on("touchend",
            function(t) {
                var n = Date.now() - p,
                h = t.changedTouches && t.changedTouches.length ? t.changedTouches: t.touches && t.touches.length ? t.touches: [t],
                g = h[0].originalEvent || h[0],
                h = g.clientX,
                g = g.clientY,
                b = Math.sqrt(Math.pow(h - m, 2) + Math.pow(g - v, 2));
                y && 750 > n && 12 > b && (u || (i[0].addEventListener("click", o, !0), i[0].addEventListener("touchstart", s, !0), u = []), a = Date.now(), r(u, h, g), f && f.blur(), e.isDefined(c.disabled) && !1 !== c.disabled || l.triggerHandler("click", [t])),
                d()
            }),
            l.onclick = function(t) {},
            l.on("click",
            function(t, e) {
                n.$apply(function() {
                    g(n, {
                        $event: e || t
                    })
                })
            }),
            l.on("mousedown",
            function(t) {
                l.addClass(h)
            }),
            l.on("mousemove mouseup",
            function(t) {
                l.removeClass(h)
            })
        }
    }]),
    i("ngSwipeLeft", -1, "swipeleft"),
    i("ngSwipeRight", 1, "swiperight")
} (window, window.angular),
function(t, e, n) {
    "use strict";
    function i(t) {
        var n = [];
        return u(n, e.noop).chars(t),
        n.join("")
    }
    function r(t) {
        var e = {};
        t = t.split(",");
        var n;
        for (n = 0; n < t.length; n++) e[t[n]] = !0;
        return e
    }
    function o(t, n) {
        function i(t, i, o, a) {
            if (i = e.lowercase(i), w[i]) for (; y.last() && C[y.last()];) r("", y.last());
            x[i] && y.last() == i && r("", i),
            (a = $[i] || !!a) || y.push(i);
            var u = {};
            o.replace(h,
            function(t, e, n, i, r) {
                u[e] = s(n || i || r || "")
            }),
            n.start && n.start(i, u, a)
        }
        function r(t, i) {
            var r, o = 0;
            if (i = e.lowercase(i)) for (o = y.length - 1; 0 <= o && y[o] != i; o--);
            if (0 <= o) {
                for (r = y.length - 1; r >= o; r--) n.end && n.end(y[r]);
                y.length = o
            }
        }
        "string" != typeof t && (t = null === t || "undefined" == typeof t ? "": "" + t);
        var o, a, u, y = [],
        b = t;
        for (y.last = function() {
            return y[y.length - 1]
        }; t;) {
            if (u = "", a = !0, y.last() && T[y.last()] ? (t = t.replace(RegExp("(.*)<\\s*\\/\\s*" + y.last() + "[^>]*>", "i"),
            function(t, e) {
                return e = e.replace(m, "$1").replace(g, "$1"),
                n.chars && n.chars(s(e)),
                ""
            }), r("", y.last())) : (0 === t.indexOf("<!--") ? (o = t.indexOf("--", 4), 0 <= o && t.lastIndexOf("-->", o) === o && (n.comment && n.comment(t.substring(4, o)), t = t.substring(o + 3), a = !1)) : v.test(t) ? (o = t.match(v)) && (t = t.replace(o[0], ""), a = !1) : p.test(t) ? (o = t.match(d)) && (t = t.substring(o[0].length), o[0].replace(d, r), a = !1) : f.test(t) && ((o = t.match(c)) ? (o[4] && (t = t.substring(o[0].length), o[0].replace(c, i)), a = !1) : (u += "<", t = t.substring(1))), a && (o = t.indexOf("<"), u += 0 > o ? t: t.substring(0, o), t = 0 > o ? "": t.substring(o), n.chars && n.chars(s(u)))), t == b) throw l("badparse", t);
            b = t
        }
        r()
    }
    function s(t) {
        if (!t) return "";
        var e = A.exec(t);
        t = e[1];
        var n = e[3];
        return (e = e[2]) && (j.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in j ? j.textContent: j.innerText),
        t + e + n
    }
    function a(t) {
        return t.replace(/&/g, "&amp;").replace(y,
        function(t) {
            var e = t.charCodeAt(0);
            return t = t.charCodeAt(1),
            "&#" + (1024 * (e - 55296) + (t - 56320) + 65536) + ";"
        }).replace(b,
        function(t) {
            return "&#" + t.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function u(t, n) {
        var i = !1,
        r = e.bind(t, t.push);
        return {
            start: function(t, o, s) {
                t = e.lowercase(t),
                !i && T[t] && (i = t),
                i || !0 !== S[t] || (r("<"), r(t), e.forEach(o,
                function(i, o) {
                    var s = e.lowercase(o),
                    u = "img" === t && "src" === s || "background" === s; ! 0 !== E[s] || !0 === k[s] && !n(i, u) || (r(" "), r(o), r('="'), r(a(i)), r('"'))
                }), r(s ? "/>": ">"))
            },
            end: function(t) {
                t = e.lowercase(t),
                i || !0 !== S[t] || (r("</"), r(t), r(">")),
                t == i && (i = !1)
            },
            chars: function(t) {
                i || r(a(t))
            }
        }
    }
    var l = e.$$minErr("$sanitize"),
    c = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
    d = /^<\/\s*([\w:-]+)[^>]*>/,
    h = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
    f = /^</,
    p = /^<\//,
    m = /\x3c!--(.*?)--\x3e/g,
    v = /<!DOCTYPE([^>]*?)>/i,
    g = /<!\[CDATA\[(.*?)]]\x3e/g,
    y = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    b = /([^\#-~| |!])/g,
    $ = r("area,br,col,hr,img,wbr");
    t = r("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
    n = r("rp,rt");
    var x = e.extend({},
    n, t),
    w = e.extend({},
    t, r("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
    C = e.extend({},
    n, r("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
    T = r("script,style"),
    S = e.extend({},
    $, w, C, x),
    k = r("background,cite,href,longdesc,src"),
    E = e.extend({},
    k, r("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
    j = document.createElement("pre"),
    A = /^(\s*)([\s\S]*?)(\s*)$/;
    e.module("ngSanitize", []).provider("$sanitize",
    function() {
        this.$get = ["$$sanitizeUri",
        function(t) {
            return function(e) {
                var n = [];
                return o(e, u(n,
                function(e, n) {
                    return ! /^unsafe/.test(t(e, n))
                })),
                n.join("")
            }
        }]
    }),
    e.module("ngSanitize").filter("linky", ["$sanitize",
    function(t) {
        var n = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,
        r = /^mailto:/;
        return function(o, s) {
            function a(t) {
                t && f.push(i(t))
            }
            function u(t, n) {
                f.push("<a "),
                e.isDefined(s) && (f.push('target="'), f.push(s), f.push('" ')),
                f.push('href="', t.replace('"', "&quot;"), '">'),
                a(n),
                f.push("</a>")
            }
            if (!o) return o;
            for (var l, c, d, h = o,
            f = []; l = h.match(n);) c = l[0],
            l[2] == l[3] && (c = "mailto:" + c),
            d = l.index,
            a(h.substr(0, d)),
            u(c, l[0].replace(r, "")),
            h = h.substring(d + l[0].length);
            return a(h),
            t(f.join(""))
        }
    }])
} (window, window.angular),
!
function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    }: e(t)
} ("undefined" != typeof window ? window: this,
function(t, e) {
    function n(t) {
        var e = "length" in t && t.length,
        n = rt.type(t);
        return "function" !== n && !rt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }
    function i(t, e, n) {
        if (rt.isFunction(e)) return rt.grep(t,
        function(t, i) {
            return !! e.call(t, i, t) !== n
        });
        if (e.nodeType) return rt.grep(t,
        function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (ht.test(e)) return rt.filter(e, t, n);
            e = rt.filter(e, t)
        }
        return rt.grep(t,
        function(t) {
            return rt.inArray(t, e) >= 0 !== n
        })
    }
    function r(t, e) {
        do t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = $t[t] = {};
        return rt.each(t.match(bt) || [],
        function(t, n) {
            e[n] = !0
        }),
        e
    }
    function s() {
        pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (pt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }
    function a() { (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (s(), rt.ready())
    }
    function u(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(St, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: Tt.test(n) ? rt.parseJSON(n) : n)
                } catch(r) {}
                rt.data(t, e, n)
            } else n = void 0
        }
        return n
    }
    function l(t) {
        var e;
        for (e in t) if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return ! 1;
        return ! 0
    }
    function c(t, e, n, i) {
        if (rt.acceptData(t)) {
            var r, o, s = rt.expando,
            a = t.nodeType,
            u = a ? rt.cache: t,
            l = a ? t[s] : t[s] && s;
            if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof e) return l || (l = a ? t[s] = Y.pop() || rt.guid++:s),
            u[l] || (u[l] = a ? {}: {
                toJSON: rt.noop
            }),
            ("object" == typeof e || "function" == typeof e) && (i ? u[l] = rt.extend(u[l], e) : u[l].data = rt.extend(u[l].data, e)),
            o = u[l],
            i || (o.data || (o.data = {}), o = o.data),
            void 0 !== n && (o[rt.camelCase(e)] = n),
            "string" == typeof e ? (r = o[e], null == r && (r = o[rt.camelCase(e)])) : r = o,
            r
        }
    }
    function d(t, e, n) {
        if (rt.acceptData(t)) {
            var i, r, o = t.nodeType,
            s = o ? rt.cache: t,
            a = o ? t[rt.expando] : rt.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in i ? e = [e] : (e = rt.camelCase(e), e = e in i ? [e] : e.split(" ")),
                    r = e.length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !l(i) : !rt.isEmptyObject(i)) return
                } (n || (delete s[a].data, l(s[a]))) && (o ? rt.cleanData([t], !0) : nt.deleteExpando || s != s.window ? delete s[a] : s[a] = null)
            }
        }
    }
    function h() {
        return ! 0
    }
    function f() {
        return ! 1
    }
    function p() {
        try {
            return pt.activeElement
        } catch(t) {}
    }
    function m(t) {
        var e = Ft.split("|"),
        n = t.createDocumentFragment();
        if (n.createElement) for (; e.length;) n.createElement(e.pop());
        return n
    }
    function v(t, e) {
        var n, i, r = 0,
        o = typeof t.getElementsByTagName !== Ct ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ct ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) ! e || rt.nodeName(i, e) ? o.push(i) : rt.merge(o, v(i, e));
        return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([t], o) : o
    }
    function g(t) {
        Nt.test(t.type) && (t.defaultChecked = t.checked)
    }
    function y(t, e) {
        return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e: e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function b(t) {
        return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function $(t) {
        var e = Xt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function x(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) rt._data(n, "globalEval", !e || rt._data(e[i], "globalEval"))
    }
    function w(t, e) {
        if (1 === e.nodeType && rt.hasData(t)) {
            var n, i, r, o = rt._data(t),
            s = rt._data(e, o),
            a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (n in a) for (i = 0, r = a[n].length; r > i; i++) rt.event.add(e, n, a[n][i])
            }
            s.data && (s.data = rt.extend({},
            s.data))
        }
    }
    function C(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[rt.expando]) {
                r = rt._data(e);
                for (i in r.events) rt.removeEvent(e, i, r.handle);
                e.removeAttribute(rt.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, $(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Nt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected: ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }
    function T(e, n) {
        var i, r = rt(n.createElement(e)).appendTo(n.body),
        o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display: rt.css(r[0], "display");
        return r.detach(),
        o
    }
    function S(t) {
        var e = pt,
        n = Zt[t];
        return n || (n = T(t, e), "none" !== n && n || (Qt = (Qt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Qt[0].contentWindow || Qt[0].contentDocument).document, e.write(), e.close(), n = T(t, e), Qt.detach()), Zt[t] = n),
        n
    }
    function k(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? void delete this.get: (this.get = e).apply(this, arguments)
            }
        }
    }
    function E(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = he.length; r--;) if (e = he[r] + n, e in t) return e;
        return i
    }
    function j(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s],
        i.style && (o[s] = rt._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && jt(i) && (o[s] = rt._data(i, "olddisplay", S(i.nodeName)))) : (r = jt(i), (n && "none" !== n || !r) && rt._data(i, "olddisplay", r ? n: rt.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s],
        i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "": "none"));
        return t
    }
    function A(t, e, n) {
        var i = ue.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function N(t, e, n, i, r) {
        for (var o = n === (i ? "border": "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += rt.css(t, n + Et[o], !0, r)),
        i ? ("content" === n && (s -= rt.css(t, "padding" + Et[o], !0, r)), "margin" !== n && (s -= rt.css(t, "border" + Et[o] + "Width", !0, r))) : (s += rt.css(t, "padding" + Et[o], !0, r), "padding" !== n && (s += rt.css(t, "border" + Et[o] + "Width", !0, r)));
        return s
    }
    function D(t, e, n) {
        var i = !0,
        r = "width" === e ? t.offsetWidth: t.offsetHeight,
        o = te(t),
        s = nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = ee(t, e, o), (0 > r || null == r) && (r = t.style[e]), ie.test(r)) return r;
            i = s && (nt.boxSizingReliable() || r === t.style[e]),
            r = parseFloat(r) || 0
        }
        return r + N(t, e, n || (s ? "border": "content"), i, o) + "px"
    }
    function M(t, e, n, i, r) {
        return new M.prototype.init(t, e, n, i, r)
    }
    function P() {
        return setTimeout(function() {
            fe = void 0
        }),
        fe = rt.now()
    }
    function L(t, e) {
        var n, i = {
            height: t
        },
        r = 0;
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Et[r],
        i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function O(t, e, n) {
        for (var i, r = (be[e] || []).concat(be["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, e, t)) return i
    }
    function F(t, e, n) {
        var i, r, o, s, a, u, l, c, d = this,
        h = {},
        f = t.style,
        p = t.nodeType && jt(t),
        m = rt._data(t, "fxshow");
        n.queue || (a = rt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--,
                rt.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = rt.css(t, "display"), c = "none" === l ? rt._data(t, "olddisplay") || S(t.nodeName) : l, "inline" === c && "none" === rt.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in e) if (r = e[i], me.exec(r)) {
            if (delete e[i], o = o || "toggle" === r, r === (p ? "hide": "show")) {
                if ("show" !== r || !m || void 0 === m[i]) continue;
                p = !0
            }
            h[i] = m && m[i] || rt.style(t, i)
        } else l = void 0;
        if (rt.isEmptyObject(h))"inline" === ("none" === l ? S(t.nodeName) : l) && (f.display = l);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = rt._data(t, "fxshow", {}),
            o && (m.hidden = !p),
            p ? rt(t).show() : d.done(function() {
                rt(t).hide()
            }),
            d.done(function() {
                var e;
                rt._removeData(t, "fxshow");
                for (e in h) rt.style(t, e, h[e])
            });
            for (i in h) s = O(p ? m[i] : 0, i, d),
            i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function I(t, e) {
        var n, i, r, o, s;
        for (n in t) if (i = rt.camelCase(n), r = e[i], o = t[n], rt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = rt.cssHooks[i], s && "expand" in s) {
            o = s.expand(o),
            delete t[i];
            for (n in o) n in t || (t[n] = o[n], e[n] = r)
        } else e[i] = r
    }
    function H(t, e, n) {
        var i, r, o = 0,
        s = ye.length,
        a = rt.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (r) return ! 1;
            for (var e = fe || P(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
            return a.notifyWith(t, [l, o, n]),
            1 > o && u ? n: (a.resolveWith(t, [l]), !1)
        },
        l = a.promise({
            elem: t,
            props: rt.extend({},
            e),
            opts: rt.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: e,
            originalOptions: n,
            startTime: fe || P(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = rt.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0,
                i = e ? l.tweens.length: 0;
                if (r) return this;
                for (r = !0; i > n; n++) l.tweens[n].run(1);
                return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]),
                this
            }
        }),
        c = l.props;
        for (I(c, l.opts.specialEasing); s > o; o++) if (i = ye[o].call(l, t, c, l.opts)) return i;
        return rt.map(c, O, l),
        rt.isFunction(l.opts.start) && l.opts.start.call(t, l),
        rt.fx.timer(rt.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function _(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
            o = e.toLowerCase().match(bt) || [];
            if (rt.isFunction(n)) for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function q(t, e, n, i) {
        function r(a) {
            var u;
            return o[a] = !0,
            rt.each(t[a] || [],
            function(t, a) {
                var l = a(e, n, i);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1)
            }),
            u
        }
        var o = {},
        s = t === ze;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }
    function B(t, e) {
        var n, i, r = rt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t: n || (n = {}))[i] = e[i]);
        return n && rt.extend(!0, t, n),
        t
    }
    function R(t, e, n) {
        for (var i, r, o, s, a = t.contents,
        u = t.dataTypes;
        "*" === u[0];) u.shift(),
        void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r) for (s in a) if (a[s] && a[s].test(r)) {
            u.unshift(s);
            break
        }
        if (u[0] in n) o = u[0];
        else {
            for (s in n) {
                if (!u[0] || t.converters[s + " " + u[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function z(t, e, n, i) {
        var r, o, s, a, u, l = {},
        c = t.dataTypes.slice();
        if (c[1]) for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s) for (r in l) if (a = r.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && t["throws"]) e = s(e);
            else try {
                e = s(e)
            } catch(d) {
                return {
                    state: "parsererror",
                    error: s ? d: "No conversion from " + u + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: e
        }
    }
    function V(t, e, n, i) {
        var r;
        if (rt.isArray(e)) rt.each(e,
        function(e, r) {
            n || Xe.test(t) ? i(t, r) : V(t + "[" + ("object" == typeof r ? e: "") + "]", r, n, i)
        });
        else if (n || "object" !== rt.type(e)) i(t, e);
        else for (r in e) V(t + "[" + r + "]", e[r], n, i)
    }
    function W() {
        try {
            return new t.XMLHttpRequest
        } catch(e) {}
    }
    function U() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch(e) {}
    }
    function X(t) {
        return rt.isWindow(t) ? t: 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var Y = [],
    J = Y.slice,
    K = Y.concat,
    G = Y.push,
    Q = Y.indexOf,
    Z = {},
    tt = Z.toString,
    et = Z.hasOwnProperty,
    nt = {},
    it = "1.11.3",
    rt = function(t, e) {
        return new rt.fn.init(t, e)
    },
    ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    st = /^-ms-/,
    at = /-([\da-z])/gi,
    ut = function(t, e) {
        return e.toUpperCase()
    };
    rt.fn = rt.prototype = {
        jquery: it,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return J.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : J.call(this)
        },
        pushStack: function(t) {
            var e = rt.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return rt.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(rt.map(this,
            function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(J.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(t) {
            var e = this.length,
            n = +t + (0 > t ? e: 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: Y.sort,
        splice: Y.splice
    },
    rt.extend = rt.fn.extend = function() {
        var t, e, n, i, r, o, s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {},
        a++), "object" == typeof s || rt.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++) if (null != (r = arguments[a])) for (i in r) t = s[i],
        n = r[i],
        s !== n && (l && n && (rt.isPlainObject(n) || (e = rt.isArray(n))) ? (e ? (e = !1, o = t && rt.isArray(t) ? t: []) : o = t && rt.isPlainObject(t) ? t: {},
        s[i] = rt.extend(l, o, n)) : void 0 !== n && (s[i] = n));
        return s
    },
    rt.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === rt.type(t)
        },
        isArray: Array.isArray ||
        function(t) {
            return "array" === rt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return ! rt.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return ! 1;
            return ! 0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return ! 1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(n) {
                return ! 1
            }
            if (nt.ownLast) for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "": "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object": typeof t
        },
        globalEval: function(e) {
            e && rt.trim(e) && (t.execScript ||
            function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(st, "ms-").replace(at, ut)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var r, o = 0,
            s = t.length,
            a = n(t);
            if (i) {
                if (a) for (; s > o && (r = e.apply(t[o], i), r !== !1); o++);
                else for (o in t) if (r = e.apply(t[o], i), r === !1) break
            } else if (a) for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else for (o in t) if (r = e.call(t[o], o, t[o]), r === !1) break;
            return t
        },
        trim: function(t) {
            return null == t ? "": (t + "").replace(ot, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [t] : t) : G.call(i, t)),
            i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (Q) return Q.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n: 0; i > n; n++) if (n in e && e[n] === t) return n
            }
            return - 1
        },
        merge: function(t, e) {
            for (var n = +e.length,
            i = 0,
            r = t.length; n > i;) t[r++] = e[i++];
            if (n !== n) for (; void 0 !== e[i];) t[r++] = e[i++];
            return t.length = r,
            t
        },
        grep: function(t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o),
            i !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, i) {
            var r, o = 0,
            s = t.length,
            a = n(t),
            u = [];
            if (a) for (; s > o; o++) r = e(t[o], o, i),
            null != r && u.push(r);
            else for (o in t) r = e(t[o], o, i),
            null != r && u.push(r);
            return K.apply([], u)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r),
            rt.isFunction(t) ? (n = J.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(J.call(arguments)))
            },
            i.guid = t.guid = t.guid || rt.guid++, i) : void 0
        },
        now: function() {
            return + new Date
        },
        support: nt
    }),
    rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var lt = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, l, d, f, p, m;
            if ((e ? e.ownerDocument || e: q) !== M && D(e), e = e || M, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && L) {
                if (11 !== a && (r = yt.exec(t))) if (s = r[1]) {
                    if (9 === a) {
                        if (o = e.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o),
                        n
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && H(e, o) && o.id === s) return n.push(o),
                    n
                } else {
                    if (r[2]) return Q.apply(n, e.getElementsByTagName(t)),
                    n;
                    if ((s = r[3]) && x.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(s)),
                    n
                }
                if (x.qsa && (!O || !O.test(t))) {
                    if (f = d = _, p = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (l = S(t), (d = e.getAttribute("id")) ? f = d.replace($t, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + h(l[u]);
                        p = bt.test(t) && c(e.parentNode) || e,
                        m = l.join(",")
                    }
                    if (m) try {
                        return Q.apply(n, p.querySelectorAll(m)),
                        n
                    } catch(v) {} finally {
                        d || e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(ut, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[_] = !0,
            t
        }
        function r(t) {
            var e = M.createElement("div");
            try {
                return !! t(e)
            } catch(n) {
                return ! 1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) w.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t,
            i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === e) return - 1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function l(t) {
            return i(function(e) {
                return e = +e,
                i(function(n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function d() {}
        function h(t) {
            for (var e = 0,
            n = t.length,
            i = ""; n > e; e++) i += t[e].value;
            return i
        }
        function f(t, e, n) {
            var i = e.dir,
            r = n && "parentNode" === i,
            o = R++;
            return e.first ?
            function(e, n, o) {
                for (; e = e[i];) if (1 === e.nodeType || r) return t(e, n, o)
            }: function(e, n, s) {
                var a, u, l = [B, o];
                if (s) {
                    for (; e = e[i];) if ((1 === e.nodeType || r) && t(e, n, s)) return ! 0
                } else for (; e = e[i];) if (1 === e.nodeType || r) {
                    if (u = e[_] || (e[_] = {}), (a = u[i]) && a[0] === B && a[1] === o) return l[2] = a[2];
                    if (u[i] = l, l[2] = t(e, n, s)) return ! 0
                }
            }
        }
        function p(t) {
            return t.length > 1 ?
            function(e, n, i) {
                for (var r = t.length; r--;) if (!t[r](e, n, i)) return ! 1;
                return ! 0
            }: t[0]
        }
        function m(t, n, i) {
            for (var r = 0,
            o = n.length; o > r; r++) e(t, n[r], i);
            return i
        }
        function v(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; u > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), l && e.push(a));
            return s
        }
        function g(t, e, n, r, o, s) {
            return r && !r[_] && (r = g(r)),
            o && !o[_] && (o = g(o, s)),
            i(function(i, s, a, u) {
                var l, c, d, h = [],
                f = [],
                p = s.length,
                g = i || m(e || "*", a.nodeType ? [a] : a, []),
                y = !t || !i && e ? g: v(g, h, t, a, u),
                b = n ? o || (i ? t: p || r) ? [] : s: y;
                if (n && n(y, b, a, u), r) for (l = v(b, f), r(l, [], a, u), c = l.length; c--;)(d = l[c]) && (b[f[c]] = !(y[f[c]] = d));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(d = b[c]) && l.push(y[c] = d);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (l = o ? tt(i, d) : h[c]) > -1 && (i[l] = !(s[l] = d))
                    }
                } else b = v(b === s ? b.splice(p, b.length) : b),
                o ? o(null, s, b, u) : Q.apply(s, b)
            })
        }
        function y(t) {
            for (var e, n, i, r = t.length,
            o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = f(function(t) {
                return t === e
            },
            s, !0), l = f(function(t) {
                return tt(e, t) > -1
            },
            s, !0), c = [function(t, n, i) {
                var r = !o && (i || n !== j) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i));
                return e = null,
                r
            }]; r > a; a++) if (n = w.relative[t[a].type]) c = [f(p(c), n)];
            else {
                if (n = w.filter[t[a].type].apply(null, t[a].matches), n[_]) {
                    for (i = ++a; r > i && !w.relative[t[i].type]; i++);
                    return g(a > 1 && p(c), a > 1 && h(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*": ""
                    })).replace(ut, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && h(t))
                }
                c.push(n)
            }
            return p(c)
        }
        function b(t, n) {
            var r = n.length > 0,
            o = t.length > 0,
            s = function(i, s, a, u, l) {
                var c, d, h, f = 0,
                p = "0",
                m = i && [],
                g = [],
                y = j,
                b = i || o && w.find.TAG("*", l),
                $ = B += null == y ? 1 : Math.random() || .1,
                x = b.length;
                for (l && (j = s !== M && s); p !== x && null != (c = b[p]); p++) {
                    if (o && c) {
                        for (d = 0; h = t[d++];) if (h(c, s, a)) {
                            u.push(c);
                            break
                        }
                        l && (B = $)
                    }
                    r && ((c = !h && c) && f--, i && m.push(c))
                }
                if (f += p, r && p !== f) {
                    for (d = 0; h = n[d++];) h(m, g, s, a);
                    if (i) {
                        if (f > 0) for (; p--;) m[p] || g[p] || (g[p] = K.call(u));
                        g = v(g)
                    }
                    Q.apply(u, g),
                    l && !i && g.length > 0 && f + n.length > 1 && e.uniqueSort(u)
                }
                return l && (B = $, j = y),
                m
            };
            return r ? i(s) : s
        }
        var $, x, w, C, T, S, k, E, j, A, N, D, M, P, L, O, F, I, H, _ = "sizzle" + 1 * new Date,
        q = t.document,
        B = 0,
        R = 0,
        z = n(),
        V = n(),
        W = n(),
        U = function(t, e) {
            return t === e && (N = !0),
            0
        },
        X = 1 << 31,
        Y = {}.hasOwnProperty,
        J = [],
        K = J.pop,
        G = J.push,
        Q = J.push,
        Z = J.slice,
        tt = function(t, e) {
            for (var n = 0,
            i = t.length; i > n; n++) if (t[n] === e) return n;
            return - 1
        },
        et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        rt = it.replace("w", "w#"),
        ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
        st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
        at = new RegExp(nt + "+", "g"),
        ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
        lt = new RegExp("^" + nt + "*," + nt + "*"),
        ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        ht = new RegExp(st),
        ft = new RegExp("^" + rt + "$"),
        pt = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        },
        mt = /^(?:input|select|textarea|button)$/i,
        vt = /^h\d$/i,
        gt = /^[^{]+\{\s*\[native \w/,
        yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        bt = /[+~]/,
        $t = /'|\\/g,
        xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        wt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        Ct = function() {
            D()
        };
        try {
            Q.apply(J = Z.call(q.childNodes), q.childNodes),
            J[q.childNodes.length].nodeType
        } catch(Tt) {
            Q = {
                apply: J.length ?
                function(t, e) {
                    G.apply(t, Z.call(e))
                }: function(t, e) {
                    for (var n = t.length,
                    i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {},
        T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !! e && "HTML" !== e.nodeName
        },
        D = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t: q;
            return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, P = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), L = !T(i), x.attributes = r(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }), x.getElementsByTagName = r(function(t) {
                return t.appendChild(i.createComment("")),
                !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = gt.test(i.getElementsByClassName), x.getById = r(function(t) {
                return P.appendChild(t).id = _,
                !i.getElementsByName || !i.getElementsByName(_).length
            }), x.getById ? (w.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && L) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            },
            w.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(xt, wt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), w.find.TAG = x.getElementsByTagName ?
            function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            }: function(t, e) {
                var n, i = [],
                r = 0,
                o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            },
            w.find.CLASS = x.getElementsByClassName &&
            function(t, e) {
                return L ? e.getElementsByClassName(t) : void 0
            },
            F = [], O = [], (x.qsa = gt.test(i.querySelectorAll)) && (r(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\f]' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + _ + "-]").length || O.push("~="),
                t.querySelectorAll(":checked").length || O.push(":checked"),
                t.querySelectorAll("a#" + _ + "+*").length || O.push(".#.+[+~]")
            }), r(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && O.push("name" + nt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                O.push(",.*:")
            })), (x.matchesSelector = gt.test(I = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(t) {
                x.disconnectedMatch = I.call(t, "div"),
                I.call(t, "[s!='']:x"),
                F.push("!=", st)
            }), O = O.length && new RegExp(O.join("|")), F = F.length && new RegExp(F.join("|")), e = gt.test(P.compareDocumentPosition), H = e || gt.test(P.contains) ?
            function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement: t,
                i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }: function(t, e) {
                if (e) for (; e = e.parentNode;) if (e === t) return ! 0;
                return ! 1
            },
            U = e ?
            function(t, e) {
                if (t === e) return N = !0,
                0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n: (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === q && H(q, t) ? -1 : e === i || e.ownerDocument === q && H(q, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
            }: function(t, e) {
                if (t === e) return N = !0,
                0;
                var n, r = 0,
                o = t.parentNode,
                a = e.parentNode,
                u = [t],
                l = [e];
                if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                if (o === a) return s(t, e);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; u[r] === l[r];) r++;
                return r ? s(u[r], l[r]) : u[r] === q ? -1 : l[r] === q ? 1 : 0
            },
            i) : M
        },
        e.matches = function(t, n) {
            return e(t, null, null, n)
        },
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== M && D(t), n = n.replace(dt, "='$1']"), !(!x.matchesSelector || !L || F && F.test(n) || O && O.test(n))) try {
                var i = I.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch(r) {}
            return e(n, M, null, [t]).length > 0
        },
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== M && D(t),
            H(t, e)
        },
        e.attr = function(t, e) { (t.ownerDocument || t) !== M && D(t);
            var n = w.attrHandle[e.toLowerCase()],
            i = n && Y.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
            return void 0 !== i ? i: x.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value: null
        },
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        e.uniqueSort = function(t) {
            var e, n = [],
            i = 0,
            r = 0;
            if (N = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), N) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return A = null,
            t
        },
        C = e.getText = function(t) {
            var e, n = "",
            i = 0,
            r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else for (; e = t[i++];) n += C(e);
            return n
        },
        w = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, wt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null: (t[3] ? t[2] = t[4] || t[5] || "": n && ht.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, wt).toLowerCase();
                    return "*" === t ?
                    function() {
                        return ! 0
                    }: function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = z[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && z(t,
                    function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n: !n || (o += "", "=" === n ? o === i: "!=" === n ? o !== i: "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice( - i.length) === i: "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                    s = "last" !== t.slice( - 4),
                    a = "of-type" === e;
                    return 1 === i && 0 === r ?
                    function(t) {
                        return !! t.parentNode
                    }: function(e, n, u) {
                        var l, c, d, h, f, p, m = o !== s ? "nextSibling": "previousSibling",
                        v = e.parentNode,
                        g = a && e.nodeName.toLowerCase(),
                        y = !u && !a;
                        if (v) {
                            if (o) {
                                for (; m;) {
                                    for (d = e; d = d[m];) if (a ? d.nodeName.toLowerCase() === g: 1 === d.nodeType) return ! 1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return ! 0
                            }
                            if (p = [s ? v.firstChild: v.lastChild], s && y) {
                                for (c = v[_] || (v[_] = {}), l = c[t] || [], f = l[0] === B && l[1], h = l[0] === B && l[2], d = f && v.childNodes[f]; d = ++f && d && d[m] || (h = f = 0) || p.pop();) if (1 === d.nodeType && ++h && d === e) {
                                    c[t] = [B, f, h];
                                    break
                                }
                            } else if (y && (l = (e[_] || (e[_] = {}))[t]) && l[0] === B) h = l[1];
                            else for (; (d = ++f && d && d[m] || (h = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== g: 1 !== d.nodeType) || !++h || (y && ((d[_] || (d[_] = {}))[t] = [B, h]), d !== e)););
                            return h -= r,
                            h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[_] ? o(n) : o.length > 1 ? (r = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) i = tt(t, r[s]),
                        t[i] = !(e[i] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                    n = [],
                    r = k(t.replace(ut, "$1"));
                    return r[_] ? i(function(t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, i, o) {
                        return e[0] = t,
                        r(e, null, o, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(xt, wt),
                    function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function(t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(xt, wt).toLowerCase(),
                    function(e) {
                        var n;
                        do
                        if (n = L ? e.lang: e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(),
                        n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return ! 1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(t) {
                    return ! w.pseudos.empty(t)
                },
                header: function(t) {
                    return vt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [0 > n ? n + e: n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e: n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var i = 0 > n ? n + e: n; ++i < e;) t.push(i);
                    return t
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for ($ in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[$] = a($);
        for ($ in {
            submit: !0,
            reset: !0
        }) w.pseudos[$] = u($);
        return d.prototype = w.filters = w.pseudos,
        w.setFilters = new d,
        S = e.tokenize = function(t, n) {
            var i, r, o, s, a, u, l, c = V[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, u = [], l = w.preFilter; a;) { (!i || (r = lt.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])),
                i = !1,
                (r = ct.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ut, " ")
                }), a = a.slice(i.length));
                for (s in w.filter) ! (r = pt[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length: a ? e.error(t) : V(t, u).slice(0)
        },
        k = e.compile = function(t, e) {
            var n, i = [],
            r = [],
            o = W[t + " "];
            if (!o) {
                for (e || (e = S(t)), n = e.length; n--;) o = y(e[n]),
                o[_] ? i.push(o) : r.push(o);
                o = W(t, b(r, i)),
                o.selector = t
            }
            return o
        },
        E = e.select = function(t, e, n, i) {
            var r, o, s, a, u, l = "function" == typeof t && t,
            d = !i && S(t = l.selector || t);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && L && w.relative[o[1].type]) {
                    if (e = (w.find.ID(s.matches[0].replace(xt, wt), e) || [])[0], !e) return n;
                    l && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (r = pt.needsContext.test(t) ? 0 : o.length; r--&&(s = o[r], !w.relative[a = s.type]);) if ((u = w.find[a]) && (i = u(s.matches[0].replace(xt, wt), bt.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(r, 1), t = i.length && h(o), !t) return Q.apply(n, i),
                    n;
                    break
                }
            }
            return (l || k(t, d))(i, e, !L, n, bt.test(t) && c(e.parentNode) || e),
            n
        },
        x.sortStable = _.split("").sort(U).join("") === _,
        x.detectDuplicates = !!N,
        D(),
        x.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(M.createElement("div"))
        }),
        r(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && r(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value",
        function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et,
        function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value: null
        }),
        e
    } (t);
    rt.find = lt,
    rt.expr = lt.selectors,
    rt.expr[":"] = rt.expr.pseudos,
    rt.unique = lt.uniqueSort,
    rt.text = lt.getText,
    rt.isXMLDoc = lt.isXML,
    rt.contains = lt.contains;
    var ct = rt.expr.match.needsContext,
    dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ht = /^.[^:#\[\.,]*$/;
    rt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [i] : [] : rt.find.matches(t, rt.grep(e,
        function(t) {
            return 1 === t.nodeType
        }))
    },
    rt.fn.extend({
        find: function(t) {
            var e, n = [],
            i = this,
            r = i.length;
            if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                for (e = 0; r > e; e++) if (rt.contains(i[e], this)) return ! 0
            }));
            for (e = 0; r > e; e++) rt.find(t, i[e], n);
            return n = this.pushStack(r > 1 ? rt.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + t: t,
            n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !! i(this, "string" == typeof t && ct.test(t) ? rt(t) : t || [], !1).length
        }
    });
    var ft, pt = t.document,
    mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    vt = rt.fn.init = function(t, e) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
            if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !n || !n[1] && e) return ! e || e.jquery ? (e || ft).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e: pt, !0)), dt.test(n[1]) && rt.isPlainObject(e)) for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this
            }
            if (i = pt.getElementById(n[2]), i && i.parentNode) {
                if (i.id !== n[2]) return ft.find(t);
                this.length = 1,
                this[0] = i
            }
            return this.context = pt,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? "undefined" != typeof ft.ready ? ft.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), rt.makeArray(t, this))
    };
    vt.prototype = rt.fn,
    ft = rt(pt);
    var gt = /^(?:parents|prev(?:Until|All))/,
    yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    rt.extend({
        dir: function(t, e, n) {
            for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !rt(r).is(n));) 1 === r.nodeType && i.push(r),
            r = r[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }),
    rt.fn.extend({
        has: function(t) {
            var e, n = rt(t, this),
            i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++) if (rt.contains(this, n[e])) return ! 0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0,
            r = this.length,
            o = [], s = ct.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? rt.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(t, e) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject: this.prevObject.filter(t))
        }
    }),
    rt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e: null
        },
        parents: function(t) {
            return rt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return rt.dir(t, "parentNode", n)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return rt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return rt.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return rt.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return rt.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return rt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return rt.sibling(t.firstChild)
        },
        contents: function(t) {
            return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document: rt.merge([], t.childNodes)
        }
    },
    function(t, e) {
        rt.fn[t] = function(n, i) {
            var r = rt.map(this, e, n);
            return "Until" !== t.slice( - 5) && (i = n),
            i && "string" == typeof i && (r = rt.filter(i, r)),
            this.length > 1 && (yt[t] || (r = rt.unique(r)), gt.test(t) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var bt = /\S+/g,
    $t = {};
    rt.Callbacks = function(t) {
        t = "string" == typeof t ? $t[t] || o(t) : rt.extend({},
        t);
        var e, n, i, r, s, a, u = [],
        l = !t.once && [],
        c = function(o) {
            for (n = t.memory && o, i = !0, s = a || 0, a = 0, r = u.length, e = !0; u && r > s; s++) if (u[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                n = !1;
                break
            }
            e = !1,
            u && (l ? l.length && c(l.shift()) : n ? u = [] : d.disable())
        },
        d = {
            add: function() {
                if (u) {
                    var i = u.length; !
                    function o(e) {
                        rt.each(e,
                        function(e, n) {
                            var i = rt.type(n);
                            "function" === i ? t.unique && d.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    } (arguments),
                    e ? r = u.length: n && (a = i, c(n))
                }
                return this
            },
            remove: function() {
                return u && rt.each(arguments,
                function(t, n) {
                    for (var i; (i = rt.inArray(n, u, i)) > -1;) u.splice(i, 1),
                    e && (r >= i && r--, s >= i && s--)
                }),
                this
            },
            has: function(t) {
                return t ? rt.inArray(t, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                r = 0,
                this
            },
            disable: function() {
                return u = l = n = void 0,
                this
            },
            disabled: function() {
                return ! u
            },
            lock: function() {
                return l = void 0,
                n || d.disable(),
                this
            },
            locked: function() {
                return ! l
            },
            fireWith: function(t, n) {
                return ! u || i && !l || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? l.push(n) : c(n)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return d
    },
    rt.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", rt.Callbacks("once memory"), "resolved"], ["reject", "fail", rt.Callbacks("once memory"), "rejected"], ["notify", "progress", rt.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return rt.Deferred(function(n) {
                        rt.each(e,
                        function(e, o) {
                            var s = rt.isFunction(t[e]) && t[e];
                            r[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && rt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? rt.extend(t, i) : i
                }
            },
            r = {};
            return i.pipe = i.then,
            rt.each(e,
            function(t, o) {
                var s = o[2],
                a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                },
                e[1 ^ t][2].disable, e[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i: this, arguments),
                    this
                },
                r[o[0] + "With"] = s.fireWith
            }),
            i.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            var e, n, i, r = 0,
            o = J.call(arguments),
            s = o.length,
            a = 1 !== s || t && rt.isFunction(t.promise) ? s: 0,
            u = 1 === a ? t: rt.Deferred(),
            l = function(t, n, i) {
                return function(r) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? J.call(arguments) : r,
                    i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                }
            };
            if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, e)) : --a;
            return a || u.resolveWith(i, o),
            u.promise()
        }
    });
    var xt;
    rt.fn.ready = function(t) {
        return rt.ready.promise().done(t),
        this
    },
    rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? rt.readyWait++:rt.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--rt.readyWait: !rt.isReady) {
                if (!pt.body) return setTimeout(rt.ready);
                rt.isReady = !0,
                t !== !0 && --rt.readyWait > 0 || (xt.resolveWith(pt, [rt]), rt.fn.triggerHandler && (rt(pt).triggerHandler("ready"), rt(pt).off("ready")))
            }
        }
    }),
    rt.ready.promise = function(e) {
        if (!xt) if (xt = rt.Deferred(), "complete" === pt.readyState) setTimeout(rt.ready);
        else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", a, !1),
        t.addEventListener("load", a, !1);
        else {
            pt.attachEvent("onreadystatechange", a),
            t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && pt.documentElement
            } catch(i) {}
            n && n.doScroll && !
            function r() {
                if (!rt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(t) {
                        return setTimeout(r, 50)
                    }
                    s(),
                    rt.ready()
                }
            } ()
        }
        return xt.promise(e)
    };
    var wt, Ct = "undefined";
    for (wt in rt(nt)) break;
    nt.ownLast = "0" !== wt,
    nt.inlineBlockNeedsLayout = !1,
    rt(function() {
        var t, e, n, i;
        n = pt.getElementsByTagName("body")[0],
        n && n.style && (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }),
    function() {
        var t = pt.createElement("div");
        if (null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test
            } catch(e) {
                nt.deleteExpando = !1
            }
        }
        t = null
    } (),
    rt.acceptData = function(t) {
        var e = rt.noData[(t.nodeName + " ").toLowerCase()],
        n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
    };
    var Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    St = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando],
            !!t && !l(t)
        },
        data: function(t, e, n) {
            return c(t, e, n)
        },
        removeData: function(t, e) {
            return d(t, e)
        },
        _data: function(t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return d(t, e, !0)
        }
    }),
    rt.fn.extend({
        data: function(t, e) {
            var n, i, r, o = this[0],
            s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = rt.data(o), 1 === o.nodeType && !rt._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = rt.camelCase(i.slice(5)), u(o, i, r[i])));
                    rt._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                rt.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                rt.data(this, t, e)
            }) : o ? u(o, t, rt.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                rt.removeData(this, t)
            })
        }
    }),
    rt.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = rt._data(t, e), n && (!i || rt.isArray(n) ? i = rt._data(t, e, rt.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = rt.queue(t, e),
            i = n.length,
            r = n.shift(),
            o = rt._queueHooks(t, e),
            s = function() {
                rt.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(), i--),
            r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return rt._data(t, n) || rt._data(t, n, {
                empty: rt.Callbacks("once memory").add(function() {
                    rt._removeData(t, e + "queue"),
                    rt._removeData(t, n)
                })
            })
        }
    }),
    rt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--),
            arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this: this.each(function() {
                var n = rt.queue(this, t, e);
                rt._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                rt.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
            r = rt.Deferred(),
            o = this,
            s = this.length,
            a = function() {--i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = rt._data(o[s], t + "queueHooks"),
            n && n.empty && (i++, n.empty.add(a));
            return a(),
            r.promise(e)
        }
    });
    var kt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Et = ["Top", "Right", "Bottom", "Left"],
    jt = function(t, e) {
        return t = e || t,
        "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t)
    },
    At = rt.access = function(t, e, n, i, r, o, s) {
        var a = 0,
        u = t.length,
        l = null == n;
        if ("object" === rt.type(n)) {
            r = !0;
            for (a in n) rt.access(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, rt.isFunction(i) || (s = !0), l && (s ? (e.call(t, i), e = null) : (l = e, e = function(t, e, n) {
            return l.call(rt(t), n)
        })), e)) for (; u > a; a++) e(t[a], n, s ? i: i.call(t[a], a, e(t[a], n)));
        return r ? t: l ? e.call(t) : u ? e(t[0], n) : o
    },
    Nt = /^(?:checkbox|radio)$/i; !
    function() {
        var t = pt.createElement("input"),
        e = pt.createElement("div"),
        n = pt.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick",
        function() {
            nt.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch(i) {
                nt.deleteExpando = !1
            }
        }
    } (),
    function() {
        var e, n, i = pt.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + e,
        (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    } ();
    var Dt = /^(?:input|select|textarea)$/i,
    Mt = /^key/,
    Pt = /^(?:mouse|pointer|contextmenu)|click/,
    Lt = /^(?:focusinfocus|focusoutblur)$/,
    Ot = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, l, c, d, h, f, p, m, v = rt._data(t);
            if (v) {
                for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = rt.guid++), (s = v.events) || (s = v.events = {}), (c = v.handle) || (c = v.handle = function(t) {
                    return typeof rt === Ct || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(c.elem, arguments)
                },
                c.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) o = Ot.exec(e[a]) || [],
                f = m = o[1],
                p = (o[2] || "").split(".").sort(),
                f && (l = rt.event.special[f] || {},
                f = (r ? l.delegateType: l.bindType) || f, l = rt.event.special[f] || {},
                d = rt.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && rt.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                },
                u), (h = s[f]) || (h = s[f] = [], h.delegateCount = 0, l.setup && l.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), l.add && (l.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), rt.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, l, c, d, h, f, p, m, v = rt.hasData(t) && rt._data(t);
            if (v && (c = v.events)) {
                for (e = (e || "").match(bt) || [""], l = e.length; l--;) if (a = Ot.exec(e[l]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                    for (d = rt.event.special[f] || {},
                    f = (i ? d.delegateType: d.bindType) || f, h = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = h.length; o--;) s = h[o],
                    !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                    u && !h.length && (d.teardown && d.teardown.call(t, p, v.handle) !== !1 || rt.removeEvent(t, f, v.handle), delete c[f])
                } else for (f in c) rt.event.remove(t, f + e[l], n, i, !0);
                rt.isEmptyObject(c) && (delete v.handle, rt._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, u, l, c, d, h = [i || pt],
            f = et.call(e, "type") ? e.type: e,
            p = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || pt, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(f + rt.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[rt.expando] ? e: new rt.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : rt.makeArray(n, [e]), l = rt.event.special[f] || {},
            r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
                if (!r && !l.noBubble && !rt.isWindow(i)) {
                    for (u = l.delegateType || f, Lt.test(u + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a),
                    c = a;
                    c === (i.ownerDocument || pt) && h.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0; (a = h[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? u: l.bindType || f,
                o = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle"),
                o && o.apply(a, n),
                o = s && a[s],
                o && o.apply && rt.acceptData(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !r && !e.isDefaultPrevented() && (!l._default || l._default.apply(h.pop(), n) === !1) && rt.acceptData(i) && s && i[f] && !rt.isWindow(i)) {
                    c = i[s],
                    c && (i[s] = null),
                    rt.event.triggered = f;
                    try {
                        i[f]()
                    } catch(m) {}
                    rt.event.triggered = void 0,
                    c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = rt.event.fix(t);
            var e, n, i, r, o, s = [],
            a = J.call(arguments),
            u = (rt._data(this, "events") || {})[t.type] || [],
            l = rt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (s = rt.event.handlers.call(this, t, u), e = 0; (r = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [],
            a = e.delegateCount,
            u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                for (r = [], o = 0; a > o; o++) i = e[o],
                n = i.selector + " ",
                void 0 === r[n] && (r[n] = i.needsContext ? rt(n, this).index(u) >= 0 : rt.find(n, this, null, [u]).length),
                r[n] && r.push(i);
                r.length && s.push({
                    elem: u,
                    handlers: r
                })
            }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
            s
        },
        fix: function(t) {
            if (t[rt.expando]) return t;
            var e, n, i, r = t.type,
            o = t,
            s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Pt.test(r) ? this.mouseHooks: Mt.test(r) ? this.keyHooks: {}), i = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(o), e = i.length; e--;) n = i[e],
            t[n] = o[n];
            return t.target || (t.target = o.srcElement || pt),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode: e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button,
                s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pt, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement: s),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return rt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = rt.extend(new rt.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? rt.event.trigger(r, null, e) : rt.event.dispatch.call(e, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    rt.removeEvent = pt.removeEventListener ?
    function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }: function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === Ct && (t[i] = null), t.detachEvent(i, n))
    },
    rt.Event = function(t, e) {
        return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h: f) : this.type = t, e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void(this[rt.expando] = !0)) : new rt.Event(t, e)
    },
    rt.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = h,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = h,
            t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = h,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(t, e) {
        rt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                r = t.relatedTarget,
                o = t.handleObj;
                return (!r || r !== i && !rt.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e),
                n
            }
        }
    }),
    nt.submitBubbles || (rt.event.special.submit = {
        setup: function() {
            return ! rt.nodeName(this, "form") && void rt.event.add(this, "click._submit keypress._submit",
            function(t) {
                var e = t.target,
                n = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form: void 0;
                n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit",
                function(t) {
                    t._submit_bubble = !0
                }), rt._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return ! rt.nodeName(this, "form") && void rt.event.remove(this, "._submit")
        }
    }),
    nt.changeBubbles || (rt.event.special.change = {
        setup: function() {
            return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change",
            function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), rt.event.add(this, "click._change",
            function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1),
                rt.event.simulate("change", this, t, !0)
            })), !1) : void rt.event.add(this, "beforeactivate._change",
            function(t) {
                var e = t.target;
                Dt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change",
                function(t) { ! this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0)
                }), rt._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return rt.event.remove(this, "._change"),
            !Dt.test(this.nodeName)
        }
    }),
    nt.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(t, e) {
        var n = function(t) {
            rt.event.simulate(e, t.target, rt.event.fix(t), !0)
        };
        rt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                r = rt._data(i, e);
                r || i.addEventListener(t, n, !0),
                rt._data(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                r = rt._data(i, e) - 1;
                r ? rt._data(i, e, r) : (i.removeEventListener(t, n, !0), rt._removeData(i, e))
            }
        }
    }),
    rt.fn.extend({
        on: function(t, e, n, i, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t) this.on(o, e, n, t[o], r);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === r && (s = i, i = function(t) {
                return rt().off(t),
                s.apply(this, arguments)
            },
            i.guid = s.guid || (s.guid = rt.guid++)),
            this.each(function() {
                rt.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj,
            rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0),
            n === !1 && (n = f),
            this.each(function() {
                rt.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                rt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? rt.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Ft = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    It = / jQuery\d+="(?:null|\d+)"/g,
    Ht = new RegExp("<(?:" + Ft + ")[\\s/>]", "i"),
    _t = /^\s+/,
    qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Bt = /<([\w:]+)/,
    Rt = /<tbody/i,
    zt = /<|&#?\w+;/,
    Vt = /<(?:script|style|link)/i,
    Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ut = /^$|\/(?:java|ecma)script/i,
    Xt = /^true\/(.*)/,
    Yt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Jt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Kt = m(pt),
    Gt = Kt.appendChild(pt.createElement("div"));
    Jt.optgroup = Jt.option,
    Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead,
    Jt.th = Jt.td,
    rt.extend({
        clone: function(t, e, n) {
            var i, r, o, s, a, u = rt.contains(t.ownerDocument, t);
            if (nt.html5Clone || rt.isXMLDoc(t) || !Ht.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Gt.innerHTML = t.outerHTML, Gt.removeChild(o = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t))) for (i = v(o), a = v(t), s = 0; null != (r = a[s]); ++s) i[s] && C(r, i[s]);
            if (e) if (n) for (a = a || v(t), i = i || v(o), s = 0; null != (r = a[s]); s++) w(r, i[s]);
            else w(t, o);
            return i = v(o, "script"),
            i.length > 0 && x(i, !u && v(t, "script")),
            i = a = r = null,
            o
        },
        buildFragment: function(t, e, n, i) {
            for (var r, o, s, a, u, l, c, d = t.length,
            h = m(e), f = [], p = 0; d > p; p++) if (o = t[p], o || 0 === o) if ("object" === rt.type(o)) rt.merge(f, o.nodeType ? [o] : o);
            else if (zt.test(o)) {
                for (a = a || h.appendChild(e.createElement("div")), u = (Bt.exec(o) || ["", ""])[1].toLowerCase(), c = Jt[u] || Jt._default, a.innerHTML = c[1] + o.replace(qt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                if (!nt.leadingWhitespace && _t.test(o) && f.push(e.createTextNode(_t.exec(o)[0])), !nt.tbody) for (o = "table" !== u || Rt.test(o) ? "<table>" !== c[1] || Rt.test(o) ? 0 : a: a.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(l = o.childNodes[r], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (rt.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = h.lastChild
            } else f.push(e.createTextNode(o));
            for (a && h.removeChild(a), nt.appendChecked || rt.grep(v(f, "input"), g), p = 0; o = f[p++];) if ((!i || -1 === rt.inArray(o, i)) && (s = rt.contains(o.ownerDocument, o), a = v(h.appendChild(o), "script"), s && x(a), n)) for (r = 0; o = a[r++];) Ut.test(o.type || "") && n.push(o);
            return a = null,
            h
        },
        cleanData: function(t, e) {
            for (var n, i, r, o, s = 0,
            a = rt.expando,
            u = rt.cache,
            l = nt.deleteExpando,
            c = rt.event.special; null != (n = t[s]); s++) if ((e || rt.acceptData(n)) && (r = n[a], o = r && u[r])) {
                if (o.events) for (i in o.events) c[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, o.handle);
                u[r] && (delete u[r], l ? delete n[a] : typeof n.removeAttribute !== Ct ? n.removeAttribute(a) : n[a] = null, Y.push(r))
            }
        }
    }),
    rt.fn.extend({
        text: function(t) {
            return At(this,
            function(t) {
                return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(t))
            },
            null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? rt.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || rt.cleanData(v(n)),
            n.parentNode && (e && rt.contains(n.ownerDocument, n) && x(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && rt.cleanData(v(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && rt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t: e,
            this.map(function() {
                return rt.clone(this, t, e)
            })
        },
        html: function(t) {
            return At(this,
            function(t) {
                var e = this[0] || {},
                n = 0,
                i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(It, "") : void 0;
                if (! ("string" != typeof t || Vt.test(t) || !nt.htmlSerialize && Ht.test(t) || !nt.leadingWhitespace && _t.test(t) || Jt[(Bt.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(qt, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {},
                        1 === e.nodeType && (rt.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch(r) {}
                }
                e && this.empty().append(t)
            },
            null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments,
            function(e) {
                t = this.parentNode,
                rt.cleanData(v(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this: this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = K.apply([], t);
            var n, i, r, o, s, a, u = 0,
            l = this.length,
            c = this,
            d = l - 1,
            h = t[0],
            f = rt.isFunction(h);
            if (f || l > 1 && "string" == typeof h && !nt.checkClone && Wt.test(h)) return this.each(function(n) {
                var i = c.eq(n);
                f && (t[0] = h.call(this, n, i.html())),
                i.domManip(t, e)
            });
            if (l && (a = rt.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = rt.map(v(a, "script"), b), r = o.length; l > u; u++) i = a,
                u !== d && (i = rt.clone(i, !0, !0), r && rt.merge(o, v(i, "script"))),
                e.call(this[u], i, u);
                if (r) for (s = o[o.length - 1].ownerDocument, rt.map(o, $), u = 0; r > u; u++) i = o[u],
                Ut.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(s, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Yt, "")));
                a = n = null
            }
            return this
        }
    }),
    rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(t, e) {
        rt.fn[t] = function(t) {
            for (var n, i = 0,
            r = [], o = rt(t), s = o.length - 1; s >= i; i++) n = i === s ? this: this.clone(!0),
            rt(o[i])[e](n),
            G.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Qt, Zt = {}; !
    function() {
        var t;
        nt.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, n, i;
            return n = pt.getElementsByTagName("body")[0],
            n && n.style ? (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    } ();
    var te, ee, ne = /^margin/,
    ie = new RegExp("^(" + kt + ")(?!px)[a-z%]+$", "i"),
    re = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    },
    ee = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || te(t),
        s = n ? n.getPropertyValue(e) || n[e] : void 0,
        n && ("" !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), ie.test(s) && ne.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)),
        void 0 === s ? s: s + ""
    }) : pt.documentElement.currentStyle && (te = function(t) {
        return t.currentStyle
    },
    ee = function(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || te(t),
        s = n ? n[e] : void 0,
        null == s && a && a[e] && (s = a[e]),
        ie.test(s) && !re.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em": s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)),
        void 0 === s ? s: s + "" || "auto"
    }),
    !
    function() {
        function e() {
            var e, n, i, r;
            n = pt.getElementsByTagName("body")[0],
            n && n.style && (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = s = !1, u = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, s = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, r = e.appendChild(pt.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", u = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === r[0].offsetHeight, a && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), n.removeChild(i))
        }
        var n, i, r, o, s, a, u;
        n = pt.createElement("div"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        r = n.getElementsByTagName("a")[0],
        (i = r && r.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, rt.extend(nt, {
            reliableHiddenOffsets: function() {
                return null == a && e(),
                a
            },
            boxSizingReliable: function() {
                return null == s && e(),
                s
            },
            pixelPosition: function() {
                return null == o && e(),
                o
            },
            reliableMarginRight: function() {
                return null == u && e(),
                u
            }
        }))
    } (),
    rt.swap = function(t, e, n, i) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o],
        t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e) t.style[o] = s[o];
        return r
    };
    var oe = /alpha\([^)]*\)/i,
    se = /opacity\s*=\s*([^)]*)/,
    ae = /^(none|table(?!-c[ea]).+)/,
    ue = new RegExp("^(" + kt + ")(.*)$", "i"),
    le = new RegExp("^([+-])=(" + kt + ")", "i"),
    ce = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    de = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    he = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ee(t, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = rt.camelCase(e),
                u = t.style;
                if (e = rt.cssProps[a] || (rt.cssProps[a] = E(u, a)), s = rt.cssHooks[e] || rt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r: u[e];
                if (o = typeof n, "string" === o && (r = le.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(rt.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || rt.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                    u[e] = n
                } catch(l) {}
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = rt.camelCase(e);
            return e = rt.cssProps[a] || (rt.cssProps[a] = E(t.style, a)),
            s = rt.cssHooks[e] || rt.cssHooks[a],
            s && "get" in s && (o = s.get(t, !0, n)),
            void 0 === o && (o = ee(t, e, i)),
            "normal" === o && e in de && (o = de[e]),
            "" === n || n ? (r = parseFloat(o), n === !0 || rt.isNumeric(r) ? r || 0 : o) : o
        }
    }),
    rt.each(["height", "width"],
    function(t, e) {
        rt.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? ae.test(rt.css(t, "display")) && 0 === t.offsetWidth ? rt.swap(t, ce,
                function() {
                    return D(t, e, i)
                }) : D(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var r = i && te(t);
                return A(t, n, i ? N(t, e, i, nt.boxSizing && "border-box" === rt.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    nt.opacity || (rt.cssHooks.opacity = {
        get: function(t, e) {
            return se.test((e && t.currentStyle ? t.currentStyle.filter: t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": e ? "1": ""
        },
        set: function(t, e) {
            var n = t.style,
            i = t.currentStyle,
            r = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")": "",
            o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (e >= 1 || "" === e) && "" === rt.trim(o.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = oe.test(o) ? o.replace(oe, r) : o + " " + r)
        }
    }),
    rt.cssHooks.marginRight = k(nt.reliableMarginRight,
    function(t, e) {
        return e ? rt.swap(t, {
            display: "inline-block"
        },
        ee, [t, "marginRight"]) : void 0
    }),
    rt.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(t, e) {
        rt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0,
                r = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Et[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        ne.test(t) || (rt.cssHooks[t + e].set = A)
    }),
    rt.fn.extend({
        css: function(t, e) {
            return At(this,
            function(t, e, n) {
                var i, r, o = {},
                s = 0;
                if (rt.isArray(e)) {
                    for (i = te(t), r = e.length; r > s; s++) o[e[s]] = rt.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e)
            },
            t, e, arguments.length > 1)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                jt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }),
    rt.Tween = M,
    M.prototype = {
        constructor: M,
        init: function(t, e, n, i, r, o) {
            this.elem = t,
            this.prop = n,
            this.easing = r || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (rt.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = e = rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), e && "auto" !== e ? e: 0) : t.elem[t.prop]
            },
            set: function(t) {
                rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    rt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return.5 - Math.cos(t * Math.PI) / 2
        }
    },
    rt.fx = M.prototype.init,
    rt.fx.step = {};
    var fe, pe, me = /^(?:toggle|show|hide)$/,
    ve = new RegExp("^(?:([+-])=|)(" + kt + ")([a-z%]*)$", "i"),
    ge = /queueHooks$/,
    ye = [F],
    be = {
        "*": [function(t, e) {
            var n = this.createTween(t, e),
            i = n.cur(),
            r = ve.exec(e),
            o = r && r[3] || (rt.cssNumber[t] ? "": "px"),
            s = (rt.cssNumber[t] || "px" !== o && +i) && ve.exec(rt.css(n.elem, t)),
            a = 1,
            u = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                r = r || [],
                s = +i || 1;
                do a = a || ".5",
                s /= a,
                rt.style(n.elem, t, s + o);
                while (a !== (a = n.cur() / i) && 1 !== a && --u)
            }
            return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
            n
        }]
    };
    rt.Animation = rt.extend(H, {
        tweener: function(t, e) {
            rt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0,
            r = t.length; r > i; i++) n = t[i],
            be[n] = be[n] || [],
            be[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? ye.unshift(t) : ye.push(t)
        }
    }),
    rt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? rt.extend({},
        t) : {
            complete: n || !n && e || rt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !rt.isFunction(e) && e
        };
        return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            rt.isFunction(i.old) && i.old.call(this),
            i.queue && rt.dequeue(this, i.queue)
        },
        i
    },
    rt.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(jt).css("opacity", 0).show().end().animate({
                opacity: e
            },
            t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = rt.isEmptyObject(t),
            o = rt.speed(e, n, i),
            s = function() {
                var e = H(this, rt.extend({},
                t), o); (r || rt._data(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0,
                r = null != t && t + "queueHooks",
                o = rt.timers,
                s = rt._data(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && ge.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1)); (e || !n) && rt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var e, n = rt._data(this),
                i = n[t + "queue"],
                r = n[t + "queueHooks"],
                o = rt.timers,
                s = i ? i.length: 0;
                for (n.finish = !0, rt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    rt.each(["toggle", "show", "hide"],
    function(t, e) {
        var n = rt.fn[e];
        rt.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, r)
        }
    }),
    rt.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(t, e) {
        rt.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    rt.timers = [],
    rt.fx.tick = function() {
        var t, e = rt.timers,
        n = 0;
        for (fe = rt.now(); n < e.length; n++) t = e[n],
        t() || e[n] !== t || e.splice(n--, 1);
        e.length || rt.fx.stop(),
        fe = void 0
    },
    rt.fx.timer = function(t) {
        rt.timers.push(t),
        t() ? rt.fx.start() : rt.timers.pop()
    },
    rt.fx.interval = 13,
    rt.fx.start = function() {
        pe || (pe = setInterval(rt.fx.tick, rt.fx.interval))
    },
    rt.fx.stop = function() {
        clearInterval(pe),
        pe = null
    },
    rt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    rt.fn.delay = function(t, e) {
        return t = rt.fx ? rt.fx.speeds[t] || t: t,
        e = e || "fx",
        this.queue(e,
        function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
    function() {
        var t, e, n, i, r;
        e = pt.createElement("div"),
        e.setAttribute("className", "t"),
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        i = e.getElementsByTagName("a")[0],
        n = pt.createElement("select"),
        r = n.appendChild(pt.createElement("option")),
        t = e.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px",
        nt.getSetAttribute = "t" !== e.className,
        nt.style = /top/.test(i.getAttribute("style")),
        nt.hrefNormalized = "/a" === i.getAttribute("href"),
        nt.checkOn = !!t.value,
        nt.optSelected = r.selected,
        nt.enctype = !!pt.createElement("form").enctype,
        n.disabled = !0,
        nt.optDisabled = !r.disabled,
        t = pt.createElement("input"),
        t.setAttribute("value", ""),
        nt.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        nt.radioValue = "t" === t.value
    } ();
    var $e = /\r/g;
    rt.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = rt.isFunction(t), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, rt(this).val()) : t, null == r ? r = "": "number" == typeof r ? r += "": rt.isArray(r) && (r = rt.map(r,
                function(t) {
                    return null == t ? "": t + ""
                })), e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n: (n = r.value, "string" == typeof n ? n.replace($e, "") : null == n ? "": n)) : void 0
        }
    }),
    rt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = rt.find.attr(t, "value");
                    return null != e ? e: rt.trim(rt.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options,
                    r = t.selectedIndex,
                    o = "select-one" === t.type || 0 > r,
                    s = o ? null: [], a = o ? r + 1 : i.length, u = 0 > r ? a: o ? r: 0; a > u; u++) if (n = i[u], !(!n.selected && u !== r || (nt.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
                        if (e = rt(n).val(), o) return e;
                        s.push(e)
                    }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, r = t.options,
                    o = rt.makeArray(e), s = r.length; s--;) if (i = r[s], rt.inArray(rt.valHooks.option.get(i), o) >= 0) try {
                        i.selected = n = !0
                    } catch(a) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    rt.each(["radio", "checkbox"],
    function() {
        rt.valHooks[this] = {
            set: function(t, e) {
                return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0
            }
        },
        nt.checkOn || (rt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on": t.value
        })
    });
    var xe, we, Ce = rt.expr.attrHandle,
    Te = /^(?:checked|selected)$/i,
    Se = nt.getSetAttribute,
    ke = nt.input;
    rt.fn.extend({
        attr: function(t, e) {
            return At(this, rt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                rt.removeAttr(this, t)
            })
        }
    }),
    rt.extend({
        attr: function(t, e, n) {
            var i, r, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ct ? rt.prop(t, e, n) : (1 === o && rt.isXMLDoc(t) || (e = e.toLowerCase(), i = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? we: xe)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r: (r = rt.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r: (t.setAttribute(e, n + ""), n) : void rt.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, r = 0,
            o = e && e.match(bt);
            if (o && 1 === t.nodeType) for (; n = o[r++];) i = rt.propFix[n] || n,
            rt.expr.match.bool.test(n) ? ke && Se || !Te.test(n) ? t[i] = !1 : t[rt.camelCase("default-" + n)] = t[i] = !1 : rt.attr(t, n, ""),
            t.removeAttribute(Se ? n: i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        }
    }),
    we = {
        set: function(t, e, n) {
            return e === !1 ? rt.removeAttr(t, n) : ke && Se || !Te.test(n) ? t.setAttribute(!Se && rt.propFix[n] || n, n) : t[rt.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    rt.each(rt.expr.match.bool.source.match(/\w+/g),
    function(t, e) {
        var n = Ce[e] || rt.find.attr;
        Ce[e] = ke && Se || !Te.test(e) ?
        function(t, e, i) {
            var r, o;
            return i || (o = Ce[e], Ce[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Ce[e] = o),
            r
        }: function(t, e, n) {
            return n ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    ke && Se || (rt.attrHooks.value = {
        set: function(t, e, n) {
            return rt.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, n)
        }
    }),
    Se || (xe = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)),
            i.value = e += "",
            "value" === n || e === t.getAttribute(n) ? e: void 0
        }
    },
    Ce.id = Ce.name = Ce.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value: null
    },
    rt.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value: void 0
        },
        set: xe.set
    },
    rt.attrHooks.contenteditable = {
        set: function(t, e, n) {
            xe.set(t, "" !== e && e, n)
        }
    },
    rt.each(["width", "height"],
    function(t, e) {
        rt.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })),
    nt.style || (rt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var Ee = /^(?:input|select|textarea|button|object)$/i,
    je = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(t, e) {
            return At(this, rt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = rt.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch(e) {}
            })
        }
    }),
    rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, r, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !rt.isXMLDoc(t),
            o && (e = rt.propFix[e] || e, r = rt.propHooks[e]),
            void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i: t[e] = n: r && "get" in r && null !== (i = r.get(t, e)) ? i: t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = rt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ee.test(t.nodeName) || je.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }),
    nt.hrefNormalized || rt.each(["href", "src"],
    function(t, e) {
        rt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    nt.optSelected || (rt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
            null
        }
    }),
    rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        rt.propFix[this.toLowerCase()] = this
    }),
    nt.enctype || (rt.propFix.enctype = "encoding");
    var Ae = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = 0,
            u = this.length,
            l = "string" == typeof t && t;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).addClass(t.call(this, e, this.className))
            });
            if (l) for (e = (t || "").match(bt) || []; u > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
                for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                s = rt.trim(i),
                n.className !== s && (n.className = s)
            }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0,
            u = this.length,
            l = 0 === arguments.length || "string" == typeof t && t;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).removeClass(t.call(this, e, this.className))
            });
            if (l) for (e = (t || "").match(bt) || []; u > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
                for (o = 0; r = e[o++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                s = t ? rt.trim(i) : "",
                n.className !== s && (n.className = s)
            }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(rt.isFunction(t) ?
            function(n) {
                rt(this).toggleClass(t.call(this, n, this.className, e), e)
            }: function() {
                if ("string" === n) for (var e, i = 0,
                r = rt(this), o = t.match(bt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(n === Ct || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "": rt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ",
            n = 0,
            i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(e) >= 0) return ! 0;
            return ! 1
        }
    }),
    rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(t, e) {
        rt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    rt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Ne = rt.now(),
    De = /\?/,
    Me = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
        r = rt.trim(e + "");
        return r && !rt.trim(r.replace(Me,
        function(t, e, r, o) {
            return n && e && (i = 0),
            0 === i ? t: (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + e)
    },
    rt.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch(r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e),
        n
    };
    var Pe, Le, Oe = /#.*$/,
    Fe = /([?&])_=[^&]*/,
    Ie = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    He = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    _e = /^(?:GET|HEAD)$/,
    qe = /^\/\//,
    Be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Re = {},
    ze = {},
    Ve = "*/".concat("*");
    try {
        Le = location.href
    } catch(We) {
        Le = pt.createElement("a"),
        Le.href = "",
        Le = Le.href
    }
    Pe = Be.exec(Le.toLowerCase()) || [],
    rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Le,
            type: "GET",
            isLocal: He.test(Pe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ve,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? B(B(t, rt.ajaxSettings), e) : B(rt.ajaxSettings, t)
        },
        ajaxPrefilter: _(Re),
        ajaxTransport: _(ze),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var r, c, g, y, $, w = e;
                2 !== b && (b = 2, a && clearTimeout(a), l = void 0, s = i || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (y = R(d, x, n)), y = z(d, y, x, r), r ? (d.ifModified && ($ = x.getResponseHeader("Last-Modified"), $ && (rt.lastModified[o] = $), $ = x.getResponseHeader("etag"), $ && (rt.etag[o] = $)), 204 === t || "HEAD" === d.type ? w = "nocontent": 304 === t ? w = "notmodified": (w = y.state, c = y.data, g = y.error, r = !g)) : (g = w, (t || !w) && (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || w) + "", r ? p.resolveWith(h, [c, w, x]) : p.rejectWith(h, [x, w, g]), x.statusCode(v), v = void 0, u && f.trigger(r ? "ajaxSuccess": "ajaxError", [x, d, r ? c: g]), m.fireWith(h, [x, w]), u && (f.trigger("ajaxComplete", [x, d]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0),
            e = e || {};
            var i, r, o, s, a, u, l, c, d = rt.ajaxSetup({},
            e),
            h = d.context || d,
            f = d.context && (h.nodeType || h.jquery) ? rt(h) : rt.event,
            p = rt.Deferred(),
            m = rt.Callbacks("once memory"),
            v = d.statusCode || {},
            g = {},
            y = {},
            b = 0,
            $ = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!c) for (c = {}; e = Ie.exec(s);) c[e[1].toLowerCase()] = e[2];
                        e = c[t.toLowerCase()]
                    }
                    return null == e ? null: e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s: null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return b || (t = y[n] = y[n] || t, g[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return b || (d.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > b) for (e in t) v[e] = [v[e], t[e]];
                    else x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || $;
                    return l && l.abort(e),
                    n(0, e),
                    this
                }
            };
            if (p.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Le) + "").replace(Oe, "").replace(qe, Pe[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = Be.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Pe[1] && i[2] === Pe[2] && (i[3] || ("http:" === i[1] ? "80": "443")) === (Pe[3] || ("http:" === Pe[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = rt.param(d.data, d.traditional)), q(Re, d, e, x), 2 === b) return x;
            u = rt.event && d.global,
            u && 0 === rt.active++&&rt.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !_e.test(d.type),
            o = d.url,
            d.hasContent || (d.data && (o = d.url += (De.test(o) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fe.test(o) ? o.replace(Fe, "$1_=" + Ne++) : o + (De.test(o) ? "&": "?") + "_=" + Ne++)),
            d.ifModified && (rt.lastModified[o] && x.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && x.setRequestHeader("If-None-Match", rt.etag[o])),
            (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType),
            x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ve + "; q=0.01": "") : d.accepts["*"]);
            for (r in d.headers) x.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === b)) return x.abort();
            $ = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) x[r](d[r]);
            if (l = q(ze, d, e, x)) {
                x.readyState = 1,
                u && f.trigger("ajaxSend", [x, d]),
                d.async && d.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                },
                d.timeout));
                try {
                    b = 1,
                    l.send(g, n)
                } catch(w) {
                    if (! (2 > b)) throw w;
                    n( - 1, w)
                }
            } else n( - 1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return rt.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return rt.get(t, void 0, e, "script")
        }
    }),
    rt.each(["get", "post"],
    function(t, e) {
        rt[e] = function(t, n, i, r) {
            return rt.isFunction(n) && (r = r || i, i = n, n = void 0),
            rt.ajax({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            })
        }
    }),
    rt._evalUrl = function(t) {
        return rt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    rt.fn.extend({
        wrapAll: function(t) {
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(rt.isFunction(t) ?
            function(e) {
                rt(this).wrapInner(t.call(this, e))
            }: function() {
                var e = rt(this),
                n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = rt.isFunction(t);
            return this.each(function(n) {
                rt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    rt.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"))
    },
    rt.expr.filters.visible = function(t) {
        return ! rt.expr.filters.hidden(t)
    };
    var Ue = /%20/g,
    Xe = /\[\]$/,
    Ye = /\r?\n/g,
    Je = /^(?:submit|button|image|reset|file)$/i,
    Ke = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(t, e) {
        var n, i = [],
        r = function(t, e) {
            e = rt.isFunction(e) ? e() : null == e ? "": e,
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t,
        function() {
            r(this.name, this.value)
        });
        else for (n in t) V(n, t[n], e, r);
        return i.join("&").replace(Ue, "+")
    },
    rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = rt.prop(this, "elements");
                return t ? rt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !rt(this).is(":disabled") && Ke.test(this.nodeName) && !Je.test(t) && (this.checked || !Nt.test(t))
            }).map(function(t, e) {
                var n = rt(this).val();
                return null == n ? null: rt.isArray(n) ? rt.map(n,
                function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ye, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ye, "\r\n")
                }
            }).get()
        }
    }),
    rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
    function() {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || U()
    }: W;
    var Ge = 0,
    Qe = {},
    Ze = rt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload",
    function() {
        for (var t in Qe) Qe[t](void 0, !0)
    }),
    nt.cors = !!Ze && "withCredentials" in Ze,
    Ze = nt.ajax = !!Ze,
    Ze && rt.ajaxTransport(function(t) {
        if (!t.crossDomain || nt.cors) {
            var e;
            return {
                send: function(n, i) {
                    var r, o = t.xhr(),
                    s = ++Ge;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                    t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                    o.send(t.hasContent && t.data || null),
                    e = function(n, r) {
                        var a, u, l;
                        if (e && (r || 4 === o.readyState)) if (delete Qe[s], e = void 0, o.onreadystatechange = rt.noop, r) 4 !== o.readyState && o.abort();
                        else {
                            l = {},
                            a = o.status,
                            "string" == typeof o.responseText && (l.text = o.responseText);
                            try {
                                u = o.statusText
                            } catch(c) {
                                u = ""
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = l.text ? 200 : 404
                        }
                        l && i(a, u, l, o.getAllResponseHeaders())
                    },
                    t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Qe[s] = e: e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }),
    rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return rt.globalEval(t),
                t
            }
        }
    }),
    rt.ajaxPrefilter("script",
    function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    rt.ajaxTransport("script",
    function(t) {
        if (t.crossDomain) {
            var e, n = pt.head || rt("head")[0] || pt.documentElement;
            return {
                send: function(i, r) {
                    e = pt.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function(t, n) { (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    },
                    n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
    en = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || rt.expando + "_" + Ne++;
            return this[t] = !0,
            t
        }
    }),
    rt.ajaxPrefilter("json jsonp",
    function(e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && (en.test(e.url) ? "url": "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + r) : e.jsonp !== !1 && (e.url += (De.test(e.url) ? "&": "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || rt.error(r + " was not called"),
            s[0]
        },
        e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        },
        i.always(function() {
            t[r] = o,
            e[r] && (e.jsonpCallback = n.jsonpCallback, tn.push(r)),
            s && rt.isFunction(o) && o(s[0]),
            s = o = void 0
        }), "script") : void 0
    }),
    rt.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1),
        e = e || pt;
        var i = dt.exec(t),
        r = !n && [];
        return i ? [e.createElement(i[1])] : (i = rt.buildFragment([t], e, r), r && r.length && rt(r).remove(), rt.merge([], i.childNodes))
    };
    var nn = rt.fn.load;
    rt.fn.load = function(t, e, n) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var i, r, o, s = this,
        a = t.indexOf(" ");
        return a >= 0 && (i = rt.trim(t.slice(a, t.length)), t = t.slice(0, a)),
        rt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"),
        s.length > 0 && rt.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            s.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t)
        }).complete(n &&
        function(t, e) {
            s.each(n, r || [t.responseText, e, t])
        }),
        this
    },
    rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(t, e) {
        rt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    rt.expr.filters.animated = function(t) {
        return rt.grep(rt.timers,
        function(e) {
            return t === e.elem
        }).length
    };
    var rn = t.document.documentElement;
    rt.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, l, c = rt.css(t, "position"),
            d = rt(t),
            h = {};
            "static" === c && (t.style.position = "relative"),
            a = d.offset(),
            o = rt.css(t, "top"),
            u = rt.css(t, "left"),
            l = ("absolute" === c || "fixed" === c) && rt.inArray("auto", [o, u]) > -1,
            l ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(u) || 0),
            rt.isFunction(e) && (e = e.call(t, n, a)),
            null != e.top && (h.top = e.top - a.top + s),
            null != e.left && (h.left = e.left - a.left + r),
            "using" in e ? e.using.call(t, h) : d.css(h)
        }
    },
    rt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this: this.each(function(e) {
                rt.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                top: 0,
                left: 0
            },
            r = this[0],
            o = r && r.ownerDocument;
            return o ? (e = o.documentElement, rt.contains(e, r) ? (typeof r.getBoundingClientRect !== Ct && (i = r.getBoundingClientRect()), n = X(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                },
                i = this[0];
                return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), n.left += rt.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - rt.css(i, "marginTop", !0),
                    left: e.left - n.left - rt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || rn; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position");) t = t.offsetParent;
                return t || rn
            })
        }
    }),
    rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, e) {
        var n = /Y/.test(e);
        rt.fn[t] = function(i) {
            return At(this,
            function(t, i, r) {
                var o = X(t);
                return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? rt(o).scrollLeft() : r, n ? r: rt(o).scrollTop()) : t[i] = r)
            },
            t, i, arguments.length, null)
        }
    }),
    rt.each(["top", "left"],
    function(t, e) {
        rt.cssHooks[e] = k(nt.pixelPosition,
        function(t, n) {
            return n ? (n = ee(t, e), ie.test(n) ? rt(t).position()[e] + "px": n) : void 0
        })
    }),
    rt.each({
        Height: "height",
        Width: "width"
    },
    function(t, e) {
        rt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        },
        function(n, i) {
            rt.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                s = n || (i === !0 || r === !0 ? "margin": "border");
                return At(this,
                function(e, n, i) {
                    var r;
                    return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? rt.css(e, n, s) : rt.style(e, n, i, s)
                },
                e, o ? i: void 0, o, null)
            }
        })
    }),
    rt.fn.size = function() {
        return this.length
    },
    rt.fn.andSelf = rt.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return rt
    });
    var on = t.jQuery,
    sn = t.$;
    return rt.noConflict = function(e) {
        return t.$ === rt && (t.$ = sn),
        e && t.jQuery === rt && (t.jQuery = on),
        rt
    },
    typeof e === Ct && (t.jQuery = t.$ = rt),
    rt
}),
!
function(t) {
    var e = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function() {
            return ! 0
        },
        onSlideBefore: function() {
            return ! 0
        },
        onSlideAfter: function() {
            return ! 0
        },
        onSlideNext: function() {
            return ! 0
        },
        onSlidePrev: function() {
            return ! 0
        },
        onSliderResize: function() {
            return ! 0
        }
    };
    t.fn.bxSlider = function(n) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            t(this).bxSlider(n)
        }),
        this;
        var r = {},
        o = this,
        s = t(window).width(),
        a = t(window).height();
        if (!t(o).data("bxSlider")) {
            var u = function() {
                t(o).data("bxSlider") || (r.settings = t.extend({},
                e, n), r.settings.slideWidth = parseInt(r.settings.slideWidth), r.children = o.children(r.settings.slideSelector), r.children.length < r.settings.minSlides && (r.settings.minSlides = r.children.length), r.children.length < r.settings.maxSlides && (r.settings.maxSlides = r.children.length), r.settings.randomStart && (r.settings.startSlide = Math.floor(Math.random() * r.children.length)), r.active = {
                    index: r.settings.startSlide
                },
                r.carousel = r.settings.minSlides > 1 || r.settings.maxSlides > 1, r.carousel && (r.settings.preloadImages = "all"), r.minThreshold = r.settings.minSlides * r.settings.slideWidth + (r.settings.minSlides - 1) * r.settings.slideMargin, r.maxThreshold = r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin, r.working = !1, r.controls = {},
                r.interval = null, r.animProp = "vertical" === r.settings.mode ? "top": "left", r.usingCSS = r.settings.useCSS && "fade" !== r.settings.mode &&
                function() {
                    for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], n = 0; n < e.length; n++) if (void 0 !== t.style[e[n]]) return r.cssPrefix = e[n].replace("Perspective", "").toLowerCase(),
                    r.animProp = "-" + r.cssPrefix + "-transform",
                    !0;
                    return ! 1
                } (), "vertical" === r.settings.mode && (r.settings.maxSlides = r.settings.minSlides), o.data("origStyle", o.attr("style")), o.children(r.settings.slideSelector).each(function() {
                    t(this).data("origStyle", t(this).attr("style"))
                }), l())
            },
            l = function() {
                var e = r.children.eq(r.settings.startSlide);
                o.wrap('<div class="' + r.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'),
                r.viewport = o.parent(),
                r.settings.ariaLive && !r.settings.ticker && r.viewport.attr("aria-live", "polite"),
                r.loader = t('<div class="bx-loading" />'),
                r.viewport.prepend(r.loader),
                o.css({
                    width: "horizontal" === r.settings.mode ? 1e3 * r.children.length + 215 + "%": "auto",
                    position: "relative"
                }),
                r.usingCSS && r.settings.easing ? o.css("-" + r.cssPrefix + "-transition-timing-function", r.settings.easing) : r.settings.easing || (r.settings.easing = "swing"),
                r.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }),
                r.viewport.parent().css({
                    maxWidth: f()
                }),
                r.children.css({
                    "float": "horizontal" === r.settings.mode ? "left": "none",
                    listStyle: "none",
                    position: "relative"
                }),
                r.children.css("width", p()),
                "horizontal" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginRight", r.settings.slideMargin),
                "vertical" === r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginBottom", r.settings.slideMargin),
                "fade" === r.settings.mode && (r.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), r.children.eq(r.settings.startSlide).css({
                    zIndex: r.settings.slideZIndex,
                    display: "block"
                })),
                r.controls.el = t('<div class="bx-controls" />'),
                r.settings.captions && T(),
                r.active.last = r.settings.startSlide === v() - 1,
                r.settings.video && o.fitVids(),
                ("all" === r.settings.preloadImages || r.settings.ticker) && (e = r.children),
                r.settings.ticker ? r.settings.pager = !1 : (r.settings.controls && w(), r.settings.auto && r.settings.autoControls && C(), r.settings.pager && x(), (r.settings.controls || r.settings.autoControls || r.settings.pager) && r.viewport.after(r.controls.el)),
                c(e, d)
            },
            c = function(e, n) {
                var i = e.find('img:not([src=""]), iframe').length,
                r = 0;
                return 0 === i ? void n() : void e.find('img:not([src=""]), iframe').each(function() {
                    t(this).one("load error",
                    function() {++r === i && n()
                    }).each(function() {
                        this.complete && t(this).trigger("load")
                    })
                })
            },
            d = function() {
                if (r.settings.infiniteLoop && "fade" !== r.settings.mode && !r.settings.ticker) {
                    var e = "vertical" === r.settings.mode ? r.settings.minSlides: r.settings.maxSlides,
                    n = r.children.slice(0, e).clone(!0).addClass("bx-clone"),
                    i = r.children.slice( - e).clone(!0).addClass("bx-clone");
                    r.settings.ariaHidden && (n.attr("aria-hidden", !0), i.attr("aria-hidden", !0)),
                    o.append(n).prepend(i)
                }
                r.loader.remove(),
                y(),
                "vertical" === r.settings.mode && (r.settings.adaptiveHeight = !0),
                r.viewport.height(h()),
                o.redrawSlider(),
                r.settings.onSliderLoad.call(o, r.active.index),
                r.initialized = !0,
                r.settings.responsive && t(window).bind("resize", V),
                r.settings.auto && r.settings.autoStart && (v() > 1 || r.settings.autoSlideForOnePage) && L(),
                r.settings.ticker && O(),
                r.settings.pager && N(r.settings.startSlide),
                r.settings.controls && P(),
                r.settings.touchEnabled && !r.settings.ticker && _(),
                r.settings.keyboardEnabled && !r.settings.ticker && t(document).keydown(H)
            },
            h = function() {
                var e = 0,
                n = t();
                if ("vertical" === r.settings.mode || r.settings.adaptiveHeight) if (r.carousel) {
                    var o = 1 === r.settings.moveSlides ? r.active.index: r.active.index * g();
                    for (n = r.children.eq(o), i = 1; i <= r.settings.maxSlides - 1; i++) n = o + i >= r.children.length ? n.add(r.children.eq(i - 1)) : n.add(r.children.eq(o + i))
                } else n = r.children.eq(r.active.index);
                else n = r.children;
                return "vertical" === r.settings.mode ? (n.each(function(n) {
                    e += t(this).outerHeight()
                }), r.settings.slideMargin > 0 && (e += r.settings.slideMargin * (r.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                    return t(this).outerHeight(!1)
                }).get()),
                "border-box" === r.viewport.css("box-sizing") ? e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom")) + parseFloat(r.viewport.css("border-top-width")) + parseFloat(r.viewport.css("border-bottom-width")) : "padding-box" === r.viewport.css("box-sizing") && (e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom"))),
                e
            },
            f = function() {
                var t = "100%";
                return r.settings.slideWidth > 0 && (t = "horizontal" === r.settings.mode ? r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin: r.settings.slideWidth),
                t
            },
            p = function() {
                var t = r.settings.slideWidth,
                e = r.viewport.width();
                if (0 === r.settings.slideWidth || r.settings.slideWidth > e && !r.carousel || "vertical" === r.settings.mode) t = e;
                else if (r.settings.maxSlides > 1 && "horizontal" === r.settings.mode) {
                    if (e > r.maxThreshold) return t;
                    e < r.minThreshold ? t = (e - r.settings.slideMargin * (r.settings.minSlides - 1)) / r.settings.minSlides: r.settings.shrinkItems && (t = Math.floor((e + r.settings.slideMargin) / Math.ceil((e + r.settings.slideMargin) / (t + r.settings.slideMargin)) - r.settings.slideMargin))
                }
                return t
            },
            m = function() {
                var t = 1,
                e = null;
                return "horizontal" === r.settings.mode && r.settings.slideWidth > 0 ? r.viewport.width() < r.minThreshold ? t = r.settings.minSlides: r.viewport.width() > r.maxThreshold ? t = r.settings.maxSlides: (e = r.children.first().width() + r.settings.slideMargin, t = Math.floor((r.viewport.width() + r.settings.slideMargin) / e)) : "vertical" === r.settings.mode && (t = r.settings.minSlides),
                t
            },
            v = function() {
                var t = 0,
                e = 0,
                n = 0;
                if (r.settings.moveSlides > 0) if (r.settings.infiniteLoop) t = Math.ceil(r.children.length / g());
                else for (; e < r.children.length;)++t,
                e = n + m(),
                n += r.settings.moveSlides <= m() ? r.settings.moveSlides: m();
                else t = Math.ceil(r.children.length / m());
                return t
            },
            g = function() {
                return r.settings.moveSlides > 0 && r.settings.moveSlides <= m() ? r.settings.moveSlides: m()
            },
            y = function() {
                var t, e, n;
                r.children.length > r.settings.maxSlides && r.active.last && !r.settings.infiniteLoop ? "horizontal" === r.settings.mode ? (e = r.children.last(), t = e.position(), b( - (t.left - (r.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === r.settings.mode && (n = r.children.length - r.settings.minSlides, t = r.children.eq(n).position(), b( - t.top, "reset", 0)) : (t = r.children.eq(r.active.index * g()).position(), r.active.index === v() - 1 && (r.active.last = !0), void 0 !== t && ("horizontal" === r.settings.mode ? b( - t.left, "reset", 0) : "vertical" === r.settings.mode && b( - t.top, "reset", 0)))
            },
            b = function(e, n, i, s) {
                var a, u;
                r.usingCSS ? (u = "vertical" === r.settings.mode ? "translate3d(0, " + e + "px, 0)": "translate3d(" + e + "px, 0, 0)", o.css("-" + r.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" === n ? (o.css(r.animProp, u), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                function(e) {
                    t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D())
                }) : D()) : "reset" === n ? o.css(r.animProp, u) : "ticker" === n && (o.css("-" + r.cssPrefix + "-transition-timing-function", "linear"), o.css(r.animProp, u), 0 !== i ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                function(e) {
                    t(e.target).is(o) && (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), F())
                }) : (b(s.resetValue, "reset", 0), F()))) : (a = {},
                a[r.animProp] = e, "slide" === n ? o.animate(a, i, r.settings.easing,
                function() {
                    D()
                }) : "reset" === n ? o.css(r.animProp, e) : "ticker" === n && o.animate(a, i, "linear",
                function() {
                    b(s.resetValue, "reset", 0),
                    F()
                }))
            },
            $ = function() {
                for (var e = "",
                n = "",
                i = v(), o = 0; o < i; o++) n = "",
                r.settings.buildPager && t.isFunction(r.settings.buildPager) || r.settings.pagerCustom ? (n = r.settings.buildPager(o), r.pagerEl.addClass("bx-custom-pager")) : (n = o + 1, r.pagerEl.addClass("bx-default-pager")),
                e += '<div class="bx-pager-item"><a href="" data-slide-index="' + o + '" class="bx-pager-link">' + n + "</a></div>";
                r.pagerEl.html(e)
            },
            x = function() {
                r.settings.pagerCustom ? r.pagerEl = t(r.settings.pagerCustom) : (r.pagerEl = t('<div class="bx-pager" />'), r.settings.pagerSelector ? t(r.settings.pagerSelector).html(r.pagerEl) : r.controls.el.addClass("bx-has-pager").append(r.pagerEl), $()),
                r.pagerEl.on("click touchend", "a", A)
            },
            w = function() {
                r.controls.next = t('<a class="bx-next" href="">' + r.settings.nextText + "</a>"),
                r.controls.prev = t('<a class="bx-prev" href="">' + r.settings.prevText + "</a>"),
                r.controls.next.bind("click touchend", S),
                r.controls.prev.bind("click touchend", k),
                r.settings.nextSelector && t(r.settings.nextSelector).append(r.controls.next),
                r.settings.prevSelector && t(r.settings.prevSelector).append(r.controls.prev),
                r.settings.nextSelector || r.settings.prevSelector || (r.controls.directionEl = t('<div class="bx-controls-direction" />'), r.controls.directionEl.append(r.controls.prev).append(r.controls.next), r.controls.el.addClass("bx-has-controls-direction").append(r.controls.directionEl))
            },
            C = function() {
                r.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + r.settings.startText + "</a></div>"),
                r.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + r.settings.stopText + "</a></div>"),
                r.controls.autoEl = t('<div class="bx-controls-auto" />'),
                r.controls.autoEl.on("click", ".bx-start", E),
                r.controls.autoEl.on("click", ".bx-stop", j),
                r.settings.autoControlsCombine ? r.controls.autoEl.append(r.controls.start) : r.controls.autoEl.append(r.controls.start).append(r.controls.stop),
                r.settings.autoControlsSelector ? t(r.settings.autoControlsSelector).html(r.controls.autoEl) : r.controls.el.addClass("bx-has-controls-auto").append(r.controls.autoEl),
                M(r.settings.autoStart ? "stop": "start")
            },
            T = function() {
                r.children.each(function(e) {
                    var n = t(this).find("img:first").attr("title");
                    void 0 !== n && ("" + n).length && t(this).append('<div class="bx-caption"><span>' + n + "</span></div>")
                })
            },
            S = function(t) {
                t.preventDefault(),
                r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide())
            },
            k = function(t) {
                t.preventDefault(),
                r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide())
            },
            E = function(t) {
                o.startAuto(),
                t.preventDefault()
            },
            j = function(t) {
                o.stopAuto(),
                t.preventDefault()
            },
            A = function(e) {
                var n, i;
                e.preventDefault(),
                r.controls.el.hasClass("disabled") || (r.settings.auto && r.settings.stopAutoOnClick && o.stopAuto(), n = t(e.currentTarget), void 0 !== n.attr("data-slide-index") && (i = parseInt(n.attr("data-slide-index")), i !== r.active.index && o.goToSlide(i)))
            },
            N = function(e) {
                var n = r.children.length;
                return "short" === r.settings.pagerType ? (r.settings.maxSlides > 1 && (n = Math.ceil(r.children.length / r.settings.maxSlides)), void r.pagerEl.html(e + 1 + r.settings.pagerShortSeparator + n)) : (r.pagerEl.find("a").removeClass("active"), void r.pagerEl.each(function(n, i) {
                    t(i).find("a").eq(e).addClass("active")
                }))
            },
            D = function() {
                if (r.settings.infiniteLoop) {
                    var t = "";
                    0 === r.active.index ? t = r.children.eq(0).position() : r.active.index === v() - 1 && r.carousel ? t = r.children.eq((v() - 1) * g()).position() : r.active.index === r.children.length - 1 && (t = r.children.eq(r.children.length - 1).position()),
                    t && ("horizontal" === r.settings.mode ? b( - t.left, "reset", 0) : "vertical" === r.settings.mode && b( - t.top, "reset", 0))
                }
                r.working = !1,
                r.settings.onSlideAfter.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index)
            },
            M = function(t) {
                r.settings.autoControlsCombine ? r.controls.autoEl.html(r.controls[t]) : (r.controls.autoEl.find("a").removeClass("active"), r.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
            },
            P = function() {
                1 === v() ? (r.controls.prev.addClass("disabled"), r.controls.next.addClass("disabled")) : !r.settings.infiniteLoop && r.settings.hideControlOnEnd && (0 === r.active.index ? (r.controls.prev.addClass("disabled"), r.controls.next.removeClass("disabled")) : r.active.index === v() - 1 ? (r.controls.next.addClass("disabled"), r.controls.prev.removeClass("disabled")) : (r.controls.prev.removeClass("disabled"), r.controls.next.removeClass("disabled")))
            },
            L = function() {
                r.settings.autoDelay > 0 ? setTimeout(o.startAuto, r.settings.autoDelay) : (o.startAuto(), t(window).focus(function() {
                    o.startAuto()
                }).blur(function() {
                    o.stopAuto()
                })),
                r.settings.autoHover && o.hover(function() {
                    r.interval && (o.stopAuto(!0), r.autoPaused = !0)
                },
                function() {
                    r.autoPaused && (o.startAuto(!0), r.autoPaused = null)
                })
            },
            O = function() {
                var e, n, i, s, a, u, l, c, d = 0;
                "next" === r.settings.autoDirection ? o.append(r.children.clone().addClass("bx-clone")) : (o.prepend(r.children.clone().addClass("bx-clone")), e = r.children.first().position(), d = "horizontal" === r.settings.mode ? -e.left: -e.top),
                b(d, "reset", 0),
                r.settings.pager = !1,
                r.settings.controls = !1,
                r.settings.autoControls = !1,
                r.settings.tickerHover && (r.usingCSS ? (s = "horizontal" === r.settings.mode ? 4 : 5, r.viewport.hover(function() {
                    n = o.css("-" + r.cssPrefix + "-transform"),
                    i = parseFloat(n.split(",")[s]),
                    b(i, "reset", 0)
                },
                function() {
                    c = 0,
                    r.children.each(function(e) {
                        c += "horizontal" === r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                    }),
                    a = r.settings.speed / c,
                    u = "horizontal" === r.settings.mode ? "left": "top",
                    l = a * (c - Math.abs(parseInt(i))),
                    F(l)
                })) : r.viewport.hover(function() {
                    o.stop()
                },
                function() {
                    c = 0,
                    r.children.each(function(e) {
                        c += "horizontal" === r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                    }),
                    a = r.settings.speed / c,
                    u = "horizontal" === r.settings.mode ? "left": "top",
                    l = a * (c - Math.abs(parseInt(o.css(u)))),
                    F(l)
                })),
                F()
            },
            F = function(t) {
                var e, n, i, s = t ? t: r.settings.speed,
                a = {
                    left: 0,
                    top: 0
                },
                u = {
                    left: 0,
                    top: 0
                };
                "next" === r.settings.autoDirection ? a = o.find(".bx-clone").first().position() : u = r.children.first().position(),
                e = "horizontal" === r.settings.mode ? -a.left: -a.top,
                n = "horizontal" === r.settings.mode ? -u.left: -u.top,
                i = {
                    resetValue: n
                },
                b(e, "ticker", s, i)
            },
            I = function(e) {
                var n = t(window),
                i = {
                    top: n.scrollTop(),
                    left: n.scrollLeft()
                },
                r = e.offset();
                return i.right = i.left + n.width(),
                i.bottom = i.top + n.height(),
                r.right = r.left + e.outerWidth(),
                r.bottom = r.top + e.outerHeight(),
                !(i.right < r.left || i.left > r.right || i.bottom < r.top || i.top > r.bottom)
            },
            H = function(t) {
                var e = document.activeElement.tagName.toLowerCase(),
                n = "input|textarea",
                i = new RegExp(e, ["i"]),
                r = i.exec(n);
                if (null == r && I(o)) {
                    if (39 === t.keyCode) return S(t),
                    !1;
                    if (37 === t.keyCode) return k(t),
                    !1
                }
            },
            _ = function() {
                r.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                },
                r.viewport.bind("touchstart MSPointerDown pointerdown", q),
                r.viewport.on("click", ".bxslider a",
                function(t) {
                    r.viewport.hasClass("click-disabled") && (t.preventDefault(), r.viewport.removeClass("click-disabled"))
                })
            },
            q = function(t) {
                if (r.controls.el.addClass("disabled"), r.working) t.preventDefault(),
                r.controls.el.removeClass("disabled");
                else {
                    r.touch.originalPos = o.position();
                    var e = t.originalEvent,
                    n = "undefined" != typeof e.changedTouches ? e.changedTouches: [e];
                    r.touch.start.x = n[0].pageX,
                    r.touch.start.y = n[0].pageY,
                    r.viewport.get(0).setPointerCapture && (r.pointerId = e.pointerId, r.viewport.get(0).setPointerCapture(r.pointerId)),
                    r.viewport.bind("touchmove MSPointerMove pointermove", R),
                    r.viewport.bind("touchend MSPointerUp pointerup", z),
                    r.viewport.bind("MSPointerCancel pointercancel", B)
                }
            },
            B = function(t) {
                b(r.touch.originalPos.left, "reset", 0),
                r.controls.el.removeClass("disabled"),
                r.viewport.unbind("MSPointerCancel pointercancel", B),
                r.viewport.unbind("touchmove MSPointerMove pointermove", R),
                r.viewport.unbind("touchend MSPointerUp pointerup", z),
                r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
            },
            R = function(t) {
                var e = t.originalEvent,
                n = "undefined" != typeof e.changedTouches ? e.changedTouches: [e],
                i = Math.abs(n[0].pageX - r.touch.start.x),
                o = Math.abs(n[0].pageY - r.touch.start.y),
                s = 0,
                a = 0;
                3 * i > o && r.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * o > i && r.settings.preventDefaultSwipeY && t.preventDefault(),
                "fade" !== r.settings.mode && r.settings.oneToOneTouch && ("horizontal" === r.settings.mode ? (a = n[0].pageX - r.touch.start.x, s = r.touch.originalPos.left + a) : (a = n[0].pageY - r.touch.start.y, s = r.touch.originalPos.top + a), b(s, "reset", 0))
            },
            z = function(t) {
                r.viewport.unbind("touchmove MSPointerMove pointermove", R),
                r.controls.el.removeClass("disabled");
                var e = t.originalEvent,
                n = "undefined" != typeof e.changedTouches ? e.changedTouches: [e],
                i = 0,
                s = 0;
                r.touch.end.x = n[0].pageX,
                r.touch.end.y = n[0].pageY,
                "fade" === r.settings.mode ? (s = Math.abs(r.touch.start.x - r.touch.end.x), s >= r.settings.swipeThreshold && (r.touch.start.x > r.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())) : ("horizontal" === r.settings.mode ? (s = r.touch.end.x - r.touch.start.x, i = r.touch.originalPos.left) : (s = r.touch.end.y - r.touch.start.y, i = r.touch.originalPos.top), !r.settings.infiniteLoop && (0 === r.active.index && s > 0 || r.active.last && s < 0) ? b(i, "reset", 200) : Math.abs(s) >= r.settings.swipeThreshold ? (s < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()) : b(i, "reset", 200)),
                r.viewport.unbind("touchend MSPointerUp pointerup", z),
                r.viewport.get(0).releasePointerCapture && r.viewport.get(0).releasePointerCapture(r.pointerId)
            },
            V = function(e) {
                if (r.initialized) if (r.working) window.setTimeout(V, 10);
                else {
                    var n = t(window).width(),
                    i = t(window).height();
                    s === n && a === i || (s = n, a = i, o.redrawSlider(), r.settings.onSliderResize.call(o, r.active.index))
                }
            },
            W = function(t) {
                var e = m();
                r.settings.ariaHidden && !r.settings.ticker && (r.children.attr("aria-hidden", "true"), r.children.slice(t, t + e).attr("aria-hidden", "false"))
            },
            U = function(t) {
                return t < 0 ? r.settings.infiniteLoop ? v() - 1 : r.active.index: t >= v() ? r.settings.infiniteLoop ? 0 : r.active.index: t
            };
            return o.goToSlide = function(e, n) {
                var i, s, a, u, l = !0,
                c = 0,
                d = {
                    left: 0,
                    top: 0
                },
                f = null;
                if (r.oldIndex = r.active.index, r.active.index = U(e), !r.working && r.active.index !== r.oldIndex) {
                    if (r.working = !0, l = r.settings.onSlideBefore.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index), "undefined" != typeof l && !l) return r.active.index = r.oldIndex,
                    void(r.working = !1);
                    "next" === n ? r.settings.onSlideNext.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (l = !1) : "prev" === n && (r.settings.onSlidePrev.call(o, r.children.eq(r.active.index), r.oldIndex, r.active.index) || (l = !1)),
                    r.active.last = r.active.index >= v() - 1,
                    (r.settings.pager || r.settings.pagerCustom) && N(r.active.index),
                    r.settings.controls && P(),
                    "fade" === r.settings.mode ? (r.settings.adaptiveHeight && r.viewport.height() !== h() && r.viewport.animate({
                        height: h()
                    },
                    r.settings.adaptiveHeightSpeed), r.children.filter(":visible").fadeOut(r.settings.speed).css({
                        zIndex: 0
                    }), r.children.eq(r.active.index).css("zIndex", r.settings.slideZIndex + 1).fadeIn(r.settings.speed,
                    function() {
                        t(this).css("zIndex", r.settings.slideZIndex),
                        D()
                    })) : (r.settings.adaptiveHeight && r.viewport.height() !== h() && r.viewport.animate({
                        height: h()
                    },
                    r.settings.adaptiveHeightSpeed), !r.settings.infiniteLoop && r.carousel && r.active.last ? "horizontal" === r.settings.mode ? (f = r.children.eq(r.children.length - 1), d = f.position(), c = r.viewport.width() - f.outerWidth()) : (i = r.children.length - r.settings.minSlides, d = r.children.eq(i).position()) : r.carousel && r.active.last && "prev" === n ? (s = 1 === r.settings.moveSlides ? r.settings.maxSlides - g() : (v() - 1) * g() - (r.children.length - r.settings.maxSlides), f = o.children(".bx-clone").eq(s), d = f.position()) : "next" === n && 0 === r.active.index ? (d = o.find("> .bx-clone").eq(r.settings.maxSlides).position(), r.active.last = !1) : e >= 0 && (u = e * parseInt(g()), d = r.children.eq(u).position()), "undefined" != typeof d ? (a = "horizontal" === r.settings.mode ? -(d.left - c) : -d.top, b(a, "slide", r.settings.speed)) : r.working = !1),
                    r.settings.ariaHidden && W(r.active.index * g())
                }
            },
            o.goToNextSlide = function() {
                if (r.settings.infiniteLoop || !r.active.last) {
                    var t = parseInt(r.active.index) + 1;
                    o.goToSlide(t, "next")
                }
            },
            o.goToPrevSlide = function() {
                if (r.settings.infiniteLoop || 0 !== r.active.index) {
                    var t = parseInt(r.active.index) - 1;
                    o.goToSlide(t, "prev")
                }
            },
            o.startAuto = function(t) {
                r.interval || (r.interval = setInterval(function() {
                    "next" === r.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide()
                },
                r.settings.pause), r.settings.autoControls && t !== !0 && M("stop"))
            },
            o.stopAuto = function(t) {
                r.interval && (clearInterval(r.interval), r.interval = null, r.settings.autoControls && t !== !0 && M("start"))
            },
            o.getCurrentSlide = function() {
                return r.active.index
            },
            o.getCurrentSlideElement = function() {
                return r.children.eq(r.active.index)
            },
            o.getSlideElement = function(t) {
                return r.children.eq(t)
            },
            o.getSlideCount = function() {
                return r.children.length
            },
            o.isWorking = function() {
                return r.working
            },
            o.redrawSlider = function() {
                r.children.add(o.find(".bx-clone")).outerWidth(p()),
                r.viewport.css("height", h()),
                r.settings.ticker || y(),
                r.active.last && (r.active.index = v() - 1),
                r.active.index >= v() && (r.active.last = !0),
                r.settings.pager && !r.settings.pagerCustom && ($(), N(r.active.index)),
                r.settings.ariaHidden && W(r.active.index * g())
            },
            o.destroySlider = function() {
                r.initialized && (r.initialized = !1, t(".bx-clone", this).remove(), r.children.each(function() {
                    void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), r.controls.el && r.controls.el.remove(), r.controls.next && r.controls.next.remove(), r.controls.prev && r.controls.prev.remove(), r.pagerEl && r.settings.controls && !r.settings.pagerCustom && r.pagerEl.remove(), t(".bx-caption", this).remove(), r.controls.autoEl && r.controls.autoEl.remove(), clearInterval(r.interval), r.settings.responsive && t(window).unbind("resize", V), r.settings.keyboardEnabled && t(document).unbind("keydown", H), t(this).removeData("bxSlider"))
            },
            o.reloadSlider = function(e) {
                void 0 !== e && (n = e),
                o.destroySlider(),
                u(),
                t(o).data("bxSlider", this)
            },
            u(),
            t(o).data("bxSlider", this),
            this
        }
    }
} (jQuery),
function(t) {
    function e(e, n, i, r) {
        var o = {
            data: r || 0 === r || r === !1 ? r: n ? n.data: {},
            _wrap: n ? n._wrap: null,
            tmpl: null,
            parent: n || null,
            nodes: [],
            calls: l,
            nest: c,
            wrap: d,
            html: h,
            update: f
        };
        return e && t.extend(o, e, {
            nodes: [],
            parent: n
        }),
        i && (o.tmpl = i, o._ctnt = o._ctnt || o.tmpl(t, o), o.key = ++x, (C.length ? b: y)[x] = o),
        o
    }
    function n(e, r, o) {
        var s, a = o ? t.map(o,
        function(t) {
            return "string" == typeof t ? e.key ? t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + v + '="' + e.key + '" $2') : t: n(t, e, t._ctnt)
        }) : e;
        return r ? a: (a = a.join(""), a.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
        function(e, n, r, o) {
            s = t(r).get(),
            u(s),
            n && (s = i(n).concat(s)),
            o && (s = s.concat(i(o)))
        }), s ? s: i(a))
    }
    function i(e) {
        var n = document.createElement("div");
        return n.innerHTML = e,
        t.makeArray(n.childNodes)
    }
    function r(e) {
        return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + t.trim(e).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
        function(e, n, i, r, o, a, u) {
            var l, c, d, h = t.tmpl.tag[i];
            if (!h) throw "Unknown template tag: " + i;
            return l = h._default || [],
            a && !/\w$/.test(o) && (o += a, a = ""),
            o ? (o = s(o), u = u ? "," + s(u) + ")": a ? ")": "", c = a ? o.indexOf(".") > -1 ? o + s(a) : "(" + o + ").call($item" + u: o, d = a ? c: "(typeof(" + o + ")==='function'?(" + o + ").call($item):(" + o + "))") : d = c = l.$1 || "null",
            r = s(r),
            "');" + h[n ? "close": "open"].split("$notnull_1").join(o ? "typeof(" + o + ")!=='undefined' && (" + o + ")!=null": "true").split("$1a").join(d).split("$1").join(c).split("$2").join(r || l.$2 || "") + "__.push('"
        }) + "');}return __;")
    }
    function o(e, i) {
        e._wrap = n(e, !0, t.isArray(i) ? i: [g.test(i) ? i: t(i).html()]).join("")
    }
    function s(t) {
        return t ? t.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }
    function a(t) {
        var e = document.createElement("div");
        return e.appendChild(t.cloneNode(!0)),
        e.innerHTML
    }
    function u(n) {
        function i(n) {
            function i(t) {
                t += l,
                s = c[t] = c[t] || e(s, y[s.parent.key + l] || s.parent)
            }
            var r, o, s, a, u = n;
            if (a = n.getAttribute(v)) {
                for (; u.parentNode && 1 === (u = u.parentNode).nodeType && !(r = u.getAttribute(v)););
                r !== a && (u = u.parentNode ? 11 === u.nodeType ? 0 : u.getAttribute(v) || 0 : 0, (s = y[a]) || (s = b[a], s = e(s, y[u] || b[u]), s.key = ++x, y[x] = s), w && i(a)),
                n.removeAttribute(v)
            } else w && (s = t.data(n, "tmplItem")) && (i(s.key), y[s.key] = s, u = t.data(n.parentNode, "tmplItem"), u = u ? u.key: 0);
            if (s) {
                for (o = s; o && o.key != u;) o.nodes.push(n),
                o = o.parent;
                delete s._ctnt,
                delete s._wrap,
                t.data(n, "tmplItem", s)
            }
        }
        var r, o, s, a, u, l = "_" + w,
        c = {};
        for (s = 0, a = n.length; s < a; s++) if (1 === (r = n[s]).nodeType) {
            for (o = r.getElementsByTagName("*"), u = o.length - 1; u >= 0; u--) i(o[u]);
            i(r)
        }
    }
    function l(t, e, n, i) {
        return t ? void C.push({
            _: t,
            tmpl: e,
            item: this,
            data: n,
            options: i
        }) : C.pop()
    }
    function c(e, n, i) {
        return t.tmpl(t.template(e), n, i, this)
    }
    function d(e, n) {
        var i = e.options || {};
        return i.wrapped = n,
        t.tmpl(t.template(e.tmpl), e.data, i, e.item)
    }
    function h(e, n) {
        var i = this._wrap;
        return t.map(t(t.isArray(i) ? i.join("") : i).filter(e || "*"),
        function(t) {
            return n ? t.innerText || t.textContent: t.outerHTML || a(t)
        })
    }
    function f() {
        var e = this.nodes;
        t.tmpl(null, null, null, this).insertBefore(e[0]),
        t(e).remove()
    }
    var p, m = t.fn.domManip,
    v = "_tmplitem",
    g = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
    y = {},
    b = {},
    $ = {
        key: 0,
        data: {}
    },
    x = 0,
    w = 0,
    C = [];
    t.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, n) {
        t.fn[e] = function(i) {
            var r, o, s, a, u = [],
            l = t(i),
            c = 1 === this.length && this[0].parentNode;
            if (p = y || {},
            c && 11 === c.nodeType && 1 === c.childNodes.length && 1 === l.length) l[n](this[0]),
            u = this;
            else {
                for (o = 0, s = l.length; o < s; o++) w = o,
                r = (o > 0 ? this.clone(!0) : this).get(),
                t(l[o])[n](r),
                u = u.concat(r);
                w = 0,
                u = this.pushStack(u, e, l.selector)
            }
            return a = p,
            p = null,
            t.tmpl.complete(a),
            u
        }
    }),
    t.fn.extend({
        tmpl: function(e, n, i) {
            return t.tmpl(this[0], e, n, i)
        },
        tmplItem: function() {
            return t.tmplItem(this[0])
        },
        template: function(e) {
            return t.template(e, this[0])
        },
        domManip: function(e, n, i) {
            if (e[0] && t.isArray(e[0])) {
                for (var r, o = t.makeArray(arguments), s = e[0], a = s.length, u = 0; u < a && !(r = t.data(s[u++], "tmplItem")););
                r && w && (o[2] = function(e) {
                    t.tmpl.afterManip(this, e, i)
                }),
                m.apply(this, o)
            } else m.apply(this, arguments);
            return w = 0,
            !p && t.tmpl.complete(y),
            this
        }
    }),
    t.extend({
        tmpl: function(i, r, s, a) {
            var u, l = !a;
            if (l) a = $,
            i = t.template[i] || t.template(null, i),
            b = {};
            else if (!i) return i = a.tmpl,
            y[a.key] = a,
            a.nodes = [],
            a.wrapped && o(a, a.wrapped),
            t(n(a, null, a.tmpl(t, a)));
            return i ? ("function" == typeof r && (r = r.call(a || {})), s && s.wrapped && o(s, s.wrapped), u = t.isArray(r) ? t.map(r,
            function(t) {
                return t ? e(s, a, i, t) : null
            }) : [e(s, a, i, r)], l ? t(n(a, null, u)) : u) : []
        },
        tmplItem: function(e) {
            var n;
            for (e instanceof t && (e = e[0]); e && 1 === e.nodeType && !(n = t.data(e, "tmplItem")) && (e = e.parentNode););
            return n || $
        },
        template: function(e, n) {
            return n ? ("string" == typeof n ? n = r(n) : n instanceof t && (n = n[0] || {}), n.nodeType && (n = t.data(n, "tmpl") || t.data(n, "tmpl", r(n.innerHTML))), "string" == typeof e ? t.template[e] = n: n) : e ? "string" != typeof e ? t.template(null, e) : t.template[e] || t.template(null, g.test(e) ? e: t(e)) : null
        },
        encode: function(t) {
            return ("" + t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    }),
    t.extend(t.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(__,$1,$2);__=[];",
                close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){__.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){__.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            y = {}
        },
        afterManip: function(e, n, i) {
            var r = 11 === n.nodeType ? t.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
            i.call(e, n),
            u(r),
            w++
        }
    })
} (jQuery),
function() {
    function m() {
        return function() {}
    }
    function p(t) {
        return function() {
            return this[t]
        }
    }
    function q(t) {
        return function() {
            return t
        }
    }
    function u(t, e, n) {
        if ("string" == typeof t) {
            if (0 === t.indexOf("#") && (t = t.slice(1)), u.va[t]) return u.va[t];
            t = u.u(t)
        }
        if (!t || !t.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return t.player || new u.Player(t, e, n)
    }
    function C(t) {
        t.t("vjs-lock-showing")
    }
    function E(t, e, n, i) {
        return n !== b ? (t.a.style[e] = -1 !== ("" + n).indexOf("%") || -1 !== ("" + n).indexOf("px") ? n: "auto" === n ? "": n + "px", i || t.k("resize"), t) : t.a ? (n = t.a.style[e], i = n.indexOf("px"), -1 !== i ? parseInt(n.slice(0, i), 10) : parseInt(t.a["offset" + u.Z(e)], 10)) : 0
    }
    function F(t, e) {
        var n, i, r, o;
        return n = t.a,
        i = u.cd(n),
        o = r = n.offsetWidth,
        n = t.handle,
        t.h.Gd ? (o = i.top, i = e.changedTouches ? e.changedTouches[0].pageY: e.pageY, n && (n = n.u().offsetHeight, o += n / 2, r -= n), Math.max(0, Math.min(1, (o - i + r) / r))) : (r = i.left, i = e.changedTouches ? e.changedTouches[0].pageX: e.pageX, n && (n = n.u().offsetWidth, r += n / 2, o -= n), Math.max(0, Math.min(1, (i - r) / o)))
    }
    function ca(t, e) {
        t.Y(e),
        e.d("click", u.bind(t,
        function() {
            C(this)
        }))
    }
    function H(t) {
        t.na = f,
        t.ua.n("vjs-lock-showing"),
        t.a.setAttribute("aria-pressed", f),
        t.L && 0 < t.L.length && t.L[0].u().focus()
    }
    function G(t) {
        t.na = l,
        C(t.ua),
        t.a.setAttribute("aria-pressed", l)
    }
    function da(t) {
        var e = {
            sources: [],
            tracks: []
        };
        if (u.l.B(e, u.wb(t)), t.hasChildNodes()) {
            var n, i, r, o;
            for (t = t.childNodes, r = 0, o = t.length; r < o; r++) n = t[r],
            i = n.nodeName.toLowerCase(),
            "source" === i ? e.sources.push(u.wb(n)) : "track" === i && e.tracks.push(u.wb(n))
        }
        return e
    }
    function I(t, e, n) {
        t.i && (t.aa = l, t.i.dispose(), t.Cb && (t.Cb = l, clearInterval(t.Ta)), t.Db && J(t), t.i = l),
        "Html5" !== e && t.M && (u.g.gc(t.M), t.M = h),
        t.xa = e,
        t.aa = l;
        var i = u.l.B({
            source: n,
            parentEl: t.a
        },
        t.h[e.toLowerCase()]);
        n && (n.src == t.v.src && 0 < t.v.currentTime && (i.startTime = t.v.currentTime), t.v.src = n.src),
        t.i = new window.videojs[e](t, i),
        t.i.I(function() {
            if (this.c.za(), !this.m.progressEvents) {
                var t = this.c;
                t.Cb = f,
                t.Ta = setInterval(u.bind(t,
                function() {
                    this.v.mb < this.buffered().end(0) ? this.k("progress") : 1 == this.bufferedPercent() && (clearInterval(this.Ta), this.k("progress"))
                }), 500),
                t.i.U("progress",
                function() {
                    this.m.progressEvents = f;
                    var t = this.c;
                    t.Cb = l,
                    clearInterval(t.Ta)
                })
            }
            this.m.timeupdateEvents || (t = this.c, t.Db = f, t.d("play", t.Cc), t.d("pause", t.wa), t.i.U("timeupdate",
            function() {
                this.m.timeupdateEvents = f,
                J(this.c)
            }))
        })
    }
    function J(t) {
        t.Db = l,
        t.wa(),
        t.o("play", t.Cc),
        t.o("pause", t.wa)
    }
    function L(t, e, n) {
        if (t.i && !t.i.aa) t.i.I(function() {
            this[e](n)
        });
        else try {
            t.i[e](n)
        } catch(i) {
            throw u.log(i),
            i
        }
    }
    function K(t, e) {
        if (t.i && t.i.aa) try {
            return t.i[e]()
        } catch(n) {
            throw t.i[e] === b ? u.log("Video.js: " + e + " method not defined for " + t.xa + " playback technology.", n) : "TypeError" == n.name ? (u.log("Video.js: " + e + " unavailable on " + t.xa + " playback technology element.", n), t.i.aa = l) : u.log(n),
            n
        }
    }
    function M(t) {
        t.gd = l,
        u.o(document, "keydown", t.jc),
        document.documentElement.style.overflow = t.Zc,
        u.t(document.body, "vjs-full-window"),
        t.k("exitFullWindow")
    }
    function ea() {
        var t = u.media.Xa[i];
        return function() {
            throw Error('The "' + t + "\" method is not available on the playback technology's API")
        }
    }
    function ha() {
        var t = T[V],
        e = t.charAt(0).toUpperCase() + t.slice(1);
        S["set" + e] = function(e) {
            return this.a.vjs_setProperty(t, e)
        }
    }
    function W(t) {
        S[t] = function() {
            return this.a.vjs_getProperty(t)
        }
    }
    function X(t, e, n) {
        for (var i, r, o = t.ya,
        s = 0,
        a = o.length; s < a; s++) i = o[s],
        i.id() === e ? (i.show(), r = i) : n && i.H() == n && 0 < i.mode() && i.disable(); (e = r ? r.H() : n ? n: l) && t.k(e + "trackchange")
    }
    function Y(t) {
        0 === t.ha && t.load(),
        0 === t.ga && (t.c.d("timeupdate", u.bind(t, t.update, t.R)), t.c.d("ended", u.bind(t, t.reset, t.R)), ("captions" === t.A || "subtitles" === t.A) && t.c.fa("textTrackDisplay").Y(t))
    }
    function ia(t) {
        var e = t.split(":");
        t = 0;
        var n, i, r;
        return 3 == e.length ? (n = e[0], i = e[1], e = e[2]) : (n = 0, i = e[0], e = e[1]),
        e = e.split(/\s+/),
        e = e.splice(0, 1)[0],
        e = e.split(/\.|,/),
        r = parseFloat(e[1]),
        e = e[0],
        t += 3600 * parseFloat(n),
        t += 60 * parseFloat(i),
        t += parseFloat(e),
        r && (t += r / 1e3),
        t
    }
    function $(t, e) {
        var n = t.split("."),
        i = ja; ! (n[0] in i) && i.execScript && i.execScript("var " + n[0]);
        for (var r; n.length && (r = n.shift());) n.length || e === b ? i = i[r] ? i[r] : i[r] = {}: i[r] = e
    }
    var b = void 0,
    f = !0,
    h = null,
    l = !1,
    t;
    document.createElement("video"),
    document.createElement("audio"),
    document.createElement("track");
    var videojs = u;
    window.Wd = window.Xd = u,
    u.Rb = "4.5",
    u.Fc = "https:" == document.location.protocol ? "https://": "http://",
    u.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        children: {
            mediaLoader: {},
            posterImage: {},
            textTrackDisplay: {},
            loadingSpinner: {},
            bigPlayButton: {},
            controlBar: {}
        },
        notSupportedMessage: 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
    },
    "GENERATED_CDN_VSN" !== u.Rb && (videojs.options.flash.swf = u.Fc + "vjs.zencdn.net/" + u.Rb + "/video-js.swf"),
    u.va = {},
    "function" == typeof define && define.amd ? define([],
    function() {
        return videojs
    }) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs),
    u.ka = u.CoreObject = m(),
    u.ka.extend = function(t) {
        var e, n;
        t = t || {},
        e = t.init || t.j || this.prototype.init || this.prototype.j || m(),
        n = function() {
            e.apply(this, arguments)
        },
        n.prototype = u.l.create(this.prototype),
        n.prototype.constructor = n,
        n.extend = u.ka.extend,
        n.create = u.ka.create;
        for (var i in t) t.hasOwnProperty(i) && (n.prototype[i] = t[i]);
        return n
    },
    u.ka.create = function() {
        var t = u.l.create(this.prototype);
        return this.apply(t, arguments),
        t
    },
    u.d = function(t, e, n) {
        var i = u.getData(t);
        i.z || (i.z = {}),
        i.z[e] || (i.z[e] = []),
        n.s || (n.s = u.s++),
        i.z[e].push(n),
        i.V || (i.disabled = l, i.V = function(e) {
            if (!i.disabled) {
                e = u.ic(e);
                var n = i.z[e.type];
                if (n) for (var n = n.slice(0), r = 0, o = n.length; r < o && !e.pc(); r++) n[r].call(t, e)
            }
        }),
        1 == i.z[e].length && (document.addEventListener ? t.addEventListener(e, i.V, l) : document.attachEvent && t.attachEvent("on" + e, i.V))
    },
    u.o = function(t, e, n) {
        if (u.mc(t)) {
            var i = u.getData(t);
            if (i.z) if (e) {
                var r = i.z[e];
                if (r) {
                    if (n) {
                        if (n.s) for (i = 0; i < r.length; i++) r[i].s === n.s && r.splice(i--, 1)
                    } else i.z[e] = [];
                    u.ec(t, e)
                }
            } else for (r in i.z) e = r,
            i.z[e] = [],
            u.ec(t, e)
        }
    },
    u.ec = function(t, e) {
        var n = u.getData(t);
        0 === n.z[e].length && (delete n.z[e], document.removeEventListener ? t.removeEventListener(e, n.V, l) : document.detachEvent && t.detachEvent("on" + e, n.V)),
        u.zb(n.z) && (delete n.z, delete n.V, delete n.disabled),
        u.zb(n) && u.uc(t)
    },
    u.ic = function(t) {
        function e() {
            return f
        }
        function n() {
            return l
        }
        if (!t || !t.Ab) {
            var i = t || window.event;
            t = {};
            for (var r in i)"layerX" !== r && "layerY" !== r && "keyboardEvent.keyLocation" !== r && ("returnValue" == r && i.preventDefault || (t[r] = i[r]));
            if (t.target || (t.target = t.srcElement || document), t.relatedTarget = t.fromElement === t.target ? t.toElement: t.fromElement, t.preventDefault = function() {
                i.preventDefault && i.preventDefault(),
                t.returnValue = l,
                t.fd = e,
                t.defaultPrevented = f
            },
            t.fd = n, t.defaultPrevented = l, t.stopPropagation = function() {
                i.stopPropagation && i.stopPropagation(),
                t.cancelBubble = f,
                t.Ab = e
            },
            t.Ab = n, t.stopImmediatePropagation = function() {
                i.stopImmediatePropagation && i.stopImmediatePropagation(),
                t.pc = e,
                t.stopPropagation()
            },
            t.pc = n, t.clientX != h) {
                r = document.documentElement;
                var o = document.body;
                t.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0),
                t.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode,
            t.button != h && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    },
    u.k = function(t, e) {
        var n = u.mc(t) ? u.getData(t) : {},
        i = t.parentNode || t.ownerDocument;
        return "string" == typeof e && (e = {
            type: e,
            target: t
        }),
        e = u.ic(e),
        n.V && n.V.call(t, e),
        i && !e.Ab() && e.bubbles !== l ? u.k(i, e) : i || e.defaultPrevented || (n = u.getData(e.target), !e.target[e.type]) || (n.disabled = f, "function" == typeof e.target[e.type] && e.target[e.type](), n.disabled = l),
        !e.defaultPrevented
    },
    u.U = function(t, e, n) {
        function i() {
            u.o(t, e, i),
            n.apply(this, arguments)
        }
        i.s = n.s = n.s || u.s++,
        u.d(t, e, i)
    };
    var v = Object.prototype.hasOwnProperty;
    u.e = function(t, e) {
        var n, i;
        n = document.createElement(t || "div");
        for (i in e) v.call(e, i) && ( - 1 !== i.indexOf("aria-") || "role" == i ? n.setAttribute(i, e[i]) : n[i] = e[i]);
        return n
    },
    u.Z = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    u.l = {},
    u.l.create = Object.create ||
    function(t) {
        function e() {}
        return e.prototype = t,
        new e
    },
    u.l.ra = function(t, e, n) {
        for (var i in t) v.call(t, i) && e.call(n || this, i, t[i])
    },
    u.l.B = function(t, e) {
        if (!e) return t;
        for (var n in e) v.call(e, n) && (t[n] = e[n]);
        return t
    },
    u.l.Wc = function(t, e) {
        var n, i, r;
        t = u.l.copy(t);
        for (n in e) v.call(e, n) && (i = t[n], r = e[n], t[n] = u.l.Na(i) && u.l.Na(r) ? u.l.Wc(i, r) : e[n]);
        return t
    },
    u.l.copy = function(t) {
        return u.l.B({},
        t)
    },
    u.l.Na = function(t) {
        return !! t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
    },
    u.bind = function(t, e, n) {
        function i() {
            return e.apply(t, arguments)
        }
        return e.s || (e.s = u.s++),
        i.s = n ? n + "_" + e.s: e.s,
        i
    },
    u.pa = {},
    u.s = 1,
    u.expando = "vdata" + (new Date).getTime(),
    u.getData = function(t) {
        var e = t[u.expando];
        return e || (e = t[u.expando] = u.s++, u.pa[e] = {}),
        u.pa[e]
    },
    u.mc = function(t) {
        return t = t[u.expando],
        !(!t || u.zb(u.pa[t]))
    },
    u.uc = function(t) {
        var e = t[u.expando];
        if (e) {
            delete u.pa[e];
            try {
                delete t[u.expando]
            } catch(n) {
                t.removeAttribute ? t.removeAttribute(u.expando) : t[u.expando] = h
            }
        }
    },
    u.zb = function(t) {
        for (var e in t) if (t[e] !== h) return l;
        return f
    },
    u.n = function(t, e) { - 1 == (" " + t.className + " ").indexOf(" " + e + " ") && (t.className = "" === t.className ? e: t.className + " " + e)
    },
    u.t = function(t, e) {
        var n, i;
        if ( - 1 != t.className.indexOf(e)) {
            for (n = t.className.split(" "), i = n.length - 1; 0 <= i; i--) n[i] === e && n.splice(i, 1);
            t.className = n.join(" ")
        }
    },
    u.F = u.e("video"),
    u.J = navigator.userAgent,
    u.Kc = /iPhone/i.test(u.J),
    u.Jc = /iPad/i.test(u.J),
    u.Lc = /iPod/i.test(u.J),
    u.Ic = u.Kc || u.Jc || u.Lc;
    var aa = u,
    w, x = u.J.match(/OS (\d+)_/i);
    w = x && x[1] ? x[1] : b,
    aa.Kd = w,
    u.Hc = /Android/i.test(u.J);
    var ba = u,
    y, z = u.J.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),
    A,
    B;
    z ? (A = z[1] && parseFloat(z[1]), B = z[2] && parseFloat(z[2]), y = A && B ? parseFloat(z[1] + "." + z[2]) : A ? A: h) : y = h,
    ba.Qb = y,
    u.Mc = u.Hc && /webkit/i.test(u.J) && 2.3 > u.Qb,
    u.Ub = /Firefox/i.test(u.J),
    u.Ld = /Chrome/i.test(u.J),
    u.$b = !!("ontouchstart" in window || window.Gc && document instanceof window.Gc),
    u.wb = function(t) {
        var e, n, i, r;
        if (e = {},
        t && t.attributes && 0 < t.attributes.length) {
            n = t.attributes;
            for (var o = n.length - 1; 0 <= o; o--) i = n[o].name,
            r = n[o].value,
            "boolean" != typeof t[i] && -1 === ",autoplay,controls,loop,muted,default,".indexOf("," + i + ",") || (r = r !== h ? f: l),
            e[i] = r
        }
        return e
    },
    u.Pd = function(t, e) {
        var n = "";
        return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"),
        n
    },
    u.yb = function(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    },
    u.Nb = {},
    u.u = function(t) {
        return 0 === t.indexOf("#") && (t = t.slice(1)),
        document.getElementById(t)
    },
    u.ta = function(t, e) {
        e = e || t;
        var n = Math.floor(t % 60),
        i = Math.floor(t / 60 % 60),
        r = Math.floor(t / 3600),
        o = Math.floor(e / 60 % 60),
        s = Math.floor(e / 3600);
        return (isNaN(t) || 1 / 0 === t) && (r = i = n = "-"),
        r = 0 < r || 0 < s ? r + ":": "",
        r + (((r || 10 <= o) && 10 > i ? "0" + i: i) + ":") + (10 > n ? "0" + n: n)
    },
    u.Sc = function() {
        document.body.focus(),
        document.onselectstart = q(l)
    },
    u.Ed = function() {
        document.onselectstart = q(f)
    },
    u.trim = function(t) {
        return (t + "").replace(/^\s+|\s+$/g, "")
    },
    u.round = function(t, e) {
        return e || (e = 0),
        Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
    },
    u.sb = function(t, e) {
        return {
            length: 1,
            start: function() {
                return t
            },
            end: function() {
                return e
            }
        }
    },
    u.get = function(t, e, n) {
        var i, r;
        "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch(t) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch(e) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch(n) {}
            throw Error("This browser does not support XMLHttpRequest.")
        }),
        r = new XMLHttpRequest;
        try {
            r.open("GET", t)
        } catch(o) {
            n(o)
        }
        i = 0 === t.indexOf("file:") || 0 === window.location.href.indexOf("file:") && -1 === t.indexOf("http"),
        r.onreadystatechange = function() {
            4 === r.readyState && (200 === r.status || i && 0 === r.status ? e(r.responseText) : n && n())
        };
        try {
            r.send()
        } catch(s) {
            n && n(s)
        }
    },
    u.wd = function(t) {
        try {
            var e = window.localStorage || l;
            e && (e.volume = t)
        } catch(n) {
            22 == n.code || 1014 == n.code ? u.log("LocalStorage Full (VideoJS)", n) : 18 == n.code ? u.log("LocalStorage not allowed (VideoJS)", n) : u.log("LocalStorage Error (VideoJS)", n)
        }
    },
    u.kc = function(t) {
        return t.match(/^https?:\/\//) || (t = u.e("div", {
            innerHTML: '<a href="' + t + '">x</a>'
        }).firstChild.href),
        t
    },
    u.log = function() {
        u.log.history = u.log.history || [],
        u.log.history.push(arguments),
        window.console && window.console.log(Array.prototype.slice.call(arguments))
    },
    u.cd = function(t) {
        var e, n;
        return t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()),
        e ? (t = document.documentElement, n = document.body, {
            left: u.round(e.left + (window.pageXOffset || n.scrollLeft) - (t.clientLeft || n.clientLeft || 0)),
            top: u.round(e.top + (window.pageYOffset || n.scrollTop) - (t.clientTop || n.clientTop || 0))
        }) : {
            left: 0,
            top: 0
        }
    },
    u.ja = {},
    u.ja.Eb = function(t, e) {
        var n, i, r;
        t = u.l.copy(t);
        for (n in e) e.hasOwnProperty(n) && (i = t[n], r = e[n], t[n] = u.l.Na(i) && u.l.Na(r) ? u.ja.Eb(i, r) : e[n]);
        return t
    },
    u.b = u.ka.extend({
        j: function(t, e, n) {
            if (this.c = t, this.h = u.l.copy(this.h), e = this.options(e), this.R = e.id || (e.el && e.el.id ? e.el.id: t.id() + "_component_" + u.s++), this.ld = e.name || h, this.a = e.el || this.e(), this.K = [], this.Ja = {},
            this.Ka = {},
            this.nc(), this.I(n), e.vc !== l) {
                var i, r;
                i = u.bind(this.C(), this.C().reportUserActivity),
                this.d("touchstart",
                function() {
                    i(),
                    clearInterval(r),
                    r = setInterval(i, 250)
                }),
                t = function() {
                    i(),
                    clearInterval(r)
                },
                this.d("touchmove", i),
                this.d("touchend", t),
                this.d("touchcancel", t)
            }
        }
    }),
    t = u.b.prototype,
    t.dispose = function() {
        if (this.k({
            type: "dispose",
            bubbles: l
        }), this.K) for (var t = this.K.length - 1; 0 <= t; t--) this.K[t].dispose && this.K[t].dispose();
        this.Ka = this.Ja = this.K = h,
        this.o(),
        this.a.parentNode && this.a.parentNode.removeChild(this.a),
        u.uc(this.a),
        this.a = h
    },
    t.c = f,
    t.C = p("c"),
    t.options = function(t) {
        return t === b ? this.h: this.h = u.ja.Eb(this.h, t)
    },
    t.e = function(t, e) {
        return u.e(t, e)
    },
    t.u = p("a"),
    t.La = function() {
        return this.G || this.a
    },
    t.id = p("R"),
    t.name = p("ld"),
    t.children = p("K"),
    t.ed = function(t) {
        return this.Ja[t]
    },
    t.fa = function(t) {
        return this.Ka[t]
    },
    t.Y = function(t, e) {
        var n, i;
        return "string" == typeof t ? (i = t, e = e || {},
        n = e.componentClass || u.Z(i), e.name = i, n = new window.videojs[n](this.c || this, e)) : n = t,
        this.K.push(n),
        "function" == typeof n.id && (this.Ja[n.id()] = n),
        (i = i || n.name && n.name()) && (this.Ka[i] = n),
        "function" == typeof n.el && n.el() && this.La().appendChild(n.el()),
        n
    },
    t.removeChild = function(t) {
        if ("string" == typeof t && (t = this.fa(t)), t && this.K) {
            for (var e = l,
            n = this.K.length - 1; 0 <= n; n--) if (this.K[n] === t) {
                e = f,
                this.K.splice(n, 1);
                break
            }
            e && (this.Ja[t.id] = h, this.Ka[t.name] = h, (e = t.u()) && e.parentNode === this.La() && this.La().removeChild(t.u()))
        }
    },
    t.nc = function() {
        var t = this.h;
        if (t && t.children) {
            var e = this;
            u.l.ra(t.children,
            function(t, n) {
                n !== l && !n.loadEvent && (e[t] = e.Y(t, n))
            })
        }
    },
    t.Q = q(""),
    t.d = function(t, e) {
        return u.d(this.a, t, u.bind(this, e)),
        this
    },
    t.o = function(t, e) {
        return u.o(this.a, t, e),
        this
    },
    t.U = function(t, e) {
        return u.U(this.a, t, u.bind(this, e)),
        this
    },
    t.k = function(t, e) {
        return u.k(this.a, t, e),
        this
    },
    t.I = function(t) {
        return t && (this.aa ? t.call(this) : (this.Ua === b && (this.Ua = []), this.Ua.push(t))),
        this
    },
    t.za = function() {
        this.aa = f;
        var t = this.Ua;
        if (t && 0 < t.length) {
            for (var e = 0,
            n = t.length; e < n; e++) t[e].call(this);
            this.Ua = [],
            this.k("ready")
        }
    },
    t.n = function(t) {
        return u.n(this.a, t),
        this
    },
    t.t = function(t) {
        return u.t(this.a, t),
        this
    },
    t.show = function() {
        return this.a.style.display = "block",
        this
    },
    t.D = function() {
        return this.a.style.display = "none",
        this
    },
    t.disable = function() {
        this.D(),
        this.show = m()
    },
    t.width = function(t, e) {
        return E(this, "width", t, e)
    },
    t.height = function(t, e) {
        return E(this, "height", t, e)
    },
    t.Yc = function(t, e) {
        return this.width(t, f).height(e)
    },
    u.q = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e);
            var n = l;
            this.d("touchstart",
            function(t) {
                t.preventDefault(),
                n = f
            }),
            this.d("touchmove",
            function() {
                n = l
            });
            var i = this;
            this.d("touchend",
            function(t) {
                n && i.p(t),
                t.preventDefault()
            }),
            this.d("click", this.p),
            this.d("focus", this.Qa),
            this.d("blur", this.Pa)
        }
    }),
    t = u.q.prototype,
    t.e = function(t, e) {
        return e = u.l.B({
            className: this.Q(),
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + (this.oa || "Need Text") + "</span></div>",
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        },
        e),
        u.b.prototype.e.call(this, t, e)
    },
    t.Q = function() {
        return "vjs-control " + u.b.prototype.Q.call(this)
    },
    t.p = m(),
    t.Qa = function() {
        u.d(document, "keyup", u.bind(this, this.ba))
    },
    t.ba = function(t) {
        32 != t.which && 13 != t.which || (t.preventDefault(), this.p())
    },
    t.Pa = function() {
        u.o(document, "keyup", u.bind(this, this.ba))
    },
    u.O = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e),
            this.Rc = this.fa(this.h.barName),
            this.handle = this.fa(this.h.handleName),
            t.d(this.sc, u.bind(this, this.update)),
            this.d("mousedown", this.Ra),
            this.d("touchstart", this.Ra),
            this.d("focus", this.Qa),
            this.d("blur", this.Pa),
            this.d("click", this.p),
            this.c.d("controlsvisible", u.bind(this, this.update)),
            t.I(u.bind(this, this.update)),
            this.P = {}
        }
    }),
    t = u.O.prototype,
    t.e = function(t, e) {
        return e = e || {},
        e.className += " vjs-slider",
        e = u.l.B({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        },
        e),
        u.b.prototype.e.call(this, t, e)
    },
    t.Ra = function(t) {
        t.preventDefault(),
        u.Sc(),
        this.P.move = u.bind(this, this.Gb),
        this.P.end = u.bind(this, this.Hb),
        u.d(document, "mousemove", this.P.move),
        u.d(document, "mouseup", this.P.end),
        u.d(document, "touchmove", this.P.move),
        u.d(document, "touchend", this.P.end),
        this.Gb(t)
    },
    t.Hb = function() {
        u.Ed(),
        u.o(document, "mousemove", this.P.move, l),
        u.o(document, "mouseup", this.P.end, l),
        u.o(document, "touchmove", this.P.move, l),
        u.o(document, "touchend", this.P.end, l),
        this.update()
    },
    t.update = function() {
        if (this.a) {
            var t, e = this.xb(),
            n = this.handle,
            i = this.Rc;
            if (isNaN(e) && (e = 0), t = e, n) {
                t = this.a.offsetWidth;
                var r = n.u().offsetWidth;
                t = r ? r / t: 0,
                e *= 1 - t,
                t = e + t / 2,
                n.u().style.left = u.round(100 * e, 2) + "%"
            }
            i.u().style.width = u.round(100 * t, 2) + "%"
        }
    },
    t.Qa = function() {
        u.d(document, "keyup", u.bind(this, this.ba))
    },
    t.ba = function(t) {
        37 == t.which ? (t.preventDefault(), this.yc()) : 39 == t.which && (t.preventDefault(), this.zc())
    },
    t.Pa = function() {
        u.o(document, "keyup", u.bind(this, this.ba))
    },
    t.p = function(t) {
        t.stopImmediatePropagation(),
        t.preventDefault()
    },
    u.W = u.b.extend(),
    u.W.prototype.defaultValue = 0,
    u.W.prototype.e = function(t, e) {
        return e = e || {},
        e.className += " vjs-slider-handle",
        e = u.l.B({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        },
        e),
        u.b.prototype.e.call(this, "div", e)
    },
    u.la = u.b.extend(),
    u.la.prototype.e = function() {
        var t = this.options().Uc || "ul";
        return this.G = u.e(t, {
            className: "vjs-menu-content"
        }),
        t = u.b.prototype.e.call(this, "div", {
            append: this.G,
            className: "vjs-menu"
        }),
        t.appendChild(this.G),
        u.d(t, "click",
        function(t) {
            t.preventDefault(),
            t.stopImmediatePropagation()
        }),
        t
    },
    u.N = u.q.extend({
        j: function(t, e) {
            u.q.call(this, t, e),
            this.selected(e.selected)
        }
    }),
    u.N.prototype.e = function(t, e) {
        return u.q.prototype.e.call(this, "li", u.l.B({
            className: "vjs-menu-item",
            innerHTML: this.h.label
        },
        e))
    },
    u.N.prototype.p = function() {
        this.selected(f)
    },
    u.N.prototype.selected = function(t) {
        t ? (this.n("vjs-selected"), this.a.setAttribute("aria-selected", f)) : (this.t("vjs-selected"), this.a.setAttribute("aria-selected", l))
    },
    u.S = u.q.extend({
        j: function(t, e) {
            u.q.call(this, t, e),
            this.ua = this.Ma(),
            this.Y(this.ua),
            this.L && 0 === this.L.length && this.D(),
            this.d("keyup", this.ba),
            this.a.setAttribute("aria-haspopup", f),
            this.a.setAttribute("role", "button")
        }
    }),
    t = u.S.prototype,
    t.na = l,
    t.Ma = function() {
        var t = new u.la(this.c);
        if (this.options().title && t.u().appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.Z(this.A),
            Cd: -1
        })), this.L = this.createItems()) for (var e = 0; e < this.L.length; e++) ca(t, this.L[e]);
        return t
    },
    t.qa = m(),
    t.Q = function() {
        return this.className + " vjs-menu-button " + u.q.prototype.Q.call(this)
    },
    t.Qa = m(),
    t.Pa = m(),
    t.p = function() {
        this.U("mouseout", u.bind(this,
        function() {
            C(this.ua),
            this.a.blur()
        })),
        this.na ? G(this) : H(this)
    },
    t.ba = function(t) {
        t.preventDefault(),
        32 == t.which || 13 == t.which ? this.na ? G(this) : H(this) : 27 == t.which && this.na && G(this)
    },
    u.Player = u.b.extend({
        j: function(t, e, n) {
            this.M = t,
            t.id = t.id || "vjs_video_" + u.s++,
            e = u.l.B(da(t), e),
            this.v = {},
            this.tc = e.poster,
            this.rb = e.controls,
            t.controls = l,
            e.vc = l,
            u.b.call(this, this, e, n),
            this.controls() ? this.n("vjs-controls-enabled") : this.n("vjs-controls-disabled"),
            this.U("play",
            function(t) {
                u.k(this.a, {
                    type: "firstplay",
                    target: this.a
                }) || (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation())
            }),
            this.d("ended", this.md),
            this.d("play", this.Jb),
            this.d("firstplay", this.nd),
            this.d("pause", this.Ib),
            this.d("progress", this.pd),
            this.d("durationchange", this.qc),
            this.d("error", this.Fb),
            this.d("fullscreenchange", this.od),
            u.va[this.R] = this,
            e.plugins && u.l.ra(e.plugins,
            function(t, e) {
                this[t](e)
            },
            this);
            var i, r, o, s;
            i = u.bind(this, this.reportUserActivity),
            this.d("mousedown",
            function() {
                i(),
                clearInterval(r),
                r = setInterval(i, 250)
            }),
            this.d("mousemove", i),
            this.d("mouseup",
            function() {
                i(),
                clearInterval(r)
            }),
            this.d("keydown", i),
            this.d("keyup", i),
            o = setInterval(u.bind(this,
            function() {
                this.ia && (this.ia = l, this.userActive(f), clearTimeout(s), s = setTimeout(u.bind(this,
                function() {
                    this.ia || this.userActive(l)
                }), 2e3))
            }), 250),
            this.d("dispose",
            function() {
                clearInterval(o),
                clearTimeout(s)
            })
        }
    }),
    t = u.Player.prototype,
    t.h = u.options,
    t.dispose = function() {
        this.k("dispose"),
        this.o("dispose"),
        u.va[this.R] = h,
        this.M && this.M.player && (this.M.player = h),
        this.a && this.a.player && (this.a.player = h),
        clearInterval(this.Ta),
        this.wa(),
        this.i && this.i.dispose(),
        u.b.prototype.dispose.call(this)
    },
    t.e = function() {
        var t = this.a = u.b.prototype.e.call(this, "div"),
        e = this.M;
        if (e.removeAttribute("width"), e.removeAttribute("height"), e.hasChildNodes()) {
            var n, i, r, o, s;
            for (n = e.childNodes, i = n.length, s = []; i--;) r = n[i],
            o = r.nodeName.toLowerCase(),
            "track" === o && s.push(r);
            for (n = 0; n < s.length; n++) e.removeChild(s[n])
        }
        return t.id = e.id,
        t.className = e.className,
        e.id += "_html5_api",
        e.className = "vjs-tech",
        e.player = t.player = this,
        this.n("vjs-paused"),
        this.width(this.h.width, f),
        this.height(this.h.height, f),
        e.parentNode && e.parentNode.insertBefore(t, e),
        u.yb(e, t),
        t
    },
    t.Cc = function() {
        this.fc && this.wa(),
        this.fc = setInterval(u.bind(this,
        function() {
            this.k("timeupdate")
        }), 250)
    },
    t.wa = function() {
        clearInterval(this.fc)
    },
    t.Jb = function() {
        u.t(this.a, "vjs-paused"),
        u.n(this.a, "vjs-playing")
    },
    t.nd = function() {
        this.h.starttime && this.currentTime(this.h.starttime),
        this.n("vjs-has-started")
    },
    t.Ib = function() {
        u.t(this.a, "vjs-playing"),
        u.n(this.a, "vjs-paused")
    },
    t.pd = function() {
        1 == this.bufferedPercent() && this.k("loadedalldata")
    },
    t.md = function() {
        this.h.loop && (this.currentTime(0), this.play())
    },
    t.qc = function() {
        var t = K(this, "duration");
        t && this.duration(t)
    },
    t.od = function() {
        this.isFullScreen() ? this.n("vjs-fullscreen") : this.t("vjs-fullscreen")
    },
    t.Fb = function(t) {
        u.log("Video Error", t)
    },
    t.play = function() {
        return L(this, "play"),
        this
    },
    t.pause = function() {
        return L(this, "pause"),
        this
    },
    t.paused = function() {
        return K(this, "paused") === l ? l: f
    },
    t.currentTime = function(t) {
        return t !== b ? (L(this, "setCurrentTime", t), this.Db && this.k("timeupdate"), this) : this.v.currentTime = K(this, "currentTime") || 0
    },
    t.duration = function(t) {
        return t !== b ? (this.v.duration = parseFloat(t), this) : (this.v.duration === b && this.qc(), this.v.duration || 0)
    },
    t.buffered = function() {
        var t = K(this, "buffered"),
        e = t.length - 1,
        n = this.v.mb = this.v.mb || 0;
        return t && 0 <= e && t.end(e) !== n && (n = t.end(e), this.v.mb = n),
        u.sb(0, n)
    },
    t.bufferedPercent = function() {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    },
    t.volume = function(t) {
        return t !== b ? (t = Math.max(0, Math.min(1, parseFloat(t))), this.v.volume = t, L(this, "setVolume", t), u.wd(t), this) : (t = parseFloat(K(this, "volume")), isNaN(t) ? 1 : t)
    },
    t.muted = function(t) {
        return t !== b ? (L(this, "setMuted", t), this) : K(this, "muted") || l
    },
    t.Wa = function() {
        return K(this, "supportsFullScreen") || l
    },
    t.oc = l,
    t.isFullScreen = function(t) {
        return t !== b ? (this.oc = t, this) : this.oc
    },
    t.requestFullScreen = function() {
        var t = u.Nb.requestFullScreen;
        return this.isFullScreen(f),
        t ? (u.d(document, t.ub, u.bind(this,
        function(e) {
            this.isFullScreen(document[t.isFullScreen]),
            this.isFullScreen() === l && u.o(document, t.ub, arguments.callee),
            this.k("fullscreenchange")
        })), this.a[t.wc]()) : this.i.Wa() ? L(this, "enterFullScreen") : (this.gd = f, this.Zc = document.documentElement.style.overflow, u.d(document, "keydown", u.bind(this, this.jc)), document.documentElement.style.overflow = "hidden", u.n(document.body, "vjs-full-window"), this.k("enterFullWindow"), this.k("fullscreenchange")),
        this
    },
    t.cancelFullScreen = function() {
        var t = u.Nb.requestFullScreen;
        return this.isFullScreen(l),
        t ? document[t.ob]() : this.i.Wa() ? L(this, "exitFullScreen") : (M(this), this.k("fullscreenchange")),
        this
    },
    t.jc = function(t) {
        27 === t.keyCode && (this.isFullScreen() === f ? this.cancelFullScreen() : M(this))
    },
    t.src = function(t) {
        if (t === b) return K(this, "src");
        if (t instanceof Array) {
            var e;
            t: {
                e = t;
                for (var n = 0,
                i = this.h.techOrder; n < i.length; n++) {
                    var r = u.Z(i[n]),
                    o = window.videojs[r];
                    if (o.isSupported()) for (var s = 0,
                    a = e; s < a.length; s++) {
                        var c = a[s];
                        if (o.canPlaySource(c)) {
                            e = {
                                source: c,
                                i: r
                            };
                            break t
                        }
                    }
                }
                e = l
            }
            e ? (t = e.source, e = e.i, e == this.xa ? this.src(t) : I(this, e, t)) : (this.a.appendChild(u.e("p", {
                innerHTML: this.options().notSupportedMessage
            })), this.za())
        } else t instanceof Object ? window.videojs[this.xa].canPlaySource(t) ? this.src(t.src) : this.src([t]) : (this.v.src = t, this.aa ? (L(this, "src", t), "auto" == this.h.preload && this.load(), this.h.autoplay && this.play()) : this.I(function() {
            this.src(t)
        }));
        return this
    },
    t.load = function() {
        return L(this, "load"),
        this
    },
    t.currentSrc = function() {
        return K(this, "currentSrc") || this.v.src || ""
    },
    t.Sa = function(t) {
        return t !== b ? (L(this, "setPreload", t), this.h.preload = t, this) : K(this, "preload")
    },
    t.autoplay = function(t) {
        return t !== b ? (L(this, "setAutoplay", t), this.h.autoplay = t, this) : K(this, "autoplay")
    },
    t.loop = function(t) {
        return t !== b ? (L(this, "setLoop", t), this.h.loop = t, this) : K(this, "loop")
    },
    t.poster = function(t) {
        return t === b ? this.tc: (this.tc = t, L(this, "setPoster", t), void this.k("posterchange"))
    },
    t.controls = function(t) {
        return t !== b ? (t = !!t, this.rb !== t && ((this.rb = t) ? (this.t("vjs-controls-disabled"), this.n("vjs-controls-enabled"), this.k("controlsenabled")) : (this.t("vjs-controls-enabled"), this.n("vjs-controls-disabled"), this.k("controlsdisabled"))), this) : this.rb
    },
    u.Player.prototype.Pb,
    t = u.Player.prototype,
    t.usingNativeControls = function(t) {
        return t !== b ? (t = !!t, this.Pb !== t && ((this.Pb = t) ? (this.n("vjs-using-native-controls"), this.k("usingnativecontrols")) : (this.t("vjs-using-native-controls"), this.k("usingcustomcontrols"))), this) : this.Pb
    },
    t.error = function() {
        return K(this, "error")
    },
    t.ended = function() {
        return K(this, "ended")
    },
    t.seeking = function() {
        return K(this, "seeking")
    },
    t.ia = f,
    t.reportUserActivity = function() {
        this.ia = f
    },
    t.Ob = f,
    t.userActive = function(t) {
        return t !== b ? (t = !!t, t !== this.Ob && ((this.Ob = t) ? (this.ia = f, this.t("vjs-user-inactive"), this.n("vjs-user-active"), this.k("useractive")) : (this.ia = l, this.i && this.i.U("mousemove",
        function(t) {
            t.stopPropagation(),
            t.preventDefault()
        }), this.t("vjs-user-active"), this.n("vjs-user-inactive"), this.k("userinactive"))), this) : this.Ob
    };
    var N, O, P;
    P = document.createElement("div"),
    O = {},
    P.Md !== b ? (O.wc = "requestFullscreen", O.ob = "exitFullscreen", O.ub = "fullscreenchange", O.isFullScreen = "fullScreen") : (document.mozCancelFullScreen ? (N = "moz", O.isFullScreen = N + "FullScreen") : (N = "webkit", O.isFullScreen = N + "IsFullScreen"), P[N + "RequestFullScreen"] && (O.wc = N + "RequestFullScreen", O.ob = N + "CancelFullScreen"), O.ub = N + "fullscreenchange"),
    document[O.ob] && (u.Nb.requestFullScreen = O),
    u.Da = u.b.extend(),
    u.Da.prototype.h = {
        Rd: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {}
        }
    },
    u.Da.prototype.e = function() {
        return u.e("div", {
            className: "vjs-control-bar"
        })
    },
    u.Xb = u.q.extend({
        j: function(t, e) {
            u.q.call(this, t, e),
            t.d("play", u.bind(this, this.Jb)),
            t.d("pause", u.bind(this, this.Ib))
        }
    }),
    t = u.Xb.prototype,
    t.oa = "Play",
    t.Q = function() {
        return "vjs-play-control " + u.q.prototype.Q.call(this)
    },
    t.p = function() {
        this.c.paused() ? this.c.play() : this.c.pause()
    },
    t.Jb = function() {
        u.t(this.a, "vjs-paused"),
        u.n(this.a, "vjs-playing"),
        this.a.children[0].children[0].innerHTML = "Pause"
    },
    t.Ib = function() {
        u.t(this.a, "vjs-playing"),
        u.n(this.a, "vjs-paused"),
        this.a.children[0].children[0].innerHTML = "Play"
    },
    u.$a = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.da))
        }
    }),
    u.$a.prototype.e = function() {
        var t = u.b.prototype.e.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        return this.G = u.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        }),
        t.appendChild(this.G),
        t
    },
    u.$a.prototype.da = function() {
        var t = this.c.Va ? this.c.v.currentTime: this.c.currentTime();
        this.G.innerHTML = '<span class="vjs-control-text">Current Time </span>' + u.ta(t, this.c.duration())
    },
    u.ab = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.da))
        }
    }),
    u.ab.prototype.e = function() {
        var t = u.b.prototype.e.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        return this.G = u.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
            "aria-live": "off"
        }),
        t.appendChild(this.G),
        t
    },
    u.ab.prototype.da = function() {
        var t = this.c.duration();
        t && (this.G.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + u.ta(t))
    },
    u.bc = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e)
        }
    }),
    u.bc.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    },
    u.gb = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.da))
        }
    }),
    u.gb.prototype.e = function() {
        var t = u.b.prototype.e.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        return this.G = u.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
            "aria-live": "off"
        }),
        t.appendChild(this.G),
        t
    },
    u.gb.prototype.da = function() {
        this.c.duration() && (this.G.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + u.ta(this.c.duration() - this.c.currentTime()))
    },
    u.Ea = u.q.extend({
        j: function(t, e) {
            u.q.call(this, t, e)
        }
    }),
    u.Ea.prototype.oa = "Fullscreen",
    u.Ea.prototype.Q = function() {
        return "vjs-fullscreen-control " + u.q.prototype.Q.call(this)
    },
    u.Ea.prototype.p = function() {
        this.c.isFullScreen() ? (this.c.cancelFullScreen(), this.a.children[0].children[0].innerHTML = "Fullscreen") : (this.c.requestFullScreen(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
    },
    u.fb = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e)
        }
    }),
    u.fb.prototype.h = {
        children: {
            seekBar: {}
        }
    },
    u.fb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    },
    u.Yb = u.O.extend({
        j: function(t, e) {
            u.O.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.Aa)),
            t.I(u.bind(this, this.Aa))
        }
    }),
    t = u.Yb.prototype,
    t.h = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    },
    t.sc = "timeupdate",
    t.e = function() {
        return u.O.prototype.e.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    },
    t.Aa = function() {
        var t = this.c.Va ? this.c.v.currentTime: this.c.currentTime();
        this.a.setAttribute("aria-valuenow", u.round(100 * this.xb(), 2)),
        this.a.setAttribute("aria-valuetext", u.ta(t, this.c.duration()))
    },
    t.xb = function() {
        return this.c.currentTime() / this.c.duration()
    },
    t.Ra = function(t) {
        u.O.prototype.Ra.call(this, t),
        this.c.Va = f,
        this.Hd = !this.c.paused(),
        this.c.pause()
    },
    t.Gb = function(t) {
        t = F(this, t) * this.c.duration(),
        t == this.c.duration() && (t -= .1),
        this.c.currentTime(t)
    },
    t.Hb = function(t) {
        u.O.prototype.Hb.call(this, t),
        this.c.Va = l,
        this.Hd && this.c.play()
    },
    t.zc = function() {
        this.c.currentTime(this.c.currentTime() + 5)
    },
    t.yc = function() {
        this.c.currentTime(this.c.currentTime() - 5)
    },
    u.cb = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e),
            t.d("progress", u.bind(this, this.update))
        }
    }),
    u.cb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
    },
    u.cb.prototype.update = function() {
        this.a.style && (this.a.style.width = u.round(100 * this.c.bufferedPercent(), 2) + "%")
    },
    u.Wb = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e)
        }
    }),
    u.Wb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
    },
    u.Ga = u.W.extend({
        j: function(t, e) {
            u.W.call(this, t, e),
            t.d("timeupdate", u.bind(this, this.da))
        }
    }),
    u.Ga.prototype.defaultValue = "00:00",
    u.Ga.prototype.e = function() {
        return u.W.prototype.e.call(this, "div", {
            className: "vjs-seek-handle",
            "aria-live": "off"
        })
    },
    u.Ga.prototype.da = function() {
        var t = this.c.Va ? this.c.v.currentTime: this.c.currentTime();
        this.a.innerHTML = '<span class="vjs-control-text">' + u.ta(t, this.c.duration()) + "</span>"
    },
    u.ib = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e),
            t.i && t.i.m && t.i.m.volumeControl === l && this.n("vjs-hidden"),
            t.d("loadstart", u.bind(this,
            function() {
                t.i.m && t.i.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    }),
    u.ib.prototype.h = {
        children: {
            volumeBar: {}
        }
    },
    u.ib.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    },
    u.hb = u.O.extend({
        j: function(t, e) {
            u.O.call(this, t, e),
            t.d("volumechange", u.bind(this, this.Aa)),
            t.I(u.bind(this, this.Aa)),
            setTimeout(u.bind(this, this.update), 0)
        }
    }),
    t = u.hb.prototype,
    t.Aa = function() {
        this.a.setAttribute("aria-valuenow", u.round(100 * this.c.volume(), 2)),
        this.a.setAttribute("aria-valuetext", u.round(100 * this.c.volume(), 2) + "%")
    },
    t.h = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    },
    t.sc = "volumechange",
    t.e = function() {
        return u.O.prototype.e.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    },
    t.Gb = function(t) {
        this.c.muted() && this.c.muted(l),
        this.c.volume(F(this, t))
    },
    t.xb = function() {
        return this.c.muted() ? 0 : this.c.volume()
    },
    t.zc = function() {
        this.c.volume(this.c.volume() + .1)
    },
    t.yc = function() {
        this.c.volume(this.c.volume() - .1)
    },
    u.cc = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e)
        }
    }),
    u.cc.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    },
    u.jb = u.W.extend(),
    u.jb.prototype.defaultValue = "00:00",
    u.jb.prototype.e = function() {
        return u.W.prototype.e.call(this, "div", {
            className: "vjs-volume-handle"
        })
    },
    u.ea = u.q.extend({
        j: function(t, e) {
            u.q.call(this, t, e),
            t.d("volumechange", u.bind(this, this.update)),
            t.i && t.i.m && t.i.m.volumeControl === l && this.n("vjs-hidden"),
            t.d("loadstart", u.bind(this,
            function() {
                t.i.m && t.i.m.volumeControl === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            }))
        }
    }),
    u.ea.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    },
    u.ea.prototype.p = function() {
        this.c.muted(this.c.muted() ? l: f)
    },
    u.ea.prototype.update = function() {
        var t = this.c.volume(),
        e = 3;
        for (0 === t || this.c.muted() ? e = 0 : .33 > t ? e = 1 : .67 > t && (e = 2), this.c.muted() ? "Unmute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Unmute") : "Mute" != this.a.children[0].children[0].innerHTML && (this.a.children[0].children[0].innerHTML = "Mute"), t = 0; 4 > t; t++) u.t(this.a, "vjs-vol-" + t);
        u.n(this.a, "vjs-vol-" + e)
    },
    u.ma = u.S.extend({
        j: function(t, e) {
            u.S.call(this, t, e),
            t.d("volumechange", u.bind(this, this.update)),
            t.i && t.i.m && t.i.m.Dc === l && this.n("vjs-hidden"),
            t.d("loadstart", u.bind(this,
            function() {
                t.i.m && t.i.m.Dc === l ? this.n("vjs-hidden") : this.t("vjs-hidden")
            })),
            this.n("vjs-menu-button")
        }
    }),
    u.ma.prototype.Ma = function() {
        var t = new u.la(this.c, {
            Uc: "div"
        }),
        e = new u.hb(this.c, u.l.B({
            Gd: f
        },
        this.h.Yd));
        return t.Y(e),
        t
    },
    u.ma.prototype.p = function() {
        u.ea.prototype.p.call(this),
        u.S.prototype.p.call(this)
    },
    u.ma.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    },
    u.ma.prototype.update = u.ea.prototype.update,
    u.Fa = u.q.extend({
        j: function(t, e) {
            u.q.call(this, t, e),
            t.poster() && this.src(t.poster()),
            (!t.poster() || !t.controls()) && this.D(),
            t.d("posterchange", u.bind(this,
            function() {
                this.src(t.poster())
            })),
            t.d("play", u.bind(this, this.D))
        }
    });
    var Q = "backgroundSize" in u.F.style;
    u.Fa.prototype.e = function() {
        var t = u.e("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        return Q || t.appendChild(u.e("img")),
        t
    },
    u.Fa.prototype.src = function(t) {
        var e = this.u();
        t !== b && (Q ? e.style.backgroundImage = 'url("' + t + '")': e.firstChild.src = t)
    },
    u.Fa.prototype.p = function() {
        this.C().controls() && this.c.play()
    },
    u.Vb = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e),
            t.d("canplay", u.bind(this, this.D)),
            t.d("canplaythrough", u.bind(this, this.D)),
            t.d("playing", u.bind(this, this.D)),
            t.d("seeking", u.bind(this, this.show)),
            t.d("seeked", u.bind(this, this.D)),
            t.d("error", u.bind(this, this.show)),
            t.d("ended", u.bind(this, this.D)),
            t.d("waiting", u.bind(this, this.show))
        }
    }),
    u.Vb.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    },
    u.Ya = u.q.extend(),
    u.Ya.prototype.e = function() {
        return u.q.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    },
    u.Ya.prototype.p = function() {
        this.c.play()
    },
    u.r = u.b.extend({
        j: function(t, e, n) {
            e = e || {},
            e.vc = l,
            u.b.call(this, t, e, n);
            var i, r;
            r = this,
            i = this.C(),
            t = function() {
                if (i.controls() && !i.usingNativeControls()) {
                    var t;
                    r.d("mousedown", r.p),
                    r.d("touchstart",
                    function(e) {
                        e.preventDefault(),
                        t = this.c.userActive()
                    }),
                    r.d("touchmove",
                    function() {
                        t && this.C().reportUserActivity()
                    });
                    var e, n, o, s;
                    e = 0,
                    r.d("touchstart",
                    function() {
                        e = (new Date).getTime(),
                        o = f
                    }),
                    s = function() {
                        o = l
                    },
                    r.d("touchmove", s),
                    r.d("touchleave", s),
                    r.d("touchcancel", s),
                    r.d("touchend",
                    function() {
                        o === f && (n = (new Date).getTime() - e, 250 > n && this.k("tap"))
                    }),
                    r.d("tap", r.qd)
                }
            },
            e = u.bind(r, r.td),
            this.I(t),
            i.d("controlsenabled", t),
            i.d("controlsdisabled", e)
        }
    }),
    t = u.r.prototype,
    t.td = function() {
        this.o("tap"),
        this.o("touchstart"),
        this.o("touchmove"),
        this.o("touchleave"),
        this.o("touchcancel"),
        this.o("touchend"),
        this.o("click"),
        this.o("mousedown")
    },
    t.p = function(t) {
        0 === t.button && this.C().controls() && (this.C().paused() ? this.C().play() : this.C().pause())
    },
    t.qd = function() {
        this.C().userActive(!this.C().userActive())
    },
    t.Lb = m(),
    t.m = {
        volumeControl: f,
        fullscreenResize: l,
        progressEvents: l,
        timeupdateEvents: l
    },
    u.media = {},
    u.media.Xa = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted".split(" ");
    for (var i = u.media.Xa.length - 1; 0 <= i; i--) u.r.prototype[u.media.Xa[i]] = ea();
    u.g = u.r.extend({
        j: function(t, e, n) {
            for (this.m.volumeControl = u.g.Tc(), this.m.movingMediaElementInDOM = !u.Ic, this.m.fullscreenResize = f, u.r.call(this, t, e, n), n = u.g.bb.length - 1; 0 <= n; n--) u.d(this.a, u.g.bb[n], u.bind(this.c, this.ad));
            if ((e = e.source) && this.a.currentSrc === e.src && 0 < this.a.networkState ? t.k("loadstart") : e && (this.a.src = e.src), u.$b && t.options().nativeControlsForTouch !== l) {
                var i, r, o, s;
                i = this,
                r = this.C(),
                e = r.controls(),
                i.a.controls = !!e,
                o = function() {
                    i.a.controls = f
                },
                s = function() {
                    i.a.controls = l
                },
                r.d("controlsenabled", o),
                r.d("controlsdisabled", s),
                e = function() {
                    r.o("controlsenabled", o),
                    r.o("controlsdisabled", s)
                },
                i.d("dispose", e),
                r.d("usingcustomcontrols", e),
                r.usingNativeControls(f)
            }
            t.I(function() {
                this.M && this.h.autoplay && this.paused() && (delete this.M.poster, this.play())
            }),
            this.za()
        }
    }),
    t = u.g.prototype,
    t.dispose = function() {
        u.r.prototype.dispose.call(this)
    },
    t.e = function() {
        var t, e = this.c,
        n = e.M;
        n && this.m.movingMediaElementInDOM !== l || (n ? (t = n.cloneNode(l), u.g.gc(n), n = t, e.M = h) : n = u.e("video", {
            id: e.id() + "_html5_api",
            className: "vjs-tech"
        }), n.player = e, u.yb(n, e.u())),
        t = ["autoplay", "preload", "loop", "muted"];
        for (var i = t.length - 1; 0 <= i; i--) {
            var r = t[i];
            e.h[r] !== h && (n[r] = e.h[r])
        }
        return n
    },
    t.ad = function(t) {
        this.k(t),
        t.stopPropagation()
    },
    t.play = function() {
        this.a.play()
    },
    t.pause = function() {
        this.a.pause()
    },
    t.paused = function() {
        return this.a.paused
    },
    t.currentTime = function() {
        return this.a.currentTime
    },
    t.vd = function(t) {
        try {
            this.a.currentTime = t
        } catch(e) {
            u.log(e, "Video is not ready. (Video.js)")
        }
    },
    t.duration = function() {
        return this.a.duration || 0
    },
    t.buffered = function() {
        return this.a.buffered
    },
    t.volume = function() {
        return this.a.volume
    },
    t.Ad = function(t) {
        this.a.volume = t
    },
    t.muted = function() {
        return this.a.muted
    },
    t.yd = function(t) {
        this.a.muted = t
    },
    t.width = function() {
        return this.a.offsetWidth
    },
    t.height = function() {
        return this.a.offsetHeight
    },
    t.Wa = function() {
        return "function" != typeof this.a.webkitEnterFullScreen || !/Android/.test(u.J) && /Chrome|Mac OS X 10.5/.test(u.J) ? l: f
    },
    t.hc = function() {
        var t = this.a;
        t.paused && t.networkState <= t.Jd ? (this.a.play(), setTimeout(function() {
            t.pause(),
            t.webkitEnterFullScreen()
        },
        0)) : t.webkitEnterFullScreen()
    },
    t.bd = function() {
        this.a.webkitExitFullScreen()
    },
    t.src = function(t) {
        this.a.src = t
    },
    t.load = function() {
        this.a.load()
    },
    t.currentSrc = function() {
        return this.a.currentSrc
    },
    t.poster = function() {
        return this.a.poster
    },
    t.Lb = function(t) {
        this.a.poster = t
    },
    t.Sa = function() {
        return this.a.Sa
    },
    t.zd = function(t) {
        this.a.Sa = t
    },
    t.autoplay = function() {
        return this.a.autoplay
    },
    t.ud = function(t) {
        this.a.autoplay = t
    },
    t.controls = function() {
        return this.a.controls
    },
    t.loop = function() {
        return this.a.loop
    },
    t.xd = function(t) {
        this.a.loop = t
    },
    t.error = function() {
        return this.a.error
    },
    t.seeking = function() {
        return this.a.seeking
    },
    t.ended = function() {
        return this.a.ended
    },
    u.g.isSupported = function() {
        try {
            u.F.volume = .5
        } catch(t) {
            return l
        }
        return !! u.F.canPlayType
    },
    u.g.nb = function(t) {
        try {
            return !! u.F.canPlayType(t.type)
        } catch(e) {
            return ""
        }
    },
    u.g.Tc = function() {
        var t = u.F.volume;
        return u.F.volume = t / 2 + .1,
        t !== u.F.volume
    };
    var R, fa = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
    ga = /^video\/mp4/i;
    u.g.rc = function() {
        4 <= u.Qb && (R || (R = u.F.constructor.prototype.canPlayType), u.F.constructor.prototype.canPlayType = function(t) {
            return t && fa.test(t) ? "maybe": R.call(this, t)
        }),
        u.Mc && (R || (R = u.F.constructor.prototype.canPlayType), u.F.constructor.prototype.canPlayType = function(t) {
            return t && ga.test(t) ? "maybe": R.call(this, t)
        })
    },
    u.g.Fd = function() {
        var t = u.F.constructor.prototype.canPlayType;
        return u.F.constructor.prototype.canPlayType = R,
        R = h,
        t
    },
    u.g.rc(),
    u.g.bb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "),
    u.g.gc = function(t) {
        if (t) {
            for (t.player = h, t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
            if (t.removeAttribute("src"), "function" == typeof t.load) try {
                t.load()
            } catch(e) {}
        }
    },
    u.f = u.r.extend({
        j: function(t, e, n) {
            u.r.call(this, t, e, n);
            var i = e.source;
            n = e.parentEl;
            var r = this.a = u.e("div", {
                id: t.id() + "_temp_flash"
            }),
            o = t.id() + "_flash_api";
            t = t.h;
            var s, a = u.l.B({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: t.autoplay,
                preload: t.Sa,
                loop: t.loop,
                muted: t.muted
            },
            e.flashVars),
            c = u.l.B({
                wmode: "opaque",
                bgcolor: "#000000"
            },
            e.params),
            d = u.l.B({
                id: o,
                name: o,
                "class": "vjs-tech"
            },
            e.attributes);
            if (i && (i.type && u.f.jd(i.type) ? (t = u.f.Ac(i.src), a.rtmpConnection = encodeURIComponent(t.qb), a.rtmpStream = encodeURIComponent(t.Mb)) : a.src = encodeURIComponent(u.kc(i.src))), this.setCurrentTime = function(t) {
                s = t,
                this.a.vjs_setProperty("currentTime", t)
            },
            this.currentTime = function() {
                return this.seeking() ? s: this.a.vjs_getProperty("currentTime")
            },
            u.yb(r, n), e.startTime && this.I(function() {
                this.load(),
                this.play(),
                this.currentTime(e.startTime)
            }), u.Ub && this.I(function() {
                u.d(this.u(), "mousemove", u.bind(this,
                function() {
                    this.C().k({
                        type: "mousemove",
                        bubbles: l
                    })
                }))
            }), e.iFrameMode !== f || u.Ub) u.f.$c(e.swf, r, a, c, d);
            else {
                var h = u.e("iframe", {
                    id: o + "_iframe",
                    name: o + "_iframe",
                    className: "vjs-tech",
                    scrolling: "no",
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                a.readyFunction = "ready",
                a.eventProxyFunction = "events",
                a.errorEventProxyFunction = "errors",
                u.d(h, "load", u.bind(this,
                function() {
                    var t, n = h.contentWindow;
                    t = h.contentDocument ? h.contentDocument: h.contentWindow.document,
                    t.write(u.f.lc(e.swf, a, c, d)),
                    n.player = this.c,
                    n.ready = u.bind(this.c,
                    function(e) {
                        var n = this.i;
                        n.a = t.getElementById(e),
                        u.f.pb(n)
                    }),
                    n.events = u.bind(this.c,
                    function(t, e) {
                        this && "flash" === this.xa && this.k(e)
                    }),
                    n.errors = u.bind(this.c,
                    function(t, e) {
                        u.log("Flash Error", e)
                    })
                })),
                r.parentNode.replaceChild(h, r)
            }
        }
    }),
    t = u.f.prototype,
    t.dispose = function() {
        u.r.prototype.dispose.call(this)
    },
    t.play = function() {
        this.a.vjs_play()
    },
    t.pause = function() {
        this.a.vjs_pause()
    },
    t.src = function(t) {
        if (t === b) return this.currentSrc();
        if (u.f.hd(t) ? (t = u.f.Ac(t), this.Td(t.qb), this.Ud(t.Mb)) : (t = u.kc(t), this.a.vjs_src(t)), this.c.autoplay()) {
            var e = this;
            setTimeout(function() {
                e.play()
            },
            0)
        }
    },
    t.currentSrc = function() {
        var t = this.a.vjs_getProperty("currentSrc");
        if (t == h) {
            var e = this.rtmpConnection(),
            n = this.rtmpStream();
            e && n && (t = u.f.Bd(e, n))
        }
        return t
    },
    t.load = function() {
        this.a.vjs_load()
    },
    t.poster = function() {
        this.a.vjs_getProperty("poster")
    },
    t.Lb = m(),
    t.buffered = function() {
        return u.sb(0, this.a.vjs_getProperty("buffered"))
    },
    t.Wa = q(l),
    t.hc = q(l);
    var S = u.f.prototype,
    T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "),
    U = "error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks".split(" "),
    V;
    for (V = 0; V < T.length; V++) W(T[V]),
    ha();
    for (V = 0; V < U.length; V++) W(U[V]);
    if (u.f.isSupported = function() {
        return 10 <= u.f.version()[0]
    },
    u.f.nb = function(t) {
        return t.type ? (t = t.type.replace(/;.*/, "").toLowerCase(), t in u.f.dd || t in u.f.Bc ? "maybe": void 0) : ""
    },
    u.f.dd = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    },
    u.f.Bc = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    },
    u.f.onReady = function(t) {
        t = u.u(t);
        var e = t.player || t.parentNode.player,
        n = e.i;
        t.player = e,
        n.a = t,
        u.f.pb(n)
    },
    u.f.pb = function(t) {
        t.u().vjs_getProperty ? t.za() : setTimeout(function() {
            u.f.pb(t)
        },
        50)
    },
    u.f.onEvent = function(t, e) {
        u.u(t).player.k(e)
    },
    u.f.onError = function(t, e) {
        u.u(t).player.k("error"),
        u.log("Flash Error", e, t)
    },
    u.f.version = function() {
        var t = "0,0,0";
        try {
            t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch(e) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch(n) {}
        }
        return t.split(",")
    },
    u.f.$c = function(t, e, n, i, r) {
        t = u.f.lc(t, n, i, r),
        t = u.e("div", {
            innerHTML: t
        }).childNodes[0],
        n = e.parentNode,
        e.parentNode.replaceChild(t, e);
        var o = n.childNodes[0];
        setTimeout(function() {
            o.style.display = "block"
        },
        1e3)
    },
    u.f.lc = function(t, e, n, i) {
        var r = "",
        o = "",
        s = "";
        return e && u.l.ra(e,
        function(t, e) {
            r += t + "=" + e + "&amp;"
        }),
        n = u.l.B({
            movie: t,
            flashvars: r,
            allowScriptAccess: "always",
            allowNetworking: "all"
        },
        n),
        u.l.ra(n,
        function(t, e) {
            o += '<param name="' + t + '" value="' + e + '" />'
        }),
        i = u.l.B({
            data: t,
            width: "100%",
            height: "100%"
        },
        i),
        u.l.ra(i,
        function(t, e) {
            s += t + '="' + e + '" '
        }),
        '<object type="application/x-shockwave-flash"' + s + ">" + o + "</object>"
    },
    u.f.Bd = function(t, e) {
        return t + "&" + e
    },
    u.f.Ac = function(t) {
        var e = {
            qb: "",
            Mb: ""
        };
        if (!t) return e;
        var n, i = t.indexOf("&");
        return - 1 !== i ? n = i + 1 : (i = n = t.lastIndexOf("/") + 1, 0 === i && (i = n = t.length)),
        e.qb = t.substring(0, i),
        e.Mb = t.substring(n, t.length),
        e
    },
    u.f.jd = function(t) {
        return t in u.f.Bc
    },
    u.f.Oc = /^rtmp[set]?:\/\//i, u.f.hd = function(t) {
        return u.f.Oc.test(t)
    },
    u.Nc = u.b.extend({
        j: function(t, e, n) {
            if (u.b.call(this, t, e, n), t.h.sources && 0 !== t.h.sources.length) t.src(t.h.sources);
            else for (e = 0, n = t.h.techOrder; e < n.length; e++) {
                var i = u.Z(n[e]),
                r = window.videojs[i];
                if (r && r.isSupported()) {
                    I(t, i);
                    break
                }
            }
        }
    }), u.Player.prototype.textTracks = function() {
        return this.ya = this.ya || []
    },
    u.w = u.b.extend({
        j: function(t, e) {
            u.b.call(this, t, e),
            this.R = e.id || "vjs_" + e.kind + "_" + e.language + "_" + u.s++,
            this.xc = e.src,
            this.Xc = e["default"] || e.dflt,
            this.Dd = e.title,
            this.Qd = e.srclang,
            this.kd = e.label,
            this.$ = [],
            this.kb = [],
            this.ga = this.ha = 0,
            this.c.d("fullscreenchange", u.bind(this, this.Qc))
        }
    }), t = u.w.prototype, t.H = p("A"), t.src = p("xc"), t.tb = p("Xc"), t.title = p("Dd"), t.label = p("kd"), t.Vc = p("$"), t.Pc = p("kb"), t.readyState = p("ha"), t.mode = p("ga"), t.Qc = function() {
        this.a.style.fontSize = this.c.isFullScreen() ? 140 * (screen.width / this.c.width()) + "%": ""
    },
    t.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-" + this.A + " vjs-text-track"
        })
    },
    t.show = function() {
        Y(this),
        this.ga = 2,
        u.b.prototype.show.call(this)
    },
    t.D = function() {
        Y(this),
        this.ga = 1,
        u.b.prototype.D.call(this)
    },
    t.disable = function() {
        2 == this.ga && this.D(),
        this.c.o("timeupdate", u.bind(this, this.update, this.R)),
        this.c.o("ended", u.bind(this, this.reset, this.R)),
        this.reset(),
        this.c.fa("textTrackDisplay").removeChild(this),
        this.ga = 0
    },
    t.load = function() {
        0 === this.ha && (this.ha = 1, u.get(this.xc, u.bind(this, this.rd), u.bind(this, this.Fb)))
    },
    t.Fb = function(t) {
        this.error = t,
        this.ha = 3,
        this.k("error")
    },
    t.rd = function(t) {
        var e, n;
        t = t.split("\n");
        for (var i = "",
        r = 1,
        o = t.length; r < o; r++) if (i = u.trim(t[r])) {
            for ( - 1 == i.indexOf("-->") ? (e = i, i = u.trim(t[++r])) : e = this.$.length, e = {
                id: e,
                index: this.$.length
            },
            n = i.split(" --> "), e.startTime = ia(n[0]), e.sa = ia(n[1]), n = []; t[++r] && (i = u.trim(t[r]));) n.push(i);
            e.text = n.join("<br/>"),
            this.$.push(e)
        }
        this.ha = 2,
        this.k("loaded")
    },
    t.update = function() {
        if (0 < this.$.length) {
            var t = this.c.currentTime();
            if (this.Kb === b || t < this.Kb || this.Oa <= t) {
                var e, n, i, r, o = this.$,
                s = this.c.duration(),
                a = 0,
                u = l,
                c = [];
                for (t >= this.Oa || this.Oa === b ? r = this.vb !== b ? this.vb: 0 : (u = f, r = this.Bb !== b ? this.Bb: o.length - 1);;) {
                    if (i = o[r], i.sa <= t) a = Math.max(a, i.sa),
                    i.Ia && (i.Ia = l);
                    else if (t < i.startTime) {
                        if (s = Math.min(s, i.startTime), i.Ia && (i.Ia = l), !u) break
                    } else u ? (c.splice(0, 0, i), n === b && (n = r), e = r) : (c.push(i), e === b && (e = r), n = r),
                    s = Math.min(s, i.sa),
                    a = Math.max(a, i.startTime),
                    i.Ia = f;
                    if (u) {
                        if (0 === r) break;
                        r--
                    } else {
                        if (r === o.length - 1) break;
                        r++
                    }
                }
                for (this.kb = c, this.Oa = s, this.Kb = a, this.vb = e, this.Bb = n, t = this.kb, o = "", s = 0, a = t.length; s < a; s++) o += '<span class="vjs-tt-cue">' + t[s].text + "</span>";
                this.a.innerHTML = o,
                this.k("cuechange")
            }
        }
    },
    t.reset = function() {
        this.Oa = 0,
        this.Kb = this.c.duration(),
        this.Bb = this.vb = 0
    },
    u.Sb = u.w.extend(), u.Sb.prototype.A = "captions", u.Zb = u.w.extend(), u.Zb.prototype.A = "subtitles", u.Tb = u.w.extend(), u.Tb.prototype.A = "chapters", u.ac = u.b.extend({
        j: function(t, e, n) {
            if (u.b.call(this, t, e, n), t.h.tracks && 0 < t.h.tracks.length) {
                e = this.c,
                t = t.h.tracks;
                var i;
                for (n = 0; n < t.length; n++) {
                    i = t[n];
                    var r = e,
                    o = i.kind,
                    s = i.label,
                    a = i.language,
                    l = i;
                    i = r.ya = r.ya || [],
                    l = l || {},
                    l.kind = o,
                    l.label = s,
                    l.language = a,
                    o = u.Z(o || "subtitles"),
                    r = new window.videojs[o + "Track"](r, l),
                    i.push(r)
                }
            }
        }
    }), u.ac.prototype.e = function() {
        return u.b.prototype.e.call(this, "div", {
            className: "vjs-text-track-display"
        })
    },
    u.X = u.N.extend({
        j: function(t, e) {
            var n = this.ca = e.track;
            e.label = n.label(),
            e.selected = n.tb(),
            u.N.call(this, t, e),
            this.c.d(n.H() + "trackchange", u.bind(this, this.update))
        }
    }), u.X.prototype.p = function() {
        u.N.prototype.p.call(this),
        X(this.c, this.ca.R, this.ca.H())
    },
    u.X.prototype.update = function() {
        this.selected(2 == this.ca.mode())
    },
    u.eb = u.X.extend({
        j: function(t, e) {
            e.track = {
                H: function() {
                    return e.kind
                },
                C: t,
                label: function() {
                    return e.kind + " off"
                },
                tb: q(l),
                mode: q(l)
            },
            u.X.call(this, t, e),
            this.selected(f)
        }
    }), u.eb.prototype.p = function() {
        u.X.prototype.p.call(this),
        X(this.c, this.ca.R, this.ca.H())
    },
    u.eb.prototype.update = function() {
        for (var t, e = this.c.textTracks(), n = 0, i = e.length, r = f; n < i; n++) t = e[n],
        t.H() == this.ca.H() && 2 == t.mode() && (r = l);
        this.selected(r)
    },
    u.T = u.S.extend({
        j: function(t, e) {
            u.S.call(this, t, e),
            1 >= this.L.length && this.D()
        }
    }), u.T.prototype.qa = function() {
        var t, e = [];
        e.push(new u.eb(this.c, {
            kind: this.A
        }));
        for (var n = 0; n < this.c.textTracks().length; n++) t = this.c.textTracks()[n],
        t.H() === this.A && e.push(new u.X(this.c, {
            track: t
        }));
        return e
    },
    u.Ba = u.T.extend({
        j: function(t, e, n) {
            u.T.call(this, t, e, n),
            this.a.setAttribute("aria-label", "Captions Menu")
        }
    }), u.Ba.prototype.A = "captions", u.Ba.prototype.oa = "Captions", u.Ba.prototype.className = "vjs-captions-button", u.Ha = u.T.extend({
        j: function(t, e, n) {
            u.T.call(this, t, e, n),
            this.a.setAttribute("aria-label", "Subtitles Menu")
        }
    }), u.Ha.prototype.A = "subtitles", u.Ha.prototype.oa = "Subtitles", u.Ha.prototype.className = "vjs-subtitles-button", u.Ca = u.T.extend({
        j: function(t, e, n) {
            u.T.call(this, t, e, n),
            this.a.setAttribute("aria-label", "Chapters Menu")
        }
    }), t = u.Ca.prototype, t.A = "chapters", t.oa = "Chapters", t.className = "vjs-chapters-button", t.qa = function() {
        for (var t, e = [], n = 0; n < this.c.textTracks().length; n++) t = this.c.textTracks()[n],
        t.H() === this.A && e.push(new u.X(this.c, {
            track: t
        }));
        return e
    },
    t.Ma = function() {
        for (var t, e, n = this.c.textTracks(), i = 0, r = n.length, o = this.L = []; i < r; i++) if (t = n[i], t.H() == this.A && t.tb()) {
            if (2 > t.readyState()) return this.Nd = t,
            void t.d("loaded", u.bind(this, this.Ma));
            e = t;
            break
        }
        if (n = this.ua = new u.la(this.c), n.a.appendChild(u.e("li", {
            className: "vjs-menu-title",
            innerHTML: u.Z(this.A),
            Cd: -1
        })), e) {
            t = e.$;
            for (var s, i = 0,
            r = t.length; i < r; i++) s = t[i],
            s = new u.Za(this.c, {
                track: e,
                cue: s
            }),
            o.push(s),
            n.Y(s)
        }
        return 0 < this.L.length && this.show(),
        n
    },
    u.Za = u.N.extend({
        j: function(t, e) {
            var n = this.ca = e.track,
            i = this.cue = e.cue,
            r = t.currentTime();
            e.label = i.text,
            e.selected = i.startTime <= r && r < i.sa,
            u.N.call(this, t, e),
            n.d("cuechange", u.bind(this, this.update))
        }
    }), u.Za.prototype.p = function() {
        u.N.prototype.p.call(this),
        this.c.currentTime(this.cue.startTime),
        this.update(this.cue.startTime)
    },
    u.Za.prototype.update = function() {
        var t = this.cue,
        e = this.c.currentTime();
        this.selected(t.startTime <= e && e < t.sa)
    },
    u.l.B(u.Da.prototype.h.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    }), "undefined" != typeof window.JSON && "function" === window.JSON.parse) u.JSON = window.JSON;
    else {
        u.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        u.JSON.parse = function(a, c) {
            function d(t, e) {
                var n, i, r = t[e];
                if (r && "object" == typeof r) for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = d(r, n), i !== b ? r[n] = i: delete r[n]);
                return c.call(t, e, r)
            }
            var e;
            if (a = String(a), Z.lastIndex = 0, Z.test(a) && (a = a.replace(Z,
            function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
            })), /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"),
            "function" == typeof c ? d({
                "": e
            },
            "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    u.dc = function() {
        var t, e, n = document.getElementsByTagName("video");
        if (n && 0 < n.length) for (var i = 0,
        r = n.length; i < r; i++) {
            if (! (e = n[i]) || !e.getAttribute) {
                u.lb();
                break
            }
            e.player === b && (t = e.getAttribute("data-setup"), t !== h && (t = u.JSON.parse(t || "{}"), videojs(e, t)))
        } else u.Ec || u.lb()
    },
    u.lb = function() {
        setTimeout(u.dc, 1)
    },
    "complete" === document.readyState ? u.Ec = f: u.U(window, "load",
    function() {
        u.Ec = f
    }),
    u.lb(),
    u.sd = function(t, e) {
        u.Player.prototype[t] = e
    };
    var ja = this;
    ja.Id = f,
    $("videojs", u),
    $("_V_", u),
    $("videojs.options", u.options),
    $("videojs.players", u.va),
    $("videojs.TOUCH_ENABLED", u.$b),
    $("videojs.cache", u.pa),
    $("videojs.Component", u.b),
    u.b.prototype.player = u.b.prototype.C,
    u.b.prototype.options = u.b.prototype.options,
    u.b.prototype.init = u.b.prototype.j,
    u.b.prototype.dispose = u.b.prototype.dispose,
    u.b.prototype.createEl = u.b.prototype.e,
    u.b.prototype.contentEl = u.b.prototype.La,
    u.b.prototype.el = u.b.prototype.u,
    u.b.prototype.addChild = u.b.prototype.Y,
    u.b.prototype.getChild = u.b.prototype.fa,
    u.b.prototype.getChildById = u.b.prototype.ed,
    u.b.prototype.children = u.b.prototype.children,
    u.b.prototype.initChildren = u.b.prototype.nc,
    u.b.prototype.removeChild = u.b.prototype.removeChild,
    u.b.prototype.on = u.b.prototype.d,
    u.b.prototype.off = u.b.prototype.o,
    u.b.prototype.one = u.b.prototype.U,
    u.b.prototype.trigger = u.b.prototype.k,
    u.b.prototype.triggerReady = u.b.prototype.za,
    u.b.prototype.show = u.b.prototype.show,
    u.b.prototype.hide = u.b.prototype.D,
    u.b.prototype.width = u.b.prototype.width,
    u.b.prototype.height = u.b.prototype.height,
    u.b.prototype.dimensions = u.b.prototype.Yc,
    u.b.prototype.ready = u.b.prototype.I,
    u.b.prototype.addClass = u.b.prototype.n,
    u.b.prototype.removeClass = u.b.prototype.t,
    u.b.prototype.buildCSSClass = u.b.prototype.Q,
    u.Player.prototype.ended = u.Player.prototype.ended,
    $("videojs.MediaLoader", u.Nc),
    $("videojs.TextTrackDisplay", u.ac),
    $("videojs.ControlBar", u.Da),
    $("videojs.Button", u.q),
    $("videojs.PlayToggle", u.Xb),
    $("videojs.FullscreenToggle", u.Ea),
    $("videojs.BigPlayButton", u.Ya),
    $("videojs.LoadingSpinner", u.Vb),
    $("videojs.CurrentTimeDisplay", u.$a),
    $("videojs.DurationDisplay", u.ab),
    $("videojs.TimeDivider", u.bc),
    $("videojs.RemainingTimeDisplay", u.gb),
    $("videojs.Slider", u.O),
    $("videojs.ProgressControl", u.fb),
    $("videojs.SeekBar", u.Yb),
    $("videojs.LoadProgressBar", u.cb),
    $("videojs.PlayProgressBar", u.Wb),
    $("videojs.SeekHandle", u.Ga),
    $("videojs.VolumeControl", u.ib),
    $("videojs.VolumeBar", u.hb),
    $("videojs.VolumeLevel", u.cc),
    $("videojs.VolumeMenuButton", u.ma),
    $("videojs.VolumeHandle", u.jb),
    $("videojs.MuteToggle", u.ea),
    $("videojs.PosterImage", u.Fa),
    $("videojs.Menu", u.la),
    $("videojs.MenuItem", u.N),
    $("videojs.MenuButton", u.S),
    u.S.prototype.createItems = u.S.prototype.qa,
    u.T.prototype.createItems = u.T.prototype.qa,
    u.Ca.prototype.createItems = u.Ca.prototype.qa,
    $("videojs.SubtitlesButton", u.Ha),
    $("videojs.CaptionsButton", u.Ba),
    $("videojs.ChaptersButton", u.Ca),
    $("videojs.MediaTechController", u.r),
    u.r.prototype.features = u.r.prototype.m,
    u.r.prototype.m.volumeControl = u.r.prototype.m.Dc,
    u.r.prototype.m.fullscreenResize = u.r.prototype.m.Od,
    u.r.prototype.m.progressEvents = u.r.prototype.m.Sd,
    u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Vd,
    u.r.prototype.setPoster = u.r.prototype.Lb,
    $("videojs.Html5", u.g),
    u.g.Events = u.g.bb,
    u.g.isSupported = u.g.isSupported,
    u.g.canPlaySource = u.g.nb,
    u.g.patchCanPlayType = u.g.rc,
    u.g.unpatchCanPlayType = u.g.Fd,
    u.g.prototype.setCurrentTime = u.g.prototype.vd,
    u.g.prototype.setVolume = u.g.prototype.Ad,
    u.g.prototype.setMuted = u.g.prototype.yd,
    u.g.prototype.setPreload = u.g.prototype.zd,
    u.g.prototype.setAutoplay = u.g.prototype.ud,
    u.g.prototype.setLoop = u.g.prototype.xd,
    u.g.prototype.enterFullScreen = u.g.prototype.hc,
    u.g.prototype.exitFullScreen = u.g.prototype.bd,
    $("videojs.Flash", u.f),
    u.f.isSupported = u.f.isSupported,
    u.f.canPlaySource = u.f.nb,
    u.f.onReady = u.f.onReady,
    $("videojs.TextTrack", u.w),
    u.w.prototype.label = u.w.prototype.label,
    u.w.prototype.kind = u.w.prototype.H,
    u.w.prototype.mode = u.w.prototype.mode,
    u.w.prototype.cues = u.w.prototype.Vc,
    u.w.prototype.activeCues = u.w.prototype.Pc,
    $("videojs.CaptionsTrack", u.Sb),
    $("videojs.SubtitlesTrack", u.Zb),
    $("videojs.ChaptersTrack", u.Tb),
    $("videojs.autoSetup", u.dc),
    $("videojs.plugin", u.sd),
    $("videojs.createTimeRange", u.sb),
    $("videojs.util", u.ja),
    u.ja.mergeOptions = u.ja.Eb
} (),
$(function() {
    function t(t, e, n, i) {
        return - n * (t /= i) * (t - 2) + e
    }
    function e(t, e) {
        this.option = $.extend({},
        n, e),
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
    var n = {
        start: 0,
        preBtn: "",
        nextBtn: "",
        split: []
    },
    i = e.prototype;
    return i._init = function() {
        this.container.width(this._getContainerWidth()),
        this._setPoints(this.option.split),
        this._setContainerOffset(this.points[this.option.start]),
        this._initEvent()
    },
    i._initEvent = function() {
        this.option.preBtn && ($(this.option.preBtn).on("mouseenter", $.proxy(this._preBtnMouseEnter, this)), $(this.option.preBtn).on("click", $.proxy(this._preBtnMouseEnter, this))),
        this.option.nextBtn && ($(this.option.nextBtn).on("mouseenter", $.proxy(this._nextBtnMouseEnter, this)), $(this.option.nextBtn).on("click", $.proxy(this._nextBtnMouseEnter, this))),
        this.wrapper.on("mousemove", $.proxy(this._wrapperMouseMove, this))
    },
    i._preBtnMouseEnter = function() {
        return ! this.isAnimate && void(this._setIndex( - 1) && this._animate())
    },
    i._nextBtnMouseEnter = function() {
        return ! this.isAnimate && void(this._setIndex(1) && this._animate())
    },
    i._wrapperMouseMove = function(t) {
        var e = t.pageX;
        t.pageY;
        this.sliders.each(function(t, n) {
            var i = $(n),
            r = i.offset(),
            o = r.left;
            r.top,
            Math.abs(e - o)
        })
    },
    i._animate = function() {
        var e = -this.container.get(0).offsetLeft,
        n = this.points[this.index],
        i = 0,
        r = 80,
        o = n - e,
        s = this;
        s.timer && clearInterval(s.timer),
        s.timer = setInterval(function() {
            i >= r && (clearInterval(s.timer), this.isAnimate = !1),
            this.isAnimate = !0,
            s._setContainerOffset(t(i, e, o, r)),
            i++
        },
        1e3 / 60)
    },
    i._setContainerOffset = function(t) {
        this.container.css("left", -t + "px")
    },
    i._setPoints = function(t) {
        for (var e = 0,
        n = t.length,
        i = [], r = this.wrapper.outerWidth(), o = this.container.outerWidth(); e < n; e++) {
            var s = this.slidersWidth[t[e]];
            s + r > o && (s = o - r),
            i.push(s)
        }
        this.points = i
    },
    i._setIndex = function(t) {
        var e = this.index;
        return this.index += t,
        this.index < 0 && (this.index = 0),
        this.index > this.points.length - 1 && (this.index = this.points.length - 1),
        this.index !== e
    },
    i._getContainerWidth = function() {
        var t = 0,
        e = this;
        return this.sliders.each(function(n, i) {
            e.slidersWidth[n] = t;
            var r = window.getComputedStyle ? getComputedStyle(i, null) : i.firstChild.currentStyle;
            t += parseInt(r.width) + (parseInt(r.marginLeft) || 0) + parseInt(r.marginRight)
        }),
        t
    },
    $.fn.imgScale = function(t) {
        return new e($(this), t || {})
    },
    e
});
var selectDate = function() {
    var t = {
        tds: null,
        dd: null,
        getCNDate: function(t, e, n, i) {
            function r(t, e) {
                return t >> e & 1
            }
            function o() {
                d = 3 != arguments.length ? new Date: new Date(arguments[0], arguments[1], arguments[2]);
                var t, e, n, i, o = !1,
                s = d.getYear();
                for (s < 1900 && (s += 1900), t = 365 * (s - 1921) + Math.floor((s - 1921) / 4) + p[d.getMonth()] + d.getDate() - 38, d.getYear() % 4 == 0 && d.getMonth() > 1 && t++, e = 0;; e++) {
                    for (i = f[e] < 4095 ? 11 : 12, n = i; n >= 0; n--) {
                        if (t <= 29 + r(f[e], n)) {
                            o = !0;
                            break
                        }
                        t = t - 29 - r(f[e], n)
                    }
                    if (o) break
                }
                u = 1921 + e,
                l = i - n + 1,
                c = t,
                12 == i && (l == Math.floor(f[e] / 65536) + 1 && (l = 1 - l), l > Math.floor(f[e] / 65536) + 1 && l--)
            }
            function s(t, e, n) {
                return t < 1921 || t > 2020 ? "": (e = parseInt(e) > 0 ? e - 1 : 11, o(t, e, n), a())
            }
            function a() {
                var e, n = l + "." + c;
                switch (n) {
                case "12.29":
                    h.tds = t,
                    h.dd = i,
                    e = "除夕";
                    break;
                case "12.30":
                    h.tds.innerHTML = h.dd,
                    h.tds.className = h.tds.className.replace(/cRed/, ""),
                    h.tds.removeAttribute("data-holiday"),
                    h.tds = null,
                    h.dd = null,
                    e = "除夕";
                    break;
                case "1.1":
                    e = "春节";
                    break;
                case "1.15":
                    e = "元宵";
                    break;
                case "5.5":
                    e = "端午";
                    break;
                case "8.15":
                    e = "中秋"
                }
                e && (t.setAttribute("data-holiday", e), t.innerHTML = e, t.className += " cRed"),
                e = null
            }
            var u, l, c, d, h = this,
            f = new Array(100),
            p = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
            f = new Array(2635, 333387, 1701, 1748, 267701, 694, 2391, 133423, 1175, 396438, 3402, 3749, 331177, 1453, 694, 201326, 2350, 465197, 3221, 3402, 400202, 2901, 1386, 267611, 605, 2349, 137515, 2709, 464533, 1738, 2901, 330421, 1242, 2651, 199255, 1323, 529706, 3733, 1706, 398762, 2741, 1206, 267438, 2647, 1318, 204070, 3477, 461653, 1386, 2413, 330077, 1197, 2637, 268877, 3365, 531109, 2900, 2922, 398042, 2395, 1179, 267415, 2635, 661067, 1701, 1748, 398772, 2742, 2391, 330031, 1175, 1611, 200010, 3749, 527717, 1452, 2742, 332397, 2350, 3222, 268949, 3402, 3493, 133973, 1386, 464219, 605, 2349, 334123, 2709, 2890, 267946, 2773, 592565, 1210, 2651, 395863, 1323, 2707, 265877),
            s(e, n, i)
        },
        festival: function(t, e, n) {
            var i, r = parseInt(n.toString().slice( - 2)),
            o = "4." + (Math.floor(.2422 * r + 4.81) - Math.floor(r / 4));
            switch (e) {
            case "1.1":
                i = "元旦";
                break;
            case o:
                i = "清明";
                break;
            case "5.1":
                i = "劳动";
                break;
            case "10.1":
                i = "国庆"
            }
            i && (t.setAttribute("data-holiday", i), t.innerHTML = i, t.className += " cRed"),
            i = null
        },
        timeArr: [],
        moth: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        stopPropagation: function(t) {
            var e = t || window.e;
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        },
        getPos: function(t) {
            var e = document.documentElement.scrollLeft || document.body.scrollLeft,
            n = document.documentElement.scrollTop || document.body.scrollTop,
            i = t.getBoundingClientRect();
            return {
                top: i.top + n,
                right: i.right + e,
                bottom: i.bottom + n,
                left: i.left + e,
                width: t.offsetWidth,
                height: t.offsetHeight
            }
        },
        isleap: function(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        },
        createDivBox: function(t, e) {
            var n = document.createElement("div");
            n.id = t + "Box",
            n.innerHTML = this.monthTem(e),
            n.className = "date-mainBox",
            n.style.cssText = "display: none",
            document.body.appendChild(n)
        },
        scrollFn: function(t) {
            var e = $("#" + t.id + "Box")[0],
            n = e.getBoundingClientRect(),
            i = document.documentElement.getBoundingClientRect(),
            r = n.top,
            o = i.height,
            s = e.offsetHeight;
            r + s > o && window.scrollBy(0, r + s - o + 10)
        },
        createTable: function() {
            for (var t = [], e = 0; e < 6; e++) t.push("<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>");
            return t.join("")
        },
        createDiv: function(t, e) {
            var n = '<div class="date_minus date_backL"></div>',
            i = '<div class="date_month"></div>',
            r = '<div class="date_add date_backR"></div>',
            o = "";
            return 1 == e && (o = n + i + r),
            2 == e && (1 === t && (o = n + i), 2 === t && (o = i + r)),
            3 == e && (1 === t && (o = n + i), 2 === t && (o = i), 3 === t && (o = i + r)),
            o
        },
        monthTem: function(t) {
            for (var e, n = "",
            i = "",
            r = 0; r < t; r++) r > 0 && (i = "date-ml4"),
            e = '<div class="date-box ' + i + '">    <div class="date_main">        <div class="date_box_top">' + this.createDiv(r + 1, t) + '        </div>        <ul class="date_week_ul">            <li>日</li>            <li>一</li>            <li>二</li>            <li>三</li>            <li>四</li>            <li>五</li>            <li>六</li>        </ul>        <table class="ate_box_table" cellspacing="1" cellpadding="0">' + this.createTable() + "        </table>    </div></div>",
            n += e;
            return n
        },
        hideDOM: function(e) {
            t.timeArr = [];
            for (var n = 0; n < $(".date-mainBox").length; n++)"block" == $(".date-mainBox").eq(n).css("display") && ($(".date-mainBox").eq(n).css({
                display: "none"
            }), e())
        },
        positionFn: function(t) {
            var e = this.getPos(document.getElementById(t)),
            n = $("#" + t + "Box").width();
            document.body.clientWidth - e.left < n && (e.left = document.body.clientWidth - n),
            document.getElementById(t + "Box").style.cssText = "top: " + (e.top + e.height + 5) + "px; left: " + e.left + "px"
        }
    },
    e = function(t) {
        this.option = $.extend({
            id: "",
            outId: "",
            min: "1900-01-01",
            max: "2099-12-31",
            index: 2,
            success: function(t) {},
            inTime: (new Date).getTime(),
            outTime: (new Date).getTime() + 864e5,
            pointsAll: !1,
            show: function(t) {},
            hide: function(t) {}
        },
        t),
        this.months = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        this.mins = this.option.min.match(/\d+/g),
        this.maxs = this.option.max.match(/\d+/g)
    };
    return e.prototype = {
        init: function() {
            var e = this.option,
            n = this;
            if (!e.id) throw new Error("需要传入input元素的ID");
            $("#" + e.id).attr({
                "data-timein": e.inTime,
                "data-timeout": e.outTime
            }),
            this.view(),
            $("#" + e.id).click(function(i) {
                var r = $(this);
                "block" === $("#" + e.id + "Box").css("display") ? ($("#" + e.id + "Box").css({
                    display: "none"
                }), e.hide({
                    id: e.id
                })) : (t.positionFn(e.id), n.initDOM(e.id, [parseInt(r.attr("data-timein"), 10), parseInt(r.attr("data-timeout"), 10)], e))
            }),
            $(document).click(function(t) {
                var n = t || window.event,
                i = n.target || n.srcElement;
                return i.id === e.id ? ("block" === $("#" + e.outId + "Box").css("display") && ($("#" + e.outId + "Box").css({
                    display: "none"
                }), e.hide({
                    id: e.outId
                })), !1) : void("block" === $("#" + e.id + "Box").css("display") && ($("#" + e.id + "Box").css({
                    display: "none"
                }), e.hide({
                    id: e.id
                })))
            }),
            $(window).resize(function() {
                "block" === $("#" + e.id + "Box").css("display") && t.positionFn(e.id)
            }),
            this.events(e.id)
        },
        partInit: function() {
            var e = this.option,
            n = this;
            if (!e.id || !e.outId) throw new Error("需要传入input元素的ID");
            $("#" + e.id).attr({
                "data-timer": e.inTime
            }),
            $("#" + e.outId).attr({
                "data-timer": e.outTime
            }),
            this.view(),
            $("#" + e.id + ", #" + e.outId).click(function(i) {
                var r = $(this),
                o = r.attr("id");
                "block" === $("#" + o + "Box").css("display") ? ($("#" + o + "Box").css({
                    display: "none"
                }), e.hide({
                    id: o
                })) : (t.positionFn(o), n.initDOM(o, parseInt(r.attr("data-timer"), 10), e))
            }),
            $(window).resize(function() {
                "block" === $("#" + e.id + "Box").css("display") && t.positionFn(e.id),
                "block" === $("#" + e.outId + "Box").css("display") && t.positionFn(e.outId)
            }),
            $(document).click(function(t) {
                var n = t || window.event,
                i = n.target || n.srcElement;
                return i.id === e.id ? ("block" === $("#" + e.outId + "Box").css("display") && ($("#" + e.outId + "Box").css({
                    display: "none"
                }), e.hide({
                    id: e.outId
                })), !1) : i.id === e.outId ? ("block" === $("#" + e.id + "Box").css("display") && ($("#" + e.id + "Box").css({
                    display: "none"
                }), e.hide({
                    id: e.id
                })), !1) : ("block" === $("#" + e.id + "Box").css("display") && ($("#" + e.id + "Box").css({
                    display: "none"
                }), e.hide({
                    id: e.id
                })), void("block" === $("#" + e.outId + "Box").css("display") && ($("#" + e.outId + "Box").css({
                    display: "none"
                }), e.hide({
                    id: e.outId
                }))))
            }),
            this.events(e.id),
            this.events(e.outId)
        },
        view: function() {
            var e = this.option;
            e.index >= 3 && (e.index = 3),
            e.index <= 1 && (e.index = 1),
            t.createDivBox(e.id, e.index),
            e.outId && t.createDivBox(e.outId, e.index)
        },
        initDOM: function(e, n, i) {
            i.outId ? this.viewDate2({
                timer: n,
                id: e
            }) : this.viewDate({
                arr: n,
                id: e
            }),
            $("#" + e + "Box").css({
                display: "block"
            }),
            i.show({
                id: e
            }),
            t.scrollFn(i)
        },
        viewDate: function(e) {
            var n = {},
            i = new Date,
            r = this.option;
            e.arr = e.arr.sort();
            var o = new Date(e.arr[0]),
            s = new Date(e.arr[1]),
            a = [o.getFullYear(), o.getMonth() + 1, o.getDate()],
            u = [s.getFullYear(), s.getMonth() + 1, s.getDate()];
            a[0] < this.mins[0] && (a[0] = this.mins[0]),
            u[0] > this.maxs[0] && (u[0] = this.maxs[0]),
            e.ymd ? n.ymd = [e.ymd[0], e.ymd[1] - 1, e.ymd[2]] : n.ymd = [a[0], a[1] - 1, a[2]];
            for (var l = 0; l < r.index; l++) {
                l > 0 && (n.ymd[1] += 1, n.ymd[1] >= 12 && (n.ymd[1] -= 12, n.ymd[0]++)),
                this.months[1] = t.isleap(n.ymd[0]) ? 29 : 28;
                var i = new Date;
                i.setFullYear(n.ymd[0], n.ymd[1], 1),
                n.FDay = i.getDay(),
                n.NDay = this.months[n.ymd[1]];
                var c, d = $("#" + e.id + "Box .date-box")[l],
                h = d.getElementsByTagName("td"),
                f = 1,
                p = new Date(a[0], a[1] - 1, a[2]).getTime(),
                m = new Date(u[0], u[1] - 1, u[2]).getTime(),
                v = new Date;
                n.thatTime = new Date(v.getFullYear(), v.getMonth(), v.getDate()).getTime();
                for (var g = 0; g < h.length; g++) if (h[g].className = "", h[g].innerHTML = "", h[g].removeAttribute("data-ymd"), g < n.FDay || g > n.NDay + n.FDay - 1) h[g].className = "date_nothis";
                else {
                    if (h[g].innerHTML = f, t.festival(h[g], n.ymd[1] + 1 + "." + f, n.ymd[0]), t.getCNDate(h[g], n.ymd[0], n.ymd[1] + 1, f), c = new Date(n.ymd[0], n.ymd[1], f).getTime(), r.pointsAll) h[g].setAttribute("data-ymd", c);
                    else if (e.days15) {
                        var y = Math.floor((new Date - c) / 864e5) + 91,
                        b = (t.timeArr[0] + 1296e6 - c) / 864e5;
                        y > 0 && b > 0 && t.timeArr[0] <= c ? h[g].setAttribute("data-ymd", c) : h[g].className = "date_nothis"
                    } else n.thatTime <= c && n.thatTime + 78624e5 > c ? h[g].setAttribute("data-ymd", c) : h[g].className = "date_nothis";
                    1 === t.timeArr.length ? t.timeArr[0] === c && (h[g].className += " date_td", h[g].innerHTML = "入住") : (c == p && (h[g].className += " date_td", h[g].innerHTML = "入住"), c == m && (h[g].className += " date_td", h[g].innerHTML = "离店")),
                    f++
                }
                $("#" + e.id + "Box .date_month").eq(l).attr({
                    "data-ym": n.ymd[0] + "-" + n.ymd[1]
                }).html(n.ymd[0] + "    " + t.moth[n.ymd[1]] + "月")
            }
        },
        viewDate2: function(e) {
            var n = {},
            i = new Date,
            r = this.option;
            if (e.id === r.id) var o = new Date(e.timer),
            s = new Date(parseInt($("#" + r.outId).attr("data-timer")));
            else var o = new Date(parseInt($("#" + r.id).attr("data-timer"))),
            s = new Date(e.timer);
            var a = [o.getFullYear(), o.getMonth() + 1, o.getDate()],
            u = [s.getFullYear(), s.getMonth() + 1, s.getDate()];
            a[0] < this.mins[0] && (a[0] = this.mins[0]),
            u[0] > this.maxs[0] && (u[0] = this.maxs[0]),
            e.ymd ? n.ymd = [e.ymd[0], e.ymd[1] - 1, e.ymd[2]] : n.ymd = [a[0], a[1] - 1, a[2]];
            for (var l = 0; l < r.index; l++) {
                l > 0 && (n.ymd[1] += 1, n.ymd[1] >= 12 && (n.ymd[1] -= 12, n.ymd[0]++)),
                this.months[1] = t.isleap(n.ymd[0]) ? 29 : 28;
                var i = new Date;
                i.setFullYear(n.ymd[0], n.ymd[1], 1),
                n.FDay = i.getDay(),
                n.NDay = this.months[n.ymd[1]];
                var c, d = $("#" + e.id + "Box .date-box")[l],
                h = d.getElementsByTagName("td"),
                f = 1,
                p = new Date(a[0], a[1] - 1, a[2]).getTime();
                new Date(u[0], u[1] - 1, u[2]).getTime();
                if (e.id === r.outId) n.thatTime = new Date(a[0], a[1] - 1, a[2]).getTime();
                else {
                    var m = new Date;
                    n.thatTime = new Date(m.getFullYear(), m.getMonth(), m.getDate()).getTime()
                }
                for (var v = 0; v < h.length; v++) if (h[v].className = "", h[v].innerHTML = "", h[v].removeAttribute("data-ymd"), v < n.FDay || v > n.NDay + n.FDay - 1) h[v].className = "date_nothis";
                else {
                    if (h[v].innerHTML = f, t.festival(h[v], n.ymd[1] + 1 + "." + f, n.ymd[0]), t.getCNDate(h[v], n.ymd[0], n.ymd[1] + 1, f), c = new Date(n.ymd[0], n.ymd[1], f).getTime(), r.pointsAll) h[v].setAttribute("data-ymd", c);
                    else if (e.id === r.id) if (this.mins.length > 0 && "1900" != this.mins[0]) {
                        var g = new Date(n.ymd[0], n.ymd[1] + 1, f).getTime();
                        g < new Date(parseInt(this.mins[0]), parseInt(this.mins[1]), parseInt(this.mins[2])).getTime() ? h[v].className = "date_nothis": h[v].setAttribute("data-ymd", c)
                    } else n.thatTime <= c && n.thatTime + 7776e6 > c ? h[v].setAttribute("data-ymd", c) : h[v].className = "date_nothis";
                    else {
                        var y = Math.floor((new Date - c) / 864e5) + 91,
                        b = (p + 1296e6 - c) / 864e5;
                        y > 0 && b > 0 && p <= c ? h[v].setAttribute("data-ymd", c) : h[v].className = "date_nothis"
                    }
                    p === c && (h[v].className += " date_td", h[v].innerHTML = "入住"),
                    f++
                }
                $("#" + e.id + "Box .date_month").eq(l).attr({
                    "data-ym": n.ymd[0] + "-" + n.ymd[1]
                }).html(n.ymd[0] + "    " + t.moth[n.ymd[1]] + "月")
            }
        },
        events: function(e) {
            var n = this.option,
            i = this;
            $("#" + e + "Box").click(t.stopPropagation),
            $("#" + e + "Box .date_minus").click(function(r) {
                var o = $("#" + e + "Box .date_month").eq(0).attr("data-ym").match(/\d+/g),
                s = parseInt(o[0], 10),
                a = parseInt(o[1], 10);
                if (0 === a ? (a = 11, s--) : a--, n.outId) i.viewDate2({
                    ymd: [s, a + 1, 1],
                    timer: parseInt($("#" + e).attr("data-timer"), 10),
                    id: e
                });
                else {
                    var u = !1;
                    1 === t.timeArr.length && (u = !0),
                    i.viewDate({
                        ymd: [s, a + 1, 1],
                        arr: [parseInt($("#" + e).attr("data-timein"), 10), parseInt($("#" + e).attr("data-timeout"), 10)],
                        id: e,
                        days15: u
                    })
                }
            }),
            $("#" + e + "Box .date_add").click(function(r) {
                var o = $("#" + e + "Box .date_month").eq(0).attr("data-ym").match(/\d+/g),
                s = parseInt(o[0], 10),
                a = parseInt(o[1], 10);
                if (11 === a ? (a = 0, s++) : a++, n.outId) i.viewDate2({
                    ymd: [s, a + 1, 1],
                    timer: parseInt($("#" + e).attr("data-timer"), 10),
                    id: e
                });
                else {
                    var u = !1;
                    1 === t.timeArr.length && (u = !0),
                    i.viewDate({
                        ymd: [s, a + 1, 1],
                        arr: [parseInt($("#" + e).attr("data-timein"), 10), parseInt($("#" + e).attr("data-timeout"), 10)],
                        id: e,
                        days15: u
                    })
                }
            }),
            $("#" + e + "Box td").click(function(r) {
                var o = parseInt($(this).attr("data-ymd"), 10),
                s = null;
                if ($(this).hasClass("date_nothis")) return ! 1;
                if (n.outId) {
                    if (e === n.outId) {
                        if ($(this).hasClass("date_td")) return ! 1;
                        s = o,
                        o = parseInt($("#" + n.id).attr("data-timer"), 10)
                    } else s = o + 864e5;
                    $("#" + n.id).attr({
                        "data-timer": o
                    }),
                    $("#" + n.outId).attr({
                        "data-timer": s
                    }),
                    $("#" + e + "Box").css({
                        display: "none"
                    }),
                    n.hide({
                        id: e
                    }),
                    e === n.id && (t.positionFn(n.outId), i.initDOM(n.outId, parseInt($("#" + n.outId).attr("data-timer"), 10), n)),
                    n.success({
                        inTime: o,
                        outTime: s
                    })
                } else {
                    if (t.timeArr[0] && t.timeArr[0] === o) return ! 1;
                    for (var a = $("#" + e + "Box .date_td"), u = 0; u < a.length; u++) if (a.eq(u).attr("data-holiday")) a.eq(u).html(a.eq(u).attr("data-holiday"));
                    else {
                        var l = a.eq(u).attr("data-ymd"),
                        c = new Date;
                        c.setTime(l),
                        a.eq(u).html(c.getDate())
                    }
                    if (a.removeClass("date_td"), t.timeArr.push(o), 1 == t.timeArr.length) {
                        if ($(this).html("入住").addClass("date_td"), !n.pointsAll) {
                            var d = new Date(o),
                            h = $(this).parent().parent().parent().parent().parent().hasClass("date-ml4") ? 1 : 0,
                            f = [d.getFullYear(), d.getMonth() + 1 - h, d.getDate()];
                            i.days15(o, f)
                        }
                    } else {
                        var p = "";
                        t.timeArr = t.timeArr.sort();
                        for (var m = 0; m < t.timeArr.length; m++) {
                            var c = new Date;
                            c.setTime(t.timeArr[m]);
                            var v = c.getFullYear(),
                            g = c.getMonth() + 1,
                            y = c.getDate();
                            p += 0 == m ? v + "-" + g + "-" + y + " 至 ": v + "-" + g + "-" + y
                        }
                        $("#" + e).val(p).attr({
                            "data-timein": t.timeArr[0],
                            "data-timeout": t.timeArr[1]
                        }),
                        $("#" + e + "Box").css({
                            display: "none"
                        }),
                        n.hide({
                            id: e
                        }),
                        n.success({
                            inTime: t.timeArr[0],
                            outTime: t.timeArr[1]
                        }),
                        t.timeArr = []
                    }
                }
            })
        },
        days15: function(e, n) {
            var i = this.option;
            1 === t.timeArr.length && (e || (e = $("#" + i.id).attr("data-timein")), this.viewDate({
                days15: !0,
                arr: [parseInt(e, 10), parseInt($("#" + i.id).attr("data-timeout"), 10)],
                id: i.id,
                ymd: n
            }))
        }
    },
    e
} (); !
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
} (function(t) {
    t.cxSlide = function() {
        var e = {
            dom: {},
            api: {}
        };
        return e.init = function() {
            for (var e, n, i = this,
            r = function(t) {
                return ! (!t || "function" != typeof HTMLElement && "object" != typeof HTMLElement || !(t instanceof HTMLElement)) || !(!t || !t.nodeType || 1 !== t.nodeType)
            },
            o = function(t) {
                return !! (t && t.length && ("function" == typeof jQuery || "object" == typeof jQuery) && t instanceof jQuery)
            },
            s = 0, a = arguments.length; s < a; s++) o(arguments[s]) ? i.dom.el = arguments[s] : r(arguments[s]) ? i.dom.el = t(arguments[s]) : "function" == typeof arguments[s] ? n = arguments[s] : "object" == typeof arguments[s] && (e = arguments[s]);
            i.dom.el.length && (i.settings = t.extend({},
            t.cxSlide.defaults, e), i.build(), i.api = {
                play: function() {
                    i.settings.auto = !0,
                    i.play()
                },
                stop: function() {
                    i.settings.auto = !1,
                    i.stop()
                },
                "goto": function() {
                    i["goto"].apply(i, arguments)
                },
                prev: function() {
                    i["goto"](i.now - 1)
                },
                next: function() {
                    i["goto"]()
                }
            },
            "function" == typeof n && n(i.api))
        },
        e.build = function() {
            var e, n = this;
            if (n.dom.box = n.dom.el.find(".box"), n.dom.list = n.dom.box.find(".list"), n.dom.items = n.dom.list.find("li"), n.itemSum = n.dom.items.length, n.baseClass = n.dom.el.attr("class"), !(n.itemSum <= 1)) {
                if (n.dom.numList = n.dom.el.find(".pagination"), n.dom.numBtns = n.dom.numList.find("li"), n.dom.plusBtn = n.dom.el.find(".plus"), n.dom.minusBtn = n.dom.el.find(".minus"), n.boxWidth = n.dom.box.width(), n.boxHeight = n.dom.box.height(), n.now = 0, n.settings.btn && !n.dom.numList.length) {
                    e = "";
                    for (var i = 1; i <= n.itemSum; i++) e += '<li class="b_' + i + '"></li>';
                    n.dom.numList = t("<ul></ul>", {
                        "class": "pagination",
                        html: e
                    }).appendTo(n.dom.el),
                    n.dom.numBtns = n.dom.numList.find("li")
                }
                n.settings.plus && !n.dom.plusBtn.length && (n.dom.plusBtn = t("<div></div>", {
                    "class": "plus"
                }).appendTo(n.dom.el)),
                n.settings.minus && !n.dom.minusBtn.length && (n.dom.minusBtn = t("<div></div>", {
                    "class": "minus"
                }).appendTo(n.dom.el)),
                n.settings.hoverLock && (n.dom.box.on("mouseenter",
                function() {
                    n.stop()
                }), n.dom.box.on("mouseleave",
                function() {
                    n.play()
                })),
                n.settings.btn && n.dom.numList.on(n.settings.events, "li",
                function() {
                    n["goto"](t(this).index())
                }),
                n.settings.minus && n.dom.minusBtn.on(n.settings.events,
                function() {
                    n["goto"](n.now - 1)
                }),
                n.settings.plus && n.dom.plusBtn.on(n.settings.events,
                function() {
                    n["goto"]()
                }),
                n["goto"](n.settings.start)
            }
        },
        e.play = function() {
            var t = this;
            t.settings.auto && (t.stop(), t.run = setTimeout(function() {
                t["goto"]()
            },
            t.settings.time))
        },
        e.stop = function() {
            "undefined" != typeof this.run && clearTimeout(this.run)
        },
        e["goto"] = function(t) {
            var e, n = this,
            i = "undefined" == typeof t ? n.now + 1 : parseInt(t, 10),
            r = n.now,
            o = n.itemSum - 1;
            if (i > o ? i = 0 : i < 0 && (i = o), n.dom.numList.length && n.dom.numBtns.removeClass("in out selected"), n.stop(), n.dom.el.attr("class", n.baseClass + " to_" + i), r === i) return n.dom.numBtns.eq(i).addClass("in selected"),
            n.dom.items.eq(i).addClass("in"),
            void n.play();
            switch (n.dom.numBtns.eq(r).addClass("out").end().eq(i).addClass("in selected"), n.dom.items.removeClass("in out").eq(r).addClass("out").end().eq(i).addClass("in"), n.settings.type) {
            case "fade":
                n.dom.items.css({
                    display:
                    "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: ""
                }),
                n.dom.items.eq(r).css({
                    display: "",
                    zIndex: 1
                }),
                n.dom.items.eq(i).css({
                    zIndex: 2
                }).fadeIn(n.settings.speed);
                break;
            case "toggle":
                n.dom.items.hide().eq(i).show();
                break;
            case "x":
                e = n.boxWidth * i,
                0 === i && r === o ? (n.dom.items.eq(0).css({
                    left: n.boxWidth * n.itemSum
                }), e = n.boxWidth * n.itemSum) : 0 === r && (n.dom.items.eq(0).css({
                    left: ""
                }), n.dom.box.scrollLeft(0)),
                n.dom.box.stop(!0, !1).animate({
                    scrollLeft: e
                },
                n.settings.speed);
                break;
            case "y":
                e = n.boxHeight * i,
                0 === i && r === o ? (n.dom.items.eq(0).css({
                    top: n.boxHeight * n.itemSum
                }), e = n.boxHeight * n.itemSum) : 0 === r && (n.dom.items.eq(0).css({
                    top: ""
                }), n.dom.box.scrollTop(0)),
                n.dom.box.stop(!0, !1).animate({
                    scrollTop: e
                },
                n.settings.speed)
            }
            n.now = i,
            n.dom.box.queue(function() {
                n.play(),
                n.dom.box.dequeue()
            })
        },
        e.init.apply(e, arguments),
        this
    },
    t.cxSlide.defaults = {
        events: "click",
        type: "x",
        start: 0,
        speed: 800,
        time: 5e3,
        auto: !0,
        hoverLock: !0,
        btn: !0,
        plus: !1,
        minus: !1
    },
    t.fn.cxSlide = function(e, n) {
        return this.each(function(i) {
            t.cxSlide(this, e, n)
        }),
        this
    }
});