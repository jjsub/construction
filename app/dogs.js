//index.js
//
//Construction 
//
//
//
//Z. Ames 7/14/14


/*jshint -W069*/
/*global prompt:true*/
'use strict';

var prompt = require('sync-prompt').prompt;



//creating objects manually
var dogs = [];

var d1 = {};
d1.name = 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};

var d3 = {};
d3['name']='lassy';
d3['age']=9;

var n = 'rex';
var a = 11;

var d4 = {name:n, age:a};


var name='name';
var age = 'age';
var d5 = {};
d5[name]=n;
d5[age] = a;

dogs.push(d1, d2, d3, d4, d5);

console.log(dogs);



console.log(d1 instanceof Dog);
console.log(d1 instanceof Object);

//creating objects using a constructor
function Dog(name,age){
  this.name=name;
  this.age= age;
}

var d6 = new Dog('spot',3);

console.log(d6);
console.log(d6 instanceof Dog);
console.log(d6 instanceof Object);

var menu = prompt('Do you want to create a dog? (y)es or (n)o:  ');
while (menu !== 'n'){
    name = prompt('Dog name? ');
    age = prompt('Dog age? ');
    var dog=new Dog(name, age);
    dogs.push(dog);
    menu = prompt('Do you want to create a dog? (y)es or (n)o:  ');
}
console.log('All Dogs:', dog);
