// Объявляем переменные
let buttonShowHide = document.querySelector('.show-hide-btn');
let buttonReadMore = document.querySelector('.read-more-btn');

let modalWindows = document.querySelectorAll('.modal-window');

let mainContainer = document.querySelector('.main-container');
let asideMenu = document.querySelector('.menu');
let sectionShowcaseText = document.querySelector('.showcase-section__text');
let divFeedbackModal = document.querySelector('.modal-feedback');
let divCallModal = document.querySelector('.modal-call');
let divBlurModal = document.querySelector('.blur-modal');

// Проверяем изменение размера экрана
function checkScreenSize() {
    if (window.innerWidth < 768){     
       
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 16,            
            
            // Пагинатор
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },            
        });
           
    } 
  }


function showModalWindow () {
    hideAllModalWindows();    
    divBlurModal.style.display = 'block';
    mainContainer.style.position = 'fixed';
    mainContainer.style.owerflow = 'hidden';       
}

function hideAllModalWindows () {    
    for (let elem of modalWindows) {
        elem.style.display = 'none';        
    }
    divBlurModal.style.display = 'none';    
    mainContainer.style.position = 'static';
    asideMenu.style.zIndex = '1';
    if (window.innerWidth < 1440){        
        asideMenu.style.display = 'none';
        asideMenu.style.position = 'relative';
    }    
}

// Обработка событий нажатия кнопок

document.body.addEventListener('click', event => { 
    
    if (event.target.parentElement.classList.contains('burger-btn')) {        
        showModalWindow ();
        asideMenu.style.zIndex = '3';
        asideMenu.style.display = 'block';
        asideMenu.style.position = 'sticky';
        
        return;
    }

    if (event.target.parentElement.classList.contains('feedback-btn')) {        
        showModalWindow ();
        divFeedbackModal.style.display = 'flex';
        return;
    }

    if (event.target.parentElement.classList.contains('call-btn')) {        
        showModalWindow ();
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
        let elem = event.target.parentElement;

        elem.previousElementSibling.style.height = 'auto';
        elem.firstElementChild.style.transform = 'scale(-1, -1)';
        elem.lastElementChild.innerHTML = 'Скрыть';        
        elem.classList.replace('show-hide-btn_show','show-hide-btn_hide');
        return;               
    }

    if (event.target.parentElement.classList.contains('show-hide-btn_hide')) {
        let elem = event.target.parentElement;

        elem.previousElementSibling.style.height = '200px';
        elem.firstElementChild.style.transform = 'scale(1, 1)';
        elem.lastElementChild.innerHTML = 'Показать всё'; 
        elem.classList.replace('show-hide-btn_hide','show-hide-btn_show');
        return;              
    }

});

// Обработка события загрузки страницы
window.addEventListener('load', checkScreenSize);