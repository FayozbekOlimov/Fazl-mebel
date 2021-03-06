// aos
AOS.init();

// ========== video ===========
const video = document.querySelector('.about__video video');
const playBtn = document.querySelector('.play-btn');

video.addEventListener('click', playVideo);

function playVideo() {
    if (video.paused) {
        video.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playBtn.classList.add('anim');
    } else {
        video.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playBtn.classList.remove('anim');
    }
}

// ========== tabs ==========
const tabs = document.querySelectorAll('.gallery__tabs-item');
const tabContents = document.querySelectorAll('.gallery__tabs-content');

tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabs[tabIndex].classList.add('active');
        tabContents[tabIndex].classList.add('active');
    });
});

// ========== swiper ==========
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// ========== imask ==========
const telInputs = document.querySelectorAll('[data-tel]');
const maskOptions = {
    mask: '+998 00 000 00 00',
    lazy: false
};
telInputs.forEach(elem => new IMask(elem, maskOptions));

// ========== modal ==========
const buttons = document.querySelectorAll('button[type="button"]');
const modalTitles = [
    'Bepul konsultatsiya oling!',
    'Yuklab olish uchun formani to\'ldiring',
    'Yuklab olish uchun formani to\'ldiring'
];

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
let modalTitle = document.querySelector('.modal__title');

buttons.forEach((btn, ind) => {
    btn.addEventListener('click', () => {
        modalTitle.innerText = modalTitles[ind];
        modal.classList.add('show');
        document.body.style.overflowY = 'hidden';
        overlay.style.display = 'block';
    })
})

document.addEventListener('click', e => {
    if (e.target.classList[0] == 'overlay') {
        modal.classList.remove('show');
        document.body.style.overflowY = 'auto';
        overlay.style.display = 'none';
    }
})

// validation
const inputs = document.querySelectorAll("input");
inputs.forEach(inp => {
    inp.oninvalid = function(e) {
        e.target.setCustomValidity("");
        if (inp.attributes.getNamedItem('data-tel')) {
            if (e.target.validity.patternMismatch) {
                e.target.setCustomValidity("Telefon raqami to'liq kiritilishi kerak!");
            }
        } else {
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Ism kiritilishi kerak!");
            }
        }
    }
    inp.oninput = function(e) {
        e.target.setCustomValidity("");
    };
})

// forms
const orderForm = document.getElementById('order-form');
const submittedMsg = `<p class='submitted-msg'><i class="fas fa-check"></i> Muvaffaqiyatli yuborildi! Mutaxassis tez orada siz bilan aloqaga chiqadi</p>`;
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('order-msg').innerHTML = submittedMsg;
})

const adviceForm = document.getElementById('advice-form');
adviceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!adviceForm.querySelector('.submitted-msg')) {
        adviceForm.querySelector('.container').insertAdjacentHTML('beforeend', submittedMsg);
    }
})

const brendsForm = document.getElementById('brends-form');

brendsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!brendsForm.querySelector('.submitted-msg')) {
        brendsForm.insertAdjacentHTML('beforeend', submittedMsg);
    }
})