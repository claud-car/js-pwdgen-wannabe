// CHIEDO IL NOME ALL'UTENTE
var nome = prompt("Ciao,dimmi il tuo nome.");
console.log(nome);

// RISPONDO SALUTANDO L'UTENTE
document.getElementById('nome').innerHTML = "Ciao " + nome + " , piacere di conoscerti.";

// CHIEDO ALL'UTENTE IL COGNOME
var cognome = prompt("Bene, " + nome + ", mi potresti dire il tuo cognome?");
console.log(cognome);

// CHIEDO ALL'UTENTE IL SUO COLORE PREFERITO
var colore = prompt("Ok " + nome + " " + cognome + ", prima di procedere con la generazione di una password, mi puoi dire il tuo colore preferito?");
console.log(colore);

// CHIEDO ALL'UTENTE SE VUOLE CHE IO GENERI LA PASSWORD
var sicurezza = prompt("Scrivi 'Si' per assicurarmi che tu non sia un robot");
console.log(sicurezza);

// SCRIVO SULLA PAGINA LA PASSWORD
document.getElementById('password').innerHTML = "Grazie " + nome + " " + cognome + ", dopo essermi assicurato della domanda di sicurezza (in cui hai scritto " + sicurezza + " ), ho generato la tua password, " + nome + cognome + colore + 21 + " ."
