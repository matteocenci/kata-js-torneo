
// creo l'array dei partecipanti e il loro rispettivo potere

const fighters = [
    { name:'Freezer', power: 8000},
    { name:'Vegeta', power: 8500},
    { name: 'Junior', power: 6000},
    { name: 'Goku', power: 9000},
    { name: 'Gohan', power: 8900},
    { name: 'Tensing', power: 450},
    { name: 'Mr Satan', power: 50},
    { name: 'Trunks', power: 1250},
    { name: 'C-18', power: 7800}

]

// creo l'array delle armi utilizzabili 

const weapons = [
    { name: "Scouter", power: 30},
    { name: 'Katana di Yajirobei', power: 85},
    { name: 'Fagioli magici', power: 60},
    { name: 'Spada del dragon azzurro', power: 115},
    { name: 'Armatura Saiyan', power: 145},
    { name: 'Spada Z', power: 235},
    { name: 'Nuvola oro', power: 200},
    { name: 'Orecchini Potara', power: 250},
    { name: 'Bastone Nyoi', power: 220},



]

// Copio gli array

let fightersCopy = [...fighters];
let weaponsCopy = [...weapons];

console.log(fightersCopy);
console.log(weaponsCopy);



// Metodo dei numeri casuali

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;



// Milestone 1: scelta dell'arma

fightersCopy = fightersCopy.map(fighter => {
    const weaponIndex = getRandomInt(0, weaponsCopy.length - 1);
    console.log("Arma selezionata indice", weaponIndex);
    
    const weapon = weaponsCopy.splice(weaponIndex, 1)[0];  //rimuove l'arma scelta
    console.log("Arma selezionata", weapon);
    
    return {
        ...fighter,
        weapon: weapon.name,
        power: fighter.power + weapon.power //aggiunge il potere dell'arma
    };
});

console.log("Prima fase - Combattenti con arma scelta", fightersCopy);

// Milestone 2: Allenamento


fightersCopy = fighters.map(fighter => {
    const trainingMultiplier = getRandomInt(1, 100);
    return {
        ...fighter,
        power: fighter.power * trainingMultiplier //aggiunge la potenza con l'allenamento

    };
});

console.log("Seconda fase - Combattenti dopo l'allenamento", fightersCopy);


// Milestone 3: Qualificazione 

fightersCopy = fightersCopy.filter(fighter => fighter.power >= 2000); //Questa riga filtra chi ha meno di 2000 di potere
console.log("Fase 3 -  Combattenti qualificati", fightersCopy);

// Milestone 4: Combattimento
// Aggiungiamo un robot se il numero dei partecipanti è dispari 

if (fightersCopy.length % 2 !== 0) {
    fightersCopy.push({name: 'Robot', power: 4000, weapon: 'N/A'});
    console.log('Robot aggiunto per regolare il combattimento');
    
}

