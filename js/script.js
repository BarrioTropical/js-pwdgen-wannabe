/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)
*/

const nomeUtente = prompt('Come ti chiami?');
const cognomeUtente = prompt('Che cognome hai?');
const colorePreferito = prompt("Qual'è il tuo colore preferito?");
const etaUtente = prompt('Quanti anni hai?');

const risultato = `
${nomeUtente}${cognomeUtente}${colorePreferito}${etaUtente}
`

const elemento = document.getElementById('idrisultato');

elemento.innerHTML = risultato;