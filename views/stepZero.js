class StepZero {
    
    startingPoint(element) {
        const html = `
        <div class="c-header">
        <div class="c-back hide js-back">
        <svg class="c-backArrow" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>
        </div>
        <div class="c-logo">
        <svg class="c-logoSVG" viewBox="0 0 96 37.2" xmlns="http://www.w3.org/2000/svg"><g style="fill:currentcolor;"><path d="m26.7 25.1h-16.8l.5-1.1 7.9-18 7.9 18zm-8.4-24.6c-1.5 0-2.8.9-3.4 2.2l-14.9 34h4.8l3.2-7.4h20.5l3.3 7.4h4.8l-14.9-34c-.6-1.3-1.9-2.2-3.4-2.2z"></path><path d="m51.9 37.2c11.8 0 18.4-8.9 18.4-18.8 0-.7-.6-1.3-1.3-1.3h-17.7v4.2h14.4c-1 7.3-6.2 11.7-13.8 11.7-8.1 0-14.3-6.2-14.3-14.4 0-8.3 6-14.4 14.5-14.4 6 0 11 3.5 13.2 9.2h4.6c-2.5-8.1-9.6-13.4-17.8-13.4-10.7 0-19 8.1-19 18.6 0 10.3 8.3 18.6 18.8 18.6"></path></g><g fill="#2f7d39"><path d="m80 .3c-1 0-1.8.7-2.1 1.6-.3 1.3-1.5 4.3-6.1 4.3h-.4v4.3h.8c2.9 0 4.8-1 5.7-2.1v28.4h4.2v-34.3c0-1.2-1-2.2-2.1-2.2z"></path><path d="m84.5 5.7c0-3.1 2.6-5.7 5.7-5.7s5.8 2.6 5.8 5.7-2.6 5.6-5.7 5.6-5.8-2.5-5.8-5.6zm10 0c0-2.3-1.9-4.1-4.2-4.1s-4.3 1.8-4.3 4.1c0 2.2 1.9 4.1 4.2 4.1s4.3-1.8 4.3-4.1zm-6.6 1.6v-2.4h-.9v-.8h2.6v.8h-.8v2.4zm2 0v-3.2h.8l.9 1.1 1-1.1h.7v3.2h-.9v-1.7l-.9.9-.8-.9v1.7z"></path></g></svg>
        </div>
        <div class="c-title">
        <h1 class="c-titleMain">Build Your Bundle</h1>
        </div>
    </div>
    <div class="c-steps hide js-count">
        <ul class="c-stepsList">
            <li data-step="1" class="c-stepsItem">1</li>
            <li data-step="2" class="c-stepsItem">2</li>
            <li data-step="3" class="c-stepsItem">3</li>
        </ul>
        </div>
        <div class="c-stepOne c-stepOne--start" data-url="?step-0">
            <h1>Find the best AG1 for you.</h1>
            <a class="c-btn js-start" data-step="start">Try Now</a>
        </div>
        `
        document.querySelector(element).insertAdjacentHTML('afterbegin', html);
    }
}

export default new StepZero();