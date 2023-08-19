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
let initialValue = 0;
function addCardToLog(target) {
    const title = target.childNodes[1].childNodes[5].childNodes[1].innerText,
          value = parseFloat(target.childNodes[1].childNodes[5].childNodes[3].innerText.split(' ')[0]),
          totalPrice = document.getElementById('total-price');
          
     initialValue = initialValue + value;
    totalPrice.innerText = initialValue;    
     setElement('list-item', title);
    
}

