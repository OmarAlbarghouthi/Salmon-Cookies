' use strict';

let location = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('container');
let tableEl = document.createElement('Table');
container.appendChild(tableEl);


function Location(shopName, minCustomers, maxCustomers, avgCookies) {

  this.name = shopName;
  this.minNumberOfCust = minCustomers;
  this.maxNumberOfCust = maxCustomers;
  this.averageOfSoldCookies = avgCookies;
  this.total = 0;
  this.randomCustomer = [];
  this.avgCookiesPerH = [];
  location.push(this);


}

Location.prototype.calcRandomCustPerHour = function (min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

}

Location.prototype.calcAvgCookiesPerH = function () {
  
  for (let i = 0; i < hours.length; i++) {
    this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
    this.total = this.total + this.avgCookiesPerH[i];

  }

  Location.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    tableEl.appendChild(tdEl1);

    tdEl1.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {

      let tdEl2 = document.createElement('td');
      tableEl.appendChild(tdEl2);
      tdEl2.textContent = this.avgCookiesPerH[i];

    }

    let tdEl5 = document.createElement('td');

    tableEl.appendChild(tdEl5);

    tdEl5.textContent = this.total;


  }


  function TableHeader() {


    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);


    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);

    thEl1.textContent = '';

    for (let x = 0; x < hours.length + 1; x++) {
      let thEl1 = document.createElement('th');
      trEl.appendChild(thEl1);
      thEl1.textContent = hours[x];


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



    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);

    thEl2.textContent = 'Daily location total';

  }


  TableHeader();



  function TableFooter() {
    let dailyTotal = 0;
    let total = 0;

    let trEl = document.createElement('tr');
    let thEl3 = document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent = "total";
    tableEl.appendChild(trEl);



    for (let i = 0; i < hours.length; i++) {
      dailyTotal = 0;

      for (let j = 0; j < location.length; j++) {
        total += location[j].avgCookiesPerH[i];
        dailyTotal += location[j].avgCookiesPerH[i];


      }
      let thEl10 = document.createElement('th');
      trEl.appendChild(thEl10);
      thEl10.textContent = dailyTotal;
    }

    let thEl70 = document.createElement('th');
    trEl.appendChild(thEl70);
    thEl70.textContent = total;

  }


  let Seattle = new Location('Seattle', 23, 65, 6.3);
  Seattle.calcRandomCustPerHour(3, 65);
  Seattle.calcAvgCookiesPerH();
  Seattle.render();

  let Tokyo = new Location('Tokyo', 3, 24, 1.2);
  Tokyo.calcRandomCustPerHour(3, 24);
  Tokyo.calcAvgCookiesPerH();
  Tokyo.render();

  let Dubai = new Location('Dubai', 11, 38, 3.7);
  Dubai.calcRandomCustPerHour(11, 38);
  Dubai.calcAvgCookiesPerH();
  Dubai.render();

  let Paris = new Location('Paris', 20, 38, 2.3);
  Paris.calcRandomCustPerHour(20, 38);
  Paris.calcAvgCookiesPerH();
  Paris.render();

  let Lima = new Location('Lima', 2, 16, 4.6);
  Lima.calcRandomCustPerHour(2, 16);
  Lima.calcAvgCookiesPerH();
  Lima.render();

  TableFooter();
  console.log(location);








// let seattle = {
//   shopName: 'seatle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   randomCustomer: [],
//   avgCookiesPerH: [],
//   total: 0,


//   calcRandomCustPerHour: function (min, max) {



//     for (let i = 0; i < hours.length; i++) {


//       min = Math.ceil(this.minCustomers);
//       max = Math.floor(this.maxCustomers);
//       let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(randomCust);
//     }

//   },

//   calcAvgCookiesPerH: function () {

//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
//       this.total = this.total + this.avgCookiesPerH[i];


//     }


//   },
//   render: function () {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.shopName;
//     container.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// };


// seattle.calcRandomCustPerHour();
// seattle.calcAvgCookiesPerH();
// seattle.render();




// let tokyo = {
//   shopName: 'tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 1.2,
//   randomCustomer: [],
//   avgCookiesPerH: [],
//   total: 0,


//   calcRandomCustPerHour: function (min, max) {



//     for (let i = 0; i < hours.length; i++) {


//       min = Math.ceil(this.minCustomers);
//       max = Math.floor(this.maxCustomers);
//       let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(randomCust);
//     }

//   },

//   calcAvgCookiesPerH: function () {

//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
//       this.total = this.total + this.avgCookiesPerH[i];


//     }


//   },
//   render: function () {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.shopName;
//     container.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// };

// tokyo.calcRandomCustPerHour();
// tokyo.calcAvgCookiesPerH();
// tokyo.render();



// let dubai = {
//   shopName: 'dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   randomCustomer: [],
//   avgCookiesPerH: [],
//   total: 0,


//   calcRandomCustPerHour: function (min, max) {



//     for (let i = 0; i < hours.length; i++) {


//       min = Math.ceil(this.minCustomers);
//       max = Math.floor(this.maxCustomers);
//       let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(randomCust);
//     }

//   },

//   calcAvgCookiesPerH: function () {

//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
//       this.total = this.total + this.avgCookiesPerH[i];


//     }


//   },
//   render: function () {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.shopName;
//     container.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// };


// dubai.calcRandomCustPerHour();
// dubai.calcAvgCookiesPerH();
// dubai.render();



// let paris = {
//   shopName: 'paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookies: 2.3,
//   randomCustomer: [],
//   avgCookiesPerH: [],
//   total: 0,


//   calcRandomCustPerHour: function (min, max) {



//     for (let i = 0; i < hours.length; i++) {


//       min = Math.ceil(this.minCustomers);
//       max = Math.floor(this.maxCustomers);
//       let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(randomCust);
//     }

//   },

//   calcAvgCookiesPerH: function () {

//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
//       this.total = this.total + this.avgCookiesPerH[i];


//     }


//   },
//   render: function () {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.shopName;
//     container.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// };


// paris.calcRandomCustPerHour();
// paris.calcAvgCookiesPerH();
// paris.render();



// let lima = {
//   shopName: 'lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   randomCustomer: [],
//   avgCookiesPerH: [],
//   total: 0,


//   calcRandomCustPerHour: function (min, max) {



//     for (let i = 0; i < hours.length; i++) {


//       min = Math.ceil(this.minCustomers);
//       max = Math.floor(this.maxCustomers);
//       let randomCust = Math.floor(Math.random() * (max - min + 1) + min);
//       this.randomCustomer.push(randomCust);
//     }

//   },

//   calcAvgCookiesPerH: function () {

//     for (let i = 0; i < hours.length; i++) {
//       this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.avgCookies));
//       this.total = this.total + this.avgCookiesPerH[i];


//     }


//   },
//   render: function () {
//     let h2El = document.createElement('h2');
//     h2El.textContent = this.shopName;
//     container.appendChild(h2El);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]}  ${this.avgCookiesPerH[i]} `;

//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// };


// lima.calcRandomCustPerHour();
// lima.calcAvgCookiesPerH();
// lima.render();
      
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

