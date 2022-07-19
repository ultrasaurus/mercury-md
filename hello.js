import Mercury from '@postlight/mercury-parser';
console.log("hello");

let url = "http://example.com"
Mercury.parse(url).then(result => console.log(result));


