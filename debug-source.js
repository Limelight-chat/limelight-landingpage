
const { helpbook, developer } = require('./source.config');

console.log("Helpbook File:", JSON.stringify(helpbook.toFumadocsSource().files[0], null, 2));
console.log("Developer File:", JSON.stringify(developer.toFumadocsSource().files[0], null, 2));
