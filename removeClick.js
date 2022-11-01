export function removeClick() {
    const url = window.location.search;
    if (url === '?step-0') {
      back.classList.add('hide');
      steps.classList.add('hide');
    }
  }