window.alert('Welcome to categories game!');

const shuffled_letter = window.prompt('Shuffle letter');
var total = 0;
const positive_points = 100;

const category_name_1 = 'Name';
const category_name_2 = 'Last name';
const category_name_3 = 'Animal';
const category_name_4 = 'Flower/fruit';
const category_name_5 = 'Country';
const category_name_6 = 'Thing';

const category_word_1 = window.prompt(category_name_1);
const category_word_2 = window.prompt(category_name_2);
const category_word_3 = window.prompt(category_name_3);
const category_word_4 = window.prompt(category_name_4);
const category_word_5 = window.prompt(category_name_5);
const category_word_6 = window.prompt(category_name_6);

if (category_word_1.toLowerCase().indexOf(shuffled_letter.toLowerCase()) === 0) { total = total + positive_points; }
if (category_word_2.toLowerCase().indexOf(shuffled_letter.toLowerCase()) === 0) { total = total + positive_points; }
if (category_word_3.toLowerCase().indexOf(shuffled_letter.toLowerCase()) === 0) { total = total + positive_points; }
if (category_word_4.toLowerCase().indexOf(shuffled_letter.toLowerCase()) === 0) { total = total + positive_points; }
if (category_word_5.toLowerCase().indexOf(shuffled_letter.toLowerCase()) === 0) { total = total + positive_points; }
if (category_word_6.toLowerCase().indexOf(shuffled_letter.toLowerCase()) === 0) { total = total + positive_points; }

window.alert(total);

var count_word_1 = Number(window.prompt('How many ppl used '+ category_word_1 + ' for ' + category_name_1));
var count_word_2 = Number(window.prompt('How many ppl used '+ category_word_2 + ' for ' + category_name_2));
var count_word_3 = Number(window.prompt('How many ppl used '+ category_word_3 + ' for ' + category_name_3));
var count_word_4 = Number(window.prompt('How many ppl used '+ category_word_4 + ' for ' + category_name_4));
var count_word_5 = Number(window.prompt('How many ppl used '+ category_word_5 + ' for ' + category_name_5));
var count_word_6 = Number(window.prompt('How many ppl used '+ category_word_6 + ' for ' + category_name_6));

if (count_word_1 > 2) {
  count_word_1 = 75;
} else if (count_word_1 == 2) {
  count_word_1 = 50;
} else {
  count_word_1 = 0;
}

if (count_word_2 > 2) {
  count_word_2 = 75;
} else if (count_word_2 == 2) {
  count_word_2 = 50;
} else {
  count_word_2 = 0;
}

if (count_word_3 > 2) {
  count_word_3 = 75;
} else if (count_word_3 == 2) {
  count_word_3 = 50;
} else {
  count_word_3 = 0;
}

if (count_word_4 > 2) {
  count_word_4 = 75;
} else if (count_word_4 == 2) {
  count_word_4 = 50;
} else {
  count_word_4 = 0;
}

if (count_word_5 > 2) {
  count_word_5 = 75;
} else if (count_word_5 == 2) {
  count_word_5 = 50;
} else {
  count_word_5 = 0;
}

if (count_word_6 > 2) {
  count_word_6 = 75;
} else if (count_word_6 == 2) {
  count_word_6 = 50;
} else {
  count_word_6 = 0;
}


total = total - (count_word_1 + count_word_2 + count_word_3 + count_word_4 + count_word_5 + count_word_6);

if (total < 0) {
  total = 0;
}

window.alert(total);