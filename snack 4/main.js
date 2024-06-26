'use strict'
//crea un arrey di oggetti con persone
const people = [
    {
        nome: 'Marco',
        cognome: 'Rossi',
        età: 19,
    },
    {
        nome: 'Luca',
        cognome: 'Bianchi',
        età: 56,
    },
    {
        nome: 'Giovanni',
        cognome: 'Neri',
        età: 45,
    },
    {
        nome: 'Anna',
        cognome: 'Viola',
        età: 12,
    },
    {
        nome: 'Lucia',
        cognome: 'Blu',
        età: 14,
    },
    {
        nome: 'Francesca',
        cognome: 'Azzurro',
        età: 18,
    }
]
//creo un nuovo array con info: può guidare o no
const driverOrNot = [];

//operazione: stabilisco chi ha +=18 anni --> push nel nuovo arrey aggiungendo l'info: può guidare, altrimenti non può guidare
for (let i = 0; i < driverOrNot.length; i++) {
    const currentPerson = { ...people[i] }

    if (currentPerson.età >= 18) {
        currentPerson.info = `${currentPerson.nome} ${currentPerson.cognome}  può guidare`;
    }
    else {
        currentPerson.info = `${currentPerson.nome} ${currentPerson.cognome} non può guidare`;
    }

    driverOrNot.push(currentPerson);
}
//}
//stampo il nuovo arrey
console.log(people);
console.log(driverOrNot);