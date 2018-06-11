!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length, n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function r(e, t, n) {
        if (Z.isFunction(t))return Z.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (at.test(t))return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = ht[e] = {};
        return Z.each(e.match(dt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1), Z.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(bt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xt.test(n) ? Z.parseJSON(n) : n
            } catch (i) {
            }
            yt.set(e, t, n)
        } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {
        }
    }

    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Pt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
        for (var n = 0, r = e.length; r > n; n++)vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
    }

    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (vt.hasData(e) && (o = vt.access(e), s = vt.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l)for (n = 0, r = l[i].length; r > n; n++)Z.event.add(t, i, l[i][n])
            }
            yt.hasData(e) && (a = yt.access(e), u = Z.extend({}, a), yt.set(t, u))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Nt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(), o
    }

    function b(e) {
        var t = J, n = $t[e];
        return n || (n = x(e, t), "none" !== n && n || (Wt = (Wt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Wt[0].contentDocument, t.write(), t.close(), n = x(e, t), Wt.detach()), $t[e] = n), n
    }

    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _t(e), n && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)), Bt.test(s) && It.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function T(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function C(e, t) {
        if (t in e)return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Gt.length; i--;)if (t = Gt[i] + n, t in e)return t;
        return r
    }

    function N(e, t, n) {
        var r = Xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += Z.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (s -= Z.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (s -= Z.css(e, "border" + Tt[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (s += Z.css(e, "border" + Tt[o] + "Width", !0, i)));
        return s
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = _t(e), s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Bt.test(i))return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)r = e[s], r.style && (o[s] = vt.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ct(r) && (o[s] = vt.access(r, "olddisplay", b(r.nodeName)))) : (i = Ct(r), "none" === n && i || vt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; a > s; s++)r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function D(e, t, n, r, i) {
        return new D.prototype.init(e, t, n, r, i)
    }

    function j() {
        return setTimeout(function () {
            Qt = void 0
        }), Qt = Z.now()
    }

    function A(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Tt[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function L(e, t, n) {
        for (var r, i = (nn[t] || []).concat(nn["*"]), o = 0, s = i.length; s > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Ct(e), g = vt.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = Z.css(e, "display"), c = "none" === l ? vt.get(e, "olddisplay") || b(e.nodeName) : l, "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Kt.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                if ("show" !== i || !g || void 0 === g[r])continue;
                h = !0
            }
            p[r] = g && g[r] || Z.style(e, r)
        } else l = void 0;
        if (Z.isEmptyObject(p))"inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l); else {
            g ? "hidden"in g && (h = g.hidden) : g = vt.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Z(e).show() : f.done(function () {
                Z(e).hide()
            }), f.done(function () {
                var t;
                vt.remove(e, "fxshow");
                for (t in p)Z.style(e, t, p[t])
            });
            for (r in p)s = L(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Z.cssHooks[r], s && "expand"in s) {
            o = s.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function O(e, t, n) {
        var r, i, o = 0, s = tn.length, a = Z.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return !1;
            for (var t = Qt || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++)l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qt || j(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (H(c, l.opts.specialEasing); s > o; o++)if (r = tn[o].call(l, e, c, l.opts))return r;
        return Z.map(c, L, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(dt) || [];
            if (Z.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Z.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, s = e === bn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function R(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r), e
    }

    function M(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (i in a)if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0]in n)o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function W(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])for (s in e.converters)l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s)for (i in l)if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && e["throws"])t = s(t); else try {
                t = s(t)
            } catch (f) {
                return {state: "parsererror", error: s ? f : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t))Z.each(t, function (t, i) {
            n || kn.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== Z.type(t))r(e, t); else for (i in t)$(e + "[" + i + "]", t[i], n, r)
    }

    function I(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var B = [], _ = B.slice, z = B.concat, X = B.push, U = B.indexOf, V = {}, Y = V.toString, G = V.hasOwnProperty, Q = {}, J = e.document, K = "2.1.3", Z = function (e, t) {
        return new Z.fn.init(e, t)
    }, et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, tt = /^-ms-/, nt = /-([\da-z])/gi, rt = function (e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K, constructor: Z, selector: "", length: 0, toArray: function () {
            return _.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : _.call(this)
        }, pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return Z.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(_.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: X, sort: B.sort, splice: B.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], r = e[t], s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === Z.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isPlainObject: function (e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(tt, "ms-").replace(nt, rt)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e);
            if (r) {
                if (a)for (; s > o && (i = t.apply(e[o], r), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
            } else if (a)for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(et, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
        }, inArray: function (e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++)e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, s = e.length, a = n(e), u = [];
            if (a)for (; s > o; o++)i = t(e[o], o, r), null != i && u.push(i); else for (o in e)i = t(e[o], o, r), null != i && u.push(i);
            return z.apply([], u)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = _.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(_.call(arguments)))
            }, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
        }, now: Date.now, support: Q
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var it = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t), t = t || q, n = n || [], a = t.nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)return n;
            if (!r && O) {
                if (11 !== a && (i = yt.exec(e)))if (s = i[1]) {
                    if (9 === a) {
                        if (o = t.getElementById(s), !o || !o.parentNode)return n;
                        if (o.id === s)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s)return n.push(o), n
                } else {
                    if (i[2])return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = i[3]) && w.getElementsByClassName)return K.apply(n, t.getElementsByClassName(s)), n
                }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W, h = t, g = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(bt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;)l[u] = d + p(l[u]);
                        h = xt.test(e) && c(t.parentNode) || t, g = l.join(",")
                    }
                    if (g)try {
                        return K.apply(n, h.querySelectorAll(g)), n
                    } catch (m) {
                    } finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ut, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[W] = !0, e
        }

        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--;)T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;)n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = B++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, s) {
                var a, u, l = [I, o];
                if (s) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, s))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i) {
                    if (u = t[W] || (t[W] = {}), (a = u[r]) && a[0] === I && a[1] === o)return l[2] = a[2];
                    if (u[r] = l, l[2] = e(t, n, s))return !0
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)t(e, n[i], r);
            return r
        }

        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)), o && !o[W] && (o = v(o, s)), r(function (r, s, a, u) {
                var l, c, f, p = [], d = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, p, e, a, u), x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u), i)for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? et(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x), o ? o(null, s, x, u) : K.apply(s, x)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function (e) {
                return e === t
            }, s, !0), l = d(function (e) {
                return et(t, e) > -1
            }, s, !0), c = [function (e, n, r) {
                var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i
            }]; i > a; a++)if (n = T.relative[e[a].type])c = [d(h(c), n)]; else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[W]) {
                    for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                    return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ut, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function x(e, n) {
            var i = n.length > 0, o = e.length > 0, s = function (r, s, a, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], v = [], y = D, x = r || o && T.find.TAG("*", l), b = I += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (D = s !== q && s); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0; p = e[f++];)if (p(c, s, a)) {
                            u.push(c);
                            break
                        }
                        l && (I = b)
                    }
                    i && ((c = !p && c) && d--, r && g.push(c))
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++];)p(g, v, s, a);
                    if (r) {
                        if (d > 0)for (; h--;)g[h] || v[h] || (v[h] = Q.call(u));
                        v = m(v)
                    }
                    K.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (I = b, D = y), g
            };
            return i ? r(s) : s
        }

        var b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date, $ = e.document, I = 0, B = 0, _ = n(), z = n(), X = n(), U = function (e, t) {
            return e === t && (A = !0), 0
        }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, et = function (e, t) {
            for (var n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
            return -1
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = rt.replace("w", "w#"), ot = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", at = new RegExp(nt + "+", "g"), ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), pt = new RegExp(st), dt = new RegExp("^" + it + "$"), ht = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + tt + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, gt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xt = /[+~]/, bt = /'|\\/g, wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Tt = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Ct = function () {
            L()
        };
        try {
            K.apply(G = Z.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
        } catch (Nt) {
            K = {
                apply: G.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, N = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), O = !N(r), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(r.getElementsByClassName), w.getById = i(function (e) {
                return H.appendChild(e).id = W, !r.getElementsByName || !r.getElementsByName(W).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(wt, Tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(wt, Tt);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            }, P = [], F = [], (w.qsa = vt.test(r.querySelectorAll)) && (i(function (e) {
                H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + tt + ")"), e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
            }), i(function (e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (w.matchesSelector = vt.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), P.push("!=", st)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = vt.test(H.compareDocumentPosition), M = t || vt.test(H.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t)return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? et(j, e) - et(j, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return A = !0, 0;
                var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (!o || !a)return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? et(j, e) - et(j, t) : 0;
                if (o === a)return s(e, t);
                for (n = e; n = n.parentNode;)u.unshift(n);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (; u[i] === l[i];)i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }, r) : q
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== q && L(e), n = n.replace(ft, "='$1']"), !(!w.matchesSelector || !O || P && P.test(n) || F && F.test(n)))try {
                var r = R.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (i) {
            }
            return t(n, q, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== q && L(e), M(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()], r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return j = null, e
        }, C = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r++];)n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(wt, Tt), e[3] = (e[3] || e[4] || e[5] || "").replace(wt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pt.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(wt, Tt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && _(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (c = m[W] || (m[W] = {}), l = c[e] || [], d = l[0] === I && l[1], p = l[0] === I && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [I, d, p];
                                    break
                                }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I)p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [I, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;)r = et(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = E(e.replace(ut, "$1"));
                    return i[W] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(wt, Tt), function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return dt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Tt).toLowerCase(), function (t) {
                        var n;
                        do if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return mt.test(e.nodeName)
                }, input: function (e) {
                    return gt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: l(function () {
                    return [0]
                }), last: l(function (e, t) {
                    return [t - 1]
                }), eq: l(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: l(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: l(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: l(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[b] = a(b);
        for (b in{submit: !0, reset: !0})T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, k = t.tokenize = function (e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c)return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) {
                (!r || (i = lt.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ct.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ut, " ")
                }), a = a.slice(r.length));
                for (s in T.filter)!(i = ht[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r)break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, E = t.compile = function (e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;)o = y(t[n]), o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function (e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e, f = !r && k(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(wt, Tt), t) || [])[0], !t)return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)if ((u = T.find[a]) && (r = u(s.matches[0].replace(wt, Tt), xt.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e)return K.apply(n, r), n;
                    break
                }
            }
            return (l || E(e, f))(r, t, !O, n, xt.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!A, L(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(tt, function (e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
    var ot = Z.expr.match.needsContext, st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, at = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)return this.pushStack(Z(e).filter(function () {
                for (t = 0; n > t; t++)if (Z.contains(i[t], this))return !0
            }));
            for (t = 0; n > t; t++)Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = Z.fn.init = function (e, t) {
        var n, r;
        if (!e)return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), st.test(n[1]) && Z.isPlainObject(t))for (n in t)Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = J.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = J, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ct.prototype = Z.fn, ut = Z(J);
    var ft = /^(?:parents|prev(?:Until|All))/, pt = {children: !0, contents: !0, next: !0, prev: !0};
    Z.extend({
        dir: function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (i && Z(e).is(n))break;
                r.push(e)
            }
            return r
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)if (Z.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Z.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Z.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (pt[e] || Z.unique(i), ft.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var dt = /\S+/g, ht = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? ht[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [], l = !e.once && [], c = function (o) {
            for (t = e.memory && o, n = !0, a = i || 0, i = 0, s = u.length, r = !0; u && s > a; a++)if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function () {
                if (u) {
                    var n = u.length;
                    !function o(t) {
                        Z.each(t, function (t, n) {
                            var r = Z.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments), r ? s = u.length : t && (i = n, c(t))
                }
                return this
            }, remove: function () {
                return u && Z.each(arguments, function (e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1;)u.splice(n, 1), r && (s >= n && s--, a >= n && a--)
                }), this
            }, has: function (e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            }, empty: function () {
                return u = [], s = 0, this
            }, disable: function () {
                return u = l = t = void 0, this
            }, disabled: function () {
                return !u
            }, lock: function () {
                return l = void 0, t || f.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, t) {
                return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return f
    }, Z.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return Z.Deferred(function (n) {
                        Z.each(t, function (t, o) {
                            var s = Z.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? Z.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, Z.each(t, function (e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = _.call(arguments), s = o.length, a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Z.Deferred(), l = function (e, n, r) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? _.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++)o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    });
    var gt;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (gt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return gt || (gt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1))), gt.promise(t)
    }, Z.ready.promise();
    var mt = Z.access = function (e, t, n, r, i, o, s) {
        var a = 0, u = e.length, l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n)Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(Z(e), n)
            })), t))for (; u > a; a++)t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
        key: function (e) {
            if (!a.accepts(e))return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)o[t] = n; else if (Z.isEmptyObject(o))Z.extend(this.cache[i], t); else for (r in t)o[r] = t[r];
            return o
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        }, access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (void 0 === t)this.cache[o] = {}; else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(dt) || [])), n = r.length;
                for (; n--;)delete s[r[n]]
            }
        }, hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var vt = new a, yt = new a, xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, bt = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return yt.hasData(e) || vt.hasData(e)
        }, data: function (e, t, n) {
            return yt.access(e, t, n)
        }, removeData: function (e, t) {
            yt.remove(e, t)
        }, _data: function (e, t, n) {
            return vt.access(e, t, n)
        }, _removeData: function (e, t) {
            vt.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;)s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                yt.set(this, e)
            }) : mt(this, function (t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = yt.get(o, e), void 0 !== n)return n;
                    if (n = yt.get(o, r), void 0 !== n)return n;
                    if (n = u(o, r, void 0), void 0 !== n)return n
                } else this.each(function () {
                    var n = yt.get(this, r);
                    yt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                yt.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = vt.get(e, t), n && (!r || Z.isArray(n) ? r = vt.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), r = n.length, i = n.shift(), o = Z._queueHooks(e, t), s = function () {
                Z.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return vt.get(e, n) || vt.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function () {
                        vt.remove(e, [t + "queue", n])
                    })
                })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = vt.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Tt = ["Top", "Right", "Bottom", "Left"], Ct = function (e, t) {
        return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }, Nt = /^(?:checkbox|radio)$/i;
    !function () {
        var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    Q.focusinBubbles = "onfocusin"in e;
    var Et = /^key/, St = /^(?:mouse|pointer|contextmenu)|click/, Dt = /^(?:focusinfocus|focusoutblur)$/, jt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = vt.get(e);
            if (m)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return typeof Z !== kt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(dt) || [""], l = t.length; l--;)a = jt.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d && (f = Z.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Z.event.special[d] || {}, c = Z.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && Z.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = vt.hasData(e) && vt.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(dt) || [""], l = t.length; l--;)if (a = jt.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                    for (f = Z.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;)c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u)Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle, vt.remove(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J], d = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J, 3 !== r.nodeType && 8 !== r.nodeType && !Dt.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[Z.expando] ? t : new Z.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d, Dt.test(u + d) || (s = s.parentNode); s; s = s.parentNode)p.push(s), a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? u : f.bindType || d, c = (vt.get(s, "events") || {})[t.type] && vt.get(s, "handle"), c && c.apply(s, n), c = l && s[l], c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l], a && (r[l] = null), Z.event.triggered = d, r[d](), Z.event.triggered = void 0, a && (r[l] = a)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [], a = _.call(arguments), u = (vt.get(this, "events") || {})[e.type] || [], l = Z.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))for (; u !== this; u = u.parentNode || this)if (u.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; a > n; n++)o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && s.push({elem: u, handlers: r})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando])return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = St.test(i) ? this.mouseHooks : Et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Z.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Q.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this, i = vt.access(r, t);
                i || r.addEventListener(e, n, !0), vt.access(r, t, (i || 0) + 1)
            }, teardown: function () {
                var r = this.ownerDocument || this, i = vt.access(r, t) - 1;
                i ? vt.access(r, t, i) : (r.removeEventListener(e, n, !0), vt.remove(r, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e)this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1)r = c; else if (!r)return this;
            return 1 === i && (o = r, r = function (e) {
                return Z().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, r, n, t)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Lt = /<([\w:]+)/, qt = /<|&#?\w+;/, Ht = /<(?:script|style|link)/i, Ot = /checked\s*(?:[^=]|=\s*.checked.)/i, Ft = /^$|\/(?:java|ecma)script/i, Pt = /^true\/(.*)/, Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Mt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Mt.optgroup = Mt.option, Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead, Mt.th = Mt.td, Z.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))for (s = v(a), o = v(e), r = 0, i = o.length; i > r; r++)y(o[r], s[r]);
            if (t)if (n)for (o = o || v(e), s = s || v(a), r = 0, i = o.length; i > r; r++)m(o[r], s[r]); else m(e, a);
            return s = v(a, "script"), s.length > 0 && g(s, !u && v(e, "script")), a
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++)if (i = e[p], i || 0 === i)if ("object" === Z.type(i))Z.merge(f, i.nodeType ? [i] : i); else if (qt.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (Lt.exec(i) || ["", ""])[1].toLowerCase(), a = Mt[s] || Mt._default, o.innerHTML = a[1] + i.replace(At, "<$1></$2>") + a[2], l = a[0]; l--;)o = o.lastChild;
                Z.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];)if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n))for (l = 0; i = o[l++];)Ft.test(i.type || "") && n.push(i);
            return c
        }, cleanData: function (e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[vt.expando], i && (t = vt.cache[i]))) {
                    if (t.events)for (r in t.events)o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    vt.cache[i] && delete vt.cache[i]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return mt(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++)t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        }, html: function (e) {
            return mt(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !Ht.test(e) && !Mt[(Lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(At, "<$1></$2>");
                    try {
                        for (; r > n; n++)t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Ot.test(p))return this.each(function (n) {
                var r = c.eq(n);
                g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = Z.map(v(n, "script"), d), o = i.length; l > u; u++)s = n, u !== f && (s = Z.clone(s, !0, !0), o && Z.merge(i, v(s, "script"))), t.call(this[u], s, u);
                if (o)for (a = i[i.length - 1].ownerDocument, Z.map(i, h), u = 0; o > u; u++)s = i[u], Ft.test(s.type || "") && !vt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Rt, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; o >= s; s++)n = s === o ? this : this.clone(!0), Z(i[s])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Wt, $t = {}, It = /^margin/, Bt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"), _t = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function () {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
        }

        var n, r, i = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == r && t(), r
            }, reliableMarginRight: function () {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), s.removeChild(n), t
            }
        }))
    }(), Z.swap = function (e, t, n, r) {
        var i, o, s = {};
        for (o in t)s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = s[o];
        return i
    };
    var zt = /^(none|table(?!-c[ea]).+)/, Xt = new RegExp("^(" + wt + ")(.*)$", "i"), Ut = new RegExp("^([+-])=(" + wt + ")", "i"), Vt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Yt = {letterSpacing: "0", fontWeight: "400"}, Gt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
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
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t), u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[t] || Z.cssHooks[a], void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)), s = Z.cssHooks[t] || Z.cssHooks[a], s && "get"in s && (i = s.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Yt && (i = Yt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? zt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Vt, function () {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            }, set: function (e, n, r) {
                var i = r && _t(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), Z.cssHooks.marginRight = T(Q.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
    }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, It.test(e) || (Z.cssHooks[e + t].set = N)
    }), Z.fn.extend({
        css: function (e, t) {
            return mt(this, function (e, t, n) {
                var r, i, o = {}, s = 0;
                if (Z.isArray(t)) {
                    for (r = _t(e), i = t.length; i > s; s++)o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return S(this, !0)
        }, hide: function () {
            return S(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ct(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = D.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Qt, Jt, Kt = /^(?:toggle|show|hide)$/, Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"), en = /queueHooks$/, tn = [q], nn = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), r = n.cur(), i = Zt.exec(t), o = i && i[3] || (Z.cssNumber[e] ? "" : "px"), s = (Z.cssNumber[e] || "px" !== o && +r) && Zt.exec(Z.css(n.elem, e)), a = 1, u = 20;
            if (s && s[3] !== o) {
                o = o || s[3], i = i || [], s = +r || 1;
                do a = a || ".5", s /= a, Z.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
            }
            return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
        }]
    };
    Z.Animation = Z.extend(O, {
        tweener: function (e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? tn.unshift(e) : tn.push(e)
        }
    }), Z.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
        }, r
    }, Z.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Ct).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = Z.isEmptyObject(e), o = Z.speed(t, n, r), s = function () {
                var t = O(this, Z.extend({}, e), o);
                (i || vt.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = Z.timers, s = vt.get(this);
                if (i)s[i] && s[i].stop && r(s[i]); else for (i in s)s[i] && s[i].stop && en.test(i) && r(s[i]);
                for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = vt.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers, s = r ? r.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
        }
    }), Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Z.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), Z.timers = [], Z.fx.tick = function () {
        var e, t = 0, n = Z.timers;
        for (Qt = Z.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Qt = void 0
    }, Z.fx.timer = function (e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function () {
        Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function () {
        clearInterval(Jt), Jt = null
    }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, function () {
        var e = J.createElement("input"), t = J.createElement("select"), n = t.appendChild(J.createElement("option"));
        e.type = "checkbox", Q.checkOn = "" !== e.value, Q.optSelected = n.selected, t.disabled = !0, Q.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", Q.radioValue = "t" === e.value
    }();
    var rn, on, sn = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return mt(this, Z.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === kt ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(dt);
            if (o && 1 === e.nodeType)for (; n = o[i++];)r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), on = {
        set: function (e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = sn[t] || Z.find.attr;
        sn[t] = function (e, t, r) {
            var i, o;
            return r || (o = sn[t], sn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, sn[t] = o), i
        }
    });
    var an = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return mt(this, Z.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return o = 1 !== s || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || an.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), Q.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)for (t = (e || "").match(dt) || []; l > u; u++)if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = Z.trim(r), n.className !== s && (n.className = s)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)for (t = (e || "").match(dt) || []; l > u; u++)if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var t, r = 0, i = Z(this), o = e.match(dt) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else(n === kt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    });
    var ln = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)return r = Z.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i)return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)if (n = r[u], !(!n.selected && u !== i || (Q.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), o)return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--;)r = i[s], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, Q.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var cn = Z.now(), fn = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e)return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var pn = /#.*$/, dn = /([?&])_=[^&]*/, hn = /^(.*?):[ \t]*([^\r\n]*)$/gm, gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, mn = /^(?:GET|HEAD)$/, vn = /^\/\//, yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, xn = {}, bn = {}, wn = "*/".concat("*"), Tn = e.location.href, Cn = yn.exec(Tn.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tn,
            type: "GET",
            isLocal: gn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(xn),
        ajaxTransport: F(bn),
        ajax: function (e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2, a && clearTimeout(a), r = void 0, o = s || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = M(f, w, n)), y = W(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (Z.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (Z.etag[i] = b)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, c = y.data, v = y.error, u = !v)) : (v = T, (e || !T) && (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || T) + "", u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, T]), l && (d.trigger("ajaxComplete", [w, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(), g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!s)for (s = {}; t = hn.exec(o);)s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? o : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return x || (f.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > x)for (t in e)m[t] = [m[t], e[t]]; else w.always(e[w.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || b;
                    return r && r.abort(t), n(0, t), this
                }
            };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || Tn) + "").replace(pn, "").replace(vn, Cn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(dt) || [""], null == f.crossDomain && (u = yn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Cn[1] && u[2] === Cn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), P(xn, f, t, w), 2 === x)return w;
            l = Z.event && f.global, l && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !mn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dn.test(i) ? i.replace(dn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x))return w.abort();
            b = "abort";
            for (c in{success: 1, error: 1, complete: 1})w[c](f[c]);
            if (r = P(bn, f, t, w)) {
                w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1, r.send(v, n)
                } catch (T) {
                    if (!(2 > x))throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, r, i) {
            return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return this.each(Z.isFunction(e) ? function (t) {
                Z(this).wrapInner(e.call(this, t))
            } : function () {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var Nn = /%20/g, kn = /\[\]$/, En = /\r?\n/g, Sn = /^(?:submit|button|image|reset|file)$/i, Dn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e))Z.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)$(n, e[n], t, i);
        return r.join("&").replace(Nn, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Dn.test(this.nodeName) && !Sn.test(e) && (this.checked || !Nt.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {name: t.name, value: e.replace(En, "\r\n")}
                }) : {name: t.name, value: n.replace(En, "\r\n")}
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var jn = 0, An = {}, Ln = {0: 200, 1223: 204}, qn = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in An)An[e]()
    }), Q.cors = !!qn && "withCredentials"in qn, Q.ajax = qn = !!qn, Z.ajaxTransport(function (e) {
        var t;
        return Q.cors || qn && !e.crossDomain ? {
            send: function (n, r) {
                var i, o = e.xhr(), s = ++jn;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)o[i] = e.xhrFields[i];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n)o.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete An[s], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Ln[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = An[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (a) {
                    if (t)throw a
                }
            }, abort: function () {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Hn = [], On = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Hn.pop() || Z.expando + "_" + cn++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (On.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && On.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(On, "$1" + i) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || Z.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Hn.push(i)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var r = st.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var Fn = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Fn)return Fn.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)), e = e.slice(0, a)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Pn = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using"in t ? t.using.call(e, p) : f.css(p)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
            if (o)return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== kt && (i = r.getBoundingClientRect()), n = I(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Pn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");)e = e.offsetParent;
                return e || Pn
            })
        }
    }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function (i) {
            return mt(this, function (t, i, o) {
                var s = I(t);
                return void 0 === o ? s ? s[n] : t[i] : void(s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function (e, n) {
            return n ? (n = w(e, t), Bt.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({Height: "height", Width: "width"}, function (e, t) {
        Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            Z.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
                return mt(this, function (t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var Rn = e.jQuery, Mn = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Mn), t && e.jQuery === Z && (e.jQuery = Rn), Z
    }, typeof t === kt && (e.jQuery = e.$ = Z), Z
});
!function (t, e, n) {
    "use strict";
    function r(t, e) {
        return e = e || Error, function () {
            var n, r, i = arguments[0], o = "[" + (t ? t + ":" : "") + i + "] ", a = arguments[1], s = arguments;
            for (n = o + a.replace(/\{\d+\}/g, function (t) {
                var e = +t.slice(1, -1);
                return e + 2 < s.length ? he(s[e + 2]) : t
            }), n = n + "\nhttp://errors.angularjs.org/1.3.13/" + (t ? t + "/" : "") + i, r = 2; r < arguments.length; r++)n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent(he(arguments[r]));
            return new e(n)
        }
    }

    function i(t) {
        if (null == t || A(t))return !1;
        var e = t.length;
        return t.nodeType === mi && e ? !0 : w(t) || li(t) || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function o(t, e, n) {
        var r, a;
        if (t)if (S(t))for (r in t)"prototype" == r || "length" == r || "name" == r || t.hasOwnProperty && !t.hasOwnProperty(r) || e.call(n, t[r], r, t); else if (li(t) || i(t)) {
            var s = "object" != typeof t;
            for (r = 0, a = t.length; a > r; r++)(s || r in t) && e.call(n, t[r], r, t)
        } else if (t.forEach && t.forEach !== o)t.forEach(e, n, t); else for (r in t)t.hasOwnProperty(r) && e.call(n, t[r], r, t);
        return t
    }

    function a(t) {
        return Object.keys(t).sort()
    }

    function s(t, e, n) {
        for (var r = a(t), i = 0; i < r.length; i++)e.call(n, t[r[i]], r[i]);
        return r
    }

    function u(t) {
        return function (e, n) {
            t(n, e)
        }
    }

    function c() {
        return ++ui
    }

    function l(t, e) {
        e ? t.$$hashKey = e : delete t.$$hashKey
    }

    function f(t) {
        for (var e = t.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
            var i = arguments[n];
            if (i)for (var o = Object.keys(i), a = 0, s = o.length; s > a; a++) {
                var u = o[a];
                t[u] = i[u]
            }
        }
        return l(t, e), t
    }

    function h(t) {
        return parseInt(t, 10)
    }

    function $(t, e) {
        return f(Object.create(t), e)
    }

    function p() {
    }

    function d(t) {
        return t
    }

    function v(t) {
        return function () {
            return t
        }
    }

    function m(t) {
        return "undefined" == typeof t
    }

    function g(t) {
        return "undefined" != typeof t
    }

    function y(t) {
        return null !== t && "object" == typeof t
    }

    function w(t) {
        return "string" == typeof t
    }

    function b(t) {
        return "number" == typeof t
    }

    function x(t) {
        return "[object Date]" === oi.call(t)
    }

    function S(t) {
        return "function" == typeof t
    }

    function C(t) {
        return "[object RegExp]" === oi.call(t)
    }

    function A(t) {
        return t && t.window === t
    }

    function k(t) {
        return t && t.$evalAsync && t.$watch
    }

    function E(t) {
        return "[object File]" === oi.call(t)
    }

    function O(t) {
        return "[object FormData]" === oi.call(t)
    }

    function T(t) {
        return "[object Blob]" === oi.call(t)
    }

    function M(t) {
        return "boolean" == typeof t
    }

    function V(t) {
        return t && S(t.then)
    }

    function N(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function D(t) {
        var e, n = {}, r = t.split(",");
        for (e = 0; e < r.length; e++)n[r[e]] = !0;
        return n
    }

    function j(t) {
        return Gr(t.nodeName || t[0] && t[0].nodeName)
    }

    function P(t, e) {
        var n = t.indexOf(e);
        return n >= 0 && t.splice(n, 1), e
    }

    function R(t, e, n, r) {
        if (A(t) || k(t))throw ai("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (e) {
            if (t === e)throw ai("cpi", "Can't copy! Source and destination are identical.");
            if (n = n || [], r = r || [], y(t)) {
                var i = n.indexOf(t);
                if (-1 !== i)return r[i];
                n.push(t), r.push(e)
            }
            var a;
            if (li(t)) {
                e.length = 0;
                for (var s = 0; s < t.length; s++)a = R(t[s], null, n, r), y(t[s]) && (n.push(t[s]), r.push(a)), e.push(a)
            } else {
                var u = e.$$hashKey;
                li(e) ? e.length = 0 : o(e, function (t, n) {
                    delete e[n]
                });
                for (var c in t)t.hasOwnProperty(c) && (a = R(t[c], null, n, r), y(t[c]) && (n.push(t[c]), r.push(a)), e[c] = a);
                l(e, u)
            }
        } else if (e = t, t)if (li(t))e = R(t, [], n, r); else if (x(t))e = new Date(t.getTime()); else if (C(t))e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex; else if (y(t)) {
            var f = Object.create(Object.getPrototypeOf(t));
            e = R(t, f, n, r)
        }
        return e
    }

    function _(t, e) {
        if (li(t)) {
            e = e || [];
            for (var n = 0, r = t.length; r > n; n++)e[n] = t[n]
        } else if (y(t)) {
            e = e || {};
            for (var i in t)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (e[i] = t[i])
        }
        return e || t
    }

    function I(t, e) {
        if (t === e)return !0;
        if (null === t || null === e)return !1;
        if (t !== t && e !== e)return !0;
        var r, i, o, a = typeof t, s = typeof e;
        if (a == s && "object" == a) {
            if (!li(t)) {
                if (x(t))return x(e) ? I(t.getTime(), e.getTime()) : !1;
                if (C(t) && C(e))return t.toString() == e.toString();
                if (k(t) || k(e) || A(t) || A(e) || li(e))return !1;
                o = {};
                for (i in t)if ("$" !== i.charAt(0) && !S(t[i])) {
                    if (!I(t[i], e[i]))return !1;
                    o[i] = !0
                }
                for (i in e)if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && e[i] !== n && !S(e[i]))return !1;
                return !0
            }
            if (!li(e))return !1;
            if ((r = t.length) == e.length) {
                for (i = 0; r > i; i++)if (!I(t[i], e[i]))return !1;
                return !0
            }
        }
        return !1
    }

    function q(t, e, n) {
        return t.concat(ni.call(e, n))
    }

    function U(t, e) {
        return ni.call(t, e || 0)
    }

    function F(t, e) {
        var n = arguments.length > 2 ? U(arguments, 2) : [];
        return !S(e) || e instanceof RegExp ? e : n.length ? function () {
            return arguments.length ? e.apply(t, q(n, arguments, 0)) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function H(t, r) {
        var i = r;
        return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? i = n : A(r) ? i = "$WINDOW" : r && e === r ? i = "$DOCUMENT" : k(r) && (i = "$SCOPE"), i
    }

    function L(t, e) {
        return "undefined" == typeof t ? n : (b(e) || (e = e ? 2 : null), JSON.stringify(t, H, e))
    }

    function B(t) {
        return w(t) ? JSON.parse(t) : t
    }

    function z(t) {
        t = Qr(t).clone();
        try {
            t.empty()
        } catch (e) {
        }
        var n = Qr("<div>").append(t).html();
        try {
            return t[0].nodeType === gi ? Gr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
                return "<" + Gr(e)
            })
        } catch (e) {
            return Gr(n)
        }
    }

    function W(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
        }
    }

    function G(t) {
        var e, n, r = {};
        return o((t || "").split("&"), function (t) {
            if (t && (e = t.replace(/\+/g, "%20").split("="), n = W(e[0]), g(n))) {
                var i = g(e[1]) ? W(e[1]) : !0;
                Jr.call(r, n) ? li(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
            }
        }), r
    }

    function J(t) {
        var e = [];
        return o(t, function (t, n) {
            li(t) ? o(t, function (t) {
                e.push(Z(n, !0) + (t === !0 ? "" : "=" + Z(t, !0)))
            }) : e.push(Z(n, !0) + (t === !0 ? "" : "=" + Z(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function Y(t) {
        return Z(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Z(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function K(t, e) {
        var n, r, i = pi.length;
        for (t = Qr(t), r = 0; i > r; ++r)if (n = pi[r] + e, w(n = t.attr(n)))return n;
        return null
    }

    function X(t, e) {
        var n, r, i = {};
        o(pi, function (e) {
            var i = e + "app";
            !n && t.hasAttribute && t.hasAttribute(i) && (n = t, r = t.getAttribute(i))
        }), o(pi, function (e) {
            var i, o = e + "app";
            !n && (i = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
        }), n && (i.strictDi = null !== K(n, "strict-di"), e(n, r ? [r] : [], i))
    }

    function Q(n, r, i) {
        y(i) || (i = {});
        var a = {strictDi: !1};
        i = f(a, i);
        var s = function () {
            if (n = Qr(n), n.injector()) {
                var t = n[0] === e ? "document" : z(n);
                throw ai("btstrpd", "App Already Bootstrapped with this Element '{0}'", t.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            r = r || [], r.unshift(["$provide", function (t) {
                t.value("$rootElement", n)
            }]), i.debugInfoEnabled && r.push(["$compileProvider", function (t) {
                t.debugInfoEnabled(!0)
            }]), r.unshift("ng");
            var o = Be(r, i.strictDi);
            return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (t, e, n, r) {
                t.$apply(function () {
                    e.data("$injector", r), n(e)(t)
                })
            }]), o
        }, u = /^NG_ENABLE_DEBUG_INFO!/, c = /^NG_DEFER_BOOTSTRAP!/;
        return t && u.test(t.name) && (i.debugInfoEnabled = !0, t.name = t.name.replace(u, "")), t && !c.test(t.name) ? s() : (t.name = t.name.replace(c, ""), si.resumeBootstrap = function (t) {
            return o(t, function (t) {
                r.push(t)
            }), s()
        }, void(S(si.resumeDeferredBootstrap) && si.resumeDeferredBootstrap()))
    }

    function te() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
    }

    function ee(t) {
        var e = si.element(t).injector();
        if (!e)throw ai("test", "no injector found for element argument to getTestability");
        return e.get("$$testability")
    }

    function ne(t, e) {
        return e = e || "_", t.replace(di, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function re() {
        var e;
        vi || (ti = t.jQuery, ti && ti.fn.on ? (Qr = ti, f(ti.fn, {
            scope: Ri.scope,
            isolateScope: Ri.isolateScope,
            controller: Ri.controller,
            injector: Ri.injector,
            inheritedData: Ri.inheritedData
        }), e = ti.cleanData, ti.cleanData = function (t) {
            var n;
            if (ci)ci = !1; else for (var r, i = 0; null != (r = t[i]); i++)n = ti._data(r, "events"), n && n.$destroy && ti(r).triggerHandler("$destroy");
            e(t)
        }) : Qr = we, si.element = Qr, vi = !0)
    }

    function ie(t, e, n) {
        if (!t)throw ai("areq", "Argument '{0}' is {1}", e || "?", n || "required");
        return t
    }

    function oe(t, e, n) {
        return n && li(t) && (t = t[t.length - 1]), ie(S(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function ae(t, e) {
        if ("hasOwnProperty" === t)throw ai("badname", "hasOwnProperty is not a valid {0} name", e)
    }

    function se(t, e, n) {
        if (!e)return t;
        for (var r, i = e.split("."), o = t, a = i.length, s = 0; a > s; s++)r = i[s], t && (t = (o = t)[r]);
        return !n && S(t) ? F(o, t) : t
    }

    function ue(t) {
        var e = t[0], n = t[t.length - 1], r = [e];
        do {
            if (e = e.nextSibling, !e)break;
            r.push(e)
        } while (e !== n);
        return Qr(r)
    }

    function ce() {
        return Object.create(null)
    }

    function le(t) {
        function e(t, e, n) {
            return t[e] || (t[e] = n())
        }

        var n = r("$injector"), i = r("ng"), o = e(t, "angular", Object);
        return o.$$minErr = o.$$minErr || r, e(o, "module", function () {
            var t = {};
            return function (r, o, a) {
                var s = function (t, e) {
                    if ("hasOwnProperty" === t)throw i("badname", "hasOwnProperty is not a valid {0} name", e)
                };
                return s(r, "module"), o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function () {
                    function t(t, n, r, i) {
                        return i || (i = e), function () {
                            return i[r || "push"]([t, n, arguments]), c
                        }
                    }

                    if (!o)throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var e = [], i = [], s = [], u = t("$injector", "invoke", "push", i), c = {
                        _invokeQueue: e,
                        _configBlocks: i,
                        _runBlocks: s,
                        requires: o,
                        name: r,
                        provider: t("$provide", "provider"),
                        factory: t("$provide", "factory"),
                        service: t("$provide", "service"),
                        value: t("$provide", "value"),
                        constant: t("$provide", "constant", "unshift"),
                        animation: t("$animateProvider", "register"),
                        filter: t("$filterProvider", "register"),
                        controller: t("$controllerProvider", "register"),
                        directive: t("$compileProvider", "directive"),
                        config: u,
                        run: function (t) {
                            return s.push(t), this
                        }
                    };
                    return a && u(a), c
                })
            }
        })
    }

    function fe(t) {
        var e = [];
        return JSON.stringify(t, function (t, n) {
            if (n = H(t, n), y(n)) {
                if (e.indexOf(n) >= 0)return "<<already seen>>";
                e.push(n)
            }
            return n
        })
    }

    function he(t) {
        return "function" == typeof t ? t.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof t ? "undefined" : "string" != typeof t ? fe(t) : t
    }

    function $e(e) {
        f(e, {
            bootstrap: Q,
            copy: R,
            extend: f,
            equals: I,
            element: Qr,
            forEach: o,
            injector: Be,
            noop: p,
            bind: F,
            toJson: L,
            fromJson: B,
            identity: d,
            isUndefined: m,
            isDefined: g,
            isString: w,
            isFunction: S,
            isObject: y,
            isNumber: b,
            isElement: N,
            isArray: li,
            version: xi,
            isDate: x,
            lowercase: Gr,
            uppercase: Yr,
            callbacks: {counter: 0},
            getTestability: ee,
            $$minErr: r,
            $$csp: $i,
            reloadWithDebugInfo: te
        }), ei = le(t);
        try {
            ei("ngLocale")
        } catch (n) {
            ei("ngLocale", []).provider("$locale", mn)
        }
        ei("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({$$sanitizeUri: Yn}), t.provider("$compile", Ke).directive({
                a: To,
                input: Wo,
                textarea: Wo,
                form: jo,
                script: Pa,
                select: Ia,
                style: Ua,
                option: qa,
                ngBind: Yo,
                ngBindHtml: Ko,
                ngBindTemplate: Zo,
                ngClass: Qo,
                ngClassEven: ea,
                ngClassOdd: ta,
                ngCloak: na,
                ngController: ra,
                ngForm: Po,
                ngHide: Ta,
                ngIf: aa,
                ngInclude: sa,
                ngInit: ca,
                ngNonBindable: Sa,
                ngPluralize: Ca,
                ngRepeat: Aa,
                ngShow: Oa,
                ngStyle: Ma,
                ngSwitch: Va,
                ngSwitchWhen: Na,
                ngSwitchDefault: Da,
                ngOptions: _a,
                ngTransclude: ja,
                ngModel: wa,
                ngList: la,
                ngChange: Xo,
                pattern: Ha,
                ngPattern: Ha,
                required: Fa,
                ngRequired: Fa,
                minlength: Ba,
                ngMinlength: Ba,
                maxlength: La,
                ngMaxlength: La,
                ngValue: Jo,
                ngModelOptions: xa
            }).directive({ngInclude: ua}).directive(Mo).directive(ia), t.provider({
                $anchorScroll: ze,
                $animate: Wi,
                $browser: Je,
                $cacheFactory: Ye,
                $controller: en,
                $document: nn,
                $exceptionHandler: rn,
                $filter: sr,
                $interpolate: dn,
                $interval: vn,
                $http: fn,
                $httpBackend: $n,
                $location: Vn,
                $log: Nn,
                $parse: Ln,
                $rootScope: Jn,
                $q: Bn,
                $$q: zn,
                $sce: Qn,
                $sceDelegate: Xn,
                $sniffer: tr,
                $templateCache: Ze,
                $templateRequest: er,
                $$testability: nr,
                $timeout: rr,
                $window: ar,
                $$rAF: Gn,
                $$asyncCallback: We,
                $$jqLite: qe
            })
        }])
    }

    function pe() {
        return ++Ci
    }

    function de(t) {
        return t.replace(Ei, function (t, e, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(Oi, "Moz$1")
    }

    function ve(t) {
        return !Ni.test(t)
    }

    function me(t) {
        var e = t.nodeType;
        return e === mi || !e || e === wi
    }

    function ge(t, e) {
        var n, r, i, a, s = e.createDocumentFragment(), u = [];
        if (ve(t))u.push(e.createTextNode(t)); else {
            for (n = n || s.appendChild(e.createElement("div")), r = (Di.exec(t) || ["", ""])[1].toLowerCase(), i = Pi[r] || Pi._default, n.innerHTML = i[1] + t.replace(ji, "<$1></$2>") + i[2], a = i[0]; a--;)n = n.lastChild;
            u = q(u, n.childNodes), n = s.firstChild, n.textContent = ""
        }
        return s.textContent = "", s.innerHTML = "", o(u, function (t) {
            s.appendChild(t)
        }), s
    }

    function ye(t, n) {
        n = n || e;
        var r;
        return (r = Vi.exec(t)) ? [n.createElement(r[1])] : (r = ge(t, n)) ? r.childNodes : []
    }

    function we(t) {
        if (t instanceof we)return t;
        var e;
        if (w(t) && (t = fi(t), e = !0), !(this instanceof we)) {
            if (e && "<" != t.charAt(0))throw Mi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new we(t)
        }
        e ? Me(this, ye(t)) : Me(this, t)
    }

    function be(t) {
        return t.cloneNode(!0)
    }

    function xe(t, e) {
        if (e || Ce(t), t.querySelectorAll)for (var n = t.querySelectorAll("*"), r = 0, i = n.length; i > r; r++)Ce(n[r])
    }

    function Se(t, e, n, r) {
        if (g(r))throw Mi("offargs", "jqLite#off() does not support the `selector` argument");
        var i = Ae(t), a = i && i.events, s = i && i.handle;
        if (s)if (e)o(e.split(" "), function (e) {
            if (g(n)) {
                var r = a[e];
                if (P(r || [], n), r && r.length > 0)return
            }
            ki(t, e, s), delete a[e]
        }); else for (e in a)"$destroy" !== e && ki(t, e, s), delete a[e]
    }

    function Ce(t, e) {
        var r = t.ng339, i = r && Si[r];
        if (i) {
            if (e)return void delete i.data[e];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), Se(t)), delete Si[r], t.ng339 = n
        }
    }

    function Ae(t, e) {
        var r = t.ng339, i = r && Si[r];
        return e && !i && (t.ng339 = r = pe(), i = Si[r] = {events: {}, data: {}, handle: n}), i
    }

    function ke(t, e, n) {
        if (me(t)) {
            var r = g(n), i = !r && e && !y(e), o = !e, a = Ae(t, !i), s = a && a.data;
            if (r)s[e] = n; else {
                if (o)return s;
                if (i)return s && s[e];
                f(s, e)
            }
        }
    }

    function Ee(t, e) {
        return t.getAttribute ? (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") > -1 : !1
    }

    function Oe(t, e) {
        e && t.setAttribute && o(e.split(" "), function (e) {
            t.setAttribute("class", fi((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + fi(e) + " ", " ")))
        })
    }

    function Te(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(e.split(" "), function (t) {
                t = fi(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }), t.setAttribute("class", fi(n))
        }
    }

    function Me(t, e) {
        if (e)if (e.nodeType)t[t.length++] = e; else {
            var n = e.length;
            if ("number" == typeof n && e.window !== e) {
                if (n)for (var r = 0; n > r; r++)t[t.length++] = e[r]
            } else t[t.length++] = e
        }
    }

    function Ve(t, e) {
        return Ne(t, "$" + (e || "ngController") + "Controller")
    }

    function Ne(t, e, r) {
        t.nodeType == wi && (t = t.documentElement);
        for (var i = li(e) ? e : [e]; t;) {
            for (var o = 0, a = i.length; a > o; o++)if ((r = Qr.data(t, i[o])) !== n)return r;
            t = t.parentNode || t.nodeType === bi && t.host
        }
    }

    function De(t) {
        for (xe(t, !0); t.firstChild;)t.removeChild(t.firstChild)
    }

    function je(t, e) {
        e || xe(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function Pe(e, n) {
        n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : Qr(n).on("load", e)
    }

    function Re(t, e) {
        var n = _i[e.toLowerCase()];
        return n && Ii[j(t)] && n
    }

    function _e(t, e) {
        var n = t.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && qi[e]
    }

    function Ie(t, e) {
        var n = function (n, r) {
            n.isDefaultPrevented = function () {
                return n.defaultPrevented
            };
            var i = e[r || n.type], o = i ? i.length : 0;
            if (o) {
                if (m(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function () {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function () {
                    return n.immediatePropagationStopped === !0
                }, o > 1 && (i = _(i));
                for (var s = 0; o > s; s++)n.isImmediatePropagationStopped() || i[s].call(t, n)
            }
        };
        return n.elem = t, n
    }

    function qe() {
        this.$get = function () {
            return f(we, {
                hasClass: function (t, e) {
                    return t.attr && (t = t[0]), Ee(t, e)
                }, addClass: function (t, e) {
                    return t.attr && (t = t[0]), Te(t, e)
                }, removeClass: function (t, e) {
                    return t.attr && (t = t[0]), Oe(t, e)
                }
            })
        }
    }

    function Ue(t, e) {
        var n = t && t.$$hashKey;
        if (n)return "function" == typeof n && (n = t.$$hashKey()), n;
        var r = typeof t;
        return n = "function" == r || "object" == r && null !== t ? t.$$hashKey = r + ":" + (e || c)() : r + ":" + t
    }

    function Fe(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        o(t, this.put, this)
    }

    function He(t) {
        var e = t.toString().replace(Li, ""), n = e.match(Ui);
        return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Le(t, e, n) {
        var r, i, a, s;
        if ("function" == typeof t) {
            if (!(r = t.$inject)) {
                if (r = [], t.length) {
                    if (e)throw w(n) && n || (n = t.name || He(t)), Bi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    i = t.toString().replace(Li, ""), a = i.match(Ui), o(a[1].split(Fi), function (t) {
                        t.replace(Hi, function (t, e, n) {
                            r.push(n)
                        })
                    })
                }
                t.$inject = r
            }
        } else li(t) ? (s = t.length - 1, oe(t[s], "fn"), r = t.slice(0, s)) : oe(t, "fn", !0);
        return r
    }

    function Be(t, e) {
        function r(t) {
            return function (e, n) {
                return y(e) ? void o(e, u(t)) : t(e, n)
            }
        }

        function i(t, e) {
            if (ae(t, "service"), (S(e) || li(e)) && (e = k.instantiate(e)), !e.$get)throw Bi("pget", "Provider '{0}' must define $get factory method.", t);
            return A[t + b] = e
        }

        function a(t, e) {
            return function () {
                var n = O.invoke(e, this);
                if (m(n))throw Bi("undef", "Provider '{0}' must return a value from $get factory method.", t);
                return n
            }
        }

        function s(t, e, n) {
            return i(t, {$get: n !== !1 ? a(t, e) : e})
        }

        function c(t, e) {
            return s(t, ["$injector", function (t) {
                return t.instantiate(e)
            }])
        }

        function l(t, e) {
            return s(t, v(e), !1)
        }

        function f(t, e) {
            ae(t, "constant"), A[t] = e, E[t] = e
        }

        function h(t, e) {
            var n = k.get(t + b), r = n.$get;
            n.$get = function () {
                var t = O.invoke(r, n);
                return O.invoke(e, null, {$delegate: t})
            }
        }

        function $(t) {
            var e, n = [];
            return o(t, function (t) {
                function r(t) {
                    var e, n;
                    for (e = 0, n = t.length; n > e; e++) {
                        var r = t[e], i = k.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }

                if (!C.get(t)) {
                    C.put(t, !0);
                    try {
                        w(t) ? (e = ei(t), n = n.concat($(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : S(t) ? n.push(k.invoke(t)) : li(t) ? n.push(k.invoke(t)) : oe(t, "module")
                    } catch (i) {
                        throw li(t) && (t = t[t.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Bi("modulerr", "Failed to instantiate module {0} due to:\n{1}", t, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function d(t, n) {
            function r(e, r) {
                if (t.hasOwnProperty(e)) {
                    if (t[e] === g)throw Bi("cdep", "Circular dependency found: {0}", e + " <- " + x.join(" <- "));
                    return t[e]
                }
                try {
                    return x.unshift(e), t[e] = g, t[e] = n(e, r)
                } catch (i) {
                    throw t[e] === g && delete t[e], i
                } finally {
                    x.shift()
                }
            }

            function i(t, n, i, o) {
                "string" == typeof i && (o = i, i = null);
                var a, s, u, c = [], l = Be.$$annotate(t, e, o);
                for (s = 0, a = l.length; a > s; s++) {
                    if (u = l[s], "string" != typeof u)throw Bi("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                    c.push(i && i.hasOwnProperty(u) ? i[u] : r(u, o))
                }
                return li(t) && (t = t[a]), t.apply(n, c)
            }

            function o(t, e, n) {
                var r = Object.create((li(t) ? t[t.length - 1] : t).prototype || null), o = i(t, r, e, n);
                return y(o) || S(o) ? o : r
            }

            return {
                invoke: i, instantiate: o, get: r, annotate: Be.$$annotate, has: function (e) {
                    return A.hasOwnProperty(e + b) || t.hasOwnProperty(e)
                }
            }
        }

        e = e === !0;
        var g = {}, b = "Provider", x = [], C = new Fe([], !0), A = {
            $provide: {
                provider: r(i),
                factory: r(s),
                service: r(c),
                value: r(l),
                constant: r(f),
                decorator: h
            }
        }, k = A.$injector = d(A, function (t, e) {
            throw si.isString(e) && x.push(e), Bi("unpr", "Unknown provider: {0}", x.join(" <- "))
        }), E = {}, O = E.$injector = d(E, function (t, e) {
            var r = k.get(t + b, e);
            return O.invoke(r.$get, r, n, t)
        });
        return o($(t), function (t) {
            O.invoke(t || p)
        }), O
    }

    function ze() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
            function i(t) {
                var e = null;
                return Array.prototype.some.call(t, function (t) {
                    return "a" === j(t) ? (e = t, !0) : void 0
                }), e
            }

            function o() {
                var t = s.yOffset;
                if (S(t))t = t(); else if (N(t)) {
                    var n = t[0], r = e.getComputedStyle(n);
                    t = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                } else b(t) || (t = 0);
                return t
            }

            function a(t) {
                if (t) {
                    t.scrollIntoView();
                    var n = o();
                    if (n) {
                        var r = t.getBoundingClientRect().top;
                        e.scrollBy(0, r - n)
                    }
                } else e.scrollTo(0, 0)
            }

            function s() {
                var t, e = n.hash();
                e ? (t = u.getElementById(e)) ? a(t) : (t = i(u.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
            }

            var u = e.document;
            return t && r.$watch(function () {
                return n.hash()
            }, function (t, e) {
                (t !== e || "" !== t) && Pe(function () {
                    r.$evalAsync(s)
                })
            }), s
        }]
    }

    function We() {
        this.$get = ["$$rAF", "$timeout", function (t, e) {
            return t.supported ? function (e) {
                return t(e)
            } : function (t) {
                return e(t, 0, !1)
            }
        }]
    }

    function Ge(t, e, r, i) {
        function a(t) {
            try {
                t.apply(null, U(arguments, 1))
            } finally {
                if (S--, 0 === S)for (; C.length;)try {
                    C.pop()()
                } catch (e) {
                    r.error(e)
                }
            }
        }

        function s(t) {
            var e = t.indexOf("#");
            return -1 === e ? "" : t.substr(e + 1)
        }

        function u(t, e) {
            !function n() {
                o(k, function (t) {
                    t()
                }), A = e(n, t)
            }()
        }

        function c() {
            l(), f()
        }

        function l() {
            E = t.history.state, E = m(E) ? null : E, I(E, j) && (E = j), j = E
        }

        function f() {
            (T !== $.url() || O !== E) && (T = $.url(), O = E, o(N, function (t) {
                t($.url(), E)
            }))
        }

        function h(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }

        var $ = this, d = e[0], v = t.location, g = t.history, y = t.setTimeout, b = t.clearTimeout, x = {};
        $.isMock = !1;
        var S = 0, C = [];
        $.$$completeOutstandingRequest = a, $.$$incOutstandingRequestCount = function () {
            S++
        }, $.notifyWhenNoOutstandingRequests = function (t) {
            o(k, function (t) {
                t()
            }), 0 === S ? t() : C.push(t)
        };
        var A, k = [];
        $.addPollFn = function (t) {
            return m(A) && u(100, y), k.push(t), t
        };
        var E, O, T = v.href, M = e.find("base"), V = null;
        l(), O = E, $.url = function (e, n, r) {
            if (m(r) && (r = null), v !== t.location && (v = t.location), g !== t.history && (g = t.history), e) {
                var o = O === r;
                if (T === e && (!i.history || o))return $;
                var a = T && xn(T) === xn(e);
                return T = e, O = r, !i.history || a && o ? (a || (V = e), n ? v.replace(e) : a ? v.hash = s(e) : v.href = e) : (g[n ? "replaceState" : "pushState"](r, "", e), l(), O = E), $
            }
            return V || v.href.replace(/%27/g, "'")
        }, $.state = function () {
            return E
        };
        var N = [], D = !1, j = null;
        $.onUrlChange = function (e) {
            return D || (i.history && Qr(t).on("popstate", c), Qr(t).on("hashchange", c), D = !0), N.push(e), e
        }, $.$$checkUrlChange = f, $.baseHref = function () {
            var t = M.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var P = {}, R = "", _ = $.baseHref();
        $.cookies = function (t, e) {
            var i, o, a, s, u;
            if (!t) {
                if (d.cookie !== R)for (R = d.cookie, o = R.split("; "), P = {}, s = 0; s < o.length; s++)a = o[s], u = a.indexOf("="), u > 0 && (t = h(a.substring(0, u)), P[t] === n && (P[t] = h(a.substring(u + 1))));
                return P
            }
            e === n ? d.cookie = encodeURIComponent(t) + "=;path=" + _ + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : w(e) && (i = (d.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";path=" + _).length + 1, i > 4096 && r.warn("Cookie '" + t + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
        }, $.defer = function (t, e) {
            var n;
            return S++, n = y(function () {
                delete x[n], a(t)
            }, e || 0), x[n] = !0, n
        }, $.defer.cancel = function (t) {
            return x[t] ? (delete x[t], b(t), a(p), !0) : !1
        }
    }

    function Je() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, r) {
            return new Ge(t, r, e, n)
        }]
    }

    function Ye() {
        this.$get = function () {
            function t(t, n) {
                function i(t) {
                    t != h && ($ ? $ == t && ($ = t.n) : $ = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }

                if (t in e)throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", t);
                var a = 0, s = f({}, n, {id: t}), u = {}, c = n && n.capacity || Number.MAX_VALUE, l = {}, h = null, $ = null;
                return e[t] = {
                    put: function (t, e) {
                        if (c < Number.MAX_VALUE) {
                            var n = l[t] || (l[t] = {key: t});
                            i(n)
                        }
                        if (!m(e))return t in u || a++, u[t] = e, a > c && this.remove($.key), e
                    }, get: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e)return;
                            i(e)
                        }
                        return u[t]
                    }, remove: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = l[t];
                            if (!e)return;
                            e == h && (h = e.p), e == $ && ($ = e.n), o(e.n, e.p), delete l[t]
                        }
                        delete u[t], a--
                    }, removeAll: function () {
                        u = {}, a = 0, l = {}, h = $ = null
                    }, destroy: function () {
                        u = null, s = null, l = null, delete e[t]
                    }, info: function () {
                        return f({}, s, {size: a})
                    }
                }
            }

            var e = {};
            return t.info = function () {
                var t = {};
                return o(e, function (e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function (t) {
                return e[t]
            }, t
        }
    }

    function Ze() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }

    function Ke(t, r) {
        function i(t, e) {
            var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, r = {};
            return o(t, function (t, i) {
                var o = t.match(n);
                if (!o)throw Gi("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", e, i, t);
                r[i] = {mode: o[1][0], collection: "*" === o[2], optional: "?" === o[3], attrName: o[4] || i}
            }), r
        }

        var a = {}, s = "Directive", c = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, l = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = D("ngSrc,ngSrcset,src,srcset"), m = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, b = /^(on[a-z]+|formaction)$/;
        this.directive = function C(e, n) {
            return ae(e, "directive"), w(e) ? (ie(n, "directiveFactory"), a.hasOwnProperty(e) || (a[e] = [], t.factory(e + s, ["$injector", "$exceptionHandler", function (t, n) {
                var r = [];
                return o(a[e], function (o, a) {
                    try {
                        var s = t.invoke(o);
                        S(s) ? s = {compile: v(s)} : !s.compile && s.link && (s.compile = v(s.link)), s.priority = s.priority || 0, s.index = a, s.name = s.name || e, s.require = s.require || s.controller && s.name, s.restrict = s.restrict || "EA", y(s.scope) && (s.$$isolateBindings = i(s.scope, s.name)), r.push(s)
                    } catch (u) {
                        n(u)
                    }
                }), r
            }])), a[e].push(n)) : o(e, u(C)), this
        }, this.aHrefSanitizationWhitelist = function (t) {
            return g(t) ? (r.aHrefSanitizationWhitelist(t), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return g(t) ? (r.imgSrcSanitizationWhitelist(t), this) : r.imgSrcSanitizationWhitelist()
        };
        var x = !0;
        this.debugInfoEnabled = function (t) {
            return g(t) ? (x = t, this) : x
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (t, r, i, u, v, g, C, A, E, O, T) {
            function M(t, e) {
                try {
                    t.addClass(e)
                } catch (n) {
                }
            }

            function V(t, e, n, r, i) {
                t instanceof Qr || (t = Qr(t)), o(t, function (e, n) {
                    e.nodeType == gi && e.nodeValue.match(/\S+/) && (t[n] = Qr(e).wrap("<span></span>").parent()[0])
                });
                var a = D(t, e, t, n, r, i);
                V.$$addScopeClass(t);
                var s = null;
                return function (e, n, r) {
                    ie(e, "scope"), r = r || {};
                    var i = r.parentBoundTranscludeFn, o = r.transcludeControllers, u = r.futureParentElement;
                    i && i.$$boundTransclude && (i = i.$$boundTransclude), s || (s = N(u));
                    var c;
                    if (c = "html" !== s ? Qr(X(s, Qr("<div>").append(t).html())) : n ? Ri.clone.call(t) : t, o)for (var l in o)c.data("$" + l + "Controller", o[l].instance);
                    return V.$$addScopeInfo(c, e), n && n(c, e), a && a(e, c, c, i), c
                }
            }

            function N(t) {
                var e = t && t[0];
                return e && "foreignobject" !== j(e) && e.toString().match(/SVG/) ? "svg" : "html"
            }

            function D(t, e, r, i, o, a) {
                function s(t, r, i, o) {
                    var a, s, u, c, l, f, h, $, v;
                    if (p) {
                        var m = r.length;
                        for (v = new Array(m), l = 0; l < d.length; l += 3)h = d[l], v[h] = r[h]
                    } else v = r;
                    for (l = 0, f = d.length; f > l;)u = v[d[l++]], a = d[l++], s = d[l++], a ? (a.scope ? (c = t.$new(), V.$$addScopeInfo(Qr(u), c)) : c = t, $ = a.transcludeOnThisElement ? R(t, a.transclude, o, a.elementTranscludeOnThisElement) : !a.templateOnThisElement && o ? o : !o && e ? R(t, e) : null, a(s, c, u, i, $)) : s && s(t, u.childNodes, n, o)
                }

                for (var u, c, l, f, h, $, p, d = [], v = 0; v < t.length; v++)u = new ae, c = _(t[v], [], u, 0 === v ? i : n, o), l = c.length ? H(c, t[v], u, e, r, null, [], [], a) : null, l && l.scope && V.$$addScopeClass(u.$$element), h = l && l.terminal || !(f = t[v].childNodes) || !f.length ? null : D(f, l ? (l.transcludeOnThisElement || !l.templateOnThisElement) && l.transclude : e), (l || h) && (d.push(v, l, h), $ = !0, p = p || l), a = null;
                return $ ? s : null
            }

            function R(t, e, n) {
                var r = function (r, i, o, a, s) {
                    return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                };
                return r
            }

            function _(t, e, n, r, i) {
                var o, a, s = t.nodeType, u = n.$attr;
                switch (s) {
                    case mi:
                        B(e, Xe(j(t)), "E", r, i);
                        for (var f, h, $, p, d, v, m = t.attributes, g = 0, b = m && m.length; b > g; g++) {
                            var x = !1, S = !1;
                            f = m[g], h = f.name, d = fi(f.value), p = Xe(h), (v = fe.test(p)) && (h = h.replace(Ji, "").substr(8).replace(/_(.)/g, function (t, e) {
                                return e.toUpperCase()
                            }));
                            var C = p.replace(/(Start|End)$/, "");
                            W(C) && p === C + "Start" && (x = h, S = h.substr(0, h.length - 5) + "end", h = h.substr(0, h.length - 6)), $ = Xe(h.toLowerCase()), u[$] = h, (v || !n.hasOwnProperty($)) && (n[$] = d, Re(t, $) && (n[$] = !0)), te(t, e, d, $, v), B(e, $, "A", r, i, x, S)
                        }
                        if (a = t.className, y(a) && (a = a.animVal), w(a) && "" !== a)for (; o = l.exec(a);)$ = Xe(o[2]), B(e, $, "C", r, i) && (n[$] = fi(o[3])), a = a.substr(o.index + o[0].length);
                        break;
                    case gi:
                        K(e, t.nodeValue);
                        break;
                    case yi:
                        try {
                            o = c.exec(t.nodeValue), o && ($ = Xe(o[1]), B(e, $, "M", r, i) && (n[$] = fi(o[2])))
                        } catch (A) {
                        }
                }
                return e.sort(Y), e
            }

            function q(t, e, n) {
                var r = [], i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t)throw Gi("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", e, n);
                        t.nodeType == mi && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                    } while (i > 0)
                } else r.push(t);
                return Qr(r)
            }

            function F(t, e, n) {
                return function (r, i, o, a, s) {
                    return i = q(i[0], e, n), t(r, i, o, a, s)
                }
            }

            function H(t, a, s, u, c, l, f, h, $) {
                function p(t, e, n, r) {
                    t && (n && (t = F(t, n, r)), t.require = A.require, t.directiveName = E, (j === A || A.$$isolateScope) && (t = re(t, {isolateScope: !0})), f.push(t)), e && (n && (e = F(e, n, r)), e.require = A.require, e.directiveName = E, (j === A || A.$$isolateScope) && (e = re(e, {isolateScope: !0})), h.push(e))
                }

                function d(t, e, n, r) {
                    var i, a, s = "data", u = !1, c = n;
                    if (w(e)) {
                        if (a = e.match(m), e = e.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), "^" === a[1] ? s = "inheritedData" : "^^" === a[1] && (s = "inheritedData", c = n.parent()), "?" === a[2] && (u = !0), i = null, r && "data" === s && (i = r[e]) && (i = i.instance), i = i || c[s]("$" + e + "Controller"), !i && !u)throw Gi("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", e, t);
                        return i || null
                    }
                    return li(e) && (i = [], o(e, function (e) {
                        i.push(d(t, e, n, r))
                    })), i
                }

                function b(t, e, i, u, c) {
                    function l(t, e, r) {
                        var i;
                        return k(t) || (r = e, e = t, t = n), W && (i = b), r || (r = W ? S.parent() : S), c(t, e, i, r, T)
                    }

                    var $, p, m, y, w, b, x, S, A;
                    if (a === i ? (A = s, S = s.$$element) : (S = Qr(i), A = new ae(S, s)), j && (w = e.$new(!0)), c && (x = l, x.$$boundTransclude = c), D && (C = {}, b = {}, o(D, function (t) {
                            var n, r = {
                                $scope: t === j || t.$$isolateScope ? w : e,
                                $element: S,
                                $attrs: A,
                                $transclude: x
                            };
                            y = t.controller, "@" == y && (y = A[t.name]), n = g(y, r, !0, t.controllerAs), b[t.name] = n, W || S.data("$" + t.name + "Controller", n.instance), C[t.name] = n
                        })), j) {
                        V.$$addScopeInfo(S, w, !0, !(P && (P === j || P === j.$$originalDirective))), V.$$addScopeClass(S, !0);
                        var E = C && C[j.name], O = w;
                        E && E.identifier && j.bindToController === !0 && (O = E.instance), o(w.$$isolateBindings = j.$$isolateBindings, function (t, n) {
                            var i, o, a, s, u = t.attrName, c = t.optional, l = t.mode;
                            switch (l) {
                                case"@":
                                    A.$observe(u, function (t) {
                                        O[n] = t
                                    }), A.$$observers[u].$$scope = e, A[u] && (O[n] = r(A[u])(e));
                                    break;
                                case"=":
                                    if (c && !A[u])return;
                                    o = v(A[u]), s = o.literal ? I : function (t, e) {
                                        return t === e || t !== t && e !== e
                                    }, a = o.assign || function () {
                                        throw i = O[n] = o(e), Gi("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", A[u], j.name)
                                    }, i = O[n] = o(e);
                                    var f = function (t) {
                                        return s(t, O[n]) || (s(t, i) ? a(e, t = O[n]) : O[n] = t), i = t
                                    };
                                    f.$stateful = !0;
                                    var h;
                                    h = t.collection ? e.$watchCollection(A[u], f) : e.$watch(v(A[u], f), null, o.literal), w.$on("$destroy", h);
                                    break;
                                case"&":
                                    o = v(A[u]), O[n] = function (t) {
                                        return o(e, t)
                                    }
                            }
                        })
                    }
                    for (C && (o(C, function (t) {
                        t()
                    }), C = null), $ = 0, p = f.length; p > $; $++)m = f[$], oe(m, m.isolateScope ? w : e, S, A, m.require && d(m.directiveName, m.require, S, b), x);
                    var T = e;
                    for (j && (j.template || null === j.templateUrl) && (T = w), t && t(T, i.childNodes, n, c), $ = h.length - 1; $ >= 0; $--)m = h[$], oe(m, m.isolateScope ? w : e, S, A, m.require && d(m.directiveName, m.require, S, b), x)
                }

                $ = $ || {};
                for (var x, C, A, E, O, T, M, N = -Number.MAX_VALUE, D = $.controllerDirectives, j = $.newIsolateScopeDirective, P = $.templateDirective, R = $.nonTlbTranscludeDirective, H = !1, B = !1, W = $.hasElementTranscludeDirective, Y = s.$$element = Qr(a), K = l, Q = u, te = 0, ne = t.length; ne > te; te++) {
                    A = t[te];
                    var ie = A.$$start, se = A.$$end;
                    if (ie && (Y = q(a, ie, se)), O = n, N > A.priority)break;
                    if ((M = A.scope) && (A.templateUrl || (y(M) ? (Z("new/isolated scope", j || x, A, Y), j = A) : Z("new/isolated scope", j, A, Y)), x = x || A), E = A.name, !A.templateUrl && A.controller && (M = A.controller, D = D || {}, Z("'" + E + "' controller", D[E], A, Y), D[E] = A), (M = A.transclude) && (H = !0, A.$$tlb || (Z("transclusion", R, A, Y), R = A), "element" == M ? (W = !0, N = A.priority, O = Y, Y = s.$$element = Qr(e.createComment(" " + E + ": " + s[E] + " ")), a = Y[0], ee(c, U(O), a), Q = V(O, u, N, K && K.name, {nonTlbTranscludeDirective: R})) : (O = Qr(be(a)).contents(), Y.empty(), Q = V(O, u))), A.template)if (B = !0, Z("template", P, A, Y), P = A, M = S(A.template) ? A.template(Y, s) : A.template, M = le(M), A.replace) {
                        if (K = A, O = ve(M) ? [] : tn(X(A.templateNamespace, fi(M))), a = O[0], 1 != O.length || a.nodeType !== mi)throw Gi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", E, "");
                        ee(c, Y, a);
                        var ue = {$attr: {}}, ce = _(a, [], ue), fe = t.splice(te + 1, t.length - (te + 1));
                        j && L(ce), t = t.concat(ce).concat(fe), G(s, ue), ne = t.length
                    } else Y.html(M);
                    if (A.templateUrl)B = !0, Z("template", P, A, Y), P = A, A.replace && (K = A), b = J(t.splice(te, t.length - te), Y, s, c, H && Q, f, h, {
                        controllerDirectives: D,
                        newIsolateScopeDirective: j,
                        templateDirective: P,
                        nonTlbTranscludeDirective: R
                    }), ne = t.length; else if (A.compile)try {
                        T = A.compile(Y, s, Q), S(T) ? p(null, T, ie, se) : T && p(T.pre, T.post, ie, se)
                    } catch (he) {
                        i(he, z(Y))
                    }
                    A.terminal && (b.terminal = !0, N = Math.max(N, A.priority))
                }
                return b.scope = x && x.scope === !0, b.transcludeOnThisElement = H, b.elementTranscludeOnThisElement = W, b.templateOnThisElement = B, b.transclude = Q, $.hasElementTranscludeDirective = W, b
            }

            function L(t) {
                for (var e = 0, n = t.length; n > e; e++)t[e] = $(t[e], {$$isolateScope: !0})
            }

            function B(e, r, o, u, c, l, f) {
                if (r === c)return null;
                var h = null;
                if (a.hasOwnProperty(r))for (var p, d = t.get(r + s), v = 0, m = d.length; m > v; v++)try {
                    p = d[v], (u === n || u > p.priority) && -1 != p.restrict.indexOf(o) && (l && (p = $(p, {
                        $$start: l,
                        $$end: f
                    })), e.push(p), h = p)
                } catch (g) {
                    i(g)
                }
                return h
            }

            function W(e) {
                if (a.hasOwnProperty(e))for (var n, r = t.get(e + s), i = 0, o = r.length; o > i; i++)if (n = r[i], n.multiElement)return !0;
                return !1
            }

            function G(t, e) {
                var n = e.$attr, r = t.$attr, i = t.$$element;
                o(t, function (r, i) {
                    "$" != i.charAt(0) && (e[i] && e[i] !== r && (r += ("style" === i ? ";" : " ") + e[i]), t.$set(i, r, !0, n[i]))
                }), o(e, function (e, o) {
                    "class" == o ? (M(i, e), t["class"] = (t["class"] ? t["class"] + " " : "") + e) : "style" == o ? (i.attr("style", i.attr("style") + ";" + e), t.style = (t.style ? t.style + ";" : "") + e) : "$" == o.charAt(0) || t.hasOwnProperty(o) || (t[o] = e, r[o] = n[o])
                })
            }

            function J(t, e, n, r, i, a, s, c) {
                var l, f, h = [], p = e[0], d = t.shift(), v = $(d, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: d
                }), m = S(d.templateUrl) ? d.templateUrl(e, n) : d.templateUrl, g = d.templateNamespace;
                return e.empty(), u(E.getTrustedResourceUrl(m)).then(function (u) {
                    var $, w, b, x;
                    if (u = le(u), d.replace) {
                        if (b = ve(u) ? [] : tn(X(g, fi(u))), $ = b[0], 1 != b.length || $.nodeType !== mi)throw Gi("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", d.name, m);
                        w = {$attr: {}}, ee(r, e, $);
                        var S = _($, [], w);
                        y(d.scope) && L(S), t = S.concat(t), G(n, w)
                    } else $ = p, e.html(u);
                    for (t.unshift(v), l = H(t, $, n, i, e, d, a, s, c), o(r, function (t, n) {
                        t == $ && (r[n] = e[0])
                    }), f = D(e[0].childNodes, i); h.length;) {
                        var C = h.shift(), A = h.shift(), k = h.shift(), E = h.shift(), O = e[0];
                        if (!C.$$destroyed) {
                            if (A !== p) {
                                var T = A.className;
                                c.hasElementTranscludeDirective && d.replace || (O = be($)), ee(k, Qr(A), O), M(Qr(O), T)
                            }
                            x = l.transcludeOnThisElement ? R(C, l.transclude, E) : E, l(f, C, O, r, x)
                        }
                    }
                    h = null
                }), function (t, e, n, r, i) {
                    var o = i;
                    e.$$destroyed || (h ? h.push(e, n, r, o) : (l.transcludeOnThisElement && (o = R(e, l.transclude, i)), l(f, e, n, r, o)))
                }
            }

            function Y(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function Z(t, e, n, r) {
                if (e)throw Gi("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", e.name, n.name, t, z(r))
            }

            function K(t, e) {
                var n = r(e, !0);
                n && t.push({
                    priority: 0, compile: function (t) {
                        var e = t.parent(), r = !!e.length;
                        return r && V.$$addBindingClass(e), function (t, e) {
                            var i = e.parent();
                            r || V.$$addBindingClass(i), V.$$addBindingInfo(i, n.expressions), t.$watch(n, function (t) {
                                e[0].nodeValue = t
                            })
                        }
                    }
                })
            }

            function X(t, n) {
                switch (t = Gr(t || "html")) {
                    case"svg":
                    case"math":
                        var r = e.createElement("div");
                        return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function Q(t, e) {
                if ("srcdoc" == e)return E.HTML;
                var n = j(t);
                return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? E.RESOURCE_URL : void 0
            }

            function te(t, e, n, i, o) {
                var a = Q(t, i);
                o = h[i] || o;
                var s = r(n, !0, a, o);
                if (s) {
                    if ("multiple" === i && "select" === j(t))throw Gi("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", z(t));
                    e.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (t, e, u) {
                                    var c = u.$$observers || (u.$$observers = {});
                                    if (b.test(i))throw Gi("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var l = u[i];
                                    l !== n && (s = l && r(l, !0, a, o), n = l), s && (u[i] = s(t), (c[i] || (c[i] = [])).$$inter = !0, (u.$$observers && u.$$observers[i].$$scope || t).$watch(s, function (t, e) {
                                        "class" === i && t != e ? u.$updateClass(t, e) : u.$set(i, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ee(t, n, r) {
                var i, o, a = n[0], s = n.length, u = a.parentNode;
                if (t)for (i = 0, o = t.length; o > i; i++)if (t[i] == a) {
                    t[i++] = r;
                    for (var c = i, l = c + s - 1, f = t.length; f > c; c++, l++)f > l ? t[c] = t[l] : delete t[c];
                    t.length -= s - 1, t.context === a && (t.context = r);
                    break
                }
                u && u.replaceChild(r, a);
                var h = e.createDocumentFragment();
                h.appendChild(a), Qr(r).data(Qr(a).data()), ti ? (ci = !0, ti.cleanData([a])) : delete Qr.cache[a[Qr.expando]];
                for (var $ = 1, p = n.length; p > $; $++) {
                    var d = n[$];
                    Qr(d).remove(), h.appendChild(d), delete n[$]
                }
                n[0] = r, n.length = 1
            }

            function re(t, e) {
                return f(function () {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function oe(t, e, n, r, o, a) {
                try {
                    t(e, n, r, o, a)
                } catch (s) {
                    i(s, z(n))
                }
            }

            var ae = function (t, e) {
                if (e) {
                    var n, r, i, o = Object.keys(e);
                    for (n = 0, r = o.length; r > n; n++)i = o[n], this[i] = e[i]
                } else this.$attr = {};
                this.$$element = t
            };
            ae.prototype = {
                $normalize: Xe, $addClass: function (t) {
                    t && t.length > 0 && O.addClass(this.$$element, t)
                }, $removeClass: function (t) {
                    t && t.length > 0 && O.removeClass(this.$$element, t)
                }, $updateClass: function (t, e) {
                    var n = Qe(t, e);
                    n && n.length && O.addClass(this.$$element, n);
                    var r = Qe(e, t);
                    r && r.length && O.removeClass(this.$$element, r)
                }, $set: function (t, e, r, a) {
                    var s, u = this.$$element[0], c = Re(u, t), l = _e(u, t), f = t;
                    if (c ? (this.$$element.prop(t, e), a = c) : l && (this[l] = e, f = l), this[t] = e, a ? this.$attr[t] = a : (a = this.$attr[t], a || (this.$attr[t] = a = ne(t, "-"))), s = j(this.$$element), "a" === s && "href" === t || "img" === s && "src" === t)this[t] = e = T(e, "src" === t); else if ("img" === s && "srcset" === t) {
                        for (var h = "", $ = fi(e), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, d = /\s/.test($) ? p : /(,)/, v = $.split(d), m = Math.floor(v.length / 2), g = 0; m > g; g++) {
                            var y = 2 * g;
                            h += T(fi(v[y]), !0), h += " " + fi(v[y + 1])
                        }
                        var w = fi(v[2 * g]).split(/\s/);
                        h += T(fi(w[0]), !0), 2 === w.length && (h += " " + fi(w[1])), this[t] = e = h
                    }
                    r !== !1 && (null === e || e === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, e));
                    var b = this.$$observers;
                    b && o(b[f], function (t) {
                        try {
                            t(e)
                        } catch (n) {
                            i(n)
                        }
                    })
                }, $observe: function (t, e) {
                    var n = this, r = n.$$observers || (n.$$observers = ce()), i = r[t] || (r[t] = []);
                    return i.push(e), C.$evalAsync(function () {
                        !i.$$inter && n.hasOwnProperty(t) && e(n[t])
                    }), function () {
                        P(i, e)
                    }
                }
            };
            var se = r.startSymbol(), ue = r.endSymbol(), le = "{{" == se || "}}" == ue ? d : function (t) {
                return t.replace(/\{\{/g, se).replace(/}}/g, ue)
            }, fe = /^ngAttr[A-Z]/;
            return V.$$addBindingInfo = x ? function (t, e) {
                var n = t.data("$binding") || [];
                li(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : p, V.$$addBindingClass = x ? function (t) {
                M(t, "ng-binding")
            } : p, V.$$addScopeInfo = x ? function (t, e, n, r) {
                var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                t.data(i, e)
            } : p, V.$$addScopeClass = x ? function (t, e) {
                M(t, e ? "ng-isolate-scope" : "ng-scope")
            } : p, V
        }]
    }

    function Xe(t) {
        return de(t.replace(Ji, ""))
    }

    function Qe(t, e) {
        var n = "", r = t.split(/\s+/), i = e.split(/\s+/);
        t:for (var o = 0; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++)if (a == i[s])continue t;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function tn(t) {
        t = Qr(t);
        var e = t.length;
        if (1 >= e)return t;
        for (; e--;) {
            var n = t[e];
            n.nodeType === yi && ri.call(t, e, 1)
        }
        return t
    }

    function en() {
        var t = {}, e = !1, i = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (e, n) {
            ae(e, "controller"), y(e) ? f(t, e) : t[e] = n
        }, this.allowGlobals = function () {
            e = !0
        }, this.$get = ["$injector", "$window", function (o, a) {
            function s(t, e, n, i) {
                if (!t || !y(t.$scope))throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, e);
                t.$scope[e] = n
            }

            return function (r, u, c, l) {
                var h, $, p, d;
                if (c = c === !0, l && w(l) && (d = l), w(r)) {
                    if ($ = r.match(i), !$)throw Yi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                    p = $[1], d = d || $[3], r = t.hasOwnProperty(p) ? t[p] : se(u.$scope, p, !0) || (e ? se(a, p, !0) : n), oe(r, p, !0)
                }
                if (c) {
                    var v = (li(r) ? r[r.length - 1] : r).prototype;
                    return h = Object.create(v || null), d && s(u, d, h, p || r.name), f(function () {
                        return o.invoke(r, h, u, p), h
                    }, {instance: h, identifier: d})
                }
                return h = o.instantiate(r, u, p), d && s(u, d, h, p || r.name), h
            }
        }]
    }

    function nn() {
        this.$get = ["$window", function (t) {
            return Qr(t.document)
        }]
    }

    function rn() {
        this.$get = ["$log", function (t) {
            return function () {
                t.error.apply(t, arguments)
            }
        }]
    }

    function on(t, e) {
        if (w(t)) {
            var n = t.replace(to, "").trim();
            if (n) {
                var r = e("Content-Type");
                (r && 0 === r.indexOf(Zi) || an(n)) && (t = B(n))
            }
        }
        return t
    }

    function an(t) {
        var e = t.match(Xi);
        return e && Qi[e[0]].test(t)
    }

    function sn(t) {
        var e, n, r, i = ce();
        return t ? (o(t.split("\n"), function (t) {
            r = t.indexOf(":"), e = Gr(fi(t.substr(0, r))), n = fi(t.substr(r + 1)), e && (i[e] = i[e] ? i[e] + ", " + n : n)
        }), i) : i
    }

    function un(t) {
        var e = y(t) ? t : n;
        return function (n) {
            if (e || (e = sn(t)), n) {
                var r = e[Gr(n)];
                return void 0 === r && (r = null), r
            }
            return e
        }
    }

    function cn(t, e, n, r) {
        return S(r) ? r(t, e, n) : (o(r, function (r) {
            t = r(t, e, n)
        }), t)
    }

    function ln(t) {
        return t >= 200 && 300 > t
    }

    function fn() {
        var t = this.defaults = {
            transformResponse: [on],
            transformRequest: [function (t) {
                return !y(t) || E(t) || T(t) || O(t) ? t : L(t)
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: _(Ki), put: _(Ki), patch: _(Ki)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, e = !1;
        this.useApplyAsync = function (t) {
            return g(t) ? (e = !!t, this) : e
        };
        var i = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, u, c, l, h, $) {
            function p(e) {
                function i(t) {
                    var e = f({}, t);
                    return e.data = t.data ? cn(t.data, t.headers, t.status, u.transformResponse) : t.data, ln(t.status) ? e : h.reject(e)
                }

                function a(t) {
                    var e, n = {};
                    return o(t, function (t, r) {
                        S(t) ? (e = t(), null != e && (n[r] = e)) : n[r] = t
                    }), n
                }

                function s(e) {
                    var n, r, i, o = t.headers, s = f({}, e.headers);
                    o = f({}, o.common, o[Gr(e.method)]);
                    t:for (n in o) {
                        r = Gr(n);
                        for (i in s)if (Gr(i) === r)continue t;
                        s[n] = o[n]
                    }
                    return a(s)
                }

                if (!si.isObject(e))throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", e);
                var u = f({
                    method: "get",
                    transformRequest: t.transformRequest,
                    transformResponse: t.transformResponse
                }, e);
                u.headers = s(e), u.method = Yr(u.method);
                var c = function (e) {
                    var r = e.headers, a = cn(e.data, un(r), n, e.transformRequest);
                    return m(a) && o(r, function (t, e) {
                        "content-type" === Gr(e) && delete r[e]
                    }), m(e.withCredentials) && !m(t.withCredentials) && (e.withCredentials = t.withCredentials), b(e, a).then(i, i)
                }, l = [c, n], $ = h.when(u);
                for (o(k, function (t) {
                    (t.request || t.requestError) && l.unshift(t.request, t.requestError), (t.response || t.responseError) && l.push(t.response, t.responseError)
                }); l.length;) {
                    var p = l.shift(), d = l.shift();
                    $ = $.then(p, d)
                }
                return $.success = function (t) {
                    return $.then(function (e) {
                        t(e.data, e.status, e.headers, u)
                    }), $
                }, $.error = function (t) {
                    return $.then(null, function (e) {
                        t(e.data, e.status, e.headers, u)
                    }), $
                }, $
            }

            function d() {
                o(arguments, function (t) {
                    p[t] = function (e, n) {
                        return p(f(n || {}, {method: t, url: e}))
                    }
                })
            }

            function v() {
                o(arguments, function (t) {
                    p[t] = function (e, n, r) {
                        return p(f(r || {}, {method: t, url: e, data: n}))
                    }
                })
            }

            function b(r, i) {
                function o(t, n, r, i) {
                    function o() {
                        s(n, t, r, i)
                    }

                    $ && (ln(t) ? $.put(x, [t, n, sn(r), i]) : $.remove(x)), e ? l.$applyAsync(o) : (o(), l.$$phase || l.$apply())
                }

                function s(t, e, n, i) {
                    e = Math.max(e, 0), (ln(e) ? v.resolve : v.reject)({
                        data: t,
                        status: e,
                        headers: un(n),
                        config: r,
                        statusText: i
                    })
                }

                function c(t) {
                    s(t.data, t.status, _(t.headers()), t.statusText)
                }

                function f() {
                    var t = p.pendingRequests.indexOf(r);
                    -1 !== t && p.pendingRequests.splice(t, 1)
                }

                var $, d, v = h.defer(), w = v.promise, b = r.headers, x = C(r.url, r.params);
                if (p.pendingRequests.push(r), w.then(f, f), !r.cache && !t.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || ($ = y(r.cache) ? r.cache : y(t.cache) ? t.cache : A), $ && (d = $.get(x), g(d) ? V(d) ? d.then(c, c) : li(d) ? s(d[1], d[0], _(d[2]), d[3]) : s(d, 200, {}, "OK") : $.put(x, w)), m(d)) {
                    var S = or(r.url) ? u.cookies()[r.xsrfCookieName || t.xsrfCookieName] : n;
                    S && (b[r.xsrfHeaderName || t.xsrfHeaderName] = S), a(r.method, x, i, o, b, r.timeout, r.withCredentials, r.responseType)
                }
                return w
            }

            function C(t, e) {
                if (!e)return t;
                var n = [];
                return s(e, function (t, e) {
                    null === t || m(t) || (li(t) || (t = [t]), o(t, function (t) {
                        y(t) && (t = x(t) ? t.toISOString() : L(t)), n.push(Z(e) + "=" + Z(t))
                    }))
                }), n.length > 0 && (t += (-1 == t.indexOf("?") ? "?" : "&") + n.join("&")), t
            }

            var A = c("$http"), k = [];
            return o(i, function (t) {
                k.unshift(w(t) ? $.get(t) : $.invoke(t))
            }), p.pendingRequests = [], d("get", "delete", "head", "jsonp"), v("post", "put", "patch"), p.defaults = t, p
        }]
    }

    function hn() {
        return new t.XMLHttpRequest
    }

    function $n() {
        this.$get = ["$browser", "$window", "$document", function (t, e, n) {
            return pn(t, hn, t.defer, e.angular.callbacks, n[0])
        }]
    }

    function pn(t, e, r, i, a) {
        function s(t, e, n) {
            var r = a.createElement("script"), o = null;
            return r.type = "text/javascript", r.src = t, r.async = !0, o = function (t) {
                ki(r, "load", o), ki(r, "error", o), a.body.removeChild(r), r = null;
                var s = -1, u = "unknown";
                t && ("load" !== t.type || i[e].called || (t = {type: "error"}), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
            }, Ai(r, "load", o), Ai(r, "error", o), a.body.appendChild(r), o
        }

        return function (a, u, c, l, f, h, $, d) {
            function v() {
                w && w(), b && b.abort()
            }

            function m(e, i, o, a, s) {
                C !== n && r.cancel(C), w = b = null, e(i, o, a, s), t.$$completeOutstandingRequest(p)
            }

            if (t.$$incOutstandingRequestCount(), u = u || t.url(), "jsonp" == Gr(a)) {
                var y = "_" + (i.counter++).toString(36);
                i[y] = function (t) {
                    i[y].data = t, i[y].called = !0
                };
                var w = s(u.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function (t, e) {
                    m(l, t, i[y].data, "", e), i[y] = p
                })
            } else {
                var b = e();
                b.open(a, u, !0), o(f, function (t, e) {
                    g(t) && b.setRequestHeader(e, t)
                }), b.onload = function () {
                    var t = b.statusText || "", e = "response"in b ? b.response : b.responseText, n = 1223 === b.status ? 204 : b.status;
                    0 === n && (n = e ? 200 : "file" == ir(u).protocol ? 404 : 0), m(l, n, e, b.getAllResponseHeaders(), t)
                };
                var x = function () {
                    m(l, -1, null, null, "")
                };
                if (b.onerror = x, b.onabort = x, $ && (b.withCredentials = !0), d)try {
                    b.responseType = d
                } catch (S) {
                    if ("json" !== d)throw S
                }
                b.send(c || null)
            }
            if (h > 0)var C = r(v, h); else V(h) && h.then(v)
        }
    }

    function dn() {
        var t = "{{", e = "}}";
        this.startSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
            function o(t) {
                return "\\\\\\" + t
            }

            function a(o, a, h, $) {
                function p(n) {
                    return n.replace(c, t).replace(l, e)
                }

                function d(t) {
                    try {
                        return t = T(t), $ && !g(t) ? t : M(t)
                    } catch (e) {
                        var n = eo("interr", "Can't interpolate: {0}\n{1}", o, e.toString());
                        r(n)
                    }
                }

                $ = !!$;
                for (var v, y, w, b = 0, x = [], C = [], A = o.length, k = [], E = []; A > b;) {
                    if (-1 == (v = o.indexOf(t, b)) || -1 == (y = o.indexOf(e, v + s))) {
                        b !== A && k.push(p(o.substring(b)));
                        break
                    }
                    b !== v && k.push(p(o.substring(b, v))), w = o.substring(v + s, y), x.push(w), C.push(n(w, d)), b = y + u, E.push(k.length), k.push("")
                }
                if (h && k.length > 1)throw eo("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                if (!a || x.length) {
                    var O = function (t) {
                        for (var e = 0, n = x.length; n > e; e++) {
                            if ($ && m(t[e]))return;
                            k[E[e]] = t[e]
                        }
                        return k.join("")
                    }, T = function (t) {
                        return h ? i.getTrusted(h, t) : i.valueOf(t)
                    }, M = function (t) {
                        if (null == t)return "";
                        switch (typeof t) {
                            case"string":
                                break;
                            case"number":
                                t = "" + t;
                                break;
                            default:
                                t = L(t)
                        }
                        return t
                    };
                    return f(function (t) {
                        var e = 0, n = x.length, i = new Array(n);
                        try {
                            for (; n > e; e++)i[e] = C[e](t);
                            return O(i)
                        } catch (a) {
                            var s = eo("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
                            r(s)
                        }
                    }, {
                        exp: o, expressions: x, $$watchDelegate: function (t, e, n) {
                            var r;
                            return t.$watchGroup(C, function (n, i) {
                                var o = O(n);
                                S(e) && e.call(this, o, n !== i ? r : o, t), r = o
                            }, n)
                        }
                    })
                }
            }

            var s = t.length, u = e.length, c = new RegExp(t.replace(/./g, o), "g"), l = new RegExp(e.replace(/./g, o), "g");
            return a.startSymbol = function () {
                return t
            }, a.endSymbol = function () {
                return e
            }, a
        }]
    }

    function vn() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (t, e, n, r) {
            function i(i, a, s, u) {
                var c = e.setInterval, l = e.clearInterval, f = 0, h = g(u) && !u, $ = (h ? r : n).defer(), p = $.promise;
                return s = g(s) ? s : 0, p.then(null, null, i), p.$$intervalId = c(function () {
                    $.notify(f++), s > 0 && f >= s && ($.resolve(f), l(p.$$intervalId), delete o[p.$$intervalId]), h || t.$apply()
                }, a), o[p.$$intervalId] = $, p
            }

            var o = {};
            return i.cancel = function (t) {
                return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
            }, i
        }]
    }

    function mn() {
        this.$get = function () {
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
                    }, {
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
                    CURRENCY_SYM: "&#8358;"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
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
                pluralCat: function (t) {
                    return 1 === t ? "one" : "other"
                }
            }
        }
    }

    function gn(t) {
        for (var e = t.split("/"), n = e.length; n--;)e[n] = Y(e[n]);
        return e.join("/")
    }

    function yn(t, e) {
        var n = ir(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = h(n.port) || ro[n.protocol] || null
    }

    function wn(t, e) {
        var n = "/" !== t.charAt(0);
        n && (t = "/" + t);
        var r = ir(t);
        e.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = G(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function bn(t, e) {
        return 0 === e.indexOf(t) ? e.substr(t.length) : void 0
    }

    function xn(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e)
    }

    function Sn(t) {
        return t.replace(/(#.+)|#$/, "$1")
    }

    function Cn(t) {
        return t.substr(0, xn(t).lastIndexOf("/") + 1)
    }

    function An(t) {
        return t.substring(0, t.indexOf("/", t.indexOf("//") + 2))
    }

    function kn(t, e) {
        this.$$html5 = !0, e = e || "";
        var r = Cn(t);
        yn(t, this), this.$$parse = function (t) {
            var e = bn(r, t);
            if (!w(e))throw io("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', t, r);
            wn(e, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var t = J(this.$$search), e = this.$$hash ? "#" + Y(this.$$hash) : "";
            this.$$url = gn(this.$$path) + (t ? "?" + t : "") + e, this.$$absUrl = r + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (i, o) {
            if (o && "#" === o[0])return this.hash(o.slice(1)), !0;
            var a, s, u;
            return (a = bn(t, i)) !== n ? (s = a, u = (a = bn(e, a)) !== n ? r + (bn("/", a) || a) : t + s) : (a = bn(r, i)) !== n ? u = r + a : r == i + "/" && (u = r), u && this.$$parse(u), !!u
        }
    }

    function En(t, e) {
        var n = Cn(t);
        yn(t, this), this.$$parse = function (r) {
            function i(t, e, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === e.indexOf(n) && (e = e.replace(n, "")), i.exec(e) ? t : (r = i.exec(t), r ? r[1] : t)
            }

            var o, a = bn(t, r) || bn(n, r);
            "#" === a.charAt(0) ? (o = bn(e, a), m(o) && (o = a)) : o = this.$$html5 ? a : "", wn(o, this), this.$$path = i(this.$$path, o, t), this.$$compose()
        }, this.$$compose = function () {
            var n = J(this.$$search), r = this.$$hash ? "#" + Y(this.$$hash) : "";
            this.$$url = gn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + (this.$$url ? e + this.$$url : "")
        }, this.$$parseLinkUrl = function (e) {
            return xn(t) == xn(e) ? (this.$$parse(e), !0) : !1
        }
    }

    function On(t, e) {
        this.$$html5 = !0, En.apply(this, arguments);
        var n = Cn(t);
        this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0])return this.hash(i.slice(1)), !0;
            var o, a;
            return t == xn(r) ? o = r : (a = bn(n, r)) ? o = t + e + a : n === r + "/" && (o = n), o && this.$$parse(o), !!o
        }, this.$$compose = function () {
            var n = J(this.$$search), r = this.$$hash ? "#" + Y(this.$$hash) : "";
            this.$$url = gn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = t + e + this.$$url
        }
    }

    function Tn(t) {
        return function () {
            return this[t]
        }
    }

    function Mn(t, e) {
        return function (n) {
            return m(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function Vn() {
        var t = "", e = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (e) {
            return g(e) ? (t = e, this) : t
        }, this.html5Mode = function (t) {
            return M(t) ? (e.enabled = t, this) : y(t) ? (M(t.enabled) && (e.enabled = t.enabled), M(t.requireBase) && (e.requireBase = t.requireBase), M(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
            function s(t, e, n) {
                var i = c.url(), o = c.$$state;
                try {
                    r.url(t, e, n), c.$$state = r.state()
                } catch (a) {
                    throw c.url(i), c.$$state = o, a
                }
            }

            function u(t, e) {
                n.$broadcast("$locationChangeSuccess", c.absUrl(), t, c.$$state, e)
            }

            var c, l, f, h = r.baseHref(), $ = r.url();
            if (e.enabled) {
                if (!h && e.requireBase)throw io("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                f = An($) + (h || "/"), l = i.history ? kn : On
            } else f = xn($), l = En;
            c = new l(f, "#" + t), c.$$parseLinkUrl($, $), c.$$state = r.state();
            var p = /^\s*(javascript|mailto):/i;
            o.on("click", function (t) {
                if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
                    for (var i = Qr(t.target); "a" !== j(i[0]);)if (i[0] === o[0] || !(i = i.parent())[0])return;
                    var s = i.prop("href"), u = i.attr("href") || i.attr("xlink:href");
                    y(s) && "[object SVGAnimatedString]" === s.toString() && (s = ir(s.animVal).href), p.test(s) || !s || i.attr("target") || t.isDefaultPrevented() || c.$$parseLinkUrl(s, u) && (t.preventDefault(), c.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                }
            }), Sn(c.absUrl()) != Sn($) && r.url(c.absUrl(), !0);
            var d = !0;
            return r.onUrlChange(function (t, e) {
                n.$evalAsync(function () {
                    var r, i = c.absUrl(), o = c.$$state;
                    c.$$parse(t), c.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, c.absUrl() === t && (r ? (c.$$parse(i), c.$$state = o, s(i, !1, o)) : (d = !1, u(i, o)))
                }), n.$$phase || n.$digest()
            }), n.$watch(function () {
                var t = Sn(r.url()), e = Sn(c.absUrl()), o = r.state(), a = c.$$replace, l = t !== e || c.$$html5 && i.history && o !== c.$$state;
                (d || l) && (d = !1, n.$evalAsync(function () {
                    var e = c.absUrl(), r = n.$broadcast("$locationChangeStart", e, t, c.$$state, o).defaultPrevented;
                    c.absUrl() === e && (r ? (c.$$parse(t), c.$$state = o) : (l && s(e, a, o === c.$$state ? null : c.$$state), u(t, o)))
                })), c.$$replace = !1
            }), c
        }]
    }

    function Nn() {
        var t = !0, e = this;
        this.debugEnabled = function (e) {
            return g(e) ? (t = e, this) : t
        }, this.$get = ["$window", function (n) {
            function r(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function i(t) {
                var e = n.console || {}, i = e[t] || e.log || p, a = !1;
                try {
                    a = !!i.apply
                } catch (s) {
                }
                return a ? function () {
                    var t = [];
                    return o(arguments, function (e) {
                        t.push(r(e))
                    }), i.apply(e, t)
                } : function (t, e) {
                    i(t, null == e ? "" : e)
                }
            }

            return {
                log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
                    var n = i("debug");
                    return function () {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function Dn(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t)throw ao("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", e);
        return t
    }

    function jn(t, e) {
        if (t) {
            if (t.constructor === t)throw ao("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t.window === t)throw ao("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find))throw ao("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", e);
            if (t === Object)throw ao("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", e)
        }
        return t
    }

    function Pn(t, e) {
        if (t) {
            if (t.constructor === t)throw ao("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", e);
            if (t === so || t === uo || t === co)throw ao("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", e)
        }
    }

    function Rn(t) {
        return t.constant
    }

    function _n(t, e, n, r, i) {
        jn(t, i), jn(e, i);
        for (var o, a = n.split("."), s = 0; a.length > 1; s++) {
            o = Dn(a.shift(), i);
            var u = 0 === s && e && e[o] || t[o];
            u || (u = {}, t[o] = u), t = jn(u, i)
        }
        return o = Dn(a.shift(), i), jn(t[o], i), t[o] = r, r
    }

    function In(t) {
        return "constructor" == t
    }

    function qn(t, e, r, i, o, a, s) {
        Dn(t, a), Dn(e, a), Dn(r, a), Dn(i, a), Dn(o, a);
        var u = function (t) {
            return jn(t, a)
        }, c = s || In(t) ? u : d, l = s || In(e) ? u : d, f = s || In(r) ? u : d, h = s || In(i) ? u : d, $ = s || In(o) ? u : d;
        return function (a, s) {
            var u = s && s.hasOwnProperty(t) ? s : a;
            return null == u ? u : (u = c(u[t]), e ? null == u ? n : (u = l(u[e]), r ? null == u ? n : (u = f(u[r]), i ? null == u ? n : (u = h(u[i]), o ? null == u ? n : u = $(u[o]) : u) : u) : u) : u)
        }
    }

    function Un(t, e) {
        return function (n, r) {
            return t(n, r, jn, e)
        }
    }

    function Fn(t, e, r) {
        var i = e.expensiveChecks, a = i ? mo : vo, s = a[t];
        if (s)return s;
        var u = t.split("."), c = u.length;
        if (e.csp)s = 6 > c ? qn(u[0], u[1], u[2], u[3], u[4], r, i) : function (t, e) {
            var o, a = 0;
            do o = qn(u[a++], u[a++], u[a++], u[a++], u[a++], r, i)(t, e), e = n, t = o; while (c > a);
            return o
        }; else {
            var l = "";
            i && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var f = i;
            o(u, function (t, e) {
                Dn(t, r);
                var n = (e ? "s" : '((l&&l.hasOwnProperty("' + t + '"))?l:s)') + "." + t;
                (i || In(t)) && (n = "eso(" + n + ", fe)", f = !0), l += "if(s == null) return undefined;\ns=" + n + ";\n"
            }), l += "return s;";
            var h = new Function("s", "l", "eso", "fe", l);
            h.toString = v(l), f && (h = Un(h, r)), s = h
        }
        return s.sharedGetter = !0, s.assign = function (e, n, r) {
            return _n(e, r, t, n, t)
        }, a[t] = s, s
    }

    function Hn(t) {
        return S(t.valueOf) ? t.valueOf() : go.call(t)
    }

    function Ln() {
        var t = ce(), e = ce();
        this.$get = ["$filter", "$sniffer", function (n, r) {
            function i(t) {
                var e = t;
                return t.sharedGetter && (e = function (e, n) {
                    return t(e, n)
                }, e.literal = t.literal, e.constant = t.constant, e.assign = t.assign), e
            }

            function a(t, e) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var i = t[n];
                    i.constant || (i.inputs ? a(i.inputs, e) : -1 === e.indexOf(i) && e.push(i))
                }
                return e
            }

            function s(t, e) {
                return null == t || null == e ? t === e : "object" == typeof t && (t = Hn(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
            }

            function u(t, e, n, r) {
                var i, o = r.$$inputs || (r.$$inputs = a(r.inputs, []));
                if (1 === o.length) {
                    var u = s;
                    return o = o[0], t.$watch(function (t) {
                        var e = o(t);
                        return s(e, u) || (i = r(t), u = e && Hn(e)), i
                    }, e, n)
                }
                for (var c = [], l = 0, f = o.length; f > l; l++)c[l] = s;
                return t.$watch(function (t) {
                    for (var e = !1, n = 0, a = o.length; a > n; n++) {
                        var u = o[n](t);
                        (e || (e = !s(u, c[n]))) && (c[n] = u && Hn(u))
                    }
                    return e && (i = r(t)), i
                }, e, n)
            }

            function c(t, e, n, r) {
                var i, o;
                return i = t.$watch(function (t) {
                    return r(t)
                }, function (t, n, r) {
                    o = t, S(e) && e.apply(this, arguments), g(t) && r.$$postDigest(function () {
                        g(o) && i()
                    })
                }, n)
            }

            function l(t, e, n, r) {
                function i(t) {
                    var e = !0;
                    return o(t, function (t) {
                        g(t) || (e = !1)
                    }), e
                }

                var a, s;
                return a = t.$watch(function (t) {
                    return r(t)
                }, function (t, n, r) {
                    s = t, S(e) && e.call(this, t, n, r), i(t) && r.$$postDigest(function () {
                        i(s) && a()
                    })
                }, n)
            }

            function f(t, e, n, r) {
                var i;
                return i = t.$watch(function (t) {
                    return r(t)
                }, function () {
                    S(e) && e.apply(this, arguments), i()
                }, n)
            }

            function h(t, e) {
                if (!e)return t;
                var n = t.$$watchDelegate, r = n !== l && n !== c, i = r ? function (n, r) {
                    var i = t(n, r);
                    return e(i, n, r)
                } : function (n, r) {
                    var i = t(n, r), o = e(i, n, r);
                    return g(i) ? o : i
                };
                return t.$$watchDelegate && t.$$watchDelegate !== u ? i.$$watchDelegate = t.$$watchDelegate : e.$stateful || (i.$$watchDelegate = u, i.inputs = [t]), i
            }

            var $ = {csp: r.csp, expensiveChecks: !1}, d = {csp: r.csp, expensiveChecks: !0};
            return function (r, o, a) {
                var s, v, m;
                switch (typeof r) {
                    case"string":
                        m = r = r.trim();
                        var g = a ? e : t;
                        if (s = g[m], !s) {
                            ":" === r.charAt(0) && ":" === r.charAt(1) && (v = !0, r = r.substring(2));
                            var y = a ? d : $, w = new $o(y), b = new po(w, n, y);
                            s = b.parse(r), s.constant ? s.$$watchDelegate = f : v ? (s = i(s), s.$$watchDelegate = s.literal ? l : c) : s.inputs && (s.$$watchDelegate = u), g[m] = s
                        }
                        return h(s, o);
                    case"function":
                        return h(r, o);
                    default:
                        return h(p, o)
                }
            }
        }]
    }

    function Bn() {
        this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
            return Wn(function (e) {
                t.$evalAsync(e)
            }, e)
        }]
    }

    function zn() {
        this.$get = ["$browser", "$exceptionHandler", function (t, e) {
            return Wn(function (e) {
                t.defer(e)
            }, e)
        }]
    }

    function Wn(t, e) {
        function i(t, e, n) {
            function r(e) {
                return function (n) {
                    i || (i = !0, e.call(t, n))
                }
            }

            var i = !1;
            return [r(e), r(n)]
        }

        function a() {
            this.$$state = {status: 0}
        }

        function s(t, e) {
            return function (n) {
                e.call(t, n)
            }
        }

        function u(t) {
            var r, i, o;
            o = t.pending, t.processScheduled = !1, t.pending = n;
            for (var a = 0, s = o.length; s > a; ++a) {
                i = o[a][0], r = o[a][t.status];
                try {
                    S(r) ? i.resolve(r(t.value)) : 1 === t.status ? i.resolve(t.value) : i.reject(t.value)
                } catch (u) {
                    i.reject(u), e(u)
                }
            }
        }

        function c(e) {
            !e.processScheduled && e.pending && (e.processScheduled = !0, t(function () {
                u(e)
            }))
        }

        function l() {
            this.promise = new a, this.resolve = s(this, this.resolve), this.reject = s(this, this.reject), this.notify = s(this, this.notify)
        }

        function f(t) {
            var e = new l, n = 0, r = li(t) ? [] : {};
            return o(t, function (t, i) {
                n++, m(t).then(function (t) {
                    r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                }, function (t) {
                    r.hasOwnProperty(i) || e.reject(t)
                })
            }), 0 === n && e.resolve(r), e.promise
        }

        var h = r("$q", TypeError), $ = function () {
            return new l
        };
        a.prototype = {
            then: function (t, e, n) {
                var r = new l;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), this.$$state.status > 0 && c(this.$$state), r.promise
            }, "catch": function (t) {
                return this.then(null, t)
            }, "finally": function (t, e) {
                return this.then(function (e) {
                    return v(e, !0, t)
                }, function (e) {
                    return v(e, !1, t)
                }, e)
            }
        }, l.prototype = {
            resolve: function (t) {
                this.promise.$$state.status || (t === this.promise ? this.$$reject(h("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : this.$$resolve(t))
            }, $$resolve: function (t) {
                var n, r;
                r = i(this, this.$$resolve, this.$$reject);
                try {
                    (y(t) || S(t)) && (n = t && t.then), S(n) ? (this.promise.$$state.status = -1, n.call(t, r[0], r[1], this.notify)) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, c(this.promise.$$state))
                } catch (o) {
                    r[1](o), e(o)
                }
            }, reject: function (t) {
                this.promise.$$state.status || this.$$reject(t)
            }, $$reject: function (t) {
                this.promise.$$state.value = t, this.promise.$$state.status = 2, c(this.promise.$$state)
            }, notify: function (n) {
                var r = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && r && r.length && t(function () {
                    for (var t, i, o = 0, a = r.length; a > o; o++) {
                        i = r[o][0], t = r[o][3];
                        try {
                            i.notify(S(t) ? t(n) : n)
                        } catch (s) {
                            e(s)
                        }
                    }
                })
            }
        };
        var p = function (t) {
            var e = new l;
            return e.reject(t), e.promise
        }, d = function (t, e) {
            var n = new l;
            return e ? n.resolve(t) : n.reject(t), n.promise
        }, v = function (t, e, n) {
            var r = null;
            try {
                S(n) && (r = n())
            } catch (i) {
                return d(i, !1)
            }
            return V(r) ? r.then(function () {
                return d(t, e)
            }, function (t) {
                return d(t, !1)
            }) : d(t, e)
        }, m = function (t, e, n, r) {
            var i = new l;
            return i.resolve(t), i.promise.then(e, n, r)
        }, g = function w(t) {
            function e(t) {
                r.resolve(t)
            }

            function n(t) {
                r.reject(t)
            }

            if (!S(t))throw h("norslvr", "Expected resolverFn, got '{0}'", t);
            if (!(this instanceof w))return new w(t);
            var r = new l;
            return t(e, n), r.promise
        };
        return g.defer = $, g.reject = p, g.when = m, g.all = f, g
    }

    function Gn() {
        this.$get = ["$window", "$timeout", function (t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame, r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function (t) {
                var e = n(t);
                return function () {
                    r(e)
                }
            } : function (t) {
                var n = e(t, 16.66, !1);
                return function () {
                    e.cancel(n)
                }
            };
            return o.supported = i, o
        }]
    }

    function Jn() {
        var t = 10, e = r("$rootScope"), n = null, a = null;
        this.digestTtl = function (e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, s, u, l) {
            function f() {
                this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
            }

            function h(t) {
                if (b.$$phase)throw e("inprog", "{0} already in progress", b.$$phase);
                b.$$phase = t
            }

            function $() {
                b.$$phase = null
            }

            function d(t, e, n) {
                do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
            }

            function v() {
            }

            function g() {
                for (; A.length;)try {
                    A.shift()()
                } catch (t) {
                    s(t)
                }
                a = null
            }

            function w() {
                null === a && (a = l.defer(function () {
                    b.$apply(g)
                }))
            }

            f.prototype = {
                constructor: f, $new: function (t, e) {
                    function n() {
                        r.$$destroyed = !0
                    }

                    var r;
                    return e = e || this, t ? (r = new f, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = c(), this.$$ChildScope = null
                    }, this.$$ChildScope.prototype = this), r = new this.$$ChildScope), r.$parent = e, r.$$prevSibling = e.$$childTail, e.$$childHead ? (e.$$childTail.$$nextSibling = r, e.$$childTail = r) : e.$$childHead = e.$$childTail = r, (t || e != this) && r.$on("$destroy", n), r
                }, $watch: function (t, e, r) {
                    var i = u(t);
                    if (i.$$watchDelegate)return i.$$watchDelegate(this, e, r, i);
                    var o = this, a = o.$$watchers, s = {fn: e, last: v, get: i, exp: t, eq: !!r};
                    return n = null, S(e) || (s.fn = p), a || (a = o.$$watchers = []), a.unshift(s), function () {
                        P(a, s), n = null
                    }
                }, $watchGroup: function (t, e) {
                    function n() {
                        u = !1, c ? (c = !1, e(i, i, s)) : e(i, r, s)
                    }

                    var r = new Array(t.length), i = new Array(t.length), a = [], s = this, u = !1, c = !0;
                    if (!t.length) {
                        var l = !0;
                        return s.$evalAsync(function () {
                            l && e(i, i, s)
                        }), function () {
                            l = !1
                        }
                    }
                    return 1 === t.length ? this.$watch(t[0], function (t, n, o) {
                        i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
                    }) : (o(t, function (t, e) {
                        var o = s.$watch(t, function (t, o) {
                            i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n))
                        });
                        a.push(o)
                    }), function () {
                        for (; a.length;)a.shift()()
                    })
                }, $watchCollection: function (t, e) {
                    function n(t) {
                        o = t;
                        var e, n, r, s, u;
                        if (!m(o)) {
                            if (y(o))if (i(o)) {
                                a !== $ && (a = $, v = a.length = 0, f++), e = o.length, v !== e && (f++, a.length = v = e);
                                for (var c = 0; e > c; c++)u = a[c], s = o[c], r = u !== u && s !== s, r || u === s || (f++, a[c] = s)
                            } else {
                                a !== p && (a = p = {}, v = 0, f++), e = 0;
                                for (n in o)o.hasOwnProperty(n) && (e++, s = o[n], u = a[n], n in a ? (r = u !== u && s !== s, r || u === s || (f++, a[n] = s)) : (v++, a[n] = s, f++));
                                if (v > e) {
                                    f++;
                                    for (n in a)o.hasOwnProperty(n) || (v--, delete a[n])
                                }
                            } else a !== o && (a = o, f++);
                            return f
                        }
                    }

                    function r() {
                        if (d ? (d = !1, e(o, o, c)) : e(o, s, c), l)if (y(o))if (i(o)) {
                            s = new Array(o.length);
                            for (var t = 0; t < o.length; t++)s[t] = o[t]
                        } else {
                            s = {};
                            for (var n in o)Jr.call(o, n) && (s[n] = o[n])
                        } else s = o
                    }

                    n.$stateful = !0;
                    var o, a, s, c = this, l = e.length > 1, f = 0, h = u(t, n), $ = [], p = {}, d = !0, v = 0;
                    return this.$watch(h, r)
                }, $digest: function () {
                    var r, i, o, u, c, f, p, d, m, y, w = t, A = this, k = [];
                    h("$digest"), l.$$checkUrlChange(), this === b && null !== a && (l.defer.cancel(a), g()), n = null;
                    do {
                        for (f = !1, d = A; x.length;) {
                            try {
                                y = x.shift(), y.scope.$eval(y.expression, y.locals)
                            } catch (E) {
                                s(E)
                            }
                            n = null
                        }
                        t:do {
                            if (u = d.$$watchers)for (c = u.length; c--;)try {
                                if (r = u[c])if ((i = r.get(d)) === (o = r.last) || (r.eq ? I(i, o) : "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))) {
                                    if (r === n) {
                                        f = !1;
                                        break t
                                    }
                                } else f = !0, n = r, r.last = r.eq ? R(i, null) : i, r.fn(i, o === v ? i : o, d), 5 > w && (m = 4 - w, k[m] || (k[m] = []), k[m].push({
                                    msg: S(r.exp) ? "fn: " + (r.exp.name || r.exp.toString()) : r.exp,
                                    newVal: i,
                                    oldVal: o
                                }))
                            } catch (E) {
                                s(E)
                            }
                            if (!(p = d.$$childHead || d !== A && d.$$nextSibling))for (; d !== A && !(p = d.$$nextSibling);)d = d.$parent
                        } while (d = p);
                        if ((f || x.length) && !w--)throw $(), e("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, k)
                    } while (f || x.length);
                    for ($(); C.length;)try {
                        C.shift()()
                    } catch (E) {
                        s(E)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== b) {
                            for (var e in this.$$listenerCount)d(this, this.$$listenerCount[e], e);
                            t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function () {
                                return p
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                }, $eval: function (t, e) {
                    return u(t)(this, e)
                }, $evalAsync: function (t, e) {
                    b.$$phase || x.length || l.defer(function () {
                        x.length && b.$digest()
                    }), x.push({scope: this, expression: t, locals: e})
                }, $$postDigest: function (t) {
                    C.push(t)
                }, $apply: function (t) {
                    try {
                        return h("$apply"), this.$eval(t)
                    } catch (e) {
                        s(e)
                    } finally {
                        $();
                        try {
                            b.$digest()
                        } catch (e) {
                            throw s(e), e
                        }
                    }
                }, $applyAsync: function (t) {
                    function e() {
                        n.$eval(t)
                    }

                    var n = this;
                    t && A.push(e), w()
                }, $on: function (t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var r = this;
                    do r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++; while (r = r.$parent);
                    var i = this;
                    return function () {
                        var r = n.indexOf(e);
                        -1 !== r && (n[r] = null, d(i, 1, t))
                    }
                }, $emit: function (t) {
                    var e, n, r, i = [], o = this, a = !1, u = {
                        name: t, targetScope: o, stopPropagation: function () {
                            a = !0
                        }, preventDefault: function () {
                            u.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, c = q([u], arguments, 1);
                    do {
                        for (e = o.$$listeners[t] || i, u.currentScope = o, n = 0, r = e.length; r > n; n++)if (e[n])try {
                            e[n].apply(null, c)
                        } catch (l) {
                            s(l)
                        } else e.splice(n, 1), n--, r--;
                        if (a)return u.currentScope = null, u;
                        o = o.$parent
                    } while (o);
                    return u.currentScope = null, u
                }, $broadcast: function (t) {
                    var e = this, n = e, r = e, i = {
                        name: t, targetScope: e, preventDefault: function () {
                            i.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!e.$$listenerCount[t])return i;
                    for (var o, a, u, c = q([i], arguments, 1); n = r;) {
                        for (i.currentScope = n, o = n.$$listeners[t] || [], a = 0, u = o.length; u > a; a++)if (o[a])try {
                            o[a].apply(null, c)
                        } catch (l) {
                            s(l)
                        } else o.splice(a, 1), a--, u--;
                        if (!(r = n.$$listenerCount[t] && n.$$childHead || n !== e && n.$$nextSibling))for (; n !== e && !(r = n.$$nextSibling);)n = n.$parent
                    }
                    return i.currentScope = null, i
                }
            };
            var b = new f, x = b.$$asyncQueue = [], C = b.$$postDigestQueue = [], A = b.$$applyAsyncQueue = [];
            return b
        }]
    }

    function Yn() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (e) {
            return g(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return g(t) ? (e = t, this) : e
        }, this.$get = function () {
            return function (n, r) {
                var i, o = r ? e : t;
                return i = ir(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function Zn(t) {
        if ("self" === t)return t;
        if (w(t)) {
            if (t.indexOf("***") > -1)throw yo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", t);
            return t = hi(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
        }
        if (C(t))return new RegExp("^" + t.source + "$");
        throw yo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Kn(t) {
        var e = [];
        return g(t) && o(t, function (t) {
            e.push(Zn(t))
        }), e
    }

    function Xn() {
        this.SCE_CONTEXTS = wo;
        var t = ["self"], e = [];
        this.resourceUrlWhitelist = function (e) {
            return arguments.length && (t = Kn(e)), t
        }, this.resourceUrlBlacklist = function (t) {
            return arguments.length && (e = Kn(t)), e
        }, this.$get = ["$injector", function (r) {
            function i(t, e) {
                return "self" === t ? or(e) : !!t.exec(e.href)
            }

            function o(n) {
                var r, o, a = ir(n.toString()), s = !1;
                for (r = 0, o = t.length; o > r; r++)if (i(t[r], a)) {
                    s = !0;
                    break
                }
                if (s)for (r = 0, o = e.length; o > r; r++)if (i(e[r], a)) {
                    s = !1;
                    break
                }
                return s
            }

            function a(t) {
                var e = function (t) {
                    this.$$unwrapTrustedValue = function () {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }

            function s(t, e) {
                var r = h.hasOwnProperty(t) ? h[t] : null;
                if (!r)throw yo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", t, e);
                if (null === e || e === n || "" === e)return e;
                if ("string" != typeof e)throw yo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", t);
                return new r(e)
            }

            function u(t) {
                return t instanceof f ? t.$$unwrapTrustedValue() : t
            }

            function c(t, e) {
                if (null === e || e === n || "" === e)return e;
                var r = h.hasOwnProperty(t) ? h[t] : null;
                if (r && e instanceof r)return e.$$unwrapTrustedValue();
                if (t === wo.RESOURCE_URL) {
                    if (o(e))return e;
                    throw yo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", e.toString())
                }
                if (t === wo.HTML)return l(e);
                throw yo("unsafe", "Attempting to use an unsafe value in a safe context.")
            }

            var l = function () {
                throw yo("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            r.has("$sanitize") && (l = r.get("$sanitize"));
            var f = a(), h = {};
            return h[wo.HTML] = a(f), h[wo.CSS] = a(f), h[wo.URL] = a(f), h[wo.JS] = a(f), h[wo.RESOURCE_URL] = a(h[wo.URL]), {
                trustAs: s,
                getTrusted: c,
                valueOf: u
            }
        }]
    }

    function Qn() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sceDelegate", function (e, n) {
            if (t && 8 > Xr)throw yo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = _(wo);
            r.isEnabled = function () {
                return t
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function (t, e) {
                return e
            }, r.valueOf = d), r.parseAs = function (t, n) {
                var i = e(n);
                return i.literal && i.constant ? i : e(n, function (e) {
                    return r.getTrusted(t, e)
                })
            };
            var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
            return o(wo, function (t, e) {
                var n = Gr(e);
                r[de("parse_as_" + n)] = function (e) {
                    return i(t, e)
                }, r[de("get_trusted_" + n)] = function (e) {
                    return a(t, e)
                }, r[de("trust_as_" + n)] = function (e) {
                    return s(t, e)
                }
            }), r
        }]
    }

    function tr() {
        this.$get = ["$window", "$document", function (t, e) {
            var n, r, i = {}, o = h((/android (\d+)/.exec(Gr((t.navigator || {}).userAgent)) || [])[1]), a = /Boxee/i.test((t.navigator || {}).userAgent), s = e[0] || {}, u = /^(Moz|webkit|ms)(?=[A-Z])/, c = s.body && s.body.style, l = !1, f = !1;
            if (c) {
                for (var $ in c)if (r = u.exec($)) {
                    n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                    break
                }
                n || (n = "WebkitOpacity"in c && "webkit"), l = !!("transition"in c || n + "Transition"in c), f = !!("animation"in c || n + "Animation"in c), !o || l && f || (l = w(s.body.style.webkitTransition), f = w(s.body.style.webkitAnimation))
            }
            return {
                history: !(!t.history || !t.history.pushState || 4 > o || a), hasEvent: function (t) {
                    if ("input" === t && 11 >= Xr)return !1;
                    if (m(i[t])) {
                        var e = s.createElement("div");
                        i[t] = "on" + t in e
                    }
                    return i[t]
                }, csp: $i(), vendorPrefix: n, transitions: l, animations: f, android: o
            }
        }]
    }

    function er() {
        this.$get = ["$templateCache", "$http", "$q", function (t, e, n) {
            function r(i, o) {
                function a(t) {
                    if (!o)throw Gi("tpload", "Failed to load template: {0}", i);
                    return n.reject(t)
                }

                r.totalPendingRequests++;
                var s = e.defaults && e.defaults.transformResponse;
                li(s) ? s = s.filter(function (t) {
                    return t !== on
                }) : s === on && (s = null);
                var u = {cache: t, transformResponse: s};
                return e.get(i, u)["finally"](function () {
                    r.totalPendingRequests--
                }).then(function (t) {
                    return t.data
                }, a)
            }

            return r.totalPendingRequests = 0, r
        }]
    }

    function nr() {
        this.$get = ["$rootScope", "$browser", "$location", function (t, e, n) {
            var r = {};
            return r.findBindings = function (t, e, n) {
                var r = t.getElementsByClassName("ng-binding"), i = [];
                return o(r, function (t) {
                    var r = si.element(t).data("$binding");
                    r && o(r, function (r) {
                        if (n) {
                            var o = new RegExp("(^|\\s)" + hi(e) + "(\\s|\\||$)");
                            o.test(r) && i.push(t)
                        } else-1 != r.indexOf(e) && i.push(t)
                    })
                }), i
            }, r.findModels = function (t, e, n) {
                for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                    var o = n ? "=" : "*=", a = "[" + r[i] + "model" + o + '"' + e + '"]', s = t.querySelectorAll(a);
                    if (s.length)return s
                }
            }, r.getLocation = function () {
                return n.url()
            }, r.setLocation = function (e) {
                e !== n.url() && (n.url(e), t.$digest())
            }, r.whenStable = function (t) {
                e.notifyWhenNoOutstandingRequests(t)
            }, r
        }]
    }

    function rr() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (t, e, n, r, i) {
            function o(o, s, u) {
                var c, l = g(u) && !u, f = (l ? r : n).defer(), h = f.promise;
                return c = e.defer(function () {
                    try {
                        f.resolve(o())
                    } catch (e) {
                        f.reject(e), i(e)
                    } finally {
                        delete a[h.$$timeoutId]
                    }
                    l || t.$apply()
                }, s), h.$$timeoutId = c, a[c] = f, h
            }

            var a = {};
            return o.cancel = function (t) {
                return t && t.$$timeoutId in a ? (a[t.$$timeoutId].reject("canceled"), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
            }, o
        }]
    }

    function ir(t) {
        var e = t;
        return Xr && (bo.setAttribute("href", e), e = bo.href), bo.setAttribute("href", e), {
            href: bo.href,
            protocol: bo.protocol ? bo.protocol.replace(/:$/, "") : "",
            host: bo.host,
            search: bo.search ? bo.search.replace(/^\?/, "") : "",
            hash: bo.hash ? bo.hash.replace(/^#/, "") : "",
            hostname: bo.hostname,
            port: bo.port,
            pathname: "/" === bo.pathname.charAt(0) ? bo.pathname : "/" + bo.pathname
        }
    }

    function or(t) {
        var e = w(t) ? ir(t) : t;
        return e.protocol === xo.protocol && e.host === xo.host
    }

    function ar() {
        this.$get = v(t)
    }

    function sr(t) {
        function e(r, i) {
            if (y(r)) {
                var a = {};
                return o(r, function (t, n) {
                    a[n] = e(n, t)
                }), a
            }
            return t.factory(r + n, i)
        }

        var n = "Filter";
        this.register = e, this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + n)
            }
        }], e("currency", fr), e("date", xr), e("filter", ur), e("json", Sr), e("limitTo", Cr), e("lowercase", Eo), e("number", hr), e("orderBy", Ar), e("uppercase", Oo)
    }

    function ur() {
        return function (t, e, n) {
            if (!li(t))return t;
            var r, i;
            switch (typeof e) {
                case"function":
                    r = e;
                    break;
                case"boolean":
                case"number":
                case"string":
                    i = !0;
                case"object":
                    r = cr(e, n, i);
                    break;
                default:
                    return t
            }
            return t.filter(r)
        }
    }

    function cr(t, e, n) {
        var r, i = y(t) && "$"in t;
        return e === !0 ? e = I : S(e) || (e = function (t, e) {
            return y(t) || y(e) ? !1 : (t = Gr("" + t), e = Gr("" + e), -1 !== t.indexOf(e))
        }), r = function (r) {
            return i && !y(r) ? lr(r, t.$, e, !1) : lr(r, t, e, n)
        }
    }

    function lr(t, e, n, r, i) {
        var o = typeof t, a = typeof e;
        if ("string" === a && "!" === e.charAt(0))return !lr(t, e.substring(1), n, r);
        if (li(t))return t.some(function (t) {
            return lr(t, e, n, r)
        });
        switch (o) {
            case"object":
                var s;
                if (r) {
                    for (s in t)if ("$" !== s.charAt(0) && lr(t[s], e, n, !0))return !0;
                    return i ? !1 : lr(t, e, n, !1)
                }
                if ("object" === a) {
                    for (s in e) {
                        var u = e[s];
                        if (!S(u)) {
                            var c = "$" === s, l = c ? t : t[s];
                            if (!lr(l, u, n, c, c))return !1
                        }
                    }
                    return !0
                }
                return n(t, e);
            case"function":
                return !1;
            default:
                return n(t, e)
        }
    }

    function fr(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n, r) {
            return m(n) && (n = e.CURRENCY_SYM), m(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : $r(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function hr(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return null == t ? t : $r(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function $r(t, e, n, r, i) {
        if (!isFinite(t) || y(t))return "";
        var o = 0 > t;
        t = Math.abs(t);
        var a = t + "", s = "", u = [], c = !1;
        if (-1 !== a.indexOf("e")) {
            var l = a.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > i + 1 ? t = 0 : (s = a, c = !0)
        }
        if (c)i > 0 && 1 > t && (s = t.toFixed(i), t = parseFloat(s)); else {
            var f = (a.split(So)[1] || "").length;
            m(i) && (i = Math.min(Math.max(e.minFrac, f), e.maxFrac)), t = +(Math.round(+(t.toString() + "e" + i)).toString() + "e" + -i);
            var h = ("" + t).split(So), $ = h[0];
            h = h[1] || "";
            var p, d = 0, v = e.lgSize, g = e.gSize;
            if ($.length >= v + g)for (d = $.length - v, p = 0; d > p; p++)(d - p) % g === 0 && 0 !== p && (s += n), s += $.charAt(p);
            for (p = d; p < $.length; p++)($.length - p) % v === 0 && 0 !== p && (s += n), s += $.charAt(p);
            for (; h.length < i;)h += "0";
            i && "0" !== i && (s += r + h.substr(0, i))
        }
        return 0 === t && (o = !1), u.push(o ? e.negPre : e.posPre, s, o ? e.negSuf : e.posSuf), u.join("")
    }

    function pr(t, e, n) {
        var r = "";
        for (0 > t && (r = "-", t = -t), t = "" + t; t.length < e;)t = "0" + t;
        return n && (t = t.substr(t.length - e)), r + t
    }

    function dr(t, e, n, r) {
        return n = n || 0, function (i) {
            var o = i["get" + t]();
            return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), pr(o, e, r)
        }
    }

    function vr(t, e) {
        return function (n, r) {
            var i = n["get" + t](), o = Yr(e ? "SHORT" + t : t);
            return r[o][i]
        }
    }

    function mr(t) {
        var e = -1 * t.getTimezoneOffset(), n = e >= 0 ? "+" : "";
        return n += pr(Math[e > 0 ? "floor" : "ceil"](e / 60), 2) + pr(Math.abs(e % 60), 2)
    }

    function gr(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (4 >= e ? 5 : 12) - e)
    }

    function yr(t) {
        return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (4 - t.getDay()))
    }

    function wr(t) {
        return function (e) {
            var n = gr(e.getFullYear()), r = yr(e), i = +r - +n, o = 1 + Math.round(i / 6048e5);
            return pr(o, t)
        }
    }

    function br(t, e) {
        return t.getHours() < 12 ? e.AMPMS[0] : e.AMPMS[1]
    }

    function xr(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                var r = new Date(0), i = 0, o = 0, a = e[8] ? r.setUTCFullYear : r.setFullYear, s = e[8] ? r.setUTCHours : r.setHours;
                e[9] && (i = h(e[9] + e[10]), o = h(e[9] + e[11])), a.call(r, h(e[1]), h(e[2]) - 1, h(e[3]));
                var u = h(e[4] || 0) - i, c = h(e[5] || 0) - o, l = h(e[6] || 0), f = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
                return s.call(r, u, c, l, f), r
            }
            return t
        }

        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r, i) {
            var a, s, u = "", c = [];
            if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, w(n) && (n = ko.test(n) ? h(n) : e(n)), b(n) && (n = new Date(n)), !x(n))return n;
            for (; r;)s = Ao.exec(r), s ? (c = q(c, s, 1), r = c.pop()) : (c.push(r), r = null);
            return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(c, function (e) {
                a = Co[e], u += a ? a(n, t.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function Sr() {
        return function (t, e) {
            return m(e) && (e = 2), L(t, e)
        }
    }

    function Cr() {
        return function (t, e) {
            return b(t) && (t = t.toString()), li(t) || w(t) ? (e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : h(e), e ? e > 0 ? t.slice(0, e) : t.slice(e) : w(t) ? "" : []) : t
        }
    }

    function Ar(t) {
        return function (e, n, r) {
            function o(t, e) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](t, e);
                    if (0 !== i)return i
                }
                return 0
            }

            function a(t, e) {
                return e ? function (e, n) {
                    return t(n, e)
                } : t
            }

            function s(t) {
                switch (typeof t) {
                    case"number":
                    case"boolean":
                    case"string":
                        return !0;
                    default:
                        return !1
                }
            }

            function u(t) {
                return null === t ? "null" : "function" == typeof t.valueOf && (t = t.valueOf(), s(t)) ? t : "function" == typeof t.toString && (t = t.toString(), s(t)) ? t : ""
            }

            function c(t, e) {
                var n = typeof t, r = typeof e;
                return n === r && "object" === n && (t = u(t), e = u(e)), n === r ? ("string" === n && (t = t.toLowerCase(), e = e.toLowerCase()), t === e ? 0 : e > t ? -1 : 1) : r > n ? -1 : 1
            }

            return i(e) ? (n = li(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function (e) {
                var n = !1, r = e || d;
                if (w(e)) {
                    if (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0), e = e.substring(1)), "" === e)return a(c, n);
                    if (r = t(e), r.constant) {
                        var i = r();
                        return a(function (t, e) {
                            return c(t[i], e[i])
                        }, n)
                    }
                }
                return a(function (t, e) {
                    return c(r(t), r(e))
                }, n)
            }), ni.call(e).sort(a(o, r))) : e
        }
    }

    function kr(t) {
        return S(t) && (t = {link: t}), t.restrict = t.restrict || "AC", v(t)
    }

    function Er(t, e) {
        t.$name = e
    }

    function Or(t, e, r, i, a) {
        var s = this, u = [], c = s.$$parentForm = t.parent().controller("form") || Vo;
        s.$error = {}, s.$$success = {}, s.$pending = n, s.$name = a(e.name || e.ngForm || "")(r), s.$dirty = !1, s.$pristine = !0, s.$valid = !0, s.$invalid = !1, s.$submitted = !1, c.$addControl(s), s.$rollbackViewValue = function () {
            o(u, function (t) {
                t.$rollbackViewValue()
            })
        }, s.$commitViewValue = function () {
            o(u, function (t) {
                t.$commitViewValue()
            })
        }, s.$addControl = function (t) {
            ae(t.$name, "input"), u.push(t), t.$name && (s[t.$name] = t)
        }, s.$$renameControl = function (t, e) {
            var n = t.$name;
            s[n] === t && delete s[n], s[e] = t, t.$name = e
        }, s.$removeControl = function (t) {
            t.$name && s[t.$name] === t && delete s[t.$name], o(s.$pending, function (e, n) {
                s.$setValidity(n, null, t)
            }), o(s.$error, function (e, n) {
                s.$setValidity(n, null, t)
            }), o(s.$$success, function (e, n) {
                s.$setValidity(n, null, t)
            }), P(u, t)
        }, Lr({
            ctrl: this, $element: t, set: function (t, e, n) {
                var r = t[e];
                if (r) {
                    var i = r.indexOf(n);
                    -1 === i && r.push(n)
                } else t[e] = [n]
            }, unset: function (t, e, n) {
                var r = t[e];
                r && (P(r, n), 0 === r.length && delete t[e])
            }, parentForm: c, $animate: i
        }), s.$setDirty = function () {
            i.removeClass(t, $a), i.addClass(t, pa), s.$dirty = !0, s.$pristine = !1, c.$setDirty()
        }, s.$setPristine = function () {
            i.setClass(t, $a, pa + " " + No), s.$dirty = !1, s.$pristine = !0, s.$submitted = !1, o(u, function (t) {
                t.$setPristine()
            })
        }, s.$setUntouched = function () {
            o(u, function (t) {
                t.$setUntouched()
            })
        }, s.$setSubmitted = function () {
            i.addClass(t, No), s.$submitted = !0, c.$setSubmitted()
        }
    }

    function Tr(t) {
        t.$formatters.push(function (e) {
            return t.$isEmpty(e) ? e : e.toString()
        })
    }

    function Mr(t, e, n, r, i, o) {
        Vr(t, e, n, r, i, o), Tr(r)
    }

    function Vr(t, e, n, r, i, o) {
        var a = Gr(e[0].type);
        if (!i.android) {
            var s = !1;
            e.on("compositionstart", function () {
                s = !0
            }), e.on("compositionend", function () {
                s = !1, u()
            })
        }
        var u = function (t) {
            if (c && (o.defer.cancel(c), c = null), !s) {
                var i = e.val(), u = t && t.type;
                "password" === a || n.ngTrim && "false" === n.ngTrim || (i = fi(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
            }
        };
        if (i.hasEvent("input"))e.on("input", u); else {
            var c, l = function (t, e, n) {
                c || (c = o.defer(function () {
                    c = null, e && e.value === n || u(t)
                }))
            };
            e.on("keydown", function (t) {
                var e = t.keyCode;
                91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || l(t, this, this.value)
            }), i.hasEvent("paste") && e.on("paste cut", l)
        }
        e.on("change", u), r.$render = function () {
            e.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
        }
    }

    function Nr(t, e) {
        if (x(t))return t;
        if (w(t)) {
            Ho.lastIndex = 0;
            var n = Ho.exec(t);
            if (n) {
                var r = +n[1], i = +n[2], o = 0, a = 0, s = 0, u = 0, c = gr(r), l = 7 * (i - 1);
                return e && (o = e.getHours(), a = e.getMinutes(), s = e.getSeconds(), u = e.getMilliseconds()), new Date(r, 0, c.getDate() + l, o, a, s, u)
            }
        }
        return 0 / 0
    }

    function Dr(t, e) {
        return function (n, r) {
            var i, a;
            if (x(n))return n;
            if (w(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Ro.test(n))return new Date(n);
                if (t.lastIndex = 0, i = t.exec(n))return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, o(i, function (t, n) {
                    n < e.length && (a[e[n]] = +t)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return 0 / 0
        }
    }

    function jr(t, e, r, i) {
        return function (o, a, s, u, c, l, f) {
            function h(t) {
                return t && !(t.getTime && t.getTime() !== t.getTime())
            }

            function $(t) {
                return g(t) ? x(t) ? t : r(t) : n
            }

            Pr(o, a, s, u), Vr(o, a, s, u, c, l);
            var p, d = u && u.$options && u.$options.timezone;
            if (u.$$parserName = t, u.$parsers.push(function (t) {
                    if (u.$isEmpty(t))return null;
                    if (e.test(t)) {
                        var i = r(t, p);
                        return "UTC" === d && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i
                    }
                    return n
                }), u.$formatters.push(function (t) {
                    if (t && !x(t))throw ga("datefmt", "Expected `{0}` to be a date", t);
                    if (h(t)) {
                        if (p = t, p && "UTC" === d) {
                            var e = 6e4 * p.getTimezoneOffset();
                            p = new Date(p.getTime() + e)
                        }
                        return f("date")(t, i, d)
                    }
                    return p = null, ""
                }), g(s.min) || s.ngMin) {
                var v;
                u.$validators.min = function (t) {
                    return !h(t) || m(v) || r(t) >= v
                }, s.$observe("min", function (t) {
                    v = $(t), u.$validate()
                })
            }
            if (g(s.max) || s.ngMax) {
                var y;
                u.$validators.max = function (t) {
                    return !h(t) || m(y) || r(t) <= y
                }, s.$observe("max", function (t) {
                    y = $(t), u.$validate()
                })
            }
        }
    }

    function Pr(t, e, r, i) {
        var o = e[0], a = i.$$hasNativeValidators = y(o.validity);
        a && i.$parsers.push(function (t) {
            var r = e.prop(Wr) || {};
            return r.badInput && !r.typeMismatch ? n : t
        })
    }

    function Rr(t, e, r, i, o, a) {
        if (Pr(t, e, r, i), Vr(t, e, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function (t) {
                return i.$isEmpty(t) ? null : qo.test(t) ? parseFloat(t) : n
            }), i.$formatters.push(function (t) {
                if (!i.$isEmpty(t)) {
                    if (!b(t))throw ga("numfmt", "Expected `{0}` to be a number", t);
                    t = t.toString()
                }
                return t
            }), r.min || r.ngMin) {
            var s;
            i.$validators.min = function (t) {
                return i.$isEmpty(t) || m(s) || t >= s
            }, r.$observe("min", function (t) {
                g(t) && !b(t) && (t = parseFloat(t, 10)), s = b(t) && !isNaN(t) ? t : n, i.$validate()
            })
        }
        if (r.max || r.ngMax) {
            var u;
            i.$validators.max = function (t) {
                return i.$isEmpty(t) || m(u) || u >= t
            }, r.$observe("max", function (t) {
                g(t) && !b(t) && (t = parseFloat(t, 10)), u = b(t) && !isNaN(t) ? t : n, i.$validate()
            })
        }
    }

    function _r(t, e, n, r, i, o) {
        Vr(t, e, n, r, i, o), Tr(r), r.$$parserName = "url", r.$validators.url = function (t, e) {
            var n = t || e;
            return r.$isEmpty(n) || _o.test(n)
        }
    }

    function Ir(t, e, n, r, i, o) {
        Vr(t, e, n, r, i, o), Tr(r), r.$$parserName = "email", r.$validators.email = function (t, e) {
            var n = t || e;
            return r.$isEmpty(n) || Io.test(n)
        }
    }

    function qr(t, e, n, r) {
        m(n.name) && e.attr("name", c());
        var i = function (t) {
            e[0].checked && r.$setViewValue(n.value, t && t.type)
        };
        e.on("click", i), r.$render = function () {
            var t = n.value;
            e[0].checked = t == r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function Ur(t, e, n, i, o) {
        var a;
        if (g(i)) {
            if (a = t(i), !a.constant)throw r("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
            return a(e)
        }
        return o
    }

    function Fr(t, e, n, r, i, o, a, s) {
        var u = Ur(s, t, "ngTrueValue", n.ngTrueValue, !0), c = Ur(s, t, "ngFalseValue", n.ngFalseValue, !1), l = function (t) {
            r.$setViewValue(e[0].checked, t && t.type)
        };
        e.on("click", l), r.$render = function () {
            e[0].checked = r.$viewValue
        }, r.$isEmpty = function (t) {
            return t === !1
        }, r.$formatters.push(function (t) {
            return I(t, u)
        }), r.$parsers.push(function (t) {
            return t ? u : c
        })
    }

    function Hr(t, e) {
        return t = "ngClass" + t, ["$animate", function (n) {
            function r(t, e) {
                var n = [];
                t:for (var r = 0; r < t.length; r++) {
                    for (var i = t[r], o = 0; o < e.length; o++)if (i == e[o])continue t;
                    n.push(i)
                }
                return n
            }

            function i(t) {
                if (li(t))return t;
                if (w(t))return t.split(" ");
                if (y(t)) {
                    var e = [];
                    return o(t, function (t, n) {
                        t && (e = e.concat(n.split(" ")))
                    }), e
                }
                return t
            }

            return {
                restrict: "AC", link: function (a, s, u) {
                    function c(t) {
                        var e = f(t, 1);
                        u.$addClass(e)
                    }

                    function l(t) {
                        var e = f(t, -1);
                        u.$removeClass(e)
                    }

                    function f(t, e) {
                        var n = s.data("$classCounts") || {}, r = [];
                        return o(t, function (t) {
                            (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                        }), s.data("$classCounts", n), r.join(" ")
                    }

                    function h(t, e) {
                        var i = r(e, t), o = r(t, e);
                        i = f(i, 1), o = f(o, -1), i && i.length && n.addClass(s, i), o && o.length && n.removeClass(s, o)
                    }

                    function $(t) {
                        if (e === !0 || a.$index % 2 === e) {
                            var n = i(t || []);
                            if (p) {
                                if (!I(t, p)) {
                                    var r = i(p);
                                    h(r, n)
                                }
                            } else c(n)
                        }
                        p = _(t)
                    }

                    var p;
                    a.$watch(u[t], $, !0), u.$observe("class", function () {
                        $(a.$eval(u[t]))
                    }), "ngClass" !== t && a.$watch("$index", function (n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var s = i(a.$eval(u[t]));
                            o === e ? c(s) : l(s)
                        }
                    })
                }
            }
        }]
    }

    function Lr(t) {
        function e(t, e, u) {
            e === n ? r("$pending", t, u) : i("$pending", t, u), M(e) ? e ? (f(s.$error, t, u), l(s.$$success, t, u)) : (l(s.$error, t, u), f(s.$$success, t, u)) : (f(s.$error, t, u), f(s.$$success, t, u)), s.$pending ? (o(ma, !0), s.$valid = s.$invalid = n, a("", null)) : (o(ma, !1), s.$valid = Br(s.$error), s.$invalid = !s.$valid, a("", s.$valid));
            var c;
            c = s.$pending && s.$pending[t] ? n : s.$error[t] ? !1 : s.$$success[t] ? !0 : null, a(t, c), h.$setValidity(t, c, s)
        }

        function r(t, e, n) {
            s[t] || (s[t] = {}), l(s[t], e, n)
        }

        function i(t, e, r) {
            s[t] && f(s[t], e, r), Br(s[t]) && (s[t] = n)
        }

        function o(t, e) {
            e && !c[t] ? ($.addClass(u, t), c[t] = !0) : !e && c[t] && ($.removeClass(u, t), c[t] = !1)
        }

        function a(t, e) {
            t = t ? "-" + ne(t, "-") : "", o(fa + t, e === !0), o(ha + t, e === !1)
        }

        var s = t.ctrl, u = t.$element, c = {}, l = t.set, f = t.unset, h = t.parentForm, $ = t.$animate;
        c[ha] = !(c[fa] = u.hasClass(fa)), s.$setValidity = e
    }

    function Br(t) {
        if (t)for (var e in t)return !1;
        return !0
    }

    var zr = /^\/(.+)\/([a-z]*)$/, Wr = "validity", Gr = function (t) {
        return w(t) ? t.toLowerCase() : t
    }, Jr = Object.prototype.hasOwnProperty, Yr = function (t) {
        return w(t) ? t.toUpperCase() : t
    }, Zr = function (t) {
        return w(t) ? t.replace(/[A-Z]/g, function (t) {
            return String.fromCharCode(32 | t.charCodeAt(0))
        }) : t
    }, Kr = function (t) {
        return w(t) ? t.replace(/[a-z]/g, function (t) {
            return String.fromCharCode(-33 & t.charCodeAt(0))
        }) : t
    };
    "i" !== "I".toLowerCase() && (Gr = Zr, Yr = Kr);
    var Xr, Qr, ti, ei, ni = [].slice, ri = [].splice, ii = [].push, oi = Object.prototype.toString, ai = r("ng"), si = t.angular || (t.angular = {}), ui = 0;
    Xr = e.documentMode, p.$inject = [], d.$inject = [];
    var ci, li = Array.isArray, fi = function (t) {
        return w(t) ? t.trim() : t
    }, hi = function (t) {
        return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, $i = function () {
        if (g($i.isActive_))return $i.isActive_;
        var t = !(!e.querySelector("[ng-csp]") && !e.querySelector("[data-ng-csp]"));
        if (!t)try {
            new Function("")
        } catch (n) {
            t = !0
        }
        return $i.isActive_ = t
    }, pi = ["ng-", "data-ng-", "ng:", "x-ng-"], di = /[A-Z]/g, vi = !1, mi = 1, gi = 3, yi = 8, wi = 9, bi = 11, xi = {
        full: "1.3.13",
        major: 1,
        minor: 3,
        dot: 13,
        codeName: "meticulous-riffleshuffle"
    };
    we.expando = "ng339";
    var Si = we.cache = {}, Ci = 1, Ai = function (t, e, n) {
        t.addEventListener(e, n, !1)
    }, ki = function (t, e, n) {
        t.removeEventListener(e, n, !1)
    };
    we._data = function (t) {
        return this.cache[t[this.expando]] || {}
    };
    var Ei = /([\:\-\_]+(.))/g, Oi = /^moz([A-Z])/, Ti = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Mi = r("jqLite"), Vi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ni = /<|&#?\w+;/, Di = /<([\w:]+)/, ji = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Pi = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Pi.optgroup = Pi.option, Pi.tbody = Pi.tfoot = Pi.colgroup = Pi.caption = Pi.thead, Pi.th = Pi.td;
    var Ri = we.prototype = {
        ready: function (n) {
            function r() {
                i || (i = !0, n())
            }

            var i = !1;
            "complete" === e.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), we(t).on("load", r))
        }, toString: function () {
            var t = [];
            return o(this, function (e) {
                t.push("" + e)
            }), "[" + t.join(", ") + "]"
        }, eq: function (t) {
            return Qr(t >= 0 ? this[t] : this[this.length + t])
        }, length: 0, push: ii, sort: [].sort, splice: [].splice
    }, _i = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (t) {
        _i[Gr(t)] = t
    });
    var Ii = {};
    o("input,select,option,textarea,button,form,details".split(","), function (t) {
        Ii[t] = !0
    });
    var qi = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    o({data: ke, removeData: Ce}, function (t, e) {
        we[e] = t
    }), o({
        data: ke, inheritedData: Ne, scope: function (t) {
            return Qr.data(t, "$scope") || Ne(t.parentNode || t, ["$isolateScope", "$scope"])
        }, isolateScope: function (t) {
            return Qr.data(t, "$isolateScope") || Qr.data(t, "$isolateScopeNoTemplate")
        }, controller: Ve, injector: function (t) {
            return Ne(t, "$injector")
        }, removeAttr: function (t, e) {
            t.removeAttribute(e)
        }, hasClass: Ee, css: function (t, e, n) {
            return e = de(e), g(n) ? void(t.style[e] = n) : t.style[e]
        }, attr: function (t, e, r) {
            var i = Gr(e);
            if (_i[i]) {
                if (!g(r))return t[e] || (t.attributes.getNamedItem(e) || p).specified ? i : n;
                r ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
            } else if (g(r))t.setAttribute(e, r); else if (t.getAttribute) {
                var o = t.getAttribute(e, 2);
                return null === o ? n : o
            }
        }, prop: function (t, e, n) {
            return g(n) ? void(t[e] = n) : t[e]
        }, text: function () {
            function t(t, e) {
                if (m(e)) {
                    var n = t.nodeType;
                    return n === mi || n === gi ? t.textContent : ""
                }
                t.textContent = e
            }

            return t.$dv = "", t
        }(), val: function (t, e) {
            if (m(e)) {
                if (t.multiple && "select" === j(t)) {
                    var n = [];
                    return o(t.options, function (t) {
                        t.selected && n.push(t.value || t.text)
                    }), 0 === n.length ? null : n
                }
                return t.value
            }
            t.value = e
        }, html: function (t, e) {
            return m(e) ? t.innerHTML : (xe(t, !0), void(t.innerHTML = e))
        }, empty: De
    }, function (t, e) {
        we.prototype[e] = function (e, r) {
            var i, o, a = this.length;
            if (t !== De && (2 == t.length && t !== Ee && t !== Ve ? e : r) === n) {
                if (y(e)) {
                    for (i = 0; a > i; i++)if (t === ke)t(this[i], e); else for (o in e)t(this[i], o, e[o]);
                    return this
                }
                for (var s = t.$dv, u = s === n ? Math.min(a, 1) : a, c = 0; u > c; c++) {
                    var l = t(this[c], e, r);
                    s = s ? s + l : l
                }
                return s
            }
            for (i = 0; a > i; i++)t(this[i], e, r);
            return this
        }
    }), o({
        removeData: Ce, on: function za(t, e, n, r) {
            if (g(r))throw Mi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if (me(t)) {
                var i = Ae(t, !0), o = i.events, a = i.handle;
                a || (a = i.handle = Ie(t, o));
                for (var s = e.indexOf(" ") >= 0 ? e.split(" ") : [e], u = s.length; u--;) {
                    e = s[u];
                    var c = o[e];
                    c || (o[e] = [], "mouseenter" === e || "mouseleave" === e ? za(t, Ti[e], function (t) {
                        var n = this, r = t.relatedTarget;
                        (!r || r !== n && !n.contains(r)) && a(t, e)
                    }) : "$destroy" !== e && Ai(t, e, a), c = o[e]), c.push(n)
                }
            }
        }, off: Se, one: function (t, e, n) {
            t = Qr(t), t.on(e, function r() {
                t.off(e, n), t.off(e, r)
            }), t.on(e, n)
        }, replaceWith: function (t, e) {
            var n, r = t.parentNode;
            xe(t), o(new we(e), function (e) {
                n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
            })
        }, children: function (t) {
            var e = [];
            return o(t.childNodes, function (t) {
                t.nodeType === mi && e.push(t)
            }), e
        }, contents: function (t) {
            return t.contentDocument || t.childNodes || []
        }, append: function (t, e) {
            var n = t.nodeType;
            if (n === mi || n === bi) {
                e = new we(e);
                for (var r = 0, i = e.length; i > r; r++) {
                    var o = e[r];
                    t.appendChild(o)
                }
            }
        }, prepend: function (t, e) {
            if (t.nodeType === mi) {
                var n = t.firstChild;
                o(new we(e), function (e) {
                    t.insertBefore(e, n)
                })
            }
        }, wrap: function (t, e) {
            e = Qr(e).eq(0).clone()[0];
            var n = t.parentNode;
            n && n.replaceChild(e, t), e.appendChild(t)
        }, remove: je, detach: function (t) {
            je(t, !0)
        }, after: function (t, e) {
            var n = t, r = t.parentNode;
            e = new we(e);
            for (var i = 0, o = e.length; o > i; i++) {
                var a = e[i];
                r.insertBefore(a, n.nextSibling), n = a
            }
        }, addClass: Te, removeClass: Oe, toggleClass: function (t, e, n) {
            e && o(e.split(" "), function (e) {
                var r = n;
                m(r) && (r = !Ee(t, e)), (r ? Te : Oe)(t, e)
            })
        }, parent: function (t) {
            var e = t.parentNode;
            return e && e.nodeType !== bi ? e : null
        }, next: function (t) {
            return t.nextElementSibling
        }, find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        }, clone: be, triggerHandler: function (t, e, n) {
            var r, i, a, s = e.type || e, u = Ae(t), c = u && u.events, l = c && c[s];
            l && (r = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return this.defaultPrevented === !0
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return this.immediatePropagationStopped === !0
                }, stopPropagation: p, type: s, target: t
            }, e.type && (r = f(r, e)), i = _(l), a = n ? [r].concat(n) : [r], o(i, function (e) {
                r.isImmediatePropagationStopped() || e.apply(t, a)
            }))
        }
    }, function (t, e) {
        we.prototype[e] = function (e, n, r) {
            for (var i, o = 0, a = this.length; a > o; o++)m(i) ? (i = t(this[o], e, n, r), g(i) && (i = Qr(i))) : Me(i, t(this[o], e, n, r));
            return g(i) ? i : this
        }, we.prototype.bind = we.prototype.on, we.prototype.unbind = we.prototype.off
    }), Fe.prototype = {
        put: function (t, e) {
            this[Ue(t, this.nextUid)] = e
        }, get: function (t) {
            return this[Ue(t, this.nextUid)]
        }, remove: function (t) {
            var e = this[t = Ue(t, this.nextUid)];
            return delete this[t], e
        }
    };
    var Ui = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Fi = /,/, Hi = /^\s*(_?)(\S+?)\1\s*$/, Li = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Bi = r("$injector");
    Be.$$annotate = Le;
    var zi = r("$animate"), Wi = ["$provide", function (t) {
        this.$$selectors = {}, this.register = function (e, n) {
            var r = e + "-animation";
            if (e && "." != e.charAt(0))throw zi("notcsel", "Expecting class selector starting with '.' got '{0}'.", e);
            this.$$selectors[e.substr(1)] = r, t.factory(r, n)
        }, this.classNameFilter = function (t) {
            return 1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null), this.$$classNameFilter
        }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (t, e, n) {
            function r(e) {
                var r, i = t.defer();
                return i.promise.$$cancelFn = function () {
                    r && r()
                }, n.$$postDigest(function () {
                    r = e(function () {
                        i.resolve()
                    })
                }), i.promise
            }

            function i(t, e) {
                var n = [], r = [], i = ce();
                return o((t.attr("class") || "").split(/\s+/), function (t) {
                    i[t] = !0
                }), o(e, function (t, e) {
                    var o = i[e];
                    t === !1 && o ? r.push(e) : t !== !0 || o || n.push(e)
                }), n.length + r.length > 0 && [n.length ? n : null, r.length ? r : null]
            }

            function a(t, e, n) {
                for (var r = 0, i = e.length; i > r; ++r) {
                    var o = e[r];
                    t[o] = n
                }
            }

            function s() {
                return c || (c = t.defer(), e(function () {
                    c.resolve(), c = null
                })), c.promise
            }

            function u(t, e) {
                if (si.isObject(e)) {
                    var n = f(e.from || {}, e.to || {});
                    t.css(n)
                }
            }

            var c;
            return {
                animate: function (t, e, n) {
                    return u(t, {from: e, to: n}), s()
                }, enter: function (t, e, n, r) {
                    return u(t, r), n ? n.after(t) : e.prepend(t), s()
                }, leave: function (t) {
                    return t.remove(), s()
                }, move: function (t, e, n, r) {
                    return this.enter(t, e, n, r)
                }, addClass: function (t, e, n) {
                    return this.setClass(t, e, [], n)
                }, $$addClassImmediately: function (t, e, n) {
                    return t = Qr(t), e = w(e) ? e : li(e) ? e.join(" ") : "", o(t, function (t) {
                        Te(t, e)
                    }), u(t, n), s()
                }, removeClass: function (t, e, n) {
                    return this.setClass(t, [], e, n)
                }, $$removeClassImmediately: function (t, e, n) {
                    return t = Qr(t), e = w(e) ? e : li(e) ? e.join(" ") : "", o(t, function (t) {
                        Oe(t, e)
                    }), u(t, n), s()
                }, setClass: function (t, e, n, o) {
                    var s = this, u = "$$animateClasses", c = !1;
                    t = Qr(t);
                    var l = t.data(u);
                    l ? o && l.options && (l.options = si.extend(l.options || {}, o)) : (l = {
                        classes: {},
                        options: o
                    }, c = !0);
                    var f = l.classes;
                    return e = li(e) ? e : e.split(" "), n = li(n) ? n : n.split(" "), a(f, e, !0), a(f, n, !1), c && (l.promise = r(function (e) {
                        var n = t.data(u);
                        if (t.removeData(u), n) {
                            var r = i(t, n.classes);
                            r && s.$$setClassImmediately(t, r[0], r[1], n.options)
                        }
                        e()
                    }), t.data(u, l)), l.promise
                }, $$setClassImmediately: function (t, e, n, r) {
                    return e && this.$$addClassImmediately(t, e), n && this.$$removeClassImmediately(t, n), u(t, r), s()
                }, enabled: p, cancel: p
            }
        }]
    }], Gi = r("$compile");
    Ke.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Ji = /^((?:x|data)[\:\-_])/i, Yi = r("$controller"), Zi = "application/json", Ki = {"Content-Type": Zi + ";charset=utf-8"}, Xi = /^\[|^\{(?!\{)/, Qi = {
        "[": /]$/,
        "{": /}$/
    }, to = /^\)\]\}',?\n/, eo = r("$interpolate"), no = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, ro = {
        http: 80,
        https: 443,
        ftp: 21
    }, io = r("$location"), oo = {
        $$html5: !1, $$replace: !1, absUrl: Tn("$$absUrl"), url: function (t) {
            if (m(t))return this.$$url;
            var e = no.exec(t);
            return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
        }, protocol: Tn("$$protocol"), host: Tn("$$host"), port: Tn("$$port"), path: Mn("$$path", function (t) {
            return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
        }), search: function (t, e) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (w(t) || b(t))t = t.toString(), this.$$search = G(t); else {
                        if (!y(t))throw io("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        t = R(t, {}), o(t, function (e, n) {
                            null == e && delete t[n]
                        }), this.$$search = t
                    }
                    break;
                default:
                    m(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
            }
            return this.$$compose(), this
        }, hash: Mn("$$hash", function (t) {
            return null !== t ? t.toString() : ""
        }), replace: function () {
            return this.$$replace = !0, this
        }
    };
    o([On, En, kn], function (t) {
        t.prototype = Object.create(oo), t.prototype.state = function (e) {
            if (!arguments.length)return this.$$state;
            if (t !== kn || !this.$$html5)throw io("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = m(e) ? null : e, this
        }
    });
    var ao = r("$parse"), so = Function.prototype.call, uo = Function.prototype.apply, co = Function.prototype.bind, lo = ce();
    o({
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: function () {
        }
    }, function (t, e) {
        t.constant = t.literal = t.sharedGetter = !0, lo[e] = t
    }), lo["this"] = function (t) {
        return t
    }, lo["this"].sharedGetter = !0;
    var fo = f(ce(), {
        "+": function (t, e, r, i) {
            return r = r(t, e), i = i(t, e), g(r) ? g(i) ? r + i : r : g(i) ? i : n
        }, "-": function (t, e, n, r) {
            return n = n(t, e), r = r(t, e), (g(n) ? n : 0) - (g(r) ? r : 0)
        }, "*": function (t, e, n, r) {
            return n(t, e) * r(t, e)
        }, "/": function (t, e, n, r) {
            return n(t, e) / r(t, e)
        }, "%": function (t, e, n, r) {
            return n(t, e) % r(t, e)
        }, "===": function (t, e, n, r) {
            return n(t, e) === r(t, e)
        }, "!==": function (t, e, n, r) {
            return n(t, e) !== r(t, e)
        }, "==": function (t, e, n, r) {
            return n(t, e) == r(t, e)
        }, "!=": function (t, e, n, r) {
            return n(t, e) != r(t, e)
        }, "<": function (t, e, n, r) {
            return n(t, e) < r(t, e)
        }, ">": function (t, e, n, r) {
            return n(t, e) > r(t, e)
        }, "<=": function (t, e, n, r) {
            return n(t, e) <= r(t, e)
        }, ">=": function (t, e, n, r) {
            return n(t, e) >= r(t, e)
        }, "&&": function (t, e, n, r) {
            return n(t, e) && r(t, e)
        }, "||": function (t, e, n, r) {
            return n(t, e) || r(t, e)
        }, "!": function (t, e, n) {
            return !n(t, e)
        }, "=": !0, "|": !0
    }), ho = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, $o = function (t) {
        this.options = t
    };
    $o.prototype = {
        constructor: $o, lex: function (t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var e = this.text.charAt(this.index);
                if ('"' === e || "'" === e)this.readString(e); else if (this.isNumber(e) || "." === e && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(e))this.readIdent(); else if (this.is(e, "(){}[].,;:?"))this.tokens.push({
                    index: this.index,
                    text: e
                }), this.index++; else if (this.isWhitespace(e))this.index++; else {
                    var n = e + this.peek(), r = n + this.peek(2), i = fo[e], o = fo[n], a = fo[r];
                    if (i || o || a) {
                        var s = a ? r : o ? n : e;
                        this.tokens.push({index: this.index, text: s, operator: !0}), this.index += s.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        }, is: function (t, e) {
            return -1 !== e.indexOf(t)
        }, peek: function (t) {
            var e = t || 1;
            return this.index + e < this.text.length ? this.text.charAt(this.index + e) : !1
        }, isNumber: function (t) {
            return t >= "0" && "9" >= t && "string" == typeof t
        }, isWhitespace: function (t) {
            return " " === t || "\r" === t || "	" === t || "\n" === t || "" === t || " " === t
        }, isIdent: function (t) {
            return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
        }, isExpOperator: function (t) {
            return "-" === t || "+" === t || this.isNumber(t)
        }, throwError: function (t, e, n) {
            n = n || this.index;
            var r = g(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n;
            throw ao("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", t, r, this.text)
        }, readNumber: function () {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Gr(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n))t += n; else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r))t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == t.charAt(t.length - 1))t += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != t.charAt(t.length - 1))break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: e, text: t, constant: !0, value: Number(t)})
        }, readIdent: function () {
            for (var t = this.index; this.index < this.text.length;) {
                var e = this.text.charAt(this.index);
                if (!this.isIdent(e) && !this.isNumber(e))break;
                this.index++
            }
            this.tokens.push({index: t, text: this.text.slice(t, this.index), identifier: !0})
        }, readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (r += o, i) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var s = ho[o];
                        n += s || o
                    }
                    i = !1
                } else if ("\\" === o)i = !0; else {
                    if (o === t)return this.index++, void this.tokens.push({index: e, text: r, constant: !0, value: n});
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var po = function (t, e, n) {
        this.lexer = t, this.$filter = e, this.options = n
    };
    po.ZERO = f(function () {
        return 0
    }, {sharedGetter: !0, constant: !0}), po.prototype = {
        constructor: po, parse: function (t) {
            this.text = t, this.tokens = this.lexer.lex(t);
            var e = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), e.literal = !!e.literal, e.constant = !!e.constant, e
        }, primary: function () {
            var t;
            this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.peek().identifier && this.peek().text in lo ? t = lo[this.consume().text] : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var e, n; e = this.expect("(", "[", ".");)"(" === e.text ? (t = this.functionCall(t, n), n = null) : "[" === e.text ? (n = t, t = this.objectIndex(t)) : "." === e.text ? (n = t, t = this.fieldAccess(t)) : this.throwError("IMPOSSIBLE");
            return t
        }, throwError: function (t, e) {
            throw ao("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        }, peekToken: function () {
            if (0 === this.tokens.length)throw ao("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        }, peek: function (t, e, n, r) {
            return this.peekAhead(0, t, e, n, r)
        }, peekAhead: function (t, e, n, r, i) {
            if (this.tokens.length > t) {
                var o = this.tokens[t], a = o.text;
                if (a === e || a === n || a === r || a === i || !e && !n && !r && !i)return o
            }
            return !1
        }, expect: function (t, e, n, r) {
            var i = this.peek(t, e, n, r);
            return i ? (this.tokens.shift(), i) : !1
        }, consume: function (t) {
            if (0 === this.tokens.length)throw ao("ueoe", "Unexpected end of expression: {0}", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        }, unaryFn: function (t, e) {
            var n = fo[t];
            return f(function (t, r) {
                return n(t, r, e)
            }, {constant: e.constant, inputs: [e]})
        }, binaryFn: function (t, e, n, r) {
            var i = fo[e];
            return f(function (e, r) {
                return i(e, r, t, n)
            }, {constant: t.constant && n.constant, inputs: !r && [t, n]})
        }, identifier: function () {
            for (var t = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)t += this.consume().text + this.consume().text;
            return Fn(t, this.options, this.text)
        }, constant: function () {
            var t = this.consume().value;
            return f(function () {
                return t
            }, {constant: !0, literal: !0})
        }, statements: function () {
            for (var t = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && t.push(this.filterChain()), !this.expect(";"))return 1 === t.length ? t[0] : function (e, n) {
                for (var r, i = 0, o = t.length; o > i; i++)r = t[i](e, n);
                return r
            }
        }, filterChain: function () {
            for (var t, e = this.expression(); t = this.expect("|");)e = this.filter(e);
            return e
        }, filter: function (t) {
            var e, r, i = this.$filter(this.consume().text);
            if (this.peek(":"))for (e = [], r = []; this.expect(":");)e.push(this.expression());
            var o = [t].concat(e || []);
            return f(function (o, a) {
                var s = t(o, a);
                if (r) {
                    r[0] = s;
                    for (var u = e.length; u--;)r[u + 1] = e[u](o, a);
                    return i.apply(n, r)
                }
                return i(s)
            }, {constant: !i.$stateful && o.every(Rn), inputs: !i.$stateful && o})
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var t, e, n = this.ternary();
            return (e = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), t = this.ternary(), f(function (e, r) {
                return n.assign(e, t(e, r), r)
            }, {inputs: [n, t]})) : n
        }, ternary: function () {
            var t, e, n = this.logicalOR();
            if ((e = this.expect("?")) && (t = this.assignment(), this.consume(":"))) {
                var r = this.assignment();
                return f(function (e, i) {
                    return n(e, i) ? t(e, i) : r(e, i)
                }, {constant: n.constant && t.constant && r.constant})
            }
            return n
        }, logicalOR: function () {
            for (var t, e = this.logicalAND(); t = this.expect("||");)e = this.binaryFn(e, t.text, this.logicalAND(), !0);
            return e
        }, logicalAND: function () {
            for (var t, e = this.equality(); t = this.expect("&&");)e = this.binaryFn(e, t.text, this.equality(), !0);
            return e
        }, equality: function () {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");)e = this.binaryFn(e, t.text, this.relational());
            return e
        }, relational: function () {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");)e = this.binaryFn(e, t.text, this.additive());
            return e
        }, additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");)e = this.binaryFn(e, t.text, this.multiplicative());
            return e
        }, multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");)e = this.binaryFn(e, t.text, this.unary());
            return e
        }, unary: function () {
            var t;
            return this.expect("+") ? this.primary() : (t = this.expect("-")) ? this.binaryFn(po.ZERO, t.text, this.unary()) : (t = this.expect("!")) ? this.unaryFn(t.text, this.unary()) : this.primary()
        }, fieldAccess: function (t) {
            var e = this.identifier();
            return f(function (r, i, o) {
                var a = o || t(r, i);
                return null == a ? n : e(a)
            }, {
                assign: function (n, r, i) {
                    var o = t(n, i);
                    return o || t.assign(n, o = {}, i), e.assign(o, r)
                }
            })
        }, objectIndex: function (t) {
            var e = this.text, r = this.expression();
            return this.consume("]"), f(function (i, o) {
                var a, s = t(i, o), u = r(i, o);
                return Dn(u, e), s ? a = jn(s[u], e) : n
            }, {
                assign: function (n, i, o) {
                    var a = Dn(r(n, o), e), s = jn(t(n, o), e);
                    return s || t.assign(n, s = {}, o), s[a] = i
                }
            })
        }, functionCall: function (t, e) {
            var r = [];
            if (")" !== this.peekToken().text)do r.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var i = this.text, o = r.length ? [] : null;
            return function (a, s) {
                var u = e ? e(a, s) : g(e) ? n : a, c = t(a, s, u) || p;
                if (o)for (var l = r.length; l--;)o[l] = jn(r[l](a, s), i);
                jn(u, i), Pn(c, i);
                var f = c.apply ? c.apply(u, o) : c(o[0], o[1], o[2], o[3], o[4]);
                return o && (o.length = 0), jn(f, i)
            }
        }, arrayDeclaration: function () {
            var t = [];
            if ("]" !== this.peekToken().text)do {
                if (this.peek("]"))break;
                t.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), f(function (e, n) {
                for (var r = [], i = 0, o = t.length; o > i; i++)r.push(t[i](e, n));
                return r
            }, {literal: !0, constant: t.every(Rn), inputs: t})
        }, object: function () {
            var t = [], e = [];
            if ("}" !== this.peekToken().text)do {
                if (this.peek("}"))break;
                var n = this.consume();
                n.constant ? t.push(n.value) : n.identifier ? t.push(n.text) : this.throwError("invalid key", n), this.consume(":"), e.push(this.expression())
            } while (this.expect(","));
            return this.consume("}"), f(function (n, r) {
                for (var i = {}, o = 0, a = e.length; a > o; o++)i[t[o]] = e[o](n, r);
                return i
            }, {literal: !0, constant: e.every(Rn), inputs: e})
        }
    };
    var vo = ce(), mo = ce(), go = Object.prototype.valueOf, yo = r("$sce"), wo = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Gi = r("$compile"), bo = e.createElement("a"), xo = ir(t.location.href);
    sr.$inject = ["$provide"], fr.$inject = ["$locale"], hr.$inject = ["$locale"];
    var So = ".", Co = {
        yyyy: dr("FullYear", 4),
        yy: dr("FullYear", 2, 0, !0),
        y: dr("FullYear", 1),
        MMMM: vr("Month"),
        MMM: vr("Month", !0),
        MM: dr("Month", 2, 1),
        M: dr("Month", 1, 1),
        dd: dr("Date", 2),
        d: dr("Date", 1),
        HH: dr("Hours", 2),
        H: dr("Hours", 1),
        hh: dr("Hours", 2, -12),
        h: dr("Hours", 1, -12),
        mm: dr("Minutes", 2),
        m: dr("Minutes", 1),
        ss: dr("Seconds", 2),
        s: dr("Seconds", 1),
        sss: dr("Milliseconds", 3),
        EEEE: vr("Day"),
        EEE: vr("Day", !0),
        a: br,
        Z: mr,
        ww: wr(2),
        w: wr(1)
    }, Ao = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, ko = /^\-?\d+$/;
    xr.$inject = ["$locale"];
    var Eo = v(Gr), Oo = v(Yr);
    Ar.$inject = ["$parse"];
    var To = v({
        restrict: "E", compile: function (t, e) {
            return e.href || e.xlinkHref || e.name ? void 0 : function (t, e) {
                if ("a" === e[0].nodeName.toLowerCase()) {
                    var n = "[object SVGAnimatedString]" === oi.call(e.prop("href")) ? "xlink:href" : "href";
                    e.on("click", function (t) {
                        e.attr(n) || t.preventDefault()
                    })
                }
            }
        }
    }), Mo = {};
    o(_i, function (t, e) {
        if ("multiple" != t) {
            var n = Xe("ng-" + e);
            Mo[n] = function () {
                return {
                    restrict: "A", priority: 100, link: function (t, r, i) {
                        t.$watch(i[n], function (t) {
                            i.$set(e, !!t)
                        })
                    }
                }
            }
        }
    }), o(qi, function (t, e) {
        Mo[e] = function () {
            return {
                priority: 100, link: function (t, n, r) {
                    if ("ngPattern" === e && "/" == r.ngPattern.charAt(0)) {
                        var i = r.ngPattern.match(zr);
                        if (i)return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                    }
                    t.$watch(r[e], function (t) {
                        r.$set(e, t)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function (t) {
        var e = Xe("ng-" + t);
        Mo[e] = function () {
            return {
                priority: 99, link: function (n, r, i) {
                    var o = t, a = t;
                    "href" === t && "[object SVGAnimatedString]" === oi.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(e, function (e) {
                        return e ? (i.$set(a, e), void(Xr && o && r.prop(o, i[a]))) : void("href" === t && i.$set(a, null))
                    })
                }
            }
        }
    });
    var Vo = {
        $addControl: p,
        $$renameControl: Er,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
    }, No = "ng-submitted";
    Or.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Do = function (t) {
        return ["$timeout", function (e) {
            var r = {
                name: "form", restrict: t ? "EAC" : "E", controller: Or, compile: function (t) {
                    return t.addClass($a).addClass(fa), {
                        pre: function (t, r, i, o) {
                            if (!("action"in i)) {
                                var a = function (e) {
                                    t.$apply(function () {
                                        o.$commitViewValue(), o.$setSubmitted()
                                    }), e.preventDefault()
                                };
                                Ai(r[0], "submit", a), r.on("$destroy", function () {
                                    e(function () {
                                        ki(r[0], "submit", a)
                                    }, 0, !1)
                                })
                            }
                            var s = o.$$parentForm, u = o.$name;
                            u && (_n(t, null, u, o, u), i.$observe(i.name ? "name" : "ngForm", function (e) {
                                u !== e && (_n(t, null, u, n, u), u = e, _n(t, null, u, o, u), s.$$renameControl(o, u))
                            })), r.on("$destroy", function () {
                                s.$removeControl(o), u && _n(t, null, u, n, u), f(o, Vo)
                            })
                        }
                    }
                }
            };
            return r
        }]
    }, jo = Do(), Po = Do(!0), Ro = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, _o = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Io = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, qo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Uo = /^(\d{4})-(\d{2})-(\d{2})$/, Fo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Ho = /^(\d{4})-W(\d\d)$/, Lo = /^(\d{4})-(\d\d)$/, Bo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, zo = {
        text: Mr,
        date: jr("date", Uo, Dr(Uo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": jr("datetimelocal", Fo, Dr(Fo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: jr("time", Bo, Dr(Bo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: jr("week", Ho, Nr, "yyyy-Www"),
        month: jr("month", Lo, Dr(Lo, ["yyyy", "MM"]), "yyyy-MM"),
        number: Rr,
        url: _r,
        email: Ir,
        radio: qr,
        checkbox: Fr,
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
    }, Wo = ["$browser", "$sniffer", "$filter", "$parse", function (t, e, n, r) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (i, o, a, s) {
                    s[0] && (zo[Gr(a.type)] || zo.text)(i, o, a, s[0], e, t, n, r)
                }
            }
        }
    }], Go = /^(true|false|\d+)$/, Jo = function () {
        return {
            restrict: "A", priority: 100, compile: function (t, e) {
                return Go.test(e.ngValue) ? function (t, e, n) {
                    n.$set("value", t.$eval(n.ngValue))
                } : function (t, e, n) {
                    t.$watch(n.ngValue, function (t) {
                        n.$set("value", t)
                    })
                }
            }
        }
    }, Yo = ["$compile", function (t) {
        return {
            restrict: "AC", compile: function (e) {
                return t.$$addBindingClass(e), function (e, r, i) {
                    t.$$addBindingInfo(r, i.ngBind), r = r[0], e.$watch(i.ngBind, function (t) {
                        r.textContent = t === n ? "" : t
                    })
                }
            }
        }
    }], Zo = ["$interpolate", "$compile", function (t, e) {
        return {
            compile: function (r) {
                return e.$$addBindingClass(r), function (r, i, o) {
                    var a = t(i.attr(o.$attr.ngBindTemplate));
                    e.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function (t) {
                        i.textContent = t === n ? "" : t
                    })
                }
            }
        }
    }], Ko = ["$sce", "$parse", "$compile", function (t, e, n) {
        return {
            restrict: "A", compile: function (r, i) {
                var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function (t) {
                    return (t || "").toString()
                });
                return n.$$addBindingClass(r), function (e, r, i) {
                    n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function () {
                        r.html(t.getTrustedHtml(o(e)) || "")
                    })
                }
            }
        }
    }], Xo = v({
        restrict: "A", require: "ngModel", link: function (t, e, n, r) {
            r.$viewChangeListeners.push(function () {
                t.$eval(n.ngChange)
            })
        }
    }), Qo = Hr("", !0), ta = Hr("Odd", 0), ea = Hr("Even", 1), na = kr({
        compile: function (t, e) {
            e.$set("ngCloak", n), t.removeClass("ng-cloak")
        }
    }), ra = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], ia = {}, oa = {blur: !0, focus: !0};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
        var e = Xe("ng-" + t);
        ia[e] = ["$parse", "$rootScope", function (n, r) {
            return {
                restrict: "A", compile: function (i, o) {
                    var a = n(o[e], null, !0);
                    return function (e, n) {
                        n.on(t, function (n) {
                            var i = function () {
                                a(e, {$event: n})
                            };
                            oa[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var aa = ["$animate", function (t) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, r, i, o, a) {
                var s, u, c;
                n.$watch(i.ngIf, function (n) {
                    n ? u || a(function (n, o) {
                        u = o, n[n.length++] = e.createComment(" end ngIf: " + i.ngIf + " "), s = {clone: n}, t.enter(n, r.parent(), r)
                    }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = ue(s.clone), t.leave(c).then(function () {
                        c = null
                    }), s = null))
                })
            }
        }
    }], sa = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (t, e, n, r) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: si.noop,
            compile: function (i, o) {
                var a = o.ngInclude || o.src, s = o.onload || "", u = o.autoscroll;
                return function (i, o, c, l, f) {
                    var h, $, p, d = 0, v = function () {
                        $ && ($.remove(), $ = null), h && (h.$destroy(), h = null), p && (n.leave(p).then(function () {
                            $ = null
                        }), $ = p, p = null)
                    };
                    i.$watch(r.parseAsResourceUrl(a), function (r) {
                        var a = function () {
                            !g(u) || u && !i.$eval(u) || e()
                        }, c = ++d;
                        r ? (t(r, !0).then(function (t) {
                            if (c === d) {
                                var e = i.$new();
                                l.template = t;
                                var u = f(e, function (t) {
                                    v(), n.enter(t, null, o).then(a)
                                });
                                h = e, p = u, h.$emit("$includeContentLoaded", r), i.$eval(s)
                            }
                        }, function () {
                            c === d && (v(), i.$emit("$includeContentError", r))
                        }), i.$emit("$includeContentRequested", r)) : (v(), l.template = null)
                    })
                }
            }
        }
    }], ua = ["$compile", function (t) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, o) {
                return /SVG/.test(r[0].toString()) ? (r.empty(), void t(ge(o.template, e).childNodes)(n, function (t) {
                    r.append(t)
                }, {futureParentElement: r})) : (r.html(o.template), void t(r.contents())(n))
            }
        }
    }], ca = kr({
        priority: 450, compile: function () {
            return {
                pre: function (t, e, n) {
                    t.$eval(n.ngInit)
                }
            }
        }
    }), la = function () {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function (t, e, r, i) {
                var a = e.attr(r.$attr.ngList) || ", ", s = "false" !== r.ngTrim, u = s ? fi(a) : a, c = function (t) {
                    if (!m(t)) {
                        var e = [];
                        return t && o(t.split(u), function (t) {
                            t && e.push(s ? fi(t) : t)
                        }), e
                    }
                };
                i.$parsers.push(c), i.$formatters.push(function (t) {
                    return li(t) ? t.join(a) : n
                }), i.$isEmpty = function (t) {
                    return !t || !t.length
                }
            }
        }
    }, fa = "ng-valid", ha = "ng-invalid", $a = "ng-pristine", pa = "ng-dirty", da = "ng-untouched", va = "ng-touched", ma = "ng-pending", ga = new r("ngModel"), ya = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (t, e, r, i, a, s, u, c, l, f) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = f(r.name || "", !1)(t);
        var h = a(r.ngModel), $ = h.assign, d = h, v = $, y = null, w = this;
        this.$$setOptions = function (t) {
            if (w.$options = t, t && t.getterSetter) {
                var e = a(r.ngModel + "()"), n = a(r.ngModel + "($$$p)");
                d = function (t) {
                    var n = h(t);
                    return S(n) && (n = e(t)), n
                }, v = function (t) {
                    S(h(t)) ? n(t, {$$$p: w.$modelValue}) : $(t, w.$modelValue)
                }
            } else if (!h.assign)throw ga("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, z(i))
        }, this.$render = p, this.$isEmpty = function (t) {
            return m(t) || "" === t || null === t || t !== t
        };
        var x = i.inheritedData("$formController") || Vo, C = 0;
        Lr({
            ctrl: this, $element: i, set: function (t, e) {
                t[e] = !0
            }, unset: function (t, e) {
                delete t[e]
            }, parentForm: x, $animate: s
        }), this.$setPristine = function () {
            w.$dirty = !1, w.$pristine = !0, s.removeClass(i, pa), s.addClass(i, $a)
        }, this.$setDirty = function () {
            w.$dirty = !0, w.$pristine = !1, s.removeClass(i, $a), s.addClass(i, pa), x.$setDirty()
        }, this.$setUntouched = function () {
            w.$touched = !1, w.$untouched = !0, s.setClass(i, da, va)
        }, this.$setTouched = function () {
            w.$touched = !0, w.$untouched = !1, s.setClass(i, va, da)
        }, this.$rollbackViewValue = function () {
            u.cancel(y), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
        }, this.$validate = function () {
            if (!b(w.$modelValue) || !isNaN(w.$modelValue)) {
                var t = w.$$lastCommittedViewValue, e = w.$$rawModelValue, r = w.$$parserName || "parse", i = w.$error[r] ? !1 : n, o = w.$valid, a = w.$modelValue, s = w.$options && w.$options.allowInvalid;
                w.$$runValidators(i, e, t, function (t) {
                    s || o === t || (w.$modelValue = t ? e : n, w.$modelValue !== a && w.$$writeModelToScope())
                })
            }
        }, this.$$runValidators = function (t, e, r, i) {
            function a(t) {
                var e = w.$$parserName || "parse";
                if (t === n)c(e, null); else if (c(e, t), !t)return o(w.$validators, function (t, e) {
                    c(e, null)
                }), o(w.$asyncValidators, function (t, e) {
                    c(e, null)
                }), !1;
                return !0
            }

            function s() {
                var t = !0;
                return o(w.$validators, function (n, i) {
                    var o = n(e, r);
                    t = t && o, c(i, o)
                }), t ? !0 : (o(w.$asyncValidators, function (t, e) {
                    c(e, null)
                }), !1)
            }

            function u() {
                var t = [], i = !0;
                o(w.$asyncValidators, function (o, a) {
                    var s = o(e, r);
                    if (!V(s))throw ga("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", s);
                    c(a, n), t.push(s.then(function () {
                        c(a, !0)
                    }, function () {
                        i = !1, c(a, !1)
                    }))
                }), t.length ? l.all(t).then(function () {
                    f(i)
                }, p) : f(!0)
            }

            function c(t, e) {
                h === C && w.$setValidity(t, e)
            }

            function f(t) {
                h === C && i(t)
            }

            C++;
            var h = C;
            return a(t) && s() ? void u() : void f(!1)
        }, this.$commitViewValue = function () {
            var t = w.$viewValue;
            u.cancel(y), (w.$$lastCommittedViewValue !== t || "" === t && w.$$hasNativeValidators) && (w.$$lastCommittedViewValue = t, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function () {
            function e() {
                w.$modelValue !== s && w.$$writeModelToScope()
            }

            var r = w.$$lastCommittedViewValue, i = r, o = m(i) ? n : !0;
            if (o)for (var a = 0; a < w.$parsers.length; a++)if (i = w.$parsers[a](i), m(i)) {
                o = !1;
                break
            }
            b(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = d(t));
            var s = w.$modelValue, u = w.$options && w.$options.allowInvalid;
            w.$$rawModelValue = i, u && (w.$modelValue = i, e()), w.$$runValidators(o, i, w.$$lastCommittedViewValue, function (t) {
                u || (w.$modelValue = t ? i : n, e())
            })
        }, this.$$writeModelToScope = function () {
            v(t, w.$modelValue), o(w.$viewChangeListeners, function (t) {
                try {
                    t()
                } catch (n) {
                    e(n)
                }
            })
        }, this.$setViewValue = function (t, e) {
            w.$viewValue = t, (!w.$options || w.$options.updateOnDefault) && w.$$debounceViewValueCommit(e)
        }, this.$$debounceViewValueCommit = function (e) {
            var n, r = 0, i = w.$options;
            i && g(i.debounce) && (n = i.debounce, b(n) ? r = n : b(n[e]) ? r = n[e] : b(n["default"]) && (r = n["default"])), u.cancel(y), r ? y = u(function () {
                w.$commitViewValue()
            }, r) : c.$$phase ? w.$commitViewValue() : t.$apply(function () {
                w.$commitViewValue()
            })
        }, t.$watch(function () {
            var e = d(t);
            if (e !== w.$modelValue) {
                w.$modelValue = w.$$rawModelValue = e;
                for (var r = w.$formatters, i = r.length, o = e; i--;)o = r[i](o);
                w.$viewValue !== o && (w.$viewValue = w.$$lastCommittedViewValue = o, w.$render(), w.$$runValidators(n, e, o, p))
            }
            return e
        })
    }], wa = ["$rootScope", function (t) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: ya,
            priority: 1,
            compile: function (e) {
                return e.addClass($a).addClass(da).addClass(fa), {
                    pre: function (t, e, n, r) {
                        var i = r[0], o = r[1] || Vo;
                        i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function (t) {
                            i.$name !== t && o.$$renameControl(i, t)
                        }), t.$on("$destroy", function () {
                            o.$removeControl(i)
                        })
                    }, post: function (e, n, r, i) {
                        var o = i[0];
                        o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (t) {
                            o.$$debounceViewValueCommit(t && t.type)
                        }), n.on("blur", function () {
                            o.$touched || (t.$$phase ? e.$evalAsync(o.$setTouched) : e.$apply(o.$setTouched))
                        })
                    }
                }
            }
        }
    }], ba = /(\s+|^)default(\s+|$)/, xa = function () {
        return {
            restrict: "A", controller: ["$scope", "$attrs", function (t, e) {
                var r = this;
                this.$options = t.$eval(e.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = fi(this.$options.updateOn.replace(ba, function () {
                    return r.$options.updateOnDefault = !0, " "
                }))) : this.$options.updateOnDefault = !0
            }]
        }
    }, Sa = kr({terminal: !0, priority: 1e3}), Ca = ["$locale", "$interpolate", function (t, e) {
        var n = /{}/g, r = /^when(Minus)?(.+)$/;
        return {
            restrict: "EA", link: function (i, a, s) {
                function u(t) {
                    a.text(t || "")
                }

                var c, l = s.count, f = s.$attr.when && a.attr(s.$attr.when), h = s.offset || 0, $ = i.$eval(f) || {}, p = {}, d = e.startSymbol(), v = e.endSymbol(), m = d + l + "-" + h + v, g = si.noop;
                o(s, function (t, e) {
                    var n = r.exec(e);
                    if (n) {
                        var i = (n[1] ? "-" : "") + Gr(n[2]);
                        $[i] = a.attr(s.$attr[e])
                    }
                }), o($, function (t, r) {
                    p[r] = e(t.replace(n, m))
                }), i.$watch(l, function (e) {
                    var n = parseFloat(e), r = isNaN(n);
                    r || n in $ || (n = t.pluralCat(n - h)), n === c || r && isNaN(c) || (g(), g = i.$watch(p[n], u), c = n)
                })
            }
        }
    }], Aa = ["$parse", "$animate", function (t, a) {
        var s = "$$NG_REMOVED", u = r("ngRepeat"), c = function (t, e, n, r, i, o, a) {
            t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
        }, l = function (t) {
            return t.clone[0]
        }, f = function (t) {
            return t.clone[t.clone.length - 1]
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function (r, h) {
                var $ = h.ngRepeat, p = e.createComment(" end ngRepeat: " + $ + " "), d = $.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!d)throw u("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", $);
                var v = d[1], m = d[2], g = d[3], y = d[4];
                if (d = v.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !d)throw u("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
                var w = d[3] || d[1], b = d[2];
                if (g && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g)))throw u("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", g);
                var x, S, C, A, k = {$id: Ue};
                return y ? x = t(y) : (C = function (t, e) {
                    return Ue(e)
                }, A = function (t) {
                    return t
                }), function (t, e, r, h, d) {
                    x && (S = function (e, n, r) {
                        return b && (k[b] = e), k[w] = n, k.$index = r, x(t, k)
                    });
                    var v = ce();
                    t.$watchCollection(m, function (r) {
                        var h, m, y, x, k, E, O, T, M, V, N, D, j = e[0], P = ce();
                        if (g && (t[g] = r), i(r))M = r, T = S || C; else {
                            T = S || A, M = [];
                            for (var R in r)r.hasOwnProperty(R) && "$" != R.charAt(0) && M.push(R);
                            M.sort()
                        }
                        for (x = M.length, N = new Array(x), h = 0; x > h; h++)if (k = r === M ? h : M[h], E = r[k], O = T(k, E, h), v[O])V = v[O], delete v[O], P[O] = V, N[h] = V; else {
                            if (P[O])throw o(N, function (t) {
                                t && t.scope && (v[t.id] = t)
                            }), u("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", $, O, E);
                            N[h] = {id: O, scope: n, clone: n}, P[O] = !0
                        }
                        for (var _ in v) {
                            if (V = v[_], D = ue(V.clone), a.leave(D), D[0].parentNode)for (h = 0, m = D.length; m > h; h++)D[h][s] = !0;
                            V.scope.$destroy()
                        }
                        for (h = 0; x > h; h++)if (k = r === M ? h : M[h], E = r[k], V = N[h], V.scope) {
                            y = j;
                            do y = y.nextSibling; while (y && y[s]);
                            l(V) != y && a.move(ue(V.clone), null, Qr(j)), j = f(V), c(V.scope, h, w, E, b, k, x)
                        } else d(function (t, e) {
                            V.scope = e;
                            var n = p.cloneNode(!1);
                            t[t.length++] = n, a.enter(t, null, Qr(j)), j = n, V.clone = t, P[V.id] = V, c(V.scope, h, w, E, b, k, x)
                        });
                        v = P
                    })
                }
            }
        }
    }], ka = "ng-hide", Ea = "ng-hide-animate", Oa = ["$animate", function (t) {
        return {
            restrict: "A", multiElement: !0, link: function (e, n, r) {
                e.$watch(r.ngShow, function (e) {
                    t[e ? "removeClass" : "addClass"](n, ka, {tempClasses: Ea})
                })
            }
        }
    }], Ta = ["$animate", function (t) {
        return {
            restrict: "A", multiElement: !0, link: function (e, n, r) {
                e.$watch(r.ngHide, function (e) {
                    t[e ? "addClass" : "removeClass"](n, ka, {tempClasses: Ea})
                })
            }
        }
    }], Ma = kr(function (t, e, n) {
        t.$watchCollection(n.ngStyle, function (t, n) {
            n && t !== n && o(n, function (t, n) {
                e.css(n, "")
            }), t && e.css(t)
        })
    }), Va = ["$animate", function (t) {
        return {
            restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (n, r, i, a) {
                var s = i.ngSwitch || i.on, u = [], c = [], l = [], f = [], h = function (t, e) {
                    return function () {
                        t.splice(e, 1)
                    }
                };
                n.$watch(s, function (n) {
                    var r, i;
                    for (r = 0, i = l.length; i > r; ++r)t.cancel(l[r]);
                    for (l.length = 0, r = 0, i = f.length; i > r; ++r) {
                        var s = ue(c[r].clone);
                        f[r].$destroy();
                        var $ = l[r] = t.leave(s);
                        $.then(h(l, r))
                    }
                    c.length = 0, f.length = 0, (u = a.cases["!" + n] || a.cases["?"]) && o(u, function (n) {
                        n.transclude(function (r, i) {
                            f.push(i);
                            var o = n.element;
                            r[r.length++] = e.createComment(" end ngSwitchWhen: ");
                            var a = {clone: r};
                            c.push(a), t.enter(r, o.parent(), o)
                        })
                    })
                })
            }
        }
    }], Na = kr({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (t, e, n, r, i) {
            r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                transclude: i,
                element: e
            })
        }
    }), Da = kr({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (t, e, n, r, i) {
            r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: e})
        }
    }), ja = kr({
        restrict: "EAC", link: function (t, e, n, i, o) {
            if (!o)throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", z(e));
            o(function (t) {
                e.empty(), e.append(t)
            })
        }
    }), Pa = ["$templateCache", function (t) {
        return {
            restrict: "E", terminal: !0, compile: function (e, n) {
                if ("text/ng-template" == n.type) {
                    var r = n.id, i = e[0].text;
                    t.put(r, i)
                }
            }
        }
    }], Ra = r("ngOptions"), _a = v({restrict: "A", terminal: !0}), Ia = ["$compile", "$parse", function (t, r) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, s = {$setViewValue: p};
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function (t, e, n) {
                var r, i, o = this, a = {}, u = s;
                o.databound = n.ngModel, o.init = function (t, e, n) {
                    u = t, r = e, i = n
                }, o.addOption = function (e, n) {
                    ae(e, '"option value"'), a[e] = !0, u.$viewValue == e && (t.val(e), i.parent() && i.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
                }, o.removeOption = function (t) {
                    this.hasOption(t) && (delete a[t], u.$viewValue === t && this.renderUnknownOption(t))
                }, o.renderUnknownOption = function (e) {
                    var n = "? " + Ue(e) + " ?";
                    i.val(n), t.prepend(i), t.val(n), i.prop("selected", !0)
                }, o.hasOption = function (t) {
                    return a.hasOwnProperty(t)
                }, e.$on("$destroy", function () {
                    o.renderUnknownOption = p
                })
            }],
            link: function (s, u, c, l) {
                function f(t, e, n, r) {
                    n.$render = function () {
                        var t = n.$viewValue;
                        r.hasOption(t) ? (A.parent() && A.remove(), e.val(t), "" === t && p.prop("selected", !0)) : m(t) && p ? e.val("") : r.renderUnknownOption(t)
                    }, e.on("change", function () {
                        t.$apply(function () {
                            A.parent() && A.remove(), n.$setViewValue(e.val())
                        })
                    })
                }

                function h(t, e, n) {
                    var r;
                    n.$render = function () {
                        var t = new Fe(n.$viewValue);
                        o(e.find("option"), function (e) {
                            e.selected = g(t.get(e.value))
                        })
                    }, t.$watch(function () {
                        I(r, n.$viewValue) || (r = _(n.$viewValue), n.$render())
                    }), e.on("change", function () {
                        t.$apply(function () {
                            var t = [];
                            o(e.find("option"), function (e) {
                                e.selected && t.push(e.value)
                            }), n.$setViewValue(t)
                        })
                    })
                }

                function $(e, s, u) {
                    function c(t, n, r) {
                        return I[E] = r, M && (I[M] = n), t(e, I)
                    }

                    function l() {
                        e.$apply(function () {
                            var t, n = D(e) || [];
                            if (y)t = [], o(s.val(), function (e) {
                                e = P ? R[e] : e, t.push(f(e, n[e]))
                            }); else {
                                var r = P ? R[s.val()] : s.val();
                                t = f(r, n[r])
                            }
                            u.$setViewValue(t), m()
                        })
                    }

                    function f(t, e) {
                        if ("?" === t)return n;
                        if ("" === t)return null;
                        var r = T ? T : N;
                        return c(r, t, e)
                    }

                    function h() {
                        var t, n = D(e);
                        if (n && li(n)) {
                            t = new Array(n.length);
                            for (var r = 0, i = n.length; i > r; r++)t[r] = c(k, r, n[r]);
                            return t
                        }
                        if (n) {
                            t = {};
                            for (var o in n)n.hasOwnProperty(o) && (t[o] = c(k, o, n[o]))
                        }
                        return t
                    }

                    function $(t) {
                        var e;
                        if (y)if (P && li(t)) {
                            e = new Fe([]);
                            for (var n = 0; n < t.length; n++)e.put(c(P, null, t[n]), !0)
                        } else e = new Fe(t); else P && (t = c(P, null, t));
                        return function (n, r) {
                            var i;
                            return i = P ? P : T ? T : N, y ? g(e.remove(c(i, n, r))) : t === c(i, n, r)
                        }
                    }

                    function p() {
                        x || (e.$$postDigest(m), x = !0)
                    }

                    function v(t, e, n) {
                        t[e] = t[e] || 0, t[e] += n ? 1 : -1
                    }

                    function m() {
                        x = !1;
                        var t, n, r, i, l, f, h, p, m, w, A, E, O, T, N, j, q, U = {"": []}, F = [""], H = u.$viewValue, L = D(e) || [], B = M ? a(L) : L, z = {}, W = $(H), G = !1;
                        for (R = {}, E = 0; w = B.length, w > E; E++)h = E, M && (h = B[E], "$" === h.charAt(0)) || (p = L[h], t = c(V, h, p) || "", (n = U[t]) || (n = U[t] = [], F.push(t)), O = W(h, p), G = G || O, j = c(k, h, p), j = g(j) ? j : "", q = P ? P(e, I) : M ? B[E] : E, P && (R[q] = h), n.push({
                            id: q,
                            label: j,
                            selected: O
                        }));
                        for (y || (b || null === H ? U[""].unshift({
                            id: "",
                            label: "",
                            selected: !G
                        }) : G || U[""].unshift({id: "?", label: "", selected: !0})), A = 0, m = F.length; m > A; A++) {
                            for (t = F[A], n = U[t], _.length <= A ? (i = {
                                element: C.clone().attr("label", t),
                                label: n.label
                            }, l = [i], _.push(l), s.append(i.element)) : (l = _[A], i = l[0], i.label != t && i.element.attr("label", i.label = t)), T = null, E = 0, w = n.length; w > E; E++)r = n[E], (f = l[E + 1]) ? (T = f.element, f.label !== r.label && (v(z, f.label, !1), v(z, r.label, !0), T.text(f.label = r.label), T.prop("label", f.label)), f.id !== r.id && T.val(f.id = r.id), T[0].selected !== r.selected && (T.prop("selected", f.selected = r.selected), Xr && T.prop("selected", f.selected))) : ("" === r.id && b ? N = b : (N = S.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), l.push(f = {
                                element: N,
                                label: r.label,
                                id: r.id,
                                selected: r.selected
                            }), v(z, r.label, !0), T ? T.after(N) : i.element.append(N), T = N);
                            for (E++; l.length > E;)r = l.pop(), v(z, r.label, !1), r.element.remove()
                        }
                        for (; _.length > A;) {
                            for (n = _.pop(), E = 1; E < n.length; ++E)v(z, n[E].label, !1);
                            n[0].element.remove()
                        }
                        o(z, function (t, e) {
                            t > 0 ? d.addOption(e) : 0 > t && d.removeOption(e)
                        })
                    }

                    var A;
                    if (!(A = w.match(i)))throw Ra("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", w, z(s));
                    var k = r(A[2] || A[1]), E = A[4] || A[6], O = / as /.test(A[0]) && A[1], T = O ? r(O) : null, M = A[5], V = r(A[3] || ""), N = r(A[2] ? A[1] : E), D = r(A[7]), j = A[8], P = j ? r(A[8]) : null, R = {}, _ = [[{
                        element: s,
                        label: ""
                    }]], I = {};
                    b && (t(b)(e), b.removeClass("ng-scope"), b.remove()), s.empty(), s.on("change", l), u.$render = m, e.$watchCollection(D, p), e.$watchCollection(h, p), y && e.$watchCollection(function () {
                        return u.$modelValue
                    }, p)
                }

                if (l[1]) {
                    for (var p, d = l[0], v = l[1], y = c.multiple, w = c.ngOptions, b = !1, x = !1, S = Qr(e.createElement("option")), C = Qr(e.createElement("optgroup")), A = S.clone(), k = 0, E = u.children(), O = E.length; O > k; k++)if ("" === E[k].value) {
                        p = b = E.eq(k);
                        break
                    }
                    d.init(v, b, A), y && (v.$isEmpty = function (t) {
                        return !t || 0 === t.length
                    }), w ? $(s, u, v) : y ? h(s, u, v) : f(s, u, v, d)
                }
            }
        }
    }], qa = ["$interpolate", function (t) {
        var e = {addOption: p, removeOption: p};
        return {
            restrict: "E", priority: 100, compile: function (n, r) {
                if (m(r.value)) {
                    var i = t(n.text(), !0);
                    i || r.$set("value", n.text())
                }
                return function (t, n, r) {
                    var o = "$selectController", a = n.parent(), s = a.data(o) || a.parent().data(o);
                    s && s.databound || (s = e), i ? t.$watch(i, function (t, e) {
                        r.$set("value", t), e !== t && s.removeOption(e), s.addOption(t, n)
                    }) : s.addOption(r.value, n), n.on("$destroy", function () {
                        s.removeOption(r.value)
                    })
                }
            }
        }
    }], Ua = v({restrict: "E", terminal: !1}), Fa = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                r && (n.required = !0, r.$validators.required = function (t, e) {
                    return !n.required || !r.$isEmpty(e)
                }, n.$observe("required", function () {
                    r.$validate()
                }))
            }
        }
    }, Ha = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, i, o) {
                if (o) {
                    var a, s = i.ngPattern || i.pattern;
                    i.$observe("pattern", function (t) {
                        if (w(t) && t.length > 0 && (t = new RegExp("^" + t + "$")), t && !t.test)throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", s, t, z(e));
                        a = t || n, o.$validate()
                    }), o.$validators.pattern = function (t) {
                        return o.$isEmpty(t) || m(a) || a.test(t)
                    }
                }
            }
        }
    }, La = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                if (r) {
                    var i = -1;
                    n.$observe("maxlength", function (t) {
                        var e = h(t);
                        i = isNaN(e) ? -1 : e, r.$validate()
                    }), r.$validators.maxlength = function (t, e) {
                        return 0 > i || r.$isEmpty(e) || e.length <= i
                    }
                }
            }
        }
    }, Ba = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (t, e, n, r) {
                if (r) {
                    var i = 0;
                    n.$observe("minlength", function (t) {
                        i = h(t) || 0, r.$validate()
                    }), r.$validators.minlength = function (t, e) {
                        return r.$isEmpty(e) || e.length >= i
                    }
                }
            }
        }
    };
    return t.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (re(), $e(si), void Qr(e).ready(function () {
        X(e, Q)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
!function (e, r) {
    "use strict";
    function t() {
        function e(e, t) {
            return r.extend(Object.create(e), t)
        }

        function t(e, r) {
            var t = r.caseInsensitiveMatch, n = {originalPath: e, regexp: e}, a = n.keys = [];
            return e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (e, r, t, n) {
                var o = "?" === n ? n : null, i = "*" === n ? n : null;
                return a.push({
                    name: t,
                    optional: !!o
                }), r = r || "", "" + (o ? "" : r) + "(?:" + (o ? r : "") + (i && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
            }).replace(/([\/$\*])/g, "\\$1"), n.regexp = new RegExp("^" + e + "$", t ? "i" : ""), n
        }

        var n = {};
        this.when = function (e, a) {
            var o = r.copy(a);
            if (r.isUndefined(o.reloadOnSearch) && (o.reloadOnSearch = !0), r.isUndefined(o.caseInsensitiveMatch) && (o.caseInsensitiveMatch = this.caseInsensitiveMatch), n[e] = r.extend(o, e && t(e, o)), e) {
                var i = "/" == e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
                n[i] = r.extend({redirectTo: e}, t(i, o))
            }
            return this
        }, this.caseInsensitiveMatch = !1, this.otherwise = function (e) {
            return "string" == typeof e && (e = {redirectTo: e}), this.when(null, e), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (t, a, o, i, u, l, s) {
            function h(e, r) {
                var t = r.keys, n = {};
                if (!r.regexp)return null;
                var a = r.regexp.exec(e);
                if (!a)return null;
                for (var o = 1, i = a.length; i > o; ++o) {
                    var c = t[o - 1], u = a[o];
                    c && u && (n[c.name] = u)
                }
                return n
            }

            function $(e) {
                var n = w.current;
                v = f(), m = v && n && v.$$route === n.$$route && r.equals(v.pathParams, n.pathParams) && !v.reloadOnSearch && !g, m || !n && !v || t.$broadcast("$routeChangeStart", v, n).defaultPrevented && e && e.preventDefault()
            }

            function p() {
                var e = w.current, n = v;
                m ? (e.params = n.params, r.copy(e.params, o), t.$broadcast("$routeUpdate", e)) : (n || e) && (g = !1, w.current = n, n && n.redirectTo && (r.isString(n.redirectTo) ? a.path(d(n.redirectTo, n.params)).search(n.params).replace() : a.url(n.redirectTo(n.pathParams, a.path(), a.search())).replace()), i.when(n).then(function () {
                    if (n) {
                        var e, t, a = r.extend({}, n.resolve);
                        return r.forEach(a, function (e, t) {
                            a[t] = r.isString(e) ? u.get(e) : u.invoke(e, null, null, t)
                        }), r.isDefined(e = n.template) ? r.isFunction(e) && (e = e(n.params)) : r.isDefined(t = n.templateUrl) && (r.isFunction(t) && (t = t(n.params)), t = s.getTrustedResourceUrl(t), r.isDefined(t) && (n.loadedTemplateUrl = t, e = l(t))), r.isDefined(e) && (a.$template = e), i.all(a)
                    }
                }).then(function (a) {
                    n == w.current && (n && (n.locals = a, r.copy(n.params, o)), t.$broadcast("$routeChangeSuccess", n, e))
                }, function (r) {
                    n == w.current && t.$broadcast("$routeChangeError", n, e, r)
                }))
            }

            function f() {
                var t, o;
                return r.forEach(n, function (n) {
                    !o && (t = h(a.path(), n)) && (o = e(n, {
                        params: r.extend({}, a.search(), t),
                        pathParams: t
                    }), o.$$route = n)
                }), o || n[null] && e(n[null], {params: {}, pathParams: {}})
            }

            function d(e, t) {
                var n = [];
                return r.forEach((e || "").split(":"), function (e, r) {
                    if (0 === r)n.push(e); else {
                        var a = e.match(/(\w+)(?:[?*])?(.*)/), o = a[1];
                        n.push(t[o]), n.push(a[2] || ""), delete t[o]
                    }
                }), n.join("")
            }

            var v, m, g = !1, w = {
                routes: n, reload: function () {
                    g = !0, t.$evalAsync(function () {
                        $(), p()
                    })
                }, updateParams: function (e) {
                    if (!this.current || !this.current.$$route)throw c("norout", "Tried updating route when with no current route");
                    e = r.extend({}, this.current.params, e), a.path(d(this.current.$$route.originalPath, e)), a.search(e)
                }
            };
            return t.$on("$locationChangeStart", $), t.$on("$locationChangeSuccess", p), w
        }]
    }

    function n() {
        this.$get = function () {
            return {}
        }
    }

    function a(e, t, n) {
        return {
            restrict: "ECA", terminal: !0, priority: 400, transclude: "element", link: function (a, o, i, c, u) {
                function l() {
                    p && (n.cancel(p), p = null), h && (h.$destroy(), h = null), $ && (p = n.leave($), p.then(function () {
                        p = null
                    }), $ = null)
                }

                function s() {
                    var i = e.current && e.current.locals, c = i && i.$template;
                    if (r.isDefined(c)) {
                        var s = a.$new(), p = e.current, v = u(s, function (e) {
                            n.enter(e, null, $ || o).then(function () {
                                !r.isDefined(f) || f && !a.$eval(f) || t()
                            }), l()
                        });
                        $ = v, h = p.scope = s, h.$emit("$viewContentLoaded"), h.$eval(d)
                    } else l()
                }

                var h, $, p, f = i.autoscroll, d = i.onload || "";
                a.$on("$routeChangeSuccess", s), s()
            }
        }
    }

    function o(e, r, t) {
        return {
            restrict: "ECA", priority: -400, link: function (n, a) {
                var o = t.current, i = o.locals;
                a.html(i.$template);
                var c = e(a.contents());
                if (o.controller) {
                    i.$scope = n;
                    var u = r(o.controller, i);
                    o.controllerAs && (n[o.controllerAs] = u), a.data("$ngControllerController", u), a.children().data("$ngControllerController", u)
                }
                c(n)
            }
        }
    }

    var i = r.module("ngRoute", ["ng"]).provider("$route", t), c = r.$$minErr("ngRoute");
    i.provider("$routeParams", n), i.directive("ngView", a), i.directive("ngView", o), a.$inject = ["$route", "$anchorScroll", "$animate"], o.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular);
!function (o, n, e) {
    "use strict";
    n.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (o, i) {
        function r() {
            var o, r, t, u;
            for (o in f)a(c[o]) && i.cookies(o, e);
            for (o in c)r = c[o], n.isString(r) || (r = "" + r, c[o] = r), r !== f[o] && (i.cookies(o, r), u = !0);
            if (u) {
                u = !1, t = i.cookies();
                for (o in c)c[o] !== t[o] && (a(t[o]) ? delete c[o] : c[o] = t[o], u = !0)
            }
        }

        var t, c = {}, f = {}, u = !1, s = n.copy, a = n.isUndefined;
        return i.addPollFn(function () {
            var n = i.cookies();
            t != n && (t = n, s(n, f), s(n, c), u && o.$apply())
        })(), u = !0, o.$watch(r), c
    }]).factory("$cookieStore", ["$cookies", function (o) {
        return {
            get: function (e) {
                var i = o[e];
                return i ? n.fromJson(i) : i
            }, put: function (e, i) {
                o[e] = n.toJson(i)
            }, remove: function (n) {
                delete o[n]
            }
        }
    }])
}(window, window.angular);
!function (n, t, e) {
    "use strict";
    t.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
        var n = "$$ngAnimateChildren";
        return function (e, a, i) {
            var r = i.ngAnimateChildren;
            t.isString(r) && 0 === r.length ? a.data(n, !0) : e.$watch(r, function (t) {
                a.data(n, !!t)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function (n, t) {
        var e = t[0].body;
        return function (t) {
            return n(function () {
                e.offsetWidth + 1;
                t()
            })
        }
    }]).config(["$provide", "$animateProvider", function (a, i) {
        function r(n) {
            for (var t = 0; t < n.length; t++) {
                var e = n[t];
                if (e.nodeType == p)return e
            }
        }

        function s(n) {
            return n && t.element(n)
        }

        function o(n) {
            return t.element(r(n))
        }

        function u(n, t) {
            return r(n) == r(t)
        }

        var l, c = t.noop, f = t.forEach, v = i.$$selectors, d = t.isArray, m = t.isString, g = t.isObject, p = 1, C = "$$ngAnimateState", h = "$$ngAnimateChildren", $ = "ng-animate", b = {running: !0};
        a.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function (n, e, a, p, y, D, A, w, k, x) {
            function S(n, t) {
                var e = n.data(C) || {};
                return t && (e.running = !0, e.structural = !0, n.data(C, e)), e.disabled || e.running && e.structural
            }

            function B(n) {
                var t, a = e.defer();
                return a.promise.$$cancelFn = function () {
                    t && t()
                }, A.$$postDigest(function () {
                    t = n(function () {
                        a.resolve()
                    })
                }), a.promise
            }

            function F(n) {
                return g(n) ? (n.tempClasses && m(n.tempClasses) && (n.tempClasses = n.tempClasses.split(/\s+/)), n) : void 0
            }

            function M(n, t, e) {
                e = e || {};
                var a = {};
                f(e, function (n, t) {
                    f(t.split(" "), function (t) {
                        a[t] = n
                    })
                });
                var i = Object.create(null);
                f((n.attr("class") || "").split(/\s+/), function (n) {
                    i[n] = !0
                });
                var r = [], s = [];
                return f(t && t.classes || [], function (n, t) {
                    var e = i[t], o = a[t] || {};
                    n === !1 ? (e || "addClass" == o.event) && s.push(t) : n === !0 && (e && "removeClass" != o.event || r.push(t))
                }), r.length + s.length > 0 && [r.join(" "), s.join(" ")]
            }

            function E(n) {
                if (n) {
                    var t = [], e = {}, i = n.substr(1).split(".");
                    (p.transitions || p.animations) && t.push(a.get(v[""]));
                    for (var r = 0; r < i.length; r++) {
                        var s = i[r], o = v[s];
                        o && !e[s] && (t.push(a.get(o)), e[s] = !0)
                    }
                    return t
                }
            }

            function R(n, e, a, i) {
                function r(n, t) {
                    var e = n[t], a = n["before" + t.charAt(0).toUpperCase() + t.substr(1)];
                    return e || a ? ("leave" == t && (a = e, e = null), D.push({event: t, fn: e}), $.push({
                        event: t,
                        fn: a
                    }), !0) : void 0
                }

                function s(t, e, r) {
                    function s(n) {
                        if (e) {
                            if ((e[n] || c)(), ++v < o.length)return;
                            e = null
                        }
                        r()
                    }

                    var o = [];
                    f(t, function (n) {
                        n.fn && o.push(n)
                    });
                    var v = 0;
                    f(o, function (t, r) {
                        var o = function () {
                            s(r)
                        };
                        switch (t.event) {
                            case"setClass":
                                e.push(t.fn(n, u, l, o, i));
                                break;
                            case"animate":
                                e.push(t.fn(n, a, i.from, i.to, o));
                                break;
                            case"addClass":
                                e.push(t.fn(n, u || a, o, i));
                                break;
                            case"removeClass":
                                e.push(t.fn(n, l || a, o, i));
                                break;
                            default:
                                e.push(t.fn(n, o, i))
                        }
                    }), e && 0 === e.length && r()
                }

                var o = n[0];
                if (o) {
                    i && (i.to = i.to || {}, i.from = i.from || {});
                    var u, l;
                    d(a) && (u = a[0], l = a[1], u ? l ? a = u + " " + l : (a = u, e = "addClass") : (a = l, e = "removeClass"));
                    var v = "setClass" == e, m = v || "addClass" == e || "removeClass" == e || "animate" == e, g = n.attr("class"), p = g + " " + a;
                    if (K(p)) {
                        var C = c, h = [], $ = [], b = c, y = [], D = [], A = (" " + p).replace(/\s+/g, ".");
                        return f(E(A), function (n) {
                            var t = r(n, e);
                            !t && v && (r(n, "addClass"), r(n, "removeClass"))
                        }), {
                            node: o,
                            event: e,
                            className: a,
                            isClassBased: m,
                            isSetClassOperation: v,
                            applyStyles: function () {
                                i && n.css(t.extend(i.from || {}, i.to || {}))
                            },
                            before: function (n) {
                                C = n, s($, h, function () {
                                    C = c, n()
                                })
                            },
                            after: function (n) {
                                b = n, s(D, y, function () {
                                    b = c, n()
                                })
                            },
                            cancel: function () {
                                h && (f(h, function (n) {
                                    (n || c)(!0)
                                }), C(!0)), y && (f(y, function (n) {
                                    (n || c)(!0)
                                }), b(!0))
                            }
                        }
                    }
                }
            }

            function N(n, e, a, i, r, s, o, u) {
                function v(t) {
                    var i = "$animate:" + t;
                    A && A[i] && A[i].length > 0 && D(function () {
                        a.triggerHandler(i, {event: n, className: e})
                    })
                }

                function d() {
                    v("before")
                }

                function m() {
                    v("after")
                }

                function g() {
                    v("close"), u()
                }

                function p() {
                    p.hasBeenRun || (p.hasBeenRun = !0, s())
                }

                function h() {
                    if (!h.hasBeenRun) {
                        y && y.applyStyles(), h.hasBeenRun = !0, o && o.tempClasses && f(o.tempClasses, function (n) {
                            l.removeClass(a, n)
                        });
                        var t = a.data(C);
                        t && (y && y.isClassBased ? T(a, e) : (D(function () {
                            var t = a.data(C) || {};
                            N == t.index && T(a, e, n)
                        }), a.data(C, t))), g()
                    }
                }

                var b = c, y = R(a, n, e, o);
                if (!y)return p(), d(), m(), h(), b;
                n = y.event, e = y.className;
                var A = t.element._data(y.node);
                if (A = A && A.events, i || (i = r ? r.parent() : a.parent()), j(a, i))return p(), d(), m(), h(), b;
                var w = a.data(C) || {}, k = w.active || {}, x = w.totalActive || 0, S = w.last, B = !1;
                if (x > 0) {
                    var F = [];
                    if (y.isClassBased) {
                        if ("setClass" == S.event)F.push(S), T(a, e); else if (k[e]) {
                            var M = k[e];
                            M.event == n ? B = !0 : (F.push(M), T(a, e))
                        }
                    } else if ("leave" == n && k["ng-leave"])B = !0; else {
                        for (var E in k)F.push(k[E]);
                        w = {}, T(a, !0)
                    }
                    F.length > 0 && f(F, function (n) {
                        n.cancel()
                    })
                }
                if (!y.isClassBased || y.isSetClassOperation || "animate" == n || B || (B = "addClass" == n == a.hasClass(e)), B)return p(), d(), m(), g(), b;
                k = w.active || {}, x = w.totalActive || 0, "leave" == n && a.one("$destroy", function () {
                    var n = t.element(this), e = n.data(C);
                    if (e) {
                        var a = e.active["ng-leave"];
                        a && (a.cancel(), T(n, "ng-leave"))
                    }
                }), l.addClass(a, $), o && o.tempClasses && f(o.tempClasses, function (n) {
                    l.addClass(a, n)
                });
                var N = P++;
                return x++, k[e] = y, a.data(C, {
                    last: y,
                    active: k,
                    index: N,
                    totalActive: x
                }), d(), y.before(function (t) {
                    var i = a.data(C);
                    t = t || !i || !i.active[e] || y.isClassBased && i.active[e].event != n, p(), t === !0 ? h() : (m(), y.after(h))
                }), y.cancel
            }

            function O(n) {
                var e = r(n);
                if (e) {
                    var a = t.isFunction(e.getElementsByClassName) ? e.getElementsByClassName($) : e.querySelectorAll("." + $);
                    f(a, function (n) {
                        n = t.element(n);
                        var e = n.data(C);
                        e && e.active && f(e.active, function (n) {
                            n.cancel()
                        })
                    })
                }
            }

            function T(n, t) {
                if (u(n, y))b.disabled || (b.running = !1, b.structural = !1); else if (t) {
                    var e = n.data(C) || {}, a = t === !0;
                    !a && e.active && e.active[t] && (e.totalActive--, delete e.active[t]), (a || !e.totalActive) && (l.removeClass(n, $), n.removeData(C))
                }
            }

            function j(n, e) {
                if (b.disabled)return !0;
                if (u(n, y))return b.running;
                var a, i, r;
                do {
                    if (0 === e.length)break;
                    var s = u(e, y), o = s ? b : e.data(C) || {};
                    if (o.disabled)return !0;
                    if (s && (r = !0), a !== !1) {
                        var l = e.data(h);
                        t.isDefined(l) && (a = l)
                    }
                    i = i || o.running || o.last && !o.last.isClassBased
                } while (e = e.parent());
                return !r || !a && i
            }

            l = x, y.data(C, b);
            var I = A.$watch(function () {
                return k.totalPendingRequests
            }, function (n) {
                0 === n && (I(), A.$$postDigest(function () {
                    A.$$postDigest(function () {
                        b.running = !1
                    })
                }))
            }), P = 0, q = i.classNameFilter(), K = q ? function (n) {
                return q.test(n)
            } : function () {
                return !0
            };
            return {
                animate: function (n, t, e, a, i) {
                    return a = a || "ng-inline-animate", i = F(i) || {}, i.from = e ? t : null, i.to = e ? e : t, B(function (t) {
                        return N("animate", a, o(n), null, null, c, i, t)
                    })
                }, enter: function (e, a, i, r) {
                    return r = F(r), e = t.element(e), a = s(a), i = s(i), S(e, !0), n.enter(e, a, i), B(function (n) {
                        return N("enter", "ng-enter", o(e), a, i, c, r, n)
                    })
                }, leave: function (e, a) {
                    return a = F(a), e = t.element(e), O(e), S(e, !0), B(function (t) {
                        return N("leave", "ng-leave", o(e), null, null, function () {
                            n.leave(e)
                        }, a, t)
                    })
                }, move: function (e, a, i, r) {
                    return r = F(r), e = t.element(e), a = s(a), i = s(i), O(e), S(e, !0), n.move(e, a, i), B(function (n) {
                        return N("move", "ng-move", o(e), a, i, c, r, n)
                    })
                }, addClass: function (n, t, e) {
                    return this.setClass(n, t, [], e)
                }, removeClass: function (n, t, e) {
                    return this.setClass(n, [], t, e)
                }, setClass: function (e, a, i, s) {
                    s = F(s);
                    var u = "$$animateClasses";
                    if (e = t.element(e), e = o(e), S(e))return n.$$setClassImmediately(e, a, i, s);
                    var l, c = e.data(u), v = !!c;
                    return c || (c = {}, c.classes = {}), l = c.classes, a = d(a) ? a : a.split(" "), f(a, function (n) {
                        n && n.length && (l[n] = !0)
                    }), i = d(i) ? i : i.split(" "), f(i, function (n) {
                        n && n.length && (l[n] = !1)
                    }), v ? (s && c.options && (c.options = t.extend(c.options || {}, s)), c.promise) : (e.data(u, c = {
                        classes: l,
                        options: s
                    }), c.promise = B(function (t) {
                        var a = e.parent(), i = r(e), s = i.parentNode;
                        if (!s || s.$$NG_REMOVED || i.$$NG_REMOVED)return void t();
                        var o = e.data(u);
                        e.removeData(u);
                        var l = e.data(C) || {}, c = M(e, o, l.active);
                        return c ? N("setClass", c, e, a, null, function () {
                            c[0] && n.$$addClassImmediately(e, c[0]), c[1] && n.$$removeClassImmediately(e, c[1])
                        }, o.options, t) : t()
                    }))
                }, cancel: function (n) {
                    n.$$cancelFn()
                }, enabled: function (n, t) {
                    switch (arguments.length) {
                        case 2:
                            if (n)T(t); else {
                                var e = t.data(C) || {};
                                e.disabled = !0, t.data(C, e)
                            }
                            break;
                        case 1:
                            b.disabled = !n;
                            break;
                        default:
                            n = !b.disabled
                    }
                    return !!n
                }
            }
        }]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (a, i, s, o) {
            function u() {
                T || (T = o(function () {
                    z = [], T = null, L = {}
                }))
            }

            function v(n, t) {
                T && T(), z.push(t), T = o(function () {
                    f(z, function (n) {
                        n()
                    }), z = [], T = null, L = {}
                })
            }

            function g(n, e) {
                var a = r(n);
                n = t.element(a), X.push(n);
                var i = Date.now() + e;
                Q >= i || (s.cancel(J), Q = i, J = s(function () {
                    C(X), X = []
                }, e, !1))
            }

            function C(n) {
                f(n, function (n) {
                    var t = n.data(_);
                    t && f(t.closeAnimationFns, function (n) {
                        n()
                    })
                })
            }

            function h(n, t) {
                var e = t ? L[t] : null;
                if (!e) {
                    var i = 0, r = 0, s = 0, o = 0;
                    f(n, function (n) {
                        if (n.nodeType == p) {
                            var t = a.getComputedStyle(n) || {}, e = t[M + j];
                            i = Math.max($(e), i);
                            var u = t[M + P];
                            r = Math.max($(u), r);
                            {
                                t[R + P]
                            }
                            o = Math.max($(t[R + P]), o);
                            var l = $(t[R + j]);
                            l > 0 && (l *= parseInt(t[R + q], 10) || 1), s = Math.max(l, s)
                        }
                    }), e = {
                        total: 0,
                        transitionDelay: r,
                        transitionDuration: i,
                        animationDelay: o,
                        animationDuration: s
                    }, t && (L[t] = e)
                }
                return e
            }

            function $(n) {
                var t = 0, e = m(n) ? n.split(/\s*,\s*/) : [];
                return f(e, function (n) {
                    t = Math.max(parseFloat(n) || 0, t)
                }), t
            }

            function b(n) {
                var t = n.parent(), e = t.data(W);
                return e || (t.data(W, ++U), e = U), e + "-" + r(n).getAttribute("class")
            }

            function y(n, t, e, a) {
                var i = ["ng-enter", "ng-leave", "ng-move"].indexOf(e) >= 0, s = b(t), o = s + " " + e, u = L[o] ? ++L[o].total : 0, c = {};
                if (u > 0) {
                    var f = e + "-stagger", v = s + " " + f, d = !L[v];
                    d && l.addClass(t, f), c = h(t, v), d && l.removeClass(t, f)
                }
                l.addClass(t, e);
                var m = t.data(_) || {}, g = h(t, o), p = g.transitionDuration, C = g.animationDuration;
                if (i && 0 === p && 0 === C)return l.removeClass(t, e), !1;
                var $ = a || i && p > 0, y = C > 0 && c.animationDelay > 0 && 0 === c.animationDuration, D = m.closeAnimationFns || [];
                t.data(_, {
                    stagger: c,
                    cacheKey: o,
                    running: m.running || 0,
                    itemIndex: u,
                    blockTransition: $,
                    closeAnimationFns: D
                });
                var k = r(t);
                return $ && (A(k, !0), a && t.css(a)), y && w(k, !0), !0
            }

            function D(n, t, e, a, i) {
                function o() {
                    t.off(P, u), l.removeClass(t, d), l.removeClass(t, m), j && s.cancel(j), B(t, e);
                    var n = r(t);
                    for (var a in C)n.style.removeProperty(C[a])
                }

                function u(n) {
                    n.stopPropagation();
                    var t = n.originalEvent || n, e = t.$manualTimeStamp || t.timeStamp || Date.now(), i = parseFloat(t.elapsedTime.toFixed(G));
                    Math.max(e - I, 0) >= R && i >= F && a()
                }

                var c = r(t), v = t.data(_);
                if (-1 == c.getAttribute("class").indexOf(e) || !v)return void a();
                var d = "", m = "";
                f(e.split(" "), function (n, t) {
                    var e = (t > 0 ? " " : "") + n;
                    d += e + "-active", m += e + "-pending"
                });
                var p = "", C = [], $ = v.itemIndex, b = v.stagger, y = 0;
                if ($ > 0) {
                    var D = 0;
                    b.transitionDelay > 0 && 0 === b.transitionDuration && (D = b.transitionDelay * $);
                    var k = 0;
                    b.animationDelay > 0 && 0 === b.animationDuration && (k = b.animationDelay * $, C.push(O + "animation-play-state")), y = Math.round(100 * Math.max(D, k)) / 100
                }
                y || (l.addClass(t, d), v.blockTransition && A(c, !1));
                var x = v.cacheKey + " " + d, S = h(t, x), F = Math.max(S.transitionDuration, S.animationDuration);
                if (0 === F)return l.removeClass(t, d), B(t, e), void a();
                !y && i && Object.keys(i).length > 0 && (S.transitionDuration || (t.css("transition", S.animationDuration + "s linear all"), C.push("transition")), t.css(i));
                var M = Math.max(S.transitionDelay, S.animationDelay), R = M * H;
                if (C.length > 0) {
                    var T = c.getAttribute("style") || "";
                    ";" !== T.charAt(T.length - 1) && (T += ";"), c.setAttribute("style", T + " " + p)
                }
                var j, I = Date.now(), P = N + " " + E, q = (M + F) * V, K = (y + q) * H;
                return y > 0 && (l.addClass(t, m), j = s(function () {
                    j = null, S.transitionDuration > 0 && A(c, !1), S.animationDuration > 0 && w(c, !1), l.addClass(t, d), l.removeClass(t, m), i && (0 === S.transitionDuration && t.css("transition", S.animationDuration + "s linear all"), t.css(i), C.push("transition"))
                }, y * H, !1)), t.on(P, u), v.closeAnimationFns.push(function () {
                    o(), a()
                }), v.running++, g(t, K), o
            }

            function A(n, t) {
                n.style[M + I] = t ? "none" : ""
            }

            function w(n, t) {
                n.style[R + K] = t ? "paused" : ""
            }

            function k(n, t, e, a) {
                return y(n, t, e, a) ? function (n) {
                    n && B(t, e)
                } : void 0
            }

            function x(n, t, e, a, i) {
                return t.data(_) ? D(n, t, e, a, i) : (B(t, e), void a())
            }

            function S(n, t, e, a, i) {
                var r = k(n, t, e, i.from);
                if (!r)return u(), void a();
                var s = r;
                return v(t, function () {
                    s = x(n, t, e, a, i.to)
                }), function (n) {
                    (s || c)(n)
                }
            }

            function B(n, t) {
                l.removeClass(n, t);
                var e = n.data(_);
                e && (e.running && e.running--, e.running && 0 !== e.running || n.removeData(_))
            }

            function F(n, t) {
                var e = "";
                return n = d(n) ? n : n.split(/\s+/), f(n, function (n, a) {
                    n && n.length > 0 && (e += (a > 0 ? " " : "") + n + t)
                }), e
            }

            var M, E, R, N, O = "";
            n.ontransitionend === e && n.onwebkittransitionend !== e ? (O = "-webkit-", M = "WebkitTransition", E = "webkitTransitionEnd transitionend") : (M = "transition", E = "transitionend"), n.onanimationend === e && n.onwebkitanimationend !== e ? (O = "-webkit-", R = "WebkitAnimation", N = "webkitAnimationEnd animationend") : (R = "animation", N = "animationend");
            var T, j = "Duration", I = "Property", P = "Delay", q = "IterationCount", K = "PlayState", W = "$$ngAnimateKey", _ = "$$ngAnimateCSS3Data", G = 3, V = 1.5, H = 1e3, L = {}, U = 0, z = [], J = null, Q = 0, X = [];
            return {
                animate: function (n, t, e, a, i, r) {
                    return r = r || {}, r.from = e, r.to = a, S("animate", n, t, i, r)
                }, enter: function (n, t, e) {
                    return e = e || {}, S("enter", n, "ng-enter", t, e)
                }, leave: function (n, t, e) {
                    return e = e || {}, S("leave", n, "ng-leave", t, e)
                }, move: function (n, t, e) {
                    return e = e || {}, S("move", n, "ng-move", t, e)
                }, beforeSetClass: function (n, t, e, a, i) {
                    i = i || {};
                    var r = F(e, "-remove") + " " + F(t, "-add"), s = k("setClass", n, r, i.from);
                    return s ? (v(n, a), s) : (u(), void a())
                }, beforeAddClass: function (n, t, e, a) {
                    a = a || {};
                    var i = k("addClass", n, F(t, "-add"), a.from);
                    return i ? (v(n, e), i) : (u(), void e())
                }, beforeRemoveClass: function (n, t, e, a) {
                    a = a || {};
                    var i = k("removeClass", n, F(t, "-remove"), a.from);
                    return i ? (v(n, e), i) : (u(), void e())
                }, setClass: function (n, t, e, a, i) {
                    i = i || {}, e = F(e, "-remove"), t = F(t, "-add");
                    var r = e + " " + t;
                    return x("setClass", n, r, a, i.to)
                }, addClass: function (n, t, e, a) {
                    return a = a || {}, x("addClass", n, F(t, "-add"), e, a.to)
                }, removeClass: function (n, t, e, a) {
                    return a = a || {}, x("removeClass", n, F(t, "-remove"), e, a.to)
                }
            }
        }])
    }])
}(window, window.angular);
!function (n, e) {
    "use strict";
    function t(n, t, c) {
        o.directive(n, ["$parse", "$swipe", function (o, i) {
            var u = 75, a = .3, r = 30;
            return function (s, l, h) {
                function f(n) {
                    if (!v)return !1;
                    var e = Math.abs(n.y - v.y), o = (n.x - v.x) * t;
                    return d && u > e && o > 0 && o > r && a > e / o
                }

                var v, d, g = o(h[n]), p = ["touch"];
                e.isDefined(h.ngSwipeDisableMouse) || p.push("mouse"), i.bind(l, {
                    start: function (n) {
                        v = n, d = !0
                    }, cancel: function () {
                        d = !1
                    }, end: function (n, e) {
                        f(n) && s.$apply(function () {
                            l.triggerHandler(c), g(s, {$event: e})
                        })
                    }
                }, p)
            }
        }])
    }

    var o = e.module("ngTouch", []);
    o.factory("$swipe", [function () {
        function n(n) {
            var e = n.touches && n.touches.length ? n.touches : [n], t = n.changedTouches && n.changedTouches[0] || n.originalEvent && n.originalEvent.changedTouches && n.originalEvent.changedTouches[0] || e[0].originalEvent || e[0];
            return {x: t.clientX, y: t.clientY}
        }

        function t(n, t) {
            var o = [];
            return e.forEach(n, function (n) {
                var e = c[n][t];
                e && o.push(e)
            }), o.join(" ")
        }

        var o = 10, c = {
            mouse: {start: "mousedown", move: "mousemove", end: "mouseup"},
            touch: {start: "touchstart", move: "touchmove", end: "touchend", cancel: "touchcancel"}
        };
        return {
            bind: function (e, c, i) {
                var u, a, r, s, l = !1;
                i = i || ["mouse", "touch"], e.on(t(i, "start"), function (e) {
                    r = n(e), l = !0, u = 0, a = 0, s = r, c.start && c.start(r, e)
                });
                var h = t(i, "cancel");
                h && e.on(h, function (n) {
                    l = !1, c.cancel && c.cancel(n)
                }), e.on(t(i, "move"), function (e) {
                    if (l && r) {
                        var t = n(e);
                        if (u += Math.abs(t.x - s.x), a += Math.abs(t.y - s.y), s = t, !(o > u && o > a))return a > u ? (l = !1, void(c.cancel && c.cancel(e))) : (e.preventDefault(), void(c.move && c.move(t, e)))
                    }
                }), e.on(t(i, "end"), function (e) {
                    l && (l = !1, c.end && c.end(n(e), e))
                })
            }
        }
    }]), o.config(["$provide", function (n) {
        n.decorator("ngClickDirective", ["$delegate", function (n) {
            return n.shift(), n
        }])
    }]), o.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (n, t, o) {
        function c(n, e, t, o) {
            return Math.abs(n - t) < g && Math.abs(e - o) < g
        }

        function i(n, e, t) {
            for (var o = 0; o < n.length; o += 2)if (c(n[o], n[o + 1], e, t))return n.splice(o, o + 2), !0;
            return !1
        }

        function u(n) {
            if (!(Date.now() - s > d)) {
                var e = n.touches && n.touches.length ? n.touches : [n], t = e[0].clientX, o = e[0].clientY;
                1 > t && 1 > o || h && h[0] === t && h[1] === o || (h && (h = null), "label" === n.target.tagName.toLowerCase() && (h = [t, o]), i(l, t, o) || (n.stopPropagation(), n.preventDefault(), n.target && n.target.blur()))
            }
        }

        function a(n) {
            var e = n.touches && n.touches.length ? n.touches : [n], o = e[0].clientX, c = e[0].clientY;
            l.push(o, c), t(function () {
                for (var n = 0; n < l.length; n += 2)if (l[n] == o && l[n + 1] == c)return void l.splice(n, n + 2)
            }, d, !1)
        }

        function r(n, e) {
            l || (o[0].addEventListener("click", u, !0), o[0].addEventListener("touchstart", a, !0), l = []), s = Date.now(), i(l, n, e)
        }

        var s, l, h, f = 750, v = 12, d = 2500, g = 25, p = "ng-click-active";
        return function (t, o, c) {
            function i() {
                d = !1, o.removeClass(p)
            }

            var u, a, s, l, h = n(c.ngClick), d = !1;
            o.on("touchstart", function (n) {
                d = !0, u = n.target ? n.target : n.srcElement, 3 == u.nodeType && (u = u.parentNode), o.addClass(p), a = Date.now();
                var e = n.touches && n.touches.length ? n.touches : [n], t = e[0].originalEvent || e[0];
                s = t.clientX, l = t.clientY
            }), o.on("touchmove", function () {
                i()
            }), o.on("touchcancel", function () {
                i()
            }), o.on("touchend", function (n) {
                var t = Date.now() - a, h = n.changedTouches && n.changedTouches.length ? n.changedTouches : n.touches && n.touches.length ? n.touches : [n], g = h[0].originalEvent || h[0], p = g.clientX, m = g.clientY, w = Math.sqrt(Math.pow(p - s, 2) + Math.pow(m - l, 2));
                d && f > t && v > w && (r(p, m), u && u.blur(), e.isDefined(c.disabled) && c.disabled !== !1 || o.triggerHandler("click", [n])), i()
            }), o.onclick = function () {
            }, o.on("click", function (n, e) {
                t.$apply(function () {
                    h(t, {$event: e || n})
                })
            }), o.on("mousedown", function () {
                o.addClass(p)
            }), o.on("mousemove mouseup", function () {
                o.removeClass(p)
            })
        }
    }]), t("ngSwipeLeft", -1, "swipeleft"), t("ngSwipeRight", 1, "swiperight")
}(window, window.angular);
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (e, t, r) {
    "use strict";
    function n(e, t) {
        return D(new (D(function () {
        }, {prototype: e})), t)
    }

    function i(e) {
        return R(arguments, function (t) {
            t !== e && R(t, function (t, r) {
                e.hasOwnProperty(r) || (e[r] = t)
            })
        }), e
    }

    function a(e, t) {
        var r = [];
        for (var n in e.path) {
            if (e.path[n] !== t.path[n])break;
            r.push(e.path[n])
        }
        return r
    }

    function o(e) {
        if (Object.keys)return Object.keys(e);
        var r = [];
        return t.forEach(e, function (e, t) {
            r.push(t)
        }), r
    }

    function u(e, t) {
        if (Array.prototype.indexOf)return e.indexOf(t, Number(arguments[2]) || 0);
        var r = e.length >>> 0, n = Number(arguments[2]) || 0;
        for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += r); r > n; n++)if (n in e && e[n] === t)return n;
        return -1
    }

    function s(e, t, r, n) {
        var i, s = a(r, n), l = {}, c = [];
        for (var f in s)if (s[f].params && (i = o(s[f].params), i.length))for (var p in i)u(c, i[p]) >= 0 || (c.push(i[p]), l[i[p]] = e[i[p]]);
        return D({}, l, t)
    }

    function l(e, t, r) {
        if (!r) {
            r = [];
            for (var n in e)r.push(n)
        }
        for (var i = 0; i < r.length; i++) {
            var a = r[i];
            if (e[a] != t[a])return !1
        }
        return !0
    }

    function c(e, t) {
        var r = {};
        return R(e, function (e) {
            r[e] = t[e]
        }), r
    }

    function f(e) {
        var t = {}, r = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var n in e)-1 == u(r, n) && (t[n] = e[n]);
        return t
    }

    function p(e, t) {
        var r = N(e), n = r ? [] : {};
        return R(e, function (e, i) {
            t(e, i) && (n[r ? n.length : i] = e)
        }), n
    }

    function h(e, t) {
        var r = N(e) ? [] : {};
        return R(e, function (e, n) {
            r[n] = t(e, n)
        }), r
    }

    function v(e, t) {
        var n = 1, a = 2, s = {}, l = [], c = s, p = D(e.when(s), {$$promises: s, $$values: s});
        this.study = function (s) {
            function h(e, r) {
                if (g[r] !== a) {
                    if (m.push(r), g[r] === n)throw m.splice(0, u(m, r)), new Error("Cyclic dependency: " + m.join(" -> "));
                    if (g[r] = n, M(e))d.push(r, [function () {
                        return t.get(e)
                    }], l); else {
                        var i = t.annotate(e);
                        R(i, function (e) {
                            e !== r && s.hasOwnProperty(e) && h(s[e], e)
                        }), d.push(r, e, i)
                    }
                    m.pop(), g[r] = a
                }
            }

            function v(e) {
                return F(e) && e.then && e.$$promises
            }

            if (!F(s))throw new Error("'invocables' must be an object");
            var $ = o(s || {}), d = [], m = [], g = {};
            return R(s, h), s = m = g = null, function (n, a, o) {
                function u() {
                    --y || (b || i(w, a.$$values), m.$$values = w, m.$$promises = m.$$promises || !0, delete m.$$inheritedValues, h.resolve(w))
                }

                function s(e) {
                    m.$$failure = e, h.reject(e)
                }

                function l(r, i, a) {
                    function l(e) {
                        f.reject(e), s(e)
                    }

                    function c() {
                        if (!I(m.$$failure))try {
                            f.resolve(t.invoke(i, o, w)), f.promise.then(function (e) {
                                w[r] = e, u()
                            }, l)
                        } catch (e) {
                            l(e)
                        }
                    }

                    var f = e.defer(), p = 0;
                    R(a, function (e) {
                        g.hasOwnProperty(e) && !n.hasOwnProperty(e) && (p++, g[e].then(function (t) {
                            w[e] = t, --p || c()
                        }, l))
                    }), p || c(), g[r] = f.promise
                }

                if (v(n) && o === r && (o = a, a = n, n = null), n) {
                    if (!F(n))throw new Error("'locals' must be an object")
                } else n = c;
                if (a) {
                    if (!v(a))throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else a = p;
                var h = e.defer(), m = h.promise, g = m.$$promises = {}, w = D({}, n), y = 1 + d.length / 3, b = !1;
                if (I(a.$$failure))return s(a.$$failure), m;
                a.$$inheritedValues && i(w, f(a.$$inheritedValues, $)), D(g, a.$$promises), a.$$values ? (b = i(w, f(a.$$values, $)), m.$$inheritedValues = f(a.$$values, $), u()) : (a.$$inheritedValues && (m.$$inheritedValues = f(a.$$inheritedValues, $)), a.then(u, s));
                for (var E = 0, S = d.length; S > E; E += 3)n.hasOwnProperty(d[E]) ? u() : l(d[E], d[E + 1], d[E + 2]);
                return m
            }
        }, this.resolve = function (e, t, r, n) {
            return this.study(e)(t, r, n)
        }
    }

    function $(e, t, r) {
        this.fromConfig = function (e, t, r) {
            return I(e.template) ? this.fromString(e.template, t) : I(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : I(e.templateProvider) ? this.fromProvider(e.templateProvider, t, r) : null
        }, this.fromString = function (e, t) {
            return V(e) ? e(t) : e
        }, this.fromUrl = function (r, n) {
            return V(r) && (r = r(n)), null == r ? null : e.get(r, {
                cache: t,
                headers: {Accept: "text/html"}
            }).then(function (e) {
                return e.data
            })
        }, this.fromProvider = function (e, t, n) {
            return r.invoke(e, null, n || {params: t})
        }
    }

    function d(e, t, i) {
        function a(t, r, n, i) {
            if (d.push(t), v[t])return v[t];
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
            if ($[t])throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
            return $[t] = new T.Param(t, r, n, i), $[t]
        }

        function o(e, t, r) {
            var n = ["", ""], i = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!t)return i;
            switch (r) {
                case!1:
                    n = ["(", ")"];
                    break;
                case!0:
                    n = ["?(", ")?"];
                    break;
                default:
                    n = ["(" + r + "|", ")?"]
            }
            return i + n[0] + t + n[1]
        }

        function u(r, i) {
            var a, o, u, s, l;
            return a = r[2] || r[3], l = t.params[a], u = e.substring(p, r.index), o = i ? r[4] : r[4] || ("*" == r[1] ? ".*" : null), s = T.type(o || "string") || n(T.type("string"), {pattern: new RegExp(o)}), {
                id: a,
                regexp: o,
                segment: u,
                type: s,
                cfg: l
            }
        }

        t = D({params: {}}, F(t) ? t : {});
        var s, l = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, c = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = "^", p = 0, h = this.segments = [], v = i ? i.params : {}, $ = this.params = i ? i.params.$$new() : new T.ParamSet, d = [];
        this.source = e;
        for (var m, g, w; (s = l.exec(e)) && (m = u(s, !1), !(m.segment.indexOf("?") >= 0));)g = a(m.id, m.type, m.cfg, "path"), f += o(m.segment, g.type.pattern.source, g.squash), h.push(m.segment), p = l.lastIndex;
        w = e.substring(p);
        var y = w.indexOf("?");
        if (y >= 0) {
            var b = this.sourceSearch = w.substring(y);
            if (w = w.substring(0, y), this.sourcePath = e.substring(0, p + y), b.length > 0)for (p = 0; s = c.exec(b);)m = u(s, !0), g = a(m.id, m.type, m.cfg, "search"), p = l.lastIndex
        } else this.sourcePath = e, this.sourceSearch = "";
        f += o(w) + (t.strict === !1 ? "/?" : "") + "$", h.push(w), this.regexp = new RegExp(f, t.caseInsensitive ? "i" : r), this.prefix = h[0], this.$$paramNames = d
    }

    function m(e) {
        D(this, e)
    }

    function g() {
        function e(e) {
            return null != e ? e.toString().replace(/\//g, "%2F") : e
        }

        function i(e) {
            return null != e ? e.toString().replace(/%2F/g, "/") : e
        }

        function a(e) {
            return this.pattern.test(e)
        }

        function s() {
            return {strict: w, caseInsensitive: $}
        }

        function l(e) {
            return V(e) || N(e) && V(e[e.length - 1])
        }

        function c() {
            for (; S.length;) {
                var e = S.shift();
                if (e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");
                t.extend(b[e.name], v.invoke(e.def))
            }
        }

        function f(e) {
            D(this, e || {})
        }

        T = this;
        var v, $ = !1, w = !0, y = !1, b = {}, E = !0, S = [], x = {
            string: {
                encode: e,
                decode: i,
                is: a,
                pattern: /[^/]*/
            },
            "int": {
                encode: e, decode: function (e) {
                    return parseInt(e, 10)
                }, is: function (e) {
                    return I(e) && this.decode(e.toString()) === e
                }, pattern: /\d+/
            },
            bool: {
                encode: function (e) {
                    return e ? 1 : 0
                }, decode: function (e) {
                    return 0 !== parseInt(e, 10)
                }, is: function (e) {
                    return e === !0 || e === !1
                }, pattern: /0|1/
            },
            date: {
                encode: function (e) {
                    return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : r
                },
                decode: function (e) {
                    if (this.is(e))return e;
                    var t = this.capture.exec(e);
                    return t ? new Date(t[1], t[2] - 1, t[3]) : r
                },
                is: function (e) {
                    return e instanceof Date && !isNaN(e.valueOf())
                },
                equals: function (e, t) {
                    return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            },
            json: {encode: t.toJson, decode: t.fromJson, is: t.isObject, equals: t.equals, pattern: /[^/]*/},
            any: {encode: t.identity, decode: t.identity, is: t.identity, equals: t.equals, pattern: /.*/}
        };
        g.$$getDefaultValue = function (e) {
            if (!l(e.value))return e.value;
            if (!v)throw new Error("Injectable functions cannot be called at configuration time");
            return v.invoke(e.value)
        }, this.caseInsensitive = function (e) {
            return I(e) && ($ = e), $
        }, this.strictMode = function (e) {
            return I(e) && (w = e), w
        }, this.defaultSquashPolicy = function (e) {
            if (!I(e))return y;
            if (e !== !0 && e !== !1 && !M(e))throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
            return y = e, e
        }, this.compile = function (e, t) {
            return new d(e, D(s(), t))
        }, this.isMatcher = function (e) {
            if (!F(e))return !1;
            var t = !0;
            return R(d.prototype, function (r, n) {
                V(r) && (t = t && I(e[n]) && V(e[n]))
            }), t
        }, this.type = function (e, t, r) {
            if (!I(t))return b[e];
            if (b.hasOwnProperty(e))throw new Error("A type named '" + e + "' has already been defined.");
            return b[e] = new m(D({name: e}, t)), r && (S.push({name: e, def: r}), E || c()), this
        }, R(x, function (e, t) {
            b[t] = new m(D({name: t}, e))
        }), b = n(b, {}), this.$get = ["$injector", function (e) {
            return v = e, E = !1, c(), R(x, function (e, t) {
                b[t] || (b[t] = new m(e))
            }), this
        }], this.Param = function (e, t, n, i) {
            function a(e) {
                var t = F(e) ? o(e) : [], r = -1 === u(t, "value") && -1 === u(t, "type") && -1 === u(t, "squash") && -1 === u(t, "array");
                return r && (e = {value: e}), e.$$fn = l(e.value) ? e.value : function () {
                    return e.value
                }, e
            }

            function s(t, r, n) {
                if (t.type && r)throw new Error("Param '" + e + "' has two type configurations.");
                return r ? r : t.type ? t.type instanceof m ? t.type : new m(t.type) : "config" === n ? b.any : b.string
            }

            function c() {
                var t = {array: "search" === i ? "auto" : !1}, r = e.match(/\[\]$/) ? {array: !0} : {};
                return D(t, r, n).array
            }

            function f(e, t) {
                var r = e.squash;
                if (!t || r === !1)return !1;
                if (!I(r) || null == r)return y;
                if (r === !0 || M(r))return r;
                throw new Error("Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string")
            }

            function $(e, t, n, i) {
                var a, o, s = [{from: "", to: n || t ? r : ""}, {from: null, to: n || t ? r : ""}];
                return a = N(e.replace) ? e.replace : [], M(i) && a.push({from: i, to: r}), o = h(a, function (e) {
                    return e.from
                }), p(s, function (e) {
                    return -1 === u(o, e.from)
                }).concat(a)
            }

            function d() {
                if (!v)throw new Error("Injectable functions cannot be called at configuration time");
                return v.invoke(n.$$fn)
            }

            function g(e) {
                function t(e) {
                    return function (t) {
                        return t.from === e
                    }
                }

                function r(e) {
                    var r = h(p(E.replace, t(e)), function (e) {
                        return e.to
                    });
                    return r.length ? r[0] : e
                }

                return e = r(e), I(e) ? E.type.decode(e) : d()
            }

            function w() {
                return "{Param:" + e + " " + t + " squash: '" + P + "' optional: " + x + "}"
            }

            var E = this;
            n = a(n), t = s(n, t, i);
            var S = c();
            t = S ? t.$asArray(S, "search" === i) : t, "string" !== t.name || S || "path" !== i || n.value !== r || (n.value = "");
            var x = n.value !== r, P = f(n, x), j = $(n, S, x, P);
            D(this, {
                id: e,
                type: t,
                location: i,
                array: S,
                squash: P,
                replace: j,
                isOptional: x,
                value: g,
                dynamic: r,
                config: n,
                toString: w
            })
        }, f.prototype = {
            $$new: function () {
                return n(this, D(new f, {$$parent: this}))
            }, $$keys: function () {
                for (var e = [], t = [], r = this, n = o(f.prototype); r;)t.push(r), r = r.$$parent;
                return t.reverse(), R(t, function (t) {
                    R(o(t), function (t) {
                        -1 === u(e, t) && -1 === u(n, t) && e.push(t)
                    })
                }), e
            }, $$values: function (e) {
                var t = {}, r = this;
                return R(r.$$keys(), function (n) {
                    t[n] = r[n].value(e && e[n])
                }), t
            }, $$equals: function (e, t) {
                var r = !0, n = this;
                return R(n.$$keys(), function (i) {
                    var a = e && e[i], o = t && t[i];
                    n[i].type.equals(a, o) || (r = !1)
                }), r
            }, $$validates: function (e) {
                var t, r, n, i = !0, a = this;
                return R(this.$$keys(), function (o) {
                    n = a[o], r = e[o], t = !r && n.isOptional, i = i && (t || !!n.type.is(r))
                }), i
            }, $$parent: r
        }, this.ParamSet = f
    }

    function w(e, n) {
        function i(e) {
            var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
            return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
        }

        function a(e, t) {
            return e.replace(/\$(\$|\d{1,2})/, function (e, r) {
                return t["$" === r ? 0 : Number(r)]
            })
        }

        function o(e, t, r) {
            if (!r)return !1;
            var n = e.invoke(t, t, {$match: r});
            return I(n) ? n : !0
        }

        function u(n, i, a, o) {
            function u(e, t, r) {
                return "/" === $ ? e : t ? $.slice(0, -1) + e : r ? $.slice(1) + e : e
            }

            function p(e) {
                function t(e) {
                    var t = e(a, n);
                    return t ? (M(t) && n.replace().url(t), !0) : !1
                }

                if (!e || !e.defaultPrevented) {
                    var i = v && n.url() === v;
                    if (v = r, i)return !0;
                    var o, u = l.length;
                    for (o = 0; u > o; o++)if (t(l[o]))return;
                    c && t(c)
                }
            }

            function h() {
                return s = s || i.$on("$locationChangeSuccess", p)
            }

            var v, $ = o.baseHref(), d = n.url();
            return f || h(), {
                sync: function () {
                    p()
                }, listen: function () {
                    return h()
                }, update: function (e) {
                    return e ? void(d = n.url()) : void(n.url() !== d && (n.url(d), n.replace()))
                }, push: function (e, t, i) {
                    n.url(e.format(t || {})), v = i && i.$$avoidResync ? n.url() : r, i && i.replace && n.replace()
                }, href: function (r, i, a) {
                    if (!r.validates(i))return null;
                    var o = e.html5Mode();
                    t.isObject(o) && (o = o.enabled);
                    var s = r.format(i);
                    if (a = a || {}, o || null === s || (s = "#" + e.hashPrefix() + s), s = u(s, o, a.absolute), !a.absolute || !s)return s;
                    var l = !o && s ? "/" : "", c = n.port();
                    return c = 80 === c || 443 === c ? "" : ":" + c, [n.protocol(), "://", n.host(), c, l, s].join("")
                }
            }
        }

        var s, l = [], c = null, f = !1;
        this.rule = function (e) {
            if (!V(e))throw new Error("'rule' must be a function");
            return l.push(e), this
        }, this.otherwise = function (e) {
            if (M(e)) {
                var t = e;
                e = function () {
                    return t
                }
            } else if (!V(e))throw new Error("'rule' must be a function");
            return c = e, this
        }, this.when = function (e, t) {
            var r, u = M(t);
            if (M(e) && (e = n.compile(e)), !u && !V(t) && !N(t))throw new Error("invalid 'handler' in when()");
            var s = {
                matcher: function (e, t) {
                    return u && (r = n.compile(t), t = ["$match", function (e) {
                        return r.format(e)
                    }]), D(function (r, n) {
                        return o(r, t, e.exec(n.path(), n.search()))
                    }, {prefix: M(e.prefix) ? e.prefix : ""})
                }, regex: function (e, t) {
                    if (e.global || e.sticky)throw new Error("when() RegExp must not be global or sticky");
                    return u && (r = t, t = ["$match", function (e) {
                        return a(r, e)
                    }]), D(function (r, n) {
                        return o(r, t, e.exec(n.path()))
                    }, {prefix: i(e)})
                }
            }, l = {matcher: n.isMatcher(e), regex: e instanceof RegExp};
            for (var c in l)if (l[c])return this.rule(s[c](e, t));
            throw new Error("invalid 'what' in when()")
        }, this.deferIntercept = function (e) {
            e === r && (e = !0), f = e
        }, this.$get = u, u.$inject = ["$location", "$rootScope", "$injector", "$browser"]
    }

    function y(e, i) {
        function a(e) {
            return 0 === e.indexOf(".") || 0 === e.indexOf("^")
        }

        function f(e, t) {
            if (!e)return r;
            var n = M(e), i = n ? e : e.name, o = a(i);
            if (o) {
                if (!t)throw new Error("No reference point given for path '" + i + "'");
                t = f(t);
                for (var u = i.split("."), s = 0, l = u.length, c = t; l > s; s++)if ("" !== u[s] || 0 !== s) {
                    if ("^" !== u[s])break;
                    if (!c.parent)throw new Error("Path '" + i + "' not valid for state '" + t.name + "'");
                    c = c.parent
                } else c = t;
                u = u.slice(s).join("."), i = c.name + (c.name && u ? "." : "") + u
            }
            var p = x[i];
            return !p || !n && (n || p !== e && p.self !== e) ? r : p
        }

        function p(e, t) {
            P[e] || (P[e] = []), P[e].push(t)
        }

        function v(e) {
            for (var t = P[e] || []; t.length;)$(t.shift())
        }

        function $(t) {
            t = n(t, {
                self: t, resolve: t.resolve || {}, toString: function () {
                    return this.name
                }
            });
            var r = t.name;
            if (!M(r) || r.indexOf("@") >= 0)throw new Error("State must have a valid name");
            if (x.hasOwnProperty(r))throw new Error("State '" + r + "'' is already defined");
            var i = -1 !== r.indexOf(".") ? r.substring(0, r.lastIndexOf(".")) : M(t.parent) ? t.parent : F(t.parent) && M(t.parent.name) ? t.parent.name : "";
            if (i && !x[i])return p(i, t.self);
            for (var a in O)V(O[a]) && (t[a] = O[a](t, O.$delegates[a]));
            return x[r] = t, !t[j] && t.url && e.when(t.url, ["$match", "$stateParams", function (e, r) {
                S.$current.navigable == t && l(e, r) || S.transitionTo(t, e, {inherit: !0, location: !1})
            }]), v(r), t
        }

        function d(e) {
            return e.indexOf("*") > -1
        }

        function m(e) {
            var t = e.split("."), r = S.$current.name.split(".");
            if ("**" === t[0] && (r = r.slice(u(r, t[1])), r.unshift("**")), "**" === t[t.length - 1] && (r.splice(u(r, t[t.length - 2]) + 1, Number.MAX_VALUE), r.push("**")), t.length != r.length)return !1;
            for (var n = 0, i = t.length; i > n; n++)"*" === t[n] && (r[n] = "*");
            return r.join("") === t.join("")
        }

        function g(e, t) {
            return M(e) && !I(t) ? O[e] : V(t) && M(e) ? (O[e] && !O.$delegates[e] && (O.$delegates[e] = O[e]), O[e] = t, this) : this
        }

        function w(e, t) {
            return F(e) ? t = e : t.name = e, $(t), this
        }

        function y(e, i, a, u, p, v, $) {
            function g(t, r, n, a) {
                var o = e.$broadcast("$stateNotFound", t, r, n);
                if (o.defaultPrevented)return $.update(), O;
                if (!o.retry)return null;
                if (a.$retry)return $.update(), A;
                var u = S.transition = i.when(o.retry);
                return u.then(function () {
                    return u !== S.transition ? y : (t.options.$retry = !0, S.transitionTo(t.to, t.toParams, t.options))
                }, function () {
                    return O
                }), $.update(), u
            }

            function w(e, r, n, o, s, l) {
                var f = n ? r : c(e.params.$$keys(), r), h = {$stateParams: f};
                s.resolve = p.resolve(e.resolve, h, s.resolve, e);
                var v = [s.resolve.then(function (e) {
                    s.globals = e
                })];
                return o && v.push(o), R(e.views, function (r, n) {
                    var i = r.resolve && r.resolve !== e.resolve ? r.resolve : {};
                    i.$template = [function () {
                        return a.load(n, {view: r, locals: h, params: f, notify: l.notify}) || ""
                    }], v.push(p.resolve(i, h, s.resolve, e).then(function (a) {
                        if (V(r.controllerProvider) || N(r.controllerProvider)) {
                            var o = t.extend({}, i, h);
                            a.$$controller = u.invoke(r.controllerProvider, null, o)
                        } else a.$$controller = r.controller;
                        a.$$state = e, a.$$controllerAs = r.controllerAs, s[n] = a
                    }))
                }), i.all(v).then(function () {
                    return s
                })
            }

            var y = i.reject(new Error("transition superseded")), P = i.reject(new Error("transition prevented")), O = i.reject(new Error("transition aborted")), A = i.reject(new Error("transition failed"));
            return E.locals = {resolve: null, globals: {$stateParams: {}}}, S = {
                params: {},
                current: E.self,
                $current: E,
                transition: null
            }, S.reload = function () {
                return S.transitionTo(S.current, v, {reload: !0, inherit: !1, notify: !0})
            }, S.go = function (e, t, r) {
                return S.transitionTo(e, t, D({inherit: !0, relative: S.$current}, r))
            }, S.transitionTo = function (t, r, a) {
                r = r || {}, a = D({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, a || {});
                var o, l = S.$current, p = S.params, h = l.path, d = f(t, a.relative);
                if (!I(d)) {
                    var m = {to: t, toParams: r, options: a}, x = g(m, l.self, p, a);
                    if (x)return x;
                    if (t = m.to, r = m.toParams, a = m.options, d = f(t, a.relative), !I(d)) {
                        if (!a.relative)throw new Error("No such state '" + t + "'");
                        throw new Error("Could not resolve '" + t + "' from state '" + a.relative + "'")
                    }
                }
                if (d[j])throw new Error("Cannot transition to abstract state '" + t + "'");
                if (a.inherit && (r = s(v, r || {}, S.$current, d)), !d.params.$$validates(r))return A;
                r = d.params.$$values(r), t = d;
                var O = t.path, q = 0, C = O[q], k = E.locals, V = [];
                if (!a.reload)for (; C && C === h[q] && C.ownParams.$$equals(r, p);)k = V[q] = C.locals, q++, C = O[q];
                if (b(t, l, k, a))return t.self.reloadOnSearch !== !1 && $.update(), S.transition = null, i.when(S.current);
                if (r = c(t.params.$$keys(), r || {}), a.notify && e.$broadcast("$stateChangeStart", t.self, r, l.self, p).defaultPrevented)return $.update(), P;
                for (var M = i.when(k), F = q; F < O.length; F++, C = O[F])k = V[F] = n(k), M = w(C, r, C === t, M, k, a);
                var N = S.transition = M.then(function () {
                    var n, i, o;
                    if (S.transition !== N)return y;
                    for (n = h.length - 1; n >= q; n--)o = h[n], o.self.onExit && u.invoke(o.self.onExit, o.self, o.locals.globals), o.locals = null;
                    for (n = q; n < O.length; n++)i = O[n], i.locals = V[n], i.self.onEnter && u.invoke(i.self.onEnter, i.self, i.locals.globals);
                    return S.transition !== N ? y : (S.$current = t, S.current = t.self, S.params = r, U(S.params, v), S.transition = null, a.location && t.navigable && $.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
                        $$avoidResync: !0,
                        replace: "replace" === a.location
                    }), a.notify && e.$broadcast("$stateChangeSuccess", t.self, r, l.self, p), $.update(!0), S.current)
                }, function (n) {
                    return S.transition !== N ? y : (S.transition = null, o = e.$broadcast("$stateChangeError", t.self, r, l.self, p, n), o.defaultPrevented || $.update(), i.reject(n))
                });
                return N
            }, S.is = function (e, t, n) {
                n = D({relative: S.$current}, n || {});
                var i = f(e, n.relative);
                return I(i) ? S.$current !== i ? !1 : t ? l(i.params.$$values(t), v) : !0 : r
            }, S.includes = function (e, t, n) {
                if (n = D({relative: S.$current}, n || {}), M(e) && d(e)) {
                    if (!m(e))return !1;
                    e = S.$current.name
                }
                var i = f(e, n.relative);
                return I(i) ? I(S.$current.includes[i.name]) ? t ? l(i.params.$$values(t), v, o(t)) : !0 : !1 : r
            }, S.href = function (e, t, n) {
                n = D({lossy: !0, inherit: !0, absolute: !1, relative: S.$current}, n || {});
                var i = f(e, n.relative);
                if (!I(i))return null;
                n.inherit && (t = s(v, t || {}, S.$current, i));
                var a = i && n.lossy ? i.navigable : i;
                return a && a.url !== r && null !== a.url ? $.href(a.url, c(i.params.$$keys(), t || {}), {absolute: n.absolute}) : null
            }, S.get = function (e, t) {
                if (0 === arguments.length)return h(o(x), function (e) {
                    return x[e].self
                });
                var r = f(e, t || S.$current);
                return r && r.self ? r.self : null
            }, S
        }

        function b(e, t, r, n) {
            return e !== t || (r !== t.locals || n.reload) && e.self.reloadOnSearch !== !1 ? void 0 : !0
        }

        var E, S, x = {}, P = {}, j = "abstract", O = {
            parent: function (e) {
                if (I(e.parent) && e.parent)return f(e.parent);
                var t = /^(.+)\.[^.]+$/.exec(e.name);
                return t ? f(t[1]) : E
            }, data: function (e) {
                return e.parent && e.parent.data && (e.data = e.self.data = D({}, e.parent.data, e.data)), e.data
            }, url: function (e) {
                var t = e.url, r = {params: e.params || {}};
                if (M(t))return "^" == t.charAt(0) ? i.compile(t.substring(1), r) : (e.parent.navigable || E).url.concat(t, r);
                if (!t || i.isMatcher(t))return t;
                throw new Error("Invalid url '" + t + "' in state '" + e + "'")
            }, navigable: function (e) {
                return e.url ? e : e.parent ? e.parent.navigable : null
            }, ownParams: function (e) {
                var t = e.url && e.url.params || new T.ParamSet;
                return R(e.params || {}, function (e, r) {
                    t[r] || (t[r] = new T.Param(r, null, e, "config"))
                }), t
            }, params: function (e) {
                return e.parent && e.parent.params ? D(e.parent.params.$$new(), e.ownParams) : new T.ParamSet
            }, views: function (e) {
                var t = {};
                return R(I(e.views) ? e.views : {"": e}, function (r, n) {
                    n.indexOf("@") < 0 && (n += "@" + e.parent.name), t[n] = r
                }), t
            }, path: function (e) {
                return e.parent ? e.parent.path.concat(e) : []
            }, includes: function (e) {
                var t = e.parent ? D({}, e.parent.includes) : {};
                return t[e.name] = !0, t
            }, $delegates: {}
        };
        E = $({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), E.navigable = null, this.decorator = g, this.state = w, this.$get = y, y.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }

    function b() {
        function e(e, t) {
            return {
                load: function (r, n) {
                    var i, a = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return n = D(a, n), n.view && (i = t.fromConfig(n.view, n.params, n.locals)), i && n.notify && e.$broadcast("$viewContentLoading", n), i
                }
            }
        }

        this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
    }

    function E() {
        var e = !1;
        this.useAnchorScroll = function () {
            e = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (t, r) {
            return e ? t : function (e) {
                r(function () {
                    e[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }

    function S(e, r, n, i) {
        function a() {
            return r.has ? function (e) {
                return r.has(e) ? r.get(e) : null
            } : function (e) {
                try {
                    return r.get(e)
                } catch (t) {
                    return null
                }
            }
        }

        function o(e, t) {
            var r = function () {
                return {
                    enter: function (e, t, r) {
                        t.after(e), r()
                    }, leave: function (e, t) {
                        e.remove(), t()
                    }
                }
            };
            if (l)return {
                enter: function (e, t, r) {
                    var n = l.enter(e, null, t, r);
                    n && n.then && n.then(r)
                }, leave: function (e, t) {
                    var r = l.leave(e, t);
                    r && r.then && r.then(t)
                }
            };
            if (s) {
                var n = s && s(t, e);
                return {
                    enter: function (e, t, r) {
                        n.enter(e, null, t), r()
                    }, leave: function (e, t) {
                        n.leave(e), t()
                    }
                }
            }
            return r()
        }

        var u = a(), s = u("$animator"), l = u("$animate"), c = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function (r, a, u) {
                return function (r, a, s) {
                    function l() {
                        f && (f.remove(), f = null), h && (h.$destroy(), h = null), p && (m.leave(p, function () {
                            f = null
                        }), f = p, p = null)
                    }

                    function c(o) {
                        var c, f = P(r, s, a, i), g = f && e.$current && e.$current.locals[f];
                        if (o || g !== v) {
                            c = r.$new(), v = e.$current.locals[f];
                            var w = u(c, function (e) {
                                m.enter(e, a, function () {
                                    h && h.$emit("$viewContentAnimationEnded"), (t.isDefined(d) && !d || r.$eval(d)) && n(e)
                                }), l()
                            });
                            p = w, h = c, h.$emit("$viewContentLoaded"), h.$eval($)
                        }
                    }

                    var f, p, h, v, $ = s.onload || "", d = s.autoscroll, m = o(s, r);
                    r.$on("$stateChangeSuccess", function () {
                        c(!1)
                    }), r.$on("$viewContentLoading", function () {
                        c(!1)
                    }), c(!0)
                }
            }
        };
        return c
    }

    function x(e, t, r, n) {
        return {
            restrict: "ECA", priority: -400, compile: function (i) {
                var a = i.html();
                return function (i, o, u) {
                    var s = r.$current, l = P(i, u, o, n), c = s && s.locals[l];
                    if (c) {
                        o.data("$uiView", {name: l, state: c.$$state}), o.html(c.$template ? c.$template : a);
                        var f = e(o.contents());
                        if (c.$$controller) {
                            c.$scope = i;
                            var p = t(c.$$controller, c);
                            c.$$controllerAs && (i[c.$$controllerAs] = p), o.data("$ngControllerController", p), o.children().data("$ngControllerController", p)
                        }
                        f(i)
                    }
                }
            }
        }
    }

    function P(e, t, r, n) {
        var i = n(t.uiView || t.name || "")(e), a = r.inheritedData("$uiView");
        return i.indexOf("@") >= 0 ? i : i + "@" + (a ? a.state.name : "")
    }

    function j(e, t) {
        var r, n = e.match(/^\s*({[^}]*})\s*$/);
        if (n && (e = t + "(" + n[1] + ")"), r = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !r || 4 !== r.length)throw new Error("Invalid state ref '" + e + "'");
        return {state: r[1], paramExpr: r[3] || null}
    }

    function O(e) {
        var t = e.parent().inheritedData("$uiView");
        return t && t.state && t.state.name ? t.state : void 0
    }

    function A(e, r) {
        var n = ["location", "inherit", "reload"];
        return {
            restrict: "A", require: ["?^uiSrefActive", "?^uiSrefActiveEq"], link: function (i, a, o, u) {
                var s = j(o.uiSref, e.current.name), l = null, c = O(a) || e.$current, f = null, p = "A" === a.prop("tagName"), h = "FORM" === a[0].nodeName, v = h ? "action" : "href", $ = !0, d = {
                    relative: c,
                    inherit: !0
                }, m = i.$eval(o.uiSrefOpts) || {};
                t.forEach(n, function (e) {
                    e in m && (d[e] = m[e])
                });
                var g = function (r) {
                    if (r && (l = t.copy(r)), $) {
                        f = e.href(s.state, l, d);
                        var n = u[1] || u[0];
                        return n && n.$$setStateInfo(s.state, l), null === f ? ($ = !1, !1) : void o.$set(v, f)
                    }
                };
                s.paramExpr && (i.$watch(s.paramExpr, function (e) {
                    e !== l && g(e)
                }, !0), l = t.copy(i.$eval(s.paramExpr))), g(), h || a.bind("click", function (t) {
                    var n = t.which || t.button;
                    if (!(n > 1 || t.ctrlKey || t.metaKey || t.shiftKey || a.attr("target"))) {
                        var i = r(function () {
                            e.go(s.state, l, d)
                        });
                        t.preventDefault();
                        var o = p && !f ? 1 : 0;
                        t.preventDefault = function () {
                            o-- <= 0 && r.cancel(i)
                        }
                    }
                })
            }
        }
    }

    function q(e, t, r) {
        return {
            restrict: "A", controller: ["$scope", "$element", "$attrs", function (t, n, i) {
                function a() {
                    o() ? n.addClass(l) : n.removeClass(l)
                }

                function o() {
                    return "undefined" != typeof i.uiSrefActiveEq ? u && e.is(u.name, s) : u && e.includes(u.name, s)
                }

                var u, s, l;
                l = r(i.uiSrefActiveEq || i.uiSrefActive || "", !1)(t), this.$$setStateInfo = function (t, r) {
                    u = e.get(t, O(n)), s = r, a()
                }, t.$on("$stateChangeSuccess", a)
            }]
        }
    }

    function C(e) {
        var t = function (t) {
            return e.is(t)
        };
        return t.$stateful = !0, t
    }

    function k(e) {
        var t = function (t) {
            return e.includes(t)
        };
        return t.$stateful = !0, t
    }

    var I = t.isDefined, V = t.isFunction, M = t.isString, F = t.isObject, N = t.isArray, R = t.forEach, D = t.extend, U = t.copy;
    t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), v.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", v), $.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", $);
    var T;
    d.prototype.concat = function (e, t) {
        var r = {caseInsensitive: T.caseInsensitive(), strict: T.strictMode(), squash: T.defaultSquashPolicy()};
        return new d(this.sourcePath + e + this.sourceSearch, D(r, t), this)
    }, d.prototype.toString = function () {
        return this.source
    }, d.prototype.exec = function (e, t) {
        function r(e) {
            function t(e) {
                return e.split("").reverse().join("")
            }

            function r(e) {
                return e.replace(/\\-/, "-")
            }

            var n = t(e).split(/-(?!\\)/), i = h(n, t);
            return h(i, r).reverse()
        }

        var n = this.regexp.exec(e);
        if (!n)return null;
        t = t || {};
        var i, a, o, u = this.parameters(), s = u.length, l = this.segments.length - 1, c = {};
        if (l !== n.length - 1)throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (i = 0; l > i; i++) {
            o = u[i];
            var f = this.params[o], p = n[i + 1];
            for (a = 0; a < f.replace; a++)f.replace[a].from === p && (p = f.replace[a].to);
            p && f.array === !0 && (p = r(p)), c[o] = f.value(p)
        }
        for (; s > i; i++)o = u[i], c[o] = this.params[o].value(t[o]);
        return c
    }, d.prototype.parameters = function (e) {
        return I(e) ? this.params[e] || null : this.$$paramNames
    }, d.prototype.validates = function (e) {
        return this.params.$$validates(e)
    }, d.prototype.format = function (e) {
        function t(e) {
            return encodeURIComponent(e).replace(/-/g, function (e) {
                return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }

        e = e || {};
        var r = this.segments, n = this.parameters(), i = this.params;
        if (!this.validates(e))return null;
        var a, o = !1, u = r.length - 1, s = n.length, l = r[0];
        for (a = 0; s > a; a++) {
            var c = u > a, f = n[a], p = i[f], v = p.value(e[f]), $ = p.isOptional && p.type.equals(p.value(), v), d = $ ? p.squash : !1, m = p.type.encode(v);
            if (c) {
                var g = r[a + 1];
                if (d === !1)null != m && (l += N(m) ? h(m, t).join("-") : encodeURIComponent(m)), l += g; else if (d === !0) {
                    var w = l.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    l += g.match(w)[1]
                } else M(d) && (l += d + g)
            } else {
                if (null == m || $ && d !== !1)continue;
                N(m) || (m = [m]), m = h(m, encodeURIComponent).join("&" + f + "="), l += (o ? "&" : "?") + (f + "=" + m), o = !0
            }
        }
        return l
    }, m.prototype.is = function () {
        return !0
    }, m.prototype.encode = function (e) {
        return e
    }, m.prototype.decode = function (e) {
        return e
    }, m.prototype.equals = function (e, t) {
        return e == t
    }, m.prototype.$subPattern = function () {
        var e = this.pattern.toString();
        return e.substr(1, e.length - 2)
    }, m.prototype.pattern = /.*/, m.prototype.toString = function () {
        return "{Type:" + this.name + "}"
    }, m.prototype.$asArray = function (e, t) {
        function n(e, t) {
            function n(e, t) {
                return function () {
                    return e[t].apply(e, arguments)
                }
            }

            function i(e) {
                return N(e) ? e : I(e) ? [e] : []
            }

            function a(e) {
                switch (e.length) {
                    case 0:
                        return r;
                    case 1:
                        return "auto" === t ? e[0] : e;
                    default:
                        return e
                }
            }

            function o(e) {
                return !e
            }

            function u(e, t) {
                return function (r) {
                    r = i(r);
                    var n = h(r, e);
                    return t === !0 ? 0 === p(n, o).length : a(n)
                }
            }

            function s(e) {
                return function (t, r) {
                    var n = i(t), a = i(r);
                    if (n.length !== a.length)return !1;
                    for (var o = 0; o < n.length; o++)if (!e(n[o], a[o]))return !1;
                    return !0
                }
            }

            this.encode = u(n(e, "encode")), this.decode = u(n(e, "decode")), this.is = u(n(e, "is"), !0), this.equals = s(n(e, "equals")), this.pattern = e.pattern, this.$arrayMode = t
        }

        if (!e)return this;
        if ("auto" === e && !t)throw new Error("'auto' array mode is for query parameters only");
        return new n(this, e)
    }, t.module("ui.router.util").provider("$urlMatcherFactory", g), t.module("ui.router.util").run(["$urlMatcherFactory", function () {
    }]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", w), y.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").value("$stateParams", {}).provider("$state", y), b.$inject = [], t.module("ui.router.state").provider("$view", b), t.module("ui.router.state").provider("$uiViewScroll", E), S.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], x.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", S), t.module("ui.router.state").directive("uiView", x), A.$inject = ["$state", "$timeout"], q.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", A).directive("uiSrefActive", q).directive("uiSrefActiveEq", q), C.$inject = ["$state"], k.$inject = ["$state"], t.module("ui.router.state").filter("isState", C).filter("includedByState", k)
}(window, window.angular);
"use strict";
!function () {
    function e(e) {
        return ["$rootScope", "$window", function (n, o) {
            for (var a, r, t, l = o[e] || (console.warn("This browser does not support Web Storage!"), {}), u = {
                $default: function (e) {
                    for (var n in e)angular.isDefined(u[n]) || (u[n] = e[n]);
                    return u
                }, $reset: function (e) {
                    for (var n in u)"$" === n[0] || delete u[n];
                    return u.$default(e)
                }
            }, g = 0; g < l.length; g++)(t = l.key(g)) && "ngStorage-" === t.slice(0, 10) && (u[t.slice(10)] = angular.fromJson(l.getItem(t)));
            return a = angular.copy(u), n.$watch(function () {
                r || (r = setTimeout(function () {
                    if (r = null, !angular.equals(u, a)) {
                        angular.forEach(u, function (e, n) {
                            angular.isDefined(e) && "$" !== n[0] && l.setItem("ngStorage-" + n, angular.toJson(e)), delete a[n]
                        });
                        for (var e in a)l.removeItem("ngStorage-" + e);
                        a = angular.copy(u)
                    }
                }, 100))
            }), "localStorage" === e && o.addEventListener && o.addEventListener("storage", function (e) {
                "ngStorage-" === e.key.slice(0, 10) && (e.newValue ? u[e.key.slice(10)] = angular.fromJson(e.newValue) : delete u[e.key.slice(10)], a = angular.copy(u), n.$apply())
            }), u
        }]
    }

    angular.module("ngStorage", []).factory("$localStorage", e("localStorage")).factory("$sessionStorage", e("sessionStorage"))
}();
function uiUploader(e) {
    "use strict";
    function t(e) {
        for (var t = 0; t < e.length; t++)l.files.push(e[t])
    }

    function n() {
        return l.files
    }

    function i(e) {
        l.options = e;
        for (var t = 0; t < l.files.length && l.activeUploads != l.options.concurrency; t++)l.files[t].active || a(l.files[t], l.options.url)
    }

    function r(e) {
        l.files.splice(l.files.indexOf(e), 1)
    }

    function o() {
        l.files.splice(0, l.files.length)
    }

    function u(e) {
        var t = ["n/a", "bytes", "KiB", "MiB", "GiB", "TB", "PB", "EiB", "ZiB", "YiB"], n = +Math.floor(Math.log(e) / Math.log(1024));
        return (e / Math.pow(1024, n)).toFixed(n ? 1 : 0) + " " + t[isNaN(e) ? 0 : n + 1]
    }

    function a(e, t) {
        var n, r, o, a = "", s = "file";
        if (l.activeUploads += 1, e.active = !0, n = new window.XMLHttpRequest, r = new window.FormData, n.open("POST", t), n.upload.onloadstart = function () {
            }, n.upload.onprogress = function (t) {
                t.lengthComputable && (e.loaded = t.loaded, e.humanSize = u(t.loaded), l.options.onProgress(e))
            }, n.onload = function () {
                l.activeUploads -= 1, i(l.options), l.options.onCompleted(e, n.responseText)
            }, n.onerror = function () {
            }, a)for (o in a)a.hasOwnProperty(o) && r.append(o, a[o]);
        return r.append(s, e, e.name), n.send(r), n
    }

    var l = this;
    return l.files = [], l.options = {}, l.activeUploads = 0, e.info("uiUploader loaded"), {
        addFiles: t,
        getFiles: n,
        files: l.files,
        startUpload: i,
        removeFile: r,
        removeAll: o
    }
}
angular.module("ui.alias", []).config(["$compileProvider", "uiAliasConfig", function (e, t) {
    "use strict";
    t = t || {}, angular.forEach(t, function (t, n) {
        angular.isString(t) && (t = {replace: !0, template: t}), e.directive(n, function () {
            return t
        })
    })
}]), angular.module("ui.event", []).directive("uiEvent", ["$parse", function (e) {
    "use strict";
    return function (t, n, i) {
        var r = t.$eval(i.uiEvent);
        angular.forEach(r, function (i, r) {
            var o = e(i);
            n.bind(r, function (e) {
                var n = Array.prototype.slice.call(arguments);
                n = n.splice(1), o(t, {$event: e, $params: n}), t.$$phase || t.$apply()
            })
        })
    }
}]), angular.module("ui.format", []).filter("format", function () {
    "use strict";
    return function (e, t) {
        var n = e;
        if (angular.isString(n) && void 0 !== t)if (angular.isArray(t) || angular.isObject(t) || (t = [t]), angular.isArray(t)) {
            var i = t.length, r = function (e, n) {
                return n = parseInt(n, 10), n >= 0 && i > n ? t[n] : e
            };
            n = n.replace(/\$([0-9]+)/g, r)
        } else angular.forEach(t, function (e, t) {
            n = n.split(":" + t).join(e)
        });
        return n
    }
}), angular.module("ui.highlight", []).filter("highlight", function () {
    "use strict";
    return function (e, t, n) {
        return e && (t || angular.isNumber(t)) ? (e = e.toString(), t = t.toString(), n ? e.split(t).join('<span class="ui-match">' + t + "</span>") : e.replace(new RegExp(t, "gi"), '<span class="ui-match">$&</span>')) : e
    }
}), angular.module("ui.include", []).directive("uiInclude", ["$http", "$templateCache", "$anchorScroll", "$compile", function (e, t, n, i) {
    "use strict";
    return {
        restrict: "ECA", terminal: !0, compile: function (r, o) {
            var u = o.uiInclude || o.src, a = o.fragment || "", l = o.onload || "", s = o.autoscroll;
            return function (r, o) {
                function c() {
                    var c = ++d, g = r.$eval(u), h = r.$eval(a);
                    g ? e.get(g, {cache: t}).success(function (e) {
                        if (c === d) {
                            f && f.$destroy(), f = r.$new();
                            var t;
                            t = h ? angular.element("<div/>").html(e).find(h) : angular.element("<div/>").html(e).contents(), o.html(t), i(t)(f), !angular.isDefined(s) || s && !r.$eval(s) || n(), f.$emit("$includeContentLoaded"), r.$eval(l)
                        }
                    }).error(function () {
                        c === d && p()
                    }) : p()
                }

                var f, d = 0, p = function () {
                    f && (f.$destroy(), f = null), o.html("")
                };
                r.$watch(a, c), r.$watch(u, c)
            }
        }
    }
}]), angular.module("ui.indeterminate", []).directive("uiIndeterminate", [function () {
    "use strict";
    return {
        compile: function (e, t) {
            return t.type && "checkbox" === t.type.toLowerCase() ? function (e, t, n) {
                e.$watch(n.uiIndeterminate, function (e) {
                    t[0].indeterminate = !!e
                })
            } : angular.noop
        }
    }
}]), angular.module("ui.inflector", []).filter("inflector", function () {
    "use strict";
    function e(e) {
        return e = e.replace(/([A-Z])|([\-|\_])/g, function (e, t) {
            return " " + (t || "")
        }), e.replace(/\s\s+/g, " ").trim().toLowerCase().split(" ")
    }

    function t(e) {
        var t = [];
        return angular.forEach(e, function (e) {
            t.push(e.charAt(0).toUpperCase() + e.substr(1))
        }), t
    }

    var n = {
        humanize: function (n) {
            return t(e(n)).join(" ")
        }, underscore: function (t) {
            return e(t).join("_")
        }, variable: function (n) {
            return n = e(n), n = n[0] + t(n.slice(1)).join("")
        }
    };
    return function (e, t) {
        return t !== !1 && angular.isString(e) ? (t = t || "humanize", n[t](e)) : e
    }
}), angular.module("ui.jq", []).value("uiJqConfig", {}).directive("uiJq", ["uiJqConfig", "$timeout", function (e, t) {
    "use strict";
    return {
        restrict: "A", compile: function (n, i) {
            if (!angular.isFunction(n[i.uiJq]))throw new Error('ui-jq: The "' + i.uiJq + '" function does not exist');
            var r = e && e[i.uiJq];
            return function (e, n, i) {
                function o() {
                    var t = [];
                    return i.uiOptions ? (t = e.$eval("[" + i.uiOptions + "]"), angular.isObject(r) && angular.isObject(t[0]) && (t[0] = angular.extend({}, r, t[0]))) : r && (t = [r]), t
                }

                function u() {
                    t(function () {
                        n[i.uiJq].apply(n, o())
                    }, 0, !1)
                }

                i.ngModel && n.is("select,input,textarea") && n.bind("change", function () {
                    n.trigger("input")
                }), i.uiRefresh && e.$watch(i.uiRefresh, function () {
                    u()
                }), u()
            }
        }
    }
}]), angular.module("ui.keypress", []).factory("keypressHelper", ["$parse", function (e) {
    "use strict";
    var t = {
        8: "backspace",
        9: "tab",
        13: "enter",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "insert",
        46: "delete"
    }, n = function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    };
    return function (i, r, o, u) {
        var a, l = [];
        a = r.$eval(u["ui" + n(i)]), angular.forEach(a, function (t, n) {
            var i, r;
            r = e(t), angular.forEach(n.split(" "), function (e) {
                i = {expression: r, keys: {}}, angular.forEach(e.split("-"), function (e) {
                    i.keys[e] = !0
                }), l.push(i)
            })
        }), o.bind(i, function (e) {
            var n = !(!e.metaKey || e.ctrlKey), o = !!e.altKey, u = !!e.ctrlKey, a = !!e.shiftKey, s = e.keyCode;
            "keypress" === i && !a && s >= 97 && 122 >= s && (s -= 32), angular.forEach(l, function (i) {
                var l = i.keys[t[s]] || i.keys[s.toString()], c = !!i.keys.meta, f = !!i.keys.alt, d = !!i.keys.ctrl, p = !!i.keys.shift;
                l && c === n && f === o && d === u && p === a && r.$apply(function () {
                    i.expression(r, {$event: e})
                })
            })
        })
    }
}]), angular.module("ui.keypress").directive("uiKeydown", ["keypressHelper", function (e) {
    "use strict";
    return {
        link: function (t, n, i) {
            e("keydown", t, n, i)
        }
    }
}]), angular.module("ui.keypress").directive("uiKeypress", ["keypressHelper", function (e) {
    "use strict";
    return {
        link: function (t, n, i) {
            e("keypress", t, n, i)
        }
    }
}]), angular.module("ui.keypress").directive("uiKeyup", ["keypressHelper", function (e) {
    "use strict";
    return {
        link: function (t, n, i) {
            e("keyup", t, n, i)
        }
    }
}]), angular.module("ui.mask", []).value("uiMaskConfig", {
    maskDefinitions: {9: /\d/, A: /[a-zA-Z]/, "*": /[a-zA-Z0-9]/},
    clearOnBlur: !0
}).directive("uiMask", ["uiMaskConfig", "$parse", function (e, t) {
    "use strict";
    return {
        priority: 100, require: "ngModel", restrict: "A", compile: function () {
            var n = e;
            return function (e, i, r, o) {
                function u(e) {
                    return angular.isDefined(e) ? (b(e), B ? (f(), d(), !0) : c()) : c()
                }

                function a(e) {
                    angular.isDefined(e) && (T = e, B && k())
                }

                function l(e) {
                    return B ? (M = h(e || ""), q = g(M), o.$setValidity("mask", q), q && M.length ? m(M) : void 0) : e
                }

                function s(e) {
                    return B ? (M = h(e || ""), q = g(M), o.$viewValue = M.length ? m(M) : "", o.$setValidity("mask", q), "" === M && r.required && o.$setValidity("required", !o.$error.required), q ? M : void 0) : e
                }

                function c() {
                    return B = !1, p(), angular.isDefined(U) ? i.attr("placeholder", U) : i.removeAttr("placeholder"), angular.isDefined(z) ? i.attr("maxlength", z) : i.removeAttr("maxlength"), i.val(o.$modelValue), o.$viewValue = o.$modelValue, !1
                }

                function f() {
                    M = j = h(o.$viewValue || ""), R = A = m(M), q = g(M);
                    var e = q && M.length ? R : "";
                    r.maxlength && i.attr("maxlength", 2 * C[C.length - 1]), i.attr("placeholder", T), i.val(e), o.$viewValue = e
                }

                function d() {
                    _ || (i.bind("blur", y), i.bind("mousedown mouseup", w), i.bind("input keyup click focus", k), _ = !0)
                }

                function p() {
                    _ && (i.unbind("blur", y), i.unbind("mousedown", w), i.unbind("mouseup", w), i.unbind("input", k), i.unbind("keyup", k), i.unbind("click", k), i.unbind("focus", k), _ = !1)
                }

                function g(e) {
                    return e.length ? e.length >= D : !0
                }

                function h(e) {
                    var t = "", n = O.slice();
                    return e = e.toString(), angular.forEach(P, function (t) {
                        e = e.replace(t, "")
                    }), angular.forEach(e.split(""), function (e) {
                        n.length && n[0].test(e) && (t += e, n.shift())
                    }), t
                }

                function m(e) {
                    var t = "", n = C.slice();
                    return angular.forEach(T.split(""), function (i, r) {
                        e.length && r === n[0] ? (t += e.charAt(0) || "_", e = e.substr(1), n.shift()) : t += i
                    }), t
                }

                function v(e) {
                    var t = r.placeholder;
                    return "undefined" != typeof t && t[e] ? t[e] : "_"
                }

                function $() {
                    return T.replace(/[_]+/g, "_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3").split("_")
                }

                function b(e) {
                    var t = 0;
                    if (C = [], O = [], T = "", "string" == typeof e) {
                        D = 0;
                        var n = !1, i = e.split("");
                        angular.forEach(i, function (e, i) {
                            K.maskDefinitions[e] ? (C.push(t), T += v(i), O.push(K.maskDefinitions[e]), t++, n || D++) : "?" === e ? n = !0 : (T += e, t++)
                        })
                    }
                    C.push(C.slice().pop() + 1), P = $(), B = C.length > 1 ? !0 : !1
                }

                function y() {
                    K.clearOnBlur && (F = 0, L = 0, q && 0 !== M.length || (R = "", i.val(""), e.$apply(function () {
                        o.$setViewValue("")
                    })))
                }

                function w(e) {
                    "mousedown" === e.type ? i.bind("mouseout", x) : i.unbind("mouseout", x)
                }

                function x() {
                    L = H(this), i.unbind("mouseout", x)
                }

                function k(t) {
                    t = t || {};
                    var n = t.which, r = t.type;
                    if (16 !== n && 91 !== n) {
                        var u, a = i.val(), l = A, s = h(a), c = j, f = !1, d = E(this) || 0, p = F || 0, g = d - p, v = C[0], $ = C[s.length] || C.slice().shift(), b = L || 0, y = H(this) > 0, w = b > 0, x = a.length > l.length || b && a.length > l.length - b, k = a.length < l.length || b && a.length === l.length - b, O = n >= 37 && 40 >= n && t.shiftKey, T = 37 === n, P = 8 === n || "keyup" !== r && k && -1 === g, D = 46 === n || "keyup" !== r && k && 0 === g && !w, M = (T || P || "click" === r) && d > v;
                        if (L = H(this), !O && (!y || "click" !== r && "keyup" !== r)) {
                            if ("input" === r && k && !w && s === c) {
                                for (; P && d > v && !S(d);)d--;
                                for (; D && $ > d && -1 === C.indexOf(d);)d++;
                                var R = C.indexOf(d);
                                s = s.substring(0, R) + s.substring(R + 1), f = !0
                            }
                            for (u = m(s), A = u, j = s, i.val(u), f && e.$apply(function () {
                                o.$setViewValue(s)
                            }), x && v >= d && (d = v + 1), M && d--, d = d > $ ? $ : v > d ? v : d; !S(d) && d > v && $ > d;)d += M ? -1 : 1;
                            (M && $ > d || x && !S(p)) && d++, F = d, V(this, d)
                        }
                    }
                }

                function S(e) {
                    return C.indexOf(e) > -1
                }

                function E(e) {
                    if (!e)return 0;
                    if (void 0 !== e.selectionStart)return e.selectionStart;
                    if (document.selection) {
                        e.focus();
                        var t = document.selection.createRange();
                        return t.moveStart("character", e.value ? -e.value.length : 0), t.text.length
                    }
                    return 0
                }

                function V(e, t) {
                    if (!e)return 0;
                    if (0 !== e.offsetWidth && 0 !== e.offsetHeight)if (e.setSelectionRange)e.focus(), e.setSelectionRange(t, t); else if (e.createTextRange) {
                        var n = e.createTextRange();
                        n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select()
                    }
                }

                function H(e) {
                    return e ? void 0 !== e.selectionStart ? e.selectionEnd - e.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0
                }

                var C, O, T, P, D, M, R, q, A, j, F, L, B = !1, _ = !1, U = r.placeholder, z = r.maxlength, K = {};
                r.uiOptions ? (K = e.$eval("[" + r.uiOptions + "]"), angular.isObject(K[0]) && (K = function (e, t) {
                    for (var n in e)Object.prototype.hasOwnProperty.call(e, n) && (void 0 === t[n] ? t[n] = angular.copy(e[n]) : angular.extend(t[n], e[n]));
                    return t
                }(n, K[0]))) : K = n, r.$observe("uiMask", u), r.$observe("placeholder", a);
                var W = !1;
                r.$observe("modelViewValue", function (e) {
                    "true" === e && (W = !0)
                }), e.$watch(r.ngModel, function (n) {
                    if (W && n) {
                        var i = t(r.ngModel);
                        i.assign(e, o.$viewValue)
                    }
                }), o.$formatters.push(l), o.$parsers.push(s), i.bind("mousedown mouseup", w), Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
                    if (null === this)throw new TypeError;
                    var t = Object(this), n = t.length >>> 0;
                    if (0 === n)return -1;
                    var i = 0;
                    if (arguments.length > 1 && (i = Number(arguments[1]), i !== i ? i = 0 : 0 !== i && 1 / 0 !== i && i !== -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n)return -1;
                    for (var r = i >= 0 ? i : Math.max(n - Math.abs(i), 0); n > r; r++)if (r in t && t[r] === e)return r;
                    return -1
                })
            }
        }
    }
}]), angular.module("ui.reset", []).value("uiResetConfig", null).directive("uiReset", ["uiResetConfig", function (e) {
    "use strict";
    var t = null;
    return void 0 !== e && (t = e), {
        require: "ngModel", link: function (e, n, i, r) {
            var o;
            o = angular.element('<a class="ui-reset" />'), n.wrap('<span class="ui-resetwrap" />').after(o), o.bind("click", function (n) {
                n.preventDefault(), e.$apply(function () {
                    r.$setViewValue(i.uiReset ? e.$eval(i.uiReset) : t), r.$render()
                })
            })
        }
    }
}]), angular.module("ui.route", []).directive("uiRoute", ["$location", "$parse", function (e, t) {
    "use strict";
    return {
        restrict: "AC", scope: !0, compile: function (n, i) {
            var r;
            if (i.uiRoute)r = "uiRoute"; else if (i.ngHref)r = "ngHref"; else {
                if (!i.href)throw new Error("uiRoute missing a route or href property on " + n[0]);
                r = "href"
            }
            return function (n, i, o) {
                function u(t) {
                    var i = t.indexOf("#");
                    i > -1 && (t = t.substr(i + 1)), (s = function () {
                        l(n, e.path().indexOf(t) > -1)
                    })()
                }

                function a(t) {
                    var i = t.indexOf("#");
                    i > -1 && (t = t.substr(i + 1)), (s = function () {
                        var i = new RegExp("^" + t + "$", ["i"]);
                        l(n, i.test(e.path()))
                    })()
                }

                var l = t(o.ngModel || o.routeModel || "$uiRoute").assign, s = angular.noop;
                switch (r) {
                    case"uiRoute":
                        o.uiRoute ? a(o.uiRoute) : o.$observe("uiRoute", a);
                        break;
                    case"ngHref":
                        o.ngHref ? u(o.ngHref) : o.$observe("ngHref", u);
                        break;
                    case"href":
                        u(o.href)
                }
                n.$on("$routeChangeSuccess", function () {
                    s()
                }), n.$on("$stateChangeSuccess", function () {
                    s()
                })
            }
        }
    }
}]), angular.module("ui.scroll.jqlite", ["ui.scroll"]).service("jqLiteExtras", ["$log", "$window", function (e, t) {
    "use strict";
    return {
        registerFor: function (e) {
            var n, i, r, o, u, a, l;
            return i = angular.element.prototype.css, e.prototype.css = function (e, t) {
                var n, r;
                return r = this, n = r[0], n && 3 !== n.nodeType && 8 !== n.nodeType && n.style ? i.call(r, e, t) : void 0
            }, a = function (e) {
                return e && e.document && e.location && e.alert && e.setInterval
            }, l = function (e, t, n) {
                var i, r, o, u, l;
                return i = e[0], l = {
                    top: ["scrollTop", "pageYOffset", "scrollLeft"],
                    left: ["scrollLeft", "pageXOffset", "scrollTop"]
                }[t], r = l[0], u = l[1], o = l[2], a(i) ? angular.isDefined(n) ? i.scrollTo(e[o].call(e), n) : u in i ? i[u] : i.document.documentElement[r] : angular.isDefined(n) ? i[r] = n : i[r]
            }, t.getComputedStyle ? (o = function (e) {
                return t.getComputedStyle(e, null)
            }, n = function (e, t) {
                return parseFloat(t)
            }) : (o = function (e) {
                return e.currentStyle
            }, n = function (e, t) {
                var n, i, r, o, u, a, l;
                return n = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, o = new RegExp("^(" + n + ")(?!px)[a-z%]+$", "i"), o.test(t) ? (l = e.style, i = l.left, u = e.runtimeStyle, a = u && u.left, u && (u.left = l.left), l.left = t, r = l.pixelLeft, l.left = i, a && (u.left = a), r) : parseFloat(t)
            }), r = function (e, t) {
                var i, r, u, l, s, c, f, d, p, g, h, m, v;
                return a(e) ? (i = document.documentElement[{height: "clientHeight", width: "clientWidth"}[t]], {
                    base: i,
                    padding: 0,
                    border: 0,
                    margin: 0
                }) : (v = {
                    width: [e.offsetWidth, "Left", "Right"],
                    height: [e.offsetHeight, "Top", "Bottom"]
                }[t], i = v[0], f = v[1], d = v[2], c = o(e), h = n(e, c["padding" + f]) || 0, m = n(e, c["padding" + d]) || 0, r = n(e, c["border" + f + "Width"]) || 0, u = n(e, c["border" + d + "Width"]) || 0, l = c["margin" + f], s = c["margin" + d], p = n(e, l) || 0, g = n(e, s) || 0, {
                    base: i,
                    padding: h + m,
                    border: r + u,
                    margin: p + g
                })
            }, u = function (e, t, n) {
                var i, u, a;
                return u = r(e, t), u.base > 0 ? {
                    base: u.base - u.padding - u.border,
                    outer: u.base,
                    outerfull: u.base + u.margin
                }[n] : (i = o(e), a = i[t], (0 > a || null === a) && (a = e.style[t] || 0), a = parseFloat(a) || 0, {
                    base: a - u.padding - u.border,
                    outer: a,
                    outerfull: a + u.padding + u.border + u.margin
                }[n])
            }, angular.forEach({
                before: function (e) {
                    var t, n, i, r, o, u, a;
                    if (o = this, n = o[0], r = o.parent(), t = r.contents(), t[0] === n)return r.prepend(e);
                    for (i = u = 1, a = t.length - 1; a >= 1 ? a >= u : u >= a; i = a >= 1 ? ++u : --u)if (t[i] === n)return void angular.element(t[i - 1]).after(e);
                    throw new Error("invalid DOM structure " + n.outerHTML)
                }, height: function (e) {
                    var t;
                    return t = this, angular.isDefined(e) ? (angular.isNumber(e) && (e += "px"), i.call(t, "height", e)) : u(this[0], "height", "base")
                }, outerHeight: function (e) {
                    return u(this[0], "height", e ? "outerfull" : "outer")
                }, offset: function (e) {
                    var t, n, i, r, o, u;
                    if (o = this, arguments.length) {
                        if (void 0 === e)return o;
                        throw new Error("offset setter method is not implemented")
                    }
                    return t = {
                        top: 0,
                        left: 0
                    }, r = o[0], (n = r && r.ownerDocument) ? (i = n.documentElement, null != r.getBoundingClientRect && (t = r.getBoundingClientRect()), u = n.defaultView || n.parentWindow, {
                        top: t.top + (u.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                        left: t.left + (u.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
                    }) : void 0
                }, scrollTop: function (e) {
                    return l(this, "top", e)
                }, scrollLeft: function (e) {
                    return l(this, "left", e)
                }
            }, function (t, n) {
                return e.prototype[n] ? void 0 : e.prototype[n] = t
            })
        }
    }
}]).run(["$log", "$window", "jqLiteExtras", function (e, t, n) {
    "use strict";
    return t.jQuery ? void 0 : n.registerFor(angular.element)
}]), angular.module("ui.scroll", []).directive("uiScrollViewport", ["$log", function () {
    "use strict";
    return {
        controller: ["$scope", "$element", function (e, t) {
            return this.viewport = t, this
        }]
    }
}]).directive("uiScroll", ["$log", "$injector", "$rootScope", "$timeout", function (e, t, n, i) {
    "use strict";
    return {
        require: ["?^uiScrollViewport"],
        transclude: "element",
        priority: 1e3,
        terminal: !0,
        compile: function (r, o, u) {
            return function (r, o, a, l) {
                var s, c, f, d, p, g, h, m, v, $, b, y, w, x, k, S, E, V, H, C, O, T, P, D, M, R, q, A, j, F, L, B, _, U, z, K, W, I, J, N, Y, Z, X, G, Q, et, tt, nt;
                if (q = e.debug || e.log, A = a.uiScroll.match(/^\s*(\w+)\s+in\s+([\w\.]+)\s*$/), !A)throw new Error("Expected uiScroll in form of '_item_ in _datasource_' but got '" + a.uiScroll + "'");
                if (M = A[1], y = A[2], P = function (e) {
                        return angular.isObject(e) && e.get && angular.isFunction(e.get)
                    }, C = function (e, t) {
                        var n;
                        return e ? (n = t.match(/^([\w]+)\.(.+)$/), n && 3 === n.length ? C(e[n[1]], n[2]) : e[t]) : null
                    }, b = C(r, y), !P(b) && (b = t.get(y), !P(b)))throw new Error("" + y + " is not a valid datasource");
                return m = Math.max(3, +a.bufferSize || 10), h = function () {
                    return et.outerHeight() * Math.max(.1, +a.padding || .1)
                }, K = function (e) {
                    var t;
                    return null != (t = e[0].scrollHeight) ? t : e[0].document.documentElement.scrollHeight
                }, s = null, u(N = r.$new(), function (e) {
                    var t, n, i, r, u, a;
                    if (r = e[0].localName, "dl" === r)throw new Error("ui-scroll directive does not support <" + e[0].localName + "> as a repeating tag: " + e[0].outerHTML);
                    return "li" !== r && "tr" !== r && (r = "div"), a = l[0] && l[0].viewport ? l[0].viewport : angular.element(window), a.css({
                        "overflow-y": "auto",
                        display: "block"
                    }), i = function (e) {
                        var t, n, i;
                        switch (e) {
                            case"tr":
                                return i = angular.element("<table><tr><td><div></div></td></tr></table>"), t = i.find("div"), n = i.find("tr"), n.paddingHeight = function () {
                                    return t.height.apply(t, arguments)
                                }, n;
                            default:
                                return n = angular.element("<" + e + "></" + e + ">"), n.paddingHeight = n.height, n
                        }
                    }, n = function (e, t, n) {
                        return t[{top: "before", bottom: "after"}[n]](e), {
                            paddingHeight: function () {
                                return e.paddingHeight.apply(e, arguments)
                            }, insert: function (t) {
                                return e[{top: "after", bottom: "before"}[n]](t)
                            }
                        }
                    }, u = n(i(r), o, "top"), t = n(i(r), o, "bottom"), N.$destroy(), s = {
                        viewport: a,
                        topPadding: u.paddingHeight,
                        bottomPadding: t.paddingHeight,
                        append: t.insert,
                        prepend: u.insert,
                        bottomDataPos: function () {
                            return K(a) - t.paddingHeight()
                        },
                        topDataPos: function () {
                            return u.paddingHeight()
                        }
                    }
                }), et = s.viewport, tt = et.scope() || n, angular.isDefined(a.topVisible) && (X = function (e) {
                    return tt[a.topVisible] = e
                }), angular.isDefined(a.topVisibleElement) && (Z = function (e) {
                    return tt[a.topVisibleElement] = e
                }), angular.isDefined(a.topVisibleScope) && (Q = function (e) {
                    return tt[a.topVisibleScope] = e
                }), Y = function (e) {
                    return X && X(e.scope[M]), Z && Z(e.element), Q && Q(e.scope), b.topVisible ? b.topVisible(e) : void 0
                }, R = angular.isDefined(a.isLoading) ? function (e) {
                    return tt[a.isLoading] = e, b.loading ? b.loading(e) : void 0
                } : function (e) {
                    return b.loading ? b.loading(e) : void 0
                }, U = 0, H = 1, j = 1, g = [], F = [], k = !1, d = !1, D = !1, B = function (e, t) {
                    var n, i;
                    for (n = i = e; t >= e ? t > i : i > t; n = t >= e ? ++i : --i)g[n].scope.$destroy(), g[n].element.remove();
                    return g.splice(e, t - e)
                }, L = function () {
                    return U++, H = 1, j = 1, B(0, g.length), s.topPadding(0), s.bottomPadding(0), F = [], k = !1, d = !1, c(U, !1)
                }, p = function () {
                    return et.scrollTop() + et.outerHeight()
                }, G = function () {
                    return et.scrollTop()
                }, W = function () {
                    return !k && s.bottomDataPos() < p() + h()
                }, v = function () {
                    var e, t, n, i, r, o, u, a, l, c;
                    for (e = 0, u = 0, t = l = c = g.length - 1; 0 >= c ? 0 >= l : l >= 0; t = 0 >= c ? ++l : --l)if (n = g[t], r = n.element.offset().top, o = a !== r, a = r, o && (i = n.element.outerHeight(!0)), s.bottomDataPos() - e - i > p() + h())o && (e += i), u++, k = !1; else {
                        if (o)break;
                        u++
                    }
                    return u > 0 ? (s.bottomPadding(s.bottomPadding() + e), B(g.length - u, g.length), j -= u, q("clipped off bottom " + u + " bottom padding " + s.bottomPadding())) : void 0
                }, I = function () {
                    return !d && s.topDataPos() > G() - h()
                }, $ = function () {
                    var e, t, n, i, r, o, u, a, l;
                    for (u = 0, r = 0, a = 0, l = g.length; l > a; a++)if (e = g[a], n = e.element.offset().top, i = o !== n, o = n, i && (t = e.element.outerHeight(!0)), s.topDataPos() + u + t < G() - h())i && (u += t), r++, d = !1; else {
                        if (i)break;
                        r++
                    }
                    return r > 0 ? (s.topPadding(s.topPadding() + u), B(0, r), H += r, q("clipped off top " + r + " top padding " + s.topPadding())) : void 0
                }, x = function (e, t, n) {
                    return D || (D = !0, R(!0)), 1 === F.push(t) ? E(e, n) : void 0
                }, O = function (e) {
                    return e.displayTemp = e.css("display"), e.css("display", "none")
                }, J = function (e) {
                    return e.hasOwnProperty("displayTemp") ? e.css("display", e.displayTemp) : void 0
                }, T = function (e, t) {
                    var n, i, o;
                    return n = r.$new(), n[M] = t, i = e > H, n.$index = e, i && n.$index--, o = {scope: n}, u(n, function (t) {
                        return o.element = t, i ? e === j ? (O(t), s.append(t), g.push(o)) : (g[e - H].element.after(t), g.splice(e - H + 1, 0, o)) : (O(t), s.prepend(t), g.unshift(o))
                    }), {appended: i, wrapper: o}
                }, f = function (e, t) {
                    var n;
                    return e ? s.bottomPadding(Math.max(0, s.bottomPadding() - t.element.outerHeight(!0))) : (n = s.topPadding() - t.element.outerHeight(!0), n >= 0 ? s.topPadding(n) : et.scrollTop(et.scrollTop() + t.element.outerHeight(!0)))
                }, w = function (e, t, n) {
                    var i, r, o, u, a, l, c, f, d;
                    if (q("top {actual=" + s.topDataPos() + " visible from=" + G() + " bottom {visible through=" + p() + " actual=" + s.bottomDataPos() + "}"), W() ? x(e, !0, t) : I() && x(e, !1, t), n && n(e), 0 === F.length) {
                        for (l = 0, d = [], c = 0, f = g.length; f > c; c++) {
                            if (i = g[c], o = i.element.offset().top, u = a !== o, a = o, u && (r = i.element.outerHeight(!0)), !(u && s.topDataPos() + l + r < G())) {
                                u && Y(i);
                                break
                            }
                            d.push(l += r)
                        }
                        return d
                    }
                }, c = function (e, t, n, r) {
                    return n && n.length ? i(function () {
                        var i, u, a, l, s, c, d, p;
                        for (l = [], s = 0, d = n.length; d > s; s++)u = n[s], o = u.wrapper.element, J(o), i = o.offset().top, a !== i && (l.push(u), a = i);
                        for (c = 0, p = l.length; p > c; c++)u = l[c], f(u.appended, u.wrapper);
                        return w(e, t, r)
                    }) : w(e, t, r)
                }, V = function (e, t, n) {
                    return c(e, t, n, function () {
                        return F.shift(), 0 === F.length ? (D = !1, R(!1)) : E(e, t)
                    })
                }, E = function (e, t) {
                    var n;
                    return n = F[0], n ? g.length && !W() ? V(e, t) : b.get(j, m, function (n) {
                        var i, r, o, u;
                        if (!e || e === U) {
                            if (r = [], n.length < m && (k = !0, s.bottomPadding(0)), n.length > 0)for ($(), o = 0, u = n.length; u > o; o++)i = n[o], r.push(T(++j, i));
                            return V(e, t, r)
                        }
                    }) : g.length && !I() ? V(e, t) : b.get(H - m, m, function (n) {
                        var i, r, o, u;
                        if (!e || e === U) {
                            if (r = [], n.length < m && (d = !0, s.topPadding(0)), n.length > 0)for (g.length && v(), i = o = u = n.length - 1; 0 >= u ? 0 >= o : o >= 0; i = 0 >= u ? ++o : --o)r.unshift(T(--H, n[i]));
                            return V(e, t, r)
                        }
                    })
                }, _ = function () {
                    return n.$$phase || D ? void 0 : (c(null, !1), r.$apply())
                }, et.bind("resize", _), z = function () {
                    return n.$$phase || D ? void 0 : (c(null, !0), r.$apply())
                }, et.bind("scroll", z), nt = function (e) {
                    var t, n;
                    return t = et[0].scrollTop, n = et[0].scrollHeight - et[0].clientHeight, 0 === t && !d || t === n && !k ? e.preventDefault() : void 0
                }, et.bind("mousewheel", nt), r.$watch(b.revision, function () {
                    return L()
                }), S = b.scope ? b.scope.$new() : r.$new(), r.$on("$destroy", function () {
                    return S.$destroy(), et.unbind("resize", _), et.unbind("scroll", z), et.unbind("mousewheel", nt)
                }), S.$on("update.items", function (e, t, n) {
                    var i, r, o, u, a;
                    if (angular.isFunction(t))for (r = function (e) {
                        return t(e.scope)
                    }, o = 0, u = g.length; u > o; o++)i = g[o], r(i); else 0 <= (a = t - H - 1) && a < g.length && (g[t - H - 1].scope[M] = n);
                    return null
                }), S.$on("delete.items", function (e, t) {
                    var n, i, r, o, u, a, l, s, f, d, p, h;
                    if (angular.isFunction(t)) {
                        for (r = [], a = 0, f = g.length; f > a; a++)i = g[a], r.unshift(i);
                        for (u = function (e) {
                            return t(e.scope) ? (B(r.length - 1 - n, r.length - n), j--) : void 0
                        }, n = l = 0, d = r.length; d > l; n = ++l)o = r[n], u(o)
                    } else 0 <= (h = t - H - 1) && h < g.length && (B(t - H - 1, t - H), j--);
                    for (n = s = 0, p = g.length; p > s; n = ++s)i = g[n], i.scope.$index = H + n;
                    return c(null, !1)
                }), S.$on("insert.item", function (e, t, n) {
                    var i, r, o, u, a;
                    if (r = [], angular.isFunction(t))throw new Error("not implemented - Insert with locator function");
                    for (0 <= (a = t - H - 1) && a < g.length && (r.push(T(t, n)), j++), i = o = 0, u = g.length; u > o; i = ++o)n = g[i], n.scope.$index = H + i;
                    return c(null, !1, r)
                })
            }
        }
    }
}]), angular.module("ui.scrollfix", []).directive("uiScrollfix", ["$window", function (e) {
    "use strict";
    function t() {
        if (angular.isDefined(e.pageYOffset))return e.pageYOffset;
        var t = document.compatMode && "BackCompat" !== document.compatMode ? document.documentElement : document.body;
        return t.scrollTop
    }

    return {
        require: "^?uiScrollfixTarget", link: function (n, i, r, o) {
            function u() {
                var e = l ? r.uiScrollfix : i[0].offsetTop + s, n = o ? c[0].scrollTop : t();
                !i.hasClass("ui-scrollfix") && n > e ? (i.addClass("ui-scrollfix"), a = e) : i.hasClass("ui-scrollfix") && a > n && i.removeClass("ui-scrollfix")
            }

            var a, l = !0, s = 0, c = o && o.$element || angular.element(e);
            r.uiScrollfix ? "string" == typeof r.uiScrollfix && ("-" === r.uiScrollfix.charAt(0) ? (l = !1, s = -parseFloat(r.uiScrollfix.substr(1))) : "+" === r.uiScrollfix.charAt(0) && (l = !1, s = parseFloat(r.uiScrollfix.substr(1)))) : l = !1, a = l ? r.uiScrollfix : i[0].offsetTop + s, c.on("scroll", u), n.$on("$destroy", function () {
                c.off("scroll", u)
            })
        }
    }
}]).directive("uiScrollfixTarget", [function () {
    "use strict";
    return {
        controller: ["$element", function (e) {
            this.$element = e
        }]
    }
}]), angular.module("ui.showhide", []).directive("uiShow", [function () {
    "use strict";
    return function (e, t, n) {
        e.$watch(n.uiShow, function (e) {
            e ? t.addClass("ui-show") : t.removeClass("ui-show")
        })
    }
}]).directive("uiHide", [function () {
    "use strict";
    return function (e, t, n) {
        e.$watch(n.uiHide, function (e) {
            e ? t.addClass("ui-hide") : t.removeClass("ui-hide")
        })
    }
}]).directive("uiToggle", [function () {
    "use strict";
    return function (e, t, n) {
        e.$watch(n.uiToggle, function (e) {
            e ? t.removeClass("ui-hide").addClass("ui-show") : t.removeClass("ui-show").addClass("ui-hide")
        })
    }
}]), angular.module("ui.unique", []).filter("unique", ["$parse", function (e) {
    "use strict";
    return function (t, n) {
        if (n === !1)return t;
        if ((n || angular.isUndefined(n)) && angular.isArray(t)) {
            var i = [], r = angular.isString(n) ? e(n) : function (e) {
                return e
            }, o = function (e) {
                return angular.isObject(e) ? r(e) : e
            };
            angular.forEach(t, function (e) {
                for (var t = !1, n = 0; n < i.length; n++)if (angular.equals(o(i[n]), o(e))) {
                    t = !0;
                    break
                }
                t || i.push(e)
            }), t = i
        }
        return t
    }
}]), angular.module("ui.uploader", []).service("uiUploader", uiUploader), uiUploader.$inject = ["$log"], angular.module("ui.validate", []).directive("uiValidate", function () {
    "use strict";
    return {
        restrict: "A", require: "ngModel", link: function (e, t, n, i) {
            function r(t) {
                return angular.isString(t) ? void e.$watch(t, function () {
                    angular.forEach(u, function (e) {
                        e(i.$modelValue)
                    })
                }) : angular.isArray(t) ? void angular.forEach(t, function (t) {
                    e.$watch(t, function () {
                        angular.forEach(u, function (e) {
                            e(i.$modelValue)
                        })
                    })
                }) : void(angular.isObject(t) && angular.forEach(t, function (t, n) {
                    angular.isString(t) && e.$watch(t, function () {
                        u[n](i.$modelValue)
                    }), angular.isArray(t) && angular.forEach(t, function (t) {
                        e.$watch(t, function () {
                            u[n](i.$modelValue)
                        })
                    })
                }))
            }

            var o, u = {}, a = e.$eval(n.uiValidate);
            a && (angular.isString(a) && (a = {validator: a}), angular.forEach(a, function (t, n) {
                o = function (r) {
                    var o = e.$eval(t, {$value: r});
                    return angular.isObject(o) && angular.isFunction(o.then) ? (o.then(function () {
                        i.$setValidity(n, !0)
                    }, function () {
                        i.$setValidity(n, !1)
                    }), r) : o ? (i.$setValidity(n, !0), r) : (i.$setValidity(n, !1), r)
                }, u[n] = o, i.$formatters.push(o), i.$parsers.push(o)
            }), n.uiValidateWatch && r(e.$eval(n.uiValidateWatch)))
        }
    }
}), angular.module("ui.utils", ["ui.event", "ui.format", "ui.highlight", "ui.include", "ui.indeterminate", "ui.inflector", "ui.jq", "ui.keypress", "ui.mask", "ui.reset", "ui.route", "ui.scrollfix", "ui.scroll", "ui.scroll.jqlite", "ui.showhide", "ui.unique", "ui.validate"]);
!function (e, t) {
    "use strict";
    function r() {
        this.$get = ["$$sanitizeUri", function (e) {
            return function (t) {
                var r = [];
                return i(t, l(r, function (t, r) {
                    return !/^unsafe/.test(e(t, r))
                })), r.join("")
            }
        }]
    }

    function n(e) {
        var r = [], n = l(r, t.noop);
        return n.chars(e), r.join("")
    }

    function a(e) {
        var t, r = {}, n = e.split(",");
        for (t = 0; t < n.length; t++)r[n[t]] = !0;
        return r
    }

    function i(e, r) {
        function n(e, n, i, o) {
            if (n = t.lowercase(n), $[n])for (; k.last() && C[k.last()];)a("", k.last());
            z[n] && k.last() == n && a("", n), o = y[n] || !!o, o || k.push(n);
            var l = {};
            i.replace(p, function (e, t, r, n, a) {
                var i = r || n || a || "";
                l[t] = s(i)
            }), r.start && r.start(n, l, o)
        }

        function a(e, n) {
            var a, i = 0;
            if (n = t.lowercase(n))for (i = k.length - 1; i >= 0 && k[i] != n; i--);
            if (i >= 0) {
                for (a = k.length - 1; a >= i; a--)r.end && r.end(k[a]);
                k.length = i
            }
        }

        "string" != typeof e && (e = null === e || "undefined" == typeof e ? "" : "" + e);
        var i, o, l, x, k = [], v = e;
        for (k.last = function () {
            return k[k.length - 1]
        }; e;) {
            if (x = "", o = !0, k.last() && D[k.last()] ? (e = e.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + k.last() + "[^>]*>", "i"), function (e, t) {
                    return t = t.replace(g, "$1").replace(b, "$1"), r.chars && r.chars(s(t)), ""
                }), a("", k.last())) : (0 === e.indexOf("<!--") ? (i = e.indexOf("--", 4), i >= 0 && e.lastIndexOf("-->", i) === i && (r.comment && r.comment(e.substring(4, i)), e = e.substring(i + 3), o = !1)) : m.test(e) ? (l = e.match(m), l && (e = e.replace(l[0], ""), o = !1)) : d.test(e) ? (l = e.match(h), l && (e = e.substring(l[0].length), l[0].replace(h, a), o = !1)) : f.test(e) && (l = e.match(u), l ? (l[4] && (e = e.substring(l[0].length), l[0].replace(u, n)), o = !1) : (x += "<", e = e.substring(1))), o && (i = e.indexOf("<"), x += 0 > i ? e : e.substring(0, i), e = 0 > i ? "" : e.substring(i), r.chars && r.chars(s(x)))), e == v)throw c("badparse", "The sanitizer was unable to parse the following block of html: {0}", e);
            v = e
        }
        a()
    }

    function s(e) {
        if (!e)return "";
        var t = j.exec(e), r = t[1], n = t[3], a = t[2];
        return a && (S.innerHTML = a.replace(/</g, "&lt;"), a = "textContent"in S ? S.textContent : S.innerText), r + a + n
    }

    function o(e) {
        return e.replace(/&/g, "&amp;").replace(x, function (e) {
            var t = e.charCodeAt(0), r = e.charCodeAt(1);
            return "&#" + (1024 * (t - 55296) + (r - 56320) + 65536) + ";"
        }).replace(k, function (e) {
            return "&#" + e.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function l(e, r) {
        var n = !1, a = t.bind(e, e.push);
        return {
            start: function (e, i, s) {
                e = t.lowercase(e), !n && D[e] && (n = e), n || T[e] !== !0 || (a("<"), a(e), t.forEach(i, function (n, i) {
                    var s = t.lowercase(i), l = "img" === e && "src" === s || "background" === s;
                    O[s] !== !0 || E[s] === !0 && !r(n, l) || (a(" "), a(i), a('="'), a(o(n)), a('"'))
                }), a(s ? "/>" : ">"))
            }, end: function (e) {
                e = t.lowercase(e), n || T[e] !== !0 || (a("</"), a(e), a(">")), e == n && (n = !1)
            }, chars: function (e) {
                n || a(o(e))
            }
        }
    }

    var c = t.$$minErr("$sanitize"), u = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, h = /^<\/\s*([\w:-]+)[^>]*>/, p = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, f = /^</, d = /^<\//, g = /<!--(.*?)-->/g, m = /<!DOCTYPE([^>]*?)>/i, b = /<!\[CDATA\[(.*?)]]>/g, x = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, k = /([^\#-~| |!])/g, y = a("area,br,col,hr,img,wbr"), v = a("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), w = a("rp,rt"), z = t.extend({}, w, v), $ = t.extend({}, v, a("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), C = t.extend({}, w, a("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), A = a("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"), D = a("script,style"), T = t.extend({}, y, $, C, z, A), E = a("background,cite,href,longdesc,src,usemap,xlink:href"), F = a("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"), q = a("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"), O = t.extend({}, E, q, F), S = document.createElement("pre"), j = /^(\s*)([\s\S]*?)(\s*)$/;
    t.module("ngSanitize", []).provider("$sanitize", r), t.module("ngSanitize").filter("linky", ["$sanitize", function (e) {
        var r = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/, a = /^mailto:/;
        return function (i, s) {
            function o(e) {
                e && f.push(n(e))
            }

            function l(e, r) {
                f.push("<a "), t.isDefined(s) && f.push('target="', s, '" '), f.push('href="', e.replace(/"/g, "&quot;"), '">'), o(r), f.push("</a>")
            }

            if (!i)return i;
            for (var c, u, h, p = i, f = []; c = p.match(r);)u = c[0], c[2] || c[4] || (u = (c[3] ? "http://" : "mailto:") + u), h = c.index, o(p.substr(0, h)), l(u, c[0].replace(a, "")), p = p.substring(h + c[0].length);
            return o(p), e(f.join(""))
        }
    }])
}(window, window.angular);
!function (r, e, t) {
    "use strict";
    function n(r) {
        return null != r && "" !== r && "hasOwnProperty" !== r && s.test("." + r)
    }

    function a(r, e) {
        if (!n(e))throw i("badmember", 'Dotted member path "@{0}" is invalid.', e);
        for (var a = e.split("."), o = 0, s = a.length; s > o && r !== t; o++) {
            var c = a[o];
            r = null !== r ? r[c] : t
        }
        return r
    }

    function o(r, t) {
        t = t || {}, e.forEach(t, function (r, e) {
            delete t[e]
        });
        for (var n in r)!r.hasOwnProperty(n) || "$" === n.charAt(0) && "$" === n.charAt(1) || (t[n] = r[n]);
        return t
    }

    var i = e.$$minErr("$resource"), s = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    e.module("ngResource", ["ng"]).provider("$resource", function () {
        var r = this;
        this.defaults = {
            stripTrailingSlashes: !0,
            actions: {
                get: {method: "GET"},
                save: {method: "POST"},
                query: {method: "GET", isArray: !0},
                remove: {method: "DELETE"},
                "delete": {method: "DELETE"}
            }
        }, this.$get = ["$http", "$q", function (n, s) {
            function c(r) {
                return u(r, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
            }

            function u(r, e) {
                return encodeURIComponent(r).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
            }

            function p(e, t) {
                this.template = e, this.defaults = d({}, r.defaults, t), this.urlParams = {}
            }

            function l(c, u, $, v) {
                function w(r, e) {
                    var t = {};
                    return e = d({}, u, e), h(e, function (e, n) {
                        g(e) && (e = e()), t[n] = e && e.charAt && "@" == e.charAt(0) ? a(r, e.substr(1)) : e
                    }), t
                }

                function y(r) {
                    return r.resource
                }

                function E(r) {
                    o(r || {}, this)
                }

                var A = new p(c, v);
                return $ = d({}, r.defaults.actions, $), E.prototype.toJSON = function () {
                    var r = d({}, this);
                    return delete r.$promise, delete r.$resolved, r
                }, h($, function (r, a) {
                    var c = /^(POST|PUT|PATCH)$/i.test(r.method);
                    E[a] = function (u, p, l, $) {
                        var v, b, P, T = {};
                        switch (arguments.length) {
                            case 4:
                                P = $, b = l;
                            case 3:
                            case 2:
                                if (!g(p)) {
                                    T = u, v = p, b = l;
                                    break
                                }
                                if (g(u)) {
                                    b = u, P = p;
                                    break
                                }
                                b = p, P = l;
                            case 1:
                                g(u) ? b = u : c ? v = u : T = u;
                                break;
                            case 0:
                                break;
                            default:
                                throw i("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                        }
                        var O = this instanceof E, x = O ? v : r.isArray ? [] : new E(v), R = {}, D = r.interceptor && r.interceptor.response || y, S = r.interceptor && r.interceptor.responseError || t;
                        h(r, function (r, e) {
                            "params" != e && "isArray" != e && "interceptor" != e && (R[e] = m(r))
                        }), c && (R.data = v), A.setUrlParams(R, d({}, w(v, r.params || {}), T), r.url);
                        var j = n(R).then(function (t) {
                            var n = t.data, s = x.$promise;
                            if (n) {
                                if (e.isArray(n) !== !!r.isArray)throw i("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", a, r.isArray ? "array" : "object", e.isArray(n) ? "array" : "object");
                                r.isArray ? (x.length = 0, h(n, function (r) {
                                    x.push("object" == typeof r ? new E(r) : r)
                                })) : (o(n, x), x.$promise = s)
                            }
                            return x.$resolved = !0, t.resource = x, t
                        }, function (r) {
                            return x.$resolved = !0, (P || f)(r), s.reject(r)
                        });
                        return j = j.then(function (r) {
                            var e = D(r);
                            return (b || f)(e, r.headers), e
                        }, S), O ? j : (x.$promise = j, x.$resolved = !1, x)
                    }, E.prototype["$" + a] = function (r, e, t) {
                        g(r) && (t = e, e = r, r = {});
                        var n = E[a].call(this, r, this, e, t);
                        return n.$promise || n
                    }
                }), E.bind = function (r) {
                    return l(c, d({}, u, r), $)
                }, E
            }

            var f = e.noop, h = e.forEach, d = e.extend, m = e.copy, g = e.isFunction;
            return p.prototype = {
                setUrlParams: function (r, t, n) {
                    var a, o, s = this, u = n || s.template, p = s.urlParams = {};
                    h(u.split(/\W/), function (r) {
                        if ("hasOwnProperty" === r)throw i("badname", "hasOwnProperty is not a valid parameter name.");
                        !new RegExp("^\\d+$").test(r) && r && new RegExp("(^|[^\\\\]):" + r + "(\\W|$)").test(u) && (p[r] = !0)
                    }), u = u.replace(/\\:/g, ":"), t = t || {}, h(s.urlParams, function (r, n) {
                        a = t.hasOwnProperty(n) ? t[n] : s.defaults[n], e.isDefined(a) && null !== a ? (o = c(a), u = u.replace(new RegExp(":" + n + "(\\W|$)", "g"), function (r, e) {
                            return o + e
                        })) : u = u.replace(new RegExp("(/?):" + n + "(\\W|$)", "g"), function (r, e, t) {
                            return "/" == t.charAt(0) ? t : e + t
                        })
                    }), s.defaults.stripTrailingSlashes && (u = u.replace(/\/+$/, "") || "/"), u = u.replace(/\/\.(?=\w+($|\?))/, "."), r.url = u.replace(/\/\\\./, "/."), h(t, function (e, t) {
                        s.urlParams[t] || (r.params = r.params || {}, r.params[t] = e)
                    })
                }
            }, l
        }]
    })
}(window, window.angular);
angular.module("pascalprecht.translate", ["ng"]).run(["$translate", function (t) {
    var e = t.storageKey(), n = t.storage(), r = function () {
        var r = t.preferredLanguage();
        angular.isString(r) ? t.use(r) : n.put(e, t.use())
    };
    n ? n.get(e) ? t.use(n.get(e))["catch"](r) : r() : angular.isString(t.preferredLanguage()) && t.use(t.preferredLanguage())
}]), angular.module("pascalprecht.translate").provider("$translate", ["$STORAGE_KEY", "$windowProvider", function (t, e) {
    var n, r, a, i, o, u, s, l, c, f, g, h, p, d, v, $ = {}, y = [], m = t, b = [], L = !1, S = "translate-cloak", w = !1, j = ".", C = 0, O = "2.6.0", k = function () {
        var t, n, r = e.$get().navigator, a = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
        if (angular.isArray(r.languages))for (t = 0; t < r.languages.length; t++)if (n = r.languages[t], n && n.length)return n;
        for (t = 0; t < a.length; t++)if (n = r[a[t]], n && n.length)return n;
        return null
    };
    k.displayName = "angular-translate/service: getFirstBrowserLanguage";
    var E = function () {
        return (k() || "").split("-").join("_")
    };
    E.displayName = "angular-translate/service: getLocale";
    var P = function (t, e) {
        for (var n = 0, r = t.length; r > n; n++)if (t[n] === e)return n;
        return -1
    }, x = function () {
        return this.replace(/^\s+|\s+$/g, "")
    }, T = function (t) {
        for (var e = [], n = angular.lowercase(t), a = 0, i = y.length; i > a; a++)e.push(angular.lowercase(y[a]));
        if (P(e, n) > -1)return t;
        if (r) {
            var o;
            for (var u in r) {
                var s = !1, l = Object.prototype.hasOwnProperty.call(r, u) && angular.lowercase(u) === angular.lowercase(t);
                if ("*" === u.slice(-1) && (s = u.slice(0, -1) === t.slice(0, u.length - 1)), (l || s) && (o = r[u], P(e, angular.lowercase(o)) > -1))return o
            }
        }
        var c = t.split("_");
        return c.length > 1 && P(e, angular.lowercase(c[0])) > -1 ? c[0] : t
    }, I = function (t, e) {
        if (!t && !e)return $;
        if (t && !e) {
            if (angular.isString(t))return $[t]
        } else angular.isObject($[t]) || ($[t] = {}), angular.extend($[t], F(e));
        return this
    };
    this.translations = I, this.cloakClassName = function (t) {
        return t ? (S = t, this) : S
    };
    var F = function (t, e, n, r) {
        var a, i, o, u;
        e || (e = []), n || (n = {});
        for (a in t)Object.prototype.hasOwnProperty.call(t, a) && (u = t[a], angular.isObject(u) ? F(u, e.concat(a), n, a) : (i = e.length ? "" + e.join(j) + j + a : a, e.length && a === r && (o = "" + e.join(j), n[o] = "@:" + i), n[i] = u));
        return n
    };
    this.addInterpolation = function (t) {
        return b.push(t), this
    }, this.useMessageFormatInterpolation = function () {
        return this.useInterpolation("$translateMessageFormatInterpolation")
    }, this.useInterpolation = function (t) {
        return f = t, this
    }, this.useSanitizeValueStrategy = function (t) {
        return L = t, this
    }, this.preferredLanguage = function (t) {
        return N(t), this
    };
    var N = function (t) {
        return t && (n = t), n
    };
    this.translationNotFoundIndicator = function (t) {
        return this.translationNotFoundIndicatorLeft(t), this.translationNotFoundIndicatorRight(t), this
    }, this.translationNotFoundIndicatorLeft = function (t) {
        return t ? (p = t, this) : p
    }, this.translationNotFoundIndicatorRight = function (t) {
        return t ? (d = t, this) : d
    }, this.fallbackLanguage = function (t) {
        return A(t), this
    };
    var A = function (t) {
        return t ? (angular.isString(t) ? (i = !0, a = [t]) : angular.isArray(t) && (i = !1, a = t), angular.isString(n) && P(a, n) < 0 && a.push(n), this) : i ? a[0] : a
    };
    this.use = function (t) {
        if (t) {
            if (!$[t] && !g)throw new Error("$translateProvider couldn't find translationTable for langKey: '" + t + "'");
            return o = t, this
        }
        return o
    };
    var V = function (t) {
        return t ? void(m = t) : l ? l + m : m
    };
    this.storageKey = V, this.useUrlLoader = function (t, e) {
        return this.useLoader("$translateUrlLoader", angular.extend({url: t}, e))
    }, this.useStaticFilesLoader = function (t) {
        return this.useLoader("$translateStaticFilesLoader", t)
    }, this.useLoader = function (t, e) {
        return g = t, h = e || {}, this
    }, this.useLocalStorage = function () {
        return this.useStorage("$translateLocalStorage")
    }, this.useCookieStorage = function () {
        return this.useStorage("$translateCookieStorage")
    }, this.useStorage = function (t) {
        return s = t, this
    }, this.storagePrefix = function (t) {
        return t ? (l = t, this) : t
    }, this.useMissingTranslationHandlerLog = function () {
        return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
    }, this.useMissingTranslationHandler = function (t) {
        return c = t, this
    }, this.usePostCompiling = function (t) {
        return w = !!t, this
    }, this.determinePreferredLanguage = function (t) {
        var e = t && angular.isFunction(t) ? t() : E();
        return n = y.length ? T(e) : e, this
    }, this.registerAvailableLanguageKeys = function (t, e) {
        return t ? (y = t, e && (r = e), this) : y
    }, this.useLoaderCache = function (t) {
        return t === !1 ? v = void 0 : t === !0 ? v = !0 : "undefined" == typeof t ? v = "$translationCache" : t && (v = t), this
    }, this.directivePriority = function (t) {
        return void 0 === t ? C : (C = t, this)
    }, this.$get = ["$log", "$injector", "$rootScope", "$q", function (t, e, r, l) {
        var y, j, k, E = e.get(f || "$translateDefaultInterpolation"), _ = !1, K = {}, R = {}, M = function (t, e, r, i) {
            if (angular.isArray(t)) {
                var u = function (t) {
                    for (var n = {}, a = [], o = function (t) {
                        var a = l.defer(), o = function (e) {
                            n[t] = e, a.resolve([t, e])
                        };
                        return M(t, e, r, i).then(o, o), a.promise
                    }, u = 0, s = t.length; s > u; u++)a.push(o(t[u]));
                    return l.all(a).then(function () {
                        return n
                    })
                };
                return u(t)
            }
            var c = l.defer();
            t && (t = x.apply(t));
            var f = function () {
                var t = n ? R[n] : R[o];
                if (j = 0, s && !t) {
                    var e = y.get(m);
                    if (t = R[e], a && a.length) {
                        var r = P(a, e);
                        j = 0 === r ? 1 : 0, P(a, n) < 0 && a.push(n)
                    }
                }
                return t
            }();
            return f ? f.then(function () {
                X(t, e, r, i).then(c.resolve, c.reject)
            }, c.reject) : X(t, e, r, i).then(c.resolve, c.reject), c.promise
        }, z = function (t) {
            return p && (t = [p, t].join(" ")), d && (t = [t, d].join(" ")), t
        }, H = function (t) {
            o = t, r.$emit("$translateChangeSuccess", {language: t}), s && y.put(M.storageKey(), o), E.setLocale(o), angular.forEach(K, function (t, e) {
                K[e].setLocale(o)
            }), r.$emit("$translateChangeEnd", {language: t})
        }, q = function (t) {
            if (!t)throw"No language key specified for loading.";
            var n = l.defer();
            r.$emit("$translateLoadingStart", {language: t}), _ = !0;
            var a = v;
            "string" == typeof a && (a = e.get(a));
            var i = angular.extend({}, h, {key: t, $http: angular.extend({}, {cache: a}, h.$http)});
            return e.get(g)(i).then(function (e) {
                var a = {};
                r.$emit("$translateLoadingSuccess", {language: t}), angular.isArray(e) ? angular.forEach(e, function (t) {
                    angular.extend(a, F(t))
                }) : angular.extend(a, F(e)), _ = !1, n.resolve({
                    key: t,
                    table: a
                }), r.$emit("$translateLoadingEnd", {language: t})
            }, function (t) {
                r.$emit("$translateLoadingError", {language: t}), n.reject(t), r.$emit("$translateLoadingEnd", {language: t})
            }), n.promise
        };
        if (s && (y = e.get(s), !y.get || !y.put))throw new Error("Couldn't use storage '" + s + "', missing get() or put() method!");
        angular.isFunction(E.useSanitizeValueStrategy) && E.useSanitizeValueStrategy(L), b.length && angular.forEach(b, function (t) {
            var r = e.get(t);
            r.setLocale(n || o), angular.isFunction(r.useSanitizeValueStrategy) && r.useSanitizeValueStrategy(L), K[r.getInterpolationIdentifier()] = r
        });
        var D = function (t) {
            var e = l.defer();
            return Object.prototype.hasOwnProperty.call($, t) ? e.resolve($[t]) : R[t] ? R[t].then(function (t) {
                I(t.key, t.table), e.resolve(t.table)
            }, e.reject) : e.reject(), e.promise
        }, G = function (t, e, n, r) {
            var a = l.defer();
            return D(t).then(function (i) {
                if (Object.prototype.hasOwnProperty.call(i, e)) {
                    r.setLocale(t);
                    var u = i[e];
                    "@:" === u.substr(0, 2) ? G(t, u.substr(2), n, r).then(a.resolve, a.reject) : a.resolve(r.interpolate(i[e], n)), r.setLocale(o)
                } else a.reject()
            }, a.reject), a.promise
        }, U = function (t, e, n, r) {
            var a, i = $[t];
            if (i && Object.prototype.hasOwnProperty.call(i, e)) {
                if (r.setLocale(t), a = r.interpolate(i[e], n), "@:" === a.substr(0, 2))return U(t, a.substr(2), n, r);
                r.setLocale(o)
            }
            return a
        }, Y = function (t) {
            if (c) {
                var n = e.get(c)(t, o);
                return void 0 !== n ? n : t
            }
            return t
        }, B = function (t, e, n, r, i) {
            var o = l.defer();
            if (t < a.length) {
                var u = a[t];
                G(u, e, n, r).then(o.resolve, function () {
                    B(t + 1, e, n, r, i).then(o.resolve)
                })
            } else o.resolve(i ? i : Y(e));
            return o.promise
        }, J = function (t, e, n, r) {
            var i;
            if (t < a.length) {
                var o = a[t];
                i = U(o, e, n, r), i || (i = J(t + 1, e, n, r))
            }
            return i
        }, Q = function (t, e, n, r) {
            return B(k > 0 ? k : j, t, e, n, r)
        }, W = function (t, e, n) {
            return J(k > 0 ? k : j, t, e, n)
        }, X = function (t, e, n, r) {
            var i = l.defer(), u = o ? $[o] : $, s = n ? K[n] : E;
            if (u && Object.prototype.hasOwnProperty.call(u, t)) {
                var f = u[t];
                "@:" === f.substr(0, 2) ? M(f.substr(2), e, n, r).then(i.resolve, i.reject) : i.resolve(s.interpolate(f, e))
            } else {
                var g;
                c && !_ && (g = Y(t)), o && a && a.length ? Q(t, e, s, r).then(function (t) {
                    i.resolve(t)
                }, function (t) {
                    i.reject(z(t))
                }) : c && !_ && g ? i.resolve(r ? r : g) : r ? i.resolve(r) : i.reject(z(t))
            }
            return i.promise
        }, Z = function (t, e, n) {
            var r, i = o ? $[o] : $, u = n ? K[n] : E;
            if (i && Object.prototype.hasOwnProperty.call(i, t)) {
                var s = i[t];
                r = "@:" === s.substr(0, 2) ? Z(s.substr(2), e, n) : u.interpolate(s, e)
            } else {
                var l;
                c && !_ && (l = Y(t)), o && a && a.length ? (j = 0, r = W(t, e, u)) : r = c && !_ && l ? l : z(t)
            }
            return r
        };
        if (M.preferredLanguage = function (t) {
                return t && N(t), n
            }, M.cloakClassName = function () {
                return S
            }, M.fallbackLanguage = function (t) {
                if (void 0 !== t && null !== t) {
                    if (A(t), g && a && a.length)for (var e = 0, n = a.length; n > e; e++)R[a[e]] || (R[a[e]] = q(a[e]));
                    M.use(M.use())
                }
                return i ? a[0] : a
            }, M.useFallbackLanguage = function (t) {
                if (void 0 !== t && null !== t)if (t) {
                    var e = P(a, t);
                    e > -1 && (k = e)
                } else k = 0
            }, M.proposedLanguage = function () {
                return u
            }, M.storage = function () {
                return y
            }, M.use = function (t) {
                if (!t)return o;
                var e = l.defer();
                r.$emit("$translateChangeStart", {language: t});
                var n = T(t);
                return n && (t = n), $[t] || !g || R[t] ? (e.resolve(t), H(t)) : (u = t, R[t] = q(t).then(function (n) {
                    return I(n.key, n.table), e.resolve(n.key), H(n.key), u === t && (u = void 0), n
                }, function (t) {
                    u === t && (u = void 0), r.$emit("$translateChangeError", {language: t}), e.reject(t), r.$emit("$translateChangeEnd", {language: t})
                })), e.promise
            }, M.storageKey = function () {
                return V()
            }, M.isPostCompilingEnabled = function () {
                return w
            }, M.refresh = function (t) {
                function e() {
                    i.resolve(), r.$emit("$translateRefreshEnd", {language: t})
                }

                function n() {
                    i.reject(), r.$emit("$translateRefreshEnd", {language: t})
                }

                if (!g)throw new Error("Couldn't refresh translation table, no loader registered!");
                var i = l.defer();
                if (r.$emit("$translateRefreshStart", {language: t}), t)$[t] ? q(t).then(function (n) {
                    I(n.key, n.table), t === o && H(o), e()
                }, n) : n(); else {
                    var u = [], s = {};
                    if (a && a.length)for (var c = 0, f = a.length; f > c; c++)u.push(q(a[c])), s[a[c]] = !0;
                    o && !s[o] && u.push(q(o)), l.all(u).then(function (t) {
                        angular.forEach(t, function (t) {
                            $[t.key] && delete $[t.key], I(t.key, t.table)
                        }), o && H(o), e()
                    })
                }
                return i.promise
            }, M.instant = function (t, e, r) {
                if (null === t || angular.isUndefined(t))return t;
                if (angular.isArray(t)) {
                    for (var i = {}, u = 0, s = t.length; s > u; u++)i[t[u]] = M.instant(t[u], e, r);
                    return i
                }
                if (angular.isString(t) && t.length < 1)return t;
                t && (t = x.apply(t));
                var l, f = [];
                n && f.push(n), o && f.push(o), a && a.length && (f = f.concat(a));
                for (var g = 0, h = f.length; h > g; g++) {
                    var v = f[g];
                    if ($[v] && ("undefined" != typeof $[v][t] ? l = Z(t, e, r) : (p || d) && (l = z(t))), "undefined" != typeof l)break
                }
                return l || "" === l || (l = E.interpolate(t, e), c && !_ && (l = Y(t))), l
            }, M.versionInfo = function () {
                return O
            }, M.loaderCache = function () {
                return v
            }, M.directivePriority = function () {
                return C
            }, g && (angular.equals($, {}) && M.use(M.use()), a && a.length))for (var te = function (t) {
            return I(t.key, t.table), r.$emit("$translateChangeEnd", {language: t.key}), t
        }, ee = 0, ne = a.length; ne > ee; ee++)R[a[ee]] = q(a[ee]).then(te);
        return M
    }]
}]), angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", ["$interpolate", function (t) {
    var e, n = {}, r = "default", a = null, i = {
        escaped: function (t) {
            var e = {};
            for (var n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = angular.isNumber(t[n]) ? t[n] : angular.element("<div></div>").text(t[n]).html());
            return e
        }
    }, o = function (t) {
        var e;
        return e = angular.isFunction(i[a]) ? i[a](t) : t
    };
    return n.setLocale = function (t) {
        e = t
    }, n.getInterpolationIdentifier = function () {
        return r
    }, n.useSanitizeValueStrategy = function (t) {
        return a = t, this
    }, n.interpolate = function (e, n) {
        return a && (n = o(n)), t(e)(n || {})
    }, n
}]), angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope", function (t, e, n, r, a, i) {
    var o = function () {
        return this.replace(/^\s+|\s+$/g, "")
    };
    return {
        restrict: "AE", scope: !0, priority: t.directivePriority(), compile: function (e, u) {
            var s = u.translateValues ? u.translateValues : void 0, l = u.translateInterpolation ? u.translateInterpolation : void 0, c = e[0].outerHTML.match(/translate-value-+/i), f = "^(.*)(" + n.startSymbol() + ".*" + n.endSymbol() + ")(.*)", g = "^(.*)" + n.startSymbol() + "(.*)" + n.endSymbol() + "(.*)";
            return function (e, h, p) {
                e.interpolateParams = {}, e.preText = "", e.postText = "";
                var d = {}, v = function (t) {
                    if (angular.isFunction(v._unwatchOld) && (v._unwatchOld(), v._unwatchOld = void 0), angular.equals(t, "") || !angular.isDefined(t)) {
                        var r = o.apply(h.text()).match(f);
                        if (angular.isArray(r)) {
                            e.preText = r[1], e.postText = r[3], d.translate = n(r[2])(e.$parent);
                            var a = h.text().match(g);
                            angular.isArray(a) && a[2] && a[2].length && (v._unwatchOld = e.$watch(a[2], function (t) {
                                d.translate = t, S()
                            }))
                        } else d.translate = h.text().replace(/^\s+|\s+$/g, "")
                    } else d.translate = t;
                    S()
                }, $ = function (t) {
                    p.$observe(t, function (e) {
                        d[t] = e, S()
                    })
                }, y = !0;
                p.$observe("translate", function (t) {
                    "undefined" == typeof t ? v("") : "" === t && y || (d.translate = t, S()), y = !1
                });
                for (var m in p)p.hasOwnProperty(m) && "translateAttr" === m.substr(0, 13) && $(m);
                if (p.$observe("translateDefault", function (t) {
                        e.defaultText = t
                    }), s && p.$observe("translateValues", function (t) {
                        t && e.$parent.$watch(function () {
                            angular.extend(e.interpolateParams, a(t)(e.$parent))
                        })
                    }), c) {
                    var b = function (t) {
                        p.$observe(t, function (n) {
                            var r = angular.lowercase(t.substr(14, 1)) + t.substr(15);
                            e.interpolateParams[r] = n
                        })
                    };
                    for (var L in p)Object.prototype.hasOwnProperty.call(p, L) && "translateValue" === L.substr(0, 14) && "translateValues" !== L && b(L)
                }
                var S = function () {
                    for (var t in d)d.hasOwnProperty(t) && w(t, d[t], e, e.interpolateParams, e.defaultText)
                }, w = function (e, n, r, a, i) {
                    n ? t(n, a, l, i).then(function (t) {
                        j(t, r, !0, e)
                    }, function (t) {
                        j(t, r, !1, e)
                    }) : j(n, r, !1, e)
                }, j = function (e, n, a, i) {
                    if ("translate" === i) {
                        a || "undefined" == typeof n.defaultText || (e = n.defaultText), h.html(n.preText + e + n.postText);
                        var o = t.isPostCompilingEnabled(), s = "undefined" != typeof u.translateCompile, l = s && "false" !== u.translateCompile;
                        (o && !s || l) && r(h.contents())(n)
                    } else {
                        a || "undefined" == typeof n.defaultText || (e = n.defaultText);
                        var c = p.$attr[i].substr(15);
                        h.attr(c, e)
                    }
                };
                e.$watch("interpolateParams", S, !0);
                var C = i.$on("$translateChangeSuccess", S);
                h.text().length && v(""), S(), e.$on("$destroy", C)
            }
        }
    }
}]), angular.module("pascalprecht.translate").directive("translateCloak", ["$rootScope", "$translate", function (t, e) {
    return {
        compile: function (n) {
            var r = function () {
                n.addClass(e.cloakClassName())
            }, a = function () {
                n.removeClass(e.cloakClassName())
            }, i = t.$on("$translateChangeEnd", function () {
                a(), i(), i = null
            });
            return r(), function (t, n, i) {
                i.translateCloak && i.translateCloak.length && i.$observe("translateCloak", function (t) {
                    e(t).then(a, r)
                })
            }
        }
    }
}]), angular.module("pascalprecht.translate").filter("translate", ["$parse", "$translate", function (t, e) {
    var n = function (n, r, a) {
        return angular.isObject(r) || (r = t(r)(this)), e.instant(n, r, a)
    };
    return n.$stateful = !0, n
}]);
angular.module("pascalprecht.translate").factory("$translateUrlLoader", ["$q", "$http", function (r, e) {
    return function (t) {
        if (!t || !t.url)throw new Error("Couldn't use urlLoader since no url is given!");
        var n = r.defer(), a = {};
        return a[t.queryParameter || "lang"] = t.key, e(angular.extend({
            url: t.url,
            params: a,
            method: "GET"
        }, t.$http)).success(function (r) {
            n.resolve(r)
        }).error(function () {
            n.reject(t.key)
        }), n.promise
    }
}]);
angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", ["$q", "$http", function (r, e) {
    return function (i) {
        if (!(i && (angular.isArray(i.files) || angular.isString(i.prefix) && angular.isString(i.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");
        i.files || (i.files = [{prefix: i.prefix, suffix: i.suffix}]);
        for (var f = function (f) {
            if (!f || !angular.isString(f.prefix) || !angular.isString(f.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");
            var n = r.defer();
            return e(angular.extend({
                url: [i.prefix, i.key, i.suffix].join(""),
                method: "GET",
                params: ""
            }, i.$http)).success(function (r) {
                n.resolve(r)
            }).error(function () {
                n.reject(i.key)
            }), n.promise
        }, n = r.defer(), t = [], s = i.files.length, a = 0; s > a; a++)t.push(f({
            prefix: i.files[a].prefix,
            key: i.key,
            suffix: i.files[a].suffix
        }));
        return r.all(t).then(function (r) {
            for (var e = r.length, i = {}, f = 0; e > f; f++)for (var t in r[f])i[t] = r[f][t];
            n.resolve(i)
        }, function (r) {
            n.reject(r)
        }), n.promise
    }
}]);
angular.module("pascalprecht.translate").factory("$translateLocalStorage", ["$window", "$translateCookieStorage", function (t, a) {
    var e = function () {
        var a;
        return {
            get: function (e) {
                return a || (a = t.localStorage.getItem(e)), a
            }, set: function (e, o) {
                a = o, t.localStorage.setItem(e, o)
            }, put: function (e, o) {
                a = o, t.localStorage.setItem(e, o)
            }
        }
    }(), o = "localStorage"in t;
    if (o) {
        var r = "pascalprecht.translate.storageTest";
        try {
            null !== t.localStorage ? (t.localStorage.setItem(r, "foo"), t.localStorage.removeItem(r), o = !0) : o = !1
        } catch (l) {
            o = !1
        }
    }
    var n = o ? e : a;
    return n
}]);
angular.module("pascalprecht.translate").factory("$translateCookieStorage", ["$cookieStore", function (t) {
    var e = {
        get: function (e) {
            return t.get(e)
        }, set: function (e, n) {
            t.put(e, n)
        }, put: function (e, n) {
            t.put(e, n)
        }
    };
    return e
}]);
!function () {
    "use strict";
    function e(e) {
        var n = [];
        return angular.forEach(e.requires, function (e) {
            -1 === l.indexOf(e) && n.push(e)
        }), n
    }

    function n(e) {
        try {
            return angular.module(e)
        } catch (n) {
            if (/No module/.test(n) || n.message.indexOf("$injector:nomod") > -1)return !1
        }
    }

    function r(e) {
        try {
            return angular.module(e)
        } catch (n) {
            throw(/No module/.test(n) || n.message.indexOf("$injector:nomod") > -1) && (n.message = 'The module "' + e + '" that you are trying to load does not exist. ' + n.message), n
        }
    }

    function a(e, n, r, a) {
        if (n) {
            var t, i, u, l;
            for (t = 0, i = n.length; i > t; t++)if (u = n[t], angular.isArray(u)) {
                if (null !== e) {
                    if (!e.hasOwnProperty(u[0]))throw new Error("unsupported provider " + u[0]);
                    l = e[u[0]]
                }
                var s = o(u, r);
                if ("invoke" !== u[1])s && angular.isDefined(l) && l[u[1]].apply(l, u[2]); else {
                    var f = function (e) {
                        var n = c.indexOf(r + "-" + e);
                        (-1 === n || a) && (-1 === n && c.push(r + "-" + e), angular.isDefined(l) && l[u[1]].apply(l, u[2]))
                    };
                    if (angular.isFunction(u[2][0]))f(u[2][0]); else if (angular.isArray(u[2][0]))for (var d = 0, g = u[2][0].length; g > d; d++)angular.isFunction(u[2][0][d]) && f(u[2][0][d])
                }
            }
        }
    }

    function t(e, n, r) {
        if (n) {
            var o, u, s, f = [];
            for (o = n.length - 1; o >= 0; o--)if (u = n[o], "string" != typeof u && (u = i(u)), u && -1 === d.indexOf(u)) {
                var c = -1 === l.indexOf(u);
                if (s = angular.module(u), c && (l.push(u), t(e, s.requires, r)), s._runBlocks.length > 0)for (g[u] = []; s._runBlocks.length > 0;)g[u].push(s._runBlocks.shift());
                angular.isDefined(g[u]) && (c || r.rerun) && (f = f.concat(g[u])), a(e, s._invokeQueue, u, r.reconfig), a(e, s._configBlocks, u, r.reconfig), p(c ? "ocLazyLoad.moduleLoaded" : "ocLazyLoad.moduleReloaded", u), n.pop(), d.push(u)
            }
            var h = e.getInstanceInjector();
            angular.forEach(f, function (e) {
                h.invoke(e)
            })
        }
    }

    function o(e, n) {
        var r = e[2][0], a = e[1], t = !1;
        angular.isUndefined(f[n]) && (f[n] = {}), angular.isUndefined(f[n][a]) && (f[n][a] = []);
        var o = function (e) {
            t = !0, f[n][a].push(e), p("ocLazyLoad.componentLoaded", [n, a, e])
        };
        if (angular.isString(r) && -1 === f[n][a].indexOf(r))o(r); else {
            if (!angular.isObject(r))return !1;
            angular.forEach(r, function (e) {
                angular.isString(e) && -1 === f[n][a].indexOf(e) && o(e)
            })
        }
        return t
    }

    function i(e) {
        var n = null;
        return angular.isString(e) ? n = e : angular.isObject(e) && e.hasOwnProperty("name") && angular.isString(e.name) && (n = e.name), n
    }

    function u(e) {
        if (0 === s.length) {
            var n = [e], r = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], t = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/, o = function (e) {
                return e && n.push(e)
            };
            angular.forEach(r, function (n) {
                r[n] = !0, o(document.getElementById(n)), n = n.replace(":", "\\:"), e[0].querySelectorAll && (angular.forEach(e[0].querySelectorAll("." + n), o), angular.forEach(e[0].querySelectorAll("." + n + "\\:"), o), angular.forEach(e[0].querySelectorAll("[" + n + "]"), o))
            }), angular.forEach(n, function (n) {
                if (0 === s.length) {
                    var a = " " + e.className + " ", o = t.exec(a);
                    o ? s.push((o[2] || "").replace(/\s+/g, ",")) : angular.forEach(n.attributes, function (e) {
                        0 === s.length && r[e.name] && s.push(e.value)
                    })
                }
            })
        }
        if (0 === s.length)throw"No module found during bootstrap, unable to init ocLazyLoad";
        var i = function u(e) {
            if (-1 === l.indexOf(e)) {
                l.push(e);
                var n = angular.module(e);
                a(null, n._invokeQueue, e), a(null, n._configBlocks, e), angular.forEach(n.requires, u)
            }
        };
        angular.forEach(s, function (e) {
            i(e)
        })
    }

    var l = ["ng"], s = [], f = {}, c = [], d = [], g = {}, h = angular.module("oc.lazyLoad", ["ng"]), p = angular.noop;
    h.provider("$ocLazyLoad", ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider", function (a, o, s, f, c, g) {
        var h, m, v, y = {}, L = {
            $controllerProvider: a,
            $compileProvider: s,
            $filterProvider: f,
            $provide: o,
            $injector: c,
            $animateProvider: g
        }, w = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0], O = !1, j = !1;
        u(angular.element(window.document)), this.$get = ["$log", "$q", "$templateCache", "$http", "$rootElement", "$rootScope", "$cacheFactory", "$interval", function (a, o, u, s, f, c, g, E) {
            var $, x = g("ocLazyLoad"), b = !1, z = !1;
            O || (a = {}, a.error = angular.noop, a.warn = angular.noop, a.info = angular.noop), L.getInstanceInjector = function () {
                return $ ? $ : $ = f.data("$injector") || angular.injector()
            }, p = function (e, n) {
                j && c.$broadcast(e, n), O && a.info(e, n)
            };
            var P = function (e, n, r) {
                var a, t, i = o.defer(), u = function (e) {
                    var n = (new Date).getTime();
                    return e.indexOf("?") >= 0 ? "&" === e.substring(0, e.length - 1) ? e + "_dc=" + n : e + "&_dc=" + n : e + "?_dc=" + n
                };
                switch (angular.isUndefined(x.get(n)) && x.put(n, i.promise), e) {
                    case"css":
                        a = document.createElement("link"), a.type = "text/css", a.rel = "stylesheet", a.href = r.cache === !1 ? u(n) : n;
                        break;
                    case"js":
                        a = document.createElement("script"), a.src = r.cache === !1 ? u(n) : n;
                        break;
                    default:
                        i.reject(new Error('Requested type "' + e + '" is not known. Could not inject "' + n + '"'))
                }
                a.onload = a.onreadystatechange = function () {
                    a.readyState && !/^c|loade/.test(a.readyState) || t || (a.onload = a.onreadystatechange = null, t = 1, p("ocLazyLoad.fileLoaded", n), i.resolve())
                }, a.onerror = function () {
                    i.reject(new Error("Unable to load " + n))
                }, a.async = r.serie ? 0 : 1;
                var l = w.lastChild;
                if (r.insertBefore) {
                    var s = angular.element(r.insertBefore);
                    s && s.length > 0 && (l = s[0])
                }
                if (w.insertBefore(a, l), "css" == e) {
                    if (!b) {
                        var f = navigator.userAgent.toLowerCase();
                        if (/iP(hone|od|ad)/.test(navigator.platform)) {
                            var c = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), d = parseFloat([parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3] || 0, 10)].join("."));
                            z = 6 > d
                        } else if (f.indexOf("android") > -1) {
                            var g = parseFloat(f.slice(f.indexOf("android") + 8));
                            z = 4.4 > g
                        } else if (f.indexOf("safari") > -1 && -1 == f.indexOf("chrome")) {
                            var h = parseFloat(f.match(/version\/([\.\d]+)/i)[1]);
                            z = 6 > h
                        }
                    }
                    if (z)var m = 1e3, v = E(function () {
                        try {
                            a.sheet.cssRules, E.cancel(v), a.onload()
                        } catch (e) {
                            --m <= 0 && a.onerror()
                        }
                    }, 20)
                }
                return i.promise
            };
            angular.isUndefined(h) && (h = function (e, n, r) {
                var a = [];
                angular.forEach(e, function (e) {
                    a.push(P("js", e, r))
                }), o.all(a).then(function () {
                    n()
                }, function (e) {
                    n(e)
                })
            }, h.ocLazyLoadLoader = !0), angular.isUndefined(m) && (m = function (e, n, r) {
                var a = [];
                angular.forEach(e, function (e) {
                    a.push(P("css", e, r))
                }), o.all(a).then(function () {
                    n()
                }, function (e) {
                    n(e)
                })
            }, m.ocLazyLoadLoader = !0), angular.isUndefined(v) && (v = function (e, n, r) {
                var a = [];
                return angular.forEach(e, function (e) {
                    var n = o.defer();
                    a.push(n.promise), s.get(e, r).success(function (r) {
                        angular.isString(r) && r.length > 0 && angular.forEach(angular.element(r), function (e) {
                            "SCRIPT" === e.nodeName && "text/ng-template" === e.type && u.put(e.id, e.innerHTML)
                        }), angular.isUndefined(x.get(e)) && x.put(e, !0), n.resolve()
                    }).error(function (r) {
                        n.reject(new Error('Unable to load template file "' + e + '": ' + r))
                    })
                }), o.all(a).then(function () {
                    n()
                }, function (e) {
                    n(e)
                })
            }, v.ocLazyLoadLoader = !0);
            var D = function (e, n) {
                var r = [], t = [], i = [], u = [], l = null;
                angular.extend(n || {}, e);
                var s = function (e) {
                    l = x.get(e), angular.isUndefined(l) || n.cache === !1 ? /\.(css|less)[^\.]*$/.test(e) && -1 === r.indexOf(e) ? r.push(e) : /\.(htm|html)[^\.]*$/.test(e) && -1 === t.indexOf(e) ? t.push(e) : -1 === i.indexOf(e) && i.push(e) : l && u.push(l)
                };
                if (n.serie ? s(n.files.shift()) : angular.forEach(n.files, function (e) {
                        s(e)
                    }), r.length > 0) {
                    var f = o.defer();
                    m(r, function (e) {
                        angular.isDefined(e) && m.hasOwnProperty("ocLazyLoadLoader") ? (a.error(e), f.reject(e)) : f.resolve()
                    }, n), u.push(f.promise)
                }
                if (t.length > 0) {
                    var c = o.defer();
                    v(t, function (e) {
                        angular.isDefined(e) && v.hasOwnProperty("ocLazyLoadLoader") ? (a.error(e), c.reject(e)) : c.resolve()
                    }, n), u.push(c.promise)
                }
                if (i.length > 0) {
                    var d = o.defer();
                    h(i, function (e) {
                        angular.isDefined(e) && h.hasOwnProperty("ocLazyLoadLoader") ? (a.error(e), d.reject(e)) : d.resolve()
                    }, n), u.push(d.promise)
                }
                return n.serie && n.files.length > 0 ? o.all(u).then(function () {
                    return D(e, n)
                }) : o.all(u)
            };
            return {
                getModuleConfig: function (e) {
                    if (!angular.isString(e))throw new Error("You need to give the name of the module to get");
                    return y[e] ? y[e] : null
                }, setModuleConfig: function (e) {
                    if (!angular.isObject(e))throw new Error("You need to give the module config object to set");
                    return y[e.name] = e, e
                }, getModules: function () {
                    return l
                }, isLoaded: function (e) {
                    var r = function (e) {
                        var r = l.indexOf(e) > -1;
                        return r || (r = !!n(e)), r
                    };
                    if (angular.isString(e) && (e = [e]), angular.isArray(e)) {
                        var a, t;
                        for (a = 0, t = e.length; t > a; a++)if (!r(e[a]))return !1;
                        return !0
                    }
                    throw new Error("You need to define the module(s) name(s)")
                }, load: function (u, s) {
                    var f, c, g = this, h = null, p = [], m = [], v = o.defer();
                    if (angular.isUndefined(s) && (s = {}), angular.isArray(u))return angular.forEach(u, function (e) {
                        e && m.push(g.load(e, s))
                    }), o.all(m).then(function () {
                        v.resolve(u)
                    }, function (e) {
                        v.reject(e)
                    }), v.promise;
                    if (f = i(u), "string" == typeof u ? (h = g.getModuleConfig(u), h || (h = {files: [u]}, f = null)) : "object" == typeof u && (h = g.setModuleConfig(u)), null === h ? (c = 'Module "' + f + '" is not configured, cannot load.', a.error(c), v.reject(new Error(c))) : angular.isDefined(h.template) && (angular.isUndefined(h.files) && (h.files = []), angular.isString(h.template) ? h.files.push(h.template) : angular.isArray(h.template) && h.files.concat(h.template)), p.push = function (e) {
                            -1 === this.indexOf(e) && Array.prototype.push.apply(this, arguments)
                        }, angular.isDefined(f) && n(f) && -1 !== l.indexOf(f) && (p.push(f), angular.isUndefined(h.files)))return v.resolve(), v.promise;
                    var y = {};
                    angular.extend(y, s, h);
                    var w = function O(t) {
                        var u, l, s, f, c = [];
                        if (u = i(t), null === u)return o.when();
                        try {
                            l = r(u)
                        } catch (d) {
                            var h = o.defer();
                            return a.error(d.message), h.reject(d), h.promise
                        }
                        return s = e(l), angular.forEach(s, function (e) {
                            if ("string" == typeof e) {
                                var r = g.getModuleConfig(e);
                                if (null === r)return void p.push(e);
                                e = r
                            }
                            return n(e.name) ? void("string" != typeof t && (f = e.files.filter(function (n) {
                                return g.getModuleConfig(e.name).files.indexOf(n) < 0
                            }), 0 !== f.length && a.warn('Module "', u, '" attempted to redefine configuration for dependency. "', e.name, '"\n Additional Files Loaded:', f), c.push(D(e.files, y).then(function () {
                                return O(e)
                            })))) : ("object" == typeof e && (e.hasOwnProperty("name") && e.name && (g.setModuleConfig(e), p.push(e.name)), e.hasOwnProperty("css") && 0 !== e.css.length && angular.forEach(e.css, function (e) {
                                P("css", e, y)
                            })), void(e.hasOwnProperty("files") && 0 !== e.files.length && e.files && c.push(D(e, y).then(function () {
                                return O(e)
                            }))))
                        }), o.all(c)
                    };
                    return D(h, y).then(function () {
                        null === f ? v.resolve(u) : (p.push(f), w(f).then(function () {
                            try {
                                d = [], t(L, p, y)
                            } catch (e) {
                                return a.error(e.message), void v.reject(e)
                            }
                            v.resolve(u)
                        }, function (e) {
                            v.reject(e)
                        }))
                    }, function (e) {
                        v.reject(e)
                    }), v.promise
                }
            }
        }], this.config = function (e) {
            if (angular.isDefined(e.jsLoader) || angular.isDefined(e.asyncLoader)) {
                if (!angular.isFunction(e.jsLoader || e.asyncLoader))throw"The js loader needs to be a function";
                h = e.jsLoader || e.asyncLoader
            }
            if (angular.isDefined(e.cssLoader)) {
                if (!angular.isFunction(e.cssLoader))throw"The css loader needs to be a function";
                m = e.cssLoader
            }
            if (angular.isDefined(e.templatesLoader)) {
                if (!angular.isFunction(e.templatesLoader))throw"The template loader needs to be a function";
                v = e.templatesLoader
            }
            angular.isDefined(e.modules) && (angular.isArray(e.modules) ? angular.forEach(e.modules, function (e) {
                y[e.name] = e
            }) : y[e.modules.name] = e.modules), angular.isDefined(e.debug) && (O = e.debug), angular.isDefined(e.events) && (j = e.events)
        }
    }]), h.directive("ocLazyLoad", ["$ocLazyLoad", "$compile", "$animate", "$parse", function (e, n, r, a) {
        return {
            restrict: "A", terminal: !0, priority: 1e3, compile: function (t) {
                var o = t[0].innerHTML;
                return t.html(""), function (t, i, u) {
                    var l = a(u.ocLazyLoad);
                    t.$watch(function () {
                        return l(t) || u.ocLazyLoad
                    }, function (a) {
                        angular.isDefined(a) && e.load(a).then(function () {
                            r.enter(n(o)(t), null, i)
                        })
                    }, !0)
                }
            }
        }
    }]);
    var m = angular.bootstrap;
    angular.bootstrap = function (e, n, r) {
        return s = n.slice(), m(e, n, r)
    }, Array.prototype.indexOf || (Array.prototype.indexOf = function (e, n) {
        var r;
        if (null == this)throw new TypeError('"this" is null or not defined');
        var a = Object(this), t = a.length >>> 0;
        if (0 === t)return -1;
        var o = +n || 0;
        if (1 / 0 === Math.abs(o) && (o = 0), o >= t)return -1;
        for (r = Math.max(o >= 0 ? o : t - Math.abs(o), 0); t > r;) {
            if (r in a && a[r] === e)return r;
            r++
        }
        return -1
    })
}();
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function (e, t, n) {
    function a(e) {
        for (var t in e)if (void 0 !== r.style[t])return e[t]
    }

    var i = function (a, r, o) {
        o = o || {};
        var l = e.defer(), s = i[o.animation ? "animationEndEventName" : "transitionEndEventName"], c = function () {
            n.$apply(function () {
                a.unbind(s, c), l.resolve(a)
            })
        };
        return s && a.bind(s, c), t(function () {
            angular.isString(r) ? a.addClass(r) : angular.isFunction(r) ? r(a) : angular.isObject(r) && a.css(r), s || l.resolve(a)
        }), l.promise.cancel = function () {
            s && a.unbind(s, c), l.reject("Transition cancelled")
        }, l.promise
    }, r = document.createElement("trans"), o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
    }, l = {
        WebkitTransition: "webkitAnimationEnd",
        MozTransition: "animationend",
        OTransition: "oAnimationEnd",
        transition: "animationend"
    };
    return i.transitionEndEventName = a(o), i.animationEndEventName = a(l), i
}]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function (e) {
    return {
        link: function (t, n, a) {
            function i(t) {
                function a() {
                    c === i && (c = void 0)
                }

                var i = e(n, t);
                return c && c.cancel(), c = i, i.then(a, a), i
            }

            function r() {
                u ? (u = !1, o()) : (n.removeClass("collapse").addClass("collapsing"), i({height: n[0].scrollHeight + "px"}).then(o))
            }

            function o() {
                n.removeClass("collapsing"), n.addClass("collapse in"), n.css({height: "auto"})
            }

            function l() {
                if (u)u = !1, s(), n.css({height: 0}); else {
                    n.css({height: n[0].scrollHeight + "px"});
                    {
                        n[0].offsetWidth
                    }
                    n.removeClass("collapse in").addClass("collapsing"), i({height: 0}).then(s)
                }
            }

            function s() {
                n.removeClass("collapsing"), n.addClass("collapse")
            }

            var c, u = !0;
            t.$watch(a.collapse, function (e) {
                e ? l() : r()
            })
        }
    }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function (e, t, n) {
    this.groups = [], this.closeOthers = function (a) {
        var i = angular.isDefined(t.closeOthers) ? e.$eval(t.closeOthers) : n.closeOthers;
        i && angular.forEach(this.groups, function (e) {
            e !== a && (e.isOpen = !1)
        })
    }, this.addGroup = function (e) {
        var t = this;
        this.groups.push(e), e.$on("$destroy", function () {
            t.removeGroup(e)
        })
    }, this.removeGroup = function (e) {
        var t = this.groups.indexOf(e);
        -1 !== t && this.groups.splice(t, 1)
    }
}]).directive("accordion", function () {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function () {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {heading: "@", isOpen: "=?", isDisabled: "=?"},
        controller: function () {
            this.setHeading = function (e) {
                this.heading = e
            }
        },
        link: function (e, t, n, a) {
            a.addGroup(e), e.$watch("isOpen", function (t) {
                t && a.closeOthers(e)
            }), e.toggleOpen = function () {
                e.isDisabled || (e.isOpen = !e.isOpen)
            }
        }
    }
}).directive("accordionHeading", function () {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function (e, t, n, a, i) {
            a.setHeading(i(e, function () {
            }))
        }
    }
}).directive("accordionTransclude", function () {
    return {
        require: "^accordionGroup", link: function (e, t, n, a) {
            e.$watch(function () {
                return a[n.accordionTransclude]
            }, function (e) {
                e && (t.html(""), t.append(e))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function (e, t) {
    e.closeable = "close"in t, this.close = e.close
}]).directive("alert", function () {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {type: "@", close: "&"}
    }
}).directive("dismissOnTimeout", ["$timeout", function (e) {
    return {
        require: "alert", link: function (t, n, a, i) {
            e(function () {
                i.close()
            }, parseInt(a.dismissOnTimeout, 10))
        }
    }
}]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
    return function (e, t, n) {
        t.addClass("ng-binding").data("$binding", n.bindHtmlUnsafe), e.$watch(n.bindHtmlUnsafe, function (e) {
            t.html(e || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig", function (e) {
    this.activeClass = e.activeClass || "active", this.toggleEvent = e.toggleEvent || "click"
}]).directive("btnRadio", function () {
    return {
        require: ["btnRadio", "ngModel"], controller: "ButtonsController", link: function (e, t, n, a) {
            var i = a[0], r = a[1];
            r.$render = function () {
                t.toggleClass(i.activeClass, angular.equals(r.$modelValue, e.$eval(n.btnRadio)))
            }, t.bind(i.toggleEvent, function () {
                var a = t.hasClass(i.activeClass);
                (!a || angular.isDefined(n.uncheckable)) && e.$apply(function () {
                    r.$setViewValue(a ? null : e.$eval(n.btnRadio)), r.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function () {
    return {
        require: ["btnCheckbox", "ngModel"], controller: "ButtonsController", link: function (e, t, n, a) {
            function i() {
                return o(n.btnCheckboxTrue, !0)
            }

            function r() {
                return o(n.btnCheckboxFalse, !1)
            }

            function o(t, n) {
                var a = e.$eval(t);
                return angular.isDefined(a) ? a : n
            }

            var l = a[0], s = a[1];
            s.$render = function () {
                t.toggleClass(l.activeClass, angular.equals(s.$modelValue, i()))
            }, t.bind(l.toggleEvent, function () {
                e.$apply(function () {
                    s.$setViewValue(t.hasClass(l.activeClass) ? r() : i()), s.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition", function (e, t, n, a) {
    function i() {
        r();
        var t = +e.interval;
        !isNaN(t) && t > 0 && (l = n(o, t))
    }

    function r() {
        l && (n.cancel(l), l = null)
    }

    function o() {
        var t = +e.interval;
        s && !isNaN(t) && t > 0 ? e.next() : e.pause()
    }

    var l, s, c = this, u = c.slides = e.slides = [], p = -1;
    c.currentSlide = null;
    var d = !1;
    c.select = e.select = function (n, r) {
        function o() {
            if (!d) {
                if (c.currentSlide && angular.isString(r) && !e.noTransition && n.$element) {
                    n.$element.addClass(r);
                    {
                        n.$element[0].offsetWidth
                    }
                    angular.forEach(u, function (e) {
                        angular.extend(e, {direction: "", entering: !1, leaving: !1, active: !1})
                    }), angular.extend(n, {
                        direction: r,
                        active: !0,
                        entering: !0
                    }), angular.extend(c.currentSlide || {}, {
                        direction: r,
                        leaving: !0
                    }), e.$currentTransition = a(n.$element, {}), function (t, n) {
                        e.$currentTransition.then(function () {
                            l(t, n)
                        }, function () {
                            l(t, n)
                        })
                    }(n, c.currentSlide)
                } else l(n, c.currentSlide);
                c.currentSlide = n, p = s, i()
            }
        }

        function l(t, n) {
            angular.extend(t, {
                direction: "",
                active: !0,
                leaving: !1,
                entering: !1
            }), angular.extend(n || {}, {
                direction: "",
                active: !1,
                leaving: !1,
                entering: !1
            }), e.$currentTransition = null
        }

        var s = u.indexOf(n);
        void 0 === r && (r = s > p ? "next" : "prev"), n && n !== c.currentSlide && (e.$currentTransition ? (e.$currentTransition.cancel(), t(o)) : o())
    }, e.$on("$destroy", function () {
        d = !0
    }), c.indexOfSlide = function (e) {
        return u.indexOf(e)
    }, e.next = function () {
        var t = (p + 1) % u.length;
        return e.$currentTransition ? void 0 : c.select(u[t], "next")
    }, e.prev = function () {
        var t = 0 > p - 1 ? u.length - 1 : p - 1;
        return e.$currentTransition ? void 0 : c.select(u[t], "prev")
    }, e.isActive = function (e) {
        return c.currentSlide === e
    }, e.$watch("interval", i), e.$on("$destroy", r), e.play = function () {
        s || (s = !0, i())
    }, e.pause = function () {
        e.noPause || (s = !1, r())
    }, c.addSlide = function (t, n) {
        t.$element = n, u.push(t), 1 === u.length || t.active ? (c.select(u[u.length - 1]), 1 == u.length && e.play()) : t.active = !1
    }, c.removeSlide = function (e) {
        var t = u.indexOf(e);
        u.splice(t, 1), u.length > 0 && e.active ? c.select(t >= u.length ? u[t - 1] : u[t]) : p > t && p--
    }
}]).directive("carousel", [function () {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        controller: "CarouselController",
        require: "carousel",
        templateUrl: "template/carousel/carousel.html",
        scope: {interval: "=", noTransition: "=", noPause: "="}
    }
}]).directive("slide", function () {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {active: "=?"},
        link: function (e, t, n, a) {
            a.addSlide(e, t), e.$on("$destroy", function () {
                a.removeSlide(e)
            }), e.$watch("active", function (t) {
                t && a.select(e)
            })
        }
    }
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function (e, t) {
    function n(e) {
        var n = [], a = e.split("");
        return angular.forEach(i, function (t, i) {
            var r = e.indexOf(i);
            if (r > -1) {
                e = e.split(""), a[r] = "(" + t.regex + ")", e[r] = "$";
                for (var o = r + 1, l = r + i.length; l > o; o++)a[o] = "", e[o] = "$";
                e = e.join(""), n.push({index: r, apply: t.apply})
            }
        }), {regex: new RegExp("^" + a.join("") + "$"), map: t(n, "index")}
    }

    function a(e, t, n) {
        return 1 === t && n > 28 ? 29 === n && (e % 4 === 0 && e % 100 !== 0 || e % 400 === 0) : 3 === t || 5 === t || 8 === t || 10 === t ? 31 > n : !0
    }

    this.parsers = {};
    var i = {
        yyyy: {
            regex: "\\d{4}", apply: function (e) {
                this.year = +e
            }
        }, yy: {
            regex: "\\d{2}", apply: function (e) {
                this.year = +e + 2e3
            }
        }, y: {
            regex: "\\d{1,4}", apply: function (e) {
                this.year = +e
            }
        }, MMMM: {
            regex: e.DATETIME_FORMATS.MONTH.join("|"), apply: function (t) {
                this.month = e.DATETIME_FORMATS.MONTH.indexOf(t)
            }
        }, MMM: {
            regex: e.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (t) {
                this.month = e.DATETIME_FORMATS.SHORTMONTH.indexOf(t)
            }
        }, MM: {
            regex: "0[1-9]|1[0-2]", apply: function (e) {
                this.month = e - 1
            }
        }, M: {
            regex: "[1-9]|1[0-2]", apply: function (e) {
                this.month = e - 1
            }
        }, dd: {
            regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (e) {
                this.date = +e
            }
        }, d: {
            regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (e) {
                this.date = +e
            }
        }, EEEE: {regex: e.DATETIME_FORMATS.DAY.join("|")}, EEE: {regex: e.DATETIME_FORMATS.SHORTDAY.join("|")}
    };
    this.parse = function (t, i) {
        if (!angular.isString(t) || !i)return t;
        i = e.DATETIME_FORMATS[i] || i, this.parsers[i] || (this.parsers[i] = n(i));
        var r = this.parsers[i], o = r.regex, l = r.map, s = t.match(o);
        if (s && s.length) {
            for (var c, u = {year: 1900, month: 0, date: 1, hours: 0}, p = 1, d = s.length; d > p; p++) {
                var g = l[p - 1];
                g.apply && g.apply.call(u, s[p])
            }
            return a(u.year, u.month, u.date) && (c = new Date(u.year, u.month, u.date, u.hours)), c
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (e, t) {
    function n(e, n) {
        return e.currentStyle ? e.currentStyle[n] : t.getComputedStyle ? t.getComputedStyle(e)[n] : e.style[n]
    }

    function a(e) {
        return "static" === (n(e, "position") || "static")
    }

    var i = function (t) {
        for (var n = e[0], i = t.offsetParent || n; i && i !== n && a(i);)i = i.offsetParent;
        return i || n
    };
    return {
        position: function (t) {
            var n = this.offset(t), a = {top: 0, left: 0}, r = i(t[0]);
            r != e[0] && (a = this.offset(angular.element(r)), a.top += r.clientTop - r.scrollTop, a.left += r.clientLeft - r.scrollLeft);
            var o = t[0].getBoundingClientRect();
            return {
                width: o.width || t.prop("offsetWidth"),
                height: o.height || t.prop("offsetHeight"),
                top: n.top - a.top,
                left: n.left - a.left
            }
        }, offset: function (n) {
            var a = n[0].getBoundingClientRect();
            return {
                width: a.width || n.prop("offsetWidth"),
                height: a.height || n.prop("offsetHeight"),
                top: a.top + (t.pageYOffset || e[0].documentElement.scrollTop),
                left: a.left + (t.pageXOffset || e[0].documentElement.scrollLeft)
            }
        }, positionElements: function (e, t, n, a) {
            var i, r, o, l, s = n.split("-"), c = s[0], u = s[1] || "center";
            i = a ? this.offset(e) : this.position(e), r = t.prop("offsetWidth"), o = t.prop("offsetHeight");
            var p = {
                center: function () {
                    return i.left + i.width / 2 - r / 2
                }, left: function () {
                    return i.left
                }, right: function () {
                    return i.left + i.width
                }
            }, d = {
                center: function () {
                    return i.top + i.height / 2 - o / 2
                }, top: function () {
                    return i.top
                }, bottom: function () {
                    return i.top + i.height
                }
            };
            switch (c) {
                case"right":
                    l = {top: d[u](), left: p[c]()};
                    break;
                case"left":
                    l = {top: d[u](), left: i.left - r};
                    break;
                case"bottom":
                    l = {top: d[c](), left: p[u]()};
                    break;
                default:
                    l = {top: i.top - o, left: p[u]()}
            }
            return l
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function (e, t, n, a, i, r, o, l) {
    var s = this, c = {$setViewValue: angular.noop};
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function (n, i) {
        s[n] = angular.isDefined(t[n]) ? 8 > i ? a(t[n])(e.$parent) : e.$parent.$eval(t[n]) : l[n]
    }), angular.forEach(["minDate", "maxDate"], function (a) {
        t[a] ? e.$parent.$watch(n(t[a]), function (e) {
            s[a] = e ? new Date(e) : null, s.refreshView()
        }) : s[a] = l[a] ? new Date(l[a]) : null
    }), e.datepickerMode = e.datepickerMode || l.datepickerMode, e.uniqueId = "datepicker-" + e.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(t.initDate) ? e.$parent.$eval(t.initDate) : new Date, e.isActive = function (t) {
        return 0 === s.compare(t.date, s.activeDate) ? (e.activeDateId = t.uid, !0) : !1
    }, this.init = function (e) {
        c = e, c.$render = function () {
            s.render()
        }
    }, this.render = function () {
        if (c.$modelValue) {
            var e = new Date(c.$modelValue), t = !isNaN(e);
            t ? this.activeDate = e : r.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), c.$setValidity("date", t)
        }
        this.refreshView()
    }, this.refreshView = function () {
        if (this.element) {
            this._refreshView();
            var e = c.$modelValue ? new Date(c.$modelValue) : null;
            c.$setValidity("date-disabled", !e || this.element && !this.isDisabled(e))
        }
    }, this.createDateObject = function (e, t) {
        var n = c.$modelValue ? new Date(c.$modelValue) : null;
        return {
            date: e,
            label: o(e, t),
            selected: n && 0 === this.compare(e, n),
            disabled: this.isDisabled(e),
            current: 0 === this.compare(e, new Date)
        }
    }, this.isDisabled = function (n) {
        return this.minDate && this.compare(n, this.minDate) < 0 || this.maxDate && this.compare(n, this.maxDate) > 0 || t.dateDisabled && e.dateDisabled({
                date: n,
                mode: e.datepickerMode
            })
    }, this.split = function (e, t) {
        for (var n = []; e.length > 0;)n.push(e.splice(0, t));
        return n
    }, e.select = function (t) {
        if (e.datepickerMode === s.minMode) {
            var n = c.$modelValue ? new Date(c.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), c.$setViewValue(n), c.$render()
        } else s.activeDate = t, e.datepickerMode = s.modes[s.modes.indexOf(e.datepickerMode) - 1]
    }, e.move = function (e) {
        var t = s.activeDate.getFullYear() + e * (s.step.years || 0), n = s.activeDate.getMonth() + e * (s.step.months || 0);
        s.activeDate.setFullYear(t, n, 1), s.refreshView()
    }, e.toggleMode = function (t) {
        t = t || 1, e.datepickerMode === s.maxMode && 1 === t || e.datepickerMode === s.minMode && -1 === t || (e.datepickerMode = s.modes[s.modes.indexOf(e.datepickerMode) + t])
    }, e.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var u = function () {
        i(function () {
            s.element[0].focus()
        }, 0, !1)
    };
    e.$on("datepicker.focus", u), e.keydown = function (t) {
        var n = e.keys[t.which];
        if (n && !t.shiftKey && !t.altKey)if (t.preventDefault(), t.stopPropagation(), "enter" === n || "space" === n) {
            if (s.isDisabled(s.activeDate))return;
            e.select(s.activeDate), u()
        } else!t.ctrlKey || "up" !== n && "down" !== n ? (s.handleKeyDown(n, t), s.refreshView()) : (e.toggleMode("up" === n ? 1 : -1), u())
    }
}]).directive("datepicker", function () {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {datepickerMode: "=?", dateDisabled: "&"},
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function (e, t, n, a) {
            var i = a[0], r = a[1];
            r && i.init(r)
        }
    }
}).directive("daypicker", ["dateFilter", function (e) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/day.html",
        require: "^datepicker",
        link: function (t, n, a, i) {
            function r(e, t) {
                return 1 !== t || e % 4 !== 0 || e % 100 === 0 && e % 400 !== 0 ? s[t] : 29
            }

            function o(e, t) {
                var n = new Array(t), a = new Date(e), i = 0;
                for (a.setHours(12); t > i;)n[i++] = new Date(a), a.setDate(a.getDate() + 1);
                return n
            }

            function l(e) {
                var t = new Date(e);
                t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var n = t.getTime();
                return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
            }

            t.showWeeks = i.showWeeks, i.step = {months: 1}, i.element = n;
            var s = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            i._refreshView = function () {
                var n = i.activeDate.getFullYear(), a = i.activeDate.getMonth(), r = new Date(n, a, 1), s = i.startingDay - r.getDay(), c = s > 0 ? 7 - s : -s, u = new Date(r);
                c > 0 && u.setDate(-c + 1);
                for (var p = o(u, 42), d = 0; 42 > d; d++)p[d] = angular.extend(i.createDateObject(p[d], i.formatDay), {
                    secondary: p[d].getMonth() !== a,
                    uid: t.uniqueId + "-" + d
                });
                t.labels = new Array(7);
                for (var g = 0; 7 > g; g++)t.labels[g] = {
                    abbr: e(p[g].date, i.formatDayHeader),
                    full: e(p[g].date, "EEEE")
                };
                if (t.title = e(i.activeDate, i.formatDayTitle), t.rows = i.split(p, 7), t.showWeeks) {
                    t.weekNumbers = [];
                    for (var m = l(t.rows[0][0].date), f = t.rows.length; t.weekNumbers.push(m++) < f;);
                }
            }, i.compare = function (e, t) {
                return new Date(e.getFullYear(), e.getMonth(), e.getDate()) - new Date(t.getFullYear(), t.getMonth(), t.getDate())
            }, i.handleKeyDown = function (e) {
                var t = i.activeDate.getDate();
                if ("left" === e)t -= 1; else if ("up" === e)t -= 7; else if ("right" === e)t += 1; else if ("down" === e)t += 7; else if ("pageup" === e || "pagedown" === e) {
                    var n = i.activeDate.getMonth() + ("pageup" === e ? -1 : 1);
                    i.activeDate.setMonth(n, 1), t = Math.min(r(i.activeDate.getFullYear(), i.activeDate.getMonth()), t)
                } else"home" === e ? t = 1 : "end" === e && (t = r(i.activeDate.getFullYear(), i.activeDate.getMonth()));
                i.activeDate.setDate(t)
            }, i.refreshView()
        }
    }
}]).directive("monthpicker", ["dateFilter", function (e) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/month.html",
        require: "^datepicker",
        link: function (t, n, a, i) {
            i.step = {years: 1}, i.element = n, i._refreshView = function () {
                for (var n = new Array(12), a = i.activeDate.getFullYear(), r = 0; 12 > r; r++)n[r] = angular.extend(i.createDateObject(new Date(a, r, 1), i.formatMonth), {uid: t.uniqueId + "-" + r});
                t.title = e(i.activeDate, i.formatMonthTitle), t.rows = i.split(n, 3)
            }, i.compare = function (e, t) {
                return new Date(e.getFullYear(), e.getMonth()) - new Date(t.getFullYear(), t.getMonth())
            }, i.handleKeyDown = function (e) {
                var t = i.activeDate.getMonth();
                if ("left" === e)t -= 1; else if ("up" === e)t -= 3; else if ("right" === e)t += 1; else if ("down" === e)t += 3; else if ("pageup" === e || "pagedown" === e) {
                    var n = i.activeDate.getFullYear() + ("pageup" === e ? -1 : 1);
                    i.activeDate.setFullYear(n)
                } else"home" === e ? t = 0 : "end" === e && (t = 11);
                i.activeDate.setMonth(t)
            }, i.refreshView()
        }
    }
}]).directive("yearpicker", ["dateFilter", function () {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/year.html",
        require: "^datepicker",
        link: function (e, t, n, a) {
            function i(e) {
                return parseInt((e - 1) / r, 10) * r + 1
            }

            var r = a.yearRange;
            a.step = {years: r}, a.element = t, a._refreshView = function () {
                for (var t = new Array(r), n = 0, o = i(a.activeDate.getFullYear()); r > n; n++)t[n] = angular.extend(a.createDateObject(new Date(o + n, 0, 1), a.formatYear), {uid: e.uniqueId + "-" + n});
                e.title = [t[0].label, t[r - 1].label].join(" - "), e.rows = a.split(t, 5)
            }, a.compare = function (e, t) {
                return e.getFullYear() - t.getFullYear()
            }, a.handleKeyDown = function (e) {
                var t = a.activeDate.getFullYear();
                "left" === e ? t -= 1 : "up" === e ? t -= 5 : "right" === e ? t += 1 : "down" === e ? t += 5 : "pageup" === e || "pagedown" === e ? t += ("pageup" === e ? -1 : 1) * a.step.years : "home" === e ? t = i(a.activeDate.getFullYear()) : "end" === e && (t = i(a.activeDate.getFullYear()) + r - 1), a.activeDate.setFullYear(t)
            }, a.refreshView()
        }
    }
}]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function (e, t, n, a, i, r, o) {
    return {
        restrict: "EA",
        require: "ngModel",
        scope: {isOpen: "=?", currentText: "@", clearText: "@", closeText: "@", dateDisabled: "&"},
        link: function (l, s, c, u) {
            function p(e) {
                return e.replace(/([A-Z])/g, function (e) {
                    return "-" + e.toLowerCase()
                })
            }

            function d(e) {
                if (e) {
                    if (angular.isDate(e) && !isNaN(e))return u.$setValidity("date", !0), e;
                    if (angular.isString(e)) {
                        var t = r.parse(e, g) || new Date(e);
                        return isNaN(t) ? void u.$setValidity("date", !1) : (u.$setValidity("date", !0), t)
                    }
                    return void u.$setValidity("date", !1)
                }
                return u.$setValidity("date", !0), null
            }

            var g, m = angular.isDefined(c.closeOnDateSelection) ? l.$parent.$eval(c.closeOnDateSelection) : o.closeOnDateSelection, f = angular.isDefined(c.datepickerAppendToBody) ? l.$parent.$eval(c.datepickerAppendToBody) : o.appendToBody;
            l.showButtonBar = angular.isDefined(c.showButtonBar) ? l.$parent.$eval(c.showButtonBar) : o.showButtonBar, l.getText = function (e) {
                return l[e + "Text"] || o[e + "Text"]
            }, c.$observe("datepickerPopup", function (e) {
                g = e || o.datepickerPopup, u.$render()
            });
            var h = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
            h.attr({"ng-model": "date", "ng-change": "dateSelection()"});
            var v = angular.element(h.children()[0]);
            c.datepickerOptions && angular.forEach(l.$parent.$eval(c.datepickerOptions), function (e, t) {
                v.attr(p(t), e)
            }), l.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function (e) {
                if (c[e]) {
                    var n = t(c[e]);
                    if (l.$parent.$watch(n, function (t) {
                            l.watchData[e] = t
                        }), v.attr(p(e), "watchData." + e), "datepickerMode" === e) {
                        var a = n.assign;
                        l.$watch("watchData." + e, function (e, t) {
                            e !== t && a(l.$parent, e)
                        })
                    }
                }
            }), c.dateDisabled && v.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), u.$parsers.unshift(d), l.dateSelection = function (e) {
                angular.isDefined(e) && (l.date = e), u.$setViewValue(l.date), u.$render(), m && (l.isOpen = !1, s[0].focus())
            }, s.bind("input change keyup", function () {
                l.$apply(function () {
                    l.date = u.$modelValue
                })
            }), u.$render = function () {
                var e = u.$viewValue ? i(u.$viewValue, g) : "";
                s.val(e), l.date = d(u.$modelValue)
            };
            var b = function (e) {
                l.isOpen && e.target !== s[0] && l.$apply(function () {
                    l.isOpen = !1
                })
            }, $ = function (e) {
                l.keydown(e)
            };
            s.bind("keydown", $), l.keydown = function (e) {
                27 === e.which ? (e.preventDefault(), e.stopPropagation(), l.close()) : 40 !== e.which || l.isOpen || (l.isOpen = !0)
            }, l.$watch("isOpen", function (e) {
                e ? (l.$broadcast("datepicker.focus"), l.position = f ? a.offset(s) : a.position(s), l.position.top = l.position.top + s.prop("offsetHeight"), n.bind("click", b)) : n.unbind("click", b)
            }), l.select = function (e) {
                if ("today" === e) {
                    var t = new Date;
                    angular.isDate(u.$modelValue) ? (e = new Date(u.$modelValue), e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate())) : e = new Date(t.setHours(0, 0, 0, 0))
                }
                l.dateSelection(e)
            }, l.close = function () {
                l.isOpen = !1, s[0].focus()
            };
            var y = e(h)(l);
            h.remove(), f ? n.find("body").append(y) : s.after(y), l.$on("$destroy", function () {
                y.remove(), s.unbind("keydown", $), n.unbind("click", b)
            })
        }
    }
}]).directive("datepickerPopupWrap", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function (e, t) {
            t.bind("click", function (e) {
                e.preventDefault(), e.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {openClass: "open"}).service("dropdownService", ["$document", function (e) {
    var t = null;
    this.open = function (i) {
        t || (e.bind("click", n), e.bind("keydown", a)), t && t !== i && (t.isOpen = !1), t = i
    }, this.close = function (i) {
        t === i && (t = null, e.unbind("click", n), e.unbind("keydown", a))
    };
    var n = function (e) {
        if (t) {
            var n = t.getToggleElement();
            e && n && n[0].contains(e.target) || t.$apply(function () {
                t.isOpen = !1
            })
        }
    }, a = function (e) {
        27 === e.which && (t.focusToggleElement(), n())
    }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function (e, t, n, a, i, r) {
    var o, l = this, s = e.$new(), c = a.openClass, u = angular.noop, p = t.onToggle ? n(t.onToggle) : angular.noop;
    this.init = function (a) {
        l.$element = a, t.isOpen && (o = n(t.isOpen), u = o.assign, e.$watch(o, function (e) {
            s.isOpen = !!e
        }))
    }, this.toggle = function (e) {
        return s.isOpen = arguments.length ? !!e : !s.isOpen
    }, this.isOpen = function () {
        return s.isOpen
    }, s.getToggleElement = function () {
        return l.toggleElement
    }, s.focusToggleElement = function () {
        l.toggleElement && l.toggleElement[0].focus()
    }, s.$watch("isOpen", function (t, n) {
        r[t ? "addClass" : "removeClass"](l.$element, c), t ? (s.focusToggleElement(), i.open(s)) : i.close(s), u(e, t), angular.isDefined(t) && t !== n && p(e, {open: !!t})
    }), e.$on("$locationChangeSuccess", function () {
        s.isOpen = !1
    }), e.$on("$destroy", function () {
        s.$destroy()
    })
}]).directive("dropdown", function () {
    return {
        controller: "DropdownController", link: function (e, t, n, a) {
            a.init(t)
        }
    }
}).directive("dropdownToggle", function () {
    return {
        require: "?^dropdown", link: function (e, t, n, a) {
            if (a) {
                a.toggleElement = t;
                var i = function (i) {
                    i.preventDefault(), t.hasClass("disabled") || n.disabled || e.$apply(function () {
                        a.toggle()
                    })
                };
                t.bind("click", i), t.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), e.$watch(a.isOpen, function (e) {
                    t.attr("aria-expanded", !!e)
                }), e.$on("$destroy", function () {
                    t.unbind("click", i)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function () {
    return {
        createNew: function () {
            var e = [];
            return {
                add: function (t, n) {
                    e.push({key: t, value: n})
                }, get: function (t) {
                    for (var n = 0; n < e.length; n++)if (t == e[n].key)return e[n]
                }, keys: function () {
                    for (var t = [], n = 0; n < e.length; n++)t.push(e[n].key);
                    return t
                }, top: function () {
                    return e[e.length - 1]
                }, remove: function (t) {
                    for (var n = -1, a = 0; a < e.length; a++)if (t == e[a].key) {
                        n = a;
                        break
                    }
                    return e.splice(n, 1)[0]
                }, removeTop: function () {
                    return e.splice(e.length - 1, 1)[0]
                }, length: function () {
                    return e.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout", function (e) {
    return {
        restrict: "EA", replace: !0, templateUrl: "template/modal/backdrop.html", link: function (t, n, a) {
            t.backdropClass = a.backdropClass || "", t.animate = !1, e(function () {
                t.animate = !0
            })
        }
    }
}]).directive("modalWindow", ["$modalStack", "$timeout", function (e, t) {
    return {
        restrict: "EA",
        scope: {index: "@", animate: "="},
        replace: !0,
        transclude: !0,
        templateUrl: function (e, t) {
            return t.templateUrl || "template/modal/window.html"
        },
        link: function (n, a, i) {
            a.addClass(i.windowClass || ""), n.size = i.size, t(function () {
                n.animate = !0, a[0].querySelectorAll("[autofocus]").length || a[0].focus()
            }), n.close = function (t) {
                var n = e.getTop();
                n && n.value.backdrop && "static" != n.value.backdrop && t.target === t.currentTarget && (t.preventDefault(), t.stopPropagation(), e.dismiss(n.key, "backdrop click"))
            }
        }
    }
}]).directive("modalTransclude", function () {
    return {
        link: function (e, t, n, a, i) {
            i(e.$parent, function (e) {
                t.empty(), t.append(e)
            })
        }
    }
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function (e, t, n, a, i, r) {
    function o() {
        for (var e = -1, t = g.keys(), n = 0; n < t.length; n++)g.get(t[n]).value.backdrop && (e = n);
        return e
    }

    function l(e) {
        var t = n.find("body").eq(0), a = g.get(e).value;
        g.remove(e), c(a.modalDomEl, a.modalScope, 300, function () {
            a.modalScope.$destroy(), t.toggleClass(d, g.length() > 0), s()
        })
    }

    function s() {
        if (u && -1 == o()) {
            var e = p;
            c(u, p, 150, function () {
                e.$destroy(), e = null
            }), u = void 0, p = void 0
        }
    }

    function c(n, a, i, r) {
        function o() {
            o.done || (o.done = !0, n.remove(), r && r())
        }

        a.animate = !1;
        var l = e.transitionEndEventName;
        if (l) {
            var s = t(o, i);
            n.bind(l, function () {
                t.cancel(s), o(), a.$apply()
            })
        } else t(o)
    }

    var u, p, d = "modal-open", g = r.createNew(), m = {};
    return i.$watch(o, function (e) {
        p && (p.index = e)
    }), n.bind("keydown", function (e) {
        var t;
        27 === e.which && (t = g.top(), t && t.value.keyboard && (e.preventDefault(), i.$apply(function () {
            m.dismiss(t.key, "escape key press")
        })))
    }), m.open = function (e, t) {
        g.add(e, {deferred: t.deferred, modalScope: t.scope, backdrop: t.backdrop, keyboard: t.keyboard});
        var r = n.find("body").eq(0), l = o();
        if (l >= 0 && !u) {
            p = i.$new(!0), p.index = l;
            var s = angular.element("<div modal-backdrop></div>");
            s.attr("backdrop-class", t.backdropClass), u = a(s)(p), r.append(u)
        }
        var c = angular.element("<div modal-window></div>");
        c.attr({
            "template-url": t.windowTemplateUrl,
            "window-class": t.windowClass,
            size: t.size,
            index: g.length() - 1,
            animate: "animate"
        }).html(t.content);
        var m = a(c)(t.scope);
        g.top().value.modalDomEl = m, r.append(m), r.addClass(d)
    }, m.close = function (e, t) {
        var n = g.get(e);
        n && (n.value.deferred.resolve(t), l(e))
    }, m.dismiss = function (e, t) {
        var n = g.get(e);
        n && (n.value.deferred.reject(t), l(e))
    }, m.dismissAll = function (e) {
        for (var t = this.getTop(); t;)this.dismiss(t.key, e), t = this.getTop()
    }, m.getTop = function () {
        return g.top()
    }, m
}]).provider("$modal", function () {
    var e = {
        options: {backdrop: !0, keyboard: !0},
        $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function (t, n, a, i, r, o, l) {
            function s(e) {
                return e.template ? a.when(e.template) : i.get(angular.isFunction(e.templateUrl) ? e.templateUrl() : e.templateUrl, {cache: r}).then(function (e) {
                    return e.data
                })
            }

            function c(e) {
                var n = [];
                return angular.forEach(e, function (e) {
                    (angular.isFunction(e) || angular.isArray(e)) && n.push(a.when(t.invoke(e)))
                }), n
            }

            var u = {};
            return u.open = function (t) {
                var i = a.defer(), r = a.defer(), u = {
                    result: i.promise, opened: r.promise, close: function (e) {
                        l.close(u, e)
                    }, dismiss: function (e) {
                        l.dismiss(u, e)
                    }
                };
                if (t = angular.extend({}, e.options, t), t.resolve = t.resolve || {}, !t.template && !t.templateUrl)throw new Error("One of template or templateUrl options is required.");
                var p = a.all([s(t)].concat(c(t.resolve)));
                return p.then(function (e) {
                    var a = (t.scope || n).$new();
                    a.$close = u.close, a.$dismiss = u.dismiss;
                    var r, s = {}, c = 1;
                    t.controller && (s.$scope = a, s.$modalInstance = u, angular.forEach(t.resolve, function (t, n) {
                        s[n] = e[c++]
                    }), r = o(t.controller, s), t.controllerAs && (a[t.controllerAs] = r)), l.open(u, {
                        scope: a,
                        deferred: i,
                        content: e[0],
                        backdrop: t.backdrop,
                        keyboard: t.keyboard,
                        backdropClass: t.backdropClass,
                        windowClass: t.windowClass,
                        windowTemplateUrl: t.windowTemplateUrl,
                        size: t.size
                    })
                }, function (e) {
                    i.reject(e)
                }), p.then(function () {
                    r.resolve(!0)
                }, function () {
                    r.reject(!1)
                }), u
            }, u
        }]
    };
    return e
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function (e, t, n) {
    var a = this, i = {$setViewValue: angular.noop}, r = t.numPages ? n(t.numPages).assign : angular.noop;
    this.init = function (r, o) {
        i = r, this.config = o, i.$render = function () {
            a.render()
        }, t.itemsPerPage ? e.$parent.$watch(n(t.itemsPerPage), function (t) {
            a.itemsPerPage = parseInt(t, 10), e.totalPages = a.calculateTotalPages()
        }) : this.itemsPerPage = o.itemsPerPage
    }, this.calculateTotalPages = function () {
        var t = this.itemsPerPage < 1 ? 1 : Math.ceil(e.totalItems / this.itemsPerPage);
        return Math.max(t || 0, 1)
    }, this.render = function () {
        e.page = parseInt(i.$viewValue, 10) || 1
    }, e.selectPage = function (t) {
        e.page !== t && t > 0 && t <= e.totalPages && (i.$setViewValue(t), i.$render())
    }, e.getText = function (t) {
        return e[t + "Text"] || a.config[t + "Text"]
    }, e.noPrevious = function () {
        return 1 === e.page
    }, e.noNext = function () {
        return e.page === e.totalPages
    }, e.$watch("totalItems", function () {
        e.totalPages = a.calculateTotalPages()
    }), e.$watch("totalPages", function (t) {
        r(e.$parent, t), e.page > t ? e.selectPage(t) : i.$render()
    })
}]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig", function (e, t) {
    return {
        restrict: "EA",
        scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@"},
        require: ["pagination", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function (n, a, i, r) {
            function o(e, t, n) {
                return {number: e, text: t, active: n}
            }

            function l(e, t) {
                var n = [], a = 1, i = t, r = angular.isDefined(u) && t > u;
                r && (p ? (a = Math.max(e - Math.floor(u / 2), 1), i = a + u - 1, i > t && (i = t, a = i - u + 1)) : (a = (Math.ceil(e / u) - 1) * u + 1, i = Math.min(a + u - 1, t)));
                for (var l = a; i >= l; l++) {
                    var s = o(l, l, l === e);
                    n.push(s)
                }
                if (r && !p) {
                    if (a > 1) {
                        var c = o(a - 1, "...", !1);
                        n.unshift(c)
                    }
                    if (t > i) {
                        var d = o(i + 1, "...", !1);
                        n.push(d)
                    }
                }
                return n
            }

            var s = r[0], c = r[1];
            if (c) {
                var u = angular.isDefined(i.maxSize) ? n.$parent.$eval(i.maxSize) : t.maxSize, p = angular.isDefined(i.rotate) ? n.$parent.$eval(i.rotate) : t.rotate;
                n.boundaryLinks = angular.isDefined(i.boundaryLinks) ? n.$parent.$eval(i.boundaryLinks) : t.boundaryLinks, n.directionLinks = angular.isDefined(i.directionLinks) ? n.$parent.$eval(i.directionLinks) : t.directionLinks, s.init(c, t), i.maxSize && n.$parent.$watch(e(i.maxSize), function (e) {
                    u = parseInt(e, 10), s.render()
                });
                var d = s.render;
                s.render = function () {
                    d(), n.page > 0 && n.page <= n.totalPages && (n.pages = l(n.page, n.totalPages))
                }
            }
        }
    }
}]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig", function (e) {
    return {
        restrict: "EA",
        scope: {totalItems: "=", previousText: "@", nextText: "@"},
        require: ["pager", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function (t, n, a, i) {
            var r = i[0], o = i[1];
            o && (t.align = angular.isDefined(a.align) ? t.$parent.$eval(a.align) : e.align, r.init(o, e))
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
    function e(e) {
        var t = /[A-Z]/g, n = "-";
        return e.replace(t, function (e, t) {
            return (t ? n : "") + e.toLowerCase()
        })
    }

    var t = {placement: "top", animation: !0, popupDelay: 0}, n = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur"
    }, a = {};
    this.options = function (e) {
        angular.extend(a, e)
    }, this.setTriggers = function (e) {
        angular.extend(n, e)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function (i, r, o, l, s, c) {
        return function (i, u, p) {
            function d(e) {
                var t = e || g.trigger || p, a = n[t] || t;
                return {show: t, hide: a}
            }

            var g = angular.extend({}, t, a), m = e(i), f = c.startSymbol(), h = c.endSymbol(), v = "<div " + m + '-popup title="' + f + "title" + h + '" content="' + f + "content" + h + '" placement="' + f + "placement" + h + '" animation="animation" is-open="isOpen"></div>';
            return {
                restrict: "EA", compile: function () {
                    var e = r(v);
                    return function (t, n, a) {
                        function r() {
                            O.isOpen ? p() : c()
                        }

                        function c() {
                            (!E || t.$eval(a[u + "Enable"])) && (b(), O.popupDelay ? M || (M = o(m, O.popupDelay, !1), M.then(function (e) {
                                e()
                            })) : m()())
                        }

                        function p() {
                            t.$apply(function () {
                                f()
                            })
                        }

                        function m() {
                            return M = null, D && (o.cancel(D), D = null), O.content ? (h(), k.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), O.$digest(), A(), O.isOpen = !0, O.$digest(), A) : angular.noop
                        }

                        function f() {
                            O.isOpen = !1, o.cancel(M), M = null, O.animation ? D || (D = o(v, 500)) : v()
                        }

                        function h() {
                            k && v(), x = O.$new(), k = e(x, function (e) {
                                T ? l.find("body").append(e) : n.after(e)
                            })
                        }

                        function v() {
                            D = null, k && (k.remove(), k = null), x && (x.$destroy(), x = null)
                        }

                        function b() {
                            $(), y()
                        }

                        function $() {
                            var e = a[u + "Placement"];
                            O.placement = angular.isDefined(e) ? e : g.placement
                        }

                        function y() {
                            var e = a[u + "PopupDelay"], t = parseInt(e, 10);
                            O.popupDelay = isNaN(t) ? g.popupDelay : t
                        }

                        function w() {
                            var e = a[u + "Trigger"];
                            P(), C = d(e), C.show === C.hide ? n.bind(C.show, r) : (n.bind(C.show, c), n.bind(C.hide, p))
                        }

                        var k, x, D, M, T = angular.isDefined(g.appendToBody) ? g.appendToBody : !1, C = d(void 0), E = angular.isDefined(a[u + "Enable"]), O = t.$new(!0), A = function () {
                            var e = s.positionElements(n, k, O.placement, T);
                            e.top += "px", e.left += "px", k.css(e)
                        };
                        O.isOpen = !1, a.$observe(i, function (e) {
                            O.content = e, !e && O.isOpen && f()
                        }), a.$observe(u + "Title", function (e) {
                            O.title = e
                        });
                        var P = function () {
                            n.unbind(C.show, c), n.unbind(C.hide, p)
                        };
                        w();
                        var S = t.$eval(a[u + "Animation"]);
                        O.animation = angular.isDefined(S) ? !!S : g.animation;
                        var V = t.$eval(a[u + "AppendToBody"]);
                        T = angular.isDefined(V) ? V : T, T && t.$on("$locationChangeSuccess", function () {
                            O.isOpen && f()
                        }), t.$on("$destroy", function () {
                            o.cancel(D), o.cancel(M), P(), v(), O = null
                        })
                    }
                }
            }
        }
    }]
}).directive("tooltipPopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {content: "@", placement: "@", animation: "&", isOpen: "&"},
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip", function (e) {
    return e("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {content: "@", placement: "@", animation: "&", isOpen: "&"},
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip", function (e) {
    return e("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {title: "@", content: "@", placement: "@", animation: "&", isOpen: "&"},
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip", function (e) {
    return e("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function (e, t, n) {
    var a = this, i = angular.isDefined(t.animate) ? e.$parent.$eval(t.animate) : n.animate;
    this.bars = [], e.max = angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max, this.addBar = function (t, n) {
        i || n.css({transition: "none"}), this.bars.push(t), t.$watch("value", function (n) {
            t.percent = +(100 * n / e.max).toFixed(2)
        }), t.$on("$destroy", function () {
            n = null, a.removeBar(t)
        })
    }, this.removeBar = function (e) {
        this.bars.splice(this.bars.indexOf(e), 1)
    }
}]).directive("progress", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {value: "=", type: "@"},
        templateUrl: "template/progressbar/bar.html",
        link: function (e, t, n, a) {
            a.addBar(e, t)
        }
    }
}).directive("progressbar", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {value: "=", type: "@"},
        templateUrl: "template/progressbar/progressbar.html",
        link: function (e, t, n, a) {
            a.addBar(e, angular.element(t.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function (e, t, n) {
    var a = {$setViewValue: angular.noop};
    this.init = function (i) {
        a = i, a.$render = this.render, this.stateOn = angular.isDefined(t.stateOn) ? e.$parent.$eval(t.stateOn) : n.stateOn, this.stateOff = angular.isDefined(t.stateOff) ? e.$parent.$eval(t.stateOff) : n.stateOff;
        var r = angular.isDefined(t.ratingStates) ? e.$parent.$eval(t.ratingStates) : new Array(angular.isDefined(t.max) ? e.$parent.$eval(t.max) : n.max);
        e.range = this.buildTemplateObjects(r)
    }, this.buildTemplateObjects = function (e) {
        for (var t = 0, n = e.length; n > t; t++)e[t] = angular.extend({index: t}, {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, e[t]);
        return e
    }, e.rate = function (t) {
        !e.readonly && t >= 0 && t <= e.range.length && (a.$setViewValue(t), a.$render())
    }, e.enter = function (t) {
        e.readonly || (e.value = t), e.onHover({value: t})
    }, e.reset = function () {
        e.value = a.$viewValue, e.onLeave()
    }, e.onKeydown = function (t) {
        /(37|38|39|40)/.test(t.which) && (t.preventDefault(), t.stopPropagation(), e.rate(e.value + (38 === t.which || 39 === t.which ? 1 : -1)))
    }, this.render = function () {
        e.value = a.$viewValue
    }
}]).directive("rating", function () {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {readonly: "=?", onHover: "&", onLeave: "&"},
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function (e, t, n, a) {
            var i = a[0], r = a[1];
            r && i.init(r)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (e) {
    var t = this, n = t.tabs = e.tabs = [];
    t.select = function (e) {
        angular.forEach(n, function (t) {
            t.active && t !== e && (t.active = !1, t.onDeselect())
        }), e.active = !0, e.onSelect()
    }, t.addTab = function (e) {
        n.push(e), 1 === n.length ? e.active = !0 : e.active && t.select(e)
    }, t.removeTab = function (e) {
        var i = n.indexOf(e);
        if (e.active && n.length > 1 && !a) {
            var r = i == n.length - 1 ? i - 1 : i + 1;
            t.select(n[r])
        }
        n.splice(i, 1)
    };
    var a;
    e.$on("$destroy", function () {
        a = !0
    })
}]).directive("tabset", function () {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {type: "@"},
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function (e, t, n) {
            e.vertical = angular.isDefined(n.vertical) ? e.$parent.$eval(n.vertical) : !1, e.justified = angular.isDefined(n.justified) ? e.$parent.$eval(n.justified) : !1
        }
    }
}).directive("tab", ["$parse", function (e) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect"},
        controller: function () {
        },
        compile: function (t, n, a) {
            return function (t, n, i, r) {
                t.$watch("active", function (e) {
                    e && r.select(t)
                }), t.disabled = !1, i.disabled && t.$parent.$watch(e(i.disabled), function (e) {
                    t.disabled = !!e
                }), t.select = function () {
                    t.disabled || (t.active = !0)
                }, r.addTab(t), t.$on("$destroy", function () {
                    r.removeTab(t)
                }), t.$transcludeFn = a
            }
        }
    }
}]).directive("tabHeadingTransclude", [function () {
    return {
        restrict: "A", require: "^tab", link: function (e, t) {
            e.$watch("headingElement", function (e) {
                e && (t.html(""), t.append(e))
            })
        }
    }
}]).directive("tabContentTransclude", function () {
    function e(e) {
        return e.tagName && (e.hasAttribute("tab-heading") || e.hasAttribute("data-tab-heading") || "tab-heading" === e.tagName.toLowerCase() || "data-tab-heading" === e.tagName.toLowerCase())
    }

    return {
        restrict: "A", require: "^tabset", link: function (t, n, a) {
            var i = t.$eval(a.tabContentTransclude);
            i.$transcludeFn(i.$parent, function (t) {
                angular.forEach(t, function (t) {
                    e(t) ? i.headingElement = t : n.append(t)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function (e, t, n, a, i, r) {
    function o() {
        var t = parseInt(e.hours, 10), n = e.showMeridian ? t > 0 && 13 > t : t >= 0 && 24 > t;
        return n ? (e.showMeridian && (12 === t && (t = 0), e.meridian === f[1] && (t += 12)), t) : void 0
    }

    function l() {
        var t = parseInt(e.minutes, 10);
        return t >= 0 && 60 > t ? t : void 0
    }

    function s(e) {
        return angular.isDefined(e) && e.toString().length < 2 ? "0" + e : e
    }

    function c(e) {
        u(), m.$setViewValue(new Date(g)), p(e)
    }

    function u() {
        m.$setValidity("time", !0), e.invalidHours = !1, e.invalidMinutes = !1
    }

    function p(t) {
        var n = g.getHours(), a = g.getMinutes();
        e.showMeridian && (n = 0 === n || 12 === n ? 12 : n % 12), e.hours = "h" === t ? n : s(n), e.minutes = "m" === t ? a : s(a), e.meridian = g.getHours() < 12 ? f[0] : f[1]
    }

    function d(e) {
        var t = new Date(g.getTime() + 6e4 * e);
        g.setHours(t.getHours(), t.getMinutes()), c()
    }

    var g = new Date, m = {$setViewValue: angular.noop}, f = angular.isDefined(t.meridians) ? e.$parent.$eval(t.meridians) : r.meridians || i.DATETIME_FORMATS.AMPMS;
    this.init = function (n, a) {
        m = n, m.$render = this.render;
        var i = a.eq(0), o = a.eq(1), l = angular.isDefined(t.mousewheel) ? e.$parent.$eval(t.mousewheel) : r.mousewheel;
        l && this.setupMousewheelEvents(i, o), e.readonlyInput = angular.isDefined(t.readonlyInput) ? e.$parent.$eval(t.readonlyInput) : r.readonlyInput, this.setupInputEvents(i, o)
    };
    var h = r.hourStep;
    t.hourStep && e.$parent.$watch(n(t.hourStep), function (e) {
        h = parseInt(e, 10)
    });
    var v = r.minuteStep;
    t.minuteStep && e.$parent.$watch(n(t.minuteStep), function (e) {
        v = parseInt(e, 10)
    }), e.showMeridian = r.showMeridian, t.showMeridian && e.$parent.$watch(n(t.showMeridian), function (t) {
        if (e.showMeridian = !!t, m.$error.time) {
            var n = o(), a = l();
            angular.isDefined(n) && angular.isDefined(a) && (g.setHours(n), c())
        } else p()
    }), this.setupMousewheelEvents = function (t, n) {
        var a = function (e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.wheelDelta ? e.wheelDelta : -e.deltaY;
            return e.detail || t > 0
        };
        t.bind("mousewheel wheel", function (t) {
            e.$apply(a(t) ? e.incrementHours() : e.decrementHours()), t.preventDefault()
        }), n.bind("mousewheel wheel", function (t) {
            e.$apply(a(t) ? e.incrementMinutes() : e.decrementMinutes()), t.preventDefault()
        })
    }, this.setupInputEvents = function (t, n) {
        if (e.readonlyInput)return e.updateHours = angular.noop, void(e.updateMinutes = angular.noop);
        var a = function (t, n) {
            m.$setViewValue(null), m.$setValidity("time", !1), angular.isDefined(t) && (e.invalidHours = t), angular.isDefined(n) && (e.invalidMinutes = n)
        };
        e.updateHours = function () {
            var e = o();
            angular.isDefined(e) ? (g.setHours(e), c("h")) : a(!0)
        }, t.bind("blur", function () {
            !e.invalidHours && e.hours < 10 && e.$apply(function () {
                e.hours = s(e.hours)
            })
        }), e.updateMinutes = function () {
            var e = l();
            angular.isDefined(e) ? (g.setMinutes(e), c("m")) : a(void 0, !0)
        }, n.bind("blur", function () {
            !e.invalidMinutes && e.minutes < 10 && e.$apply(function () {
                e.minutes = s(e.minutes)
            })
        })
    }, this.render = function () {
        var e = m.$modelValue ? new Date(m.$modelValue) : null;
        isNaN(e) ? (m.$setValidity("time", !1), a.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (e && (g = e), u(), p())
    }, e.incrementHours = function () {
        d(60 * h)
    }, e.decrementHours = function () {
        d(60 * -h)
    }, e.incrementMinutes = function () {
        d(v)
    }, e.decrementMinutes = function () {
        d(-v)
    }, e.toggleMeridian = function () {
        d(720 * (g.getHours() < 12 ? 1 : -1))
    }
}]).directive("timepicker", function () {
    return {
        restrict: "EA",
        require: ["timepicker", "?^ngModel"],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function (e, t, n, a) {
            var i = a[0], r = a[1];
            r && i.init(r, t.find("input"))
        }
    }
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function (e) {
    var t = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
        parse: function (n) {
            var a = n.match(t);
            if (!a)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + n + '".');
            return {itemName: a[3], source: e(a[4]), viewMapper: e(a[2] || a[1]), modelMapper: e(a[1])}
        }
    }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function (e, t, n, a, i, r, o) {
    var l = [9, 13, 27, 38, 40];
    return {
        require: "ngModel", link: function (s, c, u, p) {
            var d, g = s.$eval(u.typeaheadMinLength) || 1, m = s.$eval(u.typeaheadWaitMs) || 0, f = s.$eval(u.typeaheadEditable) !== !1, h = t(u.typeaheadLoading).assign || angular.noop, v = t(u.typeaheadOnSelect), b = u.typeaheadInputFormatter ? t(u.typeaheadInputFormatter) : void 0, $ = u.typeaheadAppendToBody ? s.$eval(u.typeaheadAppendToBody) : !1, y = s.$eval(u.typeaheadFocusFirst) !== !1, w = t(u.ngModel).assign, k = o.parse(u.typeahead), x = s.$new();
            s.$on("$destroy", function () {
                x.$destroy()
            });
            var D = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
            c.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": D});
            var M = angular.element("<div typeahead-popup></div>");
            M.attr({
                id: D,
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(u.typeaheadTemplateUrl) && M.attr("template-url", u.typeaheadTemplateUrl);
            var T = function () {
                x.matches = [], x.activeIdx = -1, c.attr("aria-expanded", !1)
            }, C = function (e) {
                return D + "-option-" + e
            };
            x.$watch("activeIdx", function (e) {
                0 > e ? c.removeAttr("aria-activedescendant") : c.attr("aria-activedescendant", C(e))
            });
            var E = function (e) {
                var t = {$viewValue: e};
                h(s, !0), n.when(k.source(s, t)).then(function (n) {
                    var a = e === p.$viewValue;
                    if (a && d)if (n.length > 0) {
                        x.activeIdx = y ? 0 : -1, x.matches.length = 0;
                        for (var i = 0; i < n.length; i++)t[k.itemName] = n[i], x.matches.push({
                            id: C(i),
                            label: k.viewMapper(x, t),
                            model: n[i]
                        });
                        x.query = e, x.position = $ ? r.offset(c) : r.position(c), x.position.top = x.position.top + c.prop("offsetHeight"), c.attr("aria-expanded", !0)
                    } else T();
                    a && h(s, !1)
                }, function () {
                    T(), h(s, !1)
                })
            };
            T(), x.query = void 0;
            var O, A = function (e) {
                O = a(function () {
                    E(e)
                }, m)
            }, P = function () {
                O && a.cancel(O)
            };
            p.$parsers.unshift(function (e) {
                return d = !0, e && e.length >= g ? m > 0 ? (P(), A(e)) : E(e) : (h(s, !1), P(), T()), f ? e : e ? void p.$setValidity("editable", !1) : (p.$setValidity("editable", !0), e)
            }), p.$formatters.push(function (e) {
                var t, n, a = {};
                return b ? (a.$model = e, b(s, a)) : (a[k.itemName] = e, t = k.viewMapper(s, a), a[k.itemName] = void 0, n = k.viewMapper(s, a), t !== n ? t : e)
            }), x.select = function (e) {
                var t, n, i = {};
                i[k.itemName] = n = x.matches[e].model, t = k.modelMapper(s, i), w(s, t), p.$setValidity("editable", !0), v(s, {
                    $item: n,
                    $model: t,
                    $label: k.viewMapper(s, i)
                }), T(), a(function () {
                    c[0].focus()
                }, 0, !1)
            }, c.bind("keydown", function (e) {
                0 !== x.matches.length && -1 !== l.indexOf(e.which) && (-1 != x.activeIdx || 13 !== e.which && 9 !== e.which) && (e.preventDefault(), 40 === e.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === e.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === e.which || 9 === e.which ? x.$apply(function () {
                    x.select(x.activeIdx)
                }) : 27 === e.which && (e.stopPropagation(), T(), x.$digest()))
            }), c.bind("blur", function () {
                d = !1
            });
            var S = function (e) {
                c[0] !== e.target && (T(), x.$digest())
            };
            i.bind("click", S), s.$on("$destroy", function () {
                i.unbind("click", S), $ && V.remove()
            });
            var V = e(M)(x);
            $ ? i.find("body").append(V) : c.after(V)
        }
    }
}]).directive("typeaheadPopup", function () {
    return {
        restrict: "EA",
        scope: {matches: "=", query: "=", active: "=", position: "=", select: "&"},
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function (e, t, n) {
            e.templateUrl = n.templateUrl, e.isOpen = function () {
                return e.matches.length > 0
            }, e.isActive = function (t) {
                return e.active == t
            }, e.selectActive = function (t) {
                e.active = t
            }, e.selectMatch = function (t) {
                e.select({activeIdx: t})
            }
        }
    }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function (e, t, n, a) {
    return {
        restrict: "EA", scope: {index: "=", match: "=", query: "="}, link: function (i, r, o) {
            var l = a(o.templateUrl)(i.$parent) || "template/typeahead/typeahead-match.html";
            e.get(l, {cache: t}).success(function (e) {
                r.replaceWith(n(e.trim())(i))
            })
        }
    }
}]).filter("typeaheadHighlight", function () {
    function e(e) {
        return e.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    return function (t, n) {
        return n ? ("" + t).replace(new RegExp(e(n), "gi"), "<strong>$&</strong>") : t
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function (e) {
    e.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function (e) {
    e.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function (e) {
    e.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function (e) {
    e.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function (e) {
    e.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function (e) {
    e.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (e) {
    e.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function (e) {
    e.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (e) {
    e.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (e) {
    e.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (e) {
    e.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (e) {
    e.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function (e) {
    e.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function (e) {
    e.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function (e) {
    e.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function (e) {
    e.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function (e) {
    e.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function (e) {
    e.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function (e) {
    e.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function (e) {
    e.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (e) {
    e.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (e) {
    e.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]);
!function () {
    "use strict";
    angular.module("angular-loading-bar", ["cfp.loadingBarInterceptor"]), angular.module("chieffancypants.loadingBar", ["cfp.loadingBarInterceptor"]), angular.module("cfp.loadingBarInterceptor", ["cfp.loadingBar"]).config(["$httpProvider", function (e) {
        var n = ["$q", "$cacheFactory", "$timeout", "$rootScope", "$log", "cfpLoadingBar", function (n, a, t, r, i, c) {
            function o() {
                t.cancel(d), c.complete(), u = 0, s = 0
            }

            function l(n) {
                var t, r = a.get("$http"), i = e.defaults;
                !n.cache && !i.cache || n.cache === !1 || "GET" !== n.method && "JSONP" !== n.method || (t = angular.isObject(n.cache) ? n.cache : angular.isObject(i.cache) ? i.cache : r);
                var c = void 0 !== t ? void 0 !== t.get(n.url) : !1;
                return void 0 !== n.cached && c !== n.cached ? n.cached : (n.cached = c, c)
            }

            var d, s = 0, u = 0, g = c.latencyThreshold;
            return {
                request: function (e) {
                    return e.ignoreLoadingBar || l(e) || (r.$broadcast("cfpLoadingBar:loading", {url: e.url}), 0 === s && (d = t(function () {
                        c.start()
                    }, g)), s++, c.set(u / s)), e
                }, response: function (e) {
                    return e.config.ignoreLoadingBar || l(e.config) || (u++, r.$broadcast("cfpLoadingBar:loaded", {
                        url: e.config.url,
                        result: e
                    }), u >= s ? o() : c.set(u / s)), e
                }, responseError: function (e) {
                    return e.config || i.error("Other interceptors are not returning config object \n https://github.com/chieffancypants/angular-loading-bar/pull/50"), e.config.ignoreLoadingBar || l(e.config) || (u++, r.$broadcast("cfpLoadingBar:loaded", {
                        url: e.config.url,
                        result: e
                    }), u >= s ? o() : c.set(u / s)), n.reject(e)
                }
            }
        }];
        e.interceptors.push(n)
    }]), angular.module("cfp.loadingBar", []).provider("cfpLoadingBar", function () {
        this.includeSpinner = !0, this.includeBar = !0, this.latencyThreshold = 100, this.startSize = .02, this.parentSelector = "body", this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>', this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>', this.$get = ["$injector", "$document", "$timeout", "$rootScope", function (e, n, a, t) {
            function r() {
                s || (s = e.get("$animate"));
                var r = n.find(h).eq(0);
                a.cancel(g), m || (t.$broadcast("cfpLoadingBar:started"), m = !0, b && s.enter(f, r, angular.element(r[0].lastChild)), $ && s.enter(v, r, angular.element(r[0].lastChild)), i(S))
            }

            function i(e) {
                if (m) {
                    var n = 100 * e + "%";
                    p.css("width", n), B = e, a.cancel(u), u = a(function () {
                        c()
                    }, 250)
                }
            }

            function c() {
                if (!(o() >= 1)) {
                    var e = 0, n = o();
                    e = n >= 0 && .25 > n ? (3 * Math.random() + 3) / 100 : n >= .25 && .65 > n ? 3 * Math.random() / 100 : n >= .65 && .9 > n ? 2 * Math.random() / 100 : n >= .9 && .99 > n ? .005 : 0;
                    var a = o() + e;
                    i(a)
                }
            }

            function o() {
                return B
            }

            function l() {
                B = 0, m = !1
            }

            function d() {
                s || (s = e.get("$animate")), t.$broadcast("cfpLoadingBar:completed"), i(1), a.cancel(g), g = a(function () {
                    var e = s.leave(f, l);
                    e && e.then && e.then(l), s.leave(v)
                }, 500)
            }

            var s, u, g, h = this.parentSelector, f = angular.element(this.loadingBarTemplate), p = f.find("div").eq(0), v = angular.element(this.spinnerTemplate), m = !1, B = 0, $ = this.includeSpinner, b = this.includeBar, S = this.startSize;
            return {
                start: r,
                set: i,
                status: o,
                inc: c,
                complete: d,
                includeSpinner: this.includeSpinner,
                latencyThreshold: this.latencyThreshold,
                parentSelector: this.parentSelector,
                startSize: this.startSize
            }
        }]
    })
}();
!function () {
    "use strict";
    angular.module("tmh.dynamicLocale", []).config(["$provide", function (e) {
        function t(e) {
            return e.$stateful = !0, e
        }

        e.decorator("dateFilter", ["$delegate", t]), e.decorator("numberFilter", ["$delegate", t]), e.decorator("currencyFilter", ["$delegate", t])
    }]).constant("tmhDynamicLocale.STORAGE_KEY", "tmhDynamicLocale.locale").provider("tmhDynamicLocale", ["tmhDynamicLocale.STORAGE_KEY", function (e) {
        function t(e, t, a, n) {
            var o = document.createElement("script"), c = document.getElementsByTagName("body")[0], r = !1;
            o.type = "text/javascript", o.readyState ? o.onreadystatechange = function () {
                ("complete" === o.readyState || "loaded" === o.readyState) && (o.onreadystatechange = null, n(function () {
                    r || (r = !0, c.removeChild(o), t())
                }, 30, !1))
            } : (o.onload = function () {
                r || (r = !0, c.removeChild(o), t())
            }, o.onerror = function () {
                r || (r = !0, c.removeChild(o), a())
            }), o.src = e, o.async = !1, c.appendChild(o)
        }

        function a(e, a, n, r, i, s, h) {
            function d(e, t) {
                c === n && (angular.forEach(e, function (a, n) {
                    t[n] ? angular.isArray(t[n]) && (e[n].length = t[n].length) : delete e[n]
                }), angular.forEach(t, function (a, n) {
                    angular.isArray(t[n]) || angular.isObject(t[n]) ? (e[n] || (e[n] = angular.isArray(t[n]) ? [] : {}), d(e[n], t[n])) : e[n] = t[n]
                }))
            }

            if (u[n])return u[n];
            var g, f = i.defer();
            return n === c ? f.resolve(a) : (g = s.get(n)) ? (c = n, r.$evalAsync(function () {
                d(a, g), r.$broadcast("$localeChangeSuccess", n, a), o.put(l, n), f.resolve(a)
            })) : (c = n, u[n] = f.promise, t(e, function () {
                var e = angular.injector(["ngLocale"]), t = e.get("$locale");
                d(a, t), s.put(n, t), delete u[n], r.$apply(function () {
                    r.$broadcast("$localeChangeSuccess", n, a), o.put(l, n), f.resolve(a)
                })
            }, function () {
                delete u[n], r.$apply(function () {
                    c === n && (c = a.id), r.$broadcast("$localeChangeError", n), f.reject(n)
                })
            }, h)), f.promise
        }

        var n, o, c, r = "angular/i18n/angular-locale_{{locale}}.js", i = "tmhDynamicLocaleStorageCache", l = e, u = {};
        this.localeLocationPattern = function (e) {
            return e ? (r = e, this) : r
        }, this.useStorage = function (e) {
            i = e
        }, this.useCookieStorage = function () {
            this.useStorage("$cookieStore")
        }, this.defaultLocale = function (e) {
            n = e
        }, this.storageKey = function (e) {
            return e ? (l = e, this) : l
        }, this.$get = ["$rootScope", "$injector", "$interpolate", "$locale", "$q", "tmhDynamicLocaleCache", "$timeout", function (e, t, u, s, h, d, g) {
            var f = u(r);
            return o = t.get(i), e.$evalAsync(function () {
                var t;
                (t = o.get(l) || n) && a(f({locale: t}), s, t, e, h, d, g)
            }), {
                set: function (t) {
                    return a(f({locale: t}), s, t, e, h, d, g)
                }, get: function () {
                    return c
                }
            }
        }]
    }]).provider("tmhDynamicLocaleCache", function () {
        this.$get = ["$cacheFactory", function (e) {
            return e("tmh.dynamicLocales")
        }]
    }).provider("tmhDynamicLocaleStorageCache", function () {
        this.$get = ["$cacheFactory", function (e) {
            return e("tmh.dynamicLocales.store")
        }]
    }).run(["tmhDynamicLocale", angular.noop])
}(window);