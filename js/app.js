'use strict';

const seattle = {
  Name: 'Seattle',
  Minimum: 23,
  Maximum: 65,
  Average: 6.3,
  hours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  hourlyTotal: [],
  dailyTotal: 0,
  getCookies: function() {
    for(let i=0; i < this.hours.length; i++){
      let randNum = Math.floor(randomTotal(this.Minimum, this.Maximum) * this.Average);
      console.log(typeof(randNum));
      this.hourlyTotal[i] = randNum;
    }
  },
  getDailyTotal: function() {
    for(let i=0; i<this.hourlyTotal.length; i++){
      this.dailyTotal += this.hourlyTotal[i];
      console.log (this.dailyTotal);
    }
  }
};

const tokyo = {
  Name: 'Tokyo',
  Minimum: 3,
  Maximum: 24,
  Average: 1.2,
  hours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  hourlyTotal: [],
  dailyTotal: 0,
  getCookies: function() {
    for(let i=0; i < this.hours.length; i++){
      let randNum = Math.floor(randomTotal(this.Minimum, this.Maximum) * this.Average);
      console.log(typeof(randNum));
      this.hourlyTotal[i] = randNum;
    }
  },
  getDailyTotal: function() {
    for(let i=0; i<this.hourlyTotal.length; i++){
      this.dailyTotal += this.hourlyTotal[i];
      console.log (this.dailyTotal);
    }
  }
};

const dubai = {
  Name: 'Dubai',
  Minimum: 11,
  Maximum: 38,
  Average: 3.7,
  hours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  hourlyTotal: [],
  dailyTotal: 0,
  getCookies: function() {
    for(let i=0; i < this.hours.length; i++){
      let randNum = Math.floor(randomTotal(this.Minimum, this.Maximum) * this.Average);
      console.log(typeof(randNum));
      this.hourlyTotal[i] = randNum;
    }
  },
  getDailyTotal: function() {
    for(let i=0; i<this.hourlyTotal.length; i++){
      this.dailyTotal += this.hourlyTotal[i];
      console.log (this.dailyTotal);
    }
  }
};

const paris = {
  Name: 'Paris',
  Minimum: 20,
  Maximum: 38,
  Average: 2.3,
  hours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  hourlyTotal: [],
  dailyTotal: 0,
  getCookies: function() {
    for(let i=0; i < this.hours.length; i++){
      let randNum = Math.floor(randomTotal(this.Minimum, this.Maximum) * this.Average);
      console.log(typeof(randNum));
      this.hourlyTotal[i] = randNum;
    }
  },
  getDailyTotal: function() {
    for(let i=0; i<this.hourlyTotal.length; i++){
      this.dailyTotal += this.hourlyTotal[i];
      console.log (this.dailyTotal);
    }
  }
};

const lima = {
  Name: 'Lima',
  Minimum: 2,
  Maximum: 16,
  Average: 4.6,
  hours: ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'],
  hourlyTotal: [],
  dailyTotal: 0,
  getCookies: function() {
    for(let i=0; i < this.hours.length; i++){
      let randNum = Math.floor(randomTotal(this.Minimum, this.Maximum) * this.Average);
      console.log(typeof(randNum));
      this.hourlyTotal[i] = randNum;
    }
  },
  getDailyTotal: function() {
    for(let i=0; i<this.hourlyTotal.length; i++){
      this.dailyTotal += this.hourlyTotal[i];
      console.log (this.dailyTotal);
    }
  }
};

function randomTotal(a, b){
  let total = Math.floor(Math.random() * (b - a + 1) + a);
  return total;
}

const cookieShops = [seattle, tokyo, dubai, paris, lima];
const shopDivElem = document.getElementById("shops");

for(let i = 0; i < cookieShops.length; i++){
  getResults(cookieShops[i]);
  renderShop(cookieShops[i]);
}

function renderShop(shop) {
  let articleElem = document.createElement('article');
  shopDivElem.appendChild(articleElem);
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = shop.Name;
  articleElem.appendChild(h2Elem);
  let pElem = document.createElement('p');
  pElem.textContent = 'Cookies Sold by the Hour:';
  articleElem.appendChild(pElem);
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