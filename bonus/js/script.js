//snack fatti in classe
/*chiedere all'utente due numeri e sommarli mostrando il risultato in pagina

var oneNumber = prompt('inserisci numero');
var secondNumber = prompt('inserisci altro numero');
var result = parseInt(oneNumber) + parseInt(secondNumber);
document.getElementById('risultato').innerHTML = result;
*/

//utente inserisce un prezzo(in un prompt) e in altro prompt inserisce la percentuale di sconto, calcola il prezzo scontato

//var oneNumber = prompt('inserisci un prezzo');
//var secondNumber = prompt('inserisci sconto');
//questa sarà la variabile che calcolerà ciò che ti serve
//var sconto = parseInt(oneNumber) * parseInt(secondNumber) / 100;

//var totale = parseInt(oneNumber) - sconto;
//questo visualizzerai in pagina
//document.getElementById('final-result').innerHTML = totale;


 alert("Studiare Javascript");
 //generatore di password molto poco affidabile
 var a = prompt('inserire il nome');
 var b = prompt('adesso il cognome');
 var c = prompt('ultimo libro che hai letto');

 //crea la variabile password che sommerà i tuoi dati
 var d = a + b + c;
 document.getElementById('your-password').innerHTML = d;

 /*
 var a = prompt('inserisci un numero');
 var b = prompt('inserisci altro numero');
 var result = parseInt(a) / parseInt(b);
 document.getElementById('risultato').innerHTML = result;
*/

/*snack fatti in classe 28maggio*/

/*utente inserisce un numero , il pc dice se è pari o dispari

var num = prompt('inserisci il tuo numero');

if (num % 2 === 0) {
    document.getElementById("numero").innerHTML = 'pari';
} else {
    document.getElementById("numero").innerHTML = 'dispari';
}


/*var x = prompt ('inserisci il tuo nome');

if (x==='Ottavio'){
    document.getElementById('output').innerHTML = 'Salve Prof!';
}else{
    document.getElementById('output').innerHTML = 'Salve collega';
}
*/

/*var x = Math.floor(Math.random() * 10);
/*document.getElementById("random").innerHTML = x;
if (x > 5){
    document.getElementById("random").innerHTML = ciao;
} else {
    document.getElementById("random").innerHTML = hola; 
}
