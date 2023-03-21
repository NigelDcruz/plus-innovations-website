AOS.init({
    duration: 800,
    disable: 'mobile',
    once: true,

});

// Mobile helps to slider tabs 
// const mobileTabSlider = new Swiper('.mobile-tabs-slider', {
//     slidesPerView: 1,

// });

// let mobileHelpstoSlideTabs = (i) => {
//     helpstoSlideToSlider.slideTo(i);
//     mobileTabSlider.slideTo(i);
// }

// Accordian Slider 
const accordianSwiper = new Swiper('.swiper-accordian', {
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    effect: 'creative',
    creativeEffect: {
        prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: [0, 0, -400],
        },
        next: {
            // will set `translateX(100%)` on next slides
            translate: [0, '-100%', 0],
        },
    },

});

let accordianSlider = (i) => {
    accordianSwiper.slideTo(i)
}



// Helps to Slider 

let toggleHelpsToTabsActiveClass = (i) => {
    let tabs = document.querySelectorAll('.tabs .tab');
    tabs.forEach((tab) => {
        tab.classList.remove('active');
    })
    tabs[i].classList.add('active');
}

const helpstoSlideToSlider = new Swiper('.helpstoSlideToSlider', {
    navigation: {
        nextEl: ".slider-buttons-next",
        prevEl: ".slider-buttons-prev",
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    on: {
        slideChange: function () {
            toggleHelpsToTabsActiveClass(this.activeIndex);
        },
    },

});


let helpstoSlideTo = (i) => {
    helpstoSlideToSlider.slideTo(i);
    toggleHelpsToTabsActiveClass(i);
}


