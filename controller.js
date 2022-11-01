import './styles/index.scss'

import StepZero from './views/stepZero';
import StepOne from './views/stepOne';
import StepTwo from './views/stepTwo';
import { startClick } from './startClick';
import { tabs } from './tabs';
import { backClick } from './back';
import json from './product.json'


const init = function() {
    console.log(json)
    if (window.location.search === '') {
        window.history.pushState("", "", `/?step-0`);
    }

   StepZero.startingPoint('#app');
   StepOne.startStepOne('#app');
   StepTwo.startStepTwo('#app');

   const startBtn = document.querySelectorAll('.js-start');
   const steps = document.querySelector('.js-count');
   const back = document.querySelector('.js-back');
   const tile = document.querySelectorAll('.c-planTile');
   
   startClick(startBtn,  steps, back);
   tabs(tile)
   backClick(back, steps);
}

init();