/*!jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license*/ !(function (
  e,
  t
) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    E = C.document,
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.concat,
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.4.1",
    k = function (e, t) {
      return new k.fn.init(e, t);
    },
    p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (k.fn = k.prototype =
    {
      jquery: f,
      constructor: k,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return k.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (k.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || k.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = k.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    k.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        b(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(p, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? k.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g.apply([], a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var h = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      k = "sizzle" + 1 * new Date(),
      m = n.document,
      S = 0,
      r = 0,
      p = ue(),
      x = ue(),
      N = ue(),
      A = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      $ =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp($),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(m.childNodes)), m.childNodes),
        t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (
        !r &&
        ((e ? e.ownerDocument || e : m) !== C && T(e), (e = e || C), E)
      ) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !A[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && U.test(t))) {
            (s = e.getAttribute("id"))
              ? (s = s.replace(re, ie))
              : e.setAttribute("id", (s = k)),
              (o = (l = h(t)).length);
            while (o--) l[o] = "#" + s + " " + xe(l[o]);
            (c = l.join(",")), (f = (ee.test(t) && ye(e.parentNode)) || e);
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[k] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : m;
        return (
          r !== C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            m !== C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = k),
                !C.getElementsByName || !C.getElementsByName(k).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + k + "+*").length ||
                    v.push(".#.+[+~]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", $);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === C || (e.ownerDocument === m && y(m, e))
                        ? -1
                        : t === C || (t.ownerDocument === m && y(m, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e === C
                      ? -1
                      : t === C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] === m
                    ? -1
                    : s[r] === m
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== C && T(e),
        d.matchesSelector &&
          E &&
          !A[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          A(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = p[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                p(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [S, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[k] || (a[k] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [S, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[k]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[k]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [S, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === S && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[k] && (v = Ce(v)),
        y && !y[k] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = N[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
            (a = N(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (S += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t === C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument === C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (S = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((S = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = k.split("").sort(D).join("") === k),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (k.find = h),
    (k.expr = h.selectors),
    (k.expr[":"] = k.expr.pseudos),
    (k.uniqueSort = k.unique = h.uniqueSort),
    (k.text = h.getText),
    (k.isXMLDoc = h.isXML),
    (k.contains = h.contains),
    (k.escapeSelector = h.escape);
  var T = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = k.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? k.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : k.filter(n, e, r);
  }
  (k.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? k.find.matchesSelector(r, e)
          ? [r]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
        return 1 < r ? k.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : L.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof k ? t[0] : t),
          k.merge(
            this,
            k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          D.test(r[1]) && k.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(k)
      : k.makeArray(e, this);
  }).prototype = k.fn),
    (q = k(E));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && k(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && k.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(k(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return T(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return T(e, "nextSibling");
        },
        prevAll: function (e) {
          return T(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return "undefined" != typeof e.contentDocument
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              k.merge([], e.childNodes));
        },
      },
      function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length &&
              (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var R = /[^\x20\t\r\n\f]+/g;
  function M(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (k.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : k.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                k.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = k.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    k.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              k.Callbacks("memory"),
              k.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              k.Callbacks("once memory"),
              k.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return k
                .Deferred(function (r) {
                  k.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, M, s), l(u, o, I, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, M, s),
                                  l(u, o, I, s),
                                  l(u, o, M, o.notifyWith)
                                ))
                            : (a !== M && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            k.Deferred.exceptionHook &&
                              k.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== I && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (k.Deferred.getStackHook &&
                        (t.stackTrace = k.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return k
                .Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                    o[1][3].add(l(0, e, m(t) ? t : M)),
                    o[2][3].add(l(0, e, m(n) ? n : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            },
          },
          s = {};
        return (
          k.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (W(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) W(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (k.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      $.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (k.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = k.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      k.ready();
  }
  (k.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        k.readyException(e);
      }),
      this
    );
  }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          F.resolveWith(E, [k]);
      },
    }),
    (k.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(k.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(k(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    U = /-([a-z])/g;
  function X(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = k.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            G(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(R) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || k.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !k.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), ee(o, r, i[r]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              J.set(this, n);
            })
          : _(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = J.get(o, n))
                    ? t
                    : void 0 !== (t = ee(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  J.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    k.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Q.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Q.access(e, t, k.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                k.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: k.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    k.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Q.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = E.documentElement,
    oe = function (e) {
      return k.contains(e.ownerDocument, e);
    },
    ae = { composed: !0 };
  ie.getRootNode &&
    (oe = function (e) {
      return (
        k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
      );
    });
  var se = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && oe(e) && "none" === k.css(e, "display"))
      );
    },
    ue = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function le(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return k.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (k.cssNumber[t] || ("px" !== l && +u)) &&
        ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        k.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), k.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ce = {};
  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Q.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              se(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ce[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = k.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ce[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  k.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            se(this) ? k(this).show() : k(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? k.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  var me,
    xe,
    be = /<|&#?\w+;/;
  function we(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
        else if (be.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          k.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < k.inArray(o, r)) i && i.push(o);
      else if (
        ((l = oe(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  (me = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    (y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (me.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue);
  var Te = /^key/,
    Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ee = /^([^.]*)(?:\.(.+)|)/;
  function ke() {
    return !0;
  }
  function Se() {
    return !1;
  }
  function Ne(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Se;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, i, r, n);
      })
    );
  }
  function De(e, i, o) {
    o
      ? (Q.set(e, i, !1),
        k.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Q.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (k.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Q.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Q.set(this, i, {
                  value: k.event.trigger(
                    k.extend(r[0], k.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }
  (k.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.get(t);
      if (v) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && k.find.matchesSelector(ie, i),
          n.guid || (n.guid = k.guid++),
          (u = v.events) || (u = v.events = {}),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof k && k.event.triggered !== e.type
                  ? k.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(R) || [""]).length);
        while (l--)
          (d = g = (s = Ee.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = k.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = k.event.special[d] || {}),
              (c = k.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && k.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (k.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Ee.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = k.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                k.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = k.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, s))
      ) {
        (a = k.event.handlers.call(this, s, l)), (t = 0);
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          (s.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
            (s.rnamespace &&
              !1 !== o.namespace &&
              !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !==
                (r = (
                  (k.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < k(i, this).index(l)
                  : k.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Q.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (k.Event = function (e, t) {
      if (!(this instanceof k.Event)) return new k.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? ke
              : Se),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && k.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[k.expando] = !0);
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ke),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ke),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = ke),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    k.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && Te.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Ce.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      k.event.addProp
    ),
    k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      k.event.special[e] = {
        setup: function () {
          return De(this, e, Ne), !1;
        },
        trigger: function () {
          return De(this, e), !0;
        },
        delegateType: t,
      };
    }),
    k.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        k.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || k.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    k.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            k(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Se),
          this.each(function () {
            k.event.remove(this, e, n, t);
          })
        );
      },
    });
  var je =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i,
    Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Oe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        k(e).children("tbody")[0]) ||
      e
    );
  }
  function Pe(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Re(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Q.hasData(e) &&
        ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && ((s = J.access(e)), (u = k.extend({}, s)), J.set(t, u));
    }
  }
  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Le.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = k.clone(u, !0, !0)), s && k.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Q.access(u, "globalEval") &&
              k.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? k._evalUrl &&
                  !u.noModule &&
                  k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce"),
                  })
                : b(u.textContent.replace(He, ""), u, l));
    }
    return n;
  }
  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || k.cleanData(ve(r)),
        r.parentNode &&
          (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = oe(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Me(o[r], a[r]);
        else Me(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if ((t = n[Q.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    k.fn.extend({
      detach: function (e) {
        return We(this, e, !0);
      },
      remove: function (e) {
        return We(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Ie(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Oe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Ie(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Oe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Ie(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !qe.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (k.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Ie(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            k.inArray(this, n) < 0 &&
              (k.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    k.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              k(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Fe = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Be = new RegExp(re.join("|"), "i");
  function _e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Fe(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          oe(e) ||
          (a = k.style(e, t)),
        !y.pixelBoxStyles() &&
          $e.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (u) {
        (s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (u.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        (n = "1%" !== e.top),
          (a = 12 === t(e.marginLeft)),
          (u.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (u.style.position = "absolute"),
          (i = 12 === t(u.offsetWidth / 3)),
          ie.removeChild(s),
          (u = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s = E.createElement("div"),
      u = E.createElement("div");
    u.style &&
      ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === u.style.backgroundClip),
      k.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), a;
        },
        scrollboxSize: function () {
          return e(), i;
        },
      }));
  })();
  var Ue = ["Webkit", "Moz", "ms"],
    Xe = E.createElement("div").style,
    Ve = {};
  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return (
      t ||
      (e in Xe
        ? e
        : (Ve[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
              while (n--) if ((e = Ue[n] + t) in Xe) return e;
            })(e) || e))
    );
  }
  var Ye = /^(none|table(?!-c[ea]).+)/,
    Qe = /^--/,
    Je = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" };
  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += k.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n &&
              (u -= k.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += k.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += k.css(e, "border" + re[a] + "Width", !0, i))
              : (s += k.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function tt(e, t, n) {
    var r = Fe(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === k.css(e, "boxSizing", !1, r),
      o = i,
      a = _e(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === k.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        et(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Qe.test(t),
          l = e.style;
        if (
          (u || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = ne.exec(n)) &&
          i[1] &&
          ((n = le(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (k.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Qe.test(t) || (t = Ge(s)),
        (a = k.cssHooks[t] || k.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = _e(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    k.each(["height", "width"], function (e, u) {
      k.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ye.test(k.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? tt(e, u, n)
              : ue(e, Je, function () {
                  return tt(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  et(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = ne.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = k.css(e, u))),
            Ze(0, t, s)
          );
        },
      };
    }),
    (k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(_e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ue(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (k.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (k.cssHooks[i + o].set = Ze);
    }),
    k.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Fe(e), i = t.length; a < i; a++)
                o[t[a]] = k.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((k.Tween = nt).prototype = {
      constructor: nt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (k.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = nt.propHooks[this.prop];
        return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = nt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : nt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = nt.prototype),
    ((nt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = nt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (k.fx = nt.prototype.init),
    (k.fx.step = {});
  var rt,
    it,
    ot,
    at,
    st = /^(?:toggle|show|hide)$/,
    ut = /queueHooks$/;
  function lt() {
    it &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(lt)
        : C.setTimeout(lt, k.fx.interval),
      k.fx.tick());
  }
  function ct() {
    return (
      C.setTimeout(function () {
        rt = void 0;
      }),
      (rt = Date.now())
    );
  }
  function ft(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function pt(e, t, n) {
    for (
      var r,
        i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function dt(o, e, t) {
    var n,
      a,
      r = 0,
      i = dt.prefilters.length,
      s = k.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = rt || ct(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: rt || ct(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = k.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = k.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = dt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      k.map(c, pt, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (k.Animation = k.extend(dt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return le(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (dt.tweeners[n] = dt.tweeners[n] || []),
          dt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = k._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), st.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || k.style(e, r);
          }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Q.get(e, "display")),
            "none" === (c = k.css(e, "display")) &&
              (l
                ? (c = l)
                : (fe([e], !0),
                  (l = e.style.display || l),
                  (c = k.css(e, "display")),
                  fe([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === k.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Q.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && fe([e], !0),
              p.done(function () {
                for (r in (g || fe([e]), Q.remove(e, "fxshow"), d))
                  k.style(e, r, d[r]);
              })),
              (u = pt(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    },
  })),
    (k.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? k.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        k.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in k.fx.speeds
              ? (r.duration = k.fx.speeds[r.duration])
              : (r.duration = k.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }),
        r
      );
    }),
    k.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(se)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function () {
            var e = dt(this, k.extend({}, t), o);
            (i || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = k.timers,
              r = Q.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || k.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Q.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = k.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    k.each(["toggle", "show", "hide"], function (e, r) {
      var i = k.fn[r];
      k.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(ft(r, !0), e, t, n);
      };
    }),
    k.each(
      {
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        n = k.timers;
      for (rt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || k.fx.stop(), (rt = void 0);
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), k.fx.start();
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      it || ((it = !0), lt());
    }),
    (k.fx.stop = function () {
      it = null;
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (r, e) {
      return (
        (r = (k.fx && k.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (ot = E.createElement("input")),
    (at = E.createElement("select").appendChild(E.createElement("option"))),
    (ot.type = "checkbox"),
    (y.checkOn = "" !== ot.value),
    (y.optSelected = at.selected),
    ((ot = E.createElement("input")).value = "t"),
    (ot.type = "radio"),
    (y.radioValue = "t" === ot.value);
  var ht,
    gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    },
  }),
    k.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? k.prop(e, t, n)
            : ((1 === o && k.isXMLDoc(e)) ||
                (i =
                  k.attrHooks[t.toLowerCase()] ||
                  (k.expr.match.bool.test(t) ? ht : void 0)),
              void 0 !== n
                ? null === n
                  ? void k.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = k.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(R);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ht = {
      set: function (e, t, n) {
        return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = gt[t] || k.find.attr;
      gt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = gt[o]),
            (gt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (gt[o] = i)),
          r
        );
      };
    });
  var vt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  function mt(e) {
    return (e.match(R) || []).join(" ");
  }
  function xt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function bt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
  }
  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    },
  }),
    k.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (i = k.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    k.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        k.propFix[this.toLowerCase()] = this;
      }
    ),
    k.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).addClass(t.call(this, e, xt(this)));
          });
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            k(this).removeClass(t.call(this, e, xt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = bt(t)).length)
          while ((n = this[u++]))
            if (((i = xt(n)), (r = 1 === n.nodeType && " " + mt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = mt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              k(this).toggleClass(i.call(this, e, xt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = k(this)), (r = bt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, k(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(wt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, "value");
            return null != t ? t : mt(k.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = k(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    k.each(["radio", "checkbox"], function () {
      (k.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < k.inArray(k(e).val(), t));
        },
      }),
        y.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var Tt = /^(?:focusinfocus|focusoutblur)$/,
    Ct = function (e) {
      e.stopPropagation();
    };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Tt.test(d + k.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[k.expando]
            ? e
            : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (c = k.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) &&
              l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              G(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !G(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (k.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, Ct),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, Ct),
              (k.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
      k.event.trigger(r, null, t);
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return k.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        };
        k.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r);
            t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = Q.access(e, r) - 1;
            t
              ? Q.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Q.remove(e, r));
          },
        };
      });
  var Et = C.location,
    kt = Date.now(),
    St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        k.error("Invalid XML: " + e),
      t
    );
  };
  var Nt = /\[\]$/,
    At = /\r?\n/g,
    Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      k.each(e, function (e, t) {
        r || Nt.test(n)
          ? i(n, t)
          : qt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) qt(n + "[" + t + "]", e[t], r, i);
  }
  (k.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
      k.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) qt(n, e[n], t, i);
    return r.join("&");
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, "elements");
          return e ? k.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !k(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !Dt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = k(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? k.map(n, function (e) {
                  return { name: t.name, value: e.replace(At, "\r\n") };
                })
              : { name: t.name, value: n.replace(At, "\r\n") };
          })
          .get();
      },
    });
  var Lt = /%20/g,
    Ht = /#.*$/,
    Ot = /([?&])_=[^&]*/,
    Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Ft = E.createElement("a");
  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(R) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function _t(t, i, o, a) {
    var s = {},
      u = t === Wt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e;
  }
  (Ft.href = Et.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": $t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(It),
      ajaxTransport: Bt(Wt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Pt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Et.href) + "").replace(
            Mt,
            Et.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = k.param(v.data, v.traditional)),
          _t(It, v, t, T),
          h)
        )
          return T;
        for (i in ((g = k.event && v.global) &&
          0 == k.active++ &&
          k.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Rt.test(v.type)),
        (f = v.url.replace(Ht, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Lt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (St.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Ot, "$1")),
              (o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (k.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
          k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = _t(Wt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (k.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --k.active || k.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return k.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, "script");
      },
    }),
    k.each(["get", "post"], function (e, i) {
      k[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              k.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (k._evalUrl = function (e, t) {
      return k.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          k.globalEval(e, t);
        },
      });
    }),
    k.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              k(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          k(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              k(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (k.expr.pseudos.hidden = function (e) {
      return !k.expr.pseudos.visible(e);
    }),
    (k.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Ut = { 0: 200, 1223: 204 },
    Xt = k.ajaxSettings.xhr();
  (y.cors = !!Xt && "withCredentials" in Xt),
    (y.ajax = Xt = !!Xt),
    k.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (Xt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Ut[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    k.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    k.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return k.globalEval(e), e;
        },
      },
    }),
    k.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    k.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = k("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Vt,
    Gt = [],
    Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return (this[e] = !0), e;
    },
  }),
    k.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Yt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Yt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Yt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? k(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Gt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Vt = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Vt.childNodes.length)),
    (k.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = D.exec(e))
            ? [t.createElement(i[1])]
            : ((i = we([e], t, o)),
              o && o.length && k(o).remove(),
              k.merge([], i.childNodes)));
      var r, i, o;
    }),
    (k.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          k
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    k.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (k.expr.pseudos.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (k.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = k.css(e, "top")),
          (u = k.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, k.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === k.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
              (i.left += k.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - k.css(r, "marginTop", !0),
            left: t.left - i.left - k.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === k.css(e, "position")) e = e.offsetParent;
          return e || ie;
        });
      },
    }),
    k.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
          return _(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    k.each(["top", "left"], function (e, n) {
      k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
        if (t)
          return (t = _e(e, n)), $e.test(t) ? k(e).position()[n] + "px" : t;
      });
    }),
    k.each({ Height: "height", Width: "width" }, function (a, s) {
      k.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return _(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? k.css(e, t, i)
                  : k.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    k.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    k.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (k.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
        return (
          (r = s.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }).guid = e.guid =
            e.guid || k.guid++),
          i
        );
    }),
    (k.holdReady = function (e) {
      e ? k.readyWait++ : k.ready(!0);
    }),
    (k.isArray = Array.isArray),
    (k.parseJSON = JSON.parse),
    (k.nodeName = A),
    (k.isFunction = m),
    (k.isWindow = x),
    (k.camelCase = V),
    (k.type = w),
    (k.now = Date.now),
    (k.isNumeric = function (e) {
      var t = k.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return k;
      });
  var Qt = C.jQuery,
    Jt = C.$;
  return (
    (k.noConflict = function (e) {
      return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
    }),
    e || (C.jQuery = C.$ = k),
    k
  );
});
/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */ !(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, h) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function s(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function l(r) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(o).filter(function (t) {
            return Object.getOwnPropertyDescriptor(o, t).enumerable;
          })
        )),
        e.forEach(function (t) {
          var e, n, i;
          (e = r),
            (i = o[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i);
        });
    }
    return r;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (h = h && h.hasOwnProperty("default") ? h.default : h);
  var r,
    n,
    o,
    a,
    c,
    u,
    f,
    d,
    g,
    _,
    m,
    p,
    v,
    y,
    E,
    C,
    T,
    b,
    S,
    I,
    A,
    D,
    w,
    N,
    O,
    k,
    P,
    j,
    H,
    L,
    R,
    x,
    W,
    U,
    q,
    F,
    K,
    M,
    Q,
    B,
    V,
    Y,
    z,
    J,
    Z,
    G,
    $,
    X,
    tt,
    et,
    nt,
    it,
    rt,
    ot,
    st,
    at,
    lt,
    ct,
    ht,
    ut,
    ft,
    dt,
    gt,
    _t,
    mt,
    pt,
    vt,
    yt,
    Et,
    Ct,
    Tt,
    bt,
    St,
    It,
    At,
    Dt,
    wt,
    Nt,
    Ot,
    kt,
    Pt,
    jt,
    Ht,
    Lt,
    Rt,
    xt,
    Wt,
    Ut,
    qt,
    Ft,
    Kt,
    Mt,
    Qt,
    Bt,
    Vt,
    Yt,
    zt,
    Jt,
    Zt,
    Gt,
    $t,
    Xt,
    te,
    ee,
    ne,
    ie,
    re,
    oe,
    se,
    ae,
    le,
    ce,
    he,
    ue,
    fe,
    de,
    ge,
    _e,
    me,
    pe,
    ve,
    ye,
    Ee,
    Ce,
    Te,
    be,
    Se,
    Ie,
    Ae,
    De,
    we,
    Ne,
    Oe,
    ke,
    Pe,
    je,
    He,
    Le,
    Re,
    xe,
    We,
    Ue,
    qe,
    Fe,
    Ke,
    Me,
    Qe,
    Be,
    Ve,
    Ye,
    ze,
    Je,
    Ze,
    Ge,
    $e,
    Xe,
    tn,
    en,
    nn,
    rn,
    on,
    sn,
    an,
    ln,
    cn,
    hn,
    un,
    fn,
    dn,
    gn,
    _n,
    mn,
    pn,
    vn,
    yn,
    En,
    Cn,
    Tn,
    bn,
    Sn,
    In,
    An,
    Dn,
    wn,
    Nn,
    On,
    kn,
    Pn,
    jn,
    Hn,
    Ln,
    Rn,
    xn,
    Wn,
    Un,
    qn,
    Fn = (function (i) {
      var e = "transitionend";
      function t(t) {
        var e = this,
          n = !1;
        return (
          i(this).one(l.TRANSITION_END, function () {
            n = !0;
          }),
          setTimeout(function () {
            n || l.triggerTransitionEnd(e);
          }, t),
          this
        );
      }
      var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t;
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          (e && "#" !== e) || (e = t.getAttribute("href") || "");
          try {
            return document.querySelector(e) ? e : null;
          } catch (t) {
            return null;
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var e = i(t).css("transition-duration");
          return parseFloat(e)
            ? ((e = e.split(",")[0]), 1e3 * parseFloat(e))
            : 0;
        },
        reflow: function (t) {
          return t.offsetHeight;
        },
        triggerTransitionEnd: function (t) {
          i(t).trigger(e);
        },
        supportsTransitionEnd: function () {
          return Boolean(e);
        },
        isElement: function (t) {
          return (t[0] || t).nodeType;
        },
        typeCheckConfig: function (t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                o = e[i],
                s =
                  o && l.isElement(o)
                    ? "element"
                    : ((a = o),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase());
              if (!new RegExp(r).test(s))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    s +
                    '" but expected type "' +
                    r +
                    '".'
                );
            }
          var a;
        },
      };
      return (
        (i.fn.emulateTransitionEnd = t),
        (i.event.special[l.TRANSITION_END] = {
          bindType: e,
          delegateType: e,
          handle: function (t) {
            if (i(t.target).is(this))
              return t.handleObj.handler.apply(this, arguments);
          },
        }),
        l
      );
    })(e),
    Kn =
      ((n = "alert"),
      (a = "." + (o = "bs.alert")),
      (c = (r = e).fn[n]),
      (u = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api",
      }),
      (f = "alert"),
      (d = "fade"),
      (g = "show"),
      (_ = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (t.dispose = function () {
            r.removeData(this._element, o), (this._element = null);
          }),
          (t._getRootElement = function (t) {
            var e = Fn.getSelectorFromElement(t),
              n = !1;
            return (
              e && (n = document.querySelector(e)),
              n || (n = r(t).closest("." + f)[0]),
              n
            );
          }),
          (t._triggerCloseEvent = function (t) {
            var e = r.Event(u.CLOSE);
            return r(t).trigger(e), e;
          }),
          (t._removeElement = function (e) {
            var n = this;
            if ((r(e).removeClass(g), r(e).hasClass(d))) {
              var t = Fn.getTransitionDurationFromElement(e);
              r(e)
                .one(Fn.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t);
                })
                .emulateTransitionEnd(t);
            } else this._destroyElement(e);
          }),
          (t._destroyElement = function (t) {
            r(t).detach().trigger(u.CLOSED).remove();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = r(this),
                e = t.data(o);
              e || ((e = new i(this)), t.data(o, e)),
                "close" === n && e[n](this);
            });
          }),
          (i._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          i
        );
      })()),
      r(document).on(
        u.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        _._handleDismiss(new _())
      ),
      (r.fn[n] = _._jQueryInterface),
      (r.fn[n].Constructor = _),
      (r.fn[n].noConflict = function () {
        return (r.fn[n] = c), _._jQueryInterface;
      }),
      _),
    Mn =
      ((p = "button"),
      (y = "." + (v = "bs.button")),
      (E = ".data-api"),
      (C = (m = e).fn[p]),
      (T = "active"),
      (b = "btn"),
      (I = '[data-toggle^="button"]'),
      (A = '[data-toggle="buttons"]'),
      (D = "input"),
      (w = ".active"),
      (N = ".btn"),
      (O = {
        CLICK_DATA_API: "click" + y + E,
        FOCUS_BLUR_DATA_API: (S = "focus") + y + E + " blur" + y + E,
      }),
      (k = (function () {
        function n(t) {
          this._element = t;
        }
        var t = n.prototype;
        return (
          (t.toggle = function () {
            var t = !0,
              e = !0,
              n = m(this._element).closest(A)[0];
            if (n) {
              var i = this._element.querySelector(D);
              if (i) {
                if ("radio" === i.type)
                  if (i.checked && this._element.classList.contains(T)) t = !1;
                  else {
                    var r = n.querySelector(w);
                    r && m(r).removeClass(T);
                  }
                if (t) {
                  if (
                    i.hasAttribute("disabled") ||
                    n.hasAttribute("disabled") ||
                    i.classList.contains("disabled") ||
                    n.classList.contains("disabled")
                  )
                    return;
                  (i.checked = !this._element.classList.contains(T)),
                    m(i).trigger("change");
                }
                i.focus(), (e = !1);
              }
            }
            e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(T)
              ),
              t && m(this._element).toggleClass(T);
          }),
          (t.dispose = function () {
            m.removeData(this._element, v), (this._element = null);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = m(this).data(v);
              t || ((t = new n(this)), m(this).data(v, t)),
                "toggle" === e && t[e]();
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          n
        );
      })()),
      m(document)
        .on(O.CLICK_DATA_API, I, function (t) {
          t.preventDefault();
          var e = t.target;
          m(e).hasClass(b) || (e = m(e).closest(N)),
            k._jQueryInterface.call(m(e), "toggle");
        })
        .on(O.FOCUS_BLUR_DATA_API, I, function (t) {
          var e = m(t.target).closest(N)[0];
          m(e).toggleClass(S, /^focus(in)?$/.test(t.type));
        }),
      (m.fn[p] = k._jQueryInterface),
      (m.fn[p].Constructor = k),
      (m.fn[p].noConflict = function () {
        return (m.fn[p] = C), k._jQueryInterface;
      }),
      k),
    Qn =
      ((j = "carousel"),
      (L = "." + (H = "bs.carousel")),
      (R = ".data-api"),
      (x = (P = e).fn[j]),
      (W = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
      }),
      (U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
      }),
      (q = "next"),
      (F = "prev"),
      (K = "left"),
      (M = "right"),
      (Q = {
        SLIDE: "slide" + L,
        SLID: "slid" + L,
        KEYDOWN: "keydown" + L,
        MOUSEENTER: "mouseenter" + L,
        MOUSELEAVE: "mouseleave" + L,
        TOUCHEND: "touchend" + L,
        LOAD_DATA_API: "load" + L + R,
        CLICK_DATA_API: "click" + L + R,
      }),
      (B = "carousel"),
      (V = "active"),
      (Y = "slide"),
      (z = "carousel-item-right"),
      (J = "carousel-item-left"),
      (Z = "carousel-item-next"),
      (G = "carousel-item-prev"),
      ($ = ".active"),
      (X = ".active.carousel-item"),
      (tt = ".carousel-item"),
      (et = ".carousel-item-next, .carousel-item-prev"),
      (nt = ".carousel-indicators"),
      (it = "[data-slide], [data-slide-to]"),
      (rt = '[data-ride="carousel"]'),
      (ot = (function () {
        function o(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = P(t)[0]),
            (this._indicatorsElement = this._element.querySelector(nt)),
            this._addEventListeners();
        }
        var t = o.prototype;
        return (
          (t.next = function () {
            this._isSliding || this._slide(q);
          }),
          (t.nextWhenVisible = function () {
            !document.hidden &&
              P(this._element).is(":visible") &&
              "hidden" !== P(this._element).css("visibility") &&
              this.next();
          }),
          (t.prev = function () {
            this._isSliding || this._slide(F);
          }),
          (t.pause = function (t) {
            t || (this._isPaused = !0),
              this._element.querySelector(et) &&
                (Fn.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (t.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (t.to = function (t) {
            var e = this;
            this._activeElement = this._element.querySelector(X);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                P(this._element).one(Q.SLID, function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? q : F;
                this._slide(i, this._items[t]);
              }
          }),
          (t.dispose = function () {
            P(this._element).off(L),
              P.removeData(this._element, H),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (t._getConfig = function (t) {
            return (t = l({}, W, t)), Fn.typeCheckConfig(j, t, U), t;
          }),
          (t._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              P(this._element).on(Q.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                (P(this._element)
                  .on(Q.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(Q.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
                "ontouchstart" in document.documentElement &&
                  P(this._element).on(Q.TOUCHEND, function () {
                    e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval));
                  }));
          }),
          (t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (t._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode
                  ? [].slice.call(t.parentNode.querySelectorAll(tt))
                  : []),
              this._items.indexOf(t)
            );
          }),
          (t._getItemByDirection = function (t, e) {
            var n = t === q,
              i = t === F,
              r = this._getItemIndex(e),
              o = this._items.length - 1;
            if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
              return e;
            var s = (r + (t === F ? -1 : 1)) % this._items.length;
            return -1 === s
              ? this._items[this._items.length - 1]
              : this._items[s];
          }),
          (t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(this._element.querySelector(X)),
              r = P.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n,
              });
            return P(this._element).trigger(r), r;
          }),
          (t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var e = [].slice.call(
                this._indicatorsElement.querySelectorAll($)
              );
              P(e).removeClass(V);
              var n = this._indicatorsElement.children[this._getItemIndex(t)];
              n && P(n).addClass(V);
            }
          }),
          (t._slide = function (t, e) {
            var n,
              i,
              r,
              o = this,
              s = this._element.querySelector(X),
              a = this._getItemIndex(s),
              l = e || (s && this._getItemByDirection(t, s)),
              c = this._getItemIndex(l),
              h = Boolean(this._interval);
            if (
              (t === q
                ? ((n = J), (i = Z), (r = K))
                : ((n = z), (i = G), (r = M)),
              l && P(l).hasClass(V))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
              s &&
              l
            ) {
              (this._isSliding = !0),
                h && this.pause(),
                this._setActiveIndicatorElement(l);
              var u = P.Event(Q.SLID, {
                relatedTarget: l,
                direction: r,
                from: a,
                to: c,
              });
              if (P(this._element).hasClass(Y)) {
                P(l).addClass(i),
                  Fn.reflow(l),
                  P(s).addClass(n),
                  P(l).addClass(n);
                var f = Fn.getTransitionDurationFromElement(s);
                P(s)
                  .one(Fn.TRANSITION_END, function () {
                    P(l)
                      .removeClass(n + " " + i)
                      .addClass(V),
                      P(s).removeClass(V + " " + i + " " + n),
                      (o._isSliding = !1),
                      setTimeout(function () {
                        return P(o._element).trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(f);
              } else
                P(s).removeClass(V),
                  P(l).addClass(V),
                  (this._isSliding = !1),
                  P(this._element).trigger(u);
              h && this.cycle();
            }
          }),
          (o._jQueryInterface = function (i) {
            return this.each(function () {
              var t = P(this).data(H),
                e = l({}, W, P(this).data());
              "object" == typeof i && (e = l({}, e, i));
              var n = "string" == typeof i ? i : e.slide;
              if (
                (t || ((t = new o(this, e)), P(this).data(H, t)),
                "number" == typeof i)
              )
                t.to(i);
              else if ("string" == typeof n) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              } else e.interval && (t.pause(), t.cycle());
            });
          }),
          (o._dataApiClickHandler = function (t) {
            var e = Fn.getSelectorFromElement(this);
            if (e) {
              var n = P(e)[0];
              if (n && P(n).hasClass(B)) {
                var i = l({}, P(n).data(), P(this).data()),
                  r = this.getAttribute("data-slide-to");
                r && (i.interval = !1),
                  o._jQueryInterface.call(P(n), i),
                  r && P(n).data(H).to(r),
                  t.preventDefault();
              }
            }
          }),
          s(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return W;
              },
            },
          ]),
          o
        );
      })()),
      P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler),
      P(window).on(Q.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(rt)),
            e = 0,
            n = t.length;
          e < n;
          e++
        ) {
          var i = P(t[e]);
          ot._jQueryInterface.call(i, i.data());
        }
      }),
      (P.fn[j] = ot._jQueryInterface),
      (P.fn[j].Constructor = ot),
      (P.fn[j].noConflict = function () {
        return (P.fn[j] = x), ot._jQueryInterface;
      }),
      ot),
    Bn =
      ((at = "collapse"),
      (ct = "." + (lt = "bs.collapse")),
      (ht = (st = e).fn[at]),
      (ut = { toggle: !0, parent: "" }),
      (ft = { toggle: "boolean", parent: "(string|element)" }),
      (dt = {
        SHOW: "show" + ct,
        SHOWN: "shown" + ct,
        HIDE: "hide" + ct,
        HIDDEN: "hidden" + ct,
        CLICK_DATA_API: "click" + ct + ".data-api",
      }),
      (gt = "show"),
      (_t = "collapse"),
      (mt = "collapsing"),
      (pt = "collapsed"),
      (vt = "width"),
      (yt = "height"),
      (Et = ".show, .collapsing"),
      (Ct = '[data-toggle="collapse"]'),
      (Tt = (function () {
        function a(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = st.makeArray(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var n = [].slice.call(document.querySelectorAll(Ct)),
              i = 0,
              r = n.length;
            i < r;
            i++
          ) {
            var o = n[i],
              s = Fn.getSelectorFromElement(o),
              a = [].slice
                .call(document.querySelectorAll(s))
                .filter(function (t) {
                  return t === e;
                });
            null !== s &&
              0 < a.length &&
              ((this._selector = s), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var t = a.prototype;
        return (
          (t.toggle = function () {
            st(this._element).hasClass(gt) ? this.hide() : this.show();
          }),
          (t.show = function () {
            var t,
              e,
              n = this;
            if (
              !this._isTransitioning &&
              !st(this._element).hasClass(gt) &&
              (this._parent &&
                0 ===
                  (t = [].slice
                    .call(this._parent.querySelectorAll(Et))
                    .filter(function (t) {
                      return t.getAttribute("data-parent") === n._config.parent;
                    })).length &&
                (t = null),
              !(
                t &&
                (e = st(t).not(this._selector).data(lt)) &&
                e._isTransitioning
              ))
            ) {
              var i = st.Event(dt.SHOW);
              if ((st(this._element).trigger(i), !i.isDefaultPrevented())) {
                t &&
                  (a._jQueryInterface.call(st(t).not(this._selector), "hide"),
                  e || st(t).data(lt, null));
                var r = this._getDimension();
                st(this._element).removeClass(_t).addClass(mt),
                  (this._element.style[r] = 0),
                  this._triggerArray.length &&
                    st(this._triggerArray)
                      .removeClass(pt)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                  s = Fn.getTransitionDurationFromElement(this._element);
                st(this._element)
                  .one(Fn.TRANSITION_END, function () {
                    st(n._element).removeClass(mt).addClass(_t).addClass(gt),
                      (n._element.style[r] = ""),
                      n.setTransitioning(!1),
                      st(n._element).trigger(dt.SHOWN);
                  })
                  .emulateTransitionEnd(s),
                  (this._element.style[r] = this._element[o] + "px");
              }
            }
          }),
          (t.hide = function () {
            var t = this;
            if (!this._isTransitioning && st(this._element).hasClass(gt)) {
              var e = st.Event(dt.HIDE);
              if ((st(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + "px"),
                  Fn.reflow(this._element),
                  st(this._element)
                    .addClass(mt)
                    .removeClass(_t)
                    .removeClass(gt);
                var i = this._triggerArray.length;
                if (0 < i)
                  for (var r = 0; r < i; r++) {
                    var o = this._triggerArray[r],
                      s = Fn.getSelectorFromElement(o);
                    if (null !== s)
                      st([].slice.call(document.querySelectorAll(s))).hasClass(
                        gt
                      ) || st(o).addClass(pt).attr("aria-expanded", !1);
                  }
                this.setTransitioning(!0);
                this._element.style[n] = "";
                var a = Fn.getTransitionDurationFromElement(this._element);
                st(this._element)
                  .one(Fn.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      st(t._element)
                        .removeClass(mt)
                        .addClass(_t)
                        .trigger(dt.HIDDEN);
                  })
                  .emulateTransitionEnd(a);
              }
            }
          }),
          (t.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (t.dispose = function () {
            st.removeData(this._element, lt),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (t._getConfig = function (t) {
            return (
              ((t = l({}, ut, t)).toggle = Boolean(t.toggle)),
              Fn.typeCheckConfig(at, t, ft),
              t
            );
          }),
          (t._getDimension = function () {
            return st(this._element).hasClass(vt) ? vt : yt;
          }),
          (t._getParent = function () {
            var n = this,
              t = null;
            Fn.isElement(this._config.parent)
              ? ((t = this._config.parent),
                "undefined" != typeof this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = document.querySelector(this._config.parent));
            var e =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              i = [].slice.call(t.querySelectorAll(e));
            return (
              st(i).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
              }),
              t
            );
          }),
          (t._addAriaAndCollapsedClass = function (t, e) {
            if (t) {
              var n = st(t).hasClass(gt);
              e.length && st(e).toggleClass(pt, !n).attr("aria-expanded", n);
            }
          }),
          (a._getTargetFromElement = function (t) {
            var e = Fn.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var t = st(this),
                e = t.data(lt),
                n = l({}, ut, t.data(), "object" == typeof i && i ? i : {});
              if (
                (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || ((e = new a(this, n)), t.data(lt, e)),
                "string" == typeof i)
              ) {
                if ("undefined" == typeof e[i])
                  throw new TypeError('No method named "' + i + '"');
                e[i]();
              }
            });
          }),
          s(a, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return ut;
              },
            },
          ]),
          a
        );
      })()),
      st(document).on(dt.CLICK_DATA_API, Ct, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = st(this),
          e = Fn.getSelectorFromElement(this),
          i = [].slice.call(document.querySelectorAll(e));
        st(i).each(function () {
          var t = st(this),
            e = t.data(lt) ? "toggle" : n.data();
          Tt._jQueryInterface.call(t, e);
        });
      }),
      (st.fn[at] = Tt._jQueryInterface),
      (st.fn[at].Constructor = Tt),
      (st.fn[at].noConflict = function () {
        return (st.fn[at] = ht), Tt._jQueryInterface;
      }),
      Tt),
    Vn =
      ((St = "dropdown"),
      (At = "." + (It = "bs.dropdown")),
      (Dt = ".data-api"),
      (wt = (bt = e).fn[St]),
      (Nt = new RegExp("38|40|27")),
      (Ot = {
        HIDE: "hide" + At,
        HIDDEN: "hidden" + At,
        SHOW: "show" + At,
        SHOWN: "shown" + At,
        CLICK: "click" + At,
        CLICK_DATA_API: "click" + At + Dt,
        KEYDOWN_DATA_API: "keydown" + At + Dt,
        KEYUP_DATA_API: "keyup" + At + Dt,
      }),
      (kt = "disabled"),
      (Pt = "show"),
      (jt = "dropup"),
      (Ht = "dropright"),
      (Lt = "dropleft"),
      (Rt = "dropdown-menu-right"),
      (xt = "position-static"),
      (Wt = '[data-toggle="dropdown"]'),
      (Ut = ".dropdown form"),
      (qt = ".dropdown-menu"),
      (Ft = ".navbar-nav"),
      (Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"),
      (Mt = "top-start"),
      (Qt = "top-end"),
      (Bt = "bottom-start"),
      (Vt = "bottom-end"),
      (Yt = "right-start"),
      (zt = "left-start"),
      (Jt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      }),
      (Zt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      }),
      (Gt = (function () {
        function c(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var t = c.prototype;
        return (
          (t.toggle = function () {
            if (!this._element.disabled && !bt(this._element).hasClass(kt)) {
              var t = c._getParentFromElement(this._element),
                e = bt(this._menu).hasClass(Pt);
              if ((c._clearMenus(), !e)) {
                var n = { relatedTarget: this._element },
                  i = bt.Event(Ot.SHOW, n);
                if ((bt(t).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if ("undefined" == typeof h)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var r = this._element;
                    "parent" === this._config.reference
                      ? (r = t)
                      : Fn.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        "undefined" != typeof this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        bt(t).addClass(xt),
                      (this._popper = new h(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === bt(t).closest(Ft).length &&
                    bt(document.body).children().on("mouseover", null, bt.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    bt(this._menu).toggleClass(Pt),
                    bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n));
                }
              }
            }
          }),
          (t.dispose = function () {
            bt.removeData(this._element, It),
              bt(this._element).off(At),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (t.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t._addEventListeners = function () {
            var e = this;
            bt(this._element).on(Ot.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (t._getConfig = function (t) {
            return (
              (t = l(
                {},
                this.constructor.Default,
                bt(this._element).data(),
                t
              )),
              Fn.typeCheckConfig(St, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getMenuElement = function () {
            if (!this._menu) {
              var t = c._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(qt));
            }
            return this._menu;
          }),
          (t._getPlacement = function () {
            var t = bt(this._element.parentNode),
              e = Bt;
            return (
              t.hasClass(jt)
                ? ((e = Mt), bt(this._menu).hasClass(Rt) && (e = Qt))
                : t.hasClass(Ht)
                ? (e = Yt)
                : t.hasClass(Lt)
                ? (e = zt)
                : bt(this._menu).hasClass(Rt) && (e = Vt),
              e
            );
          }),
          (t._detectNavbar = function () {
            return 0 < bt(this._element).closest(".navbar").length;
          }),
          (t._getPopperConfig = function () {
            var e = this,
              t = {};
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets) || {}
                    )),
                    t
                  );
                })
              : (t.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: t,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            );
          }),
          (c._jQueryInterface = function (e) {
            return this.each(function () {
              var t = bt(this).data(It);
              if (
                (t ||
                  ((t = new c(this, "object" == typeof e ? e : null)),
                  bt(this).data(It, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          (c._clearMenus = function (t) {
            if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
              for (
                var e = [].slice.call(document.querySelectorAll(Wt)),
                  n = 0,
                  i = e.length;
                n < i;
                n++
              ) {
                var r = c._getParentFromElement(e[n]),
                  o = bt(e[n]).data(It),
                  s = { relatedTarget: e[n] };
                if ((t && "click" === t.type && (s.clickEvent = t), o)) {
                  var a = o._menu;
                  if (
                    bt(r).hasClass(Pt) &&
                    !(
                      t &&
                      (("click" === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ("keyup" === t.type && 9 === t.which)) &&
                      bt.contains(r, t.target)
                    )
                  ) {
                    var l = bt.Event(Ot.HIDE, s);
                    bt(r).trigger(l),
                      l.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          bt(document.body)
                            .children()
                            .off("mouseover", null, bt.noop),
                        e[n].setAttribute("aria-expanded", "false"),
                        bt(a).removeClass(Pt),
                        bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)));
                  }
                }
              }
          }),
          (c._getParentFromElement = function (t) {
            var e,
              n = Fn.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
          }),
          (c._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        bt(t.target).closest(qt).length))
                  )
                : Nt.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !bt(this).hasClass(kt))
            ) {
              var e = c._getParentFromElement(this),
                n = bt(e).hasClass(Pt);
              if (
                (n || (27 === t.which && 32 === t.which)) &&
                (!n || (27 !== t.which && 32 !== t.which))
              ) {
                var i = [].slice.call(e.querySelectorAll(Kt));
                if (0 !== i.length) {
                  var r = i.indexOf(t.target);
                  38 === t.which && 0 < r && r--,
                    40 === t.which && r < i.length - 1 && r++,
                    r < 0 && (r = 0),
                    i[r].focus();
                }
              } else {
                if (27 === t.which) {
                  var o = e.querySelector(Wt);
                  bt(o).trigger("focus");
                }
                bt(this).trigger("click");
              }
            }
          }),
          s(c, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Jt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Zt;
              },
            },
          ]),
          c
        );
      })()),
      bt(document)
        .on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler)
        .on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler)
        .on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus)
        .on(Ot.CLICK_DATA_API, Wt, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            Gt._jQueryInterface.call(bt(this), "toggle");
        })
        .on(Ot.CLICK_DATA_API, Ut, function (t) {
          t.stopPropagation();
        }),
      (bt.fn[St] = Gt._jQueryInterface),
      (bt.fn[St].Constructor = Gt),
      (bt.fn[St].noConflict = function () {
        return (bt.fn[St] = wt), Gt._jQueryInterface;
      }),
      Gt),
    Yn =
      ((Xt = "modal"),
      (ee = "." + (te = "bs.modal")),
      (ne = ($t = e).fn[Xt]),
      (ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (re = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      }),
      (oe = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api",
      }),
      (se = "modal-scrollbar-measure"),
      (ae = "modal-backdrop"),
      (le = "modal-open"),
      (ce = "fade"),
      (he = "show"),
      (ue = ".modal-dialog"),
      (fe = '[data-toggle="modal"]'),
      (de = '[data-dismiss="modal"]'),
      (ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
      (_e = ".sticky-top"),
      (me = (function () {
        function r(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector(ue)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var t = r.prototype;
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (t.show = function (t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
              $t(this._element).hasClass(ce) && (this._isTransitioning = !0);
              var n = $t.Event(oe.SHOW, { relatedTarget: t });
              $t(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  $t(document.body).addClass(le),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(this._element).on(oe.CLICK_DISMISS, de, function (t) {
                    return e.hide(t);
                  }),
                  $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function () {
                    $t(e._element).one(oe.MOUSEUP_DISMISS, function (t) {
                      $t(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t);
                  }));
            }
          }),
          (t.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var n = $t.Event(oe.HIDE);
              if (
                ($t(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = $t(this._element).hasClass(ce);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  $t(document).off(oe.FOCUSIN),
                  $t(this._element).removeClass(he),
                  $t(this._element).off(oe.CLICK_DISMISS),
                  $t(this._dialog).off(oe.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = Fn.getTransitionDurationFromElement(this._element);
                  $t(this._element)
                    .one(Fn.TRANSITION_END, function (t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(r);
                } else this._hideModal();
              }
            }
          }),
          (t.dispose = function () {
            $t.removeData(this._element, te),
              $t(window, document, this._element, this._backdrop).off(ee),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (t.handleUpdate = function () {
            this._adjustDialog();
          }),
          (t._getConfig = function (t) {
            return (t = l({}, ie, t)), Fn.typeCheckConfig(Xt, t, re), t;
          }),
          (t._showElement = function (t) {
            var e = this,
              n = $t(this._element).hasClass(ce);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              n && Fn.reflow(this._element),
              $t(this._element).addClass(he),
              this._config.focus && this._enforceFocus();
            var i = $t.Event(oe.SHOWN, { relatedTarget: t }),
              r = function () {
                e._config.focus && e._element.focus(),
                  (e._isTransitioning = !1),
                  $t(e._element).trigger(i);
              };
            if (n) {
              var o = Fn.getTransitionDurationFromElement(this._element);
              $t(this._dialog)
                .one(Fn.TRANSITION_END, r)
                .emulateTransitionEnd(o);
            } else r();
          }),
          (t._enforceFocus = function () {
            var e = this;
            $t(document)
              .off(oe.FOCUSIN)
              .on(oe.FOCUSIN, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === $t(e._element).has(t.target).length &&
                  e._element.focus();
              });
          }),
          (t._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? $t(this._element).on(oe.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && (t.preventDefault(), e.hide());
                })
              : this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS);
          }),
          (t._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? $t(window).on(oe.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : $t(window).off(oe.RESIZE);
          }),
          (t._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                $t(document.body).removeClass(le),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  $t(t._element).trigger(oe.HIDDEN);
              });
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              ($t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (t._showBackdrop = function (t) {
            var e = this,
              n = $t(this._element).hasClass(ce) ? ce : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = ae),
                n && this._backdrop.classList.add(n),
                $t(this._backdrop).appendTo(document.body),
                $t(this._element).on(oe.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._element.focus()
                        : e.hide());
                }),
                n && Fn.reflow(this._backdrop),
                $t(this._backdrop).addClass(he),
                !t)
              )
                return;
              if (!n) return void t();
              var i = Fn.getTransitionDurationFromElement(this._backdrop);
              $t(this._backdrop)
                .one(Fn.TRANSITION_END, t)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              $t(this._backdrop).removeClass(he);
              var r = function () {
                e._removeBackdrop(), t && t();
              };
              if ($t(this._element).hasClass(ce)) {
                var o = Fn.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop)
                  .one(Fn.TRANSITION_END, r)
                  .emulateTransitionEnd(o);
              } else r();
            } else t && t();
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (t._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (t._setScrollbar = function () {
            var r = this;
            if (this._isBodyOverflowing) {
              var t = [].slice.call(document.querySelectorAll(ge)),
                e = [].slice.call(document.querySelectorAll(_e));
              $t(t).each(function (t, e) {
                var n = e.style.paddingRight,
                  i = $t(e).css("padding-right");
                $t(e)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(i) + r._scrollbarWidth + "px"
                  );
              }),
                $t(e).each(function (t, e) {
                  var n = e.style.marginRight,
                    i = $t(e).css("margin-right");
                  $t(e)
                    .data("margin-right", n)
                    .css(
                      "margin-right",
                      parseFloat(i) - r._scrollbarWidth + "px"
                    );
                });
              var n = document.body.style.paddingRight,
                i = $t(document.body).css("padding-right");
              $t(document.body)
                .data("padding-right", n)
                .css(
                  "padding-right",
                  parseFloat(i) + this._scrollbarWidth + "px"
                );
            }
          }),
          (t._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(ge));
            $t(t).each(function (t, e) {
              var n = $t(e).data("padding-right");
              $t(e).removeData("padding-right"),
                (e.style.paddingRight = n || "");
            });
            var e = [].slice.call(document.querySelectorAll("" + _e));
            $t(e).each(function (t, e) {
              var n = $t(e).data("margin-right");
              "undefined" != typeof n &&
                $t(e).css("margin-right", n).removeData("margin-right");
            });
            var n = $t(document.body).data("padding-right");
            $t(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = se), document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = $t(this).data(te),
                e = l(
                  {},
                  ie,
                  $t(this).data(),
                  "object" == typeof n && n ? n : {}
                );
              if (
                (t || ((t = new r(this, e)), $t(this).data(te, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n](i);
              } else e.show && t.show(i);
            });
          }),
          s(r, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return ie;
              },
            },
          ]),
          r
        );
      })()),
      $t(document).on(oe.CLICK_DATA_API, fe, function (t) {
        var e,
          n = this,
          i = Fn.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var r = $t(e).data(te)
          ? "toggle"
          : l({}, $t(e).data(), $t(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var o = $t(e).one(oe.SHOW, function (t) {
          t.isDefaultPrevented() ||
            o.one(oe.HIDDEN, function () {
              $t(n).is(":visible") && n.focus();
            });
        });
        me._jQueryInterface.call($t(e), r, this);
      }),
      ($t.fn[Xt] = me._jQueryInterface),
      ($t.fn[Xt].Constructor = me),
      ($t.fn[Xt].noConflict = function () {
        return ($t.fn[Xt] = ne), me._jQueryInterface;
      }),
      me),
    zn =
      ((ve = "tooltip"),
      (Ee = "." + (ye = "bs.tooltip")),
      (Ce = (pe = e).fn[ve]),
      (Te = "bs-tooltip"),
      (be = new RegExp("(^|\\s)" + Te + "\\S+", "g")),
      (Ae = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(Ie = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        }),
        selector: !(Se = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
      }),
      (we = "out"),
      (Ne = {
        HIDE: "hide" + Ee,
        HIDDEN: "hidden" + Ee,
        SHOW: (De = "show") + Ee,
        SHOWN: "shown" + Ee,
        INSERTED: "inserted" + Ee,
        CLICK: "click" + Ee,
        FOCUSIN: "focusin" + Ee,
        FOCUSOUT: "focusout" + Ee,
        MOUSEENTER: "mouseenter" + Ee,
        MOUSELEAVE: "mouseleave" + Ee,
      }),
      (Oe = "fade"),
      (ke = "show"),
      (Pe = ".tooltip-inner"),
      (je = ".arrow"),
      (He = "hover"),
      (Le = "focus"),
      (Re = "click"),
      (xe = "manual"),
      (We = (function () {
        function i(t, e) {
          if ("undefined" == typeof h)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var t = i.prototype;
        return (
          (t.enable = function () {
            this._isEnabled = !0;
          }),
          (t.disable = function () {
            this._isEnabled = !1;
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (t.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = pe(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  pe(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (pe(this.getTipElement()).hasClass(ke))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              pe.removeData(this.element, this.constructor.DATA_KEY),
              pe(this.element).off(this.constructor.EVENT_KEY),
              pe(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && pe(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (t.show = function () {
            var e = this;
            if ("none" === pe(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var t = pe.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              pe(this.element).trigger(t);
              var n = pe.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (t.isDefaultPrevented() || !n) return;
              var i = this.getTipElement(),
                r = Fn.getUID(this.constructor.NAME);
              i.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && pe(i).addClass(Oe);
              var o =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                s = this._getAttachment(o);
              this.addAttachmentClass(s);
              var a =
                !1 === this.config.container
                  ? document.body
                  : pe(document).find(this.config.container);
              pe(i).data(this.constructor.DATA_KEY, this),
                pe.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || pe(i).appendTo(a),
                pe(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new h(this.element, i, {
                  placement: s,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: je },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  },
                  onUpdate: function (t) {
                    e._handlePopperPlacementChange(t);
                  },
                })),
                pe(i).addClass(ke),
                "ontouchstart" in document.documentElement &&
                  pe(document.body).children().on("mouseover", null, pe.noop);
              var l = function () {
                e.config.animation && e._fixTransition();
                var t = e._hoverState;
                (e._hoverState = null),
                  pe(e.element).trigger(e.constructor.Event.SHOWN),
                  t === we && e._leave(null, e);
              };
              if (pe(this.tip).hasClass(Oe)) {
                var c = Fn.getTransitionDurationFromElement(this.tip);
                pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c);
              } else l();
            }
          }),
          (t.hide = function (t) {
            var e = this,
              n = this.getTipElement(),
              i = pe.Event(this.constructor.Event.HIDE),
              r = function () {
                e._hoverState !== De &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  e._cleanTipClass(),
                  e.element.removeAttribute("aria-describedby"),
                  pe(e.element).trigger(e.constructor.Event.HIDDEN),
                  null !== e._popper && e._popper.destroy(),
                  t && t();
              };
            if ((pe(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (pe(n).removeClass(ke),
                "ontouchstart" in document.documentElement &&
                  pe(document.body).children().off("mouseover", null, pe.noop),
                (this._activeTrigger[Re] = !1),
                (this._activeTrigger[Le] = !1),
                (this._activeTrigger[He] = !1),
                pe(this.tip).hasClass(Oe))
              ) {
                var o = Fn.getTransitionDurationFromElement(n);
                pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o);
              } else r();
              this._hoverState = "";
            }
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (t.addAttachmentClass = function (t) {
            pe(this.getTipElement()).addClass(Te + "-" + t);
          }),
          (t.getTipElement = function () {
            return (
              (this.tip = this.tip || pe(this.config.template)[0]), this.tip
            );
          }),
          (t.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()),
              pe(t).removeClass(Oe + " " + ke);
          }),
          (t.setElementContent = function (t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery)
              ? n
                ? pe(e).parent().is(t) || t.empty().append(e)
                : t.text(pe(e).text())
              : t[n ? "html" : "text"](e);
          }),
          (t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              t
            );
          }),
          (t._getAttachment = function (t) {
            return Ie[t.toUpperCase()];
          }),
          (t._setListeners = function () {
            var i = this;
            this.config.trigger.split(" ").forEach(function (t) {
              if ("click" === t)
                pe(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (t) {
                    return i.toggle(t);
                  }
                );
              else if (t !== xe) {
                var e =
                    t === He
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    t === He
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT;
                pe(i.element)
                  .on(e, i.config.selector, function (t) {
                    return i._enter(t);
                  })
                  .on(n, i.config.selector, function (t) {
                    return i._leave(t);
                  });
              }
              pe(i.element)
                .closest(".modal")
                .on("hide.bs.modal", function () {
                  return i.hide();
                });
            }),
              this.config.selector
                ? (this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || pe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              pe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Le : He] = !0),
              pe(e.getTipElement()).hasClass(ke) || e._hoverState === De
                ? (e._hoverState = De)
                : (clearTimeout(e._timeout),
                  (e._hoverState = De),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === De && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || pe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              pe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Le : He] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = we),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === we && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (t._getConfig = function (t) {
            return (
              "number" ==
                typeof (t = l(
                  {},
                  this.constructor.Default,
                  pe(this.element).data(),
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              Fn.typeCheckConfig(ve, t, this.constructor.DefaultType),
              t
            );
          }),
          (t._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (t._cleanTipClass = function () {
            var t = pe(this.getTipElement()),
              e = t.attr("class").match(be);
            null !== e && e.length && t.removeClass(e.join(""));
          }),
          (t._handlePopperPlacementChange = function (t) {
            var e = t.instance;
            (this.tip = e.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (pe(t).removeClass(Oe),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = pe(this).data(ye),
                e = "object" == typeof n && n;
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), pe(this).data(ye, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ae;
              },
            },
            {
              key: "NAME",
              get: function () {
                return ve;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return ye;
              },
            },
            {
              key: "Event",
              get: function () {
                return Ne;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ee;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Se;
              },
            },
          ]),
          i
        );
      })()),
      (pe.fn[ve] = We._jQueryInterface),
      (pe.fn[ve].Constructor = We),
      (pe.fn[ve].noConflict = function () {
        return (pe.fn[ve] = Ce), We._jQueryInterface;
      }),
      We),
    Jn =
      ((qe = "popover"),
      (Ke = "." + (Fe = "bs.popover")),
      (Me = (Ue = e).fn[qe]),
      (Qe = "bs-popover"),
      (Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g")),
      (Ve = l({}, zn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (Ye = l({}, zn.DefaultType, { content: "(string|element|function)" })),
      (ze = "fade"),
      (Ze = ".popover-header"),
      (Ge = ".popover-body"),
      ($e = {
        HIDE: "hide" + Ke,
        HIDDEN: "hidden" + Ke,
        SHOW: (Je = "show") + Ke,
        SHOWN: "shown" + Ke,
        INSERTED: "inserted" + Ke,
        CLICK: "click" + Ke,
        FOCUSIN: "focusin" + Ke,
        FOCUSOUT: "focusout" + Ke,
        MOUSEENTER: "mouseenter" + Ke,
        MOUSELEAVE: "mouseleave" + Ke,
      }),
      (Xe = (function (t) {
        var e, n;
        function i() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          ((e.prototype.constructor = e).__proto__ = n);
        var r = i.prototype;
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (r.addAttachmentClass = function (t) {
            Ue(this.getTipElement()).addClass(Qe + "-" + t);
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || Ue(this.config.template)[0]), this.tip
            );
          }),
          (r.setContent = function () {
            var t = Ue(this.getTipElement());
            this.setElementContent(t.find(Ze), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(Ge), e),
              t.removeClass(ze + " " + Je);
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (r._cleanTipClass = function () {
            var t = Ue(this.getTipElement()),
              e = t.attr("class").match(Be);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = Ue(this).data(Fe),
                e = "object" == typeof n ? n : null;
              if (
                (t || !/destroy|hide/.test(n)) &&
                (t || ((t = new i(this, e)), Ue(this).data(Fe, t)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof t[n])
                  throw new TypeError('No method named "' + n + '"');
                t[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ve;
              },
            },
            {
              key: "NAME",
              get: function () {
                return qe;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Fe;
              },
            },
            {
              key: "Event",
              get: function () {
                return $e;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ke;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Ye;
              },
            },
          ]),
          i
        );
      })(zn)),
      (Ue.fn[qe] = Xe._jQueryInterface),
      (Ue.fn[qe].Constructor = Xe),
      (Ue.fn[qe].noConflict = function () {
        return (Ue.fn[qe] = Me), Xe._jQueryInterface;
      }),
      Xe),
    Zn =
      ((en = "scrollspy"),
      (rn = "." + (nn = "bs.scrollspy")),
      (on = (tn = e).fn[en]),
      (sn = { offset: 10, method: "auto", target: "" }),
      (an = { offset: "number", method: "string", target: "(string|element)" }),
      (ln = {
        ACTIVATE: "activate" + rn,
        SCROLL: "scroll" + rn,
        LOAD_DATA_API: "load" + rn + ".data-api",
      }),
      (cn = "dropdown-item"),
      (hn = "active"),
      (un = '[data-spy="scroll"]'),
      (fn = ".active"),
      (dn = ".nav, .list-group"),
      (gn = ".nav-link"),
      (_n = ".nav-item"),
      (mn = ".list-group-item"),
      (pn = ".dropdown"),
      (vn = ".dropdown-item"),
      (yn = ".dropdown-toggle"),
      (En = "offset"),
      (Cn = "position"),
      (Tn = (function () {
        function n(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              gn +
              "," +
              this._config.target +
              " " +
              mn +
              "," +
              this._config.target +
              " " +
              vn),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            tn(this._scrollElement).on(ln.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var t = n.prototype;
        return (
          (t.refresh = function () {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? En : Cn,
              r = "auto" === this._config.method ? t : this._config.method,
              o = r === Cn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var e,
                    n = Fn.getSelectorFromElement(t);
                  if ((n && (e = document.querySelector(n)), e)) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return [tn(e)[r]().top + o, n];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (t.dispose = function () {
            tn.removeData(this._element, nn),
              tn(this._scrollElement).off(rn),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (t._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = l({}, sn, "object" == typeof t && t ? t : {})).target
            ) {
              var e = tn(t.target).attr("id");
              e || ((e = Fn.getUID(en)), tn(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return Fn.typeCheckConfig(en, t, an), t;
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length; r--; ) {
                this._activeTarget !== this._targets[r] &&
                  t >= this._offsets[r] &&
                  ("undefined" == typeof this._offsets[r + 1] ||
                    t < this._offsets[r + 1]) &&
                  this._activate(this._targets[r]);
              }
            }
          }),
          (t._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var t = this._selector.split(",");
            t = t.map(function (t) {
              return (
                t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              );
            });
            var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(cn)
              ? (n.closest(pn).find(yn).addClass(hn), n.addClass(hn))
              : (n.addClass(hn),
                n
                  .parents(dn)
                  .prev(gn + ", " + mn)
                  .addClass(hn),
                n.parents(dn).prev(_n).children(gn).addClass(hn)),
              tn(this._scrollElement).trigger(ln.ACTIVATE, {
                relatedTarget: e,
              });
          }),
          (t._clear = function () {
            var t = [].slice.call(document.querySelectorAll(this._selector));
            tn(t).filter(fn).removeClass(hn);
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = tn(this).data(nn);
              if (
                (t ||
                  ((t = new n(this, "object" == typeof e && e)),
                  tn(this).data(nn, t)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof t[e])
                  throw new TypeError('No method named "' + e + '"');
                t[e]();
              }
            });
          }),
          s(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
            {
              key: "Default",
              get: function () {
                return sn;
              },
            },
          ]),
          n
        );
      })()),
      tn(window).on(ln.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(un)), e = t.length;
          e--;

        ) {
          var n = tn(t[e]);
          Tn._jQueryInterface.call(n, n.data());
        }
      }),
      (tn.fn[en] = Tn._jQueryInterface),
      (tn.fn[en].Constructor = Tn),
      (tn.fn[en].noConflict = function () {
        return (tn.fn[en] = on), Tn._jQueryInterface;
      }),
      Tn),
    Gn =
      ((In = "." + (Sn = "bs.tab")),
      (An = (bn = e).fn.tab),
      (Dn = {
        HIDE: "hide" + In,
        HIDDEN: "hidden" + In,
        SHOW: "show" + In,
        SHOWN: "shown" + In,
        CLICK_DATA_API: "click" + In + ".data-api",
      }),
      (wn = "dropdown-menu"),
      (Nn = "active"),
      (On = "disabled"),
      (kn = "fade"),
      (Pn = "show"),
      (jn = ".dropdown"),
      (Hn = ".nav, .list-group"),
      (Ln = ".active"),
      (Rn = "> li > .active"),
      (xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (Wn = ".dropdown-toggle"),
      (Un = "> .dropdown-menu .active"),
      (qn = (function () {
        function i(t) {
          this._element = t;
        }
        var t = i.prototype;
        return (
          (t.show = function () {
            var n = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  bn(this._element).hasClass(Nn)) ||
                bn(this._element).hasClass(On)
              )
            ) {
              var t,
                i,
                e = bn(this._element).closest(Hn)[0],
                r = Fn.getSelectorFromElement(this._element);
              if (e) {
                var o = "UL" === e.nodeName ? Rn : Ln;
                i = (i = bn.makeArray(bn(e).find(o)))[i.length - 1];
              }
              var s = bn.Event(Dn.HIDE, { relatedTarget: this._element }),
                a = bn.Event(Dn.SHOW, { relatedTarget: i });
              if (
                (i && bn(i).trigger(s),
                bn(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                r && (t = document.querySelector(r)),
                  this._activate(this._element, e);
                var l = function () {
                  var t = bn.Event(Dn.HIDDEN, { relatedTarget: n._element }),
                    e = bn.Event(Dn.SHOWN, { relatedTarget: i });
                  bn(i).trigger(t), bn(n._element).trigger(e);
                };
                t ? this._activate(t, t.parentNode, l) : l();
              }
            }
          }),
          (t.dispose = function () {
            bn.removeData(this._element, Sn), (this._element = null);
          }),
          (t._activate = function (t, e, n) {
            var i = this,
              r = (
                "UL" === e.nodeName ? bn(e).find(Rn) : bn(e).children(Ln)
              )[0],
              o = n && r && bn(r).hasClass(kn),
              s = function () {
                return i._transitionComplete(t, r, n);
              };
            if (r && o) {
              var a = Fn.getTransitionDurationFromElement(r);
              bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a);
            } else s();
          }),
          (t._transitionComplete = function (t, e, n) {
            if (e) {
              bn(e).removeClass(Pn + " " + Nn);
              var i = bn(e.parentNode).find(Un)[0];
              i && bn(i).removeClass(Nn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (bn(t).addClass(Nn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              Fn.reflow(t),
              bn(t).addClass(Pn),
              t.parentNode && bn(t.parentNode).hasClass(wn))
            ) {
              var r = bn(t).closest(jn)[0];
              if (r) {
                var o = [].slice.call(r.querySelectorAll(Wn));
                bn(o).addClass(Nn);
              }
              t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = bn(this),
                e = t.data(Sn);
              if (
                (e || ((e = new i(this)), t.data(Sn, e)), "string" == typeof n)
              ) {
                if ("undefined" == typeof e[n])
                  throw new TypeError('No method named "' + n + '"');
                e[n]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.3";
              },
            },
          ]),
          i
        );
      })()),
      bn(document).on(Dn.CLICK_DATA_API, xn, function (t) {
        t.preventDefault(), qn._jQueryInterface.call(bn(this), "show");
      }),
      (bn.fn.tab = qn._jQueryInterface),
      (bn.fn.tab.Constructor = qn),
      (bn.fn.tab.noConflict = function () {
        return (bn.fn.tab = An), qn._jQueryInterface;
      }),
      qn);
  !(function (t) {
    if ("undefined" == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = Fn),
    (t.Alert = Kn),
    (t.Button = Mn),
    (t.Carousel = Qn),
    (t.Collapse = Bn),
    (t.Dropdown = Vn),
    (t.Modal = Yn),
    (t.Popover = Jn),
    (t.Scrollspy = Zn),
    (t.Tab = Gn),
    (t.Tooltip = zn),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */ !(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */ !(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});
// !(function (i) {
//   "use strict";
//   "function" == typeof define && define.amd
//     ? define(["jquery"], i)
//     : "undefined" != typeof exports
//     ? (module.exports = i(require("jquery")))
//     : i(jQuery);
// })(function (i) {
//   "use strict";
//   var e = window.Slick || {};
//   ((e = (function () {
//     var e = 0;
//     return function (t, o) {
//       var s,
//         n = this;
//       (n.defaults = {
//         accessibility: !0,
//         adaptiveHeight: !1,
//         appendArrows: i(t),
//         appendDots: i(t),
//         arrows: !0,
//         asNavFor: null,
//         prevArrow:
//           '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
//         nextArrow:
//           '<button class="slick-next" aria  -label="Next" type="button">Next</button>',
//         autoplay: !1,
//         autoplaySpeed: 3e3,
//         centerMode: !1,
//         centerPadding: "50px",
//         cssEase: "ease",
//         customPaging: function (e, t) {
//           return i('<button type="button" />').text(t + 1);
//         },
//         dots: !1,
//         dotsClass: "slick-dots",
//         draggable: !0,
//         easing: "linear",
//         edgeFriction: 0.35,
//         fade: !1,
//         focusOnSelect: !1,
//         focusOnChange: !1,
//         infinite: !0,
//         initialSlide: 0,
//         lazyLoad: "ondemand",
//         mobileFirst: !1,
//         pauseOnHover: !0,
//         pauseOnFocus: !0,
//         pauseOnDotsHover: !1,
//         respondTo: "window",
//         responsive: null,
//         rows: 1,
//         rtl: !1,
//         slide: "",
//         slidesPerRow: 1,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         speed: 500,
//         swipe: !0,
//         swipeToSlide: !1,
//         touchMove: !0,
//         touchThreshold: 5,
//         useCSS: !0,
//         useTransform: !0,
//         variableWidth: !1,
//         vertical: !1,
//         verticalSwiping: !1,
//         waitForAnimate: !0,
//         zIndex: 1e3,
//       }),
//         (n.initials = {
//           animating: !1,
//           dragging: !1,
//           autoPlayTimer: null,
//           currentDirection: 0,
//           currentLeft: null,
//           currentSlide: 0,
//           direction: 1,
//           $dots: null,
//           listWidth: null,
//           listHeight: null,
//           loadIndex: 0,
//           $nextArrow: null,
//           $prevArrow: null,
//           scrolling: !1,
//           slideCount: null,
//           slideWidth: null,
//           $slideTrack: null,
//           $slides: null,
//           sliding: !1,
//           slideOffset: 0,
//           swipeLeft: null,
//           swiping: !1,
//           $list: null,
//           touchObject: {},
//           transformsEnabled: !1,
//           unslicked: !1,
//         }),
//         i.extend(n, n.initials),
//         (n.activeBreakpoint = null),
//         (n.animType = null),
//         (n.animProp = null),
//         (n.breakpoints = []),
//         (n.breakpointSettings = []),
//         (n.cssTransitions = !1),
//         (n.focussed = !1),
//         (n.interrupted = !1),
//         (n.hidden = "hidden"),
//         (n.paused = !0),
//         (n.positionProp = null),
//         (n.respondTo = null),
//         (n.rowCount = 1),
//         (n.shouldClick = !0),
//         (n.$slider = i(t)),
//         (n.$slidesCache = null),
//         (n.transformType = null),
//         (n.transitionType = null),
//         (n.visibilityChange = "visibilitychange"),
//         (n.windowWidth = 0),
//         (n.windowTimer = null),
//         (s = i(t).data("slick") || {}),
//         (n.options = i.extend({}, n.defaults, o, s)),
//         (n.currentSlide = n.options.initialSlide),
//         (n.originalSettings = n.options),
//         void 0 !== document.mozHidden
//           ? ((n.hidden = "mozHidden"),
//             (n.visibilityChange = "mozvisibilitychange"))
//           : void 0 !== document.webkitHidden &&
//             ((n.hidden = "webkitHidden"),
//             (n.visibilityChange = "webkitvisibilitychange")),
//         (n.autoPlay = i.proxy(n.autoPlay, n)),
//         (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
//         (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
//         (n.changeSlide = i.proxy(n.changeSlide, n)),
//         (n.clickHandler = i.proxy(n.clickHandler, n)),
//         (n.selectHandler = i.proxy(n.selectHandler, n)),
//         (n.setPosition = i.proxy(n.setPosition, n)),
//         (n.swipeHandler = i.proxy(n.swipeHandler, n)),
//         (n.dragHandler = i.proxy(n.dragHandler, n)),
//         (n.keyHandler = i.proxy(n.keyHandler, n)),
//         (n.instanceUid = e++),
//         (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
//         n.registerBreakpoints(),
//         n.init(!0);
//     };
//   })()).prototype.activateADA = function () {
//     this.$slideTrack
//       .find(".slick-active")
//       .attr({ "aria-hidden": "false" })
//       .find("a, input, button, select")
//       .attr({ tabindex: "0" });
//   }),
//     (e.prototype.addSlide = e.prototype.slickAdd =
//       function (e, t, o) {
//         var s = this;
//         if ("boolean" == typeof t) (o = t), (t = null);
//         else if (t < 0 || t >= s.slideCount) return !1;
//         s.unload(),
//           "number" == typeof t
//             ? 0 === t && 0 === s.$slides.length
//               ? i(e).appendTo(s.$slideTrack)
//               : o
//               ? i(e).insertBefore(s.$slides.eq(t))
//               : i(e).insertAfter(s.$slides.eq(t))
//             : !0 === o
//             ? i(e).prependTo(s.$slideTrack)
//             : i(e).appendTo(s.$slideTrack),
//           (s.$slides = s.$slideTrack.children(this.options.slide)),
//           s.$slideTrack.children(this.options.slide).detach(),
//           s.$slideTrack.append(s.$slides),
//           s.$slides.each(function (e, t) {
//             i(t).attr("data-slick-index", e);
//           }),
//           (s.$slidesCache = s.$slides),
//           s.reinit();
//       }),
//     (e.prototype.animateHeight = function () {
//       var i = this;
//       if (
//         1 === i.options.slidesToShow &&
//         !0 === i.options.adaptiveHeight &&
//         !1 === i.options.vertical
//       ) {
//         var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
//         i.$list.animate({ height: e }, i.options.speed);
//       }
//     }),
//     (e.prototype.animateSlide = function (e, t) {
//       var o = {},
//         s = this;
//       s.animateHeight(),
//         !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
//         !1 === s.transformsEnabled
//           ? !1 === s.options.vertical
//             ? s.$slideTrack.animate(
//                 { left: e },
//                 s.options.speed,
//                 s.options.easing,
//                 t
//               )
//             : s.$slideTrack.animate(
//                 { top: e },
//                 s.options.speed,
//                 s.options.easing,
//                 t
//               )
//           : !1 === s.cssTransitions
//           ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
//             i({ animStart: s.currentLeft }).animate(
//               { animStart: e },
//               {
//                 duration: s.options.speed,
//                 easing: s.options.easing,
//                 step: function (i) {
//                   (i = Math.ceil(i)),
//                     !1 === s.options.vertical
//                       ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
//                         s.$slideTrack.css(o))
//                       : ((o[s.animType] = "translate(0px," + i + "px)"),
//                         s.$slideTrack.css(o));
//                 },
//                 complete: function () {
//                   t && t.call();
//                 },
//               }
//             ))
//           : (s.applyTransition(),
//             (e = Math.ceil(e)),
//             !1 === s.options.vertical
//               ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
//               : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
//             s.$slideTrack.css(o),
//             t &&
//               setTimeout(function () {
//                 s.disableTransition(), t.call();
//               }, s.options.speed));
//     }),
//     (e.prototype.getNavTarget = function () {
//       var e = this,
//         t = e.options.asNavFor;
//       return t && null !== t && (t = i(t).not(e.$slider)), t;
//     }),
//     (e.prototype.asNavFor = function (e) {
//       var t = this.getNavTarget();
//       null !== t &&
//         "object" == typeof t &&
//         t.each(function () {
//           var t = i(this).slick("getSlick");
//           t.unslicked || t.slideHandler(e, !0);
//         });
//     }),
//     (e.prototype.applyTransition = function (i) {
//       var e = this,
//         t = {};
//       !1 === e.options.fade
//         ? (t[e.transitionType] =
//             e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
//         : (t[e.transitionType] =
//             "opacity " + e.options.speed + "ms " + e.options.cssEase),
//         !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
//     }),
//     (e.prototype.autoPlay = function () {
//       var i = this;
//       i.autoPlayClear(),
//         i.slideCount > i.options.slidesToShow &&
//           (i.autoPlayTimer = setInterval(
//             i.autoPlayIterator,
//             i.options.autoplaySpeed
//           ));
//     }),
//     (e.prototype.autoPlayClear = function () {
//       var i = this;
//       i.autoPlayTimer && clearInterval(i.autoPlayTimer);
//     }),
//     (e.prototype.autoPlayIterator = function () {
//       var i = this,
//         e = i.currentSlide + i.options.slidesToScroll;
//       i.paused ||
//         i.interrupted ||
//         i.focussed ||
//         (!1 === i.options.infinite &&
//           (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
//             ? (i.direction = 0)
//             : 0 === i.direction &&
//               ((e = i.currentSlide - i.options.slidesToScroll),
//               i.currentSlide - 1 == 0 && (i.direction = 1))),
//         i.slideHandler(e));
//     }),
//     (e.prototype.buildArrows = function () {
//       var e = this;
//       !0 === e.options.arrows &&
//         ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
//         (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
//         e.slideCount > e.options.slidesToShow
//           ? (e.$prevArrow
//               .removeClass("slick-hidden")
//               .removeAttr("aria-hidden tabindex"),
//             e.$nextArrow
//               .removeClass("slick-hidden")
//               .removeAttr("aria-hidden tabindex"),
//             e.htmlExpr.test(e.options.prevArrow) &&
//               e.$prevArrow.prependTo(e.options.appendArrows),
//             e.htmlExpr.test(e.options.nextArrow) &&
//               e.$nextArrow.appendTo(e.options.appendArrows),
//             !0 !== e.options.infinite &&
//               e.$prevArrow
//                 .addClass("slick-disabled")
//                 .attr("aria-disabled", "true"))
//           : e.$prevArrow
//               .add(e.$nextArrow)
//               .addClass("slick-hidden")
//               .attr({ "aria-disabled": "true", tabindex: "-1" }));
//     }),
//     (e.prototype.buildDots = function () {
//       var e,
//         t,
//         o = this;
//       if (!0 === o.options.dots) {
//         for (
//           o.$slider.addClass("slick-dotted"),
//             t = i("<ul />").addClass(o.options.dotsClass),
//             e = 0;
//           e <= o.getDotCount();
//           e += 1
//         )
//           t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
//         (o.$dots = t.appendTo(o.options.appendDots)),
//           o.$dots.find("li").first().addClass("slick-active");
//       }
//     }),
//     (e.prototype.buildOut = function () {
//       var e = this;
//       (e.$slides = e.$slider
//         .children(e.options.slide + ":not(.slick-cloned)")
//         .addClass("slick-slide")),
//         (e.slideCount = e.$slides.length),
//         e.$slides.each(function (e, t) {
//           i(t)
//             .attr("data-slick-index", e)
//             .data("originalStyling", i(t).attr("style") || "");
//         }),
//         e.$slider.addClass("slick-slider"),
//         (e.$slideTrack =
//           0 === e.slideCount
//             ? i('<div class="slick-track"/>').appendTo(e.$slider)
//             : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
//         (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
//         e.$slideTrack.css("opacity", 0),
//         (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
//           (e.options.slidesToScroll = 1),
//         i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
//         e.setupInfinite(),
//         e.buildArrows(),
//         e.buildDots(),
//         e.updateDots(),
//         e.setSlideClasses(
//           "number" == typeof e.currentSlide ? e.currentSlide : 0
//         ),
//         !0 === e.options.draggable && e.$list.addClass("draggable");
//     }),
//     (e.prototype.buildRows = function () {
//       var i,
//         e,
//         t,
//         o,
//         s,
//         n,
//         r,
//         l = this;
//       if (
//         ((o = document.createDocumentFragment()),
//         (n = l.$slider.children()),
//         l.options.rows > 1)
//       ) {
//         for (
//           r = l.options.slidesPerRow * l.options.rows,
//             s = Math.ceil(n.length / r),
//             i = 0;
//           i < s;
//           i++
//         ) {
//           var d = document.createElement("div");
//           for (e = 0; e < l.options.rows; e++) {
//             var a = document.createElement("div");
//             for (t = 0; t < l.options.slidesPerRow; t++) {
//               var c = i * r + (e * l.options.slidesPerRow + t);
//               n.get(c) && a.appendChild(n.get(c));
//             }
//             d.appendChild(a);
//           }
//           o.appendChild(d);
//         }
//         l.$slider.empty().append(o),
//           l.$slider
//             .children()
//             .children()
//             .children()
//             .css({
//               width: 100 / l.options.slidesPerRow + "%",
//               display: "inline-block",
//             });
//       }
//     }),
//     (e.prototype.checkResponsive = function (e, t) {
//       var o,
//         s,
//         n,
//         r = this,
//         l = !1,
//         d = r.$slider.width(),
//         a = window.innerWidth || i(window).width();
//       if (
//         ("window" === r.respondTo
//           ? (n = a)
//           : "slider" === r.respondTo
//           ? (n = d)
//           : "min" === r.respondTo && (n = Math.min(a, d)),
//         r.options.responsive &&
//           r.options.responsive.length &&
//           null !== r.options.responsive)
//       ) {
//         s = null;
//         for (o in r.breakpoints)
//           r.breakpoints.hasOwnProperty(o) &&
//             (!1 === r.originalSettings.mobileFirst
//               ? n < r.breakpoints[o] && (s = r.breakpoints[o])
//               : n > r.breakpoints[o] && (s = r.breakpoints[o]));
//         null !== s
//           ? null !== r.activeBreakpoint
//             ? (s !== r.activeBreakpoint || t) &&
//               ((r.activeBreakpoint = s),
//               "unslick" === r.breakpointSettings[s]
//                 ? r.unslick(s)
//                 : ((r.options = i.extend(
//                     {},
//                     r.originalSettings,
//                     r.breakpointSettings[s]
//                   )),
//                   !0 === e && (r.currentSlide = r.options.initialSlide),
//                   r.refresh(e)),
//               (l = s))
//             : ((r.activeBreakpoint = s),
//               "unslick" === r.breakpointSettings[s]
//                 ? r.unslick(s)
//                 : ((r.options = i.extend(
//                     {},
//                     r.originalSettings,
//                     r.breakpointSettings[s]
//                   )),
//                   !0 === e && (r.currentSlide = r.options.initialSlide),
//                   r.refresh(e)),
//               (l = s))
//           : null !== r.activeBreakpoint &&
//             ((r.activeBreakpoint = null),
//             (r.options = r.originalSettings),
//             !0 === e && (r.currentSlide = r.options.initialSlide),
//             r.refresh(e),
//             (l = s)),
//           e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
//       }
//     }),
//     (e.prototype.changeSlide = function (e, t) {
//       var o,
//         s,
//         n,
//         r = this,
//         l = i(e.currentTarget);
//       switch (
//         (l.is("a") && e.preventDefault(),
//         l.is("li") || (l = l.closest("li")),
//         (n = r.slideCount % r.options.slidesToScroll != 0),
//         (o = n
//           ? 0
//           : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
//         e.data.message)
//       ) {
//         case "previous":
//           (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
//             r.slideCount > r.options.slidesToShow &&
//               r.slideHandler(r.currentSlide - s, !1, t);
//           break;
//         case "next":
//           (s = 0 === o ? r.options.slidesToScroll : o),
//             r.slideCount > r.options.slidesToShow &&
//               r.slideHandler(r.currentSlide + s, !1, t);
//           break;
//         case "index":
//           var d =
//             0 === e.data.index
//               ? 0
//               : e.data.index || l.index() * r.options.slidesToScroll;
//           r.slideHandler(r.checkNavigable(d), !1, t),
//             l.children().trigger("focus");
//           break;
//         default:
//           return;
//       }
//     }),
//     (e.prototype.checkNavigable = function (i) {
//       var e, t;
//       if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
//         i = e[e.length - 1];
//       else
//         for (var o in e) {
//           if (i < e[o]) {
//             i = t;
//             break;
//           }
//           t = e[o];
//         }
//       return i;
//     }),
//     (e.prototype.cleanUpEvents = function () {
//       var e = this;
//       e.options.dots &&
//         null !== e.$dots &&
//         (i("li", e.$dots)
//           .off("click.slick", e.changeSlide)
//           .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
//           .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
//         !0 === e.options.accessibility &&
//           e.$dots.off("keydown.slick", e.keyHandler)),
//         e.$slider.off("focus.slick blur.slick"),
//         !0 === e.options.arrows &&
//           e.slideCount > e.options.slidesToShow &&
//           (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
//           e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
//           !0 === e.options.accessibility &&
//             (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
//             e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
//         e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
//         e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
//         e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
//         e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
//         e.$list.off("click.slick", e.clickHandler),
//         i(document).off(e.visibilityChange, e.visibility),
//         e.cleanUpSlideEvents(),
//         !0 === e.options.accessibility &&
//           e.$list.off("keydown.slick", e.keyHandler),
//         !0 === e.options.focusOnSelect &&
//           i(e.$slideTrack).children().off("click.slick", e.selectHandler),
//         i(window).off(
//           "orientationchange.slick.slick-" + e.instanceUid,
//           e.orientationChange
//         ),
//         i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
//         i("[draggable!=true]", e.$slideTrack).off(
//           "dragstart",
//           e.preventDefault
//         ),
//         i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
//     }),
//     (e.prototype.cleanUpSlideEvents = function () {
//       var e = this;
//       e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
//         e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
//     }),
//     (e.prototype.cleanUpRows = function () {
//       var i,
//         e = this;
//       e.options.rows > 1 &&
//         ((i = e.$slides.children().children()).removeAttr("style"),
//         e.$slider.empty().append(i));
//     }),
//     (e.prototype.clickHandler = function (i) {
//       !1 === this.shouldClick &&
//         (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
//     }),
//     (e.prototype.destroy = function (e) {
//       var t = this;
//       t.autoPlayClear(),
//         (t.touchObject = {}),
//         t.cleanUpEvents(),
//         i(".slick-cloned", t.$slider).detach(),
//         t.$dots && t.$dots.remove(),
//         t.$prevArrow &&
//           t.$prevArrow.length &&
//           (t.$prevArrow
//             .removeClass("slick-disabled slick-arrow slick-hidden")
//             .removeAttr("aria-hidden aria-disabled tabindex")
//             .css("display", ""),
//           t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
//         t.$nextArrow &&
//           t.$nextArrow.length &&
//           (t.$nextArrow
//             .removeClass("slick-disabled slick-arrow slick-hidden")
//             .removeAttr("aria-hidden aria-disabled tabindex")
//             .css("display", ""),
//           t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
//         t.$slides &&
//           (t.$slides
//             .removeClass(
//               "slick-slide slick-active slick-center slick-visible slick-current"
//             )
//             .removeAttr("aria-hidden")
//             .removeAttr("data-slick-index")
//             .each(function () {
//               i(this).attr("style", i(this).data("originalStyling"));
//             }),
//           t.$slideTrack.children(this.options.slide).detach(),
//           t.$slideTrack.detach(),
//           t.$list.detach(),
//           t.$slider.append(t.$slides)),
//         t.cleanUpRows(),
//         t.$slider.removeClass("slick-slider"),
//         t.$slider.removeClass("slick-initialized"),
//         t.$slider.removeClass("slick-dotted"),
//         (t.unslicked = !0),
//         e || t.$slider.trigger("destroy", [t]);
//     }),
//     (e.prototype.disableTransition = function (i) {
//       var e = this,
//         t = {};
//       (t[e.transitionType] = ""),
//         !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
//     }),
//     (e.prototype.fadeSlide = function (i, e) {
//       var t = this;
//       !1 === t.cssTransitions
//         ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
//           t.$slides
//             .eq(i)
//             .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
//         : (t.applyTransition(i),
//           t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
//           e &&
//             setTimeout(function () {
//               t.disableTransition(i), e.call();
//             }, t.options.speed));
//     }),
//     (e.prototype.fadeSlideOut = function (i) {
//       var e = this;
//       !1 === e.cssTransitions
//         ? e.$slides
//             .eq(i)
//             .animate(
//               { opacity: 0, zIndex: e.options.zIndex - 2 },
//               e.options.speed,
//               e.options.easing
//             )
//         : (e.applyTransition(i),
//           e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
//     }),
//     (e.prototype.filterSlides = e.prototype.slickFilter =
//       function (i) {
//         var e = this;
//         null !== i &&
//           ((e.$slidesCache = e.$slides),
//           e.unload(),
//           e.$slideTrack.children(this.options.slide).detach(),
//           e.$slidesCache.filter(i).appendTo(e.$slideTrack),
//           e.reinit());
//       }),
//     (e.prototype.focusHandler = function () {
//       var e = this;
//       e.$slider
//         .off("focus.slick blur.slick")
//         .on("focus.slick blur.slick", "*", function (t) {
//           t.stopImmediatePropagation();
//           var o = i(this);
//           setTimeout(function () {
//             e.options.pauseOnFocus &&
//               ((e.focussed = o.is(":focus")), e.autoPlay());
//           }, 0);
//         });
//     }),
//     (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
//       function () {
//         return this.currentSlide;
//       }),
//     (e.prototype.getDotCount = function () {
//       var i = this,
//         e = 0,
//         t = 0,
//         o = 0;
//       if (!0 === i.options.infinite)
//         if (i.slideCount <= i.options.slidesToShow) ++o;
//         else
//           for (; e < i.slideCount; )
//             ++o,
//               (e = t + i.options.slidesToScroll),
//               (t +=
//                 i.options.slidesToScroll <= i.options.slidesToShow
//                   ? i.options.slidesToScroll
//                   : i.options.slidesToShow);
//       else if (!0 === i.options.centerMode) o = i.slideCount;
//       else if (i.options.asNavFor)
//         for (; e < i.slideCount; )
//           ++o,
//             (e = t + i.options.slidesToScroll),
//             (t +=
//               i.options.slidesToScroll <= i.options.slidesToShow
//                 ? i.options.slidesToScroll
//                 : i.options.slidesToShow);
//       else
//         o =
//           1 +
//           Math.ceil(
//             (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
//           );
//       return o - 1;
//     }),
//     (e.prototype.getLeft = function (i) {
//       var e,
//         t,
//         o,
//         s,
//         n = this,
//         r = 0;
//       return (
//         (n.slideOffset = 0),
//         (t = n.$slides.first().outerHeight(!0)),
//         !0 === n.options.infinite
//           ? (n.slideCount > n.options.slidesToShow &&
//               ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
//               (s = -1),
//               !0 === n.options.vertical &&
//                 !0 === n.options.centerMode &&
//                 (2 === n.options.slidesToShow
//                   ? (s = -1.5)
//                   : 1 === n.options.slidesToShow && (s = -2)),
//               (r = t * n.options.slidesToShow * s)),
//             n.slideCount % n.options.slidesToScroll != 0 &&
//               i + n.options.slidesToScroll > n.slideCount &&
//               n.slideCount > n.options.slidesToShow &&
//               (i > n.slideCount
//                 ? ((n.slideOffset =
//                     (n.options.slidesToShow - (i - n.slideCount)) *
//                     n.slideWidth *
//                     -1),
//                   (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
//                 : ((n.slideOffset =
//                     (n.slideCount % n.options.slidesToScroll) *
//                     n.slideWidth *
//                     -1),
//                   (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
//           : i + n.options.slidesToShow > n.slideCount &&
//             ((n.slideOffset =
//               (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
//             (r = (i + n.options.slidesToShow - n.slideCount) * t)),
//         n.slideCount <= n.options.slidesToShow &&
//           ((n.slideOffset = 0), (r = 0)),
//         !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
//           ? (n.slideOffset =
//               (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
//               (n.slideWidth * n.slideCount) / 2)
//           : !0 === n.options.centerMode && !0 === n.options.infinite
//           ? (n.slideOffset +=
//               n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
//               n.slideWidth)
//           : !0 === n.options.centerMode &&
//             ((n.slideOffset = 0),
//             (n.slideOffset +=
//               n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
//         (e =
//           !1 === n.options.vertical
//             ? i * n.slideWidth * -1 + n.slideOffset
//             : i * t * -1 + r),
//         !0 === n.options.variableWidth &&
//           ((o =
//             n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
//               ? n.$slideTrack.children(".slick-slide").eq(i)
//               : n.$slideTrack
//                   .children(".slick-slide")
//                   .eq(i + n.options.slidesToShow)),
//           (e =
//             !0 === n.options.rtl
//               ? o[0]
//                 ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
//                 : 0
//               : o[0]
//               ? -1 * o[0].offsetLeft
//               : 0),
//           !0 === n.options.centerMode &&
//             ((o =
//               n.slideCount <= n.options.slidesToShow ||
//               !1 === n.options.infinite
//                 ? n.$slideTrack.children(".slick-slide").eq(i)
//                 : n.$slideTrack
//                     .children(".slick-slide")
//                     .eq(i + n.options.slidesToShow + 1)),
//             (e =
//               !0 === n.options.rtl
//                 ? o[0]
//                   ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
//                   : 0
//                 : o[0]
//                 ? -1 * o[0].offsetLeft
//                 : 0),
//             (e += (n.$list.width() - o.outerWidth()) / 2))),
//         e
//       );
//     }),
//     (e.prototype.getOption = e.prototype.slickGetOption =
//       function (i) {
//         return this.options[i];
//       }),
//     (e.prototype.getNavigableIndexes = function () {
//       var i,
//         e = this,
//         t = 0,
//         o = 0,
//         s = [];
//       for (
//         !1 === e.options.infinite
//           ? (i = e.slideCount)
//           : ((t = -1 * e.options.slidesToScroll),
//             (o = -1 * e.options.slidesToScroll),
//             (i = 2 * e.slideCount));
//         t < i;

//       )
//         s.push(t),
//           (t = o + e.options.slidesToScroll),
//           (o +=
//             e.options.slidesToScroll <= e.options.slidesToShow
//               ? e.options.slidesToScroll
//               : e.options.slidesToShow);
//       return s;
//     }),
//     (e.prototype.getSlick = function () {
//       return this;
//     }),
//     (e.prototype.getSlideCount = function () {
//       var e,
//         t,
//         o = this;
//       return (
//         (t =
//           !0 === o.options.centerMode
//             ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
//             : 0),
//         !0 === o.options.swipeToSlide
//           ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
//               if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
//                 return (e = n), !1;
//             }),
//             Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
//           : o.options.slidesToScroll
//       );
//     }),
//     (e.prototype.goTo = e.prototype.slickGoTo =
//       function (i, e) {
//         this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
//       }),
//     (e.prototype.init = function (e) {
//       var t = this;
//       i(t.$slider).hasClass("slick-initialized") ||
//         (i(t.$slider).addClass("slick-initialized"),
//         t.buildRows(),
//         t.buildOut(),
//         t.setProps(),
//         t.startLoad(),
//         t.loadSlider(),
//         t.initializeEvents(),
//         t.updateArrows(),
//         t.updateDots(),
//         t.checkResponsive(!0),
//         t.focusHandler()),
//         e && t.$slider.trigger("init", [t]),
//         !0 === t.options.accessibility && t.initADA(),
//         t.options.autoplay && ((t.paused = !1), t.autoPlay());
//     }),
//     (e.prototype.initADA = function () {
//       var e = this,
//         t = Math.ceil(e.slideCount / e.options.slidesToShow),
//         o = e.getNavigableIndexes().filter(function (i) {
//           return i >= 0 && i < e.slideCount;
//         });
//       e.$slides
//         .add(e.$slideTrack.find(".slick-cloned"))
//         .attr({ "aria-hidden": "true", tabindex: "-1" })
//         .find("a, input, button, select")
//         .attr({ tabindex: "-1" }),
//         null !== e.$dots &&
//           (e.$slides
//             .not(e.$slideTrack.find(".slick-cloned"))
//             .each(function (t) {
//               var s = o.indexOf(t);
//               i(this).attr({
//                 role: "tabpanel",
//                 id: "slick-slide" + e.instanceUid + t,
//                 tabindex: -1,
//               }),
//                 -1 !== s &&
//                   i(this).attr({
//                     "aria-describedby":
//                       "slick-slide-control" + e.instanceUid + s,
//                   });
//             }),
//           e.$dots
//             .attr("role", "tablist")
//             .find("li")
//             .each(function (s) {
//               var n = o[s];
//               i(this).attr({ role: "presentation" }),
//                 i(this)
//                   .find("button")
//                   .first()
//                   .attr({
//                     role: "tab",
//                     id: "slick-slide-control" + e.instanceUid + s,
//                     "aria-controls": "slick-slide" + e.instanceUid + n,
//                     "aria-label": s + 1 + " of " + t,
//                     "aria-selected": null,
//                     tabindex: "-1",
//                   });
//             })
//             .eq(e.currentSlide)
//             .find("button")
//             .attr({ "aria-selected": "true", tabindex: "0" })
//             .end());
//       for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
//         e.$slides.eq(s).attr("tabindex", 0);
//       e.activateADA();
//     }),
//     (e.prototype.initArrowEvents = function () {
//       var i = this;
//       !0 === i.options.arrows &&
//         i.slideCount > i.options.slidesToShow &&
//         (i.$prevArrow
//           .off("click.slick")
//           .on("click.slick", { message: "previous" }, i.changeSlide),
//         i.$nextArrow
//           .off("click.slick")
//           .on("click.slick", { message: "next" }, i.changeSlide),
//         !0 === i.options.accessibility &&
//           (i.$prevArrow.on("keydown.slick", i.keyHandler),
//           i.$nextArrow.on("keydown.slick", i.keyHandler)));
//     }),
//     (e.prototype.initDotEvents = function () {
//       var e = this;
//       !0 === e.options.dots &&
//         (i("li", e.$dots).on(
//           "click.slick",
//           { message: "index" },
//           e.changeSlide
//         ),
//         !0 === e.options.accessibility &&
//           e.$dots.on("keydown.slick", e.keyHandler)),
//         !0 === e.options.dots &&
//           !0 === e.options.pauseOnDotsHover &&
//           i("li", e.$dots)
//             .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
//             .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
//     }),
//     (e.prototype.initSlideEvents = function () {
//       var e = this;
//       e.options.pauseOnHover &&
//         (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
//         e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
//     }),
//     (e.prototype.initializeEvents = function () {
//       var e = this;
//       e.initArrowEvents(),
//         e.initDotEvents(),
//         e.initSlideEvents(),
//         e.$list.on(
//           "touchstart.slick mousedown.slick",
//           { action: "start" },
//           e.swipeHandler
//         ),
//         e.$list.on(
//           "touchmove.slick mousemove.slick",
//           { action: "move" },
//           e.swipeHandler
//         ),
//         e.$list.on(
//           "touchend.slick mouseup.slick",
//           { action: "end" },
//           e.swipeHandler
//         ),
//         e.$list.on(
//           "touchcancel.slick mouseleave.slick",
//           { action: "end" },
//           e.swipeHandler
//         ),
//         e.$list.on("click.slick", e.clickHandler),
//         i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
//         !0 === e.options.accessibility &&
//           e.$list.on("keydown.slick", e.keyHandler),
//         !0 === e.options.focusOnSelect &&
//           i(e.$slideTrack).children().on("click.slick", e.selectHandler),
//         i(window).on(
//           "orientationchange.slick.slick-" + e.instanceUid,
//           i.proxy(e.orientationChange, e)
//         ),
//         i(window).on(
//           "resize.slick.slick-" + e.instanceUid,
//           i.proxy(e.resize, e)
//         ),
//         i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
//         i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
//         i(e.setPosition);
//     }),
//     (e.prototype.initUI = function () {
//       var i = this;
//       !0 === i.options.arrows &&
//         i.slideCount > i.options.slidesToShow &&
//         (i.$prevArrow.show(), i.$nextArrow.show()),
//         !0 === i.options.dots &&
//           i.slideCount > i.options.slidesToShow &&
//           i.$dots.show();
//     }),
//     (e.prototype.keyHandler = function (i) {
//       var e = this;
//       i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
//         (37 === i.keyCode && !0 === e.options.accessibility
//           ? e.changeSlide({
//               data: { message: !0 === e.options.rtl ? "next" : "previous" },
//             })
//           : 39 === i.keyCode &&
//             !0 === e.options.accessibility &&
//             e.changeSlide({
//               data: { message: !0 === e.options.rtl ? "previous" : "next" },
//             }));
//     }),
//     (e.prototype.lazyLoad = function () {
//       function e(e) {
//         i("img[data-lazy]", e).each(function () {
//           var e = i(this),
//             t = i(this).attr("data-lazy"),
//             o = i(this).attr("data-srcset"),
//             s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
//             r = document.createElement("img");
//           (r.onload = function () {
//             e.animate({ opacity: 0 }, 100, function () {
//               o && (e.attr("srcset", o), s && e.attr("sizes", s)),
//                 e.attr("src", t).animate({ opacity: 1 }, 200, function () {
//                   e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
//                     "slick-loading"
//                   );
//                 }),
//                 n.$slider.trigger("lazyLoaded", [n, e, t]);
//             });
//           }),
//             (r.onerror = function () {
//               e
//                 .removeAttr("data-lazy")
//                 .removeClass("slick-loading")
//                 .addClass("slick-lazyload-error"),
//                 n.$slider.trigger("lazyLoadError", [n, e, t]);
//             }),
//             (r.src = t);
//         });
//       }
//       var t,
//         o,
//         s,
//         n = this;
//       if (
//         (!0 === n.options.centerMode
//           ? !0 === n.options.infinite
//             ? (s =
//                 (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
//                 n.options.slidesToShow +
//                 2)
//             : ((o = Math.max(
//                 0,
//                 n.currentSlide - (n.options.slidesToShow / 2 + 1)
//               )),
//               (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
//           : ((o = n.options.infinite
//               ? n.options.slidesToShow + n.currentSlide
//               : n.currentSlide),
//             (s = Math.ceil(o + n.options.slidesToShow)),
//             !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
//         (t = n.$slider.find(".slick-slide").slice(o, s)),
//         "anticipated" === n.options.lazyLoad)
//       )
//         for (
//           var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
//           a < n.options.slidesToScroll;
//           a++
//         )
//           r < 0 && (r = n.slideCount - 1),
//             (t = (t = t.add(d.eq(r))).add(d.eq(l))),
//             r--,
//             l++;
//       e(t),
//         n.slideCount <= n.options.slidesToShow
//           ? e(n.$slider.find(".slick-slide"))
//           : n.currentSlide >= n.slideCount - n.options.slidesToShow
//           ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
//           : 0 === n.currentSlide &&
//             e(
//               n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
//             );
//     }),
//     (e.prototype.loadSlider = function () {
//       var i = this;
//       i.setPosition(),
//         i.$slideTrack.css({ opacity: 1 }),
//         i.$slider.removeClass("slick-loading"),
//         i.initUI(),
//         "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
//     }),
//     (e.prototype.next = e.prototype.slickNext =
//       function () {
//         this.changeSlide({ data: { message: "next" } });
//       }),
//     (e.prototype.orientationChange = function () {
//       var i = this;
//       i.checkResponsive(), i.setPosition();
//     }),
//     (e.prototype.pause = e.prototype.slickPause =
//       function () {
//         var i = this;
//         i.autoPlayClear(), (i.paused = !0);
//       }),
//     (e.prototype.play = e.prototype.slickPlay =
//       function () {
//         var i = this;
//         i.autoPlay(),
//           (i.options.autoplay = !0),
//           (i.paused = !1),
//           (i.focussed = !1),
//           (i.interrupted = !1);
//       }),
//     (e.prototype.postSlide = function (e) {
//       var t = this;
//       t.unslicked ||
//         (t.$slider.trigger("afterChange", [t, e]),
//         (t.animating = !1),
//         t.slideCount > t.options.slidesToShow && t.setPosition(),
//         (t.swipeLeft = null),
//         t.options.autoplay && t.autoPlay(),
//         !0 === t.options.accessibility &&
//           (t.initADA(),
//           t.options.focusOnChange &&
//             i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
//     }),
//     (e.prototype.prev = e.prototype.slickPrev =
//       function () {
//         this.changeSlide({ data: { message: "previous" } });
//       }),
//     (e.prototype.preventDefault = function (i) {
//       i.preventDefault();
//     }),
//     (e.prototype.progressiveLazyLoad = function (e) {
//       e = e || 1;
//       var t,
//         o,
//         s,
//         n,
//         r,
//         l = this,
//         d = i("img[data-lazy]", l.$slider);
//       d.length
//         ? ((t = d.first()),
//           (o = t.attr("data-lazy")),
//           (s = t.attr("data-srcset")),
//           (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
//           ((r = document.createElement("img")).onload = function () {
//             s && (t.attr("srcset", s), n && t.attr("sizes", n)),
//               t
//                 .attr("src", o)
//                 .removeAttr("data-lazy data-srcset data-sizes")
//                 .removeClass("slick-loading"),
//               !0 === l.options.adaptiveHeight && l.setPosition(),
//               l.$slider.trigger("lazyLoaded", [l, t, o]),
//               l.progressiveLazyLoad();
//           }),
//           (r.onerror = function () {
//             e < 3
//               ? setTimeout(function () {
//                   l.progressiveLazyLoad(e + 1);
//                 }, 500)
//               : (t
//                   .removeAttr("data-lazy")
//                   .removeClass("slick-loading")
//                   .addClass("slick-lazyload-error"),
//                 l.$slider.trigger("lazyLoadError", [l, t, o]),
//                 l.progressiveLazyLoad());
//           }),
//           (r.src = o))
//         : l.$slider.trigger("allImagesLoaded", [l]);
//     }),
//     (e.prototype.refresh = function (e) {
//       var t,
//         o,
//         s = this;
//       (o = s.slideCount - s.options.slidesToShow),
//         !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
//         s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
//         (t = s.currentSlide),
//         s.destroy(!0),
//         i.extend(s, s.initials, { currentSlide: t }),
//         s.init(),
//         e || s.changeSlide({ data: { message: "index", index: t } }, !1);
//     }),
//     (e.prototype.registerBreakpoints = function () {
//       var e,
//         t,
//         o,
//         s = this,
//         n = s.options.responsive || null;
//       if ("array" === i.type(n) && n.length) {
//         s.respondTo = s.options.respondTo || "window";
//         for (e in n)
//           if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
//             for (t = n[e].breakpoint; o >= 0; )
//               s.breakpoints[o] &&
//                 s.breakpoints[o] === t &&
//                 s.breakpoints.splice(o, 1),
//                 o--;
//             s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
//           }
//         s.breakpoints.sort(function (i, e) {
//           return s.options.mobileFirst ? i - e : e - i;
//         });
//       }
//     }),
//     (e.prototype.reinit = function () {
//       var e = this;
//       (e.$slides = e.$slideTrack
//         .children(e.options.slide)
//         .addClass("slick-slide")),
//         (e.slideCount = e.$slides.length),
//         e.currentSlide >= e.slideCount &&
//           0 !== e.currentSlide &&
//           (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
//         e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
//         e.registerBreakpoints(),
//         e.setProps(),
//         e.setupInfinite(),
//         e.buildArrows(),
//         e.updateArrows(),
//         e.initArrowEvents(),
//         e.buildDots(),
//         e.updateDots(),
//         e.initDotEvents(),
//         e.cleanUpSlideEvents(),
//         e.initSlideEvents(),
//         e.checkResponsive(!1, !0),
//         !0 === e.options.focusOnSelect &&
//           i(e.$slideTrack).children().on("click.slick", e.selectHandler),
//         e.setSlideClasses(
//           "number" == typeof e.currentSlide ? e.currentSlide : 0
//         ),
//         e.setPosition(),
//         e.focusHandler(),
//         (e.paused = !e.options.autoplay),
//         e.autoPlay(),
//         e.$slider.trigger("reInit", [e]);
//     }),
//     (e.prototype.resize = function () {
//       var e = this;
//       i(window).width() !== e.windowWidth &&
//         (clearTimeout(e.windowDelay),
//         (e.windowDelay = window.setTimeout(function () {
//           (e.windowWidth = i(window).width()),
//             e.checkResponsive(),
//             e.unslicked || e.setPosition();
//         }, 50)));
//     }),
//     (e.prototype.removeSlide = e.prototype.slickRemove =
//       function (i, e, t) {
//         var o = this;
//         if (
//           ((i =
//             "boolean" == typeof i
//               ? !0 === (e = i)
//                 ? 0
//                 : o.slideCount - 1
//               : !0 === e
//               ? --i
//               : i),
//           o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
//         )
//           return !1;
//         o.unload(),
//           !0 === t
//             ? o.$slideTrack.children().remove()
//             : o.$slideTrack.children(this.options.slide).eq(i).remove(),
//           (o.$slides = o.$slideTrack.children(this.options.slide)),
//           o.$slideTrack.children(this.options.slide).detach(),
//           o.$slideTrack.append(o.$slides),
//           (o.$slidesCache = o.$slides),
//           o.reinit();
//       }),
//     (e.prototype.setCSS = function (i) {
//       var e,
//         t,
//         o = this,
//         s = {};
//       !0 === o.options.rtl && (i = -i),
//         (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
//         (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
//         (s[o.positionProp] = i),
//         !1 === o.transformsEnabled
//           ? o.$slideTrack.css(s)
//           : ((s = {}),
//             !1 === o.cssTransitions
//               ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
//                 o.$slideTrack.css(s))
//               : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
//                 o.$slideTrack.css(s)));
//     }),
//     (e.prototype.setDimensions = function () {
//       var i = this;
//       !1 === i.options.vertical
//         ? !0 === i.options.centerMode &&
//           i.$list.css({ padding: "0px " + i.options.centerPadding })
//         : (i.$list.height(
//             i.$slides.first().outerHeight(!0) * i.options.slidesToShow
//           ),
//           !0 === i.options.centerMode &&
//             i.$list.css({ padding: i.options.centerPadding + " 0px" })),
//         (i.listWidth = i.$list.width()),
//         (i.listHeight = i.$list.height()),
//         !1 === i.options.vertical && !1 === i.options.variableWidth
//           ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
//             i.$slideTrack.width(
//               Math.ceil(
//                 i.slideWidth * i.$slideTrack.children(".slick-slide").length
//               )
//             ))
//           : !0 === i.options.variableWidth
//           ? i.$slideTrack.width(5e3 * i.slideCount)
//           : ((i.slideWidth = Math.ceil(i.listWidth)),
//             i.$slideTrack.height(
//               Math.ceil(
//                 i.$slides.first().outerHeight(!0) *
//                   i.$slideTrack.children(".slick-slide").length
//               )
//             ));
//       var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
//       !1 === i.options.variableWidth &&
//         i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
//     }),
//     (e.prototype.setFade = function () {
//       var e,
//         t = this;
//       t.$slides.each(function (o, s) {
//         (e = t.slideWidth * o * -1),
//           !0 === t.options.rtl
//             ? i(s).css({
//                 position: "relative",
//                 right: e,
//                 top: 0,
//                 zIndex: t.options.zIndex - 2,
//                 opacity: 0,
//               })
//             : i(s).css({
//                 position: "relative",
//                 left: e,
//                 top: 0,
//                 zIndex: t.options.zIndex - 2,
//                 opacity: 0,
//               });
//       }),
//         t.$slides
//           .eq(t.currentSlide)
//           .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
//     }),
//     (e.prototype.setHeight = function () {
//       var i = this;
//       if (
//         1 === i.options.slidesToShow &&
//         !0 === i.options.adaptiveHeight &&
//         !1 === i.options.vertical
//       ) {
//         var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
//         i.$list.css("height", e);
//       }
//     }),
//     (e.prototype.setOption = e.prototype.slickSetOption =
//       function () {
//         var e,
//           t,
//           o,
//           s,
//           n,
//           r = this,
//           l = !1;
//         if (
//           ("object" === i.type(arguments[0])
//             ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
//             : "string" === i.type(arguments[0]) &&
//               ((o = arguments[0]),
//               (s = arguments[1]),
//               (l = arguments[2]),
//               "responsive" === arguments[0] && "array" === i.type(arguments[1])
//                 ? (n = "responsive")
//                 : void 0 !== arguments[1] && (n = "single")),
//           "single" === n)
//         )
//           r.options[o] = s;
//         else if ("multiple" === n)
//           i.each(o, function (i, e) {
//             r.options[i] = e;
//           });
//         else if ("responsive" === n)
//           for (t in s)
//             if ("array" !== i.type(r.options.responsive))
//               r.options.responsive = [s[t]];
//             else {
//               for (e = r.options.responsive.length - 1; e >= 0; )
//                 r.options.responsive[e].breakpoint === s[t].breakpoint &&
//                   r.options.responsive.splice(e, 1),
//                   e--;
//               r.options.responsive.push(s[t]);
//             }
//         l && (r.unload(), r.reinit());
//       }),
//     (e.prototype.setPosition = function () {
//       var i = this;
//       i.setDimensions(),
//         i.setHeight(),
//         !1 === i.options.fade
//           ? i.setCSS(i.getLeft(i.currentSlide))
//           : i.setFade(),
//         i.$slider.trigger("setPosition", [i]);
//     }),
//     (e.prototype.setProps = function () {
//       var i = this,
//         e = document.body.style;
//       (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
//         "top" === i.positionProp
//           ? i.$slider.addClass("slick-vertical")
//           : i.$slider.removeClass("slick-vertical"),
//         (void 0 === e.WebkitTransition &&
//           void 0 === e.MozTransition &&
//           void 0 === e.msTransition) ||
//           (!0 === i.options.useCSS && (i.cssTransitions = !0)),
//         i.options.fade &&
//           ("number" == typeof i.options.zIndex
//             ? i.options.zIndex < 3 && (i.options.zIndex = 3)
//             : (i.options.zIndex = i.defaults.zIndex)),
//         void 0 !== e.OTransform &&
//           ((i.animType = "OTransform"),
//           (i.transformType = "-o-transform"),
//           (i.transitionType = "OTransition"),
//           void 0 === e.perspectiveProperty &&
//             void 0 === e.webkitPerspective &&
//             (i.animType = !1)),
//         void 0 !== e.MozTransform &&
//           ((i.animType = "MozTransform"),
//           (i.transformType = "-moz-transform"),
//           (i.transitionType = "MozTransition"),
//           void 0 === e.perspectiveProperty &&
//             void 0 === e.MozPerspective &&
//             (i.animType = !1)),
//         void 0 !== e.webkitTransform &&
//           ((i.animType = "webkitTransform"),
//           (i.transformType = "-webkit-transform"),
//           (i.transitionType = "webkitTransition"),
//           void 0 === e.perspectiveProperty &&
//             void 0 === e.webkitPerspective &&
//             (i.animType = !1)),
//         void 0 !== e.msTransform &&
//           ((i.animType = "msTransform"),
//           (i.transformType = "-ms-transform"),
//           (i.transitionType = "msTransition"),
//           void 0 === e.msTransform && (i.animType = !1)),
//         void 0 !== e.transform &&
//           !1 !== i.animType &&
//           ((i.animType = "transform"),
//           (i.transformType = "transform"),
//           (i.transitionType = "transition")),
//         (i.transformsEnabled =
//           i.options.useTransform && null !== i.animType && !1 !== i.animType);
//     }),
//     (e.prototype.setSlideClasses = function (i) {
//       var e,
//         t,
//         o,
//         s,
//         n = this;
//       if (
//         ((t = n.$slider
//           .find(".slick-slide")
//           .removeClass("slick-active slick-center slick-current")
//           .attr("aria-hidden", "true")),
//         n.$slides.eq(i).addClass("slick-current"),
//         !0 === n.options.centerMode)
//       ) {
//         var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
//         (e = Math.floor(n.options.slidesToShow / 2)),
//           !0 === n.options.infinite &&
//             (i >= e && i <= n.slideCount - 1 - e
//               ? n.$slides
//                   .slice(i - e + r, i + e + 1)
//                   .addClass("slick-active")
//                   .attr("aria-hidden", "false")
//               : ((o = n.options.slidesToShow + i),
//                 t
//                   .slice(o - e + 1 + r, o + e + 2)
//                   .addClass("slick-active")
//                   .attr("aria-hidden", "false")),
//             0 === i
//               ? t
//                   .eq(t.length - 1 - n.options.slidesToShow)
//                   .addClass("slick-center")
//               : i === n.slideCount - 1 &&
//                 t.eq(n.options.slidesToShow).addClass("slick-center")),
//           n.$slides.eq(i).addClass("slick-center");
//       } else
//         i >= 0 && i <= n.slideCount - n.options.slidesToShow
//           ? n.$slides
//               .slice(i, i + n.options.slidesToShow)
//               .addClass("slick-active")
//               .attr("aria-hidden", "false")
//           : t.length <= n.options.slidesToShow
//           ? t.addClass("slick-active").attr("aria-hidden", "false")
//           : ((s = n.slideCount % n.options.slidesToShow),
//             (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
//             n.options.slidesToShow == n.options.slidesToScroll &&
//             n.slideCount - i < n.options.slidesToShow
//               ? t
//                   .slice(o - (n.options.slidesToShow - s), o + s)
//                   .addClass("slick-active")
//                   .attr("aria-hidden", "false")
//               : t
//                   .slice(o, o + n.options.slidesToShow)
//                   .addClass("slick-active")
//                   .attr("aria-hidden", "false"));
//       ("ondemand" !== n.options.lazyLoad &&
//         "anticipated" !== n.options.lazyLoad) ||
//         n.lazyLoad();
//     }),
//     (e.prototype.setupInfinite = function () {
//       var e,
//         t,
//         o,
//         s = this;
//       if (
//         (!0 === s.options.fade && (s.options.centerMode = !1),
//         !0 === s.options.infinite &&
//           !1 === s.options.fade &&
//           ((t = null), s.slideCount > s.options.slidesToShow))
//       ) {
//         for (
//           o =
//             !0 === s.options.centerMode
//               ? s.options.slidesToShow + 1
//               : s.options.slidesToShow,
//             e = s.slideCount;
//           e > s.slideCount - o;
//           e -= 1
//         )
//           (t = e - 1),
//             i(s.$slides[t])
//               .clone(!0)
//               .attr("id", "")
//               .attr("data-slick-index", t - s.slideCount)
//               .prependTo(s.$slideTrack)
//               .addClass("slick-cloned");
//         for (e = 0; e < o + s.slideCount; e += 1)
//           (t = e),
//             i(s.$slides[t])
//               .clone(!0)
//               .attr("id", "")
//               .attr("data-slick-index", t + s.slideCount)
//               .appendTo(s.$slideTrack)
//               .addClass("slick-cloned");
//         s.$slideTrack
//           .find(".slick-cloned")
//           .find("[id]")
//           .each(function () {
//             i(this).attr("id", "");
//           });
//       }
//     }),
//     (e.prototype.interrupt = function (i) {
//       var e = this;
//       i || e.autoPlay(), (e.interrupted = i);
//     }),
//     (e.prototype.selectHandler = function (e) {
//       var t = this,
//         o = i(e.target).is(".slick-slide")
//           ? i(e.target)
//           : i(e.target).parents(".slick-slide"),
//         s = parseInt(o.attr("data-slick-index"));
//       s || (s = 0),
//         t.slideCount <= t.options.slidesToShow
//           ? t.slideHandler(s, !1, !0)
//           : t.slideHandler(s);
//     }),
//     (e.prototype.slideHandler = function (i, e, t) {
//       var o,
//         s,
//         n,
//         r,
//         l,
//         d = null,
//         a = this;
//       if (
//         ((e = e || !1),
//         !(
//           (!0 === a.animating && !0 === a.options.waitForAnimate) ||
//           (!0 === a.options.fade && a.currentSlide === i)
//         ))
//       )
//         if (
//           (!1 === e && a.asNavFor(i),
//           (o = i),
//           (d = a.getLeft(o)),
//           (r = a.getLeft(a.currentSlide)),
//           (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
//           !1 === a.options.infinite &&
//             !1 === a.options.centerMode &&
//             (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
//         )
//           !1 === a.options.fade &&
//             ((o = a.currentSlide),
//             !0 !== t
//               ? a.animateSlide(r, function () {
//                   a.postSlide(o);
//                 })
//               : a.postSlide(o));
//         else if (
//           !1 === a.options.infinite &&
//           !0 === a.options.centerMode &&
//           (i < 0 || i > a.slideCount - a.options.slidesToScroll)
//         )
//           !1 === a.options.fade &&
//             ((o = a.currentSlide),
//             !0 !== t
//               ? a.animateSlide(r, function () {
//                   a.postSlide(o);
//                 })
//               : a.postSlide(o));
//         else {
//           if (
//             (a.options.autoplay && clearInterval(a.autoPlayTimer),
//             (s =
//               o < 0
//                 ? a.slideCount % a.options.slidesToScroll != 0
//                   ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
//                   : a.slideCount + o
//                 : o >= a.slideCount
//                 ? a.slideCount % a.options.slidesToScroll != 0
//                   ? 0
//                   : o - a.slideCount
//                 : o),
//             (a.animating = !0),
//             a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
//             (n = a.currentSlide),
//             (a.currentSlide = s),
//             a.setSlideClasses(a.currentSlide),
//             a.options.asNavFor &&
//               (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
//                 l.options.slidesToShow &&
//               l.setSlideClasses(a.currentSlide),
//             a.updateDots(),
//             a.updateArrows(),
//             !0 === a.options.fade)
//           )
//             return (
//               !0 !== t
//                 ? (a.fadeSlideOut(n),
//                   a.fadeSlide(s, function () {
//                     a.postSlide(s);
//                   }))
//                 : a.postSlide(s),
//               void a.animateHeight()
//             );
//           !0 !== t
//             ? a.animateSlide(d, function () {
//                 a.postSlide(s);
//               })
//             : a.postSlide(s);
//         }
//     }),
//     (e.prototype.startLoad = function () {
//       var i = this;
//       !0 === i.options.arrows &&
//         i.slideCount > i.options.slidesToShow &&
//         (i.$prevArrow.hide(), i.$nextArrow.hide()),
//         !0 === i.options.dots &&
//           i.slideCount > i.options.slidesToShow &&
//           i.$dots.hide(),
//         i.$slider.addClass("slick-loading");
//     }),
//     (e.prototype.swipeDirection = function () {
//       var i,
//         e,
//         t,
//         o,
//         s = this;
//       return (
//         (i = s.touchObject.startX - s.touchObject.curX),
//         (e = s.touchObject.startY - s.touchObject.curY),
//         (t = Math.atan2(e, i)),
//         (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
//         o <= 45 && o >= 0
//           ? !1 === s.options.rtl
//             ? "left"
//             : "right"
//           : o <= 360 && o >= 315
//           ? !1 === s.options.rtl
//             ? "left"
//             : "right"
//           : o >= 135 && o <= 225
//           ? !1 === s.options.rtl
//             ? "right"
//             : "left"
//           : !0 === s.options.verticalSwiping
//           ? o >= 35 && o <= 135
//             ? "down"
//             : "up"
//           : "vertical"
//       );
//     }),
//     (e.prototype.swipeEnd = function (i) {
//       var e,
//         t,
//         o = this;
//       if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
//         return (o.scrolling = !1), !1;
//       if (
//         ((o.interrupted = !1),
//         (o.shouldClick = !(o.touchObject.swipeLength > 10)),
//         void 0 === o.touchObject.curX)
//       )
//         return !1;
//       if (
//         (!0 === o.touchObject.edgeHit &&
//           o.$slider.trigger("edge", [o, o.swipeDirection()]),
//         o.touchObject.swipeLength >= o.touchObject.minSwipe)
//       ) {
//         switch ((t = o.swipeDirection())) {
//           case "left":
//           case "down":
//             (e = o.options.swipeToSlide
//               ? o.checkNavigable(o.currentSlide + o.getSlideCount())
//               : o.currentSlide + o.getSlideCount()),
//               (o.currentDirection = 0);
//             break;
//           case "right":
//           case "up":
//             (e = o.options.swipeToSlide
//               ? o.checkNavigable(o.currentSlide - o.getSlideCount())
//               : o.currentSlide - o.getSlideCount()),
//               (o.currentDirection = 1);
//         }
//         "vertical" != t &&
//           (o.slideHandler(e),
//           (o.touchObject = {}),
//           o.$slider.trigger("swipe", [o, t]));
//       } else
//         o.touchObject.startX !== o.touchObject.curX &&
//           (o.slideHandler(o.currentSlide), (o.touchObject = {}));
//     }),
//     (e.prototype.swipeHandler = function (i) {
//       var e = this;
//       if (
//         !(
//           !1 === e.options.swipe ||
//           ("ontouchend" in document && !1 === e.options.swipe) ||
//           (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
//         )
//       )
//         switch (
//           ((e.touchObject.fingerCount =
//             i.originalEvent && void 0 !== i.originalEvent.touches
//               ? i.originalEvent.touches.length
//               : 1),
//           (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
//           !0 === e.options.verticalSwiping &&
//             (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
//           i.data.action)
//         ) {
//           case "start":
//             e.swipeStart(i);
//             break;
//           case "move":
//             e.swipeMove(i);
//             break;
//           case "end":
//             e.swipeEnd(i);
//         }
//     }),
//     (e.prototype.swipeMove = function (i) {
//       var e,
//         t,
//         o,
//         s,
//         n,
//         r,
//         l = this;
//       return (
//         (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
//         !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
//           ((e = l.getLeft(l.currentSlide)),
//           (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
//           (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
//           (l.touchObject.swipeLength = Math.round(
//             Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
//           )),
//           (r = Math.round(
//             Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
//           )),
//           !l.options.verticalSwiping && !l.swiping && r > 4
//             ? ((l.scrolling = !0), !1)
//             : (!0 === l.options.verticalSwiping &&
//                 (l.touchObject.swipeLength = r),
//               (t = l.swipeDirection()),
//               void 0 !== i.originalEvent &&
//                 l.touchObject.swipeLength > 4 &&
//                 ((l.swiping = !0), i.preventDefault()),
//               (s =
//                 (!1 === l.options.rtl ? 1 : -1) *
//                 (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
//               !0 === l.options.verticalSwiping &&
//                 (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
//               (o = l.touchObject.swipeLength),
//               (l.touchObject.edgeHit = !1),
//               !1 === l.options.infinite &&
//                 ((0 === l.currentSlide && "right" === t) ||
//                   (l.currentSlide >= l.getDotCount() && "left" === t)) &&
//                 ((o = l.touchObject.swipeLength * l.options.edgeFriction),
//                 (l.touchObject.edgeHit = !0)),
//               !1 === l.options.vertical
//                 ? (l.swipeLeft = e + o * s)
//                 : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
//               !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
//               !0 !== l.options.fade &&
//                 !1 !== l.options.touchMove &&
//                 (!0 === l.animating
//                   ? ((l.swipeLeft = null), !1)
//                   : void l.setCSS(l.swipeLeft))))
//       );
//     }),
//     (e.prototype.swipeStart = function (i) {
//       var e,
//         t = this;
//       if (
//         ((t.interrupted = !0),
//         1 !== t.touchObject.fingerCount ||
//           t.slideCount <= t.options.slidesToShow)
//       )
//         return (t.touchObject = {}), !1;
//       void 0 !== i.originalEvent &&
//         void 0 !== i.originalEvent.touches &&
//         (e = i.originalEvent.touches[0]),
//         (t.touchObject.startX = t.touchObject.curX =
//           void 0 !== e ? e.pageX : i.clientX),
//         (t.touchObject.startY = t.touchObject.curY =
//           void 0 !== e ? e.pageY : i.clientY),
//         (t.dragging = !0);
//     }),
//     (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
//       function () {
//         var i = this;
//         null !== i.$slidesCache &&
//           (i.unload(),
//           i.$slideTrack.children(this.options.slide).detach(),
//           i.$slidesCache.appendTo(i.$slideTrack),
//           i.reinit());
//       }),
//     (e.prototype.unload = function () {
//       var e = this;
//       i(".slick-cloned", e.$slider).remove(),
//         e.$dots && e.$dots.remove(),
//         e.$prevArrow &&
//           e.htmlExpr.test(e.options.prevArrow) &&
//           e.$prevArrow.remove(),
//         e.$nextArrow &&
//           e.htmlExpr.test(e.options.nextArrow) &&
//           e.$nextArrow.remove(),
//         e.$slides
//           .removeClass("slick-slide slick-active slick-visible slick-current")
//           .attr("aria-hidden", "true")
//           .css("width", "");
//     }),
//     (e.prototype.unslick = function (i) {
//       var e = this;
//       e.$slider.trigger("unslick", [e, i]), e.destroy();
//     }),
//     (e.prototype.updateArrows = function () {
//       var i = this;
//       Math.floor(i.options.slidesToShow / 2),
//         !0 === i.options.arrows &&
//           i.slideCount > i.options.slidesToShow &&
//           !i.options.infinite &&
//           (i.$prevArrow
//             .removeClass("slick-disabled")
//             .attr("aria-disabled", "false"),
//           i.$nextArrow
//             .removeClass("slick-disabled")
//             .attr("aria-disabled", "false"),
//           0 === i.currentSlide
//             ? (i.$prevArrow
//                 .addClass("slick-disabled")
//                 .attr("aria-disabled", "true"),
//               i.$nextArrow
//                 .removeClass("slick-disabled")
//                 .attr("aria-disabled", "false"))
//             : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
//               !1 === i.options.centerMode
//             ? (i.$nextArrow
//                 .addClass("slick-disabled")
//                 .attr("aria-disabled", "true"),
//               i.$prevArrow
//                 .removeClass("slick-disabled")
//                 .attr("aria-disabled", "false"))
//             : i.currentSlide >= i.slideCount - 1 &&
//               !0 === i.options.centerMode &&
//               (i.$nextArrow
//                 .addClass("slick-disabled")
//                 .attr("aria-disabled", "true"),
//               i.$prevArrow
//                 .removeClass("slick-disabled")
//                 .attr("aria-disabled", "false")));
//     }),
//     (e.prototype.updateDots = function () {
//       var i = this;
//       null !== i.$dots &&
//         (i.$dots.find("li").removeClass("slick-active").end(),
//         i.$dots
//           .find("li")
//           .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
//           .addClass("slick-active"));
//     }),
//     (e.prototype.visibility = function () {
//       var i = this;
//       i.options.autoplay &&
//         (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
//     }),
//     (i.fn.slick = function () {
//       var i,
//         t,
//         o = this,
//         s = arguments[0],
//         n = Array.prototype.slice.call(arguments, 1),
//         r = o.length;
//       for (i = 0; i < r; i++)
//         if (
//           ("object" == typeof s || void 0 === s
//             ? (o[i].slick = new e(o[i], s))
//             : (t = o[i].slick[s].apply(o[i].slick, n)),
//           void 0 !== t)
//         )
//           return t;
//       return o;
//     });
// });
/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/ (function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}.call(this));
