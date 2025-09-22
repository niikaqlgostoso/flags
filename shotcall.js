const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./feed-Cd3BIjD8.js", "./index-7v4GLf-H.js", "./react-BkfY9j8H.js", "./index-BISNSHcB.css", "./geolambda.hooks-WNSwLsvO.js", "./videoOverlay-C1PW1MDb.js", "./volume.react-TWj66E70.js", "./card-CMnjIXWD.js", "./prompt-D22dRflp.js", "./ftux-DJJ3jsQY.js", "./scrollableContainer-BDP6FZ77.js", "./card-D9Uwqs6x.js", "./shotcallMetagame-BwUDJ0Px.js"]))) => i.map(i => d[i]);
import {
    b as nc,
    v as Zd,
    D as Xd,
    r as It,
    d as qd,
    _ as ce,
    m as Qd,
    A as Jd,
    e as zs,
    S as eo,
    f as qe,
    s as X,
    O as ef,
    R as tf,
    h as nf,
    c as er,
    i as Bn,
    N as Oo,
    j as gn,
    k as _,
    l as fe,
    n as rc,
    P as rf,
    o as of,
    p as sf,
    q as af,
    t as oc,
    B as Gs,
    w as to,
    x as vt,
    y as dt,
    z as Ye,
    C as cf,
    E as ft,
    F as lf,
    G as uf,
    H as Pe,
    I as de,
    J as tr,
    K as df,
    L as Ve,
    M as sc,
    Q as ic,
    U as Ge,
    V as In,
    u as Vo,
    W as on,
    X as ff,
    Y as ac,
    Z as hf,
    $ as ko,
    a0 as pf,
    a1 as mf,
    a2 as gf,
    a3 as Ks,
    a4 as yf,
    a as cc,
    a5 as vf,
    a6 as Oe,
    a7 as No,
    a8 as xf,
    a9 as yn,
    aa as Ot
} from "./videoOverlay-C1PW1MDb.js";
import {
    r as l,
    j as y,
    R as jo
} from "./index-7v4GLf-H.js";
import {
    a as Me,
    b as Ys,
    c as Qe,
    d as wf,
    e as sn,
    S as no,
    f as $o,
    g as bf,
    h as Fn,
    i as Sf,
    u as Cf,
    U as Pf,
    A as Zs
} from "./geolambda.hooks-WNSwLsvO.js";
import {
    g as Ef,
    b as Tf
} from "./react-BkfY9j8H.js";

function Bo(e, t) {
    var n = nc(void 0);
    Zd(e, Xd.Mutation);
    var r = It.useState({
            called: !1,
            loading: !1,
            client: n
        }),
        o = r[0],
        s = r[1],
        i = It.useRef({
            result: o,
            mutationId: 0,
            isMounted: !0,
            client: n,
            mutation: e,
            options: t
        });
    qd(function() {
        Object.assign(i.current, {
            client: n,
            options: t,
            mutation: e
        })
    });
    var a = It.useCallback(function(u) {
            u === void 0 && (u = {});
            var d = i.current,
                f = d.options,
                h = d.mutation,
                p = ce(ce({}, f), {
                    mutation: h
                }),
                g = u.client || i.current.client;
            !i.current.result.loading && !p.ignoreResults && i.current.isMounted && s(i.current.result = {
                loading: !0,
                error: void 0,
                data: void 0,
                called: !0,
                client: g
            });
            var m = ++i.current.mutationId,
                x = Qd(p, u);
            return g.mutate(x).then(function(v) {
                var b, w, C = v.data,
                    S = v.errors,
                    E = S && S.length > 0 ? new Jd({
                        graphQLErrors: S
                    }) : void 0,
                    P = u.onError || ((b = i.current.options) === null || b === void 0 ? void 0 : b.onError);
                if (E && P && P(E, x), m === i.current.mutationId && !x.ignoreResults) {
                    var T = {
                        called: !0,
                        loading: !1,
                        data: C,
                        error: E,
                        client: g
                    };
                    i.current.isMounted && !zs(i.current.result, T) && s(i.current.result = T)
                }
                var M = u.onCompleted || ((w = i.current.options) === null || w === void 0 ? void 0 : w.onCompleted);
                return E || M == null || M(v.data, x), v
            }, function(v) {
                var b;
                if (m === i.current.mutationId && i.current.isMounted) {
                    var w = {
                        loading: !1,
                        error: v,
                        data: void 0,
                        called: !0,
                        client: g
                    };
                    zs(i.current.result, w) || s(i.current.result = w)
                }
                var C = u.onError || ((b = i.current.options) === null || b === void 0 ? void 0 : b.onError);
                if (C) return C(v, x), {
                    data: void 0,
                    errors: v
                };
                throw v
            })
        }, []),
        c = It.useCallback(function() {
            if (i.current.isMounted) {
                var u = {
                    called: !1,
                    loading: !1,
                    client: i.current.client
                };
                Object.assign(i.current, {
                    mutationId: 0,
                    result: u
                }), s(u)
            }
        }, []);
    return It.useEffect(function() {
        var u = i.current;
        return u.isMounted = !0,
            function() {
                u.isMounted = !1
            }
    }, []), [a, ce({
        reset: c
    }, o)]
}

function q(e, t) {
    return t
}
const Rf = e => l.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 38,
        height: 38,
        viewBox: "0 0 425 425",
        ...e
    }, l.createElement("path", {
        fill: "currentColor",
        d: "M94.73,94.85h94.12V47.37h-73c-37.83,0-68.49,30.74-68.49,68.66v73.17h47.37V94.85z M179.04,212.94 l-84.31,84.51v-60.77H47.37v141.83h141.49v-47.48h-60.63l84.31-84.52L179.04,212.94z M330.34,331.03h-94.12v47.48h73 c37.83,0,68.49-30.74,68.49-68.66v-73.17h-47.37V331.03z M236.22,47.37v47.48h60.63l-84.31,84.52l33.49,33.57l84.31-84.52v60.77 h47.37V47.37H236.22z"
    })),
    Af = e => l.createElement("svg", {
        width: 32,
        height: 38,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 350 378.56",
        ...e
    }, l.createElement("path", {
        d: "M91.39,69.79a4.59,4.59,0,0,1-1-2.88V1.08A1.08,1.08,0,0,1,92.3.41L201.81,137.29a1.09,1.09,0,0,1-.85,1.76H149a4.59,4.59,0,0,1-3.6-1.74ZM186.65,92H238.6a4.58,4.58,0,0,0,3.6-1.73l16.41-20.51a4.59,4.59,0,0,0,1-2.88V1.08A1.08,1.08,0,0,0,257.7.41L185.8,90.28A1.08,1.08,0,0,0,186.65,92ZM117.53,207V171.62a4.57,4.57,0,0,0-1-2.88l-59.88-75A4.63,4.63,0,0,0,53,92H1.08a1.08,1.08,0,0,0-.84,1.76l75,93.71a2.86,2.86,0,0,1,0,3.56l-75,93.72a1.08,1.08,0,0,0,.84,1.75H53a4.65,4.65,0,0,0,3.61-1.73l59.88-75A4.57,4.57,0,0,0,117.53,207Zm157.26-15.91a2.86,2.86,0,0,1,0-3.56l75-93.71a1.08,1.08,0,0,0-.84-1.76H297a4.63,4.63,0,0,0-3.61,1.74l-59.88,74.94a4.57,4.57,0,0,0-1,2.88v35.35a4.55,4.55,0,0,0,1,2.88l59.88,75a4.65,4.65,0,0,0,3.61,1.73h51.95a1.08,1.08,0,0,0,.84-1.75ZM258.61,308.77l-54-67.52a4.58,4.58,0,0,0-3.6-1.73h-51.8a5,5,0,0,0-3.89,1.86L91.39,308.77a4.6,4.6,0,0,0-1,2.89v65.82a1.08,1.08,0,0,0,1.92.67L173.18,277a2.31,2.31,0,0,1,3.61,0L257.7,378.15a1.08,1.08,0,0,0,1.92-.67V311.66A4.6,4.6,0,0,0,258.61,308.77Z",
        fill: "currentColor"
    })),
    vn = X({
        slots: ["container", "loader", "icon", "iconOverlay"],
        base: {
            container: {
                h: "100%",
                w: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            loader: {
                pos: "relative",
                h: 40,
                aspectRatio: "1:1",
                overflow: "hidden",
                md: {
                    h: 60
                },
                lg: {
                    h: 80
                }
            },
            icon: {
                pos: "absolute",
                top: 0,
                left: 0,
                w: "100%",
                h: "100%",
                zIndex: "zLayer",
                color: "rule.primary"
            },
            iconOverlay: {
                pos: "absolute",
                top: 0,
                left: 0,
                w: "100%",
                h: "100%",
                zIndex: "zLayer2",
                color: "accent.primary",
                animation: "diagonalSwipe 1.5s linear infinite"
            }
        }
    })();

function Mf({
    classname: e,
    sport: t
}) {
    const n = l.useMemo(() => {
        switch (t) {
            case eo.Lol:
                return Rf;
            case eo.Val:
                return Af;
            default:
                return
        }
    }, [t]);
    return y.jsx("div", {
        className: qe(vn.container, e),
        children: y.jsx("div", {
            className: vn.loader,
            children: n && y.jsxs(y.Fragment, {
                children: [y.jsx(n, {
                    className: vn.iconOverlay
                }), y.jsx(n, {
                    className: vn.icon
                })]
            })
        })
    })
}

function be(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Xs(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function lc(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Xs(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : Xs(e[o], null)
            }
        }
    }
}

function xt(...e) {
    return l.useCallback(lc(...e), e)
}

function uc(e, t = []) {
    let n = [];

    function r(s, i) {
        const a = l.createContext(i),
            c = n.length;
        n = [...n, i];
        const u = f => {
            var v;
            const {
                scope: h,
                children: p,
                ...g
            } = f, m = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || a, x = l.useMemo(() => g, Object.values(g));
            return y.jsx(m.Provider, {
                value: x,
                children: p
            })
        };
        u.displayName = s + "Provider";

        function d(f, h) {
            var m;
            const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || a,
                g = l.useContext(p);
            if (g) return g;
            if (i !== void 0) return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const o = () => {
        const s = n.map(i => l.createContext(i));
        return function(a) {
            const c = (a == null ? void 0 : a[e]) || s;
            return l.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: c
                }
            }), [a, c])
        }
    };
    return o.scopeName = e, [r, Lf(o, ...t)]
}

function Lf(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce((a, {
                useScope: c,
                scopeName: u
            }) => {
                const f = c(s)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }, {});
            return l.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}
var nr = Tf();
const dc = Ef(nr);

function Df(e) {
    const t = If(e),
        n = l.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = l.Children.toArray(s), c = a.find(Vf);
            if (c) {
                const u = c.props.children,
                    d = a.map(f => f === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : f);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null
                })
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function If(e) {
    const t = l.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n;
        if (l.isValidElement(o)) {
            const i = Nf(o),
                a = kf(s, o.props);
            return o.type !== l.Fragment && (a.ref = r ? lc(r, i) : i), l.cloneElement(o, a)
        }
        return l.Children.count(o) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var fc = Symbol("radix.slottable");

function Of(e) {
    const t = ({
        children: n
    }) => y.jsx(y.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = fc, t
}

function Vf(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === fc
}

function kf(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const c = s(...a);
            return o(...a), c
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function Nf(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var jf = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Je = jf.reduce((e, t) => {
        const n = Df(`Primitive.${t}`),
            r = l.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, c = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(c, {
                    ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        }
    }, {});

function $f(e, t) {
    e && nr.flushSync(() => e.dispatchEvent(t))
}

function Fo(e) {
    const t = l.useRef(e);
    return l.useEffect(() => {
        t.current = e
    }), l.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function Bf(e) {
    const t = l.useRef(e);
    return l.useEffect(() => {
        t.current = e
    }), l.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function hc(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Bf(e);
    l.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var Ff = "DismissableLayer",
    ro = "dismissableLayer.update",
    _f = "dismissableLayer.pointerDownOutside",
    Wf = "dismissableLayer.focusOutside",
    qs, pc = l.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    mc = l.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: a,
            ...c
        } = e, u = l.useContext(pc), [d, f] = l.useState(null), h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = l.useState({}), g = xt(t, P => f(P)), m = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(x), b = d ? m.indexOf(d) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= v, S = zf(P => {
            const T = P.target,
                M = [...u.branches].some(V => V.contains(T));
            !C || M || (o == null || o(P), i == null || i(P), P.defaultPrevented || a == null || a())
        }, h), E = Gf(P => {
            const T = P.target;
            [...u.branches].some(V => V.contains(T)) || (s == null || s(P), i == null || i(P), P.defaultPrevented || a == null || a())
        }, h);
        return hc(P => {
            b === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()))
        }, h), l.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (qs = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Qs(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = qs)
            }
        }, [d, h, n, u]), l.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Qs())
        }, [d, u]), l.useEffect(() => {
            const P = () => p({});
            return document.addEventListener(ro, P), () => document.removeEventListener(ro, P)
        }, []), y.jsx(Je.div, {
            ...c,
            ref: g,
            style: {
                pointerEvents: w ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: be(e.onFocusCapture, E.onFocusCapture),
            onBlurCapture: be(e.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: be(e.onPointerDownCapture, S.onPointerDownCapture)
        })
    });
mc.displayName = Ff;
var Uf = "DismissableLayerBranch",
    Hf = l.forwardRef((e, t) => {
        const n = l.useContext(pc),
            r = l.useRef(null),
            o = xt(t, r);
        return l.useEffect(() => {
            const s = r.current;
            if (s) return n.branches.add(s), () => {
                n.branches.delete(s)
            }
        }, [n.branches]), y.jsx(Je.div, {
            ...e,
            ref: o
        })
    });
Hf.displayName = Uf;

function zf(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Fo(e),
        r = l.useRef(!1),
        o = l.useRef(() => {});
    return l.useEffect(() => {
        const s = a => {
                if (a.target && !r.current) {
                    let c = function() {
                        gc(_f, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, {
                        once: !0
                    })) : c()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            i = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }, 0);
        return () => {
            window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Gf(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = Fo(e),
        r = l.useRef(!1);
    return l.useEffect(() => {
        const o = s => {
            s.target && !r.current && gc(Wf, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Qs() {
    const e = new CustomEvent(ro);
    document.dispatchEvent(e)
}

function gc(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? $f(o, s) : o.dispatchEvent(s)
}
var Kf = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {},
    Yf = jo[" useId ".trim().toString()] || (() => {}),
    Zf = 0;

function yc(e) {
    const [t, n] = l.useState(Yf());
    return Kf(() => {
        n(r => r ?? String(Zf++))
    }, [e]), t ? `radix-${t}` : ""
}
const Xf = ["top", "right", "bottom", "left"],
    ke = Math.min,
    J = Math.max,
    _n = Math.round,
    xn = Math.floor,
    he = e => ({
        x: e,
        y: e
    }),
    qf = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Qf = {
        start: "end",
        end: "start"
    };

function oo(e, t, n) {
    return J(e, ke(t, n))
}

function Te(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Re(e) {
    return e.split("-")[0]
}

function wt(e) {
    return e.split("-")[1]
}

function _o(e) {
    return e === "x" ? "y" : "x"
}

function Wo(e) {
    return e === "y" ? "height" : "width"
}

function Ee(e) {
    return ["top", "bottom"].includes(Re(e)) ? "y" : "x"
}

function Uo(e) {
    return _o(Ee(e))
}

function Jf(e, t, n) {
    n === void 0 && (n = !1);
    const r = wt(e),
        o = Uo(e),
        s = Wo(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (i = Wn(i)), [i, Wn(i)]
}

function eh(e) {
    const t = Wn(e);
    return [so(e), t, so(t)]
}

function so(e) {
    return e.replace(/start|end/g, t => Qf[t])
}

function th(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        s = ["top", "bottom"],
        i = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : r : t ? r : o;
        case "left":
        case "right":
            return t ? s : i;
        default:
            return []
    }
}

function nh(e, t, n, r) {
    const o = wt(e);
    let s = th(Re(e), n === "start", r);
    return o && (s = s.map(i => i + "-" + o), t && (s = s.concat(s.map(so)))), s
}

function Wn(e) {
    return e.replace(/left|right|bottom|top/g, t => qf[t])
}

function rh(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function vc(e) {
    return typeof e != "number" ? rh(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Un(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Js(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const s = Ee(t),
        i = Uo(t),
        a = Wo(i),
        c = Re(t),
        u = s === "y",
        d = r.x + r.width / 2 - o.width / 2,
        f = r.y + r.height / 2 - o.height / 2,
        h = r[a] / 2 - o[a] / 2;
    let p;
    switch (c) {
        case "top":
            p = {
                x: d,
                y: r.y - o.height
            };
            break;
        case "bottom":
            p = {
                x: d,
                y: r.y + r.height
            };
            break;
        case "right":
            p = {
                x: r.x + r.width,
                y: f
            };
            break;
        case "left":
            p = {
                x: r.x - o.width,
                y: f
            };
            break;
        default:
            p = {
                x: r.x,
                y: r.y
            }
    }
    switch (wt(t)) {
        case "start":
            p[i] -= h * (n && u ? -1 : 1);
            break;
        case "end":
            p[i] += h * (n && u ? -1 : 1);
            break
    }
    return p
}
const oh = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: s = [],
        platform: i
    } = n, a = s.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: d,
            y: f
        } = Js(u, r, c),
        h = r,
        p = {},
        g = 0;
    for (let m = 0; m < a.length; m++) {
        const {
            name: x,
            fn: v
        } = a[m], {
            x: b,
            y: w,
            data: C,
            reset: S
        } = await v({
            x: d,
            y: f,
            initialPlacement: r,
            placement: h,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = b ?? d, f = w ?? f, p = {
            ...p,
            [x]: {
                ...p[x],
                ...C
            }
        }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (u = S.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : S.rects), {
            x: d,
            y: f
        } = Js(u, h, c)), m = -1)
    }
    return {
        x: d,
        y: f,
        placement: h,
        strategy: o,
        middlewareData: p
    }
};
async function Ht(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: s,
        rects: i,
        elements: a,
        strategy: c
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: f = "floating",
        altBoundary: h = !1,
        padding: p = 0
    } = Te(t, e), g = vc(p), x = a[h ? f === "floating" ? "reference" : "floating" : f], v = Un(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null || n ? x : x.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: d,
        strategy: c
    })), b = f === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, S = Un(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: b,
        offsetParent: w,
        strategy: c
    }) : b);
    return {
        top: (v.top - S.top + g.top) / C.y,
        bottom: (S.bottom - v.bottom + g.bottom) / C.y,
        left: (v.left - S.left + g.left) / C.x,
        right: (S.right - v.right + g.right) / C.x
    }
}
const sh = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: s,
                platform: i,
                elements: a,
                middlewareData: c
            } = t, {
                element: u,
                padding: d = 0
            } = Te(e, t) || {};
            if (u == null) return {};
            const f = vc(d),
                h = {
                    x: n,
                    y: r
                },
                p = Uo(o),
                g = Wo(p),
                m = await i.getDimensions(u),
                x = p === "y",
                v = x ? "top" : "left",
                b = x ? "bottom" : "right",
                w = x ? "clientHeight" : "clientWidth",
                C = s.reference[g] + s.reference[p] - h[p] - s.floating[g],
                S = h[p] - s.reference[p],
                E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
            let P = E ? E[w] : 0;
            (!P || !await (i.isElement == null ? void 0 : i.isElement(E))) && (P = a.floating[w] || s.floating[g]);
            const T = C / 2 - S / 2,
                M = P / 2 - m[g] / 2 - 1,
                V = ke(f[v], M),
                L = ke(f[b], M),
                I = V,
                A = P - m[g] - L,
                N = P / 2 - m[g] / 2 + T,
                k = oo(I, N, A),
                $ = !c.arrow && wt(o) != null && N !== k && s.reference[g] / 2 - (N < I ? V : L) - m[g] / 2 < 0,
                j = $ ? N < I ? N - I : N - A : 0;
            return {
                [p]: h[p] + j,
                data: {
                    [p]: k,
                    centerOffset: N - k - j,
                    ...$ && {
                        alignmentOffset: j
                    }
                },
                reset: $
            }
        }
    }),
    ih = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: s,
                    rects: i,
                    initialPlacement: a,
                    platform: c,
                    elements: u
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: f = !0,
                    fallbackPlacements: h,
                    fallbackStrategy: p = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: m = !0,
                    ...x
                } = Te(e, t);
                if ((n = s.arrow) != null && n.alignmentOffset) return {};
                const v = Re(o),
                    b = Ee(a),
                    w = Re(a) === a,
                    C = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
                    S = h || (w || !m ? [Wn(a)] : eh(a)),
                    E = g !== "none";
                !h && E && S.push(...nh(a, m, g, C));
                const P = [a, ...S],
                    T = await Ht(t, x),
                    M = [];
                let V = ((r = s.flip) == null ? void 0 : r.overflows) || [];
                if (d && M.push(T[v]), f) {
                    const k = Jf(o, i, C);
                    M.push(T[k[0]], T[k[1]])
                }
                if (V = [...V, {
                        placement: o,
                        overflows: M
                    }], !M.every(k => k <= 0)) {
                    var L, I;
                    const k = (((L = s.flip) == null ? void 0 : L.index) || 0) + 1,
                        $ = P[k];
                    if ($) {
                        var A;
                        const O = f === "alignment" ? b !== Ee($) : !1,
                            B = ((A = V[0]) == null ? void 0 : A.overflows[0]) > 0;
                        if (!O || B) return {
                            data: {
                                index: k,
                                overflows: V
                            },
                            reset: {
                                placement: $
                            }
                        }
                    }
                    let j = (I = V.filter(O => O.overflows[0] <= 0).sort((O, B) => O.overflows[1] - B.overflows[1])[0]) == null ? void 0 : I.placement;
                    if (!j) switch (p) {
                        case "bestFit": {
                            var N;
                            const O = (N = V.filter(B => {
                                if (E) {
                                    const W = Ee(B.placement);
                                    return W === b || W === "y"
                                }
                                return !0
                            }).map(B => [B.placement, B.overflows.filter(W => W > 0).reduce((W, se) => W + se, 0)]).sort((B, W) => B[1] - W[1])[0]) == null ? void 0 : N[0];
                            O && (j = O);
                            break
                        }
                        case "initialPlacement":
                            j = a;
                            break
                    }
                    if (o !== j) return {
                        reset: {
                            placement: j
                        }
                    }
                }
                return {}
            }
        }
    };

function ei(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function ti(e) {
    return Xf.some(t => e[t] >= 0)
}
const ah = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...o
            } = Te(e, t);
            switch (r) {
                case "referenceHidden": {
                    const s = await Ht(t, {
                            ...o,
                            elementContext: "reference"
                        }),
                        i = ei(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: i,
                            referenceHidden: ti(i)
                        }
                    }
                }
                case "escaped": {
                    const s = await Ht(t, {
                            ...o,
                            altBoundary: !0
                        }),
                        i = ei(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: i,
                            escaped: ti(i)
                        }
                    }
                }
                default:
                    return {}
            }
        }
    }
};
async function ch(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Re(n), a = wt(n), c = Ee(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, d = s && c ? -1 : 1, f = Te(t, e);
    let {
        mainAxis: h,
        crossAxis: p,
        alignmentAxis: g
    } = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof g == "number" && (p = a === "end" ? g * -1 : g), c ? {
        x: p * d,
        y: h * u
    } : {
        x: h * u,
        y: p * d
    }
}
const lh = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: s,
                    placement: i,
                    middlewareData: a
                } = t, c = await ch(t, e);
                return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + c.x,
                    y: s + c.y,
                    data: {
                        ...c,
                        placement: i
                    }
                }
            }
        }
    },
    uh = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: s = !0,
                    crossAxis: i = !1,
                    limiter: a = {
                        fn: x => {
                            let {
                                x: v,
                                y: b
                            } = x;
                            return {
                                x: v,
                                y: b
                            }
                        }
                    },
                    ...c
                } = Te(e, t), u = {
                    x: n,
                    y: r
                }, d = await Ht(t, c), f = Ee(Re(o)), h = _o(f);
                let p = u[h],
                    g = u[f];
                if (s) {
                    const x = h === "y" ? "top" : "left",
                        v = h === "y" ? "bottom" : "right",
                        b = p + d[x],
                        w = p - d[v];
                    p = oo(b, p, w)
                }
                if (i) {
                    const x = f === "y" ? "top" : "left",
                        v = f === "y" ? "bottom" : "right",
                        b = g + d[x],
                        w = g - d[v];
                    g = oo(b, g, w)
                }
                const m = a.fn({
                    ...t,
                    [h]: p,
                    [f]: g
                });
                return {
                    ...m,
                    data: {
                        x: m.x - n,
                        y: m.y - r,
                        enabled: {
                            [h]: s,
                            [f]: i
                        }
                    }
                }
            }
        }
    },
    dh = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: s,
                    middlewareData: i
                } = t, {
                    offset: a = 0,
                    mainAxis: c = !0,
                    crossAxis: u = !0
                } = Te(e, t), d = {
                    x: n,
                    y: r
                }, f = Ee(o), h = _o(f);
                let p = d[h],
                    g = d[f];
                const m = Te(a, t),
                    x = typeof m == "number" ? {
                        mainAxis: m,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...m
                    };
                if (c) {
                    const w = h === "y" ? "height" : "width",
                        C = s.reference[h] - s.floating[w] + x.mainAxis,
                        S = s.reference[h] + s.reference[w] - x.mainAxis;
                    p < C ? p = C : p > S && (p = S)
                }
                if (u) {
                    var v, b;
                    const w = h === "y" ? "width" : "height",
                        C = ["top", "left"].includes(Re(o)),
                        S = s.reference[f] - s.floating[w] + (C && ((v = i.offset) == null ? void 0 : v[f]) || 0) + (C ? 0 : x.crossAxis),
                        E = s.reference[f] + s.reference[w] + (C ? 0 : ((b = i.offset) == null ? void 0 : b[f]) || 0) - (C ? x.crossAxis : 0);
                    g < S ? g = S : g > E && (g = E)
                }
                return {
                    [h]: p,
                    [f]: g
                }
            }
        }
    },
    fh = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: s,
                    platform: i,
                    elements: a
                } = t, {
                    apply: c = () => {},
                    ...u
                } = Te(e, t), d = await Ht(t, u), f = Re(o), h = wt(o), p = Ee(o) === "y", {
                    width: g,
                    height: m
                } = s.floating;
                let x, v;
                f === "top" || f === "bottom" ? (x = f, v = h === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = f, x = h === "end" ? "top" : "bottom");
                const b = m - d.top - d.bottom,
                    w = g - d.left - d.right,
                    C = ke(m - d[x], b),
                    S = ke(g - d[v], w),
                    E = !t.middlewareData.shift;
                let P = C,
                    T = S;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = w), (r = t.middlewareData.shift) != null && r.enabled.y && (P = b), E && !h) {
                    const V = J(d.left, 0),
                        L = J(d.right, 0),
                        I = J(d.top, 0),
                        A = J(d.bottom, 0);
                    p ? T = g - 2 * (V !== 0 || L !== 0 ? V + L : J(d.left, d.right)) : P = m - 2 * (I !== 0 || A !== 0 ? I + A : J(d.top, d.bottom))
                }
                await c({
                    ...t,
                    availableWidth: T,
                    availableHeight: P
                });
                const M = await i.getDimensions(a.floating);
                return g !== M.width || m !== M.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function rr() {
    return typeof window < "u"
}

function bt(e) {
    return xc(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function ee(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function xe(e) {
    var t;
    return (t = (xc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function xc(e) {
    return rr() ? e instanceof Node || e instanceof ee(e).Node : !1
}

function le(e) {
    return rr() ? e instanceof Element || e instanceof ee(e).Element : !1
}

function ve(e) {
    return rr() ? e instanceof HTMLElement || e instanceof ee(e).HTMLElement : !1
}

function ni(e) {
    return !rr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ee(e).ShadowRoot
}

function an(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = ue(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function hh(e) {
    return ["table", "td", "th"].includes(bt(e))
}

function or(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function Ho(e) {
    const t = zo(),
        n = le(e) ? ue(e) : e;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function ph(e) {
    let t = Ne(e);
    for (; ve(t) && !ht(t);) {
        if (Ho(t)) return t;
        if (or(t)) return null;
        t = Ne(t)
    }
    return null
}

function zo() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function ht(e) {
    return ["html", "body", "#document"].includes(bt(e))
}

function ue(e) {
    return ee(e).getComputedStyle(e)
}

function sr(e) {
    return le(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Ne(e) {
    if (bt(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || ni(e) && e.host || xe(e);
    return ni(t) ? t.host : t
}

function wc(e) {
    const t = Ne(e);
    return ht(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ve(t) && an(t) ? t : wc(t)
}

function zt(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = wc(e),
        s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        i = ee(o);
    if (s) {
        const a = io(i);
        return t.concat(i, i.visualViewport || [], an(o) ? o : [], a && n ? zt(a) : [])
    }
    return t.concat(o, zt(o, [], n))
}

function io(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function bc(e) {
    const t = ue(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = ve(e),
        s = o ? e.offsetWidth : n,
        i = o ? e.offsetHeight : r,
        a = _n(n) !== s || _n(r) !== i;
    return a && (n = s, r = i), {
        width: n,
        height: r,
        $: a
    }
}

function Go(e) {
    return le(e) ? e : e.contextElement
}

function lt(e) {
    const t = Go(e);
    if (!ve(t)) return he(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: s
        } = bc(t);
    let i = (s ? _n(n.width) : n.width) / r,
        a = (s ? _n(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: i,
        y: a
    }
}
const mh = he(0);

function Sc(e) {
    const t = ee(e);
    return !zo() || !t.visualViewport ? mh : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function gh(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== ee(e) ? !1 : t
}

function Ze(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        s = Go(e);
    let i = he(1);
    t && (r ? le(r) && (i = lt(r)) : i = lt(e));
    const a = gh(s, n, r) ? Sc(s) : he(0);
    let c = (o.left + a.x) / i.x,
        u = (o.top + a.y) / i.y,
        d = o.width / i.x,
        f = o.height / i.y;
    if (s) {
        const h = ee(s),
            p = r && le(r) ? ee(r) : r;
        let g = h,
            m = io(g);
        for (; m && r && p !== g;) {
            const x = lt(m),
                v = m.getBoundingClientRect(),
                b = ue(m),
                w = v.left + (m.clientLeft + parseFloat(b.paddingLeft)) * x.x,
                C = v.top + (m.clientTop + parseFloat(b.paddingTop)) * x.y;
            c *= x.x, u *= x.y, d *= x.x, f *= x.y, c += w, u += C, g = ee(m), m = io(g)
        }
    }
    return Un({
        width: d,
        height: f,
        x: c,
        y: u
    })
}

function Ko(e, t) {
    const n = sr(e).scrollLeft;
    return t ? t.left + n : Ze(xe(e)).left + n
}

function Cc(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : Ko(e, r)),
        s = r.top + t.scrollTop;
    return {
        x: o,
        y: s
    }
}

function yh(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const s = o === "fixed",
        i = xe(r),
        a = t ? or(t.floating) : !1;
    if (r === i || a && s) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = he(1);
    const d = he(0),
        f = ve(r);
    if ((f || !f && !s) && ((bt(r) !== "body" || an(i)) && (c = sr(r)), ve(r))) {
        const p = Ze(r);
        u = lt(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop
    }
    const h = i && !f && !s ? Cc(i, c, !0) : he(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + d.x + h.x,
        y: n.y * u.y - c.scrollTop * u.y + d.y + h.y
    }
}

function vh(e) {
    return Array.from(e.getClientRects())
}

function xh(e) {
    const t = xe(e),
        n = sr(e),
        r = e.ownerDocument.body,
        o = J(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        s = J(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Ko(e);
    const a = -n.scrollTop;
    return ue(r).direction === "rtl" && (i += J(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: s,
        x: i,
        y: a
    }
}

function wh(e, t) {
    const n = ee(e),
        r = xe(e),
        o = n.visualViewport;
    let s = r.clientWidth,
        i = r.clientHeight,
        a = 0,
        c = 0;
    if (o) {
        s = o.width, i = o.height;
        const u = zo();
        (!u || u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop)
    }
    return {
        width: s,
        height: i,
        x: a,
        y: c
    }
}

function bh(e, t) {
    const n = Ze(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        s = ve(e) ? lt(e) : he(1),
        i = e.clientWidth * s.x,
        a = e.clientHeight * s.y,
        c = o * s.x,
        u = r * s.y;
    return {
        width: i,
        height: a,
        x: c,
        y: u
    }
}

function ri(e, t, n) {
    let r;
    if (t === "viewport") r = wh(e, n);
    else if (t === "document") r = xh(xe(e));
    else if (le(t)) r = bh(t, n);
    else {
        const o = Sc(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Un(r)
}

function Pc(e, t) {
    const n = Ne(e);
    return n === t || !le(n) || ht(n) ? !1 : ue(n).position === "fixed" || Pc(n, t)
}

function Sh(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = zt(e, [], !1).filter(a => le(a) && bt(a) !== "body"),
        o = null;
    const s = ue(e).position === "fixed";
    let i = s ? Ne(e) : e;
    for (; le(i) && !ht(i);) {
        const a = ue(i),
            c = Ho(i);
        !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || an(i) && !c && Pc(e, i)) ? r = r.filter(d => d !== i) : o = a, i = Ne(i)
    }
    return t.set(e, r), r
}

function Ch(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const i = [...n === "clippingAncestors" ? or(t) ? [] : Sh(t, this._c) : [].concat(n), r],
        a = i[0],
        c = i.reduce((u, d) => {
            const f = ri(t, d, o);
            return u.top = J(f.top, u.top), u.right = ke(f.right, u.right), u.bottom = ke(f.bottom, u.bottom), u.left = J(f.left, u.left), u
        }, ri(t, a, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}

function Ph(e) {
    const {
        width: t,
        height: n
    } = bc(e);
    return {
        width: t,
        height: n
    }
}

function Eh(e, t, n) {
    const r = ve(t),
        o = xe(t),
        s = n === "fixed",
        i = Ze(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = he(0);

    function u() {
        c.x = Ko(o)
    }
    if (r || !r && !s)
        if ((bt(t) !== "body" || an(o)) && (a = sr(t)), r) {
            const p = Ze(t, !0, s, t);
            c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop
        } else o && u();
    s && !r && o && u();
    const d = o && !r && !s ? Cc(o, a) : he(0),
        f = i.left + a.scrollLeft - c.x - d.x,
        h = i.top + a.scrollTop - c.y - d.y;
    return {
        x: f,
        y: h,
        width: i.width,
        height: i.height
    }
}

function Ir(e) {
    return ue(e).position === "static"
}

function oi(e, t) {
    if (!ve(e) || ue(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return xe(e) === n && (n = n.ownerDocument.body), n
}

function Ec(e, t) {
    const n = ee(e);
    if (or(e)) return n;
    if (!ve(e)) {
        let o = Ne(e);
        for (; o && !ht(o);) {
            if (le(o) && !Ir(o)) return o;
            o = Ne(o)
        }
        return n
    }
    let r = oi(e, t);
    for (; r && hh(r) && Ir(r);) r = oi(r, t);
    return r && ht(r) && Ir(r) && !Ho(r) ? n : r || ph(e) || n
}
const Th = async function(e) {
    const t = this.getOffsetParent || Ec,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: Eh(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function Rh(e) {
    return ue(e).direction === "rtl"
}
const Ah = {
    convertOffsetParentRelativeRectToViewportRelativeRect: yh,
    getDocumentElement: xe,
    getClippingRect: Ch,
    getOffsetParent: Ec,
    getElementRects: Th,
    getClientRects: vh,
    getDimensions: Ph,
    getScale: lt,
    isElement: le,
    isRTL: Rh
};

function Tc(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function Mh(e, t) {
    let n = null,
        r;
    const o = xe(e);

    function s() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function i(a, c) {
        a === void 0 && (a = !1), c === void 0 && (c = 1), s();
        const u = e.getBoundingClientRect(),
            {
                left: d,
                top: f,
                width: h,
                height: p
            } = u;
        if (a || t(), !h || !p) return;
        const g = xn(f),
            m = xn(o.clientWidth - (d + h)),
            x = xn(o.clientHeight - (f + p)),
            v = xn(d),
            w = {
                rootMargin: -g + "px " + -m + "px " + -x + "px " + -v + "px",
                threshold: J(0, ke(1, c)) || 1
            };
        let C = !0;

        function S(E) {
            const P = E[0].intersectionRatio;
            if (P !== c) {
                if (!C) return i();
                P ? i(!1, P) : r = setTimeout(() => {
                    i(!1, 1e-7)
                }, 1e3)
            }
            P === 1 && !Tc(u, e.getBoundingClientRect()) && i(), C = !1
        }
        try {
            n = new IntersectionObserver(S, {
                ...w,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(S, w)
        }
        n.observe(e)
    }
    return i(!0), s
}

function Rc(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: s = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: c = !1
    } = r, u = Go(e), d = o || s ? [...u ? zt(u) : [], ...zt(t)] : [];
    d.forEach(v => {
        o && v.addEventListener("scroll", n, {
            passive: !0
        }), s && v.addEventListener("resize", n)
    });
    const f = u && a ? Mh(u, n) : null;
    let h = -1,
        p = null;
    i && (p = new ResizeObserver(v => {
        let [b] = v;
        b && b.target === u && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
            var w;
            (w = p) == null || w.observe(t)
        })), n()
    }), u && !c && p.observe(u), p.observe(t));
    let g, m = c ? Ze(e) : null;
    c && x();

    function x() {
        const v = Ze(e);
        m && !Tc(m, v) && n(), m = v, g = requestAnimationFrame(x)
    }
    return n(), () => {
        var v;
        d.forEach(b => {
            o && b.removeEventListener("scroll", n), s && b.removeEventListener("resize", n)
        }), f == null || f(), (v = p) == null || v.disconnect(), p = null, c && cancelAnimationFrame(g)
    }
}
const Lh = lh,
    Dh = uh,
    Ih = ih,
    Oh = fh,
    Vh = ah,
    si = sh,
    kh = dh,
    Nh = (e, t, n) => {
        const r = new Map,
            o = {
                platform: Ah,
                ...n
            },
            s = {
                ...o.platform,
                _c: r
            };
        return oh(e, t, {
            ...o,
            platform: s
        })
    };
var On = typeof document < "u" ? l.useLayoutEffect : l.useEffect;

function Hn(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Hn(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Hn(e[s], t[s])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Ac(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function ii(e, t) {
    const n = Ac(e);
    return Math.round(t * n) / n
}

function Or(e) {
    const t = l.useRef(e);
    return On(() => {
        t.current = e
    }), t
}

function Mc(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: s,
            floating: i
        } = {},
        transform: a = !0,
        whileElementsMounted: c,
        open: u
    } = e, [d, f] = l.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [h, p] = l.useState(r);
    Hn(h, r) || p(r);
    const [g, m] = l.useState(null), [x, v] = l.useState(null), b = l.useCallback(O => {
        O !== E.current && (E.current = O, m(O))
    }, []), w = l.useCallback(O => {
        O !== P.current && (P.current = O, v(O))
    }, []), C = s || g, S = i || x, E = l.useRef(null), P = l.useRef(null), T = l.useRef(d), M = c != null, V = Or(c), L = Or(o), I = Or(u), A = l.useCallback(() => {
        if (!E.current || !P.current) return;
        const O = {
            placement: t,
            strategy: n,
            middleware: h
        };
        L.current && (O.platform = L.current), Nh(E.current, P.current, O).then(B => {
            const W = {
                ...B,
                isPositioned: I.current !== !1
            };
            N.current && !Hn(T.current, W) && (T.current = W, nr.flushSync(() => {
                f(W)
            }))
        })
    }, [h, t, n, L, I]);
    On(() => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1, f(O => ({
            ...O,
            isPositioned: !1
        })))
    }, [u]);
    const N = l.useRef(!1);
    On(() => (N.current = !0, () => {
        N.current = !1
    }), []), On(() => {
        if (C && (E.current = C), S && (P.current = S), C && S) {
            if (V.current) return V.current(C, S, A);
            A()
        }
    }, [C, S, A, V, M]);
    const k = l.useMemo(() => ({
            reference: E,
            floating: P,
            setReference: b,
            setFloating: w
        }), [b, w]),
        $ = l.useMemo(() => ({
            reference: C,
            floating: S
        }), [C, S]),
        j = l.useMemo(() => {
            const O = {
                position: n,
                left: 0,
                top: 0
            };
            if (!$.floating) return O;
            const B = ii($.floating, d.x),
                W = ii($.floating, d.y);
            return a ? {
                ...O,
                transform: "translate(" + B + "px, " + W + "px)",
                ...Ac($.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: B,
                top: W
            }
        }, [n, a, $.floating, d.x, d.y]);
    return l.useMemo(() => ({
        ...d,
        update: A,
        refs: k,
        elements: $,
        floatingStyles: j
    }), [d, A, k, $, j])
}
const jh = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? si({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? si({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    Lc = (e, t) => ({
        ...Lh(e),
        options: [e, t]
    }),
    Dc = (e, t) => ({
        ...Dh(e),
        options: [e, t]
    }),
    Ic = (e, t) => ({
        ...kh(e),
        options: [e, t]
    }),
    Oc = (e, t) => ({
        ...Ih(e),
        options: [e, t]
    }),
    Vc = (e, t) => ({
        ...Oh(e),
        options: [e, t]
    }),
    kc = (e, t) => ({
        ...Vh(e),
        options: [e, t]
    }),
    Nc = (e, t) => ({
        ...jh(e),
        options: [e, t]
    });
var $h = "Arrow",
    jc = l.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...s
        } = e;
        return y.jsx(Je.svg, {
            ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : y.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
jc.displayName = $h;
var Bh = jc,
    Gt = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {};

function Fh(e) {
    const [t, n] = l.useState(void 0);
    return Gt(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize" in s) {
                    const c = s.borderBoxSize,
                        u = Array.isArray(c) ? c[0] : c;
                    i = u.inlineSize, a = u.blockSize
                } else i = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Yo = "Popper",
    [$c, Bc] = uc(Yo),
    [_h, Fc] = $c(Yo),
    _c = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, o] = l.useState(null);
        return y.jsx(_h, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
        })
    };
_c.displayName = Yo;
var Wc = "PopperAnchor",
    Uc = l.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, s = Fc(Wc, n), i = l.useRef(null), a = xt(t, i);
        return l.useEffect(() => {
            s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
        }), r ? null : y.jsx(Je.div, {
            ...o,
            ref: a
        })
    });
Uc.displayName = Wc;
var Zo = "PopperContent",
    [Wh, Uh] = $c(Zo),
    Hc = l.forwardRef((e, t) => {
        var Et, Tt, Rt, At, Mt, Lt;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: i = 0,
            arrowPadding: a = 0,
            avoidCollisions: c = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: g,
            ...m
        } = e, x = Fc(Zo, n), [v, b] = l.useState(null), w = xt(t, ie => b(ie)), [C, S] = l.useState(null), E = Fh(C), P = (E == null ? void 0 : E.width) ?? 0, T = (E == null ? void 0 : E.height) ?? 0, M = r + (s !== "center" ? "-" + s : ""), V = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, L = Array.isArray(u) ? u : [u], I = L.length > 0, A = {
            padding: V,
            boundary: L.filter(zh),
            altBoundary: I
        }, {
            refs: N,
            floatingStyles: k,
            placement: $,
            isPositioned: j,
            middlewareData: O
        } = Mc({
            strategy: "fixed",
            placement: M,
            whileElementsMounted: (...ie) => Rc(...ie, {
                animationFrame: p === "always"
            }),
            elements: {
                reference: x.anchor
            },
            middleware: [Lc({
                mainAxis: o + T,
                alignmentAxis: i
            }), c && Dc({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? Ic() : void 0,
                ...A
            }), c && Oc({
                ...A
            }), Vc({
                ...A,
                apply: ({
                    elements: ie,
                    rects: Dt,
                    availableWidth: Ar,
                    availableHeight: Mr
                }) => {
                    const {
                        width: Lr,
                        height: Dr
                    } = Dt.reference, we = ie.floating.style;
                    we.setProperty("--radix-popper-available-width", `${Ar}px`), we.setProperty("--radix-popper-available-height", `${Mr}px`), we.setProperty("--radix-popper-anchor-width", `${Lr}px`), we.setProperty("--radix-popper-anchor-height", `${Dr}px`)
                }
            }), C && Nc({
                element: C,
                padding: a
            }), Gh({
                arrowWidth: P,
                arrowHeight: T
            }), h && kc({
                strategy: "referenceHidden",
                ...A
            })]
        }), [B, W] = Kc($), se = Fo(g);
        Gt(() => {
            j && (se == null || se())
        }, [j, se]);
        const Cr = (Et = O.arrow) == null ? void 0 : Et.x,
            Pr = (Tt = O.arrow) == null ? void 0 : Tt.y,
            Er = ((Rt = O.arrow) == null ? void 0 : Rt.centerOffset) !== 0,
            [Tr, Rr] = l.useState();
        return Gt(() => {
            v && Rr(window.getComputedStyle(v).zIndex)
        }, [v]), y.jsx("div", {
            ref: N.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...k,
                transform: j ? k.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Tr,
                "--radix-popper-transform-origin": [(At = O.transformOrigin) == null ? void 0 : At.x, (Mt = O.transformOrigin) == null ? void 0 : Mt.y].join(" "),
                ...((Lt = O.hide) == null ? void 0 : Lt.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: y.jsx(Wh, {
                scope: n,
                placedSide: B,
                onArrowChange: S,
                arrowX: Cr,
                arrowY: Pr,
                shouldHideArrow: Er,
                children: y.jsx(Je.div, {
                    "data-side": B,
                    "data-align": W,
                    ...m,
                    ref: w,
                    style: {
                        ...m.style,
                        animation: j ? void 0 : "none"
                    }
                })
            })
        })
    });
Hc.displayName = Zo;
var zc = "PopperArrow",
    Hh = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Gc = l.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, s = Uh(zc, r), i = Hh[s.placedSide];
        return y.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [i]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0
            },
            children: y.jsx(Bh, {
                ...o,
                ref: n,
                style: {
                    ...o.style,
                    display: "block"
                }
            })
        })
    });
Gc.displayName = zc;

function zh(e) {
    return e !== null
}
var Gh = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, v, b;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, d] = Kc(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [d], h = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
        let g = "",
            m = "";
        return u === "bottom" ? (g = i ? f : `${h}px`, m = `${-c}px`) : u === "top" ? (g = i ? f : `${h}px`, m = `${r.floating.height+c}px`) : u === "right" ? (g = `${-c}px`, m = i ? f : `${p}px`) : u === "left" && (g = `${r.floating.width+c}px`, m = i ? f : `${p}px`), {
            data: {
                x: g,
                y: m
            }
        }
    }
});

function Kc(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var Kh = _c,
    Yh = Uc,
    Zh = Hc,
    Xh = Gc,
    qh = "Portal",
    Yc = l.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, s] = l.useState(!1);
        Gt(() => s(!0), []);
        const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return i ? dc.createPortal(y.jsx(Je.div, {
            ...r,
            ref: t
        }), i) : null
    });
Yc.displayName = qh;

function ai(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Qh(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = ai(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : ai(e[o], null)
            }
        }
    }
}

function Jh(...e) {
    return l.useCallback(Qh(...e), e)
}
var ci = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {};

function ep(e, t) {
    return l.useReducer((n, r) => t[n][r] ?? n, e)
}
var cn = e => {
    const {
        present: t,
        children: n
    } = e, r = tp(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : l.Children.only(n), s = Jh(r.ref, np(o));
    return typeof n == "function" || r.isPresent ? l.cloneElement(o, {
        ref: s
    }) : null
};
cn.displayName = "Presence";

function tp(e) {
    const [t, n] = l.useState(), r = l.useRef(null), o = l.useRef(e), s = l.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = ep(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return l.useEffect(() => {
        const u = wn(r.current);
        s.current = a === "mounted" ? u : "none"
    }, [a]), ci(() => {
        const u = r.current,
            d = o.current;
        if (d !== e) {
            const h = s.current,
                p = wn(u);
            e ? c("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, c]), ci(() => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window,
                f = p => {
                    const m = wn(r.current).includes(p.animationName);
                    if (p.target === t && m && (c("ANIMATION_END"), !o.current)) {
                        const x = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                        })
                    }
                },
                h = p => {
                    p.target === t && (s.current = wn(r.current))
                };
            return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
                d.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f)
            }
        } else c("ANIMATION_END")
    }, [t, c]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: l.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function wn(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function np(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var rp = jo[" useInsertionEffect ".trim().toString()] || Gt;

function op({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, s, i] = sp({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, c = a ? e : o;
    {
        const d = l.useRef(e !== void 0);
        l.useEffect(() => {
            const f = d.current;
            f !== a && console.warn(`${r} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = a
        }, [a, r])
    }
    const u = l.useCallback(d => {
        var f;
        if (a) {
            const h = ip(d) ? d(e) : d;
            h !== e && ((f = i.current) == null || f.call(i, h))
        } else s(d)
    }, [a, e, s, i]);
    return [c, u]
}

function sp({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = l.useState(e), o = l.useRef(n), s = l.useRef(t);
    return rp(() => {
        s.current = t
    }, [t]), l.useEffect(() => {
        var i;
        o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n)
    }, [n, o]), [n, r, s]
}

function ip(e) {
    return typeof e == "function"
}

function li(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function ap(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = li(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : li(e[o], null)
            }
        }
    }
}

function cp(e) {
    const t = lp(e),
        n = l.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = l.Children.toArray(s), c = a.find(dp);
            if (c) {
                const u = c.props.children,
                    d = a.map(f => f === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : f);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null
                })
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function lp(e) {
    const t = l.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n;
        if (l.isValidElement(o)) {
            const i = hp(o),
                a = fp(s, o.props);
            return o.type !== l.Fragment && (a.ref = r ? ap(r, i) : i), l.cloneElement(o, a)
        }
        return l.Children.count(o) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var up = Symbol("radix.slottable");

function dp(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === up
}

function fp(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const c = s(...a);
            return o(...a), c
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function hp(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var pp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    mp = pp.reduce((e, t) => {
        const n = cp(`Primitive.${t}`),
            r = l.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, c = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(c, {
                    ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        }
    }, {}),
    gp = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    yp = "VisuallyHidden",
    Zc = l.forwardRef((e, t) => y.jsx(mp.span, {
        ...e,
        ref: t,
        style: {
            ...gp,
            ...e.style
        }
    }));
Zc.displayName = yp;
var vp = Zc,
    [ir, wS] = uc("Tooltip", [Bc]),
    ar = Bc(),
    Xc = "TooltipProvider",
    xp = 700,
    ao = "tooltip.open",
    [wp, Xo] = ir(Xc),
    qc = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = xp,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: s
        } = e, i = l.useRef(!0), a = l.useRef(!1), c = l.useRef(0);
        return l.useEffect(() => {
            const u = c.current;
            return () => window.clearTimeout(u)
        }, []), y.jsx(wp, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: n,
            onOpen: l.useCallback(() => {
                window.clearTimeout(c.current), i.current = !1
            }, []),
            onClose: l.useCallback(() => {
                window.clearTimeout(c.current), c.current = window.setTimeout(() => i.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: l.useCallback(u => {
                a.current = u
            }, []),
            disableHoverableContent: o,
            children: s
        })
    };
qc.displayName = Xc;
var Kt = "Tooltip",
    [bp, ln] = ir(Kt),
    Qc = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: s,
            disableHoverableContent: i,
            delayDuration: a
        } = e, c = Xo(Kt, e.__scopeTooltip), u = ar(t), [d, f] = l.useState(null), h = yc(), p = l.useRef(0), g = i ?? c.disableHoverableContent, m = a ?? c.delayDuration, x = l.useRef(!1), [v, b] = op({
            prop: r,
            defaultProp: o ?? !1,
            onChange: P => {
                P ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ao))) : c.onClose(), s == null || s(P)
            },
            caller: Kt
        }), w = l.useMemo(() => v ? x.current ? "delayed-open" : "instant-open" : "closed", [v]), C = l.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, x.current = !1, b(!0)
        }, [b]), S = l.useCallback(() => {
            window.clearTimeout(p.current), p.current = 0, b(!1)
        }, [b]), E = l.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
                x.current = !0, b(!0), p.current = 0
            }, m)
        }, [m, b]);
        return l.useEffect(() => () => {
            p.current && (window.clearTimeout(p.current), p.current = 0)
        }, []), y.jsx(Kh, {
            ...u,
            children: y.jsx(bp, {
                scope: t,
                contentId: h,
                open: v,
                stateAttribute: w,
                trigger: d,
                onTriggerChange: f,
                onTriggerEnter: l.useCallback(() => {
                    c.isOpenDelayedRef.current ? E() : C()
                }, [c.isOpenDelayedRef, E, C]),
                onTriggerLeave: l.useCallback(() => {
                    g ? S() : (window.clearTimeout(p.current), p.current = 0)
                }, [S, g]),
                onOpen: C,
                onClose: S,
                disableHoverableContent: g,
                children: n
            })
        })
    };
Qc.displayName = Kt;
var co = "TooltipTrigger",
    Jc = l.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ln(co, n), s = Xo(co, n), i = ar(n), a = l.useRef(null), c = xt(t, a, o.onTriggerChange), u = l.useRef(!1), d = l.useRef(!1), f = l.useCallback(() => u.current = !1, []);
        return l.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), y.jsx(Yh, {
            asChild: !0,
            ...i,
            children: y.jsx(Je.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: c,
                onPointerMove: be(e.onPointerMove, h => {
                    h.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0)
                }),
                onPointerLeave: be(e.onPointerLeave, () => {
                    o.onTriggerLeave(), d.current = !1
                }),
                onPointerDown: be(e.onPointerDown, () => {
                    o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, {
                        once: !0
                    })
                }),
                onFocus: be(e.onFocus, () => {
                    u.current || o.onOpen()
                }),
                onBlur: be(e.onBlur, o.onClose),
                onClick: be(e.onClick, o.onClose)
            })
        })
    });
Jc.displayName = co;
var qo = "TooltipPortal",
    [Sp, Cp] = ir(qo, {
        forceMount: void 0
    }),
    el = e => {
        const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
        } = e, s = ln(qo, t);
        return y.jsx(Sp, {
            scope: t,
            forceMount: n,
            children: y.jsx(cn, {
                present: n || s.open,
                children: y.jsx(Yc, {
                    asChild: !0,
                    container: o,
                    children: r
                })
            })
        })
    };
el.displayName = qo;
var pt = "TooltipContent",
    tl = l.forwardRef((e, t) => {
        const n = Cp(pt, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...s
            } = e,
            i = ln(pt, e.__scopeTooltip);
        return y.jsx(cn, {
            present: r || i.open,
            children: i.disableHoverableContent ? y.jsx(nl, {
                side: o,
                ...s,
                ref: t
            }) : y.jsx(Pp, {
                side: o,
                ...s,
                ref: t
            })
        })
    }),
    Pp = l.forwardRef((e, t) => {
        const n = ln(pt, e.__scopeTooltip),
            r = Xo(pt, e.__scopeTooltip),
            o = l.useRef(null),
            s = xt(t, o),
            [i, a] = l.useState(null),
            {
                trigger: c,
                onClose: u
            } = n,
            d = o.current,
            {
                onPointerInTransitChange: f
            } = r,
            h = l.useCallback(() => {
                a(null), f(!1)
            }, [f]),
            p = l.useCallback((g, m) => {
                const x = g.currentTarget,
                    v = {
                        x: g.clientX,
                        y: g.clientY
                    },
                    b = Mp(v, x.getBoundingClientRect()),
                    w = Lp(v, b),
                    C = Dp(m.getBoundingClientRect()),
                    S = Op([...w, ...C]);
                a(S), f(!0)
            }, [f]);
        return l.useEffect(() => () => h(), [h]), l.useEffect(() => {
            if (c && d) {
                const g = x => p(x, d),
                    m = x => p(x, c);
                return c.addEventListener("pointerleave", g), d.addEventListener("pointerleave", m), () => {
                    c.removeEventListener("pointerleave", g), d.removeEventListener("pointerleave", m)
                }
            }
        }, [c, d, p, h]), l.useEffect(() => {
            if (i) {
                const g = m => {
                    const x = m.target,
                        v = {
                            x: m.clientX,
                            y: m.clientY
                        },
                        b = (c == null ? void 0 : c.contains(x)) || (d == null ? void 0 : d.contains(x)),
                        w = !Ip(v, i);
                    b ? h() : w && (h(), u())
                };
                return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g)
            }
        }, [c, d, i, u, h]), y.jsx(nl, {
            ...e,
            ref: s
        })
    }),
    [Ep, Tp] = ir(Kt, {
        isInside: !1
    }),
    Rp = Of("TooltipContent"),
    nl = l.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            ...a
        } = e, c = ln(pt, n), u = ar(n), {
            onClose: d
        } = c;
        return l.useEffect(() => (document.addEventListener(ao, d), () => document.removeEventListener(ao, d)), [d]), l.useEffect(() => {
            if (c.trigger) {
                const f = h => {
                    const p = h.target;
                    p != null && p.contains(c.trigger) && d()
                };
                return window.addEventListener("scroll", f, {
                    capture: !0
                }), () => window.removeEventListener("scroll", f, {
                    capture: !0
                })
            }
        }, [c.trigger, d]), y.jsx(mc, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: f => f.preventDefault(),
            onDismiss: d,
            children: y.jsxs(Zh, {
                "data-state": c.stateAttribute,
                ...u,
                ...a,
                ref: t,
                style: {
                    ...a.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [y.jsx(Rp, {
                    children: r
                }), y.jsx(Ep, {
                    scope: n,
                    isInside: !0,
                    children: y.jsx(vp, {
                        id: c.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
tl.displayName = pt;
var rl = "TooltipArrow",
    Ap = l.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ar(n);
        return Tp(rl, n).isInside ? null : y.jsx(Xh, {
            ...o,
            ...r,
            ref: t
        })
    });
Ap.displayName = rl;

function Mp(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
        case s:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function Lp(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function Dp(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function Ip(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
        const a = t[s],
            c = t[i],
            u = a.x,
            d = a.y,
            f = c.x,
            h = c.y;
        d > r != h > r && n < (f - u) * (r - d) / (h - d) + u && (o = !o)
    }
    return o
}

function Op(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Vp(t)
}

function Vp(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const s = t[t.length - 1],
                i = t[t.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const s = n[n.length - 1],
                i = n[n.length - 2];
            if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var kp = qc,
    Np = Qc,
    jp = Jc,
    $p = el,
    Bp = tl;
const Yt = l.createContext({});

function Qo(e) {
    const t = l.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const Jo = typeof window < "u",
    es = Jo ? l.useLayoutEffect : l.useEffect,
    cr = l.createContext(null),
    ts = l.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
class Fp extends l.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent,
                o = r instanceof HTMLElement && r.offsetWidth || 0,
                s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = o - s.width - s.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function _p({
    children: e,
    isPresent: t,
    anchorX: n
}) {
    const r = l.useId(),
        o = l.useRef(null),
        s = l.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: i
        } = l.useContext(ts);
    return l.useInsertionEffect(() => {
        const {
            width: a,
            height: c,
            top: u,
            left: d,
            right: f
        } = s.current;
        if (t || !o.current || !a || !c) return;
        const h = n === "left" ? `left: ${d}` : `right: ${f}`;
        o.current.dataset.motionPopId = r;
        const p = document.createElement("style");
        return i && (p.nonce = i), document.head.appendChild(p), p.sheet && p.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${c}px !important;
            ${h}px !important;
            top: ${u}px !important;
          }
        `), () => {
            document.head.removeChild(p)
        }
    }, [t]), y.jsx(Fp, {
        isPresent: t,
        childRef: o,
        sizeRef: s,
        children: l.cloneElement(e, {
            ref: o
        })
    })
}
const Wp = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: o,
    presenceAffectsLayout: s,
    mode: i,
    anchorX: a
}) => {
    const c = Qo(Up),
        u = l.useId(),
        d = l.useCallback(h => {
            c.set(h, !0);
            for (const p of c.values())
                if (!p) return;
            r && r()
        }, [c, r]),
        f = l.useMemo(() => ({
            id: u,
            initial: t,
            isPresent: n,
            custom: o,
            onExitComplete: d,
            register: h => (c.set(h, !1), () => c.delete(h))
        }), s ? [Math.random(), d] : [n, d]);
    return l.useMemo(() => {
        c.forEach((h, p) => c.set(p, !1))
    }, [n]), l.useEffect(() => {
        !n && !c.size && r && r()
    }, [n]), i === "popLayout" && (e = y.jsx(_p, {
        isPresent: n,
        anchorX: a,
        children: e
    })), y.jsx(cr.Provider, {
        value: f,
        children: e
    })
};

function Up() {
    return new Map
}

function ol(e = !0) {
    const t = l.useContext(cr);
    if (t === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: r,
        register: o
    } = t, s = l.useId();
    l.useEffect(() => {
        if (e) return o(s)
    }, [e]);
    const i = l.useCallback(() => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, i] : [!0]
}
const bn = e => e.key || "";

function ui(e) {
    const t = [];
    return l.Children.forEach(e, n => {
        l.isValidElement(n) && t.push(n)
    }), t
}
const je = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        presenceAffectsLayout: o = !0,
        mode: s = "sync",
        propagate: i = !1,
        anchorX: a = "left"
    }) => {
        const [c, u] = ol(i), d = l.useMemo(() => ui(e), [e]), f = i && !c ? [] : d.map(bn), h = l.useRef(!0), p = l.useRef(d), g = Qo(() => new Map), [m, x] = l.useState(d), [v, b] = l.useState(d);
        es(() => {
            h.current = !1, p.current = d;
            for (let S = 0; S < v.length; S++) {
                const E = bn(v[S]);
                f.includes(E) ? g.delete(E) : g.get(E) !== !0 && g.set(E, !1)
            }
        }, [v, f.length, f.join("-")]);
        const w = [];
        if (d !== m) {
            let S = [...d];
            for (let E = 0; E < v.length; E++) {
                const P = v[E],
                    T = bn(P);
                f.includes(T) || (S.splice(E, 0, P), w.push(P))
            }
            return s === "wait" && w.length && (S = w), b(ui(S)), x(d), null
        }
        const {
            forceRender: C
        } = l.useContext(Yt);
        return y.jsx(y.Fragment, {
            children: v.map(S => {
                const E = bn(S),
                    P = i && !c ? !1 : d === v || f.includes(E),
                    T = () => {
                        if (g.has(E)) g.set(E, !0);
                        else return;
                        let M = !0;
                        g.forEach(V => {
                            V || (M = !1)
                        }), M && (C == null || C(), b(p.current), i && (u == null || u()), r && r())
                    };
                return y.jsx(Wp, {
                    isPresent: P,
                    initial: !h.current || n ? void 0 : !1,
                    custom: t,
                    presenceAffectsLayout: o,
                    mode: s,
                    onExitComplete: P ? void 0 : T,
                    anchorX: a,
                    children: S
                }, E)
            })
        })
    },
    Hp = l.createContext(null);
let sl = () => {};
const oe = e => e,
    zp = {
        useManualTiming: !1
    },
    Sn = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"];

function Gp(e, t) {
    let n = new Set,
        r = new Set,
        o = !1,
        s = !1;
    const i = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function c(d) {
        i.has(d) && (u.schedule(d), e()), d(a)
    }
    const u = {
        schedule: (d, f = !1, h = !1) => {
            const g = h && o ? n : r;
            return f && i.add(d), g.has(d) || g.add(d), d
        },
        cancel: d => {
            r.delete(d), i.delete(d)
        },
        process: d => {
            if (a = d, o) {
                s = !0;
                return
            }
            o = !0, [n, r] = [r, n], n.forEach(c), n.clear(), o = !1, s && (s = !1, u.process(d))
        }
    };
    return u
}
const Kp = 40;

function il(e, t) {
    let n = !1,
        r = !0;
    const o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        s = () => n = !0,
        i = Sn.reduce((v, b) => (v[b] = Gp(s), v), {}),
        {
            read: a,
            resolveKeyframes: c,
            update: u,
            preRender: d,
            render: f,
            postRender: h
        } = i,
        p = () => {
            const v = performance.now();
            n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(v - o.timestamp, Kp), 1), o.timestamp = v, o.isProcessing = !0, a.process(o), c.process(o), u.process(o), d.process(o), f.process(o), h.process(o), o.isProcessing = !1, n && t && (r = !1, e(p))
        },
        g = () => {
            n = !0, r = !0, o.isProcessing || e(p)
        };
    return {
        schedule: Sn.reduce((v, b) => {
            const w = i[b];
            return v[b] = (C, S = !1, E = !1) => (n || g(), w.schedule(C, S, E)), v
        }, {}),
        cancel: v => {
            for (let b = 0; b < Sn.length; b++) i[Sn[b]].cancel(v)
        },
        state: o,
        steps: i
    }
}
const {
    schedule: F,
    cancel: $e,
    state: G,
    steps: Vr
} = il(typeof requestAnimationFrame < "u" ? requestAnimationFrame : oe, !0);

function Yp() {
    const e = l.useRef(!1);
    return es(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Zp() {
    const e = Yp(),
        [t, n] = l.useState(0),
        r = l.useCallback(() => {
            e.current && n(t + 1)
        }, [t]);
    return [l.useCallback(() => F.postRender(r), [r]), t]
}
const Xp = e => !e.isLayoutDirty && e.willUpdate(!1);

function di() {
    const e = new Set,
        t = new WeakMap,
        n = () => e.forEach(Xp);
    return {
        add: r => {
            e.add(r), t.set(r, r.addEventListener("willUpdate", n))
        },
        remove: r => {
            e.delete(r);
            const o = t.get(r);
            o && (o(), t.delete(r)), n()
        },
        dirty: n
    }
}
const al = e => e === !0,
    qp = e => al(e === !0) || e === "id",
    Qp = ({
        children: e,
        id: t,
        inherit: n = !0
    }) => {
        const r = l.useContext(Yt),
            o = l.useContext(Hp),
            [s, i] = Zp(),
            a = l.useRef(null),
            c = r.id || o;
        a.current === null && (qp(n) && c && (t = t ? c + "-" + t : c), a.current = {
            id: t,
            group: al(n) && r.group || di()
        });
        const u = l.useMemo(() => ({
            ...a.current,
            forceRender: s
        }), [i]);
        return y.jsx(Yt.Provider, {
            value: u,
            children: e
        })
    },
    cl = l.createContext({
        strict: !1
    }),
    fi = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    mt = {};
for (const e in fi) mt[e] = {
    isEnabled: t => fi[e].some(n => !!t[n])
};

function Jp(e) {
    for (const t in e) mt[t] = {
        ...mt[t],
        ...e[t]
    }
}
const em = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function zn(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || em.has(e)
}
let ll = e => !zn(e);

function tm(e) {
    e && (ll = t => t.startsWith("on") ? !zn(t) : e(t))
}
try {
    tm(require("@emotion/is-prop-valid").default)
} catch {}

function nm(e, t, n) {
    const r = {};
    for (const o in e) o === "values" && typeof e.values == "object" || (ll(o) || n === !0 && zn(o) || !t && !zn(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}

function rm(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
    })
}
const lr = l.createContext({});

function ur(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function Zt(e) {
    return typeof e == "string" || Array.isArray(e)
}
const ns = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    rs = ["initial", ...ns];

function dr(e) {
    return ur(e.animate) || rs.some(t => Zt(e[t]))
}

function ul(e) {
    return !!(dr(e) || e.variants)
}

function om(e, t) {
    if (dr(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || Zt(n) ? n : void 0,
            animate: Zt(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function sm(e) {
    const {
        initial: t,
        animate: n
    } = om(e, l.useContext(lr));
    return l.useMemo(() => ({
        initial: t,
        animate: n
    }), [hi(t), hi(n)])
}

function hi(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const im = Symbol.for("motionComponentSymbol");

function ot(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function am(e, t, n) {
    return l.useCallback(r => {
        r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : ot(n) && (n.current = r))
    }, [t])
}
const {
    schedule: os
} = il(queueMicrotask, !1), ss = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), cm = "framerAppearId", dl = "data-" + ss(cm), fl = l.createContext({});

function lm(e, t, n, r, o) {
    var m, x;
    const {
        visualElement: s
    } = l.useContext(lr), i = l.useContext(cl), a = l.useContext(cr), c = l.useContext(ts).reducedMotion, u = l.useRef(null);
    r = r || i.renderer, !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const d = u.current,
        f = l.useContext(fl);
    d && !d.projection && o && (d.type === "html" || d.type === "svg") && um(u.current, n, o, f);
    const h = l.useRef(!1);
    l.useInsertionEffect(() => {
        d && h.current && d.update(n, a)
    });
    const p = n[dl],
        g = l.useRef(!!p && !((m = window.MotionHandoffIsComplete) != null && m.call(window, p)) && ((x = window.MotionHasOptimisedAnimation) == null ? void 0 : x.call(window, p)));
    return es(() => {
        d && (h.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), os.render(d.render), g.current && d.animationState && d.animationState.animateChanges())
    }), l.useEffect(() => {
        d && (!g.current && d.animationState && d.animationState.animateChanges(), g.current && (queueMicrotask(() => {
            var v;
            (v = window.MotionHandoffMarkAsComplete) == null || v.call(window, p)
        }), g.current = !1))
    }), d
}

function um(e, t, n, r) {
    const {
        layoutId: o,
        layout: s,
        drag: i,
        dragConstraints: a,
        layoutScroll: c,
        layoutRoot: u
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : hl(e.parent)), e.projection.setOptions({
        layoutId: o,
        layout: s,
        alwaysMeasureLayout: !!i || a && ot(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        layoutScroll: c,
        layoutRoot: u
    })
}

function hl(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : hl(e.parent)
}

function dm({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: o
}) {
    e && Jp(e);

    function s(a, c) {
        let u;
        const d = {
                ...l.useContext(ts),
                ...a,
                layoutId: fm(a)
            },
            {
                isStatic: f
            } = d,
            h = sm(a),
            p = r(a, f);
        if (!f && Jo) {
            hm();
            const g = pm(d);
            u = g.MeasureLayout, h.visualElement = lm(o, p, d, t, g.ProjectionNode)
        }
        return y.jsxs(lr.Provider, {
            value: h,
            children: [u && h.visualElement ? y.jsx(u, {
                visualElement: h.visualElement,
                ...d
            }) : null, n(o, a, am(p, h.visualElement, c), p, f, h.visualElement)]
        })
    }
    s.displayName = `motion.${typeof o=="string"?o:`create(${o.displayName??o.name??""})`}`;
    const i = l.forwardRef(s);
    return i[im] = o, i
}

function fm({
    layoutId: e
}) {
    const t = l.useContext(Yt).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function hm(e, t) {
    l.useContext(cl).strict
}

function pm(e) {
    const {
        drag: t,
        layout: n
    } = mt;
    if (!t && !n) return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const pl = e => t => typeof t == "string" && t.startsWith(e),
    is = pl("--"),
    mm = pl("var(--"),
    as = e => mm(e) ? gm.test(e.split("/*")[0].trim()) : !1,
    gm = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Xt = {};

function ym(e) {
    for (const t in e) Xt[t] = e[t], is(t) && (Xt[t].isCSSVariable = !0)
}
const St = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    et = new Set(St);

function ml(e, {
    layout: t,
    layoutId: n
}) {
    return et.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Xt[e] || e === "opacity")
}
const Y = e => !!(e && e.getVelocity),
    gl = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    Ae = (e, t, n) => n > t ? t : n < e ? e : n,
    Ct = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    qt = {
        ...Ct,
        transform: e => Ae(0, 1, e)
    },
    Cn = {
        ...Ct,
        default: 1
    },
    un = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    De = un("deg"),
    pe = un("%"),
    D = un("px"),
    vm = un("vh"),
    xm = un("vw"),
    pi = {
        ...pe,
        parse: e => pe.parse(e) / 100,
        transform: e => pe.transform(e * 100)
    },
    wm = {
        borderWidth: D,
        borderTopWidth: D,
        borderRightWidth: D,
        borderBottomWidth: D,
        borderLeftWidth: D,
        borderRadius: D,
        radius: D,
        borderTopLeftRadius: D,
        borderTopRightRadius: D,
        borderBottomRightRadius: D,
        borderBottomLeftRadius: D,
        width: D,
        maxWidth: D,
        height: D,
        maxHeight: D,
        top: D,
        right: D,
        bottom: D,
        left: D,
        padding: D,
        paddingTop: D,
        paddingRight: D,
        paddingBottom: D,
        paddingLeft: D,
        margin: D,
        marginTop: D,
        marginRight: D,
        marginBottom: D,
        marginLeft: D,
        backgroundPositionX: D,
        backgroundPositionY: D
    },
    bm = {
        rotate: De,
        rotateX: De,
        rotateY: De,
        rotateZ: De,
        scale: Cn,
        scaleX: Cn,
        scaleY: Cn,
        scaleZ: Cn,
        skew: De,
        skewX: De,
        skewY: De,
        distance: D,
        translateX: D,
        translateY: D,
        translateZ: D,
        x: D,
        y: D,
        z: D,
        perspective: D,
        transformPerspective: D,
        opacity: qt,
        originX: pi,
        originY: pi,
        originZ: D
    },
    mi = {
        ...Ct,
        transform: Math.round
    },
    cs = {
        ...wm,
        ...bm,
        zIndex: mi,
        size: D,
        fillOpacity: qt,
        strokeOpacity: qt,
        numOctaves: mi
    },
    Sm = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Cm = St.length;

function Pm(e, t, n) {
    let r = "",
        o = !0;
    for (let s = 0; s < Cm; s++) {
        const i = St[s],
            a = e[i];
        if (a === void 0) continue;
        let c = !0;
        if (typeof a == "number" ? c = a === (i.startsWith("scale") ? 1 : 0) : c = parseFloat(a) === 0, !c || n) {
            const u = gl(a, cs[i]);
            if (!c) {
                o = !1;
                const d = Sm[i] || i;
                r += `${d}(${u}) `
            }
            n && (t[i] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r
}

function ls(e, t, n) {
    const {
        style: r,
        vars: o,
        transformOrigin: s
    } = e;
    let i = !1,
        a = !1;
    for (const c in t) {
        const u = t[c];
        if (et.has(c)) {
            i = !0;
            continue
        } else if (is(c)) {
            o[c] = u;
            continue
        } else {
            const d = gl(u, cs[c]);
            c.startsWith("origin") ? (a = !0, s[c] = d) : r[c] = d
        }
    }
    if (t.transform || (i || n ? r.transform = Pm(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: c = "50%",
            originY: u = "50%",
            originZ: d = 0
        } = s;
        r.transformOrigin = `${c} ${u} ${d}`
    }
}
const us = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function yl(e, t, n) {
    for (const r in t) !Y(t[r]) && !ml(r, n) && (e[r] = t[r])
}

function Em({
    transformTemplate: e
}, t) {
    return l.useMemo(() => {
        const n = us();
        return ls(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function Tm(e, t) {
    const n = e.style || {},
        r = {};
    return yl(r, n, e), Object.assign(r, Em(e, t)), r
}

function Rm(e, t) {
    const n = {},
        r = Tm(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const Am = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function ds(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Am.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
const Mm = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Lm = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Dm(e, t, n = 1, r = 0, o = !0) {
    e.pathLength = 1;
    const s = o ? Mm : Lm;
    e[s.offset] = D.transform(-r);
    const i = D.transform(t),
        a = D.transform(n);
    e[s.array] = `${i} ${a}`
}

function gi(e, t, n) {
    return typeof e == "string" ? e : D.transform(t + n * e)
}

function Im(e, t, n) {
    const r = gi(t, e.x, e.width),
        o = gi(n, e.y, e.height);
    return `${r} ${o}`
}

function fs(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: s,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: c = 0,
    ...u
}, d, f) {
    if (ls(e, u, f), d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: h,
        style: p,
        dimensions: g
    } = e;
    h.transform && (g && (p.transform = h.transform), delete h.transform), g && (o !== void 0 || s !== void 0 || p.transform) && (p.transformOrigin = Im(g, o !== void 0 ? o : .5, s !== void 0 ? s : .5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), i !== void 0 && Dm(h, i, a, c, !1)
}
const vl = () => ({
        ...us(),
        attrs: {}
    }),
    hs = e => typeof e == "string" && e.toLowerCase() === "svg";

function Om(e, t, n, r) {
    const o = l.useMemo(() => {
        const s = vl();
        return fs(s, t, hs(r), e.transformTemplate), {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }, [t]);
    if (e.style) {
        const s = {};
        yl(s, e.style, e), o.style = {
            ...s,
            ...o.style
        }
    }
    return o
}

function Vm(e = !1) {
    return (n, r, o, {
        latestValues: s
    }, i) => {
        const c = (ds(n) ? Om : Rm)(r, s, i, n),
            u = nm(r, typeof n == "string", e),
            d = n !== l.Fragment ? {
                ...u,
                ...c,
                ref: o
            } : {},
            {
                children: f
            } = r,
            h = l.useMemo(() => Y(f) ? f.get() : f, [f]);
        return l.createElement(n, {
            ...d,
            children: h
        })
    }
}

function yi(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function ps(e, t, n, r) {
    if (typeof t == "function") {
        const [o, s] = yi(r);
        t = t(n !== void 0 ? n : e.custom, o, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [o, s] = yi(r);
        t = t(n !== void 0 ? n : e.custom, o, s)
    }
    return t
}
const lo = e => Array.isArray(e),
    km = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    Nm = e => lo(e) ? e[e.length - 1] || 0 : e;

function Vn(e) {
    const t = Y(e) ? e.get() : e;
    return km(t) ? t.toValue() : t
}

function jm({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onUpdate: n
}, r, o, s) {
    const i = {
        latestValues: $m(r, o, s, e),
        renderState: t()
    };
    return n && (i.onMount = a => n({
        props: r,
        current: a,
        ...i
    }), i.onUpdate = a => n(a)), i
}
const xl = e => (t, n) => {
    const r = l.useContext(lr),
        o = l.useContext(cr),
        s = () => jm(e, t, r, o);
    return n ? s() : Qo(s)
};

function $m(e, t, n, r) {
    const o = {},
        s = r(e, {});
    for (const h in s) o[h] = Vn(s[h]);
    let {
        initial: i,
        animate: a
    } = e;
    const c = dr(e),
        u = ul(e);
    t && u && !c && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || i === !1;
    const f = d ? a : i;
    if (f && typeof f != "boolean" && !ur(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let p = 0; p < h.length; p++) {
            const g = ps(e, h[p]);
            if (g) {
                const {
                    transitionEnd: m,
                    transition: x,
                    ...v
                } = g;
                for (const b in v) {
                    let w = v[b];
                    if (Array.isArray(w)) {
                        const C = d ? w.length - 1 : 0;
                        w = w[C]
                    }
                    w !== null && (o[b] = w)
                }
                for (const b in m) o[b] = m[b]
            }
        }
    }
    return o
}

function ms(e, t, n) {
    var s;
    const {
        style: r
    } = e, o = {};
    for (const i in r)(Y(r[i]) || t.style && Y(t.style[i]) || ml(i, e) || ((s = n == null ? void 0 : n.getValue(i)) == null ? void 0 : s.liveStyle) !== void 0) && (o[i] = r[i]);
    return o
}
const Bm = {
    useVisualState: xl({
        scrapeMotionValuesFromProps: ms,
        createRenderState: us
    })
};

function wl(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}

function bl(e, {
    style: t,
    vars: n
}, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const s in n) e.style.setProperty(s, n[s])
}
const Sl = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Cl(e, t, n, r) {
    bl(e, t, void 0, r);
    for (const o in t.attrs) e.setAttribute(Sl.has(o) ? o : ss(o), t.attrs[o])
}

function Pl(e, t, n) {
    const r = ms(e, t, n);
    for (const o in e)
        if (Y(e[o]) || Y(t[o])) {
            const s = St.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            r[s] = e[o]
        } return r
}
const vi = ["x", "y", "width", "height", "cx", "cy", "r"],
    Fm = {
        useVisualState: xl({
            scrapeMotionValuesFromProps: Pl,
            createRenderState: vl,
            onUpdate: ({
                props: e,
                prevProps: t,
                current: n,
                renderState: r,
                latestValues: o
            }) => {
                if (!n) return;
                let s = !!e.drag;
                if (!s) {
                    for (const a in o)
                        if (et.has(a)) {
                            s = !0;
                            break
                        }
                }
                if (!s) return;
                let i = !t;
                if (t)
                    for (let a = 0; a < vi.length; a++) {
                        const c = vi[a];
                        e[c] !== t[c] && (i = !0)
                    }
                i && F.read(() => {
                    wl(n, r), F.render(() => {
                        fs(r, o, hs(n.tagName), e.transformTemplate), Cl(n, r)
                    })
                })
            }
        })
    };

function _m(e, t) {
    return function(r, {
        forwardMotionProps: o
    } = {
        forwardMotionProps: !1
    }) {
        const i = {
            ...ds(r) ? Fm : Bm,
            preloadedFeatures: e,
            useRender: Vm(o),
            createVisualElement: t,
            Component: r
        };
        return dm(i)
    }
}

function Qt(e, t, n) {
    const r = e.getProps();
    return ps(r, t, n !== void 0 ? n : r.custom, e)
}

function gs(e, t) {
    return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
const El = new Set(["width", "height", "top", "left", "right", "bottom", ...St]);

function ys(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function vs(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class xs {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return ys(this.subscriptions, t), () => vs(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1) this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < o; s++) {
                    const i = this.subscriptions[s];
                    i && i(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function Tl(e, t) {
    return t ? e * (1e3 / t) : 0
}
let kn;

function Wm() {
    kn = void 0
}
const me = {
        now: () => (kn === void 0 && me.set(G.isProcessing || zp.useManualTiming ? G.timestamp : performance.now()), kn),
        set: e => {
            kn = e, queueMicrotask(Wm)
        }
    },
    xi = 30,
    Um = e => !isNaN(parseFloat(e));
class Hm {
    constructor(t, n = {}) {
        this.version = "12.6.3", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
            const s = me.now();
            this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = me.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Um(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new xs);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), F.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = me.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > xi) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, xi);
        return Tl(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Jt(e, t) {
    return new Hm(e, t)
}

function zm(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Jt(n))
}

function Gm(e, t) {
    const n = Qt(e, t);
    let {
        transitionEnd: r = {},
        transition: o = {},
        ...s
    } = n || {};
    s = {
        ...s,
        ...r
    };
    for (const i in s) {
        const a = Nm(s[i]);
        zm(e, i, a)
    }
}

function Km(e) {
    return !!(Y(e) && e.add)
}

function uo(e, t) {
    const n = e.getValue("willChange");
    if (Km(n)) return n.add(t)
}

function Rl(e) {
    return e.props[dl]
}
const ge = e => e * 1e3,
    ye = e => e / 1e3;

function ws(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const Ym = ws(() => window.ScrollTimeline !== void 0);
class Zm {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => t.finished))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(o => {
            if (Ym() && o.attachTimeline) return o.attachTimeline(t);
            if (typeof n == "function") return n(o)
        });
        return () => {
            r.forEach((o, s) => {
                o && o(), this.animations[s].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class Xm extends Zm {
    then(t, n) {
        return this.finished.finally(t).then(() => {})
    }
}
const bs = e => Array.isArray(e) && typeof e[0] == "number",
    qm = {};

function Qm(e, t) {
    const n = ws(e);
    return () => qm[t] ?? n()
}
const en = Qm(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    Al = (e, t, n = 10) => {
        let r = "";
        const o = Math.max(Math.round(t / n), 2);
        for (let s = 0; s < o; s++) r += e(s / (o - 1)) + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    },
    Nt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    fo = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Nt([0, .65, .55, 1]),
        circOut: Nt([.55, 0, 1, .45]),
        backIn: Nt([.31, .01, .66, -.59]),
        backOut: Nt([.33, 1.53, .69, .99])
    };

function Ml(e, t) {
    if (e) return typeof e == "function" && en() ? Al(e, t) : bs(e) ? Nt(e) : Array.isArray(e) ? e.map(n => Ml(n, t) || fo.easeOut) : fo[e]
}

function Jm(e, t, n, {
    delay: r = 0,
    duration: o = 300,
    repeat: s = 0,
    repeatType: i = "loop",
    ease: a = "easeInOut",
    times: c
} = {}, u = void 0) {
    const d = {
        [t]: n
    };
    c && (d.offset = c);
    const f = Ml(a, o);
    return Array.isArray(f) && (d.easing = f), e.animate(d, {
        delay: r,
        duration: o,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: s + 1,
        direction: i === "reverse" ? "alternate" : "normal",
        pseudoElement: u
    })
}

function Ss(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function Ll(e) {
    return !!(typeof e == "function" && en() || !e || typeof e == "string" && (e in fo || en()) || bs(e) || Array.isArray(e) && e.every(Ll))
}

function wi(e, t) {
    e.timeline = t, e.onfinish = null
}
const Dl = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    eg = 1e-7,
    tg = 12;

function ng(e, t, n, r, o) {
    let s, i, a = 0;
    do i = t + (n - t) / 2, s = Dl(i, r, o) - e, s > 0 ? n = i : t = i; while (Math.abs(s) > eg && ++a < tg);
    return i
}

function dn(e, t, n, r) {
    if (e === t && n === r) return oe;
    const o = s => ng(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Dl(o(s), t, r)
}
const Il = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Ol = e => t => 1 - e(1 - t),
    Vl = dn(.33, 1.53, .69, .99),
    Cs = Ol(Vl),
    kl = Il(Cs),
    Nl = e => (e *= 2) < 1 ? .5 * Cs(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    Ps = e => 1 - Math.sin(Math.acos(e)),
    jl = Ol(Ps),
    $l = Il(Ps),
    Bl = e => /^0[^.\s]+$/u.test(e);

function rg(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Bl(e) : !0
}
const Bt = e => Math.round(e * 1e5) / 1e5,
    Es = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function og(e) {
    return e == null
}
const sg = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Ts = (e, t) => n => !!(typeof n == "string" && sg.test(n) && n.startsWith(e) || t && !og(n) && Object.prototype.hasOwnProperty.call(n, t)),
    Fl = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [o, s, i, a] = r.match(Es);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(s),
            [n]: parseFloat(i),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    ig = e => Ae(0, 255, e),
    kr = {
        ...Ct,
        transform: e => Math.round(ig(e))
    },
    He = {
        test: Ts("rgb", "red"),
        parse: Fl("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + kr.transform(e) + ", " + kr.transform(t) + ", " + kr.transform(n) + ", " + Bt(qt.transform(r)) + ")"
    };

function ag(e) {
    let t = "",
        n = "",
        r = "",
        o = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const ho = {
        test: Ts("#"),
        parse: ag,
        transform: He.transform
    },
    st = {
        test: Ts("hsl", "hue"),
        parse: Fl("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + pe.transform(Bt(t)) + ", " + pe.transform(Bt(n)) + ", " + Bt(qt.transform(r)) + ")"
    },
    K = {
        test: e => He.test(e) || ho.test(e) || st.test(e),
        parse: e => He.test(e) ? He.parse(e) : st.test(e) ? st.parse(e) : ho.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? He.transform(e) : st.transform(e)
    },
    cg = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function lg(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Es)) == null ? void 0 : t.length) || 0) + (((n = e.match(cg)) == null ? void 0 : n.length) || 0) > 0
}
const _l = "number",
    Wl = "color",
    ug = "var",
    dg = "var(",
    bi = "${}",
    fg = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function tn(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        o = [];
    let s = 0;
    const a = t.replace(fg, c => (K.test(c) ? (r.color.push(s), o.push(Wl), n.push(K.parse(c))) : c.startsWith(dg) ? (r.var.push(s), o.push(ug), n.push(c)) : (r.number.push(s), o.push(_l), n.push(parseFloat(c))), ++s, bi)).split(bi);
    return {
        values: n,
        split: a,
        indexes: r,
        types: o
    }
}

function Ul(e) {
    return tn(e).values
}

function Hl(e) {
    const {
        split: t,
        types: n
    } = tn(e), r = t.length;
    return o => {
        let s = "";
        for (let i = 0; i < r; i++)
            if (s += t[i], o[i] !== void 0) {
                const a = n[i];
                a === _l ? s += Bt(o[i]) : a === Wl ? s += K.transform(o[i]) : s += o[i]
            } return s
    }
}
const hg = e => typeof e == "number" ? 0 : e;

function pg(e) {
    const t = Ul(e);
    return Hl(e)(t.map(hg))
}
const Be = {
        test: lg,
        parse: Ul,
        createTransformer: Hl,
        getAnimatableNone: pg
    },
    mg = new Set(["brightness", "contrast", "saturate", "opacity"]);

function gg(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Es) || [];
    if (!r) return e;
    const o = n.replace(r, "");
    let s = mg.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + o + ")"
}
const yg = /\b([a-z-]*)\(.*?\)/gu,
    po = {
        ...Be,
        getAnimatableNone: e => {
            const t = e.match(yg);
            return t ? t.map(gg).join(" ") : e
        }
    },
    vg = {
        ...cs,
        color: K,
        backgroundColor: K,
        outlineColor: K,
        fill: K,
        stroke: K,
        borderColor: K,
        borderTopColor: K,
        borderRightColor: K,
        borderBottomColor: K,
        borderLeftColor: K,
        filter: po,
        WebkitFilter: po
    },
    zl = e => vg[e];

function Gl(e, t) {
    let n = zl(e);
    return n !== po && (n = Be), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const xg = new Set(["auto", "none", "0"]);

function wg(e, t, n) {
    let r = 0,
        o;
    for (; r < e.length && !o;) {
        const s = e[r];
        typeof s == "string" && !xg.has(s) && tn(s).values.length && (o = e[r]), r++
    }
    if (o && n)
        for (const s of t) e[s] = Gl(n, o)
}
const ze = e => e * 180 / Math.PI,
    mo = e => {
        const t = ze(Math.atan2(e[1], e[0]));
        return go(t)
    },
    bg = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: mo,
        rotateZ: mo,
        skewX: e => ze(Math.atan(e[1])),
        skewY: e => ze(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    go = e => (e = e % 360, e < 0 && (e += 360), e),
    Si = mo,
    Ci = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    Pi = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    Sg = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Ci,
        scaleY: Pi,
        scale: e => (Ci(e) + Pi(e)) / 2,
        rotateX: e => go(ze(Math.atan2(e[6], e[5]))),
        rotateY: e => go(ze(Math.atan2(-e[2], e[0]))),
        rotateZ: Si,
        rotate: Si,
        skewX: e => ze(Math.atan(e[4])),
        skewY: e => ze(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function Ei(e) {
    return e.includes("scale") ? 1 : 0
}

function yo(e, t) {
    if (!e || e === "none") return Ei(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, o;
    if (n) r = Sg, o = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = bg, o = a
    }
    if (!o) return Ei(t);
    const s = r[t],
        i = o[1].split(",").map(Pg);
    return typeof s == "function" ? s(i) : i[s]
}
const Cg = (e, t) => {
    const {
        transform: n = "none"
    } = getComputedStyle(e);
    return yo(n, t)
};

function Pg(e) {
    return parseFloat(e.trim())
}
const Ti = e => e === Ct || e === D,
    Eg = new Set(["x", "y", "z"]),
    Tg = St.filter(e => !Eg.has(e));

function Rg(e) {
    const t = [];
    return Tg.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const gt = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: (e, {
        transform: t
    }) => yo(t, "x"),
    y: (e, {
        transform: t
    }) => yo(t, "y")
};
gt.translateX = gt.x;
gt.translateY = gt.y;
const Ke = new Set;
let vo = !1,
    xo = !1;

function Kl() {
    if (xo) {
        const e = Array.from(Ke).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const o = Rg(r);
            o.length && (n.set(r, o), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const o = n.get(r);
            o && o.forEach(([s, i]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(i)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    xo = !1, vo = !1, Ke.forEach(e => e.complete()), Ke.clear()
}

function Yl() {
    Ke.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (xo = !0)
    })
}

function Ag() {
    Yl(), Kl()
}
class Rs {
    constructor(t, n, r, o, s, i = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (Ke.add(this), vo || (vo = !0, F.read(Yl), F.resolveKeyframes(Kl))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: o
        } = this;
        for (let s = 0; s < t.length; s++)
            if (t[s] === null)
                if (s === 0) {
                    const i = o == null ? void 0 : o.get(),
                        a = t[t.length - 1];
                    if (i !== void 0) t[0] = i;
                    else if (r && n) {
                        const c = r.readValue(n, a);
                        c != null && (t[0] = c)
                    }
                    t[0] === void 0 && (t[0] = a), o && i === void 0 && o.set(t[0])
                } else t[s] = t[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Ke.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, Ke.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Zl = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Mg = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Lg(e) {
    const t = Mg.exec(e);
    if (!t) return [, ];
    const [, n, r, o] = t;
    return [`--${n??r}`, o]
}

function Xl(e, t, n = 1) {
    const [r, o] = Lg(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const i = s.trim();
        return Zl(i) ? parseFloat(i) : i
    }
    return as(o) ? Xl(o, t, n + 1) : o
}
const ql = e => t => t.test(e),
    Dg = {
        test: e => e === "auto",
        parse: e => e
    },
    Ql = [Ct, D, pe, De, xm, vm, Dg],
    Ri = e => Ql.find(ql(e));
class Jl extends Rs {
    constructor(t, n, r, o, s) {
        super(t, n, r, o, s, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let u = t[c];
            if (typeof u == "string" && (u = u.trim(), as(u))) {
                const d = Xl(u, n.current);
                d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !El.has(r) || t.length !== 2) return;
        const [o, s] = t, i = Ri(o), a = Ri(s);
        if (i !== a)
            if (Ti(i) && Ti(a))
                for (let c = 0; c < t.length; c++) {
                    const u = t[c];
                    typeof u == "string" && (t[c] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let o = 0; o < t.length; o++) rg(t[o]) && r.push(o);
        r.length && wg(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = gt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && t.getValue(r, o).jump(o, !1)
    }
    measureEndState() {
        var a;
        const {
            element: t,
            name: n,
            unresolvedKeyframes: r
        } = this;
        if (!t || !t.current) return;
        const o = t.getValue(n);
        o && o.jump(this.measuredOrigin, !1);
        const s = r.length - 1,
            i = r[s];
        r[s] = gt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([c, u]) => {
            t.getValue(c).set(u)
        }), this.resolveNoneKeyframes()
    }
}
const Ai = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Be.test(e) || e === "0") && !e.startsWith("url("));

function Ig(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function Og(e, t, n, r) {
    const o = e[0];
    if (o === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const s = e[e.length - 1],
        i = Ai(o, t),
        a = Ai(s, t);
    return !i || !a ? !1 : Ig(e) || (n === "spring" || Ss(n)) && r
}
const Vg = e => e !== null;

function fr(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const o = e.filter(Vg),
        s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
    return !s || r === void 0 ? o[s] : r
}
const kg = 40;
class eu {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: o = 0,
        repeatDelay: s = 0,
        repeatType: i = "loop",
        ...a
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = me.now(), this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: o,
            repeatDelay: s,
            repeatType: i,
            ...a
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > kg ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Ag(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = me.now(), this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: o,
            velocity: s,
            delay: i,
            onComplete: a,
            onUpdate: c,
            isGenerator: u
        } = this.options;
        if (!u && !Og(t, r, o, s))
            if (i) this.options.duration = 0;
            else {
                c && c(fr(t, this.options, n)), a && a(), this.resolveFinishedPromise();
                return
            } const d = this.initPlayback(t, n);
        d !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...d
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear")
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}
const Gn = 2e4;

function As(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Gn;) t += n, r = e.next(t);
    return t >= Gn ? 1 / 0 : t
}
const U = (e, t, n) => e + (t - e) * n;

function Nr(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Ng({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let o = 0,
        s = 0,
        i = 0;
    if (!t) o = s = i = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            c = 2 * n - a;
        o = Nr(c, a, e + 1 / 3), s = Nr(c, a, e), i = Nr(c, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(s * 255),
        blue: Math.round(i * 255),
        alpha: r
    }
}

function Kn(e, t) {
    return n => n > 0 ? t : e
}
const jr = (e, t, n) => {
        const r = e * e,
            o = n * (t * t - r) + r;
        return o < 0 ? 0 : Math.sqrt(o)
    },
    jg = [ho, He, st],
    $g = e => jg.find(t => t.test(e));

function Mi(e) {
    const t = $g(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === st && (n = Ng(n)), n
}
const Li = (e, t) => {
        const n = Mi(e),
            r = Mi(t);
        if (!n || !r) return Kn(e, t);
        const o = {
            ...n
        };
        return s => (o.red = jr(n.red, r.red, s), o.green = jr(n.green, r.green, s), o.blue = jr(n.blue, r.blue, s), o.alpha = U(n.alpha, r.alpha, s), He.transform(o))
    },
    Bg = (e, t) => n => t(e(n)),
    fn = (...e) => e.reduce(Bg),
    wo = new Set(["none", "hidden"]);

function Fg(e, t) {
    return wo.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function _g(e, t) {
    return n => U(e, t, n)
}

function Ms(e) {
    return typeof e == "number" ? _g : typeof e == "string" ? as(e) ? Kn : K.test(e) ? Li : Hg : Array.isArray(e) ? tu : typeof e == "object" ? K.test(e) ? Li : Wg : Kn
}

function tu(e, t) {
    const n = [...e],
        r = n.length,
        o = e.map((s, i) => Ms(s)(s, t[i]));
    return s => {
        for (let i = 0; i < r; i++) n[i] = o[i](s);
        return n
    }
}

function Wg(e, t) {
    const n = {
            ...e,
            ...t
        },
        r = {};
    for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = Ms(e[o])(e[o], t[o]));
    return o => {
        for (const s in r) n[s] = r[s](o);
        return n
    }
}

function Ug(e, t) {
    const n = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o],
            i = e.indexes[s][r[s]],
            a = e.values[i] ?? 0;
        n[o] = a, r[s]++
    }
    return n
}
const Hg = (e, t) => {
    const n = Be.createTransformer(t),
        r = tn(e),
        o = tn(t);
    return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? wo.has(e) && !o.values.length || wo.has(t) && !r.values.length ? Fg(e, t) : fn(tu(Ug(r, o), o.values), n) : Kn(e, t)
};

function nu(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? U(e, t, n) : Ms(e)(e, t)
}

function zg(e, t = 100, n) {
    const r = n({
            ...e,
            keyframes: [0, t]
        }),
        o = Math.min(As(r), Gn);
    return {
        type: "keyframes",
        ease: s => r.next(o * s).value / t,
        duration: ye(o)
    }
}
const Gg = 5;

function ru(e, t, n) {
    const r = Math.max(t - Gg, 0);
    return Tl(n - e(r), t - r)
}
const H = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    Di = .001;

function Kg({
    duration: e = H.duration,
    bounce: t = H.bounce,
    velocity: n = H.velocity,
    mass: r = H.mass
}) {
    let o, s, i = 1 - t;
    i = Ae(H.minDamping, H.maxDamping, i), e = Ae(H.minDuration, H.maxDuration, ye(e)), i < 1 ? (o = u => {
        const d = u * i,
            f = d * e,
            h = d - n,
            p = bo(u, i),
            g = Math.exp(-f);
        return Di - h / p * g
    }, s = u => {
        const f = u * i * e,
            h = f * n + n,
            p = Math.pow(i, 2) * Math.pow(u, 2) * e,
            g = Math.exp(-f),
            m = bo(Math.pow(u, 2), i);
        return (-o(u) + Di > 0 ? -1 : 1) * ((h - p) * g) / m
    }) : (o = u => {
        const d = Math.exp(-u * e),
            f = (u - n) * e + 1;
        return -.001 + d * f
    }, s = u => {
        const d = Math.exp(-u * e),
            f = (n - u) * (e * e);
        return d * f
    });
    const a = 5 / e,
        c = Zg(o, s, a);
    if (e = ge(e), isNaN(c)) return {
        stiffness: H.stiffness,
        damping: H.damping,
        duration: e
    };
    {
        const u = Math.pow(c, 2) * r;
        return {
            stiffness: u,
            damping: i * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const Yg = 12;

function Zg(e, t, n) {
    let r = n;
    for (let o = 1; o < Yg; o++) r = r - e(r) / t(r);
    return r
}

function bo(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Xg = ["duration", "bounce"],
    qg = ["stiffness", "damping", "mass"];

function Ii(e, t) {
    return t.some(n => e[n] !== void 0)
}

function Qg(e) {
    let t = {
        velocity: H.velocity,
        stiffness: H.stiffness,
        damping: H.damping,
        mass: H.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Ii(e, qg) && Ii(e, Xg))
        if (e.visualDuration) {
            const n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                o = r * r,
                s = 2 * Ae(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
            t = {
                ...t,
                mass: H.mass,
                stiffness: o,
                damping: s
            }
        } else {
            const n = Kg(e);
            t = {
                ...t,
                ...n,
                mass: H.mass
            }, t.isResolvedFromDuration = !0
        } return t
}

function Yn(e = H.visualDuration, t = H.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: r,
        restDelta: o
    } = n;
    const s = n.keyframes[0],
        i = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: s
        },
        {
            stiffness: c,
            damping: u,
            mass: d,
            duration: f,
            velocity: h,
            isResolvedFromDuration: p
        } = Qg({
            ...n,
            velocity: -ye(n.velocity || 0)
        }),
        g = h || 0,
        m = u / (2 * Math.sqrt(c * d)),
        x = i - s,
        v = ye(Math.sqrt(c / d)),
        b = Math.abs(x) < 5;
    r || (r = b ? H.restSpeed.granular : H.restSpeed.default), o || (o = b ? H.restDelta.granular : H.restDelta.default);
    let w;
    if (m < 1) {
        const S = bo(v, m);
        w = E => {
            const P = Math.exp(-m * v * E);
            return i - P * ((g + m * v * x) / S * Math.sin(S * E) + x * Math.cos(S * E))
        }
    } else if (m === 1) w = S => i - Math.exp(-v * S) * (x + (g + v * x) * S);
    else {
        const S = v * Math.sqrt(m * m - 1);
        w = E => {
            const P = Math.exp(-m * v * E),
                T = Math.min(S * E, 300);
            return i - P * ((g + m * v * x) * Math.sinh(T) + S * x * Math.cosh(T)) / S
        }
    }
    const C = {
        calculatedDuration: p && f || null,
        next: S => {
            const E = w(S);
            if (p) a.done = S >= f;
            else {
                let P = 0;
                m < 1 && (P = S === 0 ? ge(g) : ru(w, S, E));
                const T = Math.abs(P) <= r,
                    M = Math.abs(i - E) <= o;
                a.done = T && M
            }
            return a.value = a.done ? i : E, a
        },
        toString: () => {
            const S = Math.min(As(C), Gn),
                E = Al(P => C.next(S * P).value, S, 30);
            return S + "ms " + E
        },
        toTransition: () => {}
    };
    return C
}
Yn.applyToOptions = e => {
    const t = zg(e, 100, Yn);
    return e.ease = en() ? t.ease : "easeOut", e.duration = ge(t.duration), e.type = "keyframes", e
};

function Oi({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: o = 10,
    bounceStiffness: s = 500,
    modifyTarget: i,
    min: a,
    max: c,
    restDelta: u = .5,
    restSpeed: d
}) {
    const f = e[0],
        h = {
            done: !1,
            value: f
        },
        p = T => a !== void 0 && T < a || c !== void 0 && T > c,
        g = T => a === void 0 ? c : c === void 0 || Math.abs(a - T) < Math.abs(c - T) ? a : c;
    let m = n * t;
    const x = f + m,
        v = i === void 0 ? x : i(x);
    v !== x && (m = v - f);
    const b = T => -m * Math.exp(-T / r),
        w = T => v + b(T),
        C = T => {
            const M = b(T),
                V = w(T);
            h.done = Math.abs(M) <= u, h.value = h.done ? v : V
        };
    let S, E;
    const P = T => {
        p(h.value) && (S = T, E = Yn({
            keyframes: [h.value, g(h.value)],
            velocity: ru(w, T, h.value),
            damping: o,
            stiffness: s,
            restDelta: u,
            restSpeed: d
        }))
    };
    return P(0), {
        calculatedDuration: null,
        next: T => {
            let M = !1;
            return !E && S === void 0 && (M = !0, C(T), P(T)), S !== void 0 && T >= S ? E.next(T - S) : (!M && C(T), h)
        }
    }
}
const Jg = dn(.42, 0, 1, 1),
    ey = dn(0, 0, .58, 1),
    ou = dn(.42, 0, .58, 1),
    ty = e => Array.isArray(e) && typeof e[0] != "number",
    ny = {
        linear: oe,
        easeIn: Jg,
        easeInOut: ou,
        easeOut: ey,
        circIn: Ps,
        circInOut: $l,
        circOut: jl,
        backIn: Cs,
        backInOut: kl,
        backOut: Vl,
        anticipate: Nl
    },
    Vi = e => {
        if (bs(e)) {
            sl(e.length === 4);
            const [t, n, r, o] = e;
            return dn(t, n, r, o)
        } else if (typeof e == "string") return ny[e];
        return e
    },
    nn = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    };

function ry(e, t, n) {
    const r = [],
        o = n || nu,
        s = e.length - 1;
    for (let i = 0; i < s; i++) {
        let a = o(e[i], e[i + 1]);
        if (t) {
            const c = Array.isArray(t) ? t[i] || oe : t;
            a = fn(c, a)
        }
        r.push(a)
    }
    return r
}

function oy(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: o
} = {}) {
    const s = e.length;
    if (sl(s === t.length), s === 1) return () => t[0];
    if (s === 2 && t[0] === t[1]) return () => t[1];
    const i = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const a = ry(t, r, o),
        c = a.length,
        u = d => {
            if (i && d < e[0]) return t[0];
            let f = 0;
            if (c > 1)
                for (; f < e.length - 2 && !(d < e[f + 1]); f++);
            const h = nn(e[f], e[f + 1], d);
            return a[f](h)
        };
    return n ? d => u(Ae(e[0], e[s - 1], d)) : u
}

function sy(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = nn(0, t, r);
        e.push(U(n, 1, o))
    }
}

function iy(e) {
    const t = [0];
    return sy(t, e.length - 1), t
}

function ay(e, t) {
    return e.map(n => n * t)
}

function cy(e, t) {
    return e.map(() => t || ou).splice(0, e.length - 1)
}

function Zn({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const o = ty(r) ? r.map(Vi) : Vi(r),
        s = {
            done: !1,
            value: t[0]
        },
        i = ay(n && n.length === t.length ? n : iy(t), e),
        a = oy(i, t, {
            ease: Array.isArray(o) ? o : cy(t, o)
        });
    return {
        calculatedDuration: e,
        next: c => (s.value = a(c), s.done = c >= e, s)
    }
}
const ly = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => F.update(t, !0),
            stop: () => $e(t),
            now: () => G.isProcessing ? G.timestamp : me.now()
        }
    },
    uy = {
        decay: Oi,
        inertia: Oi,
        tween: Zn,
        keyframes: Zn,
        spring: Yn
    },
    dy = e => e / 100;
class Ls extends eu {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: c
            } = this.options;
            c && c()
        };
        const {
            name: n,
            motionValue: r,
            element: o,
            keyframes: s
        } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || Rs, a = (c, u) => this.onKeyframesResolved(c, u);
        this.resolver = new i(s, a, n, r, o), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: o = 0,
            repeatType: s,
            velocity: i = 0
        } = this.options, a = Ss(n) ? n : uy[n] || Zn;
        let c, u;
        a !== Zn && typeof t[0] != "number" && (c = fn(dy, nu(t[0], t[1])), t = [0, 100]);
        const d = a({
            ...this.options,
            keyframes: t
        });
        s === "mirror" && (u = a({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -i
        })), d.calculatedDuration === null && (d.calculatedDuration = As(d));
        const {
            calculatedDuration: f
        } = d, h = f + o, p = h * (r + 1) - o;
        return {
            generator: d,
            mirroredGenerator: u,
            mapPercentToKeyframes: c,
            calculatedDuration: f,
            resolvedDuration: h,
            totalDuration: p
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: T
            } = this.options;
            return {
                done: !0,
                value: T[T.length - 1]
            }
        }
        const {
            finalKeyframe: o,
            generator: s,
            mirroredGenerator: i,
            mapPercentToKeyframes: a,
            keyframes: c,
            calculatedDuration: u,
            totalDuration: d,
            resolvedDuration: f
        } = r;
        if (this.startTime === null) return s.next(0);
        const {
            delay: h,
            repeat: p,
            repeatType: g,
            repeatDelay: m,
            onUpdate: x
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const v = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            b = this.speed >= 0 ? v < 0 : v > d;
        this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
        let w = this.currentTime,
            C = s;
        if (p) {
            const T = Math.min(this.currentTime, d) / f;
            let M = Math.floor(T),
                V = T % 1;
            !V && T >= 1 && (V = 1), V === 1 && M--, M = Math.min(M, p + 1), !!(M % 2) && (g === "reverse" ? (V = 1 - V, m && (V -= m / f)) : g === "mirror" && (C = i)), w = Ae(0, 1, V) * f
        }
        const S = b ? {
            done: !1,
            value: c[0]
        } : C.next(w);
        a && (S.value = a(S.value));
        let {
            done: E
        } = S;
        !b && u !== null && (E = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
        const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return P && o !== void 0 && (S.value = fr(c, this.options, o)), x && x(S.value), P && this.finish(), S
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? ye(t.calculatedDuration) : 0
    }
    get time() {
        return ye(this.currentTime)
    }
    set time(t) {
        t = ge(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = ye(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = ly,
            onPlay: n,
            startTime: r
        } = this.options;
        this.driver || (this.driver = t(s => this.tick(s))), n && n();
        const o = this.driver.now();
        this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = this.currentTime ?? 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
    get finished() {
        return this.currentFinishedPromise
    }
}
const fy = new Set(["opacity", "clipPath", "filter", "transform"]),
    hy = ws(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Xn = 10,
    py = 2e4;

function my(e) {
    return Ss(e.type) || e.type === "spring" || !Ll(e.ease)
}

function gy(e, t) {
    const n = new Ls({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const o = [];
    let s = 0;
    for (; !r.done && s < py;) r = n.sample(s), o.push(r.value), s += Xn;
    return {
        times: void 0,
        keyframes: o,
        duration: s - Xn,
        ease: "linear"
    }
}
const su = {
    anticipate: Nl,
    backInOut: kl,
    circInOut: $l
};

function yy(e) {
    return e in su
}
class ki extends eu {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            element: o,
            keyframes: s
        } = this.options;
        this.resolver = new Jl(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {
            duration: r = 300,
            times: o,
            ease: s,
            type: i,
            motionValue: a,
            name: c,
            startTime: u
        } = this.options;
        if (!a.owner || !a.owner.current) return !1;
        if (typeof s == "string" && en() && yy(s) && (s = su[s]), my(this.options)) {
            const {
                onComplete: f,
                onUpdate: h,
                motionValue: p,
                element: g,
                ...m
            } = this.options, x = gy(t, m);
            t = x.keyframes, t.length === 1 && (t[1] = t[0]), r = x.duration, o = x.times, s = x.ease, i = "keyframes"
        }
        const d = Jm(a.owner.current, c, t, {
            ...this.options,
            duration: r,
            times: o,
            ease: s
        });
        return d.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (wi(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
            const {
                onComplete: f
            } = this.options;
            a.set(fr(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: d,
            duration: r,
            times: o,
            type: i,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return ye(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return ye(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = ge(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    get finished() {
        return this.resolved.animation.finished
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: n
        } = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return oe;
            const {
                animation: r
            } = n;
            wi(r, t)
        }
        return oe
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: o,
            type: s,
            ease: i,
            times: a
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: d,
                onComplete: f,
                element: h,
                ...p
            } = this.options, g = new Ls({
                ...p,
                keyframes: r,
                duration: o,
                type: s,
                ease: i,
                times: a,
                isGenerator: !0
            }), m = ge(this.time);
            u.setWithVelocity(g.sample(m - Xn).value, g.sample(m).value, Xn)
        }
        const {
            onStop: c
        } = this.options;
        c && c(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: o,
            repeatType: s,
            damping: i,
            type: a
        } = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: c,
            transformTemplate: u
        } = n.owner.getProps();
        return hy() && r && fy.has(r) && (r !== "transform" || !u) && !c && !o && s !== "mirror" && i !== 0 && a !== "inertia"
    }
}
const vy = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    xy = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    wy = {
        type: "keyframes",
        duration: .8
    },
    by = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Sy = (e, {
        keyframes: t
    }) => t.length > 2 ? wy : et.has(e) ? e.startsWith("scale") ? xy(t[1]) : vy : by;

function Cy({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: o,
    repeat: s,
    repeatType: i,
    repeatDelay: a,
    from: c,
    elapsed: u,
    ...d
}) {
    return !!Object.keys(d).length
}
const Ds = (e, t, n, r = {}, o, s) => i => {
    const a = gs(r, e) || {},
        c = a.delay || r.delay || 0;
    let {
        elapsed: u = 0
    } = r;
    u = u - ge(c);
    let d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: h => {
            t.set(h), a.onUpdate && a.onUpdate(h)
        },
        onComplete: () => {
            i(), a.onComplete && a.onComplete()
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : o
    };
    Cy(a) || (d = {
        ...d,
        ...Sy(e, d)
    }), d.duration && (d.duration = ge(d.duration)), d.repeatDelay && (d.repeatDelay = ge(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && (d.duration = 0, d.delay === 0 && (f = !0)), d.allowFlatten = !a.type && !a.ease, f && !s && t.get() !== void 0) {
        const h = fr(d.keyframes, a);
        if (h !== void 0) return F.update(() => {
            d.onUpdate(h), d.onComplete()
        }), new Xm([])
    }
    return !s && ki.supports(d) ? new ki(d) : new Ls(d)
};

function Py({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function iu(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: o
} = {}) {
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: i,
        ...a
    } = t;
    r && (s = r);
    const c = [],
        u = o && e.animationState && e.animationState.getState()[o];
    for (const d in a) {
        const f = e.getValue(d, e.latestValues[d] ?? null),
            h = a[d];
        if (h === void 0 || u && Py(u, d)) continue;
        const p = {
            delay: n,
            ...gs(s || {}, d)
        };
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const x = Rl(e);
            if (x) {
                const v = window.MotionHandoffAnimation(x, d, F);
                v !== null && (p.startTime = v, g = !0)
            }
        }
        uo(e, d), f.start(Ds(d, f, h, e.shouldReduceMotion && El.has(d) ? {
            type: !1
        } : p, e, g));
        const m = f.animation;
        m && c.push(m)
    }
    return i && Promise.all(c).then(() => {
        F.update(() => {
            i && Gm(e, i)
        })
    }), c
}

function So(e, t, n = {}) {
    var c;
    const r = Qt(e, t, n.type === "exit" ? (c = e.presenceContext) == null ? void 0 : c.custom : void 0);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = r ? () => Promise.all(iu(e, r, n)) : () => Promise.resolve(),
        i = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: d = 0,
                staggerChildren: f,
                staggerDirection: h
            } = o;
            return Ey(e, t, d + u, f, h, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = o;
    if (a) {
        const [u, d] = a === "beforeChildren" ? [s, i] : [i, s];
        return u().then(() => d())
    } else return Promise.all([s(), i(n.delay)])
}

function Ey(e, t, n = 0, r = 0, o = 1, s) {
    const i = [],
        a = (e.variantChildren.size - 1) * r,
        c = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(Ty).forEach((u, d) => {
        u.notify("AnimationStart", t), i.push(So(u, t, {
            ...s,
            delay: n + c(d)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(i)
}

function Ty(e, t) {
    return e.sortNodePosition(t)
}

function Ry(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(s => So(e, s, n));
        r = Promise.all(o)
    } else if (typeof t == "string") r = So(e, t, n);
    else {
        const o = typeof t == "function" ? Qt(e, t, n.custom) : t;
        r = Promise.all(iu(e, o, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}

function au(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
const Ay = rs.length;

function cu(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? cu(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < Ay; n++) {
        const r = rs[n],
            o = e.props[r];
        (Zt(o) || o === !1) && (t[r] = o)
    }
    return t
}
const My = [...ns].reverse(),
    Ly = ns.length;

function Dy(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => Ry(e, n, r)))
}

function Iy(e) {
    let t = Dy(e),
        n = Ni(),
        r = !0;
    const o = c => (u, d) => {
        var h;
        const f = Qt(e, d, c === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {
                transition: p,
                transitionEnd: g,
                ...m
            } = f;
            u = {
                ...u,
                ...m,
                ...g
            }
        }
        return u
    };

    function s(c) {
        t = c(e)
    }

    function i(c) {
        const {
            props: u
        } = e, d = cu(e.parent) || {}, f = [], h = new Set;
        let p = {},
            g = 1 / 0;
        for (let x = 0; x < Ly; x++) {
            const v = My[x],
                b = n[v],
                w = u[v] !== void 0 ? u[v] : d[v],
                C = Zt(w),
                S = v === c ? b.isActive : null;
            S === !1 && (g = x);
            let E = w === d[v] && w !== u[v] && C;
            if (E && r && e.manuallyAnimateOnMount && (E = !1), b.protectedKeys = {
                    ...p
                }, !b.isActive && S === null || !w && !b.prevProp || ur(w) || typeof w == "boolean") continue;
            const P = Oy(b.prevProp, w);
            let T = P || v === c && b.isActive && !E && C || x > g && C,
                M = !1;
            const V = Array.isArray(w) ? w : [w];
            let L = V.reduce(o(v), {});
            S === !1 && (L = {});
            const {
                prevResolvedValues: I = {}
            } = b, A = {
                ...I,
                ...L
            }, N = j => {
                T = !0, h.has(j) && (M = !0, h.delete(j)), b.needsAnimating[j] = !0;
                const O = e.getValue(j);
                O && (O.liveStyle = !1)
            };
            for (const j in A) {
                const O = L[j],
                    B = I[j];
                if (p.hasOwnProperty(j)) continue;
                let W = !1;
                lo(O) && lo(B) ? W = !au(O, B) : W = O !== B, W ? O != null ? N(j) : h.add(j) : O !== void 0 && h.has(j) ? N(j) : b.protectedKeys[j] = !0
            }
            b.prevProp = w, b.prevResolvedValues = L, b.isActive && (p = {
                ...p,
                ...L
            }), r && e.blockInitialAnimation && (T = !1), T && (!(E && P) || M) && f.push(...V.map(j => ({
                animation: j,
                options: {
                    type: v
                }
            })))
        }
        if (h.size) {
            const x = {};
            if (typeof u.initial != "boolean") {
                const v = Qt(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                v && v.transition && (x.transition = v.transition)
            }
            h.forEach(v => {
                const b = e.getBaseTarget(v),
                    w = e.getValue(v);
                w && (w.liveStyle = !0), x[v] = b ?? null
            }), f.push({
                animation: x
            })
        }
        let m = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(f) : Promise.resolve()
    }

    function a(c, u) {
        var f;
        if (n[c].isActive === u) return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(h => {
            var p;
            return (p = h.animationState) == null ? void 0 : p.setActive(c, u)
        }), n[c].isActive = u;
        const d = i(c);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: i,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Ni(), r = !0
        }
    }
}

function Oy(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !au(t, e) : !1
}

function We(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Ni() {
    return {
        animate: We(!0),
        whileInView: We(),
        whileHover: We(),
        whileTap: We(),
        whileDrag: We(),
        whileFocus: We(),
        exit: We()
    }
}
class Fe {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class Vy extends Fe {
    constructor(t) {
        super(t), t.animationState || (t.animationState = Iy(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        ur(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this)
    }
}
let ky = 0;
class Ny extends Fe {
    constructor() {
        super(...arguments), this.id = ky++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const o = this.node.animationState.setActive("exit", !t);
        n && !t && o.then(() => {
            n(this.id)
        })
    }
    mount() {
        const {
            register: t,
            onExitComplete: n
        } = this.node.presenceContext || {};
        n && n(this.id), t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const jy = {
        animation: {
            Feature: Vy
        },
        exit: {
            Feature: Ny
        }
    },
    ae = {
        x: !1,
        y: !1
    };

function lu() {
    return ae.x || ae.y
}

function $y(e) {
    return e === "x" || e === "y" ? ae[e] ? null : (ae[e] = !0, () => {
        ae[e] = !1
    }) : ae.x || ae.y ? null : (ae.x = ae.y = !0, () => {
        ae.x = ae.y = !1
    })
}

function rn(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const Is = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function hn(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const By = e => t => Is(t) && e(t, hn(t));

function Ft(e, t, n, r) {
    return rn(e, t, By(n), r)
}

function uu({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function Fy({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function _y(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
const du = 1e-4,
    Wy = 1 - du,
    Uy = 1 + du,
    fu = .01,
    Hy = 0 - fu,
    zy = 0 + fu;

function Q(e) {
    return e.max - e.min
}

function Gy(e, t, n) {
    return Math.abs(e - t) <= n
}

function ji(e, t, n, r = .5) {
    e.origin = r, e.originPoint = U(t.min, t.max, e.origin), e.scale = Q(n) / Q(t), e.translate = U(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Wy && e.scale <= Uy || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Hy && e.translate <= zy || isNaN(e.translate)) && (e.translate = 0)
}

function _t(e, t, n, r) {
    ji(e.x, t.x, n.x, r ? r.originX : void 0), ji(e.y, t.y, n.y, r ? r.originY : void 0)
}

function $i(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Q(t)
}

function Ky(e, t, n) {
    $i(e.x, t.x, n.x), $i(e.y, t.y, n.y)
}

function Bi(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Q(t)
}

function Wt(e, t, n) {
    Bi(e.x, t.x, n.x), Bi(e.y, t.y, n.y)
}
const Fi = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    it = () => ({
        x: Fi(),
        y: Fi()
    }),
    _i = () => ({
        min: 0,
        max: 0
    }),
    z = () => ({
        x: _i(),
        y: _i()
    });

function ne(e) {
    return [e("x"), e("y")]
}

function $r(e) {
    return e === void 0 || e === 1
}

function Co({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !$r(e) || !$r(t) || !$r(n)
}

function Ue(e) {
    return Co(e) || hu(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function hu(e) {
    return Wi(e.x) || Wi(e.y)
}

function Wi(e) {
    return e && e !== "0%"
}

function qn(e, t, n) {
    const r = e - n,
        o = t * r;
    return n + o
}

function Ui(e, t, n, r, o) {
    return o !== void 0 && (e = qn(e, o, r)), qn(e, n, r) + t
}

function Po(e, t = 0, n = 1, r, o) {
    e.min = Ui(e.min, t, n, r, o), e.max = Ui(e.max, t, n, r, o)
}

function pu(e, {
    x: t,
    y: n
}) {
    Po(e.x, t.translate, t.scale, t.originPoint), Po(e.y, n.translate, n.scale, n.originPoint)
}
const Hi = .999999999999,
    zi = 1.0000000000001;

function Yy(e, t, n, r = !1) {
    const o = n.length;
    if (!o) return;
    t.x = t.y = 1;
    let s, i;
    for (let a = 0; a < o; a++) {
        s = n[a], i = s.projectionDelta;
        const {
            visualElement: c
        } = s.options;
        c && c.props.style && c.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && ct(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }), i && (t.x *= i.x.scale, t.y *= i.y.scale, pu(e, i)), r && Ue(s.latestValues) && ct(e, s.latestValues))
    }
    t.x < zi && t.x > Hi && (t.x = 1), t.y < zi && t.y > Hi && (t.y = 1)
}

function at(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Gi(e, t, n, r, o = .5) {
    const s = U(e.min, e.max, o);
    Po(e, t, n, s, r)
}

function ct(e, t) {
    Gi(e.x, t.x, t.scaleX, t.scale, t.originX), Gi(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function mu(e, t) {
    return uu(_y(e.getBoundingClientRect(), t))
}

function Zy(e, t, n) {
    const r = mu(e, n),
        {
            scroll: o
        } = t;
    return o && (at(r.x, o.offset.x), at(r.y, o.offset.y)), r
}
const gu = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    Ki = (e, t) => Math.abs(e - t);

function Xy(e, t) {
    const n = Ki(e.x, t.x),
        r = Ki(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class yu {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: o,
        dragSnapToOrigin: s = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const f = Fr(this.lastMoveEventInfo, this.history),
                    h = this.startEvent !== null,
                    p = Xy(f.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !p) return;
                const {
                    point: g
                } = f, {
                    timestamp: m
                } = G;
                this.history.push({
                    ...g,
                    timestamp: m
                });
                const {
                    onStart: x,
                    onMove: v
                } = this.handlers;
                h || (x && x(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, f)
            }, this.handlePointerMove = (f, h) => {
                this.lastMoveEvent = f, this.lastMoveEventInfo = Br(h, this.transformPagePoint), F.update(this.updatePoint, !0)
            }, this.handlePointerUp = (f, h) => {
                this.end();
                const {
                    onEnd: p,
                    onSessionEnd: g,
                    resumeAnimation: m
                } = this.handlers;
                if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = Fr(f.type === "pointercancel" ? this.lastMoveEventInfo : Br(h, this.transformPagePoint), this.history);
                this.startEvent && p && p(f, x), g && g(f, x)
            }, !Is(t)) return;
        this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
        const i = hn(t),
            a = Br(i, this.transformPagePoint),
            {
                point: c
            } = a,
            {
                timestamp: u
            } = G;
        this.history = [{
            ...c,
            timestamp: u
        }];
        const {
            onSessionStart: d
        } = n;
        d && d(t, Fr(a, this.history)), this.removeListeners = fn(Ft(this.contextWindow, "pointermove", this.handlePointerMove), Ft(this.contextWindow, "pointerup", this.handlePointerUp), Ft(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), $e(this.updatePoint)
    }
}

function Br(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Yi(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Fr({
    point: e
}, t) {
    return {
        point: e,
        delta: Yi(e, vu(t)),
        offset: Yi(e, qy(t)),
        velocity: Qy(t, .1)
    }
}

function qy(e) {
    return e[0]
}

function vu(e) {
    return e[e.length - 1]
}

function Qy(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const o = vu(e);
    for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > ge(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const s = ye(o.timestamp - r.timestamp);
    if (s === 0) return {
        x: 0,
        y: 0
    };
    const i = {
        x: (o.x - r.x) / s,
        y: (o.y - r.y) / s
    };
    return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i
}

function Jy(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? U(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? U(n, e, r.max) : Math.min(e, n)), e
}

function Zi(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function ev(e, {
    top: t,
    left: n,
    bottom: r,
    right: o
}) {
    return {
        x: Zi(e.x, n, o),
        y: Zi(e.y, t, r)
    }
}

function Xi(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function tv(e, t) {
    return {
        x: Xi(e.x, t.x),
        y: Xi(e.y, t.y)
    }
}

function nv(e, t) {
    let n = .5;
    const r = Q(e),
        o = Q(t);
    return o > r ? n = nn(t.min, t.max - r, e.min) : r > o && (n = nn(e.min, e.max - o, t.min)), Ae(0, 1, n)
}

function rv(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Eo = .35;

function ov(e = Eo) {
    return e === !1 ? e = 0 : e === !0 && (e = Eo), {
        x: qi(e, "left", "right"),
        y: qi(e, "top", "bottom")
    }
}

function qi(e, t, n) {
    return {
        min: Qi(e, t),
        max: Qi(e, n)
    }
}

function Qi(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const sv = new WeakMap;
class iv {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = z(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const o = d => {
                const {
                    dragSnapToOrigin: f
                } = this.getProps();
                f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(hn(d).point)
            },
            s = (d, f) => {
                const {
                    drag: h,
                    dragPropagation: p,
                    onDragStart: g
                } = this.getProps();
                if (h && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = $y(h), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ne(x => {
                    let v = this.getAxisMotionValue(x).get() || 0;
                    if (pe.test(v)) {
                        const {
                            projection: b
                        } = this.visualElement;
                        if (b && b.layout) {
                            const w = b.layout.layoutBox[x];
                            w && (v = Q(w) * (parseFloat(v) / 100))
                        }
                    }
                    this.originPoint[x] = v
                }), g && F.postRender(() => g(d, f)), uo(this.visualElement, "transform");
                const {
                    animationState: m
                } = this.visualElement;
                m && m.setActive("whileDrag", !0)
            },
            i = (d, f) => {
                const {
                    dragPropagation: h,
                    dragDirectionLock: p,
                    onDirectionLock: g,
                    onDrag: m
                } = this.getProps();
                if (!h && !this.openDragLock) return;
                const {
                    offset: x
                } = f;
                if (p && this.currentDirection === null) {
                    this.currentDirection = av(x), this.currentDirection !== null && g && g(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, x), this.updateAxis("y", f.point, x), this.visualElement.render(), m && m(d, f)
            },
            a = (d, f) => this.stop(d, f),
            c = () => ne(d => {
                var f;
                return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) == null ? void 0 : f.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new yu(t, {
            onSessionStart: o,
            onStart: s,
            onMove: i,
            onSessionEnd: a,
            resumeAnimation: c
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: gu(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: o
        } = n;
        this.startAnimation(o);
        const {
            onDragEnd: s
        } = this.getProps();
        s && F.postRender(() => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: o
        } = this.getProps();
        if (!r || !Pn(t, o, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let i = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (i = Jy(i, this.constraints[t], this.elastic[t])), s.set(i)
    }
    resolveConstraints() {
        var s;
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, o = this.constraints;
        t && ot(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = ev(r.layoutBox, t) : this.constraints = !1, this.elastic = ov(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && ne(i => {
            this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = rv(r.layoutBox[i], this.constraints[i]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !ot(t)) return !1;
        const r = t.current,
            {
                projection: o
            } = this.visualElement;
        if (!o || !o.layout) return !1;
        const s = Zy(r, o.root, this.visualElement.getTransformPagePoint());
        let i = tv(o.layout.layoutBox, s);
        if (n) {
            const a = n(Fy(i));
            this.hasMutatedConstraints = !!a, a && (i = uu(a))
        }
        return i
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: o,
            dragTransition: s,
            dragSnapToOrigin: i,
            onDragTransitionEnd: a
        } = this.getProps(), c = this.constraints || {}, u = ne(d => {
            if (!Pn(d, n, this.currentDirection)) return;
            let f = c && c[d] || {};
            i && (f = {
                min: 0,
                max: 0
            });
            const h = o ? 200 : 1e6,
                p = o ? 40 : 1e7,
                g = {
                    type: "inertia",
                    velocity: r ? t[d] : 0,
                    bounceStiffness: h,
                    bounceDamping: p,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...f
                };
            return this.startAxisValueAnimation(d, g)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return uo(this.visualElement, t), r.start(Ds(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        ne(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        ne(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        ne(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Pn(n, r, this.currentDirection)) return;
            const {
                projection: o
            } = this.visualElement, s = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {
                    min: i,
                    max: a
                } = o.layout.layoutBox[n];
                s.set(t[n] - U(i, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!ot(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        ne(i => {
            const a = this.getAxisMotionValue(i);
            if (a && this.constraints !== !1) {
                const c = a.get();
                o[i] = nv({
                    min: c,
                    max: c
                }, this.constraints[i])
            }
        });
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ne(i => {
            if (!Pn(i, t, null)) return;
            const a = this.getAxisMotionValue(i),
                {
                    min: c,
                    max: u
                } = this.constraints[i];
            a.set(U(c, u, o[i]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        sv.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = Ft(t, "pointerdown", c => {
                const {
                    drag: u,
                    dragListener: d = !0
                } = this.getProps();
                u && d && this.start(c)
            }),
            r = () => {
                const {
                    dragConstraints: c
                } = this.getProps();
                ot(c) && c.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: o
            } = this.visualElement,
            s = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), F.read(r);
        const i = rn(window, "resize", () => this.scalePositionWithinConstraints()),
            a = o.addEventListener("didUpdate", ({
                delta: c,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (ne(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate))
                }), this.visualElement.render())
            });
        return () => {
            i(), n(), s(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: o = !1,
                dragConstraints: s = !1,
                dragElastic: i = Eo,
                dragMomentum: a = !0
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: s,
            dragElastic: i,
            dragMomentum: a
        }
    }
}

function Pn(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function av(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class cv extends Fe {
    constructor(t) {
        super(t), this.removeGroupControls = oe, this.removeListeners = oe, this.controls = new iv(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || oe
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Ji = e => (t, n) => {
    e && F.postRender(() => e(t, n))
};
class lv extends Fe {
    constructor() {
        super(...arguments), this.removePointerDownListener = oe
    }
    onPointerDown(t) {
        this.session = new yu(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: gu(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: o
        } = this.node.getProps();
        return {
            onSessionStart: Ji(t),
            onStart: Ji(n),
            onMove: r,
            onEnd: (s, i) => {
                delete this.session, o && F.postRender(() => o(s, i))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ft(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Nn = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function ea(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Vt = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (D.test(e)) e = parseFloat(e);
                else return e;
            const n = ea(e, t.target.x),
                r = ea(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    uv = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                o = Be.parse(e);
            if (o.length > 5) return r;
            const s = Be.createTransformer(e),
                i = typeof o[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                c = n.y.scale * t.y;
            o[0 + i] /= a, o[1 + i] /= c;
            const u = U(a, c, .5);
            return typeof o[2 + i] == "number" && (o[2 + i] /= u), typeof o[3 + i] == "number" && (o[3 + i] /= u), s(o)
        }
    };
class dv extends l.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: o
        } = this.props, {
            projection: s
        } = t;
        ym(fv), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })), Nn.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: o,
            isPresent: s
        } = this.props, i = r.projection;
        return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || F.postRender(() => {
            const a = i.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), os.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: o
        } = t;
        o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function xu(e) {
    const [t, n] = ol(), r = l.useContext(Yt);
    return y.jsx(dv, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: l.useContext(fl),
        isPresent: t,
        safeToRemove: n
    })
}
const fv = {
    borderRadius: {
        ...Vt,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Vt,
    borderTopRightRadius: Vt,
    borderBottomLeftRadius: Vt,
    borderBottomRightRadius: Vt,
    boxShadow: uv
};

function hv(e, t, n) {
    const r = Y(e) ? e : Jt(e);
    return r.start(Ds("", r, t, n)), r.animation
}

function pv(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const mv = (e, t) => e.depth - t.depth;
class gv {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        ys(this.children, t), this.isDirty = !0
    }
    remove(t) {
        vs(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(mv), this.isDirty = !1, this.children.forEach(t)
    }
}

function yv(e, t) {
    const n = me.now(),
        r = ({
            timestamp: o
        }) => {
            const s = o - n;
            s >= t && ($e(r), e(s - t))
        };
    return F.read(r, !0), () => $e(r)
}
const wu = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    vv = wu.length,
    ta = e => typeof e == "string" ? parseFloat(e) : e,
    na = e => typeof e == "number" || D.test(e);

function xv(e, t, n, r, o, s) {
    o ? (e.opacity = U(0, n.opacity !== void 0 ? n.opacity : 1, wv(r)), e.opacityExit = U(t.opacity !== void 0 ? t.opacity : 1, 0, bv(r))) : s && (e.opacity = U(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let i = 0; i < vv; i++) {
        const a = `border${wu[i]}Radius`;
        let c = ra(t, a),
            u = ra(n, a);
        if (c === void 0 && u === void 0) continue;
        c || (c = 0), u || (u = 0), c === 0 || u === 0 || na(c) === na(u) ? (e[a] = Math.max(U(ta(c), ta(u), r), 0), (pe.test(u) || pe.test(c)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = U(t.rotate || 0, n.rotate || 0, r))
}

function ra(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const wv = bu(0, .5, jl),
    bv = bu(.5, .95, oe);

function bu(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(nn(e, t, r))
}

function oa(e, t) {
    e.min = t.min, e.max = t.max
}

function te(e, t) {
    oa(e.x, t.x), oa(e.y, t.y)
}

function sa(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function ia(e, t, n, r, o) {
    return e -= t, e = qn(e, 1 / n, r), o !== void 0 && (e = qn(e, 1 / o, r)), e
}

function Sv(e, t = 0, n = 1, r = .5, o, s = e, i = e) {
    if (pe.test(t) && (t = parseFloat(t), t = U(i.min, i.max, t / 100) - i.min), typeof t != "number") return;
    let a = U(s.min, s.max, r);
    e === s && (a -= t), e.min = ia(e.min, t, n, a, o), e.max = ia(e.max, t, n, a, o)
}

function aa(e, t, [n, r, o], s, i) {
    Sv(e, t[n], t[r], t[o], t.scale, s, i)
}
const Cv = ["x", "scaleX", "originX"],
    Pv = ["y", "scaleY", "originY"];

function ca(e, t, n, r) {
    aa(e.x, t, Cv, n ? n.x : void 0, r ? r.x : void 0), aa(e.y, t, Pv, n ? n.y : void 0, r ? r.y : void 0)
}

function la(e) {
    return e.translate === 0 && e.scale === 1
}

function Su(e) {
    return la(e.x) && la(e.y)
}

function ua(e, t) {
    return e.min === t.min && e.max === t.max
}

function Ev(e, t) {
    return ua(e.x, t.x) && ua(e.y, t.y)
}

function da(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function Cu(e, t) {
    return da(e.x, t.x) && da(e.y, t.y)
}

function fa(e) {
    return Q(e.x) / Q(e.y)
}

function ha(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class Tv {
    constructor() {
        this.members = []
    }
    add(t) {
        ys(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (vs(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0) return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const s = this.members[o];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: o
            } = t.options;
            o === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function Rv(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x,
        s = e.y.translate / t.y,
        i = (n == null ? void 0 : n.z) || 0;
    if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: d,
            rotateX: f,
            rotateY: h,
            skewX: p,
            skewY: g
        } = n;
        u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), p && (r += `skewX(${p}deg) `), g && (r += `skewY(${g}deg) `)
    }
    const a = e.x.scale * t.x,
        c = e.y.scale * t.y;
    return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none"
}
const _r = ["", "X", "Y", "Z"],
    Av = {
        visibility: "hidden"
    },
    pa = 1e3;
let Mv = 0;

function Wr(e, t, n, r) {
    const {
        latestValues: o
    } = t;
    o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function Pu(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = Rl(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: o,
            layoutId: s
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", F, !(o || s))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && Pu(r)
}

function Eu({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: o
}) {
    return class {
        constructor(i = {}, a = t == null ? void 0 : t()) {
            this.id = Mv++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(Iv), this.nodes.forEach(jv), this.nodes.forEach($v), this.nodes.forEach(Ov)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let c = 0; c < this.path.length; c++) this.path[c].shouldResetTransform = !0;
            this.root === this && (this.nodes = new gv)
        }
        addEventListener(i, a) {
            return this.eventHandlers.has(i) || this.eventHandlers.set(i, new xs), this.eventHandlers.get(i).add(a)
        }
        notifyListeners(i, ...a) {
            const c = this.eventHandlers.get(i);
            c && c.notify(...a)
        }
        hasListeners(i) {
            return this.eventHandlers.has(i)
        }
        mount(i, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = pv(i), this.instance = i;
            const {
                layoutId: c,
                layout: u,
                visualElement: d
            } = this.options;
            if (d && !d.current && d.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || c) && (this.isLayoutDirty = !0), e) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                e(i, () => {
                    this.root.updateBlockedByResize = !0, f && f(), f = yv(h, 250), Nn.hasAnimatedSinceResize && (Nn.hasAnimatedSinceResize = !1, this.nodes.forEach(ga))
                })
            }
            c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({
                delta: f,
                hasLayoutChanged: h,
                hasRelativeLayoutChanged: p,
                layout: g
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const m = this.options.transition || d.getDefaultTransition() || Uv,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: v
                    } = d.getProps(),
                    b = !this.targetLayout || !Cu(this.targetLayout, g),
                    w = !h && p;
                if (this.options.layoutRoot || this.resumeFrom || w || h && (b || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, w);
                    const C = {
                        ...gs(m, "layout"),
                        onPlay: x,
                        onComplete: v
                    };
                    (d.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C)
                } else h || ga(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const i = this.getStack();
            i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, $e(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Bv), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: i
            } = this.options;
            return i && i.getProps().transformTemplate
        }
        willUpdate(i = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Pu(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: c
            } = this.options;
            if (a === void 0 && !c) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ma);
                return
            }
            this.isUpdating || this.nodes.forEach(kv), this.isUpdating = !1, this.nodes.forEach(Nv), this.nodes.forEach(Lv), this.nodes.forEach(Dv), this.clearAllSnapshots();
            const a = me.now();
            G.delta = Ae(0, 1e3 / 60, a - G.timestamp), G.timestamp = a, G.isProcessing = !0, Vr.update.process(G), Vr.preRender.process(G), Vr.render.process(G), G.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, os.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Vv), this.sharedNodes.forEach(Fv)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            F.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Q(this.snapshot.measuredBox.x) && !Q(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
            const i = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0)
        }
        updateScroll(i = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a) {
                const c = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: i,
                    isRoot: c,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : c
                }
            }
        }
        resetTransform() {
            if (!o) return;
            const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !Su(this.projectionDelta),
                c = this.getTransformTemplate(),
                u = c ? c(this.latestValues, "") : void 0,
                d = u !== this.prevTransformTemplateValue;
            i && (a || Ue(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(i = !0) {
            const a = this.measurePageBox();
            let c = this.removeElementScroll(a);
            return i && (c = this.removeTransform(c)), Hv(c), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: c,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {
                visualElement: i
            } = this.options;
            if (!i) return z();
            const a = i.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(zv))) {
                const {
                    scroll: d
                } = this.root;
                d && (at(a.x, d.offset.x), at(a.y, d.offset.y))
            }
            return a
        }
        removeElementScroll(i) {
            var c;
            const a = z();
            if (te(a, i), (c = this.scroll) != null && c.wasRoot) return a;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u],
                    {
                        scroll: f,
                        options: h
                    } = d;
                d !== this.root && f && h.layoutScroll && (f.wasRoot && te(a, i), at(a.x, f.offset.x), at(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(i, a = !1) {
            const c = z();
            te(c, i);
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                !a && d.options.layoutScroll && d.scroll && d !== d.root && ct(c, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }), Ue(d.latestValues) && ct(c, d.latestValues)
            }
            return Ue(this.latestValues) && ct(c, this.latestValues), c
        }
        removeTransform(i) {
            const a = z();
            te(a, i);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                if (!u.instance || !Ue(u.latestValues)) continue;
                Co(u.latestValues) && u.updateSnapshot();
                const d = z(),
                    f = u.measurePageBox();
                te(d, f), ca(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
            }
            return Ue(this.latestValues) && ca(a, this.latestValues), a
        }
        setTargetDelta(i) {
            this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(i) {
            this.options = {
                ...this.options,
                ...i,
                crossfade: i.crossfade !== void 0 ? i.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== G.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(i = !1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== a;
            if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = G.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const p = this.getClosestProjectingParent();
                    p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = z(), this.relativeTargetOrigin = z(), Wt(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), te(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = z(), this.targetWithTransforms = z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ky(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : te(this.target, this.layout.layoutBox), pu(this.target, this.targetDelta)) : te(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const p = this.getClosestProjectingParent();
                    p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = z(), this.relativeTargetOrigin = z(), Wt(this.relativeTargetOrigin, this.target, p.target), te(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Co(this.parent.latestValues) || hu(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var g;
            const i = this.getLead(),
                a = !!this.resumingFrom || this !== i;
            let c = !0;
            if ((this.isProjectionDirty || (g = this.parent) != null && g.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === G.timestamp && (c = !1), c) return;
            const {
                layout: u,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d)) return;
            te(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                h = this.treeScale.y;
            Yy(this.layoutCorrected, this.treeScale, this.path, a), i.layout && !i.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (i.target = i.layout.layoutBox, i.targetWithTransforms = z());
            const {
                target: p
            } = i;
            if (!p) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (sa(this.prevProjectionDelta.x, this.projectionDelta.x), sa(this.prevProjectionDelta.y, this.projectionDelta.y)), _t(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !ha(this.projectionDelta.x, this.prevProjectionDelta.x) || !ha(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(i = !0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(), i) {
                const c = this.getStack();
                c && c.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = it(), this.projectionDelta = it(), this.projectionDeltaWithTransform = it()
        }
        setAnimationOrigin(i, a = !1) {
            const c = this.snapshot,
                u = c ? c.latestValues : {},
                d = {
                    ...this.latestValues
                },
                f = it();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = z(),
                p = c ? c.source : void 0,
                g = this.layout ? this.layout.source : void 0,
                m = p !== g,
                x = this.getStack(),
                v = !x || x.members.length <= 1,
                b = !!(m && !v && this.options.crossfade === !0 && !this.path.some(Wv));
            this.animationProgress = 0;
            let w;
            this.mixTargetDelta = C => {
                const S = C / 1e3;
                ya(f.x, i.x, S), ya(f.y, i.y, S), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Wt(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _v(this.relativeTarget, this.relativeTargetOrigin, h, S), w && Ev(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = z()), te(w, this.relativeTarget)), m && (this.animationValues = d, xv(d, u, this.latestValues, S, b, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(i) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ($e(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = F.update(() => {
                Nn.hasAnimatedSinceResize = !0, this.currentAnimation = hv(0, pa, {
                    ...i,
                    onUpdate: a => {
                        this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        i.onComplete && i.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const i = this.getStack();
            i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(pa), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const i = this.getLead();
            let {
                targetWithTransforms: a,
                target: c,
                layout: u,
                latestValues: d
            } = i;
            if (!(!a || !c || !u)) {
                if (this !== i && this.layout && u && Tu(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    c = this.target || z();
                    const f = Q(this.layout.layoutBox.x);
                    c.x.min = i.target.x.min, c.x.max = c.x.min + f;
                    const h = Q(this.layout.layoutBox.y);
                    c.y.min = i.target.y.min, c.y.max = c.y.min + h
                }
                te(a, c), ct(a, d), _t(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
            }
        }
        registerSharedNode(i, a) {
            this.sharedNodes.has(i) || this.sharedNodes.set(i, new Tv), this.sharedNodes.get(i).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const i = this.getStack();
            return i ? i.lead === this : !0
        }
        getLead() {
            var a;
            const {
                layoutId: i
            } = this.options;
            return i ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {
                layoutId: i
            } = this.options;
            return i ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: i
            } = this.options;
            if (i) return this.root.sharedNodes.get(i)
        }
        promote({
            needsReset: i,
            transition: a,
            preserveFollowOpacity: c
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, c), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const i = this.getStack();
            return i ? i.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: i
            } = this.options;
            if (!i) return;
            let a = !1;
            const {
                latestValues: c
            } = i;
            if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a) return;
            const u = {};
            c.z && Wr("z", i, u, this.animationValues);
            for (let d = 0; d < _r.length; d++) Wr(`rotate${_r[d]}`, i, u, this.animationValues), Wr(`skew${_r[d]}`, i, u, this.animationValues);
            i.render();
            for (const d in u) i.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
            i.scheduleRender()
        }
        getProjectionStyles(i) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Av;
            const a = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, a.opacity = "", a.pointerEvents = Vn(i == null ? void 0 : i.pointerEvents) || "", a.transform = c ? c(this.latestValues, "") : "none", a;
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                const p = {};
                return this.options.layoutId && (p.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, p.pointerEvents = Vn(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Ue(this.latestValues) && (p.transform = c ? c({}, "") : "none", this.hasProjected = !1), p
            }
            const d = u.animationValues || u.latestValues;
            this.applyTransformsToTarget(), a.transform = Rv(this.projectionDeltaWithTransform, this.treeScale, d), c && (a.transform = c(d, a.transform));
            const {
                x: f,
                y: h
            } = this.projectionDelta;
            a.transformOrigin = `${f.origin*100}% ${h.origin*100}% 0`, u.animationValues ? a.opacity = u === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : a.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const p in Xt) {
                if (d[p] === void 0) continue;
                const {
                    correct: g,
                    applyTo: m,
                    isCSSVariable: x
                } = Xt[p], v = a.transform === "none" ? d[p] : g(d[p], u);
                if (m) {
                    const b = m.length;
                    for (let w = 0; w < b; w++) a[m[w]] = v
                } else x ? this.options.visualElement.renderState.vars[p] = v : a[p] = v
            }
            return this.options.layoutId && (a.pointerEvents = u === this ? Vn(i == null ? void 0 : i.pointerEvents) || "" : "none"), a
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(i => {
                var a;
                return (a = i.currentAnimation) == null ? void 0 : a.stop()
            }), this.root.nodes.forEach(ma), this.root.sharedNodes.clear()
        }
    }
}

function Lv(e) {
    e.updateLayout()
}

function Dv(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: o
        } = e.layout, {
            animationType: s
        } = e.options, i = t.source !== e.layout.source;
        s === "size" ? ne(f => {
            const h = i ? t.measuredBox[f] : t.layoutBox[f],
                p = Q(h);
            h.min = r[f].min, h.max = h.min + p
        }) : Tu(s, t.layoutBox, r) && ne(f => {
            const h = i ? t.measuredBox[f] : t.layoutBox[f],
                p = Q(r[f]);
            h.max = h.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + p)
        });
        const a = it();
        _t(a, r, t.layoutBox);
        const c = it();
        i ? _t(c, e.applyTransform(o, !0), t.measuredBox) : _t(c, r, t.layoutBox);
        const u = !Su(a);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: h,
                    layout: p
                } = f;
                if (h && p) {
                    const g = z();
                    Wt(g, t.layoutBox, h.layoutBox);
                    const m = z();
                    Wt(m, r, p.layoutBox), Cu(g, m) || (d = !0), f.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = g, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: c,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: d
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function Iv(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function Ov(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Vv(e) {
    e.clearSnapshot()
}

function ma(e) {
    e.clearMeasurements()
}

function kv(e) {
    e.isLayoutDirty = !1
}

function Nv(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function ga(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function jv(e) {
    e.resolveTargetDelta()
}

function $v(e) {
    e.calcProjection()
}

function Bv(e) {
    e.resetSkewAndRotation()
}

function Fv(e) {
    e.removeLeadSnapshot()
}

function ya(e, t, n) {
    e.translate = U(t.translate, 0, n), e.scale = U(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function va(e, t, n, r) {
    e.min = U(t.min, n.min, r), e.max = U(t.max, n.max, r)
}

function _v(e, t, n, r) {
    va(e.x, t.x, n.x, r), va(e.y, t.y, n.y, r)
}

function Wv(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Uv = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    xa = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    wa = xa("applewebkit/") && !xa("chrome/") ? Math.round : oe;

function ba(e) {
    e.min = wa(e.min), e.max = wa(e.max)
}

function Hv(e) {
    ba(e.x), ba(e.y)
}

function Tu(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Gy(fa(t), fa(n), .2)
}

function zv(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const Gv = Eu({
        attachResizeListener: (e, t) => rn(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Ur = {
        current: void 0
    },
    Ru = Eu({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Ur.current) {
                const e = new Gv({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Ur.current = e
            }
            return Ur.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    Kv = {
        pan: {
            Feature: lv
        },
        drag: {
            Feature: cv,
            ProjectionNode: Ru,
            MeasureLayout: xu
        }
    };

function Yv(e, t, n) {
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        let r = document;
        const o = (n == null ? void 0 : n[e]) ?? r.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e)
}

function Au(e, t) {
    const n = Yv(e),
        r = new AbortController,
        o = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, o, () => r.abort()]
}

function Sa(e) {
    return !(e.pointerType === "touch" || lu())
}

function Zv(e, t, n = {}) {
    const [r, o, s] = Au(e, n), i = a => {
        if (!Sa(a)) return;
        const {
            target: c
        } = a, u = t(c, a);
        if (typeof u != "function" || !c) return;
        const d = f => {
            Sa(f) && (u(f), c.removeEventListener("pointerleave", d))
        };
        c.addEventListener("pointerleave", d, o)
    };
    return r.forEach(a => {
        a.addEventListener("pointerenter", i, o)
    }), s
}

function Ca(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n,
        s = r[o];
    s && F.postRender(() => s(t, hn(t)))
}
class Xv extends Fe {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Zv(t, (n, r) => (Ca(this.node, r, "Start"), o => Ca(this.node, o, "End"))))
    }
    unmount() {}
}
class qv extends Fe {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = fn(rn(this.node.current, "focus", () => this.onFocus()), rn(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Mu = (e, t) => t ? e === t ? !0 : Mu(e, t.parentElement) : !1,
    Qv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Jv(e) {
    return Qv.has(e.tagName) || e.tabIndex !== -1
}
const jt = new WeakSet;

function Pa(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}

function Hr(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const e0 = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = Pa(() => {
        if (jt.has(n)) return;
        Hr(n, "down");
        const o = Pa(() => {
                Hr(n, "up")
            }),
            s = () => Hr(n, "cancel");
        n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t)
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function Ea(e) {
    return Is(e) && !lu()
}

function t0(e, t, n = {}) {
    const [r, o, s] = Au(e, n), i = a => {
        const c = a.currentTarget;
        if (!Ea(a) || jt.has(c)) return;
        jt.add(c);
        const u = t(c, a),
            d = (p, g) => {
                window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), !(!Ea(p) || !jt.has(c)) && (jt.delete(c), typeof u == "function" && u(p, {
                    success: g
                }))
            },
            f = p => {
                d(p, c === window || c === document || n.useGlobalTarget || Mu(c, p.target))
            },
            h = p => {
                d(p, !1)
            };
        window.addEventListener("pointerup", f, o), window.addEventListener("pointercancel", h, o)
    };
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a instanceof HTMLElement && (a.addEventListener("focus", u => e0(u, o)), !Jv(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }), s
}

function Ta(e, t, n) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n),
        s = r[o];
    s && F.postRender(() => s(t, hn(t)))
}
class n0 extends Fe {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = t0(t, (n, r) => (Ta(this.node, r, "Start"), (o, {
            success: s
        }) => Ta(this.node, o, s ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const To = new WeakMap,
    zr = new WeakMap,
    r0 = e => {
        const t = To.get(e.target);
        t && t(e)
    },
    o0 = e => {
        e.forEach(r0)
    };

function s0({
    root: e,
    ...t
}) {
    const n = e || document;
    zr.has(n) || zr.set(n, {});
    const r = zr.get(n),
        o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(o0, {
        root: e,
        ...t
    })), r[o]
}

function i0(e, t, n) {
    const r = s0(t);
    return To.set(e, n), r.observe(e), () => {
        To.delete(e), r.unobserve(e)
    }
}
const a0 = {
    some: 0,
    all: 1
};
class c0 extends Fe {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: o = "some",
            once: s
        } = t, i = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : a0[o]
        }, a = c => {
            const {
                isIntersecting: u
            } = c;
            if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: d,
                onViewportLeave: f
            } = this.node.getProps(), h = u ? d : f;
            h && h(c)
        };
        return i0(this.node.current, i, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(l0(t, n)) && this.startObserver()
    }
    unmount() {}
}

function l0({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const u0 = {
        inView: {
            Feature: c0
        },
        tap: {
            Feature: n0
        },
        focus: {
            Feature: qv
        },
        hover: {
            Feature: Xv
        }
    },
    d0 = {
        layout: {
            ProjectionNode: Ru,
            MeasureLayout: xu
        }
    },
    Ro = {
        current: null
    },
    Lu = {
        current: !1
    };

function f0() {
    if (Lu.current = !0, !!Jo)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => Ro.current = e.matches;
            e.addListener(t), t()
        } else Ro.current = !1
}
const h0 = [...Ql, K, Be],
    p0 = e => h0.find(ql(e)),
    m0 = new WeakMap;

function g0(e, t, n) {
    for (const r in t) {
        const o = t[r],
            s = n[r];
        if (Y(o)) e.addValue(r, o);
        else if (Y(s)) e.addValue(r, Jt(o, {
            owner: e
        }));
        else if (s !== o)
            if (e.hasValue(r)) {
                const i = e.getValue(r);
                i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o)
            } else {
                const i = e.getStaticValue(r);
                e.addValue(r, Jt(i !== void 0 ? i : o, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const Ra = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class y0 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: o,
        blockInitialAnimation: s,
        visualState: i
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Rs, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const p = me.now();
            this.renderScheduledAt < p && (this.renderScheduledAt = p, F.render(this.render, !1, !0))
        };
        const {
            latestValues: c,
            renderState: u,
            onUpdate: d
        } = i;
        this.onUpdate = d, this.latestValues = c, this.baseTarget = {
            ...c
        }, this.initialValues = n.initial ? {
            ...c
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = dr(n), this.isVariantNode = ul(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: f,
            ...h
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const p in h) {
            const g = h[p];
            c[p] !== void 0 && Y(g) && g.set(c[p], !1)
        }
    }
    mount(t) {
        this.current = t, m0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Lu.current || f0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ro.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), $e(this.notifyUpdate), $e(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = et.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const o = n.on("change", a => {
                this.latestValues[t] = a, this.props.onUpdate && F.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            s = n.on("renderRequest", this.scheduleRender);
        let i;
        window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            o(), s(), i && i(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in mt) {
            const n = mt[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: o
            } = n;
            if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(), s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : z()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Ra.length; r++) {
            const o = Ra[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
            const s = "on" + o,
                i = t[s];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = g0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Jt(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (Zl(r) || Bl(r)) ? r = parseFloat(r) : !p0(r) && Be.test(n) && (r = Gl(t, n)), this.setBaseTarget(t, Y(r) ? r.get() : r)), Y(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {
            initial: n
        } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const i = ps(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            i && (r = i[t])
        }
        if (n && r !== void 0) return r;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Y(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new xs), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Du extends y0 {
    constructor() {
        super(...arguments), this.KeyframeResolver = Jl
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Y(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function v0(e) {
    return window.getComputedStyle(e)
}
class x0 extends Du {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = bl
    }
    readValueFromInstance(t, n) {
        if (et.has(n)) return Cg(t, n);
        {
            const r = v0(t),
                o = (is(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return mu(t, n)
    }
    build(t, n, r) {
        ls(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return ms(t, n, r)
    }
}
class w0 extends Du {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = z, this.updateDimensions = () => {
            this.current && !this.renderState.dimensions && wl(this.current, this.renderState)
        }
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (et.has(n)) {
            const r = zl(n);
            return r && r.default || 0
        }
        return n = Sl.has(n) ? n : ss(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Pl(t, n, r)
    }
    onBindTransform() {
        this.current && !this.renderState.dimensions && F.postRender(this.updateDimensions)
    }
    build(t, n, r) {
        fs(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, o) {
        Cl(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = hs(t.tagName), super.mount(t)
    }
}
const b0 = (e, t) => ds(e) ? new w0(t) : new x0(t, {
        allowProjection: e !== l.Fragment
    }),
    S0 = _m({
        ...jy,
        ...u0,
        ...Kv,
        ...d0
    }, b0),
    Z = rm(S0);

function Aa() {
    return document.getElementById(ef) ?? void 0
}

function Iu() {
    const [e, t] = l.useState(Aa());
    return l.useEffect(() => {
        e || t(Aa())
    }, [e]), e
}

function hr() {
    const {
        path: e
    } = l.use(tf), {
        navigate: t
    } = l.use(nf);
    return l.useMemo(() => {
        const r = e.split("/")[0];
        return {
            activeApp: r || void 0,
            path: e,
            navigate: t
        }
    }, [t, e])
}
const C0 = e => l.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        d: "M3.79297 11.793L9.50008 6.08586L10.9143 7.50007L7.6214 10.793L16.2072 10.793V12.793L7.6214 12.793L10.9143 16.0859L9.50008 17.5001L3.79297 11.793Z",
        fill: "currentColor"
    }), l.createElement("path", {
        d: "M18.2072 19.793V3.79297L20.2072 3.79297L20.2072 19.793H18.2072Z",
        fill: "currentColor"
    })),
    P0 = {
        app: "",
        isOpen: !1,
        open: () => {},
        close: () => {},
        isDimmed: !1,
        setIsDimmed: () => {},
        overrideMinimized: () => {},
        shouldOverrideMinimized: !1
    },
    Ou = l.createContext(P0),
    E0 = er("overlay.drawer"),
    T0 = X({
        slots: ["wrapper", "content", "sidebar", "closeButton", "closeIcon", "closeTooltip"],
        base: {
            wrapper: {
                pos: "absolute",
                top: 0,
                left: 0,
                h: "100%",
                w: "fit-content",
                display: "flex",
                alignItems: "flex-start"
            },
            content: {
                pos: "relative",
                bg: "surface.level.1",
                h: "100%",
                minW: 400,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                boxShadow: "0px 4px 8px 0px {colors.baseBlack/60}",
                border: "1px solid {colors.stroke.rule}",
                borderLeft: "none",
                zIndex: "zLayer",
                overflow: "hidden"
            },
            sidebar: {
                pos: "relative",
                display: "flex",
                flexDir: "column",
                alignItems: "flex-start",
                h: "100%",
                w: "fit-content",
                zIndex: "zBase"
            },
            closeIcon: {
                h: 24,
                w: 24,
                color: "icon.secondary"
            },
            closeButton: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bg: "surface.level.3",
                p: 8,
                mt: 16,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                boxShadow: "0px 4px 8px 0px {colors.baseBlack/60}",
                cursor: "pointer",
                _hover: {
                    bg: "surface.level.2"
                }
            },
            closeTooltip: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "4px 8px",
                bg: "surface.level.0",
                borderRadius: 999,
                color: "text.primary",
                textStyle: "label/sm",
                boxShadow: "0px 4px 8px 0px {colors.baseBlack/60}"
            }
        },
        variants: {
            isDimmed: {
                true: {
                    content: {
                        _before: {
                            pos: "absolute",
                            content: '""',
                            bottom: 0,
                            left: 0,
                            w: "100%",
                            h: "calc(100% - 60px)",
                            zIndex: "zLayer2",
                            bg: "black",
                            opacity: .4,
                            transition: "opacity 150ms ease-in",
                            userSelect: "none"
                        }
                    }
                },
                false: {
                    content: {
                        _before: {
                            pos: "absolute",
                            content: '""',
                            bottom: 0,
                            left: 0,
                            w: "100%",
                            h: 0,
                            zIndex: "zLayer2",
                            bg: "black",
                            opacity: 0,
                            userSelect: "none"
                        }
                    }
                }
            }
        }
    });

function R0({
    app: e,
    Button: t,
    Sidebar: n,
    onClose: r,
    onOpen: o,
    children: s
}) {
    const {
        isAuthorized: i
    } = Me(), {
        activeApp: a,
        navigate: c
    } = hr(), u = Iu(), [d, f] = l.useState(!1), [h, p] = l.useState(!1), g = l.useCallback(() => {
        o == null || o(), c(e)
    }, [e, c, o]);
    l.useEffect(() => {
        try {
            const C = window.localStorage.getItem(Ys);
            C && JSON.parse(C) === !0 && i && (window.localStorage.removeItem(Ys), g())
        } catch (C) {
            E0.error(C)
        }
    }, [g, i]);
    const m = l.useCallback(() => {
            r == null || r(), c("")
        }, [c, r]),
        x = l.useMemo(() => a === e, [e, a]),
        v = l.useMemo(() => ({
            app: e,
            isOpen: x,
            open: g,
            close: m,
            isDimmed: d,
            shouldOverrideMinimized: h,
            overrideMinimized: p,
            setIsDimmed: f
        }), [e, d, x, g, m, f, h]),
        b = Qe("shotcall.drawer.close"),
        w = T0({
            isDimmed: d
        });
    return y.jsxs(Ou.Provider, {
        value: v,
        children: [!x && y.jsx(t, {}), y.jsx(je, {
            children: x ? y.jsxs(Z.div, {
                initial: {
                    x: "-100%"
                },
                animate: {
                    x: "0%"
                },
                exit: {
                    x: "-100%"
                },
                transition: {
                    duration: .3,
                    bounce: 0
                },
                className: w.wrapper,
                children: [y.jsx("div", {
                    className: w.content,
                    children: s
                }), y.jsxs("div", {
                    className: w.sidebar,
                    children: [y.jsx(kp, {
                        delayDuration: 0,
                        children: y.jsxs(Np, {
                            children: [y.jsx(jp, {
                                asChild: !0,
                                children: y.jsx("button", {
                                    className: w.closeButton,
                                    onClick: m,
                                    children: y.jsx(C0, {
                                        className: w.closeIcon
                                    })
                                })
                            }), y.jsx($p, {
                                container: u,
                                children: y.jsx(Bp, {
                                    sideOffset: 8,
                                    side: "right",
                                    children: y.jsx(Z.div, {
                                        initial: {
                                            x: -5,
                                            opacity: 0
                                        },
                                        animate: {
                                            x: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: .3
                                        },
                                        className: w.closeTooltip,
                                        children: b
                                    })
                                })
                            })]
                        })
                    }), n && y.jsx(n, {})]
                })]
            }, `${e}-drawer`) : y.jsx(y.Fragment, {})
        })]
    })
}
const A0 = new AudioContext,
    M0 = {
        context: A0
    },
    Ma = 1,
    L0 = 2;

function D0(e) {
    if (e < 0 || e > 1) return {
        gain: 1,
        volume: 1
    };
    let t, n;
    if (e <= .5) t = 1, n = e * 2;
    else {
        const r = (e - .5) * 2,
            o = Math.log10(1 + 9 * r);
        t = Ma + o * (L0 - Ma), n = 1
    }
    return {
        gain: Math.floor(t * 1e3) / 1e3,
        volume: n
    }
}

function I0(e) {
    const {
        context: t
    } = M0, n = l.useMemo(() => e / 100, [e]), {
        gain: r,
        volume: o
    } = l.useMemo(() => D0(n), [n]);
    return l.useCallback(async s => {
        await t.resume();
        const i = new Audio(s);
        i.volume = o;
        const a = t.createMediaElementSource(i),
            c = t.createGain();
        c.gain.value = r, a.connect(c), c.connect(t.destination);
        const u = () => {
            a.disconnect(), c.disconnect(), i.removeEventListener("ended", u)
        };
        return i.addEventListener("ended", u), i.play().catch(u)
    }, [t, r, o])
}
const Os = {
    ...Bn
};

function O0() {
    const {
        send: e
    } = l.use(Oo);
    return e
}

function V0(e) {
    const {
        notifications: t,
        dismiss: n
    } = l.use(Oo), r = l.useCallback(() => {
        var i;
        const s = (i = t.current.get(e)) == null ? void 0 : i.map(({
            id: a
        }) => a);
        n(e, s ?? [])
    }, [n, t, e]), o = l.useCallback(s => {
        var a;
        const i = (a = t.current.get(e)) == null ? void 0 : a.filter(({
            type: c
        }) => c === s).map(({
            id: c
        }) => c);
        i && i.length > 0 && n(e, i)
    }, [n, t, e]);
    return {
        dismissAll: r,
        dismissByType: o
    }
}

function k0(e, t, n) {
    const {
        notifications: r,
        dismiss: o
    } = l.use(Oo), [s, i] = l.useState([]), [a, c] = l.useState(new Set), u = l.useRef(a), d = l.useRef(s), f = l.useRef(() => {});
    l.useEffect(() => {
        u.current = a
    }, [a]), l.useEffect(() => {
        d.current = s
    }, [s]), l.useEffect(() => {
        f.current = () => {
            const w = r.current.get(e) ?? [],
                C = w.filter(T => t.includes(T.type)),
                S = d.current.filter(T => w.some(M => M.id === T.id)),
                E = C.filter(T => !u.current.has(T.id) && !S.some(M => M.id === T.id)),
                P = [...S, ...E];
            n && P.sort((T, M) => {
                const V = n[T.type].priority,
                    L = n[M.type].priority;
                if (V !== L) return L - V;
                const I = w.findIndex(N => N.id === T.id),
                    A = w.findIndex(N => N.id === M.id);
                return I - A
            }), i(P)
        }
    }, [n, r, e, t]), l.useEffect(() => {
        var C;
        const w = {
            notify: f.current,
            types: t
        };
        return gn.has(e) || gn.set(e, new Set), (C = gn.get(e)) == null || C.add(w), () => {
            var S;
            (S = gn.get(e)) == null || S.delete(w)
        }
    }, [e, t]);
    const h = l.useCallback((...w) => {
            o(e, w)
        }, [o, e]),
        p = l.useCallback(() => {
            o(e, s.map(({
                id: w
            }) => w))
        }, [o, s, e]),
        g = l.useCallback(w => {
            o(e, s.filter(({
                type: C
            }) => C === w).map(({
                id: C
            }) => C))
        }, [o, s, e]),
        m = l.useCallback(w => {
            i(C => C.filter(S => S.id !== w)), c(C => {
                const S = new Set(C);
                return S.add(w), S
            })
        }, []),
        x = l.useCallback(() => {
            i([]), c(new Set(s.map(({
                id: w
            }) => w)))
        }, [s]),
        v = l.useCallback(w => {
            i([]);
            const C = new Set(s.filter(({
                type: S
            }) => S === w).map(({
                id: S
            }) => S));
            c(C)
        }, [s]),
        b = l.useCallback(w => n == null ? void 0 : n[w].autoDismissSeconds, [n]);
    return {
        dismiss: h,
        dismissAll: p,
        dismissByType: g,
        getAutoDismissal: b,
        markAsSeen: m,
        markAllAsSeen: x,
        markTypeAsSeen: v,
        notifications: s
    }
}

function N0(e, t) {
    const n = l.useRef(new Set);
    l.useEffect(() => {
        e.forEach(r => {
            n.current.has(r.id) || (n.current.add(r.id), t(r))
        })
    }, [e, t])
}

function j0(e, t) {
    const n = l.useRef(new Set);
    l.useEffect(() => {
        e.forEach(o => {
            n.current.has(o.type) || (n.current.add(o.type), t(o))
        });
        const r = new Set(e.map(o => o.type));
        n.current.forEach(o => {
            r.has(o) || n.current.delete(o)
        })
    }, [e, t])
}
var Xe = (e => (e.ShotcallWatchNotifications = "extension:twitch:shotcall:watchNotifications", e.ShotcallAudioCues = "extension:twitch:shotcall:audioCues", e))(Xe || {}),
    pr = (e => (e.ShotcallAudioVolume = "extension:twitch:shotcall:audioVolume", e))(pr || {});
const $0 = {
        [Xe.ShotcallWatchNotifications]: !0,
        [Xe.ShotcallAudioCues]: !1
    },
    B0 = {
        [pr.ShotcallAudioVolume]: 50
    },
    Vu = _(`
  fragment UserPreference on Preference {
    id
    valueType
    value
  }
`),
    Qn = _(`
  query GetUserPreferences($id: [String!]) {
    userPreferences(id: $id) {
      ...UserPreference
    }
  }
`),
    ku = _(`
  mutation UpdateUserPreferences($preferences: [UserPreferenceInput]!) {
    setUserPreferences(preferences: $preferences) {
      ...UserPreference
    }
  }
`),
    Jn = [...Object.values(Xe), ...Object.values(pr)];

function Vs(e, t) {
    const {
        data: n,
        loading: r,
        error: o
    } = fe(Qn, {
        variables: {
            id: Jn
        }
    }), [s, {
        loading: i,
        error: a
    }] = Bo(ku), c = l.useMemo(() => $0[e], [e, t]), u = l.useCallback(async f => {
        await s({
            refetchQueries: [{
                query: Qn,
                variables: {
                    id: Jn
                }
            }],
            onQueryUpdated: h => n != null && n.userPreferences.length ? Promise.resolve() : h.refetch(),
            variables: {
                preferences: f.map(h => ({
                    id: h.id,
                    value: h.value,
                    type: "bool"
                }))
            },
            optimisticResponse: {
                __typename: "Mutation",
                setUserPreferences: f.map(h => ({
                    __typename: "Preference",
                    valueType: "bool",
                    ...h
                }))
            }
        })
    }, [n, s]), d = l.useMemo(() => {
        if (!n) return c;
        const h = q(Vu, n.userPreferences.filter(p => !!p)).find(p => p.id === e);
        if (!h) return c;
        if (h.valueType === "bool") {
            if (h.value === "false") return !1;
            if (h.value === "true") return !0
        }
        return c
    }, [n, c, e]);
    return [u, {
        preference: d,
        getError: o,
        getLoading: r,
        updateError: a,
        updateLoading: i
    }]
}

function F0(e, t) {
    const {
        data: n,
        loading: r,
        error: o
    } = fe(Qn, {
        variables: {
            id: Jn
        }
    }), [s, {
        loading: i,
        error: a
    }] = Bo(ku), c = l.useMemo(() => B0[e], [e, t]), u = l.useCallback(async f => {
        await s({
            refetchQueries: [{
                query: Qn,
                variables: {
                    id: Jn
                }
            }],
            onQueryUpdated: h => n != null && n.userPreferences.length ? Promise.resolve() : h.refetch(),
            variables: {
                preferences: f.map(h => ({
                    id: h.id,
                    value: h.value,
                    type: "int"
                }))
            },
            optimisticResponse: {
                __typename: "Mutation",
                setUserPreferences: f.map(h => ({
                    __typename: "Preference",
                    valueType: "int",
                    ...h
                }))
            }
        })
    }, [n, s]), d = l.useMemo(() => {
        if (!n) return c;
        const h = q(Vu, n.userPreferences.filter(g => !!g)).find(g => g.id === e);
        if (!h) return c;
        const p = parseInt(h.value);
        return Number.isNaN(p) ? c : p
    }, [n, c, e]);
    return [u, {
        preference: d,
        getError: o,
        getLoading: r,
        updateError: a,
        updateLoading: i
    }]
}
var mr = (e => (e.Prompts = "prompts", e))(mr || {}),
    Nu = (e => (e.Scored = "scored", e.Resolved = "resolved", e))(Nu || {}),
    Se = (e => (e.Triggered = "triggered", e.Closed = "closed", e.Resolved = "resolved", e.Scored = "scored", e))(Se || {});
const gr = af.extend({
        a: vt(lf.Shotcall).optional(),
        t: oc(["prompts", ...Object.values(ft)]),
        v: Ye()
    }),
    _0 = rf.merge(gr),
    W0 = of.merge(gr),
    U0 = sf.merge(gr).extend({
        e: oc([Gs.Start, Gs.End, "scored", "resolved"])
    }),
    ju = rc("b", [_0, W0, U0]),
    yr = gr.extend({
        t: vt("prompts"),
        e: cf(Se)
    }),
    H0 = yr.extend({
        e: vt("triggered"),
        p: to(dt({
            i: Ye()
        }))
    }),
    z0 = yr.extend({
        e: vt("closed"),
        p: to(dt({
            i: Ye(),
            c: to(dt({
                i: Ye(),
                c: uf()
            }))
        }))
    }),
    G0 = yr.extend({
        e: vt("resolved"),
        p: dt({
            i: Ye()
        }),
        r: dt({
            i: Ye()
        })
    }),
    K0 = yr.extend({
        e: vt("scored"),
        p: dt({
            i: Ye()
        })
    }),
    ks = rc("e", [H0, z0, G0, K0]),
    $u = {
        enabled: !1
    },
    Bu = l.createContext($u);
var Ce = (e => (e.SetShotcallConfiguration = "setShotcallConfiguration", e.SetShotcallVersion = "setShotcallVersion", e.SetShotcallScoredVersion = "setShotcallScoredVersion", e))(Ce || {});

function Pt() {
    return l.use(Bu)
}

function SS(e, t, n) {
    switch (t.state) {
        case Pe.Open:
            return (n == null ? void 0 : n.choiceID) === e.id ? "openSelected" : "unselected";
        case Pe.Closed:
            return (n == null ? void 0 : n.choiceID) === e.id ? "selected" : "unselected";
        case Pe.Resolved:
            return n && n.choiceID === e.id ? e.isCorrect ? "correctSelected" : "incorrectSelected" : e.isCorrect ? "correct" : "unselected";
        default:
            return "unselected"
    }
}

function Y0(e) {
    var n;
    return (n = e.sort((r, o) => {
        const s = r.closedTime ? Date.parse(r.closedTime) : 1 / 0,
            i = o.closedTime ? Date.parse(o.closedTime) : 1 / 0;
        return s - i
    })[0]) == null ? void 0 : n.closedTime
}

function CS(e, t) {
    var a;
    const n = e.choices.reduce((c, u) => c + u.predictionCount, 0);
    if (n === 0 || t.predictionCount === 0) return 0;
    const r = new Map,
        o = new Map;
    e.choices.forEach(({
        id: c,
        predictionCount: u
    }) => {
        const d = u / n * 100,
            f = Math.floor(d),
            h = {
                exact: d,
                floored: f,
                diff: d - f
            };
        r.set(c, h);
        const p = o.get(h.diff);
        p ? p.push(h) : o.set(h.diff, [h])
    });
    const s = [...o.keys()].sort((c, u) => u - c);
    let i = 100 - [...r.values()].reduce((c, {
        floored: u
    }) => c + u, 0);
    return s.forEach(c => {
        const u = o.get(c);
        u && i >= u.length && (i -= u.length, u.forEach(d => {
            d.floored += 1
        }))
    }), ((a = r.get(t.id)) == null ? void 0 : a.floored) ?? 0
}
const Z0 = {
        tournament: void 0,
        matches: [],
        teams: {},
        players: {},
        activeMatchId: void 0,
        activeGameId: void 0,
        selectedGameId: void 0,
        prompts: {},
        promptsByContest: {
            [de.Game]: {},
            [de.Match]: {}
        },
        arePromptsInitialized: !1,
        isPromptsWindowClosing: !1,
        isLoadingPrompts: !1,
        isLoadingSession: !1,
        isSessionInitialized: !1,
        loadedVersion: void 0
    },
    Fu = l.createContext(Z0),
    _u = l.createContext(void 0),
    X0 = {
        predictions: {}
    },
    Wu = l.createContext(X0);
var re = (e => (e.Play = "play", e.Rewards = "rewards", e.Leaderboards = "leaderboards", e.Settings = "settings", e))(re || {});
const q0 = _(`
  fragment ShotcallTeamPlayer on Player {
    id
    handle
  }
`),
    Q0 = _(`
  fragment ShotcallTeam on Team {
    id
    name
    code
    image
    players {
      ...ShotcallTeamPlayer
    }
  }
`),
    J0 = _(`
  fragment ShotcallGame on Game {
    id
    number
    state
    allShotcallPromptsResolved(version: $version)
    teams {
      ...ShotcallTeam
    }
  }
`),
    ex = _(`
  fragment ShotcallMatch on Match {
    id
    state
    strategy {
      type
      count
    }
    matchTeams {
      code
    }
    games {
      ...ShotcallGame
    }
  }
`),
    tx = _(`
  query GetShotcallSession($version: ID!, $hl: Locale!) {
    sessionState(version: $version, hl: $hl) {
      version
      tournament {
        id
        endTime
        name
        league {
          name
        }
      }
      match {
        ...ShotcallMatch
      }
    }
  }
`),
    nx = _(`
  fragment ShotcallPrediction on Prediction {
    id
    promptID
    choiceID
  }
`),
    rx = _(`
  query GetShotcallPredictions($version: ID!) {
    predictions(version: $version) {
      ...ShotcallPrediction
    }
  }
`),
    ox = _(`
  mutation CreateShotcallPrediction($input: CreatePredictionInput!) {
    makePrediction(input: $input) {
      ...ShotcallPrediction
    }
  }
`),
    sx = _(`
  fragment ShotcallPromptChoice on Choice {
    id
    answerBody
    answerType
    order
    isCorrect
    isUnderdog
    underdogBonusMultiplier
    predictionCount
  }
`),
    ix = _(`
  fragment ShotcallPrompt on Prompt {
    id
    questionBody
    state
    openTime
    closedTime
    resolvedTime
    pointValue
    contestType
    contestId
    choices {
      ...ShotcallPromptChoice
    }
  }
`),
    ax = _(`
  query GetShotcallPrompts($version: ID!, $hl: Locale!) {
    prompts(version: $version, hl: $hl) {
      ...ShotcallPrompt
    }
  }
`),
    Uu = _(`
  fragment ShotcallScore on PlayerScore {
    id
    numberCorrect
    playerName
    promptParticipationCount
    percentRank
    rank
    scopeId
    score
  }
`),
    cx = _(`
  query GetShotcallScore($version: ID, $scope: ScopeType!, $scopeId: ID) {
    playerScores(version: $version, scope: $scope, scopeId: $scopeId) {
      ...ShotcallScore
    }
  }
`),
    lx = _(`
  fragment ShotcallScopedLeaderboard on ShotcallLeaderboard {
    id
    scopeId
    scopeType
    entries {
      ...ShotcallScore
    }
  }
`),
    ux = _(`
  query GetShotcallLeaderboards($version: ID!, $scope: ScopeType!) {
    shotcallLeaderboards(version: $version, scope: $scope) {
      ...ShotcallScopedLeaderboard
    }
  }
`),
    dx = _(`
  fragment DisplayShotcallRewardCriteria on ShotcallRewardCriteria {
    id
    rewardId
    rewardType
    scope
    scopeId
    scoreThreshold
    percentageAbove
    predictionThreshold
    rankAbove
  }
`),
    fx = _(`
  query GetShotcallRewardCriteria($tournamentId: ID!, $hl: Locale!) {
    shotcallRewardCriteria(tournamentId: $tournamentId, hl: $hl) {
      ...DisplayShotcallRewardCriteria
    }
  }
`),
    Hu = _(`
  fragment UserEarnedShotcallReward on EarnedDrop {
    groupID
  }
`),
    zu = _(`
  query GetUserShotcallRewards($locale: String, $tournamentId: String!) {
    earnedReward(locale: $locale, tournament: $tournamentId, site: "SHOTCALL") {
      ...UserEarnedShotcallReward
    }
  }
`),
    hx = _(`
  fragment ShotcallReward on EarnableReward {
    id
    dropsetTitle
    dropsetDescription
    localizedInventory {
      title {
        locale
        localizationString
      }
      description {
        locale
        localizationString
      }
      inventory {
        id
        quantity
        imageUrl
      }
    }
  }
`),
    px = _(`
  query GetShotcallRewards($locale: String, $tournament: String) {
    earnableReward(locale: $locale, tournament: $tournament, site: "SHOTCALL") {
      ...ShotcallReward
    }
  }
`);

function Le() {
    return l.use(Fu)
}

function mx() {
    const e = l.use(_u);
    if (!e) throw new Error("ShotcallSessionUpdater context is not available");
    return e
}

function vr() {
    return l.use(Wu)
}

function Gu() {
    const e = mx();
    return l.useCallback(n => {
        e(r => ({
            ...r,
            selectedGameId: n
        }))
    }, [e])
}

function Ku() {
    const {
        path: e,
        navigate: t
    } = hr(), n = l.useMemo(() => {
        const c = e.split("/")[1];
        return c && Object.values(re).includes(c) ? c : re.Play
    }, [e]), r = Gu(), o = l.useCallback(a => {
        const {
            view: c,
            subPath: u
        } = a, d = u ? `${Bn.Shotcall}/${c}/${u}` : `${Bn.Shotcall}/${c}`;
        t(d)
    }, [t]), s = l.useCallback(a => {
        const {
            gameId: c,
            ...u
        } = a;
        c && r(c), o(u)
    }, [r, o]);
    return l.useMemo(() => ({
        view: n,
        setView: o,
        setViewWithGameId: s
    }), [n, o, s])
}

function gx(e, t) {
    const {
        promptsByContest: n
    } = Le(), r = Object.values(n[e][t] ?? {}), o = l.useMemo(() => r.filter(a => a.state === Pe.Open).sort((a, c) => Date.parse(c.openTime) - Date.parse(a.openTime)), [r]), s = l.useMemo(() => r.filter(a => a.state === Pe.Closed).sort((a, c) => Date.parse(c.openTime) - Date.parse(a.openTime)), [r]), i = l.useMemo(() => r.filter(a => a.state === Pe.Resolved).sort((a, c) => c.resolvedTime && a.resolvedTime ? Date.parse(c.resolvedTime) - Date.parse(a.resolvedTime) : Date.parse(c.openTime) - Date.parse(a.openTime)), [r]);
    return {
        prompts: r,
        open: o,
        closed: s,
        resolved: i
    }
}

function PS() {
    const [e, {
        loading: t,
        error: n
    }] = Bo(ox);
    return {
        makePrediction: l.useCallback(async o => {
            await e({
                variables: {
                    input: o
                },
                optimisticResponse: {
                    __typename: "Mutation",
                    makePrediction: {
                        __typename: "Prediction",
                        id: o.predictionID ?? o.promptID,
                        promptID: o.promptID,
                        choiceID: o.choiceID
                    }
                },
                update: (s, {
                    data: i
                }) => {
                    const a = i == null ? void 0 : i.makePrediction;
                    a && s.modify({
                        fields: {
                            predictions(c = [], {
                                readField: u
                            }) {
                                const d = s.writeFragment({
                                    id: s.identify(a),
                                    data: a,
                                    fragment: df
                                });
                                return Array.isArray(c) ? [...c.filter(h => u("id", h) !== o.promptID), d] : [c, d]
                            }
                        }
                    })
                }
            })
        }, [e]),
        loading: t,
        error: n
    }
}

function yx(e) {
    const {
        isSessionInitialized: t,
        tournament: n
    } = Le(), {
        scoredVersion: r
    } = Pt(), o = l.useMemo(() => e === tr.Tournament ? (n == null ? void 0 : n.id) ?? "" : "", [e, n]), {
        data: s,
        previousData: i,
        loading: a,
        error: c
    } = fe(cx, {
        skip: !r || !t,
        variables: {
            version: r ?? "",
            scopeId: o,
            scope: e
        }
    }), u = l.useMemo(() => {
        const d = s ?? i;
        return q(Uu, d == null ? void 0 : d.playerScores)
    }, [s, i]);
    return {
        error: c,
        loading: a,
        playerScores: u
    }
}

function Yu(e, t) {
    const {
        playerScores: n,
        loading: r,
        error: o
    } = yx(e);
    return {
        playerScore: l.useMemo(() => n == null ? void 0 : n.find(i => i.scopeId === t), [n, t]),
        loading: r,
        error: o
    }
}

function Zu(e) {
    const {
        prompts: t
    } = Le(), n = l.useMemo(() => Object.values(t).filter(c => c.state === Pe.Open), [t]), r = l.useMemo(() => n.length > 0 && n.every(c => !c.closedTime), [n]), o = l.useMemo(() => Y0(n), [n]), s = l.useCallback(() => {
        r || e == null || e()
    }, [r, e]), i = wf(o ? new Date(o) : 0, s), a = l.useMemo(() => i.hours === 0 && i.minutes === 0 && i.seconds < 11 && i.seconds !== 0, [i]);
    return {
        countdown: i,
        openPrompts: n,
        isClosingSoon: a,
        isIndefiniteWindow: r
    }
}

function ES(e, t) {
    const {
        playerScore: n,
        loading: r
    } = Yu(tr.Game, e), [o, s] = sn({
        key: "shotcall.game.stats.pts",
        vars: {
            points: n == null ? void 0 : n.score
        }
    }, {
        key: "shotcall.game.stats.topPercent",
        vars: {
            percent: n == null ? void 0 : n.percentRank
        }
    });
    return l.useMemo(() => ({
        correct: (n == null ? void 0 : n.numberCorrect) != null ? `${String(n.numberCorrect)}/${String(t)}` : void 0,
        score: (n == null ? void 0 : n.score) != null ? o : void 0,
        rank: (n == null ? void 0 : n.percentRank) != null ? s : void 0,
        loading: r
    }), [o, s, t, r, n])
}

function Xu(e) {
    const {
        loadedVersion: t
    } = Le(), n = l.useRef([]), r = l.useCallback(o => {
        n.current.push(o)
    }, []);
    return l.useEffect(() => {
        if (!t) return;
        const [o, s] = t.split(":"), i = [], a = n.current;
        n.current = [], a.forEach(c => {
            const [u, d] = c.v.split(":");
            o && u && o === u && s && d && Number(d) <= Number(s) ? e(c) : i.push(c)
        }), n.current = [...i, ...n.current]
    }, [t, e]), {
        queueMessage: r
    }
}
var R = (e => (e.GameComplete = "game-complete", e.Live = "live", e.OpenPrompt = "open-prompt", e.ResolvedPrompt = "resolved-prompt", e.RewardUnlocked = "reward-unlocked", e.UpcomingGame = "upcoming-game", e.AudioTutorial = "audio-tutorial", e.PlayCollapsedTutorial = "play-collapsed-tutorial", e.Survey = "survey", e))(R || {});
const vx = {
        [R.OpenPrompt]: {
            priority: 1
        },
        [R.GameComplete]: {
            autoDismissSeconds: 10,
            priority: 2
        },
        [R.RewardUnlocked]: {
            autoDismissSeconds: 10,
            priority: 3
        },
        [R.ResolvedPrompt]: {
            autoDismissSeconds: 10,
            priority: 4
        },
        [R.UpcomingGame]: {
            autoDismissSeconds: 10,
            priority: 4
        },
        [R.Live]: {
            autoDismissSeconds: 10,
            priority: 5
        },
        [R.Survey]: {
            autoDismissSeconds: 15,
            priority: 6
        },
        [R.AudioTutorial]: {
            priority: -1 / 0
        },
        [R.PlayCollapsedTutorial]: {
            priority: -1 / 0
        }
    },
    xx = er("shotcall.notifications.hooks"),
    wx = [R.OpenPrompt, R.ResolvedPrompt];

function pn() {
    const e = O0();
    return l.useCallback(t => {
        e(Os.Shotcall, t)
    }, [e])
}

function qu() {
    return V0(Os.Shotcall)
}

function xr(e) {
    return k0(Os.Shotcall, e, vx)
}

function bx() {
    const e = pn(),
        t = l.useCallback(o => {
            if (o.b === In.Game && o.e === Nu.Resolved) {
                const s = o.g.i;
                e({
                    type: R.GameComplete,
                    payload: {
                        gameId: s
                    }
                })
            }
        }, [e]),
        {
            queueMessage: n
        } = Xu(t),
        r = l.useCallback((o, s) => {
            const i = Ve(o, s),
                a = ju.safeParse(i);
            a.success && n(a.data)
        }, [n]);
    Ge(ft.Boundary, r)
}

function Sx() {
    const e = pn(),
        {
            activeApp: t
        } = hr();
    l.useEffect(() => {
        if (t === void 0) try {
            const n = window.localStorage.getItem(no);
            n && JSON.parse(n) === !0 && (window.localStorage.removeItem(no), window.setTimeout(() => {
                e({
                    type: R.PlayCollapsedTutorial
                }), e({
                    type: R.AudioTutorial
                })
            }, 250))
        } catch (n) {
            xx.error(n)
        }
    }, [t, e])
}

function Cx() {
    const e = pn(),
        t = l.useCallback((n, r) => {
            const o = Ve(n, r),
                s = sc.safeParse(o);
            s.success && s.data.e === ic.Survey && e({
                type: R.Survey,
                payload: {
                    surveyUrl: s.data.l
                }
            })
        }, [e]);
    Ge(ft.Account, t)
}

function Px() {
    const e = pn(),
        t = l.useCallback(o => {
            switch (o.e) {
                case Se.Triggered: {
                    o.p.forEach(({
                        i: s
                    }) => {
                        e({
                            type: R.OpenPrompt,
                            payload: {
                                promptId: s
                            }
                        })
                    });
                    break
                }
                case Se.Resolved: {
                    const {
                        i: s
                    } = o.p, {
                        i
                    } = o.r;
                    e({
                        type: R.ResolvedPrompt,
                        payload: {
                            correctChoiceId: i,
                            promptId: s
                        }
                    });
                    break
                }
            }
        }, [e]),
        {
            queueMessage: n
        } = Xu(t),
        r = l.useCallback((o, s) => {
            const i = Ve(o, s),
                a = ks.safeParse(i);
            if (a.success) switch (a.data.e) {
                case Se.Triggered:
                case Se.Closed:
                case Se.Resolved:
                    n(a.data)
            }
        }, [n]);
    Ge(mr.Prompts, r)
}

function Ex() {
    const [, {
        preference: e
    }] = F0(pr.ShotcallAudioVolume);
    return I0(e)
}

function Tx() {
    const {
        notifications: e
    } = xr(wx), [, {
        preference: t
    }] = Vs(Xe.ShotcallAudioCues), n = Ex(), r = l.useCallback(o => {
        if (t) switch (o.type) {
            case R.OpenPrompt:
                return void n("./audio/shotcall/notification-7.mp3");
            case R.ResolvedPrompt:
                return void n("./audio/shotcall/notification-7.mp3");
            default:
                return
        }
    }, [n, t]);
    j0(e, r)
}

function Ns() {
    return l.use(Ou)
}
const Rx = on({
    w: "fit-content",
    mb: 8
});

function Ax({
    children: e
}) {
    const {
        app: t,
        open: n,
        shouldOverrideMinimized: r
    } = Ns(), {
        arePlayerControlsVisible: o
    } = Vo(), s = l.useMemo(() => o === void 0 ? r : o || r, [o, r]);
    return y.jsx(je, {
        children: s && y.jsx(Z.button, {
            className: Rx,
            onClick: n,
            initial: {
                x: "-100%"
            },
            animate: {
                x: "0%"
            },
            exit: {
                x: "-100%"
            },
            transition: {
                duration: .3,
                bounce: 0
            },
            children: e
        }, `${t}-open`)
    })
}
const Mx = e => l.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.0625 6.75L9.1875 14.625L6.9375 12.3739L5.25 14.0625L7.49888 16.3125L9.1875 18L10.875 16.3125L18.7489 8.4375L17.0625 6.75Z",
        fill: "currentColor"
    })),
    Lx = e => l.createElement("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.00065 13.3334C10.9462 13.3334 13.334 10.9456 13.334 8.00004C13.334 5.05452 10.9462 2.66671 8.00065 2.66671C5.05513 2.66671 2.66732 5.05452 2.66732 8.00004C2.66732 10.9456 5.05513 13.3334 8.00065 13.3334ZM8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z",
        fill: "currentColor"
    }), l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.33398 4.00004H8.66732V8.00004L11.0007 9.33337L10.3717 10.4893L7.33398 8.66671V4.00004Z",
        fill: "currentColor"
    })),
    Qu = e => l.createElement("svg", {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.1151 16L5.72461 7.6095L7.61023 5.72388L16.0008 14.1144L24.3913 5.72388L26.2769 7.6095L17.8864 16L26.2769 24.3905L24.3913 26.2762L16.0008 17.8856L7.61023 26.2762L5.72461 24.3905L14.1151 16Z",
        fill: "currentColor"
    })),
    Dx = e => l.createElement("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        d: "M8.0013 5.33329L6.72516 6.60943L8.0013 7.88558L9.27744 6.60943L8.0013 5.33329Z",
        fill: "currentColor"
    }), l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.66797 12.7058L3.33464 13.3333H12.668L13.3346 12.7058V5.80388L12.668 2.66663H3.33464L2.66797 5.80388V12.7058ZM4.0013 5.94398V7.33329H5.61078L6.94411 8.66663H9.05849L10.3918 7.33329H12.0013V5.94398L11.5882 3.99996H4.41441L4.0013 5.94398ZM12.0013 12V8.66663H10.9441L9.61078 9.99996H6.39183L5.05849 8.66663H4.0013V12H12.0013Z",
        fill: "currentColor"
    })),
    Ix = e => l.createElement("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        d: "M6.70469 10.1795V9.99924C6.70822 9.38055 6.76302 8.88737 6.86908 8.5197C6.97868 8.15202 7.13777 7.85505 7.34635 7.62879C7.55494 7.40252 7.80595 7.19747 8.09938 7.01364C8.31858 6.87222 8.51479 6.7255 8.68802 6.57348C8.86125 6.42146 8.99913 6.25353 9.10166 6.0697C9.20418 5.88232 9.25545 5.67374 9.25545 5.44394C9.25545 5.2 9.19711 4.98611 9.08045 4.80227C8.96378 4.61843 8.80646 4.47702 8.60848 4.37803C8.41403 4.27904 8.19837 4.22954 7.96151 4.22954C7.73171 4.22954 7.51428 4.28081 7.30923 4.38333C7.10418 4.48232 6.93625 4.63081 6.80544 4.82879C6.67464 5.02323 6.60393 5.2654 6.59332 5.5553H4.42969C4.44736 4.84823 4.61706 4.2649 4.93878 3.8053C5.2605 3.34217 5.68651 2.99747 6.21681 2.77121C6.74711 2.54141 7.33221 2.42651 7.97211 2.42651C8.67565 2.42651 9.29787 2.54318 9.83878 2.77651C10.3797 3.00631 10.8039 3.3404 11.1115 3.77879C11.4191 4.21717 11.5729 4.74571 11.5729 5.36439C11.5729 5.77803 11.5039 6.14571 11.3661 6.46742C11.2317 6.7856 11.0426 7.06843 10.7986 7.31591C10.5547 7.55985 10.2666 7.78081 9.93423 7.97879C9.65494 8.14495 9.42514 8.31818 9.24484 8.49848C9.06807 8.67879 8.9355 8.88737 8.84711 9.12424C8.76226 9.36111 8.71807 9.65278 8.71454 9.99924V10.1795H6.70469ZM7.75469 13.5735C7.40115 13.5735 7.09888 13.4497 6.84787 13.2023C6.60039 12.9513 6.47842 12.6508 6.48196 12.3008C6.47842 11.9543 6.60039 11.6573 6.84787 11.4098C7.09888 11.1624 7.40115 11.0386 7.75469 11.0386C8.09055 11.0386 8.38575 11.1624 8.64029 11.4098C8.89484 11.6573 9.02388 11.9543 9.02741 12.3008C9.02388 12.5341 8.96201 12.748 8.84181 12.9424C8.72514 13.1333 8.57135 13.2871 8.38044 13.4038C8.18954 13.5169 7.98095 13.5735 7.75469 13.5735Z",
        fill: "currentColor"
    })),
    Ju = e => l.createElement("svg", {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.9993 21C19.154 21 23.3327 16.8214 23.3327 11.6667C23.3327 6.51205 19.154 2.33337 13.9993 2.33337C8.84469 2.33337 4.66602 6.51205 4.66602 11.6667C4.66602 16.8214 8.84469 21 13.9993 21ZM13.9993 18.6667C17.8653 18.6667 20.9993 15.5327 20.9993 11.6667C20.9993 7.80071 17.8653 4.66671 13.9993 4.66671C10.1334 4.66671 6.99935 7.80071 6.99935 11.6667C6.99935 15.5327 10.1334 18.6667 13.9993 18.6667Z",
        fill: "currentColor"
    }), l.createElement("path", {
        d: "M21.7697 23.3124C19.4297 24.8737 16.6735 25.6939 13.8606 25.666C11.0476 25.6381 8.30827 24.7635 5.99965 23.156L7.59959 20.8582C9.44649 22.1441 11.6379 22.8438 13.8883 22.8662C16.1387 22.8885 18.3436 22.2323 20.2156 20.9833L21.7697 23.3124Z",
        fill: "currentColor"
    }), l.createElement("path", {
        d: "M14.466 7.00004L15.7493 9.91671L18.666 11.2V12.1334L15.7493 13.4167L14.466 16.3334H13.5327L12.2493 13.4167L9.33268 12.1334V11.2L12.2493 9.91671L13.5327 7.00004H14.466Z",
        fill: "currentColor"
    })),
    Ox = [R.Survey, R.Live, R.OpenPrompt, R.ResolvedPrompt, R.RewardUnlocked, R.AudioTutorial, R.PlayCollapsedTutorial, R.GameComplete];

function Vx({
    autoDismissSeconds: e,
    children: t,
    dismiss: n
}) {
    const [, {
        preference: r
    }] = Vs(Xe.ShotcallWatchNotifications);
    return $o(e, n, !r), y.jsx(y.Fragment, {
        children: t
    })
}
const La = X({
    slots: ["container", "icon"],
    base: {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            h: 20,
            w: 20,
            borderRadius: "50%"
        },
        icon: {
            h: 16,
            w: 16,
            color: "icon.primary.inverse"
        }
    }
})();

function js({
    className: e,
    Icon: t
}) {
    return y.jsx("div", {
        className: qe(La.container, e),
        children: y.jsx(t, {
            className: La.icon
        })
    })
}
const Da = X({
    slots: ["container", "label", "icon"],
    base: {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            p: 4,
            bg: "surface.inverse.0",
            borderRadius: 999,
            overflow: "hidden"
        },
        label: {
            display: "flex",
            justifyContent: "center",
            ml: 4,
            color: "text.primary.inverse",
            textStyle: "label/md",
            overflow: "hidden"
        }
    }
})();

function wr({
    children: e,
    label: t
}) {
    return y.jsxs(Z.div, {
        layout: !0,
        className: Da.container,
        children: [y.jsx(je, {
            children: t && y.jsx(Z.span, {
                layout: !0,
                animate: {
                    width: "auto",
                    opacity: 1
                },
                exit: {
                    width: 0,
                    opacity: 1
                },
                className: Da.label,
                transition: {
                    duration: .2,
                    ease: "linear"
                },
                children: t
            }, "badge-label")
        }), e]
    })
}
const En = X({
    slots: ["container", "badgeIcon", "timer", "callout"],
    base: {
        container: {
            display: "flex",
            alignItems: "center",
            bg: "baseBlack/40",
            borderRadius: 999
        },
        timer: {
            w: 48,
            m: "4px 8px",
            color: "text.primary",
            textStyle: "label/md"
        },
        callout: {
            m: "4px 8px",
            color: "text.primary",
            textStyle: "label/md",
            textWrap: "nowrap"
        },
        badgeIcon: {
            bg: "scoring.partial"
        }
    }
})();

function kx({
    onComplete: e
}) {
    const {
        dismissByType: t
    } = qu(), {
        predictions: n
    } = vr(), r = l.useCallback(() => {
        t(R.OpenPrompt)
    }, [t]), {
        countdown: {
            timer: o,
            percentage: s
        },
        openPrompts: i,
        isIndefiniteWindow: a
    } = Zu(r), {
        start: c
    } = $o(3, e, !1);
    l.useEffect(() => {
        !a && s === 100 && c()
    }, [a, s, c]);
    const u = l.useMemo(() => i.filter(p => !n[p.id]).length, [i, n]),
        d = Qe("shotcall.button.timesUp"),
        f = l.useMemo(() => (s < 100 || a) && u > 0 ? String(u) : "", [u, s, a]),
        h = l.useMemo(() => s < 100 || a ? Ix : Lx, [s, a]);
    return y.jsxs("div", {
        className: En.container,
        children: [y.jsx(wr, {
            label: f,
            children: y.jsx(js, {
                className: En.badgeIcon,
                Icon: h
            })
        }), !a && s < 100 && y.jsx("span", {
            className: En.timer,
            children: o
        }), y.jsx(je, {
            children: !a && s === 100 && y.jsx(Z.span, {
                className: En.callout,
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    delay: .2
                },
                children: d
            }, "timer-complete")
        })]
    })
}
const Nx = ff({
    base: {},
    variants: {
        isCorrect: {
            true: {
                bg: "scoring.correct"
            },
            false: {
                bg: "scoring.incorrect"
            }
        }
    }
});

function jx({
    correctChoiceId: e,
    promptId: t
}) {
    const {
        prompts: n
    } = Le(), {
        predictions: r
    } = vr(), o = l.useMemo(() => n[t], [t, n]), s = l.useMemo(() => r[t], [r, t]), i = l.useMemo(() => o == null ? void 0 : o.choices.find(p => p.isCorrect), [o]), a = l.useMemo(() => !!s && s.choiceID === e, [s, e]), [c, u] = sn("shotcall.button.scoringIncorrect", {
        key: "shotcall.button.scoringCorrect",
        vars: {
            points: ((o == null ? void 0 : o.pointValue) ?? 0) * ((i == null ? void 0 : i.underdogBonusMultiplier) ?? 1)
        }
    }), d = l.useMemo(() => a ? u : c, [a, u, c]), f = l.useMemo(() => a ? Mx : Qu, [a]), h = Nx({
        isCorrect: a
    });
    return o ? y.jsx(wr, {
        label: d,
        children: y.jsx(js, {
            className: h,
            Icon: f
        })
    }) : y.jsx(y.Fragment, {})
}
const $x = on({
    bg: "rarity.rare"
});

function Bx() {
    const e = Qe("shotcall.button.unlockedReward");
    return y.jsx(wr, {
        label: e,
        children: y.jsx(js, {
            className: $x,
            Icon: Dx
        })
    })
}
const Fx = on({
    h: 12,
    w: 12,
    m: "4px 4px 4px 0px",
    bg: "live-red",
    borderRadius: "50%"
});

function _x() {
    const e = Qe("shotcall.button.live");
    return y.jsx(wr, {
        label: e,
        children: y.jsx("div", {
            className: Fx
        })
    })
}
const Wx = X({
    slots: ["container", "content", "icon", "radarDot"],
    base: {
        container: {
            pos: "relative",
            bg: "live-red",
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            boxShadow: "0px 4px 8px 0px {colors.baseBlack/60}",
            border: "2px solid {colors.stroke.border.contrast}",
            borderLeft: "none!",
            overflow: "hidden",
            cursor: "pointer",
            zIndex: "zBase",
            _hover: {
                bg: "linear-gradient(0deg, {colors.neutral.white/10} 0%, {colors.neutral.white/10} 100%), {colors.live-red}"
            }
        },
        content: {
            pos: "relative",
            display: "flex",
            alignItems: "center",
            gap: 12,
            w: "fit-content",
            color: "icon.primary",
            py: 8,
            px: 16,
            overflow: "hidden",
            zIndex: "zLayer2"
        },
        icon: {
            h: 28,
            w: 28,
            color: "icon.primary"
        },
        radarDot: {
            pos: "absolute",
            top: 8,
            right: 8,
            h: 6,
            w: 6,
            bg: "surface.inverse.0",
            borderRadius: "50%"
        }
    },
    variants: {
        isWindowClosingSoon: {
            true: {
                container: {
                    _after: {
                        pos: "absolute",
                        content: '""',
                        top: 0,
                        left: 0,
                        h: "100%",
                        w: "100%",
                        bg: "linear-gradient(0deg, {colors.baseBlack/60} 0%, {colors.baseBlack/60} 100%), {colors.live-red}",
                        zIndex: "zLayer",
                        animation: "fadeInPulse 2s ease-in-out infinite"
                    }
                }
            },
            false: {
                container: {
                    _after: {
                        pos: "absolute",
                        content: '""',
                        top: 0,
                        left: 0,
                        h: "100%",
                        w: "100%",
                        bg: "linear-gradient(0deg, {colors.baseBlack/60} 0%, {colors.baseBlack/60} 100%), {colors.live-red}",
                        opacity: 0,
                        transition: "opacity 2s ease-in-out",
                        animation: "none",
                        zIndex: "zLayer"
                    }
                }
            }
        }
    }
});

function Ux() {
    const {
        isOpen: e,
        overrideMinimized: t
    } = Ns(), {
        predictions: n
    } = vr(), {
        prompts: r
    } = Le(), {
        dismiss: o,
        getAutoDismissal: s,
        notifications: i
    } = xr(Ox), {
        countdown: {
            percentage: a,
            hours: c,
            minutes: u,
            seconds: d
        },
        isClosingSoon: f,
        isIndefiniteWindow: h
    } = Zu(), [p, g] = l.useState(), [m, x] = l.useState(!1), v = l.useMemo(() => i.at(-1), [i]);
    l.useEffect(() => {
        x(!1)
    }, [e]), l.useEffect(() => {
        const T = c === 0 && u === 0 && d > 25 && d < 31 && d !== 0;
        v || f || T ? t(!0) : (p !== R.OpenPrompt || a < 100 || h) && t(!1)
    }, [v, p, f, t, a, c, u, d, h]), l.useEffect(() => {
        const T = i.filter(({
            type: M
        }) => M !== R.AudioTutorial && M !== R.PlayCollapsedTutorial && M !== R.Survey);
        !m && T.length > 0 && x(!0)
    }, [m, i]);
    const b = l.useMemo(() => Object.values(r).filter(T => T.state === Pe.Open), [r]);
    l.useEffect(() => {
        b.length > 0 && b.some(T => n[T.id]) && x(!1)
    }, [n, b]), l.useEffect(() => {
        b.length > 0 ? g(R.OpenPrompt) : v && p !== R.OpenPrompt && g(v.type)
    }, [v, p, b]);
    const w = l.useCallback(() => {
            t(!1), g(void 0)
        }, [t]),
        C = l.useCallback(() => {
            v && (o(v.id), g(void 0))
        }, [v, o]),
        S = l.useMemo(() => v ? s(v.type) : 0, [v, s]),
        E = l.useMemo(() => {
            switch (p) {
                case R.Live:
                    return y.jsx(_x, {});
                case R.OpenPrompt:
                    return y.jsx(kx, {
                        onComplete: w
                    });
                case R.ResolvedPrompt:
                    return v && v.type === p ? y.jsx(jx, {
                        correctChoiceId: v.payload.correctChoiceId,
                        promptId: v.payload.promptId
                    }) : void 0;
                case R.RewardUnlocked:
                    return y.jsx(Bx, {});
                default:
                    return
            }
        }, [p, v, w]),
        P = Wx({
            isWindowClosingSoon: f
        });
    return y.jsx(Ax, {
        children: y.jsx(Z.div, {
            layout: !0,
            className: P.container,
            children: y.jsxs("div", {
                className: P.content,
                children: [m && !E && y.jsx("div", {
                    className: P.radarDot
                }), y.jsx(Z.div, {
                    layout: !0,
                    children: y.jsx(Ju, {
                        className: P.icon
                    })
                }), y.jsx(je, {
                    mode: "popLayout",
                    children: E && y.jsx(Z.div, {
                        layout: !0,
                        initial: {
                            opacity: 1
                        },
                        animate: {
                            width: "auto"
                        },
                        exit: {
                            opacity: [1, 1, 1, 0]
                        },
                        transition: {
                            duration: .3
                        },
                        children: v && S > 0 ? y.jsx(Vx, {
                            autoDismissSeconds: S,
                            dismiss: C,
                            children: E
                        }) : E
                    })
                })]
            })
        })
    })
}

function Ut(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Ia(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Hx(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Ia(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : Ia(e[o], null)
            }
        }
    }
}

function $s(...e) {
    return l.useCallback(Hx(...e), e)
}

function zx(e, t = []) {
    let n = [];

    function r(s, i) {
        const a = l.createContext(i),
            c = n.length;
        n = [...n, i];
        const u = f => {
            var v;
            const {
                scope: h,
                children: p,
                ...g
            } = f, m = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || a, x = l.useMemo(() => g, Object.values(g));
            return y.jsx(m.Provider, {
                value: x,
                children: p
            })
        };
        u.displayName = s + "Provider";

        function d(f, h) {
            var m;
            const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || a,
                g = l.useContext(p);
            if (g) return g;
            if (i !== void 0) return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const o = () => {
        const s = n.map(i => l.createContext(i));
        return function(a) {
            const c = (a == null ? void 0 : a[e]) || s;
            return l.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: c
                }
            }), [a, c])
        }
    };
    return o.scopeName = e, [r, Gx(o, ...t)]
}

function Gx(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce((a, {
                useScope: c,
                scopeName: u
            }) => {
                const f = c(s)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }, {});
            return l.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}

function Gr(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Oa(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Kx(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Oa(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : Oa(e[o], null)
            }
        }
    }
}

function Bs(...e) {
    return l.useCallback(Kx(...e), e)
}

function Yx(e) {
    const t = Zx(e),
        n = l.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = l.Children.toArray(s), c = a.find(qx);
            if (c) {
                const u = c.props.children,
                    d = a.map(f => f === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : f);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null
                })
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function Zx(e) {
    const t = l.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n, i = l.isValidElement(o) ? Jx(o) : void 0, a = Bs(i, r);
        if (l.isValidElement(o)) {
            const c = Qx(s, o.props);
            return o.type !== l.Fragment && (c.ref = a), l.cloneElement(o, c)
        }
        return l.Children.count(o) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Xx = Symbol("radix.slottable");

function qx(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Xx
}

function Qx(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const c = s(...a);
            return o(...a), c
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function Jx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var e1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    ed = e1.reduce((e, t) => {
        const n = Yx(`Primitive.${t}`),
            r = l.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, c = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(c, {
                    ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        }
    }, {});

function t1(e, t) {
    e && nr.flushSync(() => e.dispatchEvent(t))
}

function td(e) {
    const t = l.useRef(e);
    return l.useEffect(() => {
        t.current = e
    }), l.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}
var n1 = "DismissableLayer",
    Ao = "dismissableLayer.update",
    r1 = "dismissableLayer.pointerDownOutside",
    o1 = "dismissableLayer.focusOutside",
    Va, nd = l.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    rd = l.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: s,
            onInteractOutside: i,
            onDismiss: a,
            ...c
        } = e, u = l.useContext(nd), [d, f] = l.useState(null), h = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = l.useState({}), g = Bs(t, P => f(P)), m = Array.from(u.layers), [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = m.indexOf(x), b = d ? m.indexOf(d) : -1, w = u.layersWithOutsidePointerEventsDisabled.size > 0, C = b >= v, S = a1(P => {
            const T = P.target,
                M = [...u.branches].some(V => V.contains(T));
            !C || M || (o == null || o(P), i == null || i(P), P.defaultPrevented || a == null || a())
        }, h), E = c1(P => {
            const T = P.target;
            [...u.branches].some(V => V.contains(T)) || (s == null || s(P), i == null || i(P), P.defaultPrevented || a == null || a())
        }, h);
        return hc(P => {
            b === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()))
        }, h), l.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Va = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), ka(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Va)
            }
        }, [d, h, n, u]), l.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), ka())
        }, [d, u]), l.useEffect(() => {
            const P = () => p({});
            return document.addEventListener(Ao, P), () => document.removeEventListener(Ao, P)
        }, []), y.jsx(ed.div, {
            ...c,
            ref: g,
            style: {
                pointerEvents: w ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: Gr(e.onFocusCapture, E.onFocusCapture),
            onBlurCapture: Gr(e.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: Gr(e.onPointerDownCapture, S.onPointerDownCapture)
        })
    });
rd.displayName = n1;
var s1 = "DismissableLayerBranch",
    i1 = l.forwardRef((e, t) => {
        const n = l.useContext(nd),
            r = l.useRef(null),
            o = Bs(t, r);
        return l.useEffect(() => {
            const s = r.current;
            if (s) return n.branches.add(s), () => {
                n.branches.delete(s)
            }
        }, [n.branches]), y.jsx(ed.div, {
            ...e,
            ref: o
        })
    });
i1.displayName = s1;

function a1(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = td(e),
        r = l.useRef(!1),
        o = l.useRef(() => {});
    return l.useEffect(() => {
        const s = a => {
                if (a.target && !r.current) {
                    let c = function() {
                        od(r1, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, {
                        once: !0
                    })) : c()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            i = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }, 0);
        return () => {
            window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function c1(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = td(e),
        r = l.useRef(!1);
    return l.useEffect(() => {
        const o = s => {
            s.target && !r.current && od(o1, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function ka() {
    const e = new CustomEvent(Ao);
    document.dispatchEvent(e)
}

function od(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? t1(o, s) : o.dispatchEvent(s)
}
var Kr = 0;

function l1() {
    l.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Na()), document.body.insertAdjacentElement("beforeend", e[1] ?? Na()), Kr++, () => {
            Kr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Kr--
        }
    }, [])
}

function Na() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}

function ja(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function u1(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = ja(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : ja(e[o], null)
            }
        }
    }
}

function sd(...e) {
    return l.useCallback(u1(...e), e)
}

function d1(e) {
    const t = f1(e),
        n = l.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = l.Children.toArray(s), c = a.find(p1);
            if (c) {
                const u = c.props.children,
                    d = a.map(f => f === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : f);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null
                })
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function f1(e) {
    const t = l.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n, i = l.isValidElement(o) ? g1(o) : void 0, a = sd(i, r);
        if (l.isValidElement(o)) {
            const c = m1(s, o.props);
            return o.type !== l.Fragment && (c.ref = a), l.cloneElement(o, c)
        }
        return l.Children.count(o) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var h1 = Symbol("radix.slottable");

function p1(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === h1
}

function m1(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const c = s(...a);
            return o(...a), c
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function g1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var y1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    v1 = y1.reduce((e, t) => {
        const n = d1(`Primitive.${t}`),
            r = l.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, c = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(c, {
                    ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        }
    }, {});

function $a(e) {
    const t = l.useRef(e);
    return l.useEffect(() => {
        t.current = e
    }), l.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}
var Yr = "focusScope.autoFocusOnMount",
    Zr = "focusScope.autoFocusOnUnmount",
    Ba = {
        bubbles: !1,
        cancelable: !0
    },
    x1 = "FocusScope",
    id = l.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...i
        } = e, [a, c] = l.useState(null), u = $a(o), d = $a(s), f = l.useRef(null), h = sd(t, m => c(m)), p = l.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        l.useEffect(() => {
            if (r) {
                let m = function(w) {
                        if (p.paused || !a) return;
                        const C = w.target;
                        a.contains(C) ? f.current = C : Ie(f.current, {
                            select: !0
                        })
                    },
                    x = function(w) {
                        if (p.paused || !a) return;
                        const C = w.relatedTarget;
                        C !== null && (a.contains(C) || Ie(f.current, {
                            select: !0
                        }))
                    },
                    v = function(w) {
                        if (document.activeElement === document.body)
                            for (const S of w) S.removedNodes.length > 0 && Ie(a)
                    };
                document.addEventListener("focusin", m), document.addEventListener("focusout", x);
                const b = new MutationObserver(v);
                return a && b.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", m), document.removeEventListener("focusout", x), b.disconnect()
                }
            }
        }, [r, a, p.paused]), l.useEffect(() => {
            if (a) {
                _a.add(p);
                const m = document.activeElement;
                if (!a.contains(m)) {
                    const v = new CustomEvent(Yr, Ba);
                    a.addEventListener(Yr, u), a.dispatchEvent(v), v.defaultPrevented || (w1(E1(ad(a)), {
                        select: !0
                    }), document.activeElement === m && Ie(a))
                }
                return () => {
                    a.removeEventListener(Yr, u), setTimeout(() => {
                        const v = new CustomEvent(Zr, Ba);
                        a.addEventListener(Zr, d), a.dispatchEvent(v), v.defaultPrevented || Ie(m ?? document.body, {
                            select: !0
                        }), a.removeEventListener(Zr, d), _a.remove(p)
                    }, 0)
                }
            }
        }, [a, u, d, p]);
        const g = l.useCallback(m => {
            if (!n && !r || p.paused) return;
            const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
                v = document.activeElement;
            if (x && v) {
                const b = m.currentTarget,
                    [w, C] = b1(b);
                w && C ? !m.shiftKey && v === C ? (m.preventDefault(), n && Ie(w, {
                    select: !0
                })) : m.shiftKey && v === w && (m.preventDefault(), n && Ie(C, {
                    select: !0
                })) : v === b && m.preventDefault()
            }
        }, [n, r, p.paused]);
        return y.jsx(v1.div, {
            tabIndex: -1,
            ...i,
            ref: h,
            onKeyDown: g
        })
    });
id.displayName = x1;

function w1(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (Ie(r, {
                select: t
            }), document.activeElement !== n) return
}

function b1(e) {
    const t = ad(e),
        n = Fa(t, e),
        r = Fa(t.reverse(), e);
    return [n, r]
}

function ad(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Fa(e, t) {
    for (const n of e)
        if (!S1(n, {
                upTo: t
            })) return n
}

function S1(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function C1(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function Ie(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && C1(e) && t && e.select()
    }
}
var _a = P1();

function P1() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), e = Wa(e, t), e.unshift(t)
        },
        remove(t) {
            var n;
            e = Wa(e, t), (n = e[0]) == null || n.resume()
        }
    }
}

function Wa(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function E1(e) {
    return e.filter(t => t.tagName !== "A")
}

function Ua(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function T1(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Ua(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : Ua(e[o], null)
            }
        }
    }
}

function R1(...e) {
    return l.useCallback(T1(...e), e)
}

function A1(e) {
    const t = M1(e),
        n = l.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = l.Children.toArray(s), c = a.find(D1);
            if (c) {
                const u = c.props.children,
                    d = a.map(f => f === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : f);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null
                })
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function M1(e) {
    const t = l.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n, i = l.isValidElement(o) ? O1(o) : void 0, a = R1(i, r);
        if (l.isValidElement(o)) {
            const c = I1(s, o.props);
            return o.type !== l.Fragment && (c.ref = a), l.cloneElement(o, c)
        }
        return l.Children.count(o) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var L1 = Symbol("radix.slottable");

function D1(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === L1
}

function I1(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const c = s(...a);
            return o(...a), c
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function O1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var V1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    k1 = V1.reduce((e, t) => {
        const n = A1(`Primitive.${t}`),
            r = l.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, c = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(c, {
                    ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        }
    }, {}),
    N1 = "Arrow",
    cd = l.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...s
        } = e;
        return y.jsx(k1.svg, {
            ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : y.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
cd.displayName = N1;
var j1 = cd;

function Ha(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function $1(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = Ha(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : Ha(e[o], null)
            }
        }
    }
}

function Fs(...e) {
    return l.useCallback($1(...e), e)
}

function B1(e, t = []) {
    let n = [];

    function r(s, i) {
        const a = l.createContext(i),
            c = n.length;
        n = [...n, i];
        const u = f => {
            var v;
            const {
                scope: h,
                children: p,
                ...g
            } = f, m = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || a, x = l.useMemo(() => g, Object.values(g));
            return y.jsx(m.Provider, {
                value: x,
                children: p
            })
        };
        u.displayName = s + "Provider";

        function d(f, h) {
            var m;
            const p = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[c]) || a,
                g = l.useContext(p);
            if (g) return g;
            if (i !== void 0) return i;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const o = () => {
        const s = n.map(i => l.createContext(i));
        return function(a) {
            const c = (a == null ? void 0 : a[e]) || s;
            return l.useMemo(() => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: c
                }
            }), [a, c])
        }
    };
    return o.scopeName = e, [r, F1(o, ...t)]
}

function F1(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const i = r.reduce((a, {
                useScope: c,
                scopeName: u
            }) => {
                const f = c(s)[`__scope${u}`];
                return {
                    ...a,
                    ...f
                }
            }, {});
            return l.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}

function _1(e) {
    const t = W1(e),
        n = l.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = l.Children.toArray(s), c = a.find(H1);
            if (c) {
                const u = c.props.children,
                    d = a.map(f => f === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : f);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null
                })
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function W1(e) {
    const t = l.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n, i = l.isValidElement(o) ? G1(o) : void 0, a = Fs(i, r);
        if (l.isValidElement(o)) {
            const c = z1(s, o.props);
            return o.type !== l.Fragment && (c.ref = a), l.cloneElement(o, c)
        }
        return l.Children.count(o) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var U1 = Symbol("radix.slottable");

function H1(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === U1
}

function z1(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const c = s(...a);
            return o(...a), c
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function G1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var K1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    ld = K1.reduce((e, t) => {
        const n = _1(`Primitive.${t}`),
            r = l.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, c = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(c, {
                    ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        }
    }, {});

function Y1(e) {
    const t = l.useRef(e);
    return l.useEffect(() => {
        t.current = e
    }), l.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}
var Mo = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {};

function Z1(e) {
    const [t, n] = l.useState(void 0);
    return Mo(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const s = o[0];
                let i, a;
                if ("borderBoxSize" in s) {
                    const c = s.borderBoxSize,
                        u = Array.isArray(c) ? c[0] : c;
                    i = u.inlineSize, a = u.blockSize
                } else i = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var _s = "Popper",
    [ud, dd] = B1(_s),
    [X1, fd] = ud(_s),
    hd = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, o] = l.useState(null);
        return y.jsx(X1, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
        })
    };
hd.displayName = _s;
var pd = "PopperAnchor",
    md = l.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, s = fd(pd, n), i = l.useRef(null), a = Fs(t, i);
        return l.useEffect(() => {
            s.onAnchorChange((r == null ? void 0 : r.current) || i.current)
        }), r ? null : y.jsx(ld.div, {
            ...o,
            ref: a
        })
    });
md.displayName = pd;
var Ws = "PopperContent",
    [q1, Q1] = ud(Ws),
    gd = l.forwardRef((e, t) => {
        var Et, Tt, Rt, At, Mt, Lt;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: i = 0,
            arrowPadding: a = 0,
            avoidCollisions: c = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: p = "optimized",
            onPlaced: g,
            ...m
        } = e, x = fd(Ws, n), [v, b] = l.useState(null), w = Fs(t, ie => b(ie)), [C, S] = l.useState(null), E = Z1(C), P = (E == null ? void 0 : E.width) ?? 0, T = (E == null ? void 0 : E.height) ?? 0, M = r + (s !== "center" ? "-" + s : ""), V = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, L = Array.isArray(u) ? u : [u], I = L.length > 0, A = {
            padding: V,
            boundary: L.filter(ew),
            altBoundary: I
        }, {
            refs: N,
            floatingStyles: k,
            placement: $,
            isPositioned: j,
            middlewareData: O
        } = Mc({
            strategy: "fixed",
            placement: M,
            whileElementsMounted: (...ie) => Rc(...ie, {
                animationFrame: p === "always"
            }),
            elements: {
                reference: x.anchor
            },
            middleware: [Lc({
                mainAxis: o + T,
                alignmentAxis: i
            }), c && Dc({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === "partial" ? Ic() : void 0,
                ...A
            }), c && Oc({
                ...A
            }), Vc({
                ...A,
                apply: ({
                    elements: ie,
                    rects: Dt,
                    availableWidth: Ar,
                    availableHeight: Mr
                }) => {
                    const {
                        width: Lr,
                        height: Dr
                    } = Dt.reference, we = ie.floating.style;
                    we.setProperty("--radix-popper-available-width", `${Ar}px`), we.setProperty("--radix-popper-available-height", `${Mr}px`), we.setProperty("--radix-popper-anchor-width", `${Lr}px`), we.setProperty("--radix-popper-anchor-height", `${Dr}px`)
                }
            }), C && Nc({
                element: C,
                padding: a
            }), tw({
                arrowWidth: P,
                arrowHeight: T
            }), h && kc({
                strategy: "referenceHidden",
                ...A
            })]
        }), [B, W] = xd($), se = Y1(g);
        Mo(() => {
            j && (se == null || se())
        }, [j, se]);
        const Cr = (Et = O.arrow) == null ? void 0 : Et.x,
            Pr = (Tt = O.arrow) == null ? void 0 : Tt.y,
            Er = ((Rt = O.arrow) == null ? void 0 : Rt.centerOffset) !== 0,
            [Tr, Rr] = l.useState();
        return Mo(() => {
            v && Rr(window.getComputedStyle(v).zIndex)
        }, [v]), y.jsx("div", {
            ref: N.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...k,
                transform: j ? k.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: Tr,
                "--radix-popper-transform-origin": [(At = O.transformOrigin) == null ? void 0 : At.x, (Mt = O.transformOrigin) == null ? void 0 : Mt.y].join(" "),
                ...((Lt = O.hide) == null ? void 0 : Lt.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: y.jsx(q1, {
                scope: n,
                placedSide: B,
                onArrowChange: S,
                arrowX: Cr,
                arrowY: Pr,
                shouldHideArrow: Er,
                children: y.jsx(ld.div, {
                    "data-side": B,
                    "data-align": W,
                    ...m,
                    ref: w,
                    style: {
                        ...m.style,
                        animation: j ? void 0 : "none"
                    }
                })
            })
        })
    });
gd.displayName = Ws;
var yd = "PopperArrow",
    J1 = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    vd = l.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, s = Q1(yd, r), i = J1[s.placedSide];
        return y.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [i]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0
            },
            children: y.jsx(j1, {
                ...o,
                ref: n,
                style: {
                    ...o.style,
                    display: "block"
                }
            })
        })
    });
vd.displayName = yd;

function ew(e) {
    return e !== null
}
var tw = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, v, b;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [u, d] = xd(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [d], h = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, p = (((b = o.arrow) == null ? void 0 : b.y) ?? 0) + c / 2;
        let g = "",
            m = "";
        return u === "bottom" ? (g = i ? f : `${h}px`, m = `${-c}px`) : u === "top" ? (g = i ? f : `${h}px`, m = `${r.floating.height+c}px`) : u === "right" ? (g = `${-c}px`, m = i ? f : `${p}px`) : u === "left" && (g = `${r.floating.width+c}px`, m = i ? f : `${p}px`), {
            data: {
                x: g,
                y: m
            }
        }
    }
});

function xd(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var nw = hd,
    wd = md,
    rw = gd,
    ow = vd;

function za(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function sw(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const s = za(o, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const s = r[o];
                typeof s == "function" ? s() : za(e[o], null)
            }
        }
    }
}

function iw(...e) {
    return l.useCallback(sw(...e), e)
}

function aw(e) {
    const t = cw(e),
        n = l.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = l.Children.toArray(s), c = a.find(uw);
            if (c) {
                const u = c.props.children,
                    d = a.map(f => f === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : f);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null
                })
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function cw(e) {
    const t = l.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n, i = l.isValidElement(o) ? fw(o) : void 0, a = iw(i, r);
        if (l.isValidElement(o)) {
            const c = dw(s, o.props);
            return o.type !== l.Fragment && (c.ref = a), l.cloneElement(o, c)
        }
        return l.Children.count(o) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var lw = Symbol("radix.slottable");

function uw(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === lw
}

function dw(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const c = s(...a);
            return o(...a), c
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function fw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var hw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    pw = hw.reduce((e, t) => {
        const n = aw(`Primitive.${t}`),
            r = l.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, c = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(c, {
                    ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        }
    }, {}),
    mw = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {},
    gw = "Portal",
    bd = l.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, s] = l.useState(!1);
        mw(() => s(!0), []);
        const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return i ? dc.createPortal(y.jsx(pw.div, {
            ...r,
            ref: t
        }), i) : null
    });
bd.displayName = gw;

function Sd(e) {
    const t = yw(e),
        n = l.forwardRef((r, o) => {
            const {
                children: s,
                ...i
            } = r, a = l.Children.toArray(s), c = a.find(xw);
            if (c) {
                const u = c.props.children,
                    d = a.map(f => f === c ? l.Children.count(u) > 1 ? l.Children.only(null) : l.isValidElement(u) ? u.props.children : null : f);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: l.isValidElement(u) ? l.cloneElement(u, void 0, d) : null
                })
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function yw(e) {
    const t = l.forwardRef((n, r) => {
        const {
            children: o,
            ...s
        } = n, i = l.isValidElement(o) ? bw(o) : void 0, a = $s(i, r);
        if (l.isValidElement(o)) {
            const c = ww(s, o.props);
            return o.type !== l.Fragment && (c.ref = a), l.cloneElement(o, c)
        }
        return l.Children.count(o) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var vw = Symbol("radix.slottable");

function xw(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vw
}

function ww(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
            const c = s(...a);
            return o(...a), c
        } : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function bw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Sw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Cd = Sw.reduce((e, t) => {
        const n = Sd(`Primitive.${t}`),
            r = l.forwardRef((o, s) => {
                const {
                    asChild: i,
                    ...a
                } = o, c = i ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(c, {
                    ...a,
                    ref: s
                })
            });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        }
    }, {}),
    Cw = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {},
    Pw = jo[" useInsertionEffect ".trim().toString()] || Cw;

function Ew({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, s, i] = Tw({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, c = a ? e : o;
    {
        const d = l.useRef(e !== void 0);
        l.useEffect(() => {
            const f = d.current;
            f !== a && console.warn(`${r} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = a
        }, [a, r])
    }
    const u = l.useCallback(d => {
        var f;
        if (a) {
            const h = Rw(d) ? d(e) : d;
            h !== e && ((f = i.current) == null || f.call(i, h))
        } else s(d)
    }, [a, e, s, i]);
    return [c, u]
}

function Tw({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = l.useState(e), o = l.useRef(n), s = l.useRef(t);
    return Pw(() => {
        s.current = t
    }, [t]), l.useEffect(() => {
        var i;
        o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n)
    }, [n, o]), [n, r, s]
}

function Rw(e) {
    return typeof e == "function"
}
var Aw = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    tt = new WeakMap,
    Tn = new WeakMap,
    Rn = {},
    Xr = 0,
    Pd = function(e) {
        return e && (e.host || Pd(e.parentNode))
    },
    Mw = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = Pd(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    Lw = function(e, t, n, r) {
        var o = Mw(t, Array.isArray(e) ? e : [e]);
        Rn[n] || (Rn[n] = new WeakMap);
        var s = Rn[n],
            i = [],
            a = new Set,
            c = new Set(o),
            u = function(f) {
                !f || a.has(f) || (a.add(f), u(f.parentNode))
            };
        o.forEach(u);
        var d = function(f) {
            !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
                if (a.has(h)) d(h);
                else try {
                    var p = h.getAttribute(r),
                        g = p !== null && p !== "false",
                        m = (tt.get(h) || 0) + 1,
                        x = (s.get(h) || 0) + 1;
                    tt.set(h, m), s.set(h, x), i.push(h), m === 1 && g && Tn.set(h, !0), x === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true")
                } catch (v) {
                    console.error("aria-hidden: cannot operate on ", h, v)
                }
            })
        };
        return d(t), a.clear(), Xr++,
            function() {
                i.forEach(function(f) {
                    var h = tt.get(f) - 1,
                        p = s.get(f) - 1;
                    tt.set(f, h), s.set(f, p), h || (Tn.has(f) || f.removeAttribute(r), Tn.delete(f)), p || f.removeAttribute(n)
                }), Xr--, Xr || (tt = new WeakMap, tt = new WeakMap, Tn = new WeakMap, Rn = {})
            }
    },
    Dw = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = Aw(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Lw(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    jn = "right-scroll-bar-position",
    $n = "width-before-scroll-bar",
    Iw = "with-scroll-bars-hidden",
    Ow = "--removed-body-scroll-bar-size";

function qr(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function Vw(e, t) {
    var n = l.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var kw = typeof window < "u" ? l.useLayoutEffect : l.useEffect,
    Ga = new WeakMap;

function Nw(e, t) {
    var n = Vw(null, function(r) {
        return e.forEach(function(o) {
            return qr(o, r)
        })
    });
    return kw(function() {
        var r = Ga.get(n);
        if (r) {
            var o = new Set(r),
                s = new Set(e),
                i = n.current;
            o.forEach(function(a) {
                s.has(a) || qr(a, null)
            }), s.forEach(function(a) {
                o.has(a) || qr(a, i)
            })
        }
        Ga.set(n, e)
    }, [e]), n
}

function jw(e) {
    return e
}

function $w(e, t) {
    t === void 0 && (t = jw);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(s) {
                var i = t(s, r);
                return n.push(i),
                    function() {
                        n = n.filter(function(a) {
                            return a !== i
                        })
                    }
            },
            assignSyncMedium: function(s) {
                for (r = !0; n.length;) {
                    var i = n;
                    n = [], i.forEach(s)
                }
                n = {
                    push: function(a) {
                        return s(a)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(s) {
                r = !0;
                var i = [];
                if (n.length) {
                    var a = n;
                    n = [], a.forEach(s), i = n
                }
                var c = function() {
                        var d = i;
                        i = [], d.forEach(s)
                    },
                    u = function() {
                        return Promise.resolve().then(c)
                    };
                u(), n = {
                    push: function(d) {
                        i.push(d), u()
                    },
                    filter: function(d) {
                        return i = i.filter(d), n
                    }
                }
            }
        };
    return o
}

function Bw(e) {
    e === void 0 && (e = {});
    var t = $w(null);
    return t.options = ce({
        async: !0,
        ssr: !1
    }, e), t
}
var Ed = function(e) {
    var t = e.sideCar,
        n = ac(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return l.createElement(r, ce({}, n))
};
Ed.isSideCarExport = !0;

function Fw(e, t) {
    return e.useMedium(t), Ed
}
var Td = Bw(),
    Qr = function() {},
    br = l.forwardRef(function(e, t) {
        var n = l.useRef(null),
            r = l.useState({
                onScrollCapture: Qr,
                onWheelCapture: Qr,
                onTouchMoveCapture: Qr
            }),
            o = r[0],
            s = r[1],
            i = e.forwardProps,
            a = e.children,
            c = e.className,
            u = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            h = e.sideCar,
            p = e.noIsolation,
            g = e.inert,
            m = e.allowPinchZoom,
            x = e.as,
            v = x === void 0 ? "div" : x,
            b = e.gapMode,
            w = ac(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = h,
            S = Nw([n, t]),
            E = ce(ce({}, w), o);
        return l.createElement(l.Fragment, null, d && l.createElement(C, {
            sideCar: Td,
            removeScrollBar: u,
            shards: f,
            noIsolation: p,
            inert: g,
            setCallbacks: s,
            allowPinchZoom: !!m,
            lockRef: n,
            gapMode: b
        }), i ? l.cloneElement(l.Children.only(a), ce(ce({}, E), {
            ref: S
        })) : l.createElement(v, ce({}, E, {
            className: c,
            ref: S
        }), a))
    });
br.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
br.classNames = {
    fullWidth: $n,
    zeroRight: jn
};
var _w = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function Ww() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = _w();
    return t && e.setAttribute("nonce", t), e
}

function Uw(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Hw(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var zw = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = Ww()) && (Uw(t, n), Hw(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Gw = function() {
        var e = zw();
        return function(t, n) {
            l.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    Rd = function() {
        var e = Gw(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    Kw = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Jr = function(e) {
        return parseInt(e || "", 10) || 0
    },
    Yw = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Jr(n), Jr(r), Jr(o)]
    },
    Zw = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return Kw;
        var t = Yw(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    Xw = Rd(),
    ut = "data-scroll-locked",
    qw = function(e, t, n, r) {
        var o = e.left,
            s = e.top,
            i = e.right,
            a = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(Iw, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(ut, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(jn, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat($n, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(jn, " .").concat(jn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat($n, " .").concat($n, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ut, `] {
    `).concat(Ow, ": ").concat(a, `px;
  }
`)
    },
    Ka = function() {
        var e = parseInt(document.body.getAttribute(ut) || "0", 10);
        return isFinite(e) ? e : 0
    },
    Qw = function() {
        l.useEffect(function() {
            return document.body.setAttribute(ut, (Ka() + 1).toString()),
                function() {
                    var e = Ka() - 1;
                    e <= 0 ? document.body.removeAttribute(ut) : document.body.setAttribute(ut, e.toString())
                }
        }, [])
    },
    Jw = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        Qw();
        var s = l.useMemo(function() {
            return Zw(o)
        }, [o]);
        return l.createElement(Xw, {
            styles: qw(s, !t, o, n ? "" : "!important")
        })
    },
    Lo = !1;
if (typeof window < "u") try {
    var An = Object.defineProperty({}, "passive", {
        get: function() {
            return Lo = !0, !0
        }
    });
    window.addEventListener("test", An, An), window.removeEventListener("test", An, An)
} catch {
    Lo = !1
}
var nt = Lo ? {
        passive: !1
    } : !1,
    eb = function(e) {
        return e.tagName === "TEXTAREA"
    },
    Ad = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !eb(e) && n[t] === "visible")
    },
    tb = function(e) {
        return Ad(e, "overflowY")
    },
    nb = function(e) {
        return Ad(e, "overflowX")
    },
    Ya = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = Md(e, r);
            if (o) {
                var s = Ld(e, r),
                    i = s[1],
                    a = s[2];
                if (i > a) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    rb = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    ob = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    Md = function(e, t) {
        return e === "v" ? tb(t) : nb(t)
    },
    Ld = function(e, t) {
        return e === "v" ? rb(t) : ob(t)
    },
    sb = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    ib = function(e, t, n, r, o) {
        var s = sb(e, window.getComputedStyle(t).direction),
            i = s * r,
            a = n.target,
            c = t.contains(a),
            u = !1,
            d = i > 0,
            f = 0,
            h = 0;
        do {
            var p = Ld(e, a),
                g = p[0],
                m = p[1],
                x = p[2],
                v = m - x - s * g;
            (g || v) && Md(e, a) && (f += v, h += g), a instanceof ShadowRoot ? a = a.host : a = a.parentNode
        } while (!c && a !== document.body || c && (t.contains(a) || t === a));
        return (d && Math.abs(f) < 1 || !d && Math.abs(h) < 1) && (u = !0), u
    },
    Mn = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    Za = function(e) {
        return [e.deltaX, e.deltaY]
    },
    Xa = function(e) {
        return e && "current" in e ? e.current : e
    },
    ab = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    cb = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    lb = 0,
    rt = [];

function ub(e) {
    var t = l.useRef([]),
        n = l.useRef([0, 0]),
        r = l.useRef(),
        o = l.useState(lb++)[0],
        s = l.useState(Rd)[0],
        i = l.useRef(e);
    l.useEffect(function() {
        i.current = e
    }, [e]), l.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = hf([e.lockRef.current], (e.shards || []).map(Xa), !0).filter(Boolean);
            return m.forEach(function(x) {
                    return x.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(x) {
                        return x.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var a = l.useCallback(function(m, x) {
            if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey) return !i.current.allowPinchZoom;
            var v = Mn(m),
                b = n.current,
                w = "deltaX" in m ? m.deltaX : b[0] - v[0],
                C = "deltaY" in m ? m.deltaY : b[1] - v[1],
                S, E = m.target,
                P = Math.abs(w) > Math.abs(C) ? "h" : "v";
            if ("touches" in m && P === "h" && E.type === "range") return !1;
            var T = Ya(P, E);
            if (!T) return !0;
            if (T ? S = P : (S = P === "v" ? "h" : "v", T = Ya(P, E)), !T) return !1;
            if (!r.current && "changedTouches" in m && (w || C) && (r.current = S), !S) return !0;
            var M = r.current || S;
            return ib(M, x, m, M === "h" ? w : C)
        }, []),
        c = l.useCallback(function(m) {
            var x = m;
            if (!(!rt.length || rt[rt.length - 1] !== s)) {
                var v = "deltaY" in x ? Za(x) : Mn(x),
                    b = t.current.filter(function(S) {
                        return S.name === x.type && (S.target === x.target || x.target === S.shadowParent) && ab(S.delta, v)
                    })[0];
                if (b && b.should) {
                    x.cancelable && x.preventDefault();
                    return
                }
                if (!b) {
                    var w = (i.current.shards || []).map(Xa).filter(Boolean).filter(function(S) {
                            return S.contains(x.target)
                        }),
                        C = w.length > 0 ? a(x, w[0]) : !i.current.noIsolation;
                    C && x.cancelable && x.preventDefault()
                }
            }
        }, []),
        u = l.useCallback(function(m, x, v, b) {
            var w = {
                name: m,
                delta: x,
                target: v,
                should: b,
                shadowParent: db(v)
            };
            t.current.push(w), setTimeout(function() {
                t.current = t.current.filter(function(C) {
                    return C !== w
                })
            }, 1)
        }, []),
        d = l.useCallback(function(m) {
            n.current = Mn(m), r.current = void 0
        }, []),
        f = l.useCallback(function(m) {
            u(m.type, Za(m), m.target, a(m, e.lockRef.current))
        }, []),
        h = l.useCallback(function(m) {
            u(m.type, Mn(m), m.target, a(m, e.lockRef.current))
        }, []);
    l.useEffect(function() {
        return rt.push(s), e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: h
            }), document.addEventListener("wheel", c, nt), document.addEventListener("touchmove", c, nt), document.addEventListener("touchstart", d, nt),
            function() {
                rt = rt.filter(function(m) {
                    return m !== s
                }), document.removeEventListener("wheel", c, nt), document.removeEventListener("touchmove", c, nt), document.removeEventListener("touchstart", d, nt)
            }
    }, []);
    var p = e.removeScrollBar,
        g = e.inert;
    return l.createElement(l.Fragment, null, g ? l.createElement(s, {
        styles: cb(o)
    }) : null, p ? l.createElement(Jw, {
        gapMode: e.gapMode
    }) : null)
}

function db(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const fb = Fw(Td, ub);
var Dd = l.forwardRef(function(e, t) {
    return l.createElement(br, ce({}, e, {
        ref: t,
        sideCar: fb
    }))
});
Dd.classNames = br.classNames;
var Sr = "Popover",
    [Id, TS] = zx(Sr, [dd]),
    mn = dd(),
    [hb, _e] = Id(Sr),
    Od = e => {
        const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: s,
            modal: i = !1
        } = e, a = mn(t), c = l.useRef(null), [u, d] = l.useState(!1), [f, h] = Ew({
            prop: r,
            defaultProp: o ?? !1,
            onChange: s,
            caller: Sr
        });
        return y.jsx(nw, {
            ...a,
            children: y.jsx(hb, {
                scope: t,
                contentId: yc(),
                triggerRef: c,
                open: f,
                onOpenChange: h,
                onOpenToggle: l.useCallback(() => h(p => !p), [h]),
                hasCustomAnchor: u,
                onCustomAnchorAdd: l.useCallback(() => d(!0), []),
                onCustomAnchorRemove: l.useCallback(() => d(!1), []),
                modal: i,
                children: n
            })
        })
    };
Od.displayName = Sr;
var Vd = "PopoverAnchor",
    pb = l.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = _e(Vd, n), s = mn(n), {
            onCustomAnchorAdd: i,
            onCustomAnchorRemove: a
        } = o;
        return l.useEffect(() => (i(), () => a()), [i, a]), y.jsx(wd, {
            ...s,
            ...r,
            ref: t
        })
    });
pb.displayName = Vd;
var kd = "PopoverTrigger",
    Nd = l.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = _e(kd, n), s = mn(n), i = $s(t, o.triggerRef), a = y.jsx(Cd.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Wd(o.open),
            ...r,
            ref: i,
            onClick: Ut(e.onClick, o.onOpenToggle)
        });
        return o.hasCustomAnchor ? a : y.jsx(wd, {
            asChild: !0,
            ...s,
            children: a
        })
    });
Nd.displayName = kd;
var Us = "PopoverPortal",
    [mb, gb] = Id(Us, {
        forceMount: void 0
    }),
    jd = e => {
        const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
        } = e, s = _e(Us, t);
        return y.jsx(mb, {
            scope: t,
            forceMount: n,
            children: y.jsx(cn, {
                present: n || s.open,
                children: y.jsx(bd, {
                    asChild: !0,
                    container: o,
                    children: r
                })
            })
        })
    };
jd.displayName = Us;
var yt = "PopoverContent",
    $d = l.forwardRef((e, t) => {
        const n = gb(yt, e.__scopePopover),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            s = _e(yt, e.__scopePopover);
        return y.jsx(cn, {
            present: r || s.open,
            children: s.modal ? y.jsx(vb, {
                ...o,
                ref: t
            }) : y.jsx(xb, {
                ...o,
                ref: t
            })
        })
    });
$d.displayName = yt;
var yb = Sd("PopoverContent.RemoveScroll"),
    vb = l.forwardRef((e, t) => {
        const n = _e(yt, e.__scopePopover),
            r = l.useRef(null),
            o = $s(t, r),
            s = l.useRef(!1);
        return l.useEffect(() => {
            const i = r.current;
            if (i) return Dw(i)
        }, []), y.jsx(Dd, {
            as: yb,
            allowPinchZoom: !0,
            children: y.jsx(Bd, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: Ut(e.onCloseAutoFocus, i => {
                    var a;
                    i.preventDefault(), s.current || (a = n.triggerRef.current) == null || a.focus()
                }),
                onPointerDownOutside: Ut(e.onPointerDownOutside, i => {
                    const a = i.detail.originalEvent,
                        c = a.button === 0 && a.ctrlKey === !0,
                        u = a.button === 2 || c;
                    s.current = u
                }, {
                    checkForDefaultPrevented: !1
                }),
                onFocusOutside: Ut(e.onFocusOutside, i => i.preventDefault(), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }),
    xb = l.forwardRef((e, t) => {
        const n = _e(yt, e.__scopePopover),
            r = l.useRef(!1),
            o = l.useRef(!1);
        return y.jsx(Bd, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: s => {
                var i, a;
                (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: s => {
                var c, u;
                (c = e.onInteractOutside) == null || c.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const i = s.target;
                ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
            }
        })
    }),
    Bd = l.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: a,
            onPointerDownOutside: c,
            onFocusOutside: u,
            onInteractOutside: d,
            ...f
        } = e, h = _e(yt, n), p = mn(n);
        return l1(), y.jsx(id, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: y.jsx(rd, {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onInteractOutside: d,
                onEscapeKeyDown: a,
                onPointerDownOutside: c,
                onFocusOutside: u,
                onDismiss: () => h.onOpenChange(!1),
                children: y.jsx(rw, {
                    "data-state": Wd(h.open),
                    role: "dialog",
                    id: h.contentId,
                    ...p,
                    ...f,
                    ref: t,
                    style: {
                        ...f.style,
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            })
        })
    }),
    Fd = "PopoverClose",
    wb = l.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = _e(Fd, n);
        return y.jsx(Cd.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: Ut(e.onClick, () => o.onOpenChange(!1))
        })
    });
wb.displayName = Fd;
var bb = "PopoverArrow",
    _d = l.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = mn(n);
        return y.jsx(ow, {
            ...o,
            ...r,
            ref: t
        })
    });
_d.displayName = bb;

function Wd(e) {
    return e ? "open" : "closed"
}
var Sb = Od,
    Cb = Nd,
    Pb = jd,
    Eb = $d,
    RS = _d;
const Tb = e => l.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        d: "M12 8L10.0858 9.91421L12 11.8284L13.9142 9.91421L12 8Z",
        fill: "currentColor"
    }), l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 19.0588L5 20L19 20L20 19.0588V8.70588L19 4L5 4L4 8.70588L4 19.0588ZM6 8.91604V11H8.41421L10.4142 13H13.5858L15.5858 11L18 11V8.91604L17.3803 6L6.61966 6L6 8.91604ZM18 18V13H16.4142L14.4142 15H9.58579L7.58579 13H6V18H18Z",
        fill: "currentColor"
    })),
    Rb = e => l.createElement("svg", {
        width: 32,
        height: 32,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.6536 18.3379C23.2943 19.5157 22.6704 20.5783 21.8513 21.4562L22.4887 24.5709L20.1793 25.9043L17.8021 23.7963C17.2231 23.9296 16.6201 24 16.0007 24C15.3812 24 14.7782 23.9296 14.1992 23.7963L11.822 25.9043L9.51261 24.5709L10.15 21.4562C9.33088 20.5782 8.70704 19.5157 8.34767 18.3379L5.33398 17.3333L5.33398 14.6666L8.34767 13.6621C8.70704 12.4842 9.33088 11.4217 10.15 10.5438L9.51262 7.42904L11.822 6.0957L14.1992 8.20364C14.7782 8.07039 15.3812 7.99998 16.0007 7.99998C16.6201 7.99998 17.2231 8.07039 17.8022 8.20364L20.1793 6.09571L22.4887 7.42904L21.8513 10.5438C22.6704 11.4217 23.2943 12.4842 23.6536 13.6621L26.6673 14.6666L26.6673 17.3333L23.6536 18.3379ZM12.0007 16C12.0007 18.2091 13.7915 20 16.0007 20C18.2098 20 20.0007 18.2091 20.0007 16C20.0007 13.7908 18.2098 12 16.0007 12C13.7915 12 12.0007 13.7908 12.0007 16Z",
        fill: "currentColor"
    })),
    Ab = e => l.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18 4L6 4V5L7 6H4L3 7L3 11L7 13V14L10 15L9.5 18H8L7 19L7 20L17 20V19L16 18H14.5L14 15L17 14V13L21 11V7L20 6L17 6L18 5V4ZM5 8V10L7 11L7 8H5ZM19 10V8H17V11L19 10Z",
        fill: "currentColor"
    })),
    Mb = X({
        slots: ["container", "activeIndicator", "link", "icon", "tooltip"],
        base: {
            container: {
                pos: "relative",
                listStyle: "none",
                bg: "surface.level.1",
                cursor: "pointer",
                _hover: {
                    bg: "surface.level.2"
                }
            },
            activeIndicator: {
                pos: "absolute",
                top: 0,
                left: 0,
                h: "100%",
                w: "100%",
                bg: "live-red",
                zIndex: "zLayer"
            },
            link: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 8,
                cursor: "pointer"
            },
            icon: {
                h: 24,
                w: 24,
                pos: "relative",
                zIndex: "zLayer2",
                color: "icon.secondary"
            },
            tooltip: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "4px 8px",
                bg: "surface.level.0",
                borderRadius: 999,
                color: "text.primary",
                textStyle: "label/sm",
                boxShadow: "0px 4px 8px 0px {colors.baseBlack/60}"
            }
        },
        variants: {
            isActive: {
                true: {
                    icon: {
                        color: "icon.primary"
                    }
                }
            }
        }
    });

function Ln({
    Icon: e,
    tooltip: t,
    view: n
}) {
    const {
        view: r,
        setView: o
    } = Ku(), [s, i] = l.useState(!1), a = l.useRef(void 0), c = Iu(), u = l.useMemo(() => r === n, [r, n]), d = l.useCallback(() => {
        a.current && (window.clearTimeout(a.current), i(!0))
    }, []), f = l.useCallback(() => {
        a.current = window.setTimeout(() => {
            i(!1)
        }, 100)
    }, []), h = l.useCallback(() => {
        r !== n && o({
            view: n
        })
    }, [r, o, n]), p = Mb({
        isActive: u
    });
    return y.jsxs(Sb, {
        open: s,
        children: [y.jsx(Cb, {
            asChild: !0,
            onMouseEnter: d,
            onMouseLeave: f,
            children: y.jsxs("li", {
                className: p.container,
                children: [y.jsx("button", {
                    className: p.link,
                    onClick: h,
                    children: y.jsx(e, {
                        className: p.icon
                    })
                }), u && y.jsx(Z.div, {
                    className: p.activeIndicator,
                    layoutId: "shotcall-selected-nav"
                })]
            })
        }), y.jsx(Pb, {
            container: c,
            children: y.jsx(Eb, {
                sideOffset: 8,
                side: "right",
                children: y.jsx(Z.div, {
                    initial: {
                        x: -5,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: .3
                    },
                    className: p.tooltip,
                    children: t
                })
            })
        })]
    })
}
const Lb = on({
    display: "flex",
    flexDir: "column",
    mt: 12,
    boxShadow: "0px 4px 8px 0px {colors.baseBlack/60}",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
    zIndex: "zLayer"
});

function Db() {
    const {
        isAuthenticated: e,
        isAuthorized: t
    } = Me(), {
        enabled: n
    } = Pt(), [r, o, s, i] = sn("shotcall.play", "shotcall.leaders", "shotcall.rewards", "shotcall.settings");
    return !e || !t ? y.jsx(y.Fragment, {}) : y.jsx(Qp, {
        children: y.jsxs("ul", {
            className: Lb,
            children: [y.jsx(Ln, {
                tooltip: r,
                view: re.Play,
                Icon: Ju
            }), y.jsx(Ln, {
                tooltip: s,
                view: re.Rewards,
                Icon: Tb
            }), n && y.jsx(Ln, {
                tooltip: o,
                view: re.Leaderboards,
                Icon: Ab
            }), y.jsx(Ln, {
                tooltip: i,
                view: re.Settings,
                Icon: Rb
            })]
        })
    })
}

function Ib({
    children: e
}) {
    const {
        activeGameId: t
    } = Le(), n = Gu(), {
        dismissAll: r
    } = qu(), o = l.useCallback(() => {
        t && n(t), r()
    }, [t, r, n]);
    return y.jsx(R0, {
        app: Bn.Shotcall,
        Button: Ux,
        Sidebar: Db,
        onOpen: r,
        onClose: o,
        children: e
    })
}
const Ob = {
        mode: void 0,
        height: 0
    },
    Ud = l.createContext(Ob),
    Hd = l.createContext({
        updateMode: () => {},
        updateHeight: () => {}
    });

function Vb() {
    return l.use(Ud)
}

function zd() {
    return l.use(Hd)
}
const kb = X({
    slots: ["container"],
    base: {
        container: {
            pos: "absolute",
            bottom: 0,
            left: 0,
            w: "100%",
            display: "flex",
            flexDir: "column",
            zIndex: "zLayer2"
        }
    }
})();

function Gd({
    children: e
}) {
    const {
        updateHeight: t
    } = zd(), n = l.useRef(null);
    return l.useLayoutEffect(() => {
        if (!n.current) return;
        const r = new ResizeObserver(o => {
            for (const s of o) t(s.contentRect.height)
        });
        return r.observe(n.current), () => {
            r.disconnect()
        }
    }, [t]), y.jsx("div", {
        ref: n,
        className: kb.container,
        children: e
    })
}
var Do = (e => (e.OPEN = "open", e.PENDING = "pending", e.SCORED = "scored", e))(Do || {});
const Nb = {
        animate: {
            transition: {
                staggerChildren: .07
            }
        }
    },
    jb = {
        initial: {
            opacity: 0,
            scaleY: .5,
            y: 8
        },
        animate: {
            opacity: 1,
            y: 0,
            scaleY: 1,
            transition: {
                duration: .2,
                ease: "easeOut"
            }
        }
    },
    $b = {
        opacity: 0,
        y: 8,
        transition: {
            duration: .2,
            ease: "easeOut"
        }
    },
    Bb = X({
        slots: ["container", "identifier", "details", "rank", "name", "points", "performance"],
        base: {
            container: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: "8px 12px",
                bg: "surface.level.0",
                borderRadius: 8
            },
            identifier: {
                display: "flex",
                alignItems: "center",
                gap: 8
            },
            details: {
                display: "flex",
                flexDir: "column",
                justifyContent: "center",
                alignItems: "flex-end"
            },
            rank: {
                color: "text.primary",
                textStyle: "title/lg",
                textWrap: "nowrap"
            },
            name: {
                color: "text.primary",
                textStyle: "label/lg"
            },
            points: {
                color: "text.secondary",
                textStyle: "label/md"
            },
            performance: {
                color: "text.secondary",
                textStyle: "label/sm"
            }
        },
        variants: {
            isCurrentPlayer: {
                true: {
                    name: {
                        color: "scoring.partial"
                    },
                    rank: {
                        color: "scoring.partial"
                    }
                }
            }
        }
    });

function Kd({
    className: e,
    score: t,
    scopeType: n
}) {
    const r = l.useMemo(() => {
            switch (n) {
                case tr.Game:
                    return de.Game;
                default:
                    return de.Game
            }
        }, [n]),
        {
            resolved: o
        } = gx(r, t.scopeId),
        {
            playerScore: s
        } = Yu(n, t.scopeId),
        i = l.useMemo(() => (s == null ? void 0 : s.id) === t.id, [t, s]),
        a = Bb({
            isCurrentPlayer: i
        }),
        [c, u, d] = sn({
            key: "shotcall.game.stats.pts",
            vars: {
                points: t.score
            }
        }, {
            key: "shotcall.scoring.correct",
            vars: {
                correct: t.numberCorrect,
                incorrect: o.length
            }
        }, "shotcall.current.you");
    return y.jsxs("div", {
        className: qe(a.container, e),
        children: [y.jsxs("div", {
            className: a.identifier,
            children: [y.jsx("span", {
                className: a.rank,
                "data-element": "player-rank",
                children: t.rank
            }), y.jsxs("span", {
                className: a.name,
                children: [t.playerName, " ", i ? `(${d})` : ""]
            })]
        }), y.jsxs("div", {
            className: a.details,
            children: [y.jsx("span", {
                className: a.points,
                children: c
            }), y.jsx("span", {
                className: a.performance,
                children: u
            })]
        })]
    })
}
const $t = X({
    slots: ["container", "title", "noScores", "entries"],
    base: {
        container: {
            display: "flex",
            flexDir: "column",
            gap: 12,
            overflow: "hidden"
        },
        title: {
            textStyle: "title/lg",
            color: "text.primary"
        },
        noScores: {
            textStyle: "body/lg",
            color: "text.secondary"
        },
        entries: {
            display: "flex",
            flexDir: "column",
            gap: 12,
            listStyle: "none",
            "& > :last-child": {
                mb: 12
            },
            '& [data-element="player-rank"]': {
                w: 64
            }
        }
    }
})();

function AS({
    className: e,
    maxEntries: t,
    scopeId: n,
    scopeType: r,
    title: o
}) {
    const {
        isAuthenticated: s
    } = Me(), {
        scoredVersion: i
    } = Pt(), {
        data: a,
        previousData: c,
        loading: u
    } = fe(ux, {
        skip: !i || !s,
        variables: {
            version: i ?? "",
            scope: r
        }
    }), d = l.useMemo(() => {
        const g = a ?? c;
        return q(lx, (g == null ? void 0 : g.shotcallLeaderboards) ?? [])
    }, [a, c]), f = l.useMemo(() => d.find(g => g.scopeId === n && g.scopeType === r), [d, n, r]), h = l.useMemo(() => ((f == null ? void 0 : f.entries.map(g => q(Uu, g)).sort((g, m) => g.rank !== m.rank ? g.rank - m.rank : g.playerName.localeCompare(m.playerName))) ?? []).slice(0, t), [f, t]), p = Qe("shotcall.leaderboards.noScores");
    return !a && !c && u ? y.jsx(Fb, {}) : y.jsxs("div", {
        className: qe($t.container, e),
        children: [y.jsx("h1", {
            className: $t.title,
            children: o
        }), y.jsxs(je, {
            mode: "wait",
            children: [!f && y.jsx(Z.p, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .3
                },
                className: $t.noScores,
                children: p
            }), f && y.jsx(Z.ul, {
                className: $t.entries,
                variants: Nb,
                initial: "initial",
                animate: "animate",
                children: y.jsx(je, {
                    children: h.map(g => y.jsx(Z.li, {
                        layout: !0,
                        variants: jb,
                        exit: $b,
                        children: y.jsx(Kd, {
                            score: g,
                            scopeType: r
                        })
                    }, g.id))
                })
            }, `${r}-${n}`)]
        })]
    })
}
const qa = X({
    slots: ["title", "entry"],
    base: {
        title: {
            h: 28,
            w: "50%",
            borderRadius: 4,
            animation: "skeletonPulse 1.5s ease-in-out infinite"
        },
        entry: {
            h: 44,
            w: "100%",
            borderRadius: 4,
            animation: "skeletonPulse 1.5s ease-in-out infinite"
        }
    }
})();

function Fb() {
    return y.jsxs("div", {
        className: $t.container,
        children: [y.jsx("div", {
            className: qa.title
        }), Array.from({
            length: 10
        }).map((e, t) => y.jsx("div", {
            className: qa.entry
        }, t))]
    })
}
const _b = X({
    slots: ["bannerScore"],
    base: {
        bannerScore: {
            borderTop: "1px solid {colors.stroke.rule}",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            '& [data-element="player-rank"]': {
                minW: 48
            }
        }
    }
})();

function Wb({
    className: e,
    playerScore: t
}) {
    return y.jsx(Kd, {
        className: qe(_b.bannerScore, e),
        score: t,
        scopeType: tr.Game
    })
}
const Ub = X({
    slots: ["container", "title", "closeButton", "closeIcon"],
    base: {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            w: "100%",
            p: 10,
            bg: "scoring.partial"
        },
        title: {
            mx: "auto",
            color: "text.primary.inverse",
            textStyle: "body/md"
        },
        closeButton: {
            cursor: "pointer"
        },
        closeIcon: {
            h: 20,
            w: 20,
            color: "icon.primary.inverse"
        }
    },
    variants: {
        isLink: {
            true: {
                title: {
                    textDecoration: "underline",
                    cursor: "pointer"
                }
            }
        }
    }
});

function Hb({
    children: e,
    className: t,
    isLink: n,
    onClick: r,
    onClose: o
}) {
    const s = Ub({
        isLink: n
    });
    return $o(15, o), y.jsxs("div", {
        className: qe(s.container, t),
        children: [y.jsx("button", {
            className: s.title,
            disabled: !r,
            onClick: r,
            children: e
        }), o && y.jsx("button", {
            className: s.closeButton,
            onClick: o,
            children: y.jsx(Qu, {
                className: s.closeIcon
            })
        })]
    })
}
var Io = (e => (e.Leaderboard = "leaderboard", e))(Io || {});
const zb = [R.GameComplete, R.OpenPrompt, R.ResolvedPrompt, R.RewardUnlocked, R.UpcomingGame, R.Survey],
    Qa = X({
        slots: ["wrapper", "banner"],
        base: {
            wrapper: {
                pos: "relative",
                w: "100%",
                zIndex: "zLayer2"
            },
            banner: {
                borderBottomRightRadius: 7
            }
        }
    })();

function Gb() {
    const {
        prompts: e
    } = Le(), {
        view: t,
        setView: n,
        setViewWithGameId: r
    } = Ku(), {
        notifications: o,
        dismiss: s,
        dismissByType: i
    } = xr(zb), {
        mode: a
    } = Vb(), {
        updateMode: c
    } = zd();
    l.useEffect(() => {
        t !== re.Leaderboards && (a == null ? void 0 : a.type) === Io.Leaderboard && c(void 0)
    }, [t, a, c]);
    const u = l.useMemo(() => {
            if (o.length) return o[0]
        }, [o]),
        d = l.useCallback(() => {
            u && (u.type === R.OpenPrompt ? i(u.type) : s(u.id))
        }, [s, i, u]),
        f = l.useCallback(() => {
            if (u) {
                switch (u.type) {
                    case R.GameComplete: {
                        const m = u.payload.gameId;
                        r({
                            view: re.Play,
                            gameId: m
                        });
                        break
                    }
                    case R.OpenPrompt: {
                        const m = e[u.payload.promptId],
                            x = (m == null ? void 0 : m.contestType) === de.Game && m.contestId ? m.contestId : void 0;
                        r({
                            view: re.Play,
                            subPath: Do.OPEN,
                            gameId: x
                        });
                        break
                    }
                    case R.RewardUnlocked: {
                        n({
                            view: re.Rewards
                        });
                        break
                    }
                    case R.ResolvedPrompt: {
                        const m = e[u.payload.promptId],
                            x = (m == null ? void 0 : m.contestType) === de.Game && m.contestId ? m.contestId : void 0;
                        r({
                            view: re.Play,
                            subPath: Do.SCORED,
                            gameId: x
                        });
                        break
                    }
                    case R.Survey: {
                        window.open(u.payload.surveyUrl, "_blank");
                        break
                    }
                }
                u.type === R.OpenPrompt ? i(u.type) : s(u.id)
            }
        }, [s, i, e, n, r, u]),
        h = l.useMemo(() => {
            if (!u) return "";
            switch (u.type) {
                case R.GameComplete:
                    return `shotcall.notifications.banner.gameComplete.${eo.Val}`;
                case R.OpenPrompt:
                    return "shotcall.notifications.banner.openPrompt";
                case R.RewardUnlocked:
                    return "shotcall.notifications.banner.rewardUnlocked";
                case R.ResolvedPrompt:
                    return "shotcall.notifications.banner.predictionScored";
                case R.UpcomingGame:
                    return "shotcall.notifications.banner.upcomingGame";
                case R.Survey:
                    return "shotcall.notifications.overlay.survey.desc";
                default:
                    return ""
            }
        }, [u]),
        p = Qe(h),
        g = l.useMemo(() => !!u && (u.type === R.OpenPrompt || u.type === R.ResolvedPrompt || u.type === R.RewardUnlocked || u.type === R.Survey), [u]);
    return y.jsx(Gd, {
        children: y.jsxs(je, {
            children: [(a == null ? void 0 : a.type) === Io.Leaderboard && y.jsx(Z.div, {
                layout: !0,
                initial: {
                    y: "100%"
                },
                animate: {
                    y: 0
                },
                exit: {
                    y: "100%"
                },
                transition: {
                    duration: .3
                },
                children: y.jsx(Wb, {
                    playerScore: a.context.playerScore
                })
            }, "leaderboard-player-score"), u && p && y.jsx(Z.div, {
                className: Qa.wrapper,
                initial: {
                    height: 0
                },
                animate: {
                    height: "auto"
                },
                exit: {
                    height: 0
                },
                transition: {
                    duration: .3
                },
                children: y.jsx(Hb, {
                    className: Qa.banner,
                    isLink: g,
                    onClick: f,
                    onClose: d,
                    children: p
                })
            }, u.id)]
        })
    })
}
const Kb = on({
    h: "100%",
    w: "100%",
    pb: "var(--footer-height)"
});

function Yb({
    children: e
}) {
    const [t, n] = l.useState(), [r, o] = l.useState(0), s = l.useMemo(() => ({
        "--footer-height": `${String(r)}px`
    }), [r]), i = l.useMemo(() => ({
        mode: t,
        height: r
    }), [t, r]), a = l.useMemo(() => ({
        updateMode: n,
        updateHeight: o
    }), []);
    return y.jsx(Ud.Provider, {
        value: i,
        children: y.jsx(Hd, {
            value: a,
            children: y.jsx("div", {
                className: Kb,
                style: s,
                children: e
            })
        })
    })
}
const Yd = e => l.createElement("svg", {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        d: "M2.66602 2.66669H6.66602V4.00002H3.99935V12H11.9993V9.33335H13.3327V13.3334H2.66602V2.66669Z",
        fill: "currentColor"
    }), l.createElement("path", {
        d: "M13.3327 2.66669H7.99936V4.00002L11.0565 4.00002L6.86129 8.19528L7.8041 9.13809L11.9994 4.94283V8.00002H13.3327V2.66669Z",
        fill: "currentColor"
    })),
    Zb = e => l.createElement("svg", {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, l.createElement("path", {
        d: "M10.8333 14.9998H9.16665V8.33317H10.8333V14.9998Z",
        fill: "currentColor"
    }), l.createElement("path", {
        d: "M9.99998 5.20817C10.5753 5.20817 11.0416 5.67454 11.0416 6.24984C11.0416 6.82513 10.5753 7.2915 9.99998 7.2915C9.42469 7.2915 8.95832 6.82513 8.95832 6.24984C8.95832 5.67454 9.42469 5.20817 9.99998 5.20817Z",
        fill: "currentColor"
    }), l.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.3333 9.99984C18.3333 14.6022 14.6024 18.3332 9.99999 18.3332C5.39762 18.3332 1.66666 14.6022 1.66666 9.99984C1.66666 5.39746 5.39762 1.6665 9.99999 1.6665C14.6024 1.6665 18.3333 5.39746 18.3333 9.99984ZM16.6667 9.99984C16.6667 13.6817 13.6819 16.6665 9.99999 16.6665C6.31809 16.6665 3.33332 13.6817 3.33332 9.99984C3.33332 6.31794 6.31809 3.33317 9.99999 3.33317C13.6819 3.33317 16.6667 6.31794 16.6667 9.99984Z",
        fill: "currentColor"
    })),
    kt = X({
        slots: ["container", "linkCallout", "linkCta", "icon", "label"],
        base: {
            container: {
                display: "flex",
                flexDir: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 12,
                p: "16px 20px",
                bg: "surface.level.0",
                borderTop: "1px solid {colors.stroke.rule}",
                borderBottomRightRadius: 8
            },
            linkCallout: {
                mx: "auto",
                color: "text.primary",
                textStyle: "body/sm"
            },
            linkCta: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                w: "100%",
                p: "10px 8px",
                bg: "button.primary.bg",
                borderRadius: 4,
                color: "button.primary.text",
                textStyle: "label/lg",
                cursor: "pointer",
                _hover: {
                    bg: "button.primary.bgHover"
                }
            },
            label: {
                ml: "auto"
            },
            icon: {
                h: 16,
                w: 16,
                ml: "auto",
                color: "icon.primary"
            }
        }
    })();

function Xb({
    className: e
}) {
    const t = ko(),
        {
            isAuthorized: n,
            isInitialized: r
        } = Me(),
        o = bf(t),
        s = l.useCallback(() => {
            window.localStorage.getItem(Fn) === null && window.localStorage.setItem(Fn, String(!0))
        }, []);
    pf({
        onLink: s
    }), Sf(t, s);
    const [i, a, c, u] = sn("shotcall.linking.account.label", "shotcall.linking.account.description", "shotcall.linking.authorize.label", "shotcall.linking.authorize.description");
    return n && !r ? y.jsx(y.Fragment, {}) : y.jsxs("div", {
        className: qe(kt.container, e),
        children: [y.jsx("span", {
            className: kt.linkCallout,
            children: n ? a : u
        }), y.jsxs("button", {
            className: kt.linkCta,
            onClick: o,
            children: [y.jsx("span", {
                className: kt.label,
                children: n ? i : c
            }), y.jsx(Yd, {
                className: kt.icon
            })]
        })]
    })
}
const qb = "https://valorantesports.com/news/introducing-shotcall",
    Dn = X({
        slots: ["container", "callout", "info", "external"],
        base: {
            container: {
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                alignItems: "center",
                p: 8,
                bg: "surface.level.2",
                borderTop: "1px solid {colors.stroke.rule}",
                color: "text.secondary",
                textTransform: "uppercase",
                textStyle: "label/md",
                cursor: "pointer"
            },
            callout: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8
            },
            info: {
                h: 20,
                w: 20
            },
            external: {
                h: 16,
                w: 16,
                justifySelf: "end"
            }
        }
    })();

function Qb() {
    const {
        enabled: e
    } = Pt(), t = l.useCallback(() => {
        window.open(qb, "_blank")
    }, []), n = Qe("shotcall.disabled");
    return y.jsxs(Gd, {
        children: [!e && y.jsxs("button", {
            className: Dn.container,
            onClick: t,
            children: [y.jsx("div", {}), y.jsxs("span", {
                className: Dn.callout,
                children: [y.jsx(Zb, {
                    className: Dn.info
                }), n]
            }), y.jsx(Yd, {
                className: Dn.external
            })]
        }), y.jsx(Xb, {})]
    })
}
const Jb = er("shotcall.tutorial.entry");

function eS() {
    const {
        isInitialized: e,
        isAuthenticated: t
    } = Me(), {
        app: n,
        isOpen: r,
        close: o
    } = Ns();
    return l.useEffect(() => {
        if (r && e && t) {
            const s = window.localStorage.getItem(Fn);
            try {
                s && JSON.parse(s) === !0 && (window.localStorage.removeItem(Fn), window.localStorage.setItem(no, String(!0)), window.setTimeout(() => {
                    o()
                }, 1250))
            } catch (i) {
                Jb.error(i)
            }
        }
    }, [n, o, t, e, r]), y.jsx(y.Fragment, {})
}

function tS() {
    return l.use(mf)
}

function nS(e) {
    const {
        channel: t
    } = Vo(), n = Cf();
    return l.useMemo(() => ({
        countryCode: (n == null ? void 0 : n.code) ?? "",
        site: gf,
        puuid: "",
        channelId: t ?? "",
        sport: e ?? ""
    }), [n, t, e])
}

function Ja(e, t) {
    var r;
    const n = e.choices.map(o => ({
        choiceId: o.id,
        answerBody: o.answerBody,
        order: o.order,
        isCorrect: o.isCorrect
    }));
    return {
        ...t,
        promptId: e.id,
        questionBody: e.questionBody,
        openTime: e.openTime,
        closeTime: e.closedTime ?? void 0,
        state: e.state.toLowerCase(),
        choices: n,
        pointValue: e.pointValue ?? 0,
        contestId: e.contestId ?? "",
        contestType: ((r = e.contestType) == null ? void 0 : r.toLowerCase()) ?? "game"
    }
}
const rS = [R.OpenPrompt, R.ResolvedPrompt];

function oS() {
    const e = ko(),
        {
            notifications: t
        } = xr(rS),
        n = tS(),
        r = nS(e),
        {
            prompts: o
        } = Le(),
        {
            predictions: s
        } = vr(),
        i = l.useCallback(a => {
            switch (a.type) {
                case R.OpenPrompt: {
                    const {
                        promptId: c
                    } = a.payload, u = o[c];
                    u && n(Ks.ShotcallPromptReceived, {
                        prompt: Ja(u, r)
                    });
                    return
                }
                case R.ResolvedPrompt: {
                    const {
                        promptId: c
                    } = a.payload, u = o[c], d = s[c], f = u == null ? void 0 : u.choices.find(({
                        isCorrect: h
                    }) => h);
                    u && d && f && n(Ks.ShotcallPredictionResolved, {
                        prompt: Ja(u, r),
                        choiceId: d.choiceID,
                        isCorrect: f.id === d.choiceID
                    });
                    return
                }
            }
        }, [r, o, s, n]);
    N0(t, i)
}

function Hs() {
    const {
        locale: e,
        setLocale: t
    } = l.use(yf);
    return {
        locale: e,
        setLocale: t
    }
}
const ec = [Oe.PromptParticipation, Oe.ScoreAccumulation, Oe.RankPerformance, Oe.PercentilePerformance],
    sS = er("shotcall.rewards.hooks");

function iS() {
    const e = nc(),
        {
            locale: t
        } = Hs(),
        {
            isAuthenticated: n
        } = Me(),
        {
            tournamentId: r
        } = cc(),
        o = pn(),
        s = l.useCallback((i, a) => {
            (async () => {
                if (!n) return;
                const c = Ve(i, a),
                    u = sc.safeParse(c);
                if (u.success) switch (u.data.e) {
                    case ic.Rewarded: {
                        const d = u.data.r,
                            f = {
                                query: zu,
                                variables: {
                                    locale: t,
                                    tournamentId: r ?? ""
                                }
                            };
                        let h = !1;
                        e.cache.readQuery(f) || await e.query(f), e.cache.modify({
                            fields: {
                                earnedReward(g = [], {
                                    readField: m
                                }) {
                                    const x = Array.isArray(g) ? g : [],
                                        v = new Set(x.filter(w => !!w).map(w => m("groupID", w))),
                                        b = d.map(w => e.cache.writeFragment({
                                            id: e.cache.identify({
                                                __typename: "EarnedDrop",
                                                groupID: w
                                            }),
                                            fragment: Hu,
                                            data: {
                                                __typename: "EarnedDrop",
                                                groupID: w
                                            }
                                        })).filter(w => {
                                            const C = m("groupID", w);
                                            return C && !v.has(C)
                                        });
                                    return h = b.length > 0, [...x, ...b]
                                }
                            }
                        }), h && o({
                            type: R.RewardUnlocked,
                            payload: {
                                rewardIds: d
                            }
                        })
                    }
                }
            })().catch(sS.error)
        }, [e, n, t, o, r]);
    vf(ft.Account, s)
}

function MS() {
    const {
        locale: e
    } = Hs(), {
        isAuthenticated: t
    } = Me(), {
        tournamentId: n
    } = cc(), {
        data: r,
        loading: o
    } = fe(px, {
        variables: {
            locale: e,
            tournament: n
        }
    }), {
        data: s,
        loading: i
    } = fe(fx, {
        variables: {
            hl: e,
            tournamentId: n ?? ""
        }
    }), {
        data: a,
        refetch: c
    } = fe(zu, {
        skip: !t,
        variables: {
            tournamentId: n ?? "",
            locale: e
        }
    }), u = l.useMemo(() => {
        const f = q(Hu, a == null ? void 0 : a.earnedReward);
        return new Set((f == null ? void 0 : f.map(h => h.groupID)) ?? [])
    }, [a]), d = l.useMemo(() => {
        var p;
        const f = q(hx, r == null ? void 0 : r.earnableReward) ?? [],
            h = ((p = s == null ? void 0 : s.shotcallRewardCriteria) == null ? void 0 : p.map(g => q(dx, g))) ?? [];
        return f.map(g => {
            const m = h.find(x => (x == null ? void 0 : x.rewardId) === g.id);
            if (m) return {
                ...g,
                hasEarned: u.has(g.id),
                criteria: m
            }
        }).filter(g => !!g).sort((g, m) => {
            const x = ec.indexOf(g.criteria.rewardType) - ec.indexOf(m.criteria.rewardType);
            if (x !== 0) return x;
            switch (g.criteria.rewardType) {
                case Oe.PromptParticipation:
                    return g.criteria.predictionThreshold && m.criteria.predictionThreshold ? g.criteria.predictionThreshold - m.criteria.predictionThreshold : 0;
                case Oe.ScoreAccumulation:
                    return g.criteria.scoreThreshold && m.criteria.scoreThreshold ? g.criteria.scoreThreshold - m.criteria.scoreThreshold : 0;
                case Oe.RankPerformance:
                    return g.criteria.rankAbove && m.criteria.rankAbove ? m.criteria.rankAbove - g.criteria.rankAbove : 0;
                case Oe.PercentilePerformance:
                    return g.criteria.percentageAbove && m.criteria.percentageAbove ? m.criteria.percentageAbove - g.criteria.percentageAbove : 0
            }
        })
    }, [r, s, u]);
    return {
        loading: o || i,
        rewards: d,
        refreshEarnedRewards: c
    }
}
const aS = l.lazy(() => No(() => import("./feed-Cd3BIjD8.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]), import.meta.url));

function cS() {
    Tx(), oS(), Cx(), Sx(), iS(), Px(), bx();
    const {
        activeApp: e
    } = hr(), [, {
        preference: t
    }] = Vs(Xe.ShotcallWatchNotifications);
    return l.useMemo(() => e === void 0 && t, [e, t]) ? y.jsx(aS, {}) : y.jsx(y.Fragment, {})
}

function lS(e, t) {
    var o, s;
    const {
        type: n,
        payload: r
    } = t;
    switch (n) {
        case Ce.SetShotcallConfiguration: {
            if (e.version && r.version) {
                const [i, a] = e.version.split(":"), [c, u] = r.version.split(":");
                if (i && c && a && u) {
                    const d = i === c,
                        f = Number(a) > Number(u);
                    if (d && f) return {
                        ...e,
                        ...r,
                        version: e.version,
                        scoredVersion: e.scoredVersion ?? e.version
                    }
                }
                if (!e.scoredVersion) return {
                    ...e,
                    ...r,
                    scoredVersion: r.version
                }
            }
            return !e.scoredVersion && !r.scoredVersion && r.version ? {
                ...e,
                ...r,
                scoredVersion: r.version
            } : {
                ...e,
                ...r
            }
        }
        case Ce.SetShotcallVersion: {
            const [i, a] = ((o = e.version) == null ? void 0 : o.split(":")) ?? [], [c, u] = r.version.split(":");
            if (i && c && a && u) {
                const d = i === c,
                    f = Number(a) > Number(u);
                if (d && f) return e
            }
            return e.scoredVersion ? {
                ...e,
                ...r
            } : {
                ...e,
                ...r,
                scoredVersion: r.version
            }
        }
        case Ce.SetShotcallScoredVersion: {
            const [i, a] = ((s = e.scoredVersion) == null ? void 0 : s.split(":")) ?? [], [c, u] = r.scoredVersion.split(":");
            if (i && c && a && u) {
                const d = i === c,
                    f = Number(a) > Number(u);
                if (d && f) return e
            }
            return {
                ...e,
                ...r
            }
        }
    }
}

function uS({
    children: e
}) {
    const [t, n] = l.useReducer(lS, $u), {
        configuration: r
    } = Vo(), o = l.useCallback((a, c) => {
        const u = Ve(a, c),
            d = ju.safeParse(u);
        if (d.success) switch (d.data.b) {
            case In.Stream:
            case In.Match:
            case In.Game: {
                n({
                    type: Ce.SetShotcallVersion,
                    payload: {
                        version: d.data.v
                    }
                });
                break
            }
        }
    }, []), s = l.useCallback((a, c) => {
        const u = Ve(a, c),
            d = ks.safeParse(u);
        d.success && (n({
            type: Ce.SetShotcallVersion,
            payload: {
                version: d.data.v
            }
        }), d.data.e === Se.Scored && n({
            type: Ce.SetShotcallScoredVersion,
            payload: {
                scoredVersion: d.data.v
            }
        }))
    }, []), i = l.useCallback((a, c) => {
        var g, m;
        const u = Ve(a, c),
            d = xf.safeParse(u);
        if (!d.success) return;
        const f = ((g = d.data.c.sc) == null ? void 0 : g.o) ?? !1,
            h = (m = d.data.c.sc) == null ? void 0 : m.v,
            p = {
                enabled: f,
                version: h
            };
        n({
            type: Ce.SetShotcallConfiguration,
            payload: p
        })
    }, []);
    return Ge(ft.Config, i), Ge(ft.Boundary, o), Ge(mr.Prompts, s), l.useEffect(() => {
        var c, u, d;
        const a = (c = r == null ? void 0 : r.developer) == null ? void 0 : c.content;
        if (a) {
            const f = ((u = a.sc) == null ? void 0 : u.o) ?? !1,
                h = (d = a.sc) == null ? void 0 : d.v,
                p = {
                    enabled: f,
                    version: h
                };
            n({
                type: Ce.SetShotcallConfiguration,
                payload: p
            })
        }
    }, [r]), y.jsx(Bu.Provider, {
        value: t,
        children: e
    })
}

function dS({
    children: e
}) {
    const {
        isAuthenticated: t
    } = Me(), {
        version: n
    } = Pt(), {
        data: r,
        previousData: o
    } = fe(rx, {
        skip: !n || !t,
        variables: {
            version: n ?? ""
        }
    }), s = l.useMemo(() => {
        const a = (r == null ? void 0 : r.predictions) ?? (o == null ? void 0 : o.predictions);
        return q(nx, a ?? []).reduce((u, d) => (u[d.promptID] = d, u), {})
    }, [r, o]), i = l.useMemo(() => ({
        predictions: s
    }), [s]);
    return y.jsx(Wu.Provider, {
        value: i,
        children: e
    })
}

function fS({
    children: e
}) {
    const {
        locale: t
    } = Hs(), {
        isAuthenticated: n
    } = Me(), {
        version: r
    } = Pt(), [o, s] = l.useState({
        activeGameId: void 0,
        activeMatchId: void 0,
        selectedGameId: void 0
    }), [i, a] = l.useState(), [c, u] = l.useState(), [d, f] = l.useState(!1), {
        data: h,
        previousData: p,
        loading: g
    } = fe(tx, {
        skip: !r,
        variables: {
            hl: t,
            version: r ?? ""
        }
    }), {
        data: m,
        previousData: x,
        loading: v
    } = fe(ax, {
        skip: !r || !n,
        variables: {
            hl: t,
            version: r ?? ""
        }
    }), b = l.useMemo(() => h ?? p, [h, p]), w = l.useMemo(() => b == null ? void 0 : b.sessionState.tournament, [b == null ? void 0 : b.sessionState]), C = l.useMemo(() => q(ex, (b == null ? void 0 : b.sessionState.match) ?? []).map(L => {
        const I = q(J0, L.games);
        return {
            ...L,
            games: I
        }
    }), [b]), S = l.useMemo(() => C.flatMap(L => L.games).reduce((L, I) => {
        var A;
        return (A = I.teams) == null || A.forEach(N => {
            const k = q(Q0, N);
            L[k.id] = k
        }), L
    }, {}), [C]), E = l.useMemo(() => Object.values(S).flatMap(L => {
        var I;
        return ((I = L.players) == null ? void 0 : I.flatMap(A => q(q0, A))) ?? []
    }).reduce((L, I) => (L[I.id] = I, L), {}), [S]), P = l.useMemo(() => {
        const L = (m == null ? void 0 : m.prompts) ?? (x == null ? void 0 : x.prompts);
        return q(ix, L ?? []).map(I => {
            const A = q(sx, I.choices);
            return {
                ...I,
                choices: A
            }
        }).reduce((I, A) => (I[A.id] = A, I), {})
    }, [m, x]), T = l.useMemo(() => {
        const L = {
            [de.Game]: {},
            [de.Match]: {}
        };
        return Object.values(P).reduce((I, A) => {
            if (A.contestType && A.contestId) {
                const N = I[A.contestType][A.contestId];
                N ? N.push(A) : I[A.contestType][A.contestId] = [A]
            }
            return I
        }, L)
    }, [P]);
    l.useEffect(() => {
        r && m && b && !v && a(r)
    }, [b, v, m, r]), l.useEffect(() => {
        f(c !== void 0)
    }, [c]), l.useEffect(() => {
        if (c && i) {
            const [L, I] = c.split(":"), [A, N] = i.split(":");
            L === A && Number(N) >= Number(I) && u(void 0)
        }
    }, [i, c]);
    const M = l.useCallback((L, I) => {
        const A = Ve(L, I),
            N = ks.safeParse(A);
        N.success && N.data.e === Se.Closed && u(N.data.v)
    }, []);
    Ge(mr.Prompts, M), l.useEffect(() => {
        if (!h || !m) return () => {};
        const L = Object.values(C).filter(k => k.state !== yn.Unneeded),
            I = Object.values(P).find(k => k.contestType === de.Game && k.state === Pe.Open);
        let A, N;
        if (I) A = L.find(k => {
            const $ = k.games.find(j => j.id === I.contestId);
            return N = $, !!$
        });
        else {
            L.forEach($ => {
                $.games.forEach(j => {
                    Object.values(P).some(B => B.contestType === de.Game && B.contestId === j.id) && j.state !== Ot.Unneeded && (A = $, N = j)
                })
            }), A ?? (A = L.find($ => $.state === yn.InProgress) ?? L.find($ => $.state === yn.Unstarted) ?? L.reverse().find($ => $.state === yn.Completed) ?? L[0]);
            const k = A == null ? void 0 : A.games.filter($ => $.state !== Ot.Unneeded);
            N ?? (N = (k == null ? void 0 : k.find($ => $.state === Ot.InProgress)) ?? (k == null ? void 0 : k.find($ => $.state === Ot.Unstarted)) ?? (k == null ? void 0 : k.reverse().find($ => $.state === Ot.Completed)) ?? (k == null ? void 0 : k[0]))
        }
        s(k => ({
            ...k,
            activeMatchId: A == null ? void 0 : A.id,
            activeGameId: N == null ? void 0 : N.id,
            selectedGameId: k.selectedGameId ?? (N == null ? void 0 : N.id)
        }))
    }, [h, m, C, P]);
    const V = l.useMemo(() => ({
        tournament: w,
        matches: C,
        teams: S,
        players: E,
        ...o,
        prompts: P,
        promptsByContest: T,
        arePromptsInitialized: !!(m ?? x),
        isLoadingPrompts: v,
        isPromptsWindowClosing: d,
        isLoadingSession: g,
        isSessionInitialized: !!b,
        loadedVersion: i
    }), [C, P, T, S, E, d, v, g, i, m, x, b, w, o]);
    return y.jsx(Fu.Provider, {
        value: V,
        children: y.jsx(_u.Provider, {
            value: s,
            children: e
        })
    })
}

function hS({
    children: e
}) {
    return y.jsx(uS, {
        children: y.jsx(fS, {
            children: y.jsx(dS, {
                children: e
            })
        })
    })
}
const pS = l.lazy(() => No(() => import("./ftux-DJJ3jsQY.js"), __vite__mapDeps([9, 1, 2, 3, 4, 5, 10, 7, 11]), import.meta.url)),
    mS = l.lazy(() => No(() => import("./shotcallMetagame-BwUDJ0Px.js"), __vite__mapDeps([12, 5, 1, 2, 3, 4]), import.meta.url));

function tc() {
    const e = ko(),
        t = l.useMemo(() => e && y.jsx(Mf, {
            sport: e
        }), [e]);
    return y.jsxs(hS, {
        children: [y.jsx(Ib, {
            children: y.jsxs(Yb, {
                children: [y.jsxs(Pf, {
                    fallback: t,
                    children: [y.jsx(pS, {}), y.jsx(Qb, {})]
                }), y.jsxs(Zs, {
                    fallback: t,
                    children: [y.jsx(eS, {}), y.jsx(mS, {}), y.jsx(Gb, {})]
                })]
            })
        }), y.jsx(Zs, {
            children: y.jsx(cS, {})
        })]
    })
}
const LS = Object.freeze(Object.defineProperty({
    __proto__: null,
    Shotcall: tc,
    default: tc
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    je as A, Y0 as B, qb as C, SS as D, CS as E, Yu as F, Zb as G, Hs as H, Mx as I, zd as J, Io as K, Mf as L, Fb as M, AS as N, Iu as O, cr as P, Ns as Q, Sb as R, re as S, nr as T, Cb as U, Pb as V, Eb as W, Gu as X, F0 as Y, RS as Z, LS as _, MS as a, Ku as b, Qu as c, Vs as d, Xe as e, Ex as f, pr as g, Do as h, gx as i, ES as j, q as k, Q0 as l, Z as m, tS as n, nS as o, Pt as p, vr as q, PS as r, Ja as s, C0 as t, Le as u, Yd as v, xr as w, R as x, Lx as y, hr as z

};
