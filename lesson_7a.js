// as expression
{
  a: {
    b: {
      c: {
        d: {}
      }
    }
  }
};
// object literal (instance of Object)
{};
({});

const name = 'Alejandro';
// as assignment
const person_1 = {
  "name": name,
  "height_in_cm": 191,
  "likes_pizza": true,
  "weight_in_kg": 90,
  "age_in_years": 28,
  "skin_tone": 'caucasian',
  "hair_color": 'brown',
  "body_type": 'ectomorph',
  "Roomie": {
    "name": 'The other guy'
  },
  "roomie": {
    "name": 'Aaron'
  },
  "say_hi": function(something = 'hi') {
    window.alert(something);
    // return undefined
  },
};

console.log(person_1);


const new_person = {
  "name": "Aaron",
  "height_in_cm": 175,
  "weight_in_kg": 70,
  "age_in_years": 37,
  "skin_tone": 4,
  "hair_color": "what's hair?",
  "body_type": "puercomorph"
};

console.log(new_person);

// Dot notation
person_1.Roomie; // 'The other guy'
person_1.roomie; // { 'name': 'Aaron'}
console.log(person_1.roomie.name); // 'Aaron'

person_1.name; // getting an attribute; 'Alejandro'
person_1.say_hi; // getting a method
person_1.say_hi(); // calling a method; displays alert, saying: "hi!"

const somevalue = person_1.name; // 'Alejandro'
const personGreeting = person_1.say_hi; // getting a method *  f()

console.log(person_1.name); // 'Alejandro'
person_1.name = 'Alejandro Castro';
console.log(person_1.name); // 'Alejandro Castro'
personGreeting();


// Bracket notation
person_1['Roomie']; // 'The other guy'
person_1['roomie']; // { 'name': 'Aaron'}
console.log(person_1['roomie']['name']); // 'Aaron'

person_1['name']; // getting an attribute; 'Alejandro Castro'
person_1['say_hi']; // getting a method
person_1['say_hi'](); // calling a method; displays alert, saying: "hi!"

const somevalue2 = person_1['name']; // 'Alejandro Castro'
const personGreeting2 = person_1['say_hi']; // getting a method

console.log(person_1['name']); // 'Alejandro Castro'
person_1['name'] = 'Alejandro Castro Lopez';
console.log(person_1['name']); // 'Alejandro Castro Lopez'
personGreeting2();


var person_2 = {
  "name":            'Aaron',
  "height_in_cm":    175,
  "weight_in_kg":    68,
  "age_in_years":    36,
  "roomie":          person_1,
  "hair_color": 'what\'s hair?',
  "body_type": 'ecto-mesomorph',
};



person_1




console.log(person_1);
console.log(person_2);

console.log(person_1);
const p1 = { a : 'b' };
const p2 = { a : 'b' };
const p3 = { a : 'b' };
const someobject = [p1, p2, p3]
console.log(someobject[1].a)
console.log(someobject[1]["a"])
/*
  Objects: 2 methods, 5 attributes, console.log each
  - a car
  - a house
  - a person
  - an animal


  Arrays
  - brands
  - types
  - shopping list
  - countries/cities
  - hobbies
  - pets


  Juego de basta
  - Nombre
  - Apellido
  - Animal
  - Flor o fruto
  - País o ciudad
  - Cosa
  - Total


  - players: [
    {
      name: '',
      rounds: [
        {
          nombre: '',
          apellido: '',
          animal: '',
          flor_o_fruto: '',
          pais_o_ciudad: '',
          cosa: '',
          total: 0,
        }
      ]
    }]

  - Numeric systems
*/
