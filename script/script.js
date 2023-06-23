const ulEl = document.querySelector('.products__cards');
const data = JSON.parse(dataList);

data.forEach(item => {
  const liEl = document.createElement('li');
  liEl.classList.add('product__card');
  liEl.id = `product-${item.id}`;
  ulEl.append(liEl);

  const articleEl = document.createElement('article');
  articleEl.classList.add('product__card-wrap');
  liEl.append(articleEl);

  const imageWrapEl = document.createElement('div');
  imageWrapEl.classList.add('product__card-image-wrap');
  articleEl.append(imageWrapEl);

  const imageEl = document.createElement('img');
  imageEl.classList.add('product__card-image');
  imageEl.src = item.url;
  imageEl.alt = 'Dress photo';
  imageEl.height = '420';
  imageWrapEl.append(imageEl);

  const textEl = document.createElement('div');
  textEl.classList.add('product__card-text');
  articleEl.append(textEl);

  const titleEl = document.createElement('h3');
  titleEl.classList.add('product__card-title');
  titleEl.textContent = item.title;
  textEl.append(titleEl);

  const descEl = document.createElement('p');
  descEl.classList.add('product__card-desc');
  descEl.textContent = item.text;
  textEl.append(descEl);

  const priceEl = document.createElement('p');
  priceEl.classList.add('product__card-price');
  priceEl.textContent = `$${item.price}`;
  textEl.append(priceEl);

  const buttonEl = document.createElement('button');
  buttonEl.classList.add('product__card-btn');
  buttonEl.type = 'button';

  const svgEl = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const path1El = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const path2El = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const path3El = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  svgEl.setAttribute('width', '27');
  svgEl.setAttribute('height', '27');
  svgEl.setAttribute('viewbox', '0 0 27 25');

  path1El.setAttribute('d', 'M21.9521 23.2662H21.8397C21.2306 23.2662 20.7188 22.7666 20.6746 22.1289C20.6302 21.4602 21.1187 20.8781 21.7637 20.8341C21.7891 20.8324 21.8156 20.8315 21.8417 20.8315C22.4587 20.8315 22.9755 21.3214 23.0213 21.9482C23.0331 22.1967 22.9926 22.5509 22.7371 22.8434L22.7312 22.8502L22.7254 22.8571C22.5287 23.0907 22.2619 23.2316 21.9521 23.2662ZM8.22003 23.2599C7.56946 23.2599 7.04022 22.7169 7.04022 22.0496C7.04022 21.3827 7.56946 20.8401 8.22003 20.8401C8.87061 20.8401 9.39984 21.3827 9.39984 22.0496C9.39984 22.7169 8.87061 23.2599 8.22003 23.2599Z');

  path2El.setAttribute('d', 'M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z');

  path3El.setAttribute('d', 'M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z');

  svgEl.append(path1El);
  svgEl.append(path2El);
  svgEl.append(path3El);

  buttonEl.append(svgEl);

  const spanEl = document.createElement('span');
  spanEl.textContent = 'Add To Cart';
  buttonEl.append(spanEl);

  articleEl.append(buttonEl);
});

const cardMap = new Map();
const addButtonArray = document.querySelectorAll('.product__card-btn');
const cartEl = document.querySelector('.cart');
const cartContainerEl = cartEl.querySelector('.cart-wrp');

const getIdFromCard = (id) => {
  return id.slice(id.indexOf('-') + 1);
}

const searchObjectByIdInData = (id) => {
  const res = data.filter(item => item.id === Number(id));
  console.log(res);
  return res;
}

const updateQuantityInCard = (id, quantity) => {
  const updatedCardEl = document.querySelector(`#card-${id}`);
  const quantityEl = updatedCardEl.querySelector('.quantity-value');
  quantityEl.value = quantity;
}

