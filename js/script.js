//i miei dati
var firstName = prompt('Inserire nome');
var surname = prompt('Inserire cognome');
var favouriteColour = prompt('inserire colore preferito');

//creare la variabile password che somma i miei dati

var password = firstName + surname + favouriteColour;

//cosa vedrai sulla pagina

document.getElementById("result").innerHTML = password +"21";

