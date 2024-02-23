// numeri random da 1 a 6

let num = Math.round(Math.random() * 5) + 1;
console.log(num);

let numPc = Math.round(Math.random() * 5) + 1;
console.log(numPc);

var element = document.getElementById("randomBtn");

element.addEventListener("click",
    function(){

        let num = Math.round(Math.random() * 5) + 1;
        
        document.getElementById("giocatore").innerHTML = "Il tuo numero è "+ num;

        let numPc = Math.round(Math.random() * 5) + 1;
        
        document.getElementById("pc").innerHTML = "Il numero dell'IA è " + numPc;

// condizioni di vittoria o pareggio

        if (num > numPc){
            document.getElementById("result").innerHTML = "HAI VINTO!!!";
        } else if(numPc == num){
            document.getElementById("result").innerHTML = "AVETE PAREGGIATO! :0";
        } else{
            document.getElementById("result").innerHTML = "HAI PERSO :[";
        }
    }

);