const addToCartButtons = document.querySelectorAll('.btn.add-to-cart');
  const clearCartButton = document.querySelector('.clear-cart');
  const cartItemsList = document.querySelector('.cart-items');
  const confirmCartButton = document.querySelector('.confirm-cart');
  const cartButton = document.getElementById("cart-button");
  const cart = document.querySelector('.cart');

  // Проверяем, есть ли сохраненные данные корзины в localStorage
  const savedCartItems = localStorage.getItem('myStoreCart');
  if (savedCartItems) {
    cartItemsList.innerHTML = savedCartItems;
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });

  clearCartButton.addEventListener('click', clearCart);

  confirmCartButton.addEventListener('click', redirectToCheckout);

  cartButton.addEventListener("click", function() {
    cart.classList.toggle('show');
  });

  function addToCart(event) {
    const product = event.target.closest('.product');

    const productImgSrc = product.querySelector('img').src;
    const productTitle = product.querySelector('h3 a').textContent;
    const productPrice = product.querySelector('.price').textContent;

    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="${productImgSrc}" alt="Фото">
      <h4>${productTitle}</h4>
      <span>${productPrice}</span>
    `;

    cartItemsList.appendChild(cartItem);

    // сохраняем корзину в localStorage
    const cartItems = cartItemsList.innerHTML;
    localStorage.setItem('myStoreCart', cartItems);
  }

  function clearCart() {
    // очищаем список корзины
    cartItemsList.innerHTML = '';

    // удаляем сохраненные данные корзины из localStorage
    localStorage.removeItem('myStoreCart');
  }

  function redirectToCheckout() {
    // Получаем список товаров в корзине
    const cartItems = cartItemsList.innerHTML;

    // Создаем форму для отправки списка товаров на другой сайт
    const form = document.createElement('form');
    form.setAttribute('method', 'get');
    form.setAttribute('action', 'cart.html');

    // Создаем скрытое поле формы для отправки списка товаров
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', 'cartItems');
    input.setAttribute('value', cartItems);
    form.appendChild(input);

    // Добавляем форму на страницу и отправляем данные на другой сайт
    document.body.appendChild(form);
    form.submit();
  }