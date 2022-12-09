(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SimpleBottomNavigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/BottomNavigation"
const BottomNavigation_namespaceObject = require("@mui/material/BottomNavigation");
var BottomNavigation_default = /*#__PURE__*/__webpack_require__.n(BottomNavigation_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/BottomNavigationAction"
const BottomNavigationAction_namespaceObject = require("@mui/material/BottomNavigationAction");
var BottomNavigationAction_default = /*#__PURE__*/__webpack_require__.n(BottomNavigationAction_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Home"
const Home_namespaceObject = require("@mui/icons-material/Home");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Logout"
const Logout_namespaceObject = require("@mui/icons-material/Logout");
var Logout_default = /*#__PURE__*/__webpack_require__.n(Logout_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/AccountBox"
const AccountBox_namespaceObject = require("@mui/icons-material/AccountBox");
var AccountBox_default = /*#__PURE__*/__webpack_require__.n(AccountBox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Login"
const Login_namespaceObject = require("@mui/icons-material/Login");
var Login_default = /*#__PURE__*/__webpack_require__.n(Login_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: ./components/nav/FloatingActionButton.jsx






function FloatingActionButtons() {
    const router = (0,router_.useRouter)();
    const goToSearchMovie = (e)=>{
        e.preventDefault();
        router.push("/movie/search");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-end floating-search",
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                onClick: goToSearchMovie,
                color: "primary",
                "aria-label": "add",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {})
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/nav/BottomNav.jsx













function SimpleBottomNavigation() {
    const [user, setUser] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        setUser(localStorage.getItem("token"));
    });
    const [value, setValue] = external_react_.useState(0);
    const router = (0,router_.useRouter)();
    const goToProfile = (e)=>{
        e.preventDefault();
        router.push("/profile");
    };
    const goToSearchMovie = (e)=>{
        e.preventDefault();
        router.push("/movie/search");
    };
    const goHome = (e)=>{
        e.preventDefault();
        router.push("/");
    };
    let login = (e)=>{
        router.push("/login");
    };
    let logout = (e)=>{
        localStorage.clear("token");
        login();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        style: {
            position: "fixed",
            bottom: "0",
            width: "100vw"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                style: {
                    position: "fixed",
                    right: "20px",
                    bottom: "75px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(FloatingActionButtons, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((BottomNavigation_default()), {
                sx: {
                    bgcolor: "secondary.grey"
                },
                value: value,
                onChange: (event, newValue)=>{
                    setValue(newValue);
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                        sx: {
                            bgcolor: "primary"
                        },
                        onClick: goHome,
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((Home_default()), {
                            color: "secondary"
                        })
                    }),
                    user ? /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                        onClick: goToProfile,
                        label: "PROFILE",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((AccountBox_default()), {
                            color: "secondary"
                        })
                    }) : null,
                    user ? /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                        onClick: logout,
                        label: "LOGOUT",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((Logout_default()), {
                            color: "secondary"
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx((BottomNavigationAction_default()), {
                        onClick: login,
                        label: "LOGIN",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx((Login_default()), {
                            color: "secondary"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MenuAppBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/AccountCircle"
const AccountCircle_namespaceObject = require("@mui/icons-material/AccountCircle");
var AccountCircle_default = /*#__PURE__*/__webpack_require__.n(AccountCircle_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/nav/MenuAppBar.jsx













function MenuAppBar() {
    const router = (0,router_.useRouter)();
    const [auth, setAuth] = external_react_.useState(true);
    const [anchorEl, setAnchorEl] = external_react_.useState(null);
    const handleMenu = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    const goToProfile = (e)=>{
        e.preventDefault();
        router.push("/profile");
    };
    const goHome = (e)=>{
        e.preventDefault();
        router.push("/");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            flexGrow: 1
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
            position: "static",
            sx: {
                bgcolor: "primary"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                sx: {
                    paddingBottom: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                paddingRight: 1
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "https://freesvg.org/img/Movie-Clapperboard.png",
                                width: 25,
                                height: 25,
                                alt: "movie"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        onClick: goHome,
                        variant: "h6",
                        component: "div",
                        sx: {
                            flexGrow: 1,
                            fontWeight: "bold"
                        },
                        children: "GOOD MOVIES"
                    }),
                    auth && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleMenu,
                                color: "inherit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((AccountCircle_default()), {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Menu_default()), {
                                id: "menu-appbar",
                                anchorEl: anchorEl,
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                open: Boolean(anchorEl),
                                onClose: handleClose,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: (handleClose, goToProfile),
                                        children: "Profile"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                        onClick: handleClose,
                                        children: "My account"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5931);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6333);
/* harmony import */ var _styles_custom_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_nav_MenuAppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5060);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_nav_BottomNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(173);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













// import { NextScript,Document } from "next/document";
function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.createTheme)({
        palette: {
            primary: {
                main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__.blue[700],
                alert: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__.red[500],
                black: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__.black
            },
            secondary: {
                main: "#fff",
                dark: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__.grey[900],
                grey: "#282c2c",
                nav: "#717e87"
            },
            alert: {
                main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_9__.red[500]
            }
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_8__.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
            mode: "wait",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                initial: "initialState",
                animate: "animateState",
                exit: "exitState",
                className: "base-page-size",
                variants: {
                    initialState: {
                        opacity: 0
                    },
                    animateState: {
                        opacity: 1
                    },
                    exitState: {}
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        maxWidth: "100vw"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                    children: "Good Movies"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "apple-mobile-web-app-status-bar-style",
                                    content: "black-translucent"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "viewport",
                                    content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "manifest",
                                    href: "/manifest.json"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "apple-touch-icon",
                                    href: "/icon.png"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                    name: "theme-color",
                                    content: "#191b1d"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
                            src: "https://unpkg.com/axios@1.1.2/dist/axios.min.js",
                            defer: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
                            src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
                            integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
                            crossOrigin: "anonymous",
                            defer: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_5___default()), {
                            src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
                            integrity: "sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct",
                            crossOrigin: "anonymous",
                            defer: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            src: "https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js",
                            async: true,
                            defer: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                            src: "https://accounts.google.com/gsi/client",
                            async: true,
                            defer: true
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-dark"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav_MenuAppBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_12__.Container, {
                            sx: {
                                height: "50px"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nav_BottomNav__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                    ]
                })
            }, router.route)
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5931:
/***/ (() => {



/***/ }),

/***/ 6333:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 4298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3573)


/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7986:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();