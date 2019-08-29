console.log('Pet Adoption');

const availablePets = [
    {Image: 'https://www.thehappycatsite.com/wp-content/uploads/2019/05/Grey-tabby-cat-HC-long-1.jpg',
    Name: 'Alfie',
    Color: 'Grey',
    SpecialSkill: 'Cuddling',
    TypeOfPet: 'Cat'},
    {Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEJauA2ICl3MgS_hcpmeWARKSBCU1X0CSEbvtmiUaF3I1wXH7',
    Name: 'Link',
    Color: 'White',
    SpecialSkill: 'Fortune-telling',
    TypeOfPet: 'Dog'},
    {Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXONWoDE8Ohy1SIVnZ05IhbNtRSba4_-P83R2rRXCSH5F8J9UxGg',
    Name: 'Wrigley',
    Color: 'Tan',        
    SpecialSkill: 'Hide and Seek',
    TypeOfPet: 'Dog'},
    {Image: 'http://www.theultimatecatwebsite.com/uploads/1/1/0/8/11083235/7184646_orig.jpg',
    Name: 'Katniss',
    Color: 'Tabby',
    SpecialSkill: 'Hunting',
    TypeOfPet: 'Cat'},
    {Image: 'https://nimages2.champdogs.net/31407/l49467311.jpg',
     Name: 'Chloe',
    Color: 'Chocolate',
    SpecialSkill: 'Fetch',
    TypeOfPet: 'Dog'},
    {Image: 'https://www.cdc.gov/healthypets/images/pets/ferret-on-white-background.jpg',
     Name: 'Coconut',
    Color: 'Black',
    SpecialSkill: 'Juggling',
    TypeOfPet: 'Ferret'}
    ]

const printToDom = (toPrint, divId) => {
        document.getElementById(divId).innerHTML = toPrint
    }

const printPets = (petArr) => {
        let domString = ''
    for (let i = 0; i < petArr.length; i++){
        const pet = petArr[i];
         domString += `
        <div class="card">
            <h2>${pet.Name}</h2>
            <img src=${pet.Image} alt='Image of ${pet.Name}'
        </div>`
    }
    printToDom(domString, 'pets')
}   

printPets(availablePets);
