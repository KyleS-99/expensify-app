// const person = {
//     name: 'Kyle',
//     age: 18,
//     location: {
//         city: 'Basehor',
//         temp: 82
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// const { temp: temperature, city } = person.location;

// console.log(`${firstName} is ${age}.`);

// console.log(`it's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// ----------------------------------------------------------------------------------------------------------------------

// const address = [];
// const [, , state = 'Unknown'] = address;

// console.log(`You're in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumPrice] = item;
console.log(`A medium ${coffee} costs ${mediumPrice}`);