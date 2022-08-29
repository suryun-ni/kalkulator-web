console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");
//TYPE DATA DI JS
let a;
let b;
a = 10;
b = 12;
console.log(a*b);
console.log(typeof(a*b)); //number
let c = "ini string";
let d = true;
const e = null; //variabel const dengan type null
acak = "acak";
var acak ; //kelemahan var

//ARRAY DAN OBJECT
//ini ARRAY
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[1]);

//ini OBJECT
let user = {
    name: {
      first: "Harry",
      last: "Potter",
    },
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hallo, nama saya " + user.name.first + " " + user.name.last);
console.log("Umur saya " + user.age + " tahun");

//operator penugasan
let x = 10;
let y = 5
 
x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

//komparasi

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

//LOOP
//basic
for(let i = 0; i < 5; i++) {
    console.log(i);
}
const myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
//for of loop
for(const arrayItem of myArray) {
    console.log(arrayItem)
}

//oop
function greeting(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);


//alert
const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}

//TRUTHY DAN FALSY
/*
Contoh falsy : (bernilai false)
Number 0
BigInt 0n
String kosong seperti “” atau ‘’
null
undefined
NaN, atau Not a Number
*/
let name = ""; //bernilai false karena tidak ada isi


if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}

//SWITCH CASE
let language = "French";
let greeting = null;

switch (language) {
    case "English":
        greeting = "Good Morning!";
        break;
    case "French":
        greeting = "Bonjour!";
        break;
    case "Japanese":
        greeting = "Ohayou Gozaimasu!";
        break;
    default:
        greeting = "Selamat Pagi!";
}

console.log(greeting);

//OBJECT

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

//tambahkan nilai
spaceship.class = "Light freighter";
//hapus nilai 
delete spaceship.manufacturer;

//ARRAY
const myArray = ["Cokelat", 42.5, 22, true, "Programming"];

//tambahkan nilai ke array
myArray.push('JavaScript');
console.log(myArray);

//hapus nilai diakhir
myArray.pop();
//hapus nilai diawal
myArray.shift();
//tambahkan nilai diawal
myArray.unshift("Apple");
//menghapus data pada index dan membiarkan index itu bernilai empty
delete myArray[1];
//menghapus elemen pada posisi tertentu
myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen

//Spread Opretor
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 }; //keluarnya hilang kurung siku nya untuk array

console.log(newObj);

//DESTRUCTURING OBJECT
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
const {firstName, lastName, age} = profile;
 
console.log(firstName, lastName, age);

//DESTRUCTURING ASSIGNMENT
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
let firstName = "Dimas";
let age = 20;
 
// menginisialisasi nilai baru melalui destructuring object
({firstName, age} = profile); //agar javascript tidak salah kira itu statement makanya pakai kurung
 
console.log(firstName);
console.log(age);
 
//DEFAULT FALUES
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
 
 
const {firstName, age, isMale = false} = profile; //isMale tidak adak, bakal dihitung udentified, tetapi karena sudah dikasih = false maka tidak
 
console.log(firstName)
console.log(age)
console.log(isMale)
 
 //DESTRUCTURING ARRAY
 const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood ] = favorites;
 
console.log(thirdFood);
 
/* output:
Nugget
*/

//CONTOH PENGGUNAAN DESTUCTURING
let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a]
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/

//MAP 
//--> MIRIP OBJEK CUMAN BISA MENAMPUNG SELAIN STRING DAN SYMBOL
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

//SET 
const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);

//FUNCTION PARAMATER
        //pakai desctructuring object
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);


//Default paramater FUCNTION
function exponentsFormula(baseNumber, exponent) { //bisa juga function exponentsFormula(baseNumber, exponent = 2)
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(2);

//REST PARAMAETER FUNCTION 
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));

//ARROW FUNCTION
    //regular function ada 2
    // function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
 
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

    //arrow function
    // function expression
const sayHello = (greet) => {
    console.log(`${greet}!`)
}
 
const sayName = (name) => {
    console.log(`Nama saya ${name}`)
}
    //bisa satu baris dan bila pakai return, tinggal lakukan berikut
    const multiply = (a, b) => a * b;
    console.log(multiply(3, 4));

//CLOSURE (fungsi dalam fungsi)
function init() {
    var name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
    
    function greet() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    greet();
}

init();

//OOP property dan method property
// cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}
 
// cara 2
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherPrototype = 'the values';
};
 
Mail.prototype.sendMessage = function (msg, to) {
    console.log(`you send: ${msg} to  ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
};

//OBJECT COMPOSITION
// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
  });

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
  });

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store
  };
  // [4] method
  const personalEnterpriseBehaviors = self => ({
    createCatalog: () => console.log('Catalog has created: ', self.store)
  });
  
  // [5] create object composition
  return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih



//CONCURENNCY

    //setTimeOut
console.log("Selamat datang!");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");

//PROMISE
const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}
 
const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};
 
const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};
 
function makeEspresso() {
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value)
            return brewCoffee();
        })
        .then(value => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}
 
makeEspresso();
 
/* output
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Membuatkan kopi Anda...
Kopi sudah siap!
*/