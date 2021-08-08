' use strict';

let Seattle = {

  minCustomers : 23,
  maxCustomers : 65,
  cookiesPerSale : 6.3,

  custPerHour : function(min, max){

    min = Math.ceil(min);
    max = Math.floor(max);
    this.custPerHour= Math.floor(Math.random() * (max - min + 1) + min);

  }

};


