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
   StepOne.startStepOne('#step_1');
   StepTwo.startStepTwo('#step_2');

   const startBtn = document.querySelectorAll('.js-start');
   const steps = document.querySelector('.js-count');
   const back = document.querySelector('.js-back');
   const tab = document.querySelectorAll('[data-value]');
   const tabInfos = document.querySelectorAll('[data-info]')
   
   startClick(startBtn,  steps, back);
   tabs(tab, tabInfos)
   backClick(back, steps);

    async function test(evt) {
        try {
            const jsonData = await fetch('../product.json');

            const jsonRes = await jsonData.json();

            console.log(jsonRes)
        } catch (err) {
            console.log(err)
        }
   }
}

init();