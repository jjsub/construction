// house.js 
//
//room constructor = creates a house and calculates the total area and total
//material cost.
//
// Z. Ames  7/15/14

'use strict';

function House(name, material, year){
  this.name = name;
  this.material =material;
  this.year= parseInt(year);
  this.rooms = [];
}


House.prototype.area = function(){
var totalArea=0;
for (var i=0; i<this.rooms.length; i++){
  totalArea+=this.rooms[i].area();
}
return totalArea;
  };

House.prototype.cost = function(){
var totalCost=0;
for (var i=0; i<this.rooms.length; i++){
  totalCost+=this.rooms[i].cost();
}
return totalCost;
  };

module.exports = House;
