export function countUpdate() {
    const stepCount = document.querySelectorAll('.js-count li');
    const currentStep = window.location.search;
    //console.log(currentStep);
    
    const stepNum = currentStep.substring(6);
    //console.log(stepNum)
    stepCount.forEach( step => {
      const curreActive = step.dataset.step;
      //console.log(step)
      console.log(step.dataset.step) 
      if (curreActive === stepNum ) {
        step.classList.add('is-active');
        step.nextElementSibling.classList.remove('is-active');
      } 
    })
  };