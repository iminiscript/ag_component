export function backClick(element, remove, counter) {
    element.addEventListener("click", function() {
        const currentStep = window.location.search;
        //console.log(currentStep);
    
        const stepNum = Number(currentStep.substring(6));
        //console.log(stepNum);
    
        const prevStep = stepNum - 1;
    
        //console.log(prevStep);
        window.history.pushState("", "", `/?step-${prevStep}`);
    
        const updateState = window.location.search;
    
        //console.log(updateState)
    
        const elements = document.querySelectorAll('[data-url]');
    
        elements.forEach( val => {
            const dataURL = val.dataset.url;
            if (dataURL === updateState) {
            val.classList.remove('hide');
            } else {
            val.classList.add('hide');
            }
    
        });

        remove;
        counter;
    })
}