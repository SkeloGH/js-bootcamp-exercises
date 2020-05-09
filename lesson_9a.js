window.alert('Welcome to categories game!');

const shuffled_letter = window.prompt('Shuffle letter');
var total = 0;

const category_1 = {
  name: 'Name',
  points: 25,
  subtract: {
    max: 25,
    mid: 15,
    min: 0,
  },
};
const category_2 = { name: 'Last name', points: 50, subtract: { max: 50, mid: 25, min: 0 } };
const category_3 = { name: 'Animal', points: 50, subtract: { max: 50, mid: 25, min: 0 } };
const category_4 = { name: 'Flower/fruit', points: 100, subtract: { max: 100, mid: 50, min: 0 } };
const category_5 = { name: 'Country/city', points: 75, subtract: { max: 75, mid: 25, min: 0 } };
const category_6 = { name: 'Thing', points: 25, subtract: { max: 25, mid: 15, min: 0 } };


// dot notation
const category_word_1 = window.prompt(category_1.name);
const category_word_2 = window.prompt(category_2.name);
const category_word_3 = window.prompt(category_3.name);
// bracket notation
const category_word_4 = window.prompt(category_4[ 'name' ]);
const category_word_5 = window.prompt(category_5[ 'name' ]);
const category_word_6 = window.prompt(category_6[ 'name' ]);

if (category_word_1.toLowerCase().endsWith(shuffled_letter.toLowerCase())) { total = total + category_1.points; }
if (category_word_2.toLowerCase().endsWith(shuffled_letter.toLowerCase())) { total = total + category_2.points; }
if (category_word_3.toLowerCase().endsWith(shuffled_letter.toLowerCase())) { total = total + category_3.points; }
if (category_word_4.toLowerCase().endsWith(shuffled_letter.toLowerCase())) { total = total + category_4.points; }
if (category_word_5.toLowerCase().endsWith(shuffled_letter.toLowerCase())) { total = total + category_5.points; }
if (category_word_6.toLowerCase().endsWith(shuffled_letter.toLowerCase())) { total = total + category_6.points; }

window.alert(total);

var count_word_1 = Number(window.prompt('How many ppl used '+ category_word_1 + ' for ' + category_1.name));
var count_word_2 = Number(window.prompt('How many ppl used '+ category_word_2 + ' for ' + category_2.name));
var count_word_3 = Number(window.prompt('How many ppl used '+ category_word_3 + ' for ' + category_3.name));
var count_word_4 = Number(window.prompt('How many ppl used '+ category_word_4 + ' for ' + category_4['name']));
var count_word_5 = Number(window.prompt('How many ppl used '+ category_word_5 + ' for ' + category_5['name']));
var count_word_6 = Number(window.prompt('How many ppl used '+ category_word_6 + ' for ' + category_6['name']));

if (count_word_1 > 2) {
  count_word_1 = category_1.subtract.max;
} else if (count_word_1 == 2) {
  count_word_1 = category_1.subtract.mid;
} else {
  count_word_1 = category_1.subtract.min;
}

if (count_word_2 > 2) {
  count_word_2 = category_2.subtract.max;
} else if (count_word_2 == 2) {
  count_word_2 = category_2.subtract.mid;
} else {
  count_word_2 = category_2.subtract.min;
}

if (count_word_3 > 2) {
  count_word_3 = category_3.subtract.max;
} else if (count_word_3 == 2) {
  count_word_3 = category_3.subtract.mid;
} else {
  count_word_3 = category_3.subtract.min;
}

if (count_word_4 > 2) {
  count_word_4 = category_4.subtract.max;
} else if (count_word_4 == 2) {
  count_word_4 = category_4.subtract.mid;
} else {
  count_word_4 = category_4.subtract.min;
}

if (count_word_5 > 2) {
  count_word_5 = category_5.subtract.max;
} else if (count_word_5 == 2) {
  count_word_5 = category_5.subtract.mid;
} else {
  count_word_5 = category_5.subtract.min;
}

if (count_word_6 > 2) {
  count_word_6 = category_6.subtract.max;
} else if (count_word_6 == 2) {
  count_word_6 = category_6.subtract.mid;
} else {
  count_word_6 = category_6.subtract.min;
}


total = total - (count_word_1 + count_word_2 + count_word_3 + count_word_4 + count_word_5 + count_word_6);

if (total < 0) {
  total = 0;
}

window.alert(total);