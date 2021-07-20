'use strict';


function Shop(name, minimum, maximum, average, hours){
  this.name = name;
  this.minimum = minimum;
  this.maximum = maximum;
  this.average = average;
  this.hours = hours;
  this.hourlyTotal = [];
  this.dailyTotal = 0;

}

Shop.prototype.getCookies = function() {
  for(let i=0; i < this.hours.length; i++){
    let randCookies = Math.floor(randomTotal(this.minimum, this.maximum) * this.average);
    this.hourlyTotal[i] = randCookies;
  }
}

Shop.prototype.getDailyTotal = function(){
  for(let i=0; i < this.hourlyTotal.length; i++){
    this.dailyTotal += this.hourlyTotal[i];
  }
}


function randomTotal(a, b){
  let total = Math.floor(Math.random() * (b - a + 1) + a);
  return total;
}

const allShops = [];

function addAShop(name, minimum, maximum, average, hours) {
  const shop = new Shop(name, minimum, maximum, average, hours);
  allShops.push(shop);
};

addAShop('Seattle', 23, 65, 6.3, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
addAShop('Tokyo', 3, 24, 1.2, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
addAShop('Dubai', 11, 38, 3.7, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
addAShop('Paris', 20, 38, 2.3, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
addAShop('Lima', 2, 16, 4.6, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
console.log(allShops[1]);

const shopDivElem = document.getElementById("shops");

for(let i = 0; i < allShops.length; i++){
  getResults(allShops[i]);
  renderShop(allShops[i]);
}
function makeElement(tagName, parentName, textContent){
  let element = document.createElement(tagName);
  if(textContent){
    element.textContent = textContent;
  }
  parentName.appendChild(element);
  return element;
}

function renderShop(shop) {
  let articleElem = makeElement('article', shopDivElem, null);
  let h2Elem = makeElement('h2', articleElem, shop.name);
  let tableElem = makeElement('table', articleElem, null);
  let theadElem = makeElement('thead', tableElem, null);
  let trElem = makeElement('tr', theadElem, null);
  for(let i = 0; i < shop.hours.length; i++){
    if(i === 0){
      let thElemBlank = makeElement('th', trElem, null);
      let thElem = makeElement('th', trElem, shop.hours[i]);
    }
    let thElem = makeElement('th', trElem, shop.hours[i]);
  }
  let tbody = makeElement('tbody', tableElem, null);
  for(let i = 0; i < allShops.length; i++){
    let trElem2 = makeElement('tr', tbody, allShops[i].name);
  }




  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);
  for(let i = 0; i < shop.hourlyTotal.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = `${shop.hours[i]}: ${shop.hourlyTotal[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${shop.dailyTotal}`;
  ulElem.appendChild(liElem);
}

function getResults(store) {
  store.getCookies();
  store.getDailyTotal();
}











