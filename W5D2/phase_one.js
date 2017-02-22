function madLib(noun, adjective, verb) {
  console.log(`We shall ${noun.toUpperCase()} the ${adjective.toUpperCase()} ${verb.toUpperCase()}`);
}

// madLib('make', 'best', 'guac');
function isSubstring(searchString, subString) {
  return !!searchString.includes(subString);
}

// console.log(isSubstring("time to program", "time"));
//
// console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz (array){
  let result = [];
  array.forEach(function(el) {
    if (el % 15 === 0) {
      result.push(el);
    } else if (el % 5 === 0 ){
      result.push("fizz");
    }else if (el % 3 === 0){
      result.push("buzz");
    } else {
      result.push(el);
    }

  });

  return result;
}

// console.log( fizzBuzz([1,2,3,4,15,10]));

function isPrime(n) {
  if (n === 1){ return false; }

  let counter = 2;

  while (counter < n) {
    if (n % counter === 0){
      return false;
    }
    counter++;
  }

  return true;
}

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(5));
// console.log(isPrime(10));

function sumOfNPrimes(n){
  let counter = 1;
  let primeCount = 0;
  let listOfPrimes = [];
  let result = 0;

  while (listOfPrimes.length < n) {
    if (isPrime(counter)){
      listOfPrimes.push(counter);
      primeCount++;
    }
    counter++;
  }

  listOfPrimes.forEach(function (el) {
    result += el;
  });

  return result;
}

console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
console.log(sumOfNPrimes(5));
