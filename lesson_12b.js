/*
Given the following, calculate the shopping cart cost
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


