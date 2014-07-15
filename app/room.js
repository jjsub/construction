//room.js
//
//Room constructor - functions to make a room and find its area and material cost.
//
//Z. Ames 7/14/14


'use strict';
//this function created rooms
function Room(name, length, width, height,floor, color){
  this.name = name;
  this.width = parseInt(width);
  this.length = parseInt(length);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
  }


Room.prototype.area = function(){
  return this.length*this.width;
  };

Room.prototype.wallArea =function(){
  return 2*(this.length*this.height)+2*(this.width*this.height);
};

Room.prototype.cost = function (){
  if (this.floor==='carpet'){
      var floorCost=this.area()*15;
      var wallCost =this.wallArea()*0.5;
      return floorCost+wallCost;
  }else if (this.floor === 'tile'){
       var floorCost=this.area()*12;
       var wallCost =this.wallArea()*0.5;
      return floorCost+wallCost;
  }else{
       var floorCost=this.area()*10;
       var wallCost =this.wallArea()*0.5;
      return floorCost+wallCost;
  }
};

module.exports = Room;

