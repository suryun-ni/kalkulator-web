//NOMOR 1 (OBJECT)

var restaurant = {
    name : "Tengku",
    city : "Balikpapan",
    "favorite drink" : "Es Teh",
    "favorite food" : "Nasi Goreng",
    isVegan : false
};

var name = restaurant.name;
var favoriteDrink = restaurant["favorite drink"];

console.log(name + favoriteDrink);

//NOMOR 2 ARRAY
var evenNumber = [];
for (let i = 1 ; i <101; i++){
  if(i % 2 == 0 ){
   evenNumber.push(i);
  }
}
console.log(evenNumber);

//nomor 3 MAP
const priceInJPY = 5000;

// TODO
var currency = new Map(
[["USD",14000],["JPY",131],["SGD",11000],["MYR",3500]]);
console.log(currency);

priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);

//FUNCTION no1
function minimal(a,b){
  if(a < b){
    return a;
  }if (a > b){
    return b;
  }if (a == b){
    return a;
  }else{
    console.log("masukkan angka");
  }
}
//no2
function power(a,b){
  return a**b;
}

 console.log(power(3,2));

 //OOP
 class Animal{
  constructor(name,age,isMammal){
  this.name=name;
  this.age=age;
  this.isMammal=isMammal;
  }
  }
  class Rabbit extends Animal{
  constructor(name,age,isMammal=true){
  super(name,age,isMammal);
  }
  eat(){
  return `${this.name} sedang makan!`
  }
  }
  class Eagle extends Animal{
  constructor(name,age,isMammal=false){
  super(name,age,isMammal);
  }
  fly(){
  return `${this.name} sedang terbang!`
  }
  }
  const myRabbit=new Rabbit('Labi',2);
  const myEagle=new Eagle('Elo',4);
  console.log(myRabbit);
  console.log(myEagle);

  //FUNCTIONAL PROGRAMMING
  
const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

// TODO
let greatAuthors = books.filter((book) => book.sales > 1000000);

greatAuthors = greatAuthors.map((book) => { return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!` });

//MODULE
// TODO 3

//SCRIPT main.js
const Tiger = require('./Tiger');
const Wolf = require('./Wolf');
const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);


// TODO 4
module.exports = {fight,myTiger,myWolf,result};

//Script Tiger.js
class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    return 'grrrrrrr';
  }
}


// TODO 1
module.exports = Tiger;

//SCRIPT Wolf.js
class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    return 'Auuuuuuuuu';
  }
}

// TODO 2
module.exports =Wolf;

//TRY-CATCH
// TODO 1
class ValidationError extends Error{
  constructor(message) {
      super(message);
      this.name = "ValidationError";
  }
}
// TODO 2
const validateNumberInput = (a,b,c) =>{
if  (typeof(a) != "number") throw new ValidationError("Argumen pertama harus number");

 if (typeof(b) != "number") throw new ValidationError("Argumen kedua harus number");

 if (typeof(c) != "number") throw new ValidationError("Argumen ketiga harus number");
}

const detectTriangle = (a, b, c) => {
// TODO 3
try {

 validateNumberInput(a,b,c); 
if (a === b && b === c) {
  return 'Segitiga sama sisi';
}

if (a === b || a === c || b === c) {
  return 'Segitiga sama kaki';
}

return 'Segitiga sembarang';
}
catch (error) {
     return error.message;
       console.log(error.message);



}};


//CONCURRENCY

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NetworkError';
  }
}

// TODO: 1
const fetchingUserFromInternet = (isOffline) => new Promise((resolve, reject) =>{
  if(isOffline){
    reject(new NetworkError('Gagal mendapatkan data dari internet'));
  }else{
    resolve({ name: 'John', age: 18 });
  }
}, 500);
// TODO: 2
async function gettingUserName(isOffline){
  try{
    const dataFromInternet = await fetchingUserFromInternet(false);
    return dataFromInternet.name;
  }catch(error){
    return error.message;
  }
};
