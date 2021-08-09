' use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('container');

let seattle = {
  shopName: 'seatle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  randomCustomer: [],
  avgCookiesPerH: [],
  total: 0,


  calcRandomCustPerHour: function (min, max) {



    for (let i = 0; i < hours.length; i++) {


      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(randomCust);
    }

  },

  calcAvgCookiesPerH: function () {

    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
      this.total = this.total + this.avgCookiesPerH[i];


    }


  },
  render: function () {
    let h2El = document.createElement('h2');
    h2El.textContent = this.shopName;
    container.appendChild(h2El);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total ${this.total} cookies`;
  }
};


seattle.calcRandomCustPerHour();
seattle.calcAvgCookiesPerH();
seattle.render();




let tokyo = {
  shopName: 'tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  randomCustomer: [],
  avgCookiesPerH: [],
  total: 0,


  calcRandomCustPerHour: function (min, max) {



    for (let i = 0; i < hours.length; i++) {


      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(randomCust);
    }

  },

  calcAvgCookiesPerH: function () {

    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
      this.total = this.total + this.avgCookiesPerH[i];


    }


  },
  render: function () {
    let h2El = document.createElement('h2');
    h2El.textContent = this.shopName;
    container.appendChild(h2El);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total ${this.total} cookies`;
  }
};

tokyo.calcRandomCustPerHour();
tokyo.calcAvgCookiesPerH();
tokyo.render();



let dubai = {
  shopName: 'dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  randomCustomer: [],
  avgCookiesPerH: [],
  total: 0,


  calcRandomCustPerHour: function (min, max) {



    for (let i = 0; i < hours.length; i++) {


      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(randomCust);
    }

  },

  calcAvgCookiesPerH: function () {

    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
      this.total = this.total + this.avgCookiesPerH[i];


    }


  },
  render: function () {
    let h2El = document.createElement('h2');
    h2El.textContent = this.shopName;
    container.appendChild(h2El);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total ${this.total} cookies`;
  }
};


dubai.calcRandomCustPerHour();
dubai.calcAvgCookiesPerH();
dubai.render();



let paris = {
  shopName: 'paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  randomCustomer: [],
  avgCookiesPerH: [],
  total: 0,


  calcRandomCustPerHour: function (min, max) {



    for (let i = 0; i < hours.length; i++) {


      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(randomCust);
    }

  },

  calcAvgCookiesPerH: function () {

    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
      this.total = this.total + this.avgCookiesPerH[i];


    }


  },
  render: function () {
    let h2El = document.createElement('h2');
    h2El.textContent = this.shopName;
    container.appendChild(h2El);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total ${this.total} cookies`;
  }
};


paris.calcRandomCustPerHour();
paris.calcAvgCookiesPerH();
paris.render();



let lima = {
  shopName: 'lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  randomCustomer: [],
  avgCookiesPerH: [],
  total: 0,


  calcRandomCustPerHour: function (min, max) {



    for (let i = 0; i < hours.length; i++) {


      min = Math.ceil(this.minCustomers);
      max = Math.floor(this.maxCustomers);
      let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.randomCustomer.push(randomCust);
    }

  },

  calcAvgCookiesPerH: function () {

    for (let i = 0; i < hours.length; i++) {
      this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
      this.total = this.total + this.avgCookiesPerH[i];


    }


  },
  render: function () {
    let h2El = document.createElement('h2');
    h2El.textContent = this.shopName;
    container.appendChild(h2El);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total ${this.total} cookies`;
  }
};


lima.calcRandomCustPerHour();
lima.calcAvgCookiesPerH();
lima.render();
