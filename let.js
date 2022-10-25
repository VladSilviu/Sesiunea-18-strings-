let phone = "iPhone";
/* let phone = "Android"; -- daca folosim LET, nu putem da variabilei o noua valoare  iar cand o denumim in { } define alta variabila, chiar daca are acelasi nume*/

for(let i= 0; i<1; i++){

    let phone = "My phone from if";    /* functiile {} incapsuleaza orice variabila, let, const au in ele */
    console.log('phone din if:', phone);
}
console.log('phone din afara if:', phone);



const constante = "nu ma schimba nimeni";

constante = 1;