// let student = {
//   firstName: 'Toks',
//   lastName: 'Fawibe',
//   age: 35,
//   hobbies: ['reading,', 'painting', 'programming'],
//   email: 'tafawibe@gmail.com',
//   webstite: 'toks.fawibe.io'
// };
// let { firstName, lastName, ...details } = student;
// console.log(firstName);
// console.log(lastName);
// console.log(details);

const moment = require('moment');
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
  let { lang, ...info } = event.queryStringParameters;

  let message = `${greeting[lang] ? greeting[lang] : greeting['en']} ${name}`;
  let response = {
    message: message,
    info: info,
    timestamp: moment().unix()
  };

  return { statusCode: 200, body: JSON.stringify(response) };
};
