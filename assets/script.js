// Chiedi all'utente il suo nome,
const userName = prompt('Inserisci il tuo nome');
console.log(userName);

// poi chiedi il suo cognome,
const userSurname = prompt ('Inserisci il tuo cognome');
console.log(userSurname);

// poi chiedi il suo colore preferito
const color = prompt ('Insersci il tuo colore preferito');
console.log(color);

// Genera un numero casuale tra 1 e 99
const randomNumber = Math.floor(Math.random() * 99) + 1;

// Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
const psw = (userName.toLowerCase() + userSurname.toLowerCase() + color.toLowerCase() + randomNumber);
console.log(psw);

document.getElementById('new_psw').innerHTML = (psw)
console.log(document.getElementById('new_psw'));
