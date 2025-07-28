const person = {
    name: 'sodor uddin',
    age: '25',
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandarban','saintmartin','kuakata']
}

// console.log(person)

// dot notation
// dot symble diye object er value access kora
// console.log(person.profession)
const income= person.salary
// console.log(income)

// bracket Notarion
// third bracket diye access kora
console.log(person['age'])
const boyosh =person['age']
console.log(boyosh)

console.log(person['fav places'])