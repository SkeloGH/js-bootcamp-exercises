window.alert('Welcome to categories game!');

const shuffled_letter = window.prompt('Enter the shuffled letter');

var total = 0;

const category_name_1 = 'Name';
const category_name_2 = 'Last name';
const category_name_3 = 'Animal';
const category_name_4 = 'Flower/Fruit';
const category_name_5 = 'Country';
const category_name_6 = 'Thing';

const category_word_1 = window.prompt(category_name_1);
const category_word_2 = window.prompt(category_name_2);
const category_word_3 = window.prompt(category_name_3);
const category_word_4 = window.prompt(category_name_4);
const category_word_5 = window.prompt(category_name_5);
const category_word_6 = window.prompt(category_name_6);

// TODO: validate shuffled_letter has value
// TODO: validate category_word_1 has value
// TODO: support capitalization

if (category_word_1.indexOf(shuffled_letter) > -1) {
  total = total + 1;
}
if (category_word_2.indexOf(shuffled_letter) > -1) {
  total = total + 1;
}
if (category_word_3.indexOf(shuffled_letter) > -1) {
  total = total + 1;
}
if (category_word_4.indexOf(shuffled_letter) > -1) {
  total = total + 1;
}
if (category_word_5.indexOf(shuffled_letter) > -1) {
  total = total + 1;
}
if (category_word_6.indexOf(shuffled_letter) > -1) {
  total = total + 1;
}

window.alert(total);

var count_word_1 = Number(window.prompt(category_word_1));
var count_word_2 = Number(window.prompt(category_word_2));
var count_word_3 = Number(window.prompt(category_word_3));
var count_word_4 = Number(window.prompt(category_word_4));
var count_word_5 = Number(window.prompt(category_word_5));
var count_word_6 = Number(window.prompt(category_word_6));

total = total - count_word_1;
total = total - count_word_2;
total = total - count_word_3;
total = total - count_word_4;
total = total - count_word_5;
total = total - count_word_6;

if (total < 0) {
  total = 0;
}

window.alert(total);
