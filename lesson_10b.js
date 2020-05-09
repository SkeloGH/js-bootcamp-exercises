/*
- Shopping cart
  - With objects: [
    {
      name: String,
      unit_price: Number,
      units: Number
    }
  ]
  - Prompt
  - Push values
  - Estimate cost

- item name
- item unit price
- item units


- Prompt 5 times
  - for each article, capture
  - name
  - unit price
  - units
  - save the values in objects

- calculate final cost
*/





const msg_1 = 'Enter item name';
const msg_2 = 'Enter unit price in cents';
const msg_3 = 'Enter units';
// - Shopping cart
const shopping_cart = [
  //   - With objects: [
  //     {
  //       name: String,
  //       unit_price: Number,
  //       units: Number
  //     }
  //   ]
  //   - Prompt
  //   - Push values
  {
    name: window.prompt(msg_1),
    unit_price: Number(window.prompt(msg_2)),
    units: Number(window.prompt(msg_3)),
  },
  {
    name: window.prompt(msg_1),
    unit_price: Number(window.prompt(msg_2)),
    units: Number(window.prompt(msg_3)),
  },
  {
    name: window.prompt(msg_1),
    unit_price: Number(window.prompt(msg_2)),
    units: Number(window.prompt(msg_3)),
  },
  {
    name: window.prompt(msg_1),
    unit_price: Number(window.prompt(msg_2)),
    units: Number(window.prompt(msg_3)),
  },
  {
    name: window.prompt(msg_1),
    unit_price: Number(window.prompt(msg_2)),
    units: Number(window.prompt(msg_3)),
  },
];





const shopping_cart = [];

shopping_cart.push({
  name: window.prompt(msg_1),
  unit_price: Number(window.prompt(msg_2)),
  units: Number(window.prompt(msg_3)),
});
shopping_cart.push({
  name: window.prompt(msg_1),
  unit_price: Number(window.prompt(msg_2)),
  units: Number(window.prompt(msg_3)),
});
shopping_cart.push({
  name: window.prompt(msg_1),
  unit_price: Number(window.prompt(msg_2)),
  units: Number(window.prompt(msg_3)),
});
shopping_cart.push({
  name: window.prompt(msg_1),
  unit_price: Number(window.prompt(msg_2)),
  units: Number(window.prompt(msg_3)),
});
shopping_cart.push({
  name: window.prompt(msg_1),
  unit_price: Number(window.prompt(msg_2)),
  units: Number(window.prompt(msg_3)),
});















  //   - Estimate cost
const totals = [
  shopping_cart[0].unit_price * shopping_cart[0].units,
  shopping_cart[1].unit_price * shopping_cart[1].units,
  shopping_cart[2].unit_price * shopping_cart[2].units,
  shopping_cart[3].unit_price * shopping_cart[3].units,
  shopping_cart[4].unit_price * shopping_cart[4].units,
];

const total = totals[0] + totals[1] + totals[2] + totals[3] + totals[4];
const total = totals;

window.alert('total: ' + total);





