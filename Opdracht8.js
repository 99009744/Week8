alert("Hallo welkom bij The Krusty Krab!")

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalbitterbal = 0;
var aantalBitter8 = 0;
var aantalBitter16 = 0;

const FRISPRIJS = 1.80;
const BIERPRIJS = 2.50;
const WIJNPRIJS = 3.50;
const BITTERPRIJS8 = 6.50;
const BITTERPRIJS16 = 10;

order ()
function order() {
    var bestelling = prompt("welke beselling wilt u toevoegen? Fris, bier, wijn of snack");
    switch (bestelling) {           //switch werkt het zelfde als if/else maar makkelijker.
        case "stop":                //case is een optie in switch.
            var bill = createBill();


            alert(bill);
            return;
        case "fris":
             aantalFris =+ parseInt(prompt("Hoeveel fris wilt u bestellen? prijs is €" + FRISPRIJS + "per glas")); //=+ telt me parseint bij me var op.
            break;                  //break zorgt vervoor dat je uit de switch gaat.
        case "bier":
             aantalBier =+ parseInt(prompt("Hoeveel bier wilt u bestellen? prijs is €" + BIERPRIJS + "per glas"));
            break;
        case "wijn":
             aantalWijn =+ parseInt(prompt("Hoeveel wijn wilt u bestellen? prijs is €" + WIJNPRIJS + "per glas"));
            break;
        case "snack":
            aantalbitterbal = prompt("Hoeveel bitterballen wilt u? 8 of 16?");
        if (aantalbitterbal ==8){
            aantalBitter8 =+ parseInt(prompt("Hoeveel schalen van 8 bitterballen wilt u?"));
            break;
        }
        if (aantalbitterbal ==16){
            aantalBitter16 =+ parseInt(prompt("Hoeveel schalen van 16 bitterballen wilt u?"));
            break;
        }
        else{
            alert("Ongeldig aantal.");
            break;
        }
        default:
            alert("U heeft een ongeldige invoer gedaan.");
            break;
    }

    order();
}

function createBill() {
    var totaalFris= aantalFris * FRISPRIJS;
    if (totaalFris > 0) {
        document.write("U heeft "+ aantalFris + " fris besteld opgetelt naar €"+ totaalFris + "<br>");
    }
    
    var totaalBier= aantalBier * BIERPRIJS;
    if (totaalBier > 0) {
        document.write("U heeft " + aantalBier + " bier besteld opgetelt naar €"+ totaalBier + "<br>");
    }

    var totaalWijn= aantalWijn * WIJNPRIJS;
    if (totaalWijn > 0) {
        document.write ("U heeft " + aantalWijn +" wijn besteld opgetelt naar €"+ totaalWijn + "<br>");
    }

    var totaalbitterbal8= aantalBitter8 * BITTERPRIJS8;
    if (totaalbitterbal8 > 0) {
        document.write ("U heeft" + aantalBitter8 + " schalen met 8 bitterballen besteld opgetelt naar €"+ totaalbitterbal8 + "<br>");
    }

    var totaalbitterbal16= aantalBitter16 * BITTERPRIJS16;
    if (totaalbitterbal16 > 0) {
        document.write ("U heeft" + aantalBitter16 + " schalen met 16 bitterballen besteld opgetelt naar €"+ totaalbitterbal16 + "<br>");
    }

    var totaalPrijs = totaalFris + totaalBier + totaalWijn + totaalbitterbal8 + totaalbitterbal16;
    if (totaalPrijs > 0) {
        document.write ("Dit komt neer op €" + totaalPrijs + "<br>");

        return bill;
    }
    
    return "geen bestelling";
}
createBill();