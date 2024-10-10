/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Объявляем переменные
var buttonShowHide = document.querySelector('.show-hide-btn');
var buttonReadMore = document.querySelector('.read-more-btn');
var modalWindows = document.querySelectorAll('.modal-window');
var mainContainer = document.querySelector('.main-container');
var asideMenu = document.querySelector('.menu');
var sectionShowcaseText = document.querySelector('.showcase-section__text');
var divFeedbackModal = document.querySelector('.modal-feedback');
var divCallModal = document.querySelector('.modal-call');
var divBlurModal = document.querySelector('.blur-modal');

// Проверяем изменение размера экрана
function checkScreenSize() {
  if (window.innerWidth < 768) {
    var swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      // Пагинатор
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }
}
function showModalWindow() {
  hideAllModalWindows();
  divBlurModal.style.display = 'block';
  mainContainer.style.position = 'fixed';
  mainContainer.style.owerflow = 'hidden';
}
function hideAllModalWindows() {
  var _iterator = _createForOfIteratorHelper(modalWindows),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elem = _step.value;
      elem.style.display = 'none';
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  divBlurModal.style.display = 'none';
  mainContainer.style.position = 'static';
  asideMenu.style.zIndex = '1';
  if (window.innerWidth < 1440) {
    asideMenu.style.display = 'none';
    asideMenu.style.position = 'relative';
  }
}

// Обработка событий нажатия кнопок

document.body.addEventListener('click', function (event) {
  if (event.target.parentElement.classList.contains('burger-btn')) {
    showModalWindow();
    asideMenu.style.zIndex = '3';
    asideMenu.style.display = 'block';
    asideMenu.style.position = 'sticky';
    return;
  }
  if (event.target.parentElement.classList.contains('feedback-btn')) {
    showModalWindow();
    divFeedbackModal.style.display = 'flex';
    return;
  }
  if (event.target.parentElement.classList.contains('call-btn')) {
    showModalWindow();
    divCallModal.style.display = 'flex';
    return;
  }
  if (event.target.parentElement.classList.contains('close-modal')) {
    hideAllModalWindows();
    return;
  }
  if (event.target.classList.contains('close-modal')) {
    hideAllModalWindows();
    return;
  }
  if (event.target.classList.contains('read-more-btn')) {
    sectionShowcaseText.style.maxHeight = "none";
    sectionShowcaseText.style.paddingBottom = "24px";
    buttonReadMore.style.display = "none";
    return;
  }
  if (event.target.parentElement.classList.contains('show-hide-btn_show')) {
    var elem = event.target.parentElement;
    elem.previousElementSibling.style.height = 'auto';
    elem.firstElementChild.style.transform = 'scale(-1, -1)';
    elem.lastElementChild.innerHTML = 'Скрыть';
    elem.classList.replace('show-hide-btn_show', 'show-hide-btn_hide');
    return;
  }
  if (event.target.parentElement.classList.contains('show-hide-btn_hide')) {
    var _elem = event.target.parentElement;
    _elem.previousElementSibling.style.height = '200px';
    _elem.firstElementChild.style.transform = 'scale(1, 1)';
    _elem.lastElementChild.innerHTML = 'Показать всё';
    _elem.classList.replace('show-hide-btn_hide', 'show-hide-btn_show');
    return;
  }
});

