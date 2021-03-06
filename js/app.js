'use strict';

//----------------------------------global variables---------------------------------------//

const allShops = [];
const shopDivElem = document.getElementById("shops");
const formElem = document.getElementById("addAShopForm");
let tableElem = makeElement('table', shopDivElem, null);
let totalCookiesAll = 0;
let totalCookiesShops = 0;
let totalCookiesFinal = [];
let tbodyElem;
let tfootElem;

//----------------------------------global functions---------------------------------------//

function randomTotal(a, b){
  let total = Math.floor(Math.random() * (b - a + 1) + a);
  return total;
}

function addAShop(name, minimum, maximum, average, hours) {
  const shop = new Shop(name, minimum, maximum, average, hours);
  allShops.push(shop);
};

function getResults(store) {
  store.getCookies();
  store.getDailyTotal();
}

function handleSubmit(e) {
  e.preventDefault();
  let name = e.target.name.value;
  let minimum = parseInt(e.target.minimum.value);
  let maximum = parseInt(e.target.maximum.value);
  let average = parseInt(e.target.average.value);
  let hours;
  if (e.target.hoursYes.checked){
    hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
  }
  else {
  alert('The store should be open from 6:00 AM to 8:00PM.');
  hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
  }
  tableElem.innerHTML = '';
  addAShop(name, minimum, maximum, average, hours); 
  for(let i = 0; i < allShops.length; i++){
    getResults(allShops[i]);
  }
  renderTableHead();
  renderTableBody();
  getTotals();
  renderTableFoot();
}
function makeElement(tagName, parentName, textContent){
  let element = document.createElement(tagName);
  if(textContent){
    element.textContent = textContent;
  }
  parentName.appendChild(element);
  return element;
}

function renderTableHead(){
  let theadElem = makeElement('thead', tableElem, null);
  let trElem = makeElement('tr', theadElem, null);
  for(let i = 0; i < allShops[0].hours.length; i++){
    if(i === 0){
      let thElemBlank = makeElement('th', trElem, null);
      let thElem = makeElement('th', trElem, allShops[0].hours[i]);
    }
    else{
      let thElem = makeElement('th', trElem, allShops[0].hours[i]);
    }
  }
  makeElement('th', trElem, 'Totals');
}

function getTotals(){
  totalCookiesFinal = [];
  totalCookiesAll = 0;
  for (let i = 0; i < allShops[0].hourlyTotal.length; i++){
    let totalCookies = 0;
    for(let j = 0; j < allShops.length; j++){
      totalCookies = totalCookies + allShops[j].hourlyTotal[i];
      totalCookiesAll = totalCookiesAll + allShops[j].hourlyTotal[i];
    }
    totalCookiesFinal.push(totalCookies);
  }
  totalCookiesFinal.push(totalCookiesAll);
}

function renderTableBody(){
  let storeTotal = 0;
  tbodyElem = makeElement('tbody', tableElem, null);
  for(let i = 0; i < allShops.length; i++){
    totalCookiesShops = 0;
    let trElem2 = makeElement('tr', tbodyElem, null);
    let tdElem = makeElement('td', trElem2, allShops[i].name);
    for(let j = 0; j < allShops[i].hourlyTotal.length; j++){
      makeElement('td', trElem2, allShops[i].hourlyTotal[j]);
      totalCookiesShops += allShops[i].hourlyTotal[j];
    }
    const storeTotalTHElem = makeElement('th', trElem2, totalCookiesShops);
  }
}

function renderTableFoot(){
  tfootElem = makeElement('tfoot', tableElem, null);
  let trElem = makeElement('tr', tfootElem, 'Totals');
  for(let i = 0; i < allShops[0].hours.length; i++){
    let thElem = makeElement('th', trElem, totalCookiesFinal[i]);
  }
  makeElement('th', trElem, totalCookiesAll);
}

//----------------------------------Constructor---------------------------------------//

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

//----------------------------------Function Calling and Event Listener---------------------------------------//

addAShop('Seattle', 23, 65, 6.3, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
addAShop('Tokyo', 3, 24, 1.2, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
addAShop('Dubai', 11, 38, 3.7, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
addAShop('Paris', 20, 38, 2.3, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);
addAShop('Lima', 2, 16, 4.6, ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm']);

formElem.addEventListener('submit', handleSubmit);

for(let i = 0; i < allShops.length; i++){
  getResults(allShops[i]);
}

renderTableHead();
getTotals();
renderTableBody(); 
renderTableFoot();