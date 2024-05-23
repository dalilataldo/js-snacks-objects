'use strict'
//crea un arrey di oggetti con animali
const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'serpente',
        famiglia: 'colubridi',
        classe: 'rettili'
    },
    {
        nome: 'pecora',
        famiglia: 'ovini',
        classe: 'mammiferi'
    },
    {
        nome: 'balena',
        famiglia: 'cetacei',
        classe: 'mammiferi'
    }
]

//crea un arrey per classe mammiferi
const classeMammiferi = []

//operazione: per ogni oggetto se classe === mammiferi --> push nel nuovo array l'animale
for (let i = 0; i < animals.length; i++) {
    const currentAnimal = animals[i];

    if (currentAnimal.classe === 'mammiferi') {
        classeMammiferi.push(currentAnimal.nome)
    }
}

//stampa il nuovo arrey mammiferi
console.log('I mammiferi sono:', classeMammiferi);
