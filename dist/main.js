/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.less */ \"./src/styles/style.less\");\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _news_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news_request */ \"./src/news_request.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener( 'load', getNewsAndShowModal );\r\n\r\nconst languageInput = document.getElementById('country-input');\r\nconst categoryInput = document.getElementById('category-input');\r\nconst languageMenu = document.getElementsByClassName('language_menu')[0];\r\nconst categoryMenu = document.getElementsByClassName('category_menu')[0];\r\n\r\nlanguageInput.addEventListener('mouseover', addLanguageClass);\r\ncategoryInput.addEventListener('mouseover', addCategoryClass);\r\nlanguageMenu.addEventListener('click', addLanguageClass);\r\ncategoryMenu.addEventListener('click', addCategoryClass);\r\nlanguageMenu.addEventListener('mouseleave', removeLanguageClass);\r\ncategoryMenu.addEventListener('mouseleave', removeCategoryClass);\r\ndocument.addEventListener('click', removeLanguageClass);\r\ndocument.addEventListener('click', removeCategoryClass);\r\n\r\nfunction addLanguageClass(e){\r\n    languageMenu.classList.add('menu_choose_active');\r\n    languageMenu.parentNode.style.zIndex = 20;\r\n    if(e.target.textContent) {\r\n        languageInput.value = e.target.textContent + ' ' + `(${e.target.id})`;\r\n        removeLanguageClass();\r\n    }\r\n}\r\nfunction addCategoryClass(e){\r\n    categoryMenu.classList.add('menu_choose_active');\r\n    categoryMenu.parentNode.style.zIndex = 20;\r\n    if(e.target.textContent) {\r\n        categoryInput.value = e.target.textContent;\r\n        removeCategoryClass();\r\n    }\r\n}\r\nfunction removeLanguageClass(){\r\n    languageMenu.classList.remove('menu_choose_active');\r\n    languageMenu.parentNode.style.zIndex = -20;\r\n}\r\nfunction removeCategoryClass(){\r\n    categoryMenu.classList.remove('menu_choose_active');\r\n    categoryMenu.parentNode.style.zIndex = -20;\r\n}\r\n\r\n\r\nconst submitBtn = document.getElementById('submit-btn');\r\nsubmitBtn.addEventListener('click', getNewsAndShowModal);\r\n\r\nfunction getNewsAndShowModal() {\r\n    event.preventDefault();\r\n\r\n    submitBtn.disabled = true;\r\n\r\n    const requestOptions = {\r\n        keyWord: '', \r\n        country: 'country=ua&', \r\n        category: '',\r\n    }\r\n\r\n    if( document.getElementById('news-content-block') ){\r\n        document.body.removeChild( document.getElementById('news-content-block') );\r\n    }\r\n\r\n    Object(_news_request__WEBPACK_IMPORTED_MODULE_2__[\"getNews\"])(requestOptions)\r\n        .then( response => {\r\n\r\n            submitBtn.disabled = false;\r\n            const newContentBlock = document.getElementById('news-content-block');\r\n\r\n            newContentBlock.addEventListener('click', event => {\r\n                let target = event.target;\r\n            \r\n                function thisElem(element) {\r\n                    if(element.hasAttribute('data-id')) {\r\n                        return +element.getAttribute('data-id');\r\n                    } else {\r\n                        return thisElem(element.parentNode);\r\n                    }\r\n                }\r\n                \r\n                response.map((elem) => {\r\n                    if(elem.id == thisElem(target)){\r\n                        console.log( elem );\r\n                        const options = {\r\n                            title: 'News PROvider',\r\n                            content: `\r\n                            <div class=\"modal-news-img-and-title\">\r\n                                <h2 class=\"modal-news-title\">${elem.title || ''}</h2>\r\n                                <img class=\"modal-news-img\" src=\"${elem.urlToImage}\" alt=\"Oops...\">\r\n                            </div>\r\n                            <div class=\"modal-news-main-body\">\r\n                                <p class=\"modal-news-description\">${elem.description || ''}</p>\r\n                                <div class=\"modal-news-link\">Read this article on\r\n                                    <a class=\"modal-news-link-target\" href=\"${elem.url}\" target=\"_blank\">${elem.source.name}</a>\r\n                                </div>\r\n                            </div>`,\r\n                            \r\n                            closable: true\r\n                        }\r\n                    \r\n                        const newsModalBlock = _modal__WEBPACK_IMPORTED_MODULE_1__[\"newsModal\"].modal(options);\r\n                        newsModalBlock.open();\r\n                    }\r\n                })\r\n\r\n\r\n            });\r\n\r\n\r\n        } )\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: newsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsModal\", function() { return newsModal; });\nconst newsModal = {}\r\n\r\nfunction _createModal(options) {\r\n    const modal = document.createElement('div');\r\n    modal.classList.add('vmodal');\r\n    modal.insertAdjacentHTML('afterbegin', `\r\n        <div class=\"modal-overlay\">\r\n\r\n            <div class=\"modal-window\">\r\n                <div class=\"modal-window-header\">\r\n                    <h2>${options.title}</h2>\r\n                    ${options.closable ? `<p id=\"close-btn\" data-close=\"true\">&times;</p>` : ''}\r\n                </div>\r\n                <div class=\"modal-window-body\" data-content>\r\n                    ${options.content || ''}\r\n                </div>                \r\n            </div>\r\n        </div>\r\n    `)\r\n    document.body.append(modal);\r\n\r\n    return modal\r\n}\r\n\r\nnewsModal.modal = function(options) {\r\n    const ANIMATION_TRANSITION = 400;\r\n    const $modal = _createModal(options);\r\n    let opened = false;\r\n\r\n    if(opened === true) {\r\n        modal.close();\r\n    }\r\n\r\n    const modal = {\r\n        open() {\r\n            $modal.classList.add('open');\r\n            opened = true\r\n        },\r\n        close() {\r\n            $modal.classList.remove('open');\r\n            $modal.classList.add('hide');\r\n        },\r\n    }\r\n\r\n\r\n    const listener = event => {\r\n        if(event.target.dataset.close) {\r\n            modal.close();\r\n            setTimeout(() => {\r\n                modal.destroy();\r\n            }, ANIMATION_TRANSITION);\r\n        }\r\n    }\r\n    $modal.addEventListener('click', listener);\r\n\r\n\r\n    return Object.assign(modal, {\r\n        destroy() {\r\n            $modal.parentNode.removeChild($modal);\r\n            $modal.removeEventListener('click', listener);\r\n        },\r\n        setContent( html ){\r\n            $modal.querySelector('[data-content]').innerHTML = html;\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/modal.js?");

