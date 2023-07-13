;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    7828: function (n, t, e) {
      Promise.resolve().then(e.bind(e, 4231)),
        Promise.resolve().then(e.bind(e, 2475)),
        Promise.resolve().then(e.t.bind(e, 5641, 23)),
        Promise.resolve().then(e.t.bind(e, 6245, 23))
    },
    4231: function (n, t, e) {
      'use strict'
      e.r(t),
        e.d(t, {
          default: function () {
            return c
          },
        })
      var r = e(9268),
        a = e(6006),
        i = e(6008),
        o = e(8945),
        l = e(2805)
      function s() {
        let n = (0, l._)([
          "\n  html {\n    background-color: black;\n  }\n\n  body {\n    font-family: Manrope, system-ui, -apple-system, BlinkMacSystemFont,\n      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',\n      'Helvetica Neue';\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-height: 100vh;\n  }\n",
        ])
        return (
          (s = function () {
            return n
          }),
          n
        )
      }
      function c(n) {
        let { children: t } = n,
          [e] = (0, a.useState)(() => new o.qH())
        return (
          (0, i.useServerInsertedHTML)(() => {
            let n = e.getStyleElement()
            return (
              e.instance.clearTag(), (0, r.jsx)(r.Fragment, { children: n })
            )
          }),
          (0, r.jsx)(r.Fragment, { children: t })
        )
      }
      o.vJ(s())
    },
    2475: function (n, t, e) {
      'use strict'
      e.r(t),
        e.d(t, {
          default: function () {
            return G
          },
        })
      var r,
        a,
        i,
        o,
        l,
        s,
        c,
        u,
        f,
        h = e(9268),
        g = e(6008),
        p = e(6006),
        b = e(19)
      let d = {
          blue: 'rgba(1, 65, 255, 1), rgba(1, 65, 255, 0.5), rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0.3), rgba(1, 65, 255, 0.2), rgba(1, 65, 255, 0.2), rgba(1, 65, 255, 1)',
          red: 'rgba(255, 1, 1, 1), rgba(255, 1, 1, 0.5), rgba(255, 1, 1, 0.4), rgba(255, 1, 1, 0.3), rgba(255, 1, 1, 0.2), rgba(255, 1, 1, 0.2), rgba(255, 1, 1, 1)',
          orange:
            'rgba(255, 145, 1, 1), rgba(255, 145, 1, 0.5), rgba(255, 145, 1, 0.4), rgba(255, 145, 1, 0.3), rgba(255, 145, 1, 0.2), rgba(255, 145, 1, 0.2), rgba(255, 145, 1, 1)',
          purple:
            'rgba(188, 1, 255, 1), rgba(188, 1, 255, 0.5), rgba(188, 1, 255, 0.4), rgba(188, 1, 255, 0.3), rgba(188, 1, 255, 0.2), rgba(188, 1, 255, 0.2), rgba(188, 1, 255, 1)',
        },
        v = (n, t) =>
          n === b.n.HOME
            ? t(d.blue)
            : n === b.n.PROJECTS
            ? t(d.orange)
            : n === b.n.ABOUT
            ? t(d.red)
            : n === b.n.CONTACT
            ? t(d.purple)
            : void 0
      var m = () => {
        let [n, t] = (0, p.useState)(''),
          [e, r] = (0, p.useState)(3.4),
          [a, i] = (0, p.useState)(!1),
          o = (0, g.usePathname)(),
          l = () => r(o === b.n.HOME ? 3.4 : 0.9),
          s = () => i(window.innerWidth < 1050)
        return (
          (0, p.useEffect)(() => {
            v(o, t)
          }, [o]),
          (0, p.useEffect)(() => {
            l(), s()
          }, []),
          { animationDelay: e, isMobile: a, glowingColor: n, pathName: o }
        )
      }
      function q() {
        return (q = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      function w() {
        return (w = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      var O = function (n) {
        return p.createElement(
          'svg',
          x(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 30,
              height: 30,
              fill: '#5A5A5A',
              viewBox: '0 0 48 48',
            },
            n,
          ),
          i ||
            (i = p.createElement('path', {
              d: 'M9.9 46.4q-1.2 0-2.05-.85Q7 44.7 7 43.5V15.3q0-1.2.85-2.05.85-.85 2.05-.85h18.8l-2.25 2.25H9.9q-.25 0-.45.2t-.2.45v28.2q0 .25.2.45t.45.2h28.2q.25 0 .45-.2t.2-.45V26.85L41 24.6v18.9q0 1.2-.85 2.05-.85.85-2.05.85Zm14.1-17Zm9.6-16.7 1.65 1.6-14 13.9v3.95h3.9L39.2 18.1l1.55 1.6L26.9 33.65q-.4.35-.9.55-.5.2-1 .2h-4.55q-.65 0-1.05-.4t-.4-1.05V28.4q0-.5.2-1t.6-.9Zm7.15 7-7.15-7 4.6-4.6q.8-.8 2.025-.8 1.225 0 2.025.9l3 2.95q.8.9.8 2.075 0 1.175-.85 1.975Z',
            })),
        )
      }
      function y() {
        return (y = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      function j() {
        return (j = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      function Z() {
        return (Z = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      function T() {
        return (T = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      function P() {
        return (P = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var t = 1; t < arguments.length; t++) {
                var e = arguments[t]
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
              }
              return n
            }).apply(this, arguments)
      }
      let Q = [
        {
          path: b.n.HOME,
          ariaLabel: 'Home',
          filledPicture: (0, h.jsx)(function (n) {
            return p.createElement(
              'svg',
              j(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 30,
                  height: 30,
                  fill: '#fff',
                  viewBox: '0 0 48 48',
                },
                n,
              ),
              l ||
                (l = p.createElement('path', {
                  d: 'm15.2 33.75 11.95-5.5q.4-.1.65-.375t.4-.675l5.5-11.95q.25-.5-.1-.85t-.85-.1L20.8 19.8q-.4.15-.675.4t-.375.65l-5.5 11.95q-.25.5.1.85t.85.1ZM24 26q-.85 0-1.425-.575Q22 24.85 22 24q0-.85.575-1.425Q23.15 22 24 22q.85 0 1.425.575Q26 23.15 26 24q0 .85-.575 1.425Q24.85 26 24 26Zm0 18.7q-4.25 0-8.025-1.625-3.775-1.625-6.6-4.45Q6.55 35.8 4.925 32.05T3.3 24q0-4.25 1.625-8.025 1.625-3.775 4.45-6.6Q12.2 6.55 15.975 4.9 19.75 3.25 24 3.25t8.025 1.65q3.775 1.65 6.6 4.475 2.825 2.825 4.475 6.6Q44.75 19.75 44.75 24t-1.65 8.025q-1.65 3.775-4.475 6.6-2.825 2.825-6.575 4.45T24 44.7Z',
                })),
            )
          }, {}),
          plainPicture: (0, h.jsx)(function (n) {
            return p.createElement(
              'svg',
              y(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 30,
                  height: 30,
                  fill: '#5A5A5A',
                  viewBox: '0 0 48 48',
                },
                n,
              ),
              o ||
                (o = p.createElement('path', {
                  d: 'm15.2 33.75 11.95-5.5q.4-.15.65-.4t.4-.65l5.5-11.95q.25-.45-.125-.825-.375-.375-.825-.125L20.8 19.8q-.4.15-.65.4t-.4.65l-5.5 11.95q-.25.45.125.825.375.375.825.125ZM24 26q-.85 0-1.425-.575Q22 24.85 22 24q0-.85.575-1.425Q23.15 22 24 22q.85 0 1.425.575Q26 23.15 26 24q0 .85-.575 1.425Q24.85 26 24 26Zm0 18.7q-4.25 0-8.025-1.625-3.775-1.625-6.6-4.45Q6.55 35.8 4.925 32.05T3.3 24q0-4.25 1.625-8.025 1.625-3.775 4.45-6.6Q12.2 6.55 15.975 4.9 19.75 3.25 24 3.25t8.025 1.65q3.775 1.65 6.6 4.475 2.825 2.825 4.475 6.6Q44.75 19.75 44.75 24t-1.65 8.025q-1.65 3.775-4.475 6.6-2.825 2.825-6.575 4.45T24 44.7ZM24 24Zm0 16.75q6.9 0 11.825-4.9Q40.75 30.95 40.75 24q0-6.9-4.925-11.825Q30.9 7.25 24 7.25q-6.9 0-11.825 4.925Q7.25 17.1 7.25 24q0 6.95 4.925 11.85Q17.1 40.75 24 40.75Z',
                })),
            )
          }, {}),
        },
        {
          path: b.n.PROJECTS,
          ariaLabel: 'Projects',
          filledPicture: (0, h.jsx)(function (n) {
            return p.createElement(
              'svg',
              w(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 30,
                  height: 30,
                  fill: '#fff',
                  viewBox: '0 0 48 48',
                },
                n,
              ),
              a ||
                (a = p.createElement('path', {
                  d: 'M17.75 30.35H10.8q-1.05 0-1.525-.925Q8.8 28.5 9.4 27.65L26.8 2.6q.4-.55 1.025-.775.625-.225 1.275.075.65.25 1.025.825Q30.5 3.3 30.4 4l-2 15.65H37q1.1 0 1.55.975.45.975-.2 1.825L19.3 45.25q-.4.55-1.075.7-.675.15-1.275-.1-.55-.25-.9-.825t-.25-1.275Z',
                })),
            )
          }, {}),
          plainPicture: (0, h.jsx)(function (n) {
            return p.createElement(
              'svg',
              q(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  fill: '#5A5A5A',
                  viewBox: '0 0 48 48',
                },
                n,
              ),
              r ||
                (r = p.createElement('path', {
                  d: 'M19.8 39.55 33.55 23h-8.9L26.4 8.95 13.9 27h7.65Zm-2.05-9.2H10.8q-1 0-1.5-.925t.1-1.775L26.8 2.6q.4-.55 1.025-.775.625-.225 1.275.075.65.25 1.025.85.375.6.275 1.25l-2 15.65H37q1.1 0 1.55.975.45.975-.2 1.825L19.3 45.25q-.45.55-1.1.7-.65.15-1.25-.1-.55-.3-.9-.875t-.25-1.225Zm5.95-6.05Z',
                })),
            )
          }, {}),
        },
        {
          path: b.n.BLOG,
          ariaLabel: 'Blog',
          filledPicture: (0, h.jsx)(O, {}),
          plainPicture: (0, h.jsx)(O, {}),
        },
        {
          path: b.n.ABOUT,
          ariaLabel: 'About',
          filledPicture: (0, h.jsx)(function (n) {
            return p.createElement(
              'svg',
              T(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 30,
                  height: 30,
                  fill: '#fff',
                  viewBox: '0 0 48 48',
                },
                n,
              ),
              c ||
                (c = p.createElement('path', {
                  d: 'M24 23.8q-3.45 0-5.625-2.175T16.2 16q0-3.45 2.175-5.625T24 8.2q3.45 0 5.625 2.175T31.8 16q0 3.45-2.175 5.625T24 23.8ZM11.1 40.45q-1.4 0-2.4-1t-1-2.4v-1.6q0-2 1-3.425 1-1.425 2.55-2.175 3.4-1.5 6.5-2.25t6.25-.75q3.15 0 6.225.775Q33.3 28.4 36.7 29.85q1.6.75 2.6 2.175 1 1.425 1 3.425v1.6q0 1.4-.975 2.4t-2.425 1Z',
                })),
            )
          }, {}),
          plainPicture: (0, h.jsx)(function (n) {
            return p.createElement(
              'svg',
              Z(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 30,
                  height: 30,
                  fill: '#5A5A5A',
                  viewBox: '0 0 48 48',
                },
                n,
              ),
              s ||
                (s = p.createElement('path', {
                  d: 'M24 23.8q-3.45 0-5.625-2.175T16.2 16q0-3.45 2.175-5.625T24 8.2q3.45 0 5.625 2.175T31.8 16q0 3.45-2.175 5.625T24 23.8Zm12.9 16.65H11.1q-1.4 0-2.4-1t-1-2.4v-1.6q0-2 1-3.425 1-1.425 2.55-2.175 3.4-1.5 6.5-2.25t6.25-.75q3.15 0 6.225.775Q33.3 28.4 36.7 29.9q1.6.7 2.6 2.125t1 3.425v1.6q0 1.4-1 2.4t-2.4 1Zm-25.8-3.4h25.8V35.5q0-.8-.475-1.525-.475-.725-1.175-1.075-3.15-1.5-5.775-2.075Q26.85 30.25 24 30.25q-2.85 0-5.525.575Q15.8 31.4 12.7 32.9q-.7.35-1.15 1.075-.45.725-.45 1.525ZM24 20.4q1.9 0 3.15-1.25T28.4 16q0-1.9-1.25-3.15T24 11.6q-1.9 0-3.15 1.25T19.6 16q0 1.9 1.25 3.15T24 20.4Zm0-4.4Zm0 21.05Z',
                })),
            )
          }, {}),
        },
        {
          path: b.n.CONTACT,
          ariaLabel: 'Contact information',
          filledPicture: (0, h.jsx)(function (n) {
            return p.createElement(
              'svg',
              E(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 28,
                  height: 28,
                  fill: '#fff',
                  viewBox: '0 0 48 48',
                },
                n,
              ),
              f ||
                (f = p.createElement('path', {
                  d: 'M7.1 40.3q-1.35 0-2.375-1.025T3.7 36.9V11.1q0-1.4 1.025-2.4t2.375-1h33.8q1.4 0 2.4 1t1 2.4v25.8q0 1.35-1 2.375T40.9 40.3ZM24 24.95q.25 0 .475-.1.225-.1.425-.2L40.35 14.5q.25-.15.4-.425.15-.275.15-.575 0-.7-.65-1.125-.65-.425-1.3.025L24 22 9.1 12.4q-.65-.45-1.325-.075Q7.1 12.7 7.1 13.45q0 .3.175.6t.375.45L23.1 24.65q.2.1.425.2.225.1.475.1Z',
                })),
            )
          }, {}),
          plainPicture: (0, h.jsx)(function (n) {
            return p.createElement(
              'svg',
              P(
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: 28,
                  height: 28,
                  fill: '#5A5A5A',
                  viewBox: '0 0 48 48',
                },
                n,
              ),
              u ||
                (u = p.createElement('path', {
                  d: 'M7.1 40.3q-1.35 0-2.375-1.025T3.7 36.9V11.1q0-1.4 1.025-2.4t2.375-1h33.8q1.4 0 2.4 1t1 2.4v25.8q0 1.35-1 2.375T40.9 40.3Zm33.8-26.15-16 10.5q-.2.1-.425.2-.225.1-.475.1-.25 0-.475-.1-.225-.1-.425-.2l-16-10.5V36.9h33.8ZM24 22l16.7-10.9H7.35ZM7.1 14.15v.35-2.125.025-1.3 1.3-.075V14.5v-.35V36.9Z',
                })),
            )
          }, {}),
        },
      ]
      var M = e(2805),
        _ = e(8945),
        A = e(5846),
        L = e.n(A)
      function B() {
        let n = (0, M._)([
          '\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0deg);\n  }\n',
        ])
        return (
          (B = function () {
            return n
          }),
          n
        )
      }
      function k() {
        let n = (0, M._)([
          '\n  0% {\n    transform: translateY(90px);\n  }\n  10% {\n    opacity: 1;\n    transform: translateY(70px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(-50%);\n  }\n',
        ])
        return (
          (k = function () {
            return n
          }),
          n
        )
      }
      function H() {
        let n = (0, M._)([
          '\n  0% {\n    transform: translateX(-90px) translateY(-50%);\n  }\n  10% {\n    opacity: 1;\n    transform: translateX(-70px) translateY(-50%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px) translateY(-50%);\n  }\n',
        ])
        return (
          (H = function () {
            return n
          }),
          n
        )
      }
      let C = (0, _.F4)(B()),
        S = (0, _.F4)(k()),
        F = (0, _.F4)(H())
      function N() {
        let n = (0, M._)([
          '\n    position: fixed;\n    z-index: 4;\n    bottom: -5px;\n    display: flex;\n    gap: 12px;\n    height: fit-content;\n\n    opacity: 0;\n    animation: ',
          ' 2s ease-out forwards\n      ',
          's;\n\n    @media (min-width: 1050px) {\n      flex-direction: column;\n      top: 50%;\n      left: 30px;\n    }\n  ',
        ])
        return (
          (N = function () {
            return n
          }),
          n
        )
      }
      function V() {
        let n = (0, M._)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  border-radius: 12px;\n  background-color: black;\n',
        ])
        return (
          (V = function () {
            return n
          }),
          n
        )
      }
      function Y() {
        let n = (0, M._)([
          "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 47px;\n    height: 47px;\n    padding: 1.3px;\n    transform: translateZ(0);\n    border-radius: 12px;\n    overflow: hidden;\n\n    svg {\n      height: 26px;\n      width: 26px;\n      transition: 0.4s;\n    }\n\n    &:hover {\n      svg {\n        fill: white;\n      }\n    }\n\n    &::before {\n      content: '';\n      position: absolute;\n      z-index: -1;\n      width: 200%;\n      height: 200%;\n      background: conic-gradient(",
          ');\n      animation: 6s ',
          ' linear infinite;\n    }\n  ',
        ])
        return (
          (Y = function () {
            return n
          }),
          n
        )
      }
      function U() {
        let n = (0, M._)([
          '\n  position: fixed;\n  z-index: 3;\n  bottom: 0;\n  height: 90px;\n  width: 100vw;\n  background-image: linear-gradient(to bottom, transparent, black);\n',
        ])
        return (
          (U = function () {
            return n
          }),
          n
        )
      }
      let J = _.ZP.nav(n => {
          let { isMobile: t, delay: e } = n
          return (0, _.iv)(N(), t ? S : F, e)
        }),
        R = (0, _.ZP)(L())(V()),
        z = _.ZP.div(n => {
          let { glowingColor: t } = n
          return (0, _.iv)(Y(), t, C)
        }),
        X = _.ZP.div(U())
      var G = () => {
        let {
          animationDelay: n,
          isMobile: t,
          glowingColor: e,
          pathName: r,
        } = m()
        return (0, h.jsxs)(h.Fragment, {
          children: [
            (0, h.jsx)(J, {
              delay: n,
              isMobile: t,
              children: Q.map(n => {
                let {
                  path: t,
                  filledPicture: a,
                  plainPicture: i,
                  ariaLabel: o,
                } = n
                return (0, h.jsx)(
                  z,
                  {
                    glowingColor: e,
                    children: (0, h.jsx)(R, {
                      href: t,
                      target: t.includes('http') ? '_blank' : '',
                      'aria-label': o,
                      children: r === t ? a : i,
                    }),
                  },
                  t,
                )
              }),
            }),
            (0, h.jsx)(X, {}),
          ],
        })
      }
    },
    19: function (n, t, e) {
      'use strict'
      var r, a
      e.d(t, {
        n: function () {
          return r
        },
      }),
        ((a = r || (r = {})).HOME = '/'),
        (a.ABOUT = '/about/'),
        (a.BLOG = 'https://medium.com/@oleksandrdidyshen'),
        (a.PROJECTS = '/projects/'),
        (a.CONTACT = '/contact/')
    },
    6245: function () {},
    5641: function (n) {
      n.exports = {
        style: {
          fontFamily: "'__Manrope_36d688', '__Manrope_Fallback_36d688'",
          fontStyle: 'normal',
        },
        className: '__className_36d688',
      }
    },
    6008: function (n, t, e) {
      n.exports = e(4e3)
    },
  },
  function (n) {
    n.O(0, [643, 846, 253, 698, 744], function () {
      return n((n.s = 7828))
    }),
      (_N_E = n.O())
  },
])
