' use strict';

let locations = [];
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
  locations.push(this);


}

Location.prototype.calcRandomCustPerHour = function (min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);

};

Location.prototype.calcAvgCookiesPerH = function () {
  for (let i = 0; i < hours.length; i++) {
    this.randomCustomer.push(this.calcRandomCustPerHour(this.minNumberOfCust, this.maxNumberOfCust));
    this.avgCookiesPerH.push(Math.floor(this.randomCustomer[i] * this.averageOfSoldCookies));
    this.total = this.total + this.avgCookiesPerH[i];
  }
  console.log("Total ", this.total);
};





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
  let tdEl3 = document.createElement('td');
  tableEl.appendChild(tdEl3);
  tdEl3.textContent = this.total;

};

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

  }




  let thEl2 = document.createElement('th');
  trEl.appendChild(thEl2);

  thEl2.textContent = 'Daily location total';

  

  // let tdEl5 = document.createElement('td');
  // trEl.appendChild(tdEl5);
  // tdEl5.textContent = this.total;


}
TableHeader();





function TableFooter() {

  let total = 0;
  let trEl = document.createElement('tr');
  let thEl3 = document.createElement('th');

  trEl.appendChild(thEl3);
  thEl3.textContent = 'total';
  tableEl.appendChild(trEl);



  for (let i = 0; i < hours.length; i++) {
    let dailyTotal = 0;

    let tdEl10 = document.createElement('td');

    for (let j = 0; j < locations.length; j++) {
      total += locations[j].avgCookiesPerH[i];


    }

    trEl.appendChild(tdEl10);
    tdEl10.textContent = total;

  }



  let thEl70 = document.createElement('th');
  trEl.appendChild(thEl70);
  thEl70.textContent = total;

}

let form = document.getElementById('form');
form.addEventListener('submit', addShopName);

function addShopName(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let minNumberOfCust = event.target.minNumberOfCust.value;
  let maxNumberOfCust = event.target.maxNumberOfCust.value;
  let averageOfSoldCookies = event.target.averageOfSoldCookies.value;

  let tableLeg = tableEl.rows.length-1;
  tableEl.deleteRow(tableLeg);

  let newLocation = new Location(name, minNumberOfCust, maxNumberOfCust, averageOfSoldCookies);
  // newLocation.calcRandomCustPerHour(minNumberOfCust,maxNumberOfCust);
  // // newLocation.calcAvgCookiesPerH();
  // // newLocation.render();

  

  newLocation.calcRandomCustPerHour(minNumberOfCust,maxNumberOfCust);


  newLocation.calcAvgCookiesPerH();
  newLocation.render();
  TableFooter();

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
console.log(locations);



