// Reusable function

function setElement(containerId, title) {
    const p = document.createElement('p'),
          container = document.getElementById(containerId),
          count = document.getElementById('list-item').childElementCount;
    p.innerHTML = `${count}. ${title}`;
    p.className = 'mb-2';
    container.appendChild(p);
}


// reusable function ends
let initialTotalPrice = 0;
function addCardToLog(target) {
    const title = target.childNodes[1].childNodes[5].childNodes[1].innerText,
          value = parseFloat(target.childNodes[1].childNodes[5].childNodes[3].innerText.split(' ')[0]),
          purchaseBtn = document.getElementById('purchase-btn'),
          totalPrice = document.getElementById('total-price'),
          applyBtn = document.getElementById('apply-btn');
          
          
      initialTotalPrice = initialTotalPrice + value;
      totalPrice.innerHTML = `${initialTotalPrice.toFixed(2)} TK`;
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
      if(couponInput !== 'SELL200' || couponInput === '') {
            return alert('Invalid coupon')
      }
      const discountElement = document.getElementById('discount-price'),
            totalPrice = parseFloat(document.getElementById('total-price').innerText),
            // 20% discount on total price
            discountPrice = (totalPrice / 100) * 20;
            discountElement.innerHTML = `${discountPrice.toFixed(2)} TK`
}