import './styles/index.scss'

import StepZero from './views/stepZero';
import StepOne from './views/stepOne';
import StepTwo from './views/stepTwo';
import { startClick } from './startClick';


const init = function() {
   StepZero.startingPoint('#app');
   StepOne.startStepOne('#app');
   StepTwo.startStepTwo('#app');

   const startBtn = document.querySelectorAll('.js-start');
   const steps = document.querySelector('.js-count');
   const back = document.querySelector('.js-back');
   
   startClick(startBtn,  steps, back)
}

init();