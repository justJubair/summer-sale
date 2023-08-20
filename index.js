// Reusable function

function setElement(containerId, title) {
    const p = document.createElement('p'),
          container = document.getElementById(containerId),
          count = document.getElementById('list-item').childElementCount;
    p.innerHTML = `${count + 1}. ${title}`;
    p.className = 'mb-2';
    container.appendChild(p);
}


// reusable function ends

// add items to the log
let initialTotalPrice = 0;
function addCardToLog(target) {
    const title = target.childNodes[1].childNodes[5].childNodes[1].innerText,
          value = parseFloat(target.childNodes[1].childNodes[5].childNodes[3].innerText.split(' ')[0]),
          purchaseBtn = document.getElementById('purchase-btn'),
          totalPrice = document.getElementById('total-price'),
          applyBtn = document.getElementById('apply-btn');
          
          
      initialTotalPrice = initialTotalPrice + value;
      totalPrice.innerHTML = `${initialTotalPrice.toFixed(2)} TK`;
      console.log(initialTotalPrice);
      setElement('list-item', title);
      if(parseFloat(totalPrice.innerText) > 0) {
            purchaseBtn.removeAttribute('disabled');
           
      }
      if(parseFloat(totalPrice.innerText) >= 200) {
            applyBtn.removeAttribute('disabled');
      }
}

// apply coupon function
function applyCoupon() {
      const couponInput = document.getElementById('coupon-input').value;
      const couponInputElement = document.getElementById('coupon-input');
      if(couponInput !== 'SELL200' || couponInput === '') {
            alert('Invalid coupon');
            couponInputElement.value = '';
            return;
      }
      const discountElement = document.getElementById('discount-price'),
            totalPrice = parseFloat(document.getElementById('total-price').innerText),
            priceAfterDiscountElement = document.getElementById('total'),
            // 20% discount on price
            discountPrice = (totalPrice / 100) * 20;
            discountElement.innerHTML = `${discountPrice.toFixed(2)} TK`;
            // set updated price after discount
      const updatedPrice = totalPrice - discountPrice;
      priceAfterDiscountElement.innerHTML = `${updatedPrice} TK`;
      couponInputElement.value = '';
}

// reset everything to home
function resetEverything() {
      const listItems = document.getElementById('list-item'),
            totalPrice = document.getElementById('total-price'),
            discountPrice = document.getElementById('discount-price'),
            priceAfterDiscount = document.getElementById('total'),
            couponInput = document.getElementById('coupon-input');
      listItems.innerHTML = '';
      totalPrice.innerText = '00 TK';
      discountPrice.innerText = '00 TK';
      priceAfterDiscount.innerText = '00 TK';
      couponInput.value = '';
      initialTotalPrice = 0;
}