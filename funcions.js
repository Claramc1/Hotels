var hotels = [];

/*El mètode crearHotel() haurà de demanar a l’usuari que introdueixi per pantalla les dades de nom, nombre d’habitacions, nombre de plantes i
superfície total de l’hotel. Un cop hagi demanat totes aquestes dades, s’ha d’instanciar l’objecte de la classe i afegir-lo a un array d’hotels.*/

function crearHotel() {
    var nom = prompt("Introdueix el nom de l'hotel");
    var n_habitacions = prompt("Introdueix el nombre d'habitacions");
    var n_plantes = prompt("Introdueix el nombre de plantes");
    var superficie_total_hotel = prompt("Introdueix la superfície total de l'hotel");
    let encontrado = false;

    for(Hotel of hotels){
        if(Hotel.nom == nom){
            encontrado = true;
            console.log("L'hotel ja està registrat")
        }
    }

    if(encontrado==false){
            var myhotel = new Hotel(nom, n_habitacions, n_plantes, superficie_total_hotel);
            hotels.push(myhotel);
    }
        console.log(myhotel);
        console.log(hotels);
}

/*El mètode donarDeBaixaHotel() ha de demanar quin hotel es vol donar de baixa. L’usuari introduirà el nom de l’hotel i si l’hotel està dintre
de l’array, l’eliminarem i mostrarem un missatge per pantalla informant l’usuari que hem eliminat l’hotel. Si no hem trobat l’hotel
 dintre de l’array, avisarem l’usuari dient que l’hotel no estava dintre de la nostra aplicació.*/

 function donarDeBaixaHotel(){
    var baixa = prompt("Introdueix quin hotel vols donar de baixa:");
    let encontrado = false;

    for(Hotel of hotels){
        if(Hotel.nom == baixa){
            encontrado = true;
            hotels.splice(hotels.indexOf(Hotel) ,1);
            console.log("donat de baixa");
            console.log(hotels);
        }
    }
    if(!encontrado){
        console.log("No hem trobat l'hotel al registre");
    }
 }

/*El mètode veureHotel() ha de demanar a l’usuari el nom de l’hotel que vol que mostrem per pantalla, si l’hotel està a la nostra aplicació, 
li mostrarem l’hotel, si no hi és, informarem l’usuari dient que l’hotel que ens ha demanat no està dintre de la nostra aplicació. Quan mostrem
l’hotel, a més, de mostrar el nombre d’habitacions, nombre de plantes i superfície total de l’hotel també es cridarà al mètode calcularManteniment().*/

function veureHotel(){
    var userHotel = prompt("Introdueix el nom de l'hotel que vols veure");
    let encontrado = false;

    for(Hotel of hotels){
        if(Hotel.nom == userHotel){
            encontrado = true;
            document.getElementById("text").innerHTML = "Nom de l'hotel: "+ Hotel.nom + ". Número d'habitacions: "+ Hotel.n_habitacions+ ". Número de plantes: "+ Hotel.n_plantes+". Superfície de l'hotel: " + Hotel.superficie_total_hotel;
            hotel.calcularManteniment();
        }
    }
    if(!encontrado){
        console.log("No hem trobat l'hotel al registre");
    }

}