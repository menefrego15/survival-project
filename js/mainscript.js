window.onload = function() {
    document.getElementById("submit").addEventListener("click", playGame);
}

function playGame() {


//GET MODE VALUE
      if (document.getElementById('zombie').checked) {
        var mode = document.getElementById('zombie').value;
      }

      if (document.getElementById('normal').checked) {
        mode = document.getElementById('normal').value;
      }
//GET WEAPON VALUE
/*
      if (document.getElementById('yes').checked) {
        var weapon = document.getElementById('yes').value;
      }

      if (document.getElementById('no').checked) {
        weapon = document.getElementById('no').value;
      }
*/
//GET CITY VALUE
/*
      if (document.getElementById('city').checked) {
        var place = document.getElementById('city').value;
      }

      if (document.getElementById('nocity').checked) {
        place = document.getElementById('nocity').value;
      }
*/
//GET CAR VALUE

/*if (document.getElementById('car').checked) {
    car = document.getElementById('car').value;
  }

  if (document.getElementById('nocar').checked) {
    car = document.getElementById('nocar').value;
  }
  */  
//get age value
//get nbr ppl value

    var x = document.getElementById("people").value;


//get size value
//get years of apocalypse value

    var y = document.getElementById("year").value;
    

    
if (mode == "normal") {
    var water = (10 * 365*y) * x;
    var potager = 50 * x;
    var elec = 1000 * x;
    var food = (100 * x) * y;
    var costW = (500 * x*2) + ((50 * y)*x);
    var total = water + potager + elec + food + costW;

}else{
    var water = (10 * 365*y) * x;
    var potager = 50 * x;
    var elec = 1000 * x;
    var food = (100 * x) * y;
    var costW = ((500 * x*2) + ((50 * y)*x)) * 5;
    var total = elec + food + costW;
}

console.log(total);

//age du comnbattant

/*
var h = 0;
var h = ((quo*100)-5000)/45;
var r = Math.ceil(h);*/
/*
if (r<=0) {
    document.getElementById("resultat").innerHTML = "tu as 100% de chances de tenir 30s contre conor mcgregor";
}else if (r>=100) {
    document.getElementById("resultat").innerHTML = "tu as 100% de chances de tenir 30s contre conor mcgregor";
}

else{

document.getElementById("resultat").innerHTML = "tu as " + r + "% de chances de tenir 30s contre conor mcgregor";

}
*/

document.getElementById("resultat").innerHTML = "survivre dans de bonne conditions durant " + y + " ans te coutera " + total + " euros environ";




}


function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

  
//WATER NEEDS = (10 * 365y) * x
//POTAGER = 50*x en m2
//PANNEAUX SOLAIRES = 1000*x 
//NOURRITURE =  100 * x
//weapons = (500 * x) + (50 * year)*x

