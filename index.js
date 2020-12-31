// subTotal , total , tax;
var subTotal = document.getElementById('subTotal');
var total = document.getElementById('total');
var tax = document.getElementById('tax'); 

// product price decrease
function decrease(price, inputId, priceId) {
  var parseItem1 = parseInt(inputId.value);
  parseItem1--;
  inputId.value = parseItem1;
  priceId.innerText = price * parseInt(inputId.value);
  subTotal.innerText = parseInt(priceItem1.innerText) + parseInt(priceItem2.innerText);
  tax.innerText = parseInt(subTotal.innerText/ 100);
  total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);

};

// product price increase

function increase(price, inputId, priceId) {
  var parseItem2 = parseInt(inputId.value);
  parseItem2++;
  inputId.value = parseItem2;
  priceId.innerText = price * parseInt(inputId.value);
  subTotal.innerText = parseInt(priceItem1.innerText) + parseInt(priceItem2.innerText);
  tax.innerText = parseInt(subTotal.innerText/ 100);
  total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
}

// product 1 price and amount calculate

var decreaseItem1 = document.getElementById('decrease1');
var increaseItem1 = document.getElementById('increase1');
var inputItem1 = document.getElementById('increaseItem1');
var priceItem1 = document.getElementById('productPrice1');

decreaseItem1.addEventListener('click', function() {
  if(inputItem1.value < 1){
    alert('please increase item number');
  }
  else{
    decrease(1219, inputItem1, priceItem1)
  }
  
});

increaseItem1.addEventListener('click', function() {
  increase(1219, inputItem1, priceItem1);
});

// product 2 price and amount calculate

var decreaseItem2 = document.getElementById('decrease2');
var increaseItem2 = document.getElementById('increase2');
var inputItem2 = document.getElementById('increaseItem2');
var priceItem2 = document.getElementById('productPrice2');

decreaseItem2.addEventListener('click', function() {
  if(inputItem2.value < 1) {
    alert('please increase item number');
  }
  else{
    decrease(59, inputItem2, priceItem2);
  }
});

increaseItem2.addEventListener('click', function() {
  increase(59, inputItem2, priceItem2);
});

// cancel items...



function removeItem(productNumber, productPrice) {
  productNumber.value = 0;
  productPrice.innerText = 0;
  subTotal.innerText = parseInt(item1Price.innerText) + parseInt(item2price.innerText);
  tax.innerText = parseInt(subTotal.innerText/ 100);
  total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
};

// remove item one
const productItem1 = document.getElementById('increaseItem1');
const item1Price = document.getElementById('productPrice1');

const removeItem1 = document.getElementById('removeItem1');

removeItem1.addEventListener('click', function() {
  removeItem(productItem1, item1Price);
});

// remove item throw

const productItem2 = document.getElementById('increaseItem2');
const item2price = document.getElementById('productPrice2');

const removeItem2 = document.getElementById('removeItem2');

removeItem2.addEventListener('click', function() {
  removeItem(productItem2, item2price);
});




