const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//Object Destructuring
//2.1
//Destructure the first book object from the books array into variables called title, author and ISBN.

// const {title, author, ISBN} = books[0];
// console.log(title)

//2.2
/*Each book object has the keywords property. Destructure the first book object from the books 
array into a variable called tags. The tags variable should be assigned with the value of the keywords property.*/

// const { keywords:  tags } = books[0];
// console.log(tags)

//2.3
//The seventh book from the books array is missing the programmingLanguage property.
//Destructure the seventh book object (books[6]) into variables called language and
//programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

// const { language, programmingLanguage = 'unknown' } = books[6];

//2.4
//Below are two variables called bookTitle and bookAuthor. Reassign them with the values
//of the title and author properties of the first book object from the books array.

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

//2.5

// const { bookRating = books[0].thirdParty.goodreads.rating } = books[0];
// console.log(bookRating);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];
// console.log(bookRating);

//Array Destructuring Assignment

//2.6
// function printBookInfo(title, author, year = 'year unknown') {
//   console.log(`"${title} by ${author}, ${year}"`);
// }
// printBookInfo('Algorithms', 'Robert Sedgewick', 2011);

//1.1
//Destructure the books array into two variables called firstBook and secondBook.
// const [firstBook, secondBook] = books;

//1.2
//Destructure the books array into a variable called thirdBook. You must skip the first two books.
// const [, , thirdBook] = books;

//1.3
/* Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays 
into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable 
should store a number 4.19, and the ratingsCount variable should store a number 144584.*/

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(ratingsCount);

//1.4
/* Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, 
oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0. */

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

//Spread Operator

//3.1
// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

//3.2
// function spellWorld(str) {
//   console.log(...str);
// }
// spellWorld('JavaScript');

//Rest Pattern and parameters
//4.1
// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

//4.2

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);

//4.3
// function printBookAuthorsCount(title, ...authors) {
//   console.log(`"The book "${title}" has ${authors.length} authors`);
// }
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

//5.1 Short Circuiting
// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java' || 'no data available';
// }
// console.log(hasExamplesInJava(books[0]));

//5.2

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent &&
//     console.log(`"${books[i].title}" provides online content`);
// }

// for(let i = 0; i < books.length; i++) {
//   books[i].onlineContent ?? console.log(`${books[i].title} provides no data about its online content`)
// }

//Logical Assignments Operators
//7.1
// for(let i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// for(let i = 0; i < books.length; i++) {
//  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2)
// }

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (
NOT an array) and prints each of them to the console, along with the number of goals 
that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final);

//5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6.
// function printGoals(...players) {
//   console.log(`${players.length} goals were scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

//7.

// if (game.odds.team1 < game.odds.team2) {
//   console.log(`${game.team1} is likely to win!`);
// }

// game.odds.team1 < game.odds.team2 && console.log('Team 1 is likely to win');
// game.odds.team1 > game.odds.team2 && console.log('Team 2 is likely to win');

//8.1
// let pageSum = 0;
// for (let book of books) {
//   console.log((pageSum += book.pages));
// }

//8.2 and 8.3
// const allAuthors = [];

// for (const book of books) {
//   if (typeof book.author === 'string') {
//     allAuthors.push(book.author);
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
//   console.log(allAuthors);
// }

// for (const [index, author] of allAuthors.entries()) {
//   console.log(`${index + 1}. ${author}`);
// }

//9.1
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// // Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1]
// };

//9.2

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages
// };

//10.1 Optional Chaining

// function getFirstKeyWord(book) {
//   return book.keywords?.[0];
// }
// console.log(getFirstKeyWord(books[0]));

//11.1
// const entries = [];

// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }

class Solution {
  getTable(n) {
    // code here
    for (let i = 0; i < 10; i++) {
      return n++;
    }
  }
}
const table = new Solution();
console.log(table.getTable(5));
