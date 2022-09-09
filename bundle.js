/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");


const checkbox = document.querySelector('.switch-scheme__checkbox');
const logoRss = document.querySelector('.rss__img');
const logoGh = document.querySelector('.gh__img');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.header__nav');
const navItem = document.querySelectorAll('.nav__link');

// site color scheme switcher
const setupScheme = () => {
    const colorScheme = getScheme();
    !colorScheme ? setDarkScheme() : setLightScheme();
    checkbox.addEventListener('change', function () {
        this.checked ? setLightScheme() : setDarkScheme();
        setScheme(this.checked);
    })
}

const setLightScheme = () => {
    document.body.classList.add('body--light');
    checkbox.checked = true;
    logoRss.classList.add('footer--invert');
    logoGh.classList.add('footer--invert');
}

const setDarkScheme = () => {
    document.body.classList.remove('body--light');
    checkbox.checked = false;
    logoRss.classList.remove('footer--invert');
    logoGh.classList.remove('footer--invert');
}

const getScheme = () => {
    return JSON.parse(localStorage.getItem('color-scheme'));
}

const setScheme = (scheme) => {
    localStorage.setItem('color-scheme', scheme);
}

setupScheme();

// show hide navigation
const handleBtnClick = () => {
    nav.classList.remove('header__nav--show')
    document.body.classList.remove('body--scroll__disable');
};

openBtn.addEventListener('click', () => {
    nav.classList.add('header__nav--show')
    document.body.classList.add('body--scroll__disable');
    for (let item of navItem) {
        item.addEventListener('click', handleBtnClick)
    }
});

closeBtn.addEventListener('click', handleBtnClick);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtRCIsInNvdXJjZXMiOlsid2VicGFjazovL2N2Ly4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2E1YjQiLCJ3ZWJwYWNrOi8vY3Yvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3Yvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jdi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuc2Nzc1wiO1xuXG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtc2NoZW1lX19jaGVja2JveCcpO1xuY29uc3QgbG9nb1JzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yc3NfX2ltZycpO1xuY29uc3QgbG9nb0doID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdoX19pbWcnKTtcbmNvbnN0IG9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3Blbi1idG4nKTtcbmNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XG5jb25zdCBuYXZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpO1xuXG4vLyBzaXRlIGNvbG9yIHNjaGVtZSBzd2l0Y2hlclxuY29uc3Qgc2V0dXBTY2hlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29sb3JTY2hlbWUgPSBnZXRTY2hlbWUoKTtcbiAgICAhY29sb3JTY2hlbWUgPyBzZXREYXJrU2NoZW1lKCkgOiBzZXRMaWdodFNjaGVtZSgpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID8gc2V0TGlnaHRTY2hlbWUoKSA6IHNldERhcmtTY2hlbWUoKTtcbiAgICAgICAgc2V0U2NoZW1lKHRoaXMuY2hlY2tlZCk7XG4gICAgfSlcbn1cblxuY29uc3Qgc2V0TGlnaHRTY2hlbWUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LS1saWdodCcpO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIGxvZ29Sc3MuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLS1pbnZlcnQnKTtcbiAgICBsb2dvR2guY2xhc3NMaXN0LmFkZCgnZm9vdGVyLS1pbnZlcnQnKTtcbn1cblxuY29uc3Qgc2V0RGFya1NjaGVtZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHktLWxpZ2h0Jyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgIGxvZ29Sc3MuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLS1pbnZlcnQnKTtcbiAgICBsb2dvR2guY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLS1pbnZlcnQnKTtcbn1cblxuY29uc3QgZ2V0U2NoZW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xvci1zY2hlbWUnKSk7XG59XG5cbmNvbnN0IHNldFNjaGVtZSA9IChzY2hlbWUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3Itc2NoZW1lJywgc2NoZW1lKTtcbn1cblxuc2V0dXBTY2hlbWUoKTtcblxuLy8gc2hvdyBoaWRlIG5hdmlnYXRpb25cbmNvbnN0IGhhbmRsZUJ0bkNsaWNrID0gKCkgPT4ge1xuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdi0tc2hvdycpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5LS1zY3JvbGxfX2Rpc2FibGUnKTtcbn07XG5cbm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fbmF2LS1zaG93JylcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktLXNjcm9sbF9fZGlzYWJsZScpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgbmF2SXRlbSkge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQnRuQ2xpY2spXG4gICAgfVxufSk7XG5cbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQnRuQ2xpY2spOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==