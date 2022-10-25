// Before ES 6

let name = "Bob";
let location = "Timisoara";


let message = "Salut, sunt " + name + " din " + location + ".";

console.log(message);

//After ES 6

let newMessage = `salut, sunt ${name} din ${location}.`;

console.log(newMessage);
// Before ES 6
let adress = {
    city: 'Craiova',
    street: 'Strada Mare',
    number: 10
}

// let city = adress.city;
// let street = adress.street;
// let number = adress.number;

// if(city  === 'Craiova'){
//     console.log("Sunt din Craiova");
// }

// const {city, street, adress} = adress; 
//ES 9
// const {myTown: city, myStreet: street, number} = adress;

// console.log(myTown, myStreet, number);
//Before ES6
const animals = ['caine', 'pisica'];
// const cat = animals[0];
// const dog = animals [1];
//After ES6
const [dog, cat]  = animals;
console.log(dog, cat);

const object1 = {
    masa: 'ikea',
    dulap: 'ikea'
}

const object2 = {
    cada: "dedeman",
    oglinda: 'bricostore'
}

const mobilier = Object.assign({}, object1, object2);

console.log(mobilier);

const mobilier2 = { ...object1, ...object2};  //face un singur obiect care combina cheiile de la ambele obiecte;
console.log(mobilier2);


//Before es6

const anim1 = ["caine",  "porc"];
const anim2 = ["vaca", "porc"];
const anim3 = anim1.concat(anim2);
console.log(anim3);

// After es6

const anim4 = [ ...anim1, ...anim2];  // daca nu punem  ... facem un array cu 2 separate, nu unite;
console.log(anim4);


// const myObJ = {name:'Bob'};
// const secondObj = {myObj};

const adressa = {
    street: "principala",
    number: 1
}

const student = {
    name: "bob",
    adressa
}
console.log(student);