const addCardToCartByObj = (item, quantity) => {
  const cardEl = document.createElement('article');
  cardEl.classList.add('card');
  cardEl.id = `card-${item.id}`;
  cartContainerEl.append(cardEl);

  const cardLinkEl = document.createElement('a');
  cardLinkEl.href = '#';
  cardLinkEl.classList.add('card-link');
  cardEl.append(cardLinkEl);

  const cardImgEl = document.createElement('img');
  cardImgEl.classList.add('card-img');
  cardImgEl.src = item.url;
  cardImgEl.alt = 'Man photo';
  cardImgEl.height = '306';
  cardLinkEl.append(cardImgEl);

  const cardTextEl = document.createElement('div');
  cardTextEl.classList.add('card-text');
  cardEl.append(cardTextEl);

  const cardTitleEl = document.createElement('h2');
  cardTitleEl.classList.add('card-title');
  cardTitleEl.textContent = item.title;
  cardTextEl.append(cardTitleEl);

  const cardPriceEl = document.createElement('p');
  cardPriceEl.classList.add('card-price');
  cardPriceEl.textContent = 'Price: ';
  cardTextEl.append(cardPriceEl);

  const priceValueEl = document.createElement('span');
  priceValueEl.classList.add('price-value');
  priceValueEl.textContent = `$${item.price}`;
  cardPriceEl.append(priceValueEl);

  const cardColorEl = document.createElement('p');
  cardColorEl.classList.add('card-color');
  cardColorEl.textContent = 'Color: ';
  cardTextEl.append(cardColorEl);

  const colorValueEl = document.createElement('span');
  colorValueEl.classList.add('color-value');
  colorValueEl.textContent = item.color;
  cardColorEl.append(colorValueEl);

  const cardSizeEl = document.createElement('p');
  cardSizeEl.classList.add('card-size');
  cardSizeEl.textContent = 'Size: ';
  cardTextEl.append(cardSizeEl);

  const sizeValueEl = document.createElement('span');
  sizeValueEl.classList.add('size-value');
  sizeValueEl.textContent = item.size;
  cardSizeEl.append(sizeValueEl);

  const cardQuantityEl = document.createElement('label');
  cardQuantityEl.classList.add('card-quantity');
  cardQuantityEl.textContent = 'Quantity: ';
  cardTextEl.append(cardQuantityEl);

  const quantityValueEl = document.createElement('input');
  quantityValueEl.classList.add('quantity-value');
  quantityValueEl.value = quantity;
  quantityValueEl.type = 'number';
  cardQuantityEl.append(quantityValueEl);

  quantityValueEl.addEventListener('change', e => {
    console.log(typeof quantityValueEl.value);
    cardMap.set(`${item.id}`, Number(quantityValueEl.value));
  });

  const crossImgEl = document.createElement('img');
  crossImgEl.classList.add('cross-img');
  crossImgEl.src = 'img/cross.svg';
  crossImgEl.alt = 'Cross on close photo';
  crossImgEl.height = '18';
  cardTextEl.append(crossImgEl);

  crossImgEl.addEventListener('click', e => {
    let element = e.target;
    do
      element = element.parentElement;
    while (element.className !== 'card');
    element.remove();

    const allCardsEl = document.querySelectorAll('.card');
    if (allCardsEl.length === 0) {
      const cartEl = document.querySelector('.cart');
      cartEl.setAttribute('style', 'display: none;');
    }
  })
}

addButtonArray.forEach(item => {
  item.addEventListener('click', e => {
    let element = e.target;
    do
      element = element.parentElement;
    while (element.className !== 'product__card');

    const cardId = getIdFromCard(element.id);

    if (cartEl.getAttribute('style') !== null) {
      cartEl.removeAttribute('style');
    }

    if (cardMap.has(cardId) && document.querySelector(`#card-${cardId}`) !== null) {
      const newQuantity = cardMap.get(cardId) + 1;
      cardMap.set(cardId, newQuantity);
      updateQuantityInCard(cardId, newQuantity);
    } else {
      if (!cardMap.has(cardId)) {
        cardMap.set(cardId, 1);
      }
      const dataObj = searchObjectByIdInData(cardId);
      addCardToCartByObj(...dataObj, cardMap.get(cardId));
    }
  })
});


