import modals from './modules/modals';
import sliders from './modules/sliders';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item', null, '.main-prev-btn', '.main-next-btn');
})