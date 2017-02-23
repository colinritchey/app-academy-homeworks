const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// reader.question("Would you like some tea?", function (answer) {
//   console.log(`Your answer was ${answer}!`);
//
//   reader.question("Would you like some biscuits?", function (answer2){
//     console.log(`So you ${answer} want tea and you ${answer2} want coffee.`);
//     reader.close();
//   });
// });

function teaAndBiscuits () {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);

    reader.question('Would you like some biscuits?', (res2) => {
      second = res2;
      console.log(`You replied ${res2}.`);

      const firstRes = (first === 'yes') ? 'do' : 'don\'t';
      const secondRes = (second === 'yes') ? 'do' : 'don\'t';
      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
      reader.close();
    });
  });

}

teaAndBiscuits();
