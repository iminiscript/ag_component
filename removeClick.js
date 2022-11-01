export function removeClick(back, step) {
    const url = window.location.search;
    if (url === '?step-0') {
      back.classList.add('hide');
      step.classList.add('hide');
    }
  }