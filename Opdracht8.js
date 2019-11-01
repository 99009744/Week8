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
        case "stop":                //case voer je de opties in die als antworden in je switch werken.
            var bill = createBill();


            document.write(bill);
            return;
        case "fris":
            var orderFris =+ parseInt(prompt("Hoeveel fris wilt u bestellen? prijs is €" + FRISPRIJS + "per glas")); //=+ telt me parseint bij me var op.
             aantalFris = orderFris + aantalFris;
            break;                  //break zorgt vervoor dat je uit de switch gaat.
        case "bier":
            var orderBier =+ parseInt(prompt("Hoeveel bier wilt u bestellen? prijs is €" + BIERPRIJS + "per glas"));
            aantalBier = orderBier + aantalBier;
            break;
        case "wijn":
            var orderWijn =+ parseInt(prompt("Hoeveel wijn wilt u bestellen? prijs is €" + WIJNPRIJS + "per glas"));
            aantalWijn = orderWijn + aantalWijn;
            break;
        case "snack":
            aantalbitterbal = prompt("Hoeveel bitterballen wilt u? 8 of 16?");
        if (aantalbitterbal ==8){
            var orderBitter8 =+ parseInt(prompt("Hoeveel schalen van 8 bitterballen wilt u?"));
            aantalBitter8 = orderBitter8 + aantalBitter8;
            break;
        }
        if (aantalbitterbal ==16){
            var orderBitter16 =+ parseInt(prompt("Hoeveel schalen van 16 bitterballen wilt u?"));
            aantalBitter16 = orderBitter16 + aantalBitter16;
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

    order(); //Deze order zorgt ervoor dat wanneer ik een break heb berijkt en uit mijn switch kom weer opnieuw de functie start.
}

function createBill() {
    var totaalFris= aantalFris * FRISPRIJS;
    if (totaalFris > 0) {
        document.write("Aantal fris besteld "+ aantalFris + "x €1.80 = €"+ totaalFris.toFixed(2) + "<br>");
    }
    
    var totaalBier= aantalBier * BIERPRIJS;
    if (totaalBier > 0) {
        document.write("Aantal bier besteld " + aantalBier + "x €2.50 = €"+ totaalBier.toFixed(2) + "<br>");
    }

    var totaalWijn= aantalWijn * WIJNPRIJS;
    if (totaalWijn > 0) {
        document.write ("Aantal wijn besteld " + aantalWijn +"x €3.50 = €"+ totaalWijn.toFixed(2) + "<br>");
    }

    var totaalbitterbal8= aantalBitter8 * BITTERPRIJS8;
    if (totaalbitterbal8 > 0) {
        document.write ("Aantal schalen van 8 bitterballen besteld " + aantalBitter8 + "x €6.50 = €"+ totaalbitterbal8.toFixed(2) + "<br>");
    }

    var totaalbitterbal16= aantalBitter16 * BITTERPRIJS16;
    if (totaalbitterbal16 > 0) {
        document.write ("Aantal schalen van 16 bitterballen besteld " + aantalBitter16 + "x €10 = €"+ totaalbitterbal16.toFixed(2) + "<br>");
    }

    var totaalPrijs = totaalFris + totaalBier + totaalWijn + totaalbitterbal8 + totaalbitterbal16;
    if (totaalPrijs > 0) {
        document.write ("<br><br>Dit komt neer op een totaal bedrag van €" + totaalPrijs.toFixed(2) + "<br>");

        return bill;
    }
    
    return "U heeft geen bestelling gedaan hier een nutteloos bonnetje";
}
createBill();