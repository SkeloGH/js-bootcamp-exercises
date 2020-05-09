// capture 5 shopping list strings
// save the strings in an array
// display in console each of the items
// display in console the entire list, concatenated

/*
  syntax
  const myarray = [];
  myarray[0] = 'something'
  myarray.push('something');
*/

const shopping_list = [
  {
    name: window.prompt('item name'),
    price: window.prompt('item price')
  },
 { name: 'apple', price: 10},
];

window.alert('shopping list item #1 ' + shopping_list[0].name);
window.alert('shopping list item #2 ' + shopping_list[1].name);

window.alert(shopping_list.join(', '));









