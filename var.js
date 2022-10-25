var phone = "iPhone";

var phone = "Android";

myAge = 12;


function MyFunction() {

    var phone = "not a phone";  /*variabila cu acelasi nume, nu se schimba daca o denumimb cu var */
    console.log(phone);
    console.log(myAge);

    var myName = "BOB";
}

if(true){
    console.log('phone din if:', phone);
    console.log('myAge din if:', myAge);

    var myAddress = "Home";
}


console.log(phone);

MyFunction();

/* console.log(myName); -- nu putem accesa var din interiorul functiei */
/* console.log(myAddress); -- nu putem accesa var din interiorul  IF */