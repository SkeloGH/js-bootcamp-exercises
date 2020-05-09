/*
Categories Game is a fast-paced word game.
In this game, you will be presented with different categories and asked
to come up with a word that begins with a certain letter in each category.

Stimulate your grey matter in this engaging game! The more you play,
the more categories you unlock.

Topics
- Iteration
- Hoisting


Basic
 1. Show welcome message
 req: window.alert, message

 2. Prompt shuffled letter
 req: window.prompt, input letter, variable (shuffled_letter)

 3. Initialize total
 req: variable (total), number (0)

 4. For each category (define category_name_n) 'Name', 'Last name', 'Animal', 'Flower/fruit', 'Country', 'Thing';
  req: constants, string;

     4.1 Prompt category word
     req: variable (category_word_n), window.prompt

   4.2 If category word starts with shuffled letter
    req: if, category_word_n, shuffled_letter, a method to check if the category_word_n starts with shuffled_letter


     4.2.1 Sum 100 to total
     req: total, sum
     total = total + 100


   4.3 Add the category_word_n to a list of words
   req: variable, string
   const category_word_1 = window.prompt(category_name_1)


 5. Show total
 req: window.alert, total

 6. For each category_name_n and category_word_n
  req: category_name_n, category_word_n, count_word_n

   6.1 Prompt count of people that used the same value, for category_word_n
    req: variable (count_word_n), window.prompt, string, Number

   6.2 Discount count_word_n from total
    req: operators, total, count_word_n

 7. If total is less than 0
  req: if, number, count_word_n, total

   7.1 set total as 0
   req: total, number

 8. Show total
 req: window.alert, total













Medium
1. Show welcome message


2. Prompt shuffled letter


3. If score is a number
  3.1 Set total as last score, or set as 0

4. If not
  4.1 Set total as 0

5. For each category
  5.1 Prompt category word
  5.2 If category word starts with shuffled letter
    5.2.1 Sum 100 to total

6. Show total

7. For each category
  7.1 Prompt count of people that used the same value
  7.2 If count is greater than 0 and total is greater than 0
    7.2.1 Subtract prompt value from total

8. Show total
9. Show score
10. Prompt to continue playing or finish
11. If continue
  11.1 Start from step 2
12. If finish
  12.1 Display final results








Advanced
- initialize
- display welcome message
- start shuffling letter
- listen to key press to stop counter
- stop rotation
- display the chosen letter for 3 seconds
- while there are available categories
  + start countdown
  + display category name
  + prompt category word
  + validate input
  + save input value
  + display feedback for error or success
  + discard category
- display results
- listen to key press to continue
- while there are available category values
  + prompt how many people used the same value
  + divide the result by the number of people
  + sum to the total score
  + display result
- prompt to continue playing or finish
- if finish
  + display final results

*/























// 1. Show welcome message
window.alert("Welcome to categories game!");

// 2. Prompt shuffled letter
const letter = window.prompt("What's the shuffled letter?");

// 3. Initialize total
let total = 0;

// 4. For each item in the category list
//   4.1 Prompt a category word
//   4.2 If category word starts with shuffled letter
//     4.2.1 Sum 100 to total
//   4.3 Add the word to a list of words
const categories = ['Name', 'Last name', 'Animal', 'Flower/fruit', 'Country', 'Thing'];
const words = [];
let word;

for (var iteration = 0; iteration < categories.length; iteration++) {
  word = window.prompt(categories[iteration]);
  if (word.indexOf(letter) > -1) {
    total = total + 100;
  }
  words.push(word);
}

// 5. Show total
alert('total: ' + total);

// 6. For each item in the category list
//   6.1 Prompt the count of people that used the same value
//   6.2 If count is a number greater than 0 and total minus count is greater or equal to 0
//     6.2.1 Subtract count from total
//   6.3 If total minus count is less than 0
//     6.2.1 set total as 0
let people_count;

for (var iterator = 0; iterator < categories.length; iterator++) {
  people_count = window.prompt('How many people used ' + words[iterator] + ' for ' + categories[iterator]);
  people_count = Number(people_count);
  if(typeof people_count === "number" && people_count > 0 && total - people_count >= 0) {
    total = total - people_count;
  } else if (typeof people_count === "number" && people_count > 0 && total - people_count < 0) {
    total = 0;
  }
}


// 7. Show total
alert('total: ' + total);




