"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkprotecting_bot"] = self["webpackChunkprotecting_bot"] || []).push([["Protecting-Bot_js"],{

/***/ "./Protecting-Bot.js":
/*!***************************!*\
  !*** ./Protecting-Bot.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Protecting = {\r\n    [\"time-out-quest\"]: null,\r\n    [\"time-out-check\"]: null,\r\n    random: ( min, max ) => Math.floor( Math.random() * ( Math.floor( max ) - Math.ceil( min ) + 1 ) ) + Math.ceil( min ),\r\n    [\"quest\"]: () => {\r\n        if (!Protecting[\"time-out-quest\"]) {\r\n            Protecting[\"time-out-quest\"] = setTimeout(() => {\r\n                clearTimeout(Protecting[\"time-out-quest\"])\r\n                window.location.reload()\r\n            }, Protecting.random(1, 5) * 1000);\r\n        }\r\n    },\r\n    [\"check\"]: async (tag) => {\r\n        return new Promise(resolve => {\r\n            if (!!Protecting[\"time-out-quest\"]) resolve(false)\r\n            if (!Protecting[\"time-out-check\"]) {\r\n                Protecting[\"time-out-check\"] = setTimeout(() => {\r\n                    clearTimeout(Protecting[\"time-out-check\"])\r\n                    const btn = tag.querySelector(\".btn\")\r\n                    btn.click()\r\n                    resolve(true)\r\n                }, Protecting.random(1, 5) * 1000);\r\n            }\r\n        })\r\n    },\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Protecting);\r\n\n\n//# sourceURL=webpack://protecting-bot/./Protecting-Bot.js?");

/***/ })

}]);