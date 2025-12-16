const { get, average, wordinfo, deletefromderver } = require('./crud.js');
const rl = require('readline-sync');
function menu() {
  let choice;
  while (true) {
    choice = rl.question(`MENU
        press 1. for GET
        press 2. for POST
        press 3. for PUT
        press 4. for DELETE
        `);
    if (
      choice === '1' ||
      choice === '2' ||
      choice === '3' ||
      choice === '4' ||
      choice === '5'
    ) {
      break;
    } else {
      console.log('press 1-5 only');
    }
  }
  switch (choice) {
    case '1':
      get();
      break;
    case '2':
      const obj = rl.question('Enter your obj: ');
      average(obj);
      break;
    case '3':
      const word = rl.question('Enter a word: ');
      wordinfo(word);
      break;
    case '4':
      const user = rl.question('Enter user name: ');
      deletefromderver('user');
    case '5':
  }
}
menu();
