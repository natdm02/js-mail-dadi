// creo una lista di mail
let email = ["mariorossi@gmail.com", "marcoverdi@icloud.com", "mariabianchi@libero.it", "ciroesposito@gmail.com", "federicapia@gmail.com"];

// un bottone per il controllo
var element = document.getElementById("btnEmail");
element.addEventListener("click",
    function(){
        var emailUser = document.getElementById("inputEmail").value;
        console.log(emailUser);

//scritta "puoi accedere"
            if (email.includes(emailUser)){
                console.log("true");
                document.getElementById("result").innerHTML ="Email accettata!";
//  "non puoi accedere"
                
            } else { 
                console.log("false");
                document.getElementById("result").innerHTML = "Email rifiutata!";
            }
    }
);