// Обработка события загрузки страницы
window.addEventListener('load', checkScreenSize);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_js__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/close.svg */ "./img/buttons/close.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/group.svg */ "./img/group.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/search.svg */ "./img/buttons/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/call.svg */ "./img/buttons/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/chat.svg */ "./img/buttons/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/profile.svg */ "./img/buttons/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/burger.svg */ "./img/buttons/burger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/repair.svg */ "./img/buttons/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/checkstatus.svg */ "./img/buttons/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/show-all-arrow.svg */ "./img/buttons/show-all-arrow.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/photo_logo_l.png */ "./img/photo_logo_l.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/label-brands/label-lenovo.svg */ "./img/label-brands/label-lenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/go.svg */ "./img/buttons/go.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/label-brands/label-samsung.svg */ "./img/label-brands/label-samsung.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/label-brands/label-apple.svg */ "./img/label-brands/label-apple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/label-brands/label-viewsonic.svg */ "./img/label-brands/label-viewsonic.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/label-brands/label-bosch.svg */ "./img/label-brands/label-bosch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/label-brands/label-hp.svg */ "./img/label-brands/label-hp.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/label-brands/label-acer.svg */ "./img/label-brands/label-acer.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/label-brands/label-sony.svg */ "./img/label-brands/label-sony.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/right-arrow-white.svg */ "./img/buttons/right-arrow-white.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/buttons/right-arrow-pink.svg */ "./img/buttons/right-arrow-pink.svg"), __webpack_require__.b);
// Module
var code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" href="${___HTML_LOADER_IMPORT_0___}" type="image/x-icon">
  <title>CPS Progect</title>
