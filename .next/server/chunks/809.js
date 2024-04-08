exports.id = 809;
exports.ids = [809];
exports.modules = {

/***/ 44370:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23))

/***/ }),

/***/ 85709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ genPageMetadata)
/* harmony export */ });
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95976);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0__);

function genPageMetadata({ title, description, image, ...rest }) {
    return {
        title,
        openGraph: {
            title: `${title} | ${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().title)}`,
            description: description || (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().description),
            url: "./",
            siteName: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().title),
            images: image ? [
                image
            ] : [
                (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().socialBanner)
            ],
            locale: "en_US",
            type: "website"
        },
        twitter: {
            title: `${title} | ${(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().title)}`,
            card: "summary_large_image",
            images: image ? [
                image
            ] : [
                (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_0___default().socialBanner)
            ]
        },
        ...rest
    };
}


/***/ }),

/***/ 4663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90142);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);



const Card = ({ title, description, imgSrc, href })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md max-w-[544px] p-4 md:w-1/2",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "h-full",
            children: [
                imgSrc && (href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    href: href,
                    "aria-label": `Link to ${title}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        alt: title,
                        src: imgSrc,
                        className: "object-cover object-center ",
                        width: 544,
                        height: 380
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    alt: title,
                    src: imgSrc,
                    className: "object-cover object-center md:h-36 lg:h-48",
                    width: 544,
                    height: 306
                })),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "mb-3 text-2xl font-bold leading-8 tracking-tight",
                            children: href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                href: href,
                                "aria-label": `Link to ${title}`,
                                children: title
                            }) : title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "prose mb-3 max-w-none text-gray-500 dark:text-gray-400",
                            children: description
                        }),
                        href && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            href: href,
                            className: "text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",
                            "aria-label": `Link to ${title}`,
                            children: "more →"
                        })
                    ]
                })
            ]
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 90142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Image = ({ ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...rest
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 52107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectsData = [
    {
        title: "eqchange - the best swap platform in hyperlocal communities",
        description: `eqchange is a platform that allows you to exchange items with other users. React Native + Next.js + Tamagui.`,
        imgSrc: "/static/images/projects/eqchange-project.png",
        href: "https://eqchange.io"
    },
    {
        title: "selfcodehero - gamification engine & self-development platform",
        description: `selfcodehero is a platform that allows you to learn new skills and develop yourself in a fun way.`,
        imgSrc: "/static/images/projects/selfcodehero-project.png",
        href: "https://selfcodehero.com"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectsData);


/***/ })

};
;