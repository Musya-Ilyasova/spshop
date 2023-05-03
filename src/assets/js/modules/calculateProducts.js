const calculateProducts = (state) => {
  let incBtn = document.querySelectorAll('.product__btn_inc');
  let decBtn = document.querySelectorAll('.product__btn_dec');
  let sum = document.querySelector('.product__sum');
  let count = document.querySelector('.product__count');

  const response = async () => await fetch('./basketProducts.json');
  response.then(data => console.log(data));
  // console.log(count);
  // state.count = Number(count.textContent.trim());
  // state.sum = Number((sum.textContent).replace('$', '').trim());


  // count.textContent = 'hh';
  // console.log(count.textContent);
  // sum.innerHTML = `$ ${state.sum}`;
  // const addCounts = () => {
  //   count.innerHTML = state.count;
  //   sum.innerHTML = `$ ${state.sum}`;
  // }

  // const inc = () => {
  //   state.count++;
  //   state.sum = state.sum * state.count;
  //   addCounts()
  // };

  // const dec = () => {
  //   if(state.count > 1) {
  //     state.count--;
  //     state.sum = state.sum * state.count;
  //     addCounts()
  //   }
  // }

  // incBtn.forEach(btn => btn.addEventListener('click', inc())).addEventListener('click', inc());
  // decBtn.addEventListener('click', dec());
}

export default calculateProducts;