</head>
<body>  
  <div class="site-container">  <!-- Контейнер всего сайта -->
    <div class="blur-modal close-modal"></div>
    <aside class="menu">  <!--Основное меню, с левой стороны сайта-->      
      <div>  <!-- Шапка меню -->
        <ul class="menu-header">
          <li class="menu-header__item">
            <button class="primary-btn menu-close-btn close-modal">
              <img src="${___HTML_LOADER_IMPORT_1___}" alt="Закрыть боковое меню">
            </button>          
          </li>
          <li class="menu-header__item menu-header__item_pos_right">
            <img src="${___HTML_LOADER_IMPORT_2___}" alt="Логотип компании">
          </li>
          <li class="menu-header__item">
            <button class="primary-btn">
              <img src="${___HTML_LOADER_IMPORT_3___}" alt="Поиск">
            </button>
          </li>
        </ul>      
      </div>
      <nav class="menu-navigation">     <!-- Секция навигации меню-->        
        <button class="menu-navigation__item menu-navigation__item_accent-line" >
          Ремонт техники
        </button>      
        <button class="menu-navigation__item">
          Услуги и сервисы
        </button>      
        <button class="menu-navigation__item">
          Корпоративным клиентам
        </button>      
        <button class="menu-navigation__item">
          Продавцам техники
        </button>      
        <button class="menu-navigation__item">
          Партнерам
        </button>      
        <button class="menu-navigation__item">
          Производителям
        </button>      
        <button class="menu-navigation__item">
          Наши сервисные центры
        </button>      
        <button class="menu-navigation__item">
          Контакты
        </button>          
      </nav>    
      <footer class="menu-contacts">  <!-- Контакты (подвал меню)-->     
        <ul class="menu-contacts__list">
          <li class="menu-contacts__item">
            <button class="primary-btn call-btn">
              <img src="${___HTML_LOADER_IMPORT_4___}" alt="Позвонить">
            </button>          
          </li>
          <li class="menu-contacts__item">
            <button class="primary-btn feedback-btn">
              <img src="${___HTML_LOADER_IMPORT_5___}" alt="Чат">
            </button>          
          </li>
          <li class="menu-contacts__item">
            <button class="primary-btn">
              <img src="${___HTML_LOADER_IMPORT_6___}" alt="Профиль">
            </button>          
          </li>
        </ul>      
        <div class="email-label">
          mail@cps.com
        </div>
        <div class="phone-label">
          8 800 890 8900
        </div>      
        <ul class="language-list">
          <li class="language-list__item">
            <button class="language-list__btn">
              RU
            </button>          
          </li>
          <li class="language-list__item">
            <button class="language-list__btn">
              EN
            </button>          
          </li>
          <li class="language-list__item">
            <button class="language-list__btn">
              CH
            </button>          
          </li>
        </ul>      
      </footer>
    </aside>
    <div class="main-container">  <!-- Контейнер для центральной части сайта -->
      <header class="header-site">  <!-- Шапка сайта -->
        <ul class="header-site__menu">
          <li class="header-site__item">
            <button class="primary-btn burger-btn">
              <img src="${___HTML_LOADER_IMPORT_7___}" alt="Меню">
            </button>          
          </li>
          <li class="header-site__item header-site__item_visible_tablet">     
            <div class="header-site__sepline">          
            </div>
          </li>
          <li class="header-site__item header-site__item_pos-right">
            <img src="${___HTML_LOADER_IMPORT_2___}" alt="Логотип компании">
          </li>
          <li class="header-site__item header-site__item_visible_tablet">
            <button class="primary-btn call-btn">
              <img src="${___HTML_LOADER_IMPORT_4___}" alt="Позвонить">
            </button>
          </li>
          <li class="header-site__item header-site__item_visible_tablet">
            <button class="primary-btn feedback-btn">
              <img src="${___HTML_LOADER_IMPORT_5___}" alt="Чат">
            </button>
          </li>
          <li class="header-site__item  header-site__item_visible_tablet">
            <button class="primary-btn">
              <img src="${___HTML_LOADER_IMPORT_6___}" alt="Профиль">
            </button>
          </li>
          <li class="header-site__item">     
            <div class="header-site__sepline">          
            </div>
          </li>
          <li class="header-site__item">
            <button class="primary-btn">
              <img src="${___HTML_LOADER_IMPORT_8___}" alt="Оставить заявку">
            </button>
          </li>
          <li class="header-site__item">
            <button class="primary-btn">
              <img src="${___HTML_LOADER_IMPORT_9___}" alt="Статус ремонта">
            </button>          
          </li>
        </ul>
      </header>
      <main class="content-container">  <!-- Основное содержимое сайта -->        
        <section class="showcase-section">  <!-- "Витрина", лицевая секция -->            
          <div class="chapter_caption"> <!-- Блок заголовка витрины -->
            <h1 class="chapter_caption__title"> <!-- Заголовок витрины -->
              Услуги и сервисы
            </h1>
            <button class="primary-btn primary-btn_indent primary-btn_visible_desktop">
              &nbsp;&nbsp;Оставить заявку&nbsp;&nbsp;
              <img src="${___HTML_LOADER_IMPORT_8___}" alt="Оставить заявку">
            </button>
            <button class="primary-btn primary-btn_indent primary-btn_visible_desktop">
              &nbsp;&nbsp;Статус ремонта&nbsp;&nbsp;
              <img src="${___HTML_LOADER_IMPORT_9___}" alt="Статус ремонта">
            </button>
          </div>     
          <nav class="showcase-section__nav"> <!-- Секция навигации -->
            <ul class="showcase-section__nav-list">
              <li>
                <button class="showcase-section__nav-btn showcase-section__nav-btn_current">
                  Ремонтируемые бренды
                </button>
              </li>
              <li>
                <button class="showcase-section__nav-btn">
                  Ремонтируемые устройства
                </button>
              </li>
              <li>
                <button class="showcase-section__nav-btn">
                  Цены на услуги
                </button>
              </li>
              <li>
                <button class="showcase-section__nav-btn">
                  Адреса сервисных центров
                </button>
              </li>
              <li>
                <button class="showcase-section__nav-btn">
                  Специальные цены
                </button>
              </li>
              <li>
                <button class="showcase-section__nav-btn">
                  Отзывы
                </button>
              </li>
            </ul>
          </nav>      
          <div class="showcase-section__content"> <!-- Блок контента -->     
            <div class="showcase-section__info">  <!-- Блок информационной части (текст + читать далее) -->   
              <div class="showcase-section__text">  <!-- Блок для текста -->
                <p>
                  Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
                </p>
                <br>
                <p>
                  Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                </p>
                <br>
                <p>
                  Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                </p>
                <br>
                <p>
                  Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.
                </p>
              </div>      
              <div> <!-- Блок с кнопкой "Читать далее" -->
                <button class="read-more-btn">
                  <img src="${___HTML_LOADER_IMPORT_10___}" alt="Читать далее">
                  &nbsp;&nbsp;Читать далее
                </button>
              </div>
            </div>      
            <div class="showcase-section__photo"> <!-- Блок для фото-->
              <img src="${___HTML_LOADER_IMPORT_11___}" alt="Фото логотипа компании">
            </div>
          </div>
        </section>
        <section class="choice-section">   <!-- Секция содержащая кнопки с брендами -->
          <div class="choice-section__header">
            <h2 class="choice-section__title">
              Ремонт техники различных брендов
            </h2>
          </div>          
          <div class="choice-section__container swiper">   <!-- Блок с кнопками выбора бренда (+Swiper)-->
            <div class="choice-section__list swiper-wrapper">    <!-- Блок со слайдами Swiper> -->
            <!-- Слайды Swiper -->
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_12___}" alt="Lenovo">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_14___}" alt="Samsung">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_15___}" alt="Apple">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_16___}" alt="ViewSonic">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_17___}" alt="Bosch">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_18___}" alt="HP">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_19___}" alt="Acer">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_20___}" alt="Sony">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_12___}" alt="Lenovo">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_14___}" alt="Samsung">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_brand">
                  <img src="${___HTML_LOADER_IMPORT_15___}" alt="Apple">
                  <img src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>	  
            </div>

            <!-- Блок-тень справа над слайдом -->
            <div class="swiper__slide-shadow"></div>	

            <!-- Пагинатор Swiper -->
            <div class="swiper-pagination"></div>
          </div>          
          <button class="show-hide-btn show-hide-btn_show"> <!--Кнопка "Показать всё" -->
            <img class="show-hide-btn__img" src="${___HTML_LOADER_IMPORT_10___}" alt="Показать всё">
            <span>Показать всё</span>
          </button>          
        </section>
        <section class="choice-section">   <!-- Секция содержащая кнопки с видами техники -->
          <div class="choice-section__header">
            <h2 class="choice-section__title">
              Ремонт различных видов техники
            </h2>
          </div>
          <div class="choice-section__container swiper">   <!-- Блок с кнопками выбора техники (+Swiper)-->
            <div class="choice-section__list swiper-wrapper">    <!-- Блок со слайдами Swiper> -->
            <!-- Слайды Swiper -->
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_tech">
                  <div class="choice-section__tech-text">Ремонт ноутбуков</div>
                  <img class="choice-section__tech-img" src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_tech">
                  <div class="choice-section__tech-text">Ремонт планшетов</div>
                  <img class="choice-section__tech-img" src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_tech">
                  <div class="choice-section__tech-text">Ремонт ПК</div>
                  <img class="choice-section__tech-img" src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_tech">
                  <div class="choice-section__tech-text">Ремонт мониторов</div>
                  <img class="choice-section__tech-img" src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_tech">
                  <div class="choice-section__tech-text">Ремонт телевизоров</div>
                  <img class="choice-section__tech-img" src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_tech">
                  <div class="choice-section__tech-text">Ремонт смартфонов</div>
                  <img class="choice-section__tech-img" src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_tech">
                  <div class="choice-section__tech-text">Ремонт принтеров</div>
                  <img class="choice-section__tech-img" src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>
              <div class="swiper-slide">
                <button class="choice-section__item choice-section__item_tech">
                  <div class="choice-section__tech-text">Ремонт аудиоустройств</div>
                  <img class="choice-section__tech-img" src="${___HTML_LOADER_IMPORT_13___}" alt="Go">
                </button>
              </div>                       
            </div>

            <!-- Блок-тень справа над слайдом -->
            <div class="swiper__slide-shadow"></div>	

            <!-- Пагинатор Swiper -->
            <div class="swiper-pagination"></div>
          </div>          
          <button class="show-hide-btn show-hide-btn_show"> <!--Кнопка "Показать всё" -->
            <img class="show-hide-btn__img" src="${___HTML_LOADER_IMPORT_10___}" alt="Показать всё">
            <span>Показать всё</span>
          </button>          
        </section>
        <section class="choice-section">   <!-- Секция содержащая цены -->
          <div class="choice-section__header">
            <h2 class="choice-section__title">
              Цены на услуги
            </h2>
          </div>
                    
          <div class="choice-section__container choice-section__container_height_auto price-container swiper">   <!-- Блок с кнопками выбора цен (+Swiper)-->
            <!-- Заголовок таблицы в режимах tablet и desktop -->
          <div class="price-container__header">
            <div class="price-container__item">
              <div class="price-container__header-title">Ремонтные услуги</div>                    
            </div>
            <div class="price-container__item_width_small">
                <div class="price-container__header-title">Цена</div>                      
            </div>
            <div class="price-container__item-container">
              <div class="price-container__item">
                <div class="price-container__header-title">Срок</div>                      
              </div>                                        
            </div>
          </div>
            <div class="choice-section__list choice-section__list_price swiper-wrapper">    <!-- Блок со слайдами Swiper> -->
              <!-- Слайды Swiper -->             
              <div class="swiper-slide">
                <div class="choice-section__item choice-section__item_price">
                  <div class="price-container__item">
                    <div class="price-container__item-title">Ремонтные услуги</div>
                    <div class="price-container__item-text">Диагностика</div>
                  </div>
                  <div class="price-container__item_width_small">
                      <div class="price-container__item-title">Цена</div>
                      <div class="price-container__item-text">Бесплатно</div>
                  </div>
                  <div class="price-container__item-container">
                    <div class="price-container__item">
                      <div class="price-container__item-title">Срок</div>
                      <div class="price-container__item-text">30 мин</div>
                    </div>
                    <button class="order-btn">
                      Заказать
                      <img src="${___HTML_LOADER_IMPORT_21___}" alt="стрелка">
                    </button>                    
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="choice-section__item choice-section__item_price">
                  <div class="price-container__item">
                    <div class="price-container__item-title">Ремонтные услуги</div>
                    <div class="price-container__item-text">Замена дисплея</div>
                  </div>
                  <div class="price-container__item_width_small">
                      <div class="price-container__item-title">Цена</div>
                      <div class="price-container__item-text">1000 &#8381</div>
                  </div>
                  <div class="price-container__item-container">
                    <div class="price-container__item">
                      <div class="price-container__item-title">Срок</div>
                      <div class="price-container__item-text">30-120 мин</div>
                    </div>
                    <button class="order-btn">
                      Заказать
                      <img src="${___HTML_LOADER_IMPORT_21___}" alt="стрелка">
                    </button>                    
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="choice-section__item choice-section__item_price">
                  <div class="price-container__item">
                    <div class="price-container__item-title">Ремонтные услуги</div>
                    <div class="price-container__item-text">Замена полифонического динамика</div>
                  </div>
                  <div class="price-container__item_width_small">
                      <div class="price-container__item-title">Цена</div>
                      <div class="price-container__item-text">1000 &#8381</div>
                  </div>
                  <div class="price-container__item-container">
                    <div class="price-container__item">
                      <div class="price-container__item-title">Срок</div>
                      <div class="price-container__item-text">30-120 мин</div>
                    </div>
                    <button class="order-btn">
                      Заказать
                      <img src="${___HTML_LOADER_IMPORT_21___}" alt="стрелка">
                    </button>                    
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="choice-section__item choice-section__item_price">
                  <div class="price-container__item">
                    <div class="price-container__item-title">Ремонтные услуги</div>
                    <div class="price-container__item-text">Тестирование с выдачей технического заключения</div>
                  </div>
                  <div class="price-container__item_width_small">
                      <div class="price-container__item-title">Цена</div>
                      <div class="price-container__item-text">1000 &#8381</div>
                  </div>
                  <div class="price-container__item-container">
                    <div class="price-container__item">
                      <div class="price-container__item-title">Срок</div>
                      <div class="price-container__item-text">30-120 мин</div>
                    </div>
                    <button class="order-btn">
                      Заказать
                      <img src="${___HTML_LOADER_IMPORT_21___}" alt="стрелка">
                    </button>                    
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="choice-section__item choice-section__item_price">
                  <div class="price-container__item">
                    <div class="price-container__item-title">Ремонтные услуги</div>
                    <div class="price-container__item-text">Замена программного обеспечения</div>
                  </div>
                  <div class="price-container__item_width_small">
                      <div class="price-container__item-title">Цена</div>
                      <div class="price-container__item-text">1000 &#8381</div>
                  </div>
                  <div class="price-container__item-container">
                    <div class="price-container__item">
                      <div class="price-container__item-title">Срок</div>
                      <div class="price-container__item-text">30-120 мин</div>
                    </div>
                    <button class="order-btn">
                      Заказать
                      <img src="${___HTML_LOADER_IMPORT_21___}" alt="стрелка">
                    </button>                    
                  </div>
                </div>
              </div>
            </div>

            <!-- Блок-тень справа над слайдом -->
            <div class="swiper__slide-shadow"></div>	

            <!-- Пагинатор Swiper -->
            <div class="swiper-pagination"></div>
          </div>

          <div class="choice-section__footnote"> <!-- Блок с примечанием по ценам -->
              Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание, оставьте заявку.
          </div>
          <div>
            <a class="offer-link" href="">Получить коммерческое предложение&nbsp;              
            <img src="${___HTML_LOADER_IMPORT_22___}" alt=">">
            </a>            
          </div>                    
        </section>
      </main>
      <footer class="footer-site">  <!-- Подвал сайта -->
        <div class="footer-site__item">
          &#169; 2019 CPS<br>
          Разработано командой Apesong
        </div>
        <div class="footer-site__item">
          <a href="">Политика конфиденциальности</a>
        </div>
        <div class="footer-site__item">
          Информация, размещенная на данной странице, не является публичной офертой
        </div>

      </footer>      
    </div>
    <div class="modal-feedback modal-window">  <!-- Модальный блок "Обратная связь" -->      
      <button class="primary-btn close-modal">
        <img src="${___HTML_LOADER_IMPORT_1___}" alt="Закрыть окно Обратная связь">
      </button>      
      <div class="chapter_caption">
        <h1 class="chapter_caption__title">
          Обратная связь
        </h1>
      </div>
      <form class="modal-feedback__form" name="feedback-form" autocomplete="on" action="">
        <input name="name" placeholder="Имя" type="text" size="50">
        <input name="phone" placeholder="Телефон" size="11"> 
        <input name="e-mail" placeholder="Электронная почта" type="email"> 
        <textarea name="message" placeholder="Сообщение" maxlength="200" rows="5"></textarea>             
        <div class="rule-info">
          Нажимая “отправить”, вы даете согласие на 
          <a class="rule-info__link" href="">обработку персональных данных</a>
          и соглашаетесь с нашей 
          <a class="rule-info__link" href="">политикой конфиденциальности</a>
        </div>
        <button class="order-btn">
          Отправить
          <img src="${___HTML_LOADER_IMPORT_21___}" alt="стрелка">
        </button>
      </form>
    </div>
    <div class="modal-call modal-window">  <!-- Модальный блок "Заказать звонок" -->
      <button class="primary-btn close-modal">
        <img src="${___HTML_LOADER_IMPORT_1___}" alt="Закрыть окно Заказать звонок">
      </button>      
      <div class="chapter_caption">
        <h1 class="chapter_caption__title">
          Заказать звонок
        </h1>
      </div>
      <form class="modal-call__form" name="call-form" autocomplete="on" action="">
        <input name="phone" placeholder="Телефон" size="11">            
        <div class="rule-info">
          Нажимая “отправить”, вы даете согласие на 
          <a class="rule-info__link" href="">обработку персональных данных</a>
          и соглашаетесь с нашей 
          <a class="rule-info__link" href="">политикой конфиденциальности</a>
        </div>
        <button class="order-btn">
          Отправить
          <img src="${___HTML_LOADER_IMPORT_21___}" alt="стрелка">
        </button>
      </form>     
    </div>    
  </div>
  ${"<" + "script"} src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js">${"<" + "/script"}>
