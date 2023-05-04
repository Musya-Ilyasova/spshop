const calculateProducts = (calcState) => {
  let products = document.querySelectorAll('.product');

  function inc (sumProduct, countProduct, i) {
    calcState[i].count++;
    changeProductField(sumProduct, countProduct, i);
  };

  function dec (sumProduct, countProduct, i) {
    if(calcState[i].count > 0) {
      calcState[i].count--;
    }
    changeProductField(sumProduct, countProduct, i);
  }

  function del(sumProduct, countProduct, i) {
    products[i].parentNode.remove();
    calcState[i].count = 0;
    changeProductField(sumProduct, countProduct, i);
  }

  function changeProductField(sumProduct, countProduct, i) {
    let sum = calcState[i].count * calcState[i].price;
    countProduct.textContent = calcState[i].count;
    sumProduct.textContent = `$ ${sum}`;
    calculateTotal(calcState);
  }

  products.forEach((item, i) => {
    let incBtn = item.querySelector('.product__btn_inc'),
        decBtn = item.querySelector('.product__btn_dec'),
        delBtn = item.querySelector('.product__close'),
        sumProduct = item.querySelector('.product__sum'),
        countProduct = item.querySelector('.product__count');
    calcState[i] = {
      price: Number(sumProduct.textContent.replace(/[^\d]/g, '').trim()),
      count: Number(countProduct.textContent)
    }

    incBtn.addEventListener('click', () => inc(sumProduct, countProduct, i));
    decBtn.addEventListener('click', () => dec(sumProduct, countProduct, i ));
    delBtn.addEventListener('click', () => del(sumProduct, countProduct, i));
  });
}

function calculateTotal(state) {
  let subTotal = document.querySelector("#subtotal"),
      total = document.querySelector("#total"),
      subTotalCount = 0,
      totalCount = 0;
  for(let i=0; i<=state.length-1; i++) {
    if(state[i].count>0) {
      subTotalCount += (state[i].count * state[i].price);
      totalCount += (state[i].count * state[i].price) + 100 + 150;
    }
  }
  subTotal.textContent = formatNumber(subTotalCount);
  total.textContent = formatNumber(totalCount)
}

function formatNumber(num) {
  let numStr = String(num);
  if(num > 1000) {
    let [_, n, suffix] = numStr.match(/^(.*?)((?:[,.]\d+)?|)$/);
      return `$${n.replace(/\B(?=(?:\d{3})*$)/g, ' ')}${suffix}`;
  } else {
      return `$${numStr}`
  }
}


export default calculateProducts;
