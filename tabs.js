export function tabs(element) {
    element.forEach( tab => {
        tab.addEventListener("click", function() {
          const test = this.parentElement.children;
         // console.log(test);
      
          for (let i = 0; i < test.length; i++) {
            const elements = test[i];  
            //console.log(element.classList)
            if (elements.classList.contains('is_active')) {
              elements.classList.remove('is_active');
            } 
          }
      
          this.classList.add('is_active');
        
        })
      
    });
}