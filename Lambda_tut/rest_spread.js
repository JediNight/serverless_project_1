// function add(a, ...b) {
//   let sum = a;
//   b.forEach(num => (sum += num));
//   return sum;
// }

// console.log(add(2, 3, 4, 5));

let arr = [2, 3, 4, 5];

let arr2 = [...arr];
console.log(arr2);

const greeting = {
  en: 'Hello',
  fr: 'Bonjour',
  hi: 'Namaste',
  es: 'Hola',
  pt: 'Ola',
  it: 'Ciao',
  de: 'Hallo',
  yr: 'Ba wo ni'
};

exports.handler = async event => {
  let name = event.pathParameters.name;
  let { lang, ...info };
};
