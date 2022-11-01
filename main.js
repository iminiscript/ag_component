import './styles/index.scss'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { countUpdate } from './count.js'
import { removeClick } from './removeClick.js'
import { backClick } from './back.js';

import { startClick } from './startClick'

import { tabs } from './tabs'
// import './scripts/tabs.js'

// document.querySelector('#app').innerHTML = `
    
// `

// setupCounter(document.querySelector('#counter'))

// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(++counter))
//   setCounter(0)
// }

const startBtn = document.querySelectorAll('.js-start');
const steps = document.querySelector('.js-count');
const back = document.querySelector('.js-back');
const tile = document.querySelectorAll('.c-planTile');
// const stepCount = document.querySelectorAll('.js-count li');

backClick(back, removeClick(), countUpdate());
startClick(startBtn,  steps, back, countUpdate());
tabs(tile);


 