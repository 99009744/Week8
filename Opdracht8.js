alert("Hallo welkom bij The Krusty Krab!")

var aantalFris = 0;
var aantalBier = 0;
var aantalWijn = 0;
var aantalBitter = 0;

const FRISPRIJS = 1.80;
const BIERPRIJS = 2.50;
const WIJNPRIJS = 3.50;
const BITTERPRIJS6 = 5.50;
const BITTERPRIJS12 = 8.20;

order();
function order() {
    var bestelling = prompt("welke beselling wilt u toevoegen? Fris, bier, wijn of snack");
    switch (bestelling) {           //switch werkt het zelfde als if/else maar makkelijker.
        case "stop":                //case is een optie in switch.
            var bill = createBill();


            alert(bill);
            return;
        case "fris":
             aantalFris =+ parseInt(prompt("Hoeveel fris wilt u bestellen? prijs is €" + FRISPRIJS + "per glas")); //=+ telt me parseint bij me var op.
            break;
        case "bier":
             aantalBier =+ parseInt(prompt("Hoeveel bier wilt u bestellen? prijs is €" + BIERPRIJS + "per glas"));
            break;
        case "wijn":
             aantalWijn =+ parseInt(prompt("Hoeveel wijn wilt u bestellen? prijs is €" + WIJNPRIJS + "per glas"));
            break;
        case "snack":
            var bitterbal = parseInt(prompt("Hoeveel bitterballen wilt u 6 of 12? prijs voor 6= €"+ BITTERPRIJS6 +" prijs voor 12= €"+ BITTERPRIJS12))
        default:
            alert("U heeft een ongeldige invoer gedaan.");
            break;
    }

    order();
}

function createBill() {
    var totaalFris= aantalFris * FRISPRIJS;
    if (totaalFris > 0) {
        var bill = "U heeft "+ aantalFris + "fris besteld opgetelt naar €" + totaalFris + "<br>";
    }
    
    var totaalBier= aantalBier * BIERPRIJS;
    if (totaalBier > 0) {
        var bill =  "U heeft " + aantalBier + "bier besteld opgetelt naar €" + totaalBier + "<br>";
    }

    var totaalWijn= aantalWijn * WIJNPRIJS;
    if (totaalWijn > 0) {
        var bill = "U heeft " + aantalWijn +" wijn besteld opgetelt naar €" + totaalWijn + "<br>";
    }

    var totaalPrijs = totaalFris + totaalBier + totaalWijn;
    if (totaalPrijs > 0) {
        var bill ="Dit komt neer op €" + totaalPrijs + "<br>";

        return bill;
    }
    
    return "geen bestelling";
}
createBill();