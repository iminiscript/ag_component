import './styles/index.scss'

import StepZero from './views/stepZero';
import StepOne from './views/stepOne';
import { startClick } from './startClick';


const init = function() {
   StepZero.startingPoint('#app');
   
   const startBtn = document.querySelectorAll('.js-start');
   const steps = document.querySelector('.js-count');
   const back = document.querySelector('.js-back');
   
   StepOne.startStepOne('#app');
   
    
    startClick(startBtn,  steps, back)
}

init();