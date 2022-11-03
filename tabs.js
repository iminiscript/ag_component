export function tabs(element1,element2) {
    
  element1.forEach( tab => {
        tab.addEventListener("click", function() {
          const target = document.querySelector(tab.dataset.value);
          const type = tab.dataset.type;
          //console.log(target)
          element2.forEach(tabInfo => {
              tabInfo.classList.remove('active');
              //console.log(tabInfo)
              sessionStorage.removeItem("type");
          })
          target.classList.add('active');
          sessionStorage.setItem("type", type);



        // const test = this.closest('#step_1');
        //  if (this.closest('.c-product').classList.contains('hide') ) {
        //   this.closest('.c-product').classList
        //  }
        //   for (let i = 0; i < test.length; i++) {
        //     const elements = test[i];  
        //     //console.log(element.classList)
        //     if (elements.classList.contains('is_active')) {
        //       elements.classList.remove('is_active');
        //     } 
        //   }
      
        //   this.classList.add('is_active');
        
        })
      
    });
}