/***/ }),

/***/ "./src/news_request.js":
/*!*****************************!*\
  !*** ./src/news_request.js ***!
  \*****************************/
/*! exports provided: getNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNews\", function() { return getNews; });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\r\n\r\nfunction getNews(options){\r\n\r\n    const apiKey = 'apiKey=81c722ace915430da7076695afd718f0';\r\n    const mainUrl = 'https://newsapi.org/v2/top-headlines?';\r\n    const newContentBlock = document.createElement('div');\r\n    newContentBlock.setAttribute('id', 'news-content-block');\r\n    document.body.append( newContentBlock );\r\n    \r\n    if(document.getElementById('key_word-input').value){\r\n        options.keyWord = `q=${document.getElementById('key_word-input').value.replace(/\\s+.+/g, '')}&`;\r\n    }\r\n    try{\r\n        if(document.getElementById('country-input').value){\r\n            options.country = `country=${document.getElementById('country-input').value.match(/\\(([a-z]{2})\\)$/)[1]}&`;\r\n        }\r\n    } catch(e){\r\n        let options = {\r\n            title: 'Ooppss...',\r\n            content: `<div class=\"error_text\">\r\n                <p class=\"error_text_par\">Try to write country properly</p>\r\n                <p class=\"error_text_par\"><b>Format:</b> Country (country code) <b>or</b> (country code)</p>\r\n                <p class=\"error_text_par\"><b>For example:</b> Ukraine (ua) <b>or</b> (ua)</p></div>`,\r\n            closable: true\r\n        };\r\n        const countryErrorModal = _modal__WEBPACK_IMPORTED_MODULE_0__[\"newsModal\"].modal(options);\r\n        countryErrorModal.open();\r\n    }\r\n    if(document.getElementById('category-input').value){\r\n        options.category = `category=${document.getElementById('category-input').value}&`;\r\n    }\r\n\r\n    return fetch(`${mainUrl}${options.country}${options.keyWord}${options.category}${apiKey}`)\r\n        .then(response => response.json())\r\n        .then(response => {\r\n\r\n            \r\n\r\n            if(response.totalResults == 0){\r\n                let options = {\r\n                    title: 'Ooppss...',\r\n                    content: `<div class=\"error_text\">\r\n                        <p class=\"error_text_par\">Can not find any results</p>`,\r\n                    closable: true\r\n                };\r\n                const resultErrorModal = _modal__WEBPACK_IMPORTED_MODULE_0__[\"newsModal\"].modal(options);\r\n                resultErrorModal.open();\r\n            }\r\n\r\n            let tempId = 0;\r\n            response.articles.map(elem => {\r\n                elem.id = tempId++;\r\n            });\r\n\r\n            newContentBlock.innerHTML = response.articles.map(configNewsBlocks).join('');\r\n\r\n            for(let i=1; i < newContentBlock.children.length; i += 4){\r\n                newContentBlock.children[i].classList.toggle('block-grey-bg')\r\n            }\r\n            return response.articles\r\n        })\r\n    \r\n}\r\n\r\nfunction configNewsBlocks(newsElement){\r\n    return  `\r\n        <hr>\r\n        <div class=\"news-content-block-not-flex\" data-id=\"${newsElement.id}\">\r\n            <div class=\"news-content-block-flex\">\r\n                <div class=\"news-content-block-flex-time\">\r\n                    ${new Date(newsElement.publishedAt).toLocaleTimeString().replace(/:\\d\\d$/g, '')}<br>\r\n                </div>\r\n                <div class=\"news-content-block-flex-main-body\">\r\n                    ${newsElement.title}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `\r\n}\n\n//# sourceURL=webpack:///./src/news_request.js?");

/***/ }),

/***/ "./src/styles/style.less":
/*!*******************************!*\
  !*** ./src/styles/style.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/style.less?");

/***/ })

/******/ });