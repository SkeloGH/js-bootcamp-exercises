// var index = 0;
// var counter = 0;

// for (index; index > -10; index--) {
//   counter += 1;
//   // counter = counter + 1;
//   console.log(counter);
// }

// for (var current_value = 0; current_value < 1; current_value = current_value * 10) {
//   console.log(current_value);
// }

// console.log('index', index);
// console.log('counter', counter);

// length     1        2        3         4       5
// var names = ['Elsa', 'Karla', 'Jessica', 'Alex', 'Aaron'];
// index      0        1        2         3       4
// names[5] === undefined

// Hint: max length === 5
// Hint: max index === 4    =   (names.length - 1)

// Ex1: console.log each name left-to-right
// for (var index = 0; index < names.length; index++) {
//   var current_name = names[index];
//   console.log(names[index]);
// }

/*
// Ex2: console.log each name right-to-left
// Ex3: console.log only female names
// Ex4: console.log only male names
// Ex5: Given the following, calculate the shopping cart cost
*/
var cart = [
  {
    name: 't-shirt',
    shipping: 3000,
    items: [
      {
        design: 'pikachu',
        color: 'blue',
        size: 'xs',
        price: 23000,
      },
      {
        design: 'pikachu',
        color: 'blue',
        size: 'm',
        price: 23000,
      },
      {
        design: 'raichu',
        color: 'red',
        size: 'l',
        price: 25000,
      },
      {
        design: 'vulpix',
        color: 'voltorb',
        size: 'xl',
        price: 28000,
      },
    ]
  },
  {
    name: 'hoodie',
    shipping: 3500,
    items: [
      {
        design: 'vaporeon',
        color: 'green',
        size: 'm',
        price: 23000,
      },
      {
        design: 'umbreon',
        color: 'yellow',
        size: 'l',
        price: 25000,
      },
      {
        design: 'espeon',
        color: 'purple',
        size: 'xl',
        price: 28000,
      },
    ]
  },
]

var total = 0;



var invoice = [
  {
    items: [
      {
        price: 1,
        name: 'something0',
      }
    ]
  },
  {
    items: [
      {
        price: 2,
        name: 'something'
      },
      {
        price: 3,
        name: 'something2'
      }
    ]
  },
  {
    items: [
      {
        price: 2,
        name: 'something'
      },
      {
        price: 3,
        name: 'something2'
      }
    ]
  },
  {
    items: [
      {
        price: 2,
        name: 'something'
      },
      {
        price: 3,
        name: 'something2'
      }
    ]
  },
  {
    items: [
      {
        price: 2,
        name: 'something'
      },
      {
        price: 3,
        name: 'something2'
      }
    ]
  },
  {
    items: [
      {
        price: 2,
        name: 'something'
      },
      {
        price: 3,
        name: 'something2'
      }
    ]
  },
  {
    items: [
      {
        price: 2,
        name: 'something'
      },
      {
        price: 3,
        name: 'something2'
      }
    ]
  },
  {
    items: [
      {
        price: 2,
        name: 'something'
      },
      {
        price: 3,
        name: 'something2'
      }
    ]
  },
];

// console.log(invoice[0].items[0].price);
// console.log(invoice[1].items[0].price);
// console.log(invoice[1].items[1].price);

// console.log(invoice[0].items[0].name);
// console.log(invoice[1].items[0].name);
// console.log(invoice[1].items[1].name);

for (var index = 0; index < invoice.length; index++) {
  var invoice_items = invoice[index].items;
  console.log('invoice_items', invoice_items);

  for (var counter = 0; counter < invoice_items.length; counter++) {
    var current_item = invoice[index].items[counter];
    console.log('current_item', current_item);
  }

}