</body>
</html>
`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/buttons/burger.svg":
/*!********************************!*\
  !*** ./img/buttons/burger.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burger.svg";

/***/ }),

/***/ "./img/buttons/call.svg":
/*!******************************!*\
  !*** ./img/buttons/call.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./img/buttons/chat.svg":
/*!******************************!*\
  !*** ./img/buttons/chat.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/buttons/checkstatus.svg":
/*!*************************************!*\
  !*** ./img/buttons/checkstatus.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/buttons/close.svg":
/*!*******************************!*\
  !*** ./img/buttons/close.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./img/buttons/go.svg":
/*!****************************!*\
  !*** ./img/buttons/go.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/go.svg";

/***/ }),

/***/ "./img/buttons/profile.svg":
/*!*********************************!*\
  !*** ./img/buttons/profile.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/buttons/repair.svg":
/*!********************************!*\
  !*** ./img/buttons/repair.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/buttons/right-arrow-pink.svg":
/*!******************************************!*\
  !*** ./img/buttons/right-arrow-pink.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/right-arrow-pink.svg";

/***/ }),

/***/ "./img/buttons/right-arrow-white.svg":
/*!*******************************************!*\
  !*** ./img/buttons/right-arrow-white.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/right-arrow-white.svg";

/***/ }),

/***/ "./img/buttons/search.svg":
/*!********************************!*\
  !*** ./img/buttons/search.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./img/buttons/show-all-arrow.svg":
/*!****************************************!*\
  !*** ./img/buttons/show-all-arrow.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/show-all-arrow.svg";

/***/ }),

/***/ "./img/group.svg":
/*!***********************!*\
  !*** ./img/group.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/group.svg";

/***/ }),

/***/ "./img/label-brands/label-acer.svg":
/*!*****************************************!*\
  !*** ./img/label-brands/label-acer.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/label-acer.svg";

/***/ }),

/***/ "./img/label-brands/label-apple.svg":
/*!******************************************!*\
  !*** ./img/label-brands/label-apple.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/label-apple.svg";

/***/ }),

/***/ "./img/label-brands/label-bosch.svg":
/*!******************************************!*\
  !*** ./img/label-brands/label-bosch.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/label-bosch.svg";

/***/ }),

/***/ "./img/label-brands/label-hp.svg":
/*!***************************************!*\
  !*** ./img/label-brands/label-hp.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/label-hp.svg";

/***/ }),

/***/ "./img/label-brands/label-lenovo.svg":
/*!*******************************************!*\
  !*** ./img/label-brands/label-lenovo.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/label-lenovo.svg";

/***/ }),

/***/ "./img/label-brands/label-samsung.svg":
/*!********************************************!*\
  !*** ./img/label-brands/label-samsung.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/label-samsung.svg";

/***/ }),

/***/ "./img/label-brands/label-sony.svg":
/*!*****************************************!*\
  !*** ./img/label-brands/label-sony.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/label-sony.svg";

/***/ }),

/***/ "./img/label-brands/label-viewsonic.svg":
/*!**********************************************!*\
  !*** ./img/label-brands/label-viewsonic.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/label-viewsonic.svg";

/***/ }),

/***/ "./img/photo_logo_l.png":
/*!******************************!*\
  !*** ./img/photo_logo_l.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/photo_logo_l.png";

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map