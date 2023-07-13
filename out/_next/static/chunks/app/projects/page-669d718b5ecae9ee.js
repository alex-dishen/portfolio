;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [895],
  {
    9284: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 211))
    },
    211: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return tD
          },
        })
      var i,
        r,
        o,
        a,
        s,
        l,
        c,
        d,
        u = n(9268),
        p = n(8657),
        h = n(6006),
        f = n(6394),
        m = n.n(f)
      n(7381)
      var g = { exports: {} },
        w = {}
      g.exports = (function () {
        if (o) return w
        o = 1
        var e = Symbol.for('react.element'),
          t = Symbol.for('react.fragment'),
          n = Object.prototype.hasOwnProperty,
          i =
            h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          r = { key: !0, ref: !0, __self: !0, __source: !0 }
        function a(t, o, a) {
          var s,
            l = {},
            c = null,
            d = null
          for (s in (void 0 !== a && (c = '' + a),
          void 0 !== o.key && (c = '' + o.key),
          void 0 !== o.ref && (d = o.ref),
          o))
            n.call(o, s) && !r.hasOwnProperty(s) && (l[s] = o[s])
          if (t && t.defaultProps)
            for (s in (o = t.defaultProps)) void 0 === l[s] && (l[s] = o[s])
          return {
            $$typeof: e,
            type: t,
            key: c,
            ref: d,
            props: l,
            _owner: i.current,
          }
        }
        return (w.Fragment = t), (w.jsx = a), (w.jsxs = a), w
      })()
      var x = g.exports
      let v = x.jsx,
        b = x.jsxs,
        y = ({ sizeForDefaultActiveDot: e = 13, activeDotColor: t }) =>
          v('div', {
            style: {
              aspectRatio: '1 / 1',
              width: `${e}px`,
              backgroundColor: t || 'black',
              borderRadius: '50%',
              cursor: 'pointer',
            },
          }),
        S = ({
          index: e,
          slideIndex: t,
          sizeForDefaultDot: n = 12,
          sizeForDefaultActiveDot: i = 12,
          dotColor: r = '#c7c7c7',
          activeDotColor: o = 'black',
        }) =>
          v('div', {
            style: {
              aspectRatio: '1 / 1',
              width: t === e ? i : n,
              backgroundColor: t === e ? o : r,
              borderRadius: '50%',
              cursor: 'pointer',
            },
          }),
        D = () => {
          let e = 'abcdefghijklmnopqrstuvwxyz0123456789'
          return e
            .split('')
            .map(() => e.charAt(Math.floor(Math.random() * e.length)))
            .join('')
        },
        j = (e, t) => Array(t).fill(e).flat(),
        k = e => Array.from({ length: e }, () => ''),
        A = (e, t) => Math.abs(e.getTime() - t.getTime())
      var C = (((i = C || {}).DEFAULT = 'default'), (i.FADE_IN = 'fade-in'), i)
      let T = e => ({
          opacity: e ? 1 : 0,
          transition: 'opacity 350ms cubic-bezier(0.25, 1, 0.5, 1) 0s',
        }),
        _ = ({ children: e }) =>
          v('div', { className: 'dots-wrapper', children: e }),
        I = [{ left: 0 }],
        E = (e, t) => (e - t) / 2,
        P = e => {
          var t
          return null == (t = e.current)
            ? void 0
            : t.map(e => ({ left: (null == e ? void 0 : e.offsetLeft) ?? 0 }))
        },
        R = e => {
          let t = (0, h.useRef)([]),
            n = (0, h.useRef)(null),
            i = (0, h.useRef)(I),
            [r, o] = (0, h.useState)(0),
            [a, s] = (0, h.useState)(0),
            [l, c] = (0, h.useState)(0),
            d = () => {
              var e, r
              ;(i.current = P(t)),
                s((null == (e = t.current[0]) ? void 0 : e.clientWidth) ?? 0),
                c((null == (r = n.current) ? void 0 : r.clientWidth) ?? 0)
            },
            u = (0, h.useCallback)(() => {
              let t = i.current[e].left,
                n = E(a, l)
              o(t + n)
            }, [l, a, e])
          return (
            (0, h.useEffect)(() => {
              d()
            }, []),
            (0, h.useEffect)(() => {
              u()
            }, [u]),
            { dotsRef: t, activeDotRef: n, activeDotLeft: r }
          )
        },
        L = 934,
        M = {
          default: ({
            slideIndex: e,
            customDot: t,
            customActiveDot: n,
            sizeForDefaultDot: i,
            sizeForDefaultActiveDot: r,
            dotColor: o,
            activeDotColor: a,
            handleDotClick: s,
            returnDots: l,
            countShowDots: c,
          }) =>
            v(_, {
              children: k(c).map((c, d) =>
                v(
                  'div',
                  {
                    onClick: () => {
                      s(d)
                    },
                    children:
                      t || n
                        ? l(d)
                        : v(S, {
                            index: d,
                            slideIndex: e,
                            sizeForDefaultDot: i,
                            sizeForDefaultActiveDot: r,
                            dotColor: o,
                            activeDotColor: a,
                          }),
                  },
                  d,
                ),
              ),
            }),
          sliding: ({
            dotColor: e,
            customDot: t,
            slideIndex: n,
            countShowDots: i,
            activeDotColor: r,
            animationSpeed: o,
            customActiveDot: a,
            sizeForDefaultDot: s,
            sizeForDefaultActiveDot: l,
            handleDotClick: c,
          }) => {
            let { dotsRef: d, activeDotRef: u, activeDotLeft: p } = R(n)
            return b(_, {
              children: [
                k(i).map((i, r) =>
                  v(
                    'div',
                    {
                      ref: e => (d.current[r] = e),
                      onClick: () => {
                        c(r)
                      },
                      style: {
                        transition: `${o}ms`,
                        transform: n === r ? 'scale(0)' : 'scale(1)',
                      },
                      children:
                        t ??
                        v(S, { index: r, dotColor: e, sizeForDefaultDot: s }),
                    },
                    r,
                  ),
                ),
                v('div', {
                  ref: u,
                  style: {
                    position: 'absolute',
                    left: p,
                    padding: 'inherit',
                    transition: `left ${o}ms`,
                  },
                  children:
                    a ??
                    v(y, { sizeForDefaultActiveDot: l, activeDotColor: r }),
                }),
              ],
            })
          },
        }
      var W =
        (((r = W || {}).TOP = 'top'),
        (r.LEFT = 'left'),
        (r.RIGHT = 'right'),
        (r.BOTTOM = 'bottom'),
        r)
      let F = e => e.map(e => ({ ...e, id: D() })),
        z = ({ visibleCountSlides: e, current: t = L, spaceBetween: n }) =>
          (t + n) / e,
        O = (e, t, n) => Math.abs(Math.round(Math.abs(e / t)) % n.length),
        B = (e, t, n) => {
          t.current = setTimeout(() => {
            n()
          }, e)
        },
        N = (e, t) => e.length > t,
        Z = e => e.map((e, t) => ({ ...e, key: t })),
        X = (e, t) => (e === C.FADE_IN ? T(t) : {}),
        Y = e => e === C.FADE_IN,
        U = ({ touchEndX: e, touchStartX: t }) =>
          e - t > 1 ? W.RIGHT : t - e > 1 ? W.LEFT : null,
        V = (e, t, n) => {
          let i = e.length
          return i === t ? 1 : n || 1 === t ? i : i - t + 1
        },
        H = ({
          transform: e,
          slideWidth: t,
          swipedSide: n,
          timeTouch: i,
          isDisableMove: r,
        }) => {
          let o = e / t,
            a = Math.round(o) * t
          return r || A(i, new Date()) > 200
            ? a
            : n === W.LEFT
            ? Math.floor(o) * t
            : n === W.RIGHT
            ? Math.ceil(o) * t
            : a
        },
        G = (e, t) => ({
          current: e,
          next: e < t ? e + 1 : 1,
          prev: e <= 1 ? t : e - 1,
        }),
        $ = (e, t) => ({
          current: e,
          next: e < t ? e + 1 : t,
          prev: e <= 1 ? 1 : e - 1,
        }),
        q = (e, t, n) => (n ? G(e + 1, t) : $(e + 1, t)),
        J = (e, t) => e - (0.35 * e) / t,
        Q = ({
          setTransform: e,
          slideWidth: t,
          customActiveDot: n,
          customDot: i,
          setAnimation: r,
          activeDotColor: o,
          dotColor: a,
          loop: s,
          children: l,
          visibleCountSlides: c,
        }) => {
          let [d, u] = (0, h.useState)(0),
            p = (0, h.useCallback)(
              e => n => {
                u(O(e ? n - t : n + t, t, l))
              },
              [t, l],
            )
          return {
            handleDotClick: n => {
              r(!0), e(-n * t), u(n)
            },
            returnDots: e =>
              d === e
                ? n || v(y, { activeDotColor: o })
                : i || v(S, { index: e, slideIndex: d, dotColor: a }),
            slideIndex: d,
            setSlideIndex: u,
            nextDot: p(!0),
            prevDot: p(),
            countShowDots: V(l, c, s),
          }
        },
        K = (e, t) => {
          let n = n => {
              var i
              return null == (i = e.filter(e => e.maxWidth >= t).at(-1))
                ? void 0
                : i[n]
            },
            i = e => n('slidesNumber') || e
          return {
            returnCountSlides: i,
            returnSpaceBetween: e => n('spaceBetween') || e,
            getRightSlidesCount: (e, t) => (Y(t) ? 1 : i(e)),
            getSwipiUpdatesParam: n,
          }
        },
        ee = ({
          endX: e,
          startX: t,
          config: n,
          movePath: i,
          children: r,
          biasRight: o,
          currentRef: a,
          windowWidth: s,
          slidesNumber: l,
          slidesAnimation: c,
          spaceBetweenSlides: d,
          setMovePath: u,
        }) => {
          let [p, f] = (0, h.useState)(0),
            {
              returnSpaceBetween: m,
              getSwipiUpdatesParam: g,
              getRightSlidesCount: w,
            } = K(n, s),
            x = w(l, c),
            v = m(d),
            b = N(r, x),
            y = c === C.DEFAULT && (g('biasRight') ?? o),
            S = null == a ? void 0 : a.clientWidth,
            D = (0, h.useMemo)(
              () => ({ visibleCountSlides: x, spaceBetween: v, current: S }),
              [v, x, S],
            ),
            k = (0, h.useMemo)(() => {
              let e = z(D)
              return y ? J(e, x) : e
            }, [y, D, x]),
            A = (0, h.useMemo)(() => F(b ? j(Z(r), 3) : Z(r)), [b, r]),
            T = -k * r.length
          return {
            slides: A,
            transform: p,
            slideWidth: k,
            isHideArrows: b,
            spaceBetween: v,
            startTransform: T,
            moveSlides: () => {
              let n = e && t - e
              f(e => e - n + i), u(n)
            },
            setTransform: f,
            jumpToTheLastSlide: () => {
              let e = -(k * A.length - k * (1 === x ? 2 : x))
              f(i > 0 ? e : 0)
            },
            checkAreaBeyondSwipi: () => p <= 2 * T - k || p >= k / 2,
            visibleCountSlides: x,
          }
        },
        et = ({
          endX: e,
          startX: t,
          children: n,
          transform: i,
          slideWidth: r,
          isHideArrows: o,
          startTransform: a,
          setEndX: s,
          setStartX: l,
          moveSlides: c,
          setMovePath: d,
          setAnimation: u,
          setTransform: p,
          setSlideIndex: f,
          checkSwipiCorner: m,
          jumpToTheLastSlide: g,
          checkAreaBeyondSwipi: w,
          isDisableMove: x,
        }) => {
          let [v, b] = (0, h.useState)(!1),
            [y, S] = (0, h.useState)(new Date()),
            D = () => {
              s(0), d(0), l(0)
            },
            j = () => {
              u(!1), p(e => (e ? e - a : a))
            },
            k = () => {
              let i = U({ touchEndX: e, touchStartX: t })
              p(e => {
                let t = H({
                  transform: e,
                  isDisableMove: x(i === W.LEFT),
                  slideWidth: r,
                  timeTouch: y,
                  swipedSide: i,
                })
                return f(O(t, r, n)), t
              })
            }
          return {
            onStart: o
              ? e => {
                  S(new Date()), m() && j(), l(e), b(!0)
                }
              : () => {},
            onMove: o
              ? e => {
                  if (!v) return
                  let o = U({ touchEndX: e, touchStartX: t })
                  if (x(o === W.LEFT)) {
                    u(!0), k()
                    return
                  }
                  u(!1), c(), s(e), f(O(i, r, n))
                }
              : () => {},
            onEnd: () => {
              v && (u(!0), k(), w() && g(), D(), b(!1))
            },
          }
        },
        en = (e, t) => {
          let [n, i] = (0, h.useState)(!1),
            r = (0, h.useRef)(),
            o = (0, h.useCallback)(() => {
              n ||
                (i(!0),
                e(),
                (r.current = setTimeout(() => {
                  i(!1)
                }, t)))
            }, [n, e, t])
          return (
            (0, h.useEffect)(
              () => () => {
                clearTimeout(r.current)
              },
              [],
            ),
            o
          )
        },
        ei = ({
          autoplay: e,
          autoplaySpeed: t,
          slideIndex: n,
          nextImg: i,
          timeout: r,
        }) => {
          ;(0, h.useEffect)(() => {
            if (!e) return
            clearTimeout(r.current), B(t, r, i)
            let n = r.current
            return () => clearTimeout(n)
          }, [t, e, n, i, r])
        },
        er = ({
          putInTheInitialPosition: e,
          checkSwipiCorner: t,
          setTransform: n,
          setAnimation: i,
          slideWidth: r,
          isDisableMove: o,
        }) => {
          let a = a => s => {
            o(!!a) ||
              (n(e => (s(e), a ? e - r : e + r)),
              i(!0),
              t() && e(() => n(e => (s(e), a ? e - r : e + r))))
          }
          return { nextImg: a(!0), prevImg: a() }
        },
        eo = e => {
          let t = (0, h.useCallback)(e, [e])
          ;(0, h.useEffect)(
            () => (
              window.addEventListener('resize', t),
              () => {
                window.removeEventListener('resize', t)
              }
            ),
            [t],
          )
        },
        ea = ({
          loop: e,
          config: t,
          children: n,
          autoplay: i,
          dotColor: r,
          biasRight: o,
          customDot: a,
          showArrows: s,
          slidesNumber: l,
          initialSlide: c,
          autoplaySpeed: d,
          dotsAnimation: u,
          activeDotColor: p,
          slidesAnimation: f,
          customActiveDot: m,
          spaceBetweenSlides: g,
          onChange: w,
        }) => {
          let [x, v] = (0, h.useState)(0),
            [b, y] = (0, h.useState)(!1),
            [S, D] = (0, h.useState)(null),
            [j, k] = (0, h.useState)(0),
            [A, C] = (0, h.useState)(0),
            [T, _] = (0, h.useState)(0),
            I = (0, h.useRef)(),
            E = (0, h.useRef)(null),
            {
              slides: P,
              transform: R,
              slideWidth: L,
              isHideArrows: W,
              spaceBetween: F,
              startTransform: z,
              moveSlides: O,
              setTransform: B,
              jumpToTheLastSlide: N,
              checkAreaBeyondSwipi: Z,
              visibleCountSlides: X,
            } = ee({
              endX: j,
              startX: A,
              config: t,
              children: n,
              movePath: T,
              biasRight: o,
              currentRef: S,
              windowWidth: x,
              slidesNumber: l,
              slidesAnimation: f,
              spaceBetweenSlides: g,
              setMovePath: _,
            }),
            {
              slideIndex: Y,
              nextDot: U,
              prevDot: V,
              returnDots: H,
              setSlideIndex: G,
              handleDotClick: $,
              countShowDots: J,
            } = Q({
              dotColor: r,
              customDot: a,
              slideWidth: L,
              dotsAnimation: u,
              activeDotColor: p,
              customActiveDot: m,
              setAnimation: y,
              setTransform: B,
              loop: e,
              children: n,
              visibleCountSlides: X,
            }),
            K = () => Y + X === n.length,
            ea = () => 0 === Y,
            es = () => t => !!((t && K() && !e) || (!t && ea() && !e)),
            el = (0, h.useCallback)(
              () => R <= 2 * z + L / 2 || R >= -L / 2,
              [R, L, z],
            ),
            ec = (0, h.useCallback)(
              e => {
                B(z), y(!1)
                let t = setTimeout(() => {
                  null == e || e(), y(!0)
                }, 1)
                return () => clearTimeout(t)
              },
              [z, y, B],
            ),
            {
              onEnd: ed,
              onMove: eu,
              onStart: ep,
            } = et({
              startX: A,
              endX: j,
              children: n,
              transform: R,
              slideWidth: L,
              isHideArrows: W,
              startTransform: z,
              setEndX: k,
              setStartX: C,
              moveSlides: O,
              setMovePath: _,
              setAnimation: y,
              setTransform: B,
              setSlideIndex: G,
              checkSwipiCorner: el,
              jumpToTheLastSlide: N,
              checkAreaBeyondSwipi: Z,
              isDisableMove: es(),
            }),
            { nextImg: eh, prevImg: ef } = er({
              slideWidth: L,
              setTransform: B,
              setAnimation: y,
              checkSwipiCorner: el,
              putInTheInitialPosition: ec,
              isDisableMove: es(),
            })
          return (
            ei({
              timeout: I,
              autoplay: i,
              slideIndex: Y,
              autoplaySpeed: d,
              nextImg: () => eh(U),
            }),
            eo(() => {
              v(window.innerWidth), y(!1), G(0), B(0)
            }),
            (0, h.useEffect)(() => {
              w(q(Y, J, e))
            }, [J, e, w, Y]),
            (0, h.useLayoutEffect)(() => {
              v(window.innerWidth), D(E.current)
            }, []),
            (0, h.useEffect)(() => {
              if (c) {
                let e = Math.max(1, Math.min(c, J)) - 1
                B(-(L * (n.length + e))), G(e)
              }
            }, [n.length, J, c, G, B, L]),
            {
              slides: P,
              animation: b,
              transform: R,
              slideIndex: Y,
              slideWidth: L,
              spaceBetween: F,
              countShowDots: J,
              slidesWrapperRef: E,
              Dots: M[u],
              isShowArrows: W && s,
              onEnd: ed,
              onMove: eu,
              onStart: ep,
              returnDots: H,
              setTransform: B,
              setAnimation: y,
              handleDotClick: $,
              isDisableButton: es(),
              nextImg: en(() => eh(U), 100),
              prevImg: en(() => ef(V), 100),
            }
          )
        },
        es = ({
          slideWidth: e,
          spaceBetween: t,
          children: n,
          animation: i = {},
        }) =>
          v('div', {
            style: {
              boxSizing: 'border-box',
              width: `${e}px`,
              paddingRight: `${t}px`,
              ...i,
            },
            children: n,
          }),
        el = (0, h.forwardRef)(
          ({ children: e, onClick: t, className: n, disabled: i }, r) =>
            v('button', {
              'aria-label': n,
              disabled: i,
              className: n,
              ref: r,
              onClick: t,
              type: 'button',
              children: e,
            }),
        ),
        ec = ({
          children: e,
          slidesWrapperRef: t,
          startTouchByScreen: n,
          moveTouchScreen: i,
          endTouchScreen: r,
        }) =>
          v('div', {
            ref: t,
            onTouchStart: e => n(e.touches[0].clientX),
            onTouchMove: e => i(e.touches[0].clientX),
            onTouchEnd: r,
            onMouseDown: e => n(e.clientX),
            onMouseMove: e => i(e.clientX),
            onMouseUp: r,
            onMouseLeave: r,
            style: { height: '100%', width: '100%', overflow: 'hidden' },
            children: e,
          }),
        ed = ({ children: e, className: t = '', ...n }) =>
          v('div', { className: `swipi-container ${t}`, ...n, children: e }),
        eu = ({
          children: e,
          transform: t,
          animation: n,
          animationSpeed: i,
        }) => {
          let [r, o] = (0, h.useState)(!1),
            a = () => o(!1)
          return v('div', {
            onDragStart: e => {
              e.preventDefault()
            },
            onMouseDown: () => o(!0),
            onMouseUp: a,
            onMouseLeave: a,
            style: {
              display: 'flex',
              width: 'fit-content',
              transform: `translate3d(${t}px, 0, 0)`,
              transition: `${n ? `all ${i}ms ease-out 0s` : '0s'}`,
              height: '100%',
              cursor: r ? 'grabbing' : 'grab',
            },
            children: e,
          })
        },
        ep = ({ children: e, className: t = '', ...n }) =>
          v('div', { className: `swipi-wrapper ${t}`, ...n, children: e }),
        eh = ({
          showDots: e,
          dotColor: t,
          customDot: n,
          config: i = [],
          children: r = [],
          activeDotColor: o,
          customActiveDot: a,
          slidesNumber: s = 3,
          initialSlide: l = 0,
          nextButton: c = 'ᐳ',
          prevButton: d = 'ᐸ',
          autoplay: u = !1,
          sizeForDefaultDot: p,
          showArrows: h = !0,
          autoplaySpeed: f = 4e3,
          animationSpeed: m = 300,
          spaceBetweenSlides: g = 0,
          dotsAnimation: w = 'default',
          slidesAnimation: x = 'default',
          sizeForDefaultActiveDot: y = 13,
          className: S,
          loop: D = !1,
          biasRight: j = !1,
          onChange: k = () => {},
        }) => {
          let {
            Dots: A,
            slides: C,
            animation: T,
            transform: _,
            slideWidth: I,
            slideIndex: E,
            spaceBetween: P,
            isShowArrows: R,
            countShowDots: L,
            slidesWrapperRef: M,
            onEnd: W,
            onMove: F,
            nextImg: z,
            prevImg: O,
            onStart: B,
            returnDots: N,
            handleDotClick: Z,
            isDisableButton: Y,
          } = ea({
            loop: D,
            config: i,
            children: r,
            dotColor: t,
            autoplay: u,
            biasRight: j,
            customDot: n,
            showArrows: h,
            slidesNumber: s,
            initialSlide: l,
            autoplaySpeed: f,
            dotsAnimation: w,
            activeDotColor: o,
            customActiveDot: a,
            slidesAnimation: x,
            spaceBetweenSlides: g,
            onChange: k,
          })
          return b(ep, {
            className: S,
            children: [
              b(ed, {
                children: [
                  R &&
                    v(el, {
                      disabled: Y(),
                      onClick: O,
                      className: 'left-button',
                      children: d,
                    }),
                  v(ec, {
                    slidesWrapperRef: M,
                    startTouchByScreen: B,
                    moveTouchScreen: F,
                    endTouchScreen: W,
                    children: v(eu, {
                      animation: T,
                      transform: _,
                      animationSpeed: m,
                      children:
                        null == C
                          ? void 0
                          : C.map(({ id: e, key: t }, n) =>
                              v(
                                es,
                                {
                                  slideWidth: I,
                                  spaceBetween: P,
                                  animation: X(x, t === E),
                                  children: C[n],
                                },
                                e,
                              ),
                            ),
                    }),
                  }),
                  R &&
                    v(el, {
                      disabled: Y(!0),
                      onClick: z,
                      className: 'right-button',
                      children: c,
                    }),
                ],
              }),
              e &&
                v(A, {
                  countShowDots: L,
                  dotColor: t,
                  customDot: n,
                  slideIndex: E,
                  activeDotColor: o,
                  animationSpeed: m,
                  customActiveDot: a,
                  sizeForDefaultDot: p,
                  sizeForDefaultActiveDot: y,
                  handleDotClick: Z,
                  returnDots: N,
                }),
            ],
          })
        }
      function ef() {
        return (ef = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
              }
              return e
            }).apply(this, arguments)
      }
      var em = function (e) {
        return h.createElement(
          'svg',
          ef({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
          a ||
            (a = h.createElement('path', {
              d: 'm10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z',
            })),
        )
      }
      function eg() {
        return (eg = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
              }
              return e
            }).apply(this, arguments)
      }
      var ew = function (e) {
          return h.createElement(
            'svg',
            eg(
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
              e,
            ),
            s ||
              (s = h.createElement('path', {
                d: 'm13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z',
              })),
          )
        },
        ex = n(2805),
        ev = n(8945)
      function eb() {
        let e = (0, ex._)([
          '\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n',
        ])
        return (
          (eb = function () {
            return e
          }),
          e
        )
      }
      let ey = (0, ev.F4)(eb())
      function eS() {
        let e = (0, ex._)([
          '\n    position: relative;\n    aspect-ratio: 1.77 / 1;\n    width: 100%;\n    border-radius: 30px;\n    overflow: hidden;\n\n    opacity: 0;\n    transform: translateY(50px);\n    animation: ',
          ' 1.2s ease-out forwards 0.35s;\n\n    svg {\n      height: 50px;\n      width: 50px;\n      fill: white;\n    }\n\n    .left-button {\n      position: absolute;\n      height: 100%;\n      left: -5px;\n    }\n\n    .right-button {\n      position: absolute;\n      height: 100%;\n      right: -5px;\n    }\n\n    .dots-wrapper {\n      position: absolute;\n      bottom: 10px;\n      gap: 13px;\n      padding: 14px 18px;\n      background-color: rgb(15, 16, 17);\n      border-radius: 13px;\n    }\n\n    @media (max-width: 600px) {\n      svg {\n        height: 30px;\n        width: 30px;\n      }\n\n      .dots-wrapper {\n        gap: 10px;\n        bottom: 5px;\n        padding: 10px 15px;\n        border-radius: 10px;\n      }\n    }\n  ',
        ])
        return (
          (eS = function () {
            return e
          }),
          e
        )
      }
      function eD() {
        let e = (0, ex._)([
          '\n  position: relative;\n  display: flex;\n  height: 100%;\n  width: 100%;\n\n  img {\n    height: 100%;\n    width: 100%;\n  }\n',
        ])
        return (
          (eD = function () {
            return e
          }),
          e
        )
      }
      let ej = ev.ZP.div(e => {
          let { isVisible: t } = e
          return (0, ev.iv)(eS(), t ? ey : '')
        }),
        ek = ev.ZP.div(eD())
      var eA = (0, h.memo)(e => {
        let { pictures: t, id: n, isVisible: i, name: r } = e
        return (0, u.jsx)(ej, {
          id: n,
          isVisible: i,
          children: (0, u.jsx)(eh, {
            loop: !0,
            slidesNumber: 'Weaponry' === r ? 3 : 1,
            spaceBetweenSlides: 'Weaponry' === r ? 15 : 0,
            animationSpeed: 500,
            prevButton: (0, u.jsx)(em, {}),
            nextButton: (0, u.jsx)(ew, {}),
            children: t.map(e =>
              (0, u.jsx)(
                ek,
                {
                  children: (0, u.jsx)(m(), {
                    unoptimized: !0,
                    height: 100,
                    width: 350,
                    src: e.src,
                    alt: e.alt,
                  }),
                },
                e.id,
              ),
            ),
          }),
        })
      })
      function eC() {
        let e = (0, ex._)([
          '\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n',
        ])
        return (
          (eC = function () {
            return e
          }),
          e
        )
      }
      let eT = (0, ev.F4)(eC())
      function e_() {
        let e = (0, ex._)([
          '\n    display: flex;\n    justify-content: center;\n    gap: 22px;\n\n    opacity: 0;\n    transform: translateY(50px);\n    animation: ',
          ' 0.8s ease-out forwards 0.8s;\n  ',
        ])
        return (
          (e_ = function () {
            return e
          }),
          e
        )
      }
      function eI() {
        let e = (0, ex._)([
          '\n  aspect-ratio: 1 / 1;\n  height: 7px;\n  background-color: white;\n  border-radius: 50%;\n',
        ])
        return (
          (eI = function () {
            return e
          }),
          e
        )
      }
      let eE = ev.ZP.div(e => {
          let { isVisible: t } = e
          return (0, ev.iv)(e_(), t ? eT : '')
        }),
        eP = ev.ZP.div(eI())
      var eR = e => {
        let { isVisible: t } = e
        return (0, u.jsxs)(eE, {
          isVisible: t,
          children: [
            (0, u.jsx)(eP, {}),
            (0, u.jsx)(eP, {}),
            (0, u.jsx)(eP, {}),
          ],
        })
      }
      function eL() {
        let e = (0, ex._)([
          '\n    max-height: ',
          ';\n    margin: 7px 0 0 0;\n    overflow: hidden;\n    transition: max-height 1s ease-in-out;\n  ',
        ])
        return (
          (eL = function () {
            return e
          }),
          e
        )
      }
      function eM() {
        let e = (0, ex._)([
          '\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    height: 25px;\n    width: 25px;\n    fill: white;\n  }\n',
        ])
        return (
          (eM = function () {
            return e
          }),
          e
        )
      }
      let eW = ev.ZP.p(e => {
          let { isShowSummary: t } = e
          return (0, ev.iv)(eL(), t ? '500px' : '85px')
        }),
        eF = ev.ZP.div(eM())
      function ez() {
        return (ez = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
              }
              return e
            }).apply(this, arguments)
      }
      var eO = function (e) {
        return h.createElement(
          'svg',
          ez({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }, e),
          l ||
            (l = h.createElement('path', {
              d: 'M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41Z',
            })),
        )
      }
      function eB() {
        return (eB = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
              }
              return e
            }).apply(this, arguments)
      }
      var eN = function (e) {
          return h.createElement(
            'svg',
            eB(
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },
              e,
            ),
            c ||
              (c = h.createElement('path', {
                d: 'M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z',
              })),
          )
        },
        eZ = e => {
          let { summary: t } = e,
            [n, i] = (0, h.useState)(!1)
          return (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsx)(eW, { isShowSummary: n, children: t }),
              (0, u.jsx)(eF, {
                onClick: () => i(!n),
                children: n ? (0, u.jsx)(eO, {}) : (0, u.jsx)(eN, {}),
              }),
            ],
          })
        },
        eX = n(7566)
      function eY() {
        let e = (0, ex._)([
          '\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    padding: 10px 20px;\n    border: 1px solid #2a2a2a;\n    border-radius: 15px;\n    text-decoration: none;\n\n    opacity: 0;\n    transform: translateY(50px);\n    animation: ',
          ' 1.2s ease-out forwards 0.35s;\n  ',
        ])
        return (
          (eY = function () {
            return e
          }),
          e
        )
      }
      function eU() {
        let e = (0, ex._)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n',
        ])
        return (
          (eU = function () {
            return e
          }),
          e
        )
      }
      function eV() {
        let e = (0, ex._)(['\n  color: #c2c2c2;\n  font-size: 11px;\n'])
        return (
          (eV = function () {
            return e
          }),
          e
        )
      }
      function eH() {
        let e = (0, ex._)([
          '\n  color: #fff;\n  font-size: 18px;\n  font-weight: 600;\n',
        ])
        return (
          (eH = function () {
            return e
          }),
          e
        )
      }
      let eG = ev.ZP.a(e => {
          let { isVisible: t } = e
          return (0, ev.iv)(eY(), t ? eX.A1 : '')
        }),
        e$ = ev.ZP.div(eU()),
        eq = ev.ZP.p(eV()),
        eJ = ev.ZP.p(eH())
      var eQ = e => {
          let { icon: t, text: n, platform: i, href: r, isVisible: o } = e
          return (0, u.jsxs)(eG, {
            href: r,
            target: 'blank',
            isVisible: o,
            children: [
              t,
              (0, u.jsxs)(e$, {
                children: [
                  (0, u.jsx)(eq, { children: n }),
                  (0, u.jsx)(eJ, { children: i }),
                ],
              }),
            ],
          })
        },
        eK = n(5842)
      let e0 = [
          {
            id: (0, eK.x0)(),
            src: '/projects/swipi-landing/intro.webp',
            alt: 'Swipi Landing Top',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/swipi-landing/autoplay.webp',
            alt: 'Autoplay example',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/swipi-landing/jsx_example.webp',
            alt: 'Example with JSX elements',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/swipi-landing/playground.webp',
            alt: 'Playground section',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/swipi-landing/installation.webp',
            alt: 'Installation section',
          },
        ],
        e1 = [
          {
            id: (0, eK.x0)(),
            src: '/projects/weaponry/home-screen.webp',
            alt: 'Home screen',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/weaponry/camera-screen.webp',
            alt: 'Camera screen with Abrams',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/weaponry/info-screen.webp',
            alt: 'Information screen with Abrams',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/weaponry/camera-screen2.webp',
            alt: 'Camera screen with Challenger 2',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/weaponry/info-screen2.webp',
            alt: 'Information screen with Challenger 2',
          },
        ],
        e2 = [
          {
            id: (0, eK.x0)(),
            src: '/projects/slider/three-in-raw.webp',
            alt: 'Three pictures in row',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/slider/two-in-raw.webp',
            alt: 'Two pictures in row',
          },
        ],
        e4 = [
          {
            id: (0, eK.x0)(),
            src: '/projects/game-harbor/home-page.webp',
            alt: 'Home page',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/game-harbor/games-page.webp',
            alt: 'Games page with filter "Popular in 2022"',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/game-harbor/games-page2.webp',
            alt: 'Games page with filter "Next week"',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/game-harbor/game-page.webp',
            alt: 'Lost Ark',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/game-harbor/game-page2.webp',
            alt: 'Lost Ark with opened description',
          },
          {
            id: (0, eK.x0)(),
            src: '/projects/game-harbor/game-page3.webp',
            alt: 'The Witcher 3: Wild Hunt ',
          },
        ],
        e5 = [
          {
            id: (0, eK.x0)(),
            name: 'Swipi Landing',
            description: 'Landing page for Swipi project',
            pictures: e0,
            summary:
              "Swipi Landing Page is a showcase platform I designed and led the development of, highlighting the remarkable features and functionalities of Swipi, a customizable slider npm package.\n\nThe landing page serves as a comprehensive resource, providing visitors with a firsthand experience of Swipi's versatility. It showcases a collection of multiple examples, each demonstrating the power and flexibility of the Swipi slider. I want to mention that Swipi effortlessly adapts to various use cases, thanks to its robust feature set.\n\nOne of the standout features of Swipi Landing Page is its unique configuration customization. Visitors can easily adjust and fine-tune the slider's settings to suit their specific needs. As they modify the configurations, the landing page dynamically generates the corresponding code, enabling users to quickly copy and paste the generated code into their projects. This streamlined process empowers developers and designers to seamlessly integrate Swipi into their applications.\n\nExperience the magic of Swipi through the Swipi Landing Page, and embark on a journey of stunning and interactive web experiences.",
            technologies: 'React, TypeScript, Next.js, ChakraUI',
            live: 'https://swipi.midstem.net',
          },
          {
            id: (0, eK.x0)(),
            name: 'Weaponry',
            description: 'Weapon recognition app',
            pictures: e1,
            summary:
              "Weaponry is a mobile application that uses image recognition technology to identify different types of weapons. The app is currently capable of recognizing six different tanks, with plans to expand to include other weapons in the near future.\n\nMy primary responsibilities on the project included designing and implementing the user interface for the app. I used my design skills to create a visually appealing and user-friendly interface for the app and then used React Native to code the UI. Additionally, I was responsible for managing the iOS side of the project, which involved testing the iOS version of the app, uploading the app to App Store Connect, and enabling TestFlight for testing purposes.\n\nWorking on Weaponry was a valuable learning experience for me as I was able to develop and practice my skills in both UI design, and its implementation, and the most interesting part is playing with a machine learning model, creating datasets, and training the model. Being part of such an innovative and exciting project has been an incredible experience, and I'm proud to have contributed to its development.",
            technologies: 'React Native, TypeScript, Styled-Components',
            appleLink: 'https://apps.apple.com/app/weaponry/id6446477481',
            googleButton: '',
          },
          {
            id: (0, eK.x0)(),
            name: 'Swipi',
            description: 'Light-weight slider',
            pictures: e2,
            summary:
              "Introducing a lightweight and customizable slider built with React and TypeScript that offers an infinitely scrolling experience.\n\nThis slider has been designed with user experience in mind and offers a range of features that make it stand out from other sliders available in the market. One of the key benefits of this slider is its weight - it has been developed to be lightweight, ensuring that it loads quickly and doesn't slow down your website.\n\nThe slider allows users to easily customize the position of the dots and arrows, add animation to the slides and dots. In addition to this, it offers autoplay functionality, as well as a range of other props that can be used to customize the slider's behavior.\n\nWhether you're building a personal website, an online store, or a blog, this slider can be easily integrated to help enhance the user experience and make your website more engaging. So, if you're looking for a high-quality, customizable slider that offers a range of features and is easy to use, this is the perfect solution for you.",
            technologies: 'React, TypeScript',
            live: 'https://midstem.github.io/swipi-landing/',
            code: 'https://github.com/midstem/swipi-landing',
          },
          {
            id: (0, eK.x0)(),
            name: 'Game Harbor',
            description: 'Game shop with main database from RAWG API',
            pictures: e4,
            summary:
              "Game Harbor is an online game shop that allows users to browse a wide variety of games from different genres and operating systems. It harnesses the power of the RAWG API to ensure that all games are up-to-date and accurate. Users can easily filter games by operating system, game genre and others.\n\nThe website is designed to be user-friendly, allowing users to easily browse and view all games for the specific filter or details of individual game. Users can add games to their cart for 'purchase', and can also create wishlists to keep track of their favorite games.\n\nGame Harbor also allows registered users to contribute to the website by adding new games if they believe that any are missing. Additionally, the website has a powerful search feature that allows users to quickly find specific games they are looking for.\n\nGame Harbor is an exceptional gaming platform that provides a rich and immersive user experience. It is a must-have addition to any gamer's arsenal.",
            technologies:
              'React, TypeScript, Redux Toolkit, Styled-Components, RAWG API, Node.js Express, PostgreSQL',
            live: 'https://alex-dishen.github.io/game-harbor/',
            code: 'https://github.com/alex-dishen/game-harbor',
          },
        ]
      function e3() {
        return (e3 = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
              }
              return e
            }).apply(this, arguments)
      }
      var e6 = function (e) {
        return h.createElement(
          'svg',
          e3(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 29,
              height: 36,
              fill: 'none',
            },
            e,
          ),
          d ||
            (d = h.createElement('path', {
              fill: '#fff',
              d: 'M23.898 19.005c.05 5.296 4.647 7.059 4.698 7.081-.039.124-.735 2.512-2.422 4.978-1.459 2.132-2.973 4.256-5.358 4.3-2.343.044-3.097-1.39-5.776-1.39-2.68 0-3.516 1.346-5.735 1.434-2.302.087-4.055-2.306-5.526-4.43-3.005-4.346-5.302-12.28-2.218-17.634C3.093 10.684 5.83 9 8.803 8.957c2.26-.043 4.394 1.52 5.776 1.52 1.381 0 3.974-1.88 6.7-1.604 1.142.047 4.345.46 6.402 3.472-.166.103-3.822 2.231-3.783 6.66ZM19.494 5.998C20.716 4.52 21.54 2.46 21.314.41c-1.761.07-3.892 1.174-5.155 2.653-1.133 1.309-2.124 3.405-1.857 5.413 1.964.153 3.97-.997 5.192-2.478Z',
            })),
        )
      }
      function e8() {
        let e = (0, ex._)([
          '\n  width: min(850px, 90vw);\n  margin: 50px 30px;\n  color: rgb(220, 220, 220);\n\n  *::selection {\n    background-color: rgb(255, 157, 0);\n    color: white;\n  }\n\n  h2,\n  h3,\n  h4,\n  p {\n    margin: 0;\n  }\n\n  @media (max-width: 600px) {\n    margin: 20px 30px 50px 30px;\n  }\n',
        ])
        return (
          (e8 = function () {
            return e
          }),
          e
        )
      }
      function e7() {
        let e = (0, ex._)([
          '\n  text-align: center;\n  margin-bottom: 50px;\n  font-size: 46px;\n  font-weight: 600;\n\n  opacity: 0;\n  transform: translateY(50px);\n  animation: ',
          ' 1s ease-out forwards 0.1s;\n\n  @media (max-width: 600px) {\n    font-size: 36px;\n    font-weight: 600;\n  }\n',
        ])
        return (
          (e7 = function () {
            return e
          }),
          e
        )
      }
      function e9() {
        let e = (0, ex._)([
          '\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 50px;\n',
        ])
        return (
          (e9 = function () {
            return e
          }),
          e
        )
      }
      function te() {
        let e = (0, ex._)([
          '\n    opacity: 0;\n    transform: translateY(50px);\n    animation: ',
          ' 1.2s ease-out forwards 0.2s;\n  ',
        ])
        return (
          (te = function () {
            return e
          }),
          e
        )
      }
      function tt() {
        let e = (0, ex._)([
          '\n  margin-bottom: 6px !important;\n  font-size: 38px;\n  font-weight: 600;\n\n  @media (max-width: 600px) {\n    font-size: 28px;\n    font-weight: 600;\n  }\n',
        ])
        return (
          (tt = function () {
            return e
          }),
          e
        )
      }
      function tn() {
        let e = (0, ex._)([
          '\n  font-size: 18px;\n  color: rgb(174, 174, 174);\n  font-weight: 500;\n\n  @media (max-width: 600px) {\n    font-size: 16px;\n  }\n',
        ])
        return (
          (tn = function () {
            return e
          }),
          e
        )
      }
      function ti() {
        let e = (0, ex._)([
          '\n    opacity: 0;\n    transform: translateY(50px);\n    animation: ',
          ' 1.2s ease-out forwards 0.55s;\n  ',
        ])
        return (
          (ti = function () {
            return e
          }),
          e
        )
      }
      function tr() {
        let e = (0, ex._)([
          '\n  font-size: 20px;\n  margin-bottom: 6px !important;\n',
        ])
        return (
          (tr = function () {
            return e
          }),
          e
        )
      }
      function to() {
        let e = (0, ex._)(['\n  color: rgb(188, 188, 188);\n'])
        return (
          (to = function () {
            return e
          }),
          e
        )
      }
      function ta() {
        let e = (0, ex._)([
          '\n    line-height: 29px;\n    white-space: pre-wrap;\n    text-align: justify;\n\n    opacity: 0;\n    transform: translateY(50px);\n    animation: ',
          ' 1.2s ease-out forwards 0.65s;\n  ',
        ])
        return (
          (ta = function () {
            return e
          }),
          e
        )
      }
      function ts() {
        let e = (0, ex._)([''])
        return (
          (ts = function () {
            return e
          }),
          e
        )
      }
      function tl() {
        let e = (0, ex._)([
          '\n  display: flex;\n  justify-content: center;\n  gap: 50px;\n  margin-bottom: 30px;\n',
        ])
        return (
          (tl = function () {
            return e
          }),
          e
        )
      }
      function tc() {
        let e = (0, ex._)([
          '\n    padding: 15px 18px;\n    font-size: 14px;\n    border: 2px solid rgb(42, 42, 42);\n    border-radius: 15px;\n    color: rgb(194, 194, 194);\n    text-decoration: none;\n    cursor: pointer;\n    transition: 0.3s;\n\n    opacity: 0;\n    transform: translateY(50px);\n    animation: ',
          ' 1.2s ease-out forwards 0.35s;\n\n    &:hover {\n      color: white;\n      border-color: rgb(70, 70, 70);\n    }\n\n    &:last-child {\n      animation: ',
          ' 1.2s ease-out forwards 0.7s;\n    }\n  ',
        ])
        return (
          (tc = function () {
            return e
          }),
          e
        )
      }
      let td = ev.ZP.main(e8()),
        tu = ev.ZP.h1(e7(), eX.A1),
        tp = ev.ZP.div(e9()),
        th = ev.ZP.div(e => {
          let { isVisible: t } = e
          return (0, ev.iv)(te(), t ? eX.A1 : '')
        }),
        tf = ev.ZP.h2(tt()),
        tm = ev.ZP.h4(tn()),
        tg = ev.ZP.div(e => {
          let { isVisible: t } = e
          return (0, ev.iv)(ti(), t ? eX.A1 : '')
        }),
        tw = ev.ZP.h3(tr()),
        tx = ev.ZP.p(to()),
        tv = ev.ZP.div(e => {
          let { isVisible: t } = e
          return (0, ev.iv)(ta(), t ? eX.A1 : '')
        }),
        tb = (0, ev.ZP)(tw)(ts()),
        ty = ev.ZP.div(tl()),
        tS = ev.ZP.a(e => {
          let { isVisible: t } = e
          return (0, ev.iv)(tc(), t ? eX.A1 : '', t ? eX.A1 : '')
        })
      var tD = () => {
        let e = (0, p.Z)('h2[id], p[id], body div[id]')
        return (0, u.jsxs)(td, {
          children: [
            (0, u.jsx)(tu, { children: 'Welcome to my projects' }),
            e5.map((t, n) =>
              (0, u.jsxs)(
                tp,
                {
                  children: [
                    (0, u.jsxs)(th, {
                      id: 'projectInitials'.concat(n),
                      isVisible: e['projectInitials'.concat(n)],
                      children: [
                        (0, u.jsx)(tf, { children: t.name }),
                        (0, u.jsx)(tm, { children: t.description }),
                      ],
                    }),
                    (0, u.jsx)(eA, {
                      pictures: t.pictures,
                      name: t.name,
                      id: 'carousel'.concat(n),
                      isVisible: e['carousel'.concat(n)],
                    }),
                    (0, u.jsxs)(tg, {
                      id: 'technologiesSection'.concat(n),
                      isVisible: e['technologiesSection'.concat(n)],
                      children: [
                        (0, u.jsx)(tw, { children: 'Technologies' }),
                        (0, u.jsx)(tx, { children: t.technologies }),
                      ],
                    }),
                    (0, u.jsxs)(tv, {
                      id: 'summarySection'.concat(n),
                      isVisible: e['summarySection'.concat(n)],
                      children: [
                        (0, u.jsx)(tb, { children: 'Summary' }),
                        (0, u.jsx)(eZ, { summary: t.summary }),
                      ],
                    }),
                    (0, u.jsx)(ty, {
                      id: 'projectLinks'.concat(n),
                      children: t.appleLink
                        ? (0, u.jsx)(eQ, {
                            icon: (0, u.jsx)(e6, {}),
                            text: 'Download on the',
                            platform: 'App Store',
                            href: t.appleLink,
                            isVisible: e['projectLinks'.concat(n)],
                          })
                        : (0, u.jsxs)(u.Fragment, {
                            children: [
                              (0, u.jsx)(tS, {
                                href: t.live,
                                target: '_blank',
                                isVisible: e['projectLinks'.concat(n)],
                                children: '\uD83D\uDE80 Live Preview',
                              }),
                              t.code &&
                                (0, u.jsx)(tS, {
                                  href: t.code,
                                  target: '_blank',
                                  isVisible: e['projectLinks'.concat(n)],
                                  children: '⚗️ View Code',
                                }),
                            ],
                          }),
                    }),
                    e5.length !== n + 1 &&
                      (0, u.jsx)(eR, {
                        isVisible: e['projectLinks'.concat(n)],
                      }),
                  ],
                },
                t.id,
              ),
            ),
          ],
        })
      }
    },
    7566: function (e, t, n) {
      'use strict'
      n.d(t, {
        A1: function () {
          return v
        },
        Du: function () {
          return f
        },
        LZ: function () {
          return w
        },
        V_: function () {
          return S
        },
        WE: function () {
          return m
        },
        bA: function () {
          return y
        },
        bj: function () {
          return g
        },
        cu: function () {
          return b
        },
        l2: function () {
          return x
        },
      })
      var i = n(2805),
        r = n(8945)
      function o() {
        let e = (0, i._)(['\n  to {\n    transform: translateY(0px);\n  }\n'])
        return (
          (o = function () {
            return e
          }),
          e
        )
      }
      function a() {
        let e = (0, i._)([
          '\n  to {\n    opacity: 1;\n    transform: translateY(0px) translateX(0px);\n  }\n',
        ])
        return (
          (a = function () {
            return e
          }),
          e
        )
      }
      function s() {
        let e = (0, i._)([
          '\n  to {\n    opacity: 1;\n    transform: translateY(0px) scale(1) rotate(0deg);\n  }\n',
        ])
        return (
          (s = function () {
            return e
          }),
          e
        )
      }
      function l() {
        let e = (0, i._)([
          '\n  to {\n    opacity: 1;\n    transform: translateY(0px) scale(1);\n  }\n',
        ])
        return (
          (l = function () {
            return e
          }),
          e
        )
      }
      function c() {
        let e = (0, i._)(['\n    to {\n    opacity: 1;\n  }\n'])
        return (
          (c = function () {
            return e
          }),
          e
        )
      }
      function d() {
        let e = (0, i._)([
          '\n  to {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n',
        ])
        return (
          (d = function () {
            return e
          }),
          e
        )
      }
      function u() {
        let e = (0, i._)([
          '\n  0% {\n    transform: translateY(-40px);\n  }\n  50% {\n    transform: translateY(200px);\n  }\n  100% {\n    transform: translateY(-40px);\n  }\n',
        ])
        return (
          (u = function () {
            return e
          }),
          e
        )
      }
      function p() {
        let e = (0, i._)([
          '\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.6);\n  }\n  100% {\n    transform: scale(1);\n  }\n',
        ])
        return (
          (p = function () {
            return e
          }),
          e
        )
      }
      function h() {
        let e = (0, i._)([
          '\n  to {\n    opacity: 1;\n    transform: translateY(0px) scale(1) skewY(0deg);\n  }\n',
        ])
        return (
          (h = function () {
            return e
          }),
          e
        )
      }
      let f = (0, r.F4)(o()),
        m = (0, r.F4)(a()),
        g = (0, r.F4)(s()),
        w = (0, r.F4)(l()),
        x = (0, r.F4)(c()),
        v = (0, r.F4)(d()),
        b = (0, r.F4)(u()),
        y = (0, r.F4)(p()),
        S = (0, r.F4)(h())
    },
    8657: function (e, t, n) {
      'use strict'
      var i = n(6006)
      t.Z = e => {
        let [t, n] = (0, i.useState)({}),
          r = (0, i.useRef)(null),
          o = (0, i.useRef)(null),
          a = e => {
            e.forEach(e => {
              if (e.isIntersecting) {
                var t
                n(t => ({ ...t, [e.target.id]: !0 })),
                  null === (t = r.current) ||
                    void 0 === t ||
                    t.unobserve(e.target)
              }
            })
          }
        return (
          (0, i.useEffect)(
            () => (
              (r.current = new IntersectionObserver(a, { threshold: 0.3 })),
              (o.current = [...Array.from(document.querySelectorAll(e))]),
              console.log(o.current),
              o.current.forEach(e => {
                var t
                return null === (t = r.current) || void 0 === t
                  ? void 0
                  : t.observe(e)
              }),
              () => {
                var e
                return null === (e = r.current) || void 0 === e
                  ? void 0
                  : e.disconnect()
              }
            ),
            [o, e],
          ),
          t
        )
      }
    },
    7381: function () {},
    5842: function (e, t, n) {
      'use strict'
      n.d(t, {
        x0: function () {
          return i
        },
      })
      let i = (e = 21) =>
        crypto
          .getRandomValues(new Uint8Array(e))
          .reduce(
            (e, t) => (
              (t &= 63) < 36
                ? (e += t.toString(36))
                : t < 62
                ? (e += (t - 26).toString(36).toUpperCase())
                : t > 62
                ? (e += '-')
                : (e += '_'),
              e
            ),
            '',
          )
    },
  },
  function (e) {
    e.O(0, [643, 394, 253, 698, 744], function () {
      return e((e.s = 9284))
    }),
      (_N_E = e.O())
  },
])
