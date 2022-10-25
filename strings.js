let myCNP =  "1234567890";

console.log(myCNP[0]);

console.log([myCNP.length -1]);


console.log("substring:" + myCNP.substring(3, 6));

let includesFive = myCNP.includes("345");
console.log(includesFive);

let brandList = "Dacia BMW Audi Mercedes, Porsche Logan";

console.log(brandList.includes("Porsche Logan"));






let sentence = "lasa-ma papa la mare";

sentence = sentence.replace("mare", "munte"); /* poate fi inlocuit si cu nimic ca sa scoti ceva din string */
console.log(sentence);

let carList = "Dacia,BMW,Audi,Mercedes,Porsche,Logan";
let words = carList.split(",");        /* imparte elementele, daca am face BMW AUDI fara virgula, ar deveni un singur element */
console.log(words);