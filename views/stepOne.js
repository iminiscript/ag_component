class StepOne {

    startStepOne(element) { 
        
        const html = `<div class="c-stepTwo hide" data-url="?step-1">
        <div class="c-product">
          <p> Step 1</p>
          <img src="./public/pro_1.png" />
        </div>
        <div class="c-plan">
          <div class="c-planTile is_active ">
            <h3 class="c-planTile__title">Step 1</h3>
              <fieldset>
              <div>
                <input type="checkbox" id="single" name="interest" value="coding" />
                <label class="c-planTile__label" for="single">
                    <p class="c-planPrice">$179</p>
                    <p class="c-planPrice"><b>Step 1</b></p>
                    <hr class="c-planDivder" />
                    <p class="c-planDesc">30 servings of AG1 delivered monthly.</p>
                </label>
              </div>
              </fieldset>
          </div>
          <div class="c-planTile">
            <h3 class="c-planTile__title">Step 1</h3>
            <fieldset>
            <div>
              <input type="checkbox" id="monthly" name="interest" value="coding" />
              <label class="c-planTile__label" for="monthly">
                  <p class="c-planPrice">$129</p>
                  <p class="c-planPrice"><b>Step 1</b></p>
                  <hr class="c-planDivder" />
                  <p class="c-planDesc">30 servings of AG1 delivered monthly.</p>
              </label>
            </div>
            </fieldset>
          </div>
        </div>
        <div class="c-planDetails">
          <p><b>Free Welcome Bundle Includes:</b></p>
          <p>Premium canister, shaker, 5 travel packs,</p>
        </div>
        <div class="c-checkout js-start">
          <a  class="c-btn">Next</a>
        </div> 
      </div>`

      document.querySelector(element).insertAdjacentHTML('beforeend', html);
    }
}

export default new StepOne();