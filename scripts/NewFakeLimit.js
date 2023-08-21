/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../General/util.js":
/*!**************************!*\
  !*** ../General/util.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cTimeToSeg: () => (/* binding */ cTimeToSeg),\n/* harmony export */   getStorage: () => (/* binding */ getStorage),\n/* harmony export */   nDateTime: () => (/* binding */ nDateTime),\n/* harmony export */   nSegStrHora: () => (/* binding */ nSegStrHora),\n/* harmony export */   pressKey: () => (/* binding */ pressKey),\n/* harmony export */   random: () => (/* binding */ random),\n/* harmony export */   setInputDateTime: () => (/* binding */ setInputDateTime),\n/* harmony export */   setMillis: () => (/* binding */ setMillis),\n/* harmony export */   setStorage: () => (/* binding */ setStorage),\n/* harmony export */   sleep: () => (/* binding */ sleep),\n/* harmony export */   strTimeToSec: () => (/* binding */ strTimeToSec),\n/* harmony export */   waitCompleteLoad: () => (/* binding */ waitCompleteLoad)\n/* harmony export */ });\n\r\n\r\n/**\r\n * Uso geral\r\n * Calcula o numero de segundos de uma string hora\r\n * \r\n * @param {String} string - uma string hora (hh:mm:ss)\r\n * @returns Number - segundos\r\n */\r\nconst strTimeToSec = string => {\r\n    const arrTime = string.match(/[0-9]{1,}[:][0-9]{2}[:][0-9]{2}/ig)\r\n    if (!arrTime) return null\r\n    const time = arrTime[arrTime.length - 1].split(\":\")\r\n    return (time[0] * 3600) + (time[1] * 60) + (time[2] * 1)\r\n}\r\nconst strTimeToSecOld = string => {\r\n    let hora = Number( string.substring( 0, string.length - 6 ) ) * 3600\r\n    let min = Number( string.substring( string.length - 5, string.length - 3 ) ) * 60\r\n    return Number( string.substring( string.length - 2, string.length ) ) + hora + min\r\n}\r\n/**\r\n * Uso geral\r\n * @param {String} c_data \r\n * @param {String} c_hora \r\n * @param {String} c_ms \r\n * @returns Number - milesegundos representando as string data e/ou hora e/ou milisegundos informado\r\n */\r\nconst setInputDateTime = ( cDate, cTime, cMs ) => `${cDate.split(\"/\")[2]}-${cDate.split(\"/\")[1].length == 1 ? \"0\" : \"\"}${cDate.split(\"/\")[1]}-${cDate.split(\"/\")[0]}T${cTime.length == 7 ? \"0\" : \"\"}${cTime}.${cMs ? cMs : \"000\"}`\r\n\r\nconst nDateTime = ( c_data, c_hora = \"00:00:00\", c_ms = \"000\" ) => {\r\n    let n_hh = c_hora ? Number( c_hora.substring( 0, 2 ) ) : 0\r\n    let n_mm = c_hora ? Number( c_hora.substring( 3, 5) ) : 0\r\n    let n_ss = c_hora ? Number( c_hora.substring( 6, 8) ) : 0\r\n    let n_ms = c_hora ? c_hora.length > 8 ? Number ( c_hora.substring( 9, c_hora.length ) ) : 0 : 0\r\n    if ( c_ms ) n_ms = Number( c_ms )\r\n    let n_Dia = Number( c_data.substring( 0, 2 ) )\r\n    let n_Mes = Number( c_data.substring( 3, 5 ) ) - 1\r\n    let n_Ano = Number( c_data.substring( 6, c_data.length) )\r\n    return Date.parse( new Date( n_Ano, n_Mes, n_Dia, n_hh, n_mm, n_ss ) ) + n_ms\r\n}\r\n/**\r\n * Uso Geral\r\n * @param {Number} s - numero de segundos\r\n * @returns String - no formato 'hh:mm:ss'\r\n */\r\nconst nSegStrHora = ( s ) => {\r\n    let h = parseInt( s / 3600 )\r\n    let m = parseInt( ( s - ( h * 3600 ) ) / 60 )\r\n    s = parseInt( s - ( h * 3600 ) - ( m * 60 ) )\r\n    if ( h < 10 ) h = '0' + h\r\n    if ( m < 10 ) m = '0' + m\r\n    if ( s < 10 ) s = '0' + s\r\n    return `${h}:${m}:${s}`\r\n}\r\n\r\n/**\r\n * Uso Geral\r\n * @param {String} c_hora \r\n * @returns Number - de segundos da hora\r\n */\r\nconst cTimeToSeg = string => {\r\n    const arrTime = string.match(/[0-9]{1,}[:][0-9]{2}[:][0-9]{2}/ig)\r\n    if (!arrTime) return null\r\n    const time = arrTime[arrTime.length - 1].split(\":\")\r\n    return (time[0] * 3600) + (time[1] * 60) + (time[2] * 1)\r\n}\r\nconst cTimeToSegOld = ( c_hora ) => {\r\n    let l = c_hora.length\r\n    let n_hh = Number( c_hora.substring( 0, l - 6 ) )\r\n    let n_mm = Number( c_hora.substring( l - 5, l - 3 ) )\r\n    let n_ss = Number( c_hora.substring( l - 2, l ) )\r\n    \r\n    return Number(( n_hh * 3600 ) + ( n_mm * 60 ) + n_ss)\r\n}\r\n\r\n/**\r\n * Uso geral\r\n * @param {Number} min - milisegundos\r\n * @param {Number} max - milisegundos\r\n * @returns Number - Aleatório entre min e max\r\n */\r\nconst random = ( min, max ) => {\r\n    min = Math.ceil( min );\r\n    max = Math.floor( max );\r\n    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;\r\n}\r\n\r\nvar millis = 0 //utilizado na função setMillis\r\n/**\r\n * Uso geral\r\n * \r\n * @param {Number} added_time \r\n * @returns Number - retorna um numero acrescido\r\n */\r\nfunction setMillis( added_time = 200 ) {\r\n    let tmp = millis;\r\n    millis += added_time;\r\n    return tmp;\r\n}\r\n\r\n/**\r\n * Uso Geral\r\n * Faz uma pausa na execussão \r\n * @param {Number} seg \r\n * @returns \r\n */\r\nasync function sleep(seg) {\r\n    return new Promise((resolve, reject) => {\r\n        setTimeout(() => {\r\n            resolve()\r\n        }, seg * 1000);\r\n    });\r\n}\r\n\r\nasync function waitCompleteLoad( fnCalback ) {\r\n    console.log(\"waitCompleteLoad...\")\r\n    if ( document.readyState == \"loading\" || document.readyState == \"interactive\" ) {\r\n        const completeLoad = setInterval( async () => {\r\n            if ( document.readyState == \"complete\" ) {\r\n                clearInterval(completeLoad)\r\n                fnCalback\r\n            }\r\n        }, 1);\r\n    } else if ( document.readyState == \"complete\" ) {\r\n        fnCalback\r\n    }\r\n}\r\nfunction press(key) {\r\n    $.fn.triggerKeyPress = function (keys) {\r\n        var keydownEvent = $.Event(\"keydown\");\r\n        var $self = this;\r\n        $.each(keys, function(index, value) {\r\n            var simulatedKey = $.extend({}, keydownEvent, {which: value, keyCode: value});\r\n            $self.trigger(simulatedKey);\r\n        });\r\n    }\r\n    $('body').triggerKeyPress([key, key])\r\n}\r\nconst pressKey = key => press(key)\r\n\r\nconst setStorage = async ( key, value ) => {\r\n    if ( typeof key != \"string\" || value === undefined ) {\r\n        if ( value === undefined ) console.error( \"value error: \", value )\r\n        if ( typeof key != \"string\" ) console.error( \"key error: \", key )\r\n        return error\r\n    }\r\n    const oldValue = JSON.parse(localStorage.getItem( key ))\r\n    const strValue = JSON.stringify( value )\r\n    localStorage.setItem( key, strValue )\r\n    const strNewValue = localStorage.getItem( key )\r\n    if ( strNewValue === strValue ) {\r\n        const newValue = JSON.parse( strNewValue )\r\n        console.log([ { \"newValue\": newValue }, { \"oldValue\": oldValue } ])\r\n        return newValue\r\n    }\r\n    return value\r\n}\r\nconst getStorage = async ( key ) => {\r\n    if (!key) {\r\n        console.error(key)\r\n        return error\r\n    }\r\n    const value = JSON.parse(localStorage.getItem( key ))\r\n    if ( value === undefined ) {\r\n        console.error( value )\r\n        return false\r\n    } else {\r\n        return value\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://x-outros-x/../General/util.js?");

/***/ }),

/***/ "./NewFakeLimit/index.js":
/*!*******************************!*\
  !*** ./NewFakeLimit/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _General_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../General/util */ \"../General/util.js\");\n\r\n\r\nconst ver = (0,_General_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)(\"21/08/2023\", \"14:49:52\")\r\n\r\nfunction getDist( coords ) {\r\n    return Math.sqrt( Math.pow( parseInt( coords[0] ) - game_data.village.x, 2) + Math.pow( parseInt( coords[1] ) - game_data.village.y, 2));\r\n}\r\nfunction getElementByName(a) {\r\n    return (document.getElementsByName(a)[0]);\r\n}\r\nfunction noCoordsError() {\r\n    UI.ErrorMessage( \"Nenhuma coordenada inserida\" );\r\n    throw ( \"Nenhuma coordenada inserida\" );\r\n}\r\n\r\nconst version = () => {\r\n    const arr = window[\"fake-limit\"].validate.split(\", \")\r\n    const validate = (0,_General_util__WEBPACK_IMPORTED_MODULE_0__.nDateTime)(arr[0], arr[1])\r\n    if (validate !== ver ) {\r\n        UI.ErrorMessage( \"Script Expirado!\")\r\n        return false\r\n    }\r\n    return true\r\n}\r\n\r\n(function() {\r\n    'use strict'\r\n    console.log({\"fake-limit\": window[\"fake-limit\"] })\r\n    if (!version()) return\r\n    const coords = String(window[\"fake-limit\"].coords).split(' ');\r\n    const name = window[\"fake-limit\"].name\r\n    const fakeLimit = parseInt( JSON.parse(localStorage.fake_limit) || window[\"fake-limit\"].value );\r\n    if ( !coords ) noCoordsError();\r\n    else if ( coords.length < 1 ) noCoordsError();\r\n    const doc = document;\r\n    if (window.frames.length > 0 && window.main != null) doc = window.main.document;\r\n    if (!getElementByName(name)) $('h3').append('<span name=\"' + name + '\" style=\"color:green;font-size:11px;\"></span>');\r\n    const url = doc.URL;\r\n    if ( url.indexOf( 'screen=place' ) == -1 ) window.open( 'game.php?screen=place', '_self' );\r\n    coords = $.map(coords, function(obj) {\r\n        return { coords: obj.split('|'), distance: getDist( obj.split(\"|\") ) };\r\n    }).sort((a, b) => a.distance - b.distance );\r\n    console.log(coords)\r\n    let index = 0;\r\n\r\n    const farmcookie = doc.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');\r\n    if (farmcookie != null) index = parseInt(farmcookie[2]);\r\n    getElementByName(name).innerHTML = ' Comando nº' + (index + 1) + '  (' + coords[index] + '). Total: ' + coords.length;\r\n    if (index >= coords.length) {\r\n        getElementByName(name).style.color = '#F00';\r\n        getElementByName(name).innerHTML = ' Você chegou ao fim da lista!';\r\n    } else getElementByName(name).style.color = 'green';\r\n\r\n    if( index >= coords.length ) index = 0;\r\n    coords = coords[ index ];\r\n    index = index + 1;\r\n    const cookie_date = new Date( 2031, 3, 27 );\r\n    doc.cookie = name + '=' + index + ';expires=' + cookie_date.toGMTString();\r\n    doc.forms[0].x.value = coords.coords[0];\r\n    doc.forms[0].y.value = coords.coords[1];\r\n    $(' #place_target' ).find( 'input' ).val( coords[0] + '|' + coords[1] );\r\n    const popMin = Math.floor( game_data.village.points * fakeLimit / 100 );\r\n    const arrUnits = [\r\n        [Number($(\"#units_entry_all_spear\")[0].innerText.match(/[0-9]{1,}/ig)[0]),1],\r\n        [Number($(\"#units_entry_all_axe\")[0].innerText.match(/[0-9]{1,}/ig)[0]),1],\r\n        [Number($(\"#units_entry_all_spy\")[0].innerText.match(/[0-9]{1,}/ig)[0]),2],\r\n        [Number($(\"#units_entry_all_light\")[0].innerText.match(/[0-9]{1,}/ig)[0]),4],\r\n        [Number($(\"#units_entry_all_ram\")[0].innerText.match(/[0-9]{1,}/ig)[0]),5],\r\n        [Number($(\"#units_entry_all_catapult\")[0].innerText.match(/[0-9]{1,}/ig)[0]),8]\r\n    ]\r\n    const arrName = [\"spear\", \"axe\", \"spy\", \"light\", \"ram\", \"catapult\"]\r\n    const total = arrUnits.reduce((total, e) => {\r\n        total += e[0] * e[1]\r\n        return total\r\n    }, 0)\r\n    const n = [0]\r\n    const arr = arrUnits.reduce((arr, e, i) => {\r\n        doc.forms[0][`${arrName[i]}`].value = Math.ceil((popMin * ((e[0] * e[1]) / total)) / e[1])\r\n        arr.push([Math.ceil((popMin * ((e[0] * e[1]) / total)) / e[1]), ...e] )\r\n        n[0] += Math.ceil((popMin * ((e[0] * e[1]) / total)) / e[1])\r\n        return arr\r\n    },[])\r\n    console.log(\"Total de tropas: \" + n[0])\r\n    console.log(\"Pop Min: \" + popMin)\r\n    console.log(arr)\r\n    doc.forms[0].attack.click();\r\n})();\r\n\n\n//# sourceURL=webpack://x-outros-x/./NewFakeLimit/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./NewFakeLimit/index.js");
/******/ 	
/******/ })()
